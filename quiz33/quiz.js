// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ understanding of the topic allowed her to answer all questions confidently.",
        chinese_question: "她对这个话题的 __________ 理解使她能够自信地回答所有问题。",
        answers: [
            { option: "A", answer: "narrow", chinese_answer: "狭窄", chinese_romanization: "xiázhǎi" },
            { option: "B", answer: "limited", chinese_answer: "有限", chinese_romanization: "yǒuxiàn" },
            { option: "C", answer: "comprehensive", chinese_answer: "全面", chinese_romanization: "quánmiàn" },
            { option: "D", answer: "partial", chinese_answer: "部分", chinese_romanization: "bùfen" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'comprehensive' means complete and including all or nearly all elements or aspects of something." +
            "<br><br>" +
            "(A) 'narrow' means limited in extent, amount, or scope." +
            "<br><br>" +
            "(B) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(D) 'partial' means existing only in part; incomplete.",
        chinese_explanation: "(C) '全面' 意味着完整的并包括所有或几乎所有的元素或方面。" +
            "<br><br>" +
            "(A) '狭窄' 意味着在范围、数量或范围上有限的。" +
            "<br><br>" +
            "(B) '有限' 意味着在大小、数量或范围上受到限制的。" +
            "<br><br>" +
            "(D) '部分' 意味着仅部分存在的；不完整的。"
    },
    {
        id: 2,
        question: "Her opinion was the exact __________ of mine, leading to an interesting discussion.",
        chinese_question: "她的意见与我的完全 __________，引发了一场有趣的讨论。",
        answers: [
            { option: "A", answer: "opposite", chinese_answer: "相反", chinese_romanization: "xiāngfǎn" },
            { option: "B", answer: "reflection", chinese_answer: "反映", chinese_romanization: "fǎnyìng" },
            { option: "C", answer: "similarity", chinese_answer: "相似", chinese_romanization: "xiāngsì" },
            { option: "D", answer: "echo", chinese_answer: "回声", chinese_romanization: "huíshēng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'opposite' means completely different; of a contrary kind." +
            "<br><br>" +
            "(B) 'reflection' means the throwing back by a body or surface of light, heat, or sound without absorbing it." +
            "<br><br>" +
            "(C) 'similarity' means the state or fact of being similar." +
            "<br><br>" +
            "(D) 'echo' means a sound or series of sounds caused by the reflection of sound waves from a surface back to the listener.",
        chinese_explanation: "(A) '相反' 意味着完全不同的；相反的。" +
            "<br><br>" +
            "(B) '反映' 意味着物体或表面反射光、热或声音而不吸收。" +
            "<br><br>" +
            "(C) '相似' 意味着相似的状态或事实。" +
            "<br><br>" +
            "(D) '回声' 意味着由声音波从表面反射回听者而产生的声音或一系列声音。"
    },
    {
        id: 3,
        question: "Rice is a __________ food in many Asian countries, forming the basis of most meals.",
        chinese_question: "米饭是许多亚洲国家的__________食物，是大多数饭菜的基础。",
        answers: [
            { option: "A", answer: "rare", chinese_answer: "稀有的", chinese_romanization: "xīyǒu de" },
            { option: "B", answer: "staple", chinese_answer: "主食", chinese_romanization: "zhǔshí" },
            { option: "C", answer: "luxury", chinese_answer: "奢侈品", chinese_romanization: "shēchǐpǐn" },
            { option: "D", answer: "dessert", chinese_answer: "甜点", chinese_romanization: "tiándiǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'staple' means a main or important element of something, especially of a diet." +
            "<br><br>" +
            "(A) 'rare' means not occurring very often." +
            "<br><br>" +
            "(C) 'luxury' means a state of great comfort or elegance, especially when involving great expense." +
            "<br><br>" +
            "(D) 'dessert' means the sweet course eaten at the end of a meal.",
        chinese_explanation: "(B) '主食' 一词意味着某物的主要或重要元素，特别是饮食的主要或重要元素。" +
            "<br><br>" +
            "(A) '稀有的' 意味着不经常发生的。" +
            "<br><br>" +
            "(C) '奢侈品' 意味着特别是涉及巨大费用的极大舒适或优雅的状态。" +
            "<br><br>" +
            "(D) '甜点' 意味着餐后吃的甜食。"
    },
    {
        id: 4,
        question: "The factory released __________ chemicals into the river, causing severe environmental damage.",
        chinese_question: "工厂向河流排放了 __________ 化学物质，造成了严重的环境破坏。",
        answers: [
            { option: "A", answer: "beneficial", chinese_answer: "有益", chinese_romanization: "yǒuyì" },
            { option: "B", answer: "harmless", chinese_answer: "无害", chinese_romanization: "wúhài" },
            { option: "C", answer: "toxic", chinese_answer: "有毒", chinese_romanization: "yǒudú" },
            { option: "D", answer: "benign", chinese_answer: "良性", chinese_romanization: "liángxìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'toxic' means poisonous." +
            "<br><br>" +
            "(A) 'beneficial' means favorable or advantageous." +
            "<br><br>" +
            "(B) 'harmless' means not able or likely to cause harm." +
            "<br><br>" +
            "(D) 'benign' means gentle and kind.",
        chinese_explanation: "(C) '有毒' 一词意味着有毒的。" +
            "<br><br>" +
            "(A) '有益' 意味着有利或有益的。" +
            "<br><br>" +
            "(B) '无害' 意味着不能或不可能造成伤害的。" +
            "<br><br>" +
            "(D) '良性' 意味着温和和善的。"
    },
    {
        id: 5,
        question: "The champion boxer faced a __________ opponent, making the match one of the most thrilling in his career.",
        chinese_question: "冠军拳击手遇到了一个 __________ 的对手，使这场比赛成为他职业生涯中最激动人心的一场。",
        answers: [
            { option: "A", answer: "formidable", chinese_answer: "强大的", chinese_romanization: "qiángdà de" },
            { option: "B", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "C", answer: "easy", chinese_answer: "容易的", chinese_romanization: "róngyì de" },
            { option: "D", answer: "insignificant", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'formidable' means inspiring fear or respect through being impressively large, powerful, intense, or capable." +
            "<br><br>" +
            "(B) 'weak' means lacking the power to perform physically demanding tasks; having little physical strength or energy." +
            "<br><br>" +
            "(C) 'easy' means achieved without great effort; presenting few difficulties." +
            "<br><br>" +
            "(D) 'insignificant' means too small or unimportant to be worth consideration.",
        chinese_explanation: "(A) '强大的' 意味着通过令人印象深刻的大、强、有力或能干而激起恐惧或尊敬的。" +
            "<br><br>" +
            "(B) '虚弱的' 意味着缺乏执行体力任务的力量；体力或能量很少。" +
            "<br><br>" +
            "(C) '容易的' 意味着不需要太多努力就能完成的；呈现出少数困难的。" +
            "<br><br>" +
            "(D) '微不足道的' 意味着太小或不重要，不值得考虑的。"
    },
    {
        id: 6,
        question: "Regular exercise has many __________ effects on both physical and mental health.",
        chinese_question: "定期锻炼对身心健康有很多 __________ 的影响。",
        answers: [
            { option: "A", answer: "beneficial", chinese_answer: "有益的", chinese_romanization: "yǒuyì de" },
            { option: "B", answer: "harmful", chinese_answer: "有害的", chinese_romanization: "yǒuhài de" },
            { option: "C", answer: "detrimental", chinese_answer: "不利的", chinese_romanization: "bùlì de" },
            { option: "D", answer: "negative", chinese_answer: "负面的", chinese_romanization: "fùmiàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'beneficial' means resulting in good; favorable or advantageous." +
            "<br><br>" +
            "(B) 'harmful' means causing or likely to cause harm." +
            "<br><br>" +
            "(C) 'detrimental' means tending to cause harm." +
            "<br><br>" +
            "(D) 'negative' means consisting in or characterized by the absence rather than the presence of distinguishing features.",
        chinese_explanation: "(A) '有益的' 一词意味着产生好的结果；有利的或有好处的。" +
            "<br><br>" +
            "(B) '有害的' 意味着造成或可能造成伤害的。" +
            "<br><br>" +
            "(C) '不利的' 意味着倾向于造成伤害的。" +
            "<br><br>" +
            "(D) '负面的' 意味着由缺失而不是存在的特征组成或表征的。"
    },
    {
        id: 7,
        question: "Her __________ smile lit up the entire room.",
        chinese_question: "她__________的笑容照亮了整个房间。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "暗淡的", chinese_romanization: "àndàn de" },
            { option: "B", answer: "dim", chinese_answer: "昏暗的", chinese_romanization: "hūn'àn de" },
            { option: "C", answer: "radiant", chinese_answer: "光辉的", chinese_romanization: "guānghuī de" },
            { option: "D", answer: "gloomy", chinese_answer: "阴沉的", chinese_romanization: "yīnchén de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'radiant' means sending out light; shining or glowing brightly." +
            "<br><br>" +
            "(A) 'dull' means lacking brightness, vividness, or sheen." +
            "<br><br>" +
            "(B) 'dim' means not shining brightly or clearly." +
            "<br><br>" +
            "(D) 'gloomy' means dark or poorly lit, especially so as to appear depressing or frightening.",
        chinese_explanation: "(C) '光辉的' 一词意味着发出光；闪耀或光芒四射的。" +
            "<br><br>" +
            "(A) '暗淡的' 意味着缺乏亮度、鲜艳或光泽的。" +
            "<br><br>" +
            "(B) '昏暗的' 意味着不明亮或清晰的。" +
            "<br><br>" +
            "(D) '阴沉的' 意味着黑暗或光线不足的，尤其是看起来令人沮丧或害怕的。"
    },
    {
        id: 8,
        question: "She remained __________ in her decision, despite the pressure to change her mind.",
        chinese_question: "尽管有改变主意的压力，她仍然__________地坚持自己的决定。",
        answers: [
            { option: "A", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
            { option: "B", answer: "wavering", chinese_answer: "动摇的", chinese_romanization: "dòngyáo de" },
            { option: "C", answer: "resolute", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" },
            { option: "D", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'resolute' means admirably purposeful, determined, and unwavering." +
            "<br><br>" +
            "(A) 'uncertain' means not able to be relied on; not known or definite." +
            "<br><br>" +
            "(B) 'wavering' means moving in a quivering way; flickering." +
            "<br><br>" +
            "(D) 'hesitant' means tentative, unsure, or slow in acting or speaking.",
        chinese_explanation: "(C) '坚定的'一词意味着令人钦佩的有目的性、决心和不动摇的。" +
            "<br><br>" +
            "(A) '不确定的' 意味着不能依靠的；未知或不确定的。" +
            "<br><br>" +
            "(B) '动摇的' 意味着以颤抖的方式移动；闪烁的。" +
            "<br><br>" +
            "(D) '犹豫的' 意味着试探性的、不确定的或行动或说话缓慢的。"
    },
    {
        id: 9,
        question: "The symptoms of the disease did not __________ until several weeks after infection.",
        chinese_question: "疾病的症状在感染后几周才 __________。",
        answers: [
            { option: "A", answer: "disappear", chinese_answer: "消失", chinese_romanization: "xiāoshī" },
            { option: "B", answer: "manifest", chinese_answer: "显现", chinese_romanization: "xiǎnxiàn" },
            { option: "C", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "D", answer: "conceal", chinese_answer: "掩盖", chinese_romanization: "yǎngài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'manifest' means to display or show (a quality or feeling) by one's acts or appearance; demonstrate." +
            "<br><br>" +
            "(A) 'disappear' means to cease to be visible." +
            "<br><br>" +
            "(C) 'hide' means to put or keep out of sight." +
            "<br><br>" +
            "(D) 'conceal' means to keep from sight; hide.",
        chinese_explanation: "(B) '显现' 意味着通过一个人的行为或外表展示或显示（某种品质或感觉）；展示。" +
            "<br><br>" +
            "(A) '消失' 意味着不再可见。" +
            "<br><br>" +
            "(C) '隐藏' 意味着放置或保持在视线之外。" +
            "<br><br>" +
            "(D) '掩盖' 意味着隐藏；掩饰。"
    },
    {
        id: 10,
        question: "The __________ professor could answer any question about ancient history, impressing his students with his depth of understanding.",
        chinese_question: "这位 __________ 的教授能回答任何关于古代历史的问题，他深厚的理解力给学生们留下了深刻的印象。",
        answers: [
            { option: "A", answer: "ignorant", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "B", answer: "uninformed", chinese_answer: "不知情", chinese_romanization: "bù zhīqíng" },
            { option: "C", answer: "knowledgeable", chinese_answer: "知识渊博", chinese_romanization: "zhīshì yuānbó" },
            { option: "D", answer: "clueless", chinese_answer: "毫无头绪", chinese_romanization: "háo wú tóuxù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'knowledgeable' means intelligent and well informed." +
            "<br><br>" +
            "(A) 'ignorant' means lacking knowledge or awareness in general; uneducated or unsophisticated." +
            "<br><br>" +
            "(B) 'uninformed' means not having or showing knowledge or awareness of the facts." +
            "<br><br>" +
            "(D) 'clueless' means having no knowledge, understanding, or ability.",
        chinese_explanation: "(C) '知识渊博' 意味着聪明和见多识广。" +
            "<br><br>" +
            "(A) '无知' 意味着缺乏知识或意识；未受教育或不成熟的。" +
            "<br><br>" +
            "(B) '不知情' 意味着没有事实的知识或意识。" +
            "<br><br>" +
            "(D) '毫无头绪' 意味着没有知识、理解或能力。"
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
