webpackJsonp([0,28],{

/***/ 1196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_routing__ = __webpack_require__(1283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_smartadmin_module__ = __webpack_require__(1216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_ui_datatable_smartadmin_datatable_module__ = __webpack_require__(1296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_layout_layout_module__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_stats_stats_module__ = __webpack_require__(1217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_widgets_smartadmin_widgets_module__ = __webpack_require__(1218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_graphs_flot_chart_flot_chart_module__ = __webpack_require__(1294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_forms_editors_smartadmin_editors_module__ = __webpack_require__(1289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__grafico_flot_charts_component__ = __webpack_require__(1284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__grafico_morris_charts_component__ = __webpack_require__(1285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_graphs_morris_graph_morris_graph_module__ = __webpack_require__(1234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_forms_validation_smartadmin_validation_module__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_ui_tree_view_tree_view_module__ = __webpack_require__(1298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__painel_painel_component__ = __webpack_require__(1277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__indicador_indicador_lista_component__ = __webpack_require__(1276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__indicador_indicador_cadastro_component__ = __webpack_require__(1273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__indicador_indicador_lista_unidade_component__ = __webpack_require__(1275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__indicador_indicador_importa_lista_component__ = __webpack_require__(1274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__programa_programa_component__ = __webpack_require__(1279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__cadastros_auxiliares_usuario_component__ = __webpack_require__(1271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__cadastros_auxiliares_categoria_analise_cadastro_component__ = __webpack_require__(1262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__cadastros_auxiliares_categoria_analise_component__ = __webpack_require__(1263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__cadastros_auxiliares_tag_cadastro_component__ = __webpack_require__(1266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__cadastros_auxiliares_tag_component__ = __webpack_require__(1267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__cadastros_auxiliares_unidade_medida_cadastro_component__ = __webpack_require__(1268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__cadastros_auxiliares_unidade_medida_component__ = __webpack_require__(1269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__cadastros_auxiliares_fonte_cadastro_component__ = __webpack_require__(1264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__cadastros_auxiliares_fonte_component__ = __webpack_require__(1265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__perfil_perfil_component__ = __webpack_require__(1278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__cadastros_auxiliares_unidade_component__ = __webpack_require__(1270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__WindowRef__ = __webpack_require__(1213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__componentes_componentes_module__ = __webpack_require__(1222);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// Itens de indicadores




// Itens de planos

// Itens auxiliares









// PerfilComponent

// UnidadeComponent



var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__admin_routing__["a" /* AdminRouting */],
            __WEBPACK_IMPORTED_MODULE_3__shared_smartadmin_module__["a" /* SmartadminModule */],
            __WEBPACK_IMPORTED_MODULE_34__componentes_componentes_module__["a" /* ComponentesModule */],
            __WEBPACK_IMPORTED_MODULE_14__shared_forms_validation_smartadmin_validation_module__["a" /* SmartadminValidationModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_layout_layout_module__["a" /* SmartadminLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_stats_stats_module__["a" /* StatsModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_ui_datatable_smartadmin_datatable_module__["a" /* SmartadminDatatableModule */],
            __WEBPACK_IMPORTED_MODULE_7__shared_widgets_smartadmin_widgets_module__["a" /* SmartadminWidgetsModule */],
            __WEBPACK_IMPORTED_MODULE_12__shared_graphs_morris_graph_morris_graph_module__["a" /* MorrisGraphModule */],
            __WEBPACK_IMPORTED_MODULE_8__shared_graphs_flot_chart_flot_chart_module__["a" /* FlotChartModule */],
            __WEBPACK_IMPORTED_MODULE_9__shared_forms_editors_smartadmin_editors_module__["a" /* SmartadminEditorsModule */],
            __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__["c" /* AccordionModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__["d" /* CarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15__shared_ui_tree_view_tree_view_module__["a" /* TreeViewModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_16__painel_painel_component__["a" /* PainelComponent */],
            __WEBPACK_IMPORTED_MODULE_10__grafico_flot_charts_component__["a" /* FlotChartsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__grafico_morris_charts_component__["a" /* MorrisChartsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__indicador_indicador_lista_component__["a" /* IndicadorListaComponent */],
            __WEBPACK_IMPORTED_MODULE_18__indicador_indicador_cadastro_component__["a" /* IndicadorCadastroComponent */],
            __WEBPACK_IMPORTED_MODULE_19__indicador_indicador_lista_unidade_component__["a" /* IndicadorListaUnidadeComponent */],
            __WEBPACK_IMPORTED_MODULE_20__indicador_indicador_importa_lista_component__["a" /* IndicadorImportaListaComponent */],
            __WEBPACK_IMPORTED_MODULE_23__cadastros_auxiliares_categoria_analise_cadastro_component__["a" /* CategoriaAnaliseCadastroComponent */],
            __WEBPACK_IMPORTED_MODULE_24__cadastros_auxiliares_categoria_analise_component__["a" /* CategoriaAnaliseComponent */],
            __WEBPACK_IMPORTED_MODULE_22__cadastros_auxiliares_usuario_component__["a" /* UsuarioComponent */],
            __WEBPACK_IMPORTED_MODULE_21__programa_programa_component__["a" /* ProgramaComponent */],
            __WEBPACK_IMPORTED_MODULE_25__cadastros_auxiliares_tag_cadastro_component__["a" /* TagCadastroComponent */],
            __WEBPACK_IMPORTED_MODULE_26__cadastros_auxiliares_tag_component__["a" /* TagComponent */],
            __WEBPACK_IMPORTED_MODULE_27__cadastros_auxiliares_unidade_medida_cadastro_component__["a" /* UnidadeMedidaCadastroComponent */],
            __WEBPACK_IMPORTED_MODULE_28__cadastros_auxiliares_unidade_medida_component__["a" /* UnidadeMedidaComponent */],
            __WEBPACK_IMPORTED_MODULE_32__cadastros_auxiliares_unidade_component__["a" /* UnidadeComponent */],
            __WEBPACK_IMPORTED_MODULE_31__perfil_perfil_component__["a" /* PerfilComponent */],
            __WEBPACK_IMPORTED_MODULE_29__cadastros_auxiliares_fonte_cadastro_component__["a" /* FonteCadastroComponent */],
            __WEBPACK_IMPORTED_MODULE_30__cadastros_auxiliares_fonte_component__["a" /* FonteComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_33__WindowRef__["a" /* WindowRef */]]
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ 1212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = FadeInTop;
/**
 * Created by griga on 12/26/16.
 */
function FadeInTop() {
    var __ref__ = window['Reflect'];
    function parseMeta(metaInformation) {
        for (var _i = 0, metaInformation_1 = metaInformation; _i < metaInformation_1.length; _i++) {
            var metadata = metaInformation_1[_i]; //metadata is @Component metadata
            // metadata.animations = [fadeInTop()];
            // metadata.host = {"[@fadeInTop]": ''};
            //your logic here
            // mine was metadata.styles = [builtStyles]
        }
    }
    //value represents the annotation parameter(s)
    return function (target) {
        var metaInformation = __ref__.getOwnMetadata('annotations', target);
        if (metaInformation) {
            parseMeta(metaInformation);
        }
    };
}
//# sourceMappingURL=fade-in-top.decorator.js.map

/***/ }),

/***/ 1213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    // return the native window obj
    return window;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
WindowRef = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], WindowRef);

//# sourceMappingURL=WindowRef.js.map

/***/ }),

/***/ 1214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    // return the native window obj
    return window;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
WindowRef = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], WindowRef);

//# sourceMappingURL=WindowRef.js.map

/***/ }),

/***/ 1215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__easy_pie_chart_container_directive__ = __webpack_require__(1231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sparkline_container_directive__ = __webpack_require__(1232);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InlineGraphsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InlineGraphsModule = (function () {
    function InlineGraphsModule() {
    }
    return InlineGraphsModule;
}());
InlineGraphsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__easy_pie_chart_container_directive__["a" /* EasyPieChartContainer */], __WEBPACK_IMPORTED_MODULE_3__sparkline_container_directive__["a" /* SparklineContainer */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__easy_pie_chart_container_directive__["a" /* EasyPieChartContainer */], __WEBPACK_IMPORTED_MODULE_3__sparkline_container_directive__["a" /* SparklineContainer */]],
    })
], InlineGraphsModule);

//# sourceMappingURL=inline-graphs.module.js.map

/***/ }),

/***/ 1216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_popover__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout__ = __webpack_require__(1244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__i18n_i18n_module__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__voice_control_voice_control_module__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__widgets_smartadmin_widgets_module__ = __webpack_require__(1218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_utils_module__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__stats_stats_module__ = __webpack_require__(1217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__graphs_inline_inline_graphs_module__ = __webpack_require__(1215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__forms_smartadmin_forms_lite_module__ = __webpack_require__(1230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ui_smart_progressbar_smart_progressbar_module__ = __webpack_require__(1250);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartadminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import {ChatModule} from "./chat/chat.module";




var SmartadminModule = (function () {
    function SmartadminModule() {
    }
    return SmartadminModule;
}());
SmartadminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
        ],
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["a" /* ModalModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["f" /* ButtonsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["g" /* AlertModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["h" /* TabsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["b" /* TooltipModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["i" /* BsDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["j" /* ProgressbarModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_popover__["PopoverModule"],
            __WEBPACK_IMPORTED_MODULE_7__layout__["a" /* SmartadminLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_8__i18n_i18n_module__["a" /* I18nModule */],
            __WEBPACK_IMPORTED_MODULE_11__utils_utils_module__["a" /* UtilsModule */],
            __WEBPACK_IMPORTED_MODULE_14__forms_smartadmin_forms_lite_module__["a" /* SmartadminFormsLiteModule */],
            __WEBPACK_IMPORTED_MODULE_15__ui_smart_progressbar_smart_progressbar_module__["a" /* SmartProgressbarModule */],
            __WEBPACK_IMPORTED_MODULE_13__graphs_inline_inline_graphs_module__["a" /* InlineGraphsModule */],
            __WEBPACK_IMPORTED_MODULE_10__widgets_smartadmin_widgets_module__["a" /* SmartadminWidgetsModule */],
            // ChatModule,
            __WEBPACK_IMPORTED_MODULE_12__stats_stats_module__["a" /* StatsModule */],
            __WEBPACK_IMPORTED_MODULE_9__voice_control_voice_control_module__["a" /* VoiceControlModule */],
        ]
    })
], SmartadminModule);

//# sourceMappingURL=smartadmin.module.js.map

/***/ }),

/***/ 1217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stats_component__ = __webpack_require__(1248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__graphs_inline_inline_graphs_module__ = __webpack_require__(1215);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StatsModule = (function () {
    function StatsModule() {
    }
    return StatsModule;
}());
StatsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__graphs_inline_inline_graphs_module__["a" /* InlineGraphsModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__stats_component__["a" /* StatsComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__stats_component__["a" /* StatsComponent */]],
    })
], StatsModule);

//# sourceMappingURL=stats.module.js.map

/***/ }),

/***/ 1218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget_widget_component__ = __webpack_require__(1252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widgets_grid_widgets_grid_component__ = __webpack_require__(1253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartadminWidgetsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SmartadminWidgetsModule = (function () {
    function SmartadminWidgetsModule() {
    }
    return SmartadminWidgetsModule;
}());
SmartadminWidgetsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__widget_widget_component__["a" /* WidgetComponent */], __WEBPACK_IMPORTED_MODULE_2__widgets_grid_widgets_grid_component__["a" /* WidgetsGridComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__widget_widget_component__["a" /* WidgetComponent */], __WEBPACK_IMPORTED_MODULE_2__widgets_grid_widgets_grid_component__["a" /* WidgetsGridComponent */]]
    })
], SmartadminWidgetsModule);

//# sourceMappingURL=smartadmin-widgets.module.js.map

/***/ }),

/***/ 1220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxPaginationModule; });
/* unused harmony export PaginationService */
/* unused harmony export PaginationControlsComponent */
/* unused harmony export PaginationControlsDirective */
/* unused harmony export PaginatePipe */



var PaginationService = (function () {
    function PaginationService() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id != null ? config.id : this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                    name: 'paginate',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    PaginatePipe.ctorParameters = function () { return [
        { type: PaginationService, },
    ]; };
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'pagination-controls',
                    template: DEFAULT_TEMPLATE,
                    styles: [DEFAULT_STYLES],
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    PaginationControlsComponent.ctorParameters = function () { return []; };
    PaginationControlsComponent.propDecorators = {
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'autoHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'responsive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'previousLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'nextLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'screenReaderPaginationLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'screenReaderPageLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'screenReaderCurrentLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return PaginationControlsComponent;
}());

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    PaginationControlsDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: 'pagination-template,[pagination-template]',
                    exportAs: 'paginationApi'
                },] },
    ];
    /** @nocollapse */
    PaginationControlsDirective.ctorParameters = function () { return [
        { type: PaginationService, },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    PaginationControlsDirective.propDecorators = {
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return PaginationControlsDirective;
}());

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                    declarations: [
                        PaginatePipe,
                        PaginationControlsComponent,
                        PaginationControlsDirective
                    ],
                    providers: [PaginationService],
                    exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
                },] },
    ];
    /** @nocollapse */
    NgxPaginationModule.ctorParameters = function () { return []; };
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 1222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_pagination__ = __webpack_require__(1220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_smartadmin_module__ = __webpack_require__(1216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__image_type_pipe__ = __webpack_require__(1227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__file_size_pipe__ = __webpack_require__(1224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cpf_pipe__ = __webpack_require__(1223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fone_pipe__ = __webpack_require__(1225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__resultset_component__ = __webpack_require__(1229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__paginacao_component__ = __webpack_require__(1228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__grafico_component__ = __webpack_require__(1226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__WindowRef__ = __webpack_require__(1214);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ComponentesModule = (function () {
    function ComponentesModule() {
    }
    return ComponentesModule;
}());
ComponentesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2_ngx_pagination__["a" /* NgxPaginationModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__shared_smartadmin_module__["a" /* SmartadminModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_8__resultset_component__["a" /* ResultsetComponent */], __WEBPACK_IMPORTED_MODULE_9__paginacao_component__["a" /* PaginacaoComponent */], __WEBPACK_IMPORTED_MODULE_10__grafico_component__["a" /* GraficoComponent */], __WEBPACK_IMPORTED_MODULE_4__image_type_pipe__["a" /* ImageTypePipe */], __WEBPACK_IMPORTED_MODULE_5__file_size_pipe__["a" /* FileSizePipe */], __WEBPACK_IMPORTED_MODULE_6__cpf_pipe__["a" /* CPFPipe */], __WEBPACK_IMPORTED_MODULE_7__fone_pipe__["a" /* FonePipe */]],
        exports: [__WEBPACK_IMPORTED_MODULE_9__paginacao_component__["a" /* PaginacaoComponent */], __WEBPACK_IMPORTED_MODULE_8__resultset_component__["a" /* ResultsetComponent */], __WEBPACK_IMPORTED_MODULE_10__grafico_component__["a" /* GraficoComponent */], __WEBPACK_IMPORTED_MODULE_4__image_type_pipe__["a" /* ImageTypePipe */], __WEBPACK_IMPORTED_MODULE_5__file_size_pipe__["a" /* FileSizePipe */], __WEBPACK_IMPORTED_MODULE_6__cpf_pipe__["a" /* CPFPipe */], __WEBPACK_IMPORTED_MODULE_7__fone_pipe__["a" /* FonePipe */]],
        providers: [__WEBPACK_IMPORTED_MODULE_11__WindowRef__["a" /* WindowRef */]]
    })
], ComponentesModule);

//# sourceMappingURL=componentes.module.js.map

/***/ }),

/***/ 1223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CPFPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Convert bytes into largest possible unit.
 * Takes an precision argument that defaults to 2.
 * Usage:
 *   bytes | fileSize:precision
 * Example:
 *   {{ 1024 |  fileSize}}
 *   formats to: 1 KB
*/
var CPFPipe = (function () {
    function CPFPipe() {
    }
    CPFPipe.prototype.transform = function (value) {
        return value.substr(0, 3) + '.' + value.substr(3, 3) + '.' + value.substr(6, 3) + '-' + value.substr(9, 2);
    };
    return CPFPipe;
}());
CPFPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'cpf' })
], CPFPipe);

//# sourceMappingURL=cpf.pipe.js.map

/***/ }),

/***/ 1224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileSizePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Convert bytes into largest possible unit.
 * Takes an precision argument that defaults to 2.
 * Usage:
 *   bytes | fileSize:precision
 * Example:
 *   {{ 1024 |  fileSize}}
 *   formats to: 1 KB
*/
var FileSizePipe = (function () {
    function FileSizePipe() {
        this.units = [
            'bytes',
            'KB',
            'MB',
            'GB',
            'TB',
            'PB'
        ];
    }
    FileSizePipe.prototype.transform = function (bytes, precision) {
        if (bytes === void 0) { bytes = 0; }
        if (precision === void 0) { precision = 2; }
        if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes))
            return '?';
        var unit = 0;
        while (bytes >= 1024) {
            bytes /= 1024;
            unit++;
        }
        return bytes.toFixed(+precision) + ' ' + this.units[unit];
    };
    return FileSizePipe;
}());
FileSizePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'fileSize' })
], FileSizePipe);

//# sourceMappingURL=file-size.pipe.js.map

/***/ }),

/***/ 1225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FonePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Convert bytes into largest possible unit.
 * Takes an precision argument that defaults to 2.
 * Usage:
 *   bytes | fileSize:precision
 * Example:
 *   {{ 1024 |  fileSize}}
 *   formats to: 1 KB
*/
var FonePipe = (function () {
    function FonePipe() {
    }
    FonePipe.prototype.transform = function (value) {
        if (value.length == 10)
            return '(' + value.substr(0, 2) + ') ' + value.substr(2, 4) + '-' + value.substr(6, 4);
        else if (value.length == 11)
            return '(' + value.substr(0, 2) + ') ' + value.substr(2, 5) + '-' + value.substr(7, 4);
        else
            return '';
    };
    return FonePipe;
}());
FonePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'fone' })
], FonePipe);

//# sourceMappingURL=fone.pipe.js.map

/***/ }),

/***/ 1226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WindowRef__ = __webpack_require__(1214);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GraficoComponent = (function () {
    function GraficoComponent(el, winRef) {
        this.el = el;
        this.winRef = winRef;
        this.onInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    GraficoComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(22).then(__webpack_require__.bind(null, 1221)).then(function () {
            return __webpack_require__.e/* import() */(23).then(__webpack_require__.bind(null, 1219));
        }).then(function () {
            _this.render();
            _this.onInit.emit();
        });
    };
    GraficoComponent.prototype.render = function () {
        var options = this.options || {};
        //options.element = this.el.nativeElement.children[0];
        options.element = 'grafico';
        options.data = this.data || [];
        switch (this.type) {
            case 'area':
                this.graph = Morris.Area(options);
                break;
            case 'bar':
                this.graph = Morris.Bar(options);
                break;
            case 'line':
                this.graph = Morris.Line(options);
                break;
            case 'donut':
                this.graph = Morris.Donut(options);
                break;
        }
        $("#grafico svg").css('width', '100%');
        console.log('Conteudo', $("#grafico svg"));
        //$(window).on('resize', function() {
        //  this.graph.redraw()
        //});
    };
    GraficoComponent.prototype.redraw = function () {
        this.graph.redraw();
    };
    GraficoComponent.prototype.add = function (arr) {
        console.log('data source:', arr);
        this.graph.setData(arr);
        this.graph.redraw();
    };
    return GraficoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GraficoComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GraficoComponent.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], GraficoComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], GraficoComponent.prototype, "onInit", void 0);
GraficoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'grafico',
        template: "\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div id=\"grafico\" style=\"width:1317;height:342\"></div>\n      </div>\n     </div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__WindowRef__["a" /* WindowRef */]) === "function" && _c || Object])
], GraficoComponent);

var _a, _b, _c;
//# sourceMappingURL=grafico.component.js.map

/***/ }),

/***/ 1227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageTypePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ImageTypePipe = (function () {
    function ImageTypePipe() {
        this.transf = { 'vnd.openxmlformats-officedocument.wordprocessingml.document': 'winword',
            'vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'excel' };
    }
    ImageTypePipe.prototype.transform = function (value) {
        console.log('ImageType', value);
        var regexp = new RegExp('(.*)\/(.*)');
        var valores = regexp.exec(value);
        var filename = 'file';
        if (valores && valores.length > 1) {
            filename = regexp.exec(value)[2]; //pega pela extensão
        }
        else {
            console.log('Tipo de arquivo não encontrado', value);
        }
        if (this.transf[filename]) {
            filename = this.transf[filename];
        }
        return "assets/img/files/" + filename + ".png";
    };
    return ImageTypePipe;
}());
ImageTypePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'imgtype' })
], ImageTypePipe);

//# sourceMappingURL=image-type.pipe.js.map

/***/ }),

/***/ 1228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginacaoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginacaoComponent = (function () {
    function PaginacaoComponent() {
        this.maxSize = 7;
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._autoHide = false;
    }
    Object.defineProperty(PaginacaoComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    return PaginacaoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PaginacaoComponent.prototype, "id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PaginacaoComponent.prototype, "maxSize", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], PaginacaoComponent.prototype, "pageChange", void 0);
PaginacaoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'paginacao',
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: "\n        <pagination-template  #p=\"paginationApi\"\n                             [id]=\"id\"\n                             [maxSize]=\"maxSize\"\n                             (pageChange)=\"pageChange.emit($event)\">\n            <ul class=\"pagination\" role=\"navigation\" *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n                 <li class=\"page-item\" [class.disabled]=\"p.isFirstPage()\" >\n                    <a class=\"page-link\" href=\"javascript:void(0);\" (click)=\"p.previous()\">\n                      <i class=\"fa fa-arrow-left\"></i>\n                    </a>\n\n                 </li>\n                 <li class=\"page-item\" [class.active]=\"p.getCurrent() === page.value\" *ngFor=\"let page of p.pages\">\n                     <a (click)=\"p.setCurrent(page.value)\" href=\"javascript:void(0);\">{{ page.label }}</a>\n                 </li>\n                 <li class=\"page-item\" [class.disabled]=\"p.isLastPage()\" >\n                     <a  (click)=\"p.next()\" href=\"javascript:void(0);\">\n                        <i class=\"fa fa-arrow-right\"></i>\n                    </a>\n                 </li>\n             </ul>\n          </pagination-template>\n        "
    })
], PaginacaoComponent);

var _a;
//# sourceMappingURL=paginacao.component.js.map

/***/ }),

/***/ 1229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__WindowRef__ = __webpack_require__(1214);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Componente para mostrar dados de resultado de indicadores.
 */
var ResultsetComponent = (function () {
    function ResultsetComponent(zone, winRef, consulta, granularidadeService, util) {
        var _this = this;
        this.zone = zone;
        this.winRef = winRef;
        this.consulta = consulta;
        this.granularidadeService = granularidadeService;
        this.util = util;
        this.granularidade = '';
        this.criterio = 0;
        this.tipo = 0;
        this.enable = false;
        this.colecaoGranularidade = [];
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (value) { return _this.selectGranularidade(value); },
            component: this
        };
    }
    ResultsetComponent.prototype.ngOnInit = function () {
        var _this = this;
        Promise.all([
            __webpack_require__.e/* import() */(21).then(__webpack_require__.bind(null, 1259)),
        ]).then(function () {
            _this.enable = true;
        });
        this.granularidadeService.getAll().subscribe(function (resp) {
            _this.colecaoGranularidade = resp.granularidade;
        }, function (err) { return _this.util.msgErroInfra(err); });
    };
    ResultsetComponent.prototype.ngOnChanges = function (changes) {
        try {
            if (changes.granularidade && changes.granularidade.currentValue) {
                this.tipo_granularidade = changes.granularidade.currentValue;
            }
            if (changes.codigo && changes.codigo.currentValue) {
                this.codigo = changes.codigo.currentValue;
            }
            if (('tipo' in changes) && !changes.tipo && changes.tipo.currentValue && !this.tipo)
                this.loadData();
        }
        catch (e) {
            console.log('erro no changes', e, changes);
        }
    };
    ResultsetComponent.prototype.loadData = function () {
        var _this = this;
        if (this.codigo && this.tipo_granularidade) {
            this.consulta.search(this.codigo, null, this.tipo_granularidade, 'TAB').then(function (resp) {
                console.log('Resultset', resp);
                if (_this.enable) {
                    _this.render(resp.resultset);
                }
            }).catch(function (err) {
                console.log('Erro na consulta:', err);
            });
        }
    };
    ResultsetComponent.prototype.render = function (itens) {
        var columns;
        $('#lista').empty();
        $('#lista').unbind('draw.dt');
        switch (this.tipo_granularidade) {
            case 'BR':
                columns = [];
                break;
            case 'MN':
                columns = [
                    { "title": 'UF', "data": "uf" },
                    { "title": 'Região', "data": "regiao" },
                    { "title": 'Município', "data": "local" }
                ];
                break;
            case 'UF':
                columns = [
                    { "title": 'UF', "data": "uf" },
                    { "title": 'Região', "data": "regiao" }
                ];
                break;
            case 'RG':
                columns = [
                    { "title": 'Região', "data": "regiao" }
                ];
                break;
        }
        var cod = this.codigo.toLowerCase();
        // Renderiza coluna de dados (com os itens retornados - por exemplo os anos)
        Object.keys(itens[0]).forEach(function (key) {
            if (key != 'null' && typeof (itens[0][key]) == 'object') {
                //console.log('Construindo coluna: ',key, typeof(itens[0][key]));
                columns.push({ "title": key, "className": "text-right", "data": key, "render": function (data, type, row) {
                        if (!data)
                            return '';
                        if (type === 'display') {
                            return data[cod].toLocaleString("pt-BR");
                        }
                        else if (type === 'sort') {
                            return data[cod];
                        }
                        else {
                            return data;
                        }
                    }
                });
            }
        });
        console.log('Columns:', columns);
        // Associa os dados a tabela de resulados
        this._dataTable = $('#lista').DataTable({
            //"aLengthMenu": [[25,50,100, -1], [25,50, 100, "Todas"]],
            "bLengthChange": false,
            "iDisplayLength": 50,
            "bProcessing": true,
            "oLanguage": { "sUrl": 'assets/api/langs/datatable-br.json' },
            "columns": columns,
            "order": [[0, 'asc']]
        });
        this._dataTable.rows.add(itens);
        this._dataTable.draw();
        if (this.criterio != 0 && this.granularidade) {
            var granularidades = this.getGranularidades();
            $('#lista').on('draw.dt', function () {
                $("#lista_filter").parent().parent().children().first().html(granularidades);
                $('select#lista_granularidade').change(function (e) {
                    window['angularComponentRef'].zone.run(function () {
                        window['angularComponentRef'].component.selectGranularidade(e.currentTarget.value);
                    });
                });
            });
        }
    };
    ResultsetComponent.prototype.getGranularidades = function () {
        var ans = '<label>Estratificação: <select id="lista_granularidade" name="granularidade" aria-controls="lista" class="form-control input-sm">';
        var selected = '';
        console.log('Tipo', this.tipo);
        for (var _i = 0, _a = this.colecaoGranularidade; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.codigo != 0) {
                selected = (item.sigla == this.tipo) ? 'selected' : '';
                ans += "<option value=\"" + item.sigla + "\" " + selected + ">" + item.descricao + "</option>";
            }
            if (item.sigla == this.granularidade) {
                break;
            }
        }
        ;
        return ans + '</select></label> ';
    };
    ResultsetComponent.prototype.selectGranularidade = function (valor) {
        console.log('Valor repassado:', valor);
        this.tipo_granularidade = valor;
        this._dataTable.destroy();
        //this._dataTable.clear();
        //this._dataTable.draw();
        this.loadData();
    };
    return ResultsetComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ResultsetComponent.prototype, "codigo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ResultsetComponent.prototype, "granularidade", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ResultsetComponent.prototype, "criterio", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ResultsetComponent.prototype, "tipo", void 0);
ResultsetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'resultset',
        template: "\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n          <table id=\"lista\" class=\"responsive table table-striped table-bordered table-hover\" width=\"100%\">\n          </table>\n        </div>\n    </div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__WindowRef__["a" /* WindowRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["r" /* ConsultaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["r" /* ConsultaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["o" /* GranularidadeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["o" /* GranularidadeService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["i" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["i" /* UtilService */]) === "function" && _e || Object])
], ResultsetComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=resultset.component.js.map

/***/ }),

/***/ 1230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_select2_select2_module__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__input_on_off_switch_on_off_switch_module__ = __webpack_require__(507);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartadminFormsLiteModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SmartadminFormsLiteModule = (function () {
    function SmartadminFormsLiteModule() {
    }
    return SmartadminFormsLiteModule;
}());
SmartadminFormsLiteModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]],
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__input_select2_select2_module__["a" /* Select2Module */], __WEBPACK_IMPORTED_MODULE_4__input_on_off_switch_on_off_switch_module__["a" /* OnOffSwitchModule */]
        ]
    })
], SmartadminFormsLiteModule);

//# sourceMappingURL=smartadmin-forms-lite.module.js.map

/***/ }),

/***/ 1231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_script_loader_smartadmin_plugins_bower_components_jquery_easy_pie_chart_dist_jquery_easypiechart_min_js__ = __webpack_require__(1257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_script_loader_smartadmin_plugins_bower_components_jquery_easy_pie_chart_dist_jquery_easypiechart_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_script_loader_smartadmin_plugins_bower_components_jquery_easy_pie_chart_dist_jquery_easypiechart_min_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EasyPieChartContainer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EasyPieChartContainer = (function () {
    function EasyPieChartContainer(container) {
        this.container = container;
        this.counter = 0;
    }
    EasyPieChartContainer.prototype.render = function () {
        $('.easy-pie-chart', this.container.nativeElement).each(function (idx, element) {
            var $this = $(element), barColor = $this.css('color') || $this.data('pie-color'), trackColor = $this.data('pie-track-color') || 'rgba(0,0,0,0.04)', size = parseInt($this.data('pie-size')) || 25;
            $this.easyPieChart({
                barColor: barColor,
                trackColor: trackColor,
                scaleColor: false,
                lineCap: 'butt',
                lineWidth: size / 8.5,
                animate: 1500,
                rotate: -90,
                size: size,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        });
    };
    EasyPieChartContainer.prototype.ngAfterContentChecked = function () {
        var _this = this;
        var counter = $('.easy-pie-chart').length;
        if (counter != this.counter) {
            this.counter = counter;
            setTimeout(function () {
                _this.render();
            }, 25);
        }
    };
    EasyPieChartContainer.prototype.ngAfterContentInit = function () {
        this.render();
    };
    return EasyPieChartContainer;
}());
EasyPieChartContainer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[saEasyPieChartContainer]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], EasyPieChartContainer);

var _a;
//# sourceMappingURL=easy-pie-chart-container.directive.js.map

/***/ }),

/***/ 1232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_script_loader_smartadmin_plugins_bower_components_relayfoods_jquery_sparkline_dist_jquery_sparkline_min_js__ = __webpack_require__(1258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_script_loader_smartadmin_plugins_bower_components_relayfoods_jquery_sparkline_dist_jquery_sparkline_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_script_loader_smartadmin_plugins_bower_components_relayfoods_jquery_sparkline_dist_jquery_sparkline_min_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SparklineContainer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SparklineContainer = (function () {
    function SparklineContainer(el) {
        this.el = el;
        this.container = this.el.nativeElement;
    }
    SparklineContainer.prototype.ngOnInit = function () {
        this.drawSparklines();
    };
    SparklineContainer.prototype.barChart = function ($el) {
        var barColor = $el.data('sparkline-bar-color') || $el.css('color') || '#0000f0';
        var sparklineHeight = $el.data('sparkline-height') || '26px';
        var sparklineBarWidth = $el.data('sparkline-barwidth') || 5;
        var sparklineBarSpacing = $el.data('sparkline-barspacing') || 2;
        var sparklineNegBarColor = $el.data('sparkline-negbar-color') || '#A90329';
        var sparklineStackedColor = $el.data('sparkline-barstacked-color') || ["#A90329", "#0099c6", "#98AA56", "#da532c", "#4490B1", "#6E9461", "#990099", "#B4CAD3"];
        $el.sparkline('html', {
            barColor: barColor,
            type: 'bar',
            height: sparklineHeight,
            barWidth: sparklineBarWidth,
            barSpacing: sparklineBarSpacing,
            stackedBarColor: sparklineStackedColor,
            negBarColor: sparklineNegBarColor,
            zeroAxis: 'false',
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.lineChart = function ($el) {
        var sparklineHeight = $el.data('sparkline-height') || '20px';
        var sparklineWidth = $el.data('sparkline-width') || '90px';
        var thisLineColor = $el.data('sparkline-line-color') || $el.css('color') || '#0000f0';
        var thisLineWidth = $el.data('sparkline-line-width') || 1;
        var thisFill = $el.data('fill-color') || '#c0d0f0';
        var thisSpotColor = $el.data('sparkline-spot-color') || '#f08000';
        var thisMinSpotColor = $el.data('sparkline-minspot-color') || '#ed1c24';
        var thisMaxSpotColor = $el.data('sparkline-maxspot-color') || '#f08000';
        var thishighlightSpotColor = $el.data('sparkline-highlightspot-color') || '#50f050';
        var thisHighlightLineColor = $el.data('sparkline-highlightline-color') || 'f02020';
        var thisSpotRadius = $el.data('sparkline-spotradius') || 1.5;
        var thisChartMinYRange = $el.data('sparkline-min-y');
        var thisChartMaxYRange = $el.data('sparkline-max-y');
        var thisChartMinXRange = $el.data('sparkline-min-x');
        var thisChartMaxXRange = $el.data('sparkline-max-x');
        var thisMinNormValue = $el.data('min-val');
        var thisMaxNormValue = $el.data('max-val');
        var thisNormColor = $el.data('norm-color') || '#c0c0c0';
        var thisDrawNormalOnTop = $el.data('draw-normal') || false;
        $el.sparkline('html', {
            type: 'line',
            width: sparklineWidth,
            height: sparklineHeight,
            lineWidth: thisLineWidth,
            lineColor: thisLineColor,
            fillColor: thisFill,
            spotColor: thisSpotColor,
            minSpotColor: thisMinSpotColor,
            maxSpotColor: thisMaxSpotColor,
            highlightSpotColor: thishighlightSpotColor,
            highlightLineColor: thisHighlightLineColor,
            spotRadius: thisSpotRadius,
            chartRangeMin: thisChartMinYRange,
            chartRangeMax: thisChartMaxYRange,
            chartRangeMinX: thisChartMinXRange,
            chartRangeMaxX: thisChartMaxXRange,
            normalRangeMin: thisMinNormValue,
            normalRangeMax: thisMaxNormValue,
            normalRangeColor: thisNormColor,
            drawNormalOnTop: thisDrawNormalOnTop,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.pieChart = function ($el) {
        var pieColors = $el.data('sparkline-piecolor') || ["#B4CAD3", "#4490B1", "#98AA56", "#da532c", "#6E9461", "#0099c6", "#990099", "#717D8A"];
        var pieWidthHeight = $el.data('sparkline-piesize') || 90;
        var pieBorderColor = $el.data('border-color') || '#45494C';
        var pieOffset = $el.data('sparkline-offset') || 0;
        $el.sparkline('html', {
            type: 'pie',
            width: pieWidthHeight,
            height: pieWidthHeight,
            tooltipFormat: '<span style="color: {{color}}">&#9679;</span> ({{percent.1}}%)',
            sliceColors: pieColors,
            borderWidth: 1,
            offset: pieOffset,
            borderColor: pieBorderColor,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.boxChart = function ($el) {
        var thisBoxWidth = $el.data('sparkline-width') || 'auto';
        var thisBoxHeight = $el.data('sparkline-height') || 'auto';
        var thisBoxRaw = $el.data('sparkline-boxraw');
        var thisBoxTarget = $el.data('sparkline-targetval');
        var thisBoxMin = $el.data('sparkline-min');
        var thisBoxMax = $el.data('sparkline-max');
        var thisShowOutlier = $el.data('sparkline-showoutlier') || true;
        var thisIQR = $el.data('sparkline-outlier-iqr') || 1.5;
        var thisBoxSpotRadius = $el.data('sparkline-spotradius') || 1.5;
        var thisBoxLineColor = $el.css('color') || '#000000';
        var thisBoxFillColor = $el.data('fill-color') || '#c0d0f0';
        var thisBoxWhisColor = $el.data('sparkline-whis-color') || '#000000';
        var thisBoxOutlineColor = $el.data('sparkline-outline-color') || '#303030';
        var thisBoxOutlineFill = $el.data('sparkline-outlinefill-color') || '#f0f0f0';
        var thisBoxMedianColor = $el.data('sparkline-outlinemedian-color') || '#f00000';
        var thisBoxTargetColor = $el.data('sparkline-outlinetarget-color') || '#40a020';
        $el.sparkline('html', {
            type: 'box',
            width: thisBoxWidth,
            height: thisBoxHeight,
            raw: thisBoxRaw,
            target: thisBoxTarget,
            minValue: thisBoxMin,
            maxValue: thisBoxMax,
            showOutliers: thisShowOutlier,
            outlierIQR: thisIQR,
            spotRadius: thisBoxSpotRadius,
            boxLineColor: thisBoxLineColor,
            boxFillColor: thisBoxFillColor,
            whiskerColor: thisBoxWhisColor,
            outlierLineColor: thisBoxOutlineColor,
            outlierFillColor: thisBoxOutlineFill,
            medianColor: thisBoxMedianColor,
            targetColor: thisBoxTargetColor,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.bulletChart = function ($el) {
        var thisBulletHeight = $el.data('sparkline-height') || 'auto';
        var thisBulletWidth = $el.data('sparkline-width') || 2;
        var thisBulletColor = $el.data('sparkline-bullet-color') || '#ed1c24';
        var thisBulletPerformanceColor = $el.data('sparkline-performance-color') || '#3030f0';
        var thisBulletRangeColors = $el.data('sparkline-bulletrange-color') || ["#d3dafe", "#a8b6ff", "#7f94ff"];
        $el.sparkline('html', {
            type: 'bullet',
            height: thisBulletHeight,
            targetWidth: thisBulletWidth,
            targetColor: thisBulletColor,
            performanceColor: thisBulletPerformanceColor,
            rangeColors: thisBulletRangeColors,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.discreteChart = function ($el) {
        var thisDiscreteHeight = $el.data('sparkline-height') || 26;
        var thisDiscreteWidth = $el.data('sparkline-width') || 50;
        var thisDiscreteLineColor = $el.css('color');
        var thisDiscreteLineHeight = $el.data('sparkline-line-height') || 5;
        var thisDiscreteThrushold = $el.data('sparkline-threshold');
        var thisDiscreteThrusholdColor = $el.data('sparkline-threshold-color') || '#ed1c24';
        $el.sparkline('html', {
            type: 'discrete',
            width: thisDiscreteWidth,
            height: thisDiscreteHeight,
            lineColor: thisDiscreteLineColor,
            lineHeight: thisDiscreteLineHeight,
            thresholdValue: thisDiscreteThrushold,
            thresholdColor: thisDiscreteThrusholdColor,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.tristaneChart = function ($el) {
        var thisTristateHeight = $el.data('sparkline-height') || 26;
        var thisTristatePosBarColor = $el.data('sparkline-posbar-color') || '#60f060';
        var thisTristateNegBarColor = $el.data('sparkline-negbar-color') || '#f04040';
        var thisTristateZeroBarColor = $el.data('sparkline-zerobar-color') || '#909090';
        var thisTristateBarWidth = $el.data('sparkline-barwidth') || 5;
        var thisTristateBarSpacing = $el.data('sparkline-barspacing') || 2;
        var thisZeroAxis = $el.data('sparkline-zeroaxis');
        $el.sparkline('html', {
            type: 'tristate',
            height: thisTristateHeight,
            posBarColor: thisTristatePosBarColor,
            negBarColor: thisTristateNegBarColor,
            zeroBarColor: thisTristateZeroBarColor,
            barWidth: thisTristateBarWidth,
            barSpacing: thisTristateBarSpacing,
            zeroAxis: thisZeroAxis,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.compositeBarChart = function ($el) {
        var sparklineHeight = $el.data('sparkline-height') || '20px';
        var sparklineWidth = $el.data('sparkline-width') || '100%';
        var sparklineBarWidth = $el.data('sparkline-barwidth') || 3;
        var thisLineWidth = $el.data('sparkline-line-width') || 1;
        var thisLineColor = $el.data('sparkline-color-top') || '#ed1c24';
        var thisBarColor = $el.data('sparkline-color-bottom') || '#333333';
        $el.sparkline($el.data('sparkline-bar-val'), {
            type: 'bar',
            width: sparklineWidth,
            height: sparklineHeight,
            barColor: thisBarColor,
            barWidth: sparklineBarWidth,
            tooltipContainer: this.container
            //barSpacing: 5
        });
        $el.sparkline($el.data('sparkline-line-val'), {
            width: sparklineWidth,
            height: sparklineHeight,
            lineColor: thisLineColor,
            lineWidth: thisLineWidth,
            composite: true,
            fillColor: false,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.compositeLineChart = function ($el) {
        // @todo webpack gets stuck on chunk optimization if uncomment defaults
        var sparklineHeight = $el.data('sparkline-height'); // || '20px';
        var sparklineWidth = $el.data('sparkline-width'); // || '90px';
        var sparklineValue = $el.data('sparkline-bar-val');
        var sparklineValueSpots1 = $el.data('sparkline-bar-val-spots-top');
        var sparklineValueSpots2 = $el.data('sparkline-bar-val-spots-bottom');
        var thisLineWidth1 = $el.data('sparkline-line-width-top'); //  || 1;
        var thisLineWidth2 = $el.data('sparkline-line-width-bottom'); // || 1;
        var thisLineColor1 = $el.data('sparkline-color-top'); //  || '#333333';
        var thisLineColor2 = $el.data('sparkline-color-bottom'); //  || '#ed1c24';
        var thisSpotRadius1 = $el.data('sparkline-spotradius-top'); // || 1.5;
        var thisSpotRadius2 = $el.data('sparkline-spotradius-bottom'); // || thisSpotRadius1;
        var thisSpotColor = $el.data('sparkline-spot-color'); // || '#f08000';
        var thisMinSpotColor1 = $el.data('sparkline-minspot-color-top'); // || '#ed1c24';
        var thisMaxSpotColor1 = $el.data('sparkline-maxspot-color-top'); //  || '#f08000';
        var thisMinSpotColor2 = $el.data('sparkline-minspot-color-bottom'); // || thisMinSpotColor1;
        var thisMaxSpotColor2 = $el.data('sparkline-maxspot-color-bottom'); //  || thisMaxSpotColor1;
        var thishighlightSpotColor1 = $el.data('sparkline-highlightspot-color-top'); //  || '#50f050';
        var thisHighlightLineColor1 = $el.data('sparkline-highlightline-color-top'); // || '#f02020';
        var thishighlightSpotColor2 = $el.data('sparkline-highlightspot-color-bottom'); // || thishighlightSpotColor1;
        var thisHighlightLineColor2 = $el.data('sparkline-highlightline-color-bottom'); // || thisHighlightLineColor1;
        var thisFillColor1 = $el.data('sparkline-fillcolor-top'); // || 'transparent';
        var thisFillColor2 = $el.data('sparkline-fillcolor-bottom'); // || 'transparent';
        $el.sparkline(sparklineValue, {
            type: 'line',
            spotRadius: thisSpotRadius1,
            spotColor: thisSpotColor,
            minSpotColor: thisMinSpotColor1,
            maxSpotColor: thisMaxSpotColor1,
            highlightSpotColor: thishighlightSpotColor1,
            highlightLineColor: thisHighlightLineColor1,
            valueSpots: sparklineValueSpots1,
            lineWidth: thisLineWidth1,
            width: sparklineWidth,
            height: sparklineHeight,
            lineColor: thisLineColor1,
            fillColor: thisFillColor1,
            tooltipContainer: this.container
        });
        $el.sparkline($el.data('sparkline-line-val'), {
            type: 'line',
            spotRadius: thisSpotRadius2,
            spotColor: thisSpotColor,
            minSpotColor: thisMinSpotColor2,
            maxSpotColor: thisMaxSpotColor2,
            highlightSpotColor: thishighlightSpotColor2,
            highlightLineColor: thisHighlightLineColor2,
            valueSpots: sparklineValueSpots2,
            lineWidth: thisLineWidth2,
            width: sparklineWidth,
            height: sparklineHeight,
            lineColor: thisLineColor2,
            composite: true,
            fillColor: thisFillColor2,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.drawSparklines = function () {
        var _this = this;
        $('.sparkline:not(:has(>canvas))', this.container).each(function (i, el) {
            var $el = $(el), sparklineType = $el.data('sparkline-type') || 'bar';
            if (sparklineType == 'bar') {
                _this.barChart($el);
            }
            if (sparklineType == 'line') {
                _this.lineChart($el);
            }
            if (sparklineType == 'pie') {
                _this.pieChart($el);
            }
            if (sparklineType == 'box') {
                _this.boxChart($el);
            }
            if (sparklineType == 'bullet') {
                _this.bulletChart($el);
            }
            if (sparklineType == 'discrete') {
                _this.discreteChart($el);
            }
            if (sparklineType == 'tristate') {
                _this.tristaneChart($el);
            }
            if (sparklineType == 'compositebar') {
                _this.compositeBarChart($el);
            }
            if (sparklineType == 'compositeline') {
                _this.compositeLineChart($el);
            }
        });
    };
    return SparklineContainer;
}());
SparklineContainer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[saSparklineContainer]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], SparklineContainer);

var _a;
//# sourceMappingURL=sparkline-container.directive.js.map

/***/ }),

/***/ 1233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorrisGraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MorrisGraphComponent = (function () {
    function MorrisGraphComponent(el) {
        this.el = el;
        this.onInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MorrisGraphComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(22/* duplicate */).then(__webpack_require__.bind(null, 1221)).then(function () {
            return __webpack_require__.e/* import() */(23/* duplicate */).then(__webpack_require__.bind(null, 1219));
        }).then(function () {
            _this.render();
            _this.onInit.emit();
        });
    };
    MorrisGraphComponent.prototype.render = function () {
        var options = this.options || {};
        options.element = this.el.nativeElement.children[0];
        options.data = this.data || [];
        switch (this.type) {
            case 'area':
                this.graph = Morris.Area(options);
                break;
            case 'bar':
                this.graph = Morris.Bar(options);
                break;
            case 'line':
                this.graph = Morris.Line(options);
                break;
            case 'donut':
                this.graph = Morris.Donut(options);
                break;
        }
    };
    MorrisGraphComponent.prototype.add = function (arr) {
        this.graph.setData(arr);
        this.graph.redraw();
    };
    return MorrisGraphComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MorrisGraphComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MorrisGraphComponent.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MorrisGraphComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], MorrisGraphComponent.prototype, "onInit", void 0);
MorrisGraphComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-morris-graph',
        template: "\n     <div class=\"chart no-padding\" ></div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], MorrisGraphComponent);

var _a, _b;
//# sourceMappingURL=morris-graph.component.js.map

/***/ }),

/***/ 1234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__morris_graph_component__ = __webpack_require__(1233);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorrisGraphModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MorrisGraphModule = (function () {
    function MorrisGraphModule() {
    }
    return MorrisGraphModule;
}());
MorrisGraphModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__morris_graph_component__["a" /* MorrisGraphComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__morris_graph_component__["a" /* MorrisGraphComponent */]],
    })
], MorrisGraphModule);

//# sourceMappingURL=morris-graph.module.js.map

/***/ }),

/***/ 1235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_component__ = __webpack_require__(510);
/* unused harmony reexport FooterComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_site_component__ = __webpack_require__(509);
/* unused harmony reexport FooterSiteComponent */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activities_message_component__ = __webpack_require__(511);
/* unused harmony reexport ActivitiesMessageComponent */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activities_notification_component__ = __webpack_require__(512);
/* unused harmony reexport ActivitiesNotificationComponent */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activities_task_component__ = __webpack_require__(513);
/* unused harmony reexport ActivitiesTaskComponent */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activities_component__ = __webpack_require__(514);
/* unused harmony reexport ActivitiesComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activities_message__ = __webpack_require__(1236);
/* unused harmony reexport ActivitiesMessageComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activities_task__ = __webpack_require__(1238);
/* unused harmony reexport ActivitiesTaskComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activities_notification__ = __webpack_require__(1237);
/* unused harmony reexport ActivitiesNotificationComponent */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collapse_menu_component__ = __webpack_require__(515);
/* unused harmony reexport CollapseMenuComponent */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__full_screen_component__ = __webpack_require__(516);
/* unused harmony reexport FullScreenComponent */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_component__ = __webpack_require__(518);
/* unused harmony reexport HeaderComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_module__ = __webpack_require__(519);
/* unused harmony reexport HeaderModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_site_component__ = __webpack_require__(517);
/* unused harmony reexport HeaderSiteComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__full_screen__ = __webpack_require__(1241);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__collapse_menu__ = __webpack_require__(1240);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recent_projects__ = __webpack_require__(1243);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__activities__ = __webpack_require__(1239);
/* unused harmony namespace reexport */







//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recent_projects_component__ = __webpack_require__(520);
/* unused harmony reexport RecentProjectsComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recent_projects_service__ = __webpack_require__(521);
/* unused harmony reexport RecentProjectsService */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_switcher_component__ = __webpack_require__(522);
/* unused harmony reexport LayoutSwitcherComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_service__ = __webpack_require__(49);
/* unused harmony reexport LayoutService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_module__ = __webpack_require__(506);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__layout_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer__ = __webpack_require__(1235);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header__ = __webpack_require__(1242);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation__ = __webpack_require__(1245);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ribbon__ = __webpack_require__(1246);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shortcut__ = __webpack_require__(1247);
/* unused harmony namespace reexport */








//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navigation_component__ = __webpack_require__(525);
/* unused harmony reexport NavigationComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__big_breadcrumbs_component__ = __webpack_require__(523);
/* unused harmony reexport BigBreadcrumbsComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__minify_menu_component__ = __webpack_require__(524);
/* unused harmony reexport MinifyMenuComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__smart_menu_directive__ = __webpack_require__(527);
/* unused harmony reexport SmartMenuDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_module__ = __webpack_require__(526);
/* unused harmony reexport NavigationModule */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ribbon_component__ = __webpack_require__(528);
/* unused harmony reexport RibbonComponent */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shortcut_component__ = __webpack_require__(529);
/* unused harmony reexport ShortcutComponent */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatsComponent = (function () {
    function StatsComponent() {
    }
    StatsComponent.prototype.ngOnInit = function () {
    };
    return StatsComponent;
}());
StatsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-stats',
        template: __webpack_require__(1256)
    }),
    __metadata("design:paramtypes", [])
], StatsComponent);

//# sourceMappingURL=stats.component.js.map

/***/ }),

/***/ 1249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressbarDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressbarDirective = (function () {
    function ProgressbarDirective(el) {
        this.el = el;
    }
    ProgressbarDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(26).then(__webpack_require__.bind(null, 1282)).then(function () {
            $(_this.el.nativeElement).progressbar(_this.saProgressbar || {
                display_text: 'fill'
            });
        });
    };
    return ProgressbarDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProgressbarDirective.prototype, "saProgressbar", void 0);
ProgressbarDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[saProgressbar]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], ProgressbarDirective);

var _a;
//# sourceMappingURL=progressbar.directive.js.map

/***/ }),

/***/ 1250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progressbar_directive__ = __webpack_require__(1249);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartProgressbarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SmartProgressbarModule = (function () {
    function SmartProgressbarModule() {
    }
    return SmartProgressbarModule;
}());
SmartProgressbarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__progressbar_directive__["a" /* ProgressbarDirective */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__progressbar_directive__["a" /* ProgressbarDirective */]],
    })
], SmartProgressbarModule);

//# sourceMappingURL=smart-progressbar.module.js.map

/***/ }),

/***/ 1251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    grid: 'article',
    widgets: '.jarviswidget',
    localStorage: true,
    deleteSettingsKey: '#deletesettingskey-options',
    settingsKeyLabel: 'Reset settings?',
    deletePositionKey: '#deletepositionkey-options',
    positionKeyLabel: 'Reset position?',
    sortable: true,
    buttonsHidden: false,
    // toggle button
    toggleButton: true,
    toggleClass: 'fa fa-minus | fa fa-plus',
    toggleSpeed: 200,
    onToggle: function () {
    },
    // delete btn
    deleteButton: true,
    deleteMsg: 'Warning: This action cannot be undone!',
    deleteClass: 'fa fa-times',
    deleteSpeed: 200,
    onDelete: function () {
    },
    // edit btn
    editButton: true,
    editPlaceholder: '.jarviswidget-editbox',
    editClass: 'fa fa-cog | fa fa-save',
    editSpeed: 200,
    onEdit: function () {
    },
    // color button
    colorButton: true,
    // full screen
    fullscreenButton: true,
    fullscreenClass: 'fa fa-expand | fa fa-compress',
    fullscreenDiff: 3,
    onFullscreen: function () {
    },
    // custom btn
    customButton: false,
    customClass: 'folder-10 | next-10',
    customStart: function () {
        alert('Hello you, this is a custom button...');
    },
    customEnd: function () {
        alert('bye, till next time...');
    },
    // order
    buttonOrder: '%refresh% %custom% %edit% %toggle% %fullscreen% %delete%',
    opacity: 1.0,
    dragHandle: '> header',
    placeholderClass: 'jarviswidget-placeholder',
    indicator: true,
    indicatorTime: 600,
    ajax: true,
    timestampPlaceholder: '.jarviswidget-timestamp',
    timestampFormat: 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
    refreshButton: true,
    refreshButtonClass: 'fa fa-refresh',
    labelError: 'Sorry but there was a error:',
    labelUpdated: 'Last Update:',
    labelRefresh: 'Refresh',
    labelDelete: 'Delete widget:',
    afterLoad: function () {
    },
    rtl: false,
    onChange: function () {
    },
    onSave: function () {
    },
    ajaxnav: true
};
//# sourceMappingURL=widget.defaults.js.map

/***/ }),

/***/ 1252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetComponent = WidgetComponent_1 = (function () {
    function WidgetComponent(el, route, router) {
        this.el = el;
        this.route = route;
        this.router = router;
        this.colorbutton = true;
        this.editbutton = true;
        this.togglebutton = true;
        this.deletebutton = true;
        this.fullscreenbutton = true;
        this.custombutton = false;
        this.collapsed = false;
        this.sortable = true;
        this.hidden = false;
        this.load = false;
        this.refresh = false;
    }
    WidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.widgetId = this.genId();
        var widget = this.el.nativeElement.children[0];
        if (this.sortable) {
            widget.className += ' jarviswidget-sortable';
        }
        if (this.color) {
            widget.className += (' jarviswidget-color-' + this.color);
        }
        ['colorbutton',
            'editbutton',
            'togglebutton',
            'deletebutton',
            'fullscreenbutton',
            'custombutton',
            'sortable'
        ].forEach(function (option) {
            if (!_this[option]) {
                widget.setAttribute('data-widget-' + option, 'false');
            }
        });
        [
            'hidden',
            'collapsed'
        ].forEach(function (option) {
            if (_this[option]) {
                widget.setAttribute('data-widget-' + option, 'true');
            }
        });
        // ['refresh', 'load'].forEach(function (option) {
        //   if (this[option])
        //     widgetProps['data-widget-' + option] = this[option]
        // }.bind(this));
    };
    WidgetComponent.prototype.genId = function () {
        if (this.name) {
            return this.name;
        }
        else {
            var heading = this.el.nativeElement.querySelector('header h2');
            var id = heading ? heading.textContent.trim() : 'jarviswidget-' + WidgetComponent_1.counter++;
            id = id.toLowerCase().replace(/\W+/gm, '-');
            var url = this.router.url.substr(1).replace(/\//g, '-');
            id = url + '--' + id;
            return id;
        }
    };
    WidgetComponent.prototype.ngAfterViewInit = function () {
        var $widget = $(this.el.nativeElement);
        if (this.editbutton) {
            $widget.find('.widget-body').prepend('<div class="jarviswidget-editbox"><input class="form-control" type="text"></div>');
        }
        var isFiller = $widget.hasClass('sa-fx-col');
        if ($widget.attr('class')) {
            $widget.find('.jarviswidget').addClass($widget.attr('class'));
            $widget.attr('class', '');
        }
        if (isFiller) {
            $widget.attr('class', 'sa-fx-col');
        }
    };
    return WidgetComponent;
}());
WidgetComponent.counter = 0;
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], WidgetComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "colorbutton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "editbutton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "togglebutton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "deletebutton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "fullscreenbutton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "custombutton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "collapsed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "sortable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "hidden", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], WidgetComponent.prototype, "color", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "load", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WidgetComponent.prototype, "refresh", void 0);
WidgetComponent = WidgetComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-widget',
        template: "<div id=\"{{widgetId}}\" class=\"jarviswidget\"\n    \n  ><ng-content></ng-content></div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], WidgetComponent);

var WidgetComponent_1, _a, _b, _c;
//# sourceMappingURL=widget.component.js.map

/***/ }),

/***/ 1253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget_defaults__ = __webpack_require__(1251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_smartadmin_plugins_smartwidgets_jarvis_widget_ng2_js__ = __webpack_require__(1261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_smartadmin_plugins_smartwidgets_jarvis_widget_ng2_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_smartadmin_plugins_smartwidgets_jarvis_widget_ng2_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsGridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetsGridComponent = (function () {
    function WidgetsGridComponent(el) {
        this.el = el;
    }
    WidgetsGridComponent.prototype.ngAfterViewInit = function () {
        $('#widgets-grid', this.el.nativeElement).jarvisWidgets(__WEBPACK_IMPORTED_MODULE_1__widget_defaults__["a" /* default */]);
    };
    return WidgetsGridComponent;
}());
WidgetsGridComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-widgets-grid',
        template: "\n     <section id=\"widgets-grid\">\n       <ng-content></ng-content>\n     </section>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], WidgetsGridComponent);

var _a;
//# sourceMappingURL=widgets-grid.component.js.map

/***/ }),

/***/ 1254:
/***/ (function(module, exports) {

module.exports = "/**!\n * easyPieChart\n * Lightweight plugin to render simple, animated and retina optimized pie charts\n *\n * @license \n * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)\n * @version 2.1.6\n **/\n!function(a,b){\"object\"==typeof exports?module.exports=b(require(\"jquery\")):\"function\"==typeof define&&define.amd?define([\"jquery\"],b):b(a.jQuery)}(this,function(a){var b=function(a,b){var c,d=document.createElement(\"canvas\");a.appendChild(d),\"undefined\"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(d);var e=d.getContext(\"2d\");d.width=d.height=b.size;var f=1;window.devicePixelRatio>1&&(f=window.devicePixelRatio,d.style.width=d.style.height=[b.size,\"px\"].join(\"\"),d.width=d.height=b.size*f,e.scale(f,f)),e.translate(b.size/2,b.size/2),e.rotate((-0.5+b.rotate/180)*Math.PI);var g=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(g-=b.scaleLength+2),Date.now=Date.now||function(){return+new Date};var h=function(a,b,c){c=Math.min(Math.max(-1,c||0),1);var d=0>=c?!0:!1;e.beginPath(),e.arc(0,0,g,0,2*Math.PI*c,d),e.strokeStyle=a,e.lineWidth=b,e.stroke()},i=function(){var a,c;e.lineWidth=1,e.fillStyle=b.scaleColor,e.save();for(var d=24;d>0;--d)d%6===0?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),e.fillRect(-b.size/2+a,0,c,1),e.rotate(Math.PI/12);e.restore()},j=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),k=function(){b.scaleColor&&i(),b.trackColor&&h(b.trackColor,b.trackWidth||b.lineWidth,1)};this.getCanvas=function(){return d},this.getCtx=function(){return e},this.clear=function(){e.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){b.scaleColor||b.trackColor?e.getImageData&&e.putImageData?c?e.putImageData(c,0,0):(k(),c=e.getImageData(0,0,b.size*f,b.size*f)):(this.clear(),k()):this.clear(),e.lineCap=b.lineCap;var d;d=\"function\"==typeof b.barColor?b.barColor(a):b.barColor,h(d,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate.duration),g=b.easing(this,f,a,c-a,b.animate.duration);this.draw(g),b.onStep(a,c,g),f>=b.animate.duration?b.onStop(a,c):j(e)}.bind(this);j(e)}.bind(this)},c=function(a,c){var d={barColor:\"#ef1e25\",trackColor:\"#f9f9f9\",scaleColor:\"#dfe0e0\",scaleLength:5,lineCap:\"round\",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(a,b,c,d,e){return b/=e/2,1>b?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(){},onStep:function(){},onStop:function(){}};if(\"undefined\"!=typeof b)d.renderer=b;else{if(\"undefined\"==typeof SVGRenderer)throw new Error(\"Please load either the SVG- or the CanvasRenderer\");d.renderer=SVGRenderer}var e={},f=0,g=function(){this.el=a,this.options=e;for(var b in d)d.hasOwnProperty(b)&&(e[b]=c&&\"undefined\"!=typeof c[b]?c[b]:d[b],\"function\"==typeof e[b]&&(e[b]=e[b].bind(this)));e.easing=\"string\"==typeof e.easing&&\"undefined\"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[e.easing])?jQuery.easing[e.easing]:d.easing,\"number\"==typeof e.animate&&(e.animate={duration:e.animate,enabled:!0}),\"boolean\"!=typeof e.animate||e.animate||(e.animate={duration:1e3,enabled:e.animate}),this.renderer=new e.renderer(a,e),this.renderer.draw(f),a.dataset&&a.dataset.percent?this.update(parseFloat(a.dataset.percent)):a.getAttribute&&a.getAttribute(\"data-percent\")&&this.update(parseFloat(a.getAttribute(\"data-percent\")))}.bind(this);this.update=function(a){return a=parseFloat(a),e.animate.enabled?this.renderer.animate(f,a):this.renderer.draw(a),f=a,this}.bind(this),this.disableAnimation=function(){return e.animate.enabled=!1,this},this.enableAnimation=function(){return e.animate.enabled=!0,this},g()};a.fn.easyPieChart=function(b){return this.each(function(){var d;a.data(this,\"easyPieChart\")||(d=a.extend({},b,a(this).data()),a.data(this,\"easyPieChart\",new c(this,d)))})}});"

/***/ }),

/***/ 1255:
/***/ (function(module, exports) {

module.exports = "/* jquery.sparkline 2.1.3 - http://omnipotent.net/jquery.sparkline/ \n Licensed under the New BSD License - see above site for details */\n!function(a,b,c){!function(a){\"function\"==typeof define&&define.amd?define([\"jquery\"],a):jQuery&&!jQuery.fn.sparkline&&a(jQuery)}(function(d){\"use strict\";var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K={},L=0;e=function(){return{common:{type:\"line\",lineColor:\"#00f\",fillColor:\"#cdf\",defaultPixelsPerValue:3,width:\"auto\",height:\"auto\",composite:!1,tagValuesAttribute:\"values\",tagOptionsPrefix:\"spark\",enableTagOptions:!1,enableHighlight:!0,highlightLighten:1.4,tooltipSkipNull:!0,tooltipPrefix:\"\",tooltipSuffix:\"\",disableHiddenCheck:!1,numberFormatter:!1,numberDigitGroupCount:3,numberDigitGroupSep:\",\",numberDecimalMark:\".\",disableTooltips:!1,disableInteraction:!1},line:{spotColor:\"#f80\",highlightSpotColor:\"#5f5\",highlightLineColor:\"#f22\",spotRadius:1.5,minSpotColor:\"#f80\",maxSpotColor:\"#f80\",lineWidth:1,normalRangeMin:c,normalRangeMax:c,normalRangeColor:\"#ccc\",drawNormalOnTop:!1,chartRangeMin:c,chartRangeMax:c,chartRangeMinX:c,chartRangeMaxX:c,tooltipFormat:new g('<span style=\"color: {{color}}\">&#9679;</span> {{prefix}}{{y}}{{suffix}}')},bar:{barColor:\"#3366cc\",negBarColor:\"#f44\",stackedBarColor:[\"#3366cc\",\"#dc3912\",\"#ff9900\",\"#109618\",\"#66aa00\",\"#dd4477\",\"#0099c6\",\"#990099\"],zeroColor:c,nullColor:c,zeroAxis:!0,barWidth:4,barSpacing:1,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,colorMap:c,tooltipFormat:new g('<span style=\"color: {{color}}\">&#9679;</span> {{prefix}}{{value}}{{suffix}}')},tristate:{barWidth:4,barSpacing:1,posBarColor:\"#6f6\",negBarColor:\"#f44\",zeroBarColor:\"#999\",colorMap:{},tooltipFormat:new g('<span style=\"color: {{color}}\">&#9679;</span> {{value:map}}'),tooltipValueLookups:{map:{\"-1\":\"Loss\",0:\"Draw\",1:\"Win\"}}},discrete:{lineHeight:\"auto\",thresholdColor:c,thresholdValue:0,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,tooltipFormat:new g(\"{{prefix}}{{value}}{{suffix}}\")},bullet:{targetColor:\"#f33\",targetWidth:3,performanceColor:\"#33f\",rangeColors:[\"#d3dafe\",\"#a8b6ff\",\"#7f94ff\"],base:c,tooltipFormat:new g(\"{{fieldkey:fields}} - {{value}}\"),tooltipValueLookups:{fields:{r:\"Range\",p:\"Performance\",t:\"Target\"}}},pie:{offset:0,sliceColors:[\"#3366cc\",\"#dc3912\",\"#ff9900\",\"#109618\",\"#66aa00\",\"#dd4477\",\"#0099c6\",\"#990099\"],borderWidth:0,borderColor:\"#000\",tooltipFormat:new g('<span style=\"color: {{color}}\">&#9679;</span> {{value}} ({{percent.1}}%)')},box:{raw:!1,boxLineColor:\"#000\",boxFillColor:\"#cdf\",whiskerColor:\"#000\",outlierLineColor:\"#333\",outlierFillColor:\"#fff\",medianColor:\"#f00\",showOutliers:!0,outlierIQR:1.5,spotRadius:1.5,target:c,targetColor:\"#4a2\",chartRangeMax:c,chartRangeMin:c,tooltipFormat:new g(\"{{field:fields}}: {{value}}\"),tooltipFormatFieldlistKey:\"field\",tooltipValueLookups:{fields:{lq:\"Lower Quartile\",med:\"Median\",uq:\"Upper Quartile\",lo:\"Left Outlier\",ro:\"Right Outlier\",lw:\"Left Whisker\",rw:\"Right Whisker\"}}}}},D='.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)\";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;box-sizing: content-box;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}',f=function(){var a,b;return a=function(){this.init.apply(this,arguments)},arguments.length>1?(arguments[0]?(a.prototype=d.extend(new arguments[0],arguments[arguments.length-1]),a._super=arguments[0].prototype):a.prototype=arguments[arguments.length-1],arguments.length>2&&(b=Array.prototype.slice.call(arguments,1,-1),b.unshift(a.prototype),d.extend.apply(d,b))):a.prototype=arguments[0],a.prototype.cls=a,a},d.SPFormatClass=g=f({fre:/\\{\\{([\\w.]+?)(:(.+?))?\\}\\}/g,precre:/(\\w+)\\.(\\d+)/,init:function(a,b){this.format=a,this.fclass=b},render:function(a,b,d){var e,f,g,h,i,j=this,k=a;return this.format.replace(this.fre,function(){var a;return f=arguments[1],g=arguments[3],e=j.precre.exec(f),e?(i=e[2],f=e[1]):i=!1,h=k[f],h===c?\"\":g&&b&&b[g]?(a=b[g],a.get?b[g].get(h)||h:b[g][h]||h):(m(h)&&(h=d.get(\"numberFormatter\")?d.get(\"numberFormatter\")(h):r(h,i,d.get(\"numberDigitGroupCount\"),d.get(\"numberDigitGroupSep\"),d.get(\"numberDecimalMark\"))),h)})}}),d.spformat=function(a,b){return new g(a,b)},h=function(a,b,c){return b>a?b:a>c?c:a},i=function(a,c){var d;return 2===c?(d=b.floor(a.length/2),a.length%2?a[d]:(a[d-1]+a[d])/2):a.length%2?(d=(a.length*c+c)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1]):(d=(a.length*c+2)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1])},j=function(a){var b;switch(a){case\"undefined\":a=c;break;case\"null\":a=null;break;case\"true\":a=!0;break;case\"false\":a=!1;break;default:b=parseFloat(a),a==b&&(a=b)}return a},k=function(a){var b,c=[];for(b=a.length;b--;)c[b]=j(a[b]);return c},l=function(a,b){var c,d,e=[];for(c=0,d=a.length;d>c;c++)a[c]!==b&&e.push(a[c]);return e},m=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},r=function(a,b,c,e,f){var g,h;for(a=(b===!1?parseFloat(a).toString():a.toFixed(b)).split(\"\"),g=(g=d.inArray(\".\",a))<0?a.length:g,g<a.length&&(a[g]=f),h=g-c;h>0;h-=c)a.splice(h,0,e);return a.join(\"\")},n=function(a,b,c){var d;for(d=b.length;d--;)if((!c||null!==b[d])&&b[d]!==a)return!1;return!0},o=function(a){var b,c=0;for(b=a.length;b--;)c+=\"number\"==typeof a[b]?a[b]:0;return c},q=function(a){return d.isArray(a)?a:[a]},p=function(b){var c,d;if(a.createStyleSheet)try{return a.createStyleSheet().cssText=b,void 0}catch(e){d=!0}c=a.createElement(\"style\"),c.type=\"text/css\",a.getElementsByTagName(\"head\")[0].appendChild(c),d?a.styleSheets[a.styleSheets.length-1].cssText=b:c[\"string\"==typeof a.body.style.WebkitAppearance?\"innerText\":\"innerHTML\"]=b},d.fn.simpledraw=function(b,e,f,g){var h,i;if(f&&(h=this.data(\"_jqs_vcanvas\")))return h;if(d.fn.sparkline.canvas===!1)return!1;if(d.fn.sparkline.canvas===c){var j=a.createElement(\"canvas\");if(j.getContext&&j.getContext(\"2d\"))d.fn.sparkline.canvas=function(a,b,c,d){return new H(a,b,c,d)};else{if(!a.namespaces||a.namespaces.v)return d.fn.sparkline.canvas=!1,!1;a.namespaces.add(\"v\",\"urn:schemas-microsoft-com:vml\",\"#default#VML\"),d.fn.sparkline.canvas=function(a,b,c){return new I(a,b,c)}}}return b===c&&(b=d(this).innerWidth()),e===c&&(e=d(this).innerHeight()),h=d.fn.sparkline.canvas(b,e,this,g),i=d(this).data(\"_jqs_mhandler\"),i&&i.registerCanvas(h),h},d.fn.cleardraw=function(){var a=this.data(\"_jqs_vcanvas\");a&&a.reset()},d.RangeMapClass=s=f({init:function(a){var b,c,d=[];for(b in a)a.hasOwnProperty(b)&&\"string\"==typeof b&&b.indexOf(\":\")>-1&&(c=b.split(\":\"),c[0]=0===c[0].length?-1/0:parseFloat(c[0]),c[1]=0===c[1].length?1/0:parseFloat(c[1]),c[2]=a[b],d.push(c));this.map=a,this.rangelist=d||!1},get:function(a){var b,d,e,f=this.rangelist;if((e=this.map[a])!==c)return e;if(f)for(b=f.length;b--;)if(d=f[b],d[0]<=a&&d[1]>=a)return d[2];return c}}),d.range_map=function(a){return new s(a)},t=f({init:function(a,b){var c=d(a);this.$el=c,this.options=b,this.currentPageX=0,this.currentPageY=0,this.el=a,this.splist=[],this.tooltip=null,this.over=!1,this.displayTooltips=!b.get(\"disableTooltips\"),this.highlightEnabled=!b.get(\"disableHighlight\")},registerSparkline:function(a){this.splist.push(a),this.over&&this.updateDisplay()},registerCanvas:function(a){var b=d(a.canvas);this.canvas=a,this.$canvas=b,b.mouseenter(d.proxy(this.mouseenter,this)),b.mouseleave(d.proxy(this.mouseleave,this)),b.click(d.proxy(this.mouseclick,this))},reset:function(a){this.splist=[],this.tooltip&&a&&(this.tooltip.remove(),this.tooltip=c)},mouseclick:function(a){var b=d.Event(\"sparklineClick\");b.originalEvent=a,b.sparklines=this.splist,this.$el.trigger(b)},mouseenter:function(b){d(a.body).unbind(\"mousemove.jqs\"),d(a.body).bind(\"mousemove.jqs\",d.proxy(this.mousemove,this)),this.over=!0,this.currentPageX=b.pageX,this.currentPageY=b.pageY,this.currentEl=b.target,!this.tooltip&&this.displayTooltips&&(this.tooltip=new u(this.options),this.tooltip.updatePosition(b.pageX,b.pageY)),this.updateDisplay()},mouseleave:function(){d(a.body).unbind(\"mousemove.jqs\");var b,c,e=this.splist,f=e.length,g=!1;for(this.over=!1,this.currentEl=null,this.tooltip&&(this.tooltip.remove(),this.tooltip=null),c=0;f>c;c++)b=e[c],b.clearRegionHighlight()&&(g=!0);g&&this.canvas.render()},mousemove:function(a){this.currentPageX=a.pageX,this.currentPageY=a.pageY,this.currentEl=a.target,this.tooltip&&this.tooltip.updatePosition(a.pageX,a.pageY),this.updateDisplay()},updateDisplay:function(){var a,b,c,e,f,g=this.splist,h=g.length,i=!1,j=this.$canvas.offset(),k=this.currentPageX-j.left,l=this.currentPageY-j.top;if(this.over){for(c=0;h>c;c++)b=g[c],e=b.setRegionHighlight(this.currentEl,k,l),e&&(i=!0);if(i){if(f=d.Event(\"sparklineRegionChange\"),f.sparklines=this.splist,this.$el.trigger(f),this.tooltip){for(a=\"\",c=0;h>c;c++)b=g[c],a+=b.getCurrentRegionTooltip();this.tooltip.setContent(a)}this.disableHighlight||this.canvas.render()}null===e&&this.mouseleave()}}}),u=f({sizeStyle:\"position: static !important;display: block !important;visibility: hidden !important;float: left !important;\",init:function(b){var c,e=b.get(\"tooltipClassname\",\"jqstooltip\"),f=this.sizeStyle;this.container=b.get(\"tooltipContainer\")||a.body,this.tooltipOffsetX=b.get(\"tooltipOffsetX\",10),this.tooltipOffsetY=b.get(\"tooltipOffsetY\",12),d(\"#jqssizetip\").remove(),d(\"#jqstooltip\").remove(),this.sizetip=d(\"<div/>\",{id:\"jqssizetip\",style:f,\"class\":e}),this.tooltip=d(\"<div/>\",{id:\"jqstooltip\",\"class\":e}).appendTo(this.container),c=this.tooltip.offset(),this.offsetLeft=c.left,this.offsetTop=c.top,this.hidden=!0,d(window).unbind(\"resize.jqs scroll.jqs\"),d(window).bind(\"resize.jqs scroll.jqs\",d.proxy(this.updateWindowDims,this)),this.updateWindowDims()},updateWindowDims:function(){this.scrollTop=d(window).scrollTop(),this.scrollLeft=d(window).scrollLeft(),this.scrollRight=this.scrollLeft+d(window).width(),this.updatePosition()},getSize:function(a){this.sizetip.html(a).appendTo(this.container),this.width=this.sizetip.width()+1,this.height=this.sizetip.height(),this.sizetip.remove()},setContent:function(a){return a?(this.getSize(a),this.tooltip.html(a).css({width:this.width,height:this.height,visibility:\"visible\"}),this.hidden&&(this.hidden=!1,this.updatePosition()),void 0):(this.tooltip.css(\"visibility\",\"hidden\"),this.hidden=!0,void 0)},updatePosition:function(a,b){if(a===c){if(this.mousex===c)return;a=this.mousex-this.offsetLeft,b=this.mousey-this.offsetTop}else this.mousex=a-=this.offsetLeft,this.mousey=b-=this.offsetTop;this.height&&this.width&&!this.hidden&&(b-=this.height+this.tooltipOffsetY,a+=this.tooltipOffsetX,b<this.scrollTop&&(b=this.scrollTop),a<this.scrollLeft?a=this.scrollLeft:a+this.width>this.scrollRight&&(a=this.scrollRight-this.width),this.tooltip.css({left:a,top:b}))},remove:function(){this.tooltip.remove(),this.sizetip.remove(),this.sizetip=this.tooltip=c,d(window).unbind(\"resize.jqs scroll.jqs\")}}),E=function(){p(D)},d(E),J=[],d.fn.sparkline=function(b,e){return this.each(function(){var f,g,h=new d.fn.sparkline.options(this,e),i=d(this);if(f=function(){var e,f,g,j,k,l,m;return\"html\"===b||b===c?(m=this.getAttribute(h.get(\"tagValuesAttribute\")),(m===c||null===m)&&(m=i.html()),e=m.replace(/(^\\s*<!--)|(-->\\s*$)|\\s+/g,\"\").split(\",\")):e=b,f=\"auto\"===h.get(\"width\")?e.length*h.get(\"defaultPixelsPerValue\"):h.get(\"width\"),\"auto\"===h.get(\"height\")?h.get(\"composite\")&&d.data(this,\"_jqs_vcanvas\")||(j=a.createElement(\"span\"),j.innerHTML=\"a\",i.html(j),g=d(j).innerHeight()||d(j).height(),d(j).remove(),j=null):g=h.get(\"height\"),h.get(\"disableInteraction\")?k=!1:(k=d.data(this,\"_jqs_mhandler\"),k?h.get(\"composite\")||k.reset():(k=new t(this,h),d.data(this,\"_jqs_mhandler\",k))),h.get(\"composite\")&&!d.data(this,\"_jqs_vcanvas\")?(d.data(this,\"_jqs_errnotify\")||(alert(\"Attempted to attach a composite sparkline to an element with no existing sparkline\"),d.data(this,\"_jqs_errnotify\",!0)),void 0):(l=new(d.fn.sparkline[h.get(\"type\")])(this,e,h,f,g),l.render(),k&&k.registerSparkline(l),void 0)},d(this).html()&&!h.get(\"disableHiddenCheck\")&&d(this).is(\":hidden\")||!d(this).parents(\"body\").length){if(!h.get(\"composite\")&&d.data(this,\"_jqs_pending\"))for(g=J.length;g;g--)J[g-1][0]==this&&J.splice(g-1,1);J.push([this,f]),d.data(this,\"_jqs_pending\",!0)}else f.call(this)})},d.fn.sparkline.defaults=e(),d.sparkline_display_visible=function(){var a,b,c,e=[];for(b=0,c=J.length;c>b;b++)a=J[b][0],d(a).is(\":visible\")&&!d(a).parents().is(\":hidden\")?(J[b][1].call(a),d.data(J[b][0],\"_jqs_pending\",!1),e.push(b)):d(a).closest(\"html\").length||d.data(a,\"_jqs_pending\")||(d.data(J[b][0],\"_jqs_pending\",!1),e.push(b));for(b=e.length;b;b--)J.splice(e[b-1],1)},d.fn.sparkline.options=f({init:function(a,b){var c,e,f,g;this.userOptions=b=b||{},this.tag=a,this.tagValCache={},e=d.fn.sparkline.defaults,f=e.common,this.tagOptionsPrefix=b.enableTagOptions&&(b.tagOptionsPrefix||f.tagOptionsPrefix),g=this.getTagSetting(\"type\"),c=g===K?e[b.type||f.type]:e[g],this.mergedOptions=d.extend({},f,c,b)},getTagSetting:function(a){var b,d,e,f,g=this.tagOptionsPrefix;if(g===!1||g===c)return K;if(this.tagValCache.hasOwnProperty(a))b=this.tagValCache.key;else{if(b=this.tag.getAttribute(g+a),b===c||null===b)b=K;else if(\"[\"===b.substr(0,1))for(b=b.substr(1,b.length-2).split(\",\"),d=b.length;d--;)b[d]=j(b[d].replace(/(^\\s*)|(\\s*$)/g,\"\"));else if(\"{\"===b.substr(0,1))for(e=b.substr(1,b.length-2).split(\",\"),b={},d=e.length;d--;)f=e[d].split(\":\",2),b[f[0].replace(/(^\\s*)|(\\s*$)/g,\"\")]=j(f[1].replace(/(^\\s*)|(\\s*$)/g,\"\"));else b=j(b);this.tagValCache.key=b}return b},get:function(a,b){var d,e=this.getTagSetting(a);return e!==K?e:(d=this.mergedOptions[a])===c?b:d}}),d.fn.sparkline._base=f({disabled:!1,init:function(a,b,e,f,g){this.el=a,this.$el=d(a),this.values=b,this.options=e,this.width=f,this.height=g,this.currentRegion=c},initTarget:function(){var a=!this.options.get(\"disableInteraction\");(this.target=this.$el.simpledraw(this.width,this.height,this.options.get(\"composite\"),a))?(this.canvasWidth=this.target.pixelWidth,this.canvasHeight=this.target.pixelHeight):this.disabled=!0},render:function(){return this.disabled?(this.el.innerHTML=\"\",!1):!0},getRegion:function(){},setRegionHighlight:function(a,b,d){var e,f=this.currentRegion,g=!this.options.get(\"disableHighlight\");return b>this.canvasWidth||d>this.canvasHeight||0>b||0>d?null:(e=this.getRegion(a,b,d),f!==e?(f!==c&&g&&this.removeHighlight(),this.currentRegion=e,e!==c&&g&&this.renderHighlight(),!0):!1)},clearRegionHighlight:function(){return this.currentRegion!==c?(this.removeHighlight(),this.currentRegion=c,!0):!1},renderHighlight:function(){this.changeHighlight(!0)},removeHighlight:function(){this.changeHighlight(!1)},changeHighlight:function(){},getCurrentRegionTooltip:function(){var a,b,e,f,h,i,j,k,l,m,n,o,p,q,r=this.options,s=\"\",t=[];if(this.currentRegion===c)return\"\";if(a=this.getCurrentRegionFields(),n=r.get(\"tooltipFormatter\"))return n(this,r,a);if(r.get(\"tooltipChartTitle\")&&(s+='<div class=\"jqs jqstitle\">'+r.get(\"tooltipChartTitle\")+\"</div>\\n\"),b=this.options.get(\"tooltipFormat\"),!b)return\"\";if(d.isArray(b)||(b=[b]),d.isArray(a)||(a=[a]),j=this.options.get(\"tooltipFormatFieldlist\"),k=this.options.get(\"tooltipFormatFieldlistKey\"),j&&k){for(l=[],i=a.length;i--;)m=a[i][k],-1!=(q=d.inArray(m,j))&&(l[q]=a[i]);a=l}for(e=b.length,p=a.length,i=0;e>i;i++)for(o=b[i],\"string\"==typeof o&&(o=new g(o)),f=o.fclass||\"jqsfield\",q=0;p>q;q++)a[q].isNull&&r.get(\"tooltipSkipNull\")||(d.extend(a[q],{prefix:r.get(\"tooltipPrefix\"),suffix:r.get(\"tooltipSuffix\")}),h=o.render(a[q],r.get(\"tooltipValueLookups\"),r),t.push('<div class=\"'+f+'\">'+h+\"</div>\"));return t.length?s+t.join(\"\\n\"):\"\"},getCurrentRegionFields:function(){},calcHighlightColor:function(a,c){var d,e,f,g,i=c.get(\"highlightColor\"),j=c.get(\"highlightLighten\");if(i)return i;if(j&&(d=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a)||/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a))){for(f=[],e=4===a.length?16:1,g=0;3>g;g++)f[g]=h(b.round(parseInt(d[g+1],16)*e*j),0,255);return\"rgb(\"+f.join(\",\")+\")\"}return a}}),v={changeHighlight:function(a){var b,c=this.currentRegion,e=this.target,f=this.regionShapes[c];f&&(b=this.renderRegion(c,a),d.isArray(b)||d.isArray(f)?(e.replaceWithShapes(f,b),this.regionShapes[c]=d.map(b,function(a){return a.id})):(e.replaceWithShape(f,b),this.regionShapes[c]=b.id))},render:function(){var a,b,c,e,f=this.values,g=this.target,h=this.regionShapes;if(this.cls._super.render.call(this)){for(c=f.length;c--;)if(a=this.renderRegion(c))if(d.isArray(a)){for(b=[],e=a.length;e--;)a[e].append(),b.push(a[e].id);h[c]=b}else a.append(),h[c]=a.id;else h[c]=null;g.render()}}},d.fn.sparkline.line=w=f(d.fn.sparkline._base,{type:\"line\",init:function(a,b,c,d,e){w._super.init.call(this,a,b,c,d,e),this.vertices=[],this.regionMap=[],this.xvalues=[],this.yvalues=[],this.yminmax=[],this.hightlightSpotId=null,this.lastShapeId=null,this.initTarget()},getRegion:function(a,b){var d,e=this.regionMap;for(d=e.length;d--;)if(null!==e[d]&&b>=e[d][0]&&b<=e[d][1])return e[d][2];return c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:null===this.yvalues[a],x:this.xvalues[a],y:this.yvalues[a],color:this.options.get(\"lineColor\"),fillColor:this.options.get(\"fillColor\"),offset:a}},renderHighlight:function(){var a,b,d=this.currentRegion,e=this.target,f=this.vertices[d],g=this.options,h=g.get(\"spotRadius\"),i=g.get(\"highlightSpotColor\"),j=g.get(\"highlightLineColor\");f&&(h&&i&&(a=e.drawCircle(f[0],f[1],h,c,i),this.highlightSpotId=a.id,e.insertAfterShape(this.lastShapeId,a)),j&&(b=e.drawLine(f[0],this.canvasTop,f[0],this.canvasTop+this.canvasHeight,j),this.highlightLineId=b.id,e.insertAfterShape(this.lastShapeId,b)))},removeHighlight:function(){var a=this.target;this.highlightSpotId&&(a.removeShapeId(this.highlightSpotId),this.highlightSpotId=null),this.highlightLineId&&(a.removeShapeId(this.highlightLineId),this.highlightLineId=null)},scanValues:function(){var a,c,d,e,f,g=this.values,h=g.length,i=this.xvalues,j=this.yvalues,k=this.yminmax;for(a=0;h>a;a++)c=g[a],d=\"string\"==typeof g[a],e=\"object\"==typeof g[a]&&g[a]instanceof Array,f=d&&g[a].split(\":\"),d&&2===f.length?(i.push(Number(f[0])),j.push(Number(f[1])),k.push(Number(f[1]))):e?(i.push(c[0]),j.push(c[1]),k.push(c[1])):(i.push(a),null===g[a]||\"null\"===g[a]?j.push(null):(j.push(Number(c)),k.push(Number(c))));this.options.get(\"xvalues\")&&(i=this.options.get(\"xvalues\")),this.maxy=this.maxyorg=b.max.apply(b,k),this.miny=this.minyorg=b.min.apply(b,k),this.maxx=b.max.apply(b,i),this.minx=b.min.apply(b,i),this.xvalues=i,this.yvalues=j,this.yminmax=k},processRangeOptions:function(){var a=this.options,b=a.get(\"normalRangeMin\"),d=a.get(\"normalRangeMax\");b!==c&&(b<this.miny&&(this.miny=b),d>this.maxy&&(this.maxy=d)),a.get(\"chartRangeMin\")!==c&&(a.get(\"chartRangeClip\")||a.get(\"chartRangeMin\")<this.miny)&&(this.miny=a.get(\"chartRangeMin\")),a.get(\"chartRangeMax\")!==c&&(a.get(\"chartRangeClip\")||a.get(\"chartRangeMax\")>this.maxy)&&(this.maxy=a.get(\"chartRangeMax\")),a.get(\"chartRangeMinX\")!==c&&(a.get(\"chartRangeClipX\")||a.get(\"chartRangeMinX\")<this.minx)&&(this.minx=a.get(\"chartRangeMinX\")),a.get(\"chartRangeMaxX\")!==c&&(a.get(\"chartRangeClipX\")||a.get(\"chartRangeMaxX\")>this.maxx)&&(this.maxx=a.get(\"chartRangeMaxX\"))},drawNormalRange:function(a,d,e,f,g){var h=this.options.get(\"normalRangeMin\"),i=this.options.get(\"normalRangeMax\"),j=d+b.round(e-e*((i-this.miny)/g)),k=b.round(e*(i-h)/g);this.target.drawRect(a,j,f,k,c,this.options.get(\"normalRangeColor\")).append()},render:function(){var a,e,f,g,h,i,j,k,l,m,n,o,p,q,r,t,u,v,x,y,z,A,B,C,D,E=this.options,F=this.target,G=this.canvasWidth,H=this.canvasHeight,I=this.vertices,J=E.get(\"spotRadius\"),K=this.regionMap;if(w._super.render.call(this)&&(this.scanValues(),this.processRangeOptions(),B=this.xvalues,C=this.yvalues,this.yminmax.length&&!(this.yvalues.length<2))){for(g=h=0,a=this.maxx-this.minx===0?1:this.maxx-this.minx,e=this.maxy-this.miny===0?1:this.maxy-this.miny,f=this.yvalues.length-1,J&&(4*J>G||4*J>H)&&(J=0),J&&(z=E.get(\"highlightSpotColor\")&&!E.get(\"disableInteraction\"),(z||E.get(\"minSpotColor\")||E.get(\"spotColor\")&&C[f]===this.miny)&&(H-=b.ceil(J)),(z||E.get(\"maxSpotColor\")||E.get(\"spotColor\")&&C[f]===this.maxy)&&(H-=b.ceil(J),g+=b.ceil(J)),(z||(E.get(\"minSpotColor\")||E.get(\"maxSpotColor\"))&&(C[0]===this.miny||C[0]===this.maxy))&&(h+=b.ceil(J),G-=b.ceil(J)),(z||E.get(\"spotColor\")||E.get(\"minSpotColor\")||E.get(\"maxSpotColor\")&&(C[f]===this.miny||C[f]===this.maxy))&&(G-=b.ceil(J))),H--,E.get(\"normalRangeMin\")===c||E.get(\"drawNormalOnTop\")||this.drawNormalRange(h,g,H,G,e),j=[],k=[j],q=r=null,t=C.length,D=0;t>D;D++)l=B[D],n=B[D+1],m=C[D],o=h+b.round((l-this.minx)*(G/a)),p=t-1>D?h+b.round((n-this.minx)*(G/a)):G,r=o+(p-o)/2,K[D]=[q||0,r,D],q=r,null===m?D&&(null!==C[D-1]&&(j=[],k.push(j)),I.push(null)):(m<this.miny&&(m=this.miny),m>this.maxy&&(m=this.maxy),j.length||j.push([o,g+H]),i=[o,g+b.round(H-H*((m-this.miny)/e))],j.push(i),I.push(i));for(u=[],v=[],x=k.length,D=0;x>D;D++)j=k[D],j.length&&(E.get(\"fillColor\")&&(j.push([j[j.length-1][0],g+H]),v.push(j.slice(0)),j.pop()),j.length>2&&(j[0]=[j[0][0],j[1][1]]),u.push(j));for(x=v.length,D=0;x>D;D++)F.drawShape(v[D],E.get(\"fillColor\"),E.get(\"fillColor\")).append();for(E.get(\"normalRangeMin\")!==c&&E.get(\"drawNormalOnTop\")&&this.drawNormalRange(h,g,H,G,e),x=u.length,D=0;x>D;D++)F.drawShape(u[D],E.get(\"lineColor\"),c,E.get(\"lineWidth\")).append();if(J&&E.get(\"valueSpots\"))for(y=E.get(\"valueSpots\"),y.get===c&&(y=new s(y)),D=0;t>D;D++)A=y.get(C[D]),A&&F.drawCircle(h+b.round((B[D]-this.minx)*(G/a)),g+b.round(H-H*((C[D]-this.miny)/e)),J,c,A).append();J&&E.get(\"spotColor\")&&null!==C[f]&&F.drawCircle(h+b.round((B[B.length-1]-this.minx)*(G/a)),g+b.round(H-H*((C[f]-this.miny)/e)),J,c,E.get(\"spotColor\")).append(),this.maxy!==this.minyorg&&(J&&E.get(\"minSpotColor\")&&(l=B[d.inArray(this.minyorg,C)],F.drawCircle(h+b.round((l-this.minx)*(G/a)),g+b.round(H-H*((this.minyorg-this.miny)/e)),J,c,E.get(\"minSpotColor\")).append()),J&&E.get(\"maxSpotColor\")&&(l=B[d.inArray(this.maxyorg,C)],F.drawCircle(h+b.round((l-this.minx)*(G/a)),g+b.round(H-H*((this.maxyorg-this.miny)/e)),J,c,E.get(\"maxSpotColor\")).append())),this.lastShapeId=F.getLastShapeId(),this.canvasTop=g,F.render()}}}),d.fn.sparkline.bar=x=f(d.fn.sparkline._base,v,{type:\"bar\",init:function(a,e,f,g,i){var m,n,o,p,q,r,t,u,v,w,y,z,A,B,C,D,E,F,G,H,I,J,K=parseInt(f.get(\"barWidth\"),10),L=parseInt(f.get(\"barSpacing\"),10),M=f.get(\"chartRangeMin\"),N=f.get(\"chartRangeMax\"),O=f.get(\"chartRangeClip\"),P=1/0,Q=-1/0;for(x._super.init.call(this,a,e,f,g,i),r=0,t=e.length;t>r;r++)H=e[r],m=\"string\"==typeof H&&H.indexOf(\":\")>-1,(m||d.isArray(H))&&(C=!0,m&&(H=e[r]=k(H.split(\":\"))),H=l(H,null),n=b.min.apply(b,H),o=b.max.apply(b,H),P>n&&(P=n),o>Q&&(Q=o));this.stacked=C,this.regionShapes={},this.barWidth=K,this.barSpacing=L,this.totalBarWidth=K+L,this.width=g=e.length*K+(e.length-1)*L,this.initTarget(),O&&(A=M===c?-1/0:M,B=N===c?1/0:N),q=[],p=C?[]:q;var R=[],S=[];for(r=0,t=e.length;t>r;r++)if(C)for(D=e[r],e[r]=G=[],R[r]=0,p[r]=S[r]=0,E=0,F=D.length;F>E;E++)H=G[E]=O?h(D[E],A,B):D[E],null!==H&&(H>0&&(R[r]+=H),0>P&&Q>0?0>H?S[r]+=b.abs(H):p[r]+=H:p[r]+=b.abs(H-(0>H?Q:P)),q.push(H));else H=O?h(e[r],A,B):e[r],H=e[r]=j(H),null!==H&&q.push(H);this.max=z=b.max.apply(b,q),this.min=y=b.min.apply(b,q),this.stackMax=Q=C?b.max.apply(b,R):z,this.stackMin=P=C?b.min.apply(b,q):y,f.get(\"chartRangeMin\")!==c&&(f.get(\"chartRangeClip\")||f.get(\"chartRangeMin\")<y)&&(y=f.get(\"chartRangeMin\")),f.get(\"chartRangeMax\")!==c&&(f.get(\"chartRangeClip\")||f.get(\"chartRangeMax\")>z)&&(z=f.get(\"chartRangeMax\")),this.zeroAxis=v=f.get(\"zeroAxis\",!0),w=0>=y&&z>=0&&v?0:0==v?y:y>0?y:z,this.xaxisOffset=w,u=C?b.max.apply(b,p)+b.max.apply(b,S):z-y,this.canvasHeightEf=v&&0>y?this.canvasHeight-2:this.canvasHeight-1,w>y?(J=C&&z>=0?Q:z,I=(J-w)/u*this.canvasHeight,I!==b.ceil(I)&&(this.canvasHeightEf-=2,I=b.ceil(I))):I=this.canvasHeight,this.yoffset=I,d.isArray(f.get(\"colorMap\"))?(this.colorMapByIndex=f.get(\"colorMap\"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=f.get(\"colorMap\"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new s(this.colorMapByValue))),this.range=u},getRegion:function(a,d){var e=b.floor(d/this.totalBarWidth);return 0>e||e>=this.values.length?c:e},getCurrentRegionFields:function(){var a,b,c=this.currentRegion,d=q(this.values[c]),e=[];for(b=d.length;b--;)a=d[b],e.push({isNull:null===a,value:a,color:this.calcColor(b,a,c),offset:c});return e},calcColor:function(a,b,e){var f,g,h=this.colorMapByIndex,i=this.colorMapByValue,j=this.options;return f=this.stacked?j.get(\"stackedBarColor\"):0>b?j.get(\"negBarColor\"):j.get(\"barColor\"),0===b&&j.get(\"zeroColor\")!==c&&(f=j.get(\"zeroColor\")),i&&(g=i.get(b))?f=g:h&&h.length>e&&(f=h[e]),d.isArray(f)?f[a%f.length]:f},renderRegion:function(a,e){var f,g,h,i,j,k,l,m,o,p,q=this.values[a],r=this.options,s=this.xaxisOffset,t=[],u=this.range,v=this.stacked,w=this.target,x=a*this.totalBarWidth,y=this.canvasHeightEf,z=this.yoffset;if(q=d.isArray(q)?q:[q],l=q.length,m=q[0],i=n(null,q),p=n(s,q,!0),i)return r.get(\"nullColor\")?(h=e?r.get(\"nullColor\"):this.calcHighlightColor(r.get(\"nullColor\"),r),f=z>0?z-1:z,w.drawRect(x,f,this.barWidth-1,0,h,h)):c;for(j=z,k=0;l>k;k++){if(m=q[k],v&&m===s){if(!p||o)continue;o=!0}g=u>0?b.floor(y*(b.abs(m-s)/u))+1:1,s>m||m===s&&0===z?(f=j,j+=g):(f=z-g,z-=g),h=this.calcColor(k,m,a),e&&(h=this.calcHighlightColor(h,r)),t.push(w.drawRect(x,f,this.barWidth-1,g-1,h,h))}return 1===t.length?t[0]:t}}),d.fn.sparkline.tristate=y=f(d.fn.sparkline._base,v,{type:\"tristate\",init:function(a,b,e,f,g){var h=parseInt(e.get(\"barWidth\"),10),i=parseInt(e.get(\"barSpacing\"),10);y._super.init.call(this,a,b,e,f,g),this.regionShapes={},this.barWidth=h,this.barSpacing=i,this.totalBarWidth=h+i,this.values=d.map(b,Number),this.width=f=b.length*h+(b.length-1)*i,d.isArray(e.get(\"colorMap\"))?(this.colorMapByIndex=e.get(\"colorMap\"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=e.get(\"colorMap\"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new s(this.colorMapByValue))),this.initTarget()},getRegion:function(a,c){return b.floor(c/this.totalBarWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],color:this.calcColor(this.values[a],a),offset:a}},calcColor:function(a,b){var c,d,e=this.values,f=this.options,g=this.colorMapByIndex,h=this.colorMapByValue;return c=h&&(d=h.get(a))?d:g&&g.length>b?g[b]:e[b]<0?f.get(\"negBarColor\"):e[b]>0?f.get(\"posBarColor\"):f.get(\"zeroBarColor\")},renderRegion:function(a,c){var d,e,f,g,h,i,j=this.values,k=this.options,l=this.target;return d=l.pixelHeight,f=b.round(d/2),g=a*this.totalBarWidth,j[a]<0?(h=f,e=f-1):j[a]>0?(h=0,e=f-1):(h=f-1,e=2),i=this.calcColor(j[a],a),null!==i?(c&&(i=this.calcHighlightColor(i,k)),l.drawRect(g,h,this.barWidth-1,e-1,i,i)):void 0}}),d.fn.sparkline.discrete=z=f(d.fn.sparkline._base,v,{type:\"discrete\",init:function(a,e,f,g,h){z._super.init.call(this,a,e,f,g,h),this.regionShapes={},this.values=e=d.map(e,Number),this.min=b.min.apply(b,e),this.max=b.max.apply(b,e),this.range=this.max-this.min,this.width=g=\"auto\"===f.get(\"width\")?2*e.length:this.width,this.interval=b.floor(g/e.length),this.itemWidth=g/e.length,f.get(\"chartRangeMin\")!==c&&(f.get(\"chartRangeClip\")||f.get(\"chartRangeMin\")<this.min)&&(this.min=f.get(\"chartRangeMin\")),f.get(\"chartRangeMax\")!==c&&(f.get(\"chartRangeClip\")||f.get(\"chartRangeMax\")>this.max)&&(this.max=f.get(\"chartRangeMax\")),this.initTarget(),this.target&&(this.lineHeight=\"auto\"===f.get(\"lineHeight\")?b.round(.3*this.canvasHeight):f.get(\"lineHeight\"))},getRegion:function(a,c){return b.floor(c/this.itemWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],offset:a}},renderRegion:function(a,c){var d,e,f,g,i=this.values,j=this.options,k=this.min,l=this.max,m=this.range,n=this.interval,o=this.target,p=this.canvasHeight,q=this.lineHeight,r=p-q;return e=h(i[a],k,l),g=a*n,d=b.round(r-r*((e-k)/m)),f=j.get(\"thresholdColor\")&&e<j.get(\"thresholdValue\")?j.get(\"thresholdColor\"):j.get(\"lineColor\"),c&&(f=this.calcHighlightColor(f,j)),o.drawLine(g,d,g,d+q,f)}}),d.fn.sparkline.bullet=A=f(d.fn.sparkline._base,{type:\"bullet\",init:function(a,d,e,f,g){var h,i,j;A._super.init.call(this,a,d,e,f,g),this.values=d=k(d),j=d.slice(),j[0]=null===j[0]?j[2]:j[0],j[1]=null===d[1]?j[2]:j[1],h=b.min.apply(b,d),i=b.max.apply(b,d),h=e.get(\"base\")===c?0>h?h:0:e.get(\"base\"),this.min=h,this.max=i,this.range=i-h,this.shapes={},this.valueShapes={},this.regiondata={},this.width=f=\"auto\"===e.get(\"width\")?\"4.0em\":f,this.target=this.$el.simpledraw(f,g,e.get(\"composite\")),d.length||(this.disabled=!0),this.initTarget()},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{fieldkey:a.substr(0,1),value:this.values[a.substr(1)],region:a}},changeHighlight:function(a){var b,c=this.currentRegion,d=this.valueShapes[c];switch(delete this.shapes[d],c.substr(0,1)){case\"r\":b=this.renderRange(c.substr(1),a);break;case\"p\":b=this.renderPerformance(a);break;case\"t\":b=this.renderTarget(a)}this.valueShapes[c]=b.id,this.shapes[b.id]=c,this.target.replaceWithShape(d,b)},renderRange:function(a,c){var d=this.values[a],e=b.round(this.canvasWidth*((d-this.min)/this.range)),f=this.options.get(\"rangeColors\")[a-2];return c&&(f=this.calcHighlightColor(f,this.options)),this.target.drawRect(0,0,e-1,this.canvasHeight-1,f,f)},renderPerformance:function(a){var c=this.values[1],d=b.round(this.canvasWidth*((c-this.min)/this.range)),e=this.options.get(\"performanceColor\");return a&&(e=this.calcHighlightColor(e,this.options)),this.target.drawRect(0,b.round(.3*this.canvasHeight),d-1,b.round(.4*this.canvasHeight)-1,e,e)},renderTarget:function(a){var c=this.values[0],d=b.round(this.canvasWidth*((c-this.min)/this.range)-this.options.get(\"targetWidth\")/2),e=b.round(.1*this.canvasHeight),f=this.canvasHeight-2*e,g=this.options.get(\"targetColor\");return a&&(g=this.calcHighlightColor(g,this.options)),this.target.drawRect(d,e,this.options.get(\"targetWidth\")-1,f-1,g,g)},render:function(){var a,b,c=this.values.length,d=this.target;if(A._super.render.call(this)){for(a=2;c>a;a++)b=this.renderRange(a).append(),this.shapes[b.id]=\"r\"+a,this.valueShapes[\"r\"+a]=b.id;null!==this.values[1]&&(b=this.renderPerformance().append(),this.shapes[b.id]=\"p1\",this.valueShapes.p1=b.id),null!==this.values[0]&&(b=this.renderTarget().append(),this.shapes[b.id]=\"t0\",this.valueShapes.t0=b.id),d.render()}}}),d.fn.sparkline.pie=B=f(d.fn.sparkline._base,{type:\"pie\",init:function(a,c,e,f,g){var h,i=0;if(B._super.init.call(this,a,c,e,f,g),this.shapes={},this.valueShapes={},this.values=c=d.map(c,Number),\"auto\"===e.get(\"width\")&&(this.width=this.height),c.length>0)for(h=c.length;h--;)i+=c[h];this.total=i,this.initTarget(),this.radius=b.floor(b.min(this.canvasWidth,this.canvasHeight)/2)},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],percent:this.values[a]/this.total*100,color:this.options.get(\"sliceColors\")[a%this.options.get(\"sliceColors\").length],offset:a}},changeHighlight:function(a){var b=this.currentRegion,c=this.renderSlice(b,a),d=this.valueShapes[b];delete this.shapes[d],this.target.replaceWithShape(d,c),this.valueShapes[b]=c.id,this.shapes[c.id]=b},renderSlice:function(a,d){var e,f,g,h,i,j=this.target,k=this.options,l=this.radius,m=k.get(\"borderWidth\"),n=k.get(\"offset\"),o=2*b.PI,p=this.values,q=this.total,r=n?2*b.PI*(n/360):0;for(h=p.length,g=0;h>g;g++){if(e=r,f=r,q>0&&(f=r+o*(p[g]/q)),a===g)return i=k.get(\"sliceColors\")[g%k.get(\"sliceColors\").length],d&&(i=this.calcHighlightColor(i,k)),j.drawPieSlice(l,l,l-m,e,f,c,i);\nr=f}},render:function(){var a,d,e=this.target,f=this.values,g=this.options,h=this.radius,i=g.get(\"borderWidth\");if(B._super.render.call(this)){for(i&&e.drawCircle(h,h,b.floor(h-i/2),g.get(\"borderColor\"),c,i).append(),d=f.length;d--;)f[d]&&(a=this.renderSlice(d).append(),this.valueShapes[d]=a.id,this.shapes[a.id]=d);e.render()}}}),d.fn.sparkline.box=C=f(d.fn.sparkline._base,{type:\"box\",init:function(a,b,c,e,f){C._super.init.call(this,a,b,c,e,f),this.values=d.map(b,Number),this.width=\"auto\"===c.get(\"width\")?\"4.0em\":e,this.initTarget(),this.values.length||(this.disabled=1)},getRegion:function(){return 1},getCurrentRegionFields:function(){var a=[{field:\"lq\",value:this.quartiles[0]},{field:\"med\",value:this.quartiles[1]},{field:\"uq\",value:this.quartiles[2]}];return this.loutlier!==c&&a.push({field:\"lo\",value:this.loutlier}),this.routlier!==c&&a.push({field:\"ro\",value:this.routlier}),this.lwhisker!==c&&a.push({field:\"lw\",value:this.lwhisker}),this.rwhisker!==c&&a.push({field:\"rw\",value:this.rwhisker}),a},render:function(){var a,d,e,f,g,h,j,k,l,m,n,o=this.target,p=this.values,q=p.length,r=this.options,s=this.canvasWidth,t=this.canvasHeight,u=r.get(\"chartRangeMin\")===c?b.min.apply(b,p):r.get(\"chartRangeMin\"),v=r.get(\"chartRangeMax\")===c?b.max.apply(b,p):r.get(\"chartRangeMax\"),w=0;if(C._super.render.call(this)){if(r.get(\"raw\"))r.get(\"showOutliers\")&&p.length>5?(d=p[0],a=p[1],f=p[2],g=p[3],h=p[4],j=p[5],k=p[6]):(a=p[0],f=p[1],g=p[2],h=p[3],j=p[4]);else if(p.sort(function(a,b){return a-b}),f=i(p,1),g=i(p,2),h=i(p,3),e=h-f,r.get(\"showOutliers\")){for(a=j=c,l=0;q>l;l++)a===c&&p[l]>f-e*r.get(\"outlierIQR\")&&(a=p[l]),p[l]<h+e*r.get(\"outlierIQR\")&&(j=p[l]);d=p[0],k=p[q-1]}else a=p[0],j=p[q-1];this.quartiles=[f,g,h],this.lwhisker=a,this.rwhisker=j,this.loutlier=d,this.routlier=k,n=s/(v-u+1),r.get(\"showOutliers\")&&(w=b.ceil(r.get(\"spotRadius\")),s-=2*b.ceil(r.get(\"spotRadius\")),n=s/(v-u+1),a>d&&o.drawCircle((d-u)*n+w,t/2,r.get(\"spotRadius\"),r.get(\"outlierLineColor\"),r.get(\"outlierFillColor\")).append(),k>j&&o.drawCircle((k-u)*n+w,t/2,r.get(\"spotRadius\"),r.get(\"outlierLineColor\"),r.get(\"outlierFillColor\")).append()),o.drawRect(b.round((f-u)*n+w),b.round(.1*t),b.round((h-f)*n),b.round(.8*t),r.get(\"boxLineColor\"),r.get(\"boxFillColor\")).append(),o.drawLine(b.round((a-u)*n+w),b.round(t/2),b.round((f-u)*n+w),b.round(t/2),r.get(\"lineColor\")).append(),o.drawLine(b.round((a-u)*n+w),b.round(t/4),b.round((a-u)*n+w),b.round(t-t/4),r.get(\"whiskerColor\")).append(),o.drawLine(b.round((j-u)*n+w),b.round(t/2),b.round((h-u)*n+w),b.round(t/2),r.get(\"lineColor\")).append(),o.drawLine(b.round((j-u)*n+w),b.round(t/4),b.round((j-u)*n+w),b.round(t-t/4),r.get(\"whiskerColor\")).append(),o.drawLine(b.round((g-u)*n+w),b.round(.1*t),b.round((g-u)*n+w),b.round(.9*t),r.get(\"medianColor\")).append(),r.get(\"target\")&&(m=b.ceil(r.get(\"spotRadius\")),o.drawLine(b.round((r.get(\"target\")-u)*n+w),b.round(t/2-m),b.round((r.get(\"target\")-u)*n+w),b.round(t/2+m),r.get(\"targetColor\")).append(),o.drawLine(b.round((r.get(\"target\")-u)*n+w-m),b.round(t/2),b.round((r.get(\"target\")-u)*n+w+m),b.round(t/2),r.get(\"targetColor\")).append()),o.render()}}}),F=f({init:function(a,b,c,d){this.target=a,this.id=b,this.type=c,this.args=d},append:function(){return this.target.appendShape(this),this}}),G=f({_pxregex:/(\\d+)(px)?\\s*$/i,init:function(a,b,c){a&&(this.width=a,this.height=b,this.target=c,this.lastShapeId=null,c[0]&&(c=c[0]),d.data(c,\"_jqs_vcanvas\",this))},drawLine:function(a,b,c,d,e,f){return this.drawShape([[a,b],[c,d]],e,f)},drawShape:function(a,b,c,d){return this._genShape(\"Shape\",[a,b,c,d])},drawCircle:function(a,b,c,d,e,f){return this._genShape(\"Circle\",[a,b,c,d,e,f])},drawPieSlice:function(a,b,c,d,e,f,g){return this._genShape(\"PieSlice\",[a,b,c,d,e,f,g])},drawRect:function(a,b,c,d,e,f){return this._genShape(\"Rect\",[a,b,c,d,e,f])},getElement:function(){return this.canvas},getLastShapeId:function(){return this.lastShapeId},reset:function(){alert(\"reset not implemented\")},_insert:function(a,b){d(b).html(a)},_calculatePixelDims:function(a,b,c){var e;e=this._pxregex.exec(b),this.pixelHeight=e?e[1]:d(c).height(),e=this._pxregex.exec(a),this.pixelWidth=e?e[1]:d(c).width()},_genShape:function(a,b){var c=L++;return b.unshift(c),new F(this,c,a,b)},appendShape:function(){alert(\"appendShape not implemented\")},replaceWithShape:function(){alert(\"replaceWithShape not implemented\")},insertAfterShape:function(){alert(\"insertAfterShape not implemented\")},removeShapeId:function(){alert(\"removeShapeId not implemented\")},getShapeAt:function(){alert(\"getShapeAt not implemented\")},render:function(){alert(\"render not implemented\")}}),H=f(G,{init:function(b,e,f,g){H._super.init.call(this,b,e,f),this.canvas=a.createElement(\"canvas\"),f[0]&&(f=f[0]),d.data(f,\"_jqs_vcanvas\",this),d(this.canvas).css({display:\"inline-block\",width:b,height:e,verticalAlign:\"top\"}),this._insert(this.canvas,f),this._calculatePixelDims(b,e,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,this.interact=g,this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c,d(this.canvas).css({width:this.pixelWidth,height:this.pixelHeight})},_getContext:function(a,b,d){var e=this.canvas.getContext(\"2d\");return a!==c&&(e.strokeStyle=a),e.lineWidth=d===c?1:d,b!==c&&(e.fillStyle=b),e},reset:function(){var a=this._getContext();a.clearRect(0,0,this.pixelWidth,this.pixelHeight),this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c},_drawShape:function(a,b,d,e,f){var g,h,i=this._getContext(d,e,f);for(i.beginPath(),i.moveTo(b[0][0]+.5,b[0][1]+.5),g=1,h=b.length;h>g;g++)i.lineTo(b[g][0]+.5,b[g][1]+.5);d!==c&&i.stroke(),e!==c&&i.fill(),this.targetX!==c&&this.targetY!==c&&i.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawCircle:function(a,d,e,f,g,h,i){var j=this._getContext(g,h,i);j.beginPath(),j.arc(d,e,f,0,2*b.PI,!1),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a),g!==c&&j.stroke(),h!==c&&j.fill()},_drawPieSlice:function(a,b,d,e,f,g,h,i){var j=this._getContext(h,i);j.beginPath(),j.moveTo(b,d),j.arc(b,d,e,f,g,!1),j.lineTo(b,d),j.closePath(),h!==c&&j.stroke(),i&&j.fill(),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b+d,c],[b+d,c+e],[b,c+e],[b,c]],f,g)},appendShape:function(a){return this.shapes[a.id]=a,this.shapeseq.push(a.id),this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c,d=this.shapeseq;for(this.shapes[b.id]=b,c=d.length;c--;)d[c]==a&&(d[c]=b.id);delete this.shapes[a]},replaceWithShapes:function(a,b){var c,d,e,f=this.shapeseq,g={};for(d=a.length;d--;)g[a[d]]=!0;for(d=f.length;d--;)c=f[d],g[c]&&(f.splice(d,1),delete this.shapes[c],e=d);for(d=b.length;d--;)f.splice(e,0,b[d].id),this.shapes[b[d].id]=b[d]},insertAfterShape:function(a,b){var c,d=this.shapeseq;for(c=d.length;c--;)if(d[c]===a)return d.splice(c+1,0,b.id),this.shapes[b.id]=b,void 0},removeShapeId:function(a){var b,c=this.shapeseq;for(b=c.length;b--;)if(c[b]===a){c.splice(b,1);break}delete this.shapes[a]},getShapeAt:function(a,b,c){return this.targetX=b,this.targetY=c,this.render(),this.currentTargetShapeId},render:function(){var a,b,c,d=this.shapeseq,e=this.shapes,f=d.length,g=this._getContext();for(g.clearRect(0,0,this.pixelWidth,this.pixelHeight),c=0;f>c;c++)a=d[c],b=e[a],this[\"_draw\"+b.type].apply(this,b.args);this.interact||(this.shapes={},this.shapeseq=[])}}),I=f(G,{init:function(b,c,e){var f;I._super.init.call(this,b,c,e),e[0]&&(e=e[0]),d.data(e,\"_jqs_vcanvas\",this),this.canvas=a.createElement(\"span\"),d(this.canvas).css({display:\"inline-block\",position:\"relative\",overflow:\"hidden\",width:b,height:c,margin:\"0px\",padding:\"0px\",verticalAlign:\"top\"}),this._insert(this.canvas,e),this._calculatePixelDims(b,c,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,f='<v:group coordorigin=\"0 0\" coordsize=\"'+this.pixelWidth+\" \"+this.pixelHeight+'\" style=\"position:absolute;top:0;left:0;width:'+this.pixelWidth+\"px;height=\"+this.pixelHeight+'px;\"></v:group>',this.canvas.insertAdjacentHTML(\"beforeEnd\",f),this.group=d(this.canvas).children()[0],this.rendered=!1,this.prerender=\"\"},_drawShape:function(a,b,d,e,f){var g,h,i,j,k,l,m,n=[];for(m=0,l=b.length;l>m;m++)n[m]=\"\"+b[m][0]+\",\"+b[m][1];return g=n.splice(0,1),f=f===c?1:f,h=d===c?' stroked=\"false\" ':' strokeWeight=\"'+f+'px\" strokeColor=\"'+d+'\" ',i=e===c?' filled=\"false\"':' fillColor=\"'+e+'\" filled=\"true\" ',j=n[0]===n[n.length-1]?\"x \":\"\",k='<v:shape coordorigin=\"0 0\" coordsize=\"'+this.pixelWidth+\" \"+this.pixelHeight+'\"  id=\"jqsshape'+a+'\" '+h+i+' style=\"position:absolute;left:0px;top:0px;height:'+this.pixelHeight+\"px;width:\"+this.pixelWidth+'px;padding:0px;margin:0px;\"  path=\"m '+g+\" l \"+n.join(\", \")+\" \"+j+'e\"> </v:shape>'},_drawCircle:function(a,b,d,e,f,g,h){var i,j,k;return b-=e,d-=e,i=f===c?' stroked=\"false\" ':' strokeWeight=\"'+h+'px\" strokeColor=\"'+f+'\" ',j=g===c?' filled=\"false\"':' fillColor=\"'+g+'\" filled=\"true\" ',k='<v:oval  id=\"jqsshape'+a+'\" '+i+j+' style=\"position:absolute;top:'+d+\"px; left:\"+b+\"px; width:\"+2*e+\"px; height:\"+2*e+'px\"></v:oval>'},_drawPieSlice:function(a,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r;if(g===h)return\"\";if(h-g===2*b.PI&&(g=0,h=2*b.PI),l=d+b.round(b.cos(g)*f),m=e+b.round(b.sin(g)*f),n=d+b.round(b.cos(h)*f),o=e+b.round(b.sin(h)*f),l===n&&m===o){if(h-g<b.PI)return\"\";l=n=d+f,m=o=e}return l===n&&m===o&&h-g<b.PI?\"\":(k=[d-f,e-f,d+f,e+f,l,m,n,o],p=i===c?' stroked=\"false\" ':' strokeWeight=\"1px\" strokeColor=\"'+i+'\" ',q=j===c?' filled=\"false\"':' fillColor=\"'+j+'\" filled=\"true\" ',r='<v:shape coordorigin=\"0 0\" coordsize=\"'+this.pixelWidth+\" \"+this.pixelHeight+'\"  id=\"jqsshape'+a+'\" '+p+q+' style=\"position:absolute;left:0px;top:0px;height:'+this.pixelHeight+\"px;width:\"+this.pixelWidth+'px;padding:0px;margin:0px;\"  path=\"m '+d+\",\"+e+\" wa \"+k.join(\", \")+' x e\"> </v:shape>')},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b,c+e],[b+d,c+e],[b+d,c],[b,c]],f,g)},reset:function(){this.group.innerHTML=\"\"},appendShape:function(a){var b=this[\"_draw\"+a.type].apply(this,a.args);return this.rendered?this.group.insertAdjacentHTML(\"beforeEnd\",b):this.prerender+=b,this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c=d(\"#jqsshape\"+a),e=this[\"_draw\"+b.type].apply(this,b.args);c[0].outerHTML=e},replaceWithShapes:function(a,b){var c,e=d(\"#jqsshape\"+a[0]),f=\"\",g=b.length;for(c=0;g>c;c++)f+=this[\"_draw\"+b[c].type].apply(this,b[c].args);for(e[0].outerHTML=f,c=1;c<a.length;c++)d(\"#jqsshape\"+a[c]).remove()},insertAfterShape:function(a,b){var c=d(\"#jqsshape\"+a),e=this[\"_draw\"+b.type].apply(this,b.args);c[0].insertAdjacentHTML(\"afterEnd\",e)},removeShapeId:function(a){var b=d(\"#jqsshape\"+a);this.group.removeChild(b[0])},getShapeAt:function(a){var b=a.id.substr(8);return b},render:function(){this.rendered||(this.group.innerHTML=this.prerender,this.rendered=!0)}})})}(document,Math);"

/***/ }),

/***/ 1256:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-8\" saSparklineContainer>\n  <ul id=\"sparks\" class=\"\">\n    <li class=\"sparks-info\">\n      <h5> Orçamento <span class=\"txt-color-blue\">R$47.171</span></h5>\n      <div class=\"sparkline txt-color-blue hidden-mobile hidden-md hidden-sm\">\n        1300, 1877, 2500, 2577, 2000, 2100, 3000, 2700, 3631, 2471, 2700, 3631, 2471\n      </div>\n    </li>\n    <li class=\"sparks-info\">\n      <h5> Meta <span class=\"txt-color-purple\"><i class=\"fa fa-arrow-circle-up\"></i>&nbsp;45%</span></h5>\n      <div class=\"sparkline txt-color-purple hidden-mobile hidden-md hidden-sm\">\n        110,150,300,130,400,240,220,310,220,300, 270, 210\n      </div>\n    </li>\n    <li class=\"sparks-info\">\n      <h5> Consultas/mês <span class=\"txt-color-greenDark\"><i class=\"fa fa-search\"></i>&nbsp;2447</span></h5>\n      <div class=\"sparkline txt-color-greenDark hidden-mobile hidden-md hidden-sm\">\n        110,150,300,130,400,240,220,310,220,300, 270, 210\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 1257:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(504)(__webpack_require__(1254))

/***/ }),

/***/ 1258:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(504)(__webpack_require__(1255))

/***/ }),

/***/ 1261:
/***/ (function(module, exports) {

/*         ______________________________________
  ________|                                      |_______
  \       |             JarvisWidget             |      /
   \      |      Copyright © 2014 MyOrange       |     /
   /      |______________________________________|     \
  /__________)                                (_________\

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * =======================================================================
 * JarvisWidget is FULLY owned and LICENSED by MYORANGE INC.
 * This script may NOT be RESOLD or REDISTRUBUTED on its own under any
 * circumstances, and is only to be used with this purchased
 * copy of SmartAdmin Template.
 * =======================================================================
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * =======================================================================
 * original filename: jarvis.widget.js
 * filesize: 56.7 KB (58,158 bytes)
 * author: Sunny (@bootstraphunt)
 * email: info@myorange.ca
 */

(function ($, window, document, undefined) {

    //"use strict"; 

    var pluginName = 'jarvisWidgets';

	/**
	 * Check for touch support and set right click events.
	 **/
	var clickEvent = (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch ? 
		'touchstart' : 'click') + '.' + pluginName;

    function Plugin(element, options) {
        /**
         * Variables.
         **/
        this.obj = $(element);
        this.o = $.extend({}, $.fn[pluginName].defaults, options);
        this.objId = this.obj.attr('id');
        this.pwCtrls = '.jarviswidget-ctrls';
        this.widget = this.obj.find(this.o.widgets);
        this.toggleClass = this.o.toggleClass.split('|');
        this.editClass = this.o.editClass.split('|');
        this.fullscreenClass = this.o.fullscreenClass.split('|');
        this.customClass = this.o.customClass.split('|');
		this.storage = {enabled: this.o.localStorage};
		this.initialized = false;

        this.init();
    }

    Plugin.prototype = {

        /**
         * Function for the indicator image.
         *
         * @param:
         **/
        _runLoaderWidget: function (elm) {
            var self = this;
            if (self.o.indicator === true) {
                elm.parents(self.o.widgets)
                    .find('.jarviswidget-loader:first')
                    .stop(true, true)
                    .fadeIn(100)
                    .delay(self.o.indicatorTime)
                    .fadeOut(100);
            }
        },

        /**
         * Create a fixed timestamp.
         *
         * @param: t | date | Current date.
         **/
        _getPastTimestamp: function (t) {

            var self = this;

            var da = new Date(t);
            

            /**
             * Get and set the date and time.
             **/
            var tsMonth = da.getMonth() + 1;
            // index based
            var tsDay = da.getDate();
            var tsYear = da.getFullYear();
            var tsHours = da.getHours();
            var tsMinutes = da.getMinutes();
            var tsSeconds = da.getUTCSeconds();

            /**
             * Checking for one digit values, if so add an zero.
             **/
            if (tsMonth < 10) {
                tsMonth = '0' + tsMonth;
            }
            if (tsDay < 10) {
                tsDay = '0' + tsDay;
            }
            if (tsHours < 10) {
                tsHours = '0' + tsHours;
            }
            if (tsMinutes < 10) {
                tsMinutes = '0' + tsMinutes;
            }
            if (tsSeconds < 10) {
                tsSeconds = '0' + tsSeconds;
            }

            /**
             * The output, how you want it.
             **/
            var format = self.o.timestampFormat.replace(/%d%/g, tsDay)
                .replace(/%m%/g, tsMonth)
                .replace(/%y%/g, tsYear)
                .replace(/%h%/g, tsHours)
                .replace(/%i%/g, tsMinutes)
                .replace(/%s%/g, tsSeconds);

            return format;
        },

        /**
         * AJAX load File, which get and shows the .
         *
         * @param: awidget | object  | The widget.
         * @param: file    | file    | The file thats beeing loaded.
         * @param: loader  | object  | The widget.
         **/
        _loadAjaxFile: function (awidget, file, loader) {

            var self = this;

            awidget.find('.widget-body')
                .load(file, function (response, status, xhr) {

                    var $this = $(this);

                    /**
                     * If action runs into an error display an error msg.
                     **/
                    if (status == "error") {
                        $this.html('<h4 class="alert alert-danger">' + self.o.labelError + '<b> ' +
                            xhr.status + " " + xhr.statusText + '</b></h4>');
                    }

                    /**
                     * Run if there are no errors.
                     **/
                    if (status == "success") {

                        /**
                         * Show a timestamp.
                         **/
                        var aPalceholder = awidget.find(self.o.timestampPlaceholder);

                        if (aPalceholder.length) {

                            aPalceholder.html(self._getPastTimestamp(new Date()));
                        }

                        /**
                         * Run the callback function.
                         **/
                        if (typeof self.o.afterLoad == 'function') {
                            self.o.afterLoad.call(this, awidget);
                        }
                    }

					self = null;
                });

            /**
             * Run function for the indicator image.
             **/
            this._runLoaderWidget(loader);

        },

		_loadKeys : function () {
			
			var self = this;

			//*****************************************************************//
            /////////////////////////// SET/GET KEYS ////////////////////////////
            //*****************************************************************//

            // TODO : Push state does not work on IE9, try to find a way to detect IE and use a seperate filter

			if (self.o.ajaxnav === true) {
				var widget_url = location.hash.replace(/^#/, '');
				self.storage.keySettings = 'Plugin_settings_' + widget_url + '_' + self.objId;
				self.storage.keyPosition = 'Plugin_position_' + widget_url + '_' + self.objId;
			} else if (self.initialized === false) {
				var widget_url = self.o.pageKey || location.pathname;
				self.storage.keySettings = 'jarvisWidgets_settings_' + widget_url + '_' + self.objId;
				self.storage.keyPosition = 'jarvisWidgets_position_' + widget_url + '_' + self.objId;
			}

		},
 
        /**
         * Save all settings to the localStorage.
         *
         * @param:
         **/
        _saveSettingsWidget: function () {

            var self = this;
			var storage = self.storage;

			self._loadKeys();

			var storeSettings = self.obj.find(self.o.widgets)
				.map(function () {
					var storeSettingsStr = {};
					storeSettingsStr.id = $(this)
						.attr('id');
					storeSettingsStr.style = $(this)
						.attr('data-widget-attstyle');
					storeSettingsStr.title = $(this)
						.children('header')
						.children('h2')
						.text();
					storeSettingsStr.hidden = ($(this)
						.css('display') == 'none' ? 1 : 0);
					storeSettingsStr.collapsed = ($(this)
						.hasClass('jarviswidget-collapsed') ? 1 : 0);
					return storeSettingsStr;
				}).get();

			var storeSettingsObj = JSON.stringify({
				'widget': storeSettings
			});

			/* Place it in the storage(only if needed) */
			if (storage.enabled && storage.getKeySettings != storeSettingsObj) {
				localStorage.setItem(storage.keySettings, storeSettingsObj);
				storage.getKeySettings = storeSettingsObj;
			}

            /**
             * Run the callback function.
             **/
            
            if (typeof self.o.onSave == 'function') {
                self.o.onSave.call(this, null, storeSettingsObj, storage.keySettings);
            }
        },

        /**
         * Save positions to the localStorage.
         *
         * @param:
         **/
        _savePositionWidget: function () {

            var self = this;
			var storage = self.storage;

			self._loadKeys();

			var mainArr = self.obj.find(self.o.grid + '.sortable-grid')
				.map(function () {
					var subArr = $(this)
						.children(self.o.widgets)
						.map(function () {
							return {
								'id': $(this).attr('id')
							};
						}).get();
					return {
						'section': subArr
					};
				}).get();

			var storePositionObj = JSON.stringify({
				'grid': mainArr
			});

			/* Place it in the storage(only if needed) */
			if (storage.enabled && storage.getKeyPosition != storePositionObj) {
				localStorage.setItem(storage.keyPosition, storePositionObj);
				storage.getKeyPosition = storePositionObj
			}

            /**
             * Run the callback function.
             **/
            if (typeof self.o.onSave == 'function') {
                self.o.onSave.call(this, storePositionObj, storage.keyPosition);
            }
        },

        /**
         * Code that we run at the start.
         *
         * @param:
         **/
        init: function () {

            var self = this;
			
			if (self.initialized) return;

            self._initStorage(self.storage);

            /**
             * Force users to use an id(it's needed for the local storage).
             **/
            if (!$('#' + self.objId)
                .length) {
                alert('It looks like your using a class instead of an ID, dont do that!');
            }

            /**
             * Add RTL support.
             **/
            if (self.o.rtl === true) {
                $('body')
                    .addClass('rtl');
            }

            /**
             * This will add an extra class that we use to store the
             * widgets in the right order.(savety)
             **/

            $(self.o.grid)
                .each(function () {
                    if ($(this)
                        .find(self.o.widgets)
                        .length) {
                        $(this)
                            .addClass('sortable-grid');
                    }
                });

            //*****************************************************************//
            //////////////////////// SET POSITION WIDGET ////////////////////////
            //*****************************************************************//

            /**
             * Run if data is present.
             **/
            if (self.storage.enabled && self.storage.getKeyPosition) {

                var jsonPosition = JSON.parse(self.storage.getKeyPosition);

                /**
                 * Loop the data, and put every widget on the right place.
                 **/
                for (var key in jsonPosition.grid) {
                    var changeOrder = self.obj.find(self.o.grid + '.sortable-grid')
                        .eq(key);
                    for (var key2 in jsonPosition.grid[key].section) {
                        changeOrder.append($('#' + jsonPosition.grid[key].section[key2].id));
                    }
                }

            }

            //*****************************************************************//
            /////////////////////// SET SETTINGS WIDGET /////////////////////////
            //*****************************************************************//

            /**
             * Run if data is present.
             **/
            if (self.storage.enabled && self.storage.getKeySettings) {

                var jsonSettings = JSON.parse(self.storage.getKeySettings);

                /**
                 * Loop the data and hide/show the widgets and set the inputs in
                 * panel to checked(if hidden) and add an indicator class to the div.
                 * Loop all labels and update the widget titles.
                 **/
                for (var key in jsonSettings.widget) {
                    var widgetId = $('#' + jsonSettings.widget[key].id);

                    /**
                     * Set a style(if present).
                     **/
                    if (jsonSettings.widget[key].style) {
                        //console.log("test");
                        widgetId.removeClassPrefix('jarviswidget-color-')
                            .addClass(jsonSettings.widget[key].style)
                            .attr('data-widget-attstyle', '' + jsonSettings.widget[key].style + '');
                    }

                    /**
                     * Hide/show widget.
                     **/
                    if (jsonSettings.widget[key].hidden == 1) {
                        widgetId.hide(1);
                    } else {
                        widgetId.show(1)
                            .removeAttr('data-widget-hidden');
                    }

                    /**
                     * Toggle content widget.
                     **/
                    if (jsonSettings.widget[key].collapsed == 1) {
                        widgetId.addClass('jarviswidget-collapsed')
                            .children('div')
                            .hide(1);
                    }

                    /**
                     * Update title widget (if needed).
                     **/
                    if (widgetId.children('header')
                        .children('h2')
                        .text() != jsonSettings.widget[key].title) {
                        widgetId.children('header')
                            .children('h2')
                            .text(jsonSettings.widget[key].title);
                    }
                }
            }

            //*****************************************************************//
            ////////////////////////// LOOP AL WIDGETS //////////////////////////
            //*****************************************************************//

            /**
             * This will add/edit/remove the settings to all widgets
             **/
            self.widget.each(function () {

                var tWidget = $(this),
                	thisHeader = $(this).children('header'),
                	customBtn,
                	deleteBtn,  
                	editBtn,  
                	fullscreenBtn,
                	widgetcolorBtn,
                	toggleBtn,
                	toggleSettings,
                  	refreshBtn;

                /**
                 * Dont double wrap(check).
                 **/
                if (!thisHeader.parent()
                    .attr('role')) {

                    /**
                     * Hide the widget if the dataset 'widget-hidden' is set to true.
                     **/
                    if (tWidget.data('widget-hidden') === true) {

                        tWidget.hide();
                    }

                    /**
					 * Hide the content of the widget if the dataset
					 * 'widget-collapsed' is set to true.

					 **/
                    if (tWidget.data('widget-collapsed') === true) {
                        tWidget.addClass('jarviswidget-collapsed')
                            .children('div')
                            .hide();
                    }

                    /**
                     * Check for the dataset 'widget-icon' if so get the icon
                     * and attach it to the widget header.
                     * NOTE: MOVED THIS TO PHYSICAL for more control
                     **/
                    //if(tWidget.data('widget-icon')){
                    //	thisHeader.prepend('<i class="jarviswidget-icon '+tWidget.data('widget-icon')+'"></i>');
                    //}

                    /**
                     * Add a delete button to the widget header (if set to true).
                     **/
                    if (self.o.customButton === true && tWidget.data('widget-custombutton') ===
                        undefined && self.customClass[0].length !== 0) {
                        customBtn =
                            '<a href="javascript:void(0);" class="button-icon jarviswidget-custom-btn"><i class="' +
                            self.customClass[0] + '"></i></a>';
                    } else {
                        customBtn = '';
                    }

                    /**
                     * Add a delete button to the widget header (if set to true).
                     **/
                    if (self.o.deleteButton === true && tWidget.data('widget-deletebutton') ===
                        undefined) {
                        deleteBtn =
                            '<a href="javascript:void(0);" class="button-icon jarviswidget-delete-btn" rel="tooltip" title="Delete" data-placement="bottom"><i class="' +
                            self.o.deleteClass + '"></i></a>';
                    } else {
                        deleteBtn = '';
                    }

                    /**
                     * Add a delete button to the widget header (if set to true).
                     **/
                    if (self.o.editButton === true && tWidget.data('widget-editbutton') === undefined) {
                        editBtn =
                            '<a href="javascript:void(0);" class="button-icon jarviswidget-edit-btn" rel="tooltip" title="Edit" data-placement="bottom"><i class="' +
                            self.editClass[0] + '"></i></a>';
                    } else {
                        editBtn = '';
                    }

                    /**
                     * Add a delete button to the widget header (if set to true).
                     **/
                    if (self.o.fullscreenButton === true && tWidget.data('widget-fullscreenbutton') ===
                        undefined) {
                        fullscreenBtn =
                            '<a href="javascript:void(0);" class="button-icon jarviswidget-fullscreen-btn" rel="tooltip" title="Fullscreen" data-placement="bottom"><i class="' +
                            self.fullscreenClass[0] + '"></i></a>';
                    } else {
                        fullscreenBtn = '';
                    }

                    /**
                     * Add a delete button to the widget header (if set to true).
                     **/
                    if (self.o.colorButton === true && tWidget.data('widget-colorbutton') ===
                        undefined) {
                        widgetcolorBtn =
                            '<a data-toggle="dropdown" class="dropdown-toggle color-box selector" href="javascript:void(0);"></a><ul class="dropdown-menu arrow-box-up-right color-select pull-right"><li><span class="bg-color-green" data-widget-setstyle="jarviswidget-color-green" rel="tooltip" data-placement="left" data-original-title="Green Grass"></span></li><li><span class="bg-color-greenDark" data-widget-setstyle="jarviswidget-color-greenDark" rel="tooltip" data-placement="top" data-original-title="Dark Green"></span></li><li><span class="bg-color-greenLight" data-widget-setstyle="jarviswidget-color-greenLight" rel="tooltip" data-placement="top" data-original-title="Light Green"></span></li><li><span class="bg-color-purple" data-widget-setstyle="jarviswidget-color-purple" rel="tooltip" data-placement="top" data-original-title="Purple"></span></li><li><span class="bg-color-magenta" data-widget-setstyle="jarviswidget-color-magenta" rel="tooltip" data-placement="top" data-original-title="Magenta"></span></li><li><span class="bg-color-pink" data-widget-setstyle="jarviswidget-color-pink" rel="tooltip" data-placement="right" data-original-title="Pink"></span></li><li><span class="bg-color-pinkDark" data-widget-setstyle="jarviswidget-color-pinkDark" rel="tooltip" data-placement="left" data-original-title="Fade Pink"></span></li><li><span class="bg-color-blueLight" data-widget-setstyle="jarviswidget-color-blueLight" rel="tooltip" data-placement="top" data-original-title="Light Blue"></span></li><li><span class="bg-color-teal" data-widget-setstyle="jarviswidget-color-teal" rel="tooltip" data-placement="top" data-original-title="Teal"></span></li><li><span class="bg-color-blue" data-widget-setstyle="jarviswidget-color-blue" rel="tooltip" data-placement="top" data-original-title="Ocean Blue"></span></li><li><span class="bg-color-blueDark" data-widget-setstyle="jarviswidget-color-blueDark" rel="tooltip" data-placement="top" data-original-title="Night Sky"></span></li><li><span class="bg-color-darken" data-widget-setstyle="jarviswidget-color-darken" rel="tooltip" data-placement="right" data-original-title="Night"></span></li><li><span class="bg-color-yellow" data-widget-setstyle="jarviswidget-color-yellow" rel="tooltip" data-placement="left" data-original-title="Day Light"></span></li><li><span class="bg-color-orange" data-widget-setstyle="jarviswidget-color-orange" rel="tooltip" data-placement="bottom" data-original-title="Orange"></span></li><li><span class="bg-color-orangeDark" data-widget-setstyle="jarviswidget-color-orangeDark" rel="tooltip" data-placement="bottom" data-original-title="Dark Orange"></span></li><li><span class="bg-color-red" data-widget-setstyle="jarviswidget-color-red" rel="tooltip" data-placement="bottom" data-original-title="Red Rose"></span></li><li><span class="bg-color-redLight" data-widget-setstyle="jarviswidget-color-redLight" rel="tooltip" data-placement="bottom" data-original-title="Light Red"></span></li><li><span class="bg-color-white" data-widget-setstyle="jarviswidget-color-white" rel="tooltip" data-placement="right" data-original-title="Purity"></span></li><li><a href="javascript:void(0);" class="jarviswidget-remove-colors" data-widget-setstyle="" rel="tooltip" data-placement="bottom" data-original-title="Reset widget color to default">Remove</a></li></ul>';
                        thisHeader.prepend('<div class="widget-toolbar">' + widgetcolorBtn + '</div>');

                    } else {
                        widgetcolorBtn = '';
                    }

                    /**
                     * Add a toggle button to the widget header (if set to true).
                     **/
                    if (self.o.toggleButton === true && tWidget.data('widget-togglebutton') ===
                        undefined) {
                        if (tWidget.data('widget-collapsed') === true || tWidget.hasClass(
                            'jarviswidget-collapsed')) {
                            toggleSettings = self.toggleClass[1];
                        } else {
                            toggleSettings = self.toggleClass[0];
                        }
                        toggleBtn =
                            '<a href="javascript:void(0);" class="button-icon jarviswidget-toggle-btn" rel="tooltip" title="Collapse" data-placement="bottom"><i class="' +
                            toggleSettings + '"></i></a>';
                    } else {
                        toggleBtn = '';
                    }

                    /**
                     * Add a refresh button to the widget header (if set to true).
                     **/
                    if (self.o.refreshButton === true && tWidget.data('widget-refreshbutton') !==
                        false && tWidget.data('widget-load')) {
                        refreshBtn =
                            '<a href="javascript:void(0);" class="button-icon jarviswidget-refresh-btn" data-loading-text="&nbsp;&nbsp;Loading...&nbsp;" rel="tooltip" title="Refresh" data-placement="bottom"><i class="' +
                            self.o.refreshButtonClass + '"></i></a>';
                    } else {
                        refreshBtn = '';
                    }

                    /**
                     * Set the buttons order.
                     **/
                    var formatButtons = self.o.buttonOrder.replace(/%refresh%/g, refreshBtn)
                        .replace(/%delete%/g, deleteBtn)
                        .replace(/%custom%/g, customBtn)
                        .replace(/%fullscreen%/g, fullscreenBtn)
                        .replace(/%edit%/g, editBtn)
                        .replace(/%toggle%/g, toggleBtn);

                    /**
                     * Add a button wrapper to the header.
                     **/
                    if (refreshBtn !== '' || deleteBtn !== '' || customBtn !== '' || fullscreenBtn !== '' ||
                        editBtn !== '' || toggleBtn !== '') {
                        thisHeader.prepend('<div class="jarviswidget-ctrls">' + formatButtons +
                            '</div>');
                    }

                    /**
                     * Adding a helper class to all sortable widgets, this will be
                     * used to find the widgets that are sortable, it will skip the widgets
                     * that have the dataset 'widget-sortable="false"' set to false.
                     **/
                    if (self.o.sortable === true && tWidget.data('widget-sortable') === undefined) {
                        tWidget.addClass('jarviswidget-sortable');
                    }

                    /**
                     * If the edit box is present copy the title to the input.
                     **/
                    if (tWidget.find(self.o.editPlaceholder)
                        .length) {
                        tWidget.find(self.o.editPlaceholder)
                            .find('input')
                            .val($.trim(thisHeader.children('h2')
                                .text()));
                    }

                    /**
                     * Prepend the image to the widget header.
                     **/
                    thisHeader.append(
                        '<span class="jarviswidget-loader"><i class="fa fa-refresh fa-spin"></i></span>'
                    );

                    /**
                     * Adding roles to some parts.
                     **/
                    tWidget.attr('role', 'widget')
                        .children('div')
                        .attr('role', 'content')
                        .prev('header')
                        .attr('role', 'heading')
                        .children('div')
                        .attr('role', 'menu');
                }
            });

            /**
             * Hide all buttons if option is set to true.
             **/
            if (self.o.buttonsHidden === true) {
                $(self.o.pwCtrls)
                    .hide();
            }

            /* activate all tooltips */
            // $(".jarviswidget header [rel=tooltip]")
            //     .tooltip();

            //******************************************************************//
            //////////////////////////////// AJAX ////////////////////////////////
            //******************************************************************//

            /**
             * Loop all ajax widgets.
             **/
            // $.intervalArr = new Array(); - decleared in app.js
            self.obj.find('[data-widget-load]')
                .each(function () {

                    /**
                     * Variables.
                     **/
                    var thisItem = $(this),
                        thisItemHeader = thisItem.children(),
                        pathToFile = thisItem.data('widget-load'),
                        reloadTime = thisItem.data('widget-refresh') * 1000,
                        ajaxLoader = thisItem.children();

                    if (!thisItem.find('.jarviswidget-ajax-placeholder')
                        .length) {

                        /**
                         * Append a AJAX placeholder.
                         **/
                        thisItem.children('widget-body')
                            .append('<div class="jarviswidget-ajax-placeholder">' + self.o.loadingLabel +
                                '</div>');

                        /**
                         * If widget has a reload time refresh the widget, if the value
                         * has been set to 0 dont reload.
                         **/
                        if (thisItem.data('widget-refresh') > 0) {

                            /**
                             * Load file on start.
                             **/
                            self._loadAjaxFile(thisItem, pathToFile, thisItemHeader);

                            /**
                             * Set an interval to reload the content every XXX seconds.
                             * intervalArr.push(setInterval(intervalOne, 2000)  );
                             **/
                            $.intervalArr.push( setInterval(function () {self._loadAjaxFile(thisItem, pathToFile, thisItemHeader)}, reloadTime) );
                            
                        } else {

                            /**
                             * Load the content just once.
                             **/
                            self._loadAjaxFile(thisItem, pathToFile, thisItemHeader);

                        }
                    }
                });

            //******************************************************************//
            ////////////////////////////// SORTABLE //////////////////////////////
            //******************************************************************//

            /**
             * jQuery UI soratble, this allows users to sort the widgets.
             * Notice that this part needs the jquery-ui core to work.
             **/
            if (self.o.sortable === true && jQuery.ui) {
                var sortItem = self.obj.find(self.o.grid + '.sortable-grid')
                    .not('[data-widget-excludegrid]');
                sortItem.sortable({
                    items: sortItem.find(self.o.widgets + '.jarviswidget-sortable'),
                    connectWith: sortItem,
                    placeholder: self.o.placeholderClass,
                    cursor: 'move',
                    revert: true,
                    opacity: self.o.opacity,
                    delay: 200,
                    cancel: '.button-icon, #jarviswidget-fullscreen-mode > div',
                    zIndex: 10000,
                    handle: self.o.dragHandle,
                    forcePlaceholderSize: true,
                    forceHelperSize: true,
                    update: function (event, ui) {
                        /* run pre-loader in the widget */
                        self._runLoaderWidget(ui.item.children());
                        /* store the positions of the plugins */
                        self._savePositionWidget();
                        /**
                         * Run the callback function.
                         **/
                        if (typeof self.o.onChange == 'function') {
                            self.o.onChange.call(this, ui.item);
                        }
                    }
                });
            }

            //*****************************************************************//
            ////////////////////////// BUTTONS VISIBLE //////////////////////////
            //*****************************************************************//

            /**
             * Show and hide the widget control buttons, the buttons will be
             * visible if the users hover over the widgets header. At default the
             * buttons are always visible.
             **/
            if (self.o.buttonsHidden === true) {

                /**
                 * Show and hide the buttons.
                 **/
                self.widget.children('header')
                    .on('mouseenter.' + pluginName, function () {
                        $(this)
                            .children(self.o.pwCtrls)
                            .stop(true, true)
                            .fadeTo(100, 1.0);
                    })
					.on('mouseleave.' + pluginName, function () {
                        $(this)
                            .children(self.o.pwCtrls)
                            .stop(true, true)
                            .fadeTo(100, 0.0);
                    });
            }

            //*****************************************************************//
            ///////////////////////// CLICKEVENTS //////////////////////////
            //*****************************************************************//

            self._clickEvents();

            //*****************************************************************//
            ///////////////////// DELETE LOCAL STORAGE KEYS /////////////////////
            //*****************************************************************//

			if (self.storage.enabled) {
				/**
				 * Delete the settings key.
				 **/
				$(self.o.deleteSettingsKey)
					.on(clickEvent, this, function (e) {
                        var cleared = confirm(self.o.settingsKeyLabel);
                        if (cleared) {
                            localStorage.removeItem(keySettings);
                        }
						e.preventDefault();
					});
				/**
				 * Delete the position key.
				 **/
				$(self.o.deletePositionKey)
					.on(clickEvent, this, function (e) {
                        var cleared = confirm(self.o.positionKeyLabel);
                        if (cleared) {
                            localStorage.removeItem(keyPosition);
                        }
						e.preventDefault();
					});
			}

			initialized = true;
        },

        /**
         * Initialize storage.
         *
         * @param:
         **/
        _initStorage: function (storage) {

            //*****************************************************************//
            //////////////////////// LOCALSTORAGE CHECK /////////////////////////
            //*****************************************************************//

            storage.enabled = storage.enabled && !! function () {
                var result, uid = +new Date();
                try {
                    localStorage.setItem(uid, uid);
                    result = localStorage.getItem(uid) == uid;
                    localStorage.removeItem(uid);
                    return result;
                } catch (e) {}
            }();

			this._loadKeys();

            if (storage.enabled) {

				storage.getKeySettings = localStorage.getItem(storage.keySettings);
				storage.getKeyPosition = localStorage.getItem(storage.keyPosition);
				
            } // end if

        },

        /**
         * All of the click events.
         *
         * @param:
         **/
        _clickEvents: function () {

            var self = this;

            var headers = self.widget.children('header');

            //*****************************************************************//
            /////////////////////////// TOGGLE WIDGETS //////////////////////////
            //*****************************************************************//

            /**
             * Allow users to toggle the content of the widgets.
             **/
            headers.on(clickEvent, '.jarviswidget-toggle-btn', function (e) {

                var tWidget = $(this);
                var pWidget = tWidget.parents(self.o.widgets);

                /**
                 * Run function for the indicator image.
                 **/
                self._runLoaderWidget(tWidget);

                /**
                 * Change the class and hide/show the widgets content.
                 **/
                if (pWidget.hasClass('jarviswidget-collapsed')) {
                    tWidget.children()
                        .removeClass(self.toggleClass[1])
                        .addClass(self.toggleClass[0])
                        .parents(self.o.widgets)
                        .removeClass('jarviswidget-collapsed')
                        .children('[role=content]')
                        .slideDown(self.o.toggleSpeed, function () {
                            self._saveSettingsWidget();
                        });
                } else {
                    tWidget.children()
                        .removeClass(self.toggleClass[0])
                        .addClass(self.toggleClass[1])
                        .parents(self.o.widgets)
                        .addClass('jarviswidget-collapsed')
                        .children('[role=content]')
                        .slideUp(self.o.toggleSpeed, function () {
                            self._saveSettingsWidget();
                        });
                }

                /**
                 * Run the callback function.
                 **/
                if (typeof self.o.onToggle == 'function') {
                    self.o.onToggle.call(this, pWidget);
                }

                e.preventDefault();
            });

            //*****************************************************************//
            ///////////////////////// FULLSCREEN WIDGETS ////////////////////////
            //*****************************************************************//

            /**
             * Set fullscreen height function.
             **/
            function heightFullscreen() {
                if ($('#jarviswidget-fullscreen-mode')
                    .length) {

                    /**
                     * Setting height variables.
                     **/
                    var heightWindow = $(window)
                        .height();
                    var heightHeader = $('#jarviswidget-fullscreen-mode')
                        .children(self.o.widgets)
                        .children('header')
                        .height();

                    /**
                     * Setting the height to the right widget.
                     **/
                    $('#jarviswidget-fullscreen-mode')
                        .children(self.o.widgets)
                        .children('div')
                        .height(heightWindow - heightHeader - 15);
                }
            }

            /**
             * On click go to fullscreen mode.
             **/
            headers.on(clickEvent, '.jarviswidget-fullscreen-btn', function (e) {

                var thisWidget = $(this)
                    .parents(self.o.widgets);
                var thisWidgetContent = thisWidget.children('div');

                /**
                 * Run function for the indicator image.
                 **/
                self._runLoaderWidget($(this));

                /**
                 * Wrap the widget and go fullsize.
                 **/
                if ($('#jarviswidget-fullscreen-mode')
                    .length) {

                    /**
                     * Remove class from the body.
                     **/
                    $('.nooverflow')
                        .removeClass('nooverflow');

                    /**
                     * Unwrap the widget, remove the height, set the right
                     * fulscreen button back, and show all other buttons.
                     **/
                    thisWidget.unwrap('div')
                        .children('div')
                        .removeAttr('style')
                        .end()
                        .find('.jarviswidget-fullscreen-btn:first')
                        .children()
                        .removeClass(self.fullscreenClass[1])
                        .addClass(self.fullscreenClass[0])
                        .parents(self.pwCtrls)
                        .children('a')
                        .show();

                    /**
                     * Reset collapsed widgets.
                     **/
                    if (thisWidgetContent.hasClass('jarviswidget-visible')) {
                        thisWidgetContent.hide()
                            .removeClass('jarviswidget-visible');
                    }

                } else {

                    /**
                     * Prevent the body from scrolling.
                     **/
                    $('body')
                        .addClass('nooverflow');

                    /**
					 * Wrap, append it to the body, show the right button

					 * and hide all other buttons.
					 **/
                    thisWidget.wrap('<div id="jarviswidget-fullscreen-mode"/>')
                        .parent()
                        .find('.jarviswidget-fullscreen-btn:first')
                        .children()
                        .removeClass(self.fullscreenClass[0])
                        .addClass(self.fullscreenClass[1])
                        .parents(self.pwCtrls)
                        .children('a:not(.jarviswidget-fullscreen-btn)')
                        .hide();

                    /**
                     * Show collapsed widgets.
                     **/
                    if (thisWidgetContent.is(':hidden')) {
                        thisWidgetContent.show()
                            .addClass('jarviswidget-visible');
                    }
                }

                /**
                 * Run the set height function.
                 **/
                heightFullscreen();

                /**
                 * Run the callback function.
                 **/
                if (typeof self.o.onFullscreen == 'function') {
                    self.o.onFullscreen.call(this, thisWidget);
                }

                e.preventDefault();
            });

            /**
             * Run the set fullscreen height function when the screen resizes.
             **/
            $(window)
                .on('resize.' + pluginName, function () {

                    /**
                     * Run the set height function.
                     **/
                    heightFullscreen();
                });

            //*****************************************************************//
            //////////////////////////// EDIT WIDGETS ///////////////////////////
            //*****************************************************************//

            /**
             * Allow users to show/hide a edit box.
             **/
            headers.on(clickEvent, '.jarviswidget-edit-btn', function (e) {

                var tWidget = $(this)
                    .parents(self.o.widgets);

                /**
                 * Run function for the indicator image.
                 **/
                self._runLoaderWidget($(this));

                /**
                 * Show/hide the edit box.
                 **/
                if (tWidget.find(self.o.editPlaceholder)
                    .is(':visible')) {
                    $(this)
                        .children()
                        .removeClass(self.editClass[1])
                        .addClass(self.editClass[0])
                        .parents(self.o.widgets)
                        .find(self.o.editPlaceholder)
                        .slideUp(self.o.editSpeed, function () {
                            self._saveSettingsWidget();
                        });
                } else {
                    $(this)
                        .children()
                        .removeClass(self.editClass[0])
                        .addClass(self.editClass[1])
                        .parents(self.o.widgets)
                        .find(self.o.editPlaceholder)
                        .slideDown(self.o.editSpeed);
                }

                /**
                 * Run the callback function.
                 **/
                if (typeof self.o.onEdit == 'function') {
                    self.o.onEdit.call(this, tWidget);
                }

                e.preventDefault();
            });

            /**
             * Update the widgets title by using the edit input.
             **/
            $(self.o.editPlaceholder)
                .find('input')
                .keyup(function () {
                    $(this)
                        .parents(self.o.widgets)
                        .children('header')
                        .children('h2')
                        .text($(this)
                            .val());
                });

            /**
             * Set a custom style.
             **/
            headers.on(clickEvent, '[data-widget-setstyle]', function (e) {

                var val = $(this)
                    .data('widget-setstyle');
                var styles = '';

                /**
                 * Get all other styles, in order to remove it.
                 **/
                $(this)
                    .parents(self.o.editPlaceholder)
                    .find('[data-widget-setstyle]')
                    .each(function () {
                        styles += $(this)
                            .data('widget-setstyle') + ' ';
                    });

                /**
                 * Set the new style.
                 **/
                $(this)
                    .parents(self.o.widgets)
                    .attr('data-widget-attstyle', '' + val + '')
                    .removeClassPrefix('jarviswidget-color-')
                    .addClass(val);

                /**
                 * Run function for the indicator image.
                 **/
                self._runLoaderWidget($(this));

                /**
                 * Lets save the setings.
                 **/
                self._saveSettingsWidget();

                e.preventDefault();
            });

            //*****************************************************************//
            /////////////////////////// CUSTOM ACTION ///////////////////////////
            //*****************************************************************//

            /**
             * Allow users to show/hide a edit box.
             **/
            headers.on(clickEvent, '.jarviswidget-custom-btn', function (e) {

                var w = $(this)
                    .parents(self.o.widgets);

                /**
                 * Run function for the indicator image.
                 **/
                self._runLoaderWidget($(this));

                /**
                 * Start and end custom action.
                 **/
                if ($(this)
                    .children('.' + self.customClass[0])
                    .length) {
                    $(this)
                        .children()
                        .removeClass(self.customClass[0])
                        .addClass(self.customClass[1]);

                    /**
                     * Run the callback function.
                     **/
                    if (typeof self.o.customStart == 'function') {
                        self.o.customStart.call(this, w);
                    }
                } else {
                    $(this)
                        .children()
                        .removeClass(self.customClass[1])
                        .addClass(self.customClass[0]);

                    /**
                     * Run the callback function.
                     **/
                    if (typeof self.o.customEnd == 'function') {
                        self.o.customEnd.call(this, w);
                    }
                }

                /**
                 * Lets save the setings.
                 **/
                self._saveSettingsWidget();

                e.preventDefault();
            });

            //*****************************************************************//
            /////////////////////////// DELETE WIDGETS //////////////////////////
            //*****************************************************************//

            /**
             * Allow users to delete the widgets.
             **/
            headers.on(clickEvent, '.jarviswidget-delete-btn', function (e) {

                var tWidget = $(this)
                    .parents(self.o.widgets);
                var removeId = tWidget.attr('id');
                var widTitle = tWidget.children('header')
                    .children('h2')
                    .text();

                /**
                 * Delete the widgets with a confirm popup.
                 **/
                
                if ($.SmartMessageBox) {
   
                   $.SmartMessageBox({
	                    title: "<i class='fa fa-times' style='color:#ed1c24'></i> " + self.o.labelDelete +
	                        ' "' + widTitle + '"',
	                    content: self.o.deleteMsg,
	                    buttons: '[No][Yes]'
	                }, function (ButtonPressed) {
	                    //console.log(ButtonPressed);
	                    if (ButtonPressed == "Yes") {
	                        /**
	                         * Run function for the indicator image.
	                         **/
	                        self._runLoaderWidget($(this));
	
	                        /**
	                         * Delete the right widget.
	                         **/
	                        $('#' + removeId)
	                            .fadeOut(self.o.deleteSpeed, function () {
	
	                                $(this)
	                                    .remove();
	
	                                /**
	                                 * Run the callback function.
	                                 **/
	                                if (typeof self.o.onDelete == 'function') {
	                                    self.o.onDelete.call(this, tWidget);
	                                }
	                            });
	                    }
	
	                });
	                	
                } else {
                	
                	/**
                     * Delete the right widget.
                     **/
                    $('#' + removeId)
                    .fadeOut(self.o.deleteSpeed, function () {

                        $(this)
                            .remove();

                        /**
                         * Run the callback function.
                         **/
                        if (typeof self.o.onDelete == 'function') {
                            self.o.onDelete.call(this, tWidget);
                        }
                    });
                	
                }

                e.preventDefault();
            });

            //******************************************************************//
            /////////////////////////// REFRESH BUTTON ///////////////////////////
            //******************************************************************//

            /**
             * Refresh ajax upon clicking refresh link.
             **/
            headers.on(clickEvent, '.jarviswidget-refresh-btn', function (e) {

                /**
                 * Variables.
                 **/
                var rItem = $(this)
                    .parents(self.o.widgets),
                    pathToFile = rItem.data('widget-load'),
                    ajaxLoader = rItem.children(),
                    btn = $(this);

                /**
                 * Run the ajax function.
                 **/
                btn.button('loading');
                ajaxLoader.addClass("widget-body-ajax-loading");
                setTimeout(function () {
                    btn.button('reset');
                    ajaxLoader.removeClass("widget-body-ajax-loading");
                    self._loadAjaxFile(rItem, pathToFile, ajaxLoader);

                }, 1000);

                e.preventDefault();
            });
			
			headers = null;
        },

        /**
         * Destroy.
         *
         * @param:
         **/
        destroy: function () {
            var self = this, 
            namespace = '.' + pluginName, 
            sortItem = self.obj.find(self.o.grid + '.sortable-grid').not('[data-widget-excludegrid]');
            
            sortItem.sortable('destroy');
            self.widget.children('header').off(namespace);
			$(self.o.deleteSettingsKey).off(namespace);
			$(self.o.deletePositionKey).off(namespace);
			$(window).off(namespace);
            self.obj.removeData(pluginName);
        }
    };

    $.fn[pluginName] = function (option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data(pluginName);
            if (!data) {
				var options = typeof option == 'object' && option;
                $this.data(pluginName, (data = new Plugin(this, options)));
            }
            if (typeof option == 'string') {
                data[option]();
            }
        });
    };

    /**
     * Default settings(dont change).
     * You can globally override these options
     * by using $.fn.pluginName.key = 'value';
     **/

    $.fn[pluginName].defaults = {
        grid: 'section',
        widgets: '.jarviswidget',
        localStorage: true,
        deleteSettingsKey: '',
        settingsKeyLabel: 'Reset settings?',
        deletePositionKey: '',
        positionKeyLabel: 'Reset position?',
        sortable: true,
        buttonsHidden: false,
        toggleButton: true,
        toggleClass: 'min-10 | plus-10',
        toggleSpeed: 200,
        onToggle: function () {},
        deleteButton: true,
        deleteMsg:'Warning: This action cannot be undone',
        deleteClass: 'trashcan-10',
        deleteSpeed: 200,
        onDelete: function () {},
        editButton: true,
        editPlaceholder: '.jarviswidget-editbox',
        editClass: 'pencil-10 | delete-10',
        editSpeed: 200,
        onEdit: function () {},
        colorButton: true,
        fullscreenButton: true,
        fullscreenClass: 'fullscreen-10 | normalscreen-10',
        fullscreenDiff: 3,
        onFullscreen: function () {},
        customButton: true,
        customClass: '',
        customStart: function () {},
        customEnd: function () {},
        buttonOrder: '%refresh% %delete% %custom% %edit% %fullscreen% %toggle%',
        opacity: 1.0,
        dragHandle: '> header',
        placeholderClass: 'jarviswidget-placeholder',
        indicator: true,
        indicatorTime: 600,
        ajax: true,
        loadingLabel: 'loading...',
        timestampPlaceholder: '.jarviswidget-timestamp',
        timestampFormat: 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
        refreshButton: true,
        refreshButtonClass: 'refresh-10',
        labelError: 'Sorry but there was a error:',
        labelUpdated: 'Last Update:',
        labelRefresh: 'Refresh',
        labelDelete: 'Delete widget:',
        afterLoad: function () {},
        rtl: false,
        onChange: function () {},
        onSave: function () {},
        ajaxnav: true
    };

    /*
     * REMOVE CSS CLASS WITH PREFIX
     * Description: Remove classes that have given prefix. You have an element with classes
     * 				"widget widget-color-red"
     * Usage: $elem.removeClassPrefix('widget-color-');
     */

    $.fn.removeClassPrefix = function (prefix) {

        this.each(function (i, it) {
            var classes = it.className.split(" ")
                .map(function (item) {
                    return item.indexOf(prefix) === 0 ? "" : item;
                });
            //it.className = classes.join(" ");
            it.className = $.trim(classes.join(" "));

        });

        return this;
    };
})(jQuery, window, document);

/***/ }),

/***/ 1262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_animations_fade_in_top_decorator__ = __webpack_require__(1212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_index__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__WindowRef__ = __webpack_require__(1213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_index__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaAnaliseCadastroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoriaAnaliseCadastroComponent = (function () {
    function CategoriaAnaliseCadastroComponent(route, router, util, zone, winRef, categoriaAnaliseService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.util = util;
        this.zone = zone;
        this.winRef = winRef;
        this.categoriaAnaliseService = categoriaAnaliseService;
        this.tituloForm = 'Nova Categoria de Análise';
        this.titulo = 'Nova Categoria de Análise';
        this.codigo = '';
        this.breadcrumb = [];
        this.tituloModal = '';
        this.editCategoriaAnalise = { codigo: 0, titulo: '' };
        this.listaSubcategorias = [];
        this.breadcrumb = ['Categoria de Análise', 'Nova'];
        this.novacategoria = new __WEBPACK_IMPORTED_MODULE_3__model_index__["c" /* CategoriaAnalise */]();
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (value) { return _this.editItemCategoriaAnalise(value); },
            component: this
        };
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (value) { return _this.apagaItemCategoriaAnalise(value); },
            component: this
        };
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (value) { return _this.adicionaSubItemCategoriaAnalise(value); },
            component: this
        };
    }
    CategoriaAnaliseCadastroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.codigo = params['codigo'];
            console.log('Codigo categoria em edicao:', _this.codigo);
            _this.loadCategoriaAnalise();
        });
    };
    CategoriaAnaliseCadastroComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CategoriaAnaliseCadastroComponent.prototype.newCategoriaAnalise = function (form) {
        var _this = this;
        if (!form.pristine) {
            this.util.msgQuestion('Tem certeza que vai sair sem gravar?').then(function () { _this.router.navigateByUrl('/admin/categoria-analise'); }, function () { });
        }
        else {
            this.router.navigateByUrl('/admin/categoria-analise');
        }
    };
    CategoriaAnaliseCadastroComponent.prototype.loadCategoriaAnalise = function () {
        var _this = this;
        if (this.codigo) {
            this.categoriaAnaliseService.get(this.codigo).subscribe(function (resp) {
                _this.novacategoria = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__model_index__["c" /* CategoriaAnalise */](), resp);
                console.log('Registro em edicao:', _this.novacategoria);
                _this.tituloForm = _this.novacategoria.codigo;
                _this.titulo = 'Atualiza ' + _this.novacategoria.codigo;
                _this.breadcrumb = ['Categoria de Análise', _this.novacategoria.codigo];
                // Fabrica listaSubcategorias
                _this.refreshTreeview();
            }, function (err) { return _this.util.msgErroInfra(err); });
        }
    };
    CategoriaAnaliseCadastroComponent.prototype.changeLstener = function (payload) {
        console.log('change payload', payload);
    };
    CategoriaAnaliseCadastroComponent.prototype.loadItem = function (item, index) {
        var obj = { "content": "<span>" + item.descricao + "\n      <a class=\"btn btn-primary btn-xs icon white\"\n        onclick=\"window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.editItemCategoriaAnalise('" + index + "');})\"\n        href=\"javascript:void(0);\" title=\"Alterar\"><i class=\"fa fa-pencil \"></i></a>\n      <a class=\"btn btn-danger btn-xs icon white\"\n          onclick=\"window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.apagaItemCategoriaAnalise('" + index + "');})\"\n          href=\"javascript:void(0);\" title=\"Apaga item\"><i class=\"fa fa-times \"></i></a>\n      <a class=\"btn btn-primary btn-xs icon white\"\n        onclick=\"window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.adicionaSubItemCategoriaAnalise('" + index + "');})\"\n        href=\"javascript:void(0);\" title=\"Incluir Subcategoria\"><i class=\"fa fa-plus \"></i></a>\n      </span>" };
        obj['codigo'] = item.codigo;
        //if(item.children){
        //  obj['expanded'] = false;
        //  obj['children'] = [];
        //  item.children.forEach((itemFilho)=>{
        //    obj['children'].push(this.loadItem(itemFilho));
        //  });
        //}
        return obj;
    };
    CategoriaAnaliseCadastroComponent.prototype.refreshTreeview = function () {
        var _this = this;
        this.listaSubcategorias = [];
        this.novacategoria.Itens.forEach(function (item, index) {
            if (!item['deleted'])
                _this.listaSubcategorias.push(_this.loadItem(item, index));
        });
        console.log('refreshTreeview', this.listaSubcategorias);
    };
    CategoriaAnaliseCadastroComponent.prototype.adicionaItemCategoriaAnalise = function (valor) {
        $('.form-horizontal').find("input").change();
        $('.btn-submit').prop('disabled', false);
        var valorSelecionado = $('#item').val();
        if (valorSelecionado) {
            var item = { codigo: 0, descricao: valorSelecionado };
            if (valor) {
                //this.novacategoria.Itens[valor].push(item);
            }
            else {
                this.novacategoria.Itens.push(item);
            }
            this.refreshTreeview();
            console.log('Add sub==>', this.listaSubcategorias);
            $('#item').val('');
        }
        else {
            this.util.msgErro('Item de um categoria de análise não pode ser vazio');
        }
    };
    CategoriaAnaliseCadastroComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.codigo) {
            console.log('Reg a atualizar', this.novacategoria);
            this.categoriaAnaliseService.update(this.novacategoria).subscribe(function (resp) {
                if (resp.codret == 0) {
                    _this.util.msgSucessoEdicao(resp.mensagem);
                }
                else {
                    _this.util.msgErro(resp.mensagem);
                }
            }, function (err) { return _this.util.msgErroInfra(err); });
        }
        else {
            console.log('Reg a inserir', this.novacategoria);
            this.novacategoria['codigo'] = this.novacategoria.codigo.toUpperCase();
            this.categoriaAnaliseService.create(this.novacategoria).subscribe(function (resp) {
                if (resp.codret == 0) {
                    _this.util.msgSucesso(resp.mensagem);
                    _this.router.navigateByUrl('/admin/categoria-analise/' + resp.codigo);
                }
                else {
                    _this.util.msgErro(resp.mensagem);
                }
            }, function (err) { return _this.util.msgErroInfra(err); });
        }
    };
    CategoriaAnaliseCadastroComponent.prototype.apagaItemCategoriaAnalise = function (i) {
        $('.btn-submit').prop('disabled', false);
        this.novacategoria.Itens[i]['deleted'] = 1;
        this.refreshTreeview();
    };
    CategoriaAnaliseCadastroComponent.prototype.editItemCategoriaAnalise = function (i) {
        var obj = this.novacategoria.Itens[i];
        console.log('Edita', obj);
        this.editCategoriaAnalise = Object.assign({ indice: i }, obj);
        this.tituloModal = "Atualizando " + this.editCategoriaAnalise.codigo + " - " + this.editCategoriaAnalise.descricao;
        this.categoriaAnaliseModal.show();
    };
    CategoriaAnaliseCadastroComponent.prototype.adicionaSubItemCategoriaAnalise = function (i) {
        var obj = this.novacategoria.Itens[i];
        console.log('Adiciona item a ', obj);
        this.editCategoriaAnalise = { indice: 0, codigo: 0, descricao: '', itempai: i };
        this.tituloModal = "Adicionando novo subitem a " + obj['descricao'];
        this.categoriaAnaliseModal.show();
    };
    CategoriaAnaliseCadastroComponent.prototype.atualizaItemCategoriaAnalise = function () {
        $('.btn-submit').prop('disabled', false);
        if ('itempai' in this.editCategoriaAnalise) {
            console.log('Insere subcategoria');
        }
        else {
            console.log('Edita categoria item');
            this.novacategoria.Itens[this.editCategoriaAnalise.indice] = Object.assign(this.editCategoriaAnalise);
        }
        console.log('Registro de edicao 123', this.editCategoriaAnalise);
        console.log('Registro completo', this.novacategoria);
        //this.novacategoria.Itens[this.editCategoriaAnalise.indice] = Object.assign(this.editCategoriaAnalise);
        this.refreshTreeview();
        this.categoriaAnaliseModal.hide();
    };
    return CategoriaAnaliseCadastroComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('categoriaAnaliseModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["e" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["e" /* ModalDirective */]) === "function" && _a || Object)
], CategoriaAnaliseCadastroComponent.prototype, "categoriaAnaliseModal", void 0);
CategoriaAnaliseCadastroComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shared_animations_fade_in_top_decorator__["a" /* FadeInTop */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-form-elements',
        template: __webpack_require__(1319),
        styles: ['div.note-editable.panel-body{height: 180px;}']
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_index__["i" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_index__["i" /* UtilService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__WindowRef__["a" /* WindowRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_index__["l" /* CategoriaAnaliseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_index__["l" /* CategoriaAnaliseService */]) === "function" && _g || Object])
], CategoriaAnaliseCadastroComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=categoria-analise-cadastro.component.js.map

/***/ }),

/***/ 1263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WindowRef__ = __webpack_require__(1213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaAnaliseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriaAnaliseComponent = (function () {
    function CategoriaAnaliseComponent(categoriaAnaliseService, util, acl, router, zone, winRef) {
        var _this = this;
        this.categoriaAnaliseService = categoriaAnaliseService;
        this.util = util;
        this.acl = acl;
        this.router = router;
        this.zone = zone;
        this.winRef = winRef;
        this.options = {
            "iDisplayLength": 15,
            "oLanguage": { "sUrl": 'assets/api/langs/datatable-br.json' },
            "rowId": 'codigo',
            "searching": true,
            "columns": [
                {
                    "class": 'details-control',
                    "orderable": false,
                    "data": null,
                    "defaultContent": ''
                },
                { "data": "codigo" },
                { "data": "titulo" },
            ],
            "order": [[1, 'asc']]
        };
        this.detailsFormat = this.detailsFormat.bind(this);
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (value) { return _this.apagaCategoriaAnalise(value); },
            component: this
        };
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (value) { return _this.editaCategoriaAnalise(value); },
            component: this
        };
    }
    CategoriaAnaliseComponent.prototype.getCategorias = function () {
        var _this = this;
        this.tabelaCategorias.clear();
        this.categoriaAnaliseService.getAll().subscribe(function (resp) {
            resp.categorias_analise.forEach(function (item) {
                _this.tabelaCategorias.addRow(item);
            });
            _this.tabelaCategorias.draw();
        }, function (err) { return _this.util.msgErroInfra(err); });
    };
    CategoriaAnaliseComponent.prototype.detailsFormat = function (d) {
        var strCategorias = '';
        var numTotal = d.Itens.length;
        d.Itens.forEach(function (item) {
            strCategorias += "<tr>\n                          <td>" + item.descricao + "</td>\n                      </tr>";
        });
        var apagaStr = "  <button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'\n      onclick=\"window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.apagaCategoriaAnalise('" + d.codigo + "');})\">\n      <i class=\"fa fa-times \"></i>&nbsp;Apaga\n    </button>";
        var editStr = "<button class='btn btn-xs btn-info pull-right'\n      onclick=\"window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.editaCategoriaAnalise('" + d.codigo + "');})\">\n      <i class=\"fa fa-pencil \"></i>&nbsp;Edita\n    </button>";
        if (!this.acl.getPermission('categoria-analise', 'DELETE'))
            apagaStr = '';
        if (!this.acl.getPermission('categoria-analise', 'PUT'))
            editStr = '';
        return "<h4>Subcategorias</h4>\n              <div style=\"padding: 30px\">\n              <table cell-padding=\"5\" cell-spacing=\"0\" border=\"0\" class=\"table table-hover table-condensed\">\n              <thead>\n               <tr>\n                  <th>Descri\u00E7\u00E3o</th>\n               </tr>\n              </thead>\n              <tbody>\n              " + strCategorias + "\n              </tbody>\n              <tr>\n                 <td class=\"text-right\"><b>Total de registros:</b> &nbsp;" + numTotal + "</td>\n              </tr>\n              </tfoot>\n          </table>\n          <div style=\"padding: 5px\">\n              " + apagaStr + "\n              " + editStr + "\n\n          </div>\n          </div>";
    };
    CategoriaAnaliseComponent.prototype.userCan = function (router, method) {
        return this.acl.getPermission(router, method);
    };
    CategoriaAnaliseComponent.prototype.editaCategoriaAnalise = function (codigo) {
        this.router.navigate(['/admin/categoria-analise', codigo]);
    };
    CategoriaAnaliseComponent.prototype.apagaCategoriaAnalise = function (codigo) {
        var _this = this;
        this.util.msgQuestion("Tem certeza que vai apagar a categoria " + codigo + "?").then(function () {
            _this.categoriaAnaliseService.apaga(codigo).subscribe(function (resp) {
                console.log(resp);
                if (!resp.codret) {
                    _this.util.msgSucessoDelete(resp.mensagem);
                    _this.tabelaCategorias.deleteRow(codigo);
                }
                else
                    _this.util.msgErro(resp.mensagem);
            }, function (err) {
                console.log('Erro', err);
                _this.util.msgErroInfra("Erro ao apagar Categoria de Análise");
            });
        });
    };
    return CategoriaAnaliseComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('listaCategorias'),
    __metadata("design:type", Object)
], CategoriaAnaliseComponent.prototype, "tabelaCategorias", void 0);
CategoriaAnaliseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1320),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["l" /* CategoriaAnaliseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["l" /* CategoriaAnaliseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["i" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["i" /* UtilService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["v" /* AclService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["v" /* AclService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__WindowRef__["a" /* WindowRef */]) === "function" && _f || Object])
], CategoriaAnaliseComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=categoria-analise.component.js.map

/***/ }),

/***/ 1264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_animations_fade_in_top_decorator__ = __webpack_require__(1212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_index__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FonteCadastroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FonteCadastroComponent = (function () {
    function FonteCadastroComponent(route, router, fonteService, util) {
        this.route = route;
        this.router = router;
        this.fonteService = fonteService;
        this.util = util;
        this.tituloForm = 'Fonte de Dados';
        this.tituloinit = 'Nova Fonte de Dados';
        this.codigo = 0;
        this.breadcrumb = [];
        this.breadcrumb = ['Fonte de Dados', 'Nova'];
        this.tituloinit = 'Nova Fonte de Dados';
        this.novafonte = new __WEBPACK_IMPORTED_MODULE_3__model_index__["a" /* FonteParametro */]();
    }
    FonteCadastroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.codigo = params['codigo'];
            console.log('Codigo da fonte em edicao:', _this.codigo);
            _this.loadFonteDados();
        });
    };
    FonteCadastroComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    FonteCadastroComponent.prototype.newFonteDados = function (form) {
        var _this = this;
        if (!form.pristine) {
            this.util.msgQuestion('Tem certeza que vai sair sem gravar?').then(function () { _this.router.navigateByUrl('/admin/fonte-dados'); }, function () { });
        }
        else {
            this.router.navigateByUrl('/admin/fonte-dados');
        }
    };
    FonteCadastroComponent.prototype.loadFonteDados = function () {
        var _this = this;
        if (this.codigo) {
            this.fonteService.getItem(this.codigo).subscribe(function (resp) {
                _this.novafonte = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__model_index__["a" /* FonteParametro */](), resp);
                console.log('Registro em edicao:', _this.novafonte);
                _this.tituloinit = "Atualiza " + _this.novafonte.descricao;
                _this.breadcrumb = ['Fonte de Dados', _this.novafonte.sigla];
            }, function (err) { return _this.util.msgErroInfra(err); });
        }
    };
    FonteCadastroComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.novafonte = Object.assign(this.novafonte, form.value);
        if (form.valid) {
            if (this.novafonte.codigo) {
                this.fonteService.update(this.novafonte).subscribe(function (resp) {
                    if (resp.codret == 0) {
                        _this.util.msgSucessoEdicao(resp.mensagem);
                    }
                    else {
                        _this.util.msgErro(resp.mensagem);
                    }
                }, function (err) { return _this.util.msgErroInfra(err); });
            }
            else {
                this.fonteService.create(this.novafonte).subscribe(function (resp) {
                    if (resp.codret == 0) {
                        _this.util.msgSucesso(resp.mensagem);
                        _this.router.navigateByUrl('/admin/fonte-dados/' + resp.codigo);
                    }
                    else {
                        _this.util.msgErro(resp.mensagem);
                    }
                }, function (err) { return _this.util.msgErroInfra(err); });
            }
        }
        else {
            this.util.msgErro('Erro de validação de campos');
        }
    };
    return FonteCadastroComponent;
}());
FonteCadastroComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shared_animations_fade_in_top_decorator__["a" /* FadeInTop */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-form-elements',
        template: __webpack_require__(1321),
        styles: ['div.note-editable.panel-body{height: 180px;}']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["u" /* FonteParametroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_index__["u" /* FonteParametroService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["i" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_index__["i" /* UtilService */]) === "function" && _d || Object])
], FonteCadastroComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=fonte-cadastro.component.js.map

/***/ }),

/***/ 1265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WindowRef__ = __webpack_require__(1213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FonteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FonteComponent = (function () {
    function FonteComponent(fonteService, util, acl, router, zone, winRef) {
        var _this = this;
        this.fonteService = fonteService;
        this.util = util;
        this.acl = acl;
        this.router = router;
        this.zone = zone;
        this.winRef = winRef;
        this.options = {
            "iDisplayLength": 15,
            "oLanguage": { "sUrl": 'assets/api/langs/datatable-br.json' },
            "rowId": 'codigo',
            "searching": true,
            "columns": [
                {
                    "class": 'details-control',
                    "orderable": false,
                    "data": null,
                    "defaultContent": ''
                },
                { "data": "sigla" },
                { "data": "descricao" },
            ],
            "order": [[1, 'asc']]
        };
        this.detailsFormat = this.detailsFormat.bind(this);
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (value) { return _this.apagaFonteDados(value); },
            component: this
        };
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (value) { return _this.editaFonteDados(value); },
            component: this
        };
    }
    FonteComponent.prototype.getFontes = function () {
        var _this = this;
        this.tabelaFonte.clear();
        this.fonteService.getAll().subscribe(function (resp) {
            resp.fontes.forEach(function (item) {
                _this.tabelaFonte.addRow(item);
            });
            _this.tabelaFonte.draw();
        }, function (err) { return _this.util.msgErroInfra(err); });
    };
    FonteComponent.prototype.detailsFormat = function (d) {
        //console.log('Passei aqui', d);
        var strFonte = '';
        var numTotal = 1;
        strFonte += "<tr>\n                          <td>" + d.sigla + "</td>\n                          <td>" + d.descricao + "</td>\n                      </tr>";
        var apagaStr = "<button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'\n                      onclick=\"window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.apagaFonteDados('" + d.codigo + "');})\">\n                      <i class=\"fa fa-times \"></i>&nbsp;Apaga\n                    </button>";
        var editaStr = "\n                    <button class='btn btn-xs btn-info pull-right'\n                      onclick=\"window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.editaFonteDados('" + d.codigo + "');})\">\n                      <i class=\"fa fa-pencil \"></i>&nbsp;Edita\n                    </button>";
        if (!this.acl.getPermission('font-dados', 'DELETE'))
            apagaStr = '';
        if (!this.acl.getPermission('font-dados', 'PUT'))
            editaStr = '';
        return "<h4>Fonte de Dados</h4>\n              <div style=\"padding: 30px\">\n              <table cell-padding=\"5\" cell-spacing=\"0\" border=\"0\" class=\"table table-hover table-condensed\">\n              <thead>\n               <tr>\n                  <th width='10%'>Sigla</th>\n                  <th>Descri\u00E7\u00E3o</th>\n               </tr>\n              </thead>\n              <tbody>\n              " + strFonte + "\n              </tbody>\n              <tr>\n                 <td class=\"text-right\"><b>Total de registros:</b> &nbsp;" + numTotal + "</td>\n              </tr>\n              </tfoot>\n          </table>\n          <div style=\"padding: 5px\">\n              " + apagaStr + "\n              " + editaStr + "\n          </div>\n          </div>";
    };
    FonteComponent.prototype.editaFonteDados = function (codigo) {
        this.router.navigate(['/admin/fonte-dados', codigo]);
    };
    FonteComponent.prototype.apagaFonteDados = function (codigo) {
        var _this = this;
        this.fonteService.apaga(codigo).subscribe(function (resp) {
            //console.log(resp);
            if (!resp.codret) {
                _this.util.msgSucessoDelete(resp.mensagem);
                _this.tabelaFonte.deleteRow(codigo);
            }
            else
                _this.util.msgErro(resp.mensagem);
        }, function (err) { _this.util.msgErroInfra(JSON.parse(err._body).message); });
    };
    return FonteComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('listFonte'),
    __metadata("design:type", Object)
], FonteComponent.prototype, "tabelaFonte", void 0);
FonteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1322),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["u" /* FonteParametroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["u" /* FonteParametroService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["i" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["i" /* UtilService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["v" /* AclService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["v" /* AclService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__WindowRef__["a" /* WindowRef */]) === "function" && _f || Object])
], FonteComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=fonte.component.js.map

/***/ }),

/***/ 1266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_animations_fade_in_top_decorator__ = __webpack_require__(1212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_tag_categoria__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_index__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagCadastroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TagCadastroComponent = (function () {
    function TagCadastroComponent(route, router, tagCategoriaService, util) {
        this.route = route;
        this.router = router;
        this.tagCategoriaService = tagCategoriaService;
        this.util = util;
        this.tituloForm = 'Grupo de Marcadores';
        this.titulo = 'Novo Grupo de Marcador';
        this.codigo = 0;
        this.breadcrumb = [];
        this.tituloModal = '';
        this.editTagCategoria = { codigo: 0, descricao: '' };
        this.breadcrumb = ['Grupo de Marcador', 'Novo'];
        this.novatagcategoria = new __WEBPACK_IMPORTED_MODULE_3__model_tag_categoria__["a" /* TagCategoria */]();
    }
    TagCadastroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.codigo = params['codigo'];
            console.log('Codigo marcador em edicao:', _this.codigo);
            _this.loadCategoriaTag();
        });
    };
    TagCadastroComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TagCadastroComponent.prototype.newCategoriaTag = function (form) {
        console.log('Form', form.pristine);
        if (!form.pristine) {
            this.util.msgQuestion('Tem certeza que vai sair sem gravar?');
        }
        else {
            this.router.navigateByUrl('/admin/tag');
        }
    };
    TagCadastroComponent.prototype.loadCategoriaTag = function () {
        var _this = this;
        if (this.codigo) {
            this.tagCategoriaService.getItem(this.codigo).subscribe(function (resp) {
                _this.novatagcategoria = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__model_tag_categoria__["a" /* TagCategoria */](), resp);
                console.log('Registro em edicao:', _this.novatagcategoria);
                _this.titulo = 'Atualiza ' + _this.novatagcategoria.codigo;
                _this.breadcrumb = ['Grupo de Marcador', _this.novatagcategoria.codigo];
            }, function (err) { return _this.util.msgErroInfra(err); });
        }
    };
    TagCadastroComponent.prototype.adicionaMarcador = function () {
        $('.form-horizontal').find("input").change();
        var valorSelecionado = $('#item').val();
        if (valorSelecionado) {
            this.novatagcategoria.Tags.push({ codigo: 0, descricao: valorSelecionado });
            $('#item').val('');
        }
        else {
            this.util.msgErro('Marcador não pode ser vazio');
        }
    };
    TagCadastroComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log('onSubmit123', form.value);
        this.novatagcategoria = Object.assign(this.novatagcategoria, form.value);
        if (form.valid) {
            if (this.novatagcategoria.codigo) {
                this.tagCategoriaService.update(this.novatagcategoria).subscribe(function (resp) {
                    if (resp.codret == 0) {
                        _this.util.msgSucessoEdicao(resp.mensagem);
                    }
                    else {
                        _this.util.msgErro(resp.mensagem);
                    }
                }, function (err) { return _this.util.msgErroInfra(err); });
            }
            else {
                this.tagCategoriaService.create(this.novatagcategoria).subscribe(function (resp) {
                    if (resp.codret == 0) {
                        _this.util.msgSucesso(resp.mensagem);
                        _this.router.navigateByUrl('/admin/tag/' + _this.novatagcategoria.codigo);
                    }
                    else {
                        _this.util.msgErro(resp.mensagem);
                    }
                }, function (err) { return _this.util.msgErroInfra(err); });
            }
        }
        else {
            console.log(form);
            this.util.msgErro('Erro de validação de campos');
        }
    };
    TagCadastroComponent.prototype.apagaItemTagCategoria = function (i) {
        $('.form-horizontal').find("input").change();
        this.novatagcategoria.Tags[i]['deleted'] = 1;
    };
    TagCadastroComponent.prototype.editaItemTagCategoria = function (i) {
        console.log('Edita', this.novatagcategoria.Tags[i]);
        this.editTagCategoria = Object.assign({}, this.novatagcategoria.Tags[i], { indice: i });
        this.tituloModal = "Atualizando " + this.editTagCategoria.codigo + " - " + this.editTagCategoria.descricao;
        this.grupoTagModal.show();
    };
    TagCadastroComponent.prototype.atualizaItemTagCategoria = function () {
        this.novatagcategoria.Tags[this.editTagCategoria.indice] = Object.assign({}, this.editTagCategoria);
        this.grupoTagModal.hide();
    };
    return TagCadastroComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('grupoTagModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["e" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["e" /* ModalDirective */]) === "function" && _a || Object)
], TagCadastroComponent.prototype, "grupoTagModal", void 0);
TagCadastroComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shared_animations_fade_in_top_decorator__["a" /* FadeInTop */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-form-elements',
        template: __webpack_require__(1323),
        styles: ['div.note-editable.panel-body{height: 180px;}']
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_index__["j" /* TagCategoriaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_index__["j" /* TagCategoriaService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_index__["i" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_index__["i" /* UtilService */]) === "function" && _e || Object])
], TagCadastroComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=tag-cadastro.component.js.map

/***/ }),

/***/ 1267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WindowRef__ = __webpack_require__(1213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TagComponent = (function () {
    function TagComponent(tagService, util, acl, router, zone, winRef) {
        var _this = this;
        this.tagService = tagService;
        this.util = util;
        this.acl = acl;
        this.router = router;
        this.zone = zone;
        this.winRef = winRef;
        this.options = {
            "iDisplayLength": 15,
            "oLanguage": { "sUrl": 'assets/api/langs/datatable-br.json' },
            "rowId": 'codigo',
            "searching": true,
            "columns": [
                {
                    "class": 'details-control',
                    "orderable": false,
                    "data": null,
                    "defaultContent": ''
                },
                { "data": "descricao" },
            ],
            "order": [[1, 'asc']]
        };
        this.detailsFormat = this.detailsFormat.bind(this);
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (value) { return _this.apagaMarcadores(value); },
            component: this
        };
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (value) { return _this.editaMarcadores(value); },
            component: this
        };
    }
    TagComponent.prototype.getTags = function () {
        var _this = this;
        this.tabelaTags.clear();
        this.tagService.getAll().subscribe(function (resp) {
            console.log('Resp', resp);
            resp.tag_categorias.forEach(function (item) {
                _this.tabelaTags.addRow(item);
            });
            _this.tabelaTags.draw();
        }, function (err) { return _this.util.msgErroInfra(err); });
    };
    TagComponent.prototype.detailsFormat = function (d) {
        var strMarcadores = '';
        var numTotal = d.Tags.length;
        d.Tags.forEach(function (item) {
            strMarcadores += "<tr>\n                          <td>" + item.descricao + "</td>\n                      </tr>";
        });
        var apagaStr = "<button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'\n                      onclick=\"window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.apagaMarcadores('" + d.codigo + "');})\">\n                      <i class=\"fa fa-times \"></i>&nbsp;Apaga\n                      </button>";
        var editaStr = " <button class='btn btn-xs btn-info pull-right'\n                        onclick=\"window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.editaMarcadores('" + d.codigo + "');})\">\n                        <i class=\"fa fa-pencil \"></i>&nbsp;Edita\n                      </button>";
        if (!this.acl.getPermission('tag', 'PUT'))
            editaStr = '';
        if (!this.acl.getPermission('tag', 'DELETE'))
            apagaStr = '';
        return "<h4>Marcadores</h4>\n              <div style=\"padding: 30px\">\n              <table cell-padding=\"5\" cell-spacing=\"0\" border=\"0\" class=\"table table-hover table-condensed\">\n              <thead>\n               <tr>\n                  <th>Descri\u00E7\u00E3o</th>\n               </tr>\n              </thead>\n              <tbody>\n              " + strMarcadores + "\n              </tbody>\n              <tr>\n                 <td class=\"text-right\"><b>Total de registros:</b> &nbsp;" + numTotal + "</td>\n              </tr>\n              </tfoot>\n          </table>\n          <div style=\"padding: 5px\">\n             " + apagaStr + "\n             " + editaStr + "\n          </div>\n          </div>";
    };
    TagComponent.prototype.editaMarcadores = function (codigo) {
        this.router.navigate(['/admin/tag', codigo]);
    };
    TagComponent.prototype.apagaMarcadores = function (codigo) {
        var _this = this;
        this.util.msgQuestion("Tem certeza que vai apagar a categoria " + codigo + "?").then(function () {
            _this.tagService.apaga(codigo).subscribe(function (resp) {
                console.log(resp);
                if (!resp.codret) {
                    _this.util.msgSucessoDelete(resp.mensagem);
                    _this.tabelaTags.deleteRow(codigo);
                }
                else
                    _this.util.msgErro(resp.mensagem);
            }, function (err) { _this.util.msgErroInfra(JSON.parse(err._body).message); });
        });
    };
    return TagComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('listaTag'),
    __metadata("design:type", Object)
], TagComponent.prototype, "tabelaTags", void 0);
TagComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1324),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["j" /* TagCategoriaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["j" /* TagCategoriaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["i" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["i" /* UtilService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["v" /* AclService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["v" /* AclService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__WindowRef__["a" /* WindowRef */]) === "function" && _f || Object])
], TagComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=tag.component.js.map

/***/ }),

/***/ 1268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_animations_fade_in_top_decorator__ = __webpack_require__(1212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_unidade_medida__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnidadeMedidaCadastroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UnidadeMedidaCadastroComponent = (function () {
    function UnidadeMedidaCadastroComponent(route, router, unidadeMedidaService, util) {
        this.route = route;
        this.router = router;
        this.unidadeMedidaService = unidadeMedidaService;
        this.util = util;
        this.tituloForm = 'Unidade de Medida';
        this.tituloinit = 'Nova Unidade de Medida';
        this.codigo = 0;
        this.breadcrumb = [];
        this.breadcrumb = ['Unidade de Medida', 'Nova'];
        this.tituloinit = 'Nova Unidade de Medida';
        this.novaunidademedida = new __WEBPACK_IMPORTED_MODULE_3__model_unidade_medida__["a" /* UnidadeMedida */]();
    }
    UnidadeMedidaCadastroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.codigo = params['codigo'];
            console.log('Codigo unidade de medida em edicao:', _this.codigo);
            _this.loadUnidadeMedida();
        });
    };
    UnidadeMedidaCadastroComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    UnidadeMedidaCadastroComponent.prototype.newUnidadeMedida = function (form) {
        var _this = this;
        if (!form.pristine) {
            this.util.msgQuestion('Tem certeza que vai sair sem gravar?').then(function () { _this.router.navigateByUrl('/admin/unidade-medida'); }, function () { });
        }
        else {
            this.router.navigateByUrl('/admin/unidade-medida');
        }
    };
    UnidadeMedidaCadastroComponent.prototype.loadUnidadeMedida = function () {
        var _this = this;
        if (this.codigo) {
            this.unidadeMedidaService.getItem(this.codigo).subscribe(function (resp) {
                _this.novaunidademedida = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__model_unidade_medida__["a" /* UnidadeMedida */](), resp);
                console.log('Registro em edicao:', _this.novaunidademedida);
                _this.tituloinit = "Atualiza " + _this.novaunidademedida.descricao;
                _this.breadcrumb = ['Unidade de Medida', _this.novaunidademedida.codigo];
            }, function (err) { return _this.util.msgErroInfra(err); });
        }
    };
    UnidadeMedidaCadastroComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.novaunidademedida = Object.assign(this.novaunidademedida, form.value);
        if (form.valid) {
            if (this.novaunidademedida.codigo) {
                this.unidadeMedidaService.update(this.novaunidademedida).subscribe(function (resp) {
                    if (resp.codret == 0) {
                        _this.util.msgSucessoEdicao(resp.mensagem);
                    }
                    else {
                        _this.util.msgErro(resp.mensagem);
                    }
                }, function (err) { return _this.util.msgErroInfra(err); });
            }
            else {
                this.unidadeMedidaService.create(this.novaunidademedida).subscribe(function (resp) {
                    if (resp.codret == 0) {
                        _this.util.msgSucesso(resp.mensagem);
                        _this.router.navigateByUrl('/admin/unidade-medida/' + resp.codigo);
                    }
                    else {
                        _this.util.msgErro(resp.mensagem);
                    }
                }, function (err) { return _this.util.msgErroInfra(err); });
            }
        }
        else {
            this.util.msgErro('Erro de validação de campos');
        }
    };
    return UnidadeMedidaCadastroComponent;
}());
UnidadeMedidaCadastroComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shared_animations_fade_in_top_decorator__["a" /* FadeInTop */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-form-elements',
        template: __webpack_require__(1325),
        styles: ['div.note-editable.panel-body{height: 180px;}']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["e" /* UnidadeMedidaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_index__["e" /* UnidadeMedidaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["i" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_index__["i" /* UtilService */]) === "function" && _d || Object])
], UnidadeMedidaCadastroComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=unidade-medida-cadastro.component.js.map

/***/ }),

/***/ 1269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WindowRef__ = __webpack_require__(1213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnidadeMedidaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UnidadeMedidaComponent = (function () {
    function UnidadeMedidaComponent(unidadeMedidaService, util, acl, router, zone, winRef) {
        var _this = this;
        this.unidadeMedidaService = unidadeMedidaService;
        this.util = util;
        this.acl = acl;
        this.router = router;
        this.zone = zone;
        this.winRef = winRef;
        this.options = {
            "iDisplayLength": 15,
            "oLanguage": { "sUrl": 'assets/api/langs/datatable-br.json' },
            "rowId": 'codigo',
            "searching": true,
            "columns": [
                {
                    "class": 'details-control',
                    "orderable": false,
                    "data": null,
                    "defaultContent": ''
                },
                { "data": "descricao" },
            ],
            "order": [[1, 'asc']]
        };
        this.detailsFormat = this.detailsFormat.bind(this);
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (value) { return _this.apagaUnidadeMedida(value); },
            component: this
        };
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (value) { return _this.editaUnidadeMedida(value); },
            component: this
        };
    }
    UnidadeMedidaComponent.prototype.getUnidades = function () {
        var _this = this;
        this.tabelaUnidades.clear();
        this.unidadeMedidaService.getAll().subscribe(function (resp) {
            resp.unidades.forEach(function (item) {
                _this.tabelaUnidades.addRow(item);
            });
            _this.tabelaUnidades.draw();
        }, function (err) { return _this.util.msgErroInfra(err); });
    };
    UnidadeMedidaComponent.prototype.detailsFormat = function (d) {
        console.log('Passei aqui', d);
        var strUnidadeMedida = '';
        var numTotal = 1;
        strUnidadeMedida += "<tr>\n                          <td>" + d.descricao + "</td>\n                      </tr>";
        var apagaStr = "<button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'\n      onclick=\"window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.apagaUnidadeMedida('" + d.codigo + "');})\">\n      <i class=\"fa fa-times \"></i>&nbsp;Apaga\n    </button>";
        var editaStr = "<button class='btn btn-xs btn-info pull-right'\n      onclick=\"window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.editaUnidadeMedida('" + d.codigo + "');})\">\n      <i class=\"fa fa-pencil \"></i>&nbsp;Edita\n    </button>";
        if (!this.acl.getPermission('unidade-medida', 'PUT'))
            editaStr = '';
        if (!this.acl.getPermission('unidade-medida', 'DELETE'))
            apagaStr = '';
        return "<h4>Unidade de Medida</h4>\n              <div style=\"padding: 30px\">\n              <table cell-padding=\"5\" cell-spacing=\"0\" border=\"0\" class=\"table table-hover table-condensed\">\n              <thead>\n               <tr>\n                  <th>Descri\u00E7\u00E3o</th>\n               </tr>\n              </thead>\n              <tbody>\n              " + strUnidadeMedida + "\n              </tbody>\n              <tr>\n                 <td class=\"text-right\"><b>Total de registros:</b> &nbsp;" + numTotal + "</td>\n              </tr>\n              </tfoot>\n          </table>\n          <div style=\"padding: 5px\">\n            " + editaStr + "\n            " + apagaStr + "\n          </div>\n          </div>";
    };
    UnidadeMedidaComponent.prototype.editaUnidadeMedida = function (codigo) {
        this.router.navigate(['/admin/unidade-medida', codigo]);
    };
    UnidadeMedidaComponent.prototype.apagaUnidadeMedida = function (codigo) {
        var _this = this;
        this.unidadeMedidaService.apaga(codigo).subscribe(function (resp) {
            console.log(resp);
            if (!resp.codret) {
                _this.util.msgSucessoDelete(resp.mensagem);
                _this.tabelaUnidades.deleteRow(codigo);
            }
            else
                _this.util.msgErro(resp.mensagem);
        }, function (err) { _this.util.msgErroInfra(JSON.parse(err._body).message); });
    };
    return UnidadeMedidaComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('listUnidadeMedida'),
    __metadata("design:type", Object)
], UnidadeMedidaComponent.prototype, "tabelaUnidades", void 0);
UnidadeMedidaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1326),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["e" /* UnidadeMedidaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["e" /* UnidadeMedidaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["i" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["i" /* UtilService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["v" /* AclService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["v" /* AclService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__WindowRef__["a" /* WindowRef */]) === "function" && _f || Object])
], UnidadeMedidaComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=unidade-medida.component.js.map

/***/ }),

/***/ 1270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations_fade_in_top_decorator__ = __webpack_require__(1212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__WindowRef__ = __webpack_require__(1213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_index__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_index__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnidadeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UnidadeComponent = (function () {
    function UnidadeComponent(unidadeService, util, acl, zone, winRef) {
        var _this = this;
        this.unidadeService = unidadeService;
        this.util = util;
        this.acl = acl;
        this.zone = zone;
        this.winRef = winRef;
        this.listaUnidades = [];
        this.estilos = ['font-sm bg-color-blue txt-color-white', 'bg-color-green txt-color-white', 'bg-color-magenta txt-color-white'];
        this.icones = ["<i class=\"fa fa-institution fa-lg\"></i>", "<i class=\"fa  fa-building fa-lg\"></i>", "<i class=\"fa fa-deviantart fa-lg\"></i>"];
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (value) { return _this.newUnidade(value); },
            component: this
        };
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (value) { return _this.editUnidade(value); },
            component: this
        };
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (value) { return _this.deleteUnidade(value); },
            component: this
        };
        this.unidade = new __WEBPACK_IMPORTED_MODULE_4__model_index__["b" /* UnidadeResponsavel */]();
    }
    UnidadeComponent.prototype.newUnidade = function (codigo_pai) {
        var _this = this;
        if (codigo_pai) {
            this.unidadeService.getUnidade(codigo_pai).subscribe(function (resp) {
                console.log(resp);
                if (resp.unidade) {
                    _this.titulo = "Nova unidade subordinada a " + resp.unidade.sigla;
                }
                _this.unidade = new __WEBPACK_IMPORTED_MODULE_4__model_index__["b" /* UnidadeResponsavel */]();
                _this.unidade.unidade_pai = resp.unidade.codigo;
                _this.unidadeModal.show();
            });
        }
        else {
            this.titulo = "Nova Secretaria";
            this.unidade = new __WEBPACK_IMPORTED_MODULE_4__model_index__["b" /* UnidadeResponsavel */]();
            this.unidade.unidade_pai = null;
            this.unidadeModal.show();
        }
    };
    UnidadeComponent.prototype.editUnidade = function (codigo) {
        var _this = this;
        this.unidadeService.getUnidade(codigo).subscribe(function (resp) {
            console.log(resp);
            if (resp.unidade) {
                _this.titulo = "Atualiza Unidade " + resp.unidade.sigla;
                _this.unidade = resp.unidade;
            }
            _this.unidadeModal.show();
        });
    };
    UnidadeComponent.prototype.deleteUnidade = function (codigo) {
        var _this = this;
        this.unidadeService.apaga(codigo).subscribe(function (resp) {
            if (resp.codret == 0) {
                _this.util.msgSucessoDelete(resp.mensagem);
                _this.loadItensUnidade();
            }
            else {
                _this.util.msgErro(resp.mensagem);
            }
        }, function (err) { return _this.util.msgErroInfra(err); });
    };
    UnidadeComponent.prototype.saveUnidade = function (form) {
        var _this = this;
        if (form.valid) {
            console.log('Formulario valido', this.unidade);
            this.unidade.sigla = this.unidade.sigla.toUpperCase();
            if (this.unidade.codigo) {
                this.unidadeService.update(this.unidade).subscribe(function (resp) {
                    if (resp.codret == 0) {
                        _this.util.msgSucessoEdicao(resp.mensagem);
                        _this.loadItensUnidade(); //TODO: Melhorar tratamento
                        _this.unidadeModal.hide();
                    }
                    else {
                        _this.util.msgErro(resp.mensagem);
                    }
                }, function (err) { return _this.util.msgErroInfra(err); });
            }
            else {
                this.unidadeService.create(this.unidade).subscribe(function (resp) {
                    if (resp.codret == 0) {
                        _this.util.msgSucesso(resp.mensagem);
                        _this.loadItensUnidade(); //TODO: Melhorar tratamento
                        _this.unidadeModal.hide();
                    }
                    else {
                        _this.util.msgErro(resp.mensagem);
                    }
                }, function (err) { return _this.util.msgErroInfra(err); });
            }
            console.log(this.unidade);
        }
        else {
            console.log('Formulario invalido');
        }
    };
    UnidadeComponent.prototype.changeLstener = function (payload) {
        console.log('change payload', payload);
    };
    UnidadeComponent.prototype.userCan = function (router, method) {
        return this.acl.getPermission(router, method);
    };
    UnidadeComponent.prototype.ngOnInit = function () {
        this.loadItensUnidade();
    };
    UnidadeComponent.prototype.loadItensUnidade = function () {
        var _this = this;
        this.unidadeService.getUnidadesHierarchical().subscribe(function (resp) {
            if (resp.unidades) {
                console.log('Unidades', resp.unidades);
                _this.listaUnidades = [];
                resp.unidades.forEach(function (item) {
                    _this.listaUnidades.push(_this.loadItem(item));
                });
            }
        }, function (err) { _this.util.msgErroInfra(JSON.parse(err._body).message); });
    };
    UnidadeComponent.prototype.loadItem = function (item) {
        var _this = this;
        var incluiStr = "<button class='btn btn-xs btn-warning pull-right' style='margin-left:5px'\n    onclick=\"window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.newUnidade('" + item.codigo + "');})\">\n    <i class=\"fa fa-plus\"></i>&nbsp;Inclui\n  </button>";
        var editaStr = "<button class='btn btn-xs btn-info pull-right'\n        onclick=\"window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.editUnidade('" + item.codigo + "');})\">\n        <i class=\"fa fa-pencil \"></i>&nbsp;Edita\n    </button>";
        var apagaStr = "<button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'\n        onclick=\"window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.deleteUnidade('" + item.codigo + "');})\">\n        <i class=\"fa fa-times \"></i>&nbsp;Apaga</button>";
        if (!this.userCan('unidade', 'POST'))
            incluiStr = '';
        if (!this.userCan('unidade', 'PUT'))
            editaStr = '';
        if (!this.userCan('unidade', 'DELETE'))
            apagaStr = '';
        var obj = { "content": "<span class=\" " + this.estilos[item.nu_nivel - 1] + "\" style=\"line-height: 10px\">\n      <span style=\"vertical-align: middle\"> " + this.icones[item.nu_nivel - 1] + " " + item.sigla + " - " + item.nome + "</span>\n      <span style=\"vertical-align: middle\">" +
                (item.children ? "" : apagaStr)
                + editaStr
                + incluiStr + "\n      </span>\n    </span>" };
        if (item.children) {
            obj['expanded'] = false;
            obj['children'] = [];
            item.children.forEach(function (itemFilho) {
                obj['children'].push(_this.loadItem(itemFilho));
            });
        }
        return obj;
    };
    return UnidadeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('unidadeModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["e" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["e" /* ModalDirective */]) === "function" && _a || Object)
], UnidadeComponent.prototype, "unidadeModal", void 0);
UnidadeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_animations_fade_in_top_decorator__["a" /* FadeInTop */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(1327),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_index__["f" /* UnidadeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_index__["f" /* UnidadeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_index__["i" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_index__["i" /* UtilService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_index__["v" /* AclService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_index__["v" /* AclService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__WindowRef__["a" /* WindowRef */]) === "function" && _f || Object])
], UnidadeComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=unidade.component.js.map

/***/ }),

/***/ 1271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsuarioComponent = (function () {
    function UsuarioComponent(usuarioService, util) {
        this.usuarioService = usuarioService;
        this.util = util;
        this.options = {
            "iDisplayLength": 15,
            "oLanguage": { "sUrl": 'assets/api/langs/datatable-br.json' },
            "rowId": 'codigo',
            "searching": true,
            "columns": [
                {
                    "class": 'details-control',
                    "orderable": false,
                    "data": null,
                    "defaultContent": ''
                },
                { "data": "nome" },
                { "data": "cpf" },
                { "data": "email" },
                { "data": "ramal" },
                { "data": "celular" },
                { "data": "dt_atualizacao", render: function (data, type, full, meta) {
                        if (type == "display") {
                            var dt = new Date(data);
                            return dt.toLocaleDateString('pt-BR') + ' - ' + dt.toLocaleTimeString('pt-BR');
                        }
                        return data;
                    } },
            ],
            "order": [[1, 'asc']]
        };
    }
    UsuarioComponent.prototype.getUsuarios = function () {
        var _this = this;
        this.tabelaUsuarios.clear();
        this.usuarioService.getAll().subscribe(function (resp) {
            resp.users.forEach(function (item) {
                console.log(item);
                _this.tabelaUsuarios.addRow(item);
            });
            _this.tabelaUsuarios.draw();
        }, function (err) { return _this.util.msgErroInfra(err); });
    };
    UsuarioComponent.prototype.detailsFormat = function (d) {
        var strPerfil = '';
        var listaPerfil = { ADM: 'Administrativo', ANA: 'Analista', USR: 'Usuário' };
        // debugger;
        // d.Perfil.forEach(item => {
        //   strPerfil += `<tr>
        //                     <td style="width:100px">&nbsp;</td>
        //                     <td style="width:100px">${item}</td>
        //                     <td>${listaPerfil[item]}</td>
        //                 </tr>`;
        // });
        var convertObjectToString = function (obj) {
            var str = '';
            __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.forOwn(obj, function (v, k) {
                if (__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isObject(v)) {
                    str += "<p><b>" + k + "</b>:<blockquote style='font-size:12px;'>";
                    str += convertObjectToString(v);
                    str += "</blockquote></p>";
                }
                else {
                    str += "<p><b>" + k + "</b>:" + v + "</p>";
                }
            });
            return str;
        };
        strPerfil = convertObjectToString(d);
        return "<table cell-padding=\"5\" cell-spacing=\"0\" border=\"0\" class=\"table table-hover table-condensed\">\n              <tbody>\n              <tr><td style='font-size:12px;'>\n              " + strPerfil + "\n              </td></tr>\n              </tbody>\n          </table>";
    };
    return UsuarioComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('listaUsuario'),
    __metadata("design:type", Object)
], UsuarioComponent.prototype, "tabelaUsuarios", void 0);
UsuarioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1328),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["q" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["q" /* UsuarioService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["i" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["i" /* UtilService */]) === "function" && _b || Object])
], UsuarioComponent);

var _a, _b;
//# sourceMappingURL=usuario.component.js.map

/***/ }),

/***/ 1272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartDemoOptions", function() { return barChartDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinChartDemoOptions", function() { return sinChartDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "horizontalChartDemoOptions", function() { return horizontalChartDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salesChartDemoOptions", function() { return salesChartDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillChartDemoOptions", function() { return fillChartDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartDemoOptions", function() { return pieChartDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteStatsDemoOptions", function() { return siteStatsDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoUpdatingChartDemoOptions", function() { return autoUpdatingChartDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeDataSource", function() { return FakeDataSource; });
var colors = {
    "chartBorderColor": "#efefef",
    "chartGridColor": "#DDD",
    "charMain": "#E24913",
    "chartSecond": "#6595b4",
    "chartThird": "#FF9F01",
    "chartFourth": "#7e9d3a",
    "chartFifth": "#BD362F",
    "chartMono": "#000"
};
var barChartDemoOptions = {
    colors: [colors.chartSecond, colors.chartFourth, "#666", "#BBB"],
    grid: {
        show: true,
        hoverable: true,
        clickable: true,
        tickColor: colors.chartBorderColor,
        borderWidth: 0,
        borderColor: colors.chartBorderColor
    },
    legend: true,
    tooltip: true,
    tooltipOpts: {
        content: "<b>%x</b> = <span>%y</span>",
        defaultTheme: false
    }
};
var sinChartDemoOptions = {
    series: {
        lines: {
            show: true
        },
        points: {
            show: true
        }
    },
    grid: {
        hoverable: true,
        clickable: true,
        tickColor: colors.chartBorderColor,
        borderWidth: 0,
        borderColor: colors.chartBorderColor
    },
    tooltip: true,
    tooltipOpts: {
        //content : "Value <b>$x</b> Value <span>$y</span>",
        defaultTheme: false
    },
    colors: [colors.chartSecond, colors.chartFourth],
    yaxis: {
        min: -1.1,
        max: 1.1
    },
    xaxis: {
        min: 0,
        max: 15
    }
};
var horizontalChartDemoOptions = {
    colors: [colors.chartSecond, colors.chartFourth, "#666", "#BBB"],
    grid: {
        show: true,
        hoverable: true,
        clickable: true,
        tickColor: colors.chartBorderColor,
        borderWidth: 0,
        borderColor: colors.chartBorderColor
    },
    legend: true,
    tooltip: true,
    tooltipOpts: {
        content: "<b>%x</b> = <span>%y</span>",
        defaultTheme: false
    }
};
var salesChartDemoOptions = {
    xaxis: {
        mode: "time",
        tickLength: 5
    },
    series: {
        lines: {
            show: true,
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [{
                        opacity: 0.1
                    }, {
                        opacity: 0.15
                    }]
            }
        },
        //points: { show: true },
        shadowSize: 0
    },
    selection: {
        mode: "x"
    },
    grid: {
        hoverable: true,
        clickable: true,
        tickColor: colors.chartBorderColor,
        borderWidth: 0,
        borderColor: colors.chartBorderColor
    },
    tooltip: true,
    tooltipOpts: {
        content: "Your sales for <b>%x</b> was <span>$%y</span>",
        dateFormat: "%y-%0m-%0d",
        defaultTheme: false
    },
    colors: [colors.chartSecond]
};
var fillChartDemoOptions = {
    xaxis: {
        tickDecimals: 0
    },
    yaxis: {
        tickFormatter: function (v) {
            return v + " cm";
        }
    }
};
var pieChartDemoOptions = {
    series: {
        pie: {
            show: true,
            innerRadius: 0.5,
            radius: 1,
            label: {
                show: false,
                radius: 2 / 3,
                formatter: function (label, series) {
                    return '<div style="font-size:11px;text-align:center;padding:4px;color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
                },
                threshold: 0.1
            }
        }
    },
    legend: {
        show: true,
        noColumns: 1,
        labelFormatter: null,
        labelBoxBorderColor: "#000",
        container: null,
        position: "ne",
        margin: [5, 10],
        backgroundColor: "#efefef",
        backgroundOpacity: 1 // set to 0 to avoid background
    },
    grid: {
        hoverable: true,
        clickable: true
    }
};
var siteStatsDemoOptions = {
    series: {
        lines: {
            show: true,
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [{
                        opacity: 0.1
                    }, {
                        opacity: 0.15
                    }]
            }
        },
        points: {
            show: true
        },
        shadowSize: 0
    },
    yaxes: [{
            min: 20,
            tickLength: 5
        }],
    grid: {
        hoverable: true,
        clickable: true,
        tickColor: colors.chartBorderColor,
        borderWidth: 0,
        borderColor: colors.chartBorderColor
    },
    tooltip: true,
    tooltipOpts: {
        content: "%s for <b>%x:00 hrs</b> was %y",
        dateFormat: "%y-%0m-%0d",
        defaultTheme: false
    },
    colors: [colors.charMain, colors.chartSecond],
    xaxis: {
        mode: "time",
        tickLength: 10,
        ticks: 15,
        tickDecimals: 2
    },
    yaxis: {
        ticks: 15,
        tickDecimals: 0
    }
};
var autoUpdatingChartDemoOptions = {
    yaxis: {
        min: 0,
        max: 100
    },
    xaxis: {
        min: 0,
        max: 100
    },
    colors: [colors.chartFourth],
    series: {
        lines: {
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [{
                        opacity: 0.4
                    }, {
                        opacity: 0
                    }]
            },
            steps: false
        }
    }
};
var FakeDataSource = {
    data: [],
    total: 200,
    getRandomData: function () {
        if (this.data.length > 0)
            this.data = this.data.slice(1);
        // do a random walk
        while (this.data.length < this.total) {
            var prev = this.data.length > 0 ? this.data[this.data.length - 1] : 50;
            var y = prev + Math.random() * 10 - 5;
            if (y < 0)
                y = 0;
            if (y > 100)
                y = 100;
            this.data.push(y);
        }
        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < this.data.length; ++i)
            res.push([i, this.data[i]]);
        return res;
    }
};
//# sourceMappingURL=flot-examples.js.map

/***/ }),

/***/ 1273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations_fade_in_top_decorator__ = __webpack_require__(1212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_index__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__extensions_array_extension__ = __webpack_require__(1286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__extensions_array_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__extensions_array_extension__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndicadorCadastroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IndicadorCadastroComponent = (function () {
    function IndicadorCadastroComponent(classificacaoIndicadorService, classificacao6sIndicadorService, indicadorService, periodicidadeService, unidadeMedidaService, util, tagCategoriaService, categoriaAnaliseService, bancoDadosService, tipoConsultaService, route, router, unidadeService, granularidadeService, criterioAgregacaoService, consultaService, polaridadeService, fonteParametroService) {
        this.classificacaoIndicadorService = classificacaoIndicadorService;
        this.classificacao6sIndicadorService = classificacao6sIndicadorService;
        this.indicadorService = indicadorService;
        this.periodicidadeService = periodicidadeService;
        this.unidadeMedidaService = unidadeMedidaService;
        this.util = util;
        this.tagCategoriaService = tagCategoriaService;
        this.categoriaAnaliseService = categoriaAnaliseService;
        this.bancoDadosService = bancoDadosService;
        this.tipoConsultaService = tipoConsultaService;
        this.route = route;
        this.router = router;
        this.unidadeService = unidadeService;
        this.granularidadeService = granularidadeService;
        this.criterioAgregacaoService = criterioAgregacaoService;
        this.consultaService = consultaService;
        this.polaridadeService = polaridadeService;
        this.fonteParametroService = fonteParametroService;
        this.currenttab = 't1';
        this.msg_padrao = 'Não há dados cadastrados';
        this.tituloForm = 'Novo Indicador';
        this.titulo = 'Novo Indicador';
        this.tituloCabecalho = 'Cadastro de um novo indicador';
        this.breadcrumb = [];
        this.flag_update = false;
        this.secretaria_selecionada = {};
        this.options = { focus: true, height: 100, lang: 'pt-BR',
            toolbar: [
                // [groupName, [list of button]]
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['font', ['superscript', 'subscript']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['ctrl', ['undo', 'redo']]
            ] };
        this.colecaoClassificacao = [];
        this.colecaoClassificacao6s = [];
        this.colecaoPeriodicidade = [];
        this.colecaoUnidadeMedida = [];
        this.colecaoSecretaria = [];
        this.colecaoTagCategoria = [];
        this.colecaoCategoriaAnalise = [];
        this.colecaoIndicadores = [];
        this.colecaoTipoConsulta = [];
        this.colecaoBancoDados = [];
        this.colecaoUnidades = [];
        this.colecaoGranularidades = [];
        this.colecaoCriteriosAgregacao = [];
        this.colecaoPolaridades = [];
        this.colecaoFonteParametro = [];
        this.breadcrumb = ['Indicador', 'Novo'];
    }
    IndicadorCadastroComponent.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(20).then(__webpack_require__.bind(null, 1260));
        this.flag_update = false;
        this.indicador = new __WEBPACK_IMPORTED_MODULE_4__model_index__["e" /* Indicador */]();
        console.log('new indicador', this.indicador);
        this.classificacaoIndicadorService.getAll().subscribe(function (resp) {
            _this.colecaoClassificacao = resp.classificacoes;
        }, function (err) { return _this.util.msgErroInfra(err); });
        this.classificacao6sIndicadorService.getAll().subscribe(function (resp) {
            _this.colecaoClassificacao6s = resp.classificacoes;
        }, function (err) { return _this.util.msgErroInfra(err); });
        this.periodicidadeService.getAll().subscribe(function (resp) {
            _this.colecaoPeriodicidade = resp.periodicidades;
        }, function (err) { return _this.util.msgErroInfra(err); });
        this.unidadeMedidaService.getAll().subscribe(function (resp) {
            _this.colecaoUnidadeMedida = resp.unidades;
        }, function (err) { return _this.util.msgErroInfra(err); });
        this.tagCategoriaService.getAll().subscribe(function (resp) {
            _this.colecaoTagCategoria = resp.tag_categorias;
        }, function (err) { return _this.util.msgErroInfra(err); });
        this.categoriaAnaliseService.getAll().subscribe(function (resp) {
            _this.colecaoCategoriaAnalise = resp.categorias_analise;
        }, function (err) { return _this.util.msgErroInfra(err); });
        this.fonteParametroService.getAll().subscribe(function (resp) {
            _this.colecaoFonteParametro = resp.fontes;
        }, function (err) { return _this.util.msgErroInfra(err); });
        this.tipoConsultaService.getAll().subscribe(function (resp) {
            _this.colecaoTipoConsulta = resp.tipos_consulta;
        }, function (err) { return _this.util.msgErroInfra(err); });
        this.bancoDadosService.getAll().subscribe(function (resp) {
            _this.colecaoBancoDados = resp.banco_dados;
        }, function (err) { return _this.util.msgErroInfra(err); });
        this.indicadorService.getAll().subscribe(function (resp) {
            _this.colecaoIndicadores = resp.rows.filter(function (item) { return item.codigo != _this.indicador.codigo; }); //TODO: modificar para aplicar um filtro de codigo
        }, function (err) { return _this.util.msgErroInfra(err); });
        this.unidadeService.getAll().subscribe(function (resp) {
            _this.colecaoUnidades = resp.unidades;
        }, function (err) { return _this.util.msgErroInfra(err); });
        this.granularidadeService.getAll().subscribe(function (resp) {
            _this.colecaoGranularidades = resp.granularidade;
        }, function (err) { return _this.util.msgErroInfra(err); });
        this.criterioAgregacaoService.getAll().subscribe(function (resp) {
            _this.colecaoCriteriosAgregacao = resp.criterio_agregacao;
        }, function (err) { return _this.util.msgErroInfra(err); });
        this.polaridadeService.getAll().subscribe(function (resp) {
            _this.colecaoPolaridades = resp.polaridades;
        }, function (err) { return _this.util.msgErroInfra(err); });
        this.loadIndicador();
    };
    IndicadorCadastroComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $('.tags').on('change', function (e) {
            _this.indicador.tags = [];
            if (jQuery(e.target).val()) {
                jQuery(e.target).val().forEach(function (obj) {
                    _this.indicador.tags.push(obj);
                });
            }
        });
        $('.unidadeselect').on('change', function (e) {
            _this.indicador.UnidadeCodigo = jQuery(e.target).val();
        });
        $('.uniSuples').on('change', function (e) {
            _this.indicador.unidadesMedidaSuplementar = [];
            if (jQuery(e.target).val()) {
                jQuery(e.target).val().forEach(function (obj) {
                    _this.indicador.unidadesMedidaSuplementar.push(obj);
                });
            }
        });
        // $('.unidadeselect').on('change', (e) => {
        //   this.indicador.UnidadeCodigo=jQuery(e.target).val();
        // });
    };
    IndicadorCadastroComponent.prototype.loadIndicador = function () {
        var _this = this;
        console.log('loadIndicador');
        this.sub = this.route.params.subscribe(function (params) {
            console.log('loadIndicador', params);
            _this.indicador.codigo = params['codigo'];
            if (_this.indicador.codigo) {
                _this.indicadorService.get(_this.indicador.codigo).subscribe(function (resp) {
                    console.log('Registro em edicao:', _this.indicador);
                    _this.tituloForm = _this.indicador.codigo;
                    _this.titulo = 'Atualiza ' + _this.indicador.codigo;
                    _this.tituloCabecalho = 'Atualiza dados do indicador';
                    _this.breadcrumb = ['Indicador', _this.indicador.codigo];
                    _this.indicador = Object.assign(_this.indicador, resp);
                    $('.unidadeselect').val(_this.indicador.UnidadeCodigo);
                    $('.unidadeselect').trigger('change');
                    _this.flag_update = true;
                    if (resp && resp.hasOwnProperty('Tags'))
                        _this.updateTagList(resp.Tags);
                    if (resp && resp.hasOwnProperty('UnidadesMedidaSuplementar') &&
                        resp.UnidadesMedidaSuplementar.length > 0)
                        _this.updateUnidadesSuplList(resp.UnidadesMedidaSuplementar);
                }, function (err) { return _this.util.msgErroInfra(err); });
            }
        });
    };
    IndicadorCadastroComponent.prototype.updateUnidadesSuplList = function (uniSuples) {
        var options = this.selectUnisRef.nativeElement.options;
        var _loop_1 = function (i) {
            options[i].selected = uniSuples.find(function (item) { return item.codigo == options[i].value; }) != undefined;
        };
        for (var i = 0; i < options.length; i++) {
            _loop_1(i);
        }
        $('.uniSuples').trigger('change');
    };
    IndicadorCadastroComponent.prototype.updateTagList = function (tags) {
        var options = this.selectElRef.nativeElement.options;
        var _loop_2 = function (i) {
            options[i].selected = tags.find(function (item) { return item.codigo == options[i].value; }) != undefined;
        };
        for (var i = 0; i < options.length; i++) {
            _loop_2(i);
        }
        $('.tags').trigger('change');
    };
    IndicadorCadastroComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    IndicadorCadastroComponent.prototype.newIndicador = function (form) {
        var _this = this;
        if (!form.pristine) {
            this.util.msgQuestion('Tem certeza que vai sair sem gravar?').then(function () { _this.router.navigateByUrl('/admin/indicador'); }, function () { });
        }
        else {
            this.router.navigateByUrl('/admin/indicador');
        }
    };
    IndicadorCadastroComponent.prototype.editObjetivoRelevancia = function (flag) {
        var _this = this;
        this.isEditObjetivoRelevancia = flag;
        if (flag) {
            $('.objetivoRelevancia').summernote(this.options);
            $('.objetivoRelevancia').summernote('code', this.indicador.objetivoRelevancia);
        }
        else {
            this.indicador.objetivoRelevancia = $('.objetivoRelevancia').summernote('code');
            $('.objetivoRelevancia').summernote('destroy');
            this.indicadorService.updateObjetivoRelevancia(this.indicador.codigo, this.indicador.objetivoRelevancia).subscribe(function (resp) {
                if (resp.codret == 0) {
                    _this.util.msgSucesso(resp.mensagem);
                }
                else {
                    _this.util.msgErro(resp.mensagem);
                }
            }, function (err) { return _this.util.msgErroInfra(err); });
        }
    };
    IndicadorCadastroComponent.prototype.editConceituacao = function (flag) {
        var _this = this;
        this.isEditConceituacao = flag;
        if (flag) {
            $('.conceituacao').summernote(this.options);
            $('.conceituacao').summernote('code', this.indicador.conceituacao);
        }
        else {
            this.indicador.conceituacao = $('.conceituacao').summernote('code');
            $('.conceituacao').summernote('destroy');
            this.indicadorService.updateConceituacao(this.indicador.codigo, this.indicador.conceituacao).subscribe(function (resp) {
                if (resp.codret == 0) {
                    _this.util.msgSucesso(resp.mensagem);
                }
                else {
                    _this.util.msgErro(resp.mensagem);
                }
            }, function (err) { return _this.util.msgErroInfra(err); });
        }
    };
    IndicadorCadastroComponent.prototype.editMetodoCalculo = function (flag) {
        var _this = this;
        this.isEditMetodoCalculo = flag;
        if (flag) {
            $('.metodo').summernote(this.options);
            $('.metodo').summernote('code', this.indicador.metodo_calculo);
        }
        else {
            this.indicador.metodo_calculo = $('.metodo').summernote('code');
            $('.metodo').summernote('destroy');
            this.indicadorService.updateMetodoCalculo(this.indicador.codigo, this.indicador.metodo_calculo).subscribe(function (resp) {
                if (resp.codret == 0) {
                    _this.util.msgSucesso(resp.mensagem);
                }
                else {
                    _this.util.msgErro(resp.mensagem);
                }
            }, function (err) { return _this.util.msgErroInfra(err); });
        }
    };
    IndicadorCadastroComponent.prototype.editFonteDados = function (flag) {
        var _this = this;
        this.isEditFonteDados = flag;
        if (flag) {
            $('.fonte').html('<textarea id="fonte_dados" name="fonte_dados" class="form-control" placeholder="Fonte de dados" rows="1" ></textarea>');
            $('textarea#fonte_dados').val(this.indicador.fonte_dados);
        }
        else {
            this.indicador.fonte_dados = $('textarea#fonte_dados').val();
            this.indicadorService.updateFonteDados(this.indicador.codigo, this.indicador.fonte_dados).subscribe(function (resp) {
                if (resp.codret == 0) {
                    _this.util.msgSucesso(resp.mensagem);
                }
                else {
                    _this.util.msgErro(resp.mensagem);
                }
            }, function (err) { return _this.util.msgErroInfra(err); });
        }
    };
    IndicadorCadastroComponent.prototype.editInterpretacao = function (flag) {
        var _this = this;
        this.isEditInterpretacao = flag;
        if (flag) {
            $('.interpretacao').summernote(this.options);
            $('.interpretacao').summernote('code', this.indicador.interpretacao);
        }
        else {
            this.indicador.interpretacao = $('.interpretacao').summernote('code');
            $('.interpretacao').summernote('destroy');
            this.indicadorService.updateInterpretacao(this.indicador.codigo, this.indicador.interpretacao).subscribe(function (resp) {
                if (resp.codret == 0) {
                    _this.util.msgSucesso(resp.mensagem);
                }
                else {
                    _this.util.msgErro(resp.mensagem);
                }
            }, function (err) { return _this.util.msgErroInfra(err); });
        }
    };
    IndicadorCadastroComponent.prototype.editUsos = function (flag) {
        var _this = this;
        this.isEditUsos = flag;
        if (flag) {
            $('.usos').summernote(this.options);
            $('.usos').summernote('code', this.indicador.usos);
        }
        else {
            this.indicador.usos = $('.usos').summernote('code');
            $('.usos').summernote('destroy');
            this.indicadorService.updateUso(this.indicador.codigo, this.indicador.usos).subscribe(function (resp) {
                if (resp.codret == 0) {
                    _this.util.msgSucesso(resp.mensagem);
                }
                else {
                    _this.util.msgErro(resp.mensagem);
                }
            }, function (err) { return _this.util.msgErroInfra(err); });
        }
    };
    IndicadorCadastroComponent.prototype.editProcedimentoOperacional = function (flag) {
        var _this = this;
        this.isEditProcedimentoOperacional = flag;
        if (flag) {
            $('.procedimento_operacional').summernote(this.options);
            $('.procedimento_operacional').summernote('code', this.indicador.procedimento_operacional);
        }
        else {
            this.indicador.procedimento_operacional = $('.procedimento_operacional').summernote('code');
            $('.procedimento_operacional').summernote('destroy');
            this.indicadorService.updateProcedimentoOperacional(this.indicador.codigo, this.indicador.procedimento_operacional).subscribe(function (resp) {
                if (resp.codret == 0) {
                    _this.util.msgSucesso(resp.mensagem);
                }
                else {
                    _this.util.msgErro(resp.mensagem);
                }
            }, function (err) { return _this.util.msgErroInfra(err); });
        }
    };
    IndicadorCadastroComponent.prototype.editLimitacoes = function (flag) {
        var _this = this;
        this.isEditLimitacoes = flag;
        if (flag) {
            $('.limitacoes').summernote(this.options);
            $('.limitacoes').summernote('code', this.indicador.limitacoes);
        }
        else {
            this.indicador.limitacoes = $('.limitacoes').summernote('code');
            $('.limitacoes').summernote('destroy');
            this.indicadorService.updateLimitacao(this.indicador.codigo, this.indicador.limitacoes).subscribe(function (resp) {
                if (resp.codret == 0) {
                    _this.util.msgSucesso(resp.mensagem);
                }
                else {
                    _this.util.msgErro(resp.mensagem);
                }
            }, function (err) { return _this.util.msgErroInfra(err); });
        }
    };
    IndicadorCadastroComponent.prototype.editNotas = function (flag) {
        var _this = this;
        this.isEditNotas = flag;
        if (flag) {
            $('.notas').summernote(this.options);
            $('.notas').summernote('code', this.indicador.notas);
        }
        else {
            this.indicador.notas = $('.notas').summernote('code');
            $('.notas').summernote('destroy');
            this.indicadorService.updateNota(this.indicador.codigo, this.indicador.notas).subscribe(function (resp) {
                if (resp.codret == 0) {
                    _this.util.msgSucesso(resp.mensagem);
                }
                else {
                    _this.util.msgErro(resp.mensagem);
                }
            }, function (err) { return _this.util.msgErroInfra(err); });
        }
    };
    IndicadorCadastroComponent.prototype.editObservacoes = function (flag) {
        var _this = this;
        this.isEditObservacoes = flag;
        if (flag) {
            $('.observacoes').summernote(this.options);
            $('.observacoes').summernote('code', this.indicador.observacoes);
        }
        else {
            this.indicador.observacoes = $('.observacoes').summernote('code');
            $('.observacoes').summernote('destroy');
            this.indicadorService.updateObservacao(this.indicador.codigo, this.indicador.observacoes).subscribe(function (resp) {
                if (resp.codret == 0) {
                    _this.util.msgSucesso(resp.mensagem);
                }
                else {
                    _this.util.msgErro(resp.mensagem);
                }
            }, function (err) { return _this.util.msgErroInfra(err); });
        }
    };
    IndicadorCadastroComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var valor = Object.assign(this.indicador, form.value);
        $(':input[type="submit"]').prop('disabled', false);
        //console.log('form',form,  valor);
        if (form.valid && this.validacaoAdicional(valor)) {
            if (this.flag_update) {
                // Atualiza dados
                this.indicadorService.update(valor).subscribe(function (resp) {
                    if (resp.codret == 0) {
                        _this.util.msgSucessoEdicao(resp.mensagem);
                    }
                    else {
                        _this.util.msgErro(resp.mensagem);
                    }
                }, function (err) {
                    _this.util.msgErro(JSON.parse(err._body).message);
                });
            }
            else {
                // Inclui um novo
                valor['codigo'] = form.value.codigo_edit.toUpperCase();
                this.indicadorService.create(valor).subscribe(function (resp) {
                    if (resp.codret == 0) {
                        _this.util.msgSucesso(resp.mensagem);
                        _this.router.navigateByUrl('/admin/indicador/' + valor.codigo);
                    }
                    else {
                        _this.util.msgErro(resp.mensagem);
                    }
                }, function (err) {
                    _this.util.msgErro(JSON.parse(err._body).message);
                });
            }
        }
        else {
            this.util.msgErro('Erro de validação de campos');
        }
        return true;
    };
    IndicadorCadastroComponent.prototype.validacaoAdicional = function (valor) {
        var resposta = true;
        resposta = resposta && valor.UnidadeCodigo;
        //TODO: Não consegui fazer validação do bootstrap funcionar para o campo select2 da unidade
        if (!valor.UnidadeCodigo) {
            this.util.msgErro('Unidade é obrigatória');
        }
        return resposta;
    };
    IndicadorCadastroComponent.prototype.adicionaItemRelacionado = function () {
        var _this = this;
        var valorSelecionado = $('#item_relacionado').val();
        var id = $("#listInd option[value='" + valorSelecionado + "']").attr('codigo');
        if (id) {
            this.indicadorService.adicionaIndicadorRelacionado(this.indicador.id, id).subscribe(function (resp) {
                if (resp.codret == 0) {
                    _this.util.msgSucesso(resp.mensagem);
                    $('#item_relacionado').val('');
                    _this.loadIndicador();
                }
                else {
                    _this.util.msgErro(resp.mensagem);
                }
            }, function (err) { return _this.util.msgErroInfra(err); });
        }
        else {
            this.util.msgErro('Preencha o indicador relacionado');
        }
    };
    IndicadorCadastroComponent.prototype.apagaItemRelacionado = function (id) {
        var _this = this;
        this.indicadorService.deleteIndicadorRelacionado(this.indicador.id, id).subscribe(function (resp) {
            if (resp.codret == 0) {
                _this.util.msgSucesso(resp.mensagem);
                _this.loadIndicador();
            }
            else {
                _this.util.msgErro(resp.mensagem);
            }
        }, function (err) { return _this.util.msgErroInfra(err); });
    };
    IndicadorCadastroComponent.prototype.adicionaItemResponsavelGerencial = function () {
        var _this = this;
        var id = $('#unidade_gerencial').val();
        if (id) {
            console.log('adicionaItemResponsavelGerencial', id);
            this.indicadorService.adicionaResponsavelGerencial(this.indicador.id, id).subscribe(function (resp) {
                if (resp.codret == 0) {
                    _this.util.msgSucesso(resp.mensagem);
                    $('#unidade_gerencial').select2('val', '0');
                    _this.loadIndicador();
                }
                else {
                    _this.util.msgErro(resp.mensagem);
                }
            }, function (err) { return _this.util.msgErroInfra(err); });
        }
        else {
            this.util.msgErro('Preencha a unidade responsável gerencial');
        }
    };
    IndicadorCadastroComponent.prototype.deleteItemResponsavelGerencial = function (id) {
        var _this = this;
        this.indicadorService.deleteResponsavelGerencial(this.indicador.id, id).subscribe(function (resp) {
            if (resp.codret == 0) {
                _this.util.msgSucesso(resp.mensagem);
                _this.loadIndicador();
            }
            else {
                _this.util.msgErro(resp.mensagem);
            }
        }, function (err) { return _this.util.msgErroInfra(err); });
    };
    IndicadorCadastroComponent.prototype.adicionaItemResponsavelTecnico = function () {
        var _this = this;
        var id = $('#unidade_tecnica').val();
        if (id) {
            this.indicadorService.adicionaResponsavelTecnico(this.indicador.id, id).subscribe(function (resp) {
                if (resp.codret == 0) {
                    _this.util.msgSucesso(resp.mensagem);
                    $('#unidade_tecnica').select2('val', '0');
                    _this.loadIndicador();
                }
                else {
                    _this.util.msgErro(resp.mensagem);
                }
            }, function (err) { return _this.util.msgErroInfra(err); });
        }
        else {
            this.util.msgErro('Preencha o indicador relacionado');
        }
    };
    IndicadorCadastroComponent.prototype.deleteItemResponsaveTecnico = function (id) {
        var _this = this;
        this.indicadorService.deleteResponsavelTecnico(this.indicador.id, id).subscribe(function (resp) {
            if (resp.codret == 0) {
                _this.util.msgSucesso(resp.mensagem);
                _this.loadIndicador();
            }
            else {
                _this.util.msgErro(resp.mensagem);
            }
        }, function (err) { return _this.util.msgErroInfra(err); });
    };
    IndicadorCadastroComponent.prototype.adicionaCategoriaRelacionada = function () {
        var _this = this;
        var valorSelecionado = $('#categoria_relacionada').val();
        var codigo_categoria_analise = $("#listacat option[value='" + valorSelecionado + "']").attr('codigo');
        if (codigo_categoria_analise) {
            this.indicadorService.adicionaCategoriaRelacionada(this.indicador.id, codigo_categoria_analise).subscribe(function (resp) {
                if (resp.codret == 0) {
                    _this.util.msgSucesso(resp.mensagem);
                    $('#categoria_relacionada').val('');
                    _this.loadIndicador();
                }
                else {
                    _this.util.msgErro(resp.mensagem);
                }
            }, function (err) { return _this.util.msgErroInfra(err); });
        }
        else {
            this.util.msgErro('Preencha a categoria de análise');
        }
    };
    IndicadorCadastroComponent.prototype.apagaCategoriaRelacionada = function (codigo_categoria_analise) {
        var _this = this;
        this.indicadorService.deleteCategoriaRelacionada(this.indicador.id, codigo_categoria_analise).subscribe(function (resp) {
            if (resp.codret == 0) {
                _this.util.msgSucesso(resp.mensagem);
                _this.loadIndicador();
            }
            else {
                _this.util.msgErro(resp.mensagem);
            }
        }, function (err) { return _this.util.msgErroInfra(err); });
    };
    IndicadorCadastroComponent.prototype.formataNomeUnidade = function () {
        if (this.indicador.UnidadeResponsavel) {
            return "[" + this.indicador.UnidadeResponsavel.sigla + "] - " + this.indicador.UnidadeResponsavel.nome;
        }
        return '';
    };
    IndicadorCadastroComponent.prototype.formatTelaFloat = function (valor) {
        var ans = null;
        if (valor) {
            ans = String(valor).replace('.', ',');
        }
        return ans;
    };
    IndicadorCadastroComponent.prototype.loadData = function (codigo, tipo, componente) {
        var _this = this;
        console.log('Codigo', codigo);
        if (this.isIndicadorTemGrafico()) {
            this.consultaService.search(codigo, '-1', tipo).then(function (resp) {
                componente.add(_this.agruparesultindicador(codigo, resp));
            });
        }
    };
    IndicadorCadastroComponent.prototype.agruparesultindicador = function (codigo, arr) {
        var lcodigo = codigo.toLowerCase();
        var ans = arr.sort(function (a, b) { return a[lcodigo] < b[lcodigo] ? 1 : -1; });
        if (ans.length > 50) {
            ans = ans.slice(0, 50);
        }
        return ans;
    };
    IndicadorCadastroComponent.prototype.isIndicadorTemGrafico = function () {
        return this.indicador.ultima_atualizacao && this.indicador.GranularidadeCodigo > 2 && (this.indicador.CriterioAgregacaoCodigo != 0 || this.indicador.GranularidadeCodigo == 3);
    };
    IndicadorCadastroComponent.prototype.getLabel = function () {
        var ans = '';
        switch (this.indicador.Granularidade.sigla) {
            case 'MN':
                ans = 'local';
                break;
            case 'UF':
                ans = 'uf';
                break;
        }
        return ans;
    };
    return IndicadorCadastroComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tags'),
    __metadata("design:type", Object)
], IndicadorCadastroComponent.prototype, "selectElRef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('uniSuples'),
    __metadata("design:type", Object)
], IndicadorCadastroComponent.prototype, "selectUnisRef", void 0);
IndicadorCadastroComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_animations_fade_in_top_decorator__["a" /* FadeInTop */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-form-elements',
        template: __webpack_require__(1331),
        styles: ['div.note-editable.panel-body{height: 180px;}']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* ClassificacaoIndicadorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* ClassificacaoIndicadorService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* Classificacao6sIndicadorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* Classificacao6sIndicadorService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["g" /* IndicadorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["g" /* IndicadorService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* PeriodicidadeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* PeriodicidadeService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* UnidadeMedidaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* UnidadeMedidaService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["i" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["i" /* UtilService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["j" /* TagCategoriaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["j" /* TagCategoriaService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["l" /* CategoriaAnaliseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["l" /* CategoriaAnaliseService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["n" /* BancoDadosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["n" /* BancoDadosService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["m" /* TipoConsultaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["m" /* TipoConsultaService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* UnidadeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* UnidadeService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["o" /* GranularidadeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["o" /* GranularidadeService */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["p" /* CriterioAgregacaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["p" /* CriterioAgregacaoService */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["r" /* ConsultaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["r" /* ConsultaService */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["s" /* PolaridadeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["s" /* PolaridadeService */]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["u" /* FonteParametroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["u" /* FonteParametroService */]) === "function" && _t || Object])
], IndicadorCadastroComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
//# sourceMappingURL=indicador-cadastro.component.js.map

/***/ }),

/***/ 1274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_animations_fade_in_top_decorator__ = __webpack_require__(1212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_index__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__WindowRef__ = __webpack_require__(1213);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndicadorImportaListaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var IndicadorImportaListaComponent = (function () {
    function IndicadorImportaListaComponent(route, zone, winRef, indicadorService, util, acl, router) {
        var _this = this;
        this.route = route;
        this.zone = zone;
        this.winRef = winRef;
        this.indicadorService = indicadorService;
        this.util = util;
        this.acl = acl;
        this.router = router;
        this.titulo = '';
        this.tipo = 3;
        this.colecaoIndicadores = [];
        this.options = {
            "iDisplayLength": 15,
            "oLanguage": { "sUrl": 'assets/api/langs/datatable-br.json' },
            "rowId": 'codigo',
            "searching": true,
            "columns": [
                {
                    "class": 'details-control',
                    "orderable": false,
                    "data": null,
                    "defaultContent": ''
                },
                { "data": "titulo" },
                { "data": "codigo" },
                { "data": "PeriodicidadeAtualizacao.descricao" },
                { "data": "ultima_atualizacao" },
                { "data": "tipo_consulta", "visible": false },
            ],
            "order": [[1, 'asc']]
        };
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (value, titulo) { return _this.importFile(value, titulo); },
            component: this
        };
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (value) { return _this.openForm(value); },
            component: this
        };
    }
    IndicadorImportaListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newArquivo = new __WEBPACK_IMPORTED_MODULE_5__model_index__["d" /* Arquivo */]();
        this.indicadorSelecionado = new __WEBPACK_IMPORTED_MODULE_5__model_index__["e" /* Indicador */]();
        this.sub = this.route.params.subscribe(function (params) {
            _this.tipo = params['tipo'];
            _this.titulo = _this.tipo && _this.tipo == 3 ? "Importação" : "Formulário";
            console.log('Tipo', _this.tipo);
            _this.getIndicadores();
        });
    };
    IndicadorImportaListaComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    IndicadorImportaListaComponent.prototype.detailsFormat = function (d) {
        var tituloBotao = d.tipo_consulta == 3 ? "Importa" : "Novo registro dados";
        var func = d.tipo_consulta == 3 ? "window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.importFile('" + d.codigo + "', '" + d.titulo + "');})"
            : "window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.openForm('" + d.codigo + "');})";
        var tituloSubPainel = d.tipo_consulta == 3 ? "Arquivos" : "Dados digitados";
        return "\n      <h4 style=\"padding-left: 30px; padding-top: 5px\">" + tituloSubPainel + "</h4>\n              <div style=\"padding: 30px\">\n              <table cell-padding=\"5\" cell-spacing=\"0\" border=\"0\" class=\"table table-hover table-condensed\">\n                <thead>\n                <tr>\n                  <th>#</th>\n                  <th>Tipo</th>\n                  <th>Arquivo</th>\n                  <th>Respons\u00E1vel</th>\n                  <th>Data</th>\n                  <th>Situa\u00E7\u00E3o</th>\n                  <th>&nbsp;</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                  <td>1</td>\n                  <td>Planilha</td>\n                  <td>importa_dados.xls</td>\n                  <td>Andr\u00E9 de Souza Campos</td>\n                  <td>15/11/2017 13:45</td>\n                  <td>Sucesso</td>\n                  <td>\n                      <a class=\"btn btn-info btn-xs icon white\" title=\"Seleciona registro\"><i class=\"fa fa-check\"></i></a>\n                      <a class=\"btn btn-warning btn-xs icon white\" title=\"Visualiza Log\"><i class=\"fa fa-file\"></i></a>\n                      <a class=\"btn btn-danger btn-xs icon white\" title=\"Apaga registro\"><i class=\"fa fa-file\"></i></a>\n                  </td>\n                </tr>\n                </tbody>\n            </table>\n            <div style=\"padding-top: 15px\">\n                <button class='btn btn-xs btn-info pull-right'\n                  onclick=\"" + func + "\">\n                  <i class=\"fa fa-pencil \"></i>&nbsp;" + tituloBotao + "\n                </button>\n            </div>\n            </div>";
    };
    IndicadorImportaListaComponent.prototype.getIndicadores = function () {
        var _this = this;
        this.tabelaIndicadores.clear();
        if (this.tabelaIndicadores.isInicializado()) {
            this.indicadorService.getPorTipoConsulta(this.tipo).subscribe(function (resp) {
                console.log('Resultado', resp);
                if (resp.count > 0) {
                    _this.colecaoIndicadores = resp.rows;
                    _this.tabelaIndicadores.addRows(resp.rows);
                    _this.tabelaIndicadores.draw();
                }
            }, function (err) { return _this.util.msgErroInfra(err); });
        }
    };
    IndicadorImportaListaComponent.prototype.importFile = function (codigo, titulo) {
        this.newArquivo = new __WEBPACK_IMPORTED_MODULE_5__model_index__["d" /* Arquivo */]();
        console.log('Conjunto', this.colecaoIndicadores);
        console.log('Selecionado', this.colecaoIndicadores.filter(function (item) { return item.codigo == codigo; }));
        this.indicadorSelecionado = this.colecaoIndicadores.filter(function (item) { return item.codigo === codigo; })[0];
        this.importaModal.show();
    };
    IndicadorImportaListaComponent.prototype.openForm = function (codigo) {
        this.formModal.show();
    };
    IndicadorImportaListaComponent.prototype.fileChangeEvent = function (fileInput) {
        //this.newArquivo = new Arquivo();
        var file = fileInput.target.files[0];
        this.newArquivo.file = file;
        console.log('fileinput', file, this.newArquivo);
        this.newArquivo.nameFile = file.name;
        this.newArquivo.tamanhoFile = file.size;
        this.newArquivo.formato = file.type;
        this.newArquivo.dataFile = file.lastModifiedDate;
    };
    return IndicadorImportaListaComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('listaIndicadores'),
    __metadata("design:type", Object)
], IndicadorImportaListaComponent.prototype, "tabelaIndicadores", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('importaModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["e" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["e" /* ModalDirective */]) === "function" && _a || Object)
], IndicadorImportaListaComponent.prototype, "importaModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('formModal'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["e" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["e" /* ModalDirective */]) === "function" && _b || Object)
], IndicadorImportaListaComponent.prototype, "formModal", void 0);
IndicadorImportaListaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shared_animations_fade_in_top_decorator__["a" /* FadeInTop */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(1332),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__WindowRef__["a" /* WindowRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["g" /* IndicadorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_index__["g" /* IndicadorService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["i" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_index__["i" /* UtilService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["v" /* AclService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_index__["v" /* AclService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _j || Object])
], IndicadorImportaListaComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=indicador-importa-lista.component.js.map

/***/ }),

/***/ 1275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations_fade_in_top_decorator__ = __webpack_require__(1212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__WindowRef__ = __webpack_require__(1213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndicadorListaUnidadeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Unidade = (function () {
    function Unidade() {
        this.isInformal = false;
        this.codigo = null;
    }
    return Unidade;
}());
var IndicadorListaUnidadeComponent = (function () {
    function IndicadorListaUnidadeComponent(unidadeService, util, zone, winRef) {
        var _this = this;
        this.unidadeService = unidadeService;
        this.util = util;
        this.zone = zone;
        this.winRef = winRef;
        this.listaUnidades = [];
        this.estilos = ['font-sm bg-color-blue txt-color-white', 'bg-color-green txt-color-white', 'bg-color-magenta txt-color-white'];
        this.icones = ["<i class=\"fa fa-institution fa-lg\"></i>", "<i class=\"fa  fa-building fa-lg\"></i>", "<i class=\"fa fa-deviantart fa-lg\"></i>"];
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (value) { return _this.newUnidade(value); },
            component: this
        };
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (value) { return _this.editUnidade(value); },
            component: this
        };
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (value) { return _this.deleteUnidade(value); },
            component: this
        };
        this.unidade = new Unidade();
    }
    IndicadorListaUnidadeComponent.prototype.newUnidade = function (codigo_pai) {
        var _this = this;
        if (codigo_pai) {
            this.unidadeService.getUnidade(codigo_pai).subscribe(function (resp) {
                console.log(resp);
                if (resp.unidade) {
                    _this.titulo = "Nova unidade subordinada a " + resp.unidade.sigla;
                }
                _this.unidade = new Unidade();
                _this.unidade.unidade_pai = resp.unidade.codigo;
                _this.unidadeModal.show();
            });
        }
        else {
            this.titulo = "Nova Secretaria";
            this.unidade = new Unidade();
            this.unidade.unidade_pai = null;
            this.unidadeModal.show();
        }
    };
    IndicadorListaUnidadeComponent.prototype.editUnidade = function (codigo) {
        var _this = this;
        this.unidadeService.getUnidade(codigo).subscribe(function (resp) {
            console.log(resp);
            if (resp.unidade) {
                _this.titulo = "Atualiza Unidade " + resp.unidade.sigla;
                _this.unidade = resp.unidade;
            }
            _this.unidadeModal.show();
        });
    };
    IndicadorListaUnidadeComponent.prototype.deleteUnidade = function (codigo) {
        var _this = this;
        this.unidadeService.apaga(codigo).subscribe(function (resp) {
            if (resp.codret == 0) {
                _this.util.msgSucessoDelete(resp.mensagem);
                _this.loadItensUnidade();
            }
            else {
                _this.util.msgErro(resp.mensagem);
            }
        }, function (err) { return _this.util.msgErroInfra(err); });
    };
    IndicadorListaUnidadeComponent.prototype.saveUnidade = function (form) {
        var _this = this;
        if (form.valid) {
            console.log('Formulario valido', this.unidade);
            this.unidade.sigla = this.unidade.sigla.toUpperCase();
            if (this.unidade.codigo) {
                this.unidadeService.update(this.unidade).subscribe(function (resp) {
                    if (resp.codret == 0) {
                        _this.util.msgSucessoEdicao(resp.mensagem);
                        _this.loadItensUnidade(); //TODO: Melhorar tratamento
                        _this.unidadeModal.hide();
                    }
                    else {
                        _this.util.msgErro(resp.mensagem);
                    }
                }, function (err) { return _this.util.msgErroInfra(err); });
            }
            else {
                this.unidadeService.create(this.unidade).subscribe(function (resp) {
                    if (resp.codret == 0) {
                        _this.util.msgSucesso(resp.mensagem);
                        _this.loadItensUnidade(); //TODO: Melhorar tratamento
                        _this.unidadeModal.hide();
                    }
                    else {
                        _this.util.msgErro(resp.mensagem);
                    }
                }, function (err) { return _this.util.msgErroInfra(err); });
            }
            console.log(this.unidade);
        }
        else {
            console.log('Formulario invalido');
        }
    };
    IndicadorListaUnidadeComponent.prototype.changeLstener = function (payload) {
        console.log('change payload', payload);
    };
    IndicadorListaUnidadeComponent.prototype.ngOnInit = function () {
        this.loadItensUnidade();
    };
    IndicadorListaUnidadeComponent.prototype.loadItensUnidade = function () {
        var _this = this;
        this.unidadeService.getUnidadesHierarchical().subscribe(function (resp) {
            if (resp.unidades) {
                console.log('Unidades', resp.unidades);
                _this.listaUnidades = [];
                resp.unidades.forEach(function (item) {
                    _this.listaUnidades.push(_this.loadItem(item));
                });
            }
        }, function (err) { _this.util.msgErroInfra(JSON.parse(err._body).message); });
    };
    IndicadorListaUnidadeComponent.prototype.loadItem = function (item) {
        var _this = this;
        var obj = { "content": "<span class=\" " + this.estilos[item.nu_nivel - 1] + "\" style=\"line-height: 10px\">\n      <span style=\"vertical-align: middle\"> " + this.icones[item.nu_nivel - 1] + " " + item.sigla + " - " + item.nome + "</span>\n      <span style=\"vertical-align: middle\">" +
                (item.children ? "" : "<button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'\n        onclick=\"window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.deleteUnidade('" + item.codigo + "');})\">\n        <i class=\"fa fa-times \"></i>&nbsp;Apaga</button>")
                + ("<button class='btn btn-xs btn-info pull-right'\n        onclick=\"window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.editUnidade('" + item.codigo + "');})\">\n        <i class=\"fa fa-pencil \"></i>&nbsp;Edita\n      </button>\n      <button class='btn btn-xs btn-warning pull-right' style='margin-left:5px'\n        onclick=\"window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.newUnidade('" + item.codigo + "');})\">\n        <i class=\"fa fa-plus\"></i>&nbsp;Inclui\n      </button>\n      </span>\n    </span>") };
        if (item.children) {
            obj['expanded'] = false;
            obj['children'] = [];
            item.children.forEach(function (itemFilho) {
                obj['children'].push(_this.loadItem(itemFilho));
            });
        }
        return obj;
    };
    return IndicadorListaUnidadeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('unidadeModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["e" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["e" /* ModalDirective */]) === "function" && _a || Object)
], IndicadorListaUnidadeComponent.prototype, "unidadeModal", void 0);
IndicadorListaUnidadeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_animations_fade_in_top_decorator__["a" /* FadeInTop */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(1333),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["f" /* UnidadeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_index__["f" /* UnidadeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["i" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_index__["i" /* UtilService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__WindowRef__["a" /* WindowRef */]) === "function" && _e || Object])
], IndicadorListaUnidadeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=indicador-lista-unidade.component.js.map

/***/ }),

/***/ 1276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_animations_fade_in_top_decorator__ = __webpack_require__(1212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__WindowRef__ = __webpack_require__(1213);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndicadorListaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { environment } from '../../../environments/environment';
var IndicadorListaComponent = (function () {
    function IndicadorListaComponent(zone, winRef, indicadorService, util, acl, router) {
        var _this = this;
        this.zone = zone;
        this.winRef = winRef;
        this.indicadorService = indicadorService;
        this.util = util;
        this.acl = acl;
        this.router = router;
        this.pesquisa = {};
        this.options = {
            "iDisplayLength": 15,
            "oLanguage": { "sUrl": 'assets/api/langs/datatable-br.json' },
            "rowId": 'codigo',
            "searching": true,
            "columns": [
                {
                    "class": 'details-control',
                    "orderable": false,
                    "data": null,
                    "defaultContent": ''
                },
                { "data": "titulo" },
                { "data": "codigo" },
                { "data": "descricao", "visible": false },
                { "data": "conceituacao", "visible": false },
                { "data": "ativo", render: function (data, type, full, meta) {
                        if (type == "display") {
                            return data ? "<span class='label label-success'>ATIVO</span>" : "<span class='label label-default'>INATIVO</span>";
                        }
                        return data;
                    } },
                { "data": "privado", render: function (data, type, full, meta) {
                        if (type == "display") {
                            return data ? "<span class='label label-warning'>PRIVADO</span>" : "<span class='label label-primary'>PÚBLICO</span>";
                        }
                        return data;
                    } }
            ],
            "order": [[1, 'asc']]
        };
        this.detailsFormat = this.detailsFormat.bind(this);
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (value) { return _this.apagaIndicador(value); },
            component: this
        };
        winRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (value) { return _this.editaIndicador(value); },
            component: this
        };
    }
    IndicadorListaComponent.prototype.ngOnInit = function () {
        this.loadIndicadorPorTag();
        this.loadIndicadorPorUnidade();
    };
    IndicadorListaComponent.prototype.getIndicadores = function () {
        var _this = this;
        this.tabelaIndicadores.clear();
        this.indicadorService.getAll(null, null, this.formataPesquisa(this.pesquisa)).subscribe(function (resp) {
            console.log(resp);
            if (resp.count > 0) {
                resp.rows.forEach(function (item) {
                    _this.tabelaIndicadores.addRow(item);
                });
                _this.tabelaIndicadores.draw();
            }
        }, function (err) { return _this.util.msgErroInfra(err); });
    };
    IndicadorListaComponent.prototype.apagaIndicador = function (codigo) {
        var _this = this;
        this.util.msgQuestion("Tem certeza que vai apagar o indicador " + codigo + "?").then(function () {
            _this.indicadorService.delete(codigo).subscribe(function (resp) {
                if (!resp.codret) {
                    _this.util.msgSucessoDelete(resp.mensagem);
                    _this.tabelaIndicadores.deleteRow(codigo);
                }
                else
                    _this.util.msgErro(resp.mensagem);
            }, function (err) {
                _this.util.msgErroInfra(JSON.parse(err._body).message);
            });
        });
    };
    IndicadorListaComponent.prototype.editaIndicador = function (codigo) {
        this.router.navigate(['/admin/indicador', codigo]);
    };
    IndicadorListaComponent.prototype.detailsFormat = function (d) {
        var tags = '';
        debugger;
        if (d.Tags.length) {
            tags += '<tr><td>Marcador(es):</td><td colspan="5">';
            d.Tags.forEach(function (item) {
                tags += "<span class=\"badge badge-info\">" + item.descricao + "</span>";
            });
            tags += '</td></tr>';
        }
        var remove = this.acl.getPermission('indicador', 'DELETE', d.Unidade.codigo);
        var removeStr = '';
        if (remove) {
            removeStr = "<button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'\n                    onclick=\"window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.apagaIndicador('" + d.codigo + "');})\">\n                    <i class=\"fa fa-times \"></i>&nbsp;Apaga\n                  </button>";
        }
        var edit = this.acl.getPermission('indicador', 'PUT', d.Unidade.codigo);
        var editStr = '';
        if (edit) {
            editStr = " <button class='btn btn-xs btn-info pull-right'\n          onclick=\"window.angularComponentRef.zone.run(() => {window.angularComponentRef.component.editaIndicador('" + d.codigo + "');})\">\n          <i class=\"fa fa-pencil \"></i>&nbsp;Edita\n       </button>";
        }
        return "<table cell-padding=\"5\" cell-spacing=\"0\" border=\"0\" class=\"table table-hover table-condensed\">\n            <tbody>\n            <tr>\n                <td style=\"width:100px\">T\u00EDtulo Resumido:</td>\n                <td colspan=\"5\">" + d.titulo + "</td>\n            </tr>\n            <tr>\n                <td>Descri\u00E7\u00E3o:</td>\n                <td colspan=\"5\">" + d.descricao + "</td>\n            </tr>\n            <tr>\n                <td>Conceito:</td>\n                <td colspan=\"5\">" + (d.conceituacao || '') + "</td>\n            </tr>\n            <tr>\n                <td >Un. de medida: </td><td>" + d.UnidadeMedida.descricao + "</td>\n                <td>Periodicidade de atualiza\u00E7\u00E3o: &nbsp;" + d.PeriodicidadeAtualizacao.descricao + "</td>\n                <td>Periodicidade de avalia\u00E7\u00E3o: &nbsp;" + d.PeriodicidadeAvaliacao.descricao + "</td>\n                <td colspan=\"2\">Periodicidade de monitoramento: &nbsp;" + d.PeriodicidadeMonitoramento.descricao + "</td>\n            </tr>\n            " + tags + "\n            <tr>\n                <td>Tipo</td>\n                <td colspan=\"5\">\n                 " + (d.acumulativo ? "<span class='label label-info'>ACUMULATIVO</span>" : "<span class='label label-default'>NÃO ACUMULATIVO</span>") + "\n                \n                 " + removeStr + "\n                \n                  " + editStr + "\n                </td>\n            </tbody>\n        </table>";
    };
    IndicadorListaComponent.prototype.loadIndicadorPorTag = function () {
        var _this = this;
        this.indicadorService.getCountPorTag().subscribe(function (resp) {
            //console.log('Tags',resp.tags);
            _this.listaIndicadorPorTag = resp.tags;
        });
    };
    IndicadorListaComponent.prototype.loadIndicadorPorUnidade = function () {
        var _this = this;
        this.indicadorService.getCountPorUnidade().subscribe(function (resp) {
            //console.log('Unidades',resp.unidades);
            _this.listaIndicadorPorUnidade = resp.unidades;
        });
    };
    IndicadorListaComponent.prototype.buscaPorTag = function (codigo, sigla) {
        this.pesquisa['tag'] = [codigo, sigla];
        this.getIndicadores();
    };
    IndicadorListaComponent.prototype.buscaPorUnidade = function (codigo, nome) {
        this.pesquisa['unidade'] = [codigo, nome];
        this.getIndicadores();
    };
    IndicadorListaComponent.prototype.formataPesquisa = function (objeto) {
        var resposta = '';
        if ('query' in objeto) {
            resposta += "query=" + objeto['query'] + "&";
        }
        if ('tag' in objeto) {
            resposta += "tag=" + objeto['tag'][0] + "&";
        }
        if ('unidade' in objeto) {
            resposta += "secretaria=" + objeto['unidade'][0] + "&";
        }
        return resposta;
    };
    IndicadorListaComponent.prototype.formataTela = function (objeto) {
        var resposta = '';
        if ('query' in objeto) {
            resposta += "<span class=\"badge bg-color-greenLight\">" + objeto['query'] + "</span>&nbsp;";
        }
        if ('tag' in objeto) {
            resposta += "<span class=\"badge bg-color-orange\">" + objeto['tag'][1] + "</span>&nbsp;";
        }
        if ('unidade' in objeto) {
            resposta += "<span class=\"badge bg-color-default\">" + objeto['unidade'][1] + "</span>&nbsp;";
        }
        return resposta;
    };
    IndicadorListaComponent.prototype.limpaFiltro = function () {
        this.pesquisa = {};
        this.getIndicadores();
    };
    IndicadorListaComponent.prototype.isEmpty = function (objeto) {
        return objeto && Object.keys(objeto).length == 0;
    };
    return IndicadorListaComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('listaIndicadores'),
    __metadata("design:type", Object)
], IndicadorListaComponent.prototype, "tabelaIndicadores", void 0);
IndicadorListaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shared_animations_fade_in_top_decorator__["a" /* FadeInTop */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(1334),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__WindowRef__["a" /* WindowRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["g" /* IndicadorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["g" /* IndicadorService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["i" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["i" /* UtilService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["v" /* AclService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["v" /* AclService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _f || Object])
], IndicadorListaComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=indicador-lista.component.js.map

/***/ }),

/***/ 1277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utils_notification_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PainelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PainelComponent = (function () {
    function PainelComponent(route, notificationService, indicadorService, usuarioService, util, parametroService) {
        this.route = route;
        this.notificationService = notificationService;
        this.indicadorService = indicadorService;
        this.usuarioService = usuarioService;
        this.util = util;
        this.parametroService = parametroService;
        this.totalIndicadores = 0;
        this.listaIndicadores = [];
        this.listaUsers = [];
    }
    PainelComponent.prototype.ngOnInit = function () {
        //console.log('Teste', this.route.snapshot.queryParams);
        if (this.route.snapshot.queryParams['q'] === 'login') {
            this.notificationService.smallBox({
                title: "Sucesso",
                content: "Login efetuado!",
                color: "#739E73",
                iconSmall: "fa fa-thumbs-up bounce animated",
                timeout: 4000
            });
            this.loadIndicadorPorUnidade();
        }
        this.loadSolicitacoesPendentes();
        this.parametroService.load();
    };
    PainelComponent.prototype.aprovaSolicitacao = function (codigo) {
        var _this = this;
        this.usuarioService.aprovaSolicitacaoPerfil(codigo).subscribe(function (resp) {
            _this.util.msgSucessoEdicao(resp.mensagem);
            _this.loadSolicitacoesPendentes();
        }, function (err) { return _this.util.msgErroInfra(err); });
    };
    PainelComponent.prototype.rejeitaSolicitacao = function (codigo) {
        var _this = this;
        this.usuarioService.rejeitaSolicitacaoPerfil(codigo).subscribe(function (resp) {
            _this.util.msgSucessoEdicao(resp.mensagem);
            _this.loadSolicitacoesPendentes();
        }, function (err) { return _this.util.msgErroInfra(err); });
    };
    PainelComponent.prototype.loadSolicitacoesPendentes = function () {
        var _this = this;
        this.usuarioService.getPorSituacao(0).subscribe(function (resp) {
            console.log('Usuarios:', resp);
            _this.listaUsers = resp.users;
        });
    };
    PainelComponent.prototype.loadIndicadorPorUnidade = function () {
        var _this = this;
        this.totalIndicadores = 0;
        this.listaIndicadores = [];
        this.indicadorService.getCountPorUnidade().subscribe(function (resp) {
            console.log('Unidades', resp.unidades);
            resp.unidades.forEach(function (item) {
                var obj = {};
                obj['label'] = item.sigla;
                obj['value'] = item.numero_indicadores;
                _this.totalIndicadores = _this.totalIndicadores + (+obj['value']);
                _this.listaIndicadores.push(obj);
            });
        });
    };
    return PainelComponent;
}());
PainelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(1335)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["g" /* IndicadorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["g" /* IndicadorService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["q" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["q" /* UsuarioService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["i" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["i" /* UtilService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["h" /* ParametroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["h" /* ParametroService */]) === "function" && _f || Object])
], PainelComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=painel.component.js.map

/***/ }),

/***/ 1278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PerfilComponent = (function () {
    function PerfilComponent(util) {
        this.util = util;
        this.user = {};
    }
    PerfilComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        console.log('user', this.user);
        //this.perfilModal.show();
    };
    PerfilComponent.prototype.getDate = function () {
        var data = new Date();
        //return data.toLocaleDateString('pt-BR') + ' - ' + data.toLocaleTimeString('pt-BR');
        return data.toLocaleString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    };
    PerfilComponent.prototype.editItemPerfil = function () {
        this.perfilModal.show();
    };
    return PerfilComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('perfilModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["e" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["e" /* ModalDirective */]) === "function" && _a || Object)
], PerfilComponent.prototype, "perfilModal", void 0);
PerfilComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1336),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["i" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["i" /* UtilService */]) === "function" && _b || Object])
], PerfilComponent);

var _a, _b;
//# sourceMappingURL=perfil.component.js.map

/***/ }),

/***/ 1279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgramaComponent = (function () {
    function ProgramaComponent() {
    }
    return ProgramaComponent;
}());
ProgramaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1337),
    }),
    __metadata("design:paramtypes", [])
], ProgramaComponent);

//# sourceMappingURL=programa.component.js.map

/***/ }),

/***/ 1283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__painel_painel_component__ = __webpack_require__(1277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__indicador_indicador_lista_component__ = __webpack_require__(1276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__indicador_indicador_cadastro_component__ = __webpack_require__(1273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__indicador_indicador_lista_unidade_component__ = __webpack_require__(1275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__indicador_indicador_importa_lista_component__ = __webpack_require__(1274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__programa_programa_component__ = __webpack_require__(1279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cadastros_auxiliares_usuario_component__ = __webpack_require__(1271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cadastros_auxiliares_categoria_analise_cadastro_component__ = __webpack_require__(1262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cadastros_auxiliares_categoria_analise_component__ = __webpack_require__(1263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cadastros_auxiliares_tag_cadastro_component__ = __webpack_require__(1266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cadastros_auxiliares_tag_component__ = __webpack_require__(1267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__cadastros_auxiliares_unidade_medida_cadastro_component__ = __webpack_require__(1268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__cadastros_auxiliares_unidade_medida_component__ = __webpack_require__(1269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__cadastros_auxiliares_fonte_cadastro_component__ = __webpack_require__(1264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__cadastros_auxiliares_fonte_component__ = __webpack_require__(1265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__perfil_perfil_component__ = __webpack_require__(1278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__cadastros_auxiliares_unidade_component__ = __webpack_require__(1270);
/* unused harmony export homeRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRouting; });


// Itens de indicadores




// Itens de planos

// Itens auxiliares











var homeRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__painel_painel_component__["a" /* PainelComponent */],
        data: { pageTitle: 'Admin' }
    },
    {
        path: 'painel',
        component: __WEBPACK_IMPORTED_MODULE_1__painel_painel_component__["a" /* PainelComponent */],
        data: { pageTitle: 'Painel' }
    },
    {
        path: 'indicador',
        component: __WEBPACK_IMPORTED_MODULE_3__indicador_indicador_cadastro_component__["a" /* IndicadorCadastroComponent */],
        data: { pageTitle: 'Novo indicador' }
    },
    {
        path: 'indicador/:codigo',
        component: __WEBPACK_IMPORTED_MODULE_3__indicador_indicador_cadastro_component__["a" /* IndicadorCadastroComponent */],
        data: { pageTitle: 'Edita indicador' }
    },
    {
        path: 'indicadorlista',
        component: __WEBPACK_IMPORTED_MODULE_2__indicador_indicador_lista_component__["a" /* IndicadorListaComponent */],
        data: { pageTitle: 'Lista Indicadores' }
    },
    {
        path: 'indicadorlistaunidade',
        component: __WEBPACK_IMPORTED_MODULE_4__indicador_indicador_lista_unidade_component__["a" /* IndicadorListaUnidadeComponent */],
        data: { pageTitle: 'Lista Indicadores por Unidade' }
    },
    {
        path: 'programa',
        component: __WEBPACK_IMPORTED_MODULE_6__programa_programa_component__["a" /* ProgramaComponent */],
        data: { pageTitle: 'Programas - Instrumentos de Gestão' }
    },
    {
        path: 'usuario',
        component: __WEBPACK_IMPORTED_MODULE_7__cadastros_auxiliares_usuario_component__["a" /* UsuarioComponent */],
        data: { pageTitle: 'Lista de usuários' }
    },
    {
        path: 'categoria-analise',
        component: __WEBPACK_IMPORTED_MODULE_8__cadastros_auxiliares_categoria_analise_cadastro_component__["a" /* CategoriaAnaliseCadastroComponent */],
        data: { pageTitle: 'Nova categoria de análise' }
    },
    {
        path: 'categoria-analise/:codigo',
        component: __WEBPACK_IMPORTED_MODULE_8__cadastros_auxiliares_categoria_analise_cadastro_component__["a" /* CategoriaAnaliseCadastroComponent */],
        data: { pageTitle: 'Edita categoria de análise' }
    },
    {
        path: 'lista-categoria-analise',
        component: __WEBPACK_IMPORTED_MODULE_9__cadastros_auxiliares_categoria_analise_component__["a" /* CategoriaAnaliseComponent */],
        data: { pageTitle: 'Lista de categorias de análise' }
    },
    {
        path: 'tag',
        component: __WEBPACK_IMPORTED_MODULE_10__cadastros_auxiliares_tag_cadastro_component__["a" /* TagCadastroComponent */],
        data: { pageTitle: 'Novo marcador' }
    },
    {
        path: 'unidade',
        component: __WEBPACK_IMPORTED_MODULE_17__cadastros_auxiliares_unidade_component__["a" /* UnidadeComponent */],
        data: { pageTitle: 'Unidades' }
    },
    {
        path: 'tag/:codigo',
        component: __WEBPACK_IMPORTED_MODULE_10__cadastros_auxiliares_tag_cadastro_component__["a" /* TagCadastroComponent */],
        data: { pageTitle: 'Edita marcador' }
    },
    {
        path: 'lista-tag',
        component: __WEBPACK_IMPORTED_MODULE_11__cadastros_auxiliares_tag_component__["a" /* TagComponent */],
        data: { pageTitle: 'Lista marcadores' }
    },
    {
        path: 'unidade-medida',
        component: __WEBPACK_IMPORTED_MODULE_12__cadastros_auxiliares_unidade_medida_cadastro_component__["a" /* UnidadeMedidaCadastroComponent */],
        data: { pageTitle: 'Nova unidade de medida' }
    },
    {
        path: 'unidade-medida/:codigo',
        component: __WEBPACK_IMPORTED_MODULE_12__cadastros_auxiliares_unidade_medida_cadastro_component__["a" /* UnidadeMedidaCadastroComponent */],
        data: { pageTitle: 'Edita unidade de medida' }
    },
    {
        path: 'lista-unidade-medida',
        component: __WEBPACK_IMPORTED_MODULE_13__cadastros_auxiliares_unidade_medida_component__["a" /* UnidadeMedidaComponent */],
        data: { pageTitle: 'Lista de unidades de medida' }
    },
    {
        path: 'fonte-dados/:codigo',
        component: __WEBPACK_IMPORTED_MODULE_14__cadastros_auxiliares_fonte_cadastro_component__["a" /* FonteCadastroComponent */],
        data: { pageTitle: 'Edita fonte de dados' }
    },
    {
        path: 'fonte-dados',
        component: __WEBPACK_IMPORTED_MODULE_14__cadastros_auxiliares_fonte_cadastro_component__["a" /* FonteCadastroComponent */],
        data: { pageTitle: 'Nova fonte de dados' }
    },
    {
        path: 'lista-fonte-dados',
        component: __WEBPACK_IMPORTED_MODULE_15__cadastros_auxiliares_fonte_component__["a" /* FonteComponent */],
        data: { pageTitle: 'Lista fonte de dados' }
    },
    {
        path: 'perfil',
        component: __WEBPACK_IMPORTED_MODULE_16__perfil_perfil_component__["a" /* PerfilComponent */],
        data: { pageTitle: 'Perfil do usuário' }
    },
    {
        path: 'importa/:tipo',
        component: __WEBPACK_IMPORTED_MODULE_5__indicador_indicador_importa_lista_component__["a" /* IndicadorImportaListaComponent */],
        data: { pageTitle: 'Importação de dados' }
    },
];
var AdminRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(homeRoutes);
//# sourceMappingURL=admin.routing.js.map

/***/ }),

/***/ 1284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flot_examples__ = __webpack_require__(1272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_api_json_api_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_animations_fade_in_top_decorator__ = __webpack_require__(1212);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlotChartsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FlotChartsComponent = (function () {
    function FlotChartsComponent(jsonApiService) {
        this.jsonApiService = jsonApiService;
    }
    FlotChartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonApiService.fetch('/graphs/flot.json').subscribe(function (data) { return _this.flotData = data; });
        this.flotExamples = __WEBPACK_IMPORTED_MODULE_1__flot_examples__;
        this.interval = setInterval(function () {
            _this.updateStats();
        }, 1000);
        this.updateStats();
    };
    FlotChartsComponent.prototype.updateStats = function () {
        this.updatingData = [__WEBPACK_IMPORTED_MODULE_1__flot_examples__["FakeDataSource"].getRandomData()];
    };
    FlotChartsComponent.prototype.ngOnDestroy = function () {
        this.interval && clearInterval(this.interval);
    };
    return FlotChartsComponent;
}());
FlotChartsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__shared_animations_fade_in_top_decorator__["a" /* FadeInTop */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-flot-charts',
        template: __webpack_require__(1329),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_api_json_api_service__["a" /* JsonApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_api_json_api_service__["a" /* JsonApiService */]) === "function" && _a || Object])
], FlotChartsComponent);

var _a;
//# sourceMappingURL=flot-charts.component.js.map

/***/ }),

/***/ 1285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_api_json_api_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_animations_fade_in_top_decorator__ = __webpack_require__(1212);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorrisChartsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MorrisChartsComponent = (function () {
    function MorrisChartsComponent(jsonApiService) {
        this.jsonApiService = jsonApiService;
    }
    MorrisChartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonApiService.fetch('/graphs/morris.json').subscribe(function (data) { return _this.morrisDemoData = data; });
    };
    MorrisChartsComponent.prototype.barColorsDemo = function (row, series, type) {
        if (type === 'bar') {
            var red = Math.ceil(150 * row.y / 8);
            return 'rgb(' + red + ',0,0)';
        }
        else {
            return '#000';
        }
    };
    MorrisChartsComponent.prototype.percentageFormat = function (x) {
        return x + "%";
    };
    MorrisChartsComponent.prototype.dateFormat = function (d) {
        return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
    };
    return MorrisChartsComponent;
}());
MorrisChartsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shared_animations_fade_in_top_decorator__["a" /* FadeInTop */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-morris-charts',
        template: __webpack_require__(1330),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_api_json_api_service__["a" /* JsonApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_api_json_api_service__["a" /* JsonApiService */]) === "function" && _a || Object])
], MorrisChartsComponent);

var _a;
//# sourceMappingURL=morris-charts.component.js.map

/***/ }),

/***/ 1286:
/***/ (function(module, exports) {

if (!Array.prototype.find) {
    Array.prototype.find = function (predicate) {
        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;
        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}
//# sourceMappingURL=array.extension.js.map

/***/ }),

/***/ 1288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownEditorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MarkdownEditorDirective = (function () {
    function MarkdownEditorDirective(el) {
        this.el = el;
    }
    MarkdownEditorDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(24).then(__webpack_require__.bind(null, 1287)).then(function () {
            _this.render();
        });
    };
    MarkdownEditorDirective.prototype.render = function () {
        $(this.el.nativeElement).markdown(this.markdownEditor || {});
    };
    return MarkdownEditorDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MarkdownEditorDirective.prototype, "markdownEditor", void 0);
MarkdownEditorDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[markdownEditor]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], MarkdownEditorDirective);

var _a;
//node_modules/
//# sourceMappingURL=markdown-editor.directive.js.map

/***/ }),

/***/ 1289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summernote_directive__ = __webpack_require__(1292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__summernote_attach_directive__ = __webpack_require__(1290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__summernote_detach_directive__ = __webpack_require__(1291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__markdown_editor_directive__ = __webpack_require__(1288);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartadminEditorsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SmartadminEditorsModule = (function () {
    function SmartadminEditorsModule() {
    }
    return SmartadminEditorsModule;
}());
SmartadminEditorsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__summernote_directive__["a" /* SummernoteDirective */],
            __WEBPACK_IMPORTED_MODULE_3__summernote_attach_directive__["a" /* SummernoteAttachDirective */],
            __WEBPACK_IMPORTED_MODULE_4__summernote_detach_directive__["a" /* SummernoteDetachDirective */],
            __WEBPACK_IMPORTED_MODULE_5__markdown_editor_directive__["a" /* MarkdownEditorDirective */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__summernote_directive__["a" /* SummernoteDirective */],
            __WEBPACK_IMPORTED_MODULE_3__summernote_attach_directive__["a" /* SummernoteAttachDirective */],
            __WEBPACK_IMPORTED_MODULE_4__summernote_detach_directive__["a" /* SummernoteDetachDirective */],
            __WEBPACK_IMPORTED_MODULE_5__markdown_editor_directive__["a" /* MarkdownEditorDirective */],
        ]
    })
], SmartadminEditorsModule);

//# sourceMappingURL=smartadmin-editors.module.js.map

/***/ }),

/***/ 1290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummernoteAttachDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SummernoteAttachDirective = (function () {
    function SummernoteAttachDirective() {
    }
    SummernoteAttachDirective.prototype.render = function () {
        $(this.summernoteAttach).summernote({
            focus: true
        });
    };
    SummernoteAttachDirective.prototype.ngOnInit = function () {
        __webpack_require__.e/* import() */(20/* duplicate */).then(__webpack_require__.bind(null, 1260));
    };
    return SummernoteAttachDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SummernoteAttachDirective.prototype, "summernoteAttach", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SummernoteAttachDirective.prototype, "render", null);
SummernoteAttachDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[summernoteAttach]'
    }),
    __metadata("design:paramtypes", [])
], SummernoteAttachDirective);

//# sourceMappingURL=summernote-attach.directive.js.map

/***/ }),

/***/ 1291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummernoteDetachDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SummernoteDetachDirective = (function () {
    function SummernoteDetachDirective() {
    }
    SummernoteDetachDirective.prototype.render = function () {
        $(this.summernoteDetach).summernote('destroy');
    };
    return SummernoteDetachDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SummernoteDetachDirective.prototype, "summernoteDetach", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SummernoteDetachDirective.prototype, "render", null);
SummernoteDetachDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[summernoteDetach]'
    }),
    __metadata("design:paramtypes", [])
], SummernoteDetachDirective);

//# sourceMappingURL=summernote-detach.directive.js.map

/***/ }),

/***/ 1292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummernoteDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SummernoteDirective = (function () {
    function SummernoteDirective(el) {
        this.el = el;
        this.summernote = {};
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SummernoteDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(20/* duplicate */).then(__webpack_require__.bind(null, 1260)).then(function () {
            _this.render();
        });
    };
    SummernoteDirective.prototype.render = function () {
        var _this = this;
        $(this.el.nativeElement).summernote(Object.assign(this.summernote, {
            tabsize: 2,
            callbacks: {
                onChange: function (we, contents, $editable) {
                    _this.change.emit(contents);
                }
            }
        }));
    };
    return SummernoteDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SummernoteDirective.prototype, "summernote", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SummernoteDirective.prototype, "change", void 0);
SummernoteDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[summernote]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], SummernoteDirective);

var _a;
//# sourceMappingURL=summernote.directive.js.map

/***/ }),

/***/ 1293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlotChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlotChartComponent = (function () {
    function FlotChartComponent(el) {
        this.el = el;
        this.graphClass = '';
        this.width = '100%';
        this.height = '250px';
        this.vendorLoaded = false;
    }
    FlotChartComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(25).then(__webpack_require__.bind(null, 1302)).then(function () {
            _this.vendorLoaded = true;
            _this.render(_this.data);
        });
    };
    FlotChartComponent.prototype.render = function (data) {
        if (data) {
            $.plot(this.el.nativeElement.children[0], data, this.options);
        }
    };
    FlotChartComponent.prototype.ngOnChanges = function (changes) {
        if (this.vendorLoaded && changes.data.currentValue) {
            this.render(changes.data.currentValue);
        }
    };
    return FlotChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FlotChartComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FlotChartComponent.prototype, "graphClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FlotChartComponent.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FlotChartComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FlotChartComponent.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FlotChartComponent.prototype, "height", void 0);
FlotChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-flot-chart',
        template: "\n    <div class=\"sa-flot-chart\" [ngStyle]=\"{width: width, height: height}\">&nbsp;</div>\n  ",
        styles: ["\n  .sa-flot-chart{\n    overflow: hidden;\n  }\n"]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], FlotChartComponent);

var _a;
//# sourceMappingURL=flot-chart.component.js.map

/***/ }),

/***/ 1294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flot_chart_component__ = __webpack_require__(1293);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlotChartModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FlotChartModule = (function () {
    function FlotChartModule() {
    }
    return FlotChartModule;
}());
FlotChartModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__flot_chart_component__["a" /* FlotChartComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__flot_chart_component__["a" /* FlotChartComponent */]],
    })
], FlotChartModule);

//# sourceMappingURL=flot-chart.module.js.map

/***/ }),

/***/ 1295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatatableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatatableComponent = (function () {
    function DatatableComponent(el) {
        this.el = el;
        this.width = '100%';
        this.onInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DatatableComponent.prototype.ngOnInit = function () {
        var _this = this;
        Promise.all([
            __webpack_require__.e/* import() */(21/* duplicate */).then(__webpack_require__.bind(null, 1259)),
        ]).then(function () {
            _this.render();
            _this.onInit.emit();
        });
    };
    DatatableComponent.prototype.clear = function () {
        if (this._dataTable)
            this._dataTable.clear();
    };
    DatatableComponent.prototype.isInicializado = function () {
        return this._dataTable ? true : false;
    };
    DatatableComponent.prototype.refresh = function () {
        this._dataTable.ajax.reload();
    };
    DatatableComponent.prototype.draw = function () {
        if (this._dataTable)
            this._dataTable.draw();
    };
    DatatableComponent.prototype.addRow = function (item) {
        this._dataTable.row.add(item);
    };
    DatatableComponent.prototype.addRows = function (itens) {
        this._dataTable.rows.add(itens);
    };
    DatatableComponent.prototype.deleteRow = function (item) {
        this._dataTable.row("#" + item).remove().draw();
    };
    DatatableComponent.prototype.render = function () {
        var element = $(this.el.nativeElement.children[0]);
        var options = this.options || {};
        var toolbar = '';
        if (options.buttons)
            toolbar += 'B';
        if (this.paginationLength)
            toolbar += 'l';
        if (this.columnsHide)
            toolbar += 'C';
        if (typeof options.ajax === 'string') {
            var url = options.ajax;
            options.ajax = {
                url: url,
            };
        }
        options = $.extend(options, {
            "dom": "<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs text-right'" + toolbar + ">r>" +
                "t" +
                "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>",
            "autoWidth": false,
            retrieve: true,
            responsive: true,
            initComplete: function (settings, json) {
                element.parent().find('.input-sm').removeClass("input-sm").addClass('input-md');
            }
        });
        this._dataTable = element.DataTable(options);
        if (this.filter) {
            // Apply the filter
            element.on('keyup change', 'thead th input[type=text]', function () {
                console.log('Entrando na consulta', this.value);
                this.onSearch(this.value);
                //this._dataTable
                //  .column($(this).parent().index() + ':visible')
                //  .search(this.value)
                //  .draw();
            });
        }
        if (!toolbar) {
            element.parent().find(".dt-toolbar").append('<div class="text-right"><img src="assets/img/logo.png" alt="SmartAdmin" style="width: 111px; margin-top: 3px; margin-right: 10px;"></div>');
        }
        if (this.detailsFormat) {
            var format_1 = this.detailsFormat;
            var data_1 = this._dataTable;
            element.on('click', 'td.details-control', function () {
                var tr = $(this).closest('tr');
                var row = data_1.row(tr);
                this.row_selected = $(this).parents('tr');
                if (row.child.isShown()) {
                    row.child.hide();
                    tr.removeClass('shown');
                }
                else {
                    row.child(format_1(row.data())).show();
                    tr.addClass('shown');
                }
            });
        }
    };
    return DatatableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DatatableComponent.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DatatableComponent.prototype, "filter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DatatableComponent.prototype, "detailsFormat", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], DatatableComponent.prototype, "paginationLength", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], DatatableComponent.prototype, "columnsHide", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DatatableComponent.prototype, "tableClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DatatableComponent.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], DatatableComponent.prototype, "onInit", void 0);
DatatableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-datatable',
        template: "\n      <table class=\"dataTable responsive {{tableClass}}\" width=\"{{width}}\" >\n        <ng-content></ng-content>\n      </table>\n",
        styles: [
            __webpack_require__(1301)
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], DatatableComponent);

var _a, _b;
//# sourceMappingURL=datatable.component.js.map

/***/ }),

/***/ 1296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datatable_component__ = __webpack_require__(1295);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartadminDatatableModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// require('smartadmin-plugins/bower_components/datatables.net-colreorder-bs/css/colReorder.bootstrap.min.css');
var SmartadminDatatableModule = (function () {
    function SmartadminDatatableModule() {
    }
    return SmartadminDatatableModule;
}());
SmartadminDatatableModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__datatable_component__["a" /* DatatableComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__datatable_component__["a" /* DatatableComponent */]],
    })
], SmartadminDatatableModule);

//# sourceMappingURL=smartadmin-datatable.module.js.map

/***/ }),

/***/ 1297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreeViewComponent = (function () {
    function TreeViewComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TreeViewComponent.prototype.ngOnChanges = function () {
        this.reset();
        this.items && this.render();
    };
    TreeViewComponent.prototype.reset = function () {
        var root = this.el.nativeElement.getElementsByTagName('div')[0];
        while (root.firstChild) {
            root.removeChild(root.firstChild);
        }
    };
    TreeViewComponent.prototype.render = function () {
        var root = this.el.nativeElement.getElementsByTagName('div')[0];
        root.appendChild(this.createBranch(this.items, { expanded: true }));
    };
    TreeViewComponent.prototype.createChild = function (item) {
        var _this = this;
        var i, branch;
        var li = document.createElement('li');
        li.innerHTML = item.content;
        if (item.children) {
            li.className += ' parent_li';
            i = this.addPlusMinusSign(li, item);
            branch = this.createBranch(item.children, item);
            li.appendChild(branch);
        }
        this.renderer.listen(li, 'click', function (event) {
            event.stopPropagation();
            if (item.children) {
                item.expanded = !item.expanded;
                _this.togglePlusMinusSign(i, item);
                branch.className = item.expanded ? '' : 'hidden';
            }
            _this.change.emit(item);
        });
        return li;
    };
    TreeViewComponent.prototype.createBranch = function (items, parent) {
        var _this = this;
        var ul = document.createElement('ul');
        items.forEach(function (item) {
            ul.appendChild(_this.createChild(item));
        });
        ul.className = parent.expanded ? '' : 'hidden';
        return ul;
    };
    TreeViewComponent.prototype.addPlusMinusSign = function (li, item) {
        var i = document.createElement('i');
        this.togglePlusMinusSign(i, item);
        var span = li.getElementsByTagName('span')[0];
        if (span) {
            span.appendChild(i);
        }
        else {
            li.appendChild(i);
        }
        return i;
    };
    TreeViewComponent.prototype.togglePlusMinusSign = function (i, item) {
        i.className = item.expanded ? 'sa-icon fa fa-lg fa-minus-circle' : 'sa-icon fa fa-lg fa-plus-circle';
    };
    return TreeViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TreeViewComponent.prototype, "items", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TreeViewComponent.prototype, "change", void 0);
TreeViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-tree-view',
        template: '<div class="sa-tree-view tree"></div>',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], TreeViewComponent);

var _a, _b;
//# sourceMappingURL=tree-view.component.js.map

/***/ }),

/***/ 1298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tree_view_component__ = __webpack_require__(1297);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TreeViewModule = (function () {
    function TreeViewModule() {
    }
    return TreeViewModule;
}());
TreeViewModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__tree_view_component__["a" /* TreeViewComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__tree_view_component__["a" /* TreeViewComponent */]]
    })
], TreeViewModule);

//# sourceMappingURL=tree-view.module.js.map

/***/ }),

/***/ 1301:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(531)(false);
// imports


// module
exports.push([module.i, "/*\n * This combined file was created by the DataTables downloader builder:\n *   https://datatables.net/download\n *\n * To rebuild or modify this file with the latest versions of the included\n * software please visit:\n *   https://datatables.net/download/#bs/pdfmake-0.1.18/dt-1.10.13/b-1.2.4/b-colvis-1.2.4/b-flash-1.2.4/b-html5-1.2.4/b-print-1.2.4/cr-1.3.2/r-2.1.1/se-1.2.0\n *\n * Included libraries:\n *   pdfmake 0.1.18, DataTables 1.10.13, Buttons 1.2.4, Column visibility 1.2.4, Flash export 1.2.4, HTML5 export 1.2.4, Print view 1.2.4, ColReorder 1.3.2, Responsive 2.1.1, Select 1.2.0\n */\n\ntable.dataTable{clear:both;margin-top:6px !important;margin-bottom:6px !important;max-width:none !important;border-collapse:separate !important}table.dataTable td,table.dataTable th{box-sizing:content-box}table.dataTable td.dataTables_empty,table.dataTable th.dataTables_empty{text-align:center}table.dataTable.nowrap th,table.dataTable.nowrap td{white-space:nowrap}div.dataTables_wrapper div.dataTables_length label{font-weight:normal;text-align:left;white-space:nowrap}div.dataTables_wrapper div.dataTables_length select{width:75px;display:inline-block}div.dataTables_wrapper div.dataTables_filter{text-align:right}div.dataTables_wrapper div.dataTables_filter label{font-weight:normal;white-space:nowrap;text-align:left}div.dataTables_wrapper div.dataTables_filter input{margin-left:0.5em;display:inline-block;width:auto}div.dataTables_wrapper div.dataTables_info{padding-top:8px;white-space:nowrap}div.dataTables_wrapper div.dataTables_paginate{margin:0;white-space:nowrap;text-align:right}div.dataTables_wrapper div.dataTables_paginate ul.pagination{margin:2px 0;white-space:nowrap}div.dataTables_wrapper div.dataTables_processing{position:absolute;top:50%;left:50%;width:200px;margin-left:-100px;margin-top:-26px;text-align:center;padding:1em 0}table.dataTable thead>tr>th.sorting_asc,table.dataTable thead>tr>th.sorting_desc,table.dataTable thead>tr>th.sorting,table.dataTable thead>tr>td.sorting_asc,table.dataTable thead>tr>td.sorting_desc,table.dataTable thead>tr>td.sorting{padding-right:30px}table.dataTable thead>tr>th:active,table.dataTable thead>tr>td:active{outline:none}table.dataTable thead .sorting,table.dataTable thead .sorting_asc,table.dataTable thead .sorting_desc,table.dataTable thead .sorting_asc_disabled,table.dataTable thead .sorting_desc_disabled{cursor:pointer;position:relative}table.dataTable thead .sorting:after,table.dataTable thead .sorting_asc:after,table.dataTable thead .sorting_desc:after,table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_desc_disabled:after{position:absolute;bottom:8px;right:8px;display:block;font-family:'Glyphicons Halflings';opacity:0.5}table.dataTable thead .sorting:after{opacity:0.2;content:\"\\E150\"}table.dataTable thead .sorting_asc:after{content:\"\\E155\"}table.dataTable thead .sorting_desc:after{content:\"\\E156\"}table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_desc_disabled:after{color:#eee}div.dataTables_scrollHead table.dataTable{margin-bottom:0 !important}div.dataTables_scrollBody table{border-top:none;margin-top:0 !important;margin-bottom:0 !important}div.dataTables_scrollBody table thead .sorting:after,div.dataTables_scrollBody table thead .sorting_asc:after,div.dataTables_scrollBody table thead .sorting_desc:after{display:none}div.dataTables_scrollBody table tbody tr:first-child th,div.dataTables_scrollBody table tbody tr:first-child td{border-top:none}div.dataTables_scrollFoot table{margin-top:0 !important;border-top:none}@media screen and (max-width: 767px){div.dataTables_wrapper div.dataTables_length,div.dataTables_wrapper div.dataTables_filter,div.dataTables_wrapper div.dataTables_info,div.dataTables_wrapper div.dataTables_paginate{text-align:center}}table.dataTable.table-condensed>thead>tr>th{padding-right:20px}table.dataTable.table-condensed .sorting:after,table.dataTable.table-condensed .sorting_asc:after,table.dataTable.table-condensed .sorting_desc:after{top:6px;right:6px}table.table-bordered.dataTable th,table.table-bordered.dataTable td{border-left-width:0}table.table-bordered.dataTable th:last-child,table.table-bordered.dataTable th:last-child,table.table-bordered.dataTable td:last-child,table.table-bordered.dataTable td:last-child{border-right-width:0}table.table-bordered.dataTable tbody th,table.table-bordered.dataTable tbody td{border-bottom-width:0}div.dataTables_scrollHead table.table-bordered{border-bottom-width:0}div.table-responsive>div.dataTables_wrapper>div.row{margin:0}div.table-responsive>div.dataTables_wrapper>div.row>div[class^=\"col-\"]:first-child{padding-left:0}div.table-responsive>div.dataTables_wrapper>div.row>div[class^=\"col-\"]:last-child{padding-right:0}\n\n\ndiv.dt-button-info{position:fixed;top:50%;left:50%;width:400px;margin-top:-100px;margin-left:-200px;background-color:white;border:2px solid #111;box-shadow:3px 3px 8px rgba(0,0,0,0.3);border-radius:3px;text-align:center;z-index:21}div.dt-button-info h2{padding:0.5em;margin:0;font-weight:normal;border-bottom:1px solid #ddd;background-color:#f3f3f3}div.dt-button-info>div{padding:1em}ul.dt-button-collection.dropdown-menu{display:block;z-index:2002;-ms-column-gap:8px;-o-column-gap:8px;column-gap:8px}ul.dt-button-collection.dropdown-menu.fixed{position:fixed;top:50%;left:50%;margin-left:-75px;border-radius:0}ul.dt-button-collection.dropdown-menu.fixed.two-column{margin-left:-150px}ul.dt-button-collection.dropdown-menu.fixed.three-column{margin-left:-225px}ul.dt-button-collection.dropdown-menu.fixed.four-column{margin-left:-300px}ul.dt-button-collection.dropdown-menu>*{break-inside:avoid}ul.dt-button-collection.dropdown-menu.two-column{width:300px;padding-bottom:1px;-ms-column-count:2;-o-column-count:2;column-count:2}ul.dt-button-collection.dropdown-menu.three-column{width:450px;padding-bottom:1px;-ms-column-count:3;-o-column-count:3;column-count:3}ul.dt-button-collection.dropdown-menu.four-column{width:600px;padding-bottom:1px;-ms-column-count:4;-o-column-count:4;column-count:4}div.dt-button-background{position:fixed;top:0;left:0;width:100%;height:100%;z-index:2001}@media screen and (max-width: 767px){div.dt-buttons{float:none;width:100%;text-align:center;margin-bottom:0.5em}div.dt-buttons a.btn{float:none}}\n\n\ntable.DTCR_clonedTable.dataTable{position:absolute !important;background-color:rgba(255,255,255,0.7);z-index:202}div.DTCR_pointer{width:1px;background-color:#337ab7;z-index:201}\n\n\ntable.dataTable.dtr-inline.collapsed>tbody>tr>td.child,table.dataTable.dtr-inline.collapsed>tbody>tr>th.child,table.dataTable.dtr-inline.collapsed>tbody>tr>td.dataTables_empty{cursor:default !important}table.dataTable.dtr-inline.collapsed>tbody>tr>td.child:before,table.dataTable.dtr-inline.collapsed>tbody>tr>th.child:before,table.dataTable.dtr-inline.collapsed>tbody>tr>td.dataTables_empty:before{display:none !important}table.dataTable.dtr-inline.collapsed>tbody>tr>td:first-child,table.dataTable.dtr-inline.collapsed>tbody>tr>th:first-child{position:relative;padding-left:30px;cursor:pointer}table.dataTable.dtr-inline.collapsed>tbody>tr>td:first-child:before,table.dataTable.dtr-inline.collapsed>tbody>tr>th:first-child:before{top:9px;left:4px;height:14px;width:14px;display:block;position:absolute;color:white;border:2px solid white;border-radius:14px;box-shadow:0 0 3px #444;box-sizing:content-box;text-align:center;font-family:'Courier New', Courier, monospace;line-height:14px;content:'+';background-color:#337ab7}table.dataTable.dtr-inline.collapsed>tbody>tr.parent>td:first-child:before,table.dataTable.dtr-inline.collapsed>tbody>tr.parent>th:first-child:before{content:'-';background-color:#d33333}table.dataTable.dtr-inline.collapsed>tbody>tr.child td:before{display:none}table.dataTable.dtr-inline.collapsed.compact>tbody>tr>td:first-child,table.dataTable.dtr-inline.collapsed.compact>tbody>tr>th:first-child{padding-left:27px}table.dataTable.dtr-inline.collapsed.compact>tbody>tr>td:first-child:before,table.dataTable.dtr-inline.collapsed.compact>tbody>tr>th:first-child:before{top:5px;left:4px;height:14px;width:14px;border-radius:14px;line-height:14px;text-indent:3px}table.dataTable.dtr-column>tbody>tr>td.control,table.dataTable.dtr-column>tbody>tr>th.control{position:relative;cursor:pointer}table.dataTable.dtr-column>tbody>tr>td.control:before,table.dataTable.dtr-column>tbody>tr>th.control:before{top:50%;left:50%;height:16px;width:16px;margin-top:-10px;margin-left:-10px;display:block;position:absolute;color:white;border:2px solid white;border-radius:14px;box-shadow:0 0 3px #444;box-sizing:content-box;text-align:center;font-family:'Courier New', Courier, monospace;line-height:14px;content:'+';background-color:#337ab7}table.dataTable.dtr-column>tbody>tr.parent td.control:before,table.dataTable.dtr-column>tbody>tr.parent th.control:before{content:'-';background-color:#d33333}table.dataTable>tbody>tr.child{padding:0.5em 1em}table.dataTable>tbody>tr.child:hover{background:transparent !important}table.dataTable>tbody>tr.child ul.dtr-details{display:inline-block;list-style-type:none;margin:0;padding:0}table.dataTable>tbody>tr.child ul.dtr-details li{border-bottom:1px solid #efefef;padding:0.5em 0}table.dataTable>tbody>tr.child ul.dtr-details li:first-child{padding-top:0}table.dataTable>tbody>tr.child ul.dtr-details li:last-child{border-bottom:none}table.dataTable>tbody>tr.child span.dtr-title{display:inline-block;min-width:75px;font-weight:bold}div.dtr-modal{position:fixed;box-sizing:border-box;top:0;left:0;height:100%;width:100%;z-index:100;padding:10em 1em}div.dtr-modal div.dtr-modal-display{position:absolute;top:0;left:0;bottom:0;right:0;width:50%;height:50%;overflow:auto;margin:auto;z-index:102;overflow:auto;background-color:#f5f5f7;border:1px solid black;border-radius:0.5em;box-shadow:0 12px 30px rgba(0,0,0,0.6)}div.dtr-modal div.dtr-modal-content{position:relative;padding:1em}div.dtr-modal div.dtr-modal-close{position:absolute;top:6px;right:6px;width:22px;height:22px;border:1px solid #eaeaea;background-color:#f9f9f9;text-align:center;border-radius:3px;cursor:pointer;z-index:12}div.dtr-modal div.dtr-modal-close:hover{background-color:#eaeaea}div.dtr-modal div.dtr-modal-background{position:fixed;top:0;left:0;right:0;bottom:0;z-index:101;background:rgba(0,0,0,0.6)}@media screen and (max-width: 767px){div.dtr-modal div.dtr-modal-display{width:95%}}div.dtr-bs-modal table.table tr:first-child td{border-top:none}\n\n\ntable.dataTable tbody>tr.selected,table.dataTable tbody>tr>.selected{background-color:#08C}table.dataTable.stripe tbody>tr.odd.selected,table.dataTable.stripe tbody>tr.odd>.selected,table.dataTable.display tbody>tr.odd.selected,table.dataTable.display tbody>tr.odd>.selected{background-color:#0085c7}table.dataTable.hover tbody>tr.selected:hover,table.dataTable.hover tbody>tr>.selected:hover,table.dataTable.display tbody>tr.selected:hover,table.dataTable.display tbody>tr>.selected:hover{background-color:#0083c5}table.dataTable.order-column tbody>tr.selected>.sorting_1,table.dataTable.order-column tbody>tr.selected>.sorting_2,table.dataTable.order-column tbody>tr.selected>.sorting_3,table.dataTable.order-column tbody>tr>.selected,table.dataTable.display tbody>tr.selected>.sorting_1,table.dataTable.display tbody>tr.selected>.sorting_2,table.dataTable.display tbody>tr.selected>.sorting_3,table.dataTable.display tbody>tr>.selected{background-color:#0085c8}table.dataTable.display tbody>tr.odd.selected>.sorting_1,table.dataTable.order-column.stripe tbody>tr.odd.selected>.sorting_1{background-color:#0081c1}table.dataTable.display tbody>tr.odd.selected>.sorting_2,table.dataTable.order-column.stripe tbody>tr.odd.selected>.sorting_2{background-color:#0082c2}table.dataTable.display tbody>tr.odd.selected>.sorting_3,table.dataTable.order-column.stripe tbody>tr.odd.selected>.sorting_3{background-color:#0083c4}table.dataTable.display tbody>tr.even.selected>.sorting_1,table.dataTable.order-column.stripe tbody>tr.even.selected>.sorting_1{background-color:#0085c8}table.dataTable.display tbody>tr.even.selected>.sorting_2,table.dataTable.order-column.stripe tbody>tr.even.selected>.sorting_2{background-color:#0086ca}table.dataTable.display tbody>tr.even.selected>.sorting_3,table.dataTable.order-column.stripe tbody>tr.even.selected>.sorting_3{background-color:#0087cb}table.dataTable.display tbody>tr.odd>.selected,table.dataTable.order-column.stripe tbody>tr.odd>.selected{background-color:#0081c1}table.dataTable.display tbody>tr.even>.selected,table.dataTable.order-column.stripe tbody>tr.even>.selected{background-color:#0085c8}table.dataTable.display tbody>tr.selected:hover>.sorting_1,table.dataTable.order-column.hover tbody>tr.selected:hover>.sorting_1{background-color:#007dbb}table.dataTable.display tbody>tr.selected:hover>.sorting_2,table.dataTable.order-column.hover tbody>tr.selected:hover>.sorting_2{background-color:#007ebd}table.dataTable.display tbody>tr.selected:hover>.sorting_3,table.dataTable.order-column.hover tbody>tr.selected:hover>.sorting_3{background-color:#007fbf}table.dataTable.display tbody>tr:hover>.selected,table.dataTable.display tbody>tr>.selected:hover,table.dataTable.order-column.hover tbody>tr:hover>.selected,table.dataTable.order-column.hover tbody>tr>.selected:hover{background-color:#007dbb}table.dataTable td.select-checkbox{position:relative}table.dataTable td.select-checkbox:before,table.dataTable td.select-checkbox:after{display:block;position:absolute;top:1.2em;left:50%;width:12px;height:12px;box-sizing:border-box}table.dataTable td.select-checkbox:before{content:' ';margin-top:-6px;margin-left:-6px;border:1px solid black;border-radius:3px}table.dataTable tr.selected td.select-checkbox:after{content:'\\2714';margin-top:-11px;margin-left:-4px;text-align:center;text-shadow:1px 1px #B0BED9, -1px -1px #B0BED9, 1px -1px #B0BED9, -1px 1px #B0BED9}div.dataTables_wrapper span.select-info,div.dataTables_wrapper span.select-item{margin-left:0.5em}@media screen and (max-width: 640px){div.dataTables_wrapper span.select-info,div.dataTables_wrapper span.select-item{margin-left:0;display:block}}table.dataTable tbody tr.selected,table.dataTable tbody th.selected,table.dataTable tbody td.selected{color:white}table.dataTable tbody tr.selected a,table.dataTable tbody th.selected a,table.dataTable tbody td.selected a{color:#a2d4ed}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1319:
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"breadcrumb\" icon=\"pencil-square-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n  </div>\n\n  <sa-widget [colorbutton]=\"false\" [editbutton]=\"false\" [fullscreenbutton]=\"false\" [custombutton]=\"false\"\n             [sortable]=\"false\">\n    <!-- widget options:\n    usage: <sa-widget [editbutton]=\"false\">\n\n    [colorbutton]=\"false\"\n    [editbutton]=\"false\"\n    [togglebutton]=\"false\"\n    [deletebutton]=\"false\"\n    [fullscreenbutton]=\"false\"\n    [custombutton]=\"false\"\n    [collapsed]=\"true\"\n    [sortable]=\"false\"\n\n    -->\n    <header>\n      <span class=\"widget-icon\"> <i class=\"fa fa-edit\"></i> </span>\n      <h2>{{ titulo }} </h2>\n    </header>\n\n    <!-- widget div-->\n    <div>\n\n      <!-- widget content -->\n      <div class=\"widget-body no-padding\">\n\n        <form class=\"form-horizontal\" #f=\"ngForm\" (onSubmit)=\"onSubmit(f)\"\n          novalidate=\"novalidate\" saBootstrapValidator\n          class=\"form-horizontal\"\n          data-bv-message=\"O valor é inválido\"\n          data-bv-feedbackicons-valid=\"glyphicon glyphicon-ok\"\n          data-bv-feedbackicons-invalid=\"glyphicon glyphicon-remove\"\n          data-bv-feedbackicons-validating=\"glyphicon glyphicon-refresh\">\n          <fieldset style=\"margin: 15px\">\n              <legend>&nbsp;&nbsp;[{{ tituloForm }}] </legend>\n              <div class=\"form-group\" >\n                <div *ngIf=\"!codigo\">\n                  <popover-content #codigo\n                     title=\"Código\"\n                     [closeOnClickOutside]=\"true\">\n                          Identificação da categoria de análise em forma de código (dado pelo usuário). Até 8 caracteres.\n                  </popover-content>\n                  <label class=\"col-md-2 control-label\">Código\n                    <i class=\"fa fa-question-circle codigo\" popoverPlacement=\"right\" popoverOnHover=\"true\" [popover]=\"codigo\"></i>\n                  </label>\n                  <div class=\"col-md-2\">\n                    <input id=\"codigo_edit\" class=\"form-control\"\n                      placeholder=\"Código\" type=\"text\" maxlength=\"10\" [(ngModel)]=\"novacategoria.codigo\" name=\"codigo_edit\" #codigoedit\n                      (input)=\"codigoedit.value=$event.target.value.toUpperCase().replace(' ','')\"\n                      data-bv-notempty=\"true\"\n                      data-bv-notempty-message=\"O código da categoria de análise é obrigatória\" maxlength=\"8\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\" >\n                <div>\n                  <popover-content #descricao\n                     title=\"Título\"\n                     [closeOnClickOutside]=\"true\">\n                          Título da categoria de análise. É necessário que se tenha um título com o mínimo possível de tamanho já que ele será utilizado em títulos de gráficos, planilhas e afins. Limite de 255 caracteres.\n                  </popover-content>\n                  <label class=\"col-md-2 control-label\">Título\n                    <i class=\"fa fa-question-circle descricao\" popoverPlacement=\"right\" popoverOnHover=\"true\" [popover]=\"descricao\"></i>\n                  </label>\n                  <div class=\"col-md-5\">\n                    <input id=\"titulo\" class=\"form-control\"\n                      placeholder=\"Título da categoria de análise\" type=\"text\" [(ngModel)]=\"novacategoria.titulo\" name=\"titulo\" required maxlength=\"255\"\n                      data-bv-notempty=\"true\"\n                      data-bv-notempty-message=\"A descrição do critério de análise é obrigatório\">\n                  </div>\n                </div>\n              </div>\n          </fieldset>\n          <fieldset style=\"margin: 15px\">\n              <legend>&nbsp;&nbsp;Itens</legend>\n              <div class=\"form-group\">\n                <label class=\"col-md-2 control-label\">Item Descrição</label>\n                <div class=\"col-md-8\">\n                  <div class=\"input-group\">\n                  <input class=\"form-control\" name=\"item\"\n                  placeholder=\"Item da categoria de análise\" #item\n                  type=\"text\" id=\"item\">\n                  <div class=\"input-group-btn\">\n                  <button class=\"btn btn-primary\" type=\"button\" (click)=\"adicionaItemCategoriaAnalise()\">\n                    <i class=\"fa fa-plus\"></i>Adiciona Item\n                  </button>\n                  </div>\n                  </div>\n                  <p class=\"note\"><strong>Nota:</strong> discrimine os itens da categoria de análise.</p>\n                </div>\n              </div>\n\n              <sa-widget [editbutton]=\"false\" color=\"blue\">\n                <header>\n                  <span class=\"widget-icon\"> <i class=\"fa fa-sitemap\"></i> </span>\n                  <h2>Itens da categoria de análise </h2>\n                </header>\n                <div>\n                  <div class=\"widget-body\">\n                    <div class=\"tree smart-form\">\n                      <sa-tree-view [items]=\"listaSubcategorias\" (change)=\"changeLstener($event)\" ></sa-tree-view>\n                    </div>\n                  </div>\n                </div>\n              </sa-widget>\n          </fieldset>\n          <div class=\"form-actions\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <button class=\"btn btn-default\" type='button' (click)=\"newCategoriaAnalise(f)\">\n                  <i class=\"fa fa-plus\"></i>Novo\n                </button>\n                <button class=\"btn btn-primary btn-submit\" type=\"submit\">\n                  <i class=\"fa fa-save\"></i>Grava\n                </button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <!-- end widget content -->\n\n    </div>\n    <!-- end widget div -->\n  </sa-widget>\n\n  <div bsModal #categoriaAnaliseModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\n       aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <form #f=\"ngForm\" >\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" (click)=\"categoriaAnaliseModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <h4 class=\"modal-title\">{{ tituloModal }}</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <input name=\"titulo\" id=\"descricao\" type=\"text\" class=\"form-control\" [(ngModel)]=\"editCategoriaAnalise.descricao\" placeholder=\"Descrição do Item da Categoria de Análise\" maxlength=\"100\" required>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"categoriaAnaliseModal.hide()\">\n            <i class=\"fa fa-ban\"></i> Fecha\n          </button>\n          <button type=\"butten\" class=\"btn btn-primary\" (click)=\"atualizaItemCategoriaAnalise()\">\n            <i class=\"fa fa-save\"></i> Grava\n          </button>\n        </div>\n      </form>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ 1320:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Categoria de análise', 'Lista']\" icon=\"file-text-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n  </div>\n  <sa-widgets-grid>\n    <!-- row -->\n    <div class=\"row\">\n      <!-- NEW WIDGET START -->\n      <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <sa-widget class=\"well\">\n          <!-- widget options:\n              usage: <sa-widget id=\"wid-id-0\" [editbutton]=\"false\">\n              [colorbutton]=\"false\"\n              [editbutton]=\"false\"\n              [togglebutton]=\"false\"\n              [deletebutton]=\"false\"\n              [fullscreenbutton]=\"false\"\n              [custombutton]=\"false\"\n              [collapsed]=\"true\"\n              [sortable]=\"false\"\n          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-comments\"></i> </span>\n\n            <h2>Widget Title </h2>\n          </header>\n          <!-- widget div-->\n          <div>\n            <!-- widget content -->\n            <div class=\"widget-body no-padding\" data-sparkline-container=\"\">\n              <sa-datatable #listaCategorias [options]=\"options\"\n                         [detailsFormat]=\"detailsFormat\"\n                         tableClass=\"display projects-table table table-striped table-bordered table-hover\"\n                         width=\"100%\"\n                         (onInit)=\"getCategorias()\">\n                <thead>\n                <tr>\n                  <th></th>\n                  <th>Código</th>\n                  <th>Descrição</th>\n                </tr>\n                </thead>\n              </sa-datatable>\n            </div>\n            <!-- end widget content -->\n          </div>\n          <!-- end widget div -->\n        </sa-widget>\n        <!-- end widget -->\n      </article>\n    </div>\n    <!-- end row -->\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n</div>\n"

/***/ }),

/***/ 1321:
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"breadcrumb\" icon=\"pencil-square-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n  </div>\n\n  <sa-widget [colorbutton]=\"false\" [editbutton]=\"false\" [fullscreenbutton]=\"false\" [custombutton]=\"false\"\n             [sortable]=\"false\">\n    <!-- widget options:\n    usage: <sa-widget [editbutton]=\"false\">\n\n    [colorbutton]=\"false\"\n    [editbutton]=\"false\"\n    [togglebutton]=\"false\"\n    [deletebutton]=\"false\"\n    [fullscreenbutton]=\"false\"\n    [custombutton]=\"false\"\n    [collapsed]=\"true\"\n    [sortable]=\"false\"\n\n    -->\n    <header>\n      <span class=\"widget-icon\"> <i class=\"fa fa-edit\"></i> </span>\n      <h2>{{ tituloinit }} </h2>\n    </header>\n\n    <!-- widget div-->\n    <div>\n\n      <!-- widget content -->\n      <div class=\"widget-body no-padding\">\n\n        <form class=\"form-horizontal\" #f=\"ngForm\" (onSubmit)=\"onSubmit(f)\"\n                  novalidate=\"novalidate\" saBootstrapValidator\n                  data-bv-message=\"O valor é inválido\"\n                  data-bv-feedbackicons-valid=\"glyphicon glyphicon-ok\"\n                  data-bv-feedbackicons-invalid=\"glyphicon glyphicon-remove\"\n                  data-bv-feedbackicons-validating=\"glyphicon glyphicon-refresh\">\n                  <fieldset style=\"margin: 15px\">\n                      <legend>&nbsp;&nbsp;[{{ tituloForm }}] </legend>\n                      <div class=\"form-group\" >\n                        <div>\n                          <popover-content #sigla\n                             title=\"Sigla\"\n                             [closeOnClickOutside]=\"true\">\n                                  Sigla da fonte de dados.\n                          </popover-content>\n                          <label class=\"col-md-2 control-label\">Sigla <i class=\"fa fa-question-circle\" popoverPlacement=\"right\" popoverOnHover=\"true\" [popover]=\"sigla\"></i></label>\n                          <div class=\"col-md-2\">\n                            <input id=\"sigla\" class=\"form-control\"\n                              placeholder=\"Sigla da fonte de dados\" type=\"text\"\n                              [ngModel]=\"novafonte.sigla\" name=\"sigla\"\n                              required maxlength=\"10\"\n                              data-bv-notempty=\"true\"\n                              data-bv-notempty-message=\"A sigla da fonte de dados é obrigatória\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group\" >\n                        <div>\n                          <popover-content #titulo\n                             title=\"Descrição\"\n                             [closeOnClickOutside]=\"true\">\n                                  Descrição da fonte de dados.\n                          </popover-content>\n                          <label class=\"col-md-2 control-label\">Descrição <i class=\"fa fa-question-circle\" popoverPlacement=\"right\" popoverOnHover=\"true\" [popover]=\"titulo\"></i></label>\n                          <div class=\"col-md-9\">\n                            <input id=\"titulo\" class=\"form-control\"\n                              placeholder=\"Descrição da fonte de dados\" type=\"text\"\n                              [ngModel]=\"novafonte.descricao\" name=\"descricao\"\n                              required maxlength=\"300\"\n                              data-bv-notempty=\"true\"\n                              data-bv-notempty-message=\"A descrição da fonte de dados é obrigatória\">\n                          </div>\n                        </div>\n                      </div>\n                  </fieldset>\n                  <div class=\"form-actions\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <button class=\"btn btn-default\" type='button' (click)=\"newFonteDados(f)\">\n                          <i class=\"fa fa-plus\"></i>Novo\n                        </button>\n                        <button class=\"btn btn-primary\" type=\"submit\">\n                          <i class=\"fa fa-save\"></i>Grava\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </form>\n\n      </div>\n      <!-- end widget content -->\n\n    </div>\n    <!-- end widget div -->\n  </sa-widget>\n"

/***/ }),

/***/ 1322:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Fonte de Dados', 'Lista']\" icon=\"file-text-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n  </div>\n  <sa-widgets-grid>\n    <!-- row -->\n    <div class=\"row\">\n      <!-- NEW WIDGET START -->\n      <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <sa-widget class=\"well\">\n          <!-- widget options:\n              usage: <sa-widget id=\"wid-id-0\" [editbutton]=\"false\">\n              [colorbutton]=\"false\"\n              [editbutton]=\"false\"\n              [togglebutton]=\"false\"\n              [deletebutton]=\"false\"\n              [fullscreenbutton]=\"false\"\n              [custombutton]=\"false\"\n              [collapsed]=\"true\"\n              [sortable]=\"false\"\n          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-comments\"></i> </span>\n\n            <h2>Widget Title </h2>\n          </header>\n          <!-- widget div-->\n          <div>\n            <!-- widget content -->\n            <div class=\"widget-body no-padding\" data-sparkline-container=\"\">\n              <sa-datatable #listFonte [options]=\"options\"\n                         [detailsFormat]=\"detailsFormat\"\n                         tableClass=\"display projects-table table table-striped table-bordered table-hover\"\n                         width=\"100%\"\n                         (onInit)=\"getFontes()\">\n                <thead>\n                <tr>\n                  <th></th>\n                  <th>Sigla</th>\n                  <th>Descrição</th>\n                </tr>\n                </thead>\n              </sa-datatable>\n            </div>\n            <!-- end widget content -->\n          </div>\n          <!-- end widget div -->\n        </sa-widget>\n        <!-- end widget -->\n      </article>\n    </div>\n    <!-- end row -->\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n</div>\n"

/***/ }),

/***/ 1323:
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"breadcrumb\" icon=\"pencil-square-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n  </div>\n\n  <sa-widget [colorbutton]=\"false\" [editbutton]=\"false\" [fullscreenbutton]=\"false\" [custombutton]=\"false\"\n             [sortable]=\"false\">\n    <!-- widget options:\n    usage: <sa-widget [editbutton]=\"false\">\n\n    [colorbutton]=\"false\"\n    [editbutton]=\"false\"\n    [togglebutton]=\"false\"\n    [deletebutton]=\"false\"\n    [fullscreenbutton]=\"false\"\n    [custombutton]=\"false\"\n    [collapsed]=\"true\"\n    [sortable]=\"false\"\n\n    -->\n    <header>\n      <span class=\"widget-icon\"> <i class=\"fa fa-edit\"></i> </span>\n      <h2>{{ titulo }} </h2>\n    </header>\n\n    <!-- widget div-->\n    <div>\n\n      <!-- widget content -->\n      <div class=\"widget-body no-padding\">\n        <form class=\"form-horizontal\" #f=\"ngForm\" (onSubmit)=\"onSubmit(f)\"\n                  novalidate=\"novalidate\" saBootstrapValidator\n                  data-bv-message=\"O valor é inválido\"\n                  data-bv-feedbackicons-valid=\"glyphicon glyphicon-ok\"\n                  data-bv-feedbackicons-invalid=\"glyphicon glyphicon-remove\"\n                  data-bv-feedbackicons-validating=\"glyphicon glyphicon-refresh\">\n                  <fieldset style=\"margin: 15px\">\n                      <legend>&nbsp;&nbsp;[{{ tituloForm }}] </legend>\n                      <div class=\"form-group\" >\n                        <div>\n                          <popover-content #titulo\n                             title=\"Descrição do grupo\"\n                             [closeOnClickOutside]=\"true\">\n                                  Descrição do grupo do marcadores a serem utilizados para os metadados de indicadores.\n                          </popover-content>\n                          <label class=\"col-md-2 control-label\">Descrição do grupo <i class=\"fa fa-question-circle\" popoverPlacement=\"right\" popoverOnHover=\"true\" [popover]=\"titulo\"></i></label>\n                          <div class=\"col-md-5\">\n                            <input id=\"descricao\" class=\"form-control\"\n                              placeholder=\"Descrição do grupo de marcador\" type=\"text\"\n                              [(ngModel)]=\"novatagcategoria.descricao\" name=\"descricao\"\n                              required maxlength=\"200\"\n                              data-bv-notempty-message=\"A descrição do grupo de marcadores é obrigatória\">\n                          </div>\n                        </div>\n                      </div>\n                  </fieldset>\n                  <fieldset style=\"margin: 15px\">\n                      <legend>&nbsp;&nbsp;Marcadores</legend>\n                      <div class=\"form-group\">\n                        <label class=\"col-md-2 control-label\">Marcador Descrição</label>\n                        <div class=\"col-md-8\">\n                          <div class=\"input-group\">\n                          <input class=\"form-control\"\n                          placeholder=\"Marcador\"\n                          type=\"text\" id=\"item\" name=\"item\">\n                          <div class=\"input-group-btn\">\n                          <button class=\"btn btn-primary\" type=\"button\" (click)=\"adicionaMarcador()\">\n                            <i class=\"fa fa-plus\"></i>Adiciona Item\n                          </button>\n                          </div>\n                          </div>\n                          <p class=\"note\"><strong>Nota:</strong> discrimine os marcadores que pertencem ao grupo.</p>\n                        </div>\n                      </div>\n                      <div class=\"table-responsive col-md-10\">\n                        <table class=\"table table-hover\">\n                          <thead>\n                          <tr>\n                            <th>#</th>\n                            <th>Marcador</th>\n                            <th>&nbsp;</th>\n                          </tr>\n                          </thead>\n                          <tbody>\n                          <tr *ngFor=\"let itemCat of novatagcategoria.Tags; let i=index\">\n                            <ng-template [ngIf]=\"itemCat && !itemCat.deleted\">\n                              <td>{{ i+1 }}</td>\n                              <td>{{ itemCat.descricao }}</td>\n                              <td>\n                                <a class=\"btn btn-primary btn-sm icon white\"\n                                  (click)=\"editaItemTagCategoria(i)\"\n                                  href=\"javascript:void(0);\" title=\"altera item\"><i class=\"fa fa-pencil \"></i></a>\n                                <a class=\"btn btn-danger btn-sm icon white\"\n                                    (click)=\"apagaItemTagCategoria(i)\"\n                                    href=\"javascript:void(0);\" title=\"apaga item\"><i class=\"fa fa-times \"></i></a>\n                              </td>\n                            </ng-template>\n                          </tr>\n                          </tbody>\n                        </table>\n                      </div>\n\n                  </fieldset>\n                  <div class=\"form-actions\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <button class=\"btn btn-default\" type='button' (click)=\"newCategoriaTag(f)\">\n                          <i class=\"fa fa-plus\"></i>Novo\n                        </button>\n                        <button class=\"btn btn-primary\" type=\"submit\">\n                          <i class=\"fa fa-save\"></i>Grava\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </form>\n      </div>\n      <!-- end widget content -->\n\n    </div>\n    <!-- end widget div -->\n  </sa-widget>\n</div>\n<div bsModal #grupoTagModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\n     aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <form #f1=\"ngForm\" >\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" (click)=\"grupoTagModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <h4 class=\"modal-title\">{{ tituloModal }}</h4>\n        </div>\n        <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <input name=\"descricao\" id=\"descricao\" type=\"text\" class=\"form-control\" [(ngModel)]=\"editTagCategoria.descricao\" placeholder=\"Nome\" maxlength=\"100\" required>\n            </div>\n          </div>\n        </div>\n      </div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"grupoTagModal.hide()\">\n          <i class=\"fa fa-ban\"></i> Fecha\n        </button>\n        <button type=\"butten\" class=\"btn btn-primary\" (click)=\"atualizaItemTagCategoria()\">\n          <i class=\"fa fa-save\"></i> Grava\n        </button>\n      </div>\n    </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1324:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Grupo de Marcadores', 'Lista']\" icon=\"file-text-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n  </div>\n  <sa-widgets-grid>\n    <!-- row -->\n    <div class=\"row\">\n      <!-- NEW WIDGET START -->\n      <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <sa-widget class=\"well\">\n          <!-- widget options:\n              usage: <sa-widget id=\"wid-id-0\" [editbutton]=\"false\">\n              [colorbutton]=\"false\"\n              [editbutton]=\"false\"\n              [togglebutton]=\"false\"\n              [deletebutton]=\"false\"\n              [fullscreenbutton]=\"false\"\n              [custombutton]=\"false\"\n              [collapsed]=\"true\"\n              [sortable]=\"false\"\n          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-comments\"></i> </span>\n\n            <h2>Widget Title </h2>\n          </header>\n          <!-- widget div-->\n          <div>\n            <!-- widget content -->\n            <div class=\"widget-body no-padding\" data-sparkline-container=\"\">\n              <sa-datatable #listaTag [options]=\"options\"\n                         [detailsFormat]=\"detailsFormat\"\n                         tableClass=\"display projects-table table table-striped table-bordered table-hover\"\n                         width=\"100%\"\n                         (onInit)=\"getTags()\">\n                <thead>\n                <tr>\n                  <th></th>\n                  <th>Descrição</th>\n                </tr>\n                </thead>\n              </sa-datatable>\n            </div>\n            <!-- end widget content -->\n          </div>\n          <!-- end widget div -->\n        </sa-widget>\n        <!-- end widget -->\n      </article>\n    </div>\n    <!-- end row -->\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n</div>\n"

/***/ }),

/***/ 1325:
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"breadcrumb\" icon=\"pencil-square-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n  </div>\n\n  <sa-widget [colorbutton]=\"false\" [editbutton]=\"false\" [fullscreenbutton]=\"false\" [custombutton]=\"false\"\n             [sortable]=\"false\">\n    <!-- widget options:\n    usage: <sa-widget [editbutton]=\"false\">\n\n    [colorbutton]=\"false\"\n    [editbutton]=\"false\"\n    [togglebutton]=\"false\"\n    [deletebutton]=\"false\"\n    [fullscreenbutton]=\"false\"\n    [custombutton]=\"false\"\n    [collapsed]=\"true\"\n    [sortable]=\"false\"\n\n    -->\n    <header>\n      <span class=\"widget-icon\"> <i class=\"fa fa-edit\"></i> </span>\n      <h2>{{ tituloinit }} </h2>\n    </header>\n\n    <!-- widget div-->\n    <div>\n\n      <!-- widget content -->\n      <div class=\"widget-body no-padding\">\n\n        <form class=\"form-horizontal\" #f=\"ngForm\" (onSubmit)=\"onSubmit(f)\"\n                  novalidate=\"novalidate\" saBootstrapValidator\n                  data-bv-message=\"O valor é inválido\"\n                  data-bv-feedbackicons-valid=\"glyphicon glyphicon-ok\"\n                  data-bv-feedbackicons-invalid=\"glyphicon glyphicon-remove\"\n                  data-bv-feedbackicons-validating=\"glyphicon glyphicon-refresh\">\n                  <fieldset style=\"margin: 15px\">\n                      <legend>&nbsp;&nbsp;[{{ tituloForm }}] </legend>\n                      <div class=\"form-group\" >\n                        <div>\n                          <popover-content #titulo\n                             title=\"Descrição\"\n                             [closeOnClickOutside]=\"true\">\n                                  Descrição de uma unidade de medida a ser utilizada no cadastro de metadados de indicadores.\n                          </popover-content>\n                          <label class=\"col-md-2 control-label\">Descrição <i class=\"fa fa-question-circle\" popoverPlacement=\"right\" popoverOnHover=\"true\" [popover]=\"titulo\"></i></label>\n                          <div class=\"col-md-5\">\n                            <input id=\"titulo\" class=\"form-control\"\n                              placeholder=\"Descrição do grupo de marcador\" type=\"text\"\n                              [ngModel]=\"novaunidademedida.descricao\" name=\"descricao\"\n                              required maxlength=\"300\"\n                              data-bv-notempty=\"true\"\n                              data-bv-notempty-message=\"A descrição da unidade de medida é obrigatória\">\n                          </div>\n                        </div>\n                      </div>\n                  </fieldset>\n                  <div class=\"form-actions\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <button class=\"btn btn-default\" type='button' (click)=\"newUnidadeMedida(f)\">\n                          <i class=\"fa fa-plus\"></i>Novo\n                        </button>\n                        <button class=\"btn btn-primary\" type=\"submit\">\n                          <i class=\"fa fa-save\"></i>Grava\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </form>\n\n      </div>\n      <!-- end widget content -->\n\n    </div>\n    <!-- end widget div -->\n  </sa-widget>\n"

/***/ }),

/***/ 1326:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Unidades de Medida', 'Lista']\" icon=\"file-text-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n  </div>\n  <sa-widgets-grid>\n    <!-- row -->\n    <div class=\"row\">\n      <!-- NEW WIDGET START -->\n      <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <sa-widget class=\"well\">\n          <!-- widget options:\n              usage: <sa-widget id=\"wid-id-0\" [editbutton]=\"false\">\n              [colorbutton]=\"false\"\n              [editbutton]=\"false\"\n              [togglebutton]=\"false\"\n              [deletebutton]=\"false\"\n              [fullscreenbutton]=\"false\"\n              [custombutton]=\"false\"\n              [collapsed]=\"true\"\n              [sortable]=\"false\"\n          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-comments\"></i> </span>\n\n            <h2>Widget Title </h2>\n          </header>\n          <!-- widget div-->\n          <div>\n            <!-- widget content -->\n            <div class=\"widget-body no-padding\" data-sparkline-container=\"\">\n              <sa-datatable #listUnidadeMedida [options]=\"options\"\n                         [detailsFormat]=\"detailsFormat\"\n                         tableClass=\"display projects-table table table-striped table-bordered table-hover\"\n                         width=\"100%\"\n                         (onInit)=\"getUnidades()\">\n                <thead>\n                <tr>\n                  <th></th>\n                  <th>Descrição</th>\n                </tr>\n                </thead>\n              </sa-datatable>\n            </div>\n            <!-- end widget content -->\n          </div>\n          <!-- end widget div -->\n        </sa-widget>\n        <!-- end widget -->\n      </article>\n    </div>\n    <!-- end row -->\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n</div>\n"

/***/ }),

/***/ 1327:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Lista Indicadores', 'Por Unidade']\" icon=\"desktop\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <div class=\"col-sm-12 col-md-2 text-right\">\n      <button (click)=\"newUnidade(null)\" class=\"btn btn-warning btn-sm\">\n        <i class=\"fa fa-plus\"></i> Nova unidade\n      </button>\n    </div>\n  </div>\n  <sa-tree-view [items]=\"listaUnidades\" (change)=\"changeLstener($event)\" ></sa-tree-view>\n</div>\n\n<!-- Modal -->\n\n\n<div bsModal #unidadeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\n     aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <form #f=\"ngForm\" >\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"unidadeModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h4 class=\"modal-title\">{{ titulo }}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <input name=\"sigla\" id=\"sigla\" type=\"text\" class=\"form-control\"\n              #sigla [(ngModel)]=\"unidade.sigla\"\n              ng-disabled=\"unidade.codigo\"\n              (input)=\"sigla.value=$event.target.value.toUpperCase().replace(' ','')\"\n              placeholder=\"Sigla\" maxlength=\"20\" required>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <input name=\"nome\" id=\"nome\" type=\"text\" class=\"form-control\" [(ngModel)]=\"unidade.nome\" placeholder=\"Nome\" maxlength=\"100\" required>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"email\"> Email</label>\n              <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"unidade.email\" placeholder=\"Email do setor\">\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"telefone\"> Telefone</label>\n              <input type=\"text\" class=\"form-control\" id=\"telefone\" name=\"telefone\" [(ngModel)]=\"unidade.telefone\" placeholder=\"Telefone\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <textarea name=\"competencia\" id=\"competencia\" class=\"form-control\" [(ngModel)]=\"unidade.competencia\" placeholder=\"Competência\" rows=\"5\"></textarea>\n            </div>\n            <div class=\"form-group\">\n              <textarea name=\"atividade\" id=\"atividade\" class=\"form-control\" [(ngModel)]=\"unidade.atividade\" placeholder=\"Atividade desenvolvida\" rows=\"5\"></textarea>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"unidadeModal.hide()\">\n          <i class=\"fa fa-ban\"></i> Fecha\n        </button>\n        <button type=\"butten\" class=\"btn btn-primary\" (click)=\"saveUnidade(f)\">\n          <i class=\"fa fa-save\"></i> Grava\n        </button>\n      </div>\n    </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1328:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Usuários', 'Lista']\" icon=\"file-text-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n  </div>\n  <sa-widgets-grid>\n    <!-- row -->\n    <div class=\"row\">\n      <!-- NEW WIDGET START -->\n      <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <sa-widget class=\"well\">\n          <!-- widget options:\n              usage: <sa-widget id=\"wid-id-0\" [editbutton]=\"false\">\n              [colorbutton]=\"false\"\n              [editbutton]=\"false\"\n              [togglebutton]=\"false\"\n              [deletebutton]=\"false\"\n              [fullscreenbutton]=\"false\"\n              [custombutton]=\"false\"\n              [collapsed]=\"true\"\n              [sortable]=\"false\"\n          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-comments\"></i> </span>\n\n            <h2>Widget Title </h2>\n          </header>\n          <!-- widget div-->\n          <div>\n            <!-- widget content -->\n            <div class=\"widget-body no-padding\" data-sparkline-container=\"\">\n              <sa-datatable #listaUsuario [options]=\"options\"\n                         [detailsFormat]=\"detailsFormat\"\n                         tableClass=\"display projects-table table table-striped table-bordered table-hover\"\n                         width=\"100%\"\n                         (onInit)=\"getUsuarios()\">\n                <thead>\n                <tr>\n                  <th></th>\n                  <th>Nome</th>\n                  <th>CPF</th>\n                  <th>Email</th>\n                  <th>Ramal</th>\n                  <th>Celular</th>\n                  <th>Último Login</th>\n                </tr>\n                </thead>\n              </sa-datatable>\n            </div>\n            <!-- end widget content -->\n          </div>\n          <!-- end widget div -->\n        </sa-widget>\n        <!-- end widget -->\n      </article>\n    </div>\n    <!-- end row -->\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n</div>\n"

/***/ }),

/***/ 1329:
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\">\n\n  <div class=\"row\">\n    <sa-big-breadcrumbs icon=\"bar-chart-o\" [items]=\"['Graphs', 'Flot Chart']\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  <!-- widget grid -->\n  <sa-widgets-grid>\n\n    <!-- row -->\n\n    <div class=\"row\" *ngIf=\"flotData\">\n\n      <article class=\"col-sm-12 col-md-12 col-lg-12\">\n\n\n        <sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Bar Chart</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body \">\n              <sa-flot-chart [data]=\"flotData.barChartData\"\n                         [options]=\"flotExamples.barChartDemoOptions\" ></sa-flot-chart>\n\n            </div>\n          </div>\n        </sa-widget>\n\n\n        <sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Sin Chart</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body \">\n              <sa-flot-chart [data]=\"flotData.sinChartData\"\n                         [options]=\"flotExamples.sinChartDemoOptions\" ></sa-flot-chart>\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n        <sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Auto Updating Chart</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body \">\n              <sa-flot-chart [data]=\"updatingData\"\n                         [options]=\"flotExamples.autoUpdatingChartDemoOptions\" ></sa-flot-chart>\n            </div>\n          </div>\n        </sa-widget>\n      </article>\n\n      <article class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n        <sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Horizontal Bar Chart</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body \">\n              <sa-flot-chart [data]=\"flotData.horizontalBarChartData\"\n                         [options]=\"flotExamples.horizontalChartDemoOptions\" ></sa-flot-chart>\n            </div>\n          </div>\n        </sa-widget>\n      </article>\n\n\n      <article class=\"col-xs-12 col-sm-8 col-md-7 col-lg-7\">\n        <sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Plot Percentiles</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body \">\n              <sa-flot-chart [data]=\"flotData.fillChartData\"\n                         [options]=\"flotExamples.fillChartDemoOptions\" ></sa-flot-chart>\n            </div>\n          </div>\n        </sa-widget>\n      </article>\n\n\n      <article class=\"col-xs-12 col-sm-4 col-md-5 col-lg-5\">\n\n        <sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Pie Chart</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body \">\n              <sa-flot-chart [data]=\"flotData.pieChartData\"\n                         [options]=\"flotExamples.pieChartDemoOptions\" ></sa-flot-chart>\n            </div>\n          </div>\n        </sa-widget>\n      </article>\n      <article class=\"col-xs-12\">\n\n        <sa-widget [editbutton]=\"false\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Site Stats Chart</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body \">\n              <sa-flot-chart [data]=\"flotData.siteStatsData\"\n                         [options]=\"flotExamples.siteStatsDemoOptions\" ></sa-flot-chart>\n            </div>\n          </div>\n        </sa-widget>\n\n\n      </article>\n\n\n    </div>\n\n    <!-- end row -->\n\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n\n</div>\n<!-- END MAIN CONTENT -->\n"

/***/ }),

/***/ 1330:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs icon=\"bar-chart-o\" [items]=\"['Graphs', 'Morris Charts']\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  <sa-widgets-grid>\n    <div class=\"row\" *ngIf=\"morrisDemoData\">\n\n      <article class=\"col-sm-12 col-md-12 col-lg-12\">\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n            <h2>Sales Graphs</h2>\n          </header>\n          <div>\n            <div class=\"widget-body no-padding\">\n              <sa-morris-graph [data]=\"morrisDemoData.sales\"\n                               type=\"area\"\n                               [options]=\"{\n                              xkey: 'period',\n                              ykeys: ['iphone', 'ipad', 'itouch'],\n                              labels: ['iPhone', 'iPad', 'iPod Touch'],\n                              pointSize: [2],\n                              hideHover: 'auto'\n                           }\"\n              ></sa-morris-graph>\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n      <article class=\"col-xs-12 col-sm-6\">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Area Graph</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body no-padding\">\n              <sa-morris-graph [data]=\"morrisDemoData['area-demo']\"\n                               type=\"area\"\n                               [options]=\"{\n                              xkey: 'x',\n                              ykeys: ['y', 'z'],\n                              labels: ['Y', 'Z']\n\n              }\"></sa-morris-graph>\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n      <article class=\"col-xs-12 col-sm-6\">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Bar Graph</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body no-padding\">\n              <sa-morris-graph [data]=\"morrisDemoData['bar-demo']\"\n                               type=\"bar\"\n                               [options]=\"{\n                              xkey: 'x',\n                              ykeys: 'y',\n                              labels: 'Y',\n                              barColors: barColorsDemo\n\n              }\"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n      <article class=\"col-xs-12 col-sm-6\">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Normal Bar Graph</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body no-padding\">\n\n              <sa-morris-graph [data]=\"morrisDemoData['normal-bar-demo']\"\n                               type=\"bar\"\n                               [options]=\"{\n                              xkey: 'x',\n                              ykeys: ['y', 'z', 'a'],\n                              labels: ['Y', 'Z', 'A']\n\n              }\"></sa-morris-graph>\n\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n      <article class=\"col-xs-12 col-sm-6\">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Stacked Bar Graph</h2>\n          </header>\n          <div>\n            <div class=\"widget-body no-padding\">\n\n              <sa-morris-graph [data]=\"morrisDemoData['stacked-bar-demo']\"\n                               type=\"bar\"\n                               [options]=\"{\n                              xkey: 'x',\n                              ykeys: ['y', 'z', 'a'],\n                              labels: ['Y', 'Z', 'A'],\n                              staked: true\n\n              }\"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n      <article class=\"col-xs-12 col-sm-6\">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Year Graph</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body no-padding\">\n              <sa-morris-graph [data]=\"morrisDemoData['line-year-demo']\"\n                               type=\"line\"\n                               [options]=\"{\n                              xkey: 'period',\n                              ykeys: ['licensed', 'sorned'],\n                              labels: ['Licensed', 'SORN']\n              }\"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class=\"col-xs-12 col-sm-6\">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Donut Graph</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body no-padding\">\n              <sa-morris-graph [data]=\"morrisDemoData['donut-demo']\"\n                               type=\"donut\"\n                               [options]=\"{\n                              formater: percentageFormat\n              }\"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class=\"col-xs-12 col-sm-6\">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Time Graph</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body no-padding\">\n\n              <sa-morris-graph [data]=\"morrisDemoData['line-time-demo']\"\n                               type=\"line\"\n                               [options]=\"{\n                              xkey: 'period',\n                              ykeys: ['licensed', 'sorned'],\n                              labels: ['Licensed', 'SORN'],\n                              events: ['2011-04', '2011-08']\n              }\"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class=\"col-xs-12 col-sm-6\">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Line Graph A</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body no-padding\">\n              <sa-morris-graph [data]=\"morrisDemoData['line-graph-a-demo']\"\n                               type=\"line\"\n                               [options]=\"{\n                              xkey: 'period',\n                              ykeys: ['a'],\n                              labels: ['Series A'],\n                              units: '%'\n              }\"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class=\"col-xs-12 col-sm-6\">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Line Graph B</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body no-padding\">\n              <sa-morris-graph [data]=\"morrisDemoData['line-graph-b-demo']\"\n                               type=\"line\"\n                               [options]=\"{\n                              xkey: 'period',\n                              ykeys: ['licensed', 'sorned', 'other'],\n                              labels: ['Licensed', 'SORN', 'Other'],\n                              xLabels: 'day',\n                              xLabelFormat: dateFormat\n              }\"></sa-morris-graph>\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class=\"col-xs-12 col-sm-6\">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>No Grid Graph</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body no-padding\">\n              <sa-morris-graph [data]=\"morrisDemoData['no-grid-demo']\"\n                               type=\"line\"\n                               [options]=\"{\n                              xkey: 'period',\n                              ykeys: ['licensed', 'sorned'],\n                              labels: ['Licensed', 'SORN'],\n                              grid: false\n              }\"></sa-morris-graph>\n\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class=\"col-xs-12 col-sm-12\">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span>\n\n            <h2>Line Graph C</h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body no-padding\">\n              <sa-morris-graph [data]=\"morrisDemoData['line-graph-c-demo']\"\n                               type=\"line\"\n                               [options]=\"{\n                              xkey: 'elapsed',\n                              ykeys: ['value'],\n                              labels: ['value'],\n                              parseTime: false\n              }\"></sa-morris-graph>\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n    </div>\n  </sa-widgets-grid>\n</div>\n"

/***/ }),

/***/ 1331:
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"breadcrumb\" icon=\"pencil-square-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n  </div>\n\n  <div class='ajuda-faq'>\n      <a target=\"_blank\" class='btn btn-primary' href=\"assets/tutorial/cadastro-indicadores/index.html\"> ajuda? </a>\n  </div>\n  \n  <sa-widget [colorbutton]=\"false\" [editbutton]=\"false\" [fullscreenbutton]=\"false\" [custombutton]=\"false\"\n             [sortable]=\"false\">\n    <!-- widget options:\n    usage: <sa-widget [editbutton]=\"false\">\n\n    [colorbutton]=\"false\"\n    [editbutton]=\"false\"\n    [togglebutton]=\"false\"\n    [deletebutton]=\"false\"\n    [fullscreenbutton]=\"false\"\n    [custombutton]=\"false\"\n    [collapsed]=\"true\"\n    [sortable]=\"false\"\n\n    -->\n    <header>\n      <span class=\"widget-icon\"> <i class=\"fa fa-edit\"></i> </span>\n      <h2> {{ tituloCabecalho }} </h2>  \n     \n    </header>\n\n    <!-- widget div-->\n    <div>\n\n      <!-- widget content -->\n      <div class=\"widget-body no-padding\">\n        <form #f=\"ngForm\" (onSubmit)=\"onSubmit(f)\" id=\"formulario\"\n          novalidate=\"novalidate\" saBootstrapValidator\n          class=\"form-horizontal\"\n          data-bv-message=\"O valor é inválido\"\n          data-bv-feedbackicons-valid=\"glyphicon glyphicon-ok\"\n          data-bv-feedbackicons-invalid=\"glyphicon glyphicon-remove\"\n          data-bv-feedbackicons-validating=\"glyphicon glyphicon-refresh\">\n          <fieldset style=\"margin: 15px\">\n              <legend>&nbsp;&nbsp;[{{ tituloForm }}] </legend>\n              <div class=\"form-group\" >\n                <input type=\"hidden\" name=\"codigo\" id=\"codigo\" [ngModel]=\"indicador.codigo\">\n                <div *ngIf=\"!indicador.codigo\">\n                  <popover-content #codigo\n                     title=\"Código\"\n                     [closeOnClickOutside]=\"true\">\n                          Identificação do indicador em forma de código (dado pelo usuário). Até 10 caracteres.\n                  </popover-content>\n                  <label class=\"col-md-2 control-label\">Código <i class=\"fa fa-question-circle\" popoverPlacement=\"auto\" popoverOnHover=\"true\" [popover]=\"codigo\"></i></label>\n                  <div class=\"col-md-2\">\n                    <input id=\"codigo_edit\" class=\"form-control\"\n                      placeholder=\"Código\" type=\"text\" maxlength=\"10\" [ngModel]=\"indicador.codigo\" name=\"codigo_edit\" #codigoedit\n                      (input)=\"codigoedit.value=$event.target.value.toUpperCase().replace(' ','')\"\n                      data-bv-notempty=\"true\"\n                      data-bv-notempty-message=\"O código do indicador é obrigatório\" maxlength=\"10\">\n                  </div>\n                </div>\n                  <popover-content #titulo\n                     title=\"Título\"\n                     [closeOnClickOutside]=\"true\">\n                          Identificação do indicador dado pelo usuário. É necessário que se tenha um título com o mínimo possível de tamanho já que ele será utilizado em títulos de gráficos, planilhas e afins. Limite de 200 caracteres.\n                  </popover-content>\n                  <label class=\"col-md-2 control-label\">Título <i class=\"fa fa-question-circle\" popoverPlacement=\"auto\" popoverOnHover=\"true\" [popover]=\"titulo\"></i></label>\n                  <div class=\"col-md-5\">\n                    <input id=\"titulo\" class=\"form-control\"\n                      placeholder=\"Título resumido do indicador\" type=\"text\" [ngModel]=\"indicador.titulo\" name=\"titulo\" required maxlength=\"200\">\n                  </div>\n              </div>\n          </fieldset>\n\n            <ul class=\"nav nav-tabs\" id=\"dados-indicador\">\n              <li [class.active]=\"currenttab=='t1'\" class=\"active\">\n                <a (click)=\"currenttab = 't1'\">\n                  Dados Gerais </a>\n              </li>\n              <li [class.active]=\"currenttab=='t2'\" *ngIf=\"indicador.codigo\">\n                <a (click)=\"currenttab = 't2'\"> Ficha Qualificação</a>\n              </li>\n              <li [class.active]=\"currenttab=='t3'\" *ngIf=\"indicador.codigo\">\n                <a (click)=\"currenttab = 't3'\">\n                  <span class=\"badge bg-color-blue txt-color-white\">{{ indicador.ResponsavelGerencial.length + indicador.ResponsavelTecnico.length }}</span> Responsabilidades</a>\n              </li>\n              <li [class.active]=\"currenttab=='t4'\" *ngIf=\"indicador.codigo\">\n                <a (click)=\"currenttab = 't4'\">\n                  <span class=\"badge bg-color-blue txt-color-white\">{{ indicador.IndicadoresRelacionados.length }}</span> Indicadores Relacionados</a>\n              </li>\n              <li [class.active]=\"currenttab=='t5'\" *ngIf=\"indicador.codigo\">\n                <a (click)=\"currenttab = 't5'\"><span\n                  class=\"badge bg-color-greenLight txt-color-white\">{{ indicador.CategoriasAnalise.length }}</span> Categoria de análise</a>\n              </li>\n              <li [class.active]=\"currenttab=='t6'\" *ngIf=\"indicador.codigo\">\n                <a (click)=\"currenttab = 't6'\"> Configuração</a>\n              </li>\n              <li [class.active]=\"currenttab=='t7'\" *ngIf=\"false\">\n                <a (click)=\"currenttab = 't7'\"><span\n                  class=\"badge bg-color-purple txt-color-white\">5</span> Histórico de Carga</a>\n              </li>\n              <li [class.active]=\"currenttab=='t8'\"  *ngIf=\"indicador.codigo && (indicador.ultima_atualizacao)\">\n                <a (click)=\"currenttab = 't8'\">Resultados</a>\n              </li>\n              <li [class.active]=\"currenttab=='t9'\"  *ngIf=\"indicador.codigo && (indicador.ultima_atualizacao)\">\n                <a (click)=\"currenttab = 't9'\">Gráfico</a>\n              </li>\n            </ul>\n            <tabset class=\"padding-10\">\n              <tab [active]=\"currenttab == 't1'\">\n                <fieldset style=\"padding: 15px\">\n                  <legend>&nbsp;&nbsp;Informações</legend>\n                  <div class=\"form-group\">\n                    <popover-content #tituloCompleto\n                                     title=\"Título completo\"\n                                     [closeOnClickOutside]=\"true\">\n                        Informe o título completo do indicador\n                    </popover-content>\n                    <label class=\"col-md-2 control-label\">Título completo \n                      <i class=\"fa fa-question-circle\" popoverPlacement=\"auto\" \n                      popoverOnHover=\"true\" [popover]=\"tituloCompleto\"></i></label>\n                    <div class=\"col-md-10\">\n                      <input type=\"text\" id=\"tituloCompleto\" name=\"tituloCompleto\"\n                      [ngModel]=\"indicador.tituloCompleto\"\n                      class=\"form-control\"\n                      placeholder=\"Título completo do indicador\">\n                    </div>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <popover-content #descricao\n                                     title=\"Descrição\"\n                                     [closeOnClickOutside]=\"true\">\n                        Selecione descrição do indicador. Limite máximo em 255 caracteres.\n                    </popover-content>\n                    <label class=\"col-md-2 control-label\">Descrição <i class=\"fa fa-question-circle\" popoverPlacement=\"auto\" popoverOnHover=\"true\" [popover]=\"descricao\"></i></label>\n                    <div class=\"col-md-10\">\n                      <input type=\"text\" id=\"descricao\" name=\"descricao\" maxlength=\"255\"\n                      [ngModel]=\"indicador.descricao\"\n                      class=\"form-control\"\n                      placeholder=\"Descrição do indicador\"\n                      data-bv-notempty=\"true\"\n                      data-bv-notempty-message=\"A descrição do indicador é obrigatória\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <popover-content #classificacao\n                                     title=\"Classificação dos indicadores\"\n                                     [closeOnClickOutside]=\"true\">\n                      Fonte:  <b>TCU - O uso de indicadores na avaliação do Programa de Inclusão Digital do Governo Federal. </b>\n                      Segundo <i>Bonnefoy (2005)</i> e <i>Jannuzzi (2005)</i>, os indicadores podem ser de:<br/><br/>\n                      <ul>\n                        <li><b>Insumo (antes)</b>: são indicadores que têm relação direta com os recursos\n                        a serem alocados, ou seja, com a disponibilidade dos recursos humanos,\n                        materiais, fi nanceiros e outros a serem utilizados pelas ações de governo.\n                        São exemplos médicos/mil habitantes e gasto per capita com educação;</li>\n\n                        <li><b>Processo (durante)</b>: são medidas que traduzem o esforço empreendido na\n                        obtenção dos resultados, ou seja, medem o nível de utilização dos insumos\n                        alocados como, por exemplo, o percentual de atendimento de um público alvo\n                        e o percentual de liberação dos recursos financeiros;</li>\n\n                        <li><b>Produto (depois)</b>: medem o alcance das metas físicas. São medidas\n                        que expressam as entregas de produtos ou serviços ao público-alvo. São\n                        exemplos o percentual de quilômetros de estrada entregues, de armazéns\n                        construídos e de crianças vacinadas em relação às metas estabelecidas;</li>\n\n                        <li><b>Resultado (depois)</b>: essas medidas expressam, direta ou indiretamente,\n                        os benefícios no público-alvo decorrentes das ações empreendidas no\n                        contexto de uma dada política e têm particular importância no contexto de\n                        gestão pública orientada a resultados. São exemplos as taxas de morbidade\n                        (doenças), taxa de reprovação escolar e de homicídios;</li>\n\n                        <li><b>Impacto (depois)</b>: possuem natureza abrangente e multidimensional,\n                        têm relação com a sociedade como um todo e medem os efeitos das\n                        estratégias governamentais de médio e longo prazos. Na maioria dos casos\n                        estão associados aos objetivos setoriais e de governo. São\n                        exemplos o Índice Gini de distribuição de renda e o PIB per capita.</li>\n                      </ul>\n                    </popover-content>\n                     <label class=\"col-md-2 control-label\" for=\"ClassificacaoIndicadorCodigo\" >Classificação\n                       <i class=\"fa fa-question-circle\" popoverPlacement=\"right\" popoverOnHover=\"true\" [popover]=\"classificacao\"></i></label>\n                     <div class=\"col-md-2\">\n                       <select class=\"form-control\" id=\"ClassificacaoIndicadorCodigo\" name=\"ClassificacaoIndicadorCodigo\"\n                       [ngModel]=\"indicador.ClassificacaoIndicadorCodigo\" required>\n                         <option *ngFor=\"let itemClassificacao of colecaoClassificacao\" [ngValue]=\"itemClassificacao.codigo\">{{ itemClassificacao.descricao }}</option>\n                       </select>\n                     </div>\n\n                      <label class=\"col-md-2 control-label\" for=\"Classificacao6sIndicadorCodigo\" >Classificação 6Es\n                        <i class=\"fa fa-question-circle\" popoverPlacement=\"auto\" popoverOnHover=\"true\" [popover]=\"classificacao6s\"></i></label>\n                      <div class=\"col-md-2\">\n                        <popover-content #classificacao6s\n                                         title=\"Classificação 6s\"\n                                         [closeOnClickOutside]=\"true\">\n                          Fonte: <b>Guia Referencial para Medição de Desempenho na Administração Pública, Ministério do Planejamento,2010.</b>\n                          <ul>\n                          <li><b>Efetividade</b> são os impactos gerados pelos produtos/serviços, processos ou projetos. A efetividade está vinculada ao grau de satisfação ou ainda ao valor  gregado, a transformação produzida no contexto em geral.</li>\n                          <li><b>Eficácia</b> é a quantidade e qualidade de produtos e serviços entregues ao usuário (beneficiário direto dos produtos e serviços da organização). Por exemplo, se, na mesma campanha citada, a meta de vacinação é imunizar 100.000 crianças e este número foi alcançado ou superado, a campanha foi eficaz.</li>\n                          <li><b>Eficiência</b> é a relação entre os produtos/serviços gerados (outputs) com os insumos utilizados, relacionando o que foi entregue e o que foi consumido de recursos, usualmente sob a forma de custos ou produtividade. Por exemplo: uma campanha de vacinação é mais eficiente quanto menor for o custo, ou seja, quanto menor for o custo da campanha, mantendo‐se os objetivos propostos.</li>\n                          <li><b>Execução</b> refere‐se à realização dos processos, projetos e planos de ação conforme estabelecidos.</li>\n                          <li><b>Excelência</b> é a conformidade a critérios e padrões de qualidade/excelência para a realização dos processos, atividades e projetos na busca da melhor execução e economicidade; sendo um elemento transversal. Indicadores e padrões de excelência podem ser encontrados no Instrumento de Avaliação da Gestão Pública (IAGP)</li>\n                          <li><b>Economicidade</b> está alinhada ao conceito de obtenção e uso de recursos com o menor ônus possível, dentro dos requisitos e da quantidade exigidas pelo input, gerindo adequadamente os recursos financeiros e físicos. Indicadores de economicidade podem ser encontrados nas unidades de suprimentos.</li>\n                          </ul>\n                        </popover-content>\n                        <select class=\"form-control\" id=\"Classificacao6sIndicadorCodigo\" name=\"Classificacao6sIndicadorCodigo\"\n                        [ngModel]=\"indicador.Classificacao6sIndicadorCodigo\" required>\n                          <option *ngFor=\"let itemClassificacao of colecaoClassificacao6s\" [ngValue]=\"itemClassificacao.codigo\">{{ itemClassificacao.descricao }}</option>\n                        </select>\n                      </div>\n                     <label class=\"col-md-2 control-label\" for=\"UnidadeMedidaCodigo\">Unidade de medida\n                       <popover-content #unidade_medida\n                                        title=\"Unidade de Medida Utilizada\"\n                                        [closeOnClickOutside]=\"true\">\n                           Padrão escolhido para mensuração da relação adotada como indicador. (unidade; milhar; percentual etc).\n                       </popover-content>\n                       <i class=\"fa fa-question-circle\" popoverPlacement=\"auto\" popoverOnHover=\"true\" [popover]=\"unidade_medida\"></i></label>\n                     <div class=\"col-md-2\">\n                       <select class=\"form-control\" id=\"UnidadeMedidaCodigo\" name=\"UnidadeMedidaCodigo\" [ngModel]=\"indicador.UnidadeMedidaCodigo\" required>\n                         <option *ngFor=\"let itemUnidade of colecaoUnidadeMedida\" [ngValue]=\"itemUnidade.codigo\">{{ itemUnidade.descricao }}</option>\n                       </select>\n                     </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div>\n                      <popover-content #granularidade\n                                       title=\"Estratificação\"\n                                       [closeOnClickOutside]=\"true\">\n                          Escolha a menor granularidade dos dados do indicador. Esse valor serve para o retorno dos dados na menor granularidade possibilitando plotagem e processamento GEO.\n                      </popover-content>\n                      <label class=\"col-md-2 control-label\" for=\"GranularidadeCodigo\">Estratificação\n                      <i class=\"fa fa-question-circle\" popoverPlacement=\"left\" popoverOnHover=\"true\" [popover]=\"granularidade\"></i></label>\n                    </div>\n                    <div class=\"col-md-2\">\n                      <select class=\"form-control\" id=\"GranularidadeCodigo\" name=\"GranularidadeCodigo\" [ngModel]=\"indicador.GranularidadeCodigo\" required>\n                        <option *ngFor=\"let itemGranularidade of colecaoGranularidades\" [ngValue]=\"itemGranularidade.codigo\">{{ itemGranularidade.descricao }}</option>\n                      </select>\n                    </div>\n                    <div>\n                      <label class=\"col-md-2 control-label\" for=\"PolaridadeCodigo\">Polaridade\n                        <popover-content #polaridade\n                                         title=\"Polaridade\"\n                                         [closeOnClickOutside]=\"true\">\n                            Escolha a polaridade para os dados do indicador.\n                        </popover-content>\n                      <i class=\"fa fa-question-circle\" popoverPlacement=\"left\" popoverOnHover=\"true\" [popover]=\"polaridade\">\n                      </i></label>\n                    </div>\n                    <div class=\"col-md-2\">\n                      <select class=\"form-control\" id=\"PolaridadeCodigo\" name=\"PolaridadeCodigo\" [ngModel]=\"indicador.PolaridadeCodigo\" required>\n                        <option *ngFor=\"let itemPolaridade of colecaoPolaridades\" [ngValue]=\"itemPolaridade.codigo\">{{ itemPolaridade.descricao }}</option>\n                      </select>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <label class=\"col-md-2 control-label\" for=\"uniSuples\">Unidades de medida suplementar\n                        <popover-content #uniSuple\n                                         title=\"Unidades Suplementares\"\n                                         [closeOnClickOutside]=\"true\">\n                            Selecione as unidades de medida suplementar.\n                        </popover-content>\n                        <i class=\"fa fa-question-circle\" popoverPlacement=\"auto\" popoverOnHover=\"true\" [popover]=\"uniSuple\"></i>\n                      </label>\n                      <div class=\"col-md-2\">\n                        <select select2 multiple #uniSuples class=\"form-control uniSuples\" name=\"uniSuple\">\n                          <option [value]=\"uni.codigo\" *ngFor=\"let uni of colecaoUnidadeMedida\">{{ uni.descricao }}</option>\n                        </select>\n                      </div>\n                    </div>\n\n\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\" for=\"tags\">Marcadores\n                      <popover-content #tag\n                                       title=\"Marcadores\"\n                                       [closeOnClickOutside]=\"true\">\n                          Selecione dados para marcação de utilização do indicador.  Por exemplo: Qual programa ele pertence?\n                      </popover-content>\n                      <i class=\"fa fa-question-circle\" popoverPlacement=\"auto\" popoverOnHover=\"true\" [popover]=\"tag\"></i>\n                    </label>\n                    <div class=\"col-md-6\">\n                      <select select2 multiple #tags class=\"form-control tags\" name=\"tag\">\n                        <optgroup [label]=\"itemCategoria.descricao\" *ngFor=\"let itemCategoria of colecaoTagCategoria\">\n                          <option [value]=\"itemTag.codigo\" *ngFor=\"let itemTag of itemCategoria.Tags\">{{ itemTag.descricao }}</option>\n                        </optgroup>\n                      </select>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\" for=\"UnidadeCodigo\">Unidade\n                      <popover-content #unidade\n                                       title=\"Marcadores\"\n                                        [closeOnClickOutside]=\"true\">\n                          Selecione a unidade principal responsável pelo indicador\n                       </popover-content>\n                      <i class=\"fa fa-question-circle\" popoverPlacement=\"auto\" popoverOnHover=\"true\" [popover]=\"unidade\"></i>\n                    </label>\n                    <div class=\"col-md-6\">\n                        <select style=\"width:100%\" select2 class=\"select2 unidadeselect\" id=\"UnidadeCodigo\" name=\"UnidadeCodigo\"\n                        data-bv-notempty=\"true\"\n                        data-bv-notempty-message=\"A unidade/secretaria a quem pertence o indicador é obrigatória\">\n                            <option *ngFor=\"let itemUnidade of colecaoUnidades\"\n                              [value]=\"itemUnidade.codigo\">[{{ itemUnidade.sigla }}] - {{ itemUnidade.nome }}</option>\n                        </select>\n                        <div class=\"note\">\n                          <strong>Atenção:</strong> Preencha com a unidade principal a que o indicador pertence\n                        </div>\n                       </div>\n                     </div>\n\n                  <div class=\"form-group\">\n                      <popover-content #diretrizNacional\n                                       title=\"Diretriz Nacional\"\n                                       [closeOnClickOutside]=\"true\">\n                          Informe diretriz nacional para o indicador\n                      </popover-content>\n                      <label class=\"col-md-2 control-label\">Diretriz Nacional\n                        <i class=\"fa fa-question-circle\" popoverPlacement=\"auto\" \n                        popoverOnHover=\"true\" [popover]=\"diretrizNacional\"></i></label>\n                      <div class=\"col-md-10\">\n                        <input type=\"text\" id=\"diretrizNacional\" name=\"diretrizNacional\"\n                        [ngModel]=\"indicador.diretrizNacional\"\n                        class=\"form-control\"\n                        placeholder=\"Diretriz nacional do indicador\">\n                      </div>\n                    </div>\n                </fieldset>\n                <fieldset style=\"padding: 15px\">\n                  <popover-content #parametro_analise\n                                   title=\"Parâmetro de análise\"\n                                   [closeOnClickOutside]=\"true\">\n                      Parâmetro aceito para análise do indicador.\n                  </popover-content>\n                  <legend>&nbsp;&nbsp;Parâmetro de Análise <i class=\"fa fa-question-circle\" popoverPlacement=\"auto\" popoverOnHover=\"true\" [popover]=\"parametro_analise\"></i></legend>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">Parâmetro\n                      <popover-content #parametro\n                        title=\"Parâmetro de Referência\"\n                        [closeOnClickOutside]=\"true\">\n                          Parâmetro para análise.\n                      </popover-content>\n                      <i class=\"fa fa-question-circle\" popoverPlacement=\"auto\" popoverOnHover=\"true\" [popover]=\"parametro\">\n                      </i>\n                    </label>\n                    <div class=\"col-md-2\">\n                      <input type=\"text\" id=\"parametro\" name=\"parametro\" maxlength=\"5\"\n                      [ngModel]=\"formatTelaFloat(indicador.parametro)\"\n                      class=\"form-control\"\n                      placeholder=\"Índice\"\n                      data-bv-notempty=\"false\"\n                      data-bv-numeric=\"true\"\n                      data-bv-numeric-separator=\",\"\n                      data-bv-numeric-message=\"Valor deve ser numérico\">\n                    </div>\n                    <div>\n                      <label class=\"col-md-2 control-label\" for=\"ParametroFonteCodigo\">Fonte\n                        <popover-content #fonte\n                                         title=\"Fonte do parâmetro de análise\"\n                                         [closeOnClickOutside]=\"true\">\n                            Selecione a fonte do parâmetro de análise.\n                        </popover-content>\n                      <i class=\"fa fa-question-circle\" popoverPlacement=\"left\" popoverOnHover=\"true\" [popover]=\"fonte\">\n                      </i></label>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <select class=\"form-control\" id=\"ParametroFonteCodigo\" name=\"ParametroFonteCodigo\" [ngModel]=\"indicador.ParametroFonteCodigo\">\n                        <option *ngFor=\"let itemFonte of colecaoFonteParametro\" [ngValue]=\"itemFonte.codigo\">{{ itemFonte.sigla}} - {{ itemFonte.descricao }}</option>\n                      </select>\n                    </div>\n                  </div>\n                </fieldset>\n                <fieldset style=\"padding: 15px\">\n                  <legend>&nbsp;&nbsp;Periodicidades</legend>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\" for=\"PeriodicidadeAtualizacaoCodigo\">Atualização</label>\n                    <div class=\"col-md-2\">\n                      <select class=\"form-control\" id=\"PeriodicidadeAtualizacaoCodigo\"\n                      name=\"PeriodicidadeAtualizacaoCodigo\"\n                      [ngModel]=\"indicador.PeriodicidadeAtualizacaoCodigo\" required\n                      data-bv-notempty-message=\"O valor é obrigatório\">\n                        <option *ngFor=\"let itemPeriodicidade of colecaoPeriodicidade\"\n                        [ngValue]=\"itemPeriodicidade.codigo\">{{ itemPeriodicidade.descricao }}</option>\n                      </select>\n                    </div>\n                    <label class=\"col-md-2 control-label\" for=\"PeriodicidadeAvaliacaoCodigo\">Apuração/Avaliação</label>\n                    <div class=\"col-md-2\">\n                      <select class=\"form-control\" id=\"PeriodicidadeAvaliacaoCodigo\" name=\"PeriodicidadeAvaliacaoCodigo\"\n                      data-bv-notempty-message=\"O valor é obrigatório\"\n                      [ngModel]=\"indicador.PeriodicidadeAvaliacaoCodigo\" required>\n                        <option *ngFor=\"let itemPeriodicidade of colecaoPeriodicidade\"\n                        [ngValue]=\"itemPeriodicidade.codigo\">{{ itemPeriodicidade.descricao }}</option>\n                      </select>\n                    </div>\n                    <label class=\"col-md-2 control-label\" for=\"PeriodicidadeMonitoramentoCodigo\">Monitoramento</label>\n                    <div class=\"col-md-2\">\n                      <select class=\"form-control\" id=\"PeriodicidadeMonitoramentoCodigo\" name=\"PeriodicidadeMonitoramentoCodigo\"\n                      [ngModel]=\"indicador.PeriodicidadeMonitoramentoCodigo\" required\n                      data-bv-notempty-message=\"O valor é obrigatório\">\n                        <option *ngFor=\"let itemPeriodicidade of colecaoPeriodicidade\"\n                        [ngValue]=\"itemPeriodicidade.codigo\">{{ itemPeriodicidade.descricao }}</option>\n                      </select>\n                    </div>\n                  </div>\n                </fieldset>\n                <fieldset style=\"padding: 15px\">\n                  <legend>&nbsp;&nbsp;Configurações do indicador</legend>\n                  <div class=\"form-group\">\n                    <div class=\"col-md-2\">&nbsp;</div>\n                    <div class=\"col-md-2\">\n                      <popover-content #acumulativo\n                                       title=\"Acumulativo\"\n                                       [closeOnClickOutside]=\"true\">\n                          Indicador que demonstra o somatório de ocorrências ao longo de um período de tempo.  Em caso positivo, trata-se de um indicador que não zera, em nenhum período de mensuração; apenas se acumula, em termos de resultados medidos. Portanto, os dados mensais correspondem ao resultado do mês corrente somado aos meses anteriores. Faz-se necessário, neste tipo, especificar se o recorte é anual ou do início do programa até o mês de consolidação da informação. Em caso negativo, estará se assumindo que os dados apresentados representam o resultado do mês corrente.\n                      </popover-content>\n                      <span class=\"onoffswitch\">\n                        <input type=\"checkbox\" name=\"acumulativo\" class=\"onoffswitch-checkbox\"\n                               id=\"acumulativo\" [ngModel]=\"indicador.acumulativo\">\n                        <label class=\"onoffswitch-label\" for=\"acumulativo\">\n                            <span class=\"onoffswitch-inner\"\n                                  data-swchon-text=\"Sim\"\n                                  data-swchoff-text=\"Não\"></span>\n                            <span class=\"onoffswitch-switch\"></span>\n                        </label>\n                      </span>\n                      <label class=\"control-label\">Acumulativo <i class=\"fa fa-question-circle\" popoverPlacement=\"auto\" popoverOnHover=\"true\" [popover]=\"acumulativo\"></i></label>\n                    </div>\n                    <div class=\"col-md-2\">\n                      <span class=\"onoffswitch\">\n                        <input type=\"checkbox\" name=\"ativo\" class=\"onoffswitch-checkbox\"\n                               id=\"ativo\" [ngModel]=\"indicador.ativo\">\n                        <label class=\"onoffswitch-label\" for=\"ativo\">\n                            <span class=\"onoffswitch-inner\"\n                                  data-swchon-text=\"Sim\"\n                                  data-swchoff-text=\"Não\"></span>\n                            <span class=\"onoffswitch-switch\"></span>\n                        </label>\n                      </span>\n                      <label class=\"control-label\">Ativo</label>\n                    </div>\n                    <div class=\"col-md-2\">\n                      <span class=\"onoffswitch\">\n                        <input type=\"checkbox\" name=\"privado\" class=\"onoffswitch-checkbox\"\n                               id=\"privado\" [ngModel]=\"indicador.privado\">\n                        <label class=\"onoffswitch-label\" for=\"privado\">\n                            <span class=\"onoffswitch-inner\"\n                                  data-swchon-text=\"Sim\"\n                                  data-swchoff-text=\"Não\"></span>\n                            <span class=\"onoffswitch-switch\"></span>\n                        </label>\n                      </span>\n                      <label class=\"control-label\">Privado</label>\n                    </div>\n                    <div class=\"col-md-2\">\n                      <span class=\"onoffswitch\">\n                        <input type=\"checkbox\" name=\"universal\" class=\"onoffswitch-checkbox\"\n                               id=\"universal\" [(ngModel)]=\"indicador.universal\">\n                        <label class=\"onoffswitch-label\" for=\"universal\">\n                            <span class=\"onoffswitch-inner\"\n                                  data-swchon-text=\"Sim\"\n                                  data-swchoff-text=\"Não\"></span>\n                            <span class=\"onoffswitch-switch\"></span>\n                        </label>\n                      </span>\n                      <label class=\"control-label\">Universal</label>\n                    </div>\n                  </div>\n                </fieldset>\n\n                  <div class=\"row\">\n                    <div class=\"col-md-12 form-actions\">\n                        <button class=\"btn btn-default\" type='button' (click)=\"newIndicador(f)\">\n                          <i class=\"fa fa-plus\"></i>Novo\n                        </button>\n                        <button class=\"btn btn-primary\" type=\"submit\">\n                          <i class=\"fa fa-save\"></i>Grava\n                        </button>\n                    </div>\n                  </div>\n\n              </tab>\n              <tab [active]=\"currenttab == 't2'\">\n                <fieldset style=\"padding: 15px\">\n                  <popover-content #conceituacao\n                    title=\"Conceituação\"\n                    [closeOnClickOutside]=\"true\">\n                      Informações que definem o indicador e a forma como ele se expressa, se necessário agregando elementos para a compreensão de seu conteúdo. Deve ser coerente com o método de cálculo, com a unidade de medida, o tipo de relação com as variáveis, a temporalidade e a abrangência geográfica.\n                  </popover-content>\n                  <legend>Conceituação <i class=\"fa fa-question-circle\" popoverPlacement=\"right\" popoverOnHover=\"true\" [popover]=\"conceituacao\"></i>\n                        <a (click)=\"(null)\" class=\"btn btn-primary btn-xs\" (click)=\"editConceituacao(true)\" *ngIf=\"!isEditConceituacao\"><i class=\"fa fa-edit\"></i> Edita</a>\n                        <a (click)=\"(null)\" class=\"btn btn-success btn-xs\" (click)=\"editConceituacao(false)\" *ngIf=\"isEditConceituacao\"><i class=\"fa fa-save\"></i> Grava</a>\n                  </legend>\n                  <span class=\"conceituacao\" [innerHTML]=\"indicador.conceituacao||msg_padrao\"></span>\n                  <br/><br/>\n                  <popover-content #objetivoRelevancia\n                    title=\"Objetivo Relevância\"\n                    [closeOnClickOutside]=\"true\">\n                      Dados sobre Objetivos e relevância do indicador\n                  </popover-content>\n                  <legend>Objetivo e Relevância <i class=\"fa fa-question-circle\" \n                      popoverPlacement=\"right\" popoverOnHover=\"true\" [popover]=\"objetivoRelevancia\"></i>\n                        <a (click)=\"(null)\" class=\"btn btn-primary btn-xs\" \n                          (click)=\"editObjetivoRelevancia(true)\" *ngIf=\"!isEditObjetivoRelevancia\">\n                          <i class=\"fa fa-edit\"></i> Edita</a>\n                        <a (click)=\"(null)\" class=\"btn btn-success btn-xs\" \n                          (click)=\"editObjetivoRelevancia(false)\" *ngIf=\"isEditObjetivoRelevancia\">\n                          <i class=\"fa fa-save\"></i> Grava</a>\n                  </legend>\n                  <span class=\"objetivoRelevancia\" [innerHTML]=\"indicador.objetivoRelevancia||msg_padrao\"></span>\n                  <br/><br/>\n                  <popover-content #interpretacao\n                    title=\"Interpretação\"\n                    [closeOnClickOutside]=\"true\">\n                      Explicação sucinta do tipo de informação obtida e seu significado.\n                  </popover-content>\n                  <legend>Interpretação <i class=\"fa fa-question-circle\" popoverPlacement=\"right\" popoverOnHover=\"true\" [popover]=\"interpretacao\"></i>\n                        <a (click)=\"(null)\" class=\"btn btn-primary btn-xs\" (click)=\"editInterpretacao(true)\" *ngIf=\"!isEditInterpretacao\"><i class=\"fa fa-edit\"></i> Edita</a>\n                        <a (click)=\"(null)\" class=\"btn btn-success btn-xs\" (click)=\"editInterpretacao(false)\" *ngIf=\"isEditInterpretacao\"><i class=\"fa fa-save\"></i> Grava</a>\n                  </legend>\n                  <span class=\"interpretacao\" [innerHTML]=\"indicador.interpretacao||msg_padrao\"></span>\n                  <br/><br/>\n                  <popover-content #uso\n                    title=\"Usos\"\n                    [closeOnClickOutside]=\"true\">\n                      Principais finalidades de utilização dos dados a serem consideradas na análise do indicador.\n                  </popover-content>\n                  <legend>Usos <i class=\"fa fa-question-circle\" popoverPlacement=\"right\" popoverOnHover=\"true\" [popover]=\"uso\"></i>\n                        <a (click)=\"(null)\" class=\"btn btn-primary btn-xs\" (click)=\"editUsos(true)\" *ngIf=\"!isEditUsos\"><i class=\"fa fa-edit\"></i> Edita</a>\n                        <a (click)=\"(null)\" class=\"btn btn-success btn-xs\" (click)=\"editUsos(false)\" *ngIf=\"isEditUsos\"><i class=\"fa fa-save\"></i> Grava</a>\n                  </legend>\n                  <span class=\"usos\" [innerHTML]=\"indicador.usos||msg_padrao\"></span>\n                  <br/><br/>\n                  <popover-content #limitacoes\n                    title=\"Limitações\"\n                    [closeOnClickOutside]=\"true\">\n                      Fatores que restringem a interpretação do indicador, referentes tanto ao próprio conceito quanto as fontes utilizadas.\n                  </popover-content>\n                  <legend>Limitações <i class=\"fa fa-question-circle\" popoverPlacement=\"right\" popoverOnHover=\"true\" [popover]=\"limitacoes\"></i>\n                        <a (click)=\"(null)\" class=\"btn btn-primary btn-xs\" (click)=\"editLimitacoes(true)\" *ngIf=\"!isEditLimitacoes\"><i class=\"fa fa-edit\"></i> Edita</a>\n                        <a (click)=\"(null)\" class=\"btn btn-success btn-xs\" (click)=\"editLimitacoes(false)\" *ngIf=\"isEditLimitacoes\"><i class=\"fa fa-save\"></i> Grava</a>\n                  </legend>\n                  <span class=\"limitacoes\" [innerHTML]=\"indicador.limitacoes||msg_padrao\"></span>\n                  <br/><br/>\n                  <popover-content #fonte\n                    title=\"Fonte\"\n                    [closeOnClickOutside]=\"true\">\n                      Instituições responsáveis pela produção dos dados utilizados no cálculo do indicador e pelos sistemas de informação a que correspondem p. ex: IBGE, SAS, SPO, etc.\n                  </popover-content>\n                  <legend>Fonte <i class=\"fa fa-question-circle\" popoverPlacement=\"right\" popoverOnHover=\"true\" [popover]=\"fonte\"></i>\n                        <a (click)=\"(null)\" class=\"btn btn-primary btn-xs\" (click)=\"editFonteDados(true)\" *ngIf=\"!isEditFonteDados\"><i class=\"fa fa-edit\"></i> Edita</a>\n                        <a (click)=\"(null)\" class=\"btn btn-success btn-xs\" (click)=\"editFonteDados(false)\" *ngIf=\"isEditFonteDados\"><i class=\"fa fa-save\"></i> Grava</a>\n                  </legend>\n                  <span class=\"fonte\" [innerHTML]=\"indicador.fonte_dados||msg_padrao\"></span>\n                  <br/><br/>\n                  <popover-content #metodo_calculo\n                    title=\"Método de Cálculo\"\n                    [closeOnClickOutside]=\"true\">\n                      Fórmula utilizada para calcular o indicador, definindo precisamente os elementos que a compõem.\n                  </popover-content>\n                  <legend>Métodos de Cálculo <i class=\"fa fa-question-circle\" popoverPlacement=\"right\" popoverOnHover=\"true\" [popover]=\"metodo_calculo\"></i>\n                        <a (click)=\"(null)\" class=\"btn btn-primary btn-xs\" (click)=\"editMetodoCalculo(true)\" *ngIf=\"!isEditMetodoCalculo\"><i class=\"fa fa-edit\"></i> Edita</a>\n                        <a (click)=\"(null)\" class=\"btn btn-success btn-xs\" (click)=\"editMetodoCalculo(false)\" *ngIf=\"isEditMetodoCalculo\"><i class=\"fa fa-save\"></i> Grava</a>\n                  </legend>\n                  <span class=\"metodo\" [innerHTML]=\"indicador.metodo_calculo||msg_padrao\"></span>\n                  <br/><br/>\n                  <popover-content #notas\n                    title=\"Notas/Observações\"\n                    [closeOnClickOutside]=\"true\">\n                      Notas e observações sobre o indicador.\n                  </popover-content>\n                  <legend>Notas <i class=\"fa fa-question-circle\" popoverPlacement=\"right\" popoverOnHover=\"true\" [popover]=\"notas\"></i>\n                        <a (click)=\"(null)\" class=\"btn btn-primary btn-xs\" (click)=\"editNotas(true)\" *ngIf=\"!isEditNotas\"><i class=\"fa fa-edit\"></i> Edita</a>\n                        <a (click)=\"(null)\" class=\"btn btn-success btn-xs\" (click)=\"editNotas(false)\" *ngIf=\"isEditNotas\"><i class=\"fa fa-save\"></i> Grava</a>\n                  </legend>\n                  <span class=\"notas\" [innerHTML]=\"indicador.notas||msg_padrao\"></span>\n                </fieldset>\n              </tab>\n              <tab [active]=\"currenttab == 't3'\">\n                <fieldset style=\"padding: 15px\">\n                  <popover-content #responsabilidade_gerencial\n                    title=\"Responsabilidade Gerencial\"\n                    [closeOnClickOutside]=\"true\">\n                      Áreas responsáveis pela qualificação do indicador e sua ficha.\n                  </popover-content>\n                  <legend>&nbsp;&nbsp;Responsabilidade Gerencial <i class=\"fa fa-question-circle\" popoverPlacement=\"right\" popoverOnHover=\"true\" [popover]=\"responsabilidade_gerencial\"></i></legend>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\" for=\"unidade_gerencial\">Sigla/Nome\n                      <popover-content #unidade_gerencial\n                                       title=\"Unidade Gerencial\"\n                                       [closeOnClickOutside]=\"true\">\n                          Selecione a unidade gerencial responsável pelo indicador\n                      </popover-content>\n                      <i class=\"fa fa-question-circle\" popoverPlacement=\"auto\" popoverOnHover=\"true\" [popover]=\"unidade_gerencial\"></i>\n                    </label>\n                    <div class=\"col-md-8\">\n                      <div class=\"input-group\">\n                        <select select2 style=\"width:100%\" class=\"select2\" id=\"unidade_gerencial\">\n                            <option *ngFor=\"let itemUnidade of colecaoUnidades\"\n                              [value]=\"itemUnidade.codigo\">[{{ itemUnidade.sigla }}] - {{ itemUnidade.nome }}</option>\n                        </select>\n                        <div class=\"input-group-btn\">\n                        <button class=\"btn btn-primary\" type=\"button\" (click)=\"adicionaItemResponsavelGerencial()\">\n                          <i class=\"fa fa-plus\"></i>Adiciona Item\n                        </button>\n                        </div>\n                      </div>\n                    </div>\n                    <br/>\n                    </div>\n                    <ng-container *ngFor=\"let item of indicador.ResponsavelGerencial\">\n                      <br/><hr/>\n                      <div class=\"row\"  style=\"padding: 15px\">\n                      <div class=\"col-sm-5\">\n                          <h4> {{item.nome}}\n                            <br>\n                            <small> {{item.sigla}}</small>\n                          </h4>\n                          <ul class=\"list-unstyled\">\n                            <li>\n                              <p class=\"text-muted\">\n                                <i class=\"fa fa-phone\"></i>&#xA0;&#xA0;<span class=\"txt-color-darken\">{{item.telefone}}</span>\n                              </p>\n                            </li>\n                            <li>\n                              <p class=\"text-muted\">\n                                <i class=\"fa fa-envelope\"></i>&#xA0;&#xA0;<a href=\"mailto:{{item.email}}\">{{item.email}}</a>\n                              </p>\n                            </li>\n                          </ul>\n                      </div>\n                      <div class=\"col-sm-5\" style=\"border-left-style: dotted\">\n                      <p class=\"font-md\">\n                        <i>Subordinada a ...</i>\n                      </p>\n                      <ul *ngFor=\"let itemancestor of item.ancestors\">\n                        <li class=\"col-md-12\" style=\"padding-left:30px\">\n                          {{ itemancestor.sigla}} - {{ itemancestor.nome}}\n                        </li>\n                      </ul>\n                    </div>\n                    <div class=\"col-sm-2\">\n                      <button class=\"btn btn-danger pull-right\" type=\"button\" (click)=\"deleteItemResponsavelGerencial(item.codigo)\">\n                        <i class=\"fa fa-times\"></i>Apaga Item\n                      </button>\n                  </div>\n                    </div>\n                  </ng-container>\n                </fieldset>\n                <fieldset style=\"padding: 15px\">\n                  <popover-content #responsabilidade_tecnica\n                    title=\"Responsabilidade Técnica\"\n                    [closeOnClickOutside]=\"true\">\n                      Áreas responsáveis técnicamente pelos dados divulgados.\n                  </popover-content>\n                  <legend>&nbsp;&nbsp;Responsabilidade Técnica <i class=\"fa fa-question-circle\" popoverPlacement=\"right\" popoverOnHover=\"true\" [popover]=\"responsabilidade_tecnica\"></i></legend>\n\n                  <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\" for=\"unidade_tecnica\">Sigla/Nome\n                      <popover-content #unidade_tecnica\n                                       title=\"Responsabilidade Técnica\"\n                                       [closeOnClickOutside]=\"true\">\n                          Selecione a unidade gerencial responsável pelo indicador\n                      </popover-content>\n                      <i class=\"fa fa-question-circle\" popoverPlacement=\"auto\" popoverOnHover=\"true\" [popover]=\"unidade_tecnica\"></i>\n                    </label>\n                    <div class=\"col-md-8\">\n                      <div class=\"input-group\">\n                        <select select2 style=\"width:100%\" class=\"select2\" id=\"unidade_tecnica\">\n                            <option *ngFor=\"let itemUnidade of colecaoUnidades\"\n                              [value]=\"itemUnidade.codigo\">[{{ itemUnidade.sigla }}] - {{ itemUnidade.nome }}</option>\n                        </select>\n                        <div class=\"input-group-btn\">\n                        <button class=\"btn btn-primary\" type=\"button\" (click)=\"adicionaItemResponsavelTecnico()\">\n                          <i class=\"fa fa-plus\"></i>Adiciona Item\n                        </button>\n                        </div>\n                      </div>\n                    </div>\n                    <br/>\n                  </div>\n                    <ng-container *ngFor=\"let item of indicador.ResponsavelTecnico\">\n                      <br/><hr/>\n                      <div class=\"row\"  style=\"padding: 15px\">\n                      <div class=\"col-sm-5\">\n                          <h4> {{item.nome}}\n                            <br>\n                            <small> {{item.sigla}}</small>\n                          </h4>\n                          <ul class=\"list-unstyled\">\n                            <li>\n                              <p class=\"text-muted\">\n                                <i class=\"fa fa-phone\"></i>&#xA0;&#xA0;<span class=\"txt-color-darken\">{{item.telefone}}</span>\n                              </p>\n                            </li>\n                            <li>\n                              <p class=\"text-muted\">\n                                <i class=\"fa fa-envelope\"></i>&#xA0;&#xA0;<a href=\"mailto:{{item.email}}\">{{item.email}}</a>\n                              </p>\n                            </li>\n                          </ul>\n                      </div>\n                      <div class=\"col-sm-5\" style=\"border-left-style: dotted\">\n                        <p class=\"font-md\"><i>Subordinada a ...</i></p>\n                        <ul *ngFor=\"let itemancestor of item.ancestors\">\n                          <li class=\"col-md-12\" style=\"padding-left:30px\">\n                            {{ itemancestor.sigla}} - {{ itemancestor.nome}}\n                          </li>\n                        </ul>\n                      </div>\n                      <div class=\"col-sm-2\">\n                        <button class=\"btn btn-danger pull-right\" type=\"button\" (click)=\"deleteItemResponsaveTecnico(item.codigo)\">\n                          <i class=\"fa fa-times\"></i>Apaga Item\n                        </button>\n                    </div>\n                    </div>\n                  </ng-container>\n                </fieldset>\n              </tab>\n              <tab [active]=\"currenttab == 't4'\">\n                <fieldset style=\"padding: 15px\">\n                  <popover-content #indicadores_relacionados\n                    title=\"Indicadores relacionados\"\n                    [closeOnClickOutside]=\"true\">\n                      Aqueles que o objeto está relacionado ao acompanhamento de ações, programas e estratégias complementares a análise do problema.\n                  </popover-content>\n                  <legend>&nbsp;&nbsp;Indicadores Relacionados <i class=\"fa fa-question-circle\" popoverPlacement=\"right\" popoverOnHover=\"true\" [popover]=\"indicadores_relacionados\"></i></legend>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">Nome do Indicador</label>\n                    <div class=\"col-md-8\">\n                      <div class=\"input-group\">\n                      <input class=\"form-control\" placeholder=\"Código ou partes do nome do indicador...\"\n                          type=\"text\" list=\"listInd\" id=\"item_relacionado\">\n                      <datalist id=\"listInd\">\n                        <option *ngFor=\"let itemIndicador of colecaoIndicadores\"\n                          value=\"[{{ itemIndicador.codigo }}] - {{ itemIndicador.titulo }}\"\n                          [attr.codigo]=\"itemIndicador.id\">\n                      </datalist>\n                      <div class=\"input-group-btn\">\n                      <button class=\"btn btn-primary\" type=\"button\" (click)=\"adicionaItemRelacionado()\">\n                        <i class=\"fa fa-plus\"></i>Adiciona Item\n                      </button>\n                      </div>\n                      </div>\n                      <p class=\"note\"><strong>Nota:</strong> discrimine os indicadores que contêm alguma correlação.</p>\n                    </div>\n                  </div>\n                  <div class=\"table-responsive col-md-10\">\n                    <table class=\"table table-hover\">\n                      <thead>\n                      <tr>\n                        <th>#</th>\n                        <th>Sigla</th>\n                        <th>Indicador</th>\n                        <th>&nbsp;</th>\n                      </tr>\n                      </thead>\n                      <tbody>\n                      <tr *ngFor=\"let itemRelacao of this.indicador.IndicadoresRelacionados; let i=index\">\n                        <td>{{ i+1 }}</td>\n                        <td>{{ itemRelacao.codigo }}</td>\n                        <td>{{ itemRelacao.descricao }}</td>\n                        <td> <a class=\"btn btn-danger btn-sm icon white\"\n                              (click)=\"apagaItemRelacionado(itemRelacao.id)\"\n                              href=\"javascript:void(0);\"><i class=\"fa fa-times \"></i></a>\n                        </td>\n                      </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </fieldset>\n              </tab>\n              <tab [active]=\"currenttab == 't5'\">\n                <fieldset style=\"padding: 15px\">\n                  <popover-content #categoria_analise\n                    title=\"Categorias de Análise\"\n                    [closeOnClickOutside]=\"true\">\n                      Categorias recomendadas para análise do indicador.\n                  </popover-content>\n                  <legend>&nbsp;&nbsp;Categoria de Análise <i class=\"fa fa-question-circle\" popoverPlacement=\"right\" popoverOnHover=\"true\" [popover]=\"categoria_analise\"></i></legend>\n                  <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">Categoria</label>\n                    <div class=\"col-md-8\">\n                      <div class=\"input-group\">\n                      <input class=\"form-control\"\n                      placeholder=\"Categorias que podem ser relacionadas no estudo do indicador...\"\n                      type=\"text\" list=\"listacat\" id=\"categoria_relacionada\">\n                      <datalist id=\"listacat\">\n                        <option *ngFor=\"let itemCategoriaAnalise of colecaoCategoriaAnalise\"\n                          [value]=\"itemCategoriaAnalise.titulo\" [attr.codigo]=\"itemCategoriaAnalise.codigo\">\n                      </datalist>\n                      <div class=\"input-group-btn\">\n                      <button class=\"btn btn-primary\" type=\"button\" (click)=\"adicionaCategoriaRelacionada()\">\n                        <i class=\"fa fa-plus\"></i>Adiciona Item\n                      </button>\n                      </div>\n                      </div>\n                      <p class=\"note\"><strong>Nota:</strong> discrimine os indicadores que contêm alguma correlação.</p>\n                    </div>\n                  </div>\n                  <div class=\"table-responsive col-md-10\">\n                    <table class=\"table table-hover\">\n                      <thead>\n                      <tr>\n                        <th>#</th>\n                        <th>Sigla</th>\n                        <th>Categoria</th>\n                        <th>&nbsp;</th>\n                      </tr>\n                      </thead>\n                      <tbody>\n                      <tr *ngFor=\"let itemCat of indicador.CategoriasAnalise; let i=index\">\n                        <td>{{ i+1 }}</td>\n                        <td>{{ itemCat.codigo }}</td>\n                        <td>{{ itemCat.titulo }}</td>\n                        <td> <a class=\"btn btn-danger btn-sm icon white\"\n                              (click)=\"apagaCategoriaRelacionada(itemCat.codigo)\"\n                              href=\"javascript:void(0);\"><i class=\"fa fa-times \"></i></a>\n                        </td>\n                      </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </fieldset>\n              </tab>\n              <tab [active]=\"currenttab == 't6'\">\n                <fieldset style=\"padding: 15px\">\n                  <popover-content #tipo_extracao\n                    title=\"Tipos de Extração\"\n                    [closeOnClickOutside]=\"true\">\n                      Informações técnica de onde provem os dados originais do indicador.\n                  </popover-content>\n                  <legend>&nbsp;&nbsp;Tipos de Extração <i class=\"fa fa-question-circle\" popoverPlacement=\"right\" popoverOnHover=\"true\" [popover]=\"tipo_extracao\"></i></legend>\n                  <!-- Informacoes Tipo extracao -->\n                  <div class=\"form-group\">\n                    <div class=\"row\">\n                        <!-- Componente 1 -->\n                        <popover-content #tipo_consulta\n                            title=\"Tipo de Consulta\"\n                            [closeOnClickOutside]=\"true\">\n                              Tipo de consulta: ETL, Query, Importação.\n                        </popover-content>\n                        <label class=\"col-md-2 control-label\" for=\"TipoConsultaCodigo\" >Tipo de Consulta <i class=\"fa fa-question-circle\" popoverPlacement=\"auto\" popoverOnHover=\"true\" [popover]=\"tipo_consulta\"></i></label>\n                        <div class=\"col-md-2\">\n                          <select class=\"form-control\" id=\"TipoConsultaCodigo\" name=\"TipoConsultaCodigo\" [(ngModel)]=\"indicador.TipoConsultaCodigo\" required>\n                            <option *ngFor=\"let itemTipoConsulta of colecaoTipoConsulta\" [ngValue]=\"itemTipoConsulta.codigo\">{{ itemTipoConsulta.descricao }}</option>\n                          </select>\n                        </div>\n                        <!-- Fim Componente 1 -->\n                        <!-- Componente 2 -->\n                        <div *ngIf=\"indicador.TipoConsultaCodigo==2\">\n                          <popover-content #banco\n                              title=\"Banco de Dados\"\n                              [closeOnClickOutside]=\"true\">\n                              Cadastro de cada um dos bancos possíveis de se buscar dados de origem.\n                          </popover-content>\n                          <label class=\"col-md-2 control-label\" for=\"BancoDadosCodigo\" >Banco de Dados <i class=\"fa fa-question-circle\" popoverPlacement=\"top\" popoverOnHover=\"true\" [popover]=\"banco\"></i></label>\n\n                           <div class=\"col-md-2\">\n                             <select class=\"form-control\" id=\"BancoDadosCodigo\" name=\"BancoDadosCodigo\" [ngModel]=\"indicador.BancoDadosCodigo\" required>\n                               <option *ngFor=\"let itemBancoDados of colecaoBancoDados\" [ngValue]=\"itemBancoDados.codigo\">{{ itemBancoDados.descricao }}</option>\n                             </select>\n                           </div>\n                        </div>\n                        <!-- FIm Componente 2 -->\n                        <!-- Componente 3 -->\n                        <div>\n                            <popover-content #criterio_agregacao_label\n                                          title=\"Critério de agregação\"\n                                          [closeOnClickOutside]=\"true\">\n                             Qual o critério de agregação para os dados do indicador.\n                           </popover-content>\n                           <label class=\"col-md-2 control-label\" for=\"CriterioAgregacaoCodigo\">Critério de Agregação\n                              <i class=\"fa fa-question-circle\" popoverPlacement=\"top\" popoverOnHover=\"true\" [popover]=\"criterio_agregacao_label\"></i></label>\n                            <div class=\"col-md-2\">\n                             <select class=\"form-control\" id=\"CriterioAgregacaoCodigo\" name=\"CriterioAgregacaoCodigo\" [ngModel]=\"indicador.CriterioAgregacaoCodigo\">\n                               <option *ngFor=\"let itemCriteriosAgregacao of colecaoCriteriosAgregacao\" [ngValue]=\"itemCriteriosAgregacao.codigo\">{{ itemCriteriosAgregacao.descricao }}</option>\n                             </select>\n                            </div>\n                        </div>\n                        <!-- Fim Cmponente 3 -->\n                    </div>\n                  </div>\n                  <!-- Fim Informacoes Tipo extracao -->\n                  <popover-content #referencia\n                                title=\"Referência\"\n                                [closeOnClickOutside]=\"true\">\n                   De acordo com o tipo query a ser executada, nome da ETL, nome do processo para importação, ou SQL a ser executado.\n                  </popover-content>\n                  <legend *ngIf=\"indicador.TipoConsultaCodigo==1 || indicador.TipoConsultaCodigo==2\">&nbsp;&nbsp;{{ (indicador.TipoConsultaCodigo==2?\"Sql\":\"Fórmula\") }} <i class=\"fa fa-question-circle\" popoverPlacement=\"right\" popoverOnHover=\"true\" [popover]=\"referencia\"></i>\n                  </legend>\n                  <!-- Formula -->\n                  <div class=\"row\"  *ngIf=\"indicador.TipoConsultaCodigo==1 || indicador.TipoConsultaCodigo==2\">\n                       <div class=\"col-md-10\" >\n                        <textarea id=\"referencia_consulta\" name=\"referencia_consulta\" style=\"width:90%\" rows='5' [ngModel]=\"indicador.referencia_consulta\"></textarea>\n                       </div>\n                  </div>\n                  <br/><br/>\n                  <!-- Fim da Formula -->\n                  <div *ngIf=\"indicador.TipoConsultaCodigo==5\">\n                      <popover-content #procedimento\n                                      title=\"Procedimento Operacional\"\n                                      [closeOnClickOutside]=\"true\">\n                         Procedimento a ser seguido para extração dos dados.\n                      </popover-content>\n                      <legend>Procedimento Extração dos Dados <i class=\"fa fa-question-circle\" popoverPlacement=\"right\" popoverOnHover=\"true\" [popover]=\"procedimento\"></i>\n                        <a (click)=\"(null)\" class=\"btn btn-primary btn-xs\" (click)=\"editProcedimentoOperacional(true)\" *ngIf=\"!isEditProcedimentoOperacional\"><i class=\"fa fa-edit\"></i> Edita</a>\n                        <a (click)=\"(null)\" class=\"btn btn-success btn-xs\" (click)=\"editProcedimentoOperacional(false)\" *ngIf=\"isEditProcedimentoOperacional\"><i class=\"fa fa-save\"></i> Grava</a>\n                      </legend>\n                      <!-- Procedimento extracao -->\n                      <span class=\"procedimento_operacional\" [innerHTML]=\"indicador.procedimento_operacional||msg_padrao\"></span>\n                      <!-- Fim do Procedimento de extracao -->\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-12 form-actions\">\n                      <button class=\"btn btn-primary\" type=\"submit\">\n                        <i class=\"fa fa-save\"></i>Grava\n                      </button>\n                    </div>\n                  </div>\n                </fieldset>\n              </tab>\n              <tab [active]=\"currenttab == 't7'\">\n                <fieldset style=\"padding: 15px\">\n                  <div class=\"table-responsive col-md-10\">\n                    <table class=\"table table-hover\">\n                      <thead>\n                      <tr>\n                        <th>#</th>\n                        <th>Tipo</th>\n                        <th>Arquivo</th>\n                        <th>Responsável</th>\n                        <th>Resultado Processamento</th>\n                        <th>&nbsp;</th>\n                      </tr>\n                      </thead>\n                      <tbody>\n                      <tr>\n                        <td>1</td>\n                        <td>Imagem</td>\n                        <td>importa_dados.xls</td>\n                        <td>André de Souza Campos</td>\n                        <td>1500 Registros importados com sucesso</td>\n                        <td>\n                            <a class=\"btn btn-info btn-sm icon white\">\n                              <i class=\"fa fa-file\"></i> Visualiza Log\n                            </a>\n                        </td>\n                      </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </fieldset>\n              </tab>\n              <tab [active]=\"currenttab == 't8'\">\n                <fieldset style=\"padding: 15px\">\n                  <resultset *ngIf=\"indicador.Granularidade\" [codigo]=\"indicador.codigo\"\n                  [granularidade]=\"indicador.Granularidade.sigla\"\n                  [criterio]=\"indicador.CriterioAgregacaoCodigo\"\n                  [tipo]=\"indicador.TipoConsultaCodigo\"></resultset>\n                </fieldset>\n              </tab>\n              <tab [active]=\"currenttab == 't9'\">\n                <fieldset style=\"padding: 15px\">\n                      <grafico #graph (onInit)=\"loadData(indicador.codigo, indicador.Granularidade.sigla, this.graph)\"\n                     type=\"bar\"\n                     [options]=\"{\n                        xkey: getLabel(),\n                        xLabelAngle: 45,\n                        resize: true,\n                        ykeys: [indicador.codigo.toLowerCase()],\n                        labels: [indicador.codigo],\n                        barColors: barColorsDemo\n                    }\" *ngIf=\"isIndicadorTemGrafico()\"></grafico>\n                </fieldset>\n              </tab>\n            </tabset>\n\n        </form>\n      </div>\n      <!-- end widget content -->\n\n    </div>\n    <!-- end widget div -->\n  </sa-widget>\n"

/***/ }),

/***/ 1332:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Indicadores', titulo ]\" icon=\"file-text-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n  </div>\n  <!--\n      The ID \"widget-grid\" will start to initialize all widgets below\n      You do not need to use widgets if you dont want to. Simply remove\n      the <section></section> and you can use wells or panels instead\n      -->\n  <!-- widget grid -->\n  <sa-widgets-grid>\n    <!-- row -->\n    <div class=\"row\">\n      <div class=\"col-sm-9\">\n      <!-- NEW WIDGET START -->\n      <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <div class=\"alert alert-info\" *ngIf=\"false\">\n          <strong>NOTE:</strong> Dados ainda não validados pela área\n        </div>\n        <!-- Widget ID (each widget will need unique ID)-->\n        <sa-widget class=\"well\">\n          <!-- widget options:\n              usage: <sa-widget id=\"wid-id-0\" [editbutton]=\"false\">\n              [colorbutton]=\"false\"\n              [editbutton]=\"false\"\n              [togglebutton]=\"false\"\n              [deletebutton]=\"false\"\n              [fullscreenbutton]=\"false\"\n              [custombutton]=\"false\"\n              [collapsed]=\"true\"\n              [sortable]=\"false\"\n          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-comments\"></i> </span>\n\n            <h2>Widget Title </h2>\n          </header>\n          <!-- widget div-->\n          <div>\n            <!-- widget content -->\n            <div class=\"widget-body no-padding\" data-sparkline-container=\"\">\n\n              <sa-datatable #listaIndicadores [options]=\"options\"\n                         [detailsFormat]=\"detailsFormat\"\n                         tableClass=\"display projects-table table table-striped table-bordered table-hover\"\n                         width=\"100%\"\n                         (onInit)=\"getIndicadores()\">\n                <thead>\n                <tr>\n                  <th></th>\n                  <th>Indicadores</th>\n                  <th>Código</th>\n                  <th>Periodicidade</th>\n                  <th>Última Atualização</th>\n                  <th>Situação</th>\n                </tr>\n                </thead>\n\n              </sa-datatable>\n            </div>\n            <!-- end widget content -->\n          </div>\n          <!-- end widget div -->\n        </sa-widget>\n        <!-- end widget -->\n      </article>\n      <!-- WIDGET END -->\n      </div>\n    </div>\n    <!-- end row -->\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n</div>\n\n<div bsModal #importaModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\n     aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <form #fimport=\"ngForm\" >\n      <div class=\"modal-header bg-warning text-white\">\n        <button type=\"button\" class=\"close\" (click)=\"importaModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h4 class=\"modal-title\">Importação</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div id=\"documento-form\">\n                <form role=\"form\">\n                  <fieldset>\n                      <legend>&nbsp;&nbsp;[{{ indicadorSelecionado.codigo }} - {{ indicadorSelecionado.titulo }}] </legend>\n                        <div class=\"row\" *ngIf=\"indicadorSelecionado.PeriodicidadeAtualizacao\">\n                          <label class=\"col-md-2 control-label\">Periodicidade</label>\n                          <div class=\"col-md-10\">{{ indicadorSelecionado.PeriodicidadeAtualizacao.descricao }}</div>\n                        </div>\n                        <div class=\"row\" *ngIf=\"indicadorSelecionado.UnidadeMedida\">\n                          <label class=\"col-md-2 control-label\">Unidade de Medida</label>\n                          <div class=\"col-md-10\">{{ indicadorSelecionado.UnidadeMedida.descricao }}</div>\n                        </div>\n                        <div class=\"row\" *ngIf=\"indicadorSelecionado.Granularidade\">\n                          <label class=\"col-md-2 control-label\">Estratificação</label>\n                          <div class=\"col-md-10\">{{ indicadorSelecionado.Granularidade.descricao }}</div>\n                        </div>\n                        <div class=\"row\" *ngIf=\"indicadorSelecionado.fonte_dados\">\n                          <label class=\"col-md-2 control-label\">Fonte</label>\n                          <div class=\"col-md-10\">{{ indicadorSelecionado.fonte_dados }}</div>\n                        </div>\n                        <div class=\"row\">\n                          <label class=\"switch switch-icon switch-primary\">\n                              <input type=\"checkbox\" class=\"switch-input\" checked=\"\">\n                              <span class=\"switch-label\" data-on=\"\" data-off=\"\"></span>\n                              <span class=\"switch-handle\"></span>\n                          </label>\n                        </div>\n                        <div class=\"form-group row\">\n                          <label class=\"col-md-2 control-label\" for=\"arquivo\">Arquivo</label>\n                          <div class=\"col-md-10\">\n                            <input type=\"file\" class=\"btn btn-default\" id=\"arquivo\"\n                              name=\"arquivo\"\n                              accept=\"text/csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\"\n                              title=\"Escolha um arquivo\"\n                              (change)=\"fileChangeEvent($event)\"\n                              style=\"width: 100%\">\n                            <p class=\"help-block\">\n                              selecione o arquivo a ser carregado (CSV).\n                            </p>\n                          </div>\n                        </div>\n                    </fieldset>\n                    <hr />\n                    <table class=\"table table-striped\" *ngIf=\"newArquivo.nameFile\">\n                  <thead>\n                      <tr>\n                          <th>Nome</th>\n                          <th>Tipo</th>\n                          <th>Tamanho</th>\n                          <th>Data</th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      <tr>\n                          <td>{{ newArquivo.nameFile }}</td>\n                          <td><img src=\"{{ newArquivo.formato | imgtype }}\"/></td>\n                          <td>{{ newArquivo.tamanhoFile | fileSize }}</td>\n                          <td>{{ newArquivo.dataFile | date:'dd/MM/yyyy - HH:mm:ss'}}</td>\n                      </tr>\n                  </tbody>\n              </table>\n              </form>\n          </div>\n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"importaModal.hide()\">\n          <i class=\"fa fa-ban\"></i> Fecha\n        </button>\n        <button type=\"butten\" class=\"btn btn-primary\" (click)=\"atualizaImportacao()\">\n          <i class=\"fa fa-save\"></i> Grava\n        </button>\n      </div>\n    </form>\n    </div>\n  </div>\n</div>\n\n<div bsModal #formModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\n     aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <form #fimport=\"ngForm\" >\n      <div class=\"modal-header bg-primary text-white\">\n        <button type=\"button\" class=\"close\" (click)=\"formModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h4 class=\"modal-title\">Formulário</h4>\n      </div>\n      <div class=\"modal-body\">\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"formModal.hide()\">\n          <i class=\"fa fa-ban\"></i> Fecha\n        </button>\n        <button type=\"butten\" class=\"btn btn-primary\" (click)=\"atualizaFormulario()\">\n          <i class=\"fa fa-save\"></i> Grava\n        </button>\n      </div>\n    </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1333:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Lista Indicadores', 'Por Unidade']\" icon=\"desktop\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <div class=\"col-sm-12 col-md-2 text-right\">\n      <button (click)=\"newUnidade(null)\" class=\"btn btn-warning btn-sm\">\n        <i class=\"fa fa-plus\"></i> Nova unidade\n      </button>\n    </div>\n  </div>\n  <sa-tree-view [items]=\"listaUnidades\" (change)=\"changeLstener($event)\" ></sa-tree-view>\n</div>\n\n<!-- Modal -->\n\n\n<div bsModal #unidadeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\n     aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <form #f=\"ngForm\" >\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"unidadeModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h4 class=\"modal-title\">{{ titulo }}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <input name=\"sigla\" id=\"sigla\" type=\"text\" class=\"form-control\"\n              #sigla [(ngModel)]=\"unidade.sigla\"\n              ng-disabled=\"unidade.codigo\"\n              (input)=\"sigla.value=$event.target.value.toUpperCase().replace(' ','')\"\n              placeholder=\"Sigla\" maxlength=\"20\" required>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <input name=\"nome\" id=\"nome\" type=\"text\" class=\"form-control\" [(ngModel)]=\"unidade.nome\" placeholder=\"Nome\" maxlength=\"100\" required>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"email\"> Email</label>\n              <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"unidade.email\" placeholder=\"Email do setor\">\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"telefone\"> Telefone</label>\n              <input type=\"text\" class=\"form-control\" id=\"telefone\" name=\"telefone\" [(ngModel)]=\"unidade.telefone\" placeholder=\"Telefone\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <textarea name=\"competencia\" id=\"competencia\" class=\"form-control\" [(ngModel)]=\"unidade.competencia\" placeholder=\"Competência\" rows=\"5\"></textarea>\n            </div>\n            <div class=\"form-group\">\n              <textarea name=\"atividade\" id=\"atividade\" class=\"form-control\" [(ngModel)]=\"unidade.atividade\" placeholder=\"Atividade desenvolvida\" rows=\"5\"></textarea>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"unidadeModal.hide()\">\n          <i class=\"fa fa-ban\"></i> Fecha\n        </button>\n        <button type=\"butten\" class=\"btn btn-primary\" (click)=\"saveUnidade(f)\">\n          <i class=\"fa fa-save\"></i> Grava\n        </button>\n      </div>\n    </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1334:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Indicadores', 'Lista']\" icon=\"file-text-o\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n  </div>\n  <!--\n      The ID \"widget-grid\" will start to initialize all widgets below\n      You do not need to use widgets if you dont want to. Simply remove\n      the <section></section> and you can use wells or panels instead\n      -->\n  <!-- widget grid -->\n  <sa-widgets-grid>\n    <!-- row -->\n    <div class=\"row\">\n      <div class=\"col-sm-9\">\n      <!-- NEW WIDGET START -->\n      <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <div class=\"alert alert-info\" *ngIf=\"false\">\n          <strong>NOTE:</strong> Dados ainda não validados pela área\n        </div>\n        <!-- Widget ID (each widget will need unique ID)-->\n        <sa-widget class=\"well\">\n          <!-- widget options:\n              usage: <sa-widget id=\"wid-id-0\" [editbutton]=\"false\">\n              [colorbutton]=\"false\"\n              [editbutton]=\"false\"\n              [togglebutton]=\"false\"\n              [deletebutton]=\"false\"\n              [fullscreenbutton]=\"false\"\n              [custombutton]=\"false\"\n              [collapsed]=\"true\"\n              [sortable]=\"false\"\n          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-comments\"></i> </span>\n\n            <h2>Widget Title </h2>\n          </header>\n          <!-- widget div-->\n          <div>\n            <!-- widget content -->\n            <div class=\"widget-body no-padding\" data-sparkline-container=\"\">\n              <h3 class=\"col-md-12 margin-top-0\" *ngIf=\"!isEmpty(pesquisa)\">\n                <small class=\"font-xs\"><i>Pesquisa por <span [innerHTML]=\"formataTela(pesquisa)\"></span></i></small>\n                &nbsp;&nbsp;<a class=\"btn btn-primary btn-xs\" (click)=\"limpaFiltro()\"><i class=\"fa fa-times\"></i> Limpa filtro</a>\n              </h3>\n              <sa-datatable #listaIndicadores [options]=\"options\"\n                         [detailsFormat]=\"detailsFormat\"\n                         tableClass=\"display projects-table table table-striped table-bordered table-hover\"\n                         width=\"100%\"\n                         (onInit)=\"getIndicadores()\">\n                <thead>\n                <tr>\n                  <th></th>\n                  <th>Indicadores</th>\n                  <th>Código</th>\n                  <th>Descrição</th>\n                  <th>Conceituação</th>\n                  <th>Situação</th>\n                  <th>Visibilidade</th>\n                </tr>\n                </thead>\n\n              </sa-datatable>\n            </div>\n            <!-- end widget content -->\n          </div>\n          <!-- end widget div -->\n        </sa-widget>\n        <!-- end widget -->\n      </article>\n      <!-- WIDGET END -->\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"well padding-10\">\n          <h5 class=\"margin-top-0\"><i class=\"fa fa-tags\"></i> Marcadores:</h5>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <span *ngFor=\"let item of listaIndicadorPorTag\">\n                  <a (click)=\"buscaPorTag(item.codigo, item.descricao )\" data-toggle=\"tooltip\" title=\"Quantidade: {{ item.numero_indicadores }}\"><span class=\"badge badge-info\">{{ item.descricao }}</span></a>\n                </span>\n            </div>\n          </div>\n        </div>\n        <div class=\"well padding-10\">\n          <h5 class=\"margin-top-0\"><i class=\"fa fa-exclamation-circle\"></i> Unidades:</h5>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <ul class=\"list-group no-margin\">\n                <li class=\"list-group-item\" *ngFor=\"let item of listaIndicadorPorUnidade\">\n                  <a  (click)=\"buscaPorUnidade(item.codigo, item.sigla)\" data-toggle=\"tooltip\" title=\"{{ item.nome }}\"> <span class=\"badge pull-right\">{{ item.numero_indicadores }}</span> {{ item.sigla }} </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <!-- end row -->\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n</div>\n"

/***/ }),

/***/ 1335:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <div class=\"row\">\n        <sa-big-breadcrumbs [items]=\"['Painel']\" icon=\"tachometer\"\n                            class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    </div>\n\n    <sa-widgets-grid>\n        <div class=\"row\">\n          <!-- NEW WIDGET START -->\n\t\t\t\t\t\t<article class=\"col-sm-12 col-md-12 col-lg-12\"  *ngIf=\"listaUsers.length>0\">\n              <header>\n                  <h2><strong>Usuários</strong> <i>pendentes aprovação</i></h2>\n              </header>\n\t\t\t\t\t\t\t<!-- Widget ID (each widget will need unique ID)-->\n\t\t\t\t\t\t\t<div class=\"jarviswidget jarviswidget-color-greenDark\" id=\"wid-id-2\"\n              data-widget-colorbutton=\"false\"\n              data-widget-editbutton=\"false\"\n              data-widget-togglebutton=\"false\"\n              data-widget-deletebutton=\"false\"\n              data-widget-fullscreenbutton=\"false\"\n              data-widget-custombutton=\"false\"\n              data-widget-collapsed=\"false\"\n              data-widget-sortable=\"false\"\n              data-widget-editbutton=\"false\">\n\t\t\t\t\t\t\t\t<!-- widget options:\n\t\t\t\t\t\t\t\tusage: <div class=\"jarviswidget\" id=\"wid-id-0\" data-widget-editbutton=\"false\">\n\n\t\t\t\t\t\t\t\tdata-widget-colorbutton=\"false\"\n\t\t\t\t\t\t\t\tdata-widget-editbutton=\"false\"\n\t\t\t\t\t\t\t\tdata-widget-togglebutton=\"false\"\n\t\t\t\t\t\t\t\tdata-widget-deletebutton=\"false\"\n\t\t\t\t\t\t\t\tdata-widget-fullscreenbutton=\"false\"\n\t\t\t\t\t\t\t\tdata-widget-custombutton=\"false\"\n\t\t\t\t\t\t\t\tdata-widget-collapsed=\"true\"\n\t\t\t\t\t\t\t\tdata-widget-sortable=\"false\"\n\n\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t\t<header>\n\t\t\t\t\t\t\t\t\t<span class=\"widget-icon\"> <i class=\"fa fa-table\"></i> </span>\n\t\t\t\t\t\t\t\t\t<h2>Solicitações </h2>\n\n\t\t\t\t\t\t\t\t</header>\n\n\t\t\t\t\t\t\t\t<!-- widget div-->\n\t\t\t\t\t\t\t\t<div>\n\n\t\t\t\t\t\t\t\t\t<!-- widget content -->\n\t\t\t\t\t\t\t\t\t<div class=\"widget-body no-padding\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n\n\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-hover\">\n\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>#</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Nome</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Login</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Email</th>\n                            <th>CPF</th>\n                            <th>Celular</th>\n                            <th>Perfil</th>\n                            <th>Unidade</th>\n                            <th>Ação</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of listaUsers;let i=index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{i + 1}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{item.nome}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{item.login}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{item.email}}</td>\n                            <td>{{item.cpf |cpf}}</td>\n                            <td>{{item.celular | fone}}</td>\n                            <td title='{{item.Perfil.descricao}}'>{{item.Perfil.sigla}}</td>\n                            <td title='{{item.Unidade.nome}}'>{{item.Unidade.sigla}}</td>\n                            <td>\n                              <button class='btn btn-xs btn-info pull-left' (click)=\"aprovaSolicitacao(item.codigo)\">\n                                <i class=\"fa fa-thumbs-o-up \"></i>&nbsp;Aprova\n                              </button>\n                              <button class='btn btn-xs btn-danger pull-left' style='margin-left:5px' (click)=\"rejeitaSolicitacao(item.codigo)\">\n                                <i class=\"fa fa-times \"></i>&nbsp;Declina\n                              </button>\n                            </td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- end widget content -->\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- end widget div -->\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- end widget -->\n\n\t\t\t\t\t\t</article>\n\t\t\t\t\t\t<!-- WIDGET END -->\n        </div>\n        <!-- row -->\n        <div class=\"row\">\n          <div class=\"panel panel-default\">\n            <div class=\"col-sm-6 col-lg-4\" *ngIf=\"false\">\n                <div class=\"panel-body status\">\n                  <div class=\"who clearfix\">\n                    <img src=\"assets/img/avatars/female.png\" alt=\"img\" class=\"online\">\n                    <span class=\"name\"><b>Rita de Cássia</b></span>\n                    <span class=\"from\">Último cadastro: <b>1 dia atrás</b> </span>\n                  </div>\n                  <ul class=\"comments\">\n                    <li>\n                      <span class=\"name\">DSX10</span> Indicador 1\n                    </li>\n                    <li>\n                      <span class=\"name\">DSX10</span> Indicador 1\n                    </li>\n                    <li>\n                      <span class=\"name\">DSX10</span> Indicador 1\n                    </li>\n                  </ul>\n                </div>\n            </div>\n            <div class=\"col-sm-4 col-lg-4\">\n                  <header>\n                      <h2><strong>Indicadores</strong> <i>Cadastrados</i></h2>\n                  </header>\n                  <!-- widget div-->\n                  <div>\n                      <!-- widget content -->\n                      <div class=\"widget-body\">\n                        <sa-morris-graph [data]=\"listaIndicadores\"\n                                       type=\"donut\"\n                                       [options]=\"{\n                                      formater: percentageFormat\n                        }\"></sa-morris-graph>\n                      </div>\n                      <!-- end widget content -->\n                  </div>\n                  <footer>\n                    <h2>Total: <span class=\"txt-color-blue\">{{totalIndicadores}}</span></h2>\n                  </footer>\n            </div>\n          </div>\n        </div>\n    </sa-widgets-grid>\n</div>\n"

/***/ }),

/***/ 1336:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Usuário', 'Profile']\" icon=\"group\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n  </div>\n  <!-- end row -->\n  <!-- row -->\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"well well-sm\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-md-12 col-lg-12\">\n            <div class=\"well well-light well-sm no-margin no-padding\">\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"air air-top-right padding-10\">\n                      <h4 class=\"txt-color-black font-md\">{{ getDate() }}</h4>\n                    </div>\n                    <div class=\"air air-bottom-right padding-10\">\n                      <button type=\"button\" class=\"btn txt-color-white bg-color-teal btn-sm\" (click)=\"editItemPerfil()\"><i class=\"fa fa-check\"></i> Edita</button>&#xA0;\n                    </div>\n                </div>\n                <div class=\"col-sm-12\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-3 profile-pic\">\n                      <img src=\"assets/img/avatars/male.png\" alt=\"user\">\n\n                      <div class=\"padding-10\">\n                        <h4 class=\"font-md\"><strong>1,543</strong>\n                          <br>\n                          <small>Consultas</small>\n                        </h4>\n                        <br>\n                        <h4 class=\"font-md\"><strong>14</strong>\n                          <br>\n                          <small>Indicadores</small>\n                        </h4>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                      <h1>{{user.nome}}\n                        <br>\n                        <small> Unidade de teste</small>\n                      </h1>\n                      <ul class=\"list-unstyled\">\n                        <li>\n                          <p class=\"text-muted\">\n                            <i class=\"fa fa-phone\"></i>&#xA0;&#xA0;(<span class=\"txt-color-darken\">61</span>) <span class=\"txt-color-darken\">3426</span> - <span class=\"txt-color-darken\">6473</span>\n                          </p>\n                        </li>\n                        <li>\n                          <p class=\"text-muted\">\n                            <i class=\"fa fa-envelope\"></i>&#xA0;&#xA0;<a href=\"mailto:{{ user.email }}\">{{ user.email }}</a>\n                          </p>\n                        </li>\n                        <li>\n                          <p class=\"text-muted\">\n                            <i class=\"fa fa-calendar\"></i>&#xA0;&#xA0;<span class=\"txt-color-darken\">Último Login <a href=\"\" rel=\"tooltip\" title=\"\" data-placement=\"top\" data-original-title=\"Create an Appointment\">4:30 PM</a></span>\n                          </p>\n                        </li>\n                      </ul>\n                      <br>\n\n                      <p class=\"font-md\">\n                        <i>Perfil</i>\n                      </p>\n                      <ul class=\"list-unstyled\">\n                        <li>\n                          <p class=\"text-muted\">\n                            <i class=\"fa fa-caret-right\"></i>&#xA0;&#xA0;<span class=\"txt-color-darken\">Administrador</span>\n                          </p>\n                        </li>\n                      </ul>\n                      <br>\n\n                      <p class=\"font-md\">\n                        <i>Texto</i>\n                      </p>\n\n                      <p>\n                        Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est\n                        eligendi optio\n                        cumque nihil impedit quo minus id quod maxime placeat facere\n                      </p>\n                      <br>\n                      <br>\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <hr>\n                  <div class=\"padding-10\">\n                    <div class=\"tab-content padding-top-10\">\n                        <div class=\"row\">\n                          <div class=\"col-xs-2 col-sm-1\">\n                            <time datetime=\"2017-11-01\" class=\"icon\">\n                              <strong>Nov</strong>\n                              <span>01</span>\n                            </time>\n                          </div>\n                          <div class=\"col-xs-10 col-sm-11\">\n                            <h6 class=\"no-margin\"><a href=\"\">Mudança no indicador XADC</a></h6>\n\n                            <p>\n                              Morning our be dry. Life also third land after first beginning to evening cattle created\n                              let subdue you'll winged don't Face firmament.\n                              You winged you're was Fruit divided signs lights i living cattle yielding over light\n                              life life sea, so deep.\n                              Abundantly given years bring were after. Greater you're meat beast creeping behold he\n                              unto She'd doesn't. Replenish brought kind gathering Meat.\n                            </p>\n                          </div>\n                          <div class=\"col-sm-12\">\n                            <hr>\n                          </div>\n                          <div class=\"col-xs-2 col-sm-1\">\n                            <time datetime=\"2017-09-20\" class=\"icon\">\n                              <strong>Set</strong>\n                              <span>20</span>\n                            </time>\n                          </div>\n                          <div class=\"col-xs-10 col-sm-11\">\n                            <h6 class=\"no-margin\"><a href=\"\">Mudança no indicador ACPA</a></h6>\n\n                            <p>\n                              Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi Nam eget dui.\n                              Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,\n                              sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel.\n                            </p>\n                          </div>\n\n                          <div class=\"col-sm-12\">\n                            <br>\n                          </div>\n                        </div>\n                      <!-- end tab -->\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- end row -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- end row -->\n</div>\n\n<div bsModal #perfilModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\n     aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <form #fedit=\"ngForm\" >\n      <div class=\"modal-header bg-primary text-white\">\n        <button type=\"button\" class=\"close\" (click)=\"perfilModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h4 class=\"modal-title\">Perfil</h4>\n      </div>\n      <div class=\"modal-body\">\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"perfilModal.hide()\">\n          <i class=\"fa fa-ban\"></i> Fecha\n        </button>\n        <button type=\"butten\" class=\"btn btn-primary\" (click)=\"atualizaPerfil()\">\n          <i class=\"fa fa-save\"></i> Grava\n        </button>\n      </div>\n    </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1337:
/***/ (function(module, exports) {

module.exports = "<p>Programa</p>\n"

/***/ }),

/***/ 504:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	if (typeof execScript !== "undefined")
		execScript(src);
	else
		eval.call(null, src);
}


/***/ }),

/***/ 531:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ })

});
//# sourceMappingURL=0.chunk.js.map