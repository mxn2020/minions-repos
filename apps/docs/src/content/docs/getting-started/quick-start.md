---
title: Quick Start
description: Get up and running with Minions Repos in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-repos/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_repos import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
repos info
```
