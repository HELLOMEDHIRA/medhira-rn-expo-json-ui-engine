# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-05-29

### Added

- Expo SDK 56 support and compatibility matrix in documentation
- `defineUseComponent`, `registerJSONComponent`, and `clearComponentRegistry` public exports
- `JSONUI` `context` prop for `showIf` evaluation
- Async `jsonSource` (Promise-returning functions) with loading UI
- `JSONUIErrorBoundary` for safe runtime rendering
- `PagerView` component type
- List data normalization (string primitives render as `Text`)
- Example Expo app under `example/`
- CI workflow, NOTICE file, and project governance docs
- Mermaid architecture diagrams in documentation

### Fixed

- `SectionList` `renderSectionHeader` callback
- `ImageBackground` child rendering via `properties` / `children`
- `Carousel` `data` prop support
- Placeholder resolution preserves function props (e.g. `onPress`)
- Mandatory `minify.js` pipeline with explicit `terser` and `fast-glob` dependencies

### Changed

- Peer dependency: `expo >= 56.0.0`
- All `expo-*` dependencies aligned to SDK 56
- Removed unused native codegen configuration from build

[0.1.0]: https://github.com/HELLOMEDHIRA/medhira-rn-expo-json-ui-engine/releases/tag/v0.1.0
