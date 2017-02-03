"use strict";

System.register(["jquery"], function (_export, _context) {
  "use strict";

  var $, mega, mega;
  return {
    setters: [function (_jquery) {
      $ = _jquery.default;
    }],
    execute: function () {
      _export("mega", mega = {});

      mega.$ = $;
      $.ready;
      $(document).ready(function () {
        console.log("jQuery ready!");
      });
      $("html").css('background-color', 'green');

      _export("mega", mega = mega);

      _export("mega", mega);
    }
  };
});
//# sourceMappingURL=withjquery.js.map
