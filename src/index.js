const axios = require('axios').default;

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

function getData(x) {
  axios
    .get(
      `http://loterias.caixa.gov.br/wps/portal/loterias/landing/megasena/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOLNDH0MPAzcDbwMPI0sDBxNXAOMwrzCjA0sjIEKIoEKnN0dPUzMfQwMDEwsjAw8XZw8XMwtfQ0MPM2I02-AAzgaENIfrh-FqsQ9wNnUwNHfxcnSwBgIDUyhCvA5EawAjxsKckMjDDI9FQE-F4ca/dl5/d5/L2dBISEvZ0FBIS9nQSEh/pw/Z7_HGK818G0KO6H80AU71KG7J0072/res/id=buscaResultado/c=cacheLevelPage/=/?timestampAjax=1585850726446&concurso=${x}`,
      config
    )
    .then(function (response) {
      // handle success
      console.log(response.data.resultado);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

let xs = 0;
setInterval(async () => {
  xs += 1;
  await getData(xs);
}, 500);
