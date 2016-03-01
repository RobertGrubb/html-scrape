# HTML Scrape [![Build Status](https://travis-ci.org/RobertGrubb/html-scrape.svg?branch=master)](https://travis-ci.org/RobertGrubb/html-scrape)
----------------

A tool that will scrape html webpages with ease.

To install:

`npm install html-scrape`

Example of usage for finding a value in between something:

	var scrape = require('html-scrape');

	var elements = {
		title: { start: '<title>', end: '</title>' },
		explicit: { el: '#explicit > a' }
	}

	scrape ('https://npmjs.com', elements, function (error, data) {
		if (error) {
			console.log(error);
		} else {
			console.log(data);
		}
	});

Above would return:

	{ title: 'npm', explicit: 'packages people \'npm install\' a lot'  }

## options
> **host** [string | required] - URL of webpage you are wanting to scrape.

> **elements** [string | required] - String that you will be searching.

> > **start** String before the value you are searching for. For instance - `<title>value</title>`: In this example, the header would be `<title>`. **If using the needle method, both start and end are required**

> > **end** String after the value you are searching for. For instance - `<title>value</title>`: In this example, the header would be `</title>`. **If using the needle method, both start and end are required**

> > **el** [string] Element id/class to get value of. Can also be declared like: `#el > a` to get value of the link.

> **callback** [function] - Function that returns data after scraping is finished.

> > **error** [string] - Hold error if one was encountered during the scraping process.

> > **data** [string] - Holds object of data returned from the scraper.
