

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BeUquhyU.js","_app/immutable/chunks/disclose-version.Dltb2gaL.js","_app/immutable/chunks/runtime.CmOnIqvM.js","_app/immutable/chunks/legacy.BBStmGgr.js"];
export const stylesheets = [];
export const fonts = [];
