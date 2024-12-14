import os
import pandas as pd
from pandasai.llm.local_llm import LocalLLM
import streamlit as st
from pandasai.connectors import MySQLConnector
from pandasai import SmartDataframe

# Create a MySQLConnector object
my_connector = MySQLConnector(
    config={
        "host": "localhost",
        "port": 3306,
        "database": "customer_behaviour",
        "username": "root",
        "password": "4Feedom!",
        "table": "customer",
    }
)

# Create a LocalLLM object
model = LocalLLM(
    api_base="http://localhost:11434/v1",
    model="llama3",
)

df_connector = SmartDataframe(my_connector, config={"llm": model})

# Directory to save charts
chart_dir = 'C:/Users/mcgow/Documents/svelte/earlmcgowen/src/routes/streamlit_llm/exports/charts'

# Ensure the directory exists
os.makedirs(chart_dir, exist_ok=True)
chart_path = os.path.join(chart_dir, 'temp_chart.png')

st.title("Local LLM Demo")

prompt = st.text_input("Enter a prompt", "List the top 5 rows of the DataFrame.")

if st.button("Run"):
    if prompt:
        with st.spinner("Running LLM..."):
            st.write(df_connector.chat(prompt))