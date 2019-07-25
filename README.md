# Vuejs plugin for emitting events

# Installation

```
yarn add bojko108/vue-event-emitter-plugin
```

# How to use

Add it to Vue:
```js
import Vue from 'vue';
import EmitterPlugin from 'vue-event-emitter-plugin';

Vue.use(EmitterPlugin);
```

And in your components:
```js
export default {
  name: "MyComponent"
  created() {
    // listen and emit events:
    this.$events...
  }
}
```

## Methods

### Listen to an event once
```js
this.$events.once('event-name', callback[, context]);
```

### Listen to an event
```js
this.$events.on('event-name', callback[, context]);
```

### Stop listening for an event
```js
this.$events.off('event-name'[, callback]);
```

### Emit an event
```js
this.$events.emit('event-name'[, args...]);
```

## License

vue-event-emitter-plugin is [MIT](https://github.com/bojko108/vue-event-emitter-plugin/tree/master/LICENSE) License @ bojko108
