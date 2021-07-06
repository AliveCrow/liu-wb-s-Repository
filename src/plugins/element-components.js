export const ElementComponentPlugin = {};
ElementComponentPlugin.install = (Vue, options) => {
  options.forEach((option) => {
    Vue.use(option);
  });
};

