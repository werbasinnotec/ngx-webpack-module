'use strict';

// Require NPM Modules
const exec = require('exec');
const processenv = require('processenv');

if (processenv('POEDITOR_ACTIVE')) {
  exec([ './node_modules/.bin/innotec-i18n-poeditorimport'], (err) => {
    if (err) {
      throw err;
    }

    exec('cp src/public/locale/*.* /usr/share/nginx/html/locale/', (err2) => {
      if (err2) {
        throw err2;
      }

      console.log('PO Editor download is sucessfully')
    })
  });
} else {
  console.log('PO Editor download is deactivated. When you like to activate, set the ENV POEDITOR_ACTIVE, please');
}
