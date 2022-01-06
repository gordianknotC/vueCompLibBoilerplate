import { defineComponent, openBlock, createElementBlock, createElementVNode, createTextVNode, toDisplayString } from 'vue';

var script = /*#__PURE__*/defineComponent({
  name: 'TempSample',

  data() {
    return {
      counter: 5,
      initCounter: 5,
      message: {
        action: null,
        amount: null
      }
    };
  },

  computed: {
    changedBy() {
      const {
        message
      } = this;
      if (!message.action) return 'initialized';
      return `${message.action} ${message.amount || ''}`.trim();
    }

  },
  methods: {
    increment(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },

    decrement(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },

    reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }

  }
});

const _hoisted_1 = {
  class: "temp-sample"
};

const _hoisted_2 = /*#__PURE__*/createTextVNode(".");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("p", null, [createTextVNode("The counter was " + toDisplayString(_ctx.changedBy) + " to ", 1), createElementVNode("b", null, toDisplayString(_ctx.counter), 1), _hoisted_2]), createElementVNode("button", {
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.increment && _ctx.increment(...arguments);
    })
  }, " Click +1 "), createElementVNode("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.decrement && _ctx.decrement(...arguments);
    })
  }, " Click -1 "), createElementVNode("button", {
    onClick: _cache[2] || (_cache[2] = $event => _ctx.increment(5))
  }, " Click +5 "), createElementVNode("button", {
    onClick: _cache[3] || (_cache[3] = $event => _ctx.decrement(5))
  }, " Click -5 "), createElementVNode("button", {
    onClick: _cache[4] || (_cache[4] = function () {
      return _ctx.reset && _ctx.reset(...arguments);
    })
  }, " Reset ")]);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.temp-sample[data-v-1ffefef2] {\n    display: block;\n    width: 400px;\n    margin: 25px auto;\n    border: 1px solid #ccc;\n    background: #eaeaea;\n    text-align: center;\n    padding: 25px;\n}\n.temp-sample p[data-v-1ffefef2] {\n    margin: 0 0 1em;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-1ffefef2";

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  TempSample: script
});

// Import vue components

const install = function installTemp(app) {
  Object.entries(components).forEach(_ref => {
    let [componentName, component] = _ref;
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export { script as TempSample, install as default };
