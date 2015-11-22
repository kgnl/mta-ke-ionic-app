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

;

