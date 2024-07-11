// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She didn't __________ him at first because he had grown a beard and lost a lot of weight.",
        chinese_question: "她起初没有__________他，因为他留了胡子并且瘦了很多。",
        answers: [
            { option: "A", answer: "understand", chinese_answer: "理解", chinese_romanization: "lǐjiě" },
            { option: "B", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
            { option: "C", answer: "recognize", chinese_answer: "认出", chinese_romanization: "rènchū" },
            { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'recognize' means to identify someone or something from having encountered them before." +
            "<br><br>" +
            "(A) 'understand' means to perceive the meaning or significance of something." +
            "<br><br>" +
            "(B) 'forget' means to fail to remember." +
            "<br><br>" +
            "(D) 'avoid' means to keep away from or stop oneself from doing something.",
        chinese_explanation: "(C) '认出' 一词意味着从以前遇到的人或事物中辨认出来。" +
            "<br><br>" +
            "(A) '理解' 意味着理解某事的含义或重要性。" +
            "<br><br>" +
            "(B) '忘记' 意味着未能记住。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或阻止自己做某事。"
    },
    {
        id: 2,
        question: "She tried to __________ her parents to let her go on the trip.",
        chinese_question: "她试图 __________ 她的父母让她去旅行。",
        answers: [
            { option: "A", answer: "convince", chinese_answer: "说服", chinese_romanization: "shuōfú" },
            { option: "B", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
            { option: "C", answer: "discourage", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
            { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'convince' means to cause (someone) to believe firmly in the truth of something." +
            "<br><br>" +
            "(B) 'confuse' means to make (someone) bewildered or perplexed." +
            "<br><br>" +
            "(C) 'discourage' means to cause (someone) to lose confidence or enthusiasm." +
            "<br><br>" +
            "(D) 'avoid' means to keep away from or stop oneself from doing something.",
        chinese_explanation: "(A) '说服' 意味着使某人坚定地相信某事的真实性。" +
            "<br><br>" +
            "(B) '使困惑' 意味着使某人困惑或迷惑。" +
            "<br><br>" +
            "(C) '劝阻' 意味着使某人失去信心或热情。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或阻止自己做某事。"
    },
    {
        id: 3,
        question: "The cottage was __________ by a lush, green forest, with trees forming a natural wall all around it.",
        chinese_question: "小屋被茂密的绿色森林 __________，树木在其周围形成了一堵天然的墙。",
        answers: [
            { option: "A", answer: "surrounded", chinese_answer: "环绕", chinese_romanization: "huánrào" },
            { option: "B", answer: "isolated", chinese_answer: "孤立", chinese_romanization: "gūlì" },
            { option: "C", answer: "exposed", chinese_answer: "暴露", chinese_romanization: "bàolù" },
            { option: "D", answer: "abandoned", chinese_answer: "被遗弃", chinese_romanization: "bèi yíqì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'surrounded' means to be all around something." +
            "<br><br>" +
            "(B) 'isolated' means far away from other places, buildings, or people; remote." +
            "<br><br>" +
            "(C) 'exposed' means left unprotected." +
            "<br><br>" +
            "(D) 'abandoned' means having been deserted or left.",
        chinese_explanation: "(A) '环绕' 意味着围绕某物。" +
            "<br><br>" +
            "(B) '孤立' 意味着远离其他地方、建筑或人；偏远。" +
            "<br><br>" +
            "(C) '暴露' 意味着没有保护。" +
            "<br><br>" +
            "(D) '被遗弃' 意味着被抛弃或离开。"
    },
    {
        id: 4,
        question: "She was asked to __________ the main points of the lecture in her own words.",
        chinese_question: "她被要求用自己的话 __________ 讲座的要点。",
        answers: [
            { option: "A", answer: "summarize", chinese_answer: "概述", chinese_romanization: "gàishù" },
            { option: "B", answer: "misinterpret", chinese_answer: "误解", chinese_romanization: "wùjiě" },
            { option: "C", answer: "confuse", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" },
            { option: "D", answer: "expand", chinese_answer: "扩展", chinese_romanization: "kuòzhǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'summarize' means to give a brief statement of the main points." +
            "<br><br>" +
            "(B) 'misinterpret' means to understand wrongly." +
            "<br><br>" +
            "(C) 'confuse' means to make something more complex or harder to understand." +
            "<br><br>" +
            "(D) 'expand' means to make something larger or more extensive.",
        chinese_explanation: "(A) '概述' 意味着简要陈述主要观点。" +
            "<br><br>" +
            "(B) '误解' 意味着错误地理解。" +
            "<br><br>" +
            "(C) '混淆' 意味着使某事更复杂或更难理解。" +
            "<br><br>" +
            "(D) '扩展' 意味着使某物更大或更广泛。"
    },
    {
        id: 5,
        question: "The teacher __________ the students' reactions to the difficult question, noting who seemed most puzzled.",
        chinese_question: "老师仔细 __________ 学生们对这个难题的反应，注意到谁看起来最困惑。",
        answers: [
            { option: "A", answer: "overlooked", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "disturbed", chinese_answer: "打扰", chinese_romanization: "dǎrǎo" },
            { option: "C", answer: "confused", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
            { option: "D", answer: "observed", chinese_answer: "观察", chinese_romanization: "guānchá" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'observed' means to notice or perceive something and register it as being significant." +
            "<br><br>" +
            "(A) 'overlooked' means to fail to notice or consider something." +
            "<br><br>" +
            "(B) 'disturbed' means to interfere with the normal arrangement or functioning of something." +
            "<br><br>" +
            "(C) 'confused' means to make someone unable to think clearly.",
        chinese_explanation: "(D) '观察' 一词意味着注意到或感知某事并将其注册为重要的。" +
            "<br><br>" +
            "(A) '忽视' 意味着未能注意到或考虑某事。" +
            "<br><br>" +
            "(B) '打扰' 意味着干扰某物的正常安排或功能。" +
            "<br><br>" +
            "(C) '使困惑' 意味着使某人无法清晰思考。"
    },
    {
        id: 6,
        question: "The charity organization plans to __________ food and clothing to the homeless during the winter.",
        chinese_question: "慈善组织计划在冬季__________食物和衣物给无家可归者。",
        answers: [
            { option: "A", answer: "withhold", chinese_answer: "扣留", chinese_romanization: "kòuliú" },
            { option: "B", answer: "distribute", chinese_answer: "分发", chinese_romanization: "fēnfā" },
            { option: "C", answer: "gather", chinese_answer: "收集", chinese_romanization: "shōují" },
            { option: "D", answer: "collect", chinese_answer: "采集", chinese_romanization: "cǎijí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'distribute' means to give shares of something; to deal out." +
            "<br><br>" +
            "(A) 'withhold' means to refuse to give something that is due to or is desired by another." +
            "<br><br>" +
            "(C) 'gather' means to come together; assemble or accumulate." +
            "<br><br>" +
            "(D) 'collect' means to bring or gather together things, typically when scattered or widespread.",
        chinese_explanation: "(B) '分发' 一词意味着分配某物的份额；分发。" +
            "<br><br>" +
            "(A) '扣留' 意味着拒绝给予应得的或希望得到的东西。" +
            "<br><br>" +
            "(C) '收集' 意味着聚集在一起；聚集或积累。" +
            "<br><br>" +
            "(D) '采集' 意味着将散落或分散的东西收集在一起。"
    },
    {
        id: 7,
        question: "Can you __________ the appearance of the suspect in detail for the police report?",
        chinese_question: "你能为警方报告 __________ 嫌疑人的外貌细节吗？",
        answers: [
            { option: "A", answer: "reveal", chinese_answer: "揭露", chinese_romanization: "jiēlù" },
            { option: "B", answer: "describe", chinese_answer: "描述", chinese_romanization: "miáoshù" },
            { option: "C", answer: "observe", chinese_answer: "观察", chinese_romanization: "guānchá" },
            { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'describe' means to give an account in words of someone or something, including all the relevant characteristics, qualities, or events." +
            "<br><br>" +
            "(A) 'reveal' means to make known to others something that was previously unknown or secret." +
            "<br><br>" +
            "(C) 'observe' means to notice or perceive something and register it as being significant." +
            "<br><br>" +
            "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(B) '描述' 一词意味着用语言描述某人或某物，包括所有相关的特征、品质或事件。" +
            "<br><br>" +
            "(A) '揭露' 意味着向他人公开先前未知或秘密的事物。" +
            "<br><br>" +
            "(C) '观察' 意味着注意到或感知某事并将其注册为重要的。" +
            "<br><br>" +
            "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 8,
        question: "She __________ with joy when she saw the vibrant and colourful fireworks light up the night sky.",
        chinese_question: "当她看到五彩缤纷的烟花点亮夜空时，她 __________ 地欢呼雀跃。",
        answers: [
            { option: "A", answer: "exclaimed", chinese_answer: "喊道", chinese_romanization: "hǎndào" },
            { option: "B", answer: "whispered", chinese_answer: "低语", chinese_romanization: "dīyǔ" },
            { option: "C", answer: "murmured", chinese_answer: "喃喃", chinese_romanization: "nánnán" },
            { option: "D", answer: "questioned", chinese_answer: "质问", chinese_romanization: "zhìwèn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'exclaimed' means to cry out suddenly, especially in surprise, anger, or pain." +
            "<br><br>" +
            "(B) 'whispered' means to speak very softly using one's breath without one's vocal cords." +
            "<br><br>" +
            "(C) 'murmured' means to say something in a low, soft, or indistinct voice." +
            "<br><br>" +
            "(D) 'questioned' means to ask questions about something.",
        chinese_explanation: "(A) '喊道' 意味着突然大叫，尤其是惊讶、愤怒或痛苦时。" +
            "<br><br>" +
            "(B) '低语' 意味着非常轻柔地说话，不用声带。" +
            "<br><br>" +
            "(C) '喃喃' 意味着用低沉、柔和或不清晰的声音说话。" +
            "<br><br>" +
            "(D) '质问' 意味着对某事提出问题。"
    },
    {
        id: 9,
        question: "She would __________ to read a book rather than watch TV.",
        chinese_question: "她 __________ 阅读书籍而不是看电视。",
        answers: [
            { option: "A", answer: "dislike", chinese_answer: "不喜欢", chinese_romanization: "bù xǐhuān" },
            { option: "B", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "C", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "D", answer: "prefer", chinese_answer: "更喜欢", chinese_romanization: "gèng xǐhuān" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'prefer' means to like (one thing or person) better than another or others; tend to choose." +
            "<br><br>" +
            "(A) 'dislike' means to feel distaste for or hostility toward." +
            "<br><br>" +
            "(B) 'avoid' means to keep away from or stop oneself from doing something." +
            "<br><br>" +
            "(C) 'reject' means to refuse to accept.",
        chinese_explanation: "(D) '更喜欢' 意味着喜欢（一个事物或人）胜过另一个或其他事物；倾向于选择。" +
            "<br><br>" +
            "(A) '不喜欢' 意味着感到厌恶或敌意。" +
            "<br><br>" +
            "(B) '避免' 意味着远离或阻止自己做某事。" +
            "<br><br>" +
            "(C) '拒绝' 意味着拒绝接受。"
    },
    {
        id: 10,
        question: "The meteorologist was able to __________ the storm's path with remarkable accuracy.",
        chinese_question: "气象学家能够以惊人的准确度 __________ 风暴的路径。",
        answers: [
            { option: "A", answer: "predict", chinese_answer: "预测", chinese_romanization: "yùcè" },
            { option: "B", answer: "misinterpret", chinese_answer: "误解", chinese_romanization: "wùjiě" },
            { option: "C", answer: "disrupt", chinese_answer: "干扰", chinese_romanization: "gānrǎo" },
            { option: "D", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'predict' means to say or estimate that (a specified thing) will happen in the future or will be a consequence of something." +
            "<br><br>" +
            "(B) 'misinterpret' means to understand something incorrectly." +
            "<br><br>" +
            "(C) 'disrupt' means to interrupt (an event, activity, or process) by causing a disturbance or problem." +
            "<br><br>" +
            "(D) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(A) '预测' 意味着说出或估计（某特定事情）将在未来发生或将成为某事的结果。" +
            "<br><br>" +
            "(B) '误解' 意味着错误地理解某事。" +
            "<br><br>" +
            "(C) '干扰' 意味着通过引起干扰或问题来中断（事件、活动或过程）。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能适当地照顾。"
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
