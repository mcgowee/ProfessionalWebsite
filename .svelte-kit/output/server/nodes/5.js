

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/chat2/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.Dxsp3Wgz.js","_app/immutable/chunks/scheduler.BPZH1ZDm.js","_app/immutable/chunks/index.BfFZuMV8.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/Spinner.B670ogGe.js"];
export const stylesheets = ["_app/immutable/assets/5.dz7NiMaw.css","_app/immutable/assets/Spinner.Foo1jJFV.css"];
export const fonts = [];
