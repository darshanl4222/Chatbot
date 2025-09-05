import React, { useEffect, useState, useCallback } from 'react';
import NavBar from './Components/NavBar.js';
import Prompt from './Components/Prompt.js';
import axios from 'axios';
import "./App.css";

const ChatApp = () => {
    const [question, setQuestion] = useState("");
    const [ans, setAns] = useState("");

    // IMPORTANT: Replace this with your actual API Key
    const API_KEY = "AIzaSyA9wIBfAzONVxXARFhw7Mcp0_8gUB3ffS4"; // Make sure to replace this with your actual key

    // UPDATED: Using the v1beta API and the gemini-1.5-flash-latest model
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;


    const addMessage = useCallback((isUser) => {
        const container = document.querySelector(".msg-container");
        if (!container) return;

        const div = document.createElement('div');
        const p = document.createElement('p');
        const boldiv = document.createElement('div');

        if (isUser) {
            boldiv.classList.add('right-boll');
            div.classList.add('right-text');
            p.innerText = question;
        } else {
            boldiv.classList.add('left-boll');
            div.classList.add('left-text');
            p.innerText = ans;
        }
        div.appendChild(boldiv);
        div.appendChild(p);
        container.appendChild(div);
        // Scroll to the bottom to see the latest message
        container.scrollTop = container.scrollHeight;
    }, [question, ans]);

    const fetchPrompt = useCallback(async () => {
        if (!question.trim()) return; // Don't send empty prompts

        addMessage(true);
        setAns("..."); // Optional: show a loading indicator

        try {
            const response = await axios({
                url: API_URL,
                method: "post",
                data: {
                    contents: [{
                        parts: [{
                            text: question
                        }]
                    }]
                }
            });

            let rawResponse = response.data.candidates[0].content.parts[0].text;
            // Basic formatting to remove markdown
            rawResponse = rawResponse.replace(/[*#]/g, '');
            setAns(rawResponse);

        } catch (err) {
            if (err.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error("API Error Response:", err.response.data);
                setAns(`Error: ${err.response.data.error.message}`);
            } else if (err.request) {
                // The request was made but no response was received
                setAns("Request failed: Please check your internet connection and the API endpoint.");
            } else {
                // Something happened in setting up the request that triggered an Error
                setAns(`An error occurred: ${err.message}`);
            }
        }
    }, [question, addMessage, API_URL]);


    useEffect(() => {
        if (ans && ans !== "...") { // Ensure we don't trigger on the loading message
            addMessage(false);
        }
    }, [ans, addMessage]);

    return (
        <div className='container'>
            <NavBar />
            <div className='msg-container'>
                <div className='left-text'>
                    <div className='left-boll'></div>
                    <p>Hi there!, how can I help you today?</p>
                </div>
            </div>
            {/* Pass the correct fetchPrompt function and question state */}
            <Prompt fetchPrompt={fetchPrompt} modifyQuestion={setQuestion} question={question} />
        </div>
    );
}

export default ChatApp;