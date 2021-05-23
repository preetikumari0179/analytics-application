/**
 * Import your components
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component('GChart', () => import('./gChart/gChart'));
  },
};

export default GlobalComponents;
