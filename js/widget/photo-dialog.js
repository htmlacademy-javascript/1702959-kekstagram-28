import { renderPhotoDetail } from '../entity/photo/ui/photo-detail.js';
import { useKekstagram } from '../feature/keks-db/index.js';

export const installPhotoDialog = () => {
  const kekstagramStore = useKekstagram();
  document.querySelectorAll('.picture').forEach((photo) => {
    photo.addEventListener('click', (event) => {
      event.preventDefault();
      renderPhotoDetail(kekstagramStore.getPhotoById(photo.dataset.id));
    });
  });
};
