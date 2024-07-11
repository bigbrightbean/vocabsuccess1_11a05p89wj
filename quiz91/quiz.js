// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "To complete the form, you need to __________ your personal details in the designated fields.",
        chinese_question: "要完成表格，您需要在指定字段中__________您的个人详细信息。",
        answers: [
            { option: "A", answer: "remove", chinese答案: "移除", chinese罗马拼音: "yíchú" },
            { option: "B", answer: "extract", chinese答案: "提取", chinese罗马拼音: "tíqǔ" },
            { option: "C", answer: "insert", chinese答案: "插入", chinese罗马拼音: "chārù" },
            { option: "D", answer: "delete", chinese答案: "删除", chinese罗马拼音: "shānchú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'insert' means to place or fit something into another thing." +
            "<br><br>" +
            "(A) 'remove' means to take something away or off from the position occupied." +
            "<br><br>" +
            "(B) 'extract' means to remove or take out, especially by effort or force." +
            "<br><br>" +
            "(D) 'delete' means to remove or obliterate.",
        chinese_explanation: "(C) '插入' 一词意味着将某物放入另一物中。" +
            "<br><br>" +
            "(A) '移除' 意味着从占据的位置拿走或取下某物。" +
            "<br><br>" +
            "(B) '提取' 意味着移除或取出，尤其是通过努力或力量。" +
            "<br><br>" +
            "(D) '删除' 意味着移除或抹去。"
    },
    {
        id: 2,
        question: "The principal will __________ the parents about the new school policies at the meeting.",
        chinese_question: "校长将在会议上__________家长们新的学校政策。",
        answers: [
            { option: "A", answer: "mislead", chinese_answer: "误导", chinese_romanization: "wùdǎo" },
            { option: "B", answer: "entertain", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
            { option: "C", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
            { option: "D", answer: "inform", chinese_answer: "通知", chinese_romanization: "tōngzhī" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'inform' means to give someone facts or information." +
            "<br><br>" +
            "(A) 'mislead' means to cause someone to have a wrong idea or impression." +
            "<br><br>" +
            "(B) 'entertain' means to provide someone with amusement or enjoyment." +
            "<br><br>" +
            "(C) 'confuse' means to make someone unable to think clearly.",
        chinese_explanation: "(D) '通知' 一词意味着向某人提供事实或信息。" +
            "<br><br>" +
            "(A) '误导' 意味着使某人产生错误的想法或印象。" +
            "<br><br>" +
            "(B) '娱乐' 意味着为某人提供娱乐或享受。" +
            "<br><br>" +
            "(C) '使困惑' 意味着使某人无法清晰思考。"
    },
    {
        id: 3,
        question: "The factory will __________ operations during the holiday season, shutting down all production lines and sending workers home.",
        chinese_question: "工厂将在假期期间 __________ 操作，关闭所有生产线并让工人回家。",
        answers: [
            { option: "A", answer: "cease", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "B", answer: "begin", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
            { option: "C", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cease' means to bring or come to an end." +
            "<br><br>" +
            "(B) 'begin' means to start." +
            "<br><br>" +
            "(C) 'increase' means to become or make greater in size, amount, or degree." +
            "<br><br>" +
            "(D) 'support' means to bear all or part of the weight of; hold up.",
        chinese_explanation: "(A) '停止' 意味着使某事结束。" +
            "<br><br>" +
            "(B) '开始' 意味着开始。" +
            "<br><br>" +
            "(C) '增加' 意味着在规模、数量或程度上变得更大。" +
            "<br><br>" +
            "(D) '支持' 意味着承受全部或部分重量；支撑。"
    },
    {
        id: 4,
        question: "He tried to __________ making eye contact to keep from being noticed.",
        chinese_question: "他试图 __________ 目光接触以免被注意到。",
        answers: [
            { option: "A", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "B", answer: "initiate", chinese_answer: "发起", chinese_romanization: "fāqǐ" },
            { option: "C", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "D", answer: "embrace", chinese_answer: "拥抱", chinese_romanization: "yǒngbào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'avoid' means to keep away from or stop oneself from doing something." +
            "<br><br>" +
            "(B) 'initiate' means to cause (a process or action) to begin." +
            "<br><br>" +
            "(C) 'encourage' means to give support, confidence, or hope to someone." +
            "<br><br>" +
            "(D) 'embrace' means to accept (a belief, theory, or change) willingly and enthusiastically.",
        chinese_explanation: "(A) '避免' 意味着远离或阻止自己做某事。" +
            "<br><br>" +
            "(B) '发起' 意味着使（过程或行动）开始。" +
            "<br><br>" +
            "(C) '鼓励' 意味着给予支持、信心或希望。" +
            "<br><br>" +
            "(D) '拥抱' 意味着愿意并热情地接受（信仰、理论或变化）。"
    },
    {
        id: 5,
        question: "The principal will __________ the winner of the science fair tomorrow, making the announcement during the morning assembly.",
        chinese_question: "校长将在明天的早会期间 __________ 科学展的获胜者。",
        answers: [
            { option: "A", answer: "hide", chinese答案: "隐藏", chinese罗马拼音: "yǐncáng" },
            { option: "B", answer: "announce", chinese答案: "宣布", chinese罗马拼音: "xuānbù" },
            { option: "C", answer: "question", chinese答案: "质问", chinese罗马拼音: "zhìwèn" },
            { option: "D", answer: "conceal", chinese答案: "掩盖", chinese罗马拼音: "yǎngài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'announce' means to make a public and typically formal declaration about a fact, occurrence, or intention." +
            "<br><br>" +
            "(A) 'hide' means to put or keep out of sight." +
            "<br><br>" +
            "(C) 'question' means to ask questions about something." +
            "<br><br>" +
            "(D) 'conceal' means to keep from sight; hide.",
        chinese_explanation: "(B) '宣布' 意味着对事实、事件或意图进行公开且通常是正式的声明。" +
            "<br><br>" +
            "(A) '隐藏' 意味着放置或保持在视线之外。" +
            "<br><br>" +
            "(C) '质问' 意味着对某事进行提问。" +
            "<br><br>" +
            "(D) '掩盖' 意味着隐藏视线。"
    },
    {
        id: 6,
        question: "She worked hard to __________ her goal of becoming a doctor.",
        chinese_question: "她努力工作以 __________ 成为医生的目标。",
        answers: [
            { option: "A", answer: "accomplish", chinese_answer: "实现", chinese_romanization: "shíxiàn" },
            { option: "B", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "C", answer: "dismiss", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'accomplish' means to achieve or complete successfully." +
            "<br><br>" +
            "(B) 'delay' means to make someone or something late or slow." +
            "<br><br>" +
            "(C) 'dismiss' means to treat as unworthy of serious consideration." +
            "<br><br>" +
            "(D) 'overlook' means to fail to notice.",
        chinese_explanation: "(A) '实现' 意味着成功地完成或达到。" +
            "<br><br>" +
            "(B) '延迟' 意味着使某人或某物变得迟到或慢下来。" +
            "<br><br>" +
            "(C) '忽视' 意味着认为不值得认真考虑。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能注意到。"
    },
    {
        id: 7,
        question: "The company decided to __________ the deadline for the project by two weeks, giving the team more time to refine their work.",
        chinese_question: "公司决定将项目的截止日期 __________ 两周，给团队更多时间完善他们的工作。",
        answers: [
            { option: "A", answer: "shorten", chinese_answer: "缩短", chinese_romanization: "suōduǎn" },
            { option: "B", answer: "extend", chinese_answer: "延长", chinese_romanization: "yáncháng" },
            { option: "C", answer: "finalize", chinese_answer: "完成", chinese_romanization: "wánchéng" },
            { option: "D", answer: "advance", chinese_answer: "提前", chinese_romanization: "tíqián" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'extend' means to cause to cover a larger area; make longer or wider." +
            "<br><br>" +
            "(A) 'shorten' means to make or become shorter." +
            "<br><br>" +
            "(C) 'finalize' means to complete an arrangement, agreement, or plan." +
            "<br><br>" +
            "(D) 'advance' means to move forward in a purposeful way.",
        chinese_explanation: "(B) '延长' 意味着使覆盖更大面积；使更长或更宽。" +
            "<br><br>" +
            "(A) '缩短' 意味着使或变得更短。" +
            "<br><br>" +
            "(C) '完成' 意味着完成安排、协议或计划。" +
            "<br><br>" +
            "(D) '提前' 意味着有目的地向前推进。"
    },
    {
        id: 8,
        question: "He found it difficult to __________ his feelings in words.",
        chinese_question: "他发现用言语 __________ 他的感受很困难。",
        answers: [
            { option: "A", answer: "express", chinese_answer: "表达", chinese_romanization: "biǎodá" },
            { option: "B", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "C", answer: "suppress", chinese_answer: "压制", chinese_romanization: "yāzhì" },
            { option: "D", answer: "repress", chinese_answer: "压抑", chinese_romanization: "yāyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'express' means to convey (a thought or feeling) in words or by gestures and conduct." +
            "<br><br>" +
            "(B) 'conceal' means to keep from sight; hide." +
            "<br><br>" +
            "(C) 'suppress' means to forcibly put an end to." +
            "<br><br>" +
            "(D) 'repress' means to restrain, prevent, or inhibit a feeling, action, or process.",
        chinese_explanation: "(A) '表达' 意味着用言语或通过姿势和行为传达（一个想法或感觉）。" +
            "<br><br>" +
            "(B) '隐藏' 意味着从视线中隐藏；隐藏。" +
            "<br><br>" +
            "(C) '压制' 意味着强行结束。" +
            "<br><br>" +
            "(D) '压抑' 意味着抑制、阻止或抑制感情、行动或过程。"
    },
    {
        id: 9,
        question: "The professor took time to __________ the complex theory to the students.",
        chinese_question: "教授花时间向学生 __________ 复杂的理论。",
        answers: [
            { option: "A", answer: "confuse", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" },
            { option: "B", answer: "complicate", chinese_answer: "使复杂", chinese_romanization: "shǐ fùzá" },
            { option: "C", answer: "explain", chinese_answer: "解释", chinese_romanization: "jiěshì" },
            { option: "D", answer: "obscure", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'explain' means to make (an idea, situation, or problem) clear to someone by describing it in more detail or revealing relevant facts or ideas." +
            "<br><br>" +
            "(A) 'confuse' means to make something more complex or harder to understand." +
            "<br><br>" +
            "(B) 'complicate' means to make something more difficult or confusing." +
            "<br><br>" +
            "(D) 'obscure' means to keep from being seen; conceal.",
        chinese_explanation: "(C) '解释' 意味着通过描述更多细节或揭示相关事实或想法，使某个想法、情况或问题清晰明了。" +
            "<br><br>" +
            "(A) '混淆' 意味着使某事更复杂或更难理解。" +
            "<br><br>" +
            "(B) '使复杂' 意味着使某事更困难或混乱。" +
            "<br><br>" +
            "(D) '隐藏' 意味着不被看到；隐藏。"
    },
    {
        id: 10,
        question: "The sailors had to __________ through the storm to reach the harbor safely, relying on their navigational skills and instruments.",
        chinese_question: "水手们必须 __________ 穿过风暴，安全抵达港口，依靠他们的导航技能和仪器。",
        answers: [
            { option: "A", answer: "drift", chinese_answer: "漂流", chinese_romanization: "piāoliú" },
            { option: "B", answer: "anchor", chinese_answer: "锚定", chinese_romanization: "máo dìng" },
            { option: "C", answer: "float", chinese_answer: "漂浮", chinese_romanization: "piāofú" },
            { option: "D", answer: "navigate", chinese_answer: "导航", chinese_romanization: "dǎoháng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'navigate' means to plan and direct the course of a ship, aircraft, or other form of transport, especially by using instruments or maps." +
            "<br><br>" +
            "(A) 'drift' means to be carried slowly by a current of air or water." +
            "<br><br>" +
            "(B) 'anchor' means to moor a ship to the sea bottom with an anchor." +
            "<br><br>" +
            "(C) 'float' means to rest or move on or near the surface of a liquid without sinking.",
        chinese_explanation: "(D) '导航' 意味着计划和指引船、飞机或其他运输工具的航程，尤其是使用仪器或地图。" +
            "<br><br>" +
            "(A) '漂流' 意味着被空气或水流缓慢地携带。" +
            "<br><br>" +
            "(B) '锚定' 意味着用锚将船停泊在海底。" +
            "<br><br>" +
            "(C) '漂浮' 意味着在液体表面或附近休息或移动而不下沉。"
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
