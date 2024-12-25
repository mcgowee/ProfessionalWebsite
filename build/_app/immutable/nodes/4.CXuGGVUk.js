import{a as u,t as h}from"../chunks/disclose-version.Dltb2gaL.js";import"../chunks/legacy.BBStmGgr.js";import{ar as d,as as o,o as t,$ as r,at as b,au as i,av as Q,ap as q}from"../chunks/runtime.CmOnIqvM.js";import{s as w}from"../chunks/render.t95M__oA.js";import{i as E}from"../chunks/if.Dp04ebBQ.js";import{e as F,i as G}from"../chunks/each.D6RxEqG5.js";import{r as P,s as R}from"../chunks/class.C-r-XYq8.js";import{e as A}from"../chunks/events.JOM3tMXR.js";import{b as $}from"../chunks/input.qspI9FlA.js";import{S as z}from"../chunks/Spinner.tCnoGM9Z.js";var J=h("<div><strong> </strong> </div>"),M=h('<div class="flex justify-center items-center mt-2"><!></div>'),N=h(`<main class="p-6 bg-white rounded-lg shadow-lg mt-8 svelte-obi4o8"><h2 class="text-3xl font-semibold mb-4 text-gray-800">Chat with Earl</h2> <p class="mb-4 text-gray-600"><strong>This is a simple chat using <span class="text-indigo-500">Svelte</span> on the front end and <span class="text-green-500">Flask</span> as an API AI agent on the backend.</strong> It utilizes <strong>Ollama</strong> and <strong>Llama3</strong> for AI responses. <span class="text-red-500 font-bold">This is an initial prototype.</span> A <span class="text-blue-500 font-bold">Retrieval-Augmented Generation (RAG)</span> backend with data retrieved from my social media, documents, and other sources 
    is being created <span class="text-yellow-500">(In Construction)</span>. Additionally, a <span class="text-purple-500 font-bold">SQL AI agent</span> is being developed that can query databases and return analytics based on <span class="text-orange-500 font-bold">SQL Question and Answer AI Chaining</span>.</p> <div class="chat-window border border-gray-300 p-4 h-80 overflow-y-auto mb-4 rounded-lg bg-gray-50"><!> <!></div> <div class="flex"><input placeholder="Type your message..." class="flex-grow p-2 border border-gray-300 rounded-lg mr-2"> <button class="p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">Send</button></div></main>`);function ee(I){let a=b([]),n=b(""),m=b(!1);async function x(){if(t(n).trim()){r(a,[...t(a),{sender:"User",text:t(n)}]),r(m,!0);try{const e=await fetch("https://0aa9efc95e9f.ngrok.app/modify_text",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:t(n)})});if(e.ok){const s=await e.json();r(a,[...t(a),{sender:"AI",text:s.modified_text}])}else r(a,[...t(a),{sender:"AI",text:"Failed to get a response from the server."}])}catch{r(a,[...t(a),{sender:"AI",text:"An error occurred while communicating with the server."}])}finally{r(m,!1)}r(n,"")}}var g=N(),v=d(o(g),4),y=o(v);F(y,1,()=>t(a),G,(e,s)=>{let p=()=>t(s).sender,L=()=>t(s).text;var c=J();const T=q(()=>`${p().toLowerCase()??""}-message mb-2 svelte-obi4o8`);var f=o(c),j=o(f);i(f);var O=d(f);i(c),Q(()=>{R(c,t(T)),w(j,`${p()??""}:`),w(O,` ${L()??""}`)}),u(e,c)});var k=d(y,2);{var S=e=>{var s=M(),p=o(s);z(p),i(s),u(e,s)};E(k,e=>{t(m)&&e(S)})}i(v);var _=d(v,2),l=o(_);P(l);var C=d(l,2);i(_),i(g),$(l,()=>t(n),e=>r(n,e)),A("keydown",l,e=>e.key==="Enter"&&x()),A("click",C,x),u(I,g)}export{ee as component};