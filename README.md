# Color Layer

**Generate colors for a UI.**

The function returns two HSL values for a given hue and layer number (for light mode and for dark mode). Designed to generate up to 10 brightness levels are enough to build most of the components such as inputs, buttons, labels, etc.

The function returns two `hsl` values: for light mode and for dark mode:

```
colorLayer(h = 194, layer = 3) // ["hsl(194, 90%, 94%)", "hsl(194, 80%, 8%)"]
```

Colors work well with white (`#FFFFFF`) and black (`#000000`) backgrounds.

The goal of the library is to avoid using transparency in UI elements.

Levels are organized from the most subtle color to more vivid color (where `1` — almost background-color, `10` — the most vivd/rich color).

Level `0` returns the absolute/normalized color of a given hue, with values of saturation == 100 and lightnes == 50% for the light mode and 40% for the dark mode.

This is a part of the [rb_colorize project (see demo)](http://rockbee.com/colorize).

### Install

> npm i -S color-layer

- [NPM package](https://www.npmjs.com/package/color-layer)
- [RunKit](https://runkit.com/embed/ug0q3wqfa3bx)

## Usage

``` ts
import colorLayer from 'color-layer';

// Generate stroke color
const stroke = (lvl) => colorLayer(lvl, 9);

// Generate background color
const background = (lvl) => colorLayer(lvl, 3);

// Define your hue
console.log(stroke(194), background(194));
// > ["hsl(194, 90%, 55%)", "hsl(194, 80%, 47%)"]
// > ["hsl(194, 90%, 94%)", "hsl(194, 80%, 8%)"]
```

<!-- ## Layers

## Default (normalized) color -->

<!-- change version in package.json -->
<!-- npm publish -->

<!-- https://www.npmjs.com/package/color-layer -->
