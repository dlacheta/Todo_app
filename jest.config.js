module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    globals: {
        "ts-jest": {
          isolatedModules: true,
        },
      },
    transform: {
        "^.+\\.styles.ts?$": [
            "babel-jest",
            {
              plugins: [
                "babel-plugin-macros",
                "babel-plugin-styled-components",
              ],
              presets: [
                "@babel/preset-react",
                "@babel/preset-typescript",
                '@babel/preset-env'
              ],
           },
          ],
        "^.+\\.tsx?$": "ts-jest",
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    setupFilesAfterEnv: [
        '<rootDir>/jest.setup.ts'
        ],
  };