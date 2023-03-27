import { installEntityDocument } from '../../shared/db/entity-document.js';
import { createNamesDocument } from './names.js';

export const createUserDocument = (usersCount) => {
  const names = createNamesDocument();
  return installEntityDocument(
    (id) => ({
      id,
      ...names.getRandom(),
      avatar: `img/avatar-${id}.svg`
    }),
    usersCount
  );
};
