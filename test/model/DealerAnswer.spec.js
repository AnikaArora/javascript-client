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

  describe('(package)', function() {
    describe('DealerAnswer', function() {
      beforeEach(function() {
        instance = new DealersAndVehicles.DealerAnswer();
      });

      it('should create an instance of DealerAnswer', function() {
        // TODO: update the code to test DealerAnswer
        expect(instance).to.be.a(DealersAndVehicles.DealerAnswer);
      });

      it('should have the property dealerId (base name: "dealerId")', function() {
        // TODO: update the code to test the property dealerId
        expect(instance).to.have.property('dealerId');
        //expect(instance.dealerId).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property vehicles (base name: "vehicles")', function() {
        // TODO: update the code to test the property vehicles
        expect(instance).to.have.property('vehicles');
        // expect(instance.vehicles).to.be(expectedValueLiteral);
      });

    });
  });

}));
