var options = {
  props: ["content", "size", "color"],
  name: 'c-button',
  methods: {
    clicked: function(e) {
      console.log("Clicked the button!")
      this.emit('click');
    }
  },
  render: function(m) {
    var instance = this;
    var color = instance.get("color");
    var size = instance.get("size");
    var content = instance.get("content");
    var buttonClass = "";
    var hasClass = false;
    var attrs = {};
    if (color) {
      buttonClass += color + " ";
      hasClass = true;
    }
    if (size) {
      buttonClass += size + " ";
      hasClass = true;
    }
    if (hasClass) {
      attrs["class"] = buttonClass;
    }
    return m("button", {attrs: attrs}, {
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
  return Moon.extend('c-button', options);
};
