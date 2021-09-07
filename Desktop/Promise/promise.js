const https = require('https');

// Our Long Operation  
function fData(url) {
  const pToken = new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';
      response.on('data', (rd) => data = data + rd);
      response.on('end', () => resolve(data));
    });
  });
  return pToken;
}

console.log('Program Starts');

const pToken = fData('https://www.leewayhertz.com/');
pToken.then((pData) => {
	console.log(pData.length);
})

console.log('Program Ends'); 