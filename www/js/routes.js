angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('', {
      url: '/front',
      templateUrl: 'templates/.html',
      controller: 'Ctrl'
    })
        
      
    
      
    .state('2', {
      url: '/tabs',
      abstract:true,
      templateUrl: 'templates/2.html'
    })
      
    
      
        
    .state('2.mellekletek', {
      url: '/tartalom',
      views: {
        'tab2': {
          templateUrl: 'templates/mellekletek.html',
          controller: 'mellekletekCtrl'
        }
      }
    })
        
      
    
      
        
    .state('2.tartalom', {
      url: '/contents',
      views: {
        'tab1': {
          templateUrl: 'templates/tartalom.html',
          controller: 'tartalomCtrl'
        }
      }
    })
        
      
    
      
        
    .state('2.kutatóCsoport', {
      url: '/thecrew',
      views: {
        'tab3': {
          templateUrl: 'templates/kutatóCsoport.html',
          controller: 'kutatóCsoportCtrl'
        }
      }
    })
        
      
    
      
        
    .state('2.kapcsolat', {
      url: '/contacts',
      views: {
        'tab8': {
          templateUrl: 'templates/kapcsolat.html',
          controller: 'kapcsolatCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/front');

});