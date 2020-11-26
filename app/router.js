import EmberRouter from '@ember/routing/router';
import config from 'aaofnae/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('home', { path: '/'});
  this.route('books', { path: 'books/:books' });
  this.route('book', { path: 'books/:isbn' });
  this.route('characters', { path: 'characters/:characters' });
  this.route('character', { path: 'characters/:name' });
  this.route('houses', { path: 'houses/:houses' });
  this.route('house', { path: 'houses/:name' });
  this.route('breadcrumb');
});