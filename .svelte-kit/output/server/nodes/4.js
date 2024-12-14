

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/chat/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.D-v90rnK.js","_app/immutable/chunks/scheduler.CZ49yVq8.js","_app/immutable/chunks/index.9byxY5b-.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/Spinner.Bw0mPyUs.js"];
export const stylesheets = ["_app/immutable/assets/4.CvtcyO1F.css","_app/immutable/assets/Spinner.Foo1jJFV.css"];
export const fonts = [];
