/**
 * Created by kition on 2017/3/30.
 */
angular.module('makeTopAllLoginRegistModule')
.directive('makeTopAllLoginRegistDirective',function () {
    return {
        register:"ACE",
        replace:true,
        templateUrl:"make-topall-nav/make-topall-loginregist/make-topall-loginregist-template.html",
        controller:['$scope','$http','$rootScope','logout','serverUrl',function ($scope,$http,$rootScope,logout,serverUrl) {
            $scope.exit  =function () {
                logout.logout();
                $rootScope.isLogin = 'flase';
                $state.go("index",{},{reload: true})
            }

        }]
    }
})