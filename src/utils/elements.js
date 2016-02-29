import { jsdom } from 'jsdom';
import jquery from 'jquery';

/**
 * Grabs value by element id/class name
 * @param  {string}   html     Body of host
 * @param  {object}   element  Object with info on extraction of value.
 * @param  {Function} callback Returns error and results.
 */
const elements = (html, element, callback) => {

  // Set body as a document
  let document = jsdom(html, {});
  let window = document.defaultView;

  // Instantiate JQuery
  let $ = jquery(window);

  // If element exists
  if ($(`${element.el}`).length) {

    // Return the text of that element.
    callback(false, $(`${element.el}`).text());

  // If it wasn't found
  } else {
    callback(`${element.el} does not exist in DOM.`, null);
  }
};

export default elements;
