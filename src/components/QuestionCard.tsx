import React from 'react';
import { ButtonWrapper, Wrapper } from './QuestionCard.styles'
import { AnswerObject } from '../App';

type Props = {
    question:string;
    answers:string[];
    callback: (e : React.MouseEvent<HTMLButtonElement>)=> void;
    userAnswer:AnswerObject | undefined;
    questionNum:number;
    totalQuestions:number;
}

const QuestionCard: React.FC<Props> = ({
    question, 
    answers, 
    callback,
    userAnswer,
    questionNum,
    totalQuestions,
    }) => {
    return (
        <Wrapper>
            <p className="number">
                Question: {questionNum} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            <div>
                {answers.map(answer => (
                    <ButtonWrapper
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}
                        key={answer}>
                        <button disabled={userAnswer ? true:false} onClick={callback} value={answer}>
                            <span dangerouslySetInnerHTML={{__html:answer}}/>
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    )
}

export default QuestionCard;