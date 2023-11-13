'use strict';

module.exports = {
    overrides: [
        {
            files: '*.{js,ts}',
            options: {
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'none',
                endOfLine: 'auto',
                printWidth: 120
            }
        },
        {
            files: '*.hbs',
            options: {
                parser: 'glimmer',
                singleQuote: false
            }
        }
    ]
};
