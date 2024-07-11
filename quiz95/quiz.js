// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The driver had to __________ carefully to park in the tight space.",
        chinese_question: "司机必须小心地 __________ 才能在狭小的空间停车。",
        answers: [
            { option: "A", answer: "maneuver", chinese_answer: "操控", chinese_romanization: "cāokòng" },
            { option: "B", answer: "hesitate", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "C", answer: "retreat", chinese_answer: "撤退", chinese_romanization: "chètuì" },
            { option: "D", answer: "escape", chinese_answer: "逃脱", chinese_romanization: "táotuō" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'maneuver' means to move skillfully or carefully." +
            "<br><br>" +
            "(B) 'hesitate' means to pause before saying or doing something." +
            "<br><br>" +
            "(C) 'retreat' means to withdraw from enemy forces as a result of their superior power or after a defeat." +
            "<br><br>" +
            "(D) 'escape' means to break free from confinement or control.",
        chinese_explanation: "(A) '操控' 意味着熟练或小心地移动。" +
            "<br><br>" +
            "(B) '犹豫' 意味着在说或做某事之前停顿。" +
            "<br><br>" +
            "(C) '撤退' 意味着由于敌方力量的优越或战败后撤退。" +
            "<br><br>" +
            "(D) '逃脱' 意味着摆脱束缚或控制。"
    },
    {
        id: 2,
        question: "She began to __________ as the cold wind blew through her thin coat.",
        chinese_question: "当冷风吹过她的薄外套时，她开始 __________。",
        answers: [
            { option: "A", answer: "laugh", chinese_answer: "笑", chinese_romanization: "xiào" },
            { option: "B", answer: "relax", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
            { option: "C", answer: "sleep", chinese_answer: "睡觉", chinese_romanization: "shuìjiào" },
            { option: "D", answer: "tremble", chinese_answer: "颤抖", chinese_romanization: "chàndǒu" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'tremble' means to shake involuntarily, typically as a result of anxiety, excitement, or frailty." +
            "<br><br>" +
            "(A) 'laugh' means to make sounds and movements of the face and body that express amusement." +
            "<br><br>" +
            "(B) 'relax' means to become less tense or anxious." +
            "<br><br>" +
            "(C) 'sleep' means to be in a state of rest where the body is inactive and the mind is unconscious.",
        chinese_explanation: "(D) '颤抖' 意味着不由自主地抖动，通常是由于焦虑、兴奋或虚弱。" +
            "<br><br>" +
            "(A) '笑' 意味着发出声音和面部和身体的动作，表示愉快。" +
            "<br><br>" +
            "(B) '放松' 意味着变得不那么紧张或焦虑。" +
            "<br><br>" +
            "(C) '睡觉' 意味着处于休息状态，身体不活动，心灵无意识。"
    },
    {
        id: 3,
        question: "He had to __________ the noise from the construction site next to his office, often using earplugs and noise-canceling headphones to concentrate.",
        chinese_question: "他不得不 __________ 办公室旁边施工现场的噪音，经常使用耳塞和降噪耳机来集中注意力。",        answers: [
            { option: "A", answer: "enjoy", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" },
            { option: "B", answer: "tolerate", chinese_answer: "忍受", chinese_romanization: "rěnshòu" },
            { option: "C", answer: "amplify", chinese_answer: "放大", chinese_romanization: "fàngdà" },
            { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tolerate' means to allow the existence, occurrence, or practice of something that one does not necessarily like or agree with." +
            "<br><br>" +
            "(A) 'enjoy' means to take delight or pleasure in." +
            "<br><br>" +
            "(C) 'amplify' means to increase the volume of sound." +
            "<br><br>" +
            "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(B) '忍受' 意味着允许存在、发生或实践自己不一定喜欢或同意的事情。" +
            "<br><br>" +
            "(A) '享受' 意味着从中获得快乐或乐趣。" +
            "<br><br>" +
            "(C) '放大' 意味着增加声音的音量。" +
            "<br><br>" +
            "(D) '庆祝' 意味着以社交聚会或愉快的活动来承认一个重要或愉快的日子或事件。"
    },
    {
        id: 4,
        question: "The friends exchanged playful __________ over lunch, making everyone laugh.",
        chinese_question: "朋友们在午餐时互相开玩笑，使大家都笑了起来。",
        answers: [
            { option: "A", answer: "banter", chinese_answer: "玩笑", chinese_romanization: "wánxiào" },
            { option: "B", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" },
            { option: "C", answer: "arguments", chinese_answer: "争论", chinese_romanization: "zhēnglùn" },
            { option: "D", answer: "complaints", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'banter' means the playful and friendly exchange of teasing remarks." +
            "<br><br>" +
            "(B) 'silence' means complete absence of sound." +
            "<br><br>" +
            "(C) 'arguments' means an exchange of diverging or opposite views, typically a heated or angry one." +
            "<br><br>" +
            "(D) 'complaints' means expressions of dissatisfaction or annoyance about something.",
        chinese_explanation: "(A) '玩笑' 意味着友好和友好的戏弄言辞的交换。" +
            "<br><br>" +
            "(B) '沉默' 意味着完全没有声音。" +
            "<br><br>" +
            "(C) '争论' 意味着交换不同或相反的意见，通常是激烈或愤怒的。" +
            "<br><br>" +
            "(D) '抱怨' 意味着对某事表达不满或恼怒。"
    },
    {
        id: 5,
        question: "After reading the long article, she managed to __________ the main points in a few sentences.",
        chinese_question: "读完长篇文章后，她设法用几句话 __________ 了主要观点。",
        answers: [
            { option: "A", answer: "misinterpret", chinese_answer: "误解", chinese_romanization: "wùjiě" },
            { option: "B", answer: "summarize", chinese_answer: "概述", chinese_romanization: "gàishù" },
            { option: "C", answer: "complicate", chinese_answer: "使复杂化", chinese_romanization: "shǐ fùzá huà" },
            { option: "D", answer: "elaborate", chinese_answer: "详述", chinese_romanization: "xiángshù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'summarize' means to give a brief statement of the main points." +
            "<br><br>" +
            "(A) 'misinterpret' means to understand or explain something incorrectly." +
            "<br><br>" +
            "(C) 'complicate' means to make something more difficult or complex." +
            "<br><br>" +
            "(D) 'elaborate' means to add more detail concerning what has already been said.",
        chinese_explanation: "(B) '概述' 意味着简要陈述主要观点。" +
            "<br><br>" +
            "(A) '误解' 意味着错误地理解或解释某事。" +
            "<br><br>" +
            "(C) '使复杂化' 意味着使某事变得更困难或复杂。" +
            "<br><br>" +
            "(D) '详述' 意味着对已说的内容增加更多细节。"
    },
    {
        id: 6,
        question: "The police were able to __________ the suspect after a thorough investigation, gathering enough evidence to make the arrest.",
        chinese_question: "经过彻底调查，警方能够__________嫌疑人，收集了足够的证据进行逮捕。",
        answers: [
            { option: "A", answer: "release", chinese_answer: "释放", chinese_romanization: "shìfàng" },
            { option: "B", answer: "assist", chinese_answer: "协助", chinese_romanization: "xiézhù" },
            { option: "C", answer: "apprehend", chinese_answer: "逮捕", chinese_romanization: "dàibǔ" },
            { option: "D", answer: "exonerate", chinese_answer: "免罪", chinese_romanization: "miǎnzuì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'apprehend' means to arrest someone for a crime." +
            "<br><br>" +
            "(A) 'release' means to allow someone or something to move or act freely." +
            "<br><br>" +
            "(B) 'assist' means to help someone." +
            "<br><br>" +
            "(D) 'exonerate' means to absolve someone from blame or fault, especially after due consideration of the case.",
        chinese_explanation: "(C) '逮捕' 一词意味着因犯罪而逮捕某人。" +
            "<br><br>" +
            "(A) '释放' 意味着允许某人或某物自由移动或行动。" +
            "<br><br>" +
            "(B) '协助' 意味着帮助某人。" +
            "<br><br>" +
            "(D) '免罪' 意味着经过案件的适当考虑后使某人免于责备或过错。"
    },
    {
        id: 7,
        question: "The teacher will __________ ten minutes for each student to present their project.",
        chinese_question: "老师将__________每个学生十分钟时间展示他们的项目。",
        answers: [
            { option: "A", answer: "take", chinese_answer: "拿", chinese_romanization: "ná" },
            { option: "B", answer: "waste", chinese_answer: "浪费", chinese_romanization: "làngfèi" },
            { option: "C", answer: "deny", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "D", answer: "allot", chinese_answer: "分配", chinese_romanization: "fēnpèi" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'allot' means to give or apportion something to someone as a share or task." +
            "<br><br>" +
            "(A) 'take' means to lay hold of something with one's hands." +
            "<br><br>" +
            "(B) 'waste' means to use or expend carelessly, extravagantly, or to no purpose." +
            "<br><br>" +
            "(C) 'deny' means to refuse to give or grant something to someone.",
        chinese_explanation: "(D) '分配' 一词意味着将某物分配或分派给某人作为份额或任务。" +
            "<br><br>" +
            "(A) '拿' 意味着用手抓住某物。" +
            "<br><br>" +
            "(B) '浪费' 意味着不小心地、奢侈地或无目的地使用或消耗。" +
            "<br><br>" +
            "(C) '拒绝' 意味着拒绝给予或授予某人某物。"
    },
    {
        id: 8,
        question: "The police arrested the man who helped __________ the robbery by driving the getaway car.",
        chinese_question: "警方逮捕了帮助__________抢劫的人，他开车帮助罪犯逃跑。",
        answers: [
            { option: "A", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "B", answer: "abet", chinese_answer: "教唆", chinese_romanization: "jiàosuō" },
            { option: "C", answer: "prevent", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abet' means to assist or encourage, especially in wrongdoing." +
            "<br><br>" +
            "(A) 'hinder' means to make it difficult for someone to do something." +
            "<br><br>" +
            "(C) 'prevent' means to keep something from happening." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of.",
        chinese_explanation: "(B) '教唆' 一词意味着帮助或鼓励，尤其是在做坏事时。" +
            "<br><br>" +
            "(A) '阻碍' 意味着使某人做某事变得困难。" +
            "<br><br>" +
            "(C) '阻止' 意味着阻止某事发生。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 9,
        question: "The archaeologists __________ an ancient city buried beneath the desert sands.",
        chinese_question: "考古学家在沙漠的沙子下__________了一座古城。",
        answers: [
            { option: "A", answer: "destroyed", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "B", answer: "built", chinese_answer: "建造", chinese_romanization: "jiànzào" },
            { option: "C", answer: "overlooked", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "D", answer: "discovered", chinese_answer: "发现", chinese_romanization: "fāxiàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'discovered' means found unexpectedly or during a search." +
            "<br><br>" +
            "(A) 'destroyed' means put an end to the existence of something by damaging or attacking it." +
            "<br><br>" +
            "(B) 'built' means constructed something by putting parts or material together." +
            "<br><br>" +
            "(C) 'overlooked' means failed to notice something.",
        chinese_explanation: "(D) '发现' 一词意味着意外地或在搜索过程中找到。" +
            "<br><br>" +
            "(A) '破坏' 意味着通过损坏或攻击结束某物的存在。" +
            "<br><br>" +
            "(B) '建造' 意味着通过将零件或材料组合在一起构造某物。" +
            "<br><br>" +
            "(C) '忽略' 意味着未能注意到某事。"
    },
    {
        id: 10,
        question: "It suddenly __________ to her that she had left her keys in the office.",
        chinese_question: "她突然__________，她把钥匙留在了办公室。",
        answers: [
            { option: "A", answer: "delayed", chinese_answer: "推迟", chinese_romanization: "tuīchí" },
            { option: "B", answer: "prevented", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" },
            { option: "C", answer: "occurred", chinese_answer: "想到", chinese_romanization: "xiǎngdào" },
            { option: "D", answer: "anticipated", chinese_answer: "预期", chinese_romanization: "yùqí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'occurred' means happened or took place. Figuratively, it can mean to come into one's mind." +
            "<br><br>" +
            "(A) 'delayed' means made someone or something late or slow." +
            "<br><br>" +
            "(B) 'prevented' means kept something from happening." +
            "<br><br>" +
            "(D) 'anticipated' means regarded as probable; expected or predicted.",
        chinese_explanation: "(C) '想到' 一词意味着发生或发生。比喻地，它可以表示突然出现在脑海中。" +
            "<br><br>" +
            "(A) '推迟' 意味着使某人或某物迟到或缓慢。" +
            "<br><br>" +
            "(B) '阻止' 意味着阻止某事发生。" +
            "<br><br>" +
            "(D) '预期' 意味着认为可能发生；预期或预测。"
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
