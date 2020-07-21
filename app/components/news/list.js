import Component from '@glimmer/component';
import {
  isBlank,
  isPresent,
} from '@ember/utils';
import moment from 'moment';

export default class NewsListComponent extends Component {
  get heading() {
    let { args: { modelName } } = this;
    let heading = '';

    switch (modelName) {
      case 'news-release':
        heading = 'News Releases';
        break;

      case 'stories':
        heading = 'News Stories';
        break;

      case 'speech':
        heading = 'Speeches';
        break;
    
      default:
        break;
    }

    return heading
  }

  get isViewingArchiveByYear() {
    let { args: { setArchiveYear } } = this;

    return isPresent(setArchiveYear)
  }

  archiveYearOptions = [
    2017,
    2016,
    2015,
    2014,
    2013,
  ];
  
  get filteredNews() {
    let {
      args: {
        filters,
        newsItems,
        archiveYear,
      },
      isViewingArchiveByYear
    } = this;

    if (isBlank(newsItems))
      return [];

    let filteredNews = newsItems;

    if (isPresent(filters) && isPresent(filters.filterBy)) {
      switch(filters.filterBy) {        
        case 'year':
          if (isPresent(filters.year)) {
            filteredNews = newsItems.filter(item => {
              return isPresent(item.field_date_to_be_published) && moment(item.field_date_to_be_published).format('YYYY') === filters.year;
            });
          }
          break;
        
        case 'region':
          if (isPresent(filters.region)) {
            filteredNews = newsItems.filter(item => {
              return isPresent(item.field_region) && item.field_region === filters.region;
            });
          }
          break;
  
        case 'state':
          if (isPresent(filters.state)) {
            filteredNews = newsItems.filter(item => {
              return isPresent(item.field_state) && item.field_state === filters.state;
            });
          }
          break;
  
        case 'topic':
          if (isPresent(filters.topic)) {
            filteredNews = newsItems.filter(item => {
              return isPresent(item.field_issue_number) && item.field_issue_number === filters.topic;
            });
          }
          break;
        default:
          break;
      }
    }

    if (isViewingArchiveByYear && isPresent(archiveYear)) {
      return filteredNews.filter(item => {
        return isPresent(item.field_date_to_be_published) && moment(item.field_date_to_be_published).format('YYYY') === archiveYear;
      });
    }
    return filteredNews;
  }
}