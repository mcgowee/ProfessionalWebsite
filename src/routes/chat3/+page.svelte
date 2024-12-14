<script>
  import Spinner from '../../components/Spinner.svelte';
  
  let messages = [];
  let userInput = '';
  let isLoading = false;
  let selectedRoute = 'translation';  // Set the default route to 'translation'
  let selectedLanguage = 'spanish';  // Default language

  async function sendMessage() {
      if (userInput.trim()) {
          // Add user message to the chat
          messages = [...messages, { sender: 'User', text: userInput }];
          isLoading = true;

          try {
              const response = await fetch(`https://0aa9efc95e9f.ngrok.app/api/${selectedRoute}`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ text: userInput, language: selectedLanguage })
              });

              if (response.ok) {
                  const data = await response.json();
                  // Add AI response to the chat
                  messages = [...messages, { sender: 'ChatGPT', text: data.response }];
              } else {
                  // Handle response errors
                  messages = [...messages, { sender: 'ChatGPT', text: 'Failed to get a response from the server.' }];
              }
          } catch (error) {
              // Handle network errors
              messages = [...messages, { sender: 'ChatGPT', text: 'An error occurred while communicating with the server.' }];
          } finally {
              isLoading = false;
          }

          // Clear the input field
          userInput = '';
      }
  }
</script>

<main class="p-6 bg-white rounded-lg shadow-lg mt-8">
  <h2 class="text-3xl font-semibold mb-4 text-gray-800">Chat with OpenAI ChatGPT</h2>
  <div>
      <label>
          <input type="radio" name="route" value="translation" bind:group={selectedRoute} checked>
          Translation
      </label>
      <label>
          <input type="radio" name="route" value="customTranslation" bind:group={selectedRoute}>
          Custom Translation
      </label>
  </div>
  {#if selectedRoute === 'customTranslation'}
      <div>
          <label>
              <input type="radio" name="language" value="spanish" bind:group={selectedLanguage}>
              Spanish
          </label>
          <label>
              <input type="radio" name="language" value="german" bind:group={selectedLanguage}>
              German
          </label>
          <label>
              <input type="radio" name="language" value="japanese" bind:group={selectedLanguage}>
              Japanese
          </label>
      </div>
  {/if}
  <div class="mb-4 text-gray-600">
    <p><strong>This chat application is built with <a href="https://svelte.dev/" target="_blank" class="text-indigo-500 hover:underline">Svelte</a> on the frontend and <a href="https://pypi.org/project/Flask/" target="_blank" class="text-green-500 hover:underline">Flask</a> as the API backend.</strong></p>
    <p>It utilizes <strong>OpenAI's ChatGPT</strong> for generating AI responses, demonstrating advanced capabilities in natural language processing and interaction.</p>
    <p>For more detailed information about the LangChain framework and its capabilities, please refer to their <a href="https://python.langchain.com/v0.2/docs/tutorials/llm_chain/" target="_blank" class="text-blue-500 hover:underline">official documentation</a>.</p>
</div>
  <div class="chat-window border border-gray-300 p-4 h-80 overflow-y-auto mb-4 rounded-lg bg-gray-50">
      {#each messages as { sender, text }, i}
          <div class="{sender.toLowerCase()}-message mb-2">
              <strong>{sender}:</strong> {text}
          </div>
      {/each}
      {#if isLoading}
          <div class="flex justify-center items-center mt-2">
              <Spinner />
          </div>
      {/if}
  </div>
  <div class="flex">
      <input bind:value={userInput} on:keydown={(e) => e.key === 'Enter' && sendMessage()} placeholder="Type your message..." class="flex-grow p-2 border border-gray-300 rounded-lg mr-2" />
      <button on:click={sendMessage} class="p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">Send</button>
  </div>
</main>

<style lang="css">
  main {
      font-family: Arial, sans-serif;
  }
  
  .user-message {
      text-align: right;
      color: blue;
  }
  
  .chatgpt-message {
      text-align: left;
      color: green;
  }
</style>
