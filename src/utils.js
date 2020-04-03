const axios = require('axios').default;
const puppeteer = require('puppeteer');

const { save } = require('./utils/manipulation');

const config = {
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Accept-Encoding': 'gzip, deflate',
    Cookie:
      'ai_user=p65zr|2020-04-01T03:02:02.129Z;' +
      ' _ga=GA1.4.43054493.1585710122;' +
      '_gid=GA1.4.1863526994.1585710122;' +
      '_fbp=fb.2.1585710122463.1380396517;' +
      'security=true;' +
      'JSESSIONID=0000AG4JHGsI-a3A6DXfpjXoSBQ:19798vrci;' +
      '_pk_ref.4.968f=%5B%22%22%2C%22%22%2C1585847706%2C%22https%3A%2F%2Fwww.google.com%2F%22%5D;' +
      '_pk_ses.4.968f=*;' +
      '_pk_id.4.968f=48bde4c2bfb3813a.1585710123.5.1585850691.1585847706.;' +
      'ai_session=n8sNw|1585847706182|1585850691200.405',
  },
};

let lim = 1;
let tempMaxNumberDraw;

async function getData(maxNumberDraw) {
  if (maxNumberDraw) {
    tempMaxNumberDraw = maxNumberDraw;
  }
  if (lim <= tempMaxNumberDraw) {
    // Generate date
    const dateNow = new Date().getTime();
    axios
      .get(
        `http://loterias.caixa.gov.br/wps/portal/loterias/landing/megasena/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOLNDH0MPAzcDbwMPI0sDBxNXAOMwrzCjA0sjIEKIoEKnN0dPUzMfQwMDEwsjAw8XZw8XMwtfQ0MPM2I02-AAzgaENIfrh-FqsQ9wNnUwNHfxcnSwBgIDUyhCvA5EawAjxsKckMjDDI9FQE-F4ca/dl5/d5/L2dBISEvZ0FBIS9nQSEh/pw/Z7_HGK818G0KO6H80AU71KG7J0072/res/id=buscaResultado/c=cacheLevelPage/=/?timestampAjax=${dateNow}&concurso=${lim}`,
        config
      )
      .then(async (response) => {
        // handle success
        const { concurso, dataStr, resultado } = response.data;

        // Spliting the string result for array value on save
        const arrayResult = resultado.split('-');

        const resultForSave = {
          id: concurso,
          dateDraw: dataStr,
          result: arrayResult,
        };

        await save(resultForSave);
        lim += 1;
        getData();
      })
      .catch(() => {
        // handle error
        console.log('error on request');
        setTimeout(3000);
        getData();
      });
  } else {
    console.log('The scrapping is finalized with success. Good Bye!');
  }
}

async function getLastDraw() {
  const browser = puppeteer.launch({
    headless: true,
  });

  const page = await (await browser).newPage();
  await page.goto(
    'http://loterias.caixa.gov.br/wps/portal/loterias/landing/megasena/'
  );
  let textLastDraw = await page.evaluate(() => {
    return document.querySelector(
      '#conteudoresultado > div.content-section.section-text.with-box.no-margin-bottom > div > h2 > span'
    ).innerHTML;
  });
  textLastDraw = textLastDraw.slice(9, 20).trim();
  return textLastDraw;
}

module.exports = {
  getData,
  getLastDraw,
};
