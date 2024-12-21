

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/openai-webui/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.BeE1RB_e.js","_app/immutable/chunks/scheduler.CZ49yVq8.js","_app/immutable/chunks/index.9byxY5b-.js"];
export const stylesheets = ["_app/immutable/assets/10.D9TJl3an.css"];
export const fonts = [];
