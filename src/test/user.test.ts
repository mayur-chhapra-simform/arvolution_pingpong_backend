import app from '../index';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);

const expect = chai.expect;


describe('2. Create User API Request', () => {
  it('should return response on call', () => {
    return chai.request(app).post('/api/v1/user')
    .send({
      "player_1": "Justin",
      "player_2": "Hiren"
    })
  .then((res: any) => {
    expect(res).to.have.status(200);
    })
  })
})
