<script>
    import Spinner from '../../components/Spinner.svelte';
  
    let messages = [];
    let userInput = '';
    let isLoading = false;
  
    async function sendMessage() {
        if (userInput.trim()) {
            // Add user message to the chat
            messages = [...messages, { sender: 'User', text: userInput }];
            isLoading = true;
  
            try {
                const response = await fetch(`https://441fe0d3703a.ngrok.app/api/pandasai`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ text: userInput })
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
    <h2 class="text-3xl font-semibold mb-4 text-gray-800">Chat with Local LLM</h2>
    <div class="mb-4 text-gray-600">
      <p><strong>This chat application is built with <a href="https://svelte.dev/" target="_blank" class="text-indigo-500 hover:underline">Svelte</a> on the frontend and <a href="https://pypi.org/project/Flask/" target="_blank" class="text-green-500 hover:underline">Flask</a> as the API backend.</strong></p>
      <p>It utilizes a <strong>Local LLM</strong> for generating AI responses, demonstrating advanced capabilities in natural language processing and interaction.</p>
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
  