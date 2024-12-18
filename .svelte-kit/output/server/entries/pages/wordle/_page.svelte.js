import { c as create_ssr_component, l as each, k as escape, h as add_attribute } from "../../../chunks/ssr.js";
const css = {
  code: ".container.svelte-1pktly5.svelte-1pktly5{display:flex;flex-direction:column;align-items:center;gap:20px;margin:20px}.grid.svelte-1pktly5.svelte-1pktly5{display:flex;gap:10px}.box.svelte-1pktly5.svelte-1pktly5{width:50px;height:50px;display:flex;justify-content:center;align-items:center;font-size:1.5rem;border:1px solid #ccc;border-radius:5px;text-transform:uppercase;outline:none}.box.b.svelte-1pktly5.svelte-1pktly5{background-color:#ccc}.box.y.svelte-1pktly5.svelte-1pktly5{background-color:#ffd700;color:#333}.box.g.svelte-1pktly5.svelte-1pktly5{background-color:#32cd32;color:white}.color-buttons.svelte-1pktly5.svelte-1pktly5{display:flex;gap:10px}.color-buttons.svelte-1pktly5 button.svelte-1pktly5{padding:5px 15px;font-size:1rem;border:none;border-radius:5px;cursor:pointer;transition:background-color 0.3s ease}.color-buttons.svelte-1pktly5 .blank.svelte-1pktly5{background-color:#ccc}.color-buttons.svelte-1pktly5 .yellow.svelte-1pktly5{background-color:#ffd700;color:#333}.color-buttons.svelte-1pktly5 .green.svelte-1pktly5{background-color:#32cd32;color:white}.color-buttons.svelte-1pktly5 button.svelte-1pktly5:hover{opacity:0.8}.submit-button.svelte-1pktly5.svelte-1pktly5{padding:10px 20px;font-size:1rem;border:none;border-radius:5px;background-color:#007bff;color:white;cursor:pointer;transition:background-color 0.3s ease}.submit-button.svelte-1pktly5.svelte-1pktly5:hover{background-color:#0056b3}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n  // Letters and colors for the grid\\r\\n  let letters = [\\"\\", \\"\\", \\"\\", \\"\\", \\"\\"];\\r\\n  let colors = [\\"b\\", \\"b\\", \\"b\\", \\"b\\", \\"b\\"]; // Default color is blank ('b')\\r\\n\\r\\n  // Track the currently focused index\\r\\n  let focusedIndex = null;\\r\\n\\r\\n  // Function to set the color of the currently focused box\\r\\n  function setColor(color) {\\r\\n  if (focusedIndex !== null) {\\r\\n    colors = colors.map((c, idx) => (idx === focusedIndex ? color : c));\\r\\n  }\\r\\n}\\r\\n\\r\\n\\r\\n  // Submit the guess (for processing logic later)\\r\\n  function submitGuess() {\\r\\n    console.log(\\"Guess:\\", letters.join(\\"\\"));\\r\\n    console.log(\\"Colors:\\", colors.join(\\"\\"));\\r\\n    // Add backend or other processing logic here\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n<style>\\r\\n  .container {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    gap: 20px;\\r\\n    margin: 20px;\\r\\n  }\\r\\n\\r\\n  .grid {\\r\\n    display: flex;\\r\\n    gap: 10px;\\r\\n  }\\r\\n\\r\\n  .box {\\r\\n    width: 50px;\\r\\n    height: 50px;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    font-size: 1.5rem;\\r\\n    border: 1px solid #ccc;\\r\\n    border-radius: 5px;\\r\\n    text-transform: uppercase;\\r\\n    outline: none;\\r\\n  }\\r\\n\\r\\n  .box.b {\\r\\n    background-color: #ccc; /* Blank (gray) */\\r\\n  }\\r\\n\\r\\n  .box.y {\\r\\n    background-color: #ffd700; /* Yellow */\\r\\n    color: #333;\\r\\n  }\\r\\n\\r\\n  .box.g {\\r\\n    background-color: #32cd32; /* Green */\\r\\n    color: white;\\r\\n  }\\r\\n\\r\\n  .color-buttons {\\r\\n    display: flex;\\r\\n    gap: 10px;\\r\\n  }\\r\\n\\r\\n  .color-buttons button {\\r\\n    padding: 5px 15px;\\r\\n    font-size: 1rem;\\r\\n    border: none;\\r\\n    border-radius: 5px;\\r\\n    cursor: pointer;\\r\\n    transition: background-color 0.3s ease;\\r\\n  }\\r\\n\\r\\n  .color-buttons .blank {\\r\\n    background-color: #ccc;\\r\\n  }\\r\\n\\r\\n  .color-buttons .yellow {\\r\\n    background-color: #ffd700;\\r\\n    color: #333;\\r\\n  }\\r\\n\\r\\n  .color-buttons .green {\\r\\n    background-color: #32cd32;\\r\\n    color: white;\\r\\n  }\\r\\n\\r\\n  .color-buttons button:hover {\\r\\n    opacity: 0.8;\\r\\n  }\\r\\n\\r\\n  .submit-button {\\r\\n    padding: 10px 20px;\\r\\n    font-size: 1rem;\\r\\n    border: none;\\r\\n    border-radius: 5px;\\r\\n    background-color: #007bff;\\r\\n    color: white;\\r\\n    cursor: pointer;\\r\\n    transition: background-color 0.3s ease;\\r\\n  }\\r\\n\\r\\n  .submit-button:hover {\\r\\n    background-color: #0056b3;\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div class=\\"container\\">\\r\\n  <!-- Grid of letter boxes -->\\r\\n  <div class=\\"grid\\">\\r\\n    <!-- Loop through the letters array -->\\r\\n    {#each letters as letter, index}\\r\\n      <input\\r\\n        class=\\"box {colors[index]}\\"\\r\\n        type=\\"text\\"\\r\\n        bind:value={letters[index]}\\r\\n        maxlength=\\"1\\"\\r\\n        placeholder=\\"-\\"\\r\\n        on:focus={() => {\\r\\n          focusedIndex = index;\\r\\n          console.log(\\"Focused on index:\\", focusedIndex); // Debug log\\r\\n        }}\\r\\n      />\\r\\n    {/each}\\r\\n  </div>\\r\\n\\r\\n  <!-- Color selection buttons -->\\r\\n  <div class=\\"color-buttons\\">\\r\\n    <button class=\\"blank\\" on:click={() => {\\r\\n      console.log(\\"Setting color to 'b' for index:\\", focusedIndex);\\r\\n      setColor(\\"b\\");\\r\\n      console.log(\\"Colors array:\\", colors);\\r\\n    }}>Blank</button>\\r\\n    <button class=\\"yellow\\" on:click={() => {\\r\\n      console.log(\\"Setting color to 'y' for index:\\", focusedIndex);\\r\\n      setColor(\\"y\\");\\r\\n      console.log(\\"Colors array:\\", colors);\\r\\n    }}>Yellow</button>\\r\\n    <button class=\\"green\\" on:click={() => {\\r\\n      console.log(\\"Setting color to 'g' for index:\\", focusedIndex);\\r\\n      setColor(\\"g\\");\\r\\n      console.log(\\"Colors array:\\", colors);\\r\\n    }}>Green</button>\\r\\n  </div>\\r\\n  \\r\\n\\r\\n  <!-- Submit button -->\\r\\n  <button class=\\"submit-button\\" on:click={submitGuess}>Submit</button>\\r\\n</div>\\r\\n"],"names":[],"mappings":"AAyBE,wCAAW,CACT,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IAAI,CACT,MAAM,CAAE,IACV,CAEA,mCAAM,CACJ,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IACP,CAEA,kCAAK,CACH,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,aAAa,CAAE,GAAG,CAClB,cAAc,CAAE,SAAS,CACzB,OAAO,CAAE,IACX,CAEA,IAAI,gCAAG,CACL,gBAAgB,CAAE,IACpB,CAEA,IAAI,gCAAG,CACL,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,IACT,CAEA,IAAI,gCAAG,CACL,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KACT,CAEA,4CAAe,CACb,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IACP,CAEA,6BAAc,CAAC,qBAAO,CACpB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,gBAAgB,CAAC,IAAI,CAAC,IACpC,CAEA,6BAAc,CAAC,qBAAO,CACpB,gBAAgB,CAAE,IACpB,CAEA,6BAAc,CAAC,sBAAQ,CACrB,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,IACT,CAEA,6BAAc,CAAC,qBAAO,CACpB,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KACT,CAEA,6BAAc,CAAC,qBAAM,MAAO,CAC1B,OAAO,CAAE,GACX,CAEA,4CAAe,CACb,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,gBAAgB,CAAC,IAAI,CAAC,IACpC,CAEA,4CAAc,MAAO,CACnB,gBAAgB,CAAE,OACpB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let letters = ["", "", "", "", ""];
  let colors = ["b", "b", "b", "b", "b"];
  $$result.css.add(css);
  return `<div class="container svelte-1pktly5"> <div class="grid svelte-1pktly5"> ${each(letters, (letter, index) => {
    return `<input class="${"box " + escape(colors[index], true) + " svelte-1pktly5"}" type="text" maxlength="1" placeholder="-"${add_attribute("value", letters[index], 0)}>`;
  })}</div>  <div class="color-buttons svelte-1pktly5"><button class="blank svelte-1pktly5" data-svelte-h="svelte-atyv19">Blank</button> <button class="yellow svelte-1pktly5" data-svelte-h="svelte-1btan9b">Yellow</button> <button class="green svelte-1pktly5" data-svelte-h="svelte-yfhb9h">Green</button></div>  <button class="submit-button svelte-1pktly5" data-svelte-h="svelte-amx13d">Submit</button></div>`;
});
export {
  Page as default
};