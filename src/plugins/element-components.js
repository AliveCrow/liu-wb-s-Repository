export const ElComponentPlugin = {};
ElComponentPlugin.install = (Vue, options) => {
  options.forEach((option) => {
    Vue.use(option);
  });
};

