export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["ChinookDB.png","favicon.png","headshot.jpg","logo.jpg","time-series-analysis.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.CEBlvwJi.js","app":"_app/immutable/entry/app.BHKZ_Mi7.js","imports":["_app/immutable/entry/start.CEBlvwJi.js","_app/immutable/chunks/entry.C-GllO0B.js","_app/immutable/chunks/runtime.CmOnIqvM.js","_app/immutable/chunks/index-client.DUM1qiWt.js","_app/immutable/entry/app.BHKZ_Mi7.js","_app/immutable/chunks/runtime.CmOnIqvM.js","_app/immutable/chunks/render.t95M__oA.js","_app/immutable/chunks/events.JOM3tMXR.js","_app/immutable/chunks/disclose-version.Dltb2gaL.js","_app/immutable/chunks/if.Dp04ebBQ.js","_app/immutable/chunks/this.DKhuD3da.js","_app/immutable/chunks/proxy.DUpg-vY2.js","_app/immutable/chunks/props.DYdnJ--s.js","_app/immutable/chunks/index-client.DUM1qiWt.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/chat2",
				pattern: /^\/chat2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/chat3",
				pattern: /^\/chat3\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/chat4",
				pattern: /^\/chat4\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/chatapp",
				pattern: /^\/chatapp\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/chat",
				pattern: /^\/chat\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/openai-webui",
				pattern: /^\/openai-webui\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/streamlit_app",
				pattern: /^\/streamlit_app\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/streamlit_llm",
				pattern: /^\/streamlit_llm\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/wordle",
				pattern: /^\/wordle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
