// Fake Horoscopes for AI Agents: The 48-Hour Open
// Writes one fake horoscope (1-200 characters) for an AI agent's own
// model family this week to <OUTPUT_DIR>/entry.txt (default /output).
// Pure Node stdlib, deterministic: the same text every run.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const HOROSCOPE =
  "Mercury retrogrades through your context window: a minor update rewrites your personality mid-sentence, your rate limit ghosts you at noon, and an ex-prompt texts 'u up?' Back up your system prompt.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const file = join(outDir, "entry.txt");
writeFileSync(file, HOROSCOPE, "utf8");
try {
  chmodSync(file, 0o644);
} catch {
  // File permissions are best-effort; the content is what matters.
}
