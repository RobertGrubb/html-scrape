var expect = require('chai').expect;
var scrape = require('../lib');

describe("Scrape Needle Method", function() {
  it("should grab the title of npmjs.com", function() {

    var element = {
      title: { start: '<title>', end: '</title>' }
    }

    scrape ('https://npmjs.com', element, function (error, data) {
      expect(data.title).to.equal('npm');
    });
  });

  it("should error because not all options were given", function() {

    var element = {
      title: { start: '<title>' }
    }

    scrape ('https://npmjs.com', element, function (error, data) {
      expect(error).to.be.a('string');
    });
  });
});

describe("Scrape Element Method", function() {
  it("should return 'node.js'", function() {

    var element = {
      npm: { el: '#what-npm-is-for' }
    }

    scrape ('https://npmjs.com', element, function (error, data) {
      expect(data.npm).to.equal('node.js');
    });
  });

  it("should return null because element doesn't exist", function() {

    var element = {
      title: { el: '#asdfasdfasdfasdfasdf' }
    }

    scrape ('https://npmjs.com', element, function (error, data) {
      expect(data.title).to.equal(null);
    });
  });
});
