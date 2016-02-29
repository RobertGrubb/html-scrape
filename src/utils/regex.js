import { find } from 'needler';

/**
 * Use needler to look for value in between start and end.
 * @param  {string}   html     body of host
 * @param  {object}   element  Holds data for how to extract value.
 * @param  {Function} callback Returns error and result.
 */
const regex = (html, element, callback) => {

  // Set options for needler
  let options = {
    haystack: html,
    header: element.start,
    footer: element.end
  }

  /**
   * Needler.find() takes options, and looks through the body
   * to find the value between header and footer.
   */
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
