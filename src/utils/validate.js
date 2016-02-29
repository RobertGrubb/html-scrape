import _ from 'lodash';

/**
 * Validates that config is present, and has data.
 * @param  {object}   elements Object that holds element data.
 * @param  {Function} callback Returns error
 */
const validate = (elements, callback) => {

  // If no object is present.
  if (!elements) {
    callback('No elements to scrape.');

  // If there is not a child object.
  } else if (_.size(elements) < 1) {
    callback('Elements object was found, but no elements were specified.');
  }

  // If all is well, send error as false.
  callback(false);
}

export default validate;
