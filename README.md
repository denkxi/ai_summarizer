# Article Summarizer

## Overview
Article Summarizer is a simple web application that utilizes the OpenAI API to shorten online articles. Users can input the URL of a website containing an article, and the application will make an API request to retrieve and summarize the content. This provides users with concise summaries of lengthy articles, making it easier and quicker to grasp the main points without having to read through the entire text.

## Features
- **URL Input:** Users can enter the URL of any webpage containing an article.
- **Summarization:** The application makes an API request to the OpenAI API to generate a summarized version of the article.
- **Shortened Summary:** Users receive a shortened, easy-to-read summary of the article's main points.
- **Convenient:** Saves time and effort by condensing lengthy articles into concise summaries.

## Installation
1. Clone the repository:
``` git clone https://github.com/denkxi/ai_summarizer ```
2. Navigate to the project directory:
``` cd ai_summarizer ```
3. Install dependencies:
``` npm install ```
4. Obtain API credentials from [RapidAPI](https://rapidapi.com/restyler/api/article-extractor-and-summarizer), create .env file and assign your api key to variable called VITE_RAPID_API_ARTICLE_KEY
5. Start the development server with ``` npm run dev ```