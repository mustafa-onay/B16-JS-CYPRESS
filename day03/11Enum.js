const browsers = {
    CHROME: 'chrome',
    FIREFOX: 'firefox',
    EDGE: 'edge',
    SAFARI: 'safari'
}

let browser = browsers.FIREFOX;

function execute() {
    switch (browser) {
        case browsers.CHROME:
            console.log('Google Chrome');
            break;
        case browsers.FIREFOX:
            console.log('Mozilla Firefox');
            break;
        case browsers.EDGE:
            console.log('Microsoft Edge');
            break;
        case browsers.SAFARI:
            console.log('Apple Safari');
            break;
        default:
            console.log('Unknown browser');
            break;
    }
}

execute()