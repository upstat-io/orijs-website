/** Derive a display title from a content entry id when frontmatter is missing */
export function formatTitle(id: string): string {
  return id
    .replace(/^\d+-/, '')    // strip numeric prefix
    .replace(/-/g, ' ')      // kebab to spaces
    .replace(/\b\w/g, c => c.toUpperCase()) // title case
    .replace(/\bApi\b/g, 'API')
    .replace(/\bNestjs\b/g, 'NestJS')
    .replace(/\bWebsockets?\b/g, 'WebSockets')
    .replace(/\bBullmq\b/g, 'BullMQ');
}

/** Derive sort order from numeric filename prefix, fallback to 999 */
export function getOrder(id: string): number {
  const match = id.match(/^(\d+)/);
  return match ? parseInt(match[1], 10) : 999;
}

/** Get title from entry data or derive from id */
export function entryTitle(entry: { id: string; data: { title?: string } }): string {
  return entry.data.title || formatTitle(entry.id);
}

/** Get order from entry data or derive from id */
export function entryOrder(entry: { id: string; data: { order?: number } }): number {
  return entry.data.order ?? getOrder(entry.id);
}
