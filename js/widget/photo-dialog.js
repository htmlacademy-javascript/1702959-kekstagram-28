import { createPhotoDetail } from '../entity/photo/ui/create-photo-detail.js';
import { useKekstagram } from '../feature/keks-db/useKekstagram.js';
import { photoCommentList } from '../entity/comment/photo-comment-list.js';

export const createPhotoDialog = () => {
  const kekstagramStore = useKekstagram();

  document.querySelectorAll('.picture').forEach((photo) => {
    photo.addEventListener('click', (event) => {
      event.preventDefault();
      const photoData = kekstagramStore.getPhotoById(photo.dataset.id);
      createPhotoDetail(photoData).render(photoCommentList(photoData.comments));
    });
  });
};
