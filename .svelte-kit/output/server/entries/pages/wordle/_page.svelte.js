import { x as ensure_array_like, e as pop, p as push, o as stringify } from "../../../chunks/index.js";
import { e as escape_html, a as attr } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  let letters = ["a", "b", "c", "d", "e"];
  let colors = ["b", "b", "g", "b", "b"];
  let responseMessage = "";
  const each_array = ensure_array_like(letters);
  $$payload.out += `<button>Submit Guess</button> <p>${escape_html(responseMessage)}</p> <div class="container svelte-1pktly5"><div class="grid svelte-1pktly5"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    each_array[index];
    $$payload.out += `<input${attr("class", `box ${stringify(colors[index])} svelte-1pktly5`)} type="text"${attr("value", letters[index])} maxlength="1" placeholder="-">`;
  }
  $$payload.out += `<!--]--></div> <div class="color-buttons svelte-1pktly5"><button class="blank svelte-1pktly5">Blank</button> <button class="yellow svelte-1pktly5">Yellow</button> <button class="green svelte-1pktly5">Green</button></div> <button class="submit-button svelte-1pktly5">Submit</button></div>`;
  pop();
}
export {
  _page as default
};
