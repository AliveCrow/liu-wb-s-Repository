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


export const calculateAge = (dateString) =>{
  let today = new Date();
  let birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}