var scrape = require('../lib');

var elements = {
  title: { start: '<title>', end: '</title>' },
  meta: { start: '<meta content="', end: '"'}
}

scrape ('http://www.google.com', elements, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
