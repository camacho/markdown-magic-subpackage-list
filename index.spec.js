import path from 'path';
import { describe, expect, it } from 'vitest';
import format from './index.js';

const srcPath = path.join(import.meta.dirname, '__fixtures__', 'README.md');

describe('markdown-magic-subpackage-list', () => {
  it('renders a bulleted list of subpackages with descriptions when verbose', () => {
    expect(
      format({
        content: 'original content',
        options: { verbose: 'true' },
        srcPath,
      }),
    ).toBe(
      [
        '* [pkg-a](packages/pkg-a) - Package A description',
        '* [pkg-b](packages/pkg-b)',
      ].join('\n'),
    );
  });

  it('omits descriptions when not verbose, honors a custom bullet, and skips non-package entries', () => {
    const result = format({
      content: 'original content',
      options: { bullet: '1.' },
      srcPath,
    });

    expect(result).toBe(
      ['1. [pkg-a](packages/pkg-a)', '1. [pkg-b](packages/pkg-b)'].join('\n'),
    );
    expect(result).not.toContain('not-a-package');
    expect(result).not.toContain('stray-file');
  });
});
