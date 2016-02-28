import request from 'request';

const url = (host, callback) => {
  request(host, (error, response, body) => {
    if (error) {
      callback(error);
    }

    callback(false, body);
  });
}

export default url;
