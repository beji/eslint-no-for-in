import { ESLintUtils } from "@typescript-eslint/utils";
import { RuleFixer } from "@typescript-eslint/utils/ts-eslint";

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
					fix: (fixer: RuleFixer) => {
						const [, end] = node.left.range;
						const [start] = node.right.range;
						return fixer.replaceTextRange([end + 1, start - 1], "of");
					},
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
		fixable: "code",
	},
	defaultOptions: [],
});

export default rule;
