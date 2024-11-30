const { pathsToModuleNameMapper } = require('ts-jest');

const {
    compilerOptions: { paths = {} },
} = require('./tsconfig.json');

module.exports = {
    preset: 'jest-preset-angular',
    moduleNameMapper: pathsToModuleNameMapper(paths, { prefix: '<rootDir>' }),
    setupFilesAfterEnv: ['<rootDir>/src/main/webapp/test.ts'],
    transform: {
        '^.+\\.js$': 'babel-jest'
    }
};


