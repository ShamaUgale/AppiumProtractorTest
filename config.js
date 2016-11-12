exports.config = {	seleniumAddress : 'http://localhost:4723/wd/hub',
	specs : [ 'wordpress.js' ],
	//framework : 'jasmine',
	capabilities : {
		'platformName' : 'iOS',
		'platformVersion' : '10.0',
		'deviceName' : 'iPhone 6s',
		'appium-version' : '1.6.0',
		'browserName' : 'safari',
		"nativeInstrumentsLib" : true,
		"iosInstallPause" : '8000',
		"launchTimeout":12000,
	},

	baseUrl : 'http://10.0.2.2:8000',

//	onPrepare : function() {
//		// var SpecReporter = require('jasmine-spec-reporter');
//		// jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace:
//		// 'all'}));
//		// jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace:
//		// ''}));
//		var wd = require('/usr/local/bin/wd'),
//		protractor = require('/usr/local/bin/protractor'),
//		wdBridge = require('wd-bridge')(protractor, wd);
//		wdBridge.initFromProtractor(exports.config);
//	}
// jasmineNodeOpts: {
// showColors: true,
// defaultTimeoutInterval: 30000,
// print: function () {
// }
//},

};
