angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.service('LikeService', [function(){
	this.count = 0;
	this.getCount = function(){
		return this.count;
	};
	this.incCount = function(){
		this.count++;
	}
}])