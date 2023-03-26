import { useKekstagramStore } from './keks-db/index.js';

const kekstagramStore = useKekstagramStore();
console.log(kekstagramStore.getPhotos());
