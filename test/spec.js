// spec.js
describe('liverabbit homepage', function() {
  it('should have a title', function() {
    browser.get('/');

    expect(browser.getTitle()).toEqual('New Sails App');
  });
});