(function(global) {

  System.config({

    map: {
      app: '/dist',
      '@angular/core': '@angular/core/bundles/core.umd.js',
      '@angular/common': '@angular/common/bundles/common.umd.js',
      '@angular/compiler': '@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': '@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': '@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': '@angular/http/bundles/http.umd.js',
      '@angular/router': '@angular/router/bundles/router.umd.js',
      '@angular/forms': '@angular/forms/bundles/forms.umd.js',
      'rxjs': 'rxjs'
    },

    packages: {
      app: { main: './main.js', defaultExtension: 'js'},
      rxjs: { defaultExtension: 'js'}
    }
  });

})(this);
