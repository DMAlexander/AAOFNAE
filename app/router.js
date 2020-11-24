import EmberRouter from '@ember/routing/router';
import config from 'aaofnae/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('home', { path: '/'});
  this.route('books', function() {
    this.route('book', { path: '/:isbn' });
  })
  this.route('characters', function() {
    this.route('character', { path: '/:aliases' });
  })
  this.route('houses', function() {
    this.route('house', { path: 'house/:name' });
  })
});