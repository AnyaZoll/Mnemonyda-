

function QuestionForm({addQuestion}) {
    
    const [questions, setQuestions] = useState([]);
    const [conditionTask, setConditionTask] = useState('');
    const [type, setType] = useState('');
    const [answerOptions, setAnswerOptions] = useState([]);
    const [rightAnswer, setRightAnswer] = useState('');

    const QuestionFactory = new QuestionFactory();
}