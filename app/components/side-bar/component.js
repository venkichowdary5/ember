import Component from '@glimmer/component';
import { action } from '@ember/object'
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SideBarComponent extends Component {
  @service
  router
  params=[]
  archiveParams=[]
  filterState = false
  filterStateString
  filterValueReset
  @tracked selectedItem
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
      propertyName:'issue',
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
        propertyName:'issue',
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
      routeName: 'news-room.news-releases',
      filters: this.newsStoriesFilterOptions
    }, {
      label: 'Speeches',
      routeName: 'news-room.speeches',
    }, {
      label: 'Congressional Testimony',
      routeName: 'news-room.congressional-testimony',
    }
    , {
      label: 'Fact Sheet',
      routeName: 'news-room.fact-sheet',
    },
    {
      label: 'Leadership Bios',
      routeName: 'news-room.biography',
    },
    {
      label: 'Organization Chart',
      routeName: '../assets/pdf/br_org_chart.pdf'
    },
    {
      label: 'Photos',
      routeName: 'https://www.usbr.gov/main/multimedia/index.html#photos'
    },
    {
      label: 'Multimedia',
      routeName: 'https://www.usbr.gov/main/multimedia/index.html#video'
    },
    {
      label: 'Social Media',
      routeName: 'https://www.usbr.gov/main/multimedia/index.html#social'
    }
  ];

  @action
  setFilter(filterName, filterValue, routePath ) {
    this.filterValueReset = filterValue;  
    if(filterValue == 'archive'){
      this.archiveParams.filter(item => {
        this.args.setQueryParams(item, null);
      });
       this.router.transitionTo(`${filterName}.archive`);
    }else {
      // if(this.filterState && this.filterStateString == 'checked'){
      //   this.args.setQueryParams(filterName, null);
      // } else {
      //   this.params =[];
      //   this.params.pushObject(filterName);
      //   this.archiveParams.pushObject(filterName);
      //   this.router.transitionTo(`${routePath}`);
      //   this.params.filter(item => {
      //     this.args.setQueryParams(item, null);
      //   });
      //   this.args.setQueryParams(filterName, filterValue);
      // } 
        if(!(filterName == 'field_story')){
          this.args.setQueryParams('field_story', null);
        }else {
          this.args.setQueryParams('filterBy', null);
        }          
        this.params =[];
        this.params.pushObject(filterName);
        this.archiveParams.pushObject(filterName);
        this.params.filter(item => {
        this.args.setQueryParams('item', null);
        });
        this.router.transitionTo(`${routePath}`);
        this.args.setQueryParams(filterName, filterValue);
    }
  }

  @action
  toggleFilter(routePath) {
    this.filterStateString = 'checked'
    this.filterState = !this.filterState
  }
  @action
  setCurrentTab(selectedItem){
    this.selectedItem = selectedItem;
  }
}