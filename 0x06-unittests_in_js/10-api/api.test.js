const { expect } = require('chai');
const request = require('request');
const baseUrl = 'http://localhost:7865';

describe('Index Page', () => {
  it('should return status code 200', (done) => {
    request(`${baseUrl}/`, (error, response, body) => {
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
    request(`${baseUrl}/a`, (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(404);
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });
});

describe('Cart Page', () => {
  it('should return status code 200 when ID is a number', (done) => {
    request(`${baseUrl}/cart/123`, (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('should return status code 404 when ID is not a number', (done) => {
    request(`${baseUrl}/cart/abc`, (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(404);
      expect(body).to.equal('Not found');
      done();
    });
  });

  it('should return status code 404 when ID is a decimal', (done) => {
    request(`${baseUrl}/cart/12.34`, (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(404);
      expect(body).to.equal('Not found');
      done();
    });
  });
});

describe('Available Payments', () => {
  it('should return status code 200 and the correct JSON structure', (done) => {
    request(`${baseUrl}/available_payments`, (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      expect(response.headers['content-type']).to.include('application/json');
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login Page', () => {
  it('should return status code 200 and the correct message when username is provided', (done) => {
    request.post({
      url: `${baseUrl}/login`,
      json: { userName: 'JohnDoe' }
    }, (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome JohnDoe');
      done();
    });
  });

  it('should return status code 400 when username is not provided', (done) => {
    request.post({
      url: `${baseUrl}/login`,
      json: {}
    }, (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(400);
      expect(body).to.equal('Username is required');
      done();
    });
  });
});
