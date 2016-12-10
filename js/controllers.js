angular.module('app.controllers', [])

.controller('bloodCampsCtrl', ['$scope', '$stateParams',
    function($scope, $stateParams) {


    }
])

.controller('requestsCtrl', ['$scope', '$stateParams',
    function($scope, $stateParams) {
      
$scope.myObject = [
  {
  "donorname":"lokesh",
  "donorgroup":"B+",
  "donorContactnumber":"9999999999",
  "donorlocation":"Hyderabad",
  },
  {
  "donorname":"ravi",
  "donorgroup":"AB+",
  "donorContactnumber":"8888888888",
  "donorlocation":"Delhi",
  },
  {
  "donorname":"teja",
  "donorgroup":"O+",
  "donorContactnumber":"9090909090",
  "donorlocation":"Kolkata",
  },
  {
  "donorname":"Ganesh",
  "donorgroup":"B-",
  "donorContactnumber":"8080808080",
  "donorlocation":"Bangalore",
  }

]  

    }
])

.controller('donorsCtrl', ['$scope', '$stateParams', '$localStorage',
    function($scope, $stateParams, $localStorage) {
        
$scope.myObj = [
  {
  "patientname":"lokesh",
  "Bloodgroup":"B+",
   "patientLocation":"Hyderabad",
   "Hospital name":"Appolo",
   "Date":"30/12/2016"
  },
  {
  "patientname":"ravi",
  "Bloodgroup":"AB+",
   "patientLocation":"Vizag",
   "Hospital name":"KIMS",
   "Date":"25/12/2016"
  },
  {
  "patientname":"teja",
  "Bloodgroup":"B-",
   "patientLocation":"Mumbai",
   "Hospital name":"7 Hills",
   "Date":"30/12/2016"
  },
  {
  "patientname":"Ganesh",
  "Bloodgroup":"O+",
   "patientLocation":"Hyderabad",
   "Hospital name":"Appolo",
   "Date":"30/12/2016"
  }

]
    }
])

.controller('menuCtrl', ['$scope', '$stateParams',
    function($scope, $stateParams) {


    }
])

.controller('loginCtrl', ['$scope', '$stateParams', '$localStorage', '$state', '$location',
function($scope, $stateParams, $localStorage, $state, $location) {

    $scope.login = function() {
        console.log("Login", $localStorage.user);
        if ($localStorage.user) {
            if ($localStorage.user.username == $scope.login.username && $localStorage.user.password == $scope.login.password) {


                $location.path('/page1/page2');
            } else {
                alert("InValid username/password If u dont have an account please sign in");
            }
        } else {
            alert("Invalid user name or password")

        }
    }

}])

.controller('createAnAccountCtrl', ['$scope', '$stateParams', '$localStorage',
    function($scope, $stateParams, $localStorage) {
        $scope.register = {};
        $scope.Save = function() {
            console.log("sign", $scope.register);
            $localStorage.user = $scope.register;

        }





    }
])

.controller('forgotPasswordCtrl', ['$scope', '$stateParams',
    function($scope, $stateParams) {


    }
])



.controller('resetPasswordCtrl', ['$scope', '$stateParams',
    function($scope, $stateParams) {


    }
])

.controller('contactUsCtrl', ['$scope', '$stateParams',
    function($scope, $stateParams) {


    }
])

.controller('aboutUsCtrl', ['$scope', '$stateParams',
    function($scope, $stateParams) {


    }
])

.controller('profileCtrl', ['$scope', '$stateParams', '$localStorage',
    function($scope, $stateParams, $localStorage) {
        console.log("$localStorage ", $localStorage);
        console.log("$scope ", $scope);
        $scope.$store3 = $localStorage;
        console.log("$store ", $scope.$store3);

        $scope.profileDetails = function() {


            var proname = $localStorage.profilename;
            var prophone = $localStorage.profilephone;
            var prolocation = $localStorage.profilelocation;
            var profilebgroup = $localStorage.profilebloodgroup;

            console.log("Profile Name", proname);
            console.log("Profile phone", prophone);
            console.log("Profile Location", prolocation);
            console.log("Profile Blood Group", profilebgroup);


        }



    }
])

.controller('requestBloodPlateletCtrl', ['$scope', '$stateParams', '$localStorage',
    function($scope, $stateParams, $localStorage) {
        console.log("$localStorage ", $localStorage);
        console.log("$scope ", $scope);
        $scope.$store1 = $localStorage;
        console.log("$store ", $scope.$store1);

        $scope.requestDetails = function() {

            var pname = $localStorage.patientname;
            var ptage = $localStorage.age;
            var bloodgrp = $localStorage.bloodgroup;
            var ondate = $localStorage.date;
            var unitsreq = $localStorage.units;
            var bp = $localStorage.bloodorplatelets;
            var ploc = $localStorage.patientLocation;
            var hname = $localStorage.hospitalname;

            console.log("patient name", pname);
            console.log("age", ptage);
            console.log("bloodgroup", bloodgrp);
            console.log("date", ondate);
            console.log("units", unitsreq);
            console.log("bloodorplatelets", bp);
            console.log("patientLocation", ploc);
            console.log("hospitalname", hname);

        }



    }
])

.controller('donateBloodPlateletCtrl', ['$scope', '$stateParams', '$localStorage',
    function($scope, $stateParams, $localStorage) {

        console.log("$localStorage ", $localStorage);
        console.log("$scope ", $scope);
        $scope.$store2 = $localStorage;
        console.log("$store ", $scope.$store2);

        $scope.donationDetails = function() {


            var dname = $localStorage.donorname;
            var dbloodgrp = $localStorage.donorgroup;
            var dmail = $localStorage.donoremail;
            var dcontact = $localStorage.donorContactnumber;
            var dage = $localStorage.donorage;
            var dlocation = $localStorage.donorlocation;

            console.log("donor name", dname);
            console.log("donor group", dbloodgrp);
            console.log("donoremail", dmail);
            console.log("donorContactnumber", dcontact);
            console.log("donor age", dage);
            console.log("donor Location", dlocation);

        }



    }
])


.controller('redeemPointsCtrl', ['$scope', '$stateParams',
    function($scope, $stateParams) {


    }
])
