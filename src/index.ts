/**
 * Get URL slugs from file path
 *
 * @param path A file path, should not be a relative path like `./xxx`
 * @returns URL slugs
 */
export function toSlug(path: string): string[] {
  const slashPath = path.replace(/\\/g, "/");
  const segments = slashPath.split("/").filter(Boolean);

  if (segments.length > 0) {
    const name = segments[segments.length - 1];
    const dotIdx = name.lastIndexOf(".");
    const base = dotIdx === -1 ? name : name.slice(0, dotIdx);

    if (base === "index") return segments.slice(0, -1);

    segments[segments.length - 1] = base;
  }

  return segments;
}

export function toSlugString(path: string): string {
  return toSlug(path).join("/");
}
