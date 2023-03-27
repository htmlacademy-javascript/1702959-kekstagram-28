import { useKekstagram } from './feature/keks-db/index.js';

const kekstagramStore = useKekstagram();
// eslint-disable-next-line no-console
console.log(kekstagramStore.getPhotos());
