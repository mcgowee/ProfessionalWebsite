

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/wordle/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.DyKHH4iU.js","_app/immutable/chunks/scheduler.CZ49yVq8.js","_app/immutable/chunks/index.9byxY5b-.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/13.D2FDdvQo.css"];
export const fonts = [];
