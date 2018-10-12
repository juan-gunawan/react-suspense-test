import axios from "axios";

const ImageFetcher = (url, delay) => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://picsum.photos/400/400/?random")
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

const Resource = async () => {
  await this.ImageFetcher();
};

export default ImageFetcher;
