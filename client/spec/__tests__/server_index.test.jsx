import request from 'supertest';
import app from '../../../server/app';

describe('Test the root endpoint', () => {
  test('should respond with statusCode 200 on GET', () => (
    request(app)
      .get('/')
      .expect(200)
      .catch(err => console.error(err)) // eslint-disable-line no-console
  ));

  test('should serve up static html on successful request', () => (
    request(app)
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.text.includes('<html>')).toBe(true);
      })
      .catch(err => console.error(err)) // eslint-disable-line no-console
  ));
});

describe('Test the getballs endpoint', () => {
  test('should respond with statusCode 200 on GET', () => (
    request(app)
      .get('/getballs')
      .expect(200)
      .catch(err => console.error(err)) // eslint-disable-line no-console
  ));
});

describe('Test the newgame endpoint', () => {
  test('should respond with statusCode 200 on GET', () => (
    request(app)
      .get('/newgame')
      .expect(200)
      .catch(err => console.error(err)) // eslint-disable-line no-console
  ));
});
