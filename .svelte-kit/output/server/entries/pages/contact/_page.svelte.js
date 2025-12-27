import { a as attr, e as escape_html } from "../../../chunks/attributes.js";
/* empty css                                                    */
function _page($$payload) {
  let name = "";
  let email = "";
  let message = "";
  let isLoading = false;
  $$payload.out += `<main class="p-4 font-sans">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <h2 class="text-2xl text-primary mb-4">Contact Earl Leonard McGowen `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></h2> <section class="contact mt-8"><h3 class="text-xl text-primary mb-4">Contact Form</h3> <div class="p-6 bg-white rounded-lg shadow-md"><form class="space-y-4"><div class="flex flex-col"><label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name:</label> <input type="text" id="name"${attr("value", name)} required class="block w-full border border-gray-300 rounded-md p-2"></div> <div class="flex flex-col"><label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email:</label> <input type="email" id="email"${attr("value", email)} required class="block w-full border border-gray-300 rounded-md p-2"></div> <div class="flex flex-col"><label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message:</label> <textarea id="message" required class="block w-full border border-gray-300 rounded-md p-2">`;
  const $$body = escape_html(message);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> <div class="flex items-center"><button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"${attr("disabled", isLoading, true)}>Send</button></div></form></div> <div class="social-links mt-8"><h4 class="text-lg mb-4">Follow Me</h4> <ul class="list-none p-0"><li class="mb-2"><a href="https://twitter.com/your-twitter-handle" target="_blank" class="text-blue-500 hover:underline flex items-center"><i class="fa-brands fa-twitter mr-2"></i> Twitter</a></li> <li class="mb-2"><a href="https://www.facebook.com/earlmcgowen/" target="_blank" class="text-blue-500 hover:underline flex items-center"><i class="fa-brands fa-facebook-f mr-2"></i> Facebook</a></li> <li class="mb-2"><a href="https://www.linkedin.com/in/earl-l-mcgowen-b510884/" target="_blank" class="text-blue-500 hover:underline flex items-center"><i class="fa-brands fa-linkedin-in mr-2"></i> LinkedIn</a></li> <li class="mb-2"><a href="http://earlmcgowen.info/" target="_blank" class="text-blue-500 hover:underline flex items-center"><i class="fa-solid fa-globe mr-2"></i> Legacy Site</a></li> <li class="mb-2"><a href="https://www.youtube.com/channel/UC-y8DJUix0fjtnLSe5_8bnA" target="_blank" class="text-blue-500 hover:underline flex items-center"><i class="fa-brands fa-youtube mr-2"></i> YouTube</a></li></ul></div></section></main>`;
}
export {
  _page as default
};
