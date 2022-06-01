export default function (h: number, level = 0, s = 90) {
    //@ts-ignore TS is not ready to work with Number.isInteger
    if (!Number.isInteger(h) || !Number.isInteger(level) || !Number.isInteger(s)) {
        throw Error('All parameters should be numbers (integers).');
    }

    // Check if level is within range 1-10
    if (level < 0 || level > 10) {
        throw Error(`The level argument should be between 0 and 10, but ${level} was given instead.`);
    }

    // Lightness scales for light and dark modes
    const SCALE_LIGHT = [98, 96, 94, 90, 86, 81, 74, 66, 55, 39];
    const SCALE_DARK = [4, 6, 8, 12, 16, 21, 28, 36, 47, 63];

    // Define step to desaturate color for dark mode
    const DARK_DESATURATE = 10;

    // Don't desaturate if saturation is less than DARK_DESATURATE:
    const darkDesaturate = s <= DARK_DESATURATE ? 0 : DARK_DESATURATE;

    // Normalize the hue to the range 0-360.
    // It is NOT an error, because sometimes you need to calculate
    // the opposite or additional hue number and it can be out of range
    // but still remain a valid color.
    if (h > 360) {
        h = h % 360;
    }

    if (h < 0) {
        h = 360 - (Math.abs(h) % 360);
    }

    // Return the absolute/default color for level 0 -- hsl(hue, 100%, 50%)
    // Level 0 returns absulute color with maxed out saturation and 50%
    // lightness. Dark version gets desaturated by a darkDesaturate step value.
    if (level === 0) {
        // Check if this is an absolute gray color
        return s === 0
            ? [`hsl(${h}, 0%, 50%)`, `hsl(${h}, 0%, 50%)`]
            : [`hsl(${h}, 100%, 50%)`, `hsl(${h}, ${100 - darkDesaturate}%, 50%)`];
    }

    return [
        `hsl(${h}, ${s}%, ${SCALE_LIGHT[level - 1]}%)`,
        `hsl(${h}, ${s - darkDesaturate}%, ${SCALE_DARK[level - 1]}%)`,
    ];
}
