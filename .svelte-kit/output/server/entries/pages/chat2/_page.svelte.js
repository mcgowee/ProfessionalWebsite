import { x as ensure_array_like, o as stringify } from "../../../chunks/index.js";
/* empty css                                                    */
import { a as attr, e as escape_html } from "../../../chunks/attributes.js";
function _page($$payload) {
  let messages = [];
  let userInput = "";
  const each_array = ensure_array_like(messages);
  $$payload.out += `<main class="p-6 bg-white rounded-lg shadow-lg mt-8 svelte-18ehueg"><h2 class="text-3xl font-semibold mb-4 text-gray-800">SQL QA Chat</h2> <p class="mb-4 text-gray-600"><strong>This chat uses <span class="text-indigo-500">Svelte</span> on the front end and <span class="text-green-500">Flask</span> as the API backend.</strong> It leverages <strong>OpenAI's GPT-3.5</strong> for AI responses to SQL queries. <span class="text-red-500 font-bold">This is an initial prototype.</span> The system is designed to interpret natural language questions, translate them into SQL queries, and execute them against a database to provide meaningful answers.</p> <div class="mb-4 text-gray-600"><p><strong>Summary of the Chinook Database:</strong></p> <p>The Chinook database is a sample database representing a digital media store. It includes tables for artists, albums, media tracks, invoices, and customers, among others. This makes it an excellent resource for practicing SQL queries and learning database management. The schema includes relationships between these tables, such as artists to albums and invoices to customers.</p> <p>For more detailed information, please refer to the <a href="https://www.sqlitetutorial.net/sqlite-sample-database/" target="_blank" class="text-blue-500 hover:underline">SQLite Tutorial</a>.</p> <img src="/src/assets/ChinookDB.png" alt="Chinook Database Schema" class="w-1/3 mt-4"></div> <div class="mb-4"><button class="mr-2 p-2 bg-gray-200 rounded-lg hover:bg-gray-300">What are the genres?</button> <button class="mr-2 p-2 bg-gray-200 rounded-lg hover:bg-gray-300">List the top ten artists with the most albums and add a count.</button> <button class="mr-2 p-2 bg-gray-200 rounded-lg hover:bg-gray-300">Show me all albums by Led Zeppelin.</button> <button class="mr-2 p-2 bg-gray-200 rounded-lg hover:bg-gray-300">What is the average invoice total?</button></div> <div class="chat-window border border-gray-300 p-4 h-80 overflow-y-auto mb-4 rounded-lg bg-gray-50"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let { sender, text } = each_array[i];
    $$payload.out += `<div${attr("class", `${stringify(sender.toLowerCase())}-message mb-2 svelte-18ehueg`)}><strong>${escape_html(sender)}:</strong> ${escape_html(text)}</div>`;
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="flex"><input${attr("value", userInput)} placeholder="Type your SQL question..." class="flex-grow p-2 border border-gray-300 rounded-lg mr-2"> <button class="p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">Send</button></div></main>`;
}
export {
  _page as default
};
