/*import Route from '@ember/routing/route';

export default class NewsRoute extends Route {
}*/

import Ember from 'ember';

export default Ember.Route.extend({
    model(){
	   //return this.get('store').findAll('news');
       return this.store.findAll('news');
       //return [1,2,3,4,5];
    }
	
   
})
