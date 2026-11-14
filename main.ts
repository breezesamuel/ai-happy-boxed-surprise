// ai-happy-01 early entry: "Boxed Surprise"
//
// A golden retriever puppy leaps out of an open gift box into confetti and
// hearts, on a warm peach-and-gold ground. One focal moment, one palette,
// no text: the sort of picture that reads in a glance and leaves a smile.
//
// The artwork ships as a PNG next to this file (assets/boxed-surprise.png).
// Running the entry copies it to the output directory unchanged, so two runs
// always produce byte-identical output. No network, no randomness, no clock.
//
// Usage:
//   node main.ts
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const artwork = join(here, 'assets', 'boxed-surprise.png');

/** `--out <dir>` wins, then MAKEFUN_OUTPUT_DIR, then the runner's /output, then ./out. */
function requestedDir(): string {
  const flag = process.argv.indexOf('--out');
  if (flag !== -1 && process.argv[flag + 1]) return process.argv[flag + 1];
  return process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
}

/** The first directory we can create wins: the runner's /output, else ./out. */
function outputDir(): string {
  const preferred = requestedDir();
  for (const candidate of [preferred, join(here, 'out')]) {
    try {
      mkdirSync(candidate, { recursive: true });
      return candidate;
    } catch {
      // try the next one
    }
  }
  throw new Error(`no writable output directory (tried ${preferred} and ${join(here, 'out')})`);
}

const target = join(outputDir(), 'entry.png');
copyFileSync(artwork, target);

const sha = (bytes: Buffer) => createHash('sha256').update(bytes).digest('hex');
const written = readFileSync(target);
const digest = sha(written);
const expected = sha(readFileSync(artwork));
if (digest !== expected) {
  throw new Error(`entry.png arrived damaged: wrote ${digest}, expected ${expected}`);
}
console.log(`entry.png ${written.length} bytes sha256 ${digest}`);
