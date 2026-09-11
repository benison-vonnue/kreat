# kreat

A CLI scaffolding tool for generating project boilerplate — React components and Express modules — from a single command.

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

| Command | Argument | Description |
|---|---|---|
| `kreat ReactComponent [componentName]` | `componentName` | Scaffolds a React component folder |
| `kreat ExpressModule [moduleName]` | `moduleName` | Scaffolds an Express module |

Example:

```bash
kreat ReactComponent Button
kreat ExpressModule users
```

### Options

| Flag | Description |
|---|---|
| `--version` | Show version number |
| `--help` | Show help |

## License

MIT
