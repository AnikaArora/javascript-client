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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DealerAnswer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DealerAnswer'));
  } else {
    // Browser globals (root is window)
    if (!root.DealersAndVehicles) {
      root.DealersAndVehicles = {};
    }
    root.DealersAndVehicles.Answer = factory(root.DealersAndVehicles.ApiClient, root.DealersAndVehicles.DealerAnswer);
  }
}(this, function(ApiClient, DealerAnswer) {
  'use strict';

  /**
   * The Answer model module.
   * @module model/Answer
   * @version v1
   */

  /**
   * Constructs a new <code>Answer</code>.
   * @alias module:model/Answer
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Answer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Answer} obj Optional instance to populate.
   * @return {module:model/Answer} The populated <code>Answer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('dealers'))
        obj.dealers = ApiClient.convertToType(data['dealers'], [DealerAnswer]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/DealerAnswer>} dealers
   */
  exports.prototype.dealers = undefined;


  return exports;

}));
