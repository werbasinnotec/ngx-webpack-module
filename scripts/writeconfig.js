'use strict';

const CryptoJS = require('crypto-js');
const processenv = require('processenv');
const path = require('path');
const fs = require('fs');

const writeObject = {};

// Define your Settings
writeObject.clientId = processenv('INNOTEC_CLIENTID');
writeObject.clientSecret = processenv('INNOTEC_CLIENTSECRET');
writeObject.endpoint = processenv('INNOTEC_ENDPOINT');
writeObject.paypal_clientId = processenv('PAYPAL_CLIENTID');
writeObject.google_clientId = processenv('GOOGLE_CLIENTID');
writeObject.facebook_clientId = processenv('FACEBOOK_CLIENTID');
writeObject.forgotPassurl = processenv('FORGOTPASSSURL');
writeObject.newaccounturl = processenv('INNOTEC_NEWACCOUNTURL');
writeObject.host = 'https://api.v2.werbasinnotec.com';

if (writeObject.endpoint === 'dev') {
  writeObject.host = 'https://api.dev.v2.werbasinnotec.com';
}

let filepath = path.resolve('./src/public/assets/enviroments.json');
let secret = 'sdfsdjfkkjfghkdfhfkjdkjJKHFKJsjkdfhkjdfgJkdsfjhbvjhsfdbfjsdhfbHJDSFBJhbfjsdbfjdhsfjhsdBFJHDSBnjcsvmdfv';

if (processenv('CONTAINER')) {
  filepath = path.resolve('/usr/share/nginx/html/assets/enviroments.json');
}

fs.writeFile(filepath, CryptoJS.AES.encrypt(JSON.stringify(writeObject), secret), (err) => {
  if (err) {
    throw err;
  }

  console.log('Enviroments File is written successfully....');
});
