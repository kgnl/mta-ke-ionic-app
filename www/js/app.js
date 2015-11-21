// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.bemutatkozas', {
    url: '/bemutatkozas',
    views: {
      'menuContent': {
        templateUrl: 'templates/bemutatkozas.html'
      }
    }
  })
  
  .state('app.kutatok', {
      url: '/kutatok',
      views: {
        'menuContent': {
          templateUrl: 'templates/kutatok.html',
          controller: 'KutatokCtrl'
        }
      }
    })

  .state('app.kutato', {
    url: '/kutatok/:kutatoId',
    views: {
      'menuContent': {
        templateUrl: function ($stateParams){
						return 'templates/kutatok/kutatokLista' + $stateParams.kutatoId + '.html' ;
		},
        controller: 'KutatoCtrl'
      }
    }
  })
  
  .state('app.kutatas', {
    url: '/kutatas',
    views: {
      'menuContent': {
        templateUrl: 'templates/kutatas.html',
		controller: 'KutatasCtrl'
      }
    }
  })
  
  .state('app.eredmenyek1990_2011', {
    url: '/eredmenyek/eredmenyek1990_2011',
    views: {
      'menuContent': {
        templateUrl: 'templates/eredmenyek/eredmenyek1990_2011.html',
		controller: 'Eredmenyek1Ctrl'
      }
    }
  })
  
  .state('app.eredmenyek2012_2015', {
    url: '/eredmenyek/eredmenyek2012_2015',
    views: {
      'menuContent': {
        templateUrl: 'templates/eredmenyek/eredmenyek2012_2015.html',
		controller: 'Eredmenyek2Ctrl'
      }
    }
  })
  
  .state('app.partnerek', {
    url: '/partnerek',
    views: {
      'menuContent': {
        templateUrl: 'templates/partnerek.html'
      }
    }
  })
  
  .state('app.publikaciok', {
    url: '/publikaciok',
    views: {
      'menuContent': {
        templateUrl: 'templates/publikaciok.html'
      }
    }
  })
  
  .state('app.kapcsolat', {
    url: '/kapcsolat',
    views: {
      'menuContent': {
        templateUrl: 'templates/kapcsolat.html'
      }
    }
  })
   
  .state('app.kereses', {
    url: '/kereses',
    views: {
      'menuContent': {
        templateUrl: 'templates/kereses.html'
      }
    }
  })
  
  .state('app.palyazat', {
      url: '/palyazat',
      views: {
        'menuContent': {
          templateUrl: 'templates/palyazat.html',
		  controller: 'KutatoCtrl'
        }
      }
    })
    ;
	
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/bemutatkozas');
  
});
