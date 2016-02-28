var scrape = require('../lib');

var elements = {
  title: { start: '<title>', end: '</title>' },
  explicit: { el: '#explicit > a' }
}

scrape ('https://npmjs.com', elements, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
