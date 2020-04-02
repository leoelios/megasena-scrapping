<div align="center">
  <h1>Mega-Sena Scrapping</h1>
</div>

Scrapping all historic result data of raffle and saving in mongodb database,
already exists the [Official API of Loteria](https://apiloterias.com.br/), but this project it will be done for student purposes.

## 💪 What is the motivation ?

The project is building for filter all results history using a API for GET the
data filtered according with the seted params in search.
This is a start and a little part of the system like a all.

## Libraries and Frameworks

- PuppeteerJs (Chrome automation)
- Axios (GET and POST requests)
- Cheerio (Manipulation of data returned of Axios and Puppeteer)

## ✍ Pre-requisites

- [Node](https://nodejs.org/en/download/releases/) (Recommended v12.x)
- [MongoDB](https://www.mongodb.com/cloud/atlas/signup)

## 👉 Installing and Running

1. Cloning the repository
   <br> `git clone https://github.com/leoelias023/megasena_scrapping.git`

2. Installing all dependences
   <br> `yarn`

3. Set your [connection string](https://docs.mongodb.com/manual/reference/connection-string/#connection-string-formats) mongodb
   <br>Config.js | In Line: 830<br>
   Example: `mongodb://localhost:27017`

4. Running Project
   <br> `yarn start`
