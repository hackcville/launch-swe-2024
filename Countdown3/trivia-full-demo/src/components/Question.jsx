import React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const Question = ({ questionData }) => {
    const [answers, setAnswers] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    useEffect(() => {
        let answerChoices = [];
        answerChoices.push({ text: questionData.correctAnswer, isCorrect: true });
        questionData.incorrectAnswers.forEach((incorrectAnswer) => {
            answerChoices.push({ text: incorrectAnswer, isCorrect: false });
        });
        answerChoices.sort(() => Math.random() - 0.5);
        console.log("Answer Choices", answerChoices);
        setAnswers(answerChoices);
    }, [questionData]);

    return (
        <div>
            <h4>{questionData.question.text}</h4>
            {answers.map((answer, index) => (
                <Button variant="contained" key={index} onClick={() => setSelectedAnswer(answer)}>
                    {answer.text}
                </Button>
            ))}
            {selectedAnswer && <p>{selectedAnswer.isCorrect ? "Correct!" : "Incorrect :("}</p>}
        </div>
    );
};

export default Question;
