

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/wordle/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.CtXiYlXZ.js","_app/immutable/chunks/scheduler.CZ49yVq8.js","_app/immutable/chunks/index.9byxY5b-.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/12.D2FDdvQo.css"];
export const fonts = [];
