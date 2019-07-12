import EventEmitter from './src/EventEmitter';

export default {
  install(Vue) {
    Vue.prototype.$events = new EventEmitter();
  }
};
