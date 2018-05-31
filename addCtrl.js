

// Creates the addCtrl Module and Controller. Note that it depends on the 'geolocation' module and service.
var addCtrl = angular.module('addCtrl', ['geolocation']);
addCtrl.controller('addCtrl', function($scope, $http, geolocation){

    // Initializes Variables
    // ----------------------------------------------------------------------------
    $scope.formData = {};
    var coords = {};
    var lat = 0;
    var long = 0;

    // Set initial coordinates to the center of the US
    $scope.formData.latitude = 39.500;
    $scope.formData.longitude = -98.350;

    // Functions
    // ----------------------------------------------------------------------------
    // Creates a new user based on the form fields
    $scope.createWildLife = function() {

        // Grabs all of the text box fields
        var wildLifeData = {
            name: $scope.formData.name,
            species: $scope.formData.species,
            longitude: $scope.formData.longitude,
            latitude:  $scope.formData.latitude,
            location_description:  $scope.formData.location_description
        };

        // Saves the user data to the db
        $http.post('/wildlife', wildLifeData)
            .success(function (data) {

                // Once complete, clear the form (except location)
                $scope.formData.name = "";
                $scope.formData.species = "";
                $scope.formData.longitude = "";
                $scope.formData.latitude = "";
                $scope.formData.location_description = "";

            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };
});