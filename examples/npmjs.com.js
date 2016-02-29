// Require scrape
var scrape = require('../lib');

// Setup elements
var elements = {
  title: { start: '<title>', end: '</title>' },
  explicit: { el: '#explicit > a' }
}

// Run scrape:
scrape ('https://npmjs.com', elements, function (error, data) {

  // If error occurs, log it.
  if (error) {
    console.log(error);

  // If data is returned, log it.
  } else {
    console.log(data);
  }
});
