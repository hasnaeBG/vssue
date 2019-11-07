/*!
 * vssue - A vue-powered issue-based comment plugin
 *
 * @version v1.1.1
 * @link https://vssue.js.org
 * @license MIT
 * @copyright 2018-2019 meteorlxy
 */

import { Prop, Inject, Component, Vue as Vue$1, Watch, Provide } from 'vue-property-decorator';
import Vue from 'vue';
import { formatDateTime, getCleanURL } from '@vssue/utils';
import VueI18n from 'vue-i18n';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var script = Vue.extend({
    name: 'Iconfont',
});

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function (_h,_vm) {var _c=_vm._c;return _c('svg',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}]},[_c('symbol',{attrs:{"id":"vssue-icon-bitbucket","viewBox":"0 0 1024 1024"}},[_c('path',{attrs:{"d":"M579.5522464 489.45249493q4.8371808 38.38537173-30.81752427 61.55702827t-67.95459093 3.66689493q-23.79580907-10.37653333-32.6119616-35.34262826t-0.31207573-50.01020907 31.67573333-35.34262827q21.92335253-11.00068587 44.1587808-7.33379093t39.00952427 21.61127573 16.77409493 41.1160384zM647.19476053 476.65737173q-8.50407573-65.22392427-68.8908192-99.9424t-120.07131413-7.9579424q-38.38537173 17.08617173-61.24495253 53.9111616t-21.0651424 78.95527574q2.41859093 55.4715424 47.20152426 94.48106666t100.87862827 34.1723424q55.4715424-4.8371808 92.60860907-51.18049493t30.50544746-102.43900907zM792.93434133 146.32472427q-12.17097173-16.4620192-34.1723424-27.15062827t-35.34262826-13.41927573-43.30057174-7.64586667q-177.33729493-28.63299093-345.00022826 1.24830507-26.2144 4.29104747-40.25782827 7.33379093t-33.54819093 13.41927573-30.50544747 26.2144q18.2564576 17.08617173 46.34331413 27.6967616t44.78293334 13.41927574 53.36502826 7.02171413q138.95192427 17.71032427 273.06666667 0.62415253 38.38537173-4.8371808 54.53531413-7.33379093t44.1587808-13.1072 45.7191616-28.32091413zM827.65281813 777.10872427q-4.8371808 15.83786667-9.44030506 46.65539093t-8.50407574 51.18049493-17.39824746 42.6764192-35.34262827 34.4064q-52.4288 29.2571424-115.46819093 43.61264747t-123.1140576 13.41927573-122.8019808-11.3127616q-28.0088384-4.8371808-49.69813334-11.00068586t-46.65539093-16.4620192-44.4708576-26.52647574-31.67573333-37.4491424q-15.21371413-58.51428587-34.71847574-177.96144746l3.66689494-9.7523808 11.00068586-5.46133334q135.9091808 90.1900192 308.72137174 90.1900192t309.34552426-90.1900192q12.79512427 3.66689493 14.5895616 14.04342827t-3.0427424 27.46270507-4.8371808 22.54750506zM937.97175147 191.41973333q-15.83786667 101.8148576-67.64251414 399.22346667-3.0427424 18.2564576-16.4620192 34.1723424t-26.52647573 24.3419424-33.23611413 18.88060907q-153.61950507 76.7707424-371.8387808 53.67710506-151.12289493-16.4620192-240.14262827-84.72868586-9.12822827-7.33379093-15.52579093-16.1499424t-10.37653334-21.2992-5.46133333-20.75306667-3.66689493-24.10788587-3.3548192-21.2992q-5.46133333-30.50544747-16.1499424-91.43832426t-17.08617174-98.4600384-14.35550506-89.8779424-13.41927574-96.27550507q1.7944384-15.83786667 10.68860907-29.5692192t19.19268587-22.8595808 27.46270506-18.2564576 28.0088384-13.73135253 29.2571424-11.3127616q76.22460907-28.0088384 190.75657174-39.00952427 231.0144-22.54750507 412.01859093 30.50544747 94.48106667 28.0088384 131.072 74.35215253 9.7523808 12.17097173 10.0644576 31.0515808t-3.3548192 32.9240384z"}})]),_vm._v(" "),_c('symbol',{attrs:{"id":"vssue-icon-gitee","viewBox":"0 0 1024 1024"}},[_c('path',{attrs:{"d":"M978.404275 409.561604H455.061338c-25.117645 0-45.499734 20.382089-45.499734 45.499734l-0.031997 113.781333c0 25.117645 20.350092 45.499734 45.499734 45.531731h318.594132c25.117645 0 45.499734 20.382089 45.499734 45.499735v22.749867a136.5312 136.5312 0 0 1-136.5312 136.5312H250.248539a45.499734 45.499734 0 0 1-45.499734-45.499734V341.343999a136.5312 136.5312 0 0 1 136.5312-136.5312L978.308284 204.780802c25.117645 0 45.499734-20.350092 45.499734-45.467738L1023.904009 45.531731h0.031997A45.499734 45.499734 0 0 0 978.468269 0h-0.031997L341.343999 0.031997C152.84967 0.031997 0.031997 152.84967 0.031997 341.343999v637.092273c0 25.117645 20.382089 45.499734 45.499734 45.499734h671.233072a307.171203 307.171203 0 0 0 307.171203-307.171203v-261.671468c0-25.117645-20.382089-45.499734-45.499734-45.499734z"}})]),_vm._v(" "),_c('symbol',{attrs:{"id":"vssue-icon-github","viewBox":"0 0 1024 1024"}},[_c('path',{attrs:{"d":"M512 20.4425c-278.334 0-504 225.6345-504 504 0 222.6735 144.4275 411.6105 344.673 478.233 25.2 4.662 34.461-10.9305 34.461-24.255 0-12.0015-0.4725-51.723-0.693-93.8385-140.238 30.492-169.8165-59.472-169.8165-59.472-22.932-58.2435-55.944-73.7415-55.944-73.7415-45.738-31.2795 3.465-30.6495 3.465-30.6495 50.589 3.5595 77.238 51.9435 77.238 51.9435 44.9505 77.049 117.9045 54.7785 146.664 41.895 4.5045-32.571 17.577-54.81 32.004-67.41-111.951-12.726-229.635-55.9755-229.635-249.0705 0-55.0305 19.6875-99.981 51.9435-135.2925-5.229-12.6945-22.491-63.945 4.8825-133.371 0 0 42.336-13.545 138.6315 51.66 40.194-11.1825 83.3175-16.758 126.1575-16.9785 42.8085 0.189 85.9635 5.796 126.252 16.9785 96.201-65.205 138.4425-51.66 138.4425-51.66 27.4365 69.426 10.1745 120.6765 4.9455 133.371 32.319 35.28 51.8805 80.262 51.8805 135.2925 0 193.5675-117.9045 236.187-230.139 248.6925 18.081 15.6555 34.1775 46.305 34.1775 93.3345 0 67.4415-0.5985 121.716-0.5985 138.3165 0 13.419 9.072 29.1375 34.6185 24.192 200.151-66.717 344.3895-255.5595 344.3895-478.17 0-278.3655-225.666-504-504-504z"}})]),_vm._v(" "),_c('symbol',{attrs:{"id":"vssue-icon-gitlab","viewBox":"0 0 1024 1024"}},[_c('path',{attrs:{"d":"M66.61375986 405.11600042L512.11376028 976.03999972 23.84576 621.65599958a39.312 39.312 0 0 1-14.07600042-43.30799944l56.8080007-173.26800028z m259.88400014 0h371.26800014L512.14975986 976.03999972zM215.11376 60.88400042l111.384 344.232H66.61375986l111.384-344.232a19.72800014 19.72800014 0 0 1 37.11600014 0z m742.49999972 344.232l56.8080007 173.2679993a39.23999986 39.23999986 0 0 1-14.07600042 43.30800042l-488.26800028 354.38400014 445.50000042-570.92400028z m0 0h-259.88400014l111.384-344.232a19.72800014 19.72800014 0 0 1 37.11600014 0z"}})]),_vm._v(" "),_c('symbol',{attrs:{"id":"vssue-icon-loading","viewBox":"0 0 1024 1024"}},[_c('path',{attrs:{"d":"M843.307 742.24c0 3.217 2.607 5.824 5.824 5.824s5.824-2.607 5.824-5.824a5.823 5.823 0 0 0-5.824-5.824 5.823 5.823 0 0 0-5.824 5.824zM714.731 874.912c0 6.398 5.186 11.584 11.584 11.584s11.584-5.186 11.584-11.584-5.186-11.584-11.584-11.584-11.584 5.186-11.584 11.584zM541.419 943.2c0 9.614 7.794 17.408 17.408 17.408s17.408-7.794 17.408-17.408-7.794-17.408-17.408-17.408-17.408 7.794-17.408 17.408z m-186.56-9.152c0 12.795 10.373 23.168 23.168 23.168s23.168-10.373 23.168-23.168-10.373-23.168-23.168-23.168-23.168 10.373-23.168 23.168zM189.355 849.12c0 16.012 12.98 28.992 28.992 28.992s28.992-12.98 28.992-28.992-12.98-28.992-28.992-28.992-28.992 12.98-28.992 28.992zM74.731 704.736c0 19.228 15.588 34.816 34.816 34.816s34.816-15.588 34.816-34.816-15.588-34.816-34.816-34.816-34.816 15.588-34.816 34.816z m-43.008-177.28c0 22.41 18.166 40.576 40.576 40.576s40.576-18.166 40.576-40.576-18.166-40.576-40.576-40.576-40.576 18.166-40.576 40.576z m35.392-176.128c0 25.626 20.774 46.4 46.4 46.4s46.4-20.774 46.4-46.4c0-25.626-20.774-46.4-46.4-46.4-25.626 0-46.4 20.774-46.4 46.4z m106.176-142.016c0 28.843 23.381 52.224 52.224 52.224s52.224-23.381 52.224-52.224c0-28.843-23.381-52.224-52.224-52.224-28.843 0-52.224 23.381-52.224 52.224z m155.904-81.344c0 32.024 25.96 57.984 57.984 57.984s57.984-25.96 57.984-57.984-25.96-57.984-57.984-57.984-57.984 25.96-57.984 57.984z m175.104-5.056c0 35.24 28.568 63.808 63.808 63.808s63.808-28.568 63.808-63.808c0-35.24-28.568-63.808-63.808-63.808-35.24 0-63.808 28.568-63.808 63.808z m160.32 72.128c0 38.421 31.147 69.568 69.568 69.568s69.568-31.147 69.568-69.568-31.147-69.568-69.568-69.568-69.568 31.147-69.568 69.568z m113.92 135.488c0 41.638 33.754 75.392 75.392 75.392s75.392-33.754 75.392-75.392-33.754-75.392-75.392-75.392-75.392 33.754-75.392 75.392z m45.312 175.488c0 44.854 36.362 81.216 81.216 81.216s81.216-36.362 81.216-81.216c0-44.854-36.362-81.216-81.216-81.216-44.854 0-81.216 36.362-81.216 81.216z"}})]),_vm._v(" "),_c('symbol',{attrs:{"id":"vssue-icon-like","viewBox":"0 0 1024 1024"}},[_c('path',{attrs:{"d":"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4-20.5-21.5-48.1-33.4-77.9-33.4-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-0.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81z m636.4-353l-21.9 19 13.9 25.4c4.6 8.4 6.9 17.6 6.9 27.3 0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4c4.6 8.4 6.9 17.6 6.9 27.3 0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4c4.6 8.4 6.9 17.6 6.9 27.3 0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5c5.2-18.9 22.5-32.2 42.2-32.3 7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"}})]),_vm._v(" "),_c('symbol',{attrs:{"id":"vssue-icon-unlike","viewBox":"0 0 1024 1024"}},[_c('path',{attrs:{"d":"M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4-8.3-3.6-17.2-5.4-26.5-5.4H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h129.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM184 456V172h81v284h-81z m627.2 160.4H496.8l9.6 198.4c0.6 11.9-4.7 23.1-14.6 30.5-6.1 4.5-13.6 6.8-21.1 6.7-19.6-0.1-36.9-13.4-42.2-32.3L329 459.2V172h415.4c20.4 9.2 33.6 29.4 33.6 51.8 0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19c12.5 10.8 19.6 26.5 19.6 43 0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19c12.5 10.8 19.6 26.5 19.6 43 0 9.7-2.3 18.9-6.9 27.3l-14 25.5 21.9 19c12.5 10.8 19.6 26.5 19.6 43 0 19.1-11 37.5-28.8 48.4z"}})]),_vm._v(" "),_c('symbol',{attrs:{"id":"vssue-icon-heart","viewBox":"0 0 1024 1024"}},[_c('path',{attrs:{"d":"M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"}})]),_vm._v(" "),_c('symbol',{attrs:{"id":"vssue-icon-edit","viewBox":"0 0 1024 1024"}},[_c('path',{attrs:{"d":"M723.2 917.76H286.72c-65.28 0-118.4-51.2-118.4-113.92V261.76C168.32 198.4 221.44 147.2 286.72 147.2h375.04c17.92 0 32 14.08 32 32s-14.08 32-32 32H286.72c-30.08 0-54.4 22.4-54.4 49.92v542.08c0 27.52 24.32 49.92 54.4 49.92H723.2c30.08 0 54.4-22.4 54.4-49.92V440.32c0-17.92 14.08-32 32-32s32 14.08 32 32v363.52c0 62.72-53.12 113.92-118.4 113.92z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M499.84 602.24c-7.68 0-14.72-2.56-21.12-7.68-13.44-11.52-14.72-32-3.2-45.44L780.16 198.4c11.52-13.44 32-14.72 45.44-3.2s14.72 32 3.2 45.44L524.16 591.36c-6.4 7.04-15.36 10.88-24.32 10.88z"}})]),_vm._v(" "),_c('symbol',{attrs:{"id":"vssue-icon-delete","viewBox":"0 0 1024 1024"}},[_c('path',{attrs:{"d":"M677.647059 256l0-90.352941c0-37.436235-23.461647-60.235294-61.771294-60.235294L408.094118 105.411765c-38.249412 0-61.741176 22.799059-61.741176 60.235294l0 90.352941-180.705882 0 0 60.235294 60.235294 0 0 512c0 54.272 33.972706 90.352941 90.352941 90.352941l391.529412 0c55.085176 0 90.352941-33.490824 90.352941-90.352941l0-512 60.235294 0 0-60.235294L677.647059 256zM406.588235 165.647059l210.823529 0-1.264941 90.352941L406.588235 256 406.588235 165.647059zM737.882353 858.352941l-451.764706 0 0-542.117647 451.764706 0L737.882353 858.352941zM466.823529 376.470588l-58.729412 0-1.505882 391.529412 60.235294 0L466.823529 376.470588zM617.411765 376.470588l-60.235294 0 0 391.529412 60.235294 0L617.411765 376.470588z"}})]),_vm._v(" "),_c('symbol',{attrs:{"id":"vssue-icon-reply","viewBox":"0 0 1024 1024"}},[_c('path',{attrs:{"d":"M426.666667 384 426.666667 213.333333 128 512 426.666667 810.666667 426.666667 635.733333C640 635.733333 789.333333 704 896 853.333333 853.333333 640 725.333333 426.666667 426.666667 384Z"}})]),_vm._v(" "),_c('symbol',{attrs:{"id":"vssue-icon-error","viewBox":"0 0 1024 1024"}},[_c('path',{attrs:{"d":"M512 720m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M480 416v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8z"}}),_vm._v(" "),_c('path',{attrs:{"d":"M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48z m-783.5-27.9L512 239.9l339.8 588.2H172.2z"}})])])};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = true;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Iconfont = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var script$1 = Vue.extend({
    name: 'TransitionFade',
    functional: true,
    props: {
        group: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    render(h, { props, children }) {
        return h(props.group ? 'TransitionGroup' : 'Transition', {
            props: {
                name: 'fade',
                mode: 'out-in',
                appear: true,
            },
        }, children);
    },
});

/* script */
const __vue_script__$1 = script$1;

/* template */

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = undefined;
  /* style inject */
  
  /* style inject SSR */
  

  
  var TransitionFade = normalizeComponent_1(
    {},
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

var script$2 = Vue.extend({
    name: 'VssueIcon',
    functional: true,
    props: {
        name: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: false,
            default: null,
        },
    },
    render(h, { props, data }) {
        return h('svg', Object.assign({}, data, { 'class': [
                'vssue-icon',
                `vssue-icon-${props.name}`,
            ], attrs: {
                'aria-hidden': 'true',
            } }), [
            h('title', props.title),
            h('use', {
                attrs: {
                    'xlink:href': `#vssue-icon-${props.name}`,
                },
            }),
        ]);
    },
});

/* script */
const __vue_script__$2 = script$2;

/* template */

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = undefined;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VssueIcon = normalizeComponent_1(
    {},
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

let VssueComment = class VssueComment extends Vue$1 {
    constructor() {
        super(...arguments);
        this.editMode = false;
        this.editContent = this.comment.contentRaw;
        this.creatingReactions = [];
        this.isPutingComment = false;
        this.isDeletingComment = false;
    }
    get currentUser() {
        return this.vssue.user ? this.vssue.user.username : null;
    }
    get content() {
        return this.comment.content;
    }
    get author() {
        return this.comment.author;
    }
    get createdAt() {
        return formatDateTime(this.comment.createdAt);
    }
    get updatedAt() {
        return formatDateTime(this.comment.updatedAt);
    }
    get showReactions() {
        return Boolean(this.vssue.API && this.vssue.API.platform.meta.reactable && this.comment.reactions && !this.editMode);
    }
    get reactionKeys() {
        return ['heart', 'like', 'unlike'];
    }
    get editContentRows() {
        return this.editContent.split('\n').length - 1;
    }
    get editInputRows() {
        return this.editContentRows < 3 ? 5 : this.editContentRows + 2;
    }
    async postReaction({ reaction, }) {
        try {
            if (this.creatingReactions.includes(reaction))
                return;
            this.creatingReactions.push(reaction);
            const success = await this.vssue.postCommentReaction({
                commentId: this.comment.id,
                reaction,
            });
            if (!success) {
                this.vssue.$emit('error', new Error(this.vssue.$t('reactionGiven', { reaction: this.vssue.$t(reaction) })));
            }
            // always refresh reactions even already given
            const reactions = await this.vssue.getCommentReactions({
                commentId: this.comment.id,
            });
            if (reactions) {
                this.comment.reactions = reactions;
            }
        }
        finally {
            this.creatingReactions.splice(this.creatingReactions.findIndex(item => item === reaction), 1);
        }
    }
    enterEdit() {
        this.editMode = true;
        this.$nextTick(() => {
            this.$refs.input.focus();
        });
    }
    resetEdit() {
        this.editMode = false;
        this.editContent = this.comment.contentRaw;
    }
    async putComment() {
        try {
            if (this.vssue.isPending)
                return;
            if (this.editContent !== this.comment.contentRaw) {
                this.isPutingComment = true;
                this.vssue.isUpdatingComment = true;
                const comment = await this.vssue.putComment({
                    commentId: this.comment.id,
                    content: this.editContent,
                });
                if (comment) {
                    this.vssue.comments.data.splice(this.vssue.comments.data.findIndex(item => item.id === this.comment.id), 1, comment);
                }
            }
            this.editMode = false;
        }
        finally {
            this.isPutingComment = false;
            this.vssue.isUpdatingComment = false;
        }
    }
    async deleteComment() {
        try {
            if (this.vssue.isPending)
                return;
            if (!window.confirm(this.vssue.$t('deleteConfirm')))
                return;
            this.isDeletingComment = true;
            this.vssue.isUpdatingComment = true;
            const success = await this.vssue.deleteComment({
                commentId: this.comment.id,
            });
            if (success) {
                // decrease count immediately
                this.vssue.comments.count -= 1;
                // if there are more than one comment on this page, remove the deleted comment immediately
                if (this.vssue.comments.data.length > 1) {
                    this.vssue.comments.data.splice(this.vssue.comments.data.findIndex(item => item.id === this.comment.id), 1);
                }
                // if the page count should be decreased, change the query param to trigger comments reload
                if (this.vssue.query.page > 1 && this.vssue.query.page > Math.ceil(this.vssue.comments.count / this.vssue.query.perPage)) {
                    this.vssue.query.page -= 1;
                }
                else {
                    await this.vssue.getComments();
                }
            }
            else {
                this.vssue.$emit('error', new Error(this.vssue.$t('deleteFailed')));
            }
        }
        finally {
            this.isDeletingComment = false;
            this.vssue.isUpdatingComment = false;
        }
    }
};
__decorate([
    Prop({
        type: Object,
        required: true,
    })
], VssueComment.prototype, "comment", void 0);
__decorate([
    Inject()
], VssueComment.prototype, "vssue", void 0);
VssueComment = __decorate([
    Component({
        components: {
            VssueIcon,
        },
    })
], VssueComment);
var script$3 = VssueComment;

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vssue-comment",class:{
    'vssue-comment-edit-mode': _vm.editMode,
    'vssue-comment-disabled': _vm.isDeletingComment || _vm.isPutingComment,
  }},[_c('div',{staticClass:"vssue-comment-avatar"},[_c('a',{attrs:{"href":_vm.author.homepage,"title":_vm.author.username,"target":"_blank"}},[_c('img',{attrs:{"src":_vm.author.avatar}})])]),_vm._v(" "),_c('div',{staticClass:"vssue-comment-body"},[_vm._t("body",[_c('div',{staticClass:"vssue-comment-header"},[_c('span',{staticClass:"vssue-comment-author"},[_c('a',{attrs:{"href":_vm.author.homepage,"title":_vm.author.username,"target":"_blank"}},[_vm._v("\n            "+_vm._s(_vm.author.username)+"\n          ")])]),_vm._v(" "),_c('span',{staticClass:"vssue-comment-created-at"},[_vm._v("\n          "+_vm._s(_vm.createdAt)+"\n        ")])]),_vm._v(" "),_c('div',{staticClass:"vssue-comment-main"},[(_vm.editMode)?_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.editContent),expression:"editContent"}],ref:"input",staticClass:"vssue-edit-comment-input",attrs:{"rows":_vm.editInputRows},domProps:{"value":(_vm.editContent)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }if(!$event.ctrlKey){ return null; }return _vm.putComment()},"input":function($event){if($event.target.composing){ return; }_vm.editContent=$event.target.value;}}}):_c('article',{staticClass:"markdown-body",domProps:{"innerHTML":_vm._s(_vm.content)}})]),_vm._v(" "),_c('div',{staticClass:"vssue-comment-footer"},[(_vm.editMode)?_c('span',{staticClass:"vssue-comment-hint"},[_vm._v("\n          "+_vm._s(_vm.vssue.$t('editMode'))+"\n        ")]):_vm._e(),_vm._v(" "),(_vm.showReactions)?_c('span',{staticClass:"vssue-comment-reactions"},_vm._l((_vm.reactionKeys),function(reaction){return _c('span',{key:reaction,staticClass:"vssue-comment-reaction",attrs:{"title":_vm.vssue.$t(_vm.creatingReactions.includes(reaction) ? 'loading' : reaction)},on:{"click":function($event){return _vm.postReaction({ reaction: reaction })}}},[_c('VssueIcon',{attrs:{"name":_vm.creatingReactions.includes(reaction) ? 'loading' : reaction,"title":_vm.vssue.$t(_vm.creatingReactions.includes(reaction) ? 'loading' : reaction)}}),_vm._v(" "),_c('span',{staticClass:"vssue-comment-reaction-number"},[_vm._v("\n              "+_vm._s(_vm.comment.reactions[reaction])+"\n            ")])],1)}),0):_vm._e(),_vm._v(" "),_c('span',{staticClass:"vssue-comment-operations"},[(_vm.comment.author.username === _vm.currentUser && _vm.editMode)?_c('span',{staticClass:"vssue-comment-operation",class:{ 'vssue-comment-operation-muted': _vm.isPutingComment },attrs:{"title":_vm.vssue.$t(_vm.isPutingComment ? 'loading' : 'submit')},on:{"click":function($event){return _vm.putComment()}}},[_c('VssueIcon',{directives:[{name:"show",rawName:"v-show",value:(_vm.isPutingComment),expression:"isPutingComment"}],attrs:{"name":"loading","title":_vm.vssue.$t('loading')}}),_vm._v("\n\n            "+_vm._s(_vm.vssue.$t('submit'))+"\n          ")],1):_vm._e(),_vm._v(" "),(_vm.comment.author.username === _vm.currentUser && _vm.editMode)?_c('span',{staticClass:"vssue-comment-operation vssue-comment-operation-muted",attrs:{"title":_vm.vssue.$t('cancel')},on:{"click":function($event){return _vm.resetEdit()}}},[_vm._v("\n            "+_vm._s(_vm.vssue.$t('cancel'))+"\n          ")]):_vm._e(),_vm._v(" "),(_vm.comment.author.username === _vm.currentUser)?_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.editMode),expression:"!editMode"}],staticClass:"vssue-comment-operation",on:{"click":function($event){return _vm.enterEdit()}}},[_c('VssueIcon',{attrs:{"name":"edit","title":_vm.vssue.$t('edit')}})],1):_vm._e(),_vm._v(" "),(_vm.comment.author.username === _vm.currentUser || _vm.vssue.isAdmin)?_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.editMode),expression:"!editMode"}],staticClass:"vssue-comment-operation",on:{"click":function($event){return _vm.deleteComment()}}},[_c('VssueIcon',{attrs:{"name":_vm.isDeletingComment ? 'loading' : 'delete',"title":_vm.vssue.$t(_vm.isDeletingComment ? 'loading' : 'delete')}})],1):_vm._e(),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.editMode),expression:"!editMode"}],staticClass:"vssue-comment-operation",on:{"click":function($event){return _vm.vssue.$emit('reply-comment', _vm.comment)}}},[_c('VssueIcon',{attrs:{"name":"reply","title":_vm.vssue.$t('reply')}})],1)])])])],2)])};
var __vue_staticRenderFns__$1 = [];

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VssueComment$1 = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );

let VssuePagination = class VssuePagination extends Vue$1 {
    get disabled() {
        return this.vssue.isPending;
    }
    get pageCount() {
        const pageCount = Math.ceil(this.vssue.comments.count / this.vssue.comments.perPage);
        return pageCount > 1 ? pageCount : 1;
    }
    get perPageOptions() {
        const perPageOptions = [5, 10, 20, 50];
        if (!perPageOptions.includes(this.vssue.options.perPage) && this.vssue.options.perPage < 100) {
            perPageOptions.push(this.vssue.options.perPage);
        }
        return perPageOptions.sort((a, b) => a - b);
    }
    get page() {
        return this.vssue.query.page > this.pageCount ? this.pageCount : this.vssue.query.page;
    }
    set page(val) {
        if (val > 0 && val <= this.pageCount) {
            this.vssue.query.page = val;
        }
    }
    get perPage() {
        return this.vssue.query.perPage;
    }
    set perPage(val) {
        if (this.perPageOptions.includes(val)) {
            this.vssue.query.perPage = val;
        }
    }
};
__decorate([
    Inject()
], VssuePagination.prototype, "vssue", void 0);
VssuePagination = __decorate([
    Component({
        components: {
            VssueIcon,
        },
    })
], VssuePagination);
var script$4 = VssuePagination;

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vssue-pagination"},[_c('div',{staticClass:"vssue-pagination-per-page"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.perPage),expression:"perPage"}],staticClass:"vssue-pagination-select",attrs:{"disabled":_vm.disabled},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.perPage=$event.target.multiple ? $$selectedVal : $$selectedVal[0];}}},_vm._l((_vm.perPageOptions),function(val){return _c('option',{key:val,domProps:{"value":val}},[_vm._v("\n        "+_vm._s(val)+"\n      ")])}),0),_vm._v(" "),_c('span',[_vm._v("\n      "+_vm._s(_vm.vssue.$t('perPage'))+"\n    ")]),_vm._v(" "),(_vm.vssue.API.platform.meta.sortable)?_c('span',{class:{
        'vssue-pagination-link': true,
        'disabled': _vm.disabled,
      },attrs:{"title":_vm.vssue.$t('sort')},on:{"click":function($event){_vm.vssue.query.sort = (_vm.vssue.query.sort === 'asc' ? 'desc' : 'asc');}}},[_vm._v("\n      "+_vm._s(_vm.vssue.query.sort === 'asc' ? "↑" : "↓")+"\n    ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"vssue-pagination-page"},[_c('span',{class:{
        'vssue-pagination-link': true,
        'disabled': _vm.page === 1 || _vm.disabled,
      },attrs:{"title":_vm.vssue.$t('prev')},domProps:{"textContent":_vm._s("<")},on:{"click":function($event){_vm.page -= 1;}}}),_vm._v(" "),_c('span',[_vm._v("\n      "+_vm._s(_vm.vssue.$t('page'))+"\n    ")]),_vm._v(" "),_c('select',{directives:[{name:"show",rawName:"v-show",value:(_vm.pageCount > 1),expression:"pageCount > 1"},{name:"model",rawName:"v-model",value:(_vm.page),expression:"page"}],staticClass:"vssue-pagination-select",attrs:{"disabled":_vm.disabled},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.page=$event.target.multiple ? $$selectedVal : $$selectedVal[0];}}},_vm._l((_vm.pageCount),function(val){return _c('option',{key:val,domProps:{"value":val}},[_vm._v("\n        "+_vm._s(val)+"\n      ")])}),0),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.pageCount < 2),expression:"pageCount < 2"}],domProps:{"textContent":_vm._s(_vm.page)}}),_vm._v(" "),_c('span',{domProps:{"textContent":_vm._s((" / " + _vm.pageCount + " "))}}),_vm._v(" "),_c('span',{class:{
        'vssue-pagination-link': true,
        'disabled': _vm.page === _vm.pageCount || _vm.disabled,
      },attrs:{"title":_vm.vssue.$t('next')},domProps:{"textContent":_vm._s(">")},on:{"click":function($event){_vm.page += 1;}}})])])};
var __vue_staticRenderFns__$2 = [];

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VssuePagination$1 = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    undefined,
    undefined
  );

let VssueComments = class VssueComments extends Vue$1 {
};
__decorate([
    Inject()
], VssueComments.prototype, "vssue", void 0);
VssueComments = __decorate([
    Component({
        components: {
            TransitionFade,
            VssueComment: VssueComment$1,
            VssuePagination: VssuePagination$1,
        },
    })
], VssueComments);
var script$5 = VssueComments;

/* script */
const __vue_script__$5 = script$5;

/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vssue-comments"},[_c('VssuePagination'),_vm._v(" "),_c('TransitionFade',{attrs:{"group":""}},_vm._l((_vm.vssue.comments.data),function(comment){return _c('VssueComment',{key:comment.id,attrs:{"comment":comment}})}),1),_vm._v(" "),_c('VssuePagination',{directives:[{name:"show",rawName:"v-show",value:(_vm.vssue.comments.data.length > 5),expression:"vssue.comments.data.length > 5"}]})],1)};
var __vue_staticRenderFns__$3 = [];

  /* style */
  const __vue_inject_styles__$5 = undefined;
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VssueComments$1 = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    undefined,
    undefined
  );

var script$6 = Vue.extend({
    name: 'VssueIcon',
    functional: true,
    props: {
        type: {
            type: String,
            required: false,
            default: 'default',
        },
    },
    render(h, { props, data, children }) {
        return h('button', Object.assign({}, data, { 'class': [
                'vssue-button',
                `vssue-button-${props.type}`,
            ] }), children);
    },
});

/* script */
const __vue_script__$6 = script$6;

/* template */

  /* style */
  const __vue_inject_styles__$6 = undefined;
  /* scoped */
  const __vue_scope_id__$6 = undefined;
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = undefined;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VssueButton = normalizeComponent_1(
    {},
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    undefined,
    undefined
  );

let VssueNewComment = class VssueNewComment extends Vue$1 {
    constructor() {
        super(...arguments);
        this.content = '';
    }
    get user() {
        return this.vssue.user;
    }
    get platform() {
        return this.vssue.API && this.vssue.API.platform.name;
    }
    get isInputDisabled() {
        return this.loading || this.user === null || this.vssue.issue === null;
    }
    get isSubmitDisabled() {
        return this.content === '' || this.vssue.isPending || this.vssue.issue === null;
    }
    get loading() {
        return this.vssue.isCreatingComment;
    }
    get contentRows() {
        return this.content.split('\n').length - 1;
    }
    get inputRows() {
        return this.contentRows < 3 ? 5 : this.contentRows + 2;
    }
    created() {
        this.vssue.$on('reply-comment', (comment) => {
            const quotedComment = comment.contentRaw.replace(/\n/g, '\n> ');
            const replyContent = `@${comment.author.username}\n\n> ${quotedComment}\n\n`;
            this.content = this.content.concat(replyContent);
            this.focus();
        });
    }
    beforeDestroy() {
        this.vssue.$off('reply-comment');
    }
    focus() {
        this.$refs.input.focus();
    }
    async submit() {
        if (this.isSubmitDisabled)
            return;
        await this.vssue.postComment({ content: this.content });
        this.content = '';
        await this.vssue.getComments();
    }
};
__decorate([
    Inject()
], VssueNewComment.prototype, "vssue", void 0);
VssueNewComment = __decorate([
    Component({
        components: {
            VssueButton,
            VssueIcon,
        },
    })
], VssueNewComment);
var script$7 = VssueNewComment;

/* script */
const __vue_script__$7 = script$7;

/* template */
var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vssue-new-comment"},[_c('div',{staticClass:"vssue-comment-avatar"},[(_vm.user)?_c('a',{attrs:{"href":_vm.user.homepage,"title":_vm.user.username,"target":"_blank"}},[_c('img',{attrs:{"src":_vm.user.avatar}})]):_c('VssueIcon',{attrs:{"name":_vm.platform.toLowerCase(),"title":_vm.vssue.$t('loginToComment', { platform: _vm.platform })},on:{"click":function($event){return _vm.vssue.login()}}})],1),_vm._v(" "),_c('div',{staticClass:"vssue-new-comment-body"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.content),expression:"content"}],ref:"input",staticClass:"vssue-new-comment-input",attrs:{"rows":_vm.inputRows,"disabled":_vm.isInputDisabled,"placeholder":_vm.vssue.$t(_vm.user ? 'placeholder' : 'noLoginPlaceHolder'),"spellcheck":false},domProps:{"value":(_vm.content)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }if(!$event.ctrlKey){ return null; }return _vm.submit()},"input":function($event){if($event.target.composing){ return; }_vm.content=$event.target.value;}}})]),_vm._v(" "),_c('div',{staticClass:"vssue-new-comment-footer"},[(_vm.user)?_c('span',{staticClass:"vssue-current-user"},[_c('span',[_vm._v(_vm._s(_vm.vssue.$t('currentUser'))+" - "+_vm._s(_vm.user.username)+" - ")]),_vm._v(" "),_c('a',{staticClass:"vssue-logout",on:{"click":function($event){return _vm.vssue.logout()}}},[_vm._v("\n        "+_vm._s(_vm.vssue.$t('logout'))+"\n      ")])]):_c('span',{staticClass:"vssue-current-user"},[_vm._v("\n      "+_vm._s(_vm.vssue.$t('loginToComment', { platform: _vm.platform }))+"\n    ")]),_vm._v(" "),_c('div',{staticClass:"vssue-new-comment-operations"},[(_vm.user)?_c('VssueButton',{staticClass:"vssue-button-submit-comment",attrs:{"type":"primary","disabled":_vm.isSubmitDisabled},on:{"click":function($event){return _vm.submit()}}},[_c('VssueIcon',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],attrs:{"name":"loading"}}),_vm._v("\n\n        "+_vm._s(_vm.vssue.$t(_vm.loading ? 'submitting' : 'submitComment'))+"\n      ")],1):_c('VssueButton',{staticClass:"vssue-button-login",attrs:{"type":"primary","title":_vm.vssue.$t('loginToComment', { platform: _vm.platform })},on:{"click":function($event){return _vm.vssue.login()}}},[_vm._v("\n        "+_vm._s(_vm.vssue.$t('login', { platform: _vm.platform }))+"\n      ")])],1)])])};
var __vue_staticRenderFns__$4 = [];

  /* style */
  const __vue_inject_styles__$7 = undefined;
  /* scoped */
  const __vue_scope_id__$7 = undefined;
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VssueNewComment$1 = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    undefined,
    undefined
  );

let VssueNotice = class VssueNotice extends Vue$1 {
    constructor() {
        super(...arguments);
        // progress data
        this.progress = {
            show: false,
            percent: 0,
            timer: null,
            speed: 200,
        };
        // alert data
        this.alert = {
            show: false,
            message: null,
            timer: null,
        };
    }
    /**
     * Show progress when loading comments
     */
    onLoadingCommentsChange(val) {
        if (this.vssue.comments) {
            if (val) {
                this.progressStart();
            }
            else {
                this.progressDone();
            }
        }
    }
    created() {
        this.vssue.$on('error', e => this.alertShow(e.message));
    }
    beforeDestroy() {
        this.vssue.$off('error');
        if (this.progress.timer !== null)
            window.clearTimeout(this.progress.timer);
        if (this.alert.timer !== null)
            window.clearTimeout(this.alert.timer);
    }
    /**
     * Progress start
     */
    progressStart() {
        this.progress.show = true;
        this.progress.percent = 0;
        this.progress.timer = window.setInterval(() => {
            this.progress.percent += 5;
            if (this.progress.percent > 94) {
                if (this.progress.timer !== null)
                    window.clearInterval(this.progress.timer);
            }
        }, this.progress.speed);
    }
    /**
     * Progress stop
     */
    progressDone() {
        this.progress.percent = 100;
        if (this.progress.timer !== null)
            window.clearTimeout(this.progress.timer);
        this.progress.timer = null;
        window.setTimeout(() => {
            this.progress.show = false;
        }, this.progress.speed);
    }
    /**
     * Show alert message
     */
    alertShow(content) {
        this.alert.show = true;
        this.alert.message = content;
        if (this.alert.timer !== null)
            window.clearTimeout(this.alert.timer);
        this.alert.timer = window.setTimeout(() => {
            this.alertHide();
        }, 3000);
    }
    /**
     * Hide alert message
     */
    alertHide() {
        this.alert.show = false;
        if (this.alert.timer !== null)
            window.clearTimeout(this.alert.timer);
        this.alert.timer = null;
    }
};
__decorate([
    Inject()
], VssueNotice.prototype, "vssue", void 0);
__decorate([
    Watch('vssue.isLoadingComments')
], VssueNotice.prototype, "onLoadingCommentsChange", null);
VssueNotice = __decorate([
    Component({
        components: {
            TransitionFade,
        },
    })
], VssueNotice);
var script$8 = VssueNotice;

/* script */
const __vue_script__$8 = script$8;

/* template */
var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vssue-notice"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.progress.show),expression:"progress.show"}],staticClass:"vssue-progress",style:({
      'width': ((_vm.progress.percent) + "%"),
      'transition': ("all " + (_vm.progress.speed) + "ms linear"),
    })}),_vm._v(" "),_c('TransitionFade',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.alert.show),expression:"alert.show"}],staticClass:"vssue-alert",domProps:{"textContent":_vm._s(_vm.alert.message)},on:{"click":function($event){return _vm.alertHide()}}})])],1)};
var __vue_staticRenderFns__$5 = [];

  /* style */
  const __vue_inject_styles__$8 = undefined;
  /* scoped */
  const __vue_scope_id__$8 = undefined;
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VssueNotice$1 = normalizeComponent_1(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    undefined,
    undefined
  );

let VssueStatus = class VssueStatus extends Vue$1 {
    get status() {
        if (this.vssue.isFailed) {
            return 'failed';
        }
        else if (this.vssue.isInitializing) {
            return 'initializing';
        }
        else if (this.vssue.isIssueNotCreated && !this.vssue.isCreatingIssue) {
            if (this.vssue.isAdmin || !this.vssue.isLogined) {
                return 'issueNotCreated';
            }
            else {
                return 'failed';
            }
        }
        else if (this.vssue.isLoginRequired) {
            return 'loginRequired';
        }
        else if (!this.vssue.comments || this.vssue.isCreatingIssue) {
            return 'loadingComments';
        }
        else if (this.vssue.comments.data.length === 0) {
            return 'noComments';
        }
        else {
            return null;
        }
    }
    handleClick() {
        if (this.status === 'issueNotCreated') {
            this.vssue.postIssue();
        }
        else if (this.status === 'loginRequired') {
            this.vssue.login();
        }
    }
};
__decorate([
    Inject()
], VssueStatus.prototype, "vssue", void 0);
VssueStatus = __decorate([
    Component({
        components: {
            TransitionFade,
            VssueIcon,
        },
    })
], VssueStatus);
var script$9 = VssueStatus;

/* script */
const __vue_script__$9 = script$9;

/* template */
var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('TransitionFade',[(_vm.status)?_c('div',{key:_vm.status,staticClass:"vssue-status"},[(['failed', 'loadingComments', 'initializing'].includes(_vm.status))?_c('VssueIcon',{attrs:{"name":_vm.status === 'failed' ? 'error' : 'loading'}}):_vm._e(),_vm._v(" "),_c('p',{staticClass:"vssue-status-info"},[_c(['issueNotCreated', 'loginRequired'].includes(_vm.status) ? 'a' : 'span',{tag:"Component",on:{"click":_vm.handleClick}},[_vm._v("\n        "+_vm._s(_vm.vssue.$t(_vm.status))+"\n      ")])],1)],1):_vm._e()])};
var __vue_staticRenderFns__$6 = [];

  /* style */
  const __vue_inject_styles__$9 = undefined;
  /* scoped */
  const __vue_scope_id__$9 = undefined;
  /* module identifier */
  const __vue_module_identifier__$9 = undefined;
  /* functional template */
  const __vue_is_functional_template__$9 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VssueStatus$1 = normalizeComponent_1(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    undefined,
    undefined
  );

let VssueBody = class VssueBody extends Vue$1 {
};
__decorate([
    Inject()
], VssueBody.prototype, "vssue", void 0);
VssueBody = __decorate([
    Component({
        components: {
            TransitionFade,
            VssueIcon,
            VssueComments: VssueComments$1,
            VssueNewComment: VssueNewComment$1,
            VssueNotice: VssueNotice$1,
            VssueStatus: VssueStatus$1,
        },
    })
], VssueBody);
var script$a = VssueBody;

/* script */
const __vue_script__$a = script$a;

/* template */
var __vue_render__$7 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('TransitionFade',[(!_vm.vssue.isInitializing)?_c('div',{staticClass:"vssue-body"},[(_vm.vssue.API)?_c('VssueNewComment'):_vm._e(),_vm._v(" "),_c('VssueNotice'),_vm._v(" "),_c('TransitionFade',[(_vm.vssue.comments && _vm.vssue.comments.data.length > 0)?_c('VssueComments'):_c('VssueStatus')],1)],1):_c('VssueStatus')],1)};
var __vue_staticRenderFns__$7 = [];

  /* style */
  const __vue_inject_styles__$a = undefined;
  /* scoped */
  const __vue_scope_id__$a = undefined;
  /* module identifier */
  const __vue_module_identifier__$a = undefined;
  /* functional template */
  const __vue_is_functional_template__$a = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VssueBody$1 = normalizeComponent_1(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$a,
    __vue_script__$a,
    __vue_scope_id__$a,
    __vue_is_functional_template__$a,
    __vue_module_identifier__$a,
    undefined,
    undefined
  );

let VssueHeader = class VssueHeader extends Vue$1 {
};
__decorate([
    Inject()
], VssueHeader.prototype, "vssue", void 0);
VssueHeader = __decorate([
    Component
], VssueHeader);
var script$b = VssueHeader;

/* script */
const __vue_script__$b = script$b;

/* template */
var __vue_render__$8 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vssue-header"},[_c('a',{staticClass:"vssue-header-comments-count",attrs:{"href":_vm.vssue.issue ? _vm.vssue.issue.link : null,"target":"_blank"}},[_c('span',[_vm._v("\n      "+_vm._s(_vm.vssue.comments
        ? _vm.vssue.$tc('comments', _vm.vssue.comments.count, { count: _vm.vssue.comments.count })
        : _vm.vssue.$tc('comments', 0))+"\n    ")])]),_vm._v(" "),_c('span',{staticClass:"vssue-header-powered-by"},[_c('span',[_vm._v("Powered by")]),_vm._v(" "),(_vm.vssue.API)?_c('span',[_c('a',{attrs:{"href":_vm.vssue.API.platform.link,"target":"_blank","title":((_vm.vssue.API.platform.name) + " API " + (_vm.vssue.API.platform.version))}},[_vm._v("\n        "+_vm._s(_vm.vssue.API.platform.name)+"\n      ")]),_vm._v(" "),_c('span',[_vm._v("&")])]):_c('span'),_vm._v(" "),_c('a',{attrs:{"href":"https://github.com/meteorlxy/vssue","target":"_blank","title":("Vssue v" + (_vm.vssue.version))}},[_vm._v("\n      Vssue\n    ")])])])};
var __vue_staticRenderFns__$8 = [];

  /* style */
  const __vue_inject_styles__$b = undefined;
  /* scoped */
  const __vue_scope_id__$b = undefined;
  /* module identifier */
  const __vue_module_identifier__$b = undefined;
  /* functional template */
  const __vue_is_functional_template__$b = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VssueHeader$1 = normalizeComponent_1(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$b,
    __vue_script__$b,
    __vue_scope_id__$b,
    __vue_is_functional_template__$b,
    __vue_module_identifier__$b,
    undefined,
    undefined
  );

const messages = {
    // auth
    login: 'Login with {platform}',
    logout: 'Logout',
    currentUser: 'Current User',
    // comment input
    loading: 'Loading',
    submit: 'Submit',
    submitting: 'Submitting',
    submitComment: 'Submit Comment',
    cancel: 'Cancel',
    edit: 'Edit',
    editMode: 'Edit Mode',
    delete: 'Delete',
    reply: 'Reply',
    // vote input
    deleting: 'Deleting',
    deleteVote: 'Yes, delete my vote',
    updating: 'Updating',
    updateVote: 'Update Vote',
    // reactions
    heart: 'Heart',
    like: 'Like',
    unlike: 'Unlike',
    // pagination
    perPage: 'Comments per page',
    sort: 'Click to change the sort direction',
    page: 'Page',
    prev: 'Previous Page',
    next: 'Next Page',
    // hint
    comments: 'Comments | {count} Comment | {count} Comments',
    loginToComment: 'Login with {platform} account to leave a comment',
    placeholder: 'Leave a comment. Styling with Markdown is supported. Ctrl + Enter to submit.',
    noLoginPlaceHolder: 'Login to leave a comment. Styling with Markdown is supported. ',
    // status
    failed: 'Failed to load comments',
    initializing: 'Initializing...',
    issueNotCreated: 'Click to create issue',
    loadingComments: 'Loading comments...',
    loginRequired: 'Login to view comments',
    noComments: 'No comments yet. Leave the first comment !',
    // alerts
    reactionGiven: `Already given '{reaction}' reaction`,
    deleteConfirm: 'Confirm to delete this comment ?',
    deleteFailed: 'Failed to delete comment',
};

const messages$1 = {
    // auth
    login: '使用 {platform} 登录',
    logout: '退出登录',
    currentUser: '当前用户',
    // comment input
    loading: '加载中',
    submit: '提交',
    submitting: '发表中',
    submitComment: '发表评论',
    cancel: '取消',
    edit: '编辑',
    editMode: '编辑模式',
    delete: '删除',
    reply: '回复',
    // reactions
    heart: '喜欢',
    like: '赞',
    unlike: '踩',
    // pagination
    perPage: '每页评论数',
    sort: '点击改变排序方式',
    page: '页数',
    prev: '上一页',
    next: '下一页',
    // hint
    comments: '评论 | {count} 条评论 | {count} 条评论',
    loginToComment: '使用 {platform} 帐号登录后发表评论',
    placeholder: '留下你的评论丨支持 Markdown 语法丨Ctrl + Enter 发表评论',
    noLoginPlaceHolder: '登录后才能发表评论丨支持 Markdown 语法',
    // status
    failed: '评论加载失败',
    initializing: '正在初始化...',
    issueNotCreated: '点击创建 Issue',
    loadingComments: '正在加载评论...',
    loginRequired: '登录后查看评论',
    noComments: '还没有评论，来发表第一条评论吧！',
    // alerts
    reactionGiven: `已经添加过 '{reaction}' 了`,
    deleteConfirm: '确认要删除该评论吗？',
    deleteFailed: '评论删除失败',
};

const messages$2 = {
    // auth
    login: 'Entrar com {platform}',
    logout: 'Sair',
    currentUser: 'Usuário Atual',
    // comment input
    loading: 'Carregando',
    submit: 'Enviar',
    submitting: 'Enviando',
    submitComment: 'Enviar Comentário',
    cancel: 'Cancelar',
    edit: 'Editar',
    editMode: 'Modo de Edição',
    delete: 'Apagar',
    reply: 'Responder',
    // reactions
    heart: 'Heart',
    like: 'Like',
    unlike: 'Unlike',
    // pagination
    perPage: 'Comentários por página',
    sort: 'Clique para alterar a ordenação',
    page: 'Página',
    prev: 'Página Anterior',
    next: 'Próxima Página',
    // hint
    comments: 'Comentários | {count} Comentário | {count} Comentários',
    loginToComment: 'Entre com uma conta {platform} para deixar um comentário',
    placeholder: 'Deixe um comentário. Estilos com Markdown suportados. Ctrl + Enter para enviar.',
    noLoginPlaceHolder: 'Entre para deixar um comentário. Estilos com Markdown suportados. ',
    // status
    failed: 'Falha ao carregar comentários',
    initializing: 'Inicializando...',
    issueNotCreated: 'Click to create issue',
    loadingComments: 'Carregando comentários...',
    loginRequired: 'Entrar para visualizar comentários',
    noComments: 'Nenhum comentário. Deixe o primeiro comentário!',
    // alerts
    reactionGiven: `Já reagiu com '{reaction}'`,
    deleteConfirm: 'Apagar este comentário?',
    deleteFailed: 'Falha ao apagar comentário',
};

const messages$3 = {
    // auth
    login: '{platform} でログイン',
    logout: 'ログアウト',
    currentUser: '現在のユーザー',
    // comment input
    loading: '読み込み中',
    submit: '送信',
    submitting: '送信中',
    submitComment: 'コメントを送信',
    cancel: 'キャンセル',
    edit: '編集',
    editMode: '編集モード',
    delete: '削除',
    reply: '返信',
    // reactions
    heart: 'ハート',
    like: '高評価',
    unlike: '低評価',
    // pagination
    perPage: 'コメント/ページ',
    sort: '並び順を変更するにはクリックしてください',
    page: 'ページ',
    prev: '前のページ',
    next: '次のページ',
    // hint
    comments: 'コメント | {count} コメント | {count} コメント',
    loginToComment: 'コメントを残すには {platform} アカウントでログインしてください。',
    placeholder: 'コメントを残してください。Markdown 記法をサポートしています。 Ctrl + Enter で送信できます。',
    noLoginPlaceHolder: 'コメントを残すにはログインしてください。マークダウン記法をサポートしています。',
    // status
    failed: 'コメントの読み込みに失敗しました',
    initializing: '初期化中...',
    issueNotCreated: 'Click to create issue',
    loadingComments: 'コメントの読み込み中...',
    loginRequired: 'コメントを見るにはログインしてください',
    noComments: 'まだコメントがありません。最初のコメントを残しましょう！',
    // alerts
    reactionGiven: `既に '{reaction}' のリアクションをしています`,
    deleteConfirm: '本当にコメントを削除してもいいですか？',
    deleteFailed: 'コメントの削除に失敗しました',
};

if (!Vue.prototype.hasOwnProperty('$i18n')) {
    Vue.use(VueI18n);
}
const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        'en': messages,
        'en-US': messages,
        'zh': messages$1,
        'zh-CN': messages$1,
        'pt': messages$2,
        'pt-BR': messages$2,
        'ja': messages$3,
        'ja-JP': messages$3,
    },
});

let VssueStore = class VssueStore extends Vue$1 {
    constructor() {
        super(...arguments);
        this.title = options => `${options.prefix}${document.title}`;
        this.titleR = options => `${options.prefix}[Meta]${document.title}`;
        this.issueId = null;
        this.issueIdR = null;
        this.options = null;
        this.API = null;
        this.accessToken = null;
        this.user = null;
        this.issue = null;
        this.issueR = null;
        this.comments = null;
        this.totalRating = 0;
        this.ratings = null;
        this.userRating = null;
        this.query = {
            page: 1,
            perPage: 10,
            sort: 'desc',
        };
        this.isInitializing = true;
        this.isIssueNotCreated = false;
        this.isLoginRequired = false;
        this.isFailed = false;
        this.isCreatingIssue = false;
        this.isLoadingComments = false;
        this.isCreatingComment = false;
        this.isUpdatingComment = false;
        this.isRating = false;
        this.isDeletingVote = false;
        this.isUpdatingVote = false;
    }
    get version() {
        return "1.1.1";
    }
    get issueTitle() {
        if (this.options === null) {
            return '';
        }
        return typeof this.title === 'function' ? this.title(this.options) : `${this.options.prefix}${this.title}`;
    }
    get issueTitleR() {
        if (this.options === null) {
            return '';
        }
        return typeof this.titleR === 'function' ? this.titleR(this.options) : `${this.options.prefix}[Meta]${this.title}`;
    }
    get isPending() {
        return this.isLoadingComments || this.isCreatingComment || this.isUpdatingComment;
    }
    get isLogined() {
        return this.accessToken !== null && this.user !== null;
    }
    get isAdmin() {
        return this.options !== null && this.accessToken !== null && this.user !== null &&
            (this.user.username === this.options.owner ||
                this.options.admins.includes(this.user.username));
    }
    /**
     * the key of access token for local storage
     */
    get accessTokenKey() {
        return this.API ? `Vssue.${this.API.platform.name.toLowerCase()}.access_token` : '';
    }
    onQueryPerPageChange() {
        this.query.page = 1;
        this.getComments();
    }
    onQueryChange() {
        this.getComments();
    }
    /**
     * Set options of Vssue
     */
    setOptions(options) {
        this.options = Object.assign({
            labels: ['Vssue'],
            state: 'Vssue',
            prefix: '[Vssue]',
            admins: [],
            perPage: 10,
            proxy: (url) => `https://cors-anywhere.herokuapp.com/${url}`,
            issueContent: ({ url }) => url,
            autoCreateIssue: false,
        }, options);
        // check options
        const requiredOptions = [
            'api',
            'owner',
            'repo',
            'clientId',
        ];
        for (const opt of requiredOptions) {
            if (!this.options[opt]) {
                console.warn(`[Vssue] the option '${opt}' is required`);
            }
        }
        // set locale
        if (this.options.locale) {
            this.$i18n.locale = this.options.locale;
        }
        else {
            const locales = Object.keys(this.$i18n.messages);
            const navLangs = window.navigator.languages;
            this.$i18n.locale = navLangs.filter(item => locales.includes(item)).shift() || 'en';
        }
    }
    /**
     * Initialization
     */
    async init() {
        try {
            // init VssueStore
            await this.initStore();
            // init comments
            await this.initComments();
            // init rating
            await this.initRatings();
            await this.getTotalRating();
            await this.getUserRating();
        }
        catch (e) {
            if (e.response && [401, 403].includes(e.response.status)) {
                // in some cases, require login to load comments
                this.isLoginRequired = true;
            }
            else {
                this.isFailed = true;
            }
            console.error(e);
        }
    }
    /**
     * Init VssueStore
     */
    async initStore() {
        try {
            if (!this.options)
                throw new Error('Options are required to initialize Vssue');
            // reset data
            this.API = null;
            this.accessToken = null;
            this.user = null;
            this.issue = null;
            this.comments = null;
            this.ratings = null;
            this.totalRating = 0;
            this.query = {
                page: 1,
                perPage: this.options.perPage,
                sort: 'desc',
            };
            // reset status
            this.isInitializing = true;
            this.isIssueNotCreated = false;
            this.isLoginRequired = false;
            this.isFailed = false;
            this.isCreatingIssue = false;
            this.isLoadingComments = false;
            this.isCreatingComment = false;
            this.isUpdatingComment = false;
            this.isRating = false;
            this.isDeletingVote = false;
            this.isUpdatingVote = false;
            // get the VssueAPI instance according to the options.api
            const APIConstructor = this.options.api;
            this.API = new APIConstructor({
                baseURL: this.options.baseURL,
                labels: this.options.labels,
                state: this.options.state,
                owner: this.options.owner,
                repo: this.options.repo,
                clientId: this.options.clientId,
                clientSecret: this.options.clientSecret,
                proxy: this.options.proxy,
            });
            // handle authorization
            await this.handleAuth();
        }
        finally {
            this.isInitializing = false;
        }
    }
    /**
     * Init comments
     */
    async initComments() {
        if (!this.API || !this.options)
            return;
        if (this.issueId) {
            // if issueId is set, get the issue and comments in the mean time
            // notice that vssue will not try to create the issue is not found
            const [issue, comments] = await Promise.all([
                this.API.getIssue({
                    accessToken: this.accessToken,
                    issueId: this.issueId,
                }),
                this.API.getComments({
                    accessToken: this.accessToken,
                    issueId: this.issueId,
                    query: this.query,
                }),
            ]);
            this.issue = issue;
            this.comments = comments;
        }
        else {
            // get issue according to title
            this.issue = await this.API.getIssue({
                accessToken: this.accessToken,
                issueTitle: this.issueTitle,
            });
            if (this.issue === null) {
                // if the issue of this page does not exist
                this.isIssueNotCreated = true;
                // try to create issue when `autoCreateIssue = true`
                if (this.options.autoCreateIssue) {
                    await this.postIssue();
                }
            }
            else {
                // try to load comments
                await this.getComments();
            }
        }
    }
    /**
     * Init Rating
     */
    async initRatings() {
        if (!this.API || !this.options)
            return;
        if (this.issueIdR) {
            // if issueId is set, get the issue and comments in the mean time
            // notice that vssue will not try to create the issue is not found
            const [issueR, ratings] = await Promise.all([
                this.API.getIssue({
                    accessToken: this.accessToken,
                    issueId: this.issueIdR,
                }),
                this.API.getRatings({
                    accessToken: this.accessToken,
                    issueId: this.issueIdR,
                    query: this.query,
                }),
            ]);
            this.issueR = issueR;
            this.ratings = ratings;
        }
        else {
            // get issue according to title
            this.issueR = await this.API.getIssue({
                accessToken: this.accessToken,
                issueTitle: this.issueTitleR,
            });
            if (this.issueR === null) {
                // if the issue of this page does not exist
                this.isIssueNotCreated = true;
                // try to create issue when `autoCreateIssue = true`
                if (this.options.autoCreateIssue) {
                    await this.postIssue();
                }
            }
            else {
                // try to load comments
                await this.getRatings();
            }
        }
    }
    getRatingFromContent(comment) {
        return JSON.parse(comment.content.slice(3, comment.content.length - 4)).rating;
    }
    async getTotalRating() {
        if (this.ratings) {
            let m = 0;
            this.ratings.data.forEach(element => {
                m += this.getRatingFromContent(element);
            });
            this.totalRating = m / this.ratings.count;
        }
    }
    async getUserRating() {
        if (this.ratings) {
            const Rating = this.ratings.data.filter(rating => {
                if (this.user) {
                    return rating.author.username === this.user.username;
                }
            });
            if (Rating.length === 1)
                this.userRating = Rating[0];
            else
                this.userRating = null;
        }
    }
    /**
     * Post a new issue
     */
    async postIssue() {
        if (!this.API || !this.options || this.issue || this.issueId)
            return;
        // login to create issue
        if (!this.isLogined) {
            this.login();
        }
        // only owner/admins can create issue
        if (!this.isAdmin)
            return;
        try {
            this.isCreatingIssue = true;
            const issue = await this.API.postIssue({
                title: this.issueTitle,
                content: await this.options.issueContent({
                    options: this.options,
                    url: getCleanURL(window.location.href),
                }),
                accessToken: this.accessToken,
            });
            this.issue = issue;
            this.isIssueNotCreated = false;
            await this.getComments();
        }
        catch (e) {
            this.isFailed = true;
        }
        finally {
            this.isCreatingIssue = false;
        }
    }
    /**
     * Get comments of this vssue according to the issue id
     */
    async getComments() {
        try {
            if (!this.API || !this.issue || this.isLoadingComments)
                return;
            this.isLoadingComments = true;
            const comments = await this.API.getComments({
                accessToken: this.accessToken,
                issueId: this.issue.id,
                query: this.query,
            });
            this.comments = comments;
            if (this.query.page !== comments.page) {
                this.query.page = comments.page;
            }
            if (this.query.perPage !== comments.perPage) {
                this.query.perPage = comments.perPage;
            }
            return comments;
        }
        catch (e) {
            if (e.response && [401, 403].includes(e.response.status) && !this.isLogined) {
                this.isLoginRequired = true;
            }
            else {
                this.$emit('error', e);
                throw e;
            }
        }
        finally {
            this.isLoadingComments = false;
        }
    }
    /**
     * Post a new comment
     */
    async postComment({ content, }) {
        try {
            if (!this.API || !this.issue || this.isCreatingComment)
                return;
            this.isCreatingComment = true;
            const comment = await this.API.postComment({
                accessToken: this.accessToken,
                content,
                issueId: this.issue.id,
            });
            return comment;
        }
        catch (e) {
            this.$emit('error', e);
            throw e;
        }
        finally {
            this.isCreatingComment = false;
        }
    }
    /**
     * Post a new vote
     */
    async postRating({ content, }) {
        try {
            if (!this.API || !this.issueR || this.isRating)
                return;
            this.isRating = true;
            const comment = await this.API.postComment({
                accessToken: this.accessToken,
                content,
                issueId: this.issueR.id,
            });
            return comment;
        }
        catch (e) {
            this.$emit('error', e);
            throw e;
        }
        finally {
            this.isRating = false;
        }
    }
    /**
     * Post a new vote
     */
    async deleteRating({ commentId, }) {
        try {
            if (!this.API || !this.issueR)
                return;
            this.isDeletingVote = true;
            const success = await this.API.deleteComment({
                accessToken: this.accessToken,
                issueId: this.issueR.id,
                commentId,
            });
            return success;
        }
        catch (e) {
            this.$emit('error', e);
            throw e;
        }
        finally {
            this.isDeletingVote = false;
        }
    }
    /**
     * Edit rating
     */
    async putRating({ commentId, content, }) {
        try {
            if (!this.API || !this.issueR)
                return;
            this.isUpdatingVote = true;
            const comment = await this.API.putComment({
                accessToken: this.accessToken,
                issueId: this.issueR.id,
                commentId,
                content,
            });
            return comment;
        }
        catch (e) {
            this.$emit('error', e);
            throw e;
        }
        finally {
            this.isUpdatingVote = false;
        }
    }
    /**
     * Edit a comment
     */
    async putComment({ commentId, content, }) {
        try {
            if (!this.API || !this.issue)
                return;
            const comment = await this.API.putComment({
                accessToken: this.accessToken,
                issueId: this.issue.id,
                commentId,
                content,
            });
            return comment;
        }
        catch (e) {
            this.$emit('error', e);
            throw e;
        }
    }
    /**
     * Delete a new comment
     */
    async deleteComment({ commentId, }) {
        try {
            if (!this.API || !this.issue)
                return;
            const success = await this.API.deleteComment({
                accessToken: this.accessToken,
                issueId: this.issue.id,
                commentId,
            });
            return success;
        }
        catch (e) {
            this.$emit('error', e);
            throw e;
        }
    }
    /**
     * Get reactions of a comment
     */
    async getCommentReactions({ commentId, }) {
        try {
            if (!this.API || !this.issue)
                return;
            const reactions = await this.API.getCommentReactions({
                accessToken: this.accessToken,
                issueId: this.issue.id,
                commentId,
            });
            return reactions;
        }
        catch (e) {
            this.$emit('error', e);
            throw e;
        }
    }
    /**
     * Create a new reaction to a certain comment
     */
    async postCommentReaction({ commentId, reaction, }) {
        try {
            if (!this.API || !this.issue)
                return false;
            const success = await this.API.postCommentReaction({
                accessToken: this.accessToken,
                issueId: this.issue.id,
                commentId,
                reaction,
            });
            return success;
        }
        catch (e) {
            this.$emit('error', e);
            throw e;
        }
    }
    /**
     * Get Ratings of this vssue according to the issue id
     */
    async getRatings() {
        try {
            if (!this.API || !this.issueR || this.isLoadingComments)
                return;
            this.isLoadingComments = true;
            const ratings = await this.API.getRatings({
                accessToken: this.accessToken,
                issueId: this.issueR.id,
                query: this.query,
            });
            this.ratings = ratings;
            if (this.query.page !== ratings.page) {
                this.query.page = ratings.page;
            }
            if (this.query.perPage !== ratings.perPage) {
                this.query.perPage = ratings.perPage;
            }
            return ratings;
        }
        catch (e) {
            if (e.response && [401, 403].includes(e.response.status) && !this.isLogined) {
                this.isLoginRequired = true;
            }
            else {
                this.$emit('error', e);
                throw e;
            }
        }
        finally {
            this.isLoadingComments = false;
        }
    }
    /**
     * Redirect to the platform's authorization page
     */
    login() {
        if (!this.API)
            return;
        this.API.redirectAuth();
    }
    /**
     * Clean the access token stored in local storage
     */
    logout() {
        this.setAccessToken(null);
        this.user = null;
    }
    /**
     * Handle authorization and set access_token
     */
    async handleAuth() {
        if (!this.API)
            return;
        // handle authorize and try to get the access_token
        const accessToken = await this.API.handleAuth();
        if (accessToken) {
            // new access_token
            this.setAccessToken(accessToken);
            this.user = await this.API.getUser({ accessToken });
        }
        else if (this.getAccessToken()) {
            // have access_token in localstorage
            this.user = await this.API.getUser({ accessToken: this.accessToken });
        }
        else {
            // no access_token
            this.setAccessToken(null);
            this.user = null;
        }
    }
    /**
     * Get access token from local storage
     */
    getAccessToken() {
        this.accessToken = window.localStorage.getItem(this.accessTokenKey);
        return this.accessToken;
    }
    /**
     * Save access token to local storage
     */
    setAccessToken(token) {
        if (token === null) {
            window.localStorage.removeItem(this.accessTokenKey);
        }
        else {
            window.localStorage.setItem(this.accessTokenKey, token);
        }
        this.accessToken = token;
    }
};
__decorate([
    Watch('query.perPage')
], VssueStore.prototype, "onQueryPerPageChange", null);
__decorate([
    Watch('query.page'),
    Watch('query.sort')
], VssueStore.prototype, "onQueryChange", null);
VssueStore = __decorate([
    Component({ i18n })
], VssueStore);
var VssueStore$1 = VssueStore;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var starRating_min = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,function(){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n});},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=4)}([function(t,e){function r(t,e){var r=t[1]||"",i=t[3];if(!i)return r;if(e&&"function"==typeof btoa){var o=n(i);return [r].concat(i.sources.map(function(t){return "/*# sourceURL="+i.sourceRoot+t+" */"})).concat([o]).join("\n")}return [r].join("\n")}function n(t){return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=r(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0);}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a));}},e};},function(t,e){t.exports=function(t,e,r,n,i){var o,a=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,a=t.default);var u="function"==typeof a?a.options:a;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n);var d;if(i?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i);},u._ssrRegister=d):r&&(d=r),d){var l=u.functional,c=l?u.render:u.beforeCreate;l?u.render=function(t,e){return d.call(e),c(t,e)}:u.beforeCreate=c?[].concat(c,d):[d];}return {esModule:o,exports:a,options:u}};},function(t,e,r){function n(t){for(var e=0;e<t.length;e++){var r=t[e],n=l[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(o(r.parts[i]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length);}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(o(r.parts[i]));l[r.id]={id:r.id,refs:1,parts:a};}}}function i(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function o(t){var e,r,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(h)return g;n.parentNode.removeChild(n);}if(v){var o=p++;n=f||(f=i()),e=a.bind(null,n,o,!1),r=a.bind(null,n,o,!0);}else n=i(),e=s.bind(null,n),r=function(){n.parentNode.removeChild(n);};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n);}else r();}}function a(t,e,r,n){var i=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o);}}function s(t,e){var r=e.css,n=e.media,i=e.sourceMap;if(n&&t.setAttribute("media",n),i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r));}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=r(14),l={},c=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,g=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,r){h=r;var i=d(t,e);return n(i),function(e){for(var r=[],o=0;o<i.length;o++){var a=i[o],s=l[a.id];s.refs--,r.push(s);}e?(i=d(t,e),n(i)):i=[];for(var o=0;o<r.length;o++){var s=r[o];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete l[s.id];}}}};var m=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}();},function(t,e,r){function n(t){r(13);}var i=r(1)(r(5),r(11),n,"data-v-34cbeed1",null);t.exports=i.exports;},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var n=r(3),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=i.default;},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var n=r(9),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={components:{star:i.default},model:{prop:"rating",event:"rating-selected"},props:{increment:{type:Number,default:1},rating:{type:Number,default:0},roundStartRating:{type:Boolean,default:!0},activeColor:{type:String,default:"#ffd055"},inactiveColor:{type:String,default:"#d8d8d8"},maxRating:{type:Number,default:5},starPoints:{type:Array,default:function(){return []}},starSize:{type:Number,default:50},showRating:{type:Boolean,default:!0},readOnly:{type:Boolean,default:!1},textClass:{type:String,default:""},inline:{type:Boolean,default:!1},borderColor:{type:String,default:"#999"},borderWidth:{type:Number,default:0},roundedCorners:{type:Boolean,default:!1},padding:{type:Number,default:0},rtl:{type:Boolean,default:!1},fixedPoints:{type:Number,default:null},glow:{type:Number,default:0},glowColor:{type:String,default:"#fff"}},created:function(){this.step=100*this.increment,this.currentRating=this.rating,this.selectedRating=this.currentRating,this.createStars(this.roundStartRating);},methods:{setRating:function(t,e){if(!this.readOnly){var r=this.rtl?(100-t.position)/100:t.position/100;this.currentRating=(t.id+r-1).toFixed(2),this.currentRating=this.currentRating>this.maxRating?this.maxRating:this.currentRating,this.createStars(),e?(this.selectedRating=this.currentRating,this.$emit("rating-selected",this.selectedRating),this.ratingSelected=!0):this.$emit("current-rating",this.currentRating);}},resetRating:function(){this.readOnly||(this.currentRating=this.selectedRating,this.createStars(this.shouldRound));},createStars:function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&this.round();for(var t=0;t<this.maxRating;t++){var e=0;t<this.currentRating&&(e=this.currentRating-t>1?100:100*(this.currentRating-t)),this.$set(this.fillLevel,t,Math.round(e));}},round:function(){var t=1/this.increment;this.currentRating=Math.min(this.maxRating,Math.ceil(this.currentRating*t)/t);}},computed:{formattedRating:function(){return null===this.fixedPoints?this.currentRating:this.currentRating.toFixed(this.fixedPoints)},shouldRound:function(){return this.ratingSelected||this.roundStartRating},margin:function(){return this.padding+this.borderWidth}},watch:{rating:function(t){this.currentRating=t,this.selectedRating=t,this.createStars(this.shouldRound);}},data:function(){return {step:0,fillLevel:[],currentRating:0,selectedRating:0,ratingSelected:!1}}};},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{fill:{type:Number,default:0},points:{type:Array,default:function(){return []}},size:{type:Number,default:50},starId:{type:Number,required:!0},activeColor:{type:String,required:!0},inactiveColor:{type:String,required:!0},borderColor:{type:String,default:"#000"},borderWidth:{type:Number,default:0},roundedCorners:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},glow:{type:Number,default:0},glowColor:{type:String,required:!1}},created:function(){this.starPoints=this.points.length?this.points:this.starPoints,this.calculatePoints(),this.grad=this.getRandomId(),this.glowId=this.getRandomId();},computed:{starPointsToString:function(){return this.starPoints.join(",")},getGradId:function(){return "url(#"+this.grad+")"},getSize:function(){var t=this.roundedCorners&&this.borderWidth<=0?parseInt(this.size)-parseInt(this.border):this.size;return parseInt(t)+parseInt(this.border)},getFill:function(){return this.rtl?100-this.fill+"%":this.fill+"%"},border:function(){return this.roundedCorners&&this.borderWidth<=0?6:this.borderWidth},getBorderColor:function(){return this.roundedCorners&&this.borderWidth<=0?this.fill<=0?this.inactiveColor:this.activeColor:this.borderColor},maxSize:function(){return this.starPoints.reduce(function(t,e){return Math.max(t,e)})},viewBox:function(){return "0 0 "+this.maxSize+" "+this.maxSize}},methods:{mouseMoving:function(t){this.$emit("star-mouse-move",{event:t,position:this.getPosition(t),id:this.starId});},getPosition:function(t){var e=.92*this.size,r=this.rtl?Math.min(t.offsetX,45):Math.max(t.offsetX,1),n=Math.round(100/e*r);return Math.min(n,100)},selected:function(t){this.$emit("star-selected",{id:this.starId,position:this.getPosition(t)});},getRandomId:function(){return Math.random().toString(36).substring(7)},calculatePoints:function(){var t=this;this.starPoints=this.starPoints.map(function(e){return t.size/t.maxSize*e+1.5*t.border});}},data:function(){return {starPoints:[19.8,2.2,6.6,43.56,39.6,17.16,0,17.16,33,43.56],grad:"",glowId:""}}};},function(t,e,r){e=t.exports=r(0)(void 0),e.push([t.i,".vue-star-rating-star[data-v-21f5376e]{overflow:visible!important}",""]);},function(t,e,r){e=t.exports=r(0)(void 0),e.push([t.i,".vue-star-rating-star[data-v-34cbeed1]{display:inline-block}.vue-star-rating-pointer[data-v-34cbeed1]{cursor:pointer}.vue-star-rating[data-v-34cbeed1]{display:flex;align-items:center}.vue-star-rating-inline[data-v-34cbeed1]{display:inline-flex}.vue-star-rating-rating-text[data-v-34cbeed1]{margin-top:7px;margin-left:7px}.vue-star-rating-rtl[data-v-34cbeed1]{direction:rtl}.vue-star-rating-rtl .vue-star-rating-rating-text[data-v-34cbeed1]{margin-right:10px;direction:rtl}",""]);},function(t,e,r){function n(t){r(12);}var i=r(1)(r(6),r(10),n,"data-v-21f5376e",null);t.exports=i.exports;},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"vue-star-rating-star",attrs:{height:t.getSize,width:t.getSize,viewBox:t.viewBox},on:{mousemove:t.mouseMoving,click:t.selected}},[r("linearGradient",{attrs:{id:t.grad,x1:"0",x2:"100%",y1:"0",y2:"0"}},[r("stop",{attrs:{offset:t.getFill,"stop-color":t.rtl?t.inactiveColor:t.activeColor}}),t._v(" "),r("stop",{attrs:{offset:t.getFill,"stop-color":t.rtl?t.activeColor:t.inactiveColor}})],1),t._v(" "),r("filter",{attrs:{id:t.glowId,height:"130%",width:"130%",filterUnits:"userSpaceOnUse"}},[r("feGaussianBlur",{attrs:{stdDeviation:t.glow,result:"coloredBlur"}}),t._v(" "),r("feMerge",[r("feMergeNode",{attrs:{in:"coloredBlur"}}),t._v(" "),r("feMergeNode",{attrs:{in:"SourceGraphic"}})],1)],1),t._v(" "),r("polygon",{directives:[{name:"show",rawName:"v-show",value:t.fill>1,expression:"fill > 1"}],attrs:{points:t.starPointsToString,fill:t.getGradId,stroke:t.glowColor,filter:"url(#"+this.glowId+")"}}),t._v(" "),r("polygon",{attrs:{points:t.starPointsToString,fill:t.getGradId,stroke:t.getBorderColor,"stroke-width":t.border,"stroke-linejoin":t.roundedCorners?"round":"miter"}}),t._v(" "),r("polygon",{attrs:{points:t.starPointsToString,fill:t.getGradId}})],1)},staticRenderFns:[]};},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["vue-star-rating",{"vue-star-rating-rtl":t.rtl},{"vue-star-rating-inline":t.inline}]},[r("div",{staticClass:"vue-star-rating",on:{mouseleave:t.resetRating}},[t._l(t.maxRating,function(e){return r("span",{key:e,class:[{"vue-star-rating-pointer":!t.readOnly},"vue-star-rating-star"],style:{"margin-right":t.margin+"px"}},[r("star",{attrs:{fill:t.fillLevel[e-1],size:t.starSize,points:t.starPoints,"star-id":e,step:t.step,"active-color":t.activeColor,"inactive-color":t.inactiveColor,"border-color":t.borderColor,"border-width":t.borderWidth,"rounded-corners":t.roundedCorners,rtl:t.rtl,glow:t.glow,"glow-color":t.glowColor},on:{"star-selected":function(e){t.setRating(e,!0);},"star-mouse-move":t.setRating}})],1)}),t._v(" "),t.showRating?r("span",{class:["vue-star-rating-rating-text",t.textClass]},[t._v(" "+t._s(t.formattedRating))]):t._e()],2)])},staticRenderFns:[]};},function(t,e,r){var n=r(7);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(2)("0ab8a16d",n,!0);},function(t,e,r){var n=r(8);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(2)("2e648ff1",n,!0);},function(t,e){t.exports=function(t,e){for(var r=[],n={},i=0;i<e.length;i++){var o=e[i],a=o[0],s=o[1],u=o[2],d=o[3],l={id:t+":"+i,css:s,media:u,sourceMap:d};n[a]?n[a].parts.push(l):r.push(n[a]={id:a,parts:[l]});}return r};}])});

});

var StarRating = unwrapExports(starRating_min);
var starRating_min_1 = starRating_min.VueStarRating;

var vueStackableModal_umd_min = createCommonjsModule(function (module, exports) {
(function(t,e){module.exports=e();})("undefined"!==typeof self?self:commonjsGlobal,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r});},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"014b":function(t,e,n){var r=n("e53d"),o=n("07e3"),i=n("8e60"),c=n("63b6"),a=n("9138"),u=n("ebfd").KEY,s=n("294c"),f=n("dbdb"),l=n("45f2"),d=n("62a0"),p=n("5168"),b=n("ccb9"),h=n("6718"),v=n("47ee"),y=n("9003"),m=n("e4ae"),w=n("f772"),x=n("241e"),O=n("36c3"),g=n("1bc3"),S=n("aebd"),_=n("a159"),j=n("0395"),k=n("bf0b"),E=n("9aa9"),P=n("d9f6"),C=n("c3a1"),I=k.f,B=P.f,M=j.f,z=r.Symbol,T=r.JSON,$=T&&T.stringify,F="prototype",N=p("_hidden"),D=p("toPrimitive"),R={}.propertyIsEnumerable,L=f("symbol-registry"),W=f("symbols"),A=f("op-symbols"),J=Object[F],V="function"==typeof z&&!!E.f,G=r.QObject,K=!G||!G[F]||!G[F].findChild,U=i&&s(function(){return 7!=_(B({},"a",{get:function(){return B(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=I(J,e);r&&delete J[e],B(t,e,n),r&&t!==J&&B(J,e,r);}:B,X=function(t){var e=W[t]=_(z[F]);return e._k=t,e},Y=V&&"symbol"==typeof z.iterator?function(t){return "symbol"==typeof t}:function(t){return t instanceof z},Q=function(t,e,n){return t===J&&Q(A,e,n),m(t),e=g(e,!0),m(n),o(W,e)?(n.enumerable?(o(t,N)&&t[N][e]&&(t[N][e]=!1),n=_(n,{enumerable:S(0,!1)})):(o(t,N)||B(t,N,S(1,{})),t[N][e]=!0),U(t,e,n)):B(t,e,n)},q=function(t,e){m(t);var n,r=v(e=O(e)),o=0,i=r.length;while(i>o)Q(t,n=r[o++],e[n]);return t},H=function(t,e){return void 0===e?_(t):q(_(t),e)},Z=function(t){var e=R.call(this,t=g(t,!0));return !(this===J&&o(W,t)&&!o(A,t))&&(!(e||!o(this,t)||!o(W,t)||o(this,N)&&this[N][t])||e)},tt=function(t,e){if(t=O(t),e=g(e,!0),t!==J||!o(W,e)||o(A,e)){var n=I(t,e);return !n||!o(W,e)||o(t,N)&&t[N][e]||(n.enumerable=!0),n}},et=function(t){var e,n=M(O(t)),r=[],i=0;while(n.length>i)o(W,e=n[i++])||e==N||e==u||r.push(e);return r},nt=function(t){var e,n=t===J,r=M(n?A:O(t)),i=[],c=0;while(r.length>c)!o(W,e=r[c++])||n&&!o(J,e)||i.push(W[e]);return i};V||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===J&&e.call(A,n),o(this,N)&&o(this[N],t)&&(this[N][t]=!1),U(this,t,S(1,n));};return i&&K&&U(J,t,{configurable:!0,set:e}),X(t)},a(z[F],"toString",function(){return this._k}),k.f=tt,P.f=Q,n("6abf").f=j.f=et,n("355d").f=Z,E.f=nt,i&&!n("b8e3")&&a(J,"propertyIsEnumerable",Z,!0),b.f=function(t){return X(p(t))}),c(c.G+c.W+c.F*!V,{Symbol:z});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ot=0;rt.length>ot;)p(rt[ot++]);for(var it=C(p.store),ct=0;it.length>ct;)h(it[ct++]);c(c.S+c.F*!V,"Symbol",{for:function(t){return o(L,t+="")?L[t]:L[t]=z(t)},keyFor:function(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var e in L)if(L[e]===t)return e},useSetter:function(){K=!0;},useSimple:function(){K=!1;}}),c(c.S+c.F*!V,"Object",{create:H,defineProperty:Q,defineProperties:q,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:nt});var at=s(function(){E.f(1);});c(c.S+c.F*at,"Object",{getOwnPropertySymbols:function(t){return E.f(x(t))}}),T&&c(c.S+c.F*(!V||s(function(){var t=z();return "[null]"!=$([t])||"{}"!=$({a:t})||"{}"!=$(Object(t))})),"JSON",{stringify:function(t){var e,n,r=[t],o=1;while(arguments.length>o)r.push(arguments[o++]);if(n=e=r[1],(w(e)||void 0!==t)&&!Y(t))return y(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Y(e))return e}),r[1]=e,$.apply(T,r)}}),z[F][D]||n("35e8")(z[F],D,z[F].valueOf),l(z,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0);},"0395":function(t,e,n){var r=n("36c3"),o=n("6abf").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?a(t):o(r(t))};},"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)};},"0fc9":function(t,e,n){var r=n("3a38"),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)};},1691:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");},"1bc3":function(t,e,n){var r=n("f772");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")};},"1ec9":function(t,e,n){var r=n("f772"),o=n("e53d").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}};},"241e":function(t,e,n){var r=n("25eb");t.exports=function(t){return Object(r(t))};},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t};},"268f":function(t,e,n){t.exports=n("fde4");},"294c":function(t,e){t.exports=function(t){try{return !!t()}catch(e){return !0}};},"32a6":function(t,e,n){var r=n("241e"),o=n("c3a1");n("ce7e")("keys",function(){return function(t){return o(r(t))}});},"32fc":function(t,e,n){var r=n("e53d").document;t.exports=r&&r.documentElement;},"335c":function(t,e,n){var r=n("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return "String"==r(t)?t.split(""):Object(t)};},"355d":function(t,e){e.f={}.propertyIsEnumerable;},"35e8":function(t,e,n){var r=n("d9f6"),o=n("aebd");t.exports=n("8e60")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t};},"36c3":function(t,e,n){var r=n("335c"),o=n("25eb");t.exports=function(t){return r(o(t))};},"3a38":function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)};},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)};},"45f2":function(t,e,n){var r=n("d9f6").f,o=n("07e3"),i=n("5168")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e});};},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f});},"47ee":function(t,e,n){var r=n("c3a1"),o=n("9aa9"),i=n("355d");t.exports=function(t){var e=r(t),n=o.f;if(n){var c,a=n(t),u=i.f,s=0;while(a.length>s)u.call(t,c=a[s++])&&e.push(c);}return e};},5168:function(t,e,n){var r=n("dbdb")("wks"),o=n("62a0"),i=n("e53d").Symbol,c="function"==typeof i,a=t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))};a.store=r;},5559:function(t,e,n){var r=n("dbdb")("keys"),o=n("62a0");t.exports=function(t){return r[t]||(r[t]=o(t))};},"559a":function(t,e,n){var r=n("f97d"),o=n.n(r);o.a;},"584a":function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n);},"5b4e":function(t,e,n){var r=n("36c3"),o=n("b447"),i=n("0fc9");t.exports=function(t){return function(e,n,c){var a,u=r(e),s=o(u.length),f=i(c,s);if(t&&n!=n){while(s>f)if(a=u[f++],a!=a)return !0}else for(;s>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return !t&&-1}};},"62a0":function(t,e){var n=0,r=Math.random();t.exports=function(t){return "Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))};},"63b6":function(t,e,n){var r=n("e53d"),o=n("584a"),i=n("d864"),c=n("35e8"),a=n("07e3"),u="prototype",s=function(t,e,n){var f,l,d,p=t&s.F,b=t&s.G,h=t&s.S,v=t&s.P,y=t&s.B,m=t&s.W,w=b?o:o[e]||(o[e]={}),x=w[u],O=b?r:h?r[e]:(r[e]||{})[u];for(f in b&&(n=e),n)l=!p&&O&&void 0!==O[f],l&&a(w,f)||(d=l?O[f]:n[f],w[f]=b&&"function"!=typeof O[f]?n[f]:y&&l?i(d,r):m&&O[f]==d?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[u]=t[u],e}(d):v&&"function"==typeof d?i(Function.call,d):d,v&&((w.virtual||(w.virtual={}))[f]=d,t&s.R&&x&&!x[f]&&c(x,f,d)));};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s;},6718:function(t,e,n){var r=n("e53d"),o=n("584a"),i=n("b8e3"),c=n("ccb9"),a=n("d9f6").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:c.f(t)});};},"6abf":function(t,e,n){var r=n("e6f3"),o=n("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)};},"6b4c":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)};},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")(function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a});},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t};},"7e90":function(t,e,n){var r=n("d9f6"),o=n("e4ae"),i=n("c3a1");t.exports=n("8e60")?Object.defineProperties:function(t,e){o(t);var n,c=i(e),a=c.length,u=0;while(a>u)r.f(t,n=c[u++],e[n]);return t};},"85f2":function(t,e,n){t.exports=n("454f");},"8aae":function(t,e,n){n("32a6"),t.exports=n("584a").Object.keys;},"8e60":function(t,e,n){t.exports=!n("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});},9003:function(t,e,n){var r=n("6b4c");t.exports=Array.isArray||function(t){return "Array"==r(t)};},9138:function(t,e,n){t.exports=n("35e8");},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols;},a159:function(t,e,n){var r=n("e4ae"),o=n("7e90"),i=n("1691"),c=n("5559")("IE_PROTO"),a=function(){},u="prototype",s=function(){var t,e=n("1ec9")("iframe"),r=i.length,o="<",c=">";e.style.display="none",n("32fc").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+c+"document.F=Object"+o+"/script"+c),t.close(),s=t.F;while(r--)delete s[u][i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[u]=r(t),n=new a,a[u]=null,n[c]=t):n=s(),void 0===e?n:o(n,e)};},a4bb:function(t,e,n){t.exports=n("8aae");},aebd:function(t,e){t.exports=function(t,e){return {enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};},b447:function(t,e,n){var r=n("3a38"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0};},b8e3:function(t,e){t.exports=!0;},bf0b:function(t,e,n){var r=n("355d"),o=n("aebd"),i=n("36c3"),c=n("1bc3"),a=n("07e3"),u=n("794b"),s=Object.getOwnPropertyDescriptor;e.f=n("8e60")?s:function(t,e){if(t=i(t),e=c(e,!0),u)try{return s(t,e)}catch(n){}if(a(t,e))return o(!r.f.call(t,e),t[e])};},bf90:function(t,e,n){var r=n("36c3"),o=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return o(r(t),e)}});},c01e:function(t,e,n){var r=n("f248"),o=n.n(r);o.a;},c3a1:function(t,e,n){var r=n("e6f3"),o=n("1691");t.exports=Object.keys||function(t){return r(t,o)};},ccb9:function(t,e,n){e.f=n("5168");},ce7e:function(t,e,n){var r=n("63b6"),o=n("584a"),i=n("294c");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],c={};c[t]=e(n),r(r.S+r.F*i(function(){n(1);}),"Object",c);};},d864:function(t,e,n){var r=n("79aa");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}};},d9f6:function(t,e,n){var r=n("e4ae"),o=n("794b"),i=n("1bc3"),c=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return c(t,e,n)}catch(a){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return "value"in n&&(t[e]=n.value),t};},dbdb:function(t,e,n){var r=n("584a"),o=n("e53d"),i="__core-js_shared__",c=o[i]||(o[i]={});(t.exports=function(t,e){return c[t]||(c[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"});},e265:function(t,e,n){t.exports=n("ed33");},e4ae:function(t,e,n){var r=n("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t};},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n);},e6f3:function(t,e,n){var r=n("07e3"),o=n("36c3"),i=n("5b4e")(!1),c=n("5559")("IE_PROTO");t.exports=function(t,e){var n,a=o(t),u=0,s=[];for(n in a)n!=c&&r(a,n)&&s.push(n);while(e.length>u)r(a,n=e[u++])&&(~i(s,n)||s.push(n));return s};},ebfd:function(t,e,n){var r=n("62a0")("meta"),o=n("f772"),i=n("07e3"),c=n("d9f6").f,a=0,u=Object.isExtensible||function(){return !0},s=!n("294c")(function(){return u(Object.preventExtensions({}))}),f=function(t){c(t,r,{value:{i:"O"+ ++a,w:{}}});},l=function(t,e){if(!o(t))return "symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!u(t))return "F";if(!e)return "E";f(t);}return t[r].i},d=function(t,e){if(!i(t,r)){if(!u(t))return !0;if(!e)return !1;f(t);}return t[r].w},p=function(t){return s&&b.NEED&&u(t)&&!i(t,r)&&f(t),t},b=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:d,onFreeze:p};},ed33:function(t,e,n){n("014b"),t.exports=n("584a").Object.getOwnPropertySymbols;},f248:function(t,e,n){},f6fd:function(t,e){(function(t){var e="currentScript",n=t.getElementsByTagName("script");e in t||Object.defineProperty(t,e,{get:function(){try{throw new Error}catch(r){var t,e=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(t in n)if(n[t].src==e||"interactive"==n[t].readyState)return n[t];return null}}});})(document);},f772:function(t,e){t.exports=function(t){return "object"===typeof t?null!==t:"function"===typeof t};},f97d:function(t,e,n){},fb15:function(t,e,n){var r;(n.r(e),"undefined"!==typeof window)&&(n("f6fd"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^\/]+\.js(\?.*)?$/))&&(n.p=r[1]));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition,appear:""}},[t.show?n("div",{ref:"modal",staticClass:"modal fade show",style:t.getStyle,on:{mousedown:t.mouseDown}},[n("div",{staticClass:"modal-dialog",class:t.getClass,attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[t._t("modal-header",[t.title?n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title"},[t._v(t._s(t.title))]),n("a",{staticClass:"close",attrs:{"aria-label":"Close"},on:{click:function(e){return e.stopPropagation(),t.$emit("close")}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]):t._e()]),n("div",{staticClass:"modal-body"},[t._t("default")],2),t._t("modal-footer",[n("div",{staticClass:"modal-footer"},[t.saveButtonOptions.visible?n("button",{class:Object.assign({},t.saveButtonOptions.btnClass),attrs:{type:"button"},on:{click:function(e){return t.$emit("save")}}},[t._v(t._s(t.saveButtonOptions.title)+"\n                        ")]):t._e(),t.cancelButtonOptions.visible?n("button",{class:Object.assign({},t.cancelButtonOptions.btnClass),attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return e.stopPropagation(),t.$emit("close")}}},[t._v(t._s(t.cancelButtonOptions.title)+"\n                        ")]):t._e()])])],2)])]):t._e()])},i=[],c=n("268f"),a=n.n(c),u=n("e265"),s=n.n(u),f=n("a4bb"),l=n.n(f),d=n("85f2"),p=n.n(d);function b(t,e,n){return e in t?p()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=l()(n);"function"===typeof s.a&&(r=r.concat(s()(n).filter(function(t){return a()(n,t).enumerable}))),r.forEach(function(e){b(t,e,n[e]);});}return t}var v={count:0},y={name:"StackModal",props:{show:Boolean,title:String,modalClass:Object,hasBackdrop:{type:Boolean,default:!0},saveButton:{type:Object,default:function(){return {}}},cancelButton:{type:Object,default:function(){return {}}},transition:{type:String,default:"translate-fade"},closeOnEscape:{type:Boolean,default:!0}},data:function(){return {backdrop:null,zIndex:0,modals:v}},mounted:function(){this.show&&(v.count++,this.zIndex=v.count,this.$emit("show",!0,this.zIndex,v.count)),this.checkBackdrop();},destroyed:function(){this.show&&(v.count--,this.zIndex=v.count,this.$emit("show",!1,this.zIndex,v.count)),this.backdrop&&this.show&&document.body.removeChild(this.backdrop),0===v.count&&document.body.classList.remove("modal-open");},methods:{handleEscape:function(t){this.show&&27===t.keyCode&&this.zIndex===this.totalModals&&this.$emit("close");},mouseDown:function(t){this.$refs.modal===t.target&&(this.$emit("close"),t.preventDefault());},checkBackdrop:function(){this.hasBackdrop&&(this.show&&1===this.zIndex?document.body.classList.add("modal-open"):!this.show&&(this.zIndex,this.totalModals),this.show?(this.backdrop=document.createElement("div"),this.backdrop.classList.add("modal-backdrop","fade","show"),this.backdrop.style.zIndex=1048+2*this.zIndex,document.body.appendChild(this.backdrop)):this.backdrop&&(document.body.removeChild(this.backdrop),document.body.classList.remove("modal-open")));}},computed:{totalModals:function(){return v.count},getStyle:function(){var t={};return this.show&&(t.display="block"),t["z-index"]=1048+2*this.zIndex+1,t},getClass:function(){var t={},e=this.totalModals-this.zIndex;return t["modal-stack-"+e]=!0,t["modal-order-"+this.zIndex]=!0,t.aside=this.zIndex!==this.totalModals,h({},t,this.modalClass)},saveButtonOptions:function(){var t={title:"Save",visible:!0,btnClass:{"btn btn-primary":!0}};return h({},t,this.saveButton)},cancelButtonOptions:function(){var t={title:"Cancel",visible:!0,btnClass:{"btn btn-outline-secondary":!0}};return h({},t,this.cancelButton)}},watch:{show:function(t){t?v.count++:v.count--,this.zIndex=v.count,this.$emit("show",t,this.zIndex,v.count),t||0!==v.count||document.body.classList.remove("modal-open"),this.checkBackdrop();},closeOnEscape:{handler:function(t){"undefined"!==typeof document&&(t?document.addEventListener("keydown",this.handleEscape):document.removeEventListener("keydown",this.handleEscape));},immediate:!0}}},m=y;n("c01e"),n("559a");function w(t,e,n,r,o,i,c,a){var u,s="function"===typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),c?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c);},s._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot);}:o),u)if(s.functional){s._injectStyles=u;var f=s.render;s.render=function(t,e){return u.call(e),f(t,e)};}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,u):[u];}return {exports:t,options:s}}var x=w(m,o,i,!1,null,"23878cd5",null),O=x.exports,g=function(t){t.component("StackModal",O);};"undefined"!==typeof window&&window.Vue&&g(window.Vue);e["default"]=O;},fde4:function(t,e,n){n("bf90");var r=n("584a").Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)};}})});

});

var StackModal = unwrapExports(vueStackableModal_umd_min);

let Rating = class Rating extends Vue$1 {
    constructor() {
        super(...arguments);
        this.rating = null;
        this.show = false;
        this.editModal = false;
        this.confirmModal = false;
    }
    get user() {
        return this.vssue.user;
    }
    get isRatingDisabled() {
        return this.user === null || this.vssue.issueR === null || this.userRatingValue === null || this.editModal;
    }
    get isSubmitDisabled() {
        return this.vssue.isRating || this.vssue.issueR === null;
    }
    get loading() {
        return this.vssue.isRating || this.vssue.isUpdatingVote;
    }
    get deleting() {
        return this.vssue.isDeletingVote;
    }
    get updating() {
        return this.vssue.isUpdatingVote;
    }
    get userRatingValue() {
        if (this.vssue.userRating) {
            return JSON.parse(this.vssue.userRating.content.slice(3, this.vssue.userRating.content.length - 4)).rating;
        }
        return null;
    }
    set userRatingValue(rating) {
        this.rating = rating;
    }
    async init() {
        await this.vssue.getRatings();
        await this.vssue.getTotalRating();
        await this.vssue.getUserRating();
    }
    closeModal() {
        this.confirmModal = false;
        this.editModal = false;
        this.show = false;
    }
    confirmDelete() {
        this.confirmModal = true;
    }
    activeUpdate() {
        this.editModal = true;
    }
    async submit() {
        if (this.editModal && this.vssue.userRating !== null) {
            await this.vssue.putRating({ commentId: this.vssue.userRating.id, content: JSON.stringify({ rating: this.rating }) });
        }
        else {
            await this.vssue.postRating({ content: JSON.stringify({ rating: this.rating }) });
        }
        this.closeModal();
        await this.init();
    }
    async deleteVote() {
        if (this.vssue.isPending || this.vssue.userRating === null)
            return;
        const success = await this.vssue.deleteRating({
            commentId: this.vssue.userRating.id,
        });
        if (success) {
            this.closeModal();
            await this.init();
        }
        else {
            this.vssue.$emit('error', new Error(this.vssue.$t('deleteFailed')));
        }
    }
};
__decorate([
    Inject()
], Rating.prototype, "vssue", void 0);
Rating = __decorate([
    Component({
        components: {
            StarRating,
            StackModal,
            VssueNotice: VssueNotice$1,
            TransitionFade,
            VssueButton,
            VssueIcon,
        },
    })
], Rating);
var script$c = Rating;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD = document.head || document.getElementsByTagName('head')[0];
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);
      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
const __vue_script__$c = script$c;

/* template */
var __vue_render__$9 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('VssueNotice'),_vm._v(" "),_c('br'),_vm._v(" "),_c('star-rating',{attrs:{"increment":0.5,"read-only":true,"star-size":30,"round-start-rating":false},model:{value:(_vm.vssue.totalRating),callback:function ($$v) {_vm.$set(_vm.vssue, "totalRating", $$v);},expression:"vssue.totalRating"}}),_vm._v(" "),(_vm.user)?_c('div',{staticClass:"py-4"},[_c('button',{staticClass:"btn btn-outline-secondary",on:{"click":function($event){_vm.show=true;}}},[_vm._v("\n      Vote for the post\n    ")]),_vm._v(" "),_c('stack-modal',{attrs:{"show":_vm.show,"title":"Your vote"},on:{"close":_vm.closeModal}},[(_vm.confirmModal)?_c('div',[_c('p',[_vm._v("Are you sure you want to delete your review ?")]),_vm._v(" "),_c('VssueButton',{staticClass:"vssue-button-submit-comment",attrs:{"type":"default"},on:{"click":function($event){return _vm.deleteVote()}}},[_c('VssueIcon',{directives:[{name:"show",rawName:"v-show",value:(_vm.deleting),expression:"deleting"}],attrs:{"name":"loading"}}),_vm._v("\n\n          "+_vm._s(_vm.vssue.$t(_vm.deleting ? 'deleting' : 'deleteVote'))+"\n        ")],1)],1):_c('div',[(_vm.editModal)?_c('p',[_vm._v("\n          Update your vote :\n        ")]):_vm._e(),_vm._v(" "),_c('star-rating',{attrs:{"increment":0.5,"text-class":"custom text","star-size":30,"read-only":!_vm.isRatingDisabled},model:{value:(_vm.userRatingValue),callback:function ($$v) {_vm.userRatingValue=$$v;},expression:"userRatingValue"}}),_vm._v(" "),_c('br'),_vm._v(" "),(_vm.vssue.userRating && !_vm.editModal)?_c('div',[_c('VssueButton',{staticClass:"vssue-button-submit-comment modalButton",attrs:{"type":"primary"},on:{"click":function($event){return _vm.activeUpdate()}}},[_c('VssueIcon',{directives:[{name:"show",rawName:"v-show",value:(_vm.updating),expression:"updating"}],attrs:{"name":"loading"}}),_vm._v("\n\n            "+_vm._s(_vm.vssue.$t(_vm.updating ? 'updating' : 'updateVote'))+"\n          ")],1),_vm._v(" "),_c('VssueButton',{staticClass:"vssue-button-submit-comment modalButton",attrs:{"type":"default"},on:{"click":function($event){return _vm.confirmDelete()}}},[_vm._v("\n            Delete\n          ")])],1):_c('div',[_c('VssueButton',{staticClass:"vssue-button-submit-comment",attrs:{"type":"primary"},on:{"click":function($event){return _vm.submit()}}},[_c('VssueIcon',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],attrs:{"name":"loading"}}),_vm._v("\n            "+_vm._s(_vm.vssue.$t(_vm.loading ? 'submitting' : 'submit'))+"\n          ")],1)],1)],1),_vm._v(" "),_c('div',{attrs:{"slot":"modal-footer"},slot:"modal-footer"})])],1):_vm._e()],1)};
var __vue_staticRenderFns__$9 = [];

  /* style */
  const __vue_inject_styles__$c = function (inject) {
    if (!inject) return
    inject("data-v-25ece46a_0", { source: "@import url(https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css);.modalButton{margin:5px}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$c = undefined;
  /* module identifier */
  const __vue_module_identifier__$c = undefined;
  /* functional template */
  const __vue_is_functional_template__$c = false;
  /* style inject SSR */
  

  
  var Rating$1 = normalizeComponent_1(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$c,
    __vue_script__$c,
    __vue_scope_id__$c,
    __vue_is_functional_template__$c,
    __vue_module_identifier__$c,
    browser,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var script$d = {
  name: 'RatingHeader',
};

/* script */
const __vue_script__$d = script$d;

/* template */
var __vue_render__$a = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$a = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vssue-header",attrs:{"id":"RatingHeader"}},[_c('a',{staticClass:"vssue-header-comments-count",attrs:{"target":"_blank"}},[_c('span',[_vm._v("\n      Rating\n    ")])])])}];

  /* style */
  const __vue_inject_styles__$d = undefined;
  /* scoped */
  const __vue_scope_id__$d = undefined;
  /* module identifier */
  const __vue_module_identifier__$d = undefined;
  /* functional template */
  const __vue_is_functional_template__$d = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var RatingHeader = normalizeComponent_1(
    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
    __vue_inject_styles__$d,
    __vue_script__$d,
    __vue_scope_id__$d,
    __vue_is_functional_template__$d,
    __vue_module_identifier__$d,
    undefined,
    undefined
  );

let Vssue = class Vssue extends Vue$1 {
    constructor() {
        super(...arguments);
        /**
         * Provide the VssueStore for the child components
         */
        this.vssue = new VssueStore$1();
    }
    /**
     * Set options of Vssue if `options` prop is changed
     */
    onOptionsChange(options) {
        this.vssue.setOptions(options);
    }
    /**
     * beforeMount hook
     */
    beforeMount() {
        // set issue title and issue id
        if (this.title !== null) {
            this.vssue.title = this.title;
        }
        if (this.issueId !== null) {
            this.vssue.issueId = this.issueId;
        }
        if (this.issueIdR !== null) {
            this.vssue.issueIdR = this.issueIdR;
        }
        // set options
        this.vssue.setOptions(this.options);
        // init vssue
        this.vssue.init();
    }
};
__decorate([
    Prop({
        type: [String, Function],
        required: false,
        default: null,
    })
], Vssue.prototype, "title", void 0);
__decorate([
    Prop({
        type: [String, Number],
        required: false,
        default: null,
    })
], Vssue.prototype, "issueId", void 0);
__decorate([
    Prop({
        type: [String, Number],
        required: false,
        default: null,
    })
], Vssue.prototype, "issueIdR", void 0);
__decorate([
    Prop({
        type: Object,
        required: false,
        default: () => ({}),
    })
], Vssue.prototype, "options", void 0);
__decorate([
    Provide('vssue')
], Vssue.prototype, "vssue", void 0);
__decorate([
    Watch('options', { deep: true })
], Vssue.prototype, "onOptionsChange", null);
Vssue = __decorate([
    Component({
        components: {
            Iconfont,
            VssueBody: VssueBody$1,
            VssueHeader: VssueHeader$1,
            Rating: Rating$1,
            RatingHeader,
        },
    })
], Vssue);
var script$e = Vssue;

/* script */
const __vue_script__$e = script$e;

/* template */
var __vue_render__$b = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vssue"},[_c('RatingHeader'),_vm._v(" "),_c('Rating'),_vm._v(" "),_c('Iconfont'),_vm._v(" "),_c('VssueHeader'),_vm._v(" "),_c('VssueBody')],1)};
var __vue_staticRenderFns__$b = [];

  /* style */
  const __vue_inject_styles__$e = undefined;
  /* scoped */
  const __vue_scope_id__$e = undefined;
  /* module identifier */
  const __vue_module_identifier__$e = undefined;
  /* functional template */
  const __vue_is_functional_template__$e = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VssueComponent = normalizeComponent_1(
    { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
    __vue_inject_styles__$e,
    __vue_script__$e,
    __vue_scope_id__$e,
    __vue_is_functional_template__$e,
    __vue_module_identifier__$e,
    undefined,
    undefined
  );

const VssuePlugin = {
    get version() {
        return "1.1.1";
    },
    installed: false,
    install(Vue, options) {
        if (this.installed) {
            return false;
        }
        this.installed = true;
        Vue.component('Vssue', {
            functional: true,
            props: {
                title: {
                    type: String,
                    required: false,
                    default: undefined,
                },
                issueId: {
                    type: [Number, String],
                    required: false,
                    default: undefined,
                },
                issueIdR: {
                    type: [Number, String],
                    required: false,
                    default: undefined,
                },
                options: {
                    type: Object,
                    required: false,
                    default: undefined,
                },
            },
            render(h, { data, props }) {
                return h(VssueComponent, Object.assign({}, data, { props: {
                        title: props.title,
                        issueId: props.issueId,
                        issueIdR: props.issueIdR,
                        options: Object.assign({}, options, props.options),
                    } }));
            },
        });
    },
    VssueComponent: VssueComponent,
};

export default VssuePlugin;
export { VssueComponent };
