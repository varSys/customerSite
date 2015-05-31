var customerSite = angular.module('customerSite', []); 

// defines controller
customerSite.controller('header', function ($scope) {  
    $scope.boxes = []
});
customerSite.controller('footer', function ($scope) {  
    $scope.boxes = []
});

//on page load
$(document).ready(function() {
	 $(".footer").hide();
	 
	 if($(window).height() == $(document).height()){
	 $(".footer").show();
   }
});

// on scroll functions
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
	   $(".footer").show();
   }
});

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() != $(document).height()) {
	 $(".footer").hide();
   }
});
	