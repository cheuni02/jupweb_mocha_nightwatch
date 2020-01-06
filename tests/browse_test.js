module.exports = {
    tags: ['login'],
    'Check user prompted with bbc login' : function(browser) {
        
        const bbclogin = browser.page.bbclogin();

        bbclogin
            .navigate()
            .assertTitleIsCorrect()
            .setValue('@emailInput','ivan.cheung@bbc.co.uk')
            .setValue('@passwordInput','jeric1234!')
            .click('@mySubmitButton');
          
    },  
    tags: ['browse'],
    'The 50 most recent clips from all sites are displayed in grid view by default' : function(browser) {
        const browsepage = browser.page.browsePage();
        
        browsepage
            .waitForElementVisible('@scrollList')
            .assert.containsText('@numberOfResults','50');


        browser.end();      

    },

    'Clip count should be displayed' : function(browser) {
        
    }

    // 'I am on the browse page' (browser) {
    //     browser
    //         .url("https://test.jupiter.bbc.co.uk/")
    //         .waitForElementVisible('.login-text')
    //         .assert.urlContains('bbclogin.id.stage.tools.bbc.co.uk')
    //         .setValue('input#email','ivan.cheung@bbc.co.uk')
    //         .setValue('input#password','jeric1234!')
    //         .click('.authButton')
    //         .waitForElementVisible('#jupiterWeb')
    //         .assert.containsText('#jupiterWeb', "Jupiter Web");
    // }
};