

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/chatapp/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.ABQjMddz.js","_app/immutable/chunks/scheduler.BPZH1ZDm.js","_app/immutable/chunks/index.BfFZuMV8.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = [];
export const fonts = [];
