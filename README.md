# Gemini AI Chat Application

A simple and responsive web-based chat application built with React.js that connects to the Google Gemini API. Users can ask questions and receive real-time answers from the powerful Gemini 1.5 Flash language model.

![Screenshot of the Chat App](https://i.imgur.com/YOUR_SCREENSHOT_URL.png)
*(**Note:** You should replace the URL above with a real screenshot of your application.)*

## Features

-   **Interactive Chat Interface:** Clean and intuitive UI for sending and receiving messages.
-   **Real-time AI Responses:** Powered by the fast and efficient Google Gemini 1.5 Flash model.
-   **Responsive Design:** Works smoothly on both desktop and mobile browsers.
-   **Easy to Set Up:** Get the application running locally in just a few simple steps.

## Tech Stack

-   **Frontend:** [React.js](https://reactjs.org/)
-   **API Communication:** [Axios](https://axios-http.com/)
-   **AI Model:** [Google Gemini API](https://ai.google.dev/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your machine:

-   [Node.js](https://nodejs.org/en/) (which includes npm)
-   [Git](https://git-scm.com/) (for cloning the repository)

### Installation & Setup

1.  **Clone the repository**
    Open your terminal and run the following command:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies**
    Install all the required npm packages for the project:
    ```bash
    npm install
    ```

3.  **Set up your API Key**
    This is the most important step. The application needs a Google Gemini API key to work.

    -   Get your free API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
    -   Open the `src/ChatApp.js` file.
    -   Find the following line:
        ```javascript
        const API_KEY = "YOUR_API_KEY";
        ```
    -   Replace `"YOUR_API_KEY"` with the actual API key you got from Google AI Studio.

4.  **Run the application**
    Start the development server:
    ```bash
    npm start
    ```
    The application will automatically open in your default browser at `http://localhost:3000`.

## Project Structure

Here is a brief overview of the key files in this project:
