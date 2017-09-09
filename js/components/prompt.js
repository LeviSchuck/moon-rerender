var options = {
  props: ["options"],
  name: 'prompt',
  render: function(m) {
    var instance = this;
    var options = instance.get("options");
    console.log("Options", options)

    var buttons = [];
    if (typeof options == "string") {
      console.log("I got a string :(")
    } else {
      buttons = options.map(function(option){
        return m("c-button", {attrs: {content: option.label}}, {dynamic: 1}, []);
      })
    }
    console.log("Rendering prompt");
    return m("div", {attrs: {class: "prompts"}}, {dynamic: 1}, buttons);
  }
};
module.exports = function(Moon) {
  Moon.extend("prompt", options);
};
