import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { inject as service} from '@ember/service';
import { action } from '@ember/object';
import { isPresent } from '@ember/utils';

export default class NewsLoaderComponent extends Component {
  @service
  store

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
			return {
				[filterBy]: params[filterBy],
			}
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