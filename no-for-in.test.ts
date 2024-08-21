import { RuleTester } from "@typescript-eslint/rule-tester";
import rule from "./no-for-in.js";
import test from "node:test";

RuleTester.afterAll = test.after;
RuleTester.describe = test.describe;
RuleTester.it = test.it;

const ruleTester = new RuleTester({
	languageOptions: {
		ecmaVersion: 2015,
	},
});

ruleTester.run("no-for-in", rule, {
	valid: [
		{
			code: "for (x of y) {}",
		},
	],
	invalid: [
		{
			code: "for (const x in y) {}",
			errors: [{ messageId: "no-for-in" }],
		},
		{
			code: "for (let x in []) {}",
			errors: [{ messageId: "no-for-in" }],
		},
	],
});
