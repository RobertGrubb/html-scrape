# HTML Scrape
----------------

A tool that will scrape html webpages with ease.

To install:

`npm install html-scrape`

Example of usage for finding a value in between something:

	var scrape = require('html-scrape');

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

Above would return:

	{
		title: 'Google',
		meta: 'Search the world\'s information, including webpages, images, videos and more. Google has many special features to help you find exactly what you\'re looking for.'
	}

## options
> **host** [string | required] - URL of webpage you are wanting to scrape.

> **elements** [string | required] - String that you will be searching.

> > **start** [string | required] - String before the value you are searching for. For instance - `<title>value</title>`: In this example, the header would be `<title>`

> > **end** (find, replace) [string | required] - String after the value you are searching for. For instance - `<title>value</title>`: In this example, the header would be `</title>`

> **callback** [function] - Function that returns data after scraping is finished.

> > **error** [string] - Hold error if one was encountered during the scraping process.

> > **data** [string] - Holds object of data returned from the scraper.
