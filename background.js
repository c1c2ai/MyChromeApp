/**
 * Created by chetanSminq on 14/02/16.
 */

chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('window.html', {
        'outerBounds': {
            'width': 400,
            'height': 500
        }
    });
});