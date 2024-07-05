// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const cloudinary = require("cloudinary").v2;
import Video from "@/Data/Video.json";

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};

export default async function handler(req, res) {
  cloudinary.config({
    cloud_name: "dwpcdujkq",
    api_key: "828616356891841",
    api_secret: "MjyjNWvjsV3wIX8T5b7x6UjNVYE"
  });

  var data;
  const temp = await cloudinary.api.resources().then(result => data = result);
  const temp1 = await cloudinary.search.expression('resource_type:image').max_results(30).execute().then(result => data = result);

  var alldata = data.resources;
  var urls = []
  var contentCount = 1;

  for (var i = 0; i < alldata.length; i++) {
    urls.push({
      "id": contentCount,
      "type": "image",
      "content": alldata[i].url.replace("http://res.cloudinary.com/", "/api/img/")
    });
    contentCount += 1;
  };

  for (var i in Video) {
    urls.push({
      "id": contentCount,
      "type": "video",
      "content": Video[i].content,
      "thumbnail": Video[i].thumbnail
    })
    contentCount += 1;
  };

  res.status(200).json({ result: shuffle(urls) })
}