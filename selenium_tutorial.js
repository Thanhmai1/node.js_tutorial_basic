// Dowload library selnium-webdriver : npm install selenium-webdriver
// Dowload webdriver : npm install chromedriver

const { Builder, By, Key, until } = require('selenium-webdriver'); //import library
const chrome = require('selenium-webdriver/chrome');

async function example() {
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options())
        .build();

    try {        
        await driver.get('https://www.google.com');        
        let searchBox = await driver.findElement(By.name('q'));
        await searchBox.sendKeys('Selenium', Key.RETURN);        
        await driver.wait(until.titleContains('Selenium'), 10000);
        console.log('Successfull!');
    } finally {        
        await driver.quit();
    }
}

example();
