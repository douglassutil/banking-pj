import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.module.ts',
    '!src/main.ts',
    '!src/environments/**',
    '!src/**/*.model.ts',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 75,
      functions: 80,
      lines: 80,
    },
  },
  moduleNameMapper: {
    '^@banking-pj/shared-types(.*)$':
      '<rootDir>/../../libs/shared-types/src$1',
  },
  // Akita usa ESM (export * from ...) e Angular distribui .mjs — ambos precisam
  // ser transformados. Definir transformIgnorePatterns substitui o padrão do
  // preset, então as duas exceções devem estar no mesmo lookahead negativo.
  transformIgnorePatterns: [
    '/node_modules/(?!(@datorama/akita|.*\\.mjs$))/',
  ],
};

export default config;
