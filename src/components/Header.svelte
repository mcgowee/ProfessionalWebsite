<script lang="ts">
  import Menu from '@smui/menu';
  import List, { Item, Separator, Text } from '@smui/list';
  import Button, { Label } from '@smui/button';
  import ChatMenu from './ChatMenu.svelte';

  let menu: Menu;
  let clicked = 'nothing yet';
</script>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;
  }

  .logo {
    height: 50px; /* Adjust size as needed */
    margin-right: 1rem;
  }
</style>

<div class="header mt-8 ml-4">
  <div class="flex items-center">
    <a href="/">
      <img src="/src/assets/logo.jpg" alt="Logo" class="h-24 w-24 mr-4" />
   </a>
    <div>
      <a href="/">
        <h1 class="font-semibold text-5xl mt-4">
          Sakura<span class="text-rose-400">AI</span>
        </h1>
      </a>
      <h2 class="font-medium text-lg text-gray-500">
        An Earl McGowen Company
      </h2>
    </div>
  </div>
  <div class="hidden lg:flex space-x-4">
    <a href="https://twitter.com/your-twitter-handle" target="_blank" class="text-blue-500 hover:text-blue-700">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="https://www.facebook.com/earlmcgowen/" target="_blank" class="text-blue-500 hover:text-blue-700">
      <i class="fab fa-facebook-f"></i>
    </a>
    <a href="https://www.linkedin.com/in/earl-l-mcgowen-b510884/" target="_blank" class="text-blue-500 hover:text-blue-700">
      <i class="fab fa-linkedin-in"></i>
    </a>
    <a href="http://earlmcgowen.info/" target="_blank" class="text-blue-500 hover:text-blue-700">
      <i class="fas fa-globe"></i>
    </a>
    <a href="https://www.youtube.com/channel/UC-y8DJUix0fjtnLSe5_8bnA" target="_blank" class="text-blue-500 hover:text-blue-700">
      <i class="fab fa-youtube"></i>
    </a>
  </div>
  <div class="lg:hidden relative">
    <Button style="min-width: 100px;" on:click={() => menu.setOpen}>
      <i class="fas fa-bars"></i>
    </Button>
    <Menu bind:this={menu}>
      <List>
        <Item>
          <a href="https://twitter.com/your-twitter-handle" target="_blank" class="block px-4 py-2 text-blue-500 hover:bg-gray-100 hover:text-blue-700">Twitter</a>
        </Item>
        <Item>
          <a href="https://www.facebook.com/earlmcgowen/" target="_blank" class="block px-4 py-2 text-blue-500 hover:bg-gray-100 hover:text-blue-700">Facebook</a>
        </Item>
        <Item>
          <a href="https://www.linkedin.com/in/earl-l-mcgowen-b510884/" target="_blank" class="block px-4 py-2 text-blue-500 hover:bg-gray-100 hover:text-blue-700">LinkedIn</a>
        </Item>
        <Item>
          <a href="http://earlmcgowen.info/" target="_blank" class="block px-4 py-2 text-blue-500 hover:bg-gray-100 hover:text-blue-700">Legacy Site</a>
        </Item>
        <Item>
          <a href="https://www.youtube.com/channel/UC-y8DJUix0fjtnLSe5_8bnA" target="_blank" class="block px-4 py-2 text-blue-500 hover:bg-gray-100 hover:text-blue-700">YouTube</a>
        </Item>
      </List>
    </Menu>
  </div>
</div>

<nav class="bg-gray-800 p-4 rounded-lg mt-4">
  <ul class="flex space-x-4">
    <li><a href="/" class="text-white hover:text-indigo-400">Home</a></li>
    <li><a href="/about" class="text-white hover:text-indigo-400">About</a></li>
    <li><a href="/contact" class="text-white hover:text-indigo-400">Contact</a></li>
    <li class="relative">
      <ChatMenu />
    </li>
    <li><a href="/openai-webui" class="text-white hover:text-indigo-400">OpenAI WebUI</a></li>
    <li><a href="/streamlit_llm" class="text-white hover:text-indigo-400">Streamlit LLM</a></li>
  </ul>
</nav>
