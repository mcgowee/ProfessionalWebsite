

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/openai-webui/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.DRW_HRwa.js","_app/immutable/chunks/scheduler.CZ49yVq8.js","_app/immutable/chunks/index.9byxY5b-.js"];
export const stylesheets = ["_app/immutable/assets/9.D9TJl3an.css"];
export const fonts = [];
