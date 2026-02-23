# minions-repos

**GitHub repo definitions, workflow templates, label sets, and branch protection rules**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-repos/sdk minions-sdk

# Python
pip install minions-repos

# CLI (global)
npm install -g @minions-repos/cli
```

---

## CLI

```bash
# Show help
repos --help
```

---

## Python SDK

```python
from minions_repos import create_client

client = create_client()
```

---

## Project Structure

```
minions-repos/
  packages/
    core/           # TypeScript core library (@minions-repos/sdk on npm)
    python/         # Python SDK (minions-repos on PyPI)
    cli/            # CLI tool (@minions-repos/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [repos.minions.help](https://repos.minions.help)
- Blog: [repos.minions.blog](https://repos.minions.blog)
- App: [repos.minions.wtf](https://repos.minions.wtf)

---

## License

[MIT](LICENSE)
