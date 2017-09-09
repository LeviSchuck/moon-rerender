var options = {
  props: ["content", "size", "color"],
  data: function() {
    return {
      color: "blue",
      size: "large",
    }
  },
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
    return m("button", {
      attrs: {"class": "" + color + " " + size + ""}
    }, {
      "shouldRender": true,
      "eventListeners": {
        "click": [function(event) {
          instance.get('clicked')(event);
        }]
      }
    }, [m("#text", {"shouldRender": true}, content)]);
  },
};
module.exports = function(Moon) {
  console.log(options);
  return Moon.extend('c-button', options);
};
