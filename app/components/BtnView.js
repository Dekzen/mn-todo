import Marionette from 'backbone.marionette';
import _ from 'underscore';

const BtnView = Marionette.View.extend({
  tagName: 'button',
  className: 'btn btn-primary',
  template: _.template('New Joke'),
});

export default BtnView;
