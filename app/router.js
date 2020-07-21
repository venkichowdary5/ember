import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('news-room', function() {
    this.route('news-releases', function() {
      this.route('show', { path: '/:news_release_slug' });
      this.route('archive');
    });
    this.route('stories', function() {
      this.route('show', { path: '/:news_story_slug' });
      this.route('archive');
    });
    this.route('congressional-testimony', { path: '/testimony' }, function() {
      this.route('show', { path: '/:congressional_testimony_slug' });
      this.route('archive');
    });

    this.route('speeches', function() {
      this.route('show',{ path: '/:speech_slug' });
      this.route('archive');
    });
    this.route('page', { path: '/:page_slug' });
    this.route('404');
  });
});
