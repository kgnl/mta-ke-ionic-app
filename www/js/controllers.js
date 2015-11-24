angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal) {

  $ionicModal.fromTemplateUrl('templates/uresNevjegy.html', {
    scope: $scope
	}).then(function(modal) {
		$scope.modal = modal;
	});

	$ionicModal.fromTemplateUrl('templates/image-popover.html', {
    scope: $scope,
	animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal2 = modal;
	});
	
	// Triggered in the modal to close it
	$scope.closeImage = function() {
		$scope.modal2.hide('');
	};

	// Open the modal
	$scope.showImage = function(imageSrc) {
		$scope.imageSrc = imageSrc;
		$scope.modal2.show();
	};
	
	
	// Triggered in the modal to close it
	$scope.closeNevjegy = function() {
		$scope.modal.hide('');
	};

	// Open the modal
	$scope.showNevjegy = function(name) {
		$scope.name = name;
		$scope.modal.show();
	};
  
	$scope.includeNevjegy = function(name) {
		return 'templates/kutatok/kartyak/' + name + '.html';
	};
})

.controller('KutatokCtrl', function($scope) {
  $scope.kutatok = [
    { title: 'Kutatócsoport jelenlegi tagjai (2012-től)', id: 1 },
    { title: 'Kutatócsoport tagjai 1996-2012 között', id: 2 },
    { title: 'A munkaterv végrehajtása során a pályázóval együttműködő, TKI állományba nem kerülő kutatók', id: 3 }
  ];
})

.controller('KutatoCtrl', function($scope, $stateParams) {
	$scope.kutatoId = $stateParams.kutatoId;
})

.controller('KutatasCtrl', function($scope) {
})

.controller('Eredmenyek1Ctrl', function($scope) {
})

.controller('Eredmenyek2Ctrl', function($scope) {
})


//
//	FEED CONTROLLER FROM BUBBEL
//	
	
.controller('AppCtrl', function($scope, FeedService) {
  $scope.categories = FeedService.getCategories();
})

.controller('BubbelCtrl', function($scope, $stateParams, $window, FeedService) {
  var pageId = $stateParams.pageId;
  $scope.title = FeedService.getTitle(pageId);
  FeedService.getEntries(pageId).then(function (entries) {
    $scope.entries = entries;
  });

  var openUrl = function (prefix, relativeUrl) {
    var url = prefix + relativeUrl;
    console.log("loading page: " + url);
    // $window.open(link, "_blank", "location=no");
    // $window.open("googlechrome" + relative, "_system", "location=no");
    return $window.open(url, "_system");
  }

  $scope.doRefresh = function () {
    $scope.title = FeedService.getTitle(pageId);
    FeedService.getEntries(pageId).then(function (entries) {
      $scope.entries = entries;
    }).finally(function () {
      $scope.$broadcast('scroll.refreshComplete');
    });
  };

  $scope.showPage = function (link) {
    var relative = link.replace(/.*\/\//, "//");
    var ref = openUrl("", link);
    ref.addEventListener("loaderror", function (event) {
      console.log("Failed to load link " + JSON.stringify(event));
      alert("Failed to load link " + "googlechrome:" + relative);
    });
    ref.addEventListener("loadstart", function (event) {
      console.log("starting load " + JSON.stringify(event));
    });
    ref.addEventListener("loadstop", function (event) {
      console.log("stopping load " + JSON.stringify(event));
    });
  };
})

.factory('FeedServiceResolver', ["FeedService", function (FeedService) {
  return FeedService.init();
}])

.factory('FeedService', ["$http", "$q", function ($http, $q) {
  var loadRssJson = function (url) {
    var googleUrl = 'https://ajax.googleapis.com/ajax/services/feed/load?' +
      'v=1.0&num=100&callback=JSON_CALLBACK&q=';
    var fullUrl = googleUrl + encodeURIComponent(url);
    console.log("loading: " + fullUrl);
    return $http.jsonp(fullUrl);
  };
  var responseData = {};
  var feed = {};
  var categories = {};

  var initCategories = function (categoriesJson) {
    if (!categoriesJson || 
      typeof categoriesJson !== "object" ||
      Object.keys(categoriesJson) < 1) {
      categoriesJson = { "Senaste": "http://www.palyazat.gov.hu/rssfeed.php?type=kozlemenyek" };
    }
    console.log("categoriesJson: " + JSON.stringify(categoriesJson));
    var keys = Object.keys(categoriesJson);
    var cl = keys.length;
    console.log("CL: " + cl);
    for (var c=0; c<cl; c++) {
      var cat = keys[c];
      var link = categoriesJson[cat];
      console.log("CAT: " + cat);
      categories[cat] = {
        "link": link
      }
    }
  };

  var me = {};
  me.init = function () {
    var feedsJsonUrl = "http://bubb.la/rss_feeds.json";
    console.log("loading categories: " + feedsJsonUrl);
    
    // var tmpDeferred = $q.defer();
    // var categoriesPromise = tmpDeferred.promise;
    // var tmpData = {
    //   "Senaste": "http://bubb.la/rss/nyheter",
    //   "Världen": "http://bubb.la/rss/varlden",
    //   "Sverige": "http://bubb.la/rss/sverige",
    //   "Blandat": "http://bubb.la/rss/blandat",
    //   "Europa": "http://bubb.la/rss/europa",
    //   "USA": "http://bubb.la/rss/usa",
    //   "Politik": "http://bubb.la/rss/politik",
    //   "Ekonomi": "http://bubb.la/rss/ekonomi",
    //   "Teknik": "http://bubb.la/rss/teknik",
    //   "Vetenskap": "http://bubb.la/rss/vetenskap"
    // };
    // setTimeout(function () {
    //   tmpDeferred.resolve({ "data": tmpData });
    // }, 0);

   var categoriesPromise = $http.get(feedsJsonUrl);

    return categoriesPromise.then(function (response) {
      var json = response.data;
      console.log("received categories: " + JSON.stringify(json));
      initCategories(json);
      var first = Object.keys(categories)[0];
      return me.initCategory(first);
    }, function (reason) {
      console.error(reason);
      initCategories();
      var first = Object.keys(categories)[0];
      return me.initCategory(first);
    }, function (update) {
      console.log("update: " + update);
      return update;
    });
  };

  me.initCategory = function (category) {
    console.log("Loading category " + category);
    var categoryUrl = categories[category].link;
    console.log("Loading " + category + " from " + categoryUrl);
    return loadRssJson(categoryUrl).
      then(function (response) {
        responseData = response.data.responseData;
        feed = responseData.feed;
        if (feed.entries) {
          console.log("found " + feed.entries.length + " entries");
          return feed.entries.sort(function (a, b) {
            return (new Date(b.publishedDate)) - (new Date(a.publishedDate));
          });
        } else {
          console.error("No feed.entries in " + JSON.stringify(feed));
          return [];
        }
      }, function (reason) {
        console.log("loadRssJson error: " + reason);
        alert("Failed to load feed from " + categoryUrl);
        return [];
      }, function (update) {
        console.log("loadRssJson notification: " + update);
      });
  };

  me.getEntries = function (pageId) {
    return me.initCategory(pageId);
  };

  me.getCategories = function () {
      return Object.keys(categories);
  };

  me.getTitle = function (pageId) {
    if (pageId === "nyheter" || !categories[pageId]) {
      return "Senaste";
    }
    return pageId;
  };

  me.version = function () {
    return '0.1';
  };

  return me;
}])

.filter('decode', function(angular) {
    return function(html) {
        var e = angular.element('<div>' + html + '</div>');
        var text = e.text();
        console.log("RES: " + JSON.stringify(text));
        return text;
    };
})
;