module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  plugins: [
    'html',
    'react',
    'dependencies'
  ],
  'settings': {
    'react': {
      'createClass': 'createReactClass',
      'pragma': 'React',
      'version': '16.2.0',
    },
    "propWrapperFunctions": [ "forbidExtraProps" ],
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.common.js'
      }
    }
  },
  'rules': {
    'quotes': [2, 'single'],
    'strict': [2, 'never'],
    'comma-dangle': ['error', 'never'],
    'semi': [2, 'never'],
    'keyword-spacing': ['error', { 'before': true }],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'dependencies/case-sensitive': 1,
    'dependencies/no-cycles': 1,
    'dependencies/no-unresolved': 1,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
