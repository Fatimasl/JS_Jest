/** @type {import('jest').Config} */
const config = {
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/', '/coverage/'],
  moduleFileExtensions: ['js', 'jsx'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};

module.exports = config;
