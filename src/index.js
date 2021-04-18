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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Answer', 'model/AnswerResponse', 'model/DatasetIdResponse', 'model/DealerAnswer', 'model/DealersResponse', 'model/VehicleAnswer', 'model/VehicleIdsResponse', 'model/VehicleResponse', 'api/ClientApi', 'api/DataSetApi', 'api/DealersApi', 'api/VehiclesApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Answer'), require('./model/AnswerResponse'), require('./model/DatasetIdResponse'), require('./model/DealerAnswer'), require('./model/DealersResponse'), require('./model/VehicleAnswer'), require('./model/VehicleIdsResponse'), require('./model/VehicleResponse'), require('./api/ClientApi'), require('./api/DataSetApi'), require('./api/DealersApi'), require('./api/VehiclesApi'));
  }
}(function(ApiClient, Answer, AnswerResponse, DatasetIdResponse, DealerAnswer, DealersResponse, VehicleAnswer, VehicleIdsResponse, VehicleResponse, ClientApi, DataSetApi, DealersApi, VehiclesApi) {
  'use strict';

  /**
   * ERROR_UNKNOWN.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var DealersAndVehicles = require('index'); // See note below*.
   * var xxxSvc = new DealersAndVehicles.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new DealersAndVehicles.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new DealersAndVehicles.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new DealersAndVehicles.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version v1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Answer model constructor.
     * @property {module:model/Answer}
     */
    Answer: Answer,
    /**
     * The AnswerResponse model constructor.
     * @property {module:model/AnswerResponse}
     */
    AnswerResponse: AnswerResponse,
    /**
     * The DatasetIdResponse model constructor.
     * @property {module:model/DatasetIdResponse}
     */
    DatasetIdResponse: DatasetIdResponse,
    /**
     * The DealerAnswer model constructor.
     * @property {module:model/DealerAnswer}
     */
    DealerAnswer: DealerAnswer,
    /**
     * The DealersResponse model constructor.
     * @property {module:model/DealersResponse}
     */
    DealersResponse: DealersResponse,
    /**
     * The VehicleAnswer model constructor.
     * @property {module:model/VehicleAnswer}
     */
    VehicleAnswer: VehicleAnswer,
    /**
     * The VehicleIdsResponse model constructor.
     * @property {module:model/VehicleIdsResponse}
     */
    VehicleIdsResponse: VehicleIdsResponse,
    /**
     * The VehicleResponse model constructor.
     * @property {module:model/VehicleResponse}
     */
    VehicleResponse: VehicleResponse,
    /**
     * The ClientApi service constructor.
     * @property {module:api/ClientApi}
     */
    ClientApi: ClientApi,
    /**
     * The DataSetApi service constructor.
     * @property {module:api/DataSetApi}
     */
    DataSetApi: DataSetApi,
    /**
     * The DealersApi service constructor.
     * @property {module:api/DealersApi}
     */
    DealersApi: DealersApi,
    /**
     * The VehiclesApi service constructor.
     * @property {module:api/VehiclesApi}
     */
    VehiclesApi: VehiclesApi
  };

  return exports;
}));
