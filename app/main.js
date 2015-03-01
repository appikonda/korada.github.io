require.config({
	paths:{
	'angular':'../js/angular.min',
	'angular-route':'../js/angular-route.min',
	'angular-resource':'../js/angular-resource.min'
	},
	shim:{
		angular:{
			exports:'angular'
		},
		'angular-route':{
			deps:['angular'],
			exports:'angular'
		},
		'angular-resource':{
			deps:['angulas'],
			exports:'angular'
		}
	}
});

require(['angular','app'],function(angular){
	angular.bootstrap(document,['app']);
});