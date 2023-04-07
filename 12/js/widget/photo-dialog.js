import { photoDetail } from '../entity/photo/ui/photo-detail.js';
import { useKekstagram } from '../feature/keks-db/index.js';
import { photoCommentList } from '../entity/comment/ui/photo-comment-list.js';

export const createPhotoDialog = () => {
  const kekstagramStore = useKekstagram();

  document.querySelectorAll('.picture').forEach((photo) => {
    photo.addEventListener('click', (event) => {
      event.preventDefault();
      const photoData = kekstagramStore.getPhotoById(photo.dataset.id);
      photoDetail(photoData).render(photoCommentList(photoData.comments));
    });
  });
};
