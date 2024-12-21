import { c as create_ssr_component, l as each, h as add_attribute, k as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let prompt = "";
  let messages = [];
  return `<div class="chat-container svelte-7t9l2w"><h1 data-svelte-h="svelte-1fubonr">Chatbot</h1> <div class="messages">${each(messages, ({ sender, text }) => {
    return `<div class="message"><span${add_attribute("class", sender === "User" ? "user" : "bot", 0)}>${escape(sender)}:</span> ${escape(text)} </div>`;
  })}</div> <input type="text" placeholder="Type your message..."${add_attribute("value", prompt, 0)}> <button data-svelte-h="svelte-93q973">Send</button></div>`;
});
export {
  Page as default
};
