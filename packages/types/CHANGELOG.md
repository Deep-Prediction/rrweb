# @rrweb/types

## 2.0.0-alpha.21

### Patch Changes

- Bump version to move from .cjs to .js

## 2.0.0-alpha.20

### Patch Changes

- Second attempt publishing to jsdelivr for https://github.com/rrweb-io/rrweb/pull/1687

## 2.0.0-alpha.19

## 2.0.0-alpha.18

## 2.0.0-alpha.17

### Minor Changes

- [#1503](https://github.com/rrweb-io/rrweb/pull/1503) [`335639a`](https://github.com/rrweb-io/rrweb/commit/335639af9b0ce7f70eb0f38ce113d877c7325158) Thanks [@Juice10](https://github.com/Juice10)! - Support top-layer <dialog> components. Fixes #1381.

### Patch Changes

- Updated dependencies [[`40bbc25`](https://github.com/rrweb-io/rrweb/commit/40bbc25fc287badc317a53f2d3f21b1c9f2b211b), [`335639a`](https://github.com/rrweb-io/rrweb/commit/335639af9b0ce7f70eb0f38ce113d877c7325158), [`d350da8`](https://github.com/rrweb-io/rrweb/commit/d350da8552d8616dd118ee550bdfbce082986562), [`be6bf52`](https://github.com/rrweb-io/rrweb/commit/be6bf52c248c35de1b3491e3a3440ff61f876414)]:
  - rrweb-snapshot@2.0.0-alpha.17

## 2.0.0-alpha.16

### Patch Changes

- Updated dependencies [[`a2c8a1a`](https://github.com/rrweb-io/rrweb/commit/a2c8a1a37bfcf8389b280af792262c8263a979a3), [`d08624c`](https://github.com/rrweb-io/rrweb/commit/d08624cb28add386c3618a0e6607424c3f1884d8)]:
  - rrweb-snapshot@2.0.0-alpha.16

## 2.0.0-alpha.15

### Major Changes

- [#1497](https://github.com/rrweb-io/rrweb/pull/1497) [`2606a2a`](https://github.com/rrweb-io/rrweb/commit/2606a2a28f2a6d897b8ae4ea3ec40ef0eeacbfaf) Thanks [@Juice10](https://github.com/Juice10)! - Distributed files have new filenames, paths and extensions. **Important: If you reference distributed files or types directly, you might have to update your paths/filenames. E.g. you import from `rrweb/typings/...` or `rrdom/es`. However you run `import rrweb from 'rrweb'` you won't notice a difference with this change.** If you include rrweb files directly in a script tag, you might have to update that path to include a the `.umd.js` files instead. All `.js` files now use ES modules which can be used in modern browsers, node.js and bundlers that support ES modules. All npm packages now also ship `.cjs` and `.umd.js` files. The `.umd.js` files are CommonJS modules that bundle all files together to make it easy to ship one file to browser environments (similar to the previous `.js` files). The `.cjs` files are CommonJS modules that can be used in older Node.js environments. Types should be better defined in `package.json` and if you need specific types they might be exported from new packages (for example `PlayerMachineState` and `SpeedMachineState` are now exported from `@rrweb/replay`). Check the `package.json`'s `main` and `exports` field for the available files.

### Patch Changes

- Updated dependencies [[`4014305`](https://github.com/rrweb-io/rrweb/commit/40143059446cee5c042c007b1c2e976f36e172f5), [`82f6fec`](https://github.com/rrweb-io/rrweb/commit/82f6fecf36413ecbc994a510144487f1de20d1d5), [`2606a2a`](https://github.com/rrweb-io/rrweb/commit/2606a2a28f2a6d897b8ae4ea3ec40ef0eeacbfaf), [`f3cf092`](https://github.com/rrweb-io/rrweb/commit/f3cf0928df30d5ed5c0d573c524be6e744c0f8d3), [`e08706a`](https://github.com/rrweb-io/rrweb/commit/e08706ae60268b6eb05c6292ef948c71bd423ce3)]:
  - rrweb-snapshot@2.0.0-alpha.15

## 2.0.0-alpha.14

### Patch Changes

- Updated dependencies [[`03b5216`](https://github.com/rrweb-io/rrweb/commit/03b5216a9403f1509b4f69d1d71ef9874277fe91), [`46f1b25`](https://github.com/rrweb-io/rrweb/commit/46f1b252a5919c68c68e825bd6089cc2e7d34e7c), [`cbbd1e5`](https://github.com/rrweb-io/rrweb/commit/cbbd1e55f1f7fa2eed9fa11e4152b509bdfd88f7), [`5e7943d`](https://github.com/rrweb-io/rrweb/commit/5e7943dbae6e2cde76c484bdd26bc0b96f1b6dce), [`c0f83af`](https://github.com/rrweb-io/rrweb/commit/c0f83afab8f1565633de0e986b7e96fa56f2d25c), [`e96f668`](https://github.com/rrweb-io/rrweb/commit/e96f668c86bd0ab5dc190bb2957a170271bb2ebc)]:
  - rrweb-snapshot@2.0.0-alpha.14

## 2.0.0-alpha.13

### Patch Changes

- [#1432](https://github.com/rrweb-io/rrweb/pull/1432) [`123a81e`](https://github.com/rrweb-io/rrweb/commit/123a81e12d072cd95d701231176d7eb2d03b3961) Thanks [@Juice10](https://github.com/Juice10)! - Add `loop` to `mediaInteractionParam`

- [#1369](https://github.com/rrweb-io/rrweb/pull/1369) [`c278d06`](https://github.com/rrweb-io/rrweb/commit/c278d068a0e2f1175cce7cc63920ac1fbf4783cf) Thanks [@stefansundin](https://github.com/stefansundin)! - Fix type error when using `"moduleResolution": "NodeNext"`.

- Updated dependencies [[`123a81e`](https://github.com/rrweb-io/rrweb/commit/123a81e12d072cd95d701231176d7eb2d03b3961), [`f7c6973`](https://github.com/rrweb-io/rrweb/commit/f7c6973ae9c21b9ea014bdef7101f976f04d9356)]:
  - rrweb-snapshot@2.0.0-alpha.13

## 2.0.0-alpha.12

### Patch Changes

- Updated dependencies [[`58c9104`](https://github.com/rrweb-io/rrweb/commit/58c9104eddc8b7994a067a97daae5684e42f892f), [`a2be77b`](https://github.com/rrweb-io/rrweb/commit/a2be77b82826c4be0e7f3c7c9f7ee50476d5f6f8), [`a7c33f2`](https://github.com/rrweb-io/rrweb/commit/a7c33f2093c4d92faf7ae25e8bb0e088d122c13b), [`8aea5b0`](https://github.com/rrweb-io/rrweb/commit/8aea5b00a4dfe5a6f59bd2ae72bb624f45e51e81), [`314a8dd`](https://github.com/rrweb-io/rrweb/commit/314a8dde5a13095873b89d07bac7c949918bf817), [`7c0dc9d`](https://github.com/rrweb-io/rrweb/commit/7c0dc9dfe1564c9d6624557c5b394e7844955882), [`07ac5c9`](https://github.com/rrweb-io/rrweb/commit/07ac5c9e1371824ec3ffb705f9250bbe10f4b73e)]:
  - rrweb-snapshot@2.0.0-alpha.12

## 2.0.0-alpha.11

### Patch Changes

- [#1287](https://github.com/rrweb-io/rrweb/pull/1287) [`efdc167`](https://github.com/rrweb-io/rrweb/commit/efdc167ca6c039d04af83612e3d92498bb9b41a7) Thanks [@Juice10](https://github.com/Juice10)! - Upgrade all projects to typescript 4.9.5

- Updated dependencies [[`11f6567`](https://github.com/rrweb-io/rrweb/commit/11f6567fd81ef9ed0f954a7b6d5e39653f56004f), [`efdc167`](https://github.com/rrweb-io/rrweb/commit/efdc167ca6c039d04af83612e3d92498bb9b41a7), [`efdc167`](https://github.com/rrweb-io/rrweb/commit/efdc167ca6c039d04af83612e3d92498bb9b41a7)]:
  - rrweb-snapshot@2.0.0-alpha.11

## 2.0.0-alpha.10

### Patch Changes

- [#1268](https://github.com/rrweb-io/rrweb/pull/1268) [`d872d28`](https://github.com/rrweb-io/rrweb/commit/d872d2809e3ec8d6ff5d3d5f43bc81aff70e7548) Thanks [@eoghanmurray](https://github.com/eoghanmurray)! - Compact style mutation fixes and improvements

  - fixes when style updates contain a 'var()' on a shorthand property #1246
  - further ensures that style mutations are compact by reverting to string method if it is shorter

- Updated dependencies [[`c6600e7`](https://github.com/rrweb-io/rrweb/commit/c6600e742b8ec0b6295816bb5de9edcd624d975e)]:
  - rrweb-snapshot@2.0.0-alpha.10

## 2.0.0-alpha.9

### Patch Changes

- Updated dependencies [[`d7c72bf`](https://github.com/rrweb-io/rrweb/commit/d7c72bff0724b46a6fa94af455220626a27104fe)]:
  - rrweb-snapshot@2.0.0-alpha.9

## 2.0.0-alpha.8

### Minor Changes

- [#1129](https://github.com/rrweb-io/rrweb/pull/1129) [`979d2b1`](https://github.com/rrweb-io/rrweb/commit/979d2b1847a3d05e2731722952e4d6bd8be54f40) Thanks [@eoghanmurray](https://github.com/eoghanmurray)! - click events now include a `.pointerType` attribute which distinguishes between ['pen', 'mouse' and 'touch' events](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerType). There is no new PenDown/PenUp events, but these can be detected with a MouseDown/MouseUp + pointerType=pen

### Patch Changes

- Updated dependencies [[`bc84246`](https://github.com/rrweb-io/rrweb/commit/bc84246f78849a80dbb8fe9b4e76117afcc5c3f7), [`d0fdc0f`](https://github.com/rrweb-io/rrweb/commit/d0fdc0f273bb156a1faab4782b40fbec8dccf915)]:
  - rrweb-snapshot@2.0.0-alpha.8

## 2.0.0-alpha.7

### Patch Changes

- Updated dependencies [[`d2582e9`](https://github.com/rrweb-io/rrweb/commit/d2582e9a81197130cd93bc1dd778e16fddfb0be3), [`e7f0c80`](https://github.com/rrweb-io/rrweb/commit/e7f0c808c3f348fb27d1acd5fa300a5d92b14d00)]:
  - rrweb-snapshot@2.0.0-alpha.7

## 2.0.0-alpha.6

### Patch Changes

- Updated dependencies [[`c28ef5f`](https://github.com/rrweb-io/rrweb/commit/c28ef5f658abb93086504581409cf7a376db48dc), [`f6f07e9`](https://github.com/rrweb-io/rrweb/commit/f6f07e953376634a4caf28ff8cbfed5a017c4347), [`eac9b18`](https://github.com/rrweb-io/rrweb/commit/eac9b18bbfa3c350797b99b583dd93a5fc32b828), [`8e47ca1`](https://github.com/rrweb-io/rrweb/commit/8e47ca1021ebb4fc036b37623ef10abf7976d6dd)]:
  - rrweb-snapshot@2.0.0-alpha.6

## 2.0.0-alpha.5

### Patch Changes

- Updated dependencies [[`1385f7a`](https://github.com/rrweb-io/rrweb/commit/1385f7acc0052f83be1458a7b00e18c026ee393f), [`227d43a`](https://github.com/rrweb-io/rrweb/commit/227d43abb93d57cadc70c760b28c46911bf7d8ff)]:
  - rrweb-snapshot@2.0.0-alpha.5
