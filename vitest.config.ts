import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		clearMocks: true,
		typecheck: {
			checker: "tsc",
			tsconfig: "./tsconfig.test.json"
		},
		coverage: {
			enabled: true,
			all: true,
			include: ["src"],
			reportsDirectory: "coverage"
		}
	}
});
