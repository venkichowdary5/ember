import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { inject as service} from '@ember/service';
import { action } from '@ember/object';
import { isPresent } from '@ember/utils';

export default class NewsLoaderComponent extends Component {
  @service
  store
  router
  @tracked
  newsItems = []

  getApplicableParams(params, archiveYear) {
		const {
			filterBy,
		} = params;

		if (isPresent(archiveYear)) {
			return {
				from: `${archiveYear}-01-01`,
				to: `${archiveYear}-12-31`
			}
		}

		if (isPresent(filterBy) && isPresent(params[filterBy])) {
			if(params.field_story){
				let filter = {
					[filterBy]: params[filterBy]
				}
				return Object.assign({},{field_story:1},filter)
			}
			return {
				[filterBy]: params[filterBy],
			}
		}
		if(params.field_story){
			return {field_story:1}
		}
	}

  @action
  async loader(modelName, queryParams, archiveYear) {
    const query = this.getApplicableParams(queryParams, archiveYear);
    let newsItems = await this.store.findAll(modelName, {
      adapterOptions: {
        query
      }
		});
		
		this.newsItems = newsItems.toArray();
  }
} 