(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  font-size: 40px;\n  font-family: 'Poiret One', cursive;\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 50px;\n  color: rgb(102,51,153);\n}\n\nh3{\n  margin-top: 100px;\n  font-family: 'Indie Flower', cursive;\n\n}\n\na:hover {\n  cursor:pointer;\n}\n\na.nav-item-link, a{\n  color: white;\n}\n\n.list-group-item{\n  border-radius: 20px;\n  margin : 5px;\n\n}\n\n.list-group-item:hover{\n  cursor:pointer;\n\n}\n\n.fas\n{\n  margin-left: 5px;\n}\n\n.btn{\n  width: 100%;\n  border-radius: 15px;\n}\n\n.card{\n  border-radius: 20px;\n}\n"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-expand-lg bg-dark\">\n  <a class=\"navbar-brand text-light\" href=\"home\">\n    Whiteboard <i class=\"fas fa-home\"></i>\n  </a>\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"btn btn-link nav-link nav-item-link\" routerLink=\"/profile\">\n        Profile<i class=\"fas fa-user\"></i></a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"btn btn-link nav-link nav-item-link text-light\" (click)=\"logout()\">Logout<i\n        class=\"fas fa-sign-out-alt\"></i></a>\n    </li>\n  </ul>\n</header>\n<h2>Admin</h2>\n<div class=\"row\">\n  <div class=\"col-2\">\n    <ul class=\"list-group\">\n      <li *ngFor=\"let course of allCourses\"\n          [ngClass]=\"{'active':course.id == courseId}\"\n          (click)=\"loadSections(course.id)\"\n          class=\"active list-group-item\">\n        {{course.title}}\n      </li>\n    </ul>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\" *ngIf=\"courseId < 0\">\n        <h3>Select a course from the left to create/update sections</h3>\n      </div>\n      <div class=\"col-md-6\" *ngIf=\"courseId >= 0\">\n        <div class=\"card bg-light mb-3\">\n          <div class=\"card-header\"><h4 class=\"p-1\">{{selectedCourse.title}}</h4></div>\n          <div class=\"card-title my-auto mx-3\">\n            <h5 class=\"p-2\">Sections: ({{sections.length}})</h5>\n          </div>\n          <div class=\"card-body\">\n            <ul class=\"list-group\"\n                *ngFor=\"let section of sections\">\n              <li class=\"list-group-item\">\n                <a class=\"text-dark\" (click)=\"selectSection(section)\">\n                  {{section.name}}\n                </a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"card-footer\">\n            <button class=\"btn btn-warning\"\n                    (click)=\"createSection()\">\n              Add Section\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"container\">\n          <div class=\"card\">\n            <div class=\"card-header\"><h5 class=\"p-2 text-center\">{{sectionName}}</h5></div>\n            <div class=\"card-body\">\n              <div class=\"form-group\">\n                <input [(ngModel)]=\"sectionName\"\n                       placeholder=\"Section Name\"\n                       class=\"form-control p-2\"/>\n              </div>\n              <div class=\"form-group\">\n                <input [(ngModel)]=\"seats\"\n                       placeholder=\"Total Capacity\"\n                       class=\"form-control p-2\"/>\n              </div>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <button (click)=\"updateSection(sectionName, seats)\"\n                          class=\"btn btn-success\">\n                    Update\n                  </button>\n                </div>\n                <div class=\"col-md-6\">\n                  <button (click)=\"deleteSection()\"\n                          class=\"btn btn-danger\">\n                    Delete\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _models_course_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/course.model.client */ "./src/app/models/course.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminComponent = /** @class */ (function () {
    function AdminComponent(courseService, sectionsService, userService, router) {
        this.courseService = courseService;
        this.sectionsService = sectionsService;
        this.userService = userService;
        this.router = router;
        this.allCourses = [];
        this.selectedCourse = new _models_course_model_client__WEBPACK_IMPORTED_MODULE_3__["Course"]();
        this.sections = [];
        this.courseId = -1;
        this.selectedSection = {};
    }
    AdminComponent.prototype.loadSections = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this.sectionsService
            .findSectionsForCourse(courseId)
            .then(function (sections) { return _this.sections = sections; })
            .then(function () { return _this.courseService.findCourseById(courseId); })
            .then(function (course) {
            _this.selectedCourse = course;
        });
    };
    AdminComponent.prototype.selectSection = function (section) {
        this.selectedSection = section;
        this.sectionName = section.name;
        this.seats = section.seats;
        this.sectionId = section._id;
    };
    AdminComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    AdminComponent.prototype.createSection = function () {
        var _this = this;
        if (this.courseId !== -1) {
            var selectedCourse_1 = new _models_course_model_client__WEBPACK_IMPORTED_MODULE_3__["Course"]();
            this.allCourses.map(function (course) {
                if (course.id === _this.courseId) {
                    selectedCourse_1 = course;
                }
            });
            if (selectedCourse_1 !== undefined) {
                var sectionName = selectedCourse_1.title + ' Section 1';
                var seats = 20;
                this
                    .sectionsService
                    .createSection(this.courseId, sectionName, seats)
                    .then(function () {
                    _this.loadSections(_this.courseId);
                });
            }
        }
        else {
            alert('Please select a course first');
        }
    };
    AdminComponent.prototype.deleteSection = function () {
        var _this = this;
        this.sectionsService.deleteSection(this.sectionId)
            .then(function (response) {
            console.log(response);
            if (response.ok) {
                alert('Deleted');
            }
        }).then(function () { return _this.loadSections(_this.courseId); });
    };
    AdminComponent.prototype.updateSection = function (sectionName, seats) {
        var _this = this;
        var section = {
            courseId: this.courseId,
            name: sectionName,
            seats: seats,
        };
        this.sectionsService.updateSection(section, this.sectionId, this.courseId)
            .then(function (section) {
            _this.sectionName = section.name;
            _this.seats = section.seats;
            _this.loadSections(_this.courseId);
        });
    };
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.findAllCourses()
            .then(function (courses) { return _this.allCourses = courses; });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'webdev-summer2-2018-client-angular-sarthak';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _whiteboard_whiteboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./whiteboard/whiteboard.component */ "./src/app/whiteboard/whiteboard.component.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./course-navigator/course-navigator.component */ "./src/app/course-navigator/course-navigator.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _sections_sections_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sections/sections.component */ "./src/app/sections/sections.component.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./course-grid/course-grid.component */ "./src/app/course-grid/course-grid.component.ts");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./module-list/module-list.component */ "./src/app/module-list/module-list.component.ts");
/* harmony import */ var _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lesson-tabs/lesson-tabs.component */ "./src/app/lesson-tabs/lesson-tabs.component.ts");
/* harmony import */ var _topic_pills_topic_pills_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./topic-pills/topic-pills.component */ "./src/app/topic-pills/topic-pills.component.ts");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/module.service.client */ "./src/app/services/module.service.client.ts");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/lesson.service.client */ "./src/app/services/lesson.service.client.ts");
/* harmony import */ var _services_topic_service_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/topic.service.client */ "./src/app/services/topic.service.client.ts");
/* harmony import */ var _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./widget-list/widget-list.component */ "./src/app/widget-list/widget-list.component.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _whiteboard_whiteboard_component__WEBPACK_IMPORTED_MODULE_5__["WhiteboardComponent"],
                _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_7__["CourseNavigatorComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _sections_sections_component__WEBPACK_IMPORTED_MODULE_12__["SectionsComponent"],
                _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_14__["CourseGridComponent"],
                _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_15__["CourseViewerComponent"],
                _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_16__["ModuleListComponent"],
                _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_17__["LessonTabsComponent"],
                _topic_pills_topic_pills_component__WEBPACK_IMPORTED_MODULE_18__["TopicPillsComponent"],
                _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_22__["WidgetListComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_24__["AdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_2__["routing"]
            ],
            providers: [
                _services_course_service_client__WEBPACK_IMPORTED_MODULE_6__["CourseServiceClient"],
                _services_user_service_client__WEBPACK_IMPORTED_MODULE_11__["UserServiceClient"],
                _services_section_service_client__WEBPACK_IMPORTED_MODULE_13__["SectionServiceClient"],
                _services_module_service_client__WEBPACK_IMPORTED_MODULE_19__["ModuleServiceClient"],
                _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_20__["LessonServiceClient"],
                _services_topic_service_client__WEBPACK_IMPORTED_MODULE_21__["TopicServiceClient"],
                _services_widget_service_client__WEBPACK_IMPORTED_MODULE_23__["WidgetServiceClient"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-navigator/course-navigator.component */ "./src/app/course-navigator/course-navigator.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _sections_sections_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/sections.component */ "./src/app/sections/sections.component.ts");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _whiteboard_whiteboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./whiteboard/whiteboard.component */ "./src/app/whiteboard/whiteboard.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");









var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _whiteboard_whiteboard_component__WEBPACK_IMPORTED_MODULE_7__["WhiteboardComponent"] },
    { path: 'courses', component: _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_1__["CourseNavigatorComponent"] },
    { path: 'course/:courseId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_6__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_6__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_6__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_6__["CourseViewerComponent"] },
    { path: 'course/:courseId/section', component: _sections_sections_component__WEBPACK_IMPORTED_MODULE_5__["SectionsComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"] },
    { path: 'admin/course/:courseId', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: '**', component: _whiteboard_whiteboard_component__WEBPACK_IMPORTED_MODULE_7__["WhiteboardComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/course-grid/course-grid.component.css":
/*!*******************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  margin: 10px;\n  border-radius: 20px;\n\n}\n\n.btn\n{\n  border-radius: 18px;\n  margin : 5px;\n}\n"

/***/ }),

/***/ "./src/app/course-grid/course-grid.component.html":
/*!********************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-4\" [hidden]=\"!isEnrolled\">\n  <div class=\"row my-3\">\n    <div class=\"col-lg-12\">\n      <h2>Enrolled Courses</h2>\n    </div>\n  </div>\n  <div class=\"row\">\n      <div *ngFor=\"let ecourse of enrolledCourses\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ecourse.title}}</h5>\n            <p class=\"card-text\">This is an enrolled course</p>\n        </div>\n          <div class=\"card-footer\">\n            <a routerLink=\"/course\"\n               class=\"btn btn-primary\">View</a>\n            <a [hidden]=\"isEnrolled\"\n               routerLink=\"/course/{{ecourse.id}}/section\"\n               class=\"btn btn-success float-right\">Enroll</a>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n<div class=\"container my-4 container-fluid\">\n  <div class=\"row\">\n      <div *ngFor=\"let course of courses\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{course.title}}</h5>\n            <p class=\"card-text\">This card contains details about the course</p>\n          </div>\n          <div class=\"card-footer\">\n            <a routerLink=\"/course/{{course.id}}\"\n               class=\"btn btn-primary\">View</a>\n            <a routerLink=\"/course/{{course.id}}/section\"\n               class=\"btn btn-success float-right\">Sections</a>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/course-grid/course-grid.component.ts":
/*!******************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.ts ***!
  \******************************************************/
/*! exports provided: CourseGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseGridComponent", function() { return CourseGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseGridComponent = /** @class */ (function () {
    function CourseGridComponent(service, sectionService) {
        this.service = service;
        this.sectionService = sectionService;
        this.enrolledCourses = [];
        this.courses = [];
        this.sections = [];
        this.isEnrolled = false;
    }
    CourseGridComponent.prototype.extractAllCourseIdsFromSections = function () {
        var courseIds = [];
        courseIds = this.sections.map(function (value) { return value.section.courseId; });
        return courseIds;
    };
    CourseGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllCourses()
            .then(function (courses) {
            _this.courses = courses;
            console.log(courses);
        });
        this.sectionService
            .findSectionsForStudent()
            .then(function (sections) { return _this.sections = sections; })
            .then(function (sections) { return (_this.extractAllCourseIdsFromSections()); }).then(function (courseIds) {
            _this.service.findEnrolledCoursesForStudent(courseIds)
                .then(function (courses) {
                _this.enrolledCourses = courses;
                if (_this.enrolledCourses.length > 0) {
                    _this.isEnrolled = true;
                }
                console.log(courses);
            });
        });
    };
    CourseGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-grid',
            template: __webpack_require__(/*! ./course-grid.component.html */ "./src/app/course-grid/course-grid.component.html"),
            styles: [__webpack_require__(/*! ./course-grid.component.css */ "./src/app/course-grid/course-grid.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"]])
    ], CourseGridComponent);
    return CourseGridComponent;
}());



/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.html":
/*!******************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Course Navigator ({{courses.length}})</h1>\n\n  <div class=\"row\">\n    <div class=\"col-3\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\">Courses</li>\n        <li *ngFor=\"let course of courses\"\n            (click)=\"selectCourse(course.id)\"\n            class=\"list-group-item\">\n          {{course.title}}\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-3\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\">Modules</li>\n        <li *ngFor=\"let module of modules\" class=\"list-group-item\">\n          {{module.title}}\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-3\">lessons</div>\n    <div class=\"col-3\">topics</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.ts ***!
  \****************************************************************/
/*! exports provided: CourseNavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseNavigatorComponent", function() { return CourseNavigatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseNavigatorComponent = /** @class */ (function () {
    function CourseNavigatorComponent(courseService) {
        this.courseService = courseService;
        this.courses = [];
        this.modules = [];
    }
    CourseNavigatorComponent.prototype.selectCourse = function (courseId) {
        var _this = this;
        this.courseService.findAllModulesForCourses(courseId)
            .then(function (modules) { return _this.modules = modules; });
    };
    CourseNavigatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.findAllCourses()
            .then(function (courses) { return _this.courses = courses; });
    };
    CourseNavigatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-navigator',
            template: __webpack_require__(/*! ./course-navigator.component.html */ "./src/app/course-navigator/course-navigator.component.html"),
            styles: [__webpack_require__(/*! ./course-navigator.component.css */ "./src/app/course-navigator/course-navigator.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"]])
    ], CourseNavigatorComponent);
    return CourseNavigatorComponent;
}());



/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.nav-item-link {\n  color: white;\n}\n\na {\n  color: white;\n}\n\na:hover.nav-item-link {\n  color: white;\n  cursor: pointer;\n}\n\nh4 {\n  font-size: 20px;\n  color: white;\n}\n\n.fas\n{\nmargin-left: 10px;\n}\n"

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.html":
/*!************************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-expand-lg bg-dark mb-4\">\n  <a class=\"navbar-brand text-light\" href=\"home\">\n    Whiteboard<i class=\"fas fa-home\"></i>\n  </a>\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link disabled\">\n        <h4>{{course.title}}</h4></a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"btn btn-link nav-link nav-item-link\"\n         (click)=\"logout()\">\n        Logout<i class=\"fas fa-sign-out-alt\"></i>\n      </a>\n    </li>\n  </ul>\n</header>\n<div class=\"container mx-2\">\n  <app-module-list></app-module-list>\n</div>\n"

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.ts ***!
  \**********************************************************/
/*! exports provided: CourseViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseViewerComponent", function() { return CourseViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _models_course_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/course.model.client */ "./src/app/models/course.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CourseViewerComponent = /** @class */ (function () {
    function CourseViewerComponent(userService, courseService, route, router) {
        var _this = this;
        this.userService = userService;
        this.courseService = courseService;
        this.route = route;
        this.router = router;
        this.course = new _models_course_model_client__WEBPACK_IMPORTED_MODULE_3__["Course"]();
        this.loadCourse = function (courseId) {
            return _this.courseService.findCourseById(courseId)
                .then(function (course) { return _this.course = course; });
        };
        this.logout = function () {
            return _this.userService.logout()
                .then(function () { return _this.router.navigate(['login']); });
        };
        this.route.params.subscribe(function (params) { return _this.loadCourse(params['courseId']); });
    }
    CourseViewerComponent.prototype.ngOnInit = function () {
    };
    CourseViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-viewer',
            template: __webpack_require__(/*! ./course-viewer.component.html */ "./src/app/course-viewer/course-viewer.component.html"),
            styles: [__webpack_require__(/*! ./course-viewer.component.css */ "./src/app/course-viewer/course-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserServiceClient"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__["CourseServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CourseViewerComponent);
    return CourseViewerComponent;
}());



/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.css":
/*!*******************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item.liSelected {\n  background-color: rgb(95,158,160);\n  color: black !important;\n}\n\n.liSelected {\n  font-family: 'Love Ya Like A Sister', cursive;\n  font-size: 20px;\nborder-color: darkblue;\n}\n\n.liSelected a {\n  color: white;\n  font-weight: bolder;\n}\n\na {\n  color: black;\n  font-weight: bold;\n}\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.html":
/*!********************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg nav-tabs pt-2\">\n  <ul class=\"nav nav-tabs\">\n    <li *ngFor=\"let lesson of lessons\"\n        class=\"nav-item\"\n        [ngClass]=\"{'liSelected': lesson.id == lessonId}\">\n      <a class=\"nav-link liSelected\"\n         routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lesson.id}}\">\n        {{lesson.title}}\n      </a>\n    </li>\n  </ul>\n</nav>\n<div class=\"container my-4\">\n  <app-topic-pills></app-topic-pills>\n</div>\n"

/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.ts":
/*!******************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.ts ***!
  \******************************************************/
/*! exports provided: LessonTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonTabsComponent", function() { return LessonTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/lesson.service.client */ "./src/app/services/lesson.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LessonTabsComponent = /** @class */ (function () {
    function LessonTabsComponent(service, userService, router, route) {
        var _this = this;
        this.service = service;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.lessons = [];
        this.logout = function () {
            return _this.userService.logout()
                .then(function () { return _this.router.navigate(['login']); });
        };
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    LessonTabsComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.lessonId = params['lessonId'];
        this.loadLessons(this.courseId, this.moduleId);
    };
    LessonTabsComponent.prototype.loadLessons = function (courseId, moduleId) {
        var _this = this;
        this.moduleId = moduleId;
        this.service.findLessonsForModule(courseId, moduleId)
            .then(function (lessons) { return _this.lessons = lessons; });
    };
    LessonTabsComponent.prototype.ngOnInit = function () {
    };
    LessonTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson-tabs',
            template: __webpack_require__(/*! ./lesson-tabs.component.html */ "./src/app/lesson-tabs/lesson-tabs.component.html"),
            styles: [__webpack_require__(/*! ./lesson-tabs.component.css */ "./src/app/lesson-tabs/lesson-tabs.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lesson_service_client__WEBPACK_IMPORTED_MODULE_1__["LessonServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LessonTabsComponent);
    return LessonTabsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nh2 {\n  font-size: 40px;\n  font-family: 'Poiret One', cursive;\n  text-align: center;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  color: rgb(102,51,153);\n}\n\n.btn {\n  border-radius: 20px;\n}\n\n.regLink {\n  margin-left: 15px;\n}\n\n#homeLink {\n  text-align: center;\n  margin-top: 100px;\n}\n\n.fa {\n  color: rgb(139,0,0);\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-expand-lg bg-dark\">\n  <a class=\"navbar-brand text-light\" href=\"home\">\n    Whiteboard <i class=\"fas fa-home\"></i>\n  </a></header>\n<h2>Login</h2>\n<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div>\n      <div class=\"form-group\">\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"Username\"\n               [(ngModel)]=\"username\" required>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\"\n               class=\"form-control\"\n               placeholder=\"Password\" [(ngModel)]=\"password\">\n      </div>\n      <div id=\"container\" class=\"form-group\">\n        <button (click)=\"login(username, password)\"\n                class=\"btn btn-info btn-block\">\n          Submit\n        </button>\n      </div>\n      <span>Not yet registered?</span><a class=\"nav-item-link regLink\" routerLink=\"/register\">Sign Up</a>\n      <div id=\"homeLink\">\n        <a class=\"nav-item-link\" routerLink=\"/home\">\n          <i class=\"fa-2x fa fa-home\"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.login = function (username, password) { return _this.userService
            .login(username, password)
            .then(function (user) { return _this.router.navigate(['profile']); }, function () { return alert('Not found!'); }); };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/course.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/course.model.client.ts ***!
  \***********************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
var Course = /** @class */ (function () {
    function Course() {
    }
    return Course;
}());



/***/ }),

/***/ "./src/app/module-list/module-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/module-list/module-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".moduleHeading\n{\n  font-family: 'Poiret One', cursive;\n  color: rgb(102,51,153);\n  font-size: 30px;\n  background-color: rgb(255,228,225);\n  font-weight: bold;\n  text-align: center;\n\n}\n\n.liSelected{\n  font-family: 'Love Ya Like A Sister', cursive;\n  font-size: 20px;\n}\n\n.list-group-item.liSelected{\n  background-color: rgb(95,158,160);\n}\n\n.liSelected a{\n  color: white;\n  font-weight: bolder;\n}\n\na {\n  color: rgb(128,0,0);\n  font-weight: bold;\n}\n\na.nav-item-link {\n  color: white;\n}\n\na:hover.nav-item-link{\n  color: white;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/module-list/module-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/module-list/module-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-4\">\n  <div class=\"col-md-4 pb-2\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item moduleHeading\">\n        Modules\n      </li>\n      <li [ngClass]=\"{'liSelected': module.id == moduleId}\"\n          *ngFor=\"let module of modules\"\n          class=\"list-group-item\">\n        <a class=\"liSelected\" routerLink=\"/course/{{courseId}}/module/{{module.id}}\">\n          {{module.title}}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-8\">\n    <app-lesson-tabs></app-lesson-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/module-list/module-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/module-list/module-list.component.ts ***!
  \******************************************************/
/*! exports provided: ModuleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleListComponent", function() { return ModuleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/module.service.client */ "./src/app/services/module.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModuleListComponent = /** @class */ (function () {
    function ModuleListComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.modules = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    ModuleListComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.loadModules(this.courseId);
    };
    ModuleListComponent.prototype.loadModules = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this.service.findModulesForCourse(courseId)
            .then(function (modules) { return _this.modules = modules; });
    };
    ModuleListComponent.prototype.ngOnInit = function () {
    };
    ModuleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-module-list',
            template: __webpack_require__(/*! ./module-list.component.html */ "./src/app/module-list/module-list.component.html"),
            styles: [__webpack_require__(/*! ./module-list.component.css */ "./src/app/module-list/module-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_module_service_client__WEBPACK_IMPORTED_MODULE_2__["ModuleServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ModuleListComponent);
    return ModuleListComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item-link {\n  color: white;\n}\n\na.nav-item-link {\n  color: white;\n}\n\na:hover.nav-item-link{\n  color: white;\n  cursor: pointer;\n}\n\n.adminColumnTwo{\n  margin-top: 200px;\n}\n\nh2 {\n  font-size: 40px;\n  font-family: 'Poiret One', cursive;\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 50px;\n  color: rgb(102,51,153);\n}\n\n.fas\n{\n  margin-left: 10px;\n}\n\n.btn-success{\n  border-radius: 15px;\n  width: 50%;\n  margin-left: 150px;\n}\n\n.profileContainer{\n\n  margin-top : 20px;\n}\n\n.courseContainer{\n  margin: 20px 50px 4px 200px;\n}\n\n.list-group-item{\n  margin-right:20px;\n  width: 110%;\n}\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-expand-lg bg-dark\">\n  <a class=\"navbar-brand text-light\" href=\"home\">Whiteboard<i class=\"fas fa-home\"></i></a>\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\" [hidden]=\"!isAdmin\">\n      <a class=\"btn btn-link nav-link nav-item-link\" routerLink=\"/admin\">Edit Sections<i class=\"fas fa-edit\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"btn btn-link nav-link nav-item-link\" (click)=\"logout()\">Logout<i class=\"fas fa-sign-out-alt\"></i></a>\n    </li>\n  </ul>\n</header>\n<div class=\"container-fluid justify-content-center pageContainer\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"container profileContainer\">\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n                <h2>Profile</h2>\n                <form>\n                  <div class=\"form-group\">\n                    <div class=\"col-sm-12\">\n                      <input [(ngModel)]=\"username\"\n                             class=\"form-control\"\n                             [ngModelOptions]=\"{standalone: true}\"\n                             disabled=\"\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"col-sm-12\">\n                      <input type=\"password\"\n                             [(ngModel)]=\"password\"\n                             class=\"form-control\"\n                             placeholder=\"Enter new password\"\n                             [ngModelOptions]=\"{standalone: true}\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"col-sm-12\">\n                      <input [(ngModel)]=\"firstName\"\n                             class=\"form-control\"\n                             placeholder=\"First Name\"\n                             [ngModelOptions]=\"{standalone: true}\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"col-sm-12\">\n                      <input [(ngModel)]=\"lastName\" class=\"form-control\"\n                             placeholder=\"Last Name\"\n                             [ngModelOptions]=\"{standalone: true}\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"col-sm-12\">\n                      <input type=\"text\"\n                             [(ngModel)]=\"phone\"\n                             class=\"form-control\"\n                             placeholder=\"(617)xxx-xxxx\"\n                             [ngModelOptions]=\"{standalone: true}\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"col-sm-12\">\n                      <input type=\"email\"\n                             [(ngModel)]=\"email\"\n                             class=\"form-control\"\n                             placeholder=\"Email\"\n                             [ngModelOptions]=\"{standalone: true}\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"col-sm-12\">\n                      <input [(ngModel)]=\"address\" class=\"form-control\"\n                             placeholder=\"Address\"\n                             [ngModelOptions]=\"{standalone: true}\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"col-sm-12\">\n                      <button type=\"button\" class=\"btn btn-success\" (click)=\"update()\">\n                        Update\n                      </button>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 adminColumnTwo\" [hidden]=\"!isAdmin\">\n      <h2>Welcome Admin</h2>\n      <h2>Please edit Sections from Navbar</h2>\n    </div>\n    <div class=\"col-lg-6\" [hidden]=\"isAdmin\">\n      <div class=\"container-fluid courseContainer\">\n        <div class=\"row col-lg-12 mb-4\">\n          <h2>You're enrolled in :</h2>\n          <div class=\"col-md-6\">\n            <ul class=\"list-group sectionList\" *ngFor=\"let enrollment of sections\">\n              <li class=\"list-group-item\">\n                <div class=\"offset-1  font-weight-light\">\n                  <a routerLink=\"/course/{{enrollment.section.courseId}}/section/\">\n                    {{enrollment.section.name}} :\n                    ({{enrollment.section.availableSeats}}/{{enrollment.section.seats}})\n                  </a>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, sectionService, courseService, router) {
        var _this = this;
        this.userService = userService;
        this.sectionService = sectionService;
        this.courseService = courseService;
        this.router = router;
        this.user = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: ''
        };
        this.sections = [];
        this.logout = function () { return _this.userService.logout()
            .then(function () { return _this.router.navigate(['login']); }); };
    }
    ProfileComponent.prototype.validateField = function (field) {
        return field !== undefined && field !== '';
    };
    ProfileComponent.prototype.validateProfileForm = function (user) {
        var username = user.username;
        var email = user.email;
        var phone = user.phone;
        var firstName = user.firstName;
        var lastName = user.lastName;
        var address = user.address;
        return this.validateField(username) &&
            this.validateField(email) &&
            this.validateField(firstName) &&
            this.validateField(lastName) &&
            this.validateField(phone) &&
            this.validateField(address);
    };
    ProfileComponent.prototype.update = function () {
        this.user = {
            username: this.username,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            address: this.address,
            phone: this.phone,
            email: this.email
        };
        if (this.validateProfileForm(this.user)) {
            this.userService.updateUser(this.user)
                .then(function (user) {
                alert('Updated successfully');
                console.log({ user: user });
            });
        }
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .userService.profile()
            .then(function (users) {
            var user = users[0];
            console.log(user);
            if (_this.validateProfileForm(user)) {
                _this.username = user.username;
                _this.password = user.password;
                _this.firstName = user.firstName;
                _this.lastName = user.lastName;
                _this.address = user.address;
                _this.phone = user.phone;
                _this.email = user.email;
            }
            _this.username = user.username;
        });
        this.sectionService
            .findSectionsForStudent()
            .then(function (sections) { return _this.sections = sections; });
        this.userService.authenticate()
            .then(function (response) {
            _this.isAdmin = response.username !== undefined && response.username === 'admin';
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_3__["SectionServiceClient"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_4__["CourseServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nh2 {\n  font-size: 40px;\n  font-family: 'Poiret One', cursive;\n  text-align: center;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  color: rgb(102,51,153);\n}\n\n.btn {\n  border-radius: 20px;\n}\n\n.regLink {\n  margin-left: 15px;\n}\n\n#homeLink {\n  text-align: center;\n  margin-top: 100px;\n}\n\n.fa {\n  color: rgb(139, 0, 0);\n}\n\n.fas{\n  margin-left: 10px;\n}\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-expand-lg bg-dark\">\n  <a class=\"navbar-brand text-light\" href=\"home\">\n    Whiteboard<i class=\"fas fa-home\"></i>\n  </a></header>\n<h2>Registration</h2>\n<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div>\n      <div class=\"form-group\">\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"Enter a username\"\n               [(ngModel)]=\"username\" required/>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\"\n               class=\"form-control\"\n               placeholder=\"Enter a password\"\n               [(ngModel)]=\"password\"/>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\"\n               placeholder=\"Re-enter a password\"\n               [(ngModel)]=\"password2\"\n               class=\"form-control\"\n               [ngClass]=\"{'border-danger': invalid == true}\"\n               (ngModelChange)=\"validatePassword(password2)\"/>\n      </div>\n      <div id=\"container\" class=\"form-group\">\n        <button (click)=\"register(username, password, password2)\"\n                class=\"btn btn-info btn-block\">\n          Submit\n        </button>\n      </div>\n      <span>Already registered?</span><a class=\"nav-item-link regLink\" routerLink=\"/login\">Log in</a>\n      <div id=\"homeLink\">\n        <a class=\"nav-item-link\" routerLink=\"/home\">\n          <i class=\"fa-2x fa fa-home\"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.validatePassword = function (password2) {
            return _this.invalid = !_this.password.includes(password2);
        };
    }
    RegisterComponent.prototype.register = function (username, password, password2) {
        var _this = this;
        if (password === password2) {
            this.userService
                .createUser(username, password)
                .then(function (response) { return response.json(); })
                .then(function (response) {
                if (response.message !== undefined) {
                    alert(response.message);
                }
                else {
                    _this.router.navigate(['profile']);
                }
            });
        }
        else {
            this.invalid = true;
            alert('Passwords don\'t match');
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.invalid = false;
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/sections/sections.component.css":
/*!*************************************************!*\
  !*** ./src/app/sections/sections.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  width: 50%;\n  margin-left: 100px;\n  border-radius: 20px;\n}\n\na.nav-item-link {\n  color: white;\n}\n\na {\n  color: white;\n}\n\na:hover.nav-item-link {\n  color: white;\n  cursor: pointer;\n}\n\n.fas {\n  margin-left: 10px;\n}\n\n.list-group-item {\n  border-radius: 20px;\n  background-color: rgb(240, 255, 255);\n  margin-bottom: 10px;\n}\n\nh2 {\n  font-size: 40px;\n  font-family: 'Poiret One', cursive;\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 50px;\n  color: rgb(102, 51, 153);\n}\n\n.form-control {\n  border-radius: 20px;\n}\n\n.btn-danger{\n  margin-top: 5px;\n}\n"

/***/ }),

/***/ "./src/app/sections/sections.component.html":
/*!**************************************************!*\
  !*** ./src/app/sections/sections.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-expand-lg bg-dark\">\n  <a class=\"navbar-brand text-light\" href=\"home\">\n    Whiteboard<i class=\"fas fa-home\"></i></a>\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"btn btn-link nav-link nav-item-link\" routerLink=\"/profile\">Profile<i class=\"fas fa-user\"></i></a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"btn btn-link nav-link nav-item-link\" (click)=\"logout()\">Logout<i class=\"fas fa-sign-out-alt\"></i></a>\n    </li>\n  </ul>\n</header>\n<h2>Sections for {{course.title}}</h2>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"container mt-4\" [hidden]=\"!isAdmin\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <input [(ngModel)]=\"sectionName\"\n                     placeholder=\"Section Name\"\n                     class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <input [(ngModel)]=\"seats\"\n                     placeholder=\"Seats available\"\n                     class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <button (click)=\"createSection(sectionName, seats)\" class=\"btn btn-success btn-block\">\n              Add Section\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-8\">\n      <div class=\"container mt-4\">\n        <ul class=\"list-group\">\n          <li *ngFor=\"let section of sections\" class=\"list-group-item\">\n            {{section.name}} ({{section.availableSeats}}/{{section.seats}})\n            <button [hidden]=\"isAdmin\" (click)=\"enroll(section)\"\n                    class=\"float-right btn btn-success ml-2 pl-2\"\n                    [ngClass]=\"{'disabled': section.availableSeats == 0 }\">\n              Enroll\n            </button>\n            <button [hidden]=\"isAdmin\" (click)=\"deEnroll(section)\"\n                    class=\"float-right btn btn-danger\"\n                    [ngClass]=\"{'disabled': section.availableSeats == section.seats}\">De-enroll\n            </button>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sections/sections.component.ts":
/*!************************************************!*\
  !*** ./src/app/sections/sections.component.ts ***!
  \************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _models_course_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/course.model.client */ "./src/app/models/course.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SectionsComponent = /** @class */ (function () {
    function SectionsComponent(sectionService, router, authService, courseService, route) {
        var _this = this;
        this.sectionService = sectionService;
        this.router = router;
        this.authService = authService;
        this.courseService = courseService;
        this.route = route;
        this.isAdmin = false;
        this.sectionName = '';
        this.seats = 0;
        this.courseId = '';
        this.sections = [];
        this.course = new _models_course_model_client__WEBPACK_IMPORTED_MODULE_4__["Course"]();
        this.findCourseById = function (courseId) {
            return _this.courseService.findCourseById(courseId)
                .then(function (course) { return _this.course = course; });
        };
        this.logout = function () {
            return _this.authService.logout()
                .then(function () { return _this.router.navigate(['login']); });
        };
        this.enroll = function (section) {
            return _this.sectionService.enrollStudentInSection(section._id)
                .then(function () { return (_this.loadSections(_this.courseId)); });
        };
        this.deEnroll = function (section) {
            return _this.sectionService.deEnroll(section._id)
                .then(function () { return (_this.loadSections(_this.courseId)); });
        };
        this.route.params.subscribe(function (params) { return _this.loadSections(params['courseId']); });
    }
    SectionsComponent.prototype.loadSections = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this
            .sectionService
            .findSectionsForCourse(courseId)
            .then(function (sections) { return _this.sections = sections; })
            .then(function () { return _this.findCourseById(courseId); });
    };
    SectionsComponent.prototype.createSection = function (sectionName, seats) {
        var _this = this;
        if (sectionName === '' && this.course !== undefined) {
            sectionName = this.course.title + ' Section 1';
        }
        if (seats === 0) {
            seats = 20;
        }
        this
            .sectionService
            .createSection(this.courseId, sectionName, seats)
            .then(function () {
            _this.loadSections(_this.courseId);
        });
    };
    SectionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authenticate()
            .then(function (user) {
            if (user.username !== undefined && user.username !== '') {
                if (user.username === 'admin') {
                    _this.isAdmin = true;
                    console.log('user: ' + user.username);
                }
            }
            else {
                _this.router.navigate(['login']);
            }
        });
    };
    SectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sections',
            template: __webpack_require__(/*! ./sections.component.html */ "./src/app/sections/sections.component.html"),
            styles: [__webpack_require__(/*! ./sections.component.css */ "./src/app/sections/sections.component.css")]
        }),
        __metadata("design:paramtypes", [_services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "./src/app/services/course.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/course.service.client.ts ***!
  \***************************************************/
/*! exports provided: CourseServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseServiceClient", function() { return CourseServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CourseServiceClient = /** @class */ (function () {
    function CourseServiceClient() {
        this.findAllCourses = function () {
            return fetch('https://sarthakwebdev.herokuapp.com/api/course')
                .then(function (response) { return response.json(); });
        };
        this.findCourseById = function (courseId) {
            return fetch('https://sarthakwebdev.herokuapp.com/api/course' + '/' + courseId)
                .then(function (response) { return response.json(); });
        };
        this.findAllModulesForCourses = function (courseId) {
            return fetch('https://sarthakwebdev.herokuapp.com/api/course/' + courseId + '/module')
                .then(function (response) { return response.json(); });
        };
    }
    CourseServiceClient.prototype.findEnrolledCoursesForStudent = function (courseIds) {
        return fetch('https://sarthakwebdev.herokuapp.com/api/courses', {
            method: 'POST',
            body: JSON.stringify(courseIds),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return (response.json()); });
    };
    CourseServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CourseServiceClient);
    return CourseServiceClient;
}());



/***/ }),

/***/ "./src/app/services/lesson.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/lesson.service.client.ts ***!
  \***************************************************/
/*! exports provided: LessonServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonServiceClient", function() { return LessonServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LessonServiceClient = /** @class */ (function () {
    function LessonServiceClient() {
        this.findLessonsForModule = function (courseId, moduleId) {
            return fetch('https://sarthakwebdev.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson')
                .then(function (response) { return response.json(); });
        };
    }
    LessonServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LessonServiceClient);
    return LessonServiceClient;
}());



/***/ }),

/***/ "./src/app/services/module.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/module.service.client.ts ***!
  \***************************************************/
/*! exports provided: ModuleServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleServiceClient", function() { return ModuleServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModuleServiceClient = /** @class */ (function () {
    function ModuleServiceClient() {
        this.findModulesForCourse = function (courseId) {
            return fetch('https://sarthakwebdev.herokuapp.com/api/course/CID/module'.replace('CID', courseId))
                .then(function (response) { return response.json(); });
        };
    }
    ModuleServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ModuleServiceClient);
    return ModuleServiceClient;
}());



/***/ }),

/***/ "./src/app/services/section.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/section.service.client.ts ***!
  \****************************************************/
/*! exports provided: SectionServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionServiceClient", function() { return SectionServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SectionServiceClient = /** @class */ (function () {
    function SectionServiceClient() {
        this.deEnroll = function (sectionId) {
            return fetch('https://sarthakwebdevnode.herokuapp.com/api/section/' + sectionId + '/deRegister', {
                method: 'DELETE',
                credentials: 'include',
            });
        };
        this.enrollStudentInSection = function (sectionId) {
            return fetch('https://sarthakwebdevnode.herokuapp.com/api/section/' + sectionId + '/enrollment', {
                method: 'post',
                credentials: 'include'
            });
        };
        this.findAllSections = function () {
            return fetch('https://sarthakwebdevnode.herokuapp.com/api/section')
                .then(function (response) { return response.json(); });
        };
        this.findSectionsForCourse = function (courseId) {
            return fetch('https://sarthakwebdevnode.herokuapp.com/api/course/' + courseId + '/section')
                .then(function (response) { return response.json(); });
        };
        this.findSectionsForStudent = function () {
            return fetch('https://sarthakwebdevnode.herokuapp.com/api/student/section', {
                credentials: 'include'
            }).then(function (response) { return response.json(); });
        };
        this.createSection = function (courseId, name, seats) {
            var section = { courseId: courseId, name: name, seats: seats, availableSeats: seats };
            return fetch('https://sarthakwebdevnode.herokuapp.com/api/course/CID/section'.replace('CID', courseId), {
                method: 'post',
                body: JSON.stringify(section),
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
            });
        };
        this.deleteSection = function (sectionId) {
            return fetch('https://sarthakwebdevnode.herokuapp.com/api/section/SID/delete'.replace('SID', sectionId), {
                method: 'DELETE',
                credentials: 'include'
            });
        };
        this.updateSection = function (section, sectionId, courseId) {
            var url = 'https://sarthakwebdevnode.herokuapp.com/api/course/' + courseId + '/section/SID/update';
            return fetch(url.replace('SID', sectionId), {
                method: 'PUT',
                credentials: 'include',
                body: JSON.stringify(section),
                headers: {
                    'content-type': 'application/json'
                }
            }).then((function (response) { return response.json(); }));
        };
    }
    SectionServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SectionServiceClient);
    return SectionServiceClient;
}());



/***/ }),

/***/ "./src/app/services/topic.service.client.ts":
/*!**************************************************!*\
  !*** ./src/app/services/topic.service.client.ts ***!
  \**************************************************/
/*! exports provided: TopicServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicServiceClient", function() { return TopicServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TopicServiceClient = /** @class */ (function () {
    function TopicServiceClient() {
        this.findAllTopicsForLesson = function (courseId, moduleId, lessonId) {
            return fetch('https://sarthakwebdev.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/topic/')
                .then(function (response) { return response.json(); });
        };
    }
    TopicServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TopicServiceClient);
    return TopicServiceClient;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
        this.login = function (username, password) {
            var credentials = {
                username: username,
                password: password
            };
            return fetch('https://sarthakwebdevnode.herokuapp.com/api/login', {
                method: 'post',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });
        };
        this.updateUser = function (user) {
            return fetch('https://sarthakwebdevnode.herokuapp.com/api/user/update', {
                method: 'PUT',
                credentials: 'include',
                body: JSON.stringify(user),
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(function (response) { return response.json(); });
        };
        this.currentUser = function () {
            return fetch('https://sarthakwebdevnode.herokuapp.com/currentUser', {
                credentials: 'include'
            }).then(function (response) { return response.json(); });
        };
        this.logout = function () {
            return fetch('https://sarthakwebdevnode.herokuapp.com/api/logout', {
                method: 'post',
                credentials: 'include'
            });
        };
        this.profile = function () {
            return fetch('https://sarthakwebdevnode.herokuapp.com/api/profile', {
                credentials: 'include',
            }).then(function (response) { return response.json(); });
        };
        this.createUser = function (username, password) {
            var user = {
                username: username,
                password: password
            };
            return fetch('https://sarthakwebdevnode.herokuapp.com/api/user', {
                body: JSON.stringify(user),
                credentials: 'include',
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                }
            });
        };
        this.authenticate = function () {
            return fetch('https://sarthakwebdevnode.herokuapp.com/api/auth', {
                credentials: 'include'
            }).then(function (response) { return (response.json()); });
        };
    }
    UserServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UserServiceClient);
    return UserServiceClient;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetServiceClient", function() { return WidgetServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WidgetServiceClient = /** @class */ (function () {
    function WidgetServiceClient() {
        this.findWidgetsForTopic = function (topicId) {
            return fetch('https://sarthakwebdev.herokuapp.com/api/topic/' + topicId + '/widget')
                .then(function (response) { return response.json(); });
        };
    }
    WidgetServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], WidgetServiceClient);
    return WidgetServiceClient;
}());



/***/ }),

/***/ "./src/app/topic-pills/topic-pills.component.css":
/*!*******************************************************!*\
  !*** ./src/app/topic-pills/topic-pills.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link.liSelected {\n  background-color: rgb(95,158,160);\n  color: black !important;\n  font-family: 'Love Ya Like A Sister', cursive;\n  font-size: 20px;\n\n}\n\n.liSelected {\n  font-family: 'Love Ya Like A Sister', cursive;\n  color: black;\n  border-radius: 14px;\n  background-color: rgb(95,158,160);\n  font-weight: bolder;\n  font-size: 20px;\n}\n\na {\n  font-size: 20px;\n  font-family: 'Love Ya Like A Sister', cursive;\n  text-decoration: none;\n  color: black;\n  font-weight: bold;\n}\n\n.widgetClass{\n  margin-top: 65px;\n}\n"

/***/ }),

/***/ "./src/app/topic-pills/topic-pills.component.html":
/*!********************************************************!*\
  !*** ./src/app/topic-pills/topic-pills.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-4\">\n  <div class=\"row my-3\">\n    <div *ngFor=\"let topic of topics\" class=\"d-inline mr-1\">\n      <a [ngClass]=\"{'liSelected':topic.id == topicId}\"\n         class=\"my-auto p-2 disabled liSelected\"\n         routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lessonId}}/topic/{{topic.id}}\">\n        {{topic.title}}</a>\n    </div>\n  </div>\n  <div class=\"row widgetClass\">\n    <div class=\"col-md-12\">\n      <app-widget-list></app-widget-list>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/topic-pills/topic-pills.component.ts":
/*!******************************************************!*\
  !*** ./src/app/topic-pills/topic-pills.component.ts ***!
  \******************************************************/
/*! exports provided: TopicPillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicPillsComponent", function() { return TopicPillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_topic_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/topic.service.client */ "./src/app/services/topic.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopicPillsComponent = /** @class */ (function () {
    function TopicPillsComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.topics = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    TopicPillsComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.lessonId = params['lessonId'];
        this.topicId = params['topicId'];
        this.loadTopics(this.courseId, this.moduleId, this.lessonId);
    };
    TopicPillsComponent.prototype.loadTopics = function (courseId, moduleId, lessonId) {
        var _this = this;
        this.lessonId = lessonId;
        this.service.findAllTopicsForLesson(courseId, moduleId, lessonId)
            .then(function (topics) { return _this.topics = topics; });
    };
    TopicPillsComponent.prototype.ngOnInit = function () {
    };
    TopicPillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic-pills',
            template: __webpack_require__(/*! ./topic-pills.component.html */ "./src/app/topic-pills/topic-pills.component.html"),
            styles: [__webpack_require__(/*! ./topic-pills.component.css */ "./src/app/topic-pills/topic-pills.component.css")]
        }),
        __metadata("design:paramtypes", [_services_topic_service_client__WEBPACK_IMPORTED_MODULE_2__["TopicServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TopicPillsComponent);
    return TopicPillsComponent;
}());



/***/ }),

/***/ "./src/app/whiteboard/whiteboard.component.css":
/*!*****************************************************!*\
  !*** ./src/app/whiteboard/whiteboard.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.fas\n{\n  margin-left: 5px;\n}\na.nav-item-link {\n  color: white;\n}\na {\n  color: white;\n}\na:hover.nav-item-link {\n  color: white;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/whiteboard/whiteboard.component.html":
/*!******************************************************!*\
  !*** ./src/app/whiteboard/whiteboard.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-expand-lg bg-dark\">\n  <a class=\"navbar-brand text-light\" href=\"home\">\n    Whiteboard<i class=\"fas fa-home\"></i>\n  </a>\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\" [hidden]=\"!isLoggedIn\">\n      <a class=\"btn btn-link nav-link nav-item-link\" routerLink=\"/profile\">Profile<i class=\"fas fa-user\"></i></a>\n    </li>\n    <li class=\"nav-item\" [hidden]=\"!isLoggedIn\">\n      <a class=\"btn btn-link nav-link nav-item-link\" (click)=\"logout()\">Logout<i class=\"fas fa-sign-out-alt\"></i></a>\n    </li>\n    <li class=\"nav-item\" [hidden]=\"isLoggedIn\">\n      <a class=\"btn btn-link nav-link nav-item-link\"\n         routerLink=\"/login\">\n        Login<i class=\"fas fa-sign-in-alt\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item\" [hidden]=\"isLoggedIn\">\n      <a class=\"btn btn-link nav-link nav-item-link\"\n         routerLink=\"/register\">\n        Register<i class=\"fas fa-user-plus\"></i>\n      </a>\n    </li>\n  </ul>\n</header>\n<app-course-grid></app-course-grid>\n"

/***/ }),

/***/ "./src/app/whiteboard/whiteboard.component.ts":
/*!****************************************************!*\
  !*** ./src/app/whiteboard/whiteboard.component.ts ***!
  \****************************************************/
/*! exports provided: WhiteboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteboardComponent", function() { return WhiteboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WhiteboardComponent = /** @class */ (function () {
    function WhiteboardComponent(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.isLoggedIn = false;
        this.logout = function () {
            return _this.userService.logout()
                .then(function () { return _this.router.navigate(['login']); });
        };
    }
    WhiteboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.authenticate()
            .then(function (response) {
            _this.isLoggedIn = response.username !== undefined && response.username !== '';
        });
    };
    WhiteboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-whiteboard',
            template: __webpack_require__(/*! ./whiteboard.component.html */ "./src/app/whiteboard/whiteboard.component.html"),
            styles: [__webpack_require__(/*! ./whiteboard.component.css */ "./src/app/whiteboard/whiteboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WhiteboardComponent);
    return WhiteboardComponent;
}());



/***/ }),

/***/ "./src/app/widget-list/widget-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let widget of widgets\">\n  <div [ngSwitch]=\"widget.widgetType\">\n    <div *ngSwitchCase=\"'Heading'\">\n      <div [ngSwitch]=\"widget.size\">\n        <h1 *ngSwitchCase=\"'1'\">{{widget.text}}</h1>\n        <h2 *ngSwitchCase=\"'2'\">{{widget.text}}</h2>\n        <h3 *ngSwitchCase=\"'3'\">{{widget.text}}</h3>\n      </div>\n    </div>\n    <div *ngSwitchCase=\"'Paragraph'\">\n      <p>{{widget.text}}</p>\n    </div>\n    <div *ngSwitchCase=\"'Link'\">\n      <a href=\"{{widget.href}}\">{{widget.text}}</a>\n    </div>\n    <div *ngSwitchCase=\"'List'\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\"\n            *ngFor=\"let item of widget.text.split('\\n')\">\n          {{item}}\n        </li>\n      </ul>\n    </div>\n    <div *ngSwitchCase=\"'Image'\">\n      <h6>Image</h6>\n      <img src={{widget.src}}/>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.ts ***!
  \******************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.widgets = [];
        this.loadWidgets = function (topicId) {
            return _this.service.findWidgetsForTopic(topicId)
                .then(function (widgets) { return _this.widgets = widgets; });
        };
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    WidgetListComponent.prototype.setParams = function (params) {
        this.context = params;
        this.topicId = params['topicId'];
        this.loadWidgets(this.topicId);
    };
    WidgetListComponent.prototype.ngOnInit = function () {
    };
    WidgetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sarthaksachdeva/Documents/WebDevSummer/webdev-summer2-2018-client-angular-sarthak/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map