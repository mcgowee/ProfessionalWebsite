import { x as ensure_array_like, o as stringify } from "../../../chunks/index.js";
/* empty css                                                    */
import { a as attr, e as escape_html } from "../../../chunks/attributes.js";
function _page($$payload) {
  let messages = [];
  let userInput = "";
  const each_array = ensure_array_like(messages);
  $$payload.out += `<main class="p-6 bg-white rounded-lg shadow-lg mt-8 svelte-obi4o8"><h2 class="text-3xl font-semibold mb-4 text-gray-800">Chat with Earl</h2> <p class="mb-4 text-gray-600"><strong>This is a simple chat using <span class="text-indigo-500">Svelte</span> on the front end and <span class="text-green-500">Flask</span> as an API AI agent on the backend.</strong> It utilizes <strong>Ollama</strong> and <strong>Llama3</strong> for AI responses. <span class="text-red-500 font-bold">This is an initial prototype.</span> A <span class="text-blue-500 font-bold">Retrieval-Augmented Generation (RAG)</span> backend with data retrieved from my social media, documents, and other sources 
    is being created <span class="text-yellow-500">(In Construction)</span>. Additionally, a <span class="text-purple-500 font-bold">SQL AI agent</span> is being developed that can query databases and return analytics based on <span class="text-orange-500 font-bold">SQL Question and Answer AI Chaining</span>.</p> <div class="chat-window border border-gray-300 p-4 h-80 overflow-y-auto mb-4 rounded-lg bg-gray-50"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let { sender, text } = each_array[i];
    $$payload.out += `<div${attr("class", `${stringify(sender.toLowerCase())}-message mb-2 svelte-obi4o8`)}><strong>${escape_html(sender)}:</strong> ${escape_html(text)}</div>`;
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="flex"><input${attr("value", userInput)} placeholder="Type your message..." class="flex-grow p-2 border border-gray-300 rounded-lg mr-2"> <button class="p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">Send</button></div></main>`;
}
export {
  _page as default
};
