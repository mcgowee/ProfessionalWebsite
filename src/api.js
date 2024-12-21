const API_URL = "http://172.22.0.2:8000";

export async function generateText(prompt, maxTokens = 100) {
    try {
        const response = await fetch(`${API_URL}/generate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt, max_tokens: maxTokens }),
        });
        const data = await response.json();
        if (data.error) {
            throw new Error(data.error);
        }
        return data.generated_text;
    } catch (error) {
        console.error("Error generating text:", error);
        return "An error occurred while generating text.";
    }
}
