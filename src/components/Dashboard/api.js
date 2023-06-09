
const API_KEY = "AIzaSyAE_-fwI2Ag1cpFt8eP815czxqnENGWB_4";

export const getTrendingVideos = async () => {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=15&regionCode=IN&key=${API_KEY}`
  );
  const data = response.json();
  return data;
};

export const getSearchResult = async query => {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=viewCount&q=${query}&type=video&videoDefinition=high&key=${API_KEY}`
  );
  const data = response.json();
  return data;
};
