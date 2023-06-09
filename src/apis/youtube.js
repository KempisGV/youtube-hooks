import axios from 'axios';

const KEY = 'AIzaSyBI9LcTffviS0kv7Ui0z1ejX1HMiOi5orU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
