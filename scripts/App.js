var myApp = angular.module('myApp', ['ui.bootstrap']);

var gem = [
    {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'Some gems have hidden qualities beyond their lustre, beyondtheir shine... Dodecahedron is one of those gems', 
    canPurchase: true,
    images: [
        {
            fullSize: '/images/gem-01.gif'
        },
        {
            fullSize: '/images/gem-02.gif'
        },
    ],
    reviews: [
        {
        stars: 5,
        body: 'I love this product!',
        author: "joe@codingtemple.com"
        },
        {
        stars: 3,
        body: 'Eh, okay.',
        author: "ripal@codingtemple.com"
        }
    ]
    },
    {
    name: 'Pentagon',
    price: 5.95,
    description: 'Not to be confused with the government building complex that was attacked on 9/11.', 
    canPurchase: true,
    images: [
        {
            fullSize: '/images/gem-03.gif'
        },
        {
            fullSize: '/images/gem-04.gif'
        },
    ]
    },
    {
    name: 'Hexagon',
    price: 6.95,
    description: 'Not to be confused with the government building complex that was attacked on 9/11.', 
    canPurchase: true,
    images: [
        {
            fullSize: '/images/gem-05.gif'
        },
        {
            fullSize: '/images/gem-06.gif'
        },
    ]
    },
    {
    name: 'Azurite',
    price: 7.95,
    description: 'Not to be confused with the government building complex that was attacked on 9/11.', 
    canPurchase: true,
    images: [
        {
            fullSize: '/images/gem-07.gif'
        },
        {
            fullSize: '/images/gem-08.gif'
        },
    ]
    },
    {
    name: 'Feldspar',
    price: 1.95,
    description: 'Not to be confused with the government building complex that was attacked on 9/11.', 
    canPurchase: true,
    images: [
        {
            fullSize: '/images/gem-09.gif'
        },
        {
            fullSize: '/images/gem-10.gif'
        },
    ]
    }
]

myApp.controller('myController', function ($scope) {
    $scope.initialize = function () {
        
        console.log("Initialized");
    }
    
    $scope.model = gem;
    $scope.cart = [];
    
    $scope.addProdcut = function (product) {
        $scope.cart.push(product);
    }
});

myApp.controller("panelController", function($scope){
    $scope.tab = 1;
    
    $scope.selectTab = function(tab){
        $scope.tab = tab;
    }
});

myApp.controller('carouselController', function ($scope) {
  $scope.myInterval = 3000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: '//unsplash.it/' + newWidth + '/300',
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
});

myApp.controller("reviewController", function($scope){
    $scope.review = {};
    
    $scope.addReview = function(product){
        if(!product.reviews){
            product.reviews = [];
        }
        
        product.reviews.push($scope.review);
        //TODO: send this review to our API so it can be saved server side
        $scope.review = {};
    }
    
});