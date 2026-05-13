import type { Config } from 'jest';

// Config raiz do monorepo: delega para o jest.config.ts de cada app.
// A extensão vscode-jest encontra este arquivo automaticamente e exibe
// os testes de api e web sob runners separados na aba Testing.
const config: Config = {
  projects: [
    '<rootDir>/apps/api',
    '<rootDir>/apps/web',
  ],
};

export default config;
