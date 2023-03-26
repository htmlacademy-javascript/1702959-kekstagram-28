import { useKekstagram } from './keks-db/index.js';

const kekstagramStore = useKekstagram();
console.log(kekstagramStore.getPhotos());
