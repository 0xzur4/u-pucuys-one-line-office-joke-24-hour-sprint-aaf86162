// main.ts — writes one funny one-liner about office life
// to <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "Our office printer only jams on documents marked URGENT, which is how I learned it can read and holds a grudge.";

// Gate (kit RULES.txt): the entry must be UTF-8 text of 1-200 characters,
// a single line, not only white space. The joke earns its laugh from a
// specific office truth: the shared printer always fails at the worst time,
// so the punchline gives it a motive instead of a malfunction.
const codePoints = [...joke].length;
if (codePoints < 1 || codePoints > 200 || joke.includes("\n")) {
  throw new Error(`joke is invalid: ${codePoints} code points`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Write the joke with no trailing newline, so the file is exactly one line.
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
