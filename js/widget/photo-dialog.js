import { createPhotoDetail } from '../entity/photo/ui/create-photo-detail.js';
import { usePhoto } from '../entity/photo/store/usePhoto.js';
import { createPhotoCommentList } from '../entity/comment/photo-comment-list.js';

export const createPhotoDialog = () => {
  const kekstagramStore = usePhoto();

  document.querySelectorAll('.picture').forEach((photo) => {
    photo.addEventListener('click', (event) => {
      event.preventDefault();
      const photoData = kekstagramStore.getPhotoById(photo.dataset.id);
      const commentList = createPhotoCommentList({ commentListData: photoData.comments });
      createPhotoDetail(photoData).render({ commentList });
    });
  });
};
