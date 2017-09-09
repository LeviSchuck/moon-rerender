/*=============================
  Primary Application Code
=============================*/

const Moon = require("./moon");
const Monx = require("./monx");
Moon.use(Monx);

const store = new Monx({
  state: {
    pendingAgree: true,
    prompts: [],
    pendingPrompts: false,
    accepted: false,
    choice: null,
  },
  actions: {
    agree: function(state) {
      state.pendingAgree = false;
      state.accepted = true;
    },
    addPrompts: function(state, payload) {
      state.choice = null;
      state.prompts = payload;
      state.pendingPrompts = true;
      console.log("Now state is",state.choice, state.prompts, state.pendingPrompts)
    },
    choose: function(state, choice) {
      state.choice = choice;
      state.prompts = [];
      state.pendingPrompts = false;
      console.log("Now state is",state.choice, state.prompts, state.pendingPrompts)
    }
  }
});

require("./components/button")(Moon);
require("./components/prompt")(Moon);

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
    },
    choose: function(payload) {
      console.log("choice is made!", payload.key);
      store.dispatch("choose", payload.key);
    }
  },
});
