import { ESLintUtils } from "@typescript-eslint/utils";

const createRule = ESLintUtils.RuleCreator(
	() => "https://github.com/beji/eslint-no-for-in",
);

const rule = createRule({
	create(context) {
		return {
			ForInStatement(node) {
				context.report({
					messageId: "no-for-in",
					node: node,
				});
			},
		};
	},
	name: "no-for-in",
	meta: {
		docs: {
			description:
				"For..in loops iterate over enumerable string properties. This is most likely uninteded",
		},
		type: "problem",
		messages: {
			"no-for-in": "Use for..of instead",
		},
		schema: [],
	},
	defaultOptions: [],
});

export default rule;
