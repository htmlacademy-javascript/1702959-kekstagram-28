import { parseArgs } from 'node:util';
import { existsSync } from 'node:fs';
import { dirname } from 'node:path';
import { downloadComments, downloadTexts, downloadUsers } from './loader.mjs';

const { values: { path, usersCount, commentsCount, textsCount } } = parseArgs({
  options: {
    path: {
      type: 'string',
      short: 'p',
    },
    commentsCount: {
      type: 'string',
      short: 'c',
      default: '40'
    },
    textsCount: {
      type: 'string',
      short: 't',
      default: '40'
    },
    usersCount: {
      type: 'string',
      short: 'u',
      default: '40'
    }
  }
});
const storePath = dirname(path);
if (!existsSync(path)) {
  throw new Error('Path not found');
}


await Promise.all([
  downloadComments(storePath, commentsCount),
  downloadTexts(storePath, textsCount),
  downloadUsers(storePath, usersCount),
]);
