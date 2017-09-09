var options = {
  props: ["options", "choice"],
  name: 'prompt',
  methods: {
    clicked: function(key) {
      console.log("choose", key);
      this.emit("choose", {key: key});
    }
  },
  render: function(m) {
    var instance = this;
    var choice = instance.get("choice");
    if (choice) {
      console.log("Choice is given");
      return m("div", {attrs: {class: "choice"}}, {dynamic: 1}, [
        m("#text", {dynamic: 1}, choice)
      ]);
    } else {
      var options = instance.get("options");
      console.log("Present choices", options);
      var buttons = [];
      if ("development" !== "production" && typeof options == "string") {
        console.log("Use m-literal:options, otherwise this gets a string.")
      } else {
        buttons = options.map(function(option){
          return m("c-button", {attrs: {content: option.label}}, {
            dynamic: 1,
            eventListeners: {
              click: [function() {
                instance.get('clicked')(option.scene);
              }]
            }
          }, []);
        })
      }
      return m("div", {attrs: {class: "prompts"}}, {dynamic: 1}, buttons);
    }
  }
};
module.exports = function(Moon) {
  Moon.extend("prompt", options);
};
