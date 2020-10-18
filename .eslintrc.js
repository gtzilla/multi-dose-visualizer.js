module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    extends: [
        'plugin:react/recommended',
        'semistandard'
    ],
    settings:{
        react:{
            version:'detect'
        }
    },    
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": false
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "globals":{
        "_": 'readonly',
        "moment": 'readonly',
        "WebRouter":true,
        React: 'readonly',
        ReactDOM: 'readonly',        
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
};
