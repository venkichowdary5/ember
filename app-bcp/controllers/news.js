import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import moment from 'moment';

export default Controller.extend({
breadcrumbs: service(),
  pageNumber: 1,
  lastPage: null,
  canLoadMore: null,
  contentType: null,
filterBy: null,
  init() {
    this._super(...arguments);
    this.set('activeFilters', []);
    this.set('filterBy', {});
  },

 actions: {
 
      filterBy(value) {
        // let filterByValue = JSON.parse(value);
        // this.set('filterBy', filterByValue);
        let oldFilterBy = this.get('filterBy');
        let filterByValue = JSON.parse(value);
        // filterByValue[value] = true;
        this.set('filterBy', filterByValue);
        // This resets the filters when switching between archived and not
        if(!oldFilterBy.archive && filterByValue.archive) {
            this.set('activeFilters', []);
            let archivedDateDescription = this.get('archivedDateDescription');
            let archivedDateField = this.get('archivedDateField');
            this.send('addFilter', 'archived_field_date', archivedDateField, 'lt', '2017-01-18', archivedDateDescription);
            this.set('pageNumber', 1);
            this.send('filter');
        } else if (oldFilterBy.archive && !filterByValue.archive) {
            this.set('activeFilters', []);
            this.set('pageNumber', 1);
            this.send('filter');
        }

    },
	addFilter(key, field, equality, value, description) {
        let activeFilters = this.get('activeFilters');
        let filterDescription = description ? description : value;
        let newFilter = {key: key, field: field, type: equality, value: value, description: filterDescription};
        console.log("---->"+value);
        console.log("---->"+equality);
        if (key === 'archived_field_date') {
            this.set('activeFilters', [newFilter]);
        }

        // This sets it so that the same filter isn't duplicated on the UI
        // IE: Clicking Great Plains twice should not re filter on Great Plains if it's already selected
        if(activeFilters.mapBy('description').indexOf(filterDescription) === -1) {
            activeFilters.pushObject(newFilter);
            this.set('pageNumber', 1);
            this.send('filter');
        }
    },
	 filter() {
        let contentType = this.get('contentType');
        let archivedDateField = this.get('archivedDateField');
        let archivedDateDescription = this.get('archivedDateDescription');
        let activeFilters = this.get('activeFilters');

        var self = this;
        let queryFilter = {};

        // We loop through all the filters selected and map them by key
        // to create a collection of 'in' filters.
        // Allowing us to get releases from 2017 && 2018
        let activeFilterKeys = activeFilters.mapBy('key');
        // If the 'archive' filter is selected we remove that from the activeFilterKeys
        // because it will attempt to use 'archived_field_date' as a filter which doesn't exist
        let archivedFieldDateIndex = activeFilterKeys.indexOf('archived_field_date');
        if (archivedFieldDateIndex > -1) {
            activeFilterKeys.removeAt(archivedFieldDateIndex);
        }

        activeFilterKeys.forEach(function(key, index) {
            let filters = activeFilters.filter(function(x) { if(x.key === key) { return x; }});
            queryFilter[index] = {field: key, type: 'in'};
            queryFilter[index]['values'] = [];
            filters.forEach((f, idx) => {
                queryFilter[index]['values'][idx]=f.value;
            });
        });

        // If 'archived' is not active, then add the gt value to the query.
        if (activeFilters.mapBy('description').indexOf(archivedDateDescription) === -1) {
            // let index = Object.keys(queryFilter).length;
            // queryFilter[index] = {field: archivedDateField, type: 'gt', value: '2017-01-18'};
        } else {
            let index = Object.keys(queryFilter).length;
            queryFilter[index] = {field: archivedDateField, type: 'lt', value: '2017-01-18'};
        }

        // News Release and News Story both use the NewsRelease model
        // So we need to filter on isStory in order to return just releases vs stories
        if (contentType === 'news_release') {
            let isStory = this.get('isStory');
            let index = Object.keys(queryFilter).length;
            queryFilter[index] = {field: 'field_story', type: 'eq', value: isStory};
            let thisMinute = moment().utc().format('YYYY-MM-DDTHH:MM');
            queryFilter[index+1] = {field: archivedDateField, type: 'lt', value: thisMinute};
        }
        //if (contentType === 'congressional-testimony') {
        //    let contentType = 'testimony';
        //    let index = Object.keys(queryFilter).length;
        //    queryFilter[index] = {field: archivedDateField, type: 'lt', value: '2017-01-18'};

       // }

        let orderBy = {};
        orderBy[0] = {field: archivedDateField, type: 'field', direction: 'desc'};

       /* return this.get('store').query(contentType, {
          page: self.get('pageNumber'),
          filter: queryFilter,
          'order-by': orderBy

        }).then(function(results) {
            self.set('lastPage', results.get('meta').pageCount);
            self.set('canLoadMore', results.get('meta').pageCount > self.get('pageNumber'));
            self.set('model', results);
            self.set('lastPage', results.get('meta').pageCount);
            self.set('canLoadMore', results.get('meta').totalRecords > 1);
            self.set('first', results.get('links').first)
            self.set('previous', results.get('links').previous)
            self.set('next', results.get('links').next)
            self.set('last', results.get('links').last)
            self.set('totalPage', results.get('meta').totalRecords);
            window.scrollTo(0, 0);
         }); */
        // this.refresh();
        // this.refreshModel();
    }
}

});
