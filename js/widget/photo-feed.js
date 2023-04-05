import {useKekstagram} from '../feature/keks-db/index.js';
import {createPhotoPreviewList} from '../entity/photo/ui/photo-preview.js';

export const createPhotoFeed = () => {
  const kekstagramStore = useKekstagram();
  const photoList = kekstagramStore.getAllPhotos();
  if (photoList) {
    const feedList = createPhotoPreviewList(photoList);
    const photoFeedContainer = document.querySelector('.pictures');
    photoFeedContainer.append(feedList);
  }
};
