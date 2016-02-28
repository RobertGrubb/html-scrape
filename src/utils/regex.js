import { find } from 'needler';

const regex = (html, element, callback) => {

  let options = {
    haystack: html,
    header: element.start,
    footer: element.end
  }

  find(options, (error, result) => {

    if (error) {
      callback(false, null);
    }

    if (result) {
      callback(false, result);
    } else {
      callback(false, null);
    }
  });
}

export default regex;
