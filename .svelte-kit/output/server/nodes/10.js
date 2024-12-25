

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/openai-webui/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.4QMEDaqR.js","_app/immutable/chunks/disclose-version.Dltb2gaL.js","_app/immutable/chunks/runtime.CmOnIqvM.js","_app/immutable/chunks/legacy.BBStmGgr.js"];
export const stylesheets = ["_app/immutable/assets/10.D9TJl3an.css"];
export const fonts = [];
