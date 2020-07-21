/*import Model from '@ember-data/model';

export default class NewsModel extends Model {

}*/

import DS from 'ember-data';

export default DS.Model.extend({

    field_date_to_be_published : DS.attr('string'),
    title : DS.attr('string'),
	body : DS.attr('string'),
    field_state: DS.attr('string'),
	//contentType: DS.attr('string')
	
});