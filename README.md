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
| `kreat ExpressApp [appName] [description]` | `appName`, `description` | Scaffolds an Express App |

---

### `ReactComponent`

```bash
kreat ReactComponent [componentName]
```

| Flag | Description | Default |
|---|---|---|
| `--componentName` | Name of your React Component | `MyComponent` |
| `-d`, `--dir` | Scaffold the component in a specific directory | `""` |

```bash
kreat ReactComponent Button -d src/components/ui
```

---

### `ExpressModule`

```bash
kreat ExpressModule [moduleName]
```

| Flag | Description | Default |
|---|---|---|
| `--componentName` | Name of your module | `todos` |
| `-d`, `--dir` | Directory to scaffold into | `.` |

```bash
kreat ExpressModule users -d src/modules
```

---

### `ExpressApp`

```bash
kreat ExpressApp [appName] [description]
```

| Flag | Description | Default |
|---|---|---|
| `--appName` | Name of your App | `myApp` |
| `--description` | Description for your App | `""` |
| `-p`, `--prisma` | Also scaffolds Prisma files alongside the Express app | `false` |
| `-m`, `--middleware` | Also scaffolds error-handling middleware with the app | `false` |

```bash
kreat ExpressApp my-api "A small REST API" -p
kreat ExpressApp my-api "A small REST API" --prisma
kreat ExpressApp my-api "A small REST API" -m
```

---

### Global options

| Flag | Description |
|---|---|
| `--version` | Show version number |
| `--help` | Show help |

## License

MIT
