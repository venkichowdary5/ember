import Component from '@glimmer/component';
import { action } from '@ember/object'
import { inject as service } from '@ember/service';

export default class SideBarComponent extends Component {
  @service
  router

  newsReleaseFilterOptions = [
    {
      propertyName:'year',
      subOptions: [
        2020,
        2019,
        2018,
        2017,
      ],
    }, {
      propertyName:'region',
      subOptions: [
        'Commissioner Office',
        'Arkansas-Rio Grande-Texas Gulf',
        'California-Great Basin',
        'Columbia-Pacific Northwest',
        'Lower Colorado Basin',
        'Missouri Basin',
        'Upper Colorado Basin',
      ],
    }, {
      propertyName:'state',
      subOptions: [
        'Arizona',
        'California',
        'Colorado',
        'Hawaii',
        'Idaho',
        'Kansas',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Mexico',
        'North Dakota',
        'Oklahoma',
        'Oregon',
        'South Dakota',
        'Texas',
        'Utah',
        'Washington',
        'Washington, D.C.',
        'Wyoming',
      ],
    }, {
      propertyName:'topic',
      subOptions: [
        'Bureau of Reclamation',
        'California Water',
        'Ecosystem Restoration',
        'Hydropower',
        'Facilities',
        'Recreation',
        'Research',
        'Rural Water',
        'Safety of Dams',
        'Supporting Tribal Nations',
        'WaterSMART',
        'Youth',
      ],
    }
  ];

  newsStoriesFilterOptions = [
   {
        propertyName:'region',
        subOptions: [
          'Commissioner Office',
          'Arkansas-Rio Grande-Texas Gulf',
          'California-Great Basin',
          'Columbia-Pacific Northwest',
          'Lower Colorado Basin',
          'Missouri Basin',
          'Upper Colorado Basin',
        ],
      }, {
        propertyName:'topic',
        subOptions: [
          'Bureau of Reclamation',
          'California Water',
          'Ecosystem Restoration',
          'Hydropower',
          'Facilities',
          'Recreation',
          'Research',
          'Rural Water',
          'Safety of Dams',
          'Supporting Tribal Nations',
          'WaterSMART',
          'Youth',
        ],
      }
  ];

  sideBarItems = [
    {
      label: 'News Releases',
      routeName: 'news-room.news-releases',
      filters: this.newsReleaseFilterOptions
    }, {
      label: 'News Stories',
      routeName: 'news-room.stories',
      filters: this.newsStoriesFilterOptions
    }, {
      label: 'Speeches',
      routeName: 'news-room.speeches',
    }, {
      label: 'Congressional Testimony',
      routeName: 'news-room.congressional-testimony',
    }
  ];

  @action
  setFilter(filterName, filterValue) {
    this.args.setQueryParams(filterName, filterValue);
  }

  @action
  goToArchives(routePath) {
    this.router.transitionTo(`${routePath}.archive`);
  }
}