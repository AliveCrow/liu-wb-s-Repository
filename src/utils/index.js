/**
 * @description 测试环境下的log,生产环境不会显示
 * @param content
 * @param type
 */
export let log = (content, type = "log") => {
  if (process.env.NODE_ENV === "development") {
    console && console[type](content);
  }
};

// 计算年龄
/**
 * @description 计算年龄
 * @param {String} [dateString]  ['YYYY-MM-DD']
 * @returns {number}
 */
export const calculateAge = (dateString) => {
  let today = new Date();
  let birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

//
/**
 * @description 获取滚动距离
 * @param {Object} dom
 * @returns {number}
 */
export const getWindowScrollHeight = (dom) => {
  let scrollTop = 0;
  if (dom.document.documentElement && dom.document.documentElement.scrollTop) {
    scrollTop = dom.document.documentElement.scrollTop;
  } else if (dom.document.body) {
    scrollTop = dom.document.body.scrollTop;
  }
  return scrollTop;
};
