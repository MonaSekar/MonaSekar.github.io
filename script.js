var app = angular.module("myApp",[]);

app.controller("myCtrl",function($scope){
    var ele = document.getElementById("myVdo");
    $scope.play_vdo = function(){
        ele.play();
    }
    $scope.pause_vdo = function(){
        ele.pause();
    }
    $scope.maximize = function(){
        ele.requestFullscreen();
    }
    $scope.mute_ado = function(){
        ele.muted = true;
    }
    $scope.full_ado = function(){
        ele.volume = 1.0;
    }
    $scope.speed_ctrl1 = function(){
        ele.playbackRate = 0.5;
    }
    $scope.speed_ctrl2 = function(){
        ele.playbackRate = 2;
    }
    $scope.speed_ctrl3 = function(){
        ele.playbackRate = 3;
    }
    $scope.reload = function(){
        ele.load();
    }

});