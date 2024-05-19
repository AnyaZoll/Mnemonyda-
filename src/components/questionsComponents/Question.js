class Question{
    constructor(conditionTask,type, rightAnswer){
        this.conditionTask = conditionTask;
        this.type = type;
        this.rightAnswer = rightAnswer;
    }
}


class SelectManyQuestions extends Question{
    constructor(conditionTask, type, answerOptions = [], rightAnswer){
        super(conditionTask, type, rightAnswer);
        this.answerOptions = answerOptions;
    }
}

class SelectOneQuestion extends Question{
    constructor(conditionTask, type, answerOptions = [], rightAnswer){
        super(conditionTask, type, rightAnswer);
        this.answerOptions = answerOptions;
    }
}

class StringQuestion extends Question{
    constructor(conditionTask, type, answerOptions = '', rightAnswer){
        super(conditionTask, type, rightAnswer);
        this.answerOptions = answerOptions;
    }
}

class manyOptionsStrategy {
    create(conditionTask, answerOptions, rightAnswer){
        return new SelectManyQuestions(conditionTask, 'selectMany', answerOptions, rightAnswer);
    }
}
class oneOptionsStrategy {
    create(conditionTask, answerOptions, rightAnswer){
        return new SelectManyQuestions(conditionTask, 'selectOne', answerOptions, rightAnswer);
    }
}
class stringStrategy {
    create(conditionTask, answerOptions, rightAnswer){
        return new SelectManyQuestions(conditionTask, 'selectString', answerOptions, rightAnswer);
    }
}

class QuestionFactory{
  constructor(){
    this.strategys = {
        selectMany: new manyOptionsStrategy(),
        selectOne: new oneOptionsStrategy(),
        selectString: new stringStrategy()
    };
  }
  create(type, conditionTask, answerOptions,rightAnswer){
    const strategy = this.strategys[type];
    return strategy.create(conditionTask, answerOptions, rightAnswer);
  }
        
} // класс-контекст

const factory = new QuestionFactory();
const one = factory.create('selectOne', 'selectOne', [2,54,5], 2)

console.log(one);