export class Question{
    constructor(conditionTask,type, answerOptions, rightAnswer ){
        this.conditionTask = conditionTask;
        this.type = type;
        this.answerOptions = answerOptions;
        this.rightAnswer = rightAnswer;
    }
}

export class SelectManyQuestions extends Question{
    constructor(conditionTask, type, answerOptions = [], rightAnswer ){
        super(conditionTask, 'selectMany', answerOptions, rightAnswer);
       
    }
}

export class SelectOneQuestion extends Question{
    constructor(conditionTask, type, answerOptions = [], rightAnswer){
        super(conditionTask, 'selectOne', answerOptions, rightAnswer);
        
    }
}

export class StringQuestion extends Question{
    constructor(conditionTask, type, answerOptions = '', rightAnswer ){
        super(conditionTask, 'selectString', answerOptions, rightAnswer);
        
    }
}
/*class BaseFactory{
    create(){};
    constructor(conditionTask, answerOptions, rightAnswer){
        this.conditionTask = conditionTask;
        this.answerOptions = answerOptions;
        this.rightAnswer = rightAnswer;
    }
}
class ManyOptionsFactory extends BaseFactory{
    constructor(conditionTask, answerOptions, rightAnswer){
        super(conditionTask, answerOptions,rightAnswer )
    }
    create(){
        const parsedRightAnswer = this.rightAnswer.split(',').map(answer=> answer.trim());
        return new SelectManyQuestions(this.conditionTask, this.answerOptions, parsedRightAnswer);
    }
}
class OneOptionsFactory extends BaseFactory {
    constructor(conditionTask, answerOptions, rightAnswer){
        super(conditionTask, answerOptions,rightAnswer )
    }
    create(){
        return new SelectOneQuestion(this.conditionTask, this.answerOptions, parsedRightAnswer);
    }
}
class StringFactory extends BaseFactory {
    constructor(conditionTask, answerOptions, rightAnswer){
        super(conditionTask, answerOptions,rightAnswer )
    }
    create(){
        const parsedRightAnswer = this.rightAnswer.trim();
        return new StringQuestion(this.conditionTask,  this.aswerOptions, parsedRightAnswer);
    }
}  */

export class QuestionFactory{
    createQuestion(type, conditionTask, answerOptions, rightAnswer) {
        switch(type) {
            case 'selectMany':
                return new SelectManyQuestions(conditionTask, answerOptions, rightAnswer);
            case 'selectOne':
                return new SelectOneQuestion(conditionTask, answerOptions, rightAnswer);
            case 'selectString':
                return new StringQuestion(conditionTask, answerOptions, rightAnswer);
            default:
                throw new Error('Unknown question type');
        }
    }
} // класс-контекст

const factory = new QuestionFactory();


