import request from 'request';

/**
 * Grabs URL, and returns body.
 * @param  {string}   host     URL of body we are grabbing.
 * @param  {Function} callback Returns data and error.
 */
const url = (host, callback) => {

  // Use request to grab the host's body.
  request(host, (error, response, body) => {

    console.log(response.statusCode);

    // If error, or statusCode is off
    if (error || response.statusCode !== 200) {
      callback(error);
    }

    callback(false, body);
  });
}

export default url;
