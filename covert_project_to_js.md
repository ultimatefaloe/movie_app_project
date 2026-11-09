### Uninstall all typescript plugin
- Delete tsconfig.json
- npm uninstall typescript @types/react @types/react-native

### Rename Source Files
- .tsx → .jsx
- .ts → .js

### Configure Path Aliases for JavaScript
- install plugin resolver
- npm install --save-dev babel-plugin-module-resolver
- create babel.config.js
- add the follwing code to babel.config.js
```
// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './src',        // This maps '@/...' to './src/...'
            '@/assets': './assets', // This maps '@/assets/...' to './assets/...'
          },
        },
      ],
      // ... any other plugins you have (e.g., 'expo-router/babel')
    ],
  };
};

```

### Start your project
- npx expo start --clear
- jsconfig.js will be created automatically