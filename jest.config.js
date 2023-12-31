const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir : './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv : ['<rootDir>/jest.setup.js'],
  moduleNameMapper : {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components/(.*)$' : '<rootDir>/src/components/$1',
    '^@/contexts/(.*)$' : '<rootDir>/src/contexts/$1',
    '^@/enums/(.*)$' : '<rootDir>/src/enums/$1',
    '^@/hooks/(.*)$' : '<rootDir>/src/hooks/$1',
    '^@/interfaces/(.*)$' : '<rootDir>/src/interfaces/$1',
    '^@/models/(.*)$' : '<rootDir>/src/models/$1',
    '^@/services/(.*)$' : '<rootDir>/src/services/$1',
    '^@/styles/(.*)$' : '<rootDir>/src/styles/$1',
    '^@/utils/(.*)$' : '<rootDir>/src/utils/$1',
    '^@/public/(.*)$' : '<rootDir>/src/public/$1',
    '^@/schema/(.*)$' : '<rootDir>/src/schema/$1',
    '^@/stories/(.*)$' : '<rootDir>/src/stories/$1',
  },
  testEnvironment : 'jest-environment-jsdom',
  collectCoverageFrom : [
    'src/**/*.{ts,tsx}',
    '!src/**/layout*.{ts,tsx}',
    '!src/styles/**', 
    '!src/enums/**', 
    '!src/stories/**', 
    '!src/schema/**', 
    '!src/utils/**', 
  ]
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
