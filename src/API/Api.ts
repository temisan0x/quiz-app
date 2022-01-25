export enum Difficulty {
    Easy = 'easy',
    Medium = 'medium',
    Hard = 'hard',
}

export type Question = {
    category: string;
    correct_answer:string;
    difficulty: string;
    incorrect_answer: string[];
    question:string;
    type:string
}

export type QuestionState = Question & {answers: string[]}

export const fetchQuizQuestions = async (
    amount: number,
    difficulty:Difficulty,
) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data =await(await fetch(endpoint)).json();
    return data.results.map((question:Question) => ({
        ...question, 
        answer: 
    }))
}