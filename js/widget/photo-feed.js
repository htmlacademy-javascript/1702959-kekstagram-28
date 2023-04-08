import { usePhoto } from '../entity/photo/store/usePhoto.js';
import { createPhotoPreviewList } from '../entity/photo/ui/photo-preview.js';

export const createPhotoFeed = () => {
  const photoStore = usePhoto();
  const photoList = photoStore.getPhotoList();
  if (photoList) {
    const feedList = createPhotoPreviewList(photoList);
    const photoFeedContainer = document.querySelector('.pictures');
    photoFeedContainer.append(feedList);
  }
};
