import axios from "@/utils/request";

export const TagApi = {
  getTagLists: () => {
    return new Promise((resolve, reject) => {
      axios("/tags")
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  },
};
