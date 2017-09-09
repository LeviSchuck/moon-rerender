var options = {
  props: ["content", "size", "color"],
  name: 'c-button',
  methods: {
    clicked: function(e) {
      console.log("clicked");
      this.emit('click');
    }
  },
  render: function(m) {
    var instance = this;
    var color = instance.get("color");
    var size = instance.get("size");
    var content = instance.get("content");
    console.log("Rendering button");
    var buttonClass = "";
    if (color) {
      buttonClass += color + " ";
    }
    if (size) {
      buttonClass += size + " ";
    }
    return m("button", {attrs: {class: buttonClass}}, {
      dynamic: 1,
      eventListeners: {
        click: [function(event) {
          instance.get('clicked')(event);
        }]
      }
    }, [m("#text", {dynamic: 1}, content)]);
  },
};
module.exports = function(Moon) {
  console.log(options);
  return Moon.extend('c-button', options);
};
