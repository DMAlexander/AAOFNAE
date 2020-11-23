import EmberRouter from '@ember/routing/router';
import config from 'aaofnae/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('home');
  this.route('books');
  this.route('characters');
  this.route('houses');
  this.route('house');
  this.route('book', { path: '/:isbn' });
});