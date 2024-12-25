import { x as ensure_array_like, e as pop, p as push } from "../../../chunks/index.js";
import { a as attr, e as escape_html } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  let prompt = "";
  let messages = [];
  const each_array = ensure_array_like(messages);
  $$payload.out += `<div class="chat-container svelte-7t9l2w"><h1>Chatbot</h1> <div class="messages"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { sender, text } = each_array[$$index];
    $$payload.out += `<div class="message"><span${attr("class", sender === "User" ? "user" : "bot")}>${escape_html(sender)}:</span> ${escape_html(text)}</div>`;
  }
  $$payload.out += `<!--]--></div> <input type="text"${attr("value", prompt)} placeholder="Type your message..."> <button>Send</button></div>`;
  pop();
}
export {
  _page as default
};
