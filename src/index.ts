export function toSlug(path: string): string[] {
  const slashPath = path.replace(/\\/g, "/");
  const segments = slashPath.split("/").filter(Boolean);

  if (segments.length > 0 && segments[segments.length - 1] === "index") {
    return segments.slice(0, -1);
  }

  return segments;
}

export function toSlugString(path: string): string {
  return toSlug(path).join("/");
}
