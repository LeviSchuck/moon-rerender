var options = {
  props: ["options"],
  name: 'tprompt',
  template: '<div class="t-prompts"><c-button m-for="option in options" content="{{option.label}}" color="red"></c-button></div>'
};
module.exports = function(Moon) {
  Moon.extend("tprompt", options);
};
