const _ = require('lodash');
const axios = require('axios');
const fs = require('fs');
const latest_eth = JSON.parse(fs.readFileSync('latest_eth.json'));

const api_keys = ['VRCSQX7YMTNGEG3P','DL79S4Y24POQRMF1','OIN4E11C4I1N65AW','0AEHY2QPEK6IKNHJ','7KIUASF7XFS1ISZ2','N3VXH0TSLC03PMKS'];
const api_key = _.shuffle(api_keys)[0];
;
axios.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=ETH&to_currency=USD&apikey='+api_key)
  .then(function (response) {
    // handle success
    let data = response.data['Realtime Currency Exchange Rate'];
    console.log(latest_eth['5. Exchange Rate'], data['5. Exchange Rate']);
    let percent = (data['5. Exchange Rate'] - latest_eth['5. Exchange Rate']) / latest_eth['5. Exchange Rate'];
    console.log(percent * 100,'%');
    fs.writeFile("latest_eth.json", JSON.stringify(data), function(err) {
      if(err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    }); 
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });