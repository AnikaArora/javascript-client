/*
 * DealersAndVehicles
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DealersAndVehicles);
  }
}(this, function(expect, DealersAndVehicles) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DealersAndVehicles.VehiclesApi();
  });

  describe('(package)', function() {
    describe('VehiclesApi', function() {
      describe('getIds', function() {
        it('should call getIds successfully', function(done) {
          // TODO: uncomment, update parameter values for getIds call and complete the assertions
          /*
          var datasetId = "datasetId_example";

          instance.getIds(datasetId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(DealersAndVehicles.VehicleIdsResponse);
            {
              let dataCtr = data.vehicleIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(0);
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getVehicle', function() {
        it('should call getVehicle successfully', function(done) {
          // TODO: uncomment, update parameter values for getVehicle call and complete the assertions
          /*
          var datasetId = "datasetId_example";
          var vehicleid = 56;

          instance.getVehicle(datasetId, vehicleid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(DealersAndVehicles.VehicleResponse);
            expect(data.vehicleId).to.be.a('number');
            expect(data.vehicleId).to.be(0);
            expect(data.year).to.be.a('number');
            expect(data.year).to.be(0);
            expect(data.make).to.be.a('string');
            expect(data.make).to.be("");
            expect(data.model).to.be.a('string');
            expect(data.model).to.be("");
            expect(data.dealerId).to.be.a('number');
            expect(data.dealerId).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
