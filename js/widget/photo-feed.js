import { useKekstagram } from '../feature/keks-db/index.js';
import { createPhotoList } from '../entity/photo/ui/photo-list.js';

export const renderPhotoFeed = () => {
  const kekstagramStore = useKekstagram();
  const feedList = createPhotoList(kekstagramStore.getPhotosRandomBatch(true));

  const photoFeedContainer = document.querySelector('.pictures');
  photoFeedContainer.innerHTML = '';
  photoFeedContainer.append(feedList);
};
