<script>
    import { generateText } from '../../api.js';

    let prompt = '';
    let messages = [];

    async function sendMessage() {
        if (prompt.trim()) {
            messages = [...messages, { sender: 'User', text: prompt }];
            const botResponse = await generateText(prompt);
            messages = [...messages, { sender: 'Bot', text: botResponse }];
            prompt = '';
        }
    }
</script>

<style>
    .chat-container { /* Existing styles */ }
</style>

<div class="chat-container">
    <h1>Chatbot</h1>
    <div class="messages">
        {#each messages as { sender, text }}
            <div class="message">
                <span class="{sender === 'User' ? 'user' : 'bot'}">{sender}:</span> {text}
            </div>
        {/each}
    </div>
    <input type="text" bind:value={prompt} placeholder="Type your message..." />
    <button on:click={sendMessage}>Send</button>
</div>
