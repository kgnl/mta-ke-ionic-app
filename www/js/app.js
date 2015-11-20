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
        templateUrl: 'templates/kutatas.html'
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
   
  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

    /*
    Eredmények teszt linkek, kesobb torolhetoek
   */
  
  .state('app.eredmenyek1', {
      url: '/eredmenyek1',
      views: {
        'menuContent': {
          templateUrl: 'templates/eredmenyek1.html'
        }
      }
    })
  .state('app.eredmenyek2', {
      url: '/eredmenyek2',
      views: {
        'menuContent': {
          templateUrl: 'templates/eredmenyek2.html'
        }
      }
    }); // eredmenyek vége -> ;  

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/bemutatkozas');
});
