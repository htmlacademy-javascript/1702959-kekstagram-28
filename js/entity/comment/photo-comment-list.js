import { createPhotoCommentList as NodeListFactory } from './photo-comment.js';

const getCounterBody = (showedCount, commentCount) => `${showedCount} из <span class="comments-count">${commentCount}</span> комментариев`;

export const createPhotoCommentList = ({commentListData}) => {
  const PAGE_SIZE = 5;
  let page = 0;
  const pageCount = Math.ceil(commentListData.length / PAGE_SIZE);
  const hiddenClass = 'hidden';

  const render = ({commentList, commentCounter, commentLoader}) => {
    const loadComments = () => {
      if (page < pageCount) {
        page++;
        const commentSlice = commentListData.slice(0, page * PAGE_SIZE);
        commentList.innerHTML = '';
        commentList.append(NodeListFactory(commentSlice));
        commentCounter.innerHTML = getCounterBody(commentSlice.length, commentListData.length);
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
