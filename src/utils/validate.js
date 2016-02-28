import _ from 'lodash';

const validate = (elements, callback) => {
  if (!elements) {
    callback('No elements to scrape.');
  } else if (_.size(elements) < 1) {
    callback('Elements object was found, but no elements were specified.');
  }

  callback(false);
}

export default validate;
