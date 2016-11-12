/**
 * 
 */
/**
 * Test script for amazon
 */
describe('wordpress website automation', function() {
   var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
    });
  
    it('this will be doing logging', function() {
    	browser.ignoreSynchronization = true;
    	browser.get('https://wordpress.com/');
    
    
    element(by.partialLinkText("Log In")).isPresent().then(function(present) {
    if (present) {
    	element(by.partialLinkText("Log In")).click();
    } else {
    	element(by.partialLinkText("Menu")).click();
    	element(by.partialLinkText("Log In")).click();
    }}, function(err) {
  });

    browser.sleep(3000);
    element(by.id("user_login")).sendKeys("vodqa@gmail.com");
    browser.sleep(3000);
    element(by.id("user_pass")).sendKeys("Hello12345678");
    browser.sleep(3000);
    element(by.id("wp-submit")).click();
    browser.sleep(3000);
    element(by.className("mobile-back-to-sidebar")).click();
   
  });
});
