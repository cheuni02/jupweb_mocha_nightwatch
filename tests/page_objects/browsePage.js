const commands = {
    assertTitleIsCorrect: function(expected = 'BBC Login - Log in') {
        return this.assert.title(expected);
    }
};

module.exports = {
    url: 'https://test.jupiter.bbc.co.uk/',
    commands: [ commands ],
    elements: {
        // shorthand, specifies selector
        mySubmitButton: '.authButton',

        emailInput: {
            selector: 'input#email',
            locateStrategy: 'css selector'
        },

        passwordInput: {
            selector: 'input#password',
            locateStrategy: 'css selector'
        }
    }
};
