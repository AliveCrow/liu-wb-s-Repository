import axios from "@/utils/request";

export const SortApi = {
  getSortLists: () => {
    return new Promise((resolve, reject) => {
      axios("/sorts")
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  },
};
