import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: {
        extends: ['eslint:recommended'],
    },
});

export default [
    ...compat.extends(
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ),
    {
        files: ['**/*.{ts,tsx}'],

        plugins: {
            '@typescript-eslint': typescript,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },

        languageOptions: {
            ecmaVersion: 'latest',
            globals: globals.browser,
            parser: tsParser,
        },

        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            'prettier/prettier': 'error',
        },
    },
];
