// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite facing numerous setbacks, she continued to __________, determined to achieve her dreams no matter what.",
        chinese_question: "尽管面临许多挫折，她仍然继续 __________，决心无论如何都要实现她的梦想。",
        answers: [
            { option: "A", answer: "quit", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "B", answer: "relax", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
            { option: "C", answer: "persevere", chinese_answer: "坚持", chinese_romanization: "jiānchí" },
            { option: "D", answer: "retreat", chinese_answer: "撤退", chinese_romanization: "chètuì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'persevere' means continue in a course of action even in the face of difficulty or with little or no prospect of success." +
            "<br><br>" +
            "(A) 'quit' means leave (a place), usually permanently." +
            "<br><br>" +
            "(B) 'relax' means make or become less tense or anxious." +
            "<br><br>" +
            "(D) 'retreat' means withdraw from enemy forces as a result of their superior power or after a defeat.",
        chinese_explanation: "(C) '坚持' 意味着即使面临困难或几乎没有成功的希望，也继续采取行动。" +
            "<br><br>" +
            "(A) '放弃' 意味着离开（一个地方），通常是永久的。" +
            "<br><br>" +
            "(B) '放松' 意味着变得或使变得不那么紧张或焦虑。" +
            "<br><br>" +
            "(D) '撤退' 意味着由于敌军的强大力量或战败而撤退。"
    },
    {
        id: 2,
        question: "To truly understand wildlife behavior, one must __________ them in their natural habitat without interfering.",
        chinese_question: "要真正了解野生动物的行为，人们必须在不干扰的情况下在自然栖息地中 __________ 它们。",
        answers: [
            { option: "A", answer: "disturb", chinese_answer: "干扰", chinese_romanization: "gānrǎo" },
            { option: "B", answer: "observe", chinese_answer: "观察", chinese_romanization: "guānchá" },
            { option: "C", answer: "disrupt", chinese_answer: "扰乱", chinese_romanization: "rǎoluàn" },
            { option: "D", answer: "alter", chinese_answer: "改变", chinese_romanization: "gǎibiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'observe' means notice or perceive (something) and register it as being significant." +
            "<br><br>" +
            "(A) 'disturb' means interfere with the normal arrangement or functioning of." +
            "<br><br>" +
            "(C) 'disrupt' means interrupt (an event, activity, or process) by causing a disturbance or problem." +
            "<br><br>" +
            "(D) 'alter' means change or cause to change in character or composition.",
        chinese_explanation: "(B) '观察' 意味着注意或感知（某事）并将其登记为重要。" +
            "<br><br>" +
            "(A) '干扰' 意味着干涉正常的安排或功能。" +
            "<br><br>" +
            "(C) '扰乱' 意味着通过造成干扰或问题来中断（事件、活动或过程）。" +
            "<br><br>" +
            "(D) '改变' 意味着在性格或组成上改变或导致改变。"
    },
    {
        id: 3,
        question: "She carefully __________ the young plants, ensuring they received enough water and sunlight to thrive.",
        chinese_question: "她细心地 __________ 幼苗，确保它们得到足够的水和阳光来茁壮成长。",
        answers: [
            { option: "A", answer: "neglected", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "nourished", chinese_answer: "滋养", chinese_romanization: "zīyǎng" },
            { option: "C", answer: "abandoned", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "D", answer: "spurned", chinese_answer: "冷落", chinese_romanization: "lěngluò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nourished' means provide with the food or other substances necessary for growth, health, and good condition." +
            "<br><br>" +
            "(A) 'neglected' means fail to care for properly." +
            "<br><br>" +
            "(C) 'abandoned' means give up completely (a course of action, a practice, or a way of thinking)." +
            "<br><br>" +
            "(D) 'spurned' means reject with disdain or contempt.",
        chinese_explanation: "(B) '滋养' 意味着提供生长、健康和良好状态所需的食物或其他物质。" +
            "<br><br>" +
            "(A) '忽视' 意味着未能正确照顾。" +
            "<br><br>" +
            "(C) '放弃' 意味着完全放弃（行动、做法或思维方式）。" +
            "<br><br>" +
            "(D) '冷落' 意味着以蔑视或轻蔑的态度拒绝。"
    },
    {
        id: 4,
        question: "The diplomats met to __________ a peace treaty that would end the long-standing conflict between the two nations.",
        chinese_question: "外交官们会面 __________ 一项和平条约，以结束两国之间长期的冲突。",
        answers: [
            { option: "A", answer: "prevaricate", chinese_answer: "支吾其词", chinese_romanization: "zhīwū qí cí" },
            { option: "B", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "C", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
            { option: "D", answer: "negotiate", chinese_answer: "谈判", chinese_romanization: "tánpàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'negotiate' means try to reach an agreement or compromise by discussion with others." +
            "<br><br>" +
            "(A) 'prevaricate' means speak or act in an evasive way." +
            "<br><br>" +
            "(B) 'exacerbate' means make (a problem, bad situation, or negative feeling) worse." +
            "<br><br>" +
            "(C) 'dismiss' means order or allow to leave; send away.",
        chinese_explanation: "(D) '谈判' 意味着通过与他人讨论试图达成协议或妥协。" +
            "<br><br>" +
            "(A) '支吾其词' 意味着以模棱两可的方式说话或行动。" +
            "<br><br>" +
            "(B) '加剧' 意味着使（问题、糟糕的情况或负面情绪）变得更糟。" +
            "<br><br>" +
            "(C) '驳回' 意味着下令或允许离开；遣散。"
    },
    {
        id: 5,
        question: "Her speech was designed to __________ the audience, encouraging them to chase their dreams with passion and determination.",
        chinese_question: "她的演讲旨在 __________ 听众，鼓励他们以激情和决心追逐梦想。",
        answers: [
            { option: "A", answer: "discourage", chinese_answer: "灰心", chinese_romanization: "huīxīn" },
            { option: "B", answer: "inspire", chinese_answer: "激励", chinese_romanization: "jīlì" },
            { option: "C", answer: "demotivate", chinese_answer: "使失去动力", chinese_romanization: "shǐ shīqù dònglì" },
            { option: "D", answer: "dishearten", chinese_answer: "使气馁", chinese_romanization: "shǐ qìněi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inspire' means fill (someone) with the urge or ability to do or feel something, especially to do something creative." +
            "<br><br>" +
            "(A) 'discourage' means cause (someone) to lose confidence or enthusiasm." +
            "<br><br>" +
            "(C) 'demotivate' means make (someone) less eager to work or study." +
            "<br><br>" +
            "(D) 'dishearten' means cause (someone) to lose determination or confidence.",
        chinese_explanation: "(B) '激励' 意味着给某人以动力或能力去做某事，特别是做某事有创意的。" +
            "<br><br>" +
            "(A) '灰心' 意味着使某人失去信心或热情。" +
            "<br><br>" +
            "(C) '使失去动力' 意味着使某人更不愿工作或学习。" +
            "<br><br>" +
            "(D) '使气馁' 意味着使某人失去决心或信心。"
    },
    {
        id: 6,
        question: "The police were called to __________ the mysterious disappearance of the valuable painting.",
        chinese_question: "警方被叫来 __________ 贵重画作的神秘失踪。",
        answers: [
            { option: "A", answer: "investigate", chinese_answer: "调查", chinese_romanization: "diàochá" },
            { option: "B", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "C", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "D", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'investigate' means to carry out a systematic or formal inquiry to discover and examine the facts." +
            "<br><br>" +
            "(B) 'neglect' means to fail to care for properly." +
            "<br><br>" +
            "(C) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(D) 'conceal' means to keep from sight; hide.",
        chinese_explanation: "(A) '调查' 意味着进行系统或正式的查询以发现和检查事实。" +
            "<br><br>" +
            "(B) '忽略' 意味着未能适当照顾。" +
            "<br><br>" +
            "(C) '庆祝' 意味着以社交聚会或愉快的活动来承认一个重要或愉快的日子或事件。" +
            "<br><br>" +
            "(D) '隐藏' 意味着从视线中隐藏；隐藏。"
    },
    {
        id: 7,
        question: "The flight simulator is designed to __________ real-life flying conditions, helping pilots practice without the risk.",
        chinese_question: "飞行模拟器旨在 __________ 真实的飞行条件，帮助飞行员在没有风险的情况下进行练习。",
        answers: [
            { option: "A", answer: "mimic", chinese_answer: "模仿", chinese_romanization: "mófǎng" },
            { option: "B", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzáhuà" },
            { option: "C", answer: "simulate", chinese_answer: "模拟", chinese_romanization: "mónǐ" },
            { option: "D", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'simulate' means imitate the appearance or character of." +
            "<br><br>" +
            "(A) 'mimic' means imitate (someone or their actions or words), typically in order to entertain or ridicule." +
            "<br><br>" +
            "(B) 'complicate' means make (something) more difficult or confusing by causing it to be more complex." +
            "<br><br>" +
            "(D) 'abandon' means give up completely (a course of action, a practice, or a way of thinking).",
        chinese_explanation: "(C) '模拟' 一词意味着模仿...的外观或特性。" +
            "<br><br>" +
            "(A) '模仿' 意味着模仿（某人或其行动或言语），通常是为了娱乐或嘲笑。" +
            "<br><br>" +
            "(B) '复杂化' 意味着通过使其更复杂来使（某事）更困难或令人困惑。" +
            "<br><br>" +
            "(D) '放弃' 意味着完全放弃（行动、实践或思维方式）。"
    },
    {
        id: 8,
       question: "The doctor warned that without proper treatment, the illness might __________, causing more severe health issues in the future.",
       chinese_question: "医生警告说，如果不进行适当的治疗，疾病可能会 __________，在未来引发更严重的健康问题。",
       answers: [
           { option: "A", answer: "recur", chinese_answer: "复发", chinese_romanization: "fùfā" },
           { option: "B", answer: "disappear", chinese_answer: "消失", chinese_romanization: "xiāoshī" },
           { option: "C", answer: "heal", chinese_answer: "治愈", chinese_romanization: "zhìyù" },
           { option: "D", answer: "cease", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" }
       ],
       correctAnswer: "A",
       explanation: "(A) 'recur' means occur again periodically or repeatedly." +
           "<br><br>" +
           "(B) 'disappear' means cease to be visible." +
           "<br><br>" +
           "(C) 'heal' means cause (a wound, injury, or person) to become sound or healthy again." +
           "<br><br>" +
           "(D) 'cease' means bring or come to an end.",
       chinese_explanation: "(A) '复发' 一词意味着定期或反复发生。" +
           "<br><br>" +
           "(B) '消失' 意味着不再可见。" +
           "<br><br>" +
           "(C) '治愈' 意味着使（伤口、受伤或人）恢复健康或健康。" +
           "<br><br>" +
           "(D) '停止' 意味着结束或结束。"
    },
    {
        id: 9,
        question: "The oppressed citizens began to __________ against the tyrannical government, demanding their rights and freedom.",
        chinese_question: "受压迫的公民开始 __________ 暴政政府，要求他们的权利和自由。",
        answers: [
            { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "B", answer: "obey", chinese_answer: "服从", chinese_romanization: "fúcóng" },
            { option: "C", answer: "rebel", chinese_answer: "反抗", chinese_romanization: "fǎnkàng" },
            { option: "D", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'rebel' means rise in opposition or armed resistance to an established government or leader." +
            "<br><br>" +
            "(B) 'support' means bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(A) 'obey' means comply with the command, direction, or request of (a person or a law); submit to the authority of." +
            "<br><br>" +
            "(D) 'praise' means express warm approval or admiration of.",
        chinese_explanation: "(C) '反抗' 一词意味着对现有政府或领导人进行反对或武装抵抗。" +
            "<br><br>" +
            "(B) '支持' 意味着承受所有或部分重量；支撑。" +
            "<br><br>" +
            "(A) '服从' 意味着遵守（人的命令、指示或要求）；服从权威。" +
            "<br><br>" +
            "(D) '赞美' 意味着表达温暖的赞同或钦佩。"
    },
    {
        id: 10,
        question: "In her speech, she __________ a famous line from Martin Luther King Jr. to emphasize the importance of equality and justice.",
        chinese_question: "在她的演讲中，她 __________ 马丁·路德·金的一句名言，强调平等和正义的重要性。",
        answers: [
            { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "misquoted", chinese_answer: "错引", chinese_romanization: "cuò yǐn" },
            { option: "C", answer: "contradicted", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
            { option: "D", answer: "quoted", chinese_answer: "引用", chinese_romanization: "yǐnyòng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'quoted' means repeat or copy out (a group of words from a text or speech), typically with an indication that one is not the original author or speaker." +
            "<br><br>" +
            "(A) 'ignored' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(B) 'misquoted' means give an incorrect or inaccurate version of what someone has said or written." +
            "<br><br>" +
            "(C) 'contradicted' means deny the truth of (a statement), especially by asserting the opposite.",
        chinese_explanation: "(D) '引用' 一词意味着重复或抄录（文本或讲话中的一组词），通常表明自己不是原作者或演讲者。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认；故意无视。" +
            "<br><br>" +
            "(B) '错引' 意味着给出某人所说或所写内容的不正确或不准确的版本。" +
            "<br><br>" +
            "(C) '反驳' 意味着否认（陈述）的真实性，尤其是通过断言相反。"
    }
];


// Function to restart the quiz
function restartQuiz() {
    // Reload the page to restart the quiz
    location.reload();
}

// Variable to keep track of the current question index
var currentQuestionIndex = 0;

// Variable to keep track of the total score
var totalScore = 0;

// Array to store the selected answers for each question
var selectedAnswers = new Array(questions.length).fill(null);

// Variable to track the state of the Chinese translations checkbox
var chineseTranslationsChecked = false;

// Function to toggle Chinese translations
function toggleChineseTranslations() {
    var toggleChineseCheckbox = document.getElementById('toggleChinese');
    chineseTranslationsChecked = !chineseTranslationsChecked; // Toggle checkbox state
    // Call the displayQuestion() function to update the display based on the checkbox state
    displayQuestion(chineseTranslationsChecked);
}



// Function to toggle question shuffling
function toggleQuestionShuffle() {
    var shuffleCheckbox = document.getElementById('shuffleQuestions');
    var shuffleEnabled = shuffleCheckbox.checked;

    // Check if the current question has been answered
    var currentQuestionAnswered = selectedAnswers[currentQuestionIndex] !== null;

    // If the current question has been answered and shuffling is enabled
    if (currentQuestionAnswered && shuffleEnabled) {
        // Move to the next question automatically
        nextQuestion();
    }

    // Call the shuffleQuestions() function to update the questions based on the checkbox state
    shuffleQuestions(shuffleEnabled);
}


// Function to shuffle the remaining unanswered questions
function shuffleQuestions(shuffleEnabled) {
    // Clear the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = null;

    // Copy the questions array
    var remainingQuestions = questions.slice(currentQuestionIndex);

    // Sort the remaining questions based on their IDs
    remainingQuestions.sort((a, b) => a.id - b.id);

    // If shuffling is enabled, shuffle the remaining questions
    if (shuffleEnabled) {
        // Shuffle the remaining questions array using Fisher-Yates algorithm
        for (var i = remainingQuestions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = remainingQuestions[i];
            remainingQuestions[i] = remainingQuestions[j];
            remainingQuestions[j] = temp;
        }
    }

    // Update the questions array with the shuffled remaining questions
    questions.splice(currentQuestionIndex, remainingQuestions.length, ...remainingQuestions);

    // Clear the selected MCQ option buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('option-selected', 'correct', 'wrong');
    });

    // Display the current question after shuffling
    displayQuestion(document.getElementById('toggleChinese').checked);

    // Update the progress bar
    updateProgressBar();
}


// Function to display the current question
function displayQuestion() {
    // Get the current question object
    var currentQuestion = questions[currentQuestionIndex];
    
    // Extract question texts and options
    var questionText = currentQuestion.question;
    var questionTextCN = currentQuestion.chinese_question;
    var options = currentQuestion.answers;

    // Display the question text in English without the question number
    document.getElementById('question').innerHTML = questionText;

    // Display the question text in Chinese if the checkbox is checked or if Chinese translations were manually toggled on
    if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
        document.getElementById('question_cn').innerHTML = questionTextCN;
    } else {
        document.getElementById('question_cn').innerHTML = ""; // Clear Chinese question
    }

    // Display the options as buttons with selected state
    var optionsHTML = "";
    for (var i = 0; i < options.length; i++) {
        var isSelected = selectedAnswers[currentQuestionIndex] === options[i].option;
        var optionClass = "option-btn";
        if (isSelected) {
            optionClass += ' option-selected'; // Add option-selected class if option is selected
            // Add correct or wrong class based on the correctness of the option
            if (options[i].option === currentQuestion.correctAnswer) {
                optionClass += ' correct';
            } else {
                optionClass += ' wrong';
            }
        }
        optionsHTML += '<button class="' + optionClass + '" onclick="selectAnswer(' + i + ')" value="' + options[i].option + '">' + options[i].option + '. ' + options[i].answer;
        
        // Append Chinese translation if the checkbox is checked or if Chinese translations were manually toggled on
        if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
            optionsHTML += ' (' + options[i].chinese_answer + ' ' + options[i].chinese_romanization + ')';
        }
        
        optionsHTML += '</button><br>'; // Modify this line to remove the "-"
    }
    document.getElementById('options').innerHTML = optionsHTML;

    // Update the progress bar
    updateProgressBar();
}




// Function to handle the answer selection
function selectAnswer(optionIndex) {
    // Update the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].answers[optionIndex].option;

    // Disable all option buttons to prevent further selection
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Check if the selected answer is correct
    var isCorrect = selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer;

    // Display the result
    checkAnswer(selectedAnswers[currentQuestionIndex], isCorrect);
}


// Function to check the answer and display the result
function checkAnswer(selectedOption, isCorrect) {
    // Extract correct answer and explanation
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    var correctAnswerEN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer;
    var correctAnswerCN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer;
    var correctAnswerRomanization = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_romanization; // Add this line to extract the romanization
    var explanation = questions[currentQuestionIndex].explanation;
    var chineseExplanation = questions[currentQuestionIndex].chinese_explanation;

    // Display result and score
    var resultHTML = "";
    if (isCorrect) {
        // Increase the total score
        totalScore++;

        // Play correct sound
        var audio = new Audio('correct.mp3');
        audio.play();

        // Display correct message and explanation
        resultHTML += "<span class='correct-explanation'>Correct</span><br>"; // Added class for correct explanation
    } else {
        // Play incorrect sound
        var audio = new Audio('incorrect.mp3');
        audio.play();

        // Display incorrect message and correct answer
        resultHTML += "<span class='wrong-explanation'>Incorrect</span><br>"; // Added class for wrong explanation
    }

    resultHTML += "The correct answer is: " + correctAnswer + ": " + correctAnswerEN + ", " + correctAnswerCN + " (" + correctAnswerRomanization + ")<br><br>"; // Modify this line to include the romanization
    resultHTML += "Explanation (English):<br>" + explanation + "<br><br>";
    resultHTML += "Explanation (Chinese):<br>" + chineseExplanation + "<br><br>";

    // Display total score
    resultHTML += "Total Score: " + totalScore + "/" + questions.length;
    document.getElementById('result').innerHTML = resultHTML;

    // Apply correct or incorrect styling to the selected MCQ option button
    var selectedOptionButton = document.querySelector('.option-btn[value="' + selectedOption + '"]');
    if (isCorrect) {
        selectedOptionButton.classList.add('correct');
    } else {
        selectedOptionButton.classList.add('wrong');
    }
}



// Function to update the progress bar
function updateProgressBar() {
    // Calculate the progress percentage
    var progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    // Update the width of the progress bar
    document.getElementById('progress-bar').style.width = progress + '%';
}


// Function to move to the previous question
function previousQuestion() {
    // Decrease the current question index
    currentQuestionIndex--;

    // Ensure the index does not go below 0
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    // Check the state of the checkbox for Chinese translations
    var showChineseTranslations = document.getElementById('toggleChinese').checked;

    // Display the previous question with the appropriate translations
    displayQuestion(showChineseTranslations);

    // Disable all MCQ buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Enable the previously selected MCQ button
    var previousSelectedAnswer = selectedAnswers[currentQuestionIndex];
    buttons.forEach(function(btn) {
        if (btn.value === previousSelectedAnswer) {
            btn.disabled = false;
            // Check if the previously selected answer is correct or wrong and apply the appropriate class
            if (previousSelectedAnswer === questions[currentQuestionIndex].correctAnswer) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        }
    });

    // Show the selected answer and its correctness for the previous question
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Display the explanation for the previous question
    var explanationHTML = "";
    if (previousSelectedAnswer) {
        var answerColorClass = previousSelectedAnswer === correctAnswer ? 'correct' : 'wrong';
        explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (previousSelectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
    }
    explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
    explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
    explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
    document.getElementById('result').innerHTML = explanationHTML;
}




// Function to end the quiz and display the total score in a popup box
function endQuiz() {
    // Display a popup box with the quiz ended message and total score
    alert("Congratulations! You've reached the end.\n\nYour Total Score: " + totalScore + "/" + questions.length);
}



// Function to move to the next question
// Function to move to the next question
function nextQuestion() {
    // Ensure the "Turn on Chinese translations" checkbox remains unchecked
    chineseTranslationsChecked = false;

    // Check if the player has selected an answer for the current question
    if (selectedAnswers[currentQuestionIndex] === null) {
        // If no answer is selected, display an error message in a popup box
        alert("Please select an answer for Question " + (currentQuestionIndex + 1) + " before moving to the next question.");
        return; // Exit the function to prevent moving to the next question
    }

    // Increase the current question index
    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex >= questions.length) {
        // If all questions have been answered, end the quiz
        endQuiz();
        // Reset the current question index to prevent accessing out of bounds
        currentQuestionIndex = questions.length - 1;
    } else {
        // Display the next question with both English and Chinese translations by default
        displayQuestion(chineseTranslationsChecked);

        // Show the selected answer and its correctness for the next question
        var selectedAnswer = selectedAnswers[currentQuestionIndex];
        var correctAnswer = questions[currentQuestionIndex].correctAnswer;

        // Find the button corresponding to the selected answer
        var buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(function(btn) {
            if (btn.value === selectedAnswer) {
                if (selectedAnswer === correctAnswer) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                }
            }
        });

        // Display the explanation for the next question
        var explanationHTML = "";
        if (selectedAnswer) {
            var answerColorClass = selectedAnswer === correctAnswer ? 'correct' : 'wrong';
            explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (selectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
            explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
            explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
            explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
        }
        document.getElementById('result').innerHTML = explanationHTML;
    }
}



function startOver() {
    // Reset the current question index to the first question
    currentQuestionIndex = 0;

    // Reset the total score and selected answers
    totalScore = 0;
    selectedAnswers.fill(null);

    // Uncheck the checkbox for Chinese translations
    document.getElementById('toggleChinese').checked = false;

    // Uncheck the checkbox for shuffling questions
    document.getElementById('shuffleQuestions').checked = false;

    // Reset the order of questions to the default state
    // Sort the questions array based on the 'id' property to revert to the original order
    questions.sort((a, b) => a.id - b.id);

    // Display the first question
    // Display only English translations by passing 'false' to the displayQuestion function
    displayQuestion(false);

    // Clear the result section
    document.getElementById('result').innerHTML = "";

    // Reset font size to default
    increaseFontSize = true; // Set the flag to true for increasing font size
    adjustFontSize(); // Adjust font size of all elements
    adjustChineseFontSize(); // Adjust font size of Chinese elements and explanations
}




// Function to adjust font size of all elements
function adjustFontSize() {
    var container = document.querySelector('.container');
    var elements = container.querySelectorAll('*');
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Scale factor for increasing or decreasing font size

    elements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Function to adjust font size of Chinese elements and explanations
function adjustChineseFontSize() {
    var container = document.querySelector('.container');
    var chineseElements = container.querySelectorAll('[lang="zh"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...chineseElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Display the first question when the page loads with both English and Chinese translations by default
window.onload = function() {
    toggleChineseTranslations();
    adjustFontSize(); // Initialize font size
    adjustChineseFontSize(); // Initialize Chinese font size
};


// + button event listener
document.getElementById('increase-font-size').addEventListener('click', function() {
    increaseFontSize = true;
    adjustFontSize();
    adjustChineseFontSize();
});

// - button event listener
document.getElementById('decrease-font-size').addEventListener('click', function() {
    increaseFontSize = false;
    adjustFontSize();
    adjustChineseFontSize();
});

// Chinese translation checkbox event listener
document.getElementById('toggleChinese').addEventListener('click', function() {
    adjustChineseFontSize();
});

// Shuffle checkbox event listener
document.getElementById('shuffleQuestions').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
});


function goToHomePage() {
    // Redirect to the main index page
    window.location.href = "../index.html";
}
