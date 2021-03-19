import app from '../index';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);

const expect = chai.expect;

describe('3. Create User API Request', () => {
  it('should return response on call', () => {
    return chai.request(app).post('/api/v1/game')
    .send(
      {
        "player_ids": ["6054824c6049814ae8272c68", "6054824c6049814ae8272c69"],
        "score": [8, 4],
        "game_id": "60548a156049814ae8272c6a"
      }
    ).then((res: any) => {
    expect(res).to.have.status(200);
    })
  })
})