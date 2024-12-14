import { c as create_ssr_component, h as add_attribute, l as each, k as escape } from "../../../chunks/ssr.js";
/* empty css                                                    */
const css = {
  code: "main.svelte-1y6c8bf{font-family:Arial, sans-serif}.user-message.svelte-1y6c8bf{text-align:right;color:blue}.chatgpt-message.svelte-1y6c8bf{text-align:left;color:green}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n  import Spinner from '../../components/Spinner.svelte';\\r\\n  \\r\\n  let messages = [];\\r\\n  let userInput = '';\\r\\n  let isLoading = false;\\r\\n  let selectedRoute = 'translation';  // Set the default route to 'translation'\\r\\n  let selectedLanguage = 'spanish';  // Default language\\r\\n\\r\\n  async function sendMessage() {\\r\\n      if (userInput.trim()) {\\r\\n          // Add user message to the chat\\r\\n          messages = [...messages, { sender: 'User', text: userInput }];\\r\\n          isLoading = true;\\r\\n\\r\\n          try {\\r\\n              const response = await fetch(\`https://0aa9efc95e9f.ngrok.app/api/\${selectedRoute}\`, {\\r\\n                  method: 'POST',\\r\\n                  headers: {\\r\\n                      'Content-Type': 'application/json'\\r\\n                  },\\r\\n                  body: JSON.stringify({ text: userInput, language: selectedLanguage })\\r\\n              });\\r\\n\\r\\n              if (response.ok) {\\r\\n                  const data = await response.json();\\r\\n                  // Add AI response to the chat\\r\\n                  messages = [...messages, { sender: 'ChatGPT', text: data.response }];\\r\\n              } else {\\r\\n                  // Handle response errors\\r\\n                  messages = [...messages, { sender: 'ChatGPT', text: 'Failed to get a response from the server.' }];\\r\\n              }\\r\\n          } catch (error) {\\r\\n              // Handle network errors\\r\\n              messages = [...messages, { sender: 'ChatGPT', text: 'An error occurred while communicating with the server.' }];\\r\\n          } finally {\\r\\n              isLoading = false;\\r\\n          }\\r\\n\\r\\n          // Clear the input field\\r\\n          userInput = '';\\r\\n      }\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n<main class=\\"p-6 bg-white rounded-lg shadow-lg mt-8\\">\\r\\n  <h2 class=\\"text-3xl font-semibold mb-4 text-gray-800\\">Chat with OpenAI ChatGPT</h2>\\r\\n  <div>\\r\\n      <label>\\r\\n          <input type=\\"radio\\" name=\\"route\\" value=\\"translation\\" bind:group={selectedRoute} checked>\\r\\n          Translation\\r\\n      </label>\\r\\n      <label>\\r\\n          <input type=\\"radio\\" name=\\"route\\" value=\\"customTranslation\\" bind:group={selectedRoute}>\\r\\n          Custom Translation\\r\\n      </label>\\r\\n  </div>\\r\\n  {#if selectedRoute === 'customTranslation'}\\r\\n      <div>\\r\\n          <label>\\r\\n              <input type=\\"radio\\" name=\\"language\\" value=\\"spanish\\" bind:group={selectedLanguage}>\\r\\n              Spanish\\r\\n          </label>\\r\\n          <label>\\r\\n              <input type=\\"radio\\" name=\\"language\\" value=\\"german\\" bind:group={selectedLanguage}>\\r\\n              German\\r\\n          </label>\\r\\n          <label>\\r\\n              <input type=\\"radio\\" name=\\"language\\" value=\\"japanese\\" bind:group={selectedLanguage}>\\r\\n              Japanese\\r\\n          </label>\\r\\n      </div>\\r\\n  {/if}\\r\\n  <div class=\\"mb-4 text-gray-600\\">\\r\\n    <p><strong>This chat application is built with <a href=\\"https://svelte.dev/\\" target=\\"_blank\\" class=\\"text-indigo-500 hover:underline\\">Svelte</a> on the frontend and <a href=\\"https://pypi.org/project/Flask/\\" target=\\"_blank\\" class=\\"text-green-500 hover:underline\\">Flask</a> as the API backend.</strong></p>\\r\\n    <p>It utilizes <strong>OpenAI's ChatGPT</strong> for generating AI responses, demonstrating advanced capabilities in natural language processing and interaction.</p>\\r\\n    <p>For more detailed information about the LangChain framework and its capabilities, please refer to their <a href=\\"https://python.langchain.com/v0.2/docs/tutorials/llm_chain/\\" target=\\"_blank\\" class=\\"text-blue-500 hover:underline\\">official documentation</a>.</p>\\r\\n</div>\\r\\n  <div class=\\"chat-window border border-gray-300 p-4 h-80 overflow-y-auto mb-4 rounded-lg bg-gray-50\\">\\r\\n      {#each messages as { sender, text }, i}\\r\\n          <div class=\\"{sender.toLowerCase()}-message mb-2\\">\\r\\n              <strong>{sender}:</strong> {text}\\r\\n          </div>\\r\\n      {/each}\\r\\n      {#if isLoading}\\r\\n          <div class=\\"flex justify-center items-center mt-2\\">\\r\\n              <Spinner />\\r\\n          </div>\\r\\n      {/if}\\r\\n  </div>\\r\\n  <div class=\\"flex\\">\\r\\n      <input bind:value={userInput} on:keydown={(e) => e.key === 'Enter' && sendMessage()} placeholder=\\"Type your message...\\" class=\\"flex-grow p-2 border border-gray-300 rounded-lg mr-2\\" />\\r\\n      <button on:click={sendMessage} class=\\"p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600\\">Send</button>\\r\\n  </div>\\r\\n</main>\\r\\n\\r\\n<style lang=\\"css\\">\\r\\n  main {\\r\\n      font-family: Arial, sans-serif;\\r\\n  }\\r\\n  \\r\\n  .user-message {\\r\\n      text-align: right;\\r\\n      color: blue;\\r\\n  }\\r\\n  \\r\\n  .chatgpt-message {\\r\\n      text-align: left;\\r\\n      color: green;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAiGE,mBAAK,CACD,WAAW,CAAE,KAAK,CAAC,CAAC,UACxB,CAEA,4BAAc,CACV,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,IACX,CAEA,+BAAiB,CACb,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,KACX"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let messages = [];
  let userInput = "";
  $$result.css.add(css);
  return `<main class="p-6 bg-white rounded-lg shadow-lg mt-8 svelte-1y6c8bf"><h2 class="text-3xl font-semibold mb-4 text-gray-800" data-svelte-h="svelte-lkjrda">Chat with OpenAI ChatGPT</h2> <div><label><input type="radio" name="route" value="translation" checked${add_attribute("checked", true, 1)}>
          Translation</label> <label><input type="radio" name="route" value="customTranslation"${""}>
          Custom Translation</label></div> ${``} <div class="mb-4 text-gray-600" data-svelte-h="svelte-922yl8"><p><strong>This chat application is built with <a href="https://svelte.dev/" target="_blank" class="text-indigo-500 hover:underline">Svelte</a> on the frontend and <a href="https://pypi.org/project/Flask/" target="_blank" class="text-green-500 hover:underline">Flask</a> as the API backend.</strong></p> <p>It utilizes <strong>OpenAI&#39;s ChatGPT</strong> for generating AI responses, demonstrating advanced capabilities in natural language processing and interaction.</p> <p>For more detailed information about the LangChain framework and its capabilities, please refer to their <a href="https://python.langchain.com/v0.2/docs/tutorials/llm_chain/" target="_blank" class="text-blue-500 hover:underline">official documentation</a>.</p></div> <div class="chat-window border border-gray-300 p-4 h-80 overflow-y-auto mb-4 rounded-lg bg-gray-50">${each(messages, ({ sender, text }, i) => {
    return `<div class="${escape(sender.toLowerCase(), true) + "-message mb-2 svelte-1y6c8bf"}"><strong>${escape(sender)}:</strong> ${escape(text)} </div>`;
  })} ${``}</div> <div class="flex"><input placeholder="Type your message..." class="flex-grow p-2 border border-gray-300 rounded-lg mr-2"${add_attribute("value", userInput, 0)}> <button class="p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600" data-svelte-h="svelte-1uccyc0">Send</button></div> </main>`;
});
export {
  Page as default
};
