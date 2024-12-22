

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/chat/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BPJO_eb6.js","_app/immutable/chunks/scheduler.BPZH1ZDm.js","_app/immutable/chunks/index.BfFZuMV8.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/Spinner.B670ogGe.js"];
export const stylesheets = ["_app/immutable/assets/4.CvtcyO1F.css","_app/immutable/assets/Spinner.Foo1jJFV.css"];
export const fonts = [];
