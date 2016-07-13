BakeryApp
.controller('HomeCtrl', ['$scope', '$location', '$timeout', function($scope, $location, $timeout){
    if(isOpera === true){
      $scope.browserEnabled = false;
    } else if (isFirefox === true) {
      $scope.browserEnabled = false;
    } else if (isSafari === true) {
      $scope.browserEnabled = false;
    } else if (isIE === true) {
      $scope.browserEnabled = false;
    } else if (isEdge === true) {
      $scope.browserEnabled = false;
    } else if (isChrome === true) {
      $scope.browserEnabled = true;
    } else if(isMobile === true) {
      $scope.browserEnabled = false;
    }

    var imageData = resource.resources;
    $scope.defaultSlide = [{name:"Select a category and start exploring", url:"http://res.cloudinary.com/spolicar/image/upload/v1456555051/seasonal/Valentines.jpg"}];
    $scope.cakes = [{name:"Coming Soon...", url:"http://res.cloudinary.com/spolicar/image/upload/v1456555051/seasonal/Valentines.jpg"}];
    $scope.sweets = [{name:"Our Sweets", url:"https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xtp1/v/t1.0-9/12742383_1528916910735834_7189971928607513056_n.jpg?oh=969adbacf20a63166077ea47360863e7&oe=5759A882"}];
    $scope.savory = [{name:"Our Savories", url:"https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xtp1/v/t1.0-9/12742383_1528916910735834_7189971928607513056_n.jpg?oh=969adbacf20a63166077ea47360863e7&oe=5759A882"}];
    $scope.bread = [{name:"Our Breads", url:"https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xpf1/t31.0-8/12418914_1526136234347235_3235281929926090055_o.jpg"}];
    $scope.showMap = false;
    $scope.showToggle = ' ';
    $scope.doughnuts = [];
    $scope.pastries = [];
    $scope.cookies = [];
    $scope.pies = [];
    $scope.savories = [];
    $scope.misc = [];
    $scope.seasonal = [];
    $scope.quiche = [];
    $scope.sandwiches = [];
    $scope.breads = [];
    $scope.salad = [];
    $scope.drinks = [{name:"Drinks", url:"http://res.cloudinary.com/spolicar/image/upload/v1457478112/drinks/Drinks.jpg"}]
    $scope.slides = $scope.defaultSlide;
    $scope.url = '';
    $scope.whichMenu = 'Sweets';
    $scope.whichEvent = 'gallery';
    $scope.homeSlide = 1;
    $scope.eventFocus = null;
    $scope.homeCaption = "Come see us at the Farmer's Markets in <li>Carnation on Tuesday</li> <li>Duvall on Thursday</li> <li>Sammamish next Wednesday</li>"

    $scope.modal = function(id){
        $scope.eventFocus = id.target.currentSrc;
    };

    $scope.close = function() {
        $scope.eventFocus = null;
    }

    var cakeDecider = function(){
        var cakeToggle = Math.random();
        if(cakeToggle > .5) {
            $scope.whichCake = 'http://res.cloudinary.com/spolicar/image/upload/v1462301082/cakes/ChocolateCake.jpg'
        } else {
            $scope.whichCake = 'http://res.cloudinary.com/spolicar/image/upload/v1462301082/cakes/CarrotCake.jpg'
        }
    }


    var homeImages = function(){
        $timeout(function() {
            $scope.homeCaption = "Come see us at the Farmer's Markets in <li>Carnation on Tuesday</li> <li>Duvall on Thursday</li> <li>Sammamish Wednesday</li> <li>Maple Valley Saturday</li>"
            $scope.homeSlide = 1;
            $timeout(function() {
                $scope.homeCaption = '<a href="http://www.whitegunpowder.com/donut-birthday-cake-and-a-visit-to-georgias-bakery-cafe/">Click here to checkout our feature on White Gunpowder</a>'
                $scope.homeSlide = 2;
                cakeDecider();
                $timeout(function() {
                    $scope.homeCaption = "Don't forget to stop by and try our new cakes!"
                    $scope.homeSlide = 3;
                    homeImages();
                }, 7000);
            }, 7000);
        }, 7000);
    };

    var buildImages = function(){
        imageData.forEach(function(image){
            if(image.public_id.indexOf('doughnuts') != -1){
                $scope.doughnuts.push({name: image.name, url: image.url});
            } else if (image.public_id.indexOf('pastries') != -1){
                $scope.pastries.push({name: image.name, url: image.url});
            } else if (image.public_id.indexOf('cookies') != -1){
                $scope.cookies.push({name: image.name, url: image.url});
            } else if (image.public_id.indexOf('pies') != -1){
                $scope.pies.push({name: image.name, url: image.url});
            } else if (image.public_id.indexOf('savories') != -1) {
                $scope.savories.push({name: image.name, url: image.url});
            } else if (image.public_id.indexOf('misc') != -1) {
                $scope.misc.push(image.url);
            } else if (image.public_id.indexOf('seasonal') != -1) {
                $scope.seasonal.push({name: image.name, url: image.url});
            } else if (image.public_id.indexOf('quiche') != -1) {
                $scope.quiche.push({name: image.name, url: image.url});
            } else if (image.public_id.indexOf('sandwiches') != -1) {
                $scope.sandwiches.push({name: image.name, url: image.url});
            } else if (image.public_id.indexOf('salad') != -1) {
                $scope.salad.push({name: image.name, url: image.url});
            } else if (image.public_id.indexOf('bread') != -1) {
                $scope.breads.push({name: image.name, url: image.url});
            }
        });
    }

    $scope.loadImages = function(arr){
        $scope.slides = [];
        $scope.slides = arr;
    };

    $scope.$watch(function() {
        return $location.path();
    }, function(){
        if($location.path() === '/menu') {
            $scope.url = $location.path();
        } else if ($location.path() === '/' && $scope.url !== ''){
            $scope.url = $location.path();
        } else if ($location.path() === '/about'){
            $scope.url = $location.path();
        } else if ($location.path() === '/events'){
            $scope.url = $location.path();
        }
    });

    buildImages();
    homeImages();
    cakeDecider();

}]);