import { useKekstagram } from '../feature/keks-db/index.js';
import { createPhotoPreviewList } from '../entity/photo/ui/photo-preview.js';

export const createPhotoFeed = () => {
  const kekstagramStore = useKekstagram();
  const feedList = createPhotoPreviewList(kekstagramStore.getPhotosRandomBatch(true));

  const photoFeedContainer = document.querySelector('.pictures');
  photoFeedContainer.append(feedList);
};
