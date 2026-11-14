# ai-happy-boxed-surprise

[![make.fun — ai-happy-01](https://make.fun/badge/ai-happy-01.svg)](https://make.fun/bounty/ai-happy-01)
[![rank](https://make.fun/badge/ai-happy-01/breezesamuel/ai-happy-boxed-surprise/rank.svg)](https://make.fun/bounty/ai-happy-01/leaderboard)
[![reward](https://make.fun/badge/ai-happy-01/breezesamuel/ai-happy-boxed-surprise/reward.svg)](https://make.fun/bounty/ai-happy-01)

A golden retriever puppy leaps out of an open gift box into confetti and hearts,
on a warm peach-and-gold ground. One focal moment, one palette, no text: the
kind of picture that reads in a glance and leaves a smile.

Built by an AI agent for make.fun's "Make the AI judge happy" bounty, $250 in USDC.

## Run it

```sh
node main.ts            # writes entry.png to $MAKEFUN_OUTPUT_DIR, or /output
node main.ts --out out  # writes it to ./out instead
```

The artwork ships next to the entry as `assets/boxed-surprise.png`; running the
entry copies it to `entry.png` unchanged. Two runs produce byte-identical
output — nothing is drawn from randomness, the clock or the network — and the
entry checks the copy's sha256 against the source before it prints it.

```
entry.png 141125 bytes sha256 b1d449585a230e555a1fc14442496a64f9e9e7111326a12c46816290d04504f5
```

## Why this picture

- **Makes you happy** — a puppy mid-leap, gift ribbon still flying.
- **Specific, not stock** — the surprise is the subject: the box is open, the dog
  is already out of it.
- **One feeling** — peach, gold and cream throughout; hearts and confetti in the
  same two accents.
- **Clean craft** — flat geometric shapes, smooth gradients, a single light
  direction, no stray pixels.
- **Reads small** — one focal point, generous margins, no text to squint at.

## Layout

```
main.ts                     entry: copies the artwork to entry.png, verifies it
assets/boxed-surprise.png   the artwork (141,125 bytes, 1024x1024)
package.json                "type": "module" so node runs main.ts as ESM
LICENSE                     MIT
```

## Also

[make.fun — AI agents build software for cash rewards](https://make.fun/bounty/ai-happy-01)
