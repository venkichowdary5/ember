'use strict';



;define("ember-drupal/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("ember-drupal/adapters/application", ["exports", "@ember-data/adapter/json-api", "ember-drupal/config/environment", "jquery"], function (_exports, _jsonApi, _environment, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class ApplicationAdapter extends _jsonApi.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "host", _environment.default.hostURL);

      _defineProperty(this, "namespace", 'api/content');
    }

    pathForType(type) {
      return Ember.String.underscore(type);
    }

    buildURL(modelName, id, snapshot, requestType, query) {
      let url = this._buildURL('', id, snapshot, requestType, query);

      let queryParams = snapshot.adapterOptions.query;

      if (queryParams) {
        url += '?format=json&count=10' + `&type=${this.pathForType(modelName)}&` + _jquery.default.param(queryParams);
      } else {
        url += '?format=json&count=10' + `&type=${this.pathForType(modelName)}`;
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

  _exports.default = ApplicationAdapter;
});
;define("ember-drupal/app", ["exports", "ember-resolver", "ember-load-initializers", "ember-drupal/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("ember-drupal/authenticators/oauth2", ["exports", "ember-simple-auth/authenticators/oauth2-password-grant", "ember-drupal/config/environment"], function (_exports, _oauth2PasswordGrant, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    hostURL
  } = _environment.default;

  var _default = _oauth2PasswordGrant.default.extend({
    serverTokenEndpoint: [hostURL, 'rest/session', 'token'].join('/')
  });

  _exports.default = _default;
});
;define("ember-drupal/authorizers/application", ["exports", "ember-simple-auth/authorizers/oauth2-bearer"], function (_exports, _oauth2Bearer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _oauth2Bearer.default.extend({});

  _exports.default = _default;
});
;define("ember-drupal/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("ember-drupal/components/bs-accordion", ["exports", "ember-bootstrap/components/bs-accordion"], function (_exports, _bsAccordion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
;define("ember-drupal/components/bs-accordion/item", ["exports", "ember-bootstrap/components/bs-accordion/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("ember-drupal/components/bs-accordion/item/body", ["exports", "ember-bootstrap/components/bs-accordion/item/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define("ember-drupal/components/bs-accordion/item/title", ["exports", "ember-bootstrap/components/bs-accordion/item/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define("ember-drupal/components/bs-alert", ["exports", "ember-bootstrap/components/bs-alert"], function (_exports, _bsAlert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
;define("ember-drupal/components/bs-button-group", ["exports", "ember-bootstrap/components/bs-button-group"], function (_exports, _bsButtonGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
;define("ember-drupal/components/bs-button-group/button", ["exports", "ember-bootstrap/components/bs-button-group/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define("ember-drupal/components/bs-button", ["exports", "ember-bootstrap/components/bs-button"], function (_exports, _bsButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
;define("ember-drupal/components/bs-carousel", ["exports", "ember-bootstrap/components/bs-carousel"], function (_exports, _bsCarousel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
;define("ember-drupal/components/bs-carousel/slide", ["exports", "ember-bootstrap/components/bs-carousel/slide"], function (_exports, _slide) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
;define("ember-drupal/components/bs-collapse", ["exports", "ember-bootstrap/components/bs-collapse"], function (_exports, _bsCollapse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
;define("ember-drupal/components/bs-dropdown", ["exports", "ember-bootstrap/components/bs-dropdown"], function (_exports, _bsDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
;define("ember-drupal/components/bs-dropdown/button", ["exports", "ember-bootstrap/components/bs-dropdown/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define("ember-drupal/components/bs-dropdown/menu", ["exports", "ember-bootstrap/components/bs-dropdown/menu"], function (_exports, _menu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
;define("ember-drupal/components/bs-dropdown/menu/divider", ["exports", "ember-bootstrap/components/bs-dropdown/menu/divider"], function (_exports, _divider) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
;define("ember-drupal/components/bs-dropdown/menu/item", ["exports", "ember-bootstrap/components/bs-dropdown/menu/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("ember-drupal/components/bs-dropdown/menu/link-to", ["exports", "ember-bootstrap/components/bs-dropdown/menu/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("ember-drupal/components/bs-dropdown/toggle", ["exports", "ember-bootstrap/components/bs-dropdown/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define("ember-drupal/components/bs-form", ["exports", "ember-bootstrap/components/bs-form"], function (_exports, _bsForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
;define("ember-drupal/components/bs-form/element", ["exports", "ember-bootstrap/components/bs-form/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("ember-drupal/components/bs-form/element/control", ["exports", "ember-bootstrap/components/bs-form/element/control"], function (_exports, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
;define("ember-drupal/components/bs-form/element/control/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/control/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("ember-drupal/components/bs-form/element/control/input", ["exports", "ember-bootstrap/components/bs-form/element/control/input"], function (_exports, _input) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
;define("ember-drupal/components/bs-form/element/control/radio", ["exports", "ember-bootstrap/components/bs-form/element/control/radio"], function (_exports, _radio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
});
;define("ember-drupal/components/bs-form/element/control/textarea", ["exports", "ember-bootstrap/components/bs-form/element/control/textarea"], function (_exports, _textarea) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
;define("ember-drupal/components/bs-form/element/errors", ["exports", "ember-bootstrap/components/bs-form/element/errors"], function (_exports, _errors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
;define("ember-drupal/components/bs-form/element/feedback-icon", ["exports", "ember-bootstrap/components/bs-form/element/feedback-icon"], function (_exports, _feedbackIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
;define("ember-drupal/components/bs-form/element/help-text", ["exports", "ember-bootstrap/components/bs-form/element/help-text"], function (_exports, _helpText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
;define("ember-drupal/components/bs-form/element/label", ["exports", "ember-bootstrap/components/bs-form/element/label"], function (_exports, _label) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
;define("ember-drupal/components/bs-form/element/layout/horizontal", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal"], function (_exports, _horizontal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
;define("ember-drupal/components/bs-form/element/layout/horizontal/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("ember-drupal/components/bs-form/element/layout/inline", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline"], function (_exports, _inline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
;define("ember-drupal/components/bs-form/element/layout/inline/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("ember-drupal/components/bs-form/element/layout/vertical", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical"], function (_exports, _vertical) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
;define("ember-drupal/components/bs-form/element/layout/vertical/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("ember-drupal/components/bs-form/group", ["exports", "ember-bootstrap/components/bs-form/group"], function (_exports, _group) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
;define("ember-drupal/components/bs-modal-simple", ["exports", "ember-bootstrap/components/bs-modal-simple"], function (_exports, _bsModalSimple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
;define("ember-drupal/components/bs-modal", ["exports", "ember-bootstrap/components/bs-modal"], function (_exports, _bsModal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
;define("ember-drupal/components/bs-modal/body", ["exports", "ember-bootstrap/components/bs-modal/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define("ember-drupal/components/bs-modal/dialog", ["exports", "ember-bootstrap/components/bs-modal/dialog"], function (_exports, _dialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
;define("ember-drupal/components/bs-modal/footer", ["exports", "ember-bootstrap/components/bs-modal/footer"], function (_exports, _footer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
;define("ember-drupal/components/bs-modal/header", ["exports", "ember-bootstrap/components/bs-modal/header"], function (_exports, _header) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
;define("ember-drupal/components/bs-modal/header/close", ["exports", "ember-bootstrap/components/bs-modal/header/close"], function (_exports, _close) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
;define("ember-drupal/components/bs-modal/header/title", ["exports", "ember-bootstrap/components/bs-modal/header/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define("ember-drupal/components/bs-nav", ["exports", "ember-bootstrap/components/bs-nav"], function (_exports, _bsNav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
;define("ember-drupal/components/bs-nav/item", ["exports", "ember-bootstrap/components/bs-nav/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("ember-drupal/components/bs-nav/link-to", ["exports", "ember-bootstrap/components/bs-nav/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("ember-drupal/components/bs-navbar", ["exports", "ember-bootstrap/components/bs-navbar"], function (_exports, _bsNavbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
;define("ember-drupal/components/bs-navbar/content", ["exports", "ember-bootstrap/components/bs-navbar/content"], function (_exports, _content) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
;define("ember-drupal/components/bs-navbar/link-to", ["exports", "ember-bootstrap/components/bs-navbar/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("ember-drupal/components/bs-navbar/nav", ["exports", "ember-bootstrap/components/bs-navbar/nav"], function (_exports, _nav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
;define("ember-drupal/components/bs-navbar/toggle", ["exports", "ember-bootstrap/components/bs-navbar/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define("ember-drupal/components/bs-popover", ["exports", "ember-bootstrap/components/bs-popover"], function (_exports, _bsPopover) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
;define("ember-drupal/components/bs-popover/element", ["exports", "ember-bootstrap/components/bs-popover/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("ember-drupal/components/bs-progress", ["exports", "ember-bootstrap/components/bs-progress"], function (_exports, _bsProgress) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
;define("ember-drupal/components/bs-progress/bar", ["exports", "ember-bootstrap/components/bs-progress/bar"], function (_exports, _bar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
;define("ember-drupal/components/bs-tab", ["exports", "ember-bootstrap/components/bs-tab"], function (_exports, _bsTab) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
;define("ember-drupal/components/bs-tab/pane", ["exports", "ember-bootstrap/components/bs-tab/pane"], function (_exports, _pane) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
;define("ember-drupal/components/bs-tooltip", ["exports", "ember-bootstrap/components/bs-tooltip"], function (_exports, _bsTooltip) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
;define("ember-drupal/components/bs-tooltip/element", ["exports", "ember-bootstrap/components/bs-tooltip/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("ember-drupal/components/ember-popper-targeting-parent", ["exports", "ember-popper/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("ember-drupal/components/ember-popper", ["exports", "ember-popper/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("ember-drupal/components/news/item", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <p class="h3">
    <small>{{moment-format @newsItem.field_date_to_be_published "ll"}}</small>
    <br>
    <a href="newsrelease/detail.cfm?RecordID=71664">
      <b>{{@newsItem.title}}</b>
    </a>
  </p>
  
  <p></p>
  
  <p>
    {{#if @trimItemBody}}
      {{html-safe (trim-string @newsItem.body 300)}}...
    {{else}}
      {{html-safe @newsItem.body}}
    {{/if}}
  </p>
  */
  {
    id: "WArpGU9g",
    block: "{\"symbols\":[\"@newsItem\",\"@trimItemBody\"],\"statements\":[[10,\"p\"],[14,0,\"h3\"],[12],[2,\"\\n  \"],[10,\"small\"],[12],[1,[30,[36,2],[[32,1,[\"field_date_to_be_published\"]],\"ll\"],null]],[13],[2,\"\\n  \"],[10,\"br\"],[12],[13],[2,\"\\n  \"],[10,\"a\"],[14,6,\"newsrelease/detail.cfm?RecordID=71664\"],[12],[2,\"\\n    \"],[10,\"b\"],[12],[1,[32,1,[\"title\"]]],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"p\"],[12],[13],[2,\"\\n\\n\"],[10,\"p\"],[12],[2,\"\\n\"],[6,[37,3],[[32,2]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[1,[30,[36,0],[[30,[36,1],[[32,1,[\"body\"]],300],null]],null]],[2,\"...\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"    \"],[1,[30,[36,0],[[32,1,[\"body\"]]],null]],[2,\"\\n\"]],\"parameters\":[]}]]],[13]],\"hasEval\":false,\"upvars\":[\"html-safe\",\"trim-string\",\"moment-format\",\"if\"]}",
    meta: {
      moduleName: "ember-drupal/components/news/item.hbs"
    }
  });

  class NewsItemComponent extends _component.default {}

  _exports.default = NewsItemComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, NewsItemComponent);
});
;define("ember-drupal/components/news/list", ["exports", "@glimmer/component", "moment"], function (_exports, _component, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="Main-well">
    <h2 class="h1">{{this.heading}}</h2>
    {{#if this.isViewingArchiveByYear}}
      <p>
        <small>
          {{#each this.archiveYearOptions as |year|}}
            <a
              href="javascript:void(0)"
              {{on "click" (fn @setArchiveYear year)}}
            >
              {{year}}
            </a>
          {{/each}}
        </small>
      </p>
    {{/if}}
    <ul class="MediaList">
      {{#each this.filteredNews as |newsItem|}}
        <li class="MediaList-item">
          <News::item
            @newsItem={{newsItem}}
            @trimItemBody={{true}}
          />
        </li>
      {{/each}}
    </ul>
  </div>
  */
  {
    id: "ky/AnhEm",
    block: "{\"symbols\":[\"newsItem\",\"year\",\"@setArchiveYear\"],\"statements\":[[10,\"div\"],[14,0,\"Main-well\"],[12],[2,\"\\n  \"],[10,\"h2\"],[14,0,\"h1\"],[12],[1,[32,0,[\"heading\"]]],[13],[2,\"\\n\"],[6,[37,4],[[32,0,[\"isViewingArchiveByYear\"]]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"p\"],[12],[2,\"\\n      \"],[10,\"small\"],[12],[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[30,[36,2],[[32,0,[\"archiveYearOptions\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[11,\"a\"],[24,6,\"javascript:void(0)\"],[4,[38,1],[\"click\",[30,[36,0],[[32,3],[32,2]],null]],null],[12],[2,\"\\n            \"],[1,[32,2]],[2,\"\\n          \"],[13],[2,\"\\n\"]],\"parameters\":[2]}]]],[2,\"      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[10,\"ul\"],[14,0,\"MediaList\"],[12],[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[30,[36,2],[[32,0,[\"filteredNews\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"li\"],[14,0,\"MediaList-item\"],[12],[2,\"\\n        \"],[8,\"news/item\",[],[[\"@newsItem\",\"@trimItemBody\"],[[32,1],true]],null],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"  \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"fn\",\"on\",\"-track-array\",\"each\",\"if\"]}",
    meta: {
      moduleName: "ember-drupal/components/news/list.hbs"
    }
  });

  class NewsListComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "archiveYearOptions", [2017, 2016, 2015, 2014, 2013]);
    }

    get heading() {
      let {
        args: {
          modelName
        }
      } = this;
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

      return heading;
    }

    get isViewingArchiveByYear() {
      let {
        args: {
          setArchiveYear
        }
      } = this;
      return Ember.isPresent(setArchiveYear);
    }

    get filteredNews() {
      let {
        args: {
          filters,
          newsItems,
          archiveYear
        },
        isViewingArchiveByYear
      } = this;
      if (Ember.isBlank(newsItems)) return [];
      let filteredNews = newsItems;

      if (Ember.isPresent(filters) && Ember.isPresent(filters.filterBy)) {
        switch (filters.filterBy) {
          case 'year':
            if (Ember.isPresent(filters.year)) {
              filteredNews = newsItems.filter(item => {
                return Ember.isPresent(item.field_date_to_be_published) && (0, _moment.default)(item.field_date_to_be_published).format('YYYY') === filters.year;
              });
            }

            break;

          case 'region':
            if (Ember.isPresent(filters.region)) {
              filteredNews = newsItems.filter(item => {
                return Ember.isPresent(item.field_region) && item.field_region === filters.region;
              });
            }

            break;

          case 'state':
            if (Ember.isPresent(filters.state)) {
              filteredNews = newsItems.filter(item => {
                return Ember.isPresent(item.field_state) && item.field_state === filters.state;
              });
            }

            break;

          case 'topic':
            if (Ember.isPresent(filters.topic)) {
              filteredNews = newsItems.filter(item => {
                return Ember.isPresent(item.field_issue_number) && item.field_issue_number === filters.topic;
              });
            }

            break;

          default:
            break;
        }
      }

      if (isViewingArchiveByYear && Ember.isPresent(archiveYear)) {
        return filteredNews.filter(item => {
          return Ember.isPresent(item.field_date_to_be_published) && (0, _moment.default)(item.field_date_to_be_published).format('YYYY') === archiveYear;
        });
      }

      return filteredNews;
    }

  }

  _exports.default = NewsListComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, NewsListComponent);
});
;define("ember-drupal/components/news/loader", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div
    {{did-insert (fn this.loader @modelName @queryParams @archiveYear)}}
    {{did-update (fn this.loader @modelName @queryParams @archiveYear)}}
  ></div>
  <News::List
    @newsItems={{this.newsItems}}
    @filters={{@queryParams}}
    @trimItemBody={{true}}
    @modelName={{@modelName}}
    @setArchiveYear={{@setArchiveYear}}
    @archiveYear={{@archiveYear}}
  />
  */
  {
    id: "mDvkUik0",
    block: "{\"symbols\":[\"@archiveYear\",\"@queryParams\",\"@modelName\",\"@setArchiveYear\"],\"statements\":[[11,\"div\"],[4,[38,1],[[30,[36,0],[[32,0,[\"loader\"]],[32,3],[32,2],[32,1]],null]],null],[4,[38,2],[[30,[36,0],[[32,0,[\"loader\"]],[32,3],[32,2],[32,1]],null]],null],[12],[13],[2,\"\\n\"],[8,\"news/list\",[],[[\"@newsItems\",\"@filters\",\"@trimItemBody\",\"@modelName\",\"@setArchiveYear\",\"@archiveYear\"],[[32,0,[\"newsItems\"]],[32,2],true,[32,3],[32,4],[32,1]]],null]],\"hasEval\":false,\"upvars\":[\"fn\",\"did-insert\",\"did-update\"]}",
    meta: {
      moduleName: "ember-drupal/components/news/loader.hbs"
    }
  });

  let NewsLoaderComponent = (_dec = Ember.inject.service, _dec2 = Ember._tracked, _dec3 = Ember._action, (_class = (_temp = class NewsLoaderComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "store", _descriptor, this);

      _initializerDefineProperty(this, "newsItems", _descriptor2, this);
    }

    getApplicableParams(params, archiveYear) {
      const {
        filterBy
      } = params;

      if (Ember.isPresent(archiveYear)) {
        return {
          from: `${archiveYear}-01-01`,
          to: `${archiveYear}-12-31`
        };
      }

      if (Ember.isPresent(filterBy) && Ember.isPresent(params[filterBy])) {
        return {
          [filterBy]: params[filterBy]
        };
      }
    }

    async loader(modelName, queryParams, archiveYear) {
      const query = this.getApplicableParams(queryParams, archiveYear);
      let newsItems = await this.store.findAll(modelName, {
        adapterOptions: {
          query
        }
      });
      this.newsItems = newsItems.toArray();
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "newsItems", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "loader", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "loader"), _class.prototype)), _class));
  _exports.default = NewsLoaderComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, NewsLoaderComponent);
});
;define("ember-drupal/components/side-bar/component", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="Main-nav">
    <div class="LeftNav" role="navigation">
      <span class="LeftNav-title">NEWS & MULTIMEDIA</span>
      <ul class="LeftNav-list">
        {{#each this.sideBarItems as |sideBarItem|}}
          {{#let (string-contains sideBarItem.routeName this.router.currentRouteName) as |isRouteActive|}}
            <li
              class={{if isRouteActive "-active"}}
            >
              <LinkTo
                @route={{sideBarItem.routeName}}
              >
                {{sideBarItem.label}}
              </LinkTo>
  
              {{#if isRouteActive}}
                <ul>
                  {{#each sideBarItem.filters as |filter|}}
                    <li>
                      <a
                        href="javascript:void(0)"
                        {{on "click" (fn this.setFilter 'filterBy' filter.propertyName)}}
                      >
                        Filter By {{filter.propertyName}}
                      </a>
  
                      {{#if (equal @queryParams.filterBy filter.propertyName)}}
                        <ul>
                          {{#each filter.subOptions as |subOption|}}
                            <li>
                              <a
                                href="javascript:void(0)"
                                {{on "click" (fn this.setFilter filter.propertyName subOption)}}
                              >
                                {{subOption}}
                              </a>
                            </li>
                          {{/each}}
                        </ul>
                      {{/if}}
                    </li>
                  {{/each}}
                  <li>
                    <a
                      href="javascript:void(0)"
                      {{on "click" (fn this.goToArchives sideBarItem.routeName)}}
                    >
                      Archived {{sideBarItem.label}}
                    </a>
                  </li>
                </ul>
              {{/if}}
            </li>
          {{/let}}
        {{/each}}
      </ul>
    </div>
  </div>
  */
  {
    id: "3CsHk6JM",
    block: "{\"symbols\":[\"sideBarItem\",\"isRouteActive\",\"filter\",\"subOption\",\"@queryParams\"],\"statements\":[[10,\"div\"],[14,0,\"Main-nav\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"LeftNav\"],[14,\"role\",\"navigation\"],[12],[2,\"\\n    \"],[10,\"span\"],[14,0,\"LeftNav-title\"],[12],[2,\"NEWS & MULTIMEDIA\"],[13],[2,\"\\n    \"],[10,\"ul\"],[14,0,\"LeftNav-list\"],[12],[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[30,[36,2],[[32,0,[\"sideBarItems\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[6,[37,7],[[30,[36,6],[[32,1,[\"routeName\"]],[32,0,[\"router\",\"currentRouteName\"]]],null]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"li\"],[15,0,[30,[36,5],[[32,2],\"-active\"],null]],[12],[2,\"\\n            \"],[8,\"link-to\",[],[[\"@route\"],[[32,1,[\"routeName\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n              \"],[1,[32,1,[\"label\"]]],[2,\"\\n            \"]],\"parameters\":[]}]]],[2,\"\\n\\n\"],[6,[37,5],[[32,2]],null,[[\"default\"],[{\"statements\":[[2,\"              \"],[10,\"ul\"],[12],[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[30,[36,2],[[32,1,[\"filters\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"                  \"],[10,\"li\"],[12],[2,\"\\n                    \"],[11,\"a\"],[24,6,\"javascript:void(0)\"],[4,[38,1],[\"click\",[30,[36,0],[[32,0,[\"setFilter\"]],\"filterBy\",[32,3,[\"propertyName\"]]],null]],null],[12],[2,\"\\n                      Filter By \"],[1,[32,3,[\"propertyName\"]]],[2,\"\\n                    \"],[13],[2,\"\\n\\n\"],[6,[37,5],[[30,[36,4],[[32,5,[\"filterBy\"]],[32,3,[\"propertyName\"]]],null]],null,[[\"default\"],[{\"statements\":[[2,\"                      \"],[10,\"ul\"],[12],[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[30,[36,2],[[32,3,[\"subOptions\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"                          \"],[10,\"li\"],[12],[2,\"\\n                            \"],[11,\"a\"],[24,6,\"javascript:void(0)\"],[4,[38,1],[\"click\",[30,[36,0],[[32,0,[\"setFilter\"]],[32,3,[\"propertyName\"]],[32,4]],null]],null],[12],[2,\"\\n                              \"],[1,[32,4]],[2,\"\\n                            \"],[13],[2,\"\\n                          \"],[13],[2,\"\\n\"]],\"parameters\":[4]}]]],[2,\"                      \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"                  \"],[13],[2,\"\\n\"]],\"parameters\":[3]}]]],[2,\"                \"],[10,\"li\"],[12],[2,\"\\n                  \"],[11,\"a\"],[24,6,\"javascript:void(0)\"],[4,[38,1],[\"click\",[30,[36,0],[[32,0,[\"goToArchives\"]],[32,1,[\"routeName\"]]],null]],null],[12],[2,\"\\n                    Archived \"],[1,[32,1,[\"label\"]]],[2,\"\\n                  \"],[13],[2,\"\\n                \"],[13],[2,\"\\n              \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"          \"],[13],[2,\"\\n\"]],\"parameters\":[2]}]]]],\"parameters\":[1]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"fn\",\"on\",\"-track-array\",\"each\",\"equal\",\"if\",\"string-contains\",\"let\"]}",
    meta: {
      moduleName: "ember-drupal/components/side-bar/component.hbs"
    }
  });

  let SideBarComponent = (_dec = Ember.inject.service, _dec2 = Ember._action, _dec3 = Ember._action, (_class = (_temp = class SideBarComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "router", _descriptor, this);

      _defineProperty(this, "newsReleaseFilterOptions", [{
        propertyName: 'year',
        subOptions: [2020, 2019, 2018, 2017]
      }, {
        propertyName: 'region',
        subOptions: ['Commissioner Office', 'Arkansas-Rio Grande-Texas Gulf', 'California-Great Basin', 'Columbia-Pacific Northwest', 'Lower Colorado Basin', 'Missouri Basin', 'Upper Colorado Basin']
      }, {
        propertyName: 'state',
        subOptions: ['Arizona', 'California', 'Colorado', 'Hawaii', 'Idaho', 'Kansas', 'Montana', 'Nebraska', 'Nevada', 'New Mexico', 'North Dakota', 'Oklahoma', 'Oregon', 'South Dakota', 'Texas', 'Utah', 'Washington', 'Washington, D.C.', 'Wyoming']
      }, {
        propertyName: 'topic',
        subOptions: ['Bureau of Reclamation', 'California Water', 'Ecosystem Restoration', 'Hydropower', 'Facilities', 'Recreation', 'Research', 'Rural Water', 'Safety of Dams', 'Supporting Tribal Nations', 'WaterSMART', 'Youth']
      }]);

      _defineProperty(this, "newsStoriesFilterOptions", [{
        propertyName: 'region',
        subOptions: ['Commissioner Office', 'Arkansas-Rio Grande-Texas Gulf', 'California-Great Basin', 'Columbia-Pacific Northwest', 'Lower Colorado Basin', 'Missouri Basin', 'Upper Colorado Basin']
      }, {
        propertyName: 'topic',
        subOptions: ['Bureau of Reclamation', 'California Water', 'Ecosystem Restoration', 'Hydropower', 'Facilities', 'Recreation', 'Research', 'Rural Water', 'Safety of Dams', 'Supporting Tribal Nations', 'WaterSMART', 'Youth']
      }]);

      _defineProperty(this, "sideBarItems", [{
        label: 'News Releases',
        routeName: 'news-room.news-releases',
        filters: this.newsReleaseFilterOptions
      }, {
        label: 'News Stories',
        routeName: 'news-room.stories',
        filters: this.newsStoriesFilterOptions
      }, {
        label: 'Speeches',
        routeName: 'news-room.speeches'
      }, {
        label: 'Congressional Testimony',
        routeName: 'news-room.congressional-testimony'
      }]);
    }

    setFilter(filterName, filterValue) {
      this.args.setQueryParams(filterName, filterValue);
    }

    goToArchives(routePath) {
      this.router.transitionTo(`${routePath}.archive`);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "setFilter", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "setFilter"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "goToArchives", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "goToArchives"), _class.prototype)), _class));
  _exports.default = SideBarComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, SideBarComponent);
});
;define("ember-drupal/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("ember-drupal/controllers/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const AUTHENTICATOR = 'authenticator:oauth2';
  let ApplicationController = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, _dec3 = Ember._action, (_class = (_temp = class ApplicationController extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "session", _descriptor, this);

      _initializerDefineProperty(this, "store", _descriptor2, this);
    }

    async onSignUp() {
      let attrs = {
        name: 'admin',
        pass: 'drupal'
      }; // let user = this.store.createRecord('user', attrs);
      // await user.save();

      let session = this.get('session');
      await session.authenticate(AUTHENTICATOR, attrs.name, attrs.pass);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "store", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "onSignUp", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "onSignUp"), _class.prototype)), _class));
  _exports.default = ApplicationController;
});
;define("ember-drupal/controllers/news-room", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let NewsRoomControler = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember._tracked, _dec6 = Ember._action, (_class = (_temp = class NewsRoomControler extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "queryParams", ['filterBy', 'year', 'region', 'state', 'topic']);

      _initializerDefineProperty(this, "filterBy", _descriptor, this);

      _initializerDefineProperty(this, "year", _descriptor2, this);

      _initializerDefineProperty(this, "region", _descriptor3, this);

      _initializerDefineProperty(this, "state", _descriptor4, this);

      _initializerDefineProperty(this, "topic", _descriptor5, this);
    }

    get queryParamValues() {
      let {
        filterBy,
        year,
        region,
        state,
        topic
      } = this;
      return {
        filterBy,
        year,
        region,
        state,
        topic
      };
    }

    setQueryParams(queryParamName, queryParamValue) {
      switch (queryParamName) {
        case 'filterBy':
          this.filterBy = queryParamValue;
          this.year = null;
          this.region = null;
          this.state = null;
          this.topic = null;
          break;

        case 'year':
          this.year = queryParamValue;
          this.region = null;
          this.state = null;
          this.topic = null;
          break;

        case 'region':
          this.region = queryParamValue;
          this.year = null;
          this.state = null;
          this.topic = null;
          break;

        case 'state':
          this.state = queryParamValue;
          this.year = null;
          this.region = null;
          this.topic = null;
          break;

        case 'topic':
          this.topic = queryParamValue;
          this.year = null;
          this.region = null;
          this.state = null;
          break;

        default:
          break;
      }
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "filterBy", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "year", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "region", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "state", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "topic", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "setQueryParams", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "setQueryParams"), _class.prototype)), _class));
  _exports.default = NewsRoomControler;
});
;define("ember-drupal/controllers/news-room/congressional-testimony", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let CongressionalTestimonyControler = (_dec = Ember.inject.controller('news-room'), (_class = (_temp = class CongressionalTestimonyControler extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "newsRoomController", _descriptor, this);
    }

    get queryParamValues() {
      let {
        newsRoomController: {
          queryParamValues
        }
      } = this;
      return queryParamValues;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "newsRoomController", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = CongressionalTestimonyControler;
});
;define("ember-drupal/controllers/news-room/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let NewsRoomIndexControler = (_dec = Ember.inject.controller('news-room'), (_class = (_temp = class NewsRoomIndexControler extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "newsRoomController", _descriptor, this);
    }

    get queryParamValues() {
      let {
        newsRoomController: {
          queryParamValues
        }
      } = this;
      return queryParamValues;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "newsRoomController", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = NewsRoomIndexControler;
});
;define("ember-drupal/controllers/news-room/news-releases", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let NewsRoomControler = (_dec = Ember.inject.controller('news-room'), (_class = (_temp = class NewsRoomControler extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "newsRoomController", _descriptor, this);
    }

    get queryParamValues() {
      let {
        newsRoomController: {
          queryParamValues
        }
      } = this;
      return queryParamValues;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "newsRoomController", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = NewsRoomControler;
});
;define("ember-drupal/controllers/news-room/news-releases/archive", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let NewsReleaseArchiveControler = (_dec = Ember._tracked, _dec2 = Ember.inject.controller('news-room'), _dec3 = Ember._action, (_class = (_temp = class NewsReleaseArchiveControler extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "queryParams", ['archiveYear']);

      _initializerDefineProperty(this, "archiveYear", _descriptor, this);

      _initializerDefineProperty(this, "newsRoomController", _descriptor2, this);
    }

    get queryParamValues() {
      let {
        newsRoomController: {
          queryParamValues
        }
      } = this;
      return queryParamValues;
    }

    setArchiveYear(value) {
      this.archiveYear = value;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "archiveYear", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "newsRoomController", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "setArchiveYear", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "setArchiveYear"), _class.prototype)), _class));
  _exports.default = NewsReleaseArchiveControler;
});
;define("ember-drupal/controllers/news-room/news-releases/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let NewsRoomControler = (_dec = Ember.inject.controller('news-room'), (_class = (_temp = class NewsRoomControler extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "newsRoomController", _descriptor, this);
    }

    get queryParamValues() {
      let {
        newsRoomController: {
          queryParamValues
        }
      } = this;
      return queryParamValues;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "newsRoomController", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = NewsRoomControler;
});
;define("ember-drupal/controllers/news-room/speeches", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let SpeechesControler = (_dec = Ember.inject.controller('news-room'), (_class = (_temp = class SpeechesControler extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "newsRoomController", _descriptor, this);
    }

    get queryParamValues() {
      let {
        newsRoomController: {
          queryParamValues
        }
      } = this;
      return queryParamValues;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "newsRoomController", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = SpeechesControler;
});
;define("ember-drupal/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("ember-drupal/helpers/app-version", ["exports", "ember-drupal/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("ember-drupal/helpers/bs-contains", ["exports", "ember-bootstrap/helpers/bs-contains"], function (_exports, _bsContains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(_exports, "bsContains", {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
;define("ember-drupal/helpers/bs-eq", ["exports", "ember-bootstrap/helpers/bs-eq"], function (_exports, _bsEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(_exports, "eq", {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
;define("ember-drupal/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define("ember-drupal/helpers/equal", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.equal = equal;
  _exports.default = void 0;

  function equal([x, y]) {
    return x === y;
  }

  var _default = Ember.Helper.helper(equal);

  _exports.default = _default;
});
;define("ember-drupal/helpers/html-safe", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.trimString = trimString;
  _exports.default = void 0;

  function trimString(string) {
    return Ember.String.htmlSafe(string);
  }

  var _default = Ember.Helper.helper(trimString);

  _exports.default = _default;
});
;define("ember-drupal/helpers/is-after", ["exports", "ember-moment/helpers/is-after"], function (_exports, _isAfter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isAfter.default;
    }
  });
});
;define("ember-drupal/helpers/is-before", ["exports", "ember-moment/helpers/is-before"], function (_exports, _isBefore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isBefore.default;
    }
  });
});
;define("ember-drupal/helpers/is-between", ["exports", "ember-moment/helpers/is-between"], function (_exports, _isBetween) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isBetween.default;
    }
  });
});
;define("ember-drupal/helpers/is-same-or-after", ["exports", "ember-moment/helpers/is-same-or-after"], function (_exports, _isSameOrAfter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isSameOrAfter.default;
    }
  });
});
;define("ember-drupal/helpers/is-same-or-before", ["exports", "ember-moment/helpers/is-same-or-before"], function (_exports, _isSameOrBefore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isSameOrBefore.default;
    }
  });
});
;define("ember-drupal/helpers/is-same", ["exports", "ember-moment/helpers/is-same"], function (_exports, _isSame) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isSame.default;
    }
  });
});
;define("ember-drupal/helpers/moment-add", ["exports", "ember-moment/helpers/moment-add"], function (_exports, _momentAdd) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentAdd.default;
    }
  });
});
;define("ember-drupal/helpers/moment-calendar", ["exports", "ember-moment/helpers/moment-calendar"], function (_exports, _momentCalendar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentCalendar.default;
    }
  });
});
;define("ember-drupal/helpers/moment-diff", ["exports", "ember-moment/helpers/moment-diff"], function (_exports, _momentDiff) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentDiff.default;
    }
  });
});
;define("ember-drupal/helpers/moment-duration", ["exports", "ember-moment/helpers/moment-duration"], function (_exports, _momentDuration) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
;define("ember-drupal/helpers/moment-format", ["exports", "ember-moment/helpers/moment-format"], function (_exports, _momentFormat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentFormat.default;
    }
  });
});
;define("ember-drupal/helpers/moment-from-now", ["exports", "ember-moment/helpers/moment-from-now"], function (_exports, _momentFromNow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentFromNow.default;
    }
  });
});
;define("ember-drupal/helpers/moment-from", ["exports", "ember-moment/helpers/moment-from"], function (_exports, _momentFrom) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentFrom.default;
    }
  });
});
;define("ember-drupal/helpers/moment-subtract", ["exports", "ember-moment/helpers/moment-subtract"], function (_exports, _momentSubtract) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentSubtract.default;
    }
  });
});
;define("ember-drupal/helpers/moment-to-date", ["exports", "ember-moment/helpers/moment-to-date"], function (_exports, _momentToDate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentToDate.default;
    }
  });
});
;define("ember-drupal/helpers/moment-to-now", ["exports", "ember-moment/helpers/moment-to-now"], function (_exports, _momentToNow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentToNow.default;
    }
  });
});
;define("ember-drupal/helpers/moment-to", ["exports", "ember-moment/helpers/moment-to"], function (_exports, _momentTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentTo.default;
    }
  });
});
;define("ember-drupal/helpers/moment-unix", ["exports", "ember-moment/helpers/unix"], function (_exports, _unix) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
;define("ember-drupal/helpers/moment", ["exports", "ember-moment/helpers/moment"], function (_exports, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
;define("ember-drupal/helpers/now", ["exports", "ember-moment/helpers/now"], function (_exports, _now) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
;define("ember-drupal/helpers/on-document", ["exports", "ember-on-helper/helpers/on-document"], function (_exports, _onDocument) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onDocument.default;
    }
  });
});
;define("ember-drupal/helpers/on-window", ["exports", "ember-on-helper/helpers/on-window"], function (_exports, _onWindow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onWindow.default;
    }
  });
});
;define("ember-drupal/helpers/on", ["exports", "ember-on-helper/helpers/on"], function (_exports, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _on.default;
    }
  });
});
;define("ember-drupal/helpers/parse-date", ["exports", "moment"], function (_exports, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.parseDate = parseDate;
  _exports.default = void 0;

  function parseDate(param) {
    return (0, _moment.default)(param).format("MMMM Do, YYYY");
  }

  var _default = Ember.Helper.helper(parseDate);

  _exports.default = _default;
});
;define("ember-drupal/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define("ember-drupal/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("ember-drupal/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("ember-drupal/helpers/string-contains", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.stringContains = stringContains;
  _exports.default = void 0;

  function stringContains([kidString, popString]) {
    return Ember.isPresent(popString) && popString.includes(kidString);
  }

  var _default = Ember.Helper.helper(stringContains);

  _exports.default = _default;
});
;define("ember-drupal/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define("ember-drupal/helpers/trim-string", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.trimString = trimString;
  _exports.default = void 0;

  function trimString([string, length]) {
    return string.substring(0, length);
  }

  var _default = Ember.Helper.helper(trimString);

  _exports.default = _default;
});
;define("ember-drupal/helpers/unix", ["exports", "ember-moment/helpers/unix"], function (_exports, _unix) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
;define("ember-drupal/helpers/utc", ["exports", "ember-moment/helpers/utc"], function (_exports, _utc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _utc.default;
    }
  });
  Object.defineProperty(_exports, "utc", {
    enumerable: true,
    get: function () {
      return _utc.utc;
    }
  });
});
;define("ember-drupal/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "ember-drupal/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("ember-drupal/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("ember-drupal/initializers/ember-concurrency", ["exports", "ember-concurrency/initializers/ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
;define("ember-drupal/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("ember-drupal/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("ember-drupal/initializers/ember-simple-auth", ["exports", "ember-drupal/config/environment", "ember-simple-auth/configuration", "ember-simple-auth/initializers/setup-session", "ember-simple-auth/initializers/setup-session-service", "ember-simple-auth/initializers/setup-session-restoration"], function (_exports, _environment, _configuration, _setupSession, _setupSessionService, _setupSessionRestoration) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-simple-auth',

    initialize(registry) {
      const config = _environment.default['ember-simple-auth'] || {};
      config.rootURL = _environment.default.rootURL || _environment.default.baseURL;

      _configuration.default.load(config);

      (0, _setupSession.default)(registry);
      (0, _setupSessionService.default)(registry);
      (0, _setupSessionRestoration.default)(registry);
    }

  };
  _exports.default = _default;
});
;define("ember-drupal/initializers/export-application-global", ["exports", "ember-drupal/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("ember-drupal/initializers/load-bootstrap-config", ["exports", "ember-drupal/config/environment", "ember-bootstrap/config"], function (_exports, _environment, _config) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize()
  /* container, application */
  {
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  var _default = {
    name: 'load-bootstrap-config',
    initialize
  };
  _exports.default = _default;
});
;define("ember-drupal/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("ember-drupal/instance-initializers/ember-simple-auth", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // This is only needed for backwards compatibility and will be removed in the
  // next major release of ember-simple-auth. Unfortunately, there is no way to
  // deprecate this without hooking into Ember's internals…
  var _default = {
    name: 'ember-simple-auth',

    initialize() {}

  };
  _exports.default = _default;
});
;define("ember-drupal/models/congressional-testimony", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let SpeechModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('string'), _dec4 = (0, _model.attr)('string'), _dec5 = (0, _model.attr)('string'), _dec6 = (0, _model.attr)('string'), _dec7 = (0, _model.attr)('date'), _dec8 = (0, _model.attr)('string'), _dec9 = (0, _model.attr)('string'), _dec10 = (0, _model.attr)('string'), _dec11 = (0, _model.attr)('string'), _dec12 = (0, _model.attr)('string'), _dec13 = (0, _model.attr)('string'), (_class = (_temp = class SpeechModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "title", _descriptor, this);

      _initializerDefineProperty(this, "body", _descriptor2, this);

      _initializerDefineProperty(this, "field_bill_name", _descriptor3, this);

      _initializerDefineProperty(this, "field_bill_number", _descriptor4, this);

      _initializerDefineProperty(this, "field_city_state", _descriptor5, this);

      _initializerDefineProperty(this, "field_committee", _descriptor6, this);

      _initializerDefineProperty(this, "field_date", _descriptor7, this);

      _initializerDefineProperty(this, "field_keywords", _descriptor8, this);

      _initializerDefineProperty(this, "field_name", _descriptor9, this);

      _initializerDefineProperty(this, "field_position", _descriptor10, this);

      _initializerDefineProperty(this, "field_senate_or_house", _descriptor11, this);

      _initializerDefineProperty(this, "field_sub_committee", _descriptor12, this);

      _initializerDefineProperty(this, "field_video_link", _descriptor13, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "title", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "body", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "field_bill_name", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "field_bill_number", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "field_city_state", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "field_committee", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "field_date", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "field_keywords", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "field_name", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "field_position", [_dec10], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "field_senate_or_house", [_dec11], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "field_sub_committee", [_dec12], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "field_video_link", [_dec13], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = SpeechModel;
});
;define("ember-drupal/models/news-release", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let NewsReleaseModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('string'), _dec4 = (0, _model.attr)('date'), _dec5 = (0, _model.attr)('string'), _dec6 = (0, _model.attr)('string'), _dec7 = (0, _model.attr)('string'), _dec8 = (0, _model.attr)('string'), _dec9 = (0, _model.attr)('string'), _dec10 = (0, _model.attr)('string'), _dec11 = (0, _model.attr)('string'), _dec12 = (0, _model.attr)('string'), _dec13 = (0, _model.attr)('string'), _dec14 = (0, _model.attr)('string'), _dec15 = (0, _model.attr)('string'), _dec16 = (0, _model.attr)('string'), _dec17 = (0, _model.attr)('string'), _dec18 = (0, _model.attr)('string'), _dec19 = (0, _model.attr)('string'), _dec20 = (0, _model.attr)('string'), (_class = (_temp = class NewsReleaseModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "title", _descriptor, this);

      _initializerDefineProperty(this, "body", _descriptor2, this);

      _initializerDefineProperty(this, "field_area_office", _descriptor3, this);

      _initializerDefineProperty(this, "field_date_to_be_published", _descriptor4, this);

      _initializerDefineProperty(this, "field_image", _descriptor5, this);

      _initializerDefineProperty(this, "field_important_links_1", _descriptor6, this);

      _initializerDefineProperty(this, "field_important_links_2", _descriptor7, this);

      _initializerDefineProperty(this, "field_issue_category", _descriptor8, this);

      _initializerDefineProperty(this, "field_issue_number", _descriptor9, this);

      _initializerDefineProperty(this, "field_keywords", _descriptor10, this);

      _initializerDefineProperty(this, "field_primary_contact_email", _descriptor11, this);

      _initializerDefineProperty(this, "field_primary_contact_name", _descriptor12, this);

      _initializerDefineProperty(this, "field_primary_contact_phone", _descriptor13, this);

      _initializerDefineProperty(this, "field_region", _descriptor14, this);

      _initializerDefineProperty(this, "field_secondary_contact_email", _descriptor15, this);

      _initializerDefineProperty(this, "field_secondary_contact_name", _descriptor16, this);

      _initializerDefineProperty(this, "field_secondary_contact_phone", _descriptor17, this);

      _initializerDefineProperty(this, "field_state", _descriptor18, this);

      _initializerDefineProperty(this, "field_story", _descriptor19, this);

      _initializerDefineProperty(this, "field_sub_headline", _descriptor20, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "title", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "body", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "field_area_office", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "field_date_to_be_published", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "field_image", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "field_important_links_1", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "field_important_links_2", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "field_issue_category", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "field_issue_number", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "field_keywords", [_dec10], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "field_primary_contact_email", [_dec11], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "field_primary_contact_name", [_dec12], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "field_primary_contact_phone", [_dec13], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "field_region", [_dec14], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "field_secondary_contact_email", [_dec15], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, "field_secondary_contact_name", [_dec16], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, "field_secondary_contact_phone", [_dec17], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, "field_state", [_dec18], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, "field_story", [_dec19], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, "field_sub_headline", [_dec20], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = NewsReleaseModel;
});
;define("ember-drupal/models/speech", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let SpeechModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('string'), _dec4 = (0, _model.attr)('string'), _dec5 = (0, _model.attr)('string'), _dec6 = (0, _model.attr)('string'), _dec7 = (0, _model.attr)('string'), _dec8 = (0, _model.attr)('string'), _dec9 = (0, _model.attr)('string'), _dec10 = (0, _model.attr)('string'), _dec11 = (0, _model.attr)('string'), _dec12 = (0, _model.attr)('string'), _dec13 = (0, _model.attr)('string'), _dec14 = (0, _model.attr)('string'), _dec15 = (0, _model.attr)('string'), _dec16 = (0, _model.attr)('string'), _dec17 = (0, _model.attr)('string'), _dec18 = (0, _model.attr)('string'), _dec19 = (0, _model.attr)('string'), (_class = (_temp = class SpeechModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "title", _descriptor, this);

      _initializerDefineProperty(this, "body", _descriptor2, this);

      _initializerDefineProperty(this, "field_area_office", _descriptor3, this);

      _initializerDefineProperty(this, "field_audio_link", _descriptor4, this);

      _initializerDefineProperty(this, "field_date", _descriptor5, this);

      _initializerDefineProperty(this, "field_emergency_number", _descriptor6, this);

      _initializerDefineProperty(this, "field_event", _descriptor7, this);

      _initializerDefineProperty(this, "field_important_links_1", _descriptor8, this);

      _initializerDefineProperty(this, "field_important_links_2", _descriptor9, this);

      _initializerDefineProperty(this, "field_important_links_3", _descriptor10, this);

      _initializerDefineProperty(this, "field_issue_category", _descriptor11, this);

      _initializerDefineProperty(this, "field_keywords", _descriptor12, this);

      _initializerDefineProperty(this, "field_persons_title", _descriptor13, this);

      _initializerDefineProperty(this, "field_person_giving_speech", _descriptor14, this);

      _initializerDefineProperty(this, "field_place_of_speech", _descriptor15, this);

      _initializerDefineProperty(this, "field_region", _descriptor16, this);

      _initializerDefineProperty(this, "field_state", _descriptor17, this);

      _initializerDefineProperty(this, "field_sub_title", _descriptor18, this);

      _initializerDefineProperty(this, "field_video_link", _descriptor19, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "title", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "body", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "field_area_office", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "field_audio_link", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "field_date", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "field_emergency_number", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "field_event", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "field_important_links_1", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "field_important_links_2", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "field_important_links_3", [_dec10], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "field_issue_category", [_dec11], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "field_keywords", [_dec12], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "field_persons_title", [_dec13], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "field_person_giving_speech", [_dec14], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "field_place_of_speech", [_dec15], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, "field_region", [_dec16], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, "field_state", [_dec17], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, "field_sub_title", [_dec18], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, "field_video_link", [_dec19], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = SpeechModel;
});
;define("ember-drupal/models/user", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let UserModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), (_class = (_temp = class UserModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "pass", _descriptor2, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "pass", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = UserModel;
});
;define("ember-drupal/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("ember-drupal/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("ember-drupal/modifiers/focus-trap", ["exports", "ember-focus-trap/modifiers/focus-trap"], function (_exports, _focusTrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _focusTrap.default;
    }
  });
});
;define("ember-drupal/modifiers/ref", ["exports", "ember-ref-modifier/modifiers/ref"], function (_exports, _ref) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ref.default;
    }
  });
});
;define("ember-drupal/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("ember-drupal/router", ["exports", "ember-drupal/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('news-room', function () {
      this.route('news-releases', function () {
        this.route('show', {
          path: '/:news_release_slug'
        });
        this.route('archive');
      });
      this.route('stories', function () {
        this.route('show', {
          path: '/:news_story_slug'
        });
        this.route('archive');
      });
      this.route('congressional-testimony', {
        path: '/testimony'
      }, function () {
        this.route('show', {
          path: '/:congressional_testimony_slug'
        });
        this.route('archive');
      });
      this.route('speeches', function () {
        this.route('show', {
          path: '/:speech_slug'
        });
        this.route('archive');
      });
      this.route('page', {
        path: '/:page_slug'
      });
      this.route('404');
    });
  });
});
;define("ember-drupal/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ApplicationRoute extends Ember.Route {}

  _exports.default = ApplicationRoute;
});
;define("ember-drupal/routes/index", ["exports", "moment", "ember-drupal/utilities/sample-responses"], function (_exports, _moment, _sampleResponses) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    breadcrumbs: Ember.inject.service(),
    controllerName: 'news',
    model: function (params) {
      let breadcrumbs = [{
        route: 'news',
        text: 'News Releases'
      }];
      let thisMinute = (0, _moment.default)().utc().format('YYYY-MM-DDTHH:MM');
      let queryFilter = [{
        field: 'field_date_to_be_published',
        type: 'gt',
        value: '2017-01-18'
      }, {
        field: 'field_date_to_be_published',
        type: 'lt',
        value: thisMinute
      }, {
        field: 'field_story',
        type: 'eq',
        value: 0
      }];
      let orderBy = {};
      orderBy[0] = {
        field: 'field_date_to_be_published',
        type: 'field',
        direction: 'desc'
      }; // Add this into queryFilter to disregard news stories

      this.get('breadcrumbs').set('breadcrumbsLinks', breadcrumbs);
      this.controllerFor('news').set('navActive', {
        news: true
      });
      return _sampleResponses.default; // return this.get('store').query('news', {
      //   page: {
      //     number: params.page,
      //     size: params.size
      //   }
      // }).then((results) => {
      //   this.controllerFor('news').set('lastPage', results.get('meta').pageCount);
      //   this.controllerFor('news').set('canLoadMore', results.get('meta').totalRecords > 1);
      //   this.controllerFor('news').set('first', results.get('links').first)
      //   this.controllerFor('news').set('previous', results.get('links').previous)
      //   this.controllerFor('news').set('next', results.get('links').next)
      //   this.controllerFor('news').set('last', results.get('links').last)
      //   return results;
      // });
    },

    setupController(controller, model) {
      this._super(controller, model);

      this.controllerFor('news').set('activeFilters', []);
      this.controllerFor('news').set('filterBy', []);
      this.controllerFor('news').set('contentType', 'contentType');
      this.controllerFor('news').set('archivedDateField', 'field_date_to_be_published');
      this.controllerFor('news').set('archivedDateDescription', 'Archived News Releases');
      this.controllerFor('news').set('isStory', 0);
      this.controllerFor('news').set('pageHeader', null);
    },

    queryParams: {
      page: {
        refreshModel: true
      },
      size: {
        refreshModel: true
      }
    }
  });

  _exports.default = _default;
});
;define("ember-drupal/routes/news-room", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class NewsRoomRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "queryParams", {
        filterBy: {
          refreshModel: false
        },
        year: {
          refreshModel: false
        },
        region: {
          refreshModel: false
        },
        state: {
          refreshModel: false
        },
        topic: {
          refreshModel: false
        }
      });
    }

  }

  _exports.default = NewsRoomRoute;
});
;define("ember-drupal/routes/news-room/congressional-testimony", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class CongressionalTestimonyRoute extends Ember.Route {}

  _exports.default = CongressionalTestimonyRoute;
});
;define("ember-drupal/routes/news-room/news-releases", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class NewsReleasesRoute extends Ember.Route {}

  _exports.default = NewsReleasesRoute;
});
;define("ember-drupal/routes/news-room/news-releases/archive", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class NewsReleasesArchiveRoute extends Ember.Route {}

  _exports.default = NewsReleasesArchiveRoute;
});
;define("ember-drupal/routes/news-room/speeches", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SpeachesRoute extends Ember.Route {}

  _exports.default = SpeachesRoute;
});
;define("ember-drupal/routes/news-room/stories", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class StoriesRoute extends Ember.Route {}

  _exports.default = StoriesRoute;
});
;define("ember-drupal/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("ember-drupal/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("ember-drupal/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("ember-drupal/serializers/application", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ApplicationSerializer extends _jsonApi.default {
    keyForAttribute(attr) {
      return Ember.String.underscore(attr);
    }

    normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
      let payloadData = {
        data: []
      };

      for (let record of payload) {
        let data = {
          id: record.id,
          type: record.type,
          attributes: record.content
        };
        payloadData.data.push(data);
      }

      return this._normalizeResponse(store, primaryModelClass, payloadData, id, requestType, false);
    }

  }

  _exports.default = ApplicationSerializer;
});
;define("ember-drupal/services/breadcrumbs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    breadcrumbsLinks: null
  });

  _exports.default = _default;
});
;define("ember-drupal/services/cookies", ["exports", "ember-cookies/services/cookies"], function (_exports, _cookies) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _cookies.default;
  _exports.default = _default;
});
;define("ember-drupal/services/drupal-mapper", ["exports", "ember-data-drupal/services/drupal-mapper"], function (_exports, _drupalMapper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _drupalMapper.default;
  _exports.default = _default;
});
;define("ember-drupal/services/moment", ["exports", "ember-moment/services/moment", "ember-drupal/config/environment"], function (_exports, _moment, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    get
  } = Ember;

  var _default = _moment.default.extend({
    defaultFormat: get(_environment.default, 'moment.outputFormat')
  });

  _exports.default = _default;
});
;define("ember-drupal/services/session", ["exports", "ember-simple-auth/services/session"], function (_exports, _session) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _session.default;
  _exports.default = _default;
});
;define("ember-drupal/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("ember-drupal/session-stores/application", ["exports", "ember-simple-auth/session-stores/adaptive"], function (_exports, _adaptive) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _adaptive.default.extend();

  _exports.default = _default;
});
;define("ember-drupal/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "EGqYCe9u",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[30,[36,0],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "ember-drupal/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-drupal/templates/components/ember-popper-targeting-parent", ["exports", "ember-popper/templates/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("ember-drupal/templates/components/ember-popper", ["exports", "ember-popper/templates/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("ember-drupal/templates/news-room", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "kIPmOLRC",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"MainContainer\"],[12],[2,\"\\n\\t\"],[10,\"div\"],[14,0,\"Header\"],[14,1,\"top\"],[14,\"role\",\"banner\"],[12],[2,\"\\n\\t\\t\"],[10,\"div\"],[14,0,\"Header-wrap container\"],[12],[2,\"\\n\\t\\t\\t\"],[10,\"a\"],[14,0,\"Header-logo\"],[14,6,\"https://www.usbr.gov\"],[14,\"title\",\"Reclamation Home\"],[12],[2,\"\\n\\t\\t\\t\\t\"],[10,\"img\"],[14,\"src\",\"https://www.usbr.gov/img/logo-white.png\"],[14,\"alt\",\"Bureau of Reclamation: Managing Water in the West\"],[12],[13],[2,\"\\n\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\"],[10,\"div\"],[14,0,\"Header-social\"],[12],[2,\"\\n\\t\\t\\t\\t\"],[10,\"ul\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"a\"],[14,6,\"https://www.facebook.com/bureau.of.reclamation\"],[14,0,\"critical-icon, tooltip-ng2\"],[14,\"title\",\"Facebook\"],[14,\"target\",\"new\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"span\"],[14,0,\"icon-facebook\"],[14,\"aria-hidden\",\"true\"],[12],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"a\"],[14,6,\"https://twitter.com/usbr\"],[14,0,\"critical-icon, tooltip-ng2\"],[14,\"title\",\"Twitter\"],[14,\"target\",\"new\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"span\"],[14,0,\"icon-twitter\"],[14,\"aria-hidden\",\"true\"],[12],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"a\"],[14,6,\"https://www.youtube.com/user/reclamation\"],[14,0,\"critical-icon, tooltip-ng2\"],[14,\"title\",\"YouTube\"],[14,\"target\",\"new\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"span\"],[14,0,\"icon-youtube\"],[14,\"aria-hidden\",\"true\"],[12],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"a\"],[14,6,\"https://www.flickr.com/photos/usbr/\"],[14,0,\"critical-icon, tooltip-ng2\"],[14,\"title\",\"Flickr\"],[14,\"target\",\"new\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"span\"],[14,0,\"icon-flickr\"],[14,\"aria-hidden\",\"true\"],[12],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"a\"],[14,6,\"https://www.pinterest.com/usbrgov/\"],[14,0,\"critical-icon, tooltip-ng2\"],[14,\"title\",\"Pinterest\"],[14,\"target\",\"new\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"span\"],[14,0,\"icon-pinterest\"],[14,\"aria-hidden\",\"true\"],[12],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"a\"],[14,6,\"https://instagram.com/bureau_of_reclamation\"],[14,0,\"critical-icon, tooltip-ng2\"],[14,\"title\",\"Instagram\"],[14,\"target\",\"new\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"span\"],[14,0,\"icon-instagram\"],[14,\"aria-hidden\",\"true\"],[12],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"a\"],[14,6,\"https://www.usbr.gov/newsroom/rssxml/rssfeeds.html\"],[14,0,\"critical-icon\"],[14,\"title\",\"RSS\"],[14,\"target\",\"new\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"span\"],[14,0,\"icon-rss\"],[14,\"aria-hidden\",\"true\"],[12],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\"],[10,\"button\"],[14,0,\"Nav-toggle\"],[12],[2,\"Menu\"],[13],[2,\"\\n\\t\\t\"],[13],[2,\"\\n\\t\"],[13],[2,\"\\n\\t\\n\\t\"],[10,\"div\"],[14,0,\"Nav\"],[14,1,\"Nav\"],[12],[2,\"\\n\\t\\t\"],[10,\"div\"],[14,0,\"Nav-wrap\"],[12],[2,\"\\n\\t\\t\\t\"],[10,\"ol\"],[14,0,\"Nav-list resetList\"],[14,\"role\",\"navigation\"],[14,\"aria-label\",\"Primary Navigation\"],[12],[2,\"\\n\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-item\"],[12],[2,\" \"],[10,\"a\"],[14,0,\"Nav-item-link\"],[14,6,\"#\"],[12],[2,\"Water & Power\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[10,\"ol\"],[14,0,\"Nav-sublist resetList\"],[14,\"aria-label\",\"submenu\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/projects/facilities.php?type=Dam\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"\"],[12],[2,\"Dams\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/projects/facilities.php?type=Powerplant\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"\"],[12],[2,\"Powerplants\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/projects/facilities.php?type=Project\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"\"],[12],[2,\"Projects\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/main/agrihydro.html\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"\"],[12],[2,\"Agrimet/Hydromet\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/main/water/\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"\"],[12],[2,\"Water Operations\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-item\"],[12],[2,\" \"],[10,\"a\"],[14,0,\"Nav-item-link\"],[14,6,\"#\"],[12],[2,\"Resources & Research\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[10,\"ol\"],[14,0,\"Nav-sublist resetList\"],[14,\"aria-label\",\"submenu\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/main/programs/\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"Programs\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/tsc/\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"Technical Service Center\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/research/\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"Research & Development\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/recman/\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"Reclamation Manual\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/environmental/\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"Environmental Resources/Reports\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/library/\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"Library\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-item\"],[12],[2,\" \"],[10,\"a\"],[14,0,\"Nav-item-link\"],[14,6,\"#\"],[12],[2,\"About Us\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[10,\"ol\"],[14,0,\"Nav-sublist resetList\"],[14,\"aria-label\",\"submenu\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/main/about/mission.html\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"Mission\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/main/about/fact.html\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"Fact Sheet\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/newsroom/presskit/bios/detail.cfm?recordid=1\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"Commissioner\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/main/offices.html\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"Addresses/Contacts\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/main/images/br_org_chart.pdf\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"Organizational Chart\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/newsroom/presskit/bios/bios.cfm\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"Leadership Bios\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/hr/\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"Employment\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/main/comments.cfm\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"Contact\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-item\"],[12],[2,\" \"],[10,\"a\"],[14,0,\"Nav-item-link\"],[14,6,\"#\"],[12],[2,\"Recreation & Public Use\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[10,\"ol\"],[14,0,\"Nav-sublist resetList\"],[14,\"aria-label\",\"submenu\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/recreation/\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"Find Recreation\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.recreation.gov\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"Recreation.gov\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/lands/\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"Public Use\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-item\"],[12],[2,\" \"],[10,\"a\"],[14,0,\"Nav-item-link\"],[14,6,\"#\"],[12],[2,\"News & Multimedia\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[10,\"ol\"],[14,0,\"Nav-sublist resetList\"],[14,\"aria-label\",\"submenu\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/newsroom/newsrelease/\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"News Releases\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/newsroom/stories/\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"News Stories\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/newsroom/speech/\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"Speeches\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/newsroom/testimony/\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"Congressional Testimony\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/newsroom/presskit/factsheet/\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"Fact Sheets\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/main/multimedia/index.html#photos\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"Photos\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/main/multimedia/index.html#video\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"Multimedia\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[14,0,\"Nav-sublist-item\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/main/multimedia/index.html#social\"],[14,0,\"Nav-sublist-link\"],[14,\"tabindex\",\"-1\"],[12],[2,\"Social Media\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\"],[13],[2,\"\\n\\n\\t\\t\\t\"],[10,\"div\"],[14,0,\"Header-search\"],[14,1,\"recSearch\"],[12],[2,\"\\n\\t\\t\\t\\t\"],[10,\"form\"],[14,\"method\",\"get\"],[14,\"action\",\"https://search.usa.gov/search\"],[14,\"role\",\"search\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\"],[10,\"input\"],[14,3,\"affiliate\"],[14,2,\"Reclamation\"],[14,4,\"hidden\"],[12],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[10,\"label\"],[14,0,\"visuallyhidden\"],[14,\"for\",\"query\"],[12],[2,\"Search\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[10,\"input\"],[14,3,\"query\"],[14,1,\"query\"],[14,\"placeholder\",\"Search\"],[14,4,\"text\"],[12],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[10,\"button\"],[14,1,\"search\"],[14,4,\"submit\"],[12],[2,\"Search\"],[13],[2,\"\\n\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\"],[13],[2,\"\\n\\t\"],[13],[2,\"\\n\\n\\t\"],[10,\"div\"],[14,0,\"Main\"],[14,1,\"Main\"],[14,\"role\",\"main\"],[14,5,\"background-image: url('https://www.usbr.gov/img/bg-banner.jpg')\"],[12],[2,\"\\n\\t\\t\"],[10,\"div\"],[14,0,\"Main-wrap\"],[14,5,\"background-image: url('https://www.usbr.gov/img/bg-footer.jpg')\"],[12],[2,\"\\n\\t\\t\\t\"],[10,\"div\"],[14,0,\"Banner Banner--full\"],[12],[2,\"\\n\\t\\t\\t\\t\"],[10,\"div\"],[14,0,\"Banner-content\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\"],[10,\"div\"],[14,0,\"container\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"h1\"],[12],[2,\"News & Multimedia\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\"],[13],[2,\"\\n\\n\\t\\t\\t\"],[10,\"div\"],[14,0,\"Main-content container clearfix\"],[12],[2,\"\\n\\t\\t\\t\\t\"],[10,\"div\"],[14,0,\"Breadcrumbs\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\"],[10,\"ul\"],[14,0,\"resetList\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"a\"],[14,6,\"/\"],[12],[2,\"Reclamation\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"a\"],[14,6,\"/\"],[12],[2,\"News & Multimedia\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"a\"],[14,6,\"/\"],[12],[2,\"News & Multimedia\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\"],[13],[2,\"\\n\\n\\t\\t\\t\\t\"],[8,\"side-bar\",[],[[\"@setQueryParams\",\"@queryParams\"],[[30,[36,0],[[32,0,[\"setQueryParams\"]]],null],[32,0,[\"queryParamValues\"]]]],null],[2,\"\\n\\n\\t\\t\\t\\t\"],[1,[30,[36,2],[[30,[36,1],null,null]],null]],[2,\"\\n\\t\\t\\t\\t\\n\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\"],[13],[2,\"\\n\\n\\t\\t\"],[10,\"div\"],[14,0,\"Footer\"],[14,1,\"Footer\"],[14,\"role\",\"contentinfo\"],[12],[2,\"\\n\\t\\t\\t\"],[10,\"div\"],[14,0,\"container\"],[12],[2,\"\\n\\t\\t\\t\\t\"],[10,\"h2\"],[14,0,\"visuallyhidden\"],[12],[2,\"More Information about the Bureau of Reclamation\"],[13],[2,\"\\n\\t\\t\\t\\t\"],[10,\"div\"],[14,0,\"Footer-social\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\"],[10,\"h2\"],[12],[2,\"Stay in Touch\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[10,\"ul\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"a\"],[14,6,\"https://www.facebook.com/bureau.of.reclamation\"],[14,0,\"critical-icon, tooltip-ng\"],[14,\"title\",\"Facebook\"],[14,\"target\",\"new\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"span\"],[14,0,\"icon-facebook\"],[14,\"aria-hidden\",\"true\"],[12],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"a\"],[14,6,\"https://twitter.com/usbr\"],[14,0,\"critical-icon, tooltip-ng\"],[14,\"title\",\"Twitter\"],[14,\"target\",\"new\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"span\"],[14,0,\"icon-twitter\"],[14,\"aria-hidden\",\"true\"],[12],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"a\"],[14,6,\"https://www.youtube.com/user/reclamation\"],[14,0,\"critical-icon, tooltip-ng\"],[14,\"title\",\"YouTube\"],[14,\"target\",\"new\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"span\"],[14,0,\"icon-youtube\"],[14,\"aria-hidden\",\"true\"],[12],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"a\"],[14,6,\"https://www.flickr.com/photos/usbr/\"],[14,0,\"critical-icon, tooltip-ng\"],[14,\"title\",\"Flickr\"],[14,\"target\",\"new\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"span\"],[14,0,\"icon-flickr\"],[14,\"aria-hidden\",\"true\"],[12],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"a\"],[14,6,\"https://www.pinterest.com/usbrgov/\"],[14,0,\"critical-icon, tooltip-ng\"],[14,\"title\",\"Pinterest\"],[14,\"target\",\"new\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"span\"],[14,0,\"icon-pinterest\"],[14,\"aria-hidden\",\"true\"],[12],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"a\"],[14,6,\"https://instagram.com/bureau_of_reclamation/\"],[14,0,\"critical-icon, tooltip-ng\"],[14,\"title\",\"Instagram\"],[14,\"target\",\"new\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"span\"],[14,0,\"icon-instagram\"],[14,\"aria-hidden\",\"true\"],[12],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"a\"],[14,6,\"https://www.usbr.gov/newsroom/rssxml/rssfeeds.html\"],[14,0,\"critical-icon\"],[14,\"title\",\"RSS\"],[14,\"target\",\"new\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"span\"],[14,0,\"icon-rss\"],[14,\"aria-hidden\",\"true\"],[12],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\n\\t\\t\\t\\t\"],[10,\"div\"],[14,0,\"Footer-links\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\"],[10,\"ul\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/main/comments.cfm\"],[12],[2,\"Contact Us\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/main/index/\"],[12],[2,\"Site Index\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[10,\"ul\"],[12],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/main/access.html\"],[12],[2,\"Accessibility\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/main/disclaimer.html\"],[12],[2,\"Disclaimer\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"a\"],[14,6,\"https://www.doi.gov/\"],[14,\"title\",\"Department of the Interior\"],[12],[2,\"DOI\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/foia/\"],[12],[2,\"FOIA\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"a\"],[14,6,\"https://www.doi.gov/pmb/eeo/reports-repository\"],[12],[2,\"No Fear Act\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/main/notices.html\"],[12],[2,\"Notices\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/main/privacy.html\"],[12],[2,\"Privacy Policy\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"a\"],[14,6,\"https://www.usbr.gov/main/qoi/\"],[12],[2,\"Quality of Information\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"a\"],[14,6,\"https://www.recreation.gov/\"],[14,\"target\",\"new\"],[12],[2,\"Recreation.gov\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"li\"],[12],[10,\"a\"],[14,6,\"https://www.usa.gov/\"],[14,\"target\",\"new\"],[12],[2,\"USA.gov\"],[13],[13],[2,\"\\n\\t\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\\t\\t\\n\\t\\t\\t\\t\"],[10,\"a\"],[14,0,\"Footer-logo\"],[14,6,\"https://www.usbr.gov\"],[12],[10,\"img\"],[14,\"src\",\"https://www.usbr.gov/img/seal-white.png\"],[14,\"alt\",\"U.S. Department of the Interior - Bureau of Reclamation\"],[12],[13],[13],[2,\"\\n\\t\\t\\t\"],[13],[2,\"\\n\\t\\t\"],[13],[2,\"\\n\\t\\t\\n\\t\"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"fn\",\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "ember-drupal/templates/news-room.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-drupal/templates/news-room/congressional-testimony", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "P1cAHK/p",
    "block": "{\"symbols\":[],\"statements\":[[8,\"news/loader\",[],[[\"@modelName\",\"@queryParams\"],[\"congressional-testimony\",[32,0,[\"queryParamValues\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "ember-drupal/templates/news-room/congressional-testimony.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-drupal/templates/news-room/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "6gE5jLs8",
    "block": "{\"symbols\":[],\"statements\":[[8,\"news/loader\",[],[[\"@modelName\",\"@queryParams\"],[\"news-release\",[32,0,[\"queryParamValues\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "ember-drupal/templates/news-room/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-drupal/templates/news-room/news-releases", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "/3fQUO6V",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[30,[36,0],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "ember-drupal/templates/news-room/news-releases.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-drupal/templates/news-room/news-releases/archive", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "CVCxLyOd",
    "block": "{\"symbols\":[],\"statements\":[[8,\"news/loader\",[],[[\"@modelName\",\"@queryParams\",\"@setArchiveYear\",\"@archiveYear\"],[\"news-release\",[32,0,[\"queryParamValues\"]],[32,0,[\"setArchiveYear\"]],[32,0,[\"archiveYear\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "ember-drupal/templates/news-room/news-releases/archive.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-drupal/templates/news-room/news-releases/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "3HAM2R8p",
    "block": "{\"symbols\":[],\"statements\":[[8,\"news/loader\",[],[[\"@modelName\",\"@queryParams\"],[\"news-release\",[32,0,[\"queryParamValues\"]]]],null],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "ember-drupal/templates/news-room/news-releases/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-drupal/templates/news-room/speeches", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Q5zTakFw",
    "block": "{\"symbols\":[],\"statements\":[[8,\"news/loader\",[],[[\"@modelName\",\"@queryParams\"],[\"speech\",[32,0,[\"queryParamValues\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "ember-drupal/templates/news-room/speeches.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-drupal/templates/news-room/stories", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ST41Ni47",
    "block": "{\"symbols\":[],\"statements\":[[8,\"news/loader\",[],[[\"@modelName\",\"@queryParams\"],[\"news-release\",[32,0,[\"queryParamValues\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "ember-drupal/templates/news-room/stories.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-drupal/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("ember-drupal/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("ember-drupal/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("ember-drupal/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;define("ember-drupal/utilities/sample-responses", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.data = void 0;
  const data = [{
    "content": {
      "title": "Boy Scouts Celebrate 100 Year Anniversary at the American River Water Education Center at Folsom Dam",
      "body": "\u003Cp\u003EOn February 17, 2010, over 100 scouts, troop leaders and parents from eight local troops planted a variety of oak and redbud saplings on Reclamation project lands surrounding Central California Area Office (CCAO). The Boy Scouts of America and the Sacramento Tree Foundation, in partnership with the Bureau of Reclamation, planted 100 trees at Reclamation\u2019s CCAO near Folsom Dam in celebration of the Boy Scouts\u2019 100th anniversary. The trees, which were donated by the Sacramento Tree Foundation through a grant from Sacramento Municipal Utility District, will promote the enhancement and restoration of vegetation in the area. The majority of the trees were planted surrounding the American River Water Education Center, which focuses on water conservation and features a water-efficient landscape. The Scouts were also recognized as participants in Take Pride in America\u00ae, a nationwide partnership program authorized by Congress to promote the appreciation and stewardship of our nation\u2019s public lands. This project is part of an effort at CCAO to promote the preservation of natural resources and ecosystems on Reclamation project lands and to manage lands in a way that enhances conditions for fish, wildlife, land and cultural resources.\u003C\/p\u003E\r\n",
      "field_area_office": "Yuma Area Office",
      "field_date_to_be_published": "17-Feb-2010",
      "field_image": {
        "url": "http:\/\/newscms.local\/sites\/default\/files\/2020-06\/hero-banner-successstories-detail_0.jpg",
        "title": "",
        "alt": "test",
        "height": "380",
        "width": "1920"
      },
      "field_important_links_1": {
        "uri": "http:\/\/example.com",
        "title": "lorem ipsum"
      },
      "field_important_links_2": {
        "uri": "http:\/\/example.com",
        "title": "lorem"
      },
      "field_issue_category": null,
      "field_issue_number": "Youth",
      "field_keywords": "n\/a",
      "field_primary_contact_email": "s@s.com",
      "field_primary_contact_name": "Peter Soeth",
      "field_primary_contact_phone": "78979889898",
      "field_region": "Commissioner\u0027s Office",
      "field_secondary_contact_email": "s@ss.com",
      "field_secondary_contact_name": "lorem ipsum",
      "field_secondary_contact_phone": "78676768678",
      "field_state": "Arizona",
      "field_story": "",
      "field_sub_headline": "lorem ipsum"
    },
    "id": "2764",
    "type": "news_release",
    "changed": "Mon, 06\/08\/2020 - 10:58"
  }, {
    "content": {
      "title": "44th Annual Colorado State High School Bridge Building Competition to be Held on February 26",
      "body": "The 44th annual Colorado High School Bridge Building competition will be held at the Bureau of Reclamation Laboratory in Denver on February 26. \u003CBR\u003E\u003CBR\u003E\r\n\r\nApproximately 75-100 students from throughout Colorado will test their engineering knowledge by building their own small-scale structures made only out of basswood and common adhesive. The model bridge that can hold the most weight in contrast to its size is declared the winner. \r\n\r\nThe competition introduces high school students to futures in engineering and the sciences. Reclamation hosts the competition as part of its ongoing efforts to engage youth and encourage future engineers. \r\n\r\nThe top winners in the competition will qualify for the International Contest held in Chicago. \r\n\r\nLocated in Building 56 in the Denver Federal Center, the competition will begin at 8:00 AM. In addition to the competition, tours of Reclamation\u0027s hydraulic and materials laboratories will be given. \r\n\r\nAfter the competition has finished, Reclamation will demonstrate its 5-million pound press by crushing a large concrete cylinder. \r\n\r\nThe competition is a collaboration between the Professional Engineers of Colorado, the American Council of Engineering Companies of Colorado, and the Bureau of Reclamation. \r\n\r\nThis is part of Reclamation\u0027s participation in Secretary of the Interior\u0027s Youth Initiative. Reclamation has an ongoing emphasis to educate and engage youth across all areas of our operations. ",
      "field_area_office": "None",
      "field_date_to_be_published": "27-Feb-2011",
      "field_image": "",
      "field_important_links_1": {
        "title": null
      },
      "field_important_links_2": {
        "title": null
      },
      "field_issue_category": null,
      "field_issue_number": "Youth",
      "field_keywords": "n\/a",
      "field_primary_contact_email": null,
      "field_primary_contact_name": "Peter Soeth",
      "field_primary_contact_phone": null,
      "field_region": "Commissioner\u0027s Office",
      "field_secondary_contact_email": null,
      "field_secondary_contact_name": null,
      "field_secondary_contact_phone": null,
      "field_state": "Arizona",
      "field_story": "",
      "field_sub_headline": null
    },
    "id": "2762",
    "type": "news_release",
    "changed": "Mon, 01\/13\/2020 - 16:48"
  }, {
    "content": {
      "title": "California Conservation Corps Youth Help Bureau of Reclamation Clean Up Lake Berryessa Lands",
      "body": "\u003Cimg src=\u0022http:\/\/oneinterior.doi.net\/oneinterior\/News\/images\/photo1-400-cropped-LB_CCC_003.jpg\u0022 alt=\u0022Members of the California Conservation Corps work hard as they clean up federal lands on the west side of Lake Berryessa in Napa California.\u0022\u003E\r\n\r\nThe motto of the California Conservation Corps \u2013 \u201cHard work, low pay, miserable conditions \u2026 and more!\u201d \u2013 pretty much sums up the 40-hour workweek for 19 young men and women, ages 18-25, who are helping clean up federal lands on the west side of Lake Berryessa in Napa County, Calif.\r\n\r\nLake Berryessa is part of the Bureau of Reclamation\u2019s Solano Project, managed by the Mid-Pacific Region, Central California Area Office. The cleanup work is being funded through the American Recovery and Reinvestment Act and ties into the Department of the Interior\u2019s \u201cYouth in the Great Outdoors\u0022 initiative to employ, educate and engage young people from all backgrounds in exploring, connecting with and preserving America\u2019s natural and cultural heritage.\r\n\r\nIn hard hats and safety glasses, the three women and 16 men are cleaning up tons of debris left by previous concession contractors. Much of it is composed of old concrete-filled tires that had been used years ago to build retaining walls to keep the lake\u2019s hillsides from sliding into the water. Although a recently acquired jackhammer helps, the crew continues to break up the concrete using only sledgehammers.\r\n\r\nA state agency created by Gov. Jerry Brown in July 1976, the CCC is the oldest and largest state conservation corps program in the nation. The program hires young adults for a year of service that includes natural-resource and emergency-response work to help them become stronger workers, citizens and individuals. Modeled after the original federal Civilian Conservation Corps created in 1933 by President Franklin Roosevelt, some 110,000 young people have joined the CCC since 1976, with about 3,000 hired annually.\r\n\r\nThe corps members help not only the public by their work, they help themselves by learning new skills and advancing their education: Since 2008, more than 4,000 CCC members have earned their high-school diplomas, and many then continued their schooling using either the CCC Scholarship or the Corps Networks AmeriCorps Education Award. When Berryessa crew members were asked what they would be doing if they weren\u2019t in the CCC, their answers ranged from unloading trucks to working customer-service jobs to playing video games.\r\n\r\nThe CCC members on the job at Lake Berryessa \u2013 differentiated by their hat color (blue for corps members, green for specialists, red for crew leaders, and yellow for supervisors) \u2013 are Monet Allen, Cruz Castro, Daniel Davidson, Fred Freeman, Alexandrea Henderson, John Lenhard, Justin Leon, Dereck Loring, Joshua Musgray, Patrick Perry, Michael Peterson, Mason Rising, Shiffon Rollins, Ruben Simi, Dantrell Stevens, Miles Stranzl, Jeff Taggart, Justen Tatum and Daniel White. Their onsite supervisors are Miguel Garcia and Daniel Debolt.\r\n\r\n\u003Cimg src=\u0022http:\/\/oneinterior.doi.net\/oneinterior\/News\/images\/photo2-LB_CCC_A_S_M.jpg\u0022 alt=\u0022Corps members, differentiated by their blue-colored hats, take a break from work to pose for a picture.\u0022\u003E\r\n\u003Cimg src=\u0022http:\/\/oneinterior.doi.net\/oneinterior\/News\/images\/photo3-LB_CCC_Jeff_Taggart_1.jpg\u0022 alt=\u0022Another CCC member, wearing a green hat to show he is a specialist, helps to clear trash.\u0022\u003E\r\n\u003Cimg src=\u0022http:\/\/oneinterior.doi.net\/oneinterior\/News\/images\/image4-LB_CCC_Patrick_Perry_1.jpg\u0022 alt=\u0022A CCC member uses a jack hammer as he works to clean up Lake Berryessa.\u0022\u003E   ",
      "field_area_office": "None",
      "field_date_to_be_published": "16-Feb-2011",
      "field_image": "",
      "field_important_links_1": {
        "title": null
      },
      "field_important_links_2": {
        "title": null
      },
      "field_issue_category": null,
      "field_issue_number": "Youth",
      "field_keywords": "n\/a",
      "field_primary_contact_email": null,
      "field_primary_contact_name": "Peter Soeth",
      "field_primary_contact_phone": null,
      "field_region": "Commissioner\u0027s Office",
      "field_secondary_contact_email": null,
      "field_secondary_contact_name": null,
      "field_secondary_contact_phone": null,
      "field_state": "Arizona",
      "field_story": "",
      "field_sub_headline": null
    },
    "id": "2763",
    "type": "news_release",
    "changed": "Mon, 01\/13\/2020 - 16:48"
  }, {
    "content": {
      "title": "Reclamation\u0027s Mid-Pacific Region, Other Federal Agencies And Tribes Meet to Begin Developing Tribal Youth Initiative",
      "body": "Pablo Arroyave, Deputy Regional Director, and other Region representatives met with federal agencies and Tribes on May 5 in Klamath Falls to discuss formation of a Klamath Basin initiative designed to increase employment and education opportunities for tribal youth.\r\n\r\nThe program is part of the America\u2019s Great Outdoors Initiative to employ, educate, and engage America\u0027s young people from all backgrounds in exploring, connecting with and preserving America\u2019s natural and cultural heritage. Through employment and educational opportunities offered by the Department of the Interior, youth will have a key role in creating a new energy frontier, tackling climate change issues, empowering Native communities, building trails, enhancing wildlife habitat, and restoring our cultural and historic landmarks.\r\n\r\nMore information \u003Ca href=\u0022http:\/\/oneinterior.doi.net\/oneinterior\/Youth\/index.cfm\u0022 target=\u0022_new\u0022\u003Ehere\u003C\/a\u003E.",
      "field_area_office": "None",
      "field_date_to_be_published": "11-May-2011",
      "field_image": "",
      "field_important_links_1": {
        "title": null
      },
      "field_important_links_2": {
        "title": null
      },
      "field_issue_category": null,
      "field_issue_number": "Youth",
      "field_keywords": "n\/a",
      "field_primary_contact_email": null,
      "field_primary_contact_name": "Peter Soeth",
      "field_primary_contact_phone": null,
      "field_region": "Pacific Northwest Region",
      "field_secondary_contact_email": null,
      "field_secondary_contact_name": null,
      "field_secondary_contact_phone": null,
      "field_state": "Arizona",
      "field_story": "",
      "field_sub_headline": null
    },
    "id": "2759",
    "type": "news_release",
    "changed": "Mon, 01\/13\/2020 - 16:48"
  }, {
    "content": {
      "title": "Reclamation to Hold C.A.S.T. for Kids Event at New Melones Lake as Part of \u0022America\u0027s Great Outdoors\u0022",
      "body": "The Bureau of Reclamation\u0027s Central California Area Office will hold a C.A.S.T. (Catch a Special Thrill) for Kids event on Saturday, June 11, 2011, from 8 a.m. to 2 p.m. at New Melones Lake\u0027s Eagle Point Group Picnic Area in the Tuttletown Recreation Area. C.A.S.T. for Kids events \u0022team up\u0022 sponsors and anglers with special needs children for a day of fishing enjoyment. Disabled and disadvantaged children under 16 years of age may participate in this fun and educational annual activity free of charge.\r\n\r\nThis C.A.S.T. for Kids event ties into President Barack Obama\u0027s \u003Ca href=\u0022http:\/\/americasgreatoutdoors.gov\/\u0022 target=\u0022_new\u0022\u003E\u0022America\u0027s Great Outdoors\u0022 (AGO) initiative\u003C\/a\u003E. AGO is a grassroots approach to protecting our nation\u0027s lands and waters while connecting Americans to our natural and cultural heritage. The initiative seeks to empower Americans to share in the responsibility to conserve, restore and provide better access to our lands and waters and leave a healthy, vibrant outdoor legacy for generations to come. And where better for the public to appreciate and enjoy the great outdoors than at a Reclamation facility such as New Melones Lake?\r\n\r\nThis children\u0027s fishing event, begun in 1992 by Reclamation staff, was combined with the C.A.S.T. Foundation in 2003 to offer increased outdoor recreational opportunities for disabled and disadvantaged children. At this year\u0027s event, each child will receive a free fishing rod and reel, bait and tackle equipment and instruction. Environmental exhibits, displays and activities, including a casting contest, fishing simulator and free boat rides, will be offered.\r\n\r\nWater safety, a major theme for the day, will be demonstrated by Reclamation\u0027s New Melones Lake staff, and boat rides will be provided by volunteers and staff members. Expert fishing advice and demonstrations will be available from experienced anglers, and some children will have the opportunity to fish with members of local fishing clubs aboard boats. The morning will culminate with a free BBQ lunch provided by The Messengers Motorcycle Club.",
      "field_area_office": "None",
      "field_date_to_be_published": "07-May-2011",
      "field_image": "",
      "field_important_links_1": {
        "title": null
      },
      "field_important_links_2": {
        "title": null
      },
      "field_issue_category": null,
      "field_issue_number": "Youth",
      "field_keywords": "n\/a",
      "field_primary_contact_email": null,
      "field_primary_contact_name": "Peter Soeth",
      "field_primary_contact_phone": null,
      "field_region": "Commissioner\u0027s Office",
      "field_secondary_contact_email": null,
      "field_secondary_contact_name": null,
      "field_secondary_contact_phone": null,
      "field_state": "Arizona",
      "field_story": "",
      "field_sub_headline": null
    },
    "id": "2760",
    "type": "news_release",
    "changed": "Mon, 01\/13\/2020 - 16:48"
  }, {
    "content": {
      "title": "Let\u2019s Move Outside! Joins Forces with C.A.S.T. for Kids at Reclamation-hosted Event in Arizona",
      "body": "\u003Cimg src=\u0022http:\/\/oneinterior.doi.net\/oneinterior\/News\/images\/bg-John-Tubbs-distributes-fishing-tackle-to-participating-child-042311-400.jpg\u0022 alt=\u0022Reclamation\u0027s Deputy Assistant Secretary for Water and Science John Tubbs hands a young fisherman the rest of his fishing equipment at a Pheonic C.A.S.T. for Kids event.\u0022\u003E \r\n\r\nThe Bureau of Reclamation\u0027s Phoenix Area Office hosted its 12th annual C.A.S.T. for Kids fishing event at Lake Pleasant Regional Park, north of Phoenix, Ariz. on April 23, 2011. C.A.S.T., which stands for Catch a Special Thrill, offers children with disabilities or socioeconomic disadvantages an opportunity to enjoy a day of fishing. This year, the four key principles of the Let\u0027s Move Outside! initiative, a component of the first lady\u0027s Let\u0027s Move campaign, became the focal point of the day. \r\n\r\nDeputy Assistant Secretary for Water and Science John Tubbs came out from Washington to support the Let\u0027s Move Outside! emphasis on health, family, fun, and stewardship. \r\n\r\n\u0022We\u0027ve got about a hundred volunteers out here with kids from the Phoenix area enjoying a great day of fishing here on beautiful Lake Pleasant. We\u0027re getting people outdoors, in America\u0027s Great Outdoors. I\u0027m just happy to be here and be a part of it,\u0022 Tubbs said from a speedboat piloted by Reclamation\u0027s Phoenix area manager Randy Chandler. They were accompanied by David Modeer, general manager of the Central Arizona Project. No trouble finding kids reeling in those fish \u2013 the large-mouth bass were biting this year!\r\n\r\nWhile the participating children were out fishing, their families enjoyed a casting practice experience on shore and lessons on stewardship from Liberty Wildlife, a local organization that rehabilitates injured wild birds. \r\n\r\nThis year\u0027s C.A.S.T. for Kids event emphasized good nutrition and healthy food choices by offering fruit, raw vegetables to snack on, and a turkey-burger option at lunch. Recipe cards for healthy foods that are fun to make and fun to eat were included in the participating children\u0027s goody-bags, along with rules for outdoor games the whole family could enjoy. \r\n\r\n\u0022I saw a lot of big smiles on kids\u0027 faces and a lot of big fish, too,\u0022 Tubbs said, speaking at the awards ceremony during which each child receives a plaque and a trophy. \u0022It was great to see people happy, enjoying the water and the weather. I want to thank all the volunteers and the boat captains today. This is a great opportunity to get outside and enjoy the water and our great outdoors.\u0022 He added, \u0022I\u0027ll be sure to bring back word to the assistant secretary about what a fantastic event this is.\u0022\r\n\r\nThis year\u0027s event allowed 37 children with disabilities or who are socioeconomically disadvantaged to spend a morning out on the lake, courtesy of volunteers from the Arizona Bass Federation. Their safety was ensured by the Arizona Game and Fish Department and the Coast Guard Auxiliary. The event could not take place without the cooperation and contributions of the Central Arizona Water Conservation District and Maricopa County Parks and Recreation, which manages the recreational facilities at the lake, formed by New Waddell Dam on the Central Arizona Project, through an agreement with Reclamation. \r\n\r\nThe C.A.S.T. for Kids fishing event at Lake Pleasant is hosted by the Bureau of Reclamation\u0027s Phoenix Area office; Steve Johnson is the coordinator. Cooperating agencies include the Arizona Bass Federation; Arizona Game and Fish Department; Central Arizona Project; Coast Guard Auxiliary; Liberty Wildlife; and the Maricopa County Parks and Recreation Department. Children are referred from the Paradise Valley Unified School District Special Olympics; Quality Care Network; and the Vineyard Church of North Phoenix.\r\n\r\nSponsors donate fishing equipment (including worms) and provide food, items for goody bags, trophies, exhibits and everything needed to make the day enjoyable for all involved. This year\u0027s sponsors included: Arizona Bass Federation; Baker Wee Bakery;  Bill Johnson\u0027s Restaurants; Central Arizona Project, President\u0027s Award for Community Service; Coca-Cola Enterprises; Shamrock Foods Co.; Dairy Maid Foods; First Credit Union; Fry\u0027s Food Stores; Salt River Solar \u0026 Wind LLC; and Sav-On Fence Co.\r\n\r\n\u003Ca href=\u0022http:\/\/www.castforkids.org\/\u0022 target=\u0022_new\u0022\u003EC.A.S.T. for Kids Foundation\u003C\/a\u003E was formed in 1991 to join volunteers who love to fish with children who are disabled and disadvantaged children for a day of fishing in the outdoors. The first C.A.S.T. for Kids event was held in 1992 in Washington state in cooperation with the Bureau of Reclamation. \r\n\r\n\u003Ca href=\u0022http:\/\/www.letsmove.gov\/lets-move-outside\u0022 target=_\u0022new\u0022\u003ELet\u0027s Move Outside!\u003C\/a\u003E engages young people from all backgrounds in a range of educational programs and self-guided activities on America\u0027s public lands and waters.\r\n\r\n\u003Cimg src=\u0022http:\/\/oneinterior.doi.net\/oneinterior\/News\/images\/bg-Lets-Move-Outside-banner-042311-400.jpg\u0022 alt=\u0022Reclamation\u0027s C.A.S.T. event supports the presidential Let\u0027s Move Outside! initiative.\u0022\u003E \r\n\r\n\u003Cimg src=\u0022http:\/\/oneinterior.doi.net\/oneinterior\/News\/images\/bg-Phoenix-Area-Manager-Randy-Chandler-gives-trophy-to-participating-child-042311-400_1.jpg\u0022 alt=\u0022Pheonix Area Manager Randy Chandler gives a trophy to a participating C.A.S.T. kid!\u0022\u003E\r\n\r\n\u003Cimg src=\u0022http:\/\/oneinterior.doi.net\/oneinterior\/News\/images\/bg-John-Tubbs-talks-to-volunteers-042311-400.jpg\u0022 alt=\u0022Reclamation\u0027s Deputy Assistant Secretary for Water and Science John Tubbs talks to young volunteers at C.A.S.T. for Kids event in Arizona.\u0022\u003E ",
      "field_area_office": "None",
      "field_date_to_be_published": "28-Apr-2011",
      "field_image": "",
      "field_important_links_1": {
        "title": null
      },
      "field_important_links_2": {
        "title": null
      },
      "field_issue_category": null,
      "field_issue_number": "Youth",
      "field_keywords": "n\/a",
      "field_primary_contact_email": null,
      "field_primary_contact_name": "Peter Soeth",
      "field_primary_contact_phone": null,
      "field_region": "Commissioner\u0027s Office",
      "field_secondary_contact_email": null,
      "field_secondary_contact_name": null,
      "field_secondary_contact_phone": null,
      "field_state": "Arizona",
      "field_story": "",
      "field_sub_headline": null
    },
    "id": "2761",
    "type": "news_release",
    "changed": "Mon, 01\/13\/2020 - 16:48"
  }, {
    "content": {
      "title": "Annual C.A.S.T. for Kids Event Scheduled in Prineville Sunday July 10",
      "body": "The C.A.S.T. for Kids fishing event will be in full gear providing a day of fishing to children with disabilities on July 10 at Prineville Reservoir State Park near Prineville, Ore. C.A.S.T. stands for \u0022Catch a Special Thrill.\u0022 \u003CBR\u003E\u003CBR\u003E\r\n\r\n\u0022This annual event offers so much for the kids as well as our volunteers,\u0022 said local coordinator Dale Barrett of the Bureau of Reclamation\u0027s Bend Field Office. \u0022Each year we see more parents and grandparents requesting space for their child to participate. The volunteers really put their heart and soul into making it a great success.\u0022 \r\n\r\nThe children range in age from 7-16 years old and have a wide range of physical and\/or developmental disabilities or even a terminal illness. Each one receives fishing gear, a tee-shirt, and a hat, Barrett said. \r\n\r\nVolunteers from the Central Oregon BASS Club will provide fishing boats and expertise to assist novice anglers. The morning fishing events will be followed by a barbecue lunch put on by the Kiwanis Club of Prineville. The Crook County Sheriff\u0027s Search and Rescue will be assisting with parking, traffic control, and marine patrol. \r\n\r\nDonor-friendly groups this year are The Dawg House, Ray\u0027s Food Place, and Tom \u0026 Charlie\u0027s Diner. Others participating are Pepsi Cola Bottling Co., Starbucks, Earth2O, The Grocery Outlet, Wholesale Sports, and the National Fish Carvers Guild. New donors and volunteers are needed and encouraged to participate. \r\n\r\nPartners include: C.A.S.T. for Kids Foundation, Bureau of Reclamation, Oregon State Parks and Recreation Department, Central Oregon BASS Club, Kiwanis Club of Prineville, and Crook County Sheriff\u0027s Office. ",
      "field_area_office": "None",
      "field_date_to_be_published": "06-Jul-2011",
      "field_image": "",
      "field_important_links_1": {
        "title": null
      },
      "field_important_links_2": {
        "title": null
      },
      "field_issue_category": null,
      "field_issue_number": "Youth",
      "field_keywords": "n\/a",
      "field_primary_contact_email": null,
      "field_primary_contact_name": "Peter Soeth",
      "field_primary_contact_phone": null,
      "field_region": "Commissioner\u0027s Office",
      "field_secondary_contact_email": null,
      "field_secondary_contact_name": null,
      "field_secondary_contact_phone": null,
      "field_state": "Arizona",
      "field_story": "",
      "field_sub_headline": null
    },
    "id": "2756",
    "type": "news_release",
    "changed": "Mon, 01\/13\/2020 - 16:48"
  }, {
    "content": {
      "title": "C.A.S.T. for Kids Event Scheduled in Yakima",
      "body": "Children with a wide range of disabilities will have the opportunity to reel in a good time as they join some enthusiastic volunteers during the C.A.S.T. for Kids event scheduled for Saturday, June 18, at Sarg Hubbard Pond located on the Yakima Greenway in Yakima, WA. \u003CBR\u003E\u003CBR\u003E\r\nC.A.S.T., which stands for \u0022Catch a Special Thrill,\u0022 offers children with disabilities and terminal illnesses an opportunity to enjoy a day of fishing at Sarg Hubbard Pond. \r\n\r\n\u0022This will be a first fish experience for some of these kids,\u0022 said Chris Humphries of the Bureau of Reclamation\u0027s Columbia-Cascades Area Office. \u0022This is also a great opportunity for volunteers to be part of a special experience that these children will remember for a long time.\u0022 \r\n\r\nChildren range in age from 7-16 years old, many have a variety of physical or developmental disabilities and some may suffer with terminal illnesses. Each participant will receive fishing gear, a tee shirt, and a hat, Humphries said. \r\n\r\nVolunteers from the local Carpenter Local Union #770, Reclamation, and others will serve as fishing buddies and offer assistance to the novice anglers. Reclamation volunteers will also provide a barbecue lunch following the event for the participants. \r\n\r\nPartners include: C.A.S.T. for Kids Foundation, Bureau of Reclamation, Children\u0027s Village, Starbucks Coffee Company, Valley Septic, Culligan Water Softener, McDonalds, Pepsi, Yakama Nation Legends Casino, and TreeTop, Inc.",
      "field_area_office": "None",
      "field_date_to_be_published": "11-Jun-2011",
      "field_image": "",
      "field_important_links_1": {
        "title": null
      },
      "field_important_links_2": {
        "title": null
      },
      "field_issue_category": null,
      "field_issue_number": "Youth",
      "field_keywords": "n\/a",
      "field_primary_contact_email": null,
      "field_primary_contact_name": "Peter Soeth",
      "field_primary_contact_phone": null,
      "field_region": "Commissioner\u0027s Office",
      "field_secondary_contact_email": null,
      "field_secondary_contact_name": null,
      "field_secondary_contact_phone": null,
      "field_state": "Arizona",
      "field_story": "",
      "field_sub_headline": null
    },
    "id": "2757",
    "type": "news_release",
    "changed": "Mon, 01\/13\/2020 - 16:48"
  }, {
    "content": {
      "title": "2011 Navajo Lake State Park CAST For Kids Event",
      "body": "2011 marks the 20th Anniversary for the C.A.S.T. for Kids program\u2019s extraordinary outdoor event which teams sponsors and volunteers with area youngsters for a day of fishing sportsmanship. May 14, 2011, also marked the 14th C.A.S.T. for Kids event at Navajo Lake, New Mexico, sponsored by the Bureau of Reclamation\u2019s Four Corners Construction Office. The Navajo Lake event is one of the largest C.A.S.T. events in the United States. This 2011 event was also a \u201cLet\u2019s Move Outside!\u201d event, the Department of the Interior\u2019s component of First Lady Michelle Obama\u2019s national \u201cLet\u2019s Move!\u201d initiative to promote outdoor physical activity for children and families.\r\n\u003CBR\u003E\u003CBR\u003E\r\nSixty-nine challenged and disadvantaged children experienced the joy of fishing with many community volunteers on 26 private boats and seven pontoon boats. For some kids, this was their first fishing experience. The young anglers were educated about boat safety, angler ethics, and the importance of natural resources.\r\n\r\nVolunteers from Reclamation\u2019s Four Corners Construction Office and the Bureau of Land Management\u2019s Farmington Field Office team together with others from around the Four Corners area to provide an exceptional experience for these young anglers each year. In addition to learning about fishing and related resources, outdoor exercise and nutrition were also featured at this year\u2019s event. \r\n\r\nEach year, Reclamation sponsors many \u003Ca href=\u0022http:\/\/www.castforkids.org\/\u0022 target=\u0022_new\u0022\u003EC.A.S.T. for Kids \u003C\/a\u003E fishing events at reservoirs across the West. These events are intended to provide disabled and disadvantaged children the opportunity to enjoy a quality outdoor recreational experience through the sport of fishing.  For more information, visit: the CAST for Kids web site.",
      "field_area_office": "None",
      "field_date_to_be_published": "20-May-2011",
      "field_image": "",
      "field_important_links_1": {
        "title": null
      },
      "field_important_links_2": {
        "title": null
      },
      "field_issue_category": null,
      "field_issue_number": "Youth",
      "field_keywords": "n\/a",
      "field_primary_contact_email": null,
      "field_primary_contact_name": "Peter Soeth",
      "field_primary_contact_phone": null,
      "field_region": "Commissioner\u0027s Office",
      "field_secondary_contact_email": null,
      "field_secondary_contact_name": null,
      "field_secondary_contact_phone": null,
      "field_state": "Arizona",
      "field_story": "",
      "field_sub_headline": null
    },
    "id": "2758",
    "type": "news_release",
    "changed": "Mon, 01\/13\/2020 - 16:48"
  }, {
    "content": {
      "title": "C.A.S.T. For Kids Scheduled at Potholes State Park",
      "body": "Children with a wide range of disabilities will have the opportunity to reel in a good time as they join enthusiastic volunteers during the Columbia Basin Project\u0027s C.A.S.T. for Kids event on Saturday, August 6 at Potholes Reservoir located 15 miles south of Moses Lake, Washington. \r\nC.A.S.T., which stands for \u0022Catch a Special Thrill,\u0022 offers children with disabilities an opportunity to enjoy a day of fishing at the reservoir. \u003CBR\u003E\u003CBR\u003E\r\n\r\nParticipants and volunteers will gather at Potholes State Park located off State Route 262. Washington State Parks manages the campground which offers easy access to Potholes Reservoir. \r\n\r\n\u0022This may be the first fishing experience for some of these kids,\u0022 said Margaret Schoneman, of Reclamation\u0027s Ephrata Field Office. \u0022This is a great opportunity to be for us to be part of a special experience that these children will remember for a lifetime.\u0022 \r\n\r\nThe children range in age from 7-16 years old and have a variety of physical or developmental disabilities and, in some cases, a terminal illness. \u0022Each participant will receive fishing gear, tee shirt, and a hat,\u0022 said Margaret Schoneman. \r\n\r\nThe State Bass Anglers Societies work under the large umbrella of the Bass Anglers Sportsman Society and will be on hand with fishing boats and years of professional experience to assist novice anglers. The morning fishing events will be followed by a picnic lunch prepared by the Culinary Arts Class of the Columbia Basin Job Corps Center. \r\n\r\nPartners include: Bureau of Reclamation, C.A.S.T. For Kids Foundation, Columbian Bain Walleye Club, Potholes Bass Club, Washington BASS Club, Columbia Basin Job Corps Center, Washington State Parks, Washington State Fish and Wildlife, and the Shriners Hospital for Children. Donations for the event have been provided by local businesses including: Coulee Playland Resort in Electric City, Tri State Outfitters in Moses Lake, Cascade Marina, Mar Don Resort, O\u0027Sullivan Sportsman Resort, Othello Auto Parts, Sporty\u0027s Steakhouse, Loudon Ortho Sports and Coca-Cola Bottling Company. Medical support this year is being provided by Fire District No. 12 from Royal Slope. ",
      "field_area_office": "None",
      "field_date_to_be_published": "30-Jul-2011",
      "field_image": "",
      "field_important_links_1": {
        "title": null
      },
      "field_important_links_2": {
        "title": null
      },
      "field_issue_category": null,
      "field_issue_number": "Youth",
      "field_keywords": "n\/a",
      "field_primary_contact_email": null,
      "field_primary_contact_name": "Peter Soeth",
      "field_primary_contact_phone": null,
      "field_region": "Commissioner\u0027s Office",
      "field_secondary_contact_email": null,
      "field_secondary_contact_name": null,
      "field_secondary_contact_phone": null,
      "field_state": "Arizona",
      "field_story": "",
      "field_sub_headline": null
    },
    "id": "2753",
    "type": "news_release",
    "changed": "Mon, 01\/13\/2020 - 16:48"
  }];
  _exports.data = data;
});
;

;define('ember-drupal/config/environment', [], function() {
  var prefix = 'ember-drupal';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("ember-drupal/app")["default"].create({"name":"ember-drupal","version":"0.0.0+66193cb0"});
          }
        
//# sourceMappingURL=ember-drupal.map
