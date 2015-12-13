import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('queue');
  this.route('album', { path: '/albums/:album_id'});
  this.route('artist', { path: '/artists/:artist_id'});
});

export default Router;
