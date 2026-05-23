import {shuffleArray} from '../utils/utils'

export type Question = {
    category: string;
    correct_answer:string;
    difficulty: string;
    incorrect_answers: string[];
    question:string;
    type:string
}

export type QuestionState = Question & {answers: string[]}

export enum Difficulty {
    Easy = 'easy',
    Medium = 'medium',
    Hard = 'hard',
}

export const fetchQuizQuestions = async (
    amount: number,
    difficulty: Difficulty,
) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    
    const response = await fetch(endpoint);

    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.results) {
        throw new Error('No results returned from API');
    }

    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([
            ...question.incorrect_answers,
            question.correct_answer,
        ])
    }));
}