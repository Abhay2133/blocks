export function generateUUID(length = 36): string {
    const chars = Array.from({ length: 95 }, (_, i) => String.fromCharCode(32 + i)).join('');
    return Array.from({ length }).map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
}
