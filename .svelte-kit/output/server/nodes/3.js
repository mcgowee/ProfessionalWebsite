

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.kd87xc4p.js","_app/immutable/chunks/disclose-version.DK7D1_5h.js","_app/immutable/chunks/runtime.CmOnIqvM.js","_app/immutable/chunks/legacy.BBStmGgr.js"];
export const stylesheets = [];
export const fonts = [];
