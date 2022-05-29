"use strict";
exports.__esModule = true;
function default_1(h, level, s) {
    if (level === void 0) { level = 0; }
    if (s === void 0) { s = 90; }
    //@ts-ignore 
    if (!Number.isInteger(h) || !Number.isInteger(level) || !Number.isInteger(s)) {
        throw 'All parameters should be numbers (integers).';
    }
    // Check if level is within range 1-10
    if (level < 0 || level > 10) {
        throw "The level argument should be between 0 and 10, but ".concat(level, " was given instead.");
    }
    ;
    // Lightness scales for light and dark modes
    var SCALE_LIGHT = [98, 96, 94, 90, 86, 81, 74, 66, 55, 39];
    var SCALE_DARK = [4, 6, 8, 12, 16, 21, 28, 36, 47, 63];
    // Define step to desaturate color for dark mode
    var DARK_DESATURATE = 10;
    // Don't desaturate if saturation is less than DARK_DESATURATE:
    var darkDesaturate;
    if (s <= DARK_DESATURATE) {
        darkDesaturate = 0;
    }
    else {
        darkDesaturate = DARK_DESATURATE;
    }
    // Normalize the hue to the range 0-360.
    // It is NOT an error, because sometimes you need to calculate 
    // the opposite or additional hue number and it can be out of range 
    // but still remain a valid color.
    if (h > 360) {
        h = h % 360;
    }
    ;
    if (h < 0) {
        h = 360 - (Math.abs(h) % 360);
    }
    ;
    // Return the absolute/default color for level 0 -- hsl(hue, 100%, 50%)
    // Level 0 returns absulute color with maxed out saturation and 50%
    // lightness. Dark version gets desaturated by a darkDesaturate step value.
    if (level == 0) {
        return [
            "hsl(".concat(h, ", 100%, 50%)"),
            "hsl(".concat(h, ", ").concat(100 - darkDesaturate, "%, 50%)")
        ];
    }
    ;
    // prepare HSL colors:
    var light = "hsl(".concat(h, ", ").concat(s, "%, ").concat(SCALE_LIGHT[level - 1], "%)");
    var dark = "hsl(".concat(h, ", ").concat(s - darkDesaturate, "%, ").concat(SCALE_DARK[level - 1], "%)");
    return [light, dark];
}
exports["default"] = default_1;
