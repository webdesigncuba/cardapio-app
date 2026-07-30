import nextJest from "next/jest.js";

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  testMatch: [
    "<rootDir>/tests/**/*.[jt]s?(x)",
    "<rootDir>/__tests__/**/*.[jt]s?(x)"
  ],
};

export default createJestConfig(customJestConfig);
