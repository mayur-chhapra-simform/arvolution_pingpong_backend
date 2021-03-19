import app from '../index';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);

const expect = chai.expect;
app.on('app_started', () => {
  describe('1. Create User API Request', () => {
    it('should return response on call', () => {
      return chai.request(app).post('/api/v1/game')
      .send({
        "name": "game-1"
      })
    .then((res: any) => {
      expect(res).to.have.status(200);
      })
    })
  })
})