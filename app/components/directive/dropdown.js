
app.directive("dropdown", function() {
  return {
    // restrict: 'E',
    // replace: true
   // scope: {},
    restrict: 'A', 
    link: function(scope) {
      scope.selectedIndex = -1,
      scope.innerHeight = window.innerHeight, 
      scope.isActive = false,                
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
        scope.isActive = !scope.isActive;
      }  
    }
  }
});  