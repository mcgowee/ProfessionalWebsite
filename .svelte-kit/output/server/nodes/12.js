

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/streamlit_llm/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.DZOwR8Z_.js","_app/immutable/chunks/scheduler.CZ49yVq8.js","_app/immutable/chunks/index.9byxY5b-.js"];
export const stylesheets = ["_app/immutable/assets/12.BUe_d9u1.css"];
export const fonts = [];
