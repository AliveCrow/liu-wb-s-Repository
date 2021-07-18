import axios from "@/utils/request";

export const ArticleApi = {
  getArticleLists: () => {
    return new Promise((resolve, reject) => {
      axios("/articles")
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  },
};
