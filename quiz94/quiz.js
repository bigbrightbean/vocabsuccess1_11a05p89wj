// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "After working for 40 years at the factory, Mr. Smith finally __________ and moved to Florida to enjoy his golden years.",
        chinese_question: "在工厂工作了40年后，史密斯先生终于__________并搬到佛罗里达享受他的晚年。",
        answers: [
            { option: "A", answer: "vacated", chinese_answer: "腾出", chinese_romanization: "téng chū" },
            { option: "B", answer: "retired", chinese_answer: "退休", chinese_romanization: "tuìxiū" },
            { option: "C", answer: "promoted", chinese_answer: "晋升", chinese_romanization: "jìnshēng" },
            { option: "D", answer: "transferred", chinese_answer: "调动", chinese_romanization: "diàodòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'retired' means having left one's job and ceased to work." +
            "<br><br>" +
            "(A) 'vacated' means to leave a place that one previously occupied." +
            "<br><br>" +
            "(C) 'promoted' means raised to a higher position or rank." +
            "<br><br>" +
            "(D) 'transferred' means moved from one place to another.",
        chinese_explanation: "(B) '退休'一词意味着离开工作岗位并停止工作。" +
            "<br><br>" +
            "(A) '腾出' 意味着离开一个先前占据的地方。" +
            "<br><br>" +
            "(C) '晋升' 意味着提升到更高的职位或级别。" +
            "<br><br>" +
            "(D) '调动' 意味着从一个地方转移到另一个地方。"
    },
    {
        id: 2,
        question: "The opposing fans __________ at the player every time he touched the ball, trying to throw him off his game.",
        chinese_question: "每次球员触球时，对方球迷都会__________，试图干扰他的比赛。",
        answers: [
            { option: "A", answer: "cheered", chinese_answer: "欢呼", chinese_romanization: "huānhū" },
            { option: "B", answer: "applauded", chinese_answer: "鼓掌", chinese_romanization: "gǔzhǎng" },
            { option: "C", answer: "jeered", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" },
            { option: "D", answer: "greeted", chinese_answer: "迎接", chinese_romanization: "yíngjiē" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'jeered' means made rude and mocking remarks, typically in a loud voice." +
            "<br><br>" +
            "(A) 'cheered' means shouted for joy or in praise or encouragement." +
            "<br><br>" +
            "(B) 'applauded' means showed approval or praise by clapping." +
            "<br><br>" +
            "(D) 'greeted' means gave a polite word or sign of welcome or recognition.",
        chinese_explanation: "(C) '嘲笑'一词意味着做出粗鲁和嘲弄的评论，通常是大声地。" +
            "<br><br>" +
            "(A) '欢呼' 意味着为欢乐或表扬或鼓励而呼喊。" +
            "<br><br>" +
            "(B) '鼓掌' 意味着通过鼓掌表示赞同或表扬。" +
            "<br><br>" +
            "(D) '迎接' 意味着给予礼貌的问候或欢迎或认可的标志。"
    },
    {
        id: 3,
        question: "The audience was __________ by the magician's amazing performance, unable to look away as he pulled a rabbit out of an empty hat and made cards disappear.",
        chinese_question: "观众被魔术师的精彩表演 __________，当他从一个空帽子里拉出一只兔子并让牌消失时，他们无法移开视线。",
        answers: [
            { option: "A", answer: "transfixed", chinese_answer: "吸引", chinese_romanization: "xīyǐn" },
            { option: "B", answer: "bored", chinese_answer: "感到无聊", chinese_romanization: "gǎndào wúliáo" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mò bù guānxīn" },
            { option: "D", answer: "distracted", chinese_answer: "分心", chinese_romanization: "fēnxīn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'transfixed' means to cause (someone) to become motionless with horror, wonder, or astonishment." +
            "<br><br>" +
            "(B) 'bored' means feeling weary and impatient because one is unoccupied or lacks interest in one's current activity." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(D) 'distracted' means unable to concentrate because one's mind is preoccupied.",
        chinese_explanation: "(A) '吸引' 意味着使（某人）因恐惧、惊奇或惊讶而变得不动。" +
            "<br><br>" +
            "(B) '感到无聊' 意味着因没有工作或对当前活动缺乏兴趣而感到厌倦和不耐烦。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着没有特别的兴趣或同情心。" +
            "<br><br>" +
            "(D) '分心' 意味着由于心不在焉而无法集中注意力。"
    },
    {
        id: 4,
        question: "He __________ up when he heard the good news about his promotion.",
        chinese_question: "听到晋升的好消息后，他 __________ 起来。",
        answers: [
            { option: "A", answer: "slumped", chinese_answer: "低落", chinese_romanization: "dīluò" },
            { option: "B", answer: "faded", chinese_answer: "消失", chinese_romanization: "xiāoshī" },
            { option: "C", answer: "withdrew", chinese_answer: "撤退", chinese_romanization: "chètuì" },
            { option: "D", answer: "perked", chinese_answer: "振作", chinese_romanization: "zhènzuò" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'perked' metaphorically means to become more lively or cheerful." +
            "<br><br>" +
            "(A) 'slumped' means to sit, lean, or fall heavily and limply." +
            "<br><br>" +
            "(B) 'faded' means to gradually grow faint and disappear." +
            "<br><br>" +
            "(C) 'withdrew' means to remove or take away something from a particular place or position.",
        chinese_explanation: "(D) '振作' 比喻变得更活泼或开心。" +
            "<br><br>" +
            "(A) '低落' 意味着坐下、倚靠或重重地倒下。" +
            "<br><br>" +
            "(B) '消失' 意味着逐渐变淡和消失。" +
            "<br><br>" +
            "(C) '撤退' 意味着从特定地点或位置移除或带走某物。"
    },
    {
        id: 5,
        question: "Their conversation was __________ by a loud noise from outside.",
        chinese_question: "他们的谈话被外面的巨大噪音 __________ 了。",
        answers: [
            { option: "A", answer: "interrupted", chinese_answer: "打断", chinese_romanization: "dǎduàn" },
            { option: "B", answer: "continued", chinese_answer: "继续", chinese_romanization: "jìxù" },
            { option: "C", answer: "extended", chinese_answer: "延长", chinese_romanization: "yáncháng" },
            { option: "D", answer: "completed", chinese_answer: "完成", chinese_romanization: "wánchéng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'interrupted' means stopped the continuous progress of an activity or process." +
            "<br><br>" +
            "(B) 'continued' means persisted in an activity or process." +
            "<br><br>" +
            "(C) 'extended' means made longer or wider." +
            "<br><br>" +
            "(D) 'completed' means finished making or doing.",
        chinese_explanation: "(A) '打断' 意味着停止活动或过程的连续进展。" +
            "<br><br>" +
            "(B) '继续' 意味着坚持进行某活动或过程。" +
            "<br><br>" +
            "(C) '延长' 意味着变得更长或更宽。" +
            "<br><br>" +
            "(D) '完成' 意味着结束制作或做某事。"
    },
    {
        id: 6,
        question: "Entering the abandoned building was strictly __________ due to safety concerns.",
        chinese_question: "由于安全问题，进入废弃建筑是严格__________的。",
        answers: [
            { option: "A", answer: "allowed", chinese_answer: "允许", chinese_romanization: "yǔnxǔ" },
            { option: "B", answer: "welcomed", chinese_answer: "欢迎", chinese_romanization: "huānyíng" },
            { option: "C", answer: "forbidden", chinese_answer: "禁止", chinese_romanization: "jìnzhǐ" },
            { option: "D", answer: "encouraged", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'forbidden' means not allowed; banned." +
            "<br><br>" +
            "(A) 'allowed' means given permission to do something." +
            "<br><br>" +
            "(B) 'welcomed' means greeted someone arriving in a glad, polite, or friendly way." +
            "<br><br>" +
            "(D) 'encouraged' means gave support, confidence, or hope to someone.",
        chinese_explanation: "(C) '禁止'一词意味着不允许的；被禁止的。" +
            "<br><br>" +
            "(A) '允许' 意味着被给予做某事的许可。" +
            "<br><br>" +
            "(B) '欢迎' 意味着以愉快、礼貌或友好的方式迎接某人的到来。" +
            "<br><br>" +
            "(D) '鼓励' 意味着给予某人支持、信心或希望。"
    },
    {
        id: 7,
        question: "The car suddenly __________ to avoid hitting the deer that had darted into the road.",
        chinese_question: "为了避免撞上突然冲到路上的鹿，汽车突然__________。",
        answers: [
            { option: "A", answer: "stopped", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "B", answer: "swerved", chinese_answer: "急转", chinese_romanization: "jízhuǎn" },
            { option: "C", answer: "accelerated", chinese_answer: "加速", chinese_romanization: "jiāsù" },
            { option: "D", answer: "crashed", chinese_answer: "撞击", chinese_romanization: "zhuàngjí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'swerved' means changed or caused to change direction abruptly." +
            "<br><br>" +
            "(A) 'stopped' means ceased movement or operation." +
            "<br><br>" +
            "(C) 'accelerated' means increased in speed." +
            "<br><br>" +
            "(D) 'crashed' means collided violently with an obstacle or another vehicle.",
        chinese_explanation: "(B) '急转'一词意味着突然改变方向。" +
            "<br><br>" +
            "(A) '停止' 意味着停止运动或操作。" +
            "<br><br>" +
            "(C) '加速' 意味着增加速度。" +
            "<br><br>" +
            "(D) '撞击' 意味着与障碍物或另一辆车猛烈碰撞。"
    },
    {
        id: 8,
        question: "The crowd __________ with approval when the home team scored the winning goal in the final seconds of the game.",
        chinese_question: "在比赛最后几秒钟主队进球获胜时，观众们__________表示赞许。",
        answers: [
            { option: "A", answer: "whispered", chinese_answer: "低语", chinese_romanization: "dīyǔ" },
            { option: "B", answer: "whimpered", chinese_answer: "呜咽", chinese_romanization: "wūyàn" },
            { option: "C", answer: "muttered", chinese_answer: "喃喃自语", chinese_romanization: "nánnán zì yǔ" },
            { option: "D", answer: "roared", chinese_answer: "吼叫", chinese_romanization: "hǒujiào" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'roared' means made a loud, deep sound, typically in anger or excitement. Figuratively, it can mean a large group of people expressing strong approval or excitement." +
            "<br><br>" +
            "(A) 'whispered' means spoke very softly using one's breath without vocal cords." +
            "<br><br>" +
            "(B) 'whimpered' means made a series of low, feeble sounds expressive of fear, pain, or discontent." +
            "<br><br>" +
            "(C) 'muttered' means said something in a low or barely audible voice.",
        chinese_explanation: "(D) '吼叫'一词意味着发出大声、低沉的声音，通常表示愤怒或兴奋。比喻地，它可以表示一大群人表示强烈赞许或兴奋。" +
            "<br><br>" +
            "(A) '低语' 意味着用呼吸而不用声带非常轻声地说话。" +
            "<br><br>" +
            "(B) '呜咽' 意味着发出一系列低沉的、微弱的声音，表示恐惧、痛苦或不满。" +
            "<br><br>" +
            "(C) '喃喃自语' 意味着以低声或几乎听不见的声音说话。"
    },
    {
        id: 9,
        question: "They decided to __________ the price to attract more customers, offering discounts and special promotions.",
        chinese_question: "他们决定 __________ 价格以吸引更多的顾客，提供折扣和特别促销。",
        answers: [
            { option: "A", answer: "decrease", chinese_answer: "降低", chinese_romanization: "jiàngdī" },
            { option: "B", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "C", answer: "maintain", chinese_answer: "保持", chinese_romanization: "bǎochí" },
            { option: "D", answer: "stabilize", chinese_answer: "稳定", chinese_romanization: "wěndìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'decrease' means to make or become smaller or fewer in size, amount, intensity, or degree." +
            "<br><br>" +
            "(B) 'increase' means to become or make greater in size, amount, or degree." +
            "<br><br>" +
            "(C) 'maintain' means to keep in existence or continuance." +
            "<br><br>" +
            "(D) 'stabilize' means to make or become unlikely to change, fail, or decline.",
        chinese_explanation: "(A) '降低' 意味着使某物在大小、数量、强度或程度上变小或减少。" +
            "<br><br>" +
            "(B) '增加' 意味着在大小、数量或程度上变大或增多。" +
            "<br><br>" +
            "(C) '保持' 意味着使某物继续存在。" +
            "<br><br>" +
            "(D) '稳定' 意味着使某物或某人不太可能改变、失败或衰退。"
    },
    {
        id: 10,
        question: "He tried to __________ his parents to let him attend the concert.",
        chinese_question: "他试图 __________ 他的父母让他参加音乐会。",
        answers: [
            { option: "A", answer: "convince", chinese_answer: "说服", chinese_romanization: "shuōfú" },
            { option: "B", answer: "discourage", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
            { option: "C", answer: "deceive", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
            { option: "D", answer: "argue", chinese_answer: "争辩", chinese_romanization: "zhēngbiàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'convince' means to cause (someone) to believe firmly in the truth of something." +
            "<br><br>" +
            "(B) 'discourage' means to cause (someone) to lose confidence or enthusiasm." +
            "<br><br>" +
            "(C) 'deceive' means to cause (someone) to believe something that is not true." +
            "<br><br>" +
            "(D) 'argue' means to give reasons or cite evidence in support of an idea, action, or theory, typically with the aim of persuading others to share one's view.",
        chinese_explanation: "(A) '说服' 意味着使（某人）坚定地相信某事的真实性。" +
            "<br><br>" +
            "(B) '劝阻' 意味着使（某人）失去信心或热情。" +
            "<br><br>" +
            "(C) '欺骗' 意味着使（某人）相信不真实的事情。" +
            "<br><br>" +
            "(D) '争辩' 意味着为了支持某个想法、行动或理论而给出理由或引用证据，通常是为了说服他人分享自己的观点。"
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
