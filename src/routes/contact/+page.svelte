<!-- src/routes/contact/+page.svelte -->


<script>
  import Spinner from '../../components/Spinner.svelte';

  let name = '';
  let email = '';
  let message = '';
  let statusMessage = '';
  let statusClass = '';
  let isLoading = false;

  async function handleSubmit() {
      isLoading = true;
      statusMessage = '';
      try {
          const response = await fetch('http://127.0.0.1:5000/send-email', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ name, email, message })
          });

          if (response.ok) {
              statusMessage = 'Email sent successfully!';
              statusClass = 'success';
              // Reset the form
              name = '';
              email = '';
              message = '';
          } else {
              statusMessage = 'Failed to send email. Please try again later.';
              statusClass = 'error';
          }
      } catch (error) {
          console.error('Failed to send email:', error);
          statusMessage = 'An error occurred while sending the email. Please try again later.';
          statusClass = 'error';
      } finally {
          isLoading = false;
      }
  }
</script>

<main class="p-4 font-sans">
  {#if statusMessage}
      <div class="p-4 mt-4" class:success={statusClass === 'success'} class:error={statusClass === 'error'}>
          <span class="font-medium">{statusMessage}</span>
      </div>
  {/if}
  <h2 class="text-2xl text-primary mb-4">Contact Earl Leonard McGowen
    {#if isLoading}
    <Spinner class="ml-4"/>
    {/if}
  </h2>
  <section class="contact mt-8">
      <h3 class="text-xl text-primary mb-4">Contact Form</h3>
      <div class="p-6 bg-white rounded-lg shadow-md">
          <form on:submit|preventDefault={handleSubmit} class="space-y-4">
              <div class="flex flex-col">
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name:</label>
                  <input type="text" id="name" bind:value={name} required class="block w-full border border-gray-300 rounded-md p-2">
              </div>
              <div class="flex flex-col">
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email:</label>
                  <input type="email" id="email" bind:value={email} required class="block w-full border border-gray-300 rounded-md p-2">
              </div>
              <div class="flex flex-col">
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message:</label>
                  <textarea id="message" bind:value={message} required class="block w-full border border-gray-300 rounded-md p-2"></textarea>
              </div>
              <div class="flex items-center">
                  <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700" disabled={isLoading}>Send</button>
              </div>
          </form>
      </div>
      <div class="social-links mt-8">
          <h4 class="text-lg mb-4">Follow Me</h4>
          <ul class="list-none p-0">
            <li class="mb-2">
              <a href="https://twitter.com/your-twitter-handle" target="_blank" class="text-blue-500 hover:underline flex items-center">
                <i class="fa-brands fa-twitter mr-2"></i> Twitter
              </a>
            </li>
            <li class="mb-2">
              <a href="https://www.facebook.com/earlmcgowen/" target="_blank" class="text-blue-500 hover:underline flex items-center">
                <i class="fa-brands fa-facebook-f mr-2"></i> Facebook
              </a>
            </li>
            <li class="mb-2">
              <a href="https://www.linkedin.com/in/earl-l-mcgowen-b510884/" target="_blank" class="text-blue-500 hover:underline flex items-center">
                <i class="fa-brands fa-linkedin-in mr-2"></i> LinkedIn
              </a>
            </li>
            <li class="mb-2">
              <a href="http://earlmcgowen.info/" target="_blank" class="text-blue-500 hover:underline flex items-center">
                <i class="fa-solid fa-globe mr-2"></i> Legacy Site
              </a>
            </li>
            <li class="mb-2">
              <a href="https://www.youtube.com/channel/UC-y8DJUix0fjtnLSe5_8bnA" target="_blank" class="text-blue-500 hover:underline flex items-center">
                <i class="fa-brands fa-youtube mr-2"></i> YouTube
              </a>
            </li>
          </ul>
        </div>
  </section>
</main>

<style>
  .success {
      background-color: #d4edda;
      color: #155724;
  }
  .error {
      background-color: #f8d7da;
      color: #721c24;
  }
</style>
