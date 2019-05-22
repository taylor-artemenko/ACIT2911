const request = require('supertest')("http://localhost:8080");
const assert = require('chai').assert;
const expect = require('chai').expect;
const nock = require('nock');
const superagent = require('superagent');
const supertest = require('supertest');
const should = require('chai').should;

var chai = require('chai'), chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('./app.js');
const tdd = require('./arrMethods.js');

const list = [{item: "item1", price: 100}];
let item = tdd.arrRandom(list);
console.log(item);

describe('GET /', function () {
    it("should return landing page", function (done) {
        chai.request(app)
            .get('/')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('GET /groceries', function () {
    it("should return grocery webpage", function (done) {
        chai.request(app)
            .get('/groceries')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('GET /electronics', function () {
    it("should return electronics webpage", function (done) {
        chai.request(app)
            .get('/electronics')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('GET /instruments', function () {
    it("should return instruments webpage", function (done) {
        chai.request(app)
            .get('/instruments')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('GET /todays_deals', function () {
    it("should return todays_deals webpage", function (done) {
        chai.request(app)
            .get('/todays_deals')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();
            })
    });
});

describe("GET /unknownPage", function () {
    it('should redirect for unknown route', function (done) {
        chai.request(app)
            .get('/unknown')
            .end(function(err, res) {
                expect(res).to.redirect;
                done();
            });
    });
});

describe('GET /vcode', function () {
    it("should return the users cart", function (done) {
        chai.request(app)
            .get('/cart')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();
            })
    });
});

describe('GET /cart', function () {
    it("should return the users cart", function (done) {
        chai.request(app)
            .get('/cart')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();
            })
    });
});

describe('GET /checkout', function () {
    it("should run the checkout functions", function (done) {
        chai.request(app)
            .get('/checkout')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();
            })
    });
});

describe('GET /checkout_points', function () {
    it("should run the checkout functions", function (done) {
        chai.request(app)
            .get('/checkout_points')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();
            })
    });
});

describe("GET /plusOne", function () {
    it('should increase the quantity of the function by 1 ', (done) => {
        chai.request.agent(app)
            .get('/plusOne');
        done();
    });
});

describe("GET /minusOne", function () {
    it('should decrease the quantity of the function by 1 ', (done) => {
        chai.request.agent(app)
            .get('/minusOne');
        done();
    });
});

describe("Summing Arrays", function () {
    it("should sum all the values inside an array", function (done) {
        let sum = tdd.arrSum([1, 2, 3]);
        assert.equal(sum, 6);
        done();
    })
});

describe("Finding Daily Deal", function () {
    it('should find an item from an array and return it in a list', function (done) {
        const list = [{item: "item1", price: 100}];
        let item = tdd.arrRandom(list);
        assert.equal(JSON.stringify(item), JSON.stringify([{item: "item1", price: 75}]));
        done();
    });
});