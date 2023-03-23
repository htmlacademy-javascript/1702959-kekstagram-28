import { writeFile } from 'node:fs';

/**
 * @param {string} storePath - место хранения
 * @param {number} count - колличество
 * @param {string} fileName - наименование файла для результатов
 * @description Скачивает и сохраняет инофрмацию о пользователях
 */
const downloadUsers = async (targetPath, count, fileName = 'users') => {
  const getUsers = () => fetch(`https://dummyjson.com/users?limit=${count}`)
    .then((res) => res.json()).then((data) => data.
      users.map(({ firstName, lastName, maidenName }) => (
        { firstName, lastName, maidenName }
      ))
    );
  const users = await getUsers();
  writeFile(`${targetPath}/${fileName}.json`, JSON.stringify(users), () => { });
};

/**
 * @param {string} targetPath - место хранения
 * @param {number} count - колличество
 * @param {string} fileName - наименование файла для результатов
 * @description Скачивает и сохраняет тексты
 */
const downloadTexts = (targetPath, count, fileName = 'texts') => {
  const fishTextDownloader = (cb, n = 3) => fetch(`https://fish-text.ru/get?type=sentence&number=${n}`)
    .then((response) => response.json())
    .then((data) => cb(data))
    .catch(console.log);


  let current = 0;
  const texts = [];
  const interval = setInterval(() => fishTextDownloader(fishTextWriter), 1000);
  function fishTextWriter(data) {
    // eslint-disable-next-line eqeqeq
    if (current == count) {
      writeFile(`${targetPath}/${fileName}.json`, JSON.stringify(texts), () => { });
      clearInterval(interval);
    }
    texts.push(data.text);
    current++;
  }
};

/**
 * @param {string} targetPath - место хранения
 * @param {number} count - колличество
 * @param {string} fileName - наименование файла для результатов
 * @description Скачивает и сохраняет информацию о комментариях
 */
const downloadComments = async (targetPath, count, fileName = 'commnets') => {
  const getComments = () => fetch(`https://dummyjson.com/comments?limit=${count}`)
    .then((res) => res.json()).then((data) => data.
      comments.map(({ body }) => (
        body
      ))
    );
  const comments = await getComments();
  writeFile(`${targetPath}/${fileName}.json`, JSON.stringify(comments), () => { });
};


export {
  downloadUsers,
  downloadTexts,
  downloadComments
};
