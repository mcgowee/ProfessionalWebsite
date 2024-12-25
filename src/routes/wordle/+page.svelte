<script>
  import { onMount } from 'svelte';

  let letters = ['a', 'b', 'c', 'd', 'e']; // Example data
  let colors = ['b', 'b', 'g', 'b', 'b']; // Example data
  let responseMessage = ''; // To display response from Flask
  let focusedIndex = null; // Declare the variable to store the focused index

  // Function to set the color of the focused letter
  function setColor(color) {
    if (focusedIndex !== null) {
      colors[focusedIndex] = color;
    }
  }
  
    async function submitGuess() {
  try {
    const response = await fetch('http://45.132.241.60:5000/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ letters, colors })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Response from Flask:', result);
    responseMessage = result.message;
  } catch (error) {
    console.error('Error connecting to Flask API:', error);
    responseMessage = 'Failed to connect to the server.';
  }
}

</script>

<button on:click={submitGuess}>Submit Guess</button>
<p>{responseMessage}</p>


<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 20px;
  }

  .grid {
    display: flex;
    gap: 10px;
  }

  .box {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-transform: uppercase;
    outline: none;
  }

  .box.b {
    background-color: #ccc; /* Blank (gray) */
  }

  .box.y {
    background-color: #ffd700; /* Yellow */
    color: #333;
  }

  .box.g {
    background-color: #32cd32; /* Green */
    color: white;
  }

  .color-buttons {
    display: flex;
    gap: 10px;
  }

  .color-buttons button {
    padding: 5px 15px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .color-buttons .blank {
    background-color: #ccc;
  }

  .color-buttons .yellow {
    background-color: #ffd700;
    color: #333;
  }

  .color-buttons .green {
    background-color: #32cd32;
    color: white;
  }

  .color-buttons button:hover {
    opacity: 0.8;
  }

  .submit-button {
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .submit-button:hover {
    background-color: #0056b3;
  }
</style>

<div class="container">
  <!-- Grid of letter boxes -->
  <div class="grid">
    <!-- Loop through the letters array -->
    {#each letters as letter, index}
      <input
        class="box {colors[index]}"
        type="text"
        bind:value={letters[index]}
        maxlength="1"
        placeholder="-"
        on:focus={() => {
          focusedIndex = index;
          console.log("Focused on index:", focusedIndex); // Debug log
        }}
      />
    {/each}
  </div>

  <!-- Color selection buttons -->
  <div class="color-buttons">
    <button class="blank" on:click={() => {
      console.log("Setting color to 'b' for index:", focusedIndex);
      setColor("b");
      console.log("Colors array:", colors);
    }}>Blank</button>
    <button class="yellow" on:click={() => {
      console.log("Setting color to 'y' for index:", focusedIndex);
      setColor("y");
      console.log("Colors array:", colors);
    }}>Yellow</button>
    <button class="green" on:click={() => {
      console.log("Setting color to 'g' for index:", focusedIndex);
      setColor("g");
      console.log("Colors array:", colors);
    }}>Green</button>
  </div>
  

  <!-- Submit button -->
  <button class="submit-button" on:click={submitGuess}>Submit</button>
</div>
