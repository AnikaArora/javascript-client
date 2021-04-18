var DealersAndVehicles = require('dealers_and_vehicles');
const Answer = require('dealers_and_vehicles/src/model/Answer');

var api = new DealersAndVehicles.ClientApi();

var language = "language_example"; // {String} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.generate(language, callback); 

//Code below was written by me. Code above was given. 

var dataSetId = api.getDataSetId(callback); 

var dealer = api.getDealer(datasetId, dealerid, callback);

var vehicleId = api.getIds(dataSetId, callback); 

var vehicle = api.getVehicle(dataSetId, vehicleId, callback); 

//not sure how to push to Answer yet; trying various options below 

//exports.prototype.dataSetId = dataSetId;

// dealers.push(dataSetId); 
// dealers.push(vehicleId); 
// dealers.push(vehicle); 

//var exports = function(api); 

// new exports(); 
// exports.constructFromObject(dealers(dealerId, name, vehicles(vehicleId, year, make, model))); 
// exports.constructFromObject(vehicleId); 