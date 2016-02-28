import { jsdom } from 'jsdom';
import jquery from 'jquery';

const elements = (html, element, callback) => {
  let document = jsdom(html, {});
  let window = document.defaultView;
  let $ = jquery(window);

  if ($(`${element.el}`).length) {
    callback(false, $(`${element.el}`).text());
  } else {
    callback(`${element.el} does not exist in DOM.`, null);
  }
};

export default elements;
