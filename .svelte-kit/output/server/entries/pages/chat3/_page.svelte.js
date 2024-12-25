import { x as ensure_array_like, o as stringify } from "../../../chunks/index.js";
/* empty css                                                    */
import { a as attr, e as escape_html } from "../../../chunks/attributes.js";
function _page($$payload) {
  let messages = [];
  let userInput = "";
  let selectedRoute = "translation";
  const each_array = ensure_array_like(messages);
  $$payload.out += `<main class="p-6 bg-white rounded-lg shadow-lg mt-8 svelte-1y6c8bf"><h2 class="text-3xl font-semibold mb-4 text-gray-800">Chat with OpenAI ChatGPT</h2> <div><label><input type="radio" name="route" value="translation"${attr("checked", selectedRoute === "translation", true)} checked> Translation</label> <label><input type="radio" name="route" value="customTranslation"${attr("checked", selectedRoute === "customTranslation", true)}> Custom Translation</label></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="mb-4 text-gray-600"><p><strong>This chat application is built with <a href="https://svelte.dev/" target="_blank" class="text-indigo-500 hover:underline">Svelte</a> on the frontend and <a href="https://pypi.org/project/Flask/" target="_blank" class="text-green-500 hover:underline">Flask</a> as the API backend.</strong></p> <p>It utilizes <strong>OpenAI's ChatGPT</strong> for generating AI responses, demonstrating advanced capabilities in natural language processing and interaction.</p> <p>For more detailed information about the LangChain framework and its capabilities, please refer to their <a href="https://python.langchain.com/v0.2/docs/tutorials/llm_chain/" target="_blank" class="text-blue-500 hover:underline">official documentation</a>.</p></div> <div class="chat-window border border-gray-300 p-4 h-80 overflow-y-auto mb-4 rounded-lg bg-gray-50"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let { sender, text } = each_array[i];
    $$payload.out += `<div${attr("class", `${stringify(sender.toLowerCase())}-message mb-2 svelte-1y6c8bf`)}><strong>${escape_html(sender)}:</strong> ${escape_html(text)}</div>`;
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
