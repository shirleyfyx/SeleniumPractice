const { Builder, By, Key } = require("selenium-webdriver");

var should = require("chai").should();

// describe block, using mocha 
// terminal: npx mocha --no-timeouts 'tests/*.js'
describe("add another todo tests", function () {

    // it block
    it("successfully adds another a todo to application", async function () {
        // launch the browser
        let driver = await new Builder().forBrowser("chrome").build();


        // navigate to our application
        await driver.get("https://lambdatest.github.io/sample-todo-app")


        // add a todo
        await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

        //assert, checks if the test was done accurately. 
        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
            return value
        });

        //assert using chai should
        todoText.should.equal("Learn Selenium");

        // close the browser
        await driver.quit();

    });

});











