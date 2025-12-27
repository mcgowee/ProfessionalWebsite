import { j as bind_props, q as slot, p as push, x as ensure_array_like, e as pop } from "../../chunks/index.js";
import { a as attr, e as escape_html } from "../../chunks/attributes.js";
/* empty css                                                */
function CTAs($$payload, $$props) {
  let dark = $$props["dark"];
  $$payload.out += `<div class="flex items-center gap-4"><a href="http://localhost:5173/contact"${attr("class", "px-4 py-2 rounded-md text-white transition-colors duration-300 " + (dark ? "bg-[#181b34]" : "bg-[#1f2937] hover:bg-[#4b5563]"))}><p class="text-base sm:text-lg md:text-xl">Contact Me</p></a></div>`;
  bind_props($$props, { dark });
}
function Conversion($$payload) {
  $$payload.out += `<section class="py-14 md:py-20 flex flex-col gap-8 bg-[#181b34] text-white text-center items-center justify-center"><h4 class="text-xl sm:text-2xl md:text-3xl poppins">SakuraAI <span class="poppins font-bold">Design Ideas</span></h4> <p class="poppins text-base sm:text-lg md:text-xl">✦ Technology meets language meets creativity ✦</p> `;
  CTAs($$payload, { dark: true });
  $$payload.out += `<!----></section>`;
}
function SectionWrapper($$payload, $$props) {
  let id = $$props["id"];
  $$payload.out += `<section${attr("id", id)}${attr("class", "min-h-screen flex flex-col px-4 ")}><div class="flex flex-col flex-1 max-w-[1400px] mx-auto w-full"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div></section>`;
  bind_props($$props, { id });
}
function Hero($$payload) {
  SectionWrapper($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<div class="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pb-14"><h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1200px] mx-auto w-full text-center font-semibold"><span class="text-slate-600">Sakura</span><span class="text-rose-400">AI</span> = <span class="text-slate-600">SQL</span> <span class="text-rose-400">AI</span></h2> <p class="text-xl sm:text-2xl md:text-3xl text-center max-w-[1000px] mx-auto w-full leading-relaxed text-gray-700"><strong>Empower your data journey with AI-driven insights.</strong><br> Sakura<span class="text-rose-400">AI</span> brings you the future of <span class="italic text-rose-400-600"></span>AI user interfaces and SQL analytics.<br>Transforming your database interactions and enabling advanced <span class="italic text-rose-400">Business Intelligence.</span></p> `;
      CTAs($$payload2, {});
      $$payload2.out += `<!----></div>`;
    },
    $$slots: { default: true }
  });
}
function ServiceCard($$payload, $$props) {
  push();
  let index = $$props["index"];
  let serviceFeature = $$props["serviceFeature"];
  const each_array = ensure_array_like(serviceFeature.featureList);
  const each_array_1 = ensure_array_like([1, 2, 3]);
  $$payload.out += `<div class="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-14 lg:gap-20 relative text-base"><div${attr("class", "flex flex-col gap-8 md:gap-10 pt-8 sm:pt-10 " + (index % 2 === 1 ? " md:order-2" : " "))}><h4 class="text-2xl sm:text-3xl md:text-4xl max-w-[1000px] w-full font-medium relative pr-10 after:absolute after:top-full after:left-0 after:w-1/5 after:h-1.5 after:mt-1 after:bg-slate-900"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></h4> <p>${escape_html(serviceFeature.description)}</p> <div class="flex flex-col gap-3"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let listItem = each_array[$$index];
    $$payload.out += `<div class="flex gap-2 items-center"><div class="grid place-items-center px-1.5 text-xs sm:text-sm aspect-square rounded-full border-[1.5px] bg-white border-solid border-green-300"><i class="fa-solid fa-bolt text-green-400"></i></div> <p>${escape_html(listItem)}</p></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="flex items-center"><button class="specialBtnDark mr-auto font-semibold"><p>Contact Me →</p></button></div></div> <div${attr("class", "flex flex-col dropShadow overflow-hidden rounded-b-lg ")}><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    each_array_1[$$index_1];
    $$payload.out += `<div class="rounded-full aspect-square w-2.5 sm:w-3 bg-indigo-300"></div>`;
  }
  $$payload.out += `<!--]--> <div class="flex flex-col bg-white gap-4 flex-1"><img${attr("src", serviceFeature.imgUrl)} alt="service-img"></div></div></div>`;
  bind_props($$props, { index, serviceFeature });
  pop();
}
function Service($$payload) {
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
      featureList: [
        "Developing and deploying deep neural networks for complex tasks."
      ],
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
  SectionWrapper($$payload, {
    id: "services",
    children: ($$payload2) => {
      const each_array = ensure_array_like(serviceFeatures);
      $$payload2.out += `<div class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 items-center justify-center pb-10 md:pb-14"><div class="flex flex-col gap-2"><p class="opacity-60 text-base sm:text-lg md:text-xl text-center">Empowering Your Business with <span class="text-rose-400">AI, SQL, and Data Analytics</span> Expertise</p> <h3 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">Professional Services</h3></div> <!--[-->`;
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let serviceFeature = each_array[index];
        ServiceCard($$payload2, {
          serviceFeature,
          index,
          children: ($$payload3) => {
            if (index === 0) {
              $$payload3.out += "<!--[-->";
              $$payload3.out += `Enhance your data processes with <span class="text-rose-400 font-medium">Retrieval-Augmented Generation (RAG)</span>`;
            } else {
              $$payload3.out += "<!--[!-->";
              if (index === 1) {
                $$payload3.out += "<!--[-->";
                $$payload3.out += `Develop autonomous systems using <span class="text-rose-400 font-medium">Intelligent Agents</span>`;
              } else {
                $$payload3.out += "<!--[!-->";
                if (index === 2) {
                  $$payload3.out += "<!--[-->";
                  $$payload3.out += `Streamline workflows with <span class="text-rose-400 font-medium">SQL Chaining</span>`;
                } else {
                  $$payload3.out += "<!--[!-->";
                  if (index === 3) {
                    $$payload3.out += "<!--[-->";
                    $$payload3.out += `Leverage predictive power with <span class="text-rose-400 font-medium">Machine Learning (ML)</span>`;
                  } else {
                    $$payload3.out += "<!--[!-->";
                    if (index === 4) {
                      $$payload3.out += "<!--[-->";
                      $$payload3.out += `Solve complex tasks with <span class="text-rose-400 font-medium">Deep Learning</span>`;
                    } else {
                      $$payload3.out += "<!--[!-->";
                      if (index === 5) {
                        $$payload3.out += "<!--[-->";
                        $$payload3.out += `Ensure model reliability through <span class="text-rose-400 font-medium">Model Evaluation and Validation</span>`;
                      } else {
                        $$payload3.out += "<!--[!-->";
                        $$payload3.out += `Forecast data trends with <span class="text-rose-400 font-medium">Time Series Analysis</span>`;
                      }
                      $$payload3.out += `<!--]-->`;
                    }
                    $$payload3.out += `<!--]-->`;
                  }
                  $$payload3.out += `<!--]-->`;
                }
                $$payload3.out += `<!--]-->`;
              }
              $$payload3.out += `<!--]-->`;
            }
            $$payload3.out += `<!--]-->`;
          },
          $$slots: { default: true }
        });
      }
      $$payload2.out += `<!--]--></div>`;
    },
    $$slots: { default: true }
  });
}
function _page($$payload) {
  $$payload.out += `<section class="flex flex-col md:flex-row items-center mt-8 p-6 bg-white rounded-lg shadow-lg"><img src="/headshot.jpg" alt="Earl Leonard McGowen IV" class="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-rose-400 mb-4 md:mb-0 md:mr-6"> <div><h1 class="text-3xl font-semibold mb-4">Welcome to My Professional Site</h1> <p class="text-gray-700 text-lg leading-relaxed">Hi, I'm Earl Leonard McGowen IV, a seasoned database programmer, legal analyst, and AI enthusiast with over 15 years of experience in database programming and architecture. I specialize in creating innovative solutions using cutting-edge technologies. Explore my site to learn more about my work and expertise.</p></div></section> <main class="flex flex-col">`;
  Hero($$payload);
  $$payload.out += `<!----> `;
  Service($$payload);
  $$payload.out += `<!----> `;
  Conversion($$payload);
  $$payload.out += `<!----></main>`;
}
export {
  _page as default
};
