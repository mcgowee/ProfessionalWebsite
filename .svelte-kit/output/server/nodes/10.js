

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/streamlit_app/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.Cwhwb-cR.js","_app/immutable/chunks/scheduler.CZ49yVq8.js","_app/immutable/chunks/index.9byxY5b-.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/Spinner.Bw0mPyUs.js"];
export const stylesheets = ["_app/immutable/assets/10.DeoVBK6N.css","_app/immutable/assets/Spinner.Foo1jJFV.css"];
export const fonts = [];
