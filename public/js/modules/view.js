"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var View, view;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      View = function View() {
        _classCallCheck(this, View);

        this.size = 960;
      };

      _export("view", view = new View());

      _export("view", view);
    }
  };
});