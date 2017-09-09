/*=============================
  Primary Application Code
=============================*/

const Moon = require("./moon");
const Monx = require("./monx");
Moon.use(Monx);

const store = new Monx({
  state: {
    pendingAgree: true,
    agreeText: "Yes",
    // normally []
    prompts: [{
      label: "Adam Jensen",
      scene: "adam"
    }, {
      label: "JC Denton",
      scene: "jc"
    }],
    // normally false
    pendingPrompts: true,
  },
  actions: {
    agree: function(state) {
      state.pendingAgree = false;
      state.agreeText = "should be hidden";
    },
    addPrompts: function(state, payload) {
      state.pendingPrompts = payload;
      state.pendingPrompts = true;
      console.log("Added prompts", payload);
    },
    clearPrompts: function(state) {
      state.pendingPrompts = [];
      state.pendingPrompts = false;
    }
  }
});

require("./components/button")(Moon);
require("./components/prompt")(Moon);
require("./components/tprompt")(Moon);

const app = new Moon({
  root: "#app",
  store: store,
  methods: {
    agree: function(payload) {
      console.log("adding prompts");
      store.dispatch("addPrompts", [{
        label: "Adam Jensen",
        scene: "adam"
      }, {
        label: "JC Denton",
        scene: "jc"
      }, {
        label: "Bob Page",
        scene: "Bob"
      }, {
        label: "Janus",
        scene: "janus"
      }]);

      console.log("root agree called with", payload)
      store.dispatch("agree");
    }
  },
});
