## path-to-slug

Convert file path to slugs.

- Typescript support
- Zero dependencies

```bash
npm i path-to-slug
```

### Usages

For example:

```ts
toSlug("/path/to/file.ts");
toSlug("/path/to/index.ts");
```

Yields

```json
["path", "to", "file"]
["path", "to"]
```

### Backward Slashes

Backward slashes are also supported.

```ts
toSlug("path\\to\\file.ts");
```

> ESM Only
