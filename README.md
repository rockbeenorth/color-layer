# color-layer

Get colors for a UI for light and dark modes. Each hue has 11 layers that work together well. 10 levels is enough to build most of components such as inputs, buttons, labels, etc.

The function returns two `hsl` values: for light mode and for dark mode:

```
colorLayer(h=194, layer=3)
// ["hsl(194, 90%, 94%)", "hsl(194, 80%, 8%)"]
```

Colors work well with white (`#FFFFFF`) and black (`#000000`) backgrounds.

The goal of the library is to avoid using transparency in UI elements.

Levels are organized from the most subtle color to more vivid color (where `1` — almost background-color, `10` — the most vivd/rich color).

Level `0` returns the absolute/normalized color of a given hue, with values of saturation == 100 and lightnes == 50% for the light mode and 40% for the dark mode.

This is a part of the [rb_colorize project (see demo)](http://rockbee.com/colorize).

## Usage

### Install

```
npm i color-layer
```

NPM package: [https://www.npmjs.com/package/color-layer](https://www.npmjs.com/package/color-layer)

### Import

```
const colorLayer = require("color-layer")
```
### Examples

```
// Generate stroke color:
const getStroke = (lvl) => colorLayer.default(lvl, 9);

// Generate background color:
const getBkg = (lvl) => colorLayer. default (lvl, 3);

console.log('InProgress', getStroke(194), getBkg(194));
// "InProgress"
// ["hsl(194, 90%, 55%)", "hsl(194, 80%, 47%)"]
// ["hsl(194, 90%, 94%)", "hsl(194, 80%, 8%)"]


```


<!-- ## Layers

## Default (normalized) color -->

<!-- change version in package.json -->
<!-- npm publish -->

<!-- https://www.npmjs.com/package/color-layer -->