webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\" >\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__root_root_module__ = __webpack_require__("../../../../../src/app/root/root.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routing_module__ = __webpack_require__("../../../../../src/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4__routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__root_root_module__["a" /* RootModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
            exports: []
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/models/checkconnection.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckConnection; });
var CheckConnection = (function () {
    function CheckConnection(result, databaseNames, failMessage) {
        if (failMessage === void 0) { failMessage = null; }
        this.result = result;
        this.databaseNames = databaseNames;
        this.failMessage = failMessage;
    }
    return CheckConnection;
}());



/***/ }),

/***/ "../../../../../src/app/models/enums.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckConnectionResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ViewType; });
/* unused harmony export JoinType */
var CheckConnectionResult;
(function (CheckConnectionResult) {
    CheckConnectionResult[CheckConnectionResult["none"] = 0] = "none";
    CheckConnectionResult[CheckConnectionResult["invalidCredentials"] = 1] = "invalidCredentials";
    CheckConnectionResult[CheckConnectionResult["invalidServerName"] = 2] = "invalidServerName";
    CheckConnectionResult[CheckConnectionResult["connected"] = 3] = "connected";
})(CheckConnectionResult || (CheckConnectionResult = {}));
var ViewType;
(function (ViewType) {
    ViewType[ViewType["none"] = 0] = "none";
    ViewType[ViewType["category"] = 1] = "category";
    ViewType[ViewType["view"] = 2] = "view";
    ViewType[ViewType["field"] = 3] = "field";
})(ViewType || (ViewType = {}));
var JoinType;
(function (JoinType) {
    JoinType[JoinType["none"] = 0] = "none";
    JoinType[JoinType["inner"] = 1] = "inner";
    JoinType[JoinType["left"] = 2] = "left";
    JoinType[JoinType["right"] = 3] = "right";
})(JoinType || (JoinType = {}));


/***/ }),

/***/ "../../../../../src/app/models/settings.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
var Settings = (function () {
    function Settings(serverName, userName, password, databaseName, isInitialized) {
        if (isInitialized === void 0) { isInitialized = false; }
        this.serverName = serverName;
        this.userName = userName;
        this.password = password;
        this.databaseName = databaseName;
        this.isInitialized = isInitialized;
    }
    return Settings;
}());



/***/ }),

/***/ "../../../../../src/app/models/source-view.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SourceView; });
var SourceView = (function () {
    function SourceView(value, category, id, isExpanded, parentId) {
        this.value = value;
        this.category = category;
        this.id = id;
        this.isExpanded = isExpanded;
        this.parentId = parentId;
        this.children = [];
    }
    return SourceView;
}());



/***/ }),

/***/ "../../../../../src/app/models/sourceviewdata.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SourceViewData; });
var SourceViewData = (function () {
    function SourceViewData(name, fields) {
        this.name = name;
        this.fields = fields;
    }
    return SourceViewData;
}());



/***/ }),

/***/ "../../../../../src/app/models/user-selected-field.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSelectedField; });
var UserSelectedField = (function () {
    function UserSelectedField(name, viewName) {
        this.name = name;
        this.viewName = viewName;
    }
    return UserSelectedField;
}());



/***/ }),

/***/ "../../../../../src/app/models/user-view.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDataModel; });
var ViewDataModel = (function () {
    function ViewDataModel() {
        this.selectedViewNames = [];
        this.selectedViews = [];
        this.isValid = false;
    }
    return ViewDataModel;
}());



/***/ }),

/***/ "../../../../../src/app/models/validateviewname.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewNameValidationResult; });
var ViewNameValidationResult = (function () {
    function ViewNameValidationResult(result, failedReason) {
        this.result = result;
        this.failedReason = failedReason;
    }
    return ViewNameValidationResult;
}());



/***/ }),

/***/ "../../../../../src/app/root/add-new-view/add-join-operations/add-join-operations/add-join-operations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/root/add-new-view/add-join-operations/add-join-operations/add-join-operations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\r\n\r\n  <div class=\"col-xs-5 col-sm-4 col-md-4 col-lg-3\">\r\n    <h4>Выбранные представления</h4>\r\n    <app-selected-views-tree></app-selected-views-tree>\r\n  </div>\r\n  <div class=\"col-xs-7 col-sm-5 col-md-4 col-lg-3\">\r\n    <app-set-join-settings-form></app-set-join-settings-form>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n  <div class=\"col-xs-4 col-sm-3 col-md-2 col-lg-1\">\r\n    <button type=\"button\" class=\"btn btn-link\" (click)=\"router.navigate(['addview/source'])\">Вернуться назад</button>\r\n  </div>\r\n    <div class=\"col-xs-4 col-sm-3 col-md-3 col-lg-2\"></div>\r\n<div>\r\n  <button type=\"button\" class=\"btn btn-link\" (click)=\"router.navigate(['addview/fields'])\">Перейти дальше</button>\r\n\r\n</div>\r\n  </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/root/add-new-view/add-join-operations/add-join-operations/add-join-operations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddJoinOperationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddJoinOperationsComponent = (function () {
    function AddJoinOperationsComponent(router) {
        this.router = router;
    }
    AddJoinOperationsComponent.prototype.ngOnInit = function () {
    };
    AddJoinOperationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-join-operations',
            template: __webpack_require__("../../../../../src/app/root/add-new-view/add-join-operations/add-join-operations/add-join-operations.component.html"),
            styles: [__webpack_require__("../../../../../src/app/root/add-new-view/add-join-operations/add-join-operations/add-join-operations.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AddJoinOperationsComponent);
    return AddJoinOperationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/root/add-new-view/add-join-operations/selected-views-tree/selected-views-tree.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/root/add-new-view/add-join-operations/selected-views-tree/selected-views-tree.component.html":
/***/ (function(module, exports) {

module.exports = "<tree\r\n  #tree\r\n  [tree]=\"nodes\" (nodeSelected)=\"emitSelectedEvent($event)\">\r\n</tree>\r\n"

/***/ }),

/***/ "../../../../../src/app/root/add-new-view/add-join-operations/selected-views-tree/selected-views-tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedViewsTreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_view_source_service__ = __webpack_require__("../../../../../src/app/services/user-view-source.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectedViewsTreeComponent = (function () {
    function SelectedViewsTreeComponent(viewDataSettings) {
        this.viewDataSettings = viewDataSettings;
    }
    SelectedViewsTreeComponent.prototype.ngOnInit = function () {
    };
    SelectedViewsTreeComponent.prototype.emitSelectedEvent = function ($event) {
    };
    SelectedViewsTreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-selected-views-tree',
            template: __webpack_require__("../../../../../src/app/root/add-new-view/add-join-operations/selected-views-tree/selected-views-tree.component.html"),
            styles: [__webpack_require__("../../../../../src/app/root/add-new-view/add-join-operations/selected-views-tree/selected-views-tree.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_view_source_service__["a" /* ViewDataService */]])
    ], SelectedViewsTreeComponent);
    return SelectedViewsTreeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/root/add-new-view/add-join-operations/set-join-settings-form/set-join-settings-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/root/add-new-view/add-join-operations/set-join-settings-form/set-join-settings-form.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  set-join-settings-form works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/root/add-new-view/add-join-operations/set-join-settings-form/set-join-settings-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetJoinSettingsFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SetJoinSettingsFormComponent = (function () {
    function SetJoinSettingsFormComponent() {
    }
    SetJoinSettingsFormComponent.prototype.ngOnInit = function () {
    };
    SetJoinSettingsFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-set-join-settings-form',
            template: __webpack_require__("../../../../../src/app/root/add-new-view/add-join-operations/set-join-settings-form/set-join-settings-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/root/add-new-view/add-join-operations/set-join-settings-form/set-join-settings-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SetJoinSettingsFormComponent);
    return SetJoinSettingsFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/root/add-new-view/add-new-view-common/add-new-view-common.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/root/add-new-view/add-new-view-common/add-new-view-common.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <router-outlet></router-outlet>\r\n  <div class=\"col-xs-12 form-group\">\r\n    <button class=\"btn-success\" [disabled]=\"!viewModel.isValid\" (click)=\"onCreateView()\">Создать представление</button>\r\n    <button class=\"btn-primary\" (click)=\"onSaveSettings()\">Сохранить настройки</button>\r\n    <button class=\"btn-danger\" (click)=\"onClear()\">Очистить форму</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/root/add-new-view/add-new-view-common/add-new-view-common.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewViewCommonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_data_storage__ = __webpack_require__("../../../../../src/app/storage/data-storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_view_source_service__ = __webpack_require__("../../../../../src/app/services/user-view-source.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_cache_model_storage__ = __webpack_require__("../../../../../src/app/storage/cache.model.storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__ = __webpack_require__("../../../../rxjs/_esm5/Subscription.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddNewViewCommonComponent = (function () {
    function AddNewViewCommonComponent(viewDataService, dataStorage, cacheStorage) {
        this.viewDataService = viewDataService;
        this.dataStorage = dataStorage;
        this.cacheStorage = cacheStorage;
        this.viewModelDataChanged = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["a" /* Subscription */]();
    }
    AddNewViewCommonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewModelDataChanged = this.viewDataService.viewSettingModelChanged.subscribe(function (model) {
            _this.viewModel = model;
        });
        this.cacheStorage.retrieveUserViewsModel();
    };
    AddNewViewCommonComponent.prototype.onCreateView = function () {
    };
    AddNewViewCommonComponent.prototype.onSaveSettings = function () {
        var model = this.viewDataService.getViewDataSettings();
        this.cacheStorage.storeUserViewsModel(model);
    };
    AddNewViewCommonComponent.prototype.onClear = function () {
        this.viewDataService.clear();
    };
    AddNewViewCommonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-new-view-common',
            template: __webpack_require__("../../../../../src/app/root/add-new-view/add-new-view-common/add-new-view-common.component.html"),
            styles: [__webpack_require__("../../../../../src/app/root/add-new-view/add-new-view-common/add-new-view-common.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_view_source_service__["a" /* ViewDataService */],
            __WEBPACK_IMPORTED_MODULE_1__storage_data_storage__["a" /* DummyDataStorage */],
            __WEBPACK_IMPORTED_MODULE_3__storage_cache_model_storage__["a" /* CacheModelStorage */]])
    ], AddNewViewCommonComponent);
    return AddNewViewCommonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/root/add-new-view/select-source-views/add-source-views-form/add-source-views-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-text\r\n{\r\n  max-width: 300px;\r\n}\r\n\r\n.delete-btn\r\n{\r\n  max-width: 60px;\r\n  max-height: 60px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/root/add-new-view/select-source-views/add-source-views-form/add-source-views-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n      <form [formGroup]=\"selectedViewsForm\" (ngSumbit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n\r\n          <div class=\"row\">\r\n            <div\r\n              class=\"col-xs-12\"\r\n              formArrayName=\"selectedViews\">\r\n\r\n              <div\r\n                class=\"row\"\r\n                *ngFor=\"let selectedView of getFormControls('selectedViews'); let i = index\"\r\n                style=\"margin-top: 10px\"\r\n                [formGroupName]=\"i\">\r\n                <div class=\"form-group\" >\r\n                  <div class=\"col-xs-8 col-sm-6 col-md-5 col-lg-3\">\r\n                    <input class=\"form-control input-text\" readonly=\"true\" type=\"text\" formControlName=\"name\">\r\n                  </div>\r\n                  <button class=\"btn btn-danger delete-btn\" type=\"button\"  (click)=\"onDeleteView(i)\">X</button>\r\n                </div>\r\n                </div>\r\n              <hr/>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/root/add-new-view/select-source-views/add-source-views-form/add-source-views-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSourceViewsFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_view_source_service__ = __webpack_require__("../../../../../src/app/services/user-view-source.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__ = __webpack_require__("../../../../rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_utils_module__ = __webpack_require__("../../../../../src/app/shared/utils.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__storage_cache_model_storage__ = __webpack_require__("../../../../../src/app/storage/cache.model.storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddSourceViewsFormComponent = (function () {
    function AddSourceViewsFormComponent(viewDataService, cacheModelStorage) {
        this.viewDataService = viewDataService;
        this.cacheModelStorage = cacheModelStorage;
        this.viewModelChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__["a" /* Subscription */]();
    }
    AddSourceViewsFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewModelChanged = this.viewDataService.viewSettingModelChanged.subscribe(function (model) {
            _this.selectedViewNames = [];
            _this.selectedViewNames = model.selectedViewNames;
            _this.initForm();
        });
        this.cacheModelStorage.retrieveUserViewsModel();
    };
    AddSourceViewsFormComponent.prototype.ngOnDestroy = function () {
        this.viewModelChanged.unsubscribe();
    };
    AddSourceViewsFormComponent.prototype.onAddSourceView = function (view) {
        var existedView = this.selectedViewNames.find(function (v) { return v === view.value; });
        if (__WEBPACK_IMPORTED_MODULE_4__shared_utils_module__["a" /* default */].isEmpty(existedView)) {
            this.addSourceView(view.value);
            this.selectedViewNames.push(view.value);
        }
        //this.viewDataService.setViewModelViews(this.selectedViewNames);
    };
    AddSourceViewsFormComponent.prototype.onDeleteView = function (number) {
        this.selectedViewsForm.get('selectedViews').removeAt(number);
        this.selectedViewNames = this.selectedViewNames.splice(number, 1);
        //this.viewDataService.setViewModelViews(this.selectedViewNames);
    };
    AddSourceViewsFormComponent.prototype.addSourceView = function (viewName) {
        var nameCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null);
        var groupCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'name': nameCtrl
        });
        nameCtrl.patchValue(viewName);
        this.selectedViewsForm.get('selectedViews').push(groupCtrl);
    };
    AddSourceViewsFormComponent.prototype.initForm = function () {
        var selectedViews = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormArray */]([]);
        this.selectedViewsForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'selectedViews': selectedViews
        });
        for (var _i = 0, _a = this.selectedViewNames; _i < _a.length; _i++) {
            var selected = _a[_i];
            console.log('Adding ', selected, ' to form: ', this);
            this.addSourceView(selected);
        }
        //ToDo: load data from cache
    };
    AddSourceViewsFormComponent.prototype.getFormControls = function (controlGroup) {
        return this.selectedViewsForm.get(controlGroup).controls;
    };
    AddSourceViewsFormComponent.prototype.onSubmit = function () { };
    AddSourceViewsFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-source-views-form',
            template: __webpack_require__("../../../../../src/app/root/add-new-view/select-source-views/add-source-views-form/add-source-views-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/root/add-new-view/select-source-views/add-source-views-form/add-source-views-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_view_source_service__["a" /* ViewDataService */],
            __WEBPACK_IMPORTED_MODULE_5__storage_cache_model_storage__["a" /* CacheModelStorage */]])
    ], AddSourceViewsFormComponent);
    return AddSourceViewsFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/root/add-new-view/select-source-views/add-view-select-source.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-main\r\n{\r\n  max-width: 1500px;\r\n}\r\n\r\n.validation-message\r\n{\r\n  color:red;\r\n  font-size: 12px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/root/add-new-view/select-source-views/add-view-select-source.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <span class=\"col-xs-12 form-group\">\r\n      <label for=\"name\">Имя представления:</label>\r\n      <input\r\n        id=\"name\"\r\n        type=\"text\"\r\n        placeholder=\"hm_\"\r\n        [(ngModel)]=\"viewModel.name\"\r\n        (ngModelChange)=\"viewSettingsModelNameChanged()\"\r\n        class=\"form-control input-main\"\r\n       required />\r\n      <span class=\"validation-message\" *ngIf=\"!viewDataService.viewNameValidationResult.result\">\r\n        {{nameValidationResult.failedReason}}</span>\r\n    </span>\r\n  <div class=\"col-xs-12\">\r\n    <div class=\"col-xs-5 col-sm-4 col-md-4 col-lg-3\">\r\n      <h4>Все представления</h4>\r\n      <app-source-views-selector (selectedChanged)=\"onSelectedViewChanged($event)\"></app-source-views-selector>\r\n    </div>\r\n    <div class=\"col-xs-7 col-sm-5 col-md-4 col-lg-3\">\r\n      <h4>Выбранные представления</h4>\r\n      <app-add-source-views-form #fieldsFormComponent></app-add-source-views-form>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-9 col-sm-7 col-md-5 col-lg-2\"></div>\r\n  <div>\r\n  <button type=\"button\" class=\"btn btn-link\" (click)=\"onBtnNext()\">Перейти дальше</button>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/root/add-new-view/select-source-views/add-view-select-source.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddViewSelectSourceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_source_views_form_add_source_views_form_component__ = __webpack_require__("../../../../../src/app/root/add-new-view/select-source-views/add-source-views-form/add-source-views-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_view_source_service__ = __webpack_require__("../../../../../src/app/services/user-view-source.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_data_storage__ = __webpack_require__("../../../../../src/app/storage/data-storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__ = __webpack_require__("../../../../rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__storage_cache_model_storage__ = __webpack_require__("../../../../../src/app/storage/cache.model.storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddViewSelectSourceComponent = (function () {
    function AddViewSelectSourceComponent(viewDataService, dataStorage, cacheStorage, router) {
        this.viewDataService = viewDataService;
        this.dataStorage = dataStorage;
        this.cacheStorage = cacheStorage;
        this.router = router;
        this.selectedChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        this.viewModelDataChanged = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["a" /* Subscription */]();
        this.viewModelDataValidationChanged = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["a" /* Subscription */]();
    }
    AddViewSelectSourceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewModelDataChanged = this.viewDataService.viewSettingModelChanged.subscribe(function (model) {
            _this.viewModel = model;
        });
        this.viewModelDataValidationChanged = this.viewDataService.viewSettingModelValidationChanged.subscribe(function (result) {
            _this.nameValidationResult = result;
        });
        this.cacheStorage.retrieveUserViewsModel();
        this.nameValidationResult = this.viewDataService.getViewNameValidationResult();
    };
    //To raise event from child component
    AddViewSelectSourceComponent.prototype.onSelectedViewChanged = function (viewData) {
        this.fieldsFormComponent.onAddSourceView(viewData);
    };
    AddViewSelectSourceComponent.prototype.viewSettingsModelNameChanged = function () {
        //ToDo: refactor later
        this.dataStorage.validateModelName(this.viewModel.name);
    };
    AddViewSelectSourceComponent.prototype.onBtnNext = function () {
        this.cacheStorage.storeUserViewsModel(this.viewModel);
        this.router.navigate(['addview/join']);
    };
    AddViewSelectSourceComponent.prototype.ngOnDestroy = function () {
        this.viewModelDataChanged.unsubscribe();
        this.viewModelDataValidationChanged.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AddViewSelectSourceComponent.prototype, "selectedChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fieldsFormComponent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__add_source_views_form_add_source_views_form_component__["a" /* AddSourceViewsFormComponent */])
    ], AddViewSelectSourceComponent.prototype, "fieldsFormComponent", void 0);
    AddViewSelectSourceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-view-select-source',
            template: __webpack_require__("../../../../../src/app/root/add-new-view/select-source-views/add-view-select-source.component.html"),
            styles: [__webpack_require__("../../../../../src/app/root/add-new-view/select-source-views/add-view-select-source.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_view_source_service__["a" /* ViewDataService */],
            __WEBPACK_IMPORTED_MODULE_4__storage_data_storage__["a" /* DummyDataStorage */],
            __WEBPACK_IMPORTED_MODULE_6__storage_cache_model_storage__["a" /* CacheModelStorage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AddViewSelectSourceComponent);
    return AddViewSelectSourceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/root/add-new-view/select-source-views/source-views-selector/source-views-selector.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/root/add-new-view/select-source-views/source-views-selector/source-views-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<tree\r\n  #tree\r\n  [tree]=\"nodes\" (nodeSelected)=\"emitSelectedEvent($event)\">\r\n</tree>\r\n<button class=\"btn btn-primary\" (click)=\"refresh()\">Обновить</button>"

/***/ }),

/***/ "../../../../../src/app/root/add-new-view/select-source-views/source-views-selector/source-views-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SourceViewsSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_source_view_model__ = __webpack_require__("../../../../../src/app/models/source-view.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_tree__ = __webpack_require__("../../../../ng2-tree/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_enums_model__ = __webpack_require__("../../../../../src/app/models/enums.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_view_source_service__ = __webpack_require__("../../../../../src/app/services/view-source.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__storage_data_storage__ = __webpack_require__("../../../../../src/app/storage/data-storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SourceViewsSelectorComponent = (function () {
    function SourceViewsSelectorComponent(service, dataStorage, settingService) {
        this.service = service;
        this.dataStorage = dataStorage;
        this.settingService = settingService;
        this.selectedChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](true);
        this.options = {
            useCheckbox: true,
            scrollOnSelect: false,
        };
    }
    SourceViewsSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewsDataChanged = this.service.sourceViewsChanged.subscribe(function (data) {
            _this.getTree(data);
        });
        var sourceViews = this.service.getSourceViewsData();
        this.getTree(sourceViews);
    };
    SourceViewsSelectorComponent.prototype.getTree = function (dataArray) {
        var databaseName = this.settingService.getExistingSettings().databaseName;
        var top = new __WEBPACK_IMPORTED_MODULE_1__models_source_view_model__["a" /* SourceView */](databaseName, __WEBPACK_IMPORTED_MODULE_3__models_enums_model__["b" /* ViewType */].category, 1, true, null);
        var rtTop = new __WEBPACK_IMPORTED_MODULE_1__models_source_view_model__["a" /* SourceView */]('rt', __WEBPACK_IMPORTED_MODULE_3__models_enums_model__["b" /* ViewType */].category, 11, true, top.id);
        var rhTop = new __WEBPACK_IMPORTED_MODULE_1__models_source_view_model__["a" /* SourceView */]('rh', __WEBPACK_IMPORTED_MODULE_3__models_enums_model__["b" /* ViewType */].category, 12, true, top.id);
        var rsysTop = new __WEBPACK_IMPORTED_MODULE_1__models_source_view_model__["a" /* SourceView */]('rsys', __WEBPACK_IMPORTED_MODULE_3__models_enums_model__["b" /* ViewType */].category, 13, true, top.id);
        var id = 100;
        for (var _i = 0, dataArray_1 = dataArray; _i < dataArray_1.length; _i++) {
            var data = dataArray_1[_i];
            var item = new __WEBPACK_IMPORTED_MODULE_1__models_source_view_model__["a" /* SourceView */](data.name, __WEBPACK_IMPORTED_MODULE_3__models_enums_model__["b" /* ViewType */].view, id, false, top.id);
            if (data.name.substring(0, 2) === 'rh') {
                item.parentId = 12;
                rhTop.children.push(item);
            }
            else if (data.name.substring(0, 2) === 'rt') {
                item.parentId = 11;
                rtTop.children.push(item);
            }
            else if (data.name.substring(0, 4) === 'rsys') {
                item.parentId = 13;
                rsysTop.children.push(item);
            }
        }
        top.children.push(rtTop, rhTop, rsysTop);
        this.nodes = top;
    };
    SourceViewsSelectorComponent.prototype.emitSelectedEvent = function (e) {
        var nodeData = e.node.node;
        //Root or category item selected
        if (nodeData.category === __WEBPACK_IMPORTED_MODULE_3__models_enums_model__["b" /* ViewType */].category) {
            return;
        }
        else if (nodeData.category === __WEBPACK_IMPORTED_MODULE_3__models_enums_model__["b" /* ViewType */].view) {
            this.selectedChanged.emit(nodeData);
            console.log('Selection changed ', nodeData);
        }
        else if (nodeData.category === __WEBPACK_IMPORTED_MODULE_3__models_enums_model__["b" /* ViewType */].field) {
            //ToDo: implement later
        }
    };
    SourceViewsSelectorComponent.prototype.refresh = function () {
        this.dataStorage.getSourceViews();
    };
    SourceViewsSelectorComponent.prototype.ngOnDestroy = function () {
        this.viewsDataChanged.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SourceViewsSelectorComponent.prototype, "selectedChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tree'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ng2_tree__["TreeComponent"])
    ], SourceViewsSelectorComponent.prototype, "tree", void 0);
    SourceViewsSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-source-views-selector',
            template: __webpack_require__("../../../../../src/app/root/add-new-view/select-source-views/source-views-selector/source-views-selector.component.html"),
            styles: [__webpack_require__("../../../../../src/app/root/add-new-view/select-source-views/source-views-selector/source-views-selector.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_view_source_service__["a" /* ViewSourceService */],
            __WEBPACK_IMPORTED_MODULE_5__storage_data_storage__["a" /* DummyDataStorage */],
            __WEBPACK_IMPORTED_MODULE_6__services_settings_service__["a" /* SettingsService */]])
    ], SourceViewsSelectorComponent);
    return SourceViewsSelectorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/root/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/root/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"col-xs-12 col-sm-10 col-md-7\">\r\n  <nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n\r\n        <ul class=\"navbar-nav nav\">\r\n          <li>\r\n            <a routerLink=\"/settings\" routerLinkActive=\"active\" >\r\n              <button class=\"btn btn-link\" >Выбор настроек</button>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a routerLink=\"/addview/source\" routerLinkActive=\"active\" >\r\n              <button class=\"btn btn-link\"\r\n                    [disabled]=\"!(settings.isInitialized)\">Создать представление\r\n              </button>\r\n            </a>\r\n          </li>\r\n          <li >\r\n            <a  href=\"#\">\r\n              <button  class=\"btn btn-link\"\r\n                     [disabled]=\"!(settings.isInitialized)\">Редактировать представление\r\n              </button>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/root/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_cache_settings_storage__ = __webpack_require__("../../../../../src/app/storage/cache.settings.storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(settingsService, settingsStorage) {
        this.settingsService = settingsService;
        this.settingsStorage = settingsStorage;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsChanged = this.settingsService.settingsChanged.subscribe(function (value) {
            _this.settings = value;
        });
        this.settingsStorage.retrieveSettings();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.settingsChanged.unsubscribe();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/root/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/root/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_2__storage_cache_settings_storage__["a" /* CacheSettingsStorage */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/root/root-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings_start_settings_start_component__ = __webpack_require__("../../../../../src/app/root/settings/settings-start/settings-start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings_component__ = __webpack_require__("../../../../../src/app/root/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_new_view_select_source_views_add_view_select_source_component__ = __webpack_require__("../../../../../src/app/root/add-new-view/select-source-views/add-view-select-source.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_new_view_add_new_view_common_add_new_view_common_component__ = __webpack_require__("../../../../../src/app/root/add-new-view/add-new-view-common/add-new-view-common.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_new_view_add_join_operations_add_join_operations_add_join_operations_component__ = __webpack_require__("../../../../../src/app/root/add-new-view/add-join-operations/add-join-operations/add-join-operations.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__settings_settings_start_settings_start_component__["a" /* SettingsStartComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_3__settings_settings_component__["a" /* SettingsComponent */] },
    { path: 'addview', component: __WEBPACK_IMPORTED_MODULE_5__add_new_view_add_new_view_common_add_new_view_common_component__["a" /* AddNewViewCommonComponent */], children: [
            { path: 'source', component: __WEBPACK_IMPORTED_MODULE_4__add_new_view_select_source_views_add_view_select_source_component__["a" /* AddViewSelectSourceComponent */] },
            { path: 'join', component: __WEBPACK_IMPORTED_MODULE_6__add_new_view_add_join_operations_add_join_operations_add_join_operations_component__["a" /* AddJoinOperationsComponent */] }
        ] },
];
var RootRoutingModule = (function () {
    function RootRoutingModule() {
    }
    RootRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(appRoutes)
            ],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], RootRoutingModule);
    return RootRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/root/root.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_component__ = __webpack_require__("../../../../../src/app/root/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_data_storage__ = __webpack_require__("../../../../../src/app/storage/data-storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings_component__ = __webpack_require__("../../../../../src/app/root/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings_start_settings_start_component__ = __webpack_require__("../../../../../src/app/root/settings/settings-start/settings-start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__root_routing_module__ = __webpack_require__("../../../../../src/app/root/root-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_new_view_select_source_views_add_view_select_source_component__ = __webpack_require__("../../../../../src/app/root/add-new-view/select-source-views/add-view-select-source.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_new_view_select_source_views_source_views_selector_source_views_selector_component__ = __webpack_require__("../../../../../src/app/root/add-new-view/select-source-views/source-views-selector/source-views-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_view_source_service__ = __webpack_require__("../../../../../src/app/services/view-source.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_tree__ = __webpack_require__("../../../../ng2-tree/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__add_new_view_select_source_views_add_source_views_form_add_source_views_form_component__ = __webpack_require__("../../../../../src/app/root/add-new-view/select-source-views/add-source-views-form/add-source-views-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_view_source_service__ = __webpack_require__("../../../../../src/app/services/user-view-source.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__add_new_view_add_new_view_common_add_new_view_common_component__ = __webpack_require__("../../../../../src/app/root/add-new-view/add-new-view-common/add-new-view-common.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__add_new_view_add_join_operations_selected_views_tree_selected_views_tree_component__ = __webpack_require__("../../../../../src/app/root/add-new-view/add-join-operations/selected-views-tree/selected-views-tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__add_new_view_add_join_operations_add_join_operations_add_join_operations_component__ = __webpack_require__("../../../../../src/app/root/add-new-view/add-join-operations/add-join-operations/add-join-operations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__add_new_view_add_join_operations_set_join_settings_form_set_join_settings_form_component__ = __webpack_require__("../../../../../src/app/root/add-new-view/add-join-operations/set-join-settings-form/set-join-settings-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__storage_cache_settings_storage__ = __webpack_require__("../../../../../src/app/storage/cache.settings.storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__storage_settings_storage__ = __webpack_require__("../../../../../src/app/storage/settings.storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__storage_cache_model_storage__ = __webpack_require__("../../../../../src/app/storage/cache.model.storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var RootModule = (function () {
    function RootModule() {
    }
    RootModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_7__root_routing_module__["a" /* RootRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12_ng2_tree__["TreeModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["f" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__settings_settings_start_settings_start_component__["a" /* SettingsStartComponent */],
                __WEBPACK_IMPORTED_MODULE_9__add_new_view_select_source_views_add_view_select_source_component__["a" /* AddViewSelectSourceComponent */],
                __WEBPACK_IMPORTED_MODULE_10__add_new_view_select_source_views_source_views_selector_source_views_selector_component__["a" /* SourceViewsSelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_13__add_new_view_select_source_views_add_source_views_form_add_source_views_form_component__["a" /* AddSourceViewsFormComponent */],
                __WEBPACK_IMPORTED_MODULE_15__add_new_view_add_new_view_common_add_new_view_common_component__["a" /* AddNewViewCommonComponent */],
                __WEBPACK_IMPORTED_MODULE_16__add_new_view_add_join_operations_selected_views_tree_selected_views_tree_component__["a" /* SelectedViewsTreeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__add_new_view_add_join_operations_add_join_operations_add_join_operations_component__["a" /* AddJoinOperationsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__add_new_view_add_join_operations_set_join_settings_form_set_join_settings_form_component__["a" /* SetJoinSettingsFormComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__header_header_component__["a" /* HeaderComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__storage_data_storage__["a" /* DummyDataStorage */],
                __WEBPACK_IMPORTED_MODULE_20__storage_settings_storage__["a" /* DummySettingsStorage */],
                __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */],
                __WEBPACK_IMPORTED_MODULE_11__services_view_source_service__["a" /* ViewSourceService */],
                __WEBPACK_IMPORTED_MODULE_14__services_user_view_source_service__["a" /* ViewDataService */],
                __WEBPACK_IMPORTED_MODULE_19__storage_cache_settings_storage__["a" /* CacheSettingsStorage */],
                __WEBPACK_IMPORTED_MODULE_21__storage_cache_model_storage__["a" /* CacheModelStorage */]
            ]
        })
    ], RootModule);
    return RootModule;
}());



/***/ }),

/***/ "../../../../../src/app/root/settings/settings-start/settings-start.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/root/settings/settings-start/settings-start.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!settings.isInitialized\">\r\n<h4>\r\n  Пожалуйста, введите настройки сервера базы данных!\r\n</h4>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/root/settings/settings-start/settings-start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsStartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_cache_settings_storage__ = __webpack_require__("../../../../../src/app/storage/cache.settings.storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsStartComponent = (function () {
    function SettingsStartComponent(settingsService, settingsStorage) {
        this.settingsService = settingsService;
        this.settingsStorage = settingsStorage;
    }
    SettingsStartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsChanged = this.settingsService.settingsChanged.subscribe(function (value) {
            _this.settings = value;
        });
        this.settingsStorage.retrieveSettings();
    };
    SettingsStartComponent.prototype.ngOnDestroy = function () {
        this.settingsChanged.unsubscribe();
    };
    SettingsStartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings-start',
            template: __webpack_require__("../../../../../src/app/root/settings/settings-start/settings-start.component.html"),
            styles: [__webpack_require__("../../../../../src/app/root/settings/settings-start/settings-start.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_2__storage_cache_settings_storage__["a" /* CacheSettingsStorage */]])
    ], SettingsStartComponent);
    return SettingsStartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/root/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/root/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-5 form-group\">\r\n          <label for=\"serverAddress\">Адрес сервера</label>\r\n          <input\r\n            type=\"text\"\r\n            id=\"serverAddress\"\r\n            class=\"form-control\"\r\n            placeholder=\"10.0.0.5\\MSSQL2012,49270\"\r\n            required\r\n            name=\"serverName\"\r\n            [(ngModel)]=\"settings.serverName\"\r\n            (change)=\"userValueChanged()\"\r\n          />\r\n          <label for=\"userName\">Имя пользователя</label>\r\n          <input\r\n            type=\"text\"\r\n            id=\"userName\"\r\n            class=\"form-control\"\r\n            required\r\n            name=\"userName\"\r\n            [(ngModel)]=\"settings.userName\"\r\n            (change)=\"userValueChanged()\"\r\n          />\r\n          <label for=\"password\">Пароль</label>\r\n          <input\r\n            type=\"password\"\r\n            id=\"password\"\r\n            class=\"form-control\"\r\n            required\r\n            name=\"password\"\r\n            [(ngModel)]=\"settings.password\"\r\n            (change)=\"userValueChanged()\"\r\n          />\r\n          <div *ngIf=\"!isCheckConnectionValid()\" >\r\n          <span style=\"color:red\"> {{connection.failedMessage}} </span>\r\n           </div>\r\n          <div *ngIf=\"isCheckConnectionValid()\">\r\n            <label for=\"databaseName\">Имя базы данных</label>\r\n            <select id=\"databaseName\" name=\"databaseName\"\r\n                    [(ngModel)] = \"settings.databaseName\" (change)=\"DatabaseSelectionChanged()\" class=\"form-control\">\r\n              <option *ngFor=\"let database of connection.databaseNames\" [value]=\"database\">\r\n                {{database}}\r\n              </option>\r\n            </select>\r\n            </div>\r\n        </div>\r\n      </div>\r\n      <button\r\n        class=\"btn btn-success\"\r\n        type=\"submit\" [disabled]=\"!isSaveValid\">Сохранить настройки</button>\r\n      <button class=\"btn btn-primary\" type=\"button\" [disabled]=\"!isConnectionTestBtnValid\" (click)=\"checkConnection()\">Проверить подключение</button>\r\n      <button class=\"btn btn-danger\" type=\"button\" (click)=\"onClear()\" >Очистить настройки</button>\r\n      <button class=\"btn btn-default\" type=\"button\" (click)=\"onExit()\" >Выйти</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/root/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_enums_model__ = __webpack_require__("../../../../../src/app/models/enums.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__storage_settings_storage__ = __webpack_require__("../../../../../src/app/storage/settings.storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__storage_cache_settings_storage__ = __webpack_require__("../../../../../src/app/storage/cache.settings.storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_utils_module__ = __webpack_require__("../../../../../src/app/shared/utils.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SettingsComponent = (function () {
    function SettingsComponent(settingsService, settingsCacheStorage, settingsHttpStorage, router) {
        this.settingsService = settingsService;
        this.settingsCacheStorage = settingsCacheStorage;
        this.settingsHttpStorage = settingsHttpStorage;
        this.router = router;
        this.isSaveValid = false;
        this.isConnectionTestBtnValid = false;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsChanged = this.settingsService.settingsChanged.subscribe(function (value) {
            _this.settings = value;
            if (!_this.settings.isInitialized) {
                _this.settings.serverName = '10.0.0.5MSSQL2012,49270';
            }
        });
        this.connectionChanged = this.settingsService.connectionChanged.subscribe(function (value) {
            _this.connection = value;
        });
        this.settingsCacheStorage.retrieveSettings();
        this.settingsHttpStorage.checkConnection();
        this.isConnectionTestBtnValid = this.settings.isInitialized;
    };
    SettingsComponent.prototype.userValueChanged = function () {
        this.isSaveValid = false;
        this.connection.result = __WEBPACK_IMPORTED_MODULE_3__models_enums_model__["a" /* CheckConnectionResult */].none;
        this.isConnectionTestBtnValid =
            !__WEBPACK_IMPORTED_MODULE_7__shared_utils_module__["a" /* default */].isEmpty(this.settings.serverName) &&
                !__WEBPACK_IMPORTED_MODULE_7__shared_utils_module__["a" /* default */].isEmpty(this.settings.userName) &&
                !__WEBPACK_IMPORTED_MODULE_7__shared_utils_module__["a" /* default */].isEmpty(this.settings.password);
    };
    SettingsComponent.prototype.DatabaseSelectionChanged = function () {
        this.isSaveValid =
            this.connection.result === __WEBPACK_IMPORTED_MODULE_3__models_enums_model__["a" /* CheckConnectionResult */].connected &&
                !__WEBPACK_IMPORTED_MODULE_7__shared_utils_module__["a" /* default */].isEmpty(this.settings.databaseName);
    };
    SettingsComponent.prototype.isCheckConnectionValid = function () {
        return this.connection.result === __WEBPACK_IMPORTED_MODULE_3__models_enums_model__["a" /* CheckConnectionResult */].connected;
    };
    SettingsComponent.prototype.checkConnection = function () {
        this.settingsHttpStorage.checkConnection();
    };
    SettingsComponent.prototype.onSubmit = function (form) {
        this.settings.isInitialized = true;
        this.settingsCacheStorage.storeSettings(this.settings);
        this.router.navigate(['']);
    };
    SettingsComponent.prototype.onClear = function () {
        this.settings.serverName = '';
        this.settings.password = '';
        this.settings.userName = '';
        this.settings.databaseName = '';
    };
    SettingsComponent.prototype.onExit = function () {
        this.router.navigate(['']);
    };
    SettingsComponent.prototype.ngOnDestroy = function () {
        this.settingsChanged.unsubscribe();
        this.connectionChanged.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgForm */])
    ], SettingsComponent.prototype, "settingsForm", void 0);
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/root/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/root/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_6__storage_cache_settings_storage__["a" /* CacheSettingsStorage */],
            __WEBPACK_IMPORTED_MODULE_5__storage_settings_storage__["a" /* DummySettingsStorage */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var appRoutes = [];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* PreloadAllModules */] })
            ],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SettingsService = (function () {
    function SettingsService() {
        this.settingsChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.connectionChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    SettingsService.prototype.getExistingSettings = function () {
        return this.settings;
    };
    SettingsService.prototype.getExistingConnection = function () {
        return this.connection;
    };
    SettingsService.prototype.setCheckConnection = function (connection) {
        this.connection = connection;
        this.connectionChanged.next(this.connection);
    };
    SettingsService.prototype.setSettings = function (settings) {
        this.settings = settings;
        this.settingsChanged.next(this.settings);
    };
    SettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user-view-source.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_source_service__ = __webpack_require__("../../../../../src/app/services/view-source.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_selected_field_model__ = __webpack_require__("../../../../../src/app/models/user-selected-field.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_validateviewname_model__ = __webpack_require__("../../../../../src/app/models/validateviewname.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewDataService = (function () {
    function ViewDataService(sourceViewService) {
        this.sourceViewService = sourceViewService;
        this.viewSettingModelChanged = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.viewSettingModelValidationChanged = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.viewNameValidationResult = new __WEBPACK_IMPORTED_MODULE_3__models_validateviewname_model__["a" /* ViewNameValidationResult */](false, 'Результат проверки еще не иницилизирован');
    }
    ViewDataService.prototype.getViewDataSettings = function () {
        return this.viewSettingsModel;
    };
    ViewDataService.prototype.fillViewDataWithFields = function () {
        var sourceViewsData = this.sourceViewService.getSourceViewsData();
        var _loop_1 = function (selectedView) {
            var sourceView = sourceViewsData.find(function (v) { return v.name === selectedView.name; });
            selectedView.fields = [];
            for (var _i = 0, _a = sourceView.fields; _i < _a.length; _i++) {
                var sourceField = _a[_i];
                var userField = new __WEBPACK_IMPORTED_MODULE_2__models_user_selected_field_model__["a" /* UserSelectedField */](sourceField, selectedView.name);
                selectedView.fields.push(userField);
            }
        };
        for (var _i = 0, _a = this.viewSettingsModel.selectedViews; _i < _a.length; _i++) {
            var selectedView = _a[_i];
            _loop_1(selectedView);
        }
    };
    ViewDataService.prototype.getViewNameValidationResult = function () {
        return this.viewNameValidationResult;
    };
    ViewDataService.prototype.setViewModelNameValidationResult = function (result) {
        this.viewNameValidationResult = result;
        if (!result.result) {
            this.viewSettingsModel.isValid = false;
        }
        this.viewSettingModelValidationChanged.next(this.viewNameValidationResult);
    };
    ViewDataService.prototype.setViewModel = function (model) {
        this.viewSettingsModel = model;
        this.viewSettingModelChanged.next(this.viewSettingsModel);
    };
    ViewDataService.prototype.setViewModelViews = function (selectedViewNames) {
        //ToDo: implement logic to store existed settings and create new useritems
        this.viewSettingsModel.selectedViewNames = selectedViewNames;
        this.viewSettingModelChanged.next(this.viewSettingsModel);
    };
    ViewDataService.prototype.clear = function () {
        this.viewSettingsModel.name = '';
        this.viewSettingsModel.selectedViews = [];
        this.viewSettingModelChanged.next(this.viewSettingsModel);
    };
    ViewDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__view_source_service__["a" /* ViewSourceService */]])
    ], ViewDataService);
    return ViewDataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/view-source.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewSourceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_sourceviewdata_model__ = __webpack_require__("../../../../../src/app/models/sourceviewdata.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewSourceService = (function () {
    function ViewSourceService(settingsService) {
        this.settingsService = settingsService;
        this.sourceViewsChanged = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.sourceViewsData = [
            new __WEBPACK_IMPORTED_MODULE_3__models_sourceviewdata_model__["a" /* SourceViewData */]('rt_patients', ['id', 'create_date']),
            new __WEBPACK_IMPORTED_MODULE_3__models_sourceviewdata_model__["a" /* SourceViewData */]('rt_registers', ['id', 'create_date']),
            new __WEBPACK_IMPORTED_MODULE_3__models_sourceviewdata_model__["a" /* SourceViewData */]('rt_cards', ['id', 'create_date']),
            new __WEBPACK_IMPORTED_MODULE_3__models_sourceviewdata_model__["a" /* SourceViewData */]('rsys_employees', ['id', 'create_date']),
            new __WEBPACK_IMPORTED_MODULE_3__models_sourceviewdata_model__["a" /* SourceViewData */]('rsys_settings', ['id', 'create_date']),
            new __WEBPACK_IMPORTED_MODULE_3__models_sourceviewdata_model__["a" /* SourceViewData */]('rh_e_diagnosis', ['id', 'create_date']),
            new __WEBPACK_IMPORTED_MODULE_3__models_sourceviewdata_model__["a" /* SourceViewData */]('rh_card_types', ['id', 'create_date'])
        ];
    }
    ViewSourceService.prototype.getSourceViewsData = function () {
        return this.sourceViewsData.slice();
    };
    ViewSourceService.prototype.setSourceViews = function (sourceViewData) {
        this.sourceViewsData = sourceViewData;
        this.sourceViewsChanged.next(this.sourceViewsData.slice());
    };
    ViewSourceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__settings_service__["a" /* SettingsService */]])
    ], ViewSourceService);
    return ViewSourceService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/utils.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Utils = (function () {
    function Utils() {
    }
    Utils.isEmpty = function (value) {
        return (value == null || value.length === 0);
    };
    return Utils;
}());
/* harmony default export */ __webpack_exports__["a"] = (Utils);


/***/ }),

/***/ "../../../../../src/app/storage/cache.model.storage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheModelStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_utils_module__ = __webpack_require__("../../../../../src/app/shared/utils.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_view_model__ = __webpack_require__("../../../../../src/app/models/user-view.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_view_source_service__ = __webpack_require__("../../../../../src/app/services/user-view-source.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CacheModelStorage = (function () {
    function CacheModelStorage(service) {
        this.service = service;
    }
    CacheModelStorage.prototype.storeUserViewsModel = function (model) {
        sessionStorage.setItem('userViewModel', JSON.stringify(model));
        this.service.setViewModel(model);
    };
    CacheModelStorage.prototype.retrieveUserViewsModel = function () {
        var modelText = sessionStorage.getItem('userViewModel');
        var parsed;
        if (__WEBPACK_IMPORTED_MODULE_1__shared_utils_module__["a" /* default */].isEmpty(modelText)) {
            parsed = new __WEBPACK_IMPORTED_MODULE_2__models_user_view_model__["a" /* ViewDataModel */]();
        }
        else {
            parsed = JSON.parse(modelText);
        }
        this.service.setViewModel(parsed);
    };
    CacheModelStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_view_source_service__["a" /* ViewDataService */]])
    ], CacheModelStorage);
    return CacheModelStorage;
}());



/***/ }),

/***/ "../../../../../src/app/storage/cache.settings.storage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheSettingsStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_settings_model__ = __webpack_require__("../../../../../src/app/models/settings.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils_module__ = __webpack_require__("../../../../../src/app/shared/utils.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CacheSettingsStorage = (function () {
    function CacheSettingsStorage(settingsService) {
        this.settingsService = settingsService;
    }
    CacheSettingsStorage.prototype.storeSettings = function (settings) {
        sessionStorage.setItem('settings', JSON.stringify(settings));
        this.settingsService.setSettings(settings);
    };
    CacheSettingsStorage.prototype.retrieveSettings = function () {
        var settingsText = sessionStorage.getItem('settings');
        var settings = new __WEBPACK_IMPORTED_MODULE_1__models_settings_model__["a" /* Settings */]('', '', '', '', false);
        if (!__WEBPACK_IMPORTED_MODULE_3__shared_utils_module__["a" /* default */].isEmpty(settingsText)) {
            settings = JSON.parse(settingsText);
        }
        this.settingsService.setSettings(settings);
    };
    CacheSettingsStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */]])
    ], CacheSettingsStorage);
    return CacheSettingsStorage;
}());



/***/ }),

/***/ "../../../../../src/app/storage/data-storage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DataStorage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DummyDataStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_view_source_service__ = __webpack_require__("../../../../../src/app/services/view-source.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_view_source_service__ = __webpack_require__("../../../../../src/app/services/user-view-source.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_utils_module__ = __webpack_require__("../../../../../src/app/shared/utils.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataStorage = (function () {
    function DataStorage(httpClient, viewSourceService, settingsService, userViewSettingsService) {
        this.httpClient = httpClient;
        this.viewSourceService = viewSourceService;
        this.settingsService = settingsService;
        this.userViewSettingsService = userViewSettingsService;
        this.header = new Headers({ 'Content-Type': 'application/json' });
    }
    DataStorage.prototype.getSourceViews = function () {
        var _this = this;
        this.httpClient.get('type url here', {
            observe: 'body'
        }).
            map(function (views) {
            console.log(views);
            return views;
        }).
            subscribe(function (views) {
            _this.viewSourceService.setSourceViews(views);
        });
    };
    DataStorage.prototype.validateViewName = function (viewName) {
        var _this = this;
        //ToDO: to backend?
        var result;
        if (__WEBPACK_IMPORTED_MODULE_6__shared_utils_module__["a" /* default */].isEmpty(viewName)) {
            result = { 'result': false, 'failedReason': 'Имя модели не может быть пустым!' };
            this.userViewSettingsService.setViewModelNameValidationResult(result);
        }
        else if (viewName.length < 5) {
            result = { 'result': false, 'failedReason': 'Имя модели не может быть короче чем 5 символов!' };
            this.userViewSettingsService.setViewModelNameValidationResult(result);
        }
        else if (viewName.substr(0, 3) != 'hm_') {
            result = { 'result': false, 'failedReason': 'Имя модели должно начинаться с hm_!' };
            this.userViewSettingsService.setViewModelNameValidationResult(result);
        }
        else {
            this.httpClient.get('type url here', {
                observe: 'body'
            }).map(function (result) {
                return { 'result': result.value, 'failedReason': result.message };
            }).subscribe(function (result) {
                _this.userViewSettingsService.setViewModelNameValidationResult(result);
            });
        }
    };
    DataStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__services_view_source_service__["a" /* ViewSourceService */],
            __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_view_source_service__["a" /* ViewDataService */]])
    ], DataStorage);
    return DataStorage;
}());

var DummyDataStorage = (function () {
    function DummyDataStorage(viewSourceService, settingsService, userViewSettingsService) {
        this.viewSourceService = viewSourceService;
        this.settingsService = settingsService;
        this.userViewSettingsService = userViewSettingsService;
    }
    DummyDataStorage.prototype.getSourceViews = function () {
    };
    DummyDataStorage.prototype.validateModelName = function (modelName) {
        var result;
        if (__WEBPACK_IMPORTED_MODULE_6__shared_utils_module__["a" /* default */].isEmpty(modelName)) {
            result = { 'result': false, 'failedReason': 'Имя модели не может быть пустым!' };
        }
        else if (modelName.length < 5) {
            result = { 'result': false, 'failedReason': 'Имя модели не может быть короче чем 5 символов!' };
        }
        else if (modelName.substr(0, 3) != 'hm_') {
            result = { 'result': false, 'failedReason': 'Имя модели должно начинаться с hm_!' };
        }
        else {
            result = { 'result': true, 'failedReason': '' };
        }
        this.userViewSettingsService.setViewModelNameValidationResult(result);
    };
    DummyDataStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_view_source_service__["a" /* ViewSourceService */],
            __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_view_source_service__["a" /* ViewDataService */]])
    ], DummyDataStorage);
    return DummyDataStorage;
}());



/***/ }),

/***/ "../../../../../src/app/storage/settings.storage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SettingsStorage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DummySettingsStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_enums_model__ = __webpack_require__("../../../../../src/app/models/enums.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_checkconnection_model__ = __webpack_require__("../../../../../src/app/models/checkconnection.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingsStorage = (function () {
    function SettingsStorage(httpClient, settingsService) {
        this.httpClient = httpClient;
        this.settingsService = settingsService;
    }
    SettingsStorage.prototype.checkConnection = function () {
        var _this = this;
        this.httpClient.get('type url here', {
            observe: 'body'
        }).
            map(function (result) {
            console.log(result);
            return new __WEBPACK_IMPORTED_MODULE_5__models_checkconnection_model__["a" /* CheckConnection */](result.state, result.databases, result.failMessage);
        }).
            subscribe(function (connection) {
            _this.settingsService.setCheckConnection(connection);
        });
    };
    SettingsStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */]])
    ], SettingsStorage);
    return SettingsStorage;
}());

var DummySettingsStorage = (function () {
    function DummySettingsStorage(settingsService) {
        this.settingsService = settingsService;
    }
    DummySettingsStorage.prototype.checkConnection = function () {
        this.settingsService.setCheckConnection(new __WEBPACK_IMPORTED_MODULE_5__models_checkconnection_model__["a" /* CheckConnection */](__WEBPACK_IMPORTED_MODULE_3__models_enums_model__["a" /* CheckConnectionResult */].connected, ['database1', 'database2', 'database3']));
    };
    DummySettingsStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */]])
    ], DummySettingsStorage);
    return DummySettingsStorage;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map