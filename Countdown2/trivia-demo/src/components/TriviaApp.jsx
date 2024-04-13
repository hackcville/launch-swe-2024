import React, { useEffect, useState } from "react";

const TriviaApp = () => {
    const [questions, setQuestions] = useState(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch("https://the-trivia-api.com/v2/questions");
            const data = await response.json();
            setQuestions(data);
        };
        fetchQuestions();
    }, []);

    return (
        <>
            <h1>Trivia App</h1>
            {questions && questions.map((question, index) => (
                <p key={index}>{question.question.text}</p>
            ))}
        </>
    );
};

export default TriviaApp;
