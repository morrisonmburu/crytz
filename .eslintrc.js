module.exports = {
    root: true,
    env: {
        "browser": true,
        // "es2021": true
    },
    extends: [
        '@vue/standard',
        "plugin:vue/essential"
    ],
    parserOptions: {
        // "ecmaVersion": 12,
        // "sourceType": "module",
        parser: 'babel-eslint'
    },
    plugins: [
        "vue"
    ],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
};
