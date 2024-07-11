// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The archaeologist worked tirelessly to __________ the ancient script found on the walls of the tomb.",
        chinese_question: "考古学家不知疲倦地工作，试图__________在墓墙上发现的古代文字。",
        answers: [
            { option: "A", answer: "encode", chinese_answer: "编码", chinese_romanization: "biānmǎ" },
            { option: "B", answer: "erase", chinese_answer: "擦除", chinese_romanization: "cāchú" },
            { option: "C", answer: "decipher", chinese_answer: "破译", chinese_romanization: "pòyì" },
            { option: "D", answer: "blur", chinese_answer: "模糊", chinese_romanization: "móhú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'decipher' means to convert a text written in code, or a coded signal, into normal language." +
            "<br><br>" +
            "(A) 'encode' means to convert into a coded form." +
            "<br><br>" +
            "(B) 'erase' means to remove or obliterate something." +
            "<br><br>" +
            "(D) 'blur' means to make or become unclear or less distinct.",
        chinese_explanation: "(C) '破译' 一词意味着将用代码编写的文本或编码信号转换为正常语言。" +
            "<br><br>" +
            "(A) '编码' 意味着转换成编码形式。" +
            "<br><br>" +
            "(B) '擦除' 意味着移除或抹去某物。" +
            "<br><br>" +
            "(D) '模糊' 意味着使变得不清晰或不太明显。"
    },
    {
        id: 2,
        question: "The villagers decided to __________ the walls of their town to protect against invaders.",
        chinese_question: "村民们决定 __________ 他们城镇的城墙以抵御入侵者。",
        answers: [
            { option: "A", answer: "fortify", chinese_answer: "加固", chinese_romanization: "jiāgù" },
            { option: "B", answer: "weaken", chinese_answer: "削弱", chinese_romanization: "xuēruò" },
            { option: "C", answer: "decorate", chinese_answer: "装饰", chinese_romanization: "zhuāngshì" },
            { option: "D", answer: "expand", chinese_answer: "扩展", chinese_romanization: "kuòzhǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fortify' means to strengthen (a place) with defensive works so as to protect it against attack." +
            "<br><br>" +
            "(B) 'weaken' means make or become weaker in power, resolve, or physical strength." +
            "<br><br>" +
            "(C) 'decorate' means to make (something) look more attractive by adding extra items or images." +
            "<br><br>" +
            "(D) 'expand' means to increase in size, number, or importance.",
        chinese_explanation: "(A) '加固' 意味着用防御工程加强（一个地方）以保护其免受攻击。" +
            "<br><br>" +
            "(B) '削弱' 意味着使或变得在力量、决心或体力上减弱。" +
            "<br><br>" +
            "(C) '装饰' 意味着通过添加额外的物品或图像使（某物）看起来更具吸引力。" +
            "<br><br>" +
            "(D) '扩展' 意味着增加规模、数量或重要性。"
    },
    {
        id: 3,
        question: "The knight raised his shield to __________ off the dragon's fiery breath.",
        chinese_question: "骑士举起盾牌 __________ 龙的火焰呼吸。",
        answers: [
            { option: "A", answer: "fend", chinese_answer: "抵挡", chinese_romanization: "dǐdǎng" },
            { option: "B", answer: "welcome", chinese_answer: "欢迎", chinese_romanization: "huānyíng" },
            { option: "C", answer: "invite", chinese_answer: "邀请", chinese_romanization: "yāoqǐng" },
            { option: "D", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fend' means to look after and provide for oneself, without any help from others." +
            "<br><br>" +
            "(B) 'welcome' means to greet (someone arriving) in a glad, polite, or friendly way." +
            "<br><br>" +
            "(C) 'invite' means to make a polite, formal, or friendly request to (someone) to go somewhere or to do something." +
            "<br><br>" +
            "(D) 'encourage' means to give support, confidence, or hope to (someone).",
        chinese_explanation: "(A) '抵挡' 意味着照顾和供养自己，而没有他人的帮助。" +
            "<br><br>" +
            "(B) '欢迎' 意味着以高兴、礼貌或友好的方式迎接（某人到来）。" +
            "<br><br>" +
            "(C) '邀请' 意味着以礼貌、正式或友好的方式请求（某人）到某处或做某事。" +
            "<br><br>" +
            "(D) '鼓励' 意味着给予（某人）支持、信心或希望。"
    },
    {
        id: 4,
        question: "Over millions of years, animals have __________ to adapt to their environments.",
        chinese_question: "数百万年间，动物 __________ 以适应它们的环境。",
        answers: [
            { option: "A", answer: "ceased", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "B", answer: "evolved", chinese_answer: "进化", chinese_romanization: "jìnhuà" },
            { option: "C", answer: "regressed", chinese_answer: "退化", chinese_romanization: "tuìhuà" },
            { option: "D", answer: "disappeared", chinese_answer: "消失", chinese_romanization: "xiāoshī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'evolved' means developed gradually, especially from a simple to a more complex form." +
            "<br><br>" +
            "(A) 'ceased' means brought or come to an end." +
            "<br><br>" +
            "(C) 'regressed' means returned to a former or less developed state." +
            "<br><br>" +
            "(D) 'disappeared' means ceased to be visible.",
        chinese_explanation: "(B) '进化' 意味着逐渐发展，特别是从简单到更复杂的形式。" +
            "<br><br>" +
            "(A) '停止' 意味着结束或终止。" +
            "<br><br>" +
            "(C) '退化' 意味着回到以前或较不发达的状态。" +
            "<br><br>" +
            "(D) '消失' 意味着不再可见。"
    },
    {
        id: 5,
        question: "The forest slowly __________ on the farmland, taking over more land each year.",
        chinese_question: "森林慢慢 __________ 到农田上，每年占领更多的土地。",
        answers: [
            { option: "A", answer: "encroached", chinese_answer: "侵占", chinese_romanization: "qīnzhàn" },
            { option: "B", answer: "retreated", chinese_answer: "撤退", chinese_romanization: "chètuì" },
            { option: "C", answer: "advanced", chinese_answer: "推进", chinese_romanization: "tuījìn" },
            { option: "D", answer: "protected", chinese_answer: "保护", chinese_romanization: "bǎohù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'encroached' means to intrude on (a person's territory, rights, personal life, etc.)." +
            "<br><br>" +
            "(B) 'retreated' means to move back or withdraw." +
            "<br><br>" +
            "(C) 'advanced' means to move forward, typically in a purposeful way." +
            "<br><br>" +
            "(D) 'protected' means to keep safe from harm or injury.",
        chinese_explanation: "(A) '侵占' 意味着侵入（某人的领土、权利、个人生活等）。" +
            "<br><br>" +
            "(B) '撤退' 意味着向后移动或撤退。" +
            "<br><br>" +
            "(C) '推进' 意味着向前移动，通常是有目的的方式。" +
            "<br><br>" +
            "(D) '保护' 意味着保护免受伤害或损伤。"
    },
    {
        id: 6,
        question: "The teacher had to __________ the complex instructions to ensure all students understood the assignment.",
        chinese_question: "老师必须__________复杂的指示，以确保所有学生都理解作业。",
        answers: [
            { option: "A", answer: "misinterpret", chinese_answer: "误解", chinese_romanization: "wùjiě" },
            { option: "B", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" },
            { option: "C", answer: "confound", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
            { option: "D", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'clarify' means to make a statement or situation less confused and more comprehensible." +
            "<br><br>" +
            "(A) 'misinterpret' means to understand or explain something incorrectly." +
            "<br><br>" +
            "(B) 'complicate' means to make something more difficult or confusing." +
            "<br><br>" +
            "(C) 'confound' means to cause surprise or confusion in someone.",
        chinese_explanation: "(D) '澄清' 一词意味着使陈述或情况不再混乱，更易理解。" +
            "<br><br>" +
            "(A) '误解' 意味着错误地理解或解释某事。" +
            "<br><br>" +
            "(B) '复杂化' 意味着使某事变得更难或更混乱。" +
            "<br><br>" +
            "(C) '使困惑' 意味着使某人感到惊讶或困惑。"
    },
    {
        id: 7,
        question: "The knights were __________ in shining armor, ready to defend the castle from any attack.",
        chinese_question: "骑士们穿着闪亮的盔甲，准备保卫城堡免受任何攻击。",
        answers: [
            { option: "A", answer: "bare", chinese_answer: "赤裸的", chinese_romanization: "chìluǒ de" },
            { option: "B", answer: "unprotected", chinese_answer: "无保护的", chinese_romanization: "wú bǎohù de" },
            { option: "C", answer: "exposed", chinese_answer: "暴露的", chinese_romanization: "bàolù de" },
            { option: "D", answer: "cladded", chinese_answer: "穿着", chinese_romanization: "chuānzhuó" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'cladded' means clothed or covered." +
            "<br><br>" +
            "(A) 'bare' means not clothed or covered." +
            "<br><br>" +
            "(B) 'unprotected' means not protected or kept safe from harm or injury." +
            "<br><br>" +
            "(C) 'exposed' means not covered or hidden; visible.",
        chinese_explanation: "(D) '穿着' 一词意味着穿着衣服或覆盖。" +
            "<br><br>" +
            "(A) '赤裸的' 意味着没有穿衣服或覆盖。" +
            "<br><br>" +
            "(B) '无保护的' 意味着未被保护或未免受伤害或损害。" +
            "<br><br>" +
            "(C) '暴露的' 意味着未覆盖或隐藏；可见的。"
    },
    {
        id: 8,
        question: "In her research paper, she had to __________ several sources to support her arguments.",
        chinese_question: "在她的研究论文中，她必须__________几个来源来支持她的论点。",
        answers: [
            { option: "A", answer: "misquote", chinese_answer: "误引", chinese_romanization: "wùyǐn" },
            { option: "B", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "C", answer: "cite", chinese_answer: "引用", chinese_romanization: "yǐnyòng" },
            { option: "D", answer: "refute", chinese_answer: "反驳", chinese_romanization: "fǎnbó" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'cite' means to quote as evidence for or justification of an argument or statement." +
            "<br><br>" +
            "(A) 'misquote' means to quote a person or text incorrectly." +
            "<br><br>" +
            "(B) 'deny' means to state that one refuses to admit the truth or existence of." +
            "<br><br>" +
            "(D) 'refute' means to prove a statement or theory to be wrong or false.",
        chinese_explanation: "(C) '引用' 一词意味着作为论据或声明的证据或理由引用。" +
            "<br><br>" +
            "(A) '误引' 意味着错误地引用一个人或文本。" +
            "<br><br>" +
            "(B) '否认' 意味着声明拒绝承认真相或存在。" +
            "<br><br>" +
            "(D) '反驳' 意味着证明一个声明或理论是错误的或虚假的。"
    },
    {
        id: 9,
        question: "The mother had to __________ her child for running into the street without looking.",
        chinese_question: "母亲不得不__________她的孩子，因为他没看路就跑到街上。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "B", answer: "comfort", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
            { option: "C", answer: "chastise", chinese_answer: "训斥", chinese_romanization: "xùnchì" },
            { option: "D", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'chastise' means to rebuke or reprimand severely." +
            "<br><br>" +
            "(A) 'praise' means to express warm approval or admiration." +
            "<br><br>" +
            "(B) 'comfort' means to soothe or console someone." +
            "<br><br>" +
            "(D) 'reward' means to give something to someone in recognition of their services, efforts, or achievements.",
        chinese_explanation: "(C) '训斥' 一词意味着严厉地责备或谴责。" +
            "<br><br>" +
            "(A) '赞扬' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(B) '安慰' 意味着安抚或安慰某人。" +
            "<br><br>" +
            "(D) '奖励' 意味着为了表彰某人的服务、努力或成就而给予某物。"
    },
    {
        id: 10,
        question: "The artist used bright colors to __________ a sense of joy and excitement.",
        chinese_question: "艺术家用鲜艳的颜色来 __________ 一种快乐和兴奋的感觉。",
        answers: [
            { option: "A", answer: "convey", chinese_answer: "传达", chinese_romanization: "chuándá" },
            { option: "B", answer: "suppress", chinese_answer: "抑制", chinese_romanization: "yìzhì" },
            { option: "C", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "D", answer: "distort", chinese_answer: "扭曲", chinese_romanization: "niǔqū" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'convey' means to communicate (a message or information)." +
            "<br><br>" +
            "(B) 'suppress' means to forcibly put an end to or prevent the development of something." +
            "<br><br>" +
            "(C) 'conceal' means to keep from sight; hide." +
            "<br><br>" +
            "(D) 'distort' means to pull or twist out of shape.",
        chinese_explanation: "(A) '传达' 意味着传递（信息或信息）。" +
            "<br><br>" +
            "(B) '抑制' 意味着强行终止或阻止某事的发展。" +
            "<br><br>" +
            "(C) '隐藏' 意味着使某物看不见；隐藏。" +
            "<br><br>" +
            "(D) '扭曲' 意味着拉或扭曲变形。"
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
