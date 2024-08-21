import { TSESLint } from "@typescript-eslint/utils";
import noForIn from "./no-for-in";

export const rules = {
	"no-for-in": noForIn,
} satisfies Record<string, TSESLint.RuleModule<string, Array<unknown>>>;
