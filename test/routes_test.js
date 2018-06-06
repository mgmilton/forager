const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app.js');
const environment = process.env.NODE_ENV || 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);
chai.use(chaiHttp);

describe('Client Routes', () => {

  it('should return the home page with text', () => {
    return chai.request(server)
    .get('/')
    .then((response) => {
      response.should.have.status(200);
      response.should.be.html;
    })
    .catch((error) => {
      throw error;
    });
  });
});

describe('POST /wildlife', () => {
    before((done) => {
    database.migrate.latest()
      .then(() => done())
      .catch(error => {
        throw error;
      })
      .done();

    });

    beforeEach((done) => {
    database.seed.run()
      .then(() => done())
      .catch(error => {
        throw error;
      })
      .done();
    });
  
    it('creates a wildlife finding', () => {
      return chai.request(server)
        .post('/wildlife')
        .send({
          wildlife: {name: "Rhubarb",
          species: "",
          longitude:  122.63,
          latitude:  43.9364,
          location_description:  "Arid patch on a SW hill near the entrance of Reynolds Park",
          wild_life_description: "Broad curly leafs, 18 inch high red stalks"}
        })
        .then((response) => {
          response.should.have.status(200);
          response.body[0].should.be.a('object');
          response.body[0].name.should.equal('Rhubarb');
          response.body[0].species.should.equal("");
          response.body[0].longitude.should.equal(122.63);
          response.body[0].latitude.should.equal(43.9364);
          response.body[0].location_description.should.equal("Arid patch on a SW hill near the entrance of Reynolds Park");
        })
        .catch((error) => {
          throw error;
        });
    });
  });

  describe('DELETE /wildlife/:id', () => {
    it('deletes a wildlife finding by id', () => {
      return chai.request(server)
          .del('/wildlife/44')
          .then((response) => {
            response.should.have.status(200)
          })
          .catch((error) => {
            throw error;
          });
    });
  });


  describe('DELETE /wildlife/', () => {
    it('returns a 404 when no id is passed', () => {
      return chai.request(server)
          .del('/wildlife/')
          .then((response) => {
            response.should.have.status(404)
          })
          .catch((error) => {
            throw error;
          });
    });
  });
});
