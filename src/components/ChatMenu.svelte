<script lang="ts">
    import { onMount } from 'svelte';
  
    let isOpen = false;
  
    const toggleDropdown = () => {
      isOpen = !isOpen;
    };
  
    const closeDropdown = () => {
      isOpen = false;
    };
  </script>
  
  <style>
    .dropdown-menu {
      display: none;
      position: absolute;
      background-color: white;
      border: 1px solid #ddd;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      z-index: 10;
      width: 300px;
    }
  
    .dropdown-menu.open {
      display: block;
    }
  
    .dropdown-item {
      padding: 8px 16px;
      cursor: pointer;
      text-decoration: none;
      color: black;
      display: block;
    }
  
    .dropdown-item:hover {
      background-color: #f5f5f5;
    }
  </style>
  
  <div on:mouseenter={toggleDropdown} on:mouseleave={closeDropdown} role="menu" tabindex="0">
    <button class="text-white hover:text-indigo-400" on:click={toggleDropdown}>
    Simple Chats
    </button>
    <div class:dropdown-menu={true} class:open={isOpen}>
       <a href="/chat" class="dropdown-item" role="menuitem">
        Simple Chat
        <span class="text-gray-500 block">Local LLM using Ollama and Llama3 for AI responses.</span>
       </a>
       <a href="/chat3" class="dropdown-item" role="menuitem">
        OpenAI's ChatGPT
        <span class="text-gray-500 block">OpenAI's ChatGPT Responses Using Simple Prompts and Prompt Templates</span>
      </a>
      <a href="/chat2" class="dropdown-item" role="menuitem">
        SQL QA Chat
        <span class="text-gray-500 block">Using ChatGPT API to Query Local Database</span>
      </a>
      <a href="/chat4" class="dropdown-item" role="menuitem">
        SQL AI Agent
        <span class="text-gray-500 block">OpenAI's ChatGPT Using an Agent Created by SakuraAI</span>
      </a>
      <a href="/streamlit_app" class="dropdown-item" role="menuitem">
        ChatGPT with PandasAI
        <span class="text-gray-500 block">Using Python to Query ChatGPT API</span>
    </div>
  </div>
  