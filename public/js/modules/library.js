"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var pi, calcCircumference;
    return {
        setters: [],
        execute: function () {
            pi = 3.14159265359;

            _export("calcCircumference", calcCircumference = function calcCircumference(radius) {
                return 2 * radius * pi;
            });

            _export("calcCircumference", calcCircumference);
        }
    };
});