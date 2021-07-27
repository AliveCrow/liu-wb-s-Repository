import axios from "@/utils/request";

export const CommentApi = {
    getCommentLists: () => {
        return new Promise((resolve, reject) => {
            axios("/comment")
                .then((res) => resolve(res))
                .catch((error) => reject(error));
        });
    },
};
