if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../pages/handbag/components/location/location?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/handbag/components/Masonry/Masonry?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/Drawer/Drawer?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/select-button/select-button?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/purchase-number/purchase-number?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/handbag/components/commodity-drawer/commodity-drawer?hash=8478053939abd129e3d278635f27a90d080c5fd1');
require('../../components/Search/Search?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/Empty/Empty?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/category-nav/category-nav?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/Tab/Tab?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/list-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/Title/Title?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/my-ticket/components/tab/tab?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/my-ticket/components/ticket/ticket?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/handbag/handbag?hash=3788ffc7fd93eec2066b005a8126ba6c2fa6959f');
require('../../pages/shopping-cart/shopping-cart?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/my/my?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/category/category?hash=132dec136945b3b0a66fc76febf44a6e21f01fee');
require('../../pages/search/search?hash=ef4fb84887010afe7b7bb71b7080a3b22dd7a410');
require('../../pages/my-order/my-order?hash=132dec136945b3b0a66fc76febf44a6e21f01fee');
require('../../pages/my-ticket/my-ticket?hash=5cbcbd88ecc7642955f3d3ee95e06e8eb58cac86');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}