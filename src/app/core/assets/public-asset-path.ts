export function toPublicAssetPath(path: string): string {
  if (!path.startsWith('/') || /^[a-z][a-z\d+.-]*:/i.test(path)) {
    return path;
  }

  return path.slice(1);
}
