import Backbone from 'backbone';

var AppView = Backbone.View.extend({
  el: '#happo-root',
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html('<div>Hello World</div>');
  },
});

export default () => {
  new AppView();
  return new Promise(r => setTimeout(r, 0));
};
