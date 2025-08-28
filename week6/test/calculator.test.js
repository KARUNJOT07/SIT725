const expect = require("chai").expect;
const request = require("request");

describe("Sum Calculator API", function () {
  const baseUrl = "http://localhost:3000";
  it("returns status 200 to check if api works", function (done) {
    request(baseUrl, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it("should return correct sum for valid numbers", function (done) {
    request.get(`${baseUrl}/add?a=10&b=5`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("15"); // Response contains the sum in plain text or HTML
      done();
    });
  });
  it("should handle missing parameters", function (done) {
    request.get(`${baseUrl}/add?a=10`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200); // Expect error
      done();
    });
  });
  it("should return error for non-numeric input", function (done) {
    request.get(
      `${baseUrl}/add?a=hello&b=world`,
      function (error, response, body) {
        expect(response.statusCode).to.not.equal(200);
        done();
      }
    );
  });
});

describe("Calculator Multiply API", function () {
  const baseUrl = "http://localhost:3000";

  it("should return correct product", function (done) {
    request.get(`${baseUrl}/multiply?a=4&b=5`, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(body).to.include("20");
      done();
    });
  });

  it("should return error for non-numeric input in multiply", function (done) {
    request.get(`${baseUrl}/multiply?a=abc&b=2`, function (err, res, body) {
      expect(res.statusCode).to.equal(400);
      expect(body).to.include("Invalid input");
      done();
    });
  });

  it("should handle multiplication by zero", function (done) {
    request.get(`${baseUrl}/multiply?a=10&b=0`, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(body).to.include("0");
      done();
    });
  });

  it("should handle negative numbers correctly", function (done) {
    request.get(`${baseUrl}/multiply?a=-3&b=5`, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(body).to.include("-15");
      done();
    });
  });
});
