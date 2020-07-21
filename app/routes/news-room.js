import Route from '@ember/routing/route';

export default class NewsRoomRoute extends Route {
	queryParams = {
		filterBy: {
			refreshModel: false,
		},
    year: {
			refreshModel: false,
		},
    region: {
			refreshModel: false,
		},
    state: {
			refreshModel: false,
		},
    topic: {
			refreshModel: false,
		},
	};
}
