module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  bracketSameLine: true,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  overrides: [
    {
      files: ['*.tsx'],
      options: {
        parser: 'typescript',
        semi: false,
        singleQuote: true,
        jsxSingleQuote: true,
      },
    },
  ],
}
