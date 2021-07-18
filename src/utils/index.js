/**
 *
 * @param content
 * @param type
 */
export let log = (content, type = "log") => {
  if (process.env.NODE_ENV === "development") {
    console && console[type](content);
  }
};
