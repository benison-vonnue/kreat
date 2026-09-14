# Changelog

All notable changes to this project are documented in this file.

## [1.2.0] - 2026-09-14

### Added
- `ExpressApp` command — scaffolds a full Express app, including a `-p` / `--prisma` flag to also scaffold Prisma files alongside it.

### Changed
- Updated `README.md` to document the new `ExpressApp` command.

## [1.1.1] - 2026-09-11

### Fixed
- Corrected the `ExpressModule` command's description text, which had previously shown the wrong (copy-pasted) description.

### Changed
- Updated `README.md`.

## [1.1.0] - 2026-09-11

### Added
- `ExpressModule` command — scaffolds an Express module (controller, repository, router, schema, and service files).

## [1.0.0] - 2026-09-11

### Added
- Initial release: `ReactComponent` command, scaffolding a React component folder (component, CSS module, and index barrel file) from templates.
- Project scaffolding: CLI entry point, `.gitignore`, `tsconfig.json`, and base `package.json` setup.
- `repository` URL added to `package.json`.
