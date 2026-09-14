# kreat

A CLI scaffolding tool for generating project boilerplate — React components, Express modules, and full Express apps — from a single command.

## Install

```bash
npm install -g @nosineb/kreat
```

Or run without installing, via `npx`:

```bash
npx @nosineb/kreat <cmd> [args]
```

## Usage

```bash
kreat <cmd> [args]
```

Running `kreat` with no command shows the command list and prompts:

```
Enter scaffold type and name
```

### Commands

| Command | Arguments | Description |
|---|---|---|
| `kreat ReactComponent [componentName]` | `componentName` | Scaffolds a React component folder |
| `kreat ExpressModule [moduleName]` | `moduleName` | Scaffolds an Express module |
| `kreat ExpressApp [appName] [description]` | `appName`, `description` | Scaffolds an Express app |

Examples:

```bash
kreat ReactComponent Button
kreat ExpressModule users
kreat ExpressApp my-api "A small REST API"
```

### `ExpressApp` flags

| Flag | Description |
|---|---|
| `-p`, `--prisma` | Also scaffolds Prisma files alongside the Express app |

```bash
kreat ExpressApp my-api "A small REST API" -p
kreat ExpressApp my-api "A small REST API" --prisma
```

### Options

| Flag | Description |
|---|---|
| `--version` | Show version number |
| `--help` | Show help |

## License

MIT
