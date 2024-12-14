<script>
    import Spinner from '../../components/Spinner.svelte';

    let messages = [];
    let userInput = '';
    let isLoading = false;
    let queries = [];

    async function sendMessage() {
        if (userInput.trim()) {
            // Add user message to the chat
            messages = [...messages, { sender: 'User', text: userInput }];
            isLoading = true;

            try {
                // Make the POST request to the Flask API
                const response = await fetch('https://0aa9efc95e9f.ngrok.app/api/chatbot_query', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ question: userInput })
                });

                if (response.ok) {
                    const data = await response.json();
                    // Add AI response to the chat
                    messages = [...messages, { sender: 'AI', text: data.response }];
                    queries = data.queries;
                } else {
                    // Handle response errors
                    messages = [...messages, { sender: 'AI', text: 'Failed to get a response from the server.' }];
                }
            } catch (error) {
                // Handle network errors
                messages = [...messages, { sender: 'AI', text: 'An error occurred while communicating with the server.' }];
            } finally {
                isLoading = false;
            }


            // Clear the input field
            userInput = '';
        }
    }

    function setSampleQuestion(question) {
        userInput = question;
    }
</script>

<main class="p-6 bg-white rounded-lg shadow-lg mt-8">
    <h2 class="text-3xl font-semibold mb-4 text-gray-800">SQL Query Chatbot</h2>
    <p class="mb-4 text-gray-600">
        <strong>This is a simple chat using <span class="text-indigo-500">Svelte</span> on the front end and <span class="text-green-500">Flask</span> as an API AI agent on the backend.</strong>
        It utilizes <strong>Ollama</strong> and <strong>Llama3</strong> for AI responses. 
        <span class="text-red-500 font-bold">This is an initial prototype.</span> A <span class="text-blue-500 font-bold">Retrieval-Augmented Generation (RAG)</span> backend with data retrieved from my social media, documents, and other sources 
        is being created <span class="text-yellow-500">(In Construction)</span>. Additionally, a <span class="text-purple-500 font-bold">SQL AI agent</span> is being developed that can query databases and return analytics based on <span class="text-orange-500 font-bold">SQL Question and Answer AI Chaining</span>.
      </p>
      <div class="mb-4 text-gray-600">
        <p><strong>Summary of the Chinook Database:</strong></p>
        <p>The Chinook database is a sample database representing a digital media store. It includes tables for artists, albums, media tracks, invoices, and customers, among others. This makes it an excellent resource for practicing SQL queries and learning database management. The schema includes relationships between these tables, such as artists to albums and invoices to customers.</p>
        <p>For more detailed information, please refer to the <a href="https://www.sqlitetutorial.net/sqlite-sample-database/" target="_blank" class="text-blue-500 hover:underline">SQLite Tutorial</a>.</p>
        <img src="/src/assets/ChinookDB.png" alt="Chinook Database Schema" class="w-1/3 mt-4"/>
      </div>
      <div class="mb-4">
        <button on:click={() => setSampleQuestion("What are the genres?")} class="mr-2 p-2 bg-gray-200 rounded-lg hover:bg-gray-300">What are the genres?</button>
        <button on:click={() => setSampleQuestion("List the top ten artists with the most albums and add a count.")} class="mr-2 p-2 bg-gray-200 rounded-lg hover:bg-gray-300">List the top ten artists with the most albums and add a count.</button>
        <button on:click={() => setSampleQuestion("Show me all albums by Led Zeppelin.")} class="mr-2 p-2 bg-gray-200 rounded-lg hover:bg-gray-300">Show me all albums by Led Zeppelin.</button>
        <button on:click={() => setSampleQuestion("What is the average invoice total?")} class="mr-2 p-2 bg-gray-200 rounded-lg hover:bg-gray-300">What is the average invoice total?</button>
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
        <input bind:value={userInput} on:keydown={(e) => e.key === 'Enter' && sendMessage()} placeholder="Type your SQL question..." class="flex-grow p-2 border border-gray-300 rounded-lg mr-2" />
        <button on:click={sendMessage} class="p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">Send</button>
    </div>

    {#if queries.length > 0}
        <div class="mt-4">
            <h3 class="text-2xl font-semibold text-gray-800">Generated SQL Queries</h3>
            <ul class="list-disc pl-6 mt-2">
                {#each queries as query}
                    <li><strong>Function:</strong> {query.function} <br> <strong>Query:</strong> {query.query}</li>
                {/each}
            </ul>
        </div>
    {/if}
</main>

<style lang="css">
    main {
        font-family: Arial, sans-serif;
    }
    
    .user-message {
        text-align: right;
        color: blue;
    }
    
    .ai-message {
        text-align: left;
        color: green;
    }
</style>
