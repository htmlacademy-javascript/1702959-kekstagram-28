import { usePhoto } from '../entity/photo/store/usePhoto.js';
import { createPhotoPreviewList } from '../entity/photo/ui/photo-preview.js';
import { createPhotoListingFilter, FILTER_MAP } from '../entity/photo/ui/listing-filter.js';
import { createPhotoDialog } from './photo-dialog.js';
import { createError } from '../shared/ui/error.js';

export const createPhotoFeed = () => {
  const photoStore = usePhoto();

  if (photoStore.count()) {
    const filter = createPhotoListingFilter();
    const photoFeedContainer = document.querySelector('.pictures');
    const renderPhotoList = (photoListPage) => {
      photoFeedContainer.querySelectorAll('.picture').forEach((el) => {
        el.remove();
      });
      const feedList = createPhotoPreviewList(photoListPage);
      photoFeedContainer.append(feedList);
      createPhotoDialog();
    };
    filter
      .onSwitch(async (selectedFilter) => {
        let photoList = null;
        switch (selectedFilter) {
          case FILTER_MAP.DEFAULT:
            photoList = photoStore.getList();
            break;
          case FILTER_MAP.DISCUSSED:
            photoList = photoStore.getPopular();
            break;
          case FILTER_MAP.RANDOM:
            photoList = photoStore.getListingBatch();
            break;
        }
        if (photoList) {
          renderPhotoList(photoList);
        } else {
          createError({ message: 'Неожиданная ошибка, сообщите поддержке' });
        }
      })
      .activate();
  }
};
