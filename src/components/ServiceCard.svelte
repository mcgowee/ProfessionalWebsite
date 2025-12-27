<script>
    export let index;
    export let serviceFeature;
</script>

<div
    class="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-14 lg:gap-20 relative text-base"
>
    <div class={"flex flex-col gap-8 md:gap-10 pt-8 sm:pt-10 "  +
    (index % 2 === 1 ? " md:order-2" : " ")}>
        <h4
            class="text-2xl sm:text-3xl md:text-4xl max-w-[1000px] w-full font-medium relative pr-10 after:absolute after:top-full after:left-0 after:w-1/5 after:h-1.5 after:mt-1 after:bg-slate-900"
        >
            <slot />
        </h4>
        <p>{serviceFeature.description}</p>
        <div class="flex flex-col gap-3">
            {#each serviceFeature.featureList as listItem}
                <div class="flex gap-2 items-center">
                    <div
                        class="grid place-items-center px-1.5 text-xs sm:text-sm aspect-square rounded-full border-[1.5px] bg-white border-solid border-green-300"
                    >
                        <i class="fa-solid fa-bolt text-green-400"></i>
                    </div>
                    <p>{listItem}</p>
                </div>
            {/each}
        </div>
        <div class="flex items-center">
            <button class="specialBtnDark mr-auto font-semibold">
                <p>Contact Me &rarr;</p>
            </button>
        </div>
    </div>
    <div
        class={"flex flex-col dropShadow overflow-hidden rounded-b-lg "}
    >
        {#each [1, 2, 3] as i}
        <div class="rounded-full aspect-square w-2.5 sm:w-3 bg-indigo-300"></div>
        {/each}
        <div class="flex flex-col bg-white gap-4 flex-1">
            <img src={serviceFeature.imgUrl} alt="service-img" />
        </div>
    </div>
</div>
