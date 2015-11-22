angular.module('app.routes', [])


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
                templateUrl: function($stateParams) {
                    return 'templates/kutatok/kutatokLista' + $stateParams.kutatoId + '.html';
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


    //  tabs
    //  
    .state('app.tabs', {
        url: '/tabs',
        views: {
            'menuContent': {
                templateUrl: 'templates/tabs.html',
                controller: 'TabsCtrl'
            }
        }
    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/tabs');

});
