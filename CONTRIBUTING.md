# Contributing

Thank you for contributing to MEDHIRA JSON UI Engine.

## Development

```bash
npm install
npm run typecheck
npm run lint
npm test
npm run prepare   # build + minify (required before publish)
```

## Example app

```bash
yarn example
```

## Guidelines

- Follow conventional commits
- Add tests for behavior changes
- Update documentation (no internal APIs in user-facing docs)
- Ensure `minify.js` runs successfully after `bob build`

## Code of Conduct

See [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).
