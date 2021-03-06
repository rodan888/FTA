
app.directive("dropdown", function() {
  return {
    // restrict: 'E',
    // replace: true
   // scope: {},
    restrict: 'A', 
    link: function(scope) {
      scope.selectedIndex = -1,
      scope.innerHeight = window.innerHeight, 
      // scope.isActive = false,                
      scope.toggleSelect = function(ind){              
        if( ind === scope.selectedIndex ){
          scope.selectedIndex = -1;
        } else{
          scope.selectedIndex = ind;
        }
      },    
      scope.getClass = function(ind){
        if( ind === scope.selectedIndex ){
          return "selected";
        } else{
          return "";
        }
      },      
      scope.activeButton = function() {
        scope.classFactory.active = !scope.classFactory.active;
      }  
    }
  }
});  

app.directive('btnMenu', function() {
  return{
      restrict: 'E',
      replace: true,
      templateUrl: 'components/templates/menu-button.html'
      // link: function($scope){

      // }
    }
});