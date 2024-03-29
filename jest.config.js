/* eslint-disable @typescript-eslint/no-var-requires */
const jestExpoPreset = require('jest-expo/jest-preset');
const { jsWithBabel: tsJestPreset } = require('ts-jest/presets');

module.exports = {
	...jestExpoPreset,
	clearMocks: true,
	transform: {
		...tsJestPreset.transform,
		...jestExpoPreset.transform,
	},
	testMatch: [
		'<rootDir>/packages/**/*.test.ts',
	],
	modulePathIgnorePatterns: [
		'<rootDir>/example',
	],
};
