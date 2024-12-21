

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.60LeVC29.js","_app/immutable/chunks/scheduler.CZ49yVq8.js","_app/immutable/chunks/index.9byxY5b-.js","_app/immutable/chunks/entry.CLuGZ_Wo.js"];
export const stylesheets = [];
export const fonts = [];
