/*import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
    
}*/

import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    urlForFindAll(modelName,snapshot)
    {
        return 'content.json';
    }
})
