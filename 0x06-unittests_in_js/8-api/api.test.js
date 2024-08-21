const { expect } = require('chai');
const request = require('request');
const baseUrl = 'http://localhost:7865';

describe('Index Page', () => {
  it('should return status code 200', (done) => {
    request(`${baseUrl}/`, (error, response, _) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request(`${baseUrl}/`, (error, response, body) => {
      if (error) return done(error);
      expect(body).to.equal('Welcome to the payment system');
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });

  it('should return status code 404', (done) => {
    request(`${baseUrl}/a`, (error, response, _) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(404);
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });
});
