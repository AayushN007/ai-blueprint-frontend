import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

key = os.getenv("GEMINI_API_KEY")
print("Loaded API Key:", key[:8] + "..." if key else "NOT FOUND")

client = genai.Client(api_key=key)


def ask_gemini(prompt: str):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
    )
    return response.text