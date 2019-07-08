var assert = require('assert');
describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        // Tell mocha this test is allowed to run for 10 minutes, so we have
        // sufficient time for debugging.
        //
        // Note you can also set this globally in mochaOpts in wdio.conf.js:
        this.timeout(10 * 60 * 1000);

        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });
});