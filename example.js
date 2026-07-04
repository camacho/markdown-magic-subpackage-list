import path from 'path';
import { markdownMagic } from 'markdown-magic';
import SUBPACKAGELIST from './index.js';

const config = {
  matchWord: 'AUTO-GENERATED-CONTENT',
  transforms: {
    SUBPACKAGELIST,
  },
};

const markdownPath = path.join(import.meta.dirname, 'README.md');
await markdownMagic(markdownPath, config);
