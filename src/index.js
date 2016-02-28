import _ from 'lodash';
import validate from './utils/validate';
import url from './utils/url';
import elements from './utils/elements';
import regex from './utils/regex';

let html = null;

const scrape = (host, elems, callback) => {

  validate(elems, (error) => {

    if (error) {
      callback(error);
    }

    url (host, (error, html) => {

      if (error) {
        callback(error);
      }

      html = html;

      let count = 0;
      let numOfElements = _.size(elems);
      let data = {};

      _.forEach(elems, (element, key) => {

        count++;

        if (element.start && element.end) {

          // Send it off to the regex utility:
          regex(html, element, (error, result) => {
            data[key] = result;
          });

        } else if (element.el) {

          elements(html, element, (error, result) => {

            if (error) {
              data[key] = null;
            }

            data[key] = result;
          });

        } else {

          callback('Please check your configuration.');
        }

        if (count === numOfElements) {
          callback(false, data);
        }
      });
    });
  });
};

module.exports = scrape;
