<script>
    import ServiceCard from "./ServiceCard.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";
    
    let serviceFeatures = [
        {
            featureList: [
                "Combining retrieval-based methods with generative models to improve the accuracy and relevance of generated responses.",
            ],
            description:
                "Utilize Retrieval-Augmented Generation (RAG) to enhance the precision and applicability of generated responses by integrating retrieval-based methods with generative models.",
            imgUrl: "assets/rag-diagram.png",
        },
        {
            featureList: [
                "Developing autonomous agents that can perceive their environment, make decisions, and take actions to achieve specific goals.",
            ],
            description:
                "Create Intelligent Agents that can autonomously perceive their environment, make informed decisions, and take actions to accomplish defined objectives.",
            imgUrl: "assets/intelligent-agents-robot.png",
        },
        {
            featureList: [
                "Integrating SQL queries with machine learning models to automate data processing and analysis workflows.",
            ],
            description:
                "Streamline your data workflows by integrating SQL queries with machine learning models through SQL Chaining.",
            imgUrl: "assets/sql-chaining.png",
        },
        {
            featureList: [
                "Designing, training, and deploying machine learning models for predictive analytics, classification, clustering, and regression tasks.",
            ],
            description:
                "Harness the power of Machine Learning (ML) by designing, training, and deploying models for predictive analytics, classification, clustering, and regression tasks.",
            imgUrl: "assets/machine-learning-model.png",
        },
        {
            featureList: [
                "Developing and deploying deep neural networks for complex tasks.",
            ],
            description:
                "Implement Deep Learning techniques by developing and deploying deep neural networks to solve complex tasks.",
            imgUrl: "assets/deep-learning-network.png",
        },
        {
            featureList: [
                "Assessing the performance of machine learning models using metrics like accuracy, precision, recall, F1 score, and ROC-AUC.",
            ],
            description:
                "Ensure the reliability of your models with Model Evaluation and Validation, using metrics such as accuracy, precision, recall, F1 score, and ROC-AUC.",
            imgUrl: "assets/model-evaluation-metrics.png",
        },
        {
            featureList: [
                "Analyzing and forecasting time-dependent data using AI models to identify trends, seasonality, and anomalies.",
            ],
            description:
                "Leverage Time Series Analysis to analyze and forecast time-dependent data, identifying trends, seasonality, and anomalies with AI models.",
            imgUrl: "../static/time-series-analysis.jpg",
        },
    ];
</script>

<SectionWrapper id="services">
    <div
        class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 items-center justify-center pb-10 md:pb-14"
    >
        <div class="flex flex-col gap-2">
            <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
                Empowering Your Business with <span class="text-rose-400">AI, SQL, and Data Analytics</span> Expertise
            </p>
            <h3
                class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center"
            >
                Professional Services
            </h3>
        </div>
  
        {#each serviceFeatures as serviceFeature, index}
            <ServiceCard {serviceFeature} {index}>
                {#if index === 0}
                    Enhance your data processes with <span
                        class="text-rose-400 font-medium">Retrieval-Augmented Generation (RAG)</span>
                {:else if index === 1}
                    Develop autonomous systems using <span
                        class="text-rose-400 font-medium">Intelligent Agents</span>
                {:else if index === 2}
                    Streamline workflows with <span
                        class="text-rose-400 font-medium">SQL Chaining</span>
                {:else if index === 3}
                    Leverage predictive power with <span
                        class="text-rose-400 font-medium">Machine Learning (ML)</span>
                {:else if index === 4}
                    Solve complex tasks with <span
                        class="text-rose-400 font-medium">Deep Learning</span>
                {:else if index === 5}
                    Ensure model reliability through <span
                        class="text-rose-400 font-medium">Model Evaluation and Validation</span>
                {:else}
                    Forecast data trends with <span
                        class="text-rose-400 font-medium">Time Series Analysis</span>
                {/if}
            </ServiceCard>
        {/each}
    </div>
</SectionWrapper>
