# Changelog

All notable changes to this project are documented in this file.

## [1.2.5] - 2026-09-14

### Fixed
- Fixed `kreat` failing with a "Permission denied" error when run directly via `npx` without installing.

## [1.2.4] - 2026-09-14

### Added
- `-m` / `--middleware` flag for `ExpressApp` — scaffolds error-handling middleware alongside the app.
- `ExpressApp` now also scaffolds a `.gitignore` and `swagger.ts` file.
- Prisma scaffolding now includes a `prisma7.config.json` file.

### Changed
- Updated `README.md` and `CHANGELOG.md`.

## [1.2.3] - 2026-09-14

### Fixed
- `ExpressApp` now creates the app inside a directory named after `appName`, instead of scaffolding into the current directory.

## [1.2.2] - 2026-09-14

### Fixed
- Removed `src/lib/prisma.ts`, which had been added unintentionally in the previous release.

## [1.2.1] - 2026-09-14

### Added
- Descriptions and help text for all commands (`ExpressApp`, `ExpressModule`, `ReactComponent`).

### Changed
- Updated `README.md` to document the new command descriptions/help text.

## [1.2.0] - 2026-09-14

### Added
- `ExpressApp` command — scaffolds a full Express app, including a `-p` / `--prisma` flag to also scaffold Prisma files alongside it.
- `CHANGELOG.md` added to the project.

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
