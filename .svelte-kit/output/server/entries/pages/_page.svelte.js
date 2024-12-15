import { c as create_ssr_component, h as add_attribute, v as validate_component, k as escape, l as each } from "../../chunks/ssr.js";
import "../../chunks/Header.svelte_svelte_type_style_lang.js";
const CTAs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dark } = $$props;
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0) $$bindings.dark(dark);
  return `<div class="flex items-center gap-4"><a href="http://localhost:5173/contact"${add_attribute(
    "class",
    "px-4 py-2 rounded-md text-white transition-colors duration-300 " + (dark ? "bg-[#181b34]" : "bg-[#1f2937] hover:bg-[#4b5563]"),
    0
  )}><p class="text-base sm:text-lg md:text-xl" data-svelte-h="svelte-1ctdx1s">Contact Me</p></a></div>`;
});
const Conversion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="py-14 md:py-20 flex flex-col gap-8 bg-[#181b34] text-white text-center items-center justify-center"><h4 class="text-xl sm:text-2xl md:text-3xl poppins" data-svelte-h="svelte-siz4y7">SakuraAI <span class="poppins font-bold">Design Ideas</span></h4> <p class="poppins text-base sm:text-lg md:text-xl" data-svelte-h="svelte-1pej3b1">✦ Technology meets language meets creativity ✦</p> ${validate_component(CTAs, "CtAs").$$render($$result, { dark: true }, {}, {})}</section>`;
});
const SectionWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  return `<section${add_attribute("id", id, 0)}${add_attribute("class", "min-h-screen flex flex-col px-4 ", 0)}><div class="flex flex-col flex-1 max-w-[1400px] mx-auto w-full">${slots.default ? slots.default({}) : ``}</div></section>`;
});
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pb-14"><h2 class="text-4xl md:text-5xl font-semibold text-center"><h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1200px] mx-auto w-full text-center font-semibold" data-svelte-h="svelte-99fj55"><span class="text-slate-600">Sakura</span><span class="text-rose-400">AI</span> =
            <span class="text-slate-600">SQL</span> <span class="text-rose-400">AI</span></h2> <p class="text-xl sm:text-2xl md:text-3xl text-center max-w-[1000px] mx-auto w-full leading-relaxed text-gray-700" data-svelte-h="svelte-1jbtb1u"><strong>Empower your data journey with AI-driven insights.</strong><br>
            Sakura<span class="text-rose-400">AI</span> brings you the future of 
            <span class="italic text-rose-400-600"></span>AI user interfaces and SQL analytics.<br>Transforming your database interactions and enabling advanced <span class="italic text-rose-400">Business Intelligence.</span></p> ${validate_component(CTAs, "CtAs").$$render($$result, {}, {}, {})}</h2></div>`;
    }
  })}`;
});
const ServiceCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let { serviceFeature } = $$props;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.serviceFeature === void 0 && $$bindings.serviceFeature && serviceFeature !== void 0) $$bindings.serviceFeature(serviceFeature);
  return `<div class="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-14 lg:gap-20 relative text-base"><div${add_attribute("class", "flex flex-col gap-8 md:gap-10 pt-8 sm:pt-10 " + (index % 2 === 1 ? " md:order-2" : " "), 0)}><h4 class="text-2xl sm:text-3xl md:text-4xl max-w-[1000px] w-full font-medium relative pr-10 after:absolute after:top-full after:left-0 after:w-1/5 after:h-1.5 after:mt-1 after:bg-slate-900">${slots.default ? slots.default({}) : ``}</h4> <p>${escape(serviceFeature.description)}</p> <div class="flex flex-col gap-3">${each(serviceFeature.featureList, (listItem) => {
    return `<div class="flex gap-2 items-center"><div class="grid place-items-center px-1.5 text-xs sm:text-sm aspect-square rounded-full border-[1.5px] bg-white border-solid border-green-300" data-svelte-h="svelte-90be6e"><i class="fa-solid fa-bolt text-green-400"></i></div> <p>${escape(listItem)}</p> </div>`;
  })}</div> <div class="flex items-center" data-svelte-h="svelte-19iz3gk"><button class="specialBtnDark mr-auto font-semibold"><p>Contact Me →</p></button></div></div> <div${add_attribute("class", "flex flex-col dropShadow overflow-hidden rounded-b-lg ", 0)}><div class="rounded-t-xl h-8 sm:h-10 bg-white opacity-60 px-3 flex items-center gap-2">${each([1, 2, 3], (i) => {
    return `<div class="rounded-full aspect-square w-2.5 sm:w-3 bg-indigo-300"></div>`;
  })}</div> <div class="flex flex-col bg-white gap-4 flex-1"><img${add_attribute("src", serviceFeature.imgUrl, 0)} alt="service-img"></div></div></div>`;
});
const Service = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let serviceFeatures = [
    {
      featureList: [
        "Combining retrieval-based methods with generative models to improve the accuracy and relevance of generated responses."
      ],
      description: "Utilize Retrieval-Augmented Generation (RAG) to enhance the precision and applicability of generated responses by integrating retrieval-based methods with generative models.",
      imgUrl: "assets/rag-diagram.png"
    },
    {
      featureList: [
        "Developing autonomous agents that can perceive their environment, make decisions, and take actions to achieve specific goals."
      ],
      description: "Create Intelligent Agents that can autonomously perceive their environment, make informed decisions, and take actions to accomplish defined objectives.",
      imgUrl: "assets/intelligent-agents-robot.png"
    },
    {
      featureList: [
        "Integrating SQL queries with machine learning models to automate data processing and analysis workflows."
      ],
      description: "Streamline your data workflows by integrating SQL queries with machine learning models through SQL Chaining.",
      imgUrl: "assets/sql-chaining.png"
    },
    {
      featureList: [
        "Designing, training, and deploying machine learning models for predictive analytics, classification, clustering, and regression tasks."
      ],
      description: "Harness the power of Machine Learning (ML) by designing, training, and deploying models for predictive analytics, classification, clustering, and regression tasks.",
      imgUrl: "assets/machine-learning-model.png"
    },
    {
      featureList: ["Developing and deploying deep neural networks for complex tasks."],
      description: "Implement Deep Learning techniques by developing and deploying deep neural networks to solve complex tasks.",
      imgUrl: "assets/deep-learning-network.png"
    },
    {
      featureList: [
        "Assessing the performance of machine learning models using metrics like accuracy, precision, recall, F1 score, and ROC-AUC."
      ],
      description: "Ensure the reliability of your models with Model Evaluation and Validation, using metrics such as accuracy, precision, recall, F1 score, and ROC-AUC.",
      imgUrl: "assets/model-evaluation-metrics.png"
    },
    {
      featureList: [
        "Analyzing and forecasting time-dependent data using AI models to identify trends, seasonality, and anomalies."
      ],
      description: "Leverage Time Series Analysis to analyze and forecast time-dependent data, identifying trends, seasonality, and anomalies with AI models.",
      imgUrl: "../static/time-series-analysis.jpg"
    }
  ];
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, { id: "services" }, {}, {
    default: () => {
      return `<div class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 items-center justify-center pb-10 md:pb-14"><div class="flex flex-col gap-2" data-svelte-h="svelte-1r8j7la"><p class="opacity-60 text-base sm:text-lg md:text-xl text-center">Empowering Your Business with <span class="text-rose-400">AI, SQL, and Data Analytics</span> Expertise</p> <h3 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">Professional Services</h3></div> ${each(serviceFeatures, (serviceFeature, index) => {
        return `${validate_component(ServiceCard, "ServiceCard").$$render($$result, { serviceFeature, index }, {}, {
          default: () => {
            return `${index === 0 ? `Enhance your data processes with <span class="text-rose-400 font-medium" data-svelte-h="svelte-e07y6m">Retrieval-Augmented Generation (RAG)</span>` : `${index === 1 ? `Develop autonomous systems using <span class="text-rose-400 font-medium" data-svelte-h="svelte-fjprmh">Intelligent Agents</span>` : `${index === 2 ? `Streamline workflows with <span class="text-rose-400 font-medium" data-svelte-h="svelte-y308o7">SQL Chaining</span>` : `${index === 3 ? `Leverage predictive power with <span class="text-rose-400 font-medium" data-svelte-h="svelte-1tij819">Machine Learning (ML)</span>` : `${index === 4 ? `Solve complex tasks with <span class="text-rose-400 font-medium" data-svelte-h="svelte-1dlhmts">Deep Learning</span>` : `${index === 5 ? `Ensure model reliability through <span class="text-rose-400 font-medium" data-svelte-h="svelte-1cwbmh">Model Evaluation and Validation</span>` : `Forecast data trends with <span class="text-rose-400 font-medium" data-svelte-h="svelte-1fvb228">Time Series Analysis</span>`}`}`}`}`}`} `;
          }
        })}`;
      })}</div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="flex flex-col md:flex-row items-center mt-8 p-6 bg-white rounded-lg shadow-lg" data-svelte-h="svelte-109rxb"><img src="/headshot.jpg" alt="Earl Leonard McGowen IV" class="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-rose-400 mb-4 md:mb-0 md:mr-6"> <div><h1 class="text-3xl font-semibold mb-4">Welcome to My Professional Site</h1> <p class="text-gray-700 text-lg leading-relaxed">Hi, I&#39;m Earl Leonard McGowen IV, a seasoned database programmer, legal analyst, and AI enthusiast with over 15 years of experience in database programming and architecture. I specialize in creating innovative solutions using cutting-edge technologies. Explore my site to learn more about my work and expertise.</p></div></section>  <main class="flex flex-col">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(Service, "Service").$$render($$result, {}, {}, {})}  ${validate_component(Conversion, "Conversion").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
