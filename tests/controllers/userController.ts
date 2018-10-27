import { describe, it } from 'mocha';
import { expect } from 'chai';
import * as httpMocks from 'node-mocks-http';
import { stub, createSandbox, SinonSandbox, spy } from 'sinon';

import userController from '../../src/controllers/userController';
import { User } from '../../src/entities/user';
import * as typeorm from 'typeorm';


describe('userController:', () => {

  function createFakeRepository() {
    return {
        find: function() { return [{'a': 1}]},
    }
  };

  let sandbox: SinonSandbox;

  beforeEach(() => {
    sandbox = createSandbox();
    const fakeRepository = createFakeRepository();
    sandbox.stub(typeorm, 'getRepository').withArgs(User).returns(fakeRepository);
  });

  describe('list:', () => {
    it('should return list of users', async () => {
      const { req, res } = httpMocks.createMocks();
     
      await userController.getAllUsers(req, res);
      const results = JSON.parse(res._getData())

      expect(res.statusCode).to.equal(200)
      expect(results).to.have.key('users')
    })

  });
});