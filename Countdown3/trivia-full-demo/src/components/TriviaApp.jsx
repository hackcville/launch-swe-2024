import React from "react";
import { useState, useEffect } from "react";
import Question from "./Question";

const TriviaApp = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch("https://the-trivia-api.com/v2/questions");
            const data = await response.json();
            console.log(data);
            setQuestions(data);
        };
        fetchQuestions();
    }, []);

    return (
        <div>
            <h1>Trivia App</h1>
            {questions.map((question, index) => (
                <Question key={index} questionData={question} />
            ))}
        </div>
    );
};

export default TriviaApp;
