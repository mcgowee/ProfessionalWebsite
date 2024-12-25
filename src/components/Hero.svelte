<script>
    import CtAs from "./CTAs.svelte";
    import Header from "./Header.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";
</script>

<SectionWrapper>
    <div
        class="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pb-14"
    >
    <h2 class="text-4xl md:text-5xl font-semibold text-center"></h2>
        <h2
            class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1200px] mx-auto w-full text-center font-semibold"
        >
        <span class="text-slate-600">Sakura</span><span class="text-rose-400">AI</span> =
            <span class="text-slate-600">SQL</span>
            <span class="text-rose-400">AI</span>
        </h2>
        <p class="text-xl sm:text-2xl md:text-3xl text-center max-w-[1000px] mx-auto w-full leading-relaxed text-gray-700">
            <strong>Empower your data journey with AI-driven insights.</strong><br>
            Sakura<span class="text-rose-400">AI</span> brings you the future of 
            <span class="italic text-rose-400-600"></span>AI user interfaces and SQL analytics.<br>Transforming your database interactions and enabling advanced <span class="italic text-rose-400">Business Intelligence.</span>
        </p>
        
        
        <CtAs />    
    </div>

</SectionWrapper>