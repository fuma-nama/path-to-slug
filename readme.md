## path-to-slug

Convert file paths to slugs.

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
