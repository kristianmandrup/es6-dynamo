'use strict';

System.register(['app.js'], function (_export, _context) {
  "use strict";

  var app;
  return {
    setters: [function (_appJs) {
      app = _appJs.app;
    }],
    execute: function () {
      console.log(app.name);
      console.log(app.size);
    }
  };
});
//# sourceMappingURL=index2.js.map
