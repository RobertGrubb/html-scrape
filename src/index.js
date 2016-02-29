import _ from 'lodash';
import validate from './utils/validate';
import url from './utils/url';
import elements from './utils/elements';
import regex from './utils/regex';

/**
 * Validates host and elements, then sends body
 * to a utility depending on the config provided.
 * @param  {string}   host     website url
 * @param  {object}   elems    tags to scrape
 * @param  {Function} callback sends back error and results.
 */
const scrape = (host, elems, callback) => {

  /**
   * Takes the elements passed through and Validates
   * that the object is actually there, and has data.
   */
  validate(elems, (error) => {

    if (error) {
      callback(error);
    }

    /**
     * Grabs the body from the host specified. returns
     * an error, and the html body.
     */
    url (host, (error, html) => {

      if (error) {
        callback(error);
      }

      let count = 0;
      let numOfElements = _.size(elems);
      let data = {};

      /**
       * Iterate through the elements, and send them
       * to the correct utilities for scraping.
       */
      _.forEach(elems, (element, key) => {

        count++;

        // If start and end exist, use the needle method.
        if (element.start && element.end) {

          // Send it off to the regex utility:
          regex(html, element, (error, result) => {
            data[key] = result;
          });

        // If el exists, use the elements method.
        } else if (element.el) {

          elements(html, element, (error, result) => {

            /**
             * If error occurs, return null rather than
             * an error. This way, it will be skipped and no
             * fatal errors will be encountered.
             */
            if (error) {
              data[key] = null;
            }

            data[key] = result;
          });

        } else {

          // If something was missing in the config.
          callback('Please check your configuration.');
          return;
        }

        /**
         * Keep track of the current count. If it matches
         * the length of the elements object length, then
         * we are done, and we need to send our callback.
         */
        if (count === numOfElements) {
          callback(false, data);
        }
      });
    });
  });
};

module.exports = scrape;
