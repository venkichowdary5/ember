import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NewsRoomControler extends Controller {
  queryParams = [
    'filterBy',
    'year',
    'region',
    'state',
    'issue',
    'field_story'
  ];

  @tracked filterBy = null;
  @tracked year = null;
  @tracked region = null;
  @tracked state = null;
  @tracked issue = null;
  @tracked field_story = null;


  get queryParamValues() {
    let {
      filterBy,
      year,
      region,
      state,
      issue,
      field_story
    } = this;
    return {
      filterBy,
      year,
      region,
      state,
      issue,
      field_story
    }
  }

  @action setQueryParams(queryParamName, queryParamValue) {
    switch(queryParamName) {
      case 'filterBy':
        this.filterBy = queryParamValue;
        this.year = null;
        this.region = null;
        this.state = null;
        this.issue = null;
        break;
      
      case 'year':
        this.year = queryParamValue;
        this.region = null;
        this.state = null;
        this.issue = null;
        break;
      
      case 'region':
        this.region = queryParamValue;
        this.year = null;
        this.state = null;
        this.issue = null;
        break;

      case 'state':
        this.state = queryParamValue;
        this.year = null;
        this.region = null;
        this.issue = null;
        break;

      case 'issue':
        this.issue = queryParamValue;
        this.year = null;
        this.region = null;
        this.state = null;
        break;
      case 'field_story':
        this.field_story = queryParamValue;
        this.year = null;
        this.region = null;
        this.state = null;
        this.issue = null;
        break;  
      default:
        break;
    }
  }
}
