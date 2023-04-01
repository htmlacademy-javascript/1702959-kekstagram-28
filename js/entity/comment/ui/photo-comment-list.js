import { createPhotoCommentList } from './photo-comment.js';
const getCounterBody = (showedCount, commentCount) => `${showedCount} из <span class="comments-count">${commentCount}</span> комментариев`

export const photoCommentList = (comments) => {
  const PAGE_SIZE = 5;
  let page = 0;
  const pageCount = Math.ceil(comments.length / PAGE_SIZE);
  const hiddenClass = 'hidden';

  const render = (commentList, commentCounter, commentLoader) => {
    const loadComments = () => {
      if (page < pageCount) {
        page++;
        const commentSlice = comments.slice(0, page * PAGE_SIZE);
        commentList.innerHTML = '';
        commentList.append(createPhotoCommentList(commentSlice));
        commentCounter.innerHTML = getCounterBody(commentSlice.length, comments.length);
      }
      if (page >= pageCount) {
        commentLoader.classList.add(hiddenClass);
      } else {
        commentLoader.classList.remove(hiddenClass);
      }
    };
    loadComments();
    commentLoader.addEventListener('click', loadComments);
    const cleanupListeners = () => {
      commentLoader.removeEventListener('click', loadComments);
    };
    return {
      cleanupListeners
    };
  };
  return {
    render
  };
};
