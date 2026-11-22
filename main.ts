// bring-the-humans-03 entry program (Node 22, standard library only).
//
// The entry itself is the TikTok video; this program only hands its address
// to the gate. It copies VIDEO.json out of the repository (the bot dir) and
// into the output dir, byte for byte. The output dir is created when missing
// and never removed. On success the program prints nothing.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '.';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, 'VIDEO.json'), join(outputDir, 'VIDEO.json'));
