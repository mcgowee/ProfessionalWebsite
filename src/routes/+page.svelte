<script>

  import Conversion from "../components/Conversion.svelte";
  import FaQs from "../components/FAQs.svelte";
  import Hero from "../components/Hero.svelte";
  import Reviews from "../components/Reviews.svelte";
  import Service from "../components/Service.svelte";
</script>
  
  <section class="flex flex-col md:flex-row items-center mt-8 p-6 bg-white rounded-lg shadow-lg">
      <img src="/headshot.jpg" alt="Earl Leonard McGowen IV" class="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-rose-400 mb-4 md:mb-0 md:mr-6">
      <div>
          <h1 class="text-3xl font-semibold mb-4">Welcome to My Professional Site</h1>
          <p class="text-gray-700 text-lg leading-relaxed">
              Hi, I'm Earl Leonard McGowen IV, a seasoned database programmer, legal analyst, and AI enthusiast with over 15 years of experience in database programming and architecture. I specialize in creating innovative solutions using cutting-edge technologies. Explore my site to learn more about my work and expertise.
          </p>
      </div>
  </section>

  <style>
    /* Add any necessary styles here */
  </style>

<main class="flex flex-col">
    <Hero />
    <Service />
<!-- 
  <Reviews />
  <FaQs />
-->
    <Conversion />


</main>