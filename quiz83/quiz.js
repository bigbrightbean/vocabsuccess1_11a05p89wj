// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The scientist needed to __________ the data thoroughly before drawing any conclusions about the experiment.",
        chinese_question: "科学家需要 __________ 数据，然后才能对实验得出任何结论。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
            { option: "C", answer: "analyze", chinese_answer: "分析", chinese_romanization: "fēnxī" },
            { option: "D", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'analyze' means examine methodically and in detail the constitution or structure of (something, especially information), typically for purposes of explanation and interpretation." +
            "<br><br>" +
            "(A) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(B) 'dismiss' means order or allow to leave; send away." +
            "<br><br>" +
            "(D) 'overlook' means fail to notice (something).",
        chinese_explanation: "(C) '分析' 一词意味着系统地、详细地检查（某物，特别是信息）的组成或结构，通常是为了说明和解释。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认；故意无视。" +
            "<br><br>" +
            "(B) '驳回' 意味着命令或允许离开；送走。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能注意到（某事）。"
    },
    {
        id: 2,
        question: "He sat quietly to __________ the difficult decision he had to make.",
        chinese_question: "他静静地坐着 __________ 他必须做出的艰难决定。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "rush", chinese_answer: "匆忙", chinese_romanization: "cōngmáng" },
            { option: "C", answer: "dismiss", chinese_answer: "解散", chinese_romanization: "jiěsàn" },
            { option: "D", answer: "ponder", chinese_answer: "沉思", chinese_romanization: "chénsī" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ponder' means think about (something) carefully, especially before making a decision or reaching a conclusion." +
            "<br><br>" +
            "(A) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(B) 'rush' means move with urgent haste." +
            "<br><br>" +
            "(C) 'dismiss' means order or allow to leave; send away.",
        chinese_explanation: "(D) '沉思' 一词意味着仔细思考（某事），尤其是在做决定或得出结论之前。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认；故意无视。" +
            "<br><br>" +
            "(B) '匆忙' 意味着急切地移动。" +
            "<br><br>" +
            "(C) '解散' 意味着命令或允许离开；送走。"
    },
    {
        id: 3,
        question: "After years of disagreement, the brothers finally decided to __________ and rebuild their relationship.",
        chinese_question: "经过多年的分歧，兄弟俩最终决定 __________ 并重建他们的关系。",
        answers: [
            { option: "A", answer: "separate", chinese_answer: "分开", chinese_romanization: "fēnkāi" },
            { option: "B", answer: "reconcile", chinese_answer: "和解", chinese_romanization: "héjiě" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "dispute", chinese_answer: "争论", chinese_romanization: "zhēnglùn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reconcile' means restore friendly relations between." +
            "<br><br>" +
            "(A) 'separate' means cause to move or be apart." +
            "<br><br>" +
            "(C) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(D) 'dispute' means argue about (something); discuss heatedly.",
        chinese_explanation: "(B) '和解' 一词意味着恢复友好关系。" +
            "<br><br>" +
            "(A) '分开' 意味着使移动或分开。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认；故意无视。" +
            "<br><br>" +
            "(D) '争论' 意味着争论（某事）；激烈讨论。"
    },
    {
        id: 4,
        question: "To prevent the spread of the virus, they had to __________ the infected patients from the rest of the population.",
        chinese_question: "为了防止病毒传播，他们不得不将感染患者 __________ 与其他人群隔离开来。",
        answers: [
            { option: "A", answer: "integrate", chinese_answer: "融合", chinese_romanization: "rónghé" },
            { option: "B", answer: "isolate", chinese_answer: "隔离", chinese_romanization: "gélí" },
            { option: "C", answer: "combine", chinese_answer: "结合", chinese_romanization: "jiéhé" },
            { option: "D", answer: "include", chinese_answer: "包括", chinese_romanization: "bāokuò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'isolate' means cause (a person or place) to be or remain alone or apart from others." +
            "<br><br>" +
            "(A) 'integrate' means combine (one thing) with another so that they become a whole." +
            "<br><br>" +
            "(C) 'combine' means unite; merge." +
            "<br><br>" +
            "(D) 'include' means comprise or contain as part of a whole.",
        chinese_explanation: "(B) '隔离' 一词意味着使（某人或某地）与他人或其他地方分离或保持分离。" +
            "<br><br>" +
            "(A) '融合' 意味着将（一件事）与另一件事结合，使它们成为一个整体。" +
            "<br><br>" +
            "(C) '结合' 意味着联合；合并。" +
            "<br><br>" +
            "(D) '包括' 意味着作为整体的一部分或包含。"
    },
    {
        id: 5,
        question: "The historian had to __________ the ancient texts to understand their true meaning.",
        chinese_question: "历史学家必须 __________ 这些古代文本才能理解其真正的含义。",
        answers: [
            { option: "A", answer: "interpret", chinese_answer: "解释", chinese_romanization: "jiěshì" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "obscure", chinese_answer: "掩盖", chinese_romanization: "yǎngài" },
            { option: "D", answer: "distort", chinese_answer: "扭曲", chinese_romanization: "niǔqū" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'interpret' means explain the meaning of (information, words, or actions)." +
            "<br><br>" +
            "(B) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(C) (C) 'obscure' means keep from being seen; conceal. It describes hiding something so that it is not seen or noticed." +
            "<br><br>" +
            "(D) 'distort' means pull or twist out of shape. It describes changing the shape or meaning of something so that it looks or sounds strange or wrong.",
        chinese_explanation: "(A) '解释' 一词意味着解释（信息、词语或行为）的含义。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认；故意无视。" +
            "<br><br>" +
            "(C) '掩盖' 意味着使不被看到；隐藏。它描述的是隐藏某物，使其不被看到或注意到。" +
            "<br><br>" +
            "(D) '扭曲' 意味着拉或扭出形状。它描述的是改变某物的形状或含义，使其看起来或听起来奇怪或错误。"
    },
    {
        id: 6,
        question: "He tried to __________ illness to avoid going to school, but his mother saw through the act.",
        chinese_question: "他试图 __________ 生病以避免上学，但他的母亲看穿了这个把戏。",
        answers: [
            { option: "A", answer: "cure", chinese_answer: "治愈", chinese_romanization: "zhìyù" },
            { option: "B", answer: "fabricate", chinese_answer: "捏造", chinese_romanization: "niēzào" },
            { option: "C", answer: "feign", chinese_answer: "假装", chinese_romanization: "jiǎzhuāng" },
            { option: "D", answer: "reveal", chinese_answer: "揭示", chinese_romanization: "jiēshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'feign' means pretend to be affected by (a feeling, state, or injury)." +
            "<br><br>" +
            "(A) 'cure' means relieve (a person or animal) of the symptoms of a disease or condition." +
            "<br><br>" +
            "(B) 'fabricate' means invent or concoct (something), typically with deceitful intent." +
            "<br><br>" +
            "(D) 'reveal' means make (previously unknown or secret information) known to others.",
        chinese_explanation: "(C) '假装' 一词意味着假装受到（感觉、状态或伤害）的影响。" +
            "<br><br>" +
            "(A) '治愈' 意味着缓解（人或动物）的疾病或状况的症状。" +
            "<br><br>" +
            "(B) '捏造' 意味着发明或捏造（某物），通常带有欺骗意图。" +
            "<br><br>" +
            "(D) '揭示' 意味着将（以前未知或秘密的信息）透露给他人。"
    },
    {
        id: 7,
        question: "The new power plant will __________ enough electricity to supply the entire city.",
        chinese_question: "新电厂将 __________ 足够的电力供应整个城市。",
        answers: [
            { option: "A", answer: "consume", chinese_answer: "消耗", chinese_romanization: "xiāohào" },
            { option: "B", answer: "reduce", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "C", answer: "limit", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
            { option: "D", answer: "generate", chinese_answer: "产生", chinese_romanization: "chǎnshēng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'generate' means produce or create." +
            "<br><br>" +
            "(A) 'consume' means eat, drink, or ingest (food or drink)." +
            "<br><br>" +
            "(B) 'reduce' means make smaller or less in amount, degree, or size." +
            "<br><br>" +
            "(C) 'limit' means set or serve as a limit to.",
        chinese_explanation: "(D) '产生' 一词意味着生产或创造。" +
            "<br><br>" +
            "(A) '消耗' 意味着吃、喝或摄入（食物或饮料）。" +
            "<br><br>" +
            "(B) '减少' 意味着在数量、程度或大小上使变小或减少。" +
            "<br><br>" +
            "(C) '限制' 意味着设置或作为限制。"
    },
    {
        id: 8,
        question: "The teacher will __________ each student's performance based on their participation and assignments.",
        chinese_question: "老师将根据学生的参与和作业 __________ 每个学生的表现。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "disregard", chinese_answer: "不理会", chinese_romanization: "bù lǐhuì" },
            { option: "C", answer: "evaluate", chinese_answer: "评估", chinese_romanization: "pínggū" },
            { option: "D", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'evaluate' means form an idea of the amount, number, or value of; assess." +
            "<br><br>" +
            "(A) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(B) 'disregard' means pay no attention to; ignore." +
            "<br><br>" +
            "(D) 'overlook' means fail to notice (something).",
        chinese_explanation: "(C) '评估' 一词意味着对数量、数字或价值形成一个想法；评估。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认；故意无视。" +
            "<br><br>" +
            "(B) '不理会' 意味着不注意；忽视。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能注意到（某事）。"
    },
    {
        id: 9,
        question: "The teacher used a science experiment to __________ how plants absorb water through their roots.",
        chinese_question: "老师用一个科学实验来__________植物如何通过根部吸收水分。",
        answers: [
            { option: "A", answer: "obfuscate", chinese_answer: "使模糊", chinese_romanization: "shǐ móhú" },
            { option: "B", answer: "complicate", chinese_answer: "使复杂化", chinese_romanization: "shǐ fùzá huà" },
            { option: "C", answer: "demonstrate", chinese_answer: "演示", chinese_romanization: "yǎnshì" },
            { option: "D", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'demonstrate' means to clearly show the existence or truth of something by giving proof or evidence." +
            "<br><br>" +
            "(A) 'obfuscate' means to render obscure, unclear, or unintelligible." +
            "<br><br>" +
            "(B) 'complicate' means to make something more difficult or confusing by causing it to be more complex." +
            "<br><br>" +
            "(D) 'confuse' means to make someone unable to think clearly.",
        chinese_explanation: "(C) '演示'一词意味着通过提供证据或证明来清楚地展示某物的存在或真实性。" +
            "<br><br>" +
            "(A) '使模糊' 意味着使模糊、不清楚或难以理解。" +
            "<br><br>" +
            "(B) '使复杂化' 意味着通过使其更复杂而使某事更困难或困惑。" +
            "<br><br>" +
            "(D) '使困惑' 意味着使某人无法清晰思考。"
    },
    {
        id: 10,
        question: "The artist used vibrant colors to __________ the beauty of the landscape in his painting.",
        chinese_question: "艺术家使用鲜艳的颜色来 __________ 他画中景观的美丽。",
        answers: [
            { option: "A", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "B", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
            { option: "C", answer: "obscure", chinese_answer: "模糊", chinese_romanization: "móhú" },
            { option: "D", answer: "reduce", chinese_answer: "降低", chinese_romanization: "jiàngdī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'enhance' means intensify, increase, or further improve the quality, value, or extent of." +
            "<br><br>" +
            "(A) 'diminish' means make or become less." +
            "<br><br>" +
            "(C) 'obscure' means keep from being seen; conceal." +
            "<br><br>" +
            "(D) 'reduce' means make smaller or less in amount, degree, or size.",
        chinese_explanation: "(B) '增强' 一词意味着增强、增加或进一步改善质量、价值或程度。" +
            "<br><br>" +
            "(A) '减少' 意味着使变少或变少。" +
            "<br><br>" +
            "(C) '模糊' 意味着遮挡不让被看到；隐藏。" +
            "<br><br>" +
            "(D) '降低' 意味着在数量、程度或大小上变小或变小。"
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
