<script>
    // No additional scripting needed for this basic example
</script>

<style>
    iframe {
        width: 100%;
        height: 100vh;
        border: none;
    }
    main {
        font-family: Arial, sans-serif;
        padding: 2rem;
        background-color: white;
        border-radius: 0.5rem;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
        margin-top: 2rem;
    }
    .info, .questions {
        margin-bottom: 2rem;
        text-align: left; /* Align text to the left */
    }
    .info p, .questions p {
        margin-bottom: 1rem;
        color: gray;
    }
    .info p a {
        color: blue;
        text-decoration: underline;
    }
    .questions h3 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: #4A5568;
    }
    .questions ul {
        list-style-type: disc;
        padding-left: 2rem;
    }
    .questions ul li {
        margin-bottom: 0.5rem;
    }
</style>

<main class="p-6 bg-white rounded-lg shadow-lg mt-8">
    <h2 class="text-3xl font-semibold mb-4 text-gray-800">Streamlit LLM Integration</h2>
    <div class="info">
        <p>This application uses a MySQL database based on the <a href="https://www.kaggle.com/datasets/uom190346a/e-commerce-customer-behavior-dataset?resource=download" target="_blank">E-commerce Customer Behavior Dataset</a> from Kaggle.</p>
        <p>It utilizes <a href="https://github.com/Sinaptik-AI/pandas-ai" target="_blank">PandasAI</a> as a language model to run analytics on the database.</p>
        <p>Streamlit is used to create a web application that allows users to interact with the data and generate visualizations.</p> 
    </div>
    <div class="questions">
        <h3>Sample Questions You Can Ask:</h3>
        <ul>
            <li>List the top 5 rows of the DataFrame.</li>
            <li>Generate a bar chart showing the number of customers in each age group.</li>
            <li>What is the average age of customers?</li>
            <li>What is the total spend of customers in each city?</li>
            <li>Generate a pie chart showing the total spend by membership type.</li>
            <li>What is the average total spend by customers of different membership types?</li>
            <li>Show a line chart of the total spend over different age groups.</li>
            <li>Generate a histogram of the number of items purchased by customers.</li>
            <li>What is the correlation between customer age and total spend?</li>
            <li>Show a scatter plot of customer age versus total spend.</li>
            <li>What is the distribution of customer satisfaction levels?</li>
            <li>What is the total spend of customers who received discounts versus those who did not?</li>
            <li>Generate a bar chart showing the average rating of customers who received discounts versus those who did not.</li>
            <li>What is the average number of days since the last purchase by city?</li>
        </ul>
    </div>
    <iframe src="http://localhost:8501"></iframe>
</main>
