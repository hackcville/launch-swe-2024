import React, { useEffect, useState } from "react";

const TriviaApp = () => {
    const [questions, setQuestions] = useState(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch("https://opentdb.com/api.php?amount=10");
            const data = await response.json();
            if(data.results) {
                setQuestions(data.results);
            }
        };
        fetchQuestions();
    }, []);

    return (
        <>
            <h1>Trivia App</h1>
            {questions && questions.map((question, index) => (
                <p key={index}>{question.question}</p>
            ))}
        </>
    );
};

export default TriviaApp;
