// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He played the __________ with skill, moving the bellows and pressing the keys to fill the room with lively music at the family gathering.",
        chinese_question: "他熟练地演奏手风琴，移动风箱并按下琴键，在家庭聚会上充满了欢快的音乐。",
        answers: [
            { option: "A", answer: "violin", chinese_answer: "小提琴", chinese_romanization: "xiǎotíqín" },
            { option: "B", answer: "piano", chinese_answer: "钢琴", chinese_romanization: "gāngqín" },
            { option: "C", answer: "accordion", chinese_answer: "手风琴", chinese_romanization: "shǒufēngqín" },
            { option: "D", answer: "guitar", chinese_answer: "吉他", chinese_romanization: "jítā" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'accordion' means a portable musical instrument with metal reeds blown by bellows, played by means of keys and buttons." +
            "<br><br>" +
            "(A) 'violin' means a string instrument which has four strings and is played with a bow." +
            "<br><br>" +
            "(B) 'piano' means a large keyboard musical instrument with a wooden case enclosing a soundboard and metal strings." +
            "<br><br>" +
            "(D) 'guitar' means a stringed musical instrument, typically played by plucking or strumming the strings.",
        chinese_explanation: "(C) '手风琴' 一词意味着一种便携式乐器，带有金属簧片，通过风箱吹奏，通过键和按钮演奏。" +
            "<br><br>" +
            "(A) '小提琴' 意味着一种有四根弦并用弓拉奏的弦乐器。" +
            "<br><br>" +
            "(B) '钢琴' 意味着一种大型键盘乐器，带有木制箱体，内部有音板和金属弦。" +
            "<br><br>" +
            "(D) '吉他' 意味着一种弦乐器，通常通过拨弦或弹奏弦来演奏。"
    },
    {
        id: 2,
        question: "Graduating from university with honours was a significant __________ in her academic career.",
        chinese_question: "以荣誉毕业是她学术生涯中的一项重要 __________。",
        answers: [
            { option: "A", answer: "failure", chinese_answer: "失败", chinese_romanization: "shībài" },
            { option: "B", answer: "setback", chinese_answer: "挫折", chinese_romanization: "cuòzhé" },
            { option: "C", answer: "achievement", chinese_answer: "成就", chinese_romanization: "chéngjiù" },
            { option: "D", answer: "disappointment", chinese_answer: "失望", chinese_romanization: "shīwàng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'achievement' means a thing done successfully, typically by effort, courage, or skill." +
            "<br><br>" +
            "(A) 'failure' means lack of success." +
            "<br><br>" +
            "(B) 'setback' means a reversal or check in progress." +
            "<br><br>" +
            "(D) 'disappointment' means sadness or displeasure caused by the non-fulfillment of one's hopes or expectations.",
        chinese_explanation: "(C) '成就' 一词意味着通过努力、勇气或技能成功完成的事情。" +
            "<br><br>" +
            "(A) '失败' 意味着缺乏成功。" +
            "<br><br>" +
            "(B) '挫折' 意味着进展中的逆转或检查。" +
            "<br><br>" +
            "(D) '失望' 意味着由于未能实现某人的希望或期望而引起的悲伤或不满。"
    },
    {
        id: 3,
        question: "Her work is known for its __________, always maintaining a high standard of quality and precision.",
        chinese_question: "她的工作以其 __________ 而闻名，总是保持高标准的质量和精确度。",
        answers: [
            { option: "A", answer: "consistency", chinese_answer: "一致性", chinese_romanization: "yīzhì xìng" },
            { option: "B", answer: "inconsistency", chinese_answer: "不一致", chinese_romanization: "bù yīzhì" },
            { option: "C", answer: "variation", chinese_answer: "变化", chinese_romanization: "biànhuà" },
            { option: "D", answer: "fluctuation", chinese_answer: "波动", chinese_romanization: "bōdòng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'consistency' means conformity in the application of something, typically that which is necessary for the sake of logic, accuracy, or fairness." +
            "<br><br>" +
            "(B) 'inconsistency' means the fact or state of being inconsistent." +
            "<br><br>" +
            "(C) 'variation' means a change or slight difference in condition, amount, or level, typically within certain limits." +
            "<br><br>" +
            "(D) 'fluctuation' means an irregular rising and falling in number or amount; a variation.",
        chinese_explanation: "(A) '一致性' 一词意味着在应用某事物时的符合性，通常是为了逻辑、准确性或公平起见。" +
            "<br><br>" +
            "(B) '不一致' 意味着不一致的事实或状态。" +
            "<br><br>" +
            "(C) '变化' 意味着条件、数量或水平的变化或轻微差异，通常在某些限制内。" +
            "<br><br>" +
            "(D) '波动' 意味着数量或金额的不规则上升和下降；变化。"
    },
    {
        id: 4,
        question: "The king issued a __________ that all citizens must pay a new tax to support the war effort.",
        chinese_question: "国王发布了一项__________，规定所有公民必须支付一项新税以支持战争。",
        answers: [
            { option: "A", answer: "suggestion", chinese_answer: "建议", chinese_romanization: "jiànyì" },
            { option: "B", answer: "plea", chinese_answer: "请求", chinese_romanization: "qǐngqiú" },
            { option: "C", answer: "decree", chinese_answer: "法令", chinese_romanization: "fǎlìng" },
            { option: "D", answer: "request", chinese_answer: "请求", chinese_romanization: "qǐngqiú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'decree' means an official order issued by a legal authority." +
            "<br><br>" +
            "(A) 'suggestion' means an idea or plan put forward for consideration." +
            "<br><br>" +
            "(B) 'plea' means a request made in an urgent and emotional manner." +
            "<br><br>" +
            "(D) 'request' means an act of asking politely or formally for something.",
        chinese_explanation: "(C) '法令' 一词意味着由法律当局发布的官方命令。" +
            "<br><br>" +
            "(A) '建议' 意味着提出供考虑的想法或计划。" +
            "<br><br>" +
            "(B) '请求' 意味着以紧急和情绪化的方式提出的请求。" +
            "<br><br>" +
            "(D) '请求' 意味着礼貌或正式地请求某事。"
    },
    {
        id: 5,
        question: "Her __________ on environmental issues was clear; she advocated for immediate action to combat climate change.",
        chinese_question: "她对环境问题的__________很明确；她主张立即采取行动应对气候变化。",
        answers: [
            { option: "A", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "stance", chinese_answer: "立场", chinese_romanization: "lìchǎng" },
            { option: "C", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "D", answer: "avoidance", chinese_answer: "回避", chinese_romanization: "huíbì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'stance' means the attitude of a person or organization toward something; a standpoint." +
            "<br><br>" +
            "(A) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(C) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
            "<br><br>" +
            "(D) 'avoidance' means the action of keeping away from or not doing something.",
        chinese_explanation: "(B) '立场' 意味着某人或组织对某事的态度；立场。" +
            "<br><br>" +
            "(A) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(C) '犹豫' 意味着在说或做某事之前的暂停或犹豫的动作。" +
            "<br><br>" +
            "(D) '回避' 意味着远离或不做某事的行为。"
    },
    {
        id: 6,
        question: "He felt a sudden __________ of guilt when he realized he had forgotten his best friend's birthday.",
        chinese_question: "当他意识到忘记了他最好的朋友的生日时，他感到一阵__________的内疚。",
        answers: [
            { option: "A", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" },
            { option: "B", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
            { option: "C", answer: "pang", chinese_answer: "剧痛", chinese_romanization: "jùtòng" },
            { option: "D", answer: "thrill", chinese_answer: "激动", chinese_romanization: "jīdòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pang' means a sudden sharp pain or painful emotion." +
            "<br><br>" +
            "(A) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(B) 'excitement' means a feeling of great enthusiasm and eagerness." +
            "<br><br>" +
            "(D) 'thrill' means a sudden feeling of excitement and pleasure.",
        chinese_explanation: "(C) '剧痛' 一词意味着突然的剧烈疼痛或痛苦的情感。" +
            "<br><br>" +
            "(A) '喜悦' 意味着极大的快乐和幸福。" +
            "<br><br>" +
            "(B) '兴奋' 意味着极大的热情和渴望。" +
            "<br><br>" +
            "(D) '激动' 意味着突然的兴奋和愉悦。"
    },
    {
        id: 7,
        question: "The two families had been involved in a bitter __________ for generations, with no end in sight.",
        chinese_question: "这两家人世代以来一直卷入一场激烈的__________，看不到尽头。",
        answers: [
            { option: "A", answer: "friendship", chinese_answer: "友谊", chinese_romanization: "yǒuyì" },
            { option: "B", answer: "alliance", chinese_answer: "联盟", chinese_romanization: "liánméng" },
            { option: "C", answer: "feud", chinese_answer: "争斗", chinese_romanization: "zhēngdòu" },
            { option: "D", answer: "truce", chinese_answer: "停战", chinese_romanization: "tíngzhàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'feud' means a prolonged and bitter quarrel or dispute." + 
            "<br><br>" + 
            "(A) 'friendship' means a state of mutual trust and support between allied nations." + 
            "<br><br>" + 
            "(B) 'alliance' means a union or association formed for mutual benefit, especially between countries or organizations." + 
            "<br><br>" + 
            "(D) 'truce' means an agreement between enemies or opponents to stop fighting or arguing for a certain time.",
        chinese_explanation: "(C) '争斗'一词意味着长期和激烈的争吵或争执。" + 
            "<br><br>" + 
            "(A) '友谊' 意味着盟国之间的相互信任和支持的状态。" + 
            "<br><br>" + 
            "(B) '联盟' 意味着为共同利益而形成的联合或协会，特别是在国家或组织之间。" + 
            "<br><br>" + 
            "(D) '停战' 意味着敌人或对手之间在一定时间内停止战斗或争吵的协议。"
    },
    {
        id: 8,
        question: "The children were full of __________ as they played pranks on each other.",
        chinese_question: "孩子们充满了 __________，互相恶作剧。",
        answers: [
            { option: "A", answer: "mischief", chinese_answer: "恶作剧", chinese_romanization: "èzuòjù" },
            { option: "B", answer: "kindness", chinese_answer: "善良", chinese_romanization: "shànliáng" },
            { option: "C", answer: "boredom", chinese_answer: "无聊", chinese_romanization: "wúliáo" },
            { option: "D", answer: "sadness", chinese_answer: "悲伤", chinese_romanization: "bēishāng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'mischief' means playful misbehavior or troublemaking, especially in children." + 
            "<br><br>" + 
            "(B) 'kindness' means the quality of being friendly, generous, and considerate." + 
            "<br><br>" + 
            "(C) 'boredom' means the state of feeling bored." + 
            "<br><br>" + 
            "(D) 'sadness' means the condition or quality of being sad.",
        chinese_explanation: "(A) '恶作剧' 意味着顽皮的行为或捣乱，特别是在儿童中。" + 
            "<br><br>" + 
            "(B) '善良' 意味着友好、慷慨和体贴的品质。" + 
            "<br><br>" + 
            "(C) '无聊' 意味着感到无聊的状态。" + 
            "<br><br>" + 
            "(D) '悲伤' 意味着悲伤的状态或质量。"
    },
    {
        id: 9,
        question: "Her __________ to become a doctor drove her to study hard and excel in her exams.",
        chinese_question: "她成为医生的__________驱使她努力学习并在考试中取得优异成绩。",
        answers: [
            { option: "A", answer: "laziness", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" },
            { option: "B", answer: "ambition", chinese_answer: "野心", chinese_romanization: "yěxīn" },
            { option: "C", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "indifference", chinese_answer: "无动于衷", chinese_romanization: "wúdòngyúzhōng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ambition' means a strong desire to do or achieve something, typically requiring determination and hard work." + 
            "<br><br>" + 
            "(A) 'laziness' means the quality of being unwilling to work or use energy; idleness." + 
            "<br><br>" + 
            "(C) 'apathy' means lack of interest, enthusiasm, or concern." + 
            "<br><br>" + 
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(B) '野心'一词意味着强烈的愿望去做或实现某事，通常需要决心和努力。" + 
            "<br><br>" + 
            "(A) '懒惰' 意味着不愿工作或使用能量的品质；懒惰。" + 
            "<br><br>" + 
            "(C) '冷漠' 意味着缺乏兴趣、热情或关心。" + 
            "<br><br>" + 
            "(D) '无动于衷' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 10,
        question: "She moved with such __________, gliding effortlessly across the room, that everyone stopped to watch.",
        chinese_question: "她的动作如此 __________，在房间里轻松滑行，每个人都停下来观看。",
        answers: [
            { option: "A", answer: "grace", chinese_answer: "优雅", chinese_romanization: "yōuyǎ" },
            { option: "B", answer: "clumsiness", chinese_answer: "笨拙", chinese_romanization: "bènzhuō" },
            { option: "C", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "D", answer: "awkwardness", chinese_answer: "尴尬", chinese_romanization: "gāngà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'grace' means simple elegance or refinement of movement." +
            "<br><br>" +
            "(B) 'clumsiness' means awkward in movement or in handling things." +
            "<br><br>" +
            "(C) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
            "<br><br>" +
            "(D) 'awkwardness' means causing or feeling embarrassment or inconvenience.",
        chinese_explanation: "(A) '优雅' 意味着简单的优雅或动作的精致。" +
            "<br><br>" +
            "(B) '笨拙' 意味着动作或处理事物时笨拙。" +
            "<br><br>" +
            "(C) '犹豫' 意味着在说或做某事前暂停的动作。" +
            "<br><br>" +
            "(D) '尴尬' 意味着引起或感到尴尬或不便。"
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
