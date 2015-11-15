angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.bemutatkozas', {
      url: '/bemutatkozas',
      views: {
        'tab1': {
          templateUrl: 'templates/bemutatkozas.html',
          controller: 'bemutatkozasCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.mellekletek', {
      url: '/mellekletek',
      views: {
        'tab2': {
          templateUrl: 'templates/mellekletek.html',
          controller: 'mellekletekCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.tagok', {
      url: '/tagok',
      views: {
        'tab3': {
          templateUrl: 'templates/tagok.html',
          controller: 'tagokCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('eredmenyek', {
      url: '/melleklet1',
      templateUrl: 'templates/eredmenyek.html',
      controller: 'eredmenyekCtrl'
    })
        
      
    
      
        
    .state('eredmenyek2', {
      url: '/melleklet2',
      templateUrl: 'templates/eredmenyek2.html',
      controller: 'eredmenyek2Ctrl'
    })
        
      
    
      
        
    .state('palyazat', {
      url: '/palyazat',
      templateUrl: 'templates/palyazat.html',
      controller: 'palyazatCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1/tagok');

});