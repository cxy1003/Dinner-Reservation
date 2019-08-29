import axios from 'axios'
// 获取emoji头像
export function getEmojiData() {
  return axios({
      method: 'get',
      url: 'http://localhost:8080/json/emojiDB.json',
    })
    .then(function(res) {
      return Promise.resolve(res.data);
    });
}