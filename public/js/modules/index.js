'use strict';

System.register(['app.js', 'library.js'], function (_export, _context) {
  "use strict";

  var app, calcCircumference;
  return {
    setters: [function (_appJs) {
      app = _appJs.app;
    }, function (_libraryJs) {
      calcCircumference = _libraryJs.calcCircumference;
    }],
    execute: function () {
      console.log(app.name);
      console.log(app.size);

      console.log(calcCircumference(200));
    }
  };
});
//# sourceMappingURL=index.js.map
