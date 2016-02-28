import { find } from 'needler';
import request from 'request';
import _ from 'lodash';

const scrape = (host, elems, callback) => {

  fetchUrl (host, (error, html) => {
    if (error) {
      callback(error);
    }

    validateElements(elems, (error) => {
      if (error) {
        callback(error);
      }

      let count = 0;
      let numOfElements = _.size(elems);
      let data = {};

      _.forEach(elems, (element, key) => {

        count++;

        let options = {
          haystack: html,
          header: element.start,
          footer: element.end
        }

        find(options, (error, result) => {

          if (result) {
            data[key] = result;
          }

          if (count === numOfElements) {
            callback(false, data);
          }
        });
      });
    });
  });
}

const fetchUrl = (host, callback) => {
  request(host, (error, response, body) => {
    if (error) {
      callback(error);
    }

    callback(false, body);
  });
}

const validateElements = (elements, callback) => {
  if (!elements) {
    callback('No elements to scrape.');
  } else if (_.size(elements) < 1) {
    callback('Elements object was found, but no elements were specified.');
  }

  callback(false);
}

export { scrape };
