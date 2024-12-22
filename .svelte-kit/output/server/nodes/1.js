

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DTB3LNzQ.js","_app/immutable/chunks/scheduler.BPZH1ZDm.js","_app/immutable/chunks/index.BfFZuMV8.js","_app/immutable/chunks/entry.C8q30G7i.js"];
export const stylesheets = [];
export const fonts = [];
