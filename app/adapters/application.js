import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { underscore } from '@ember/string';
import config from 'ember-drupal/config/environment';
import $ from 'jquery';

export default class ApplicationAdapter extends JSONAPIAdapter {

	host = config.hostURL;

	namespace = 'api/content';

	pathForType(type) {
    return underscore(type);
	}
	
	buildURL(modelName, id, snapshot, requestType, query) {
		let url = this._buildURL('', id, snapshot, requestType, query);
    let queryParams = snapshot.adapterOptions.query;
    if (queryParams) {
      url += '?format=json&count=10' + `&type=${this.pathForType(modelName)}&` + $.param(queryParams);
    } else {
			url += '?format=json&count=10' + `&type=${this.pathForType(modelName)}`
		}
    return url;
	}

	get headers() {
    return {
      'withCredentials': true,
      'Authorization': 'Basic YWRtaW46ZHJ1cGFs'
    };
  }
}
