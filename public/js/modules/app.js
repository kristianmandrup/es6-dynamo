'use strict';

System.register(['view.js', 'static.js'], function (_export, _context) {
     "use strict";

     var view, world, App, app;

     function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
               throw new TypeError("Cannot call a class as a function");
          }
     }

     return {
          setters: [function (_viewJs) {
               view = _viewJs.view;
          }, function (_staticJs) {
               world = _staticJs.world;
          }],
          execute: function () {
               App = function App() {
                    _classCallCheck(this, App);

                    this.name = 'MyApp';
                    this.size = view.size;
                    this.world = world;
               };

               _export('app', app = new App());

               _export('app', app);
          }
     };
});
//# sourceMappingURL=app.js.map
