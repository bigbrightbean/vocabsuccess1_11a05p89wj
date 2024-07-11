// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "After his business failed, he __________ in self-pity and refused to start over, spending his days reminiscing about better times.",
        chinese_question: "在他的生意失败后，他 __________ 在自怜中，拒绝重新开始，整天沉浸在对美好时光的回忆中。",
        answers: [
            { option: "A", answer: "wallowed", chinese_answer: "沉迷", chinese_romanization: "chénmí" },
            { option: "B", answer: "thrived", chinese_answer: "茁壮成长", chinese_romanization: "zhuózhuàng chéngzhǎng" },
            { option: "C", answer: "rejoiced", chinese_answer: "欢欣鼓舞", chinese_romanization: "huānxīn gǔwǔ" },
            { option: "D", answer: "flourished", chinese_answer: "繁荣", chinese_romanization: "fánróng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'wallowed' means to indulge in an unrestrained way in something that creates a pleasurable sensation." +
            "<br><br>" +
            "(B) 'thrived' means to grow or develop well or vigorously." +
            "<br><br>" +
            "(C) 'rejoiced' means to feel or show great joy or delight." +
            "<br><br>" +
            "(D) 'flourished' means to grow or develop in a healthy or vigorous way, especially as the result of a particularly favorable environment.",
        chinese_explanation: "(A) '沉迷' 意味着不受限制地沉迷于带来愉悦感的事物中。" +
            "<br><br>" +
            "(B) '茁壮成长' 意味着成长或发展良好或有活力。" +
            "<br><br>" +
            "(C) '欢欣鼓舞' 意味着感到或表现出极大的喜悦或快乐。" +
            "<br><br>" +
            "(D) '繁荣' 意味着健康或充满活力地成长或发展，特别是由于特别有利的环境。"
    },
    {
        id: 2,
        question: "The team gathered to __________ in their hard-earned victory, celebrating their success late into the night.",
        chinese_question: "团队聚在一起 __________ 他们来之不易的胜利，庆祝他们的成功直到深夜。",
        answers: [
            { option: "A", answer: "revel", chinese_answer: "狂欢", chinese_romanization: "kuánghuān" },
            { option: "B", answer: "grieve", chinese_answer: "悲伤", chinese_romanization: "bēishāng" },
            { option: "C", answer: "regret", chinese_answer: "后悔", chinese_romanization: "hòuhuǐ" },
            { option: "D", answer: "withdraw", chinese_answer: "撤回", chinese_romanization: "chèhuí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'revel' means to take great pleasure or delight in something." +
            "<br><br>" +
            "(B) 'grieve' means to feel intense sorrow." +
            "<br><br>" +
            "(C) 'regret' means to feel sad or disappointed over something that has happened or been done." +
            "<br><br>" +
            "(D) 'withdraw' means to remove or take away something from a particular place or position.",
        chinese_explanation: "(A) '狂欢' 意味着在某事中获得极大的快乐或喜悦。" +
            "<br><br>" +
            "(B) '悲伤' 意味着感到强烈的悲痛。" +
            "<br><br>" +
            "(C) '后悔' 意味着对已发生或已做的事情感到悲伤或失望。" +
            "<br><br>" +
            "(D) '撤回' 意味着从某个地方或位置移除或带走某物。"
    },
    {
        id: 3,
        question: "He __________ over his classmates, being the tallest in his grade.",
        chinese_question: "他 __________ 于同学之上，是年级中最高的。",
        answers: [
            { option: "A", answer: "stooped", chinese_answer: "弯腰", chinese_romanization: "wān yāo" },
            { option: "B", answer: "towered", chinese_answer: "高耸", chinese_romanization: "gāosǒng" },
            { option: "C", answer: "crouched", chinese_answer: "蹲下", chinese_romanization: "dūnxià" },
            { option: "D", answer: "shrank", chinese_answer: "缩小", chinese_romanization: "suōxiǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'towered' metaphorically means to be much taller than others." + 
            "<br><br>" + 
            "(A) 'stooped' means bend one's head or body forward and downward." + 
            "<br><br>" + 
            "(C) 'crouched' means adopt a position where the knees are bent and the upper body is brought forward and down." + 
            "<br><br>" + 
            "(D) 'shrank' means become or make smaller in size or amount.",
        chinese_explanation: "(B) '高耸' 比喻比其他人高得多。" + 
            "<br><br>" + 
            "(A) '弯腰' 意味着弯下头或身体向前和向下。" + 
            "<br><br>" + 
            "(C) '蹲下' 意味着采取膝盖弯曲、上身前倾并向下的姿势。" + 
            "<br><br>" + 
            "(D) '缩小' 意味着变小或使数量减少。"
    },
    {
        id: 4,
        question: "To maintain a work-life balance, she had to carefully __________ her time between her job and her family.",
        chinese_question: "为了保持工作与生活的平衡，她必须仔细 __________ 她在工作和家庭之间的时间。",
        answers: [
            { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "C", answer: "schedule", chinese_answer: "安排", chinese_romanization: "ānpái" },
            { option: "D", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'schedule' figuratively means to plan or arrange a timetable for activities." +
            "<br><br>" +
            "(A) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(B) 'neglect' means fail to care for properly." +
            "<br><br>" +
            "(D) 'forget' means fail to remember.",
        chinese_explanation: "(C) '安排' 在比喻意义上意味着为活动计划或安排时间表。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认；故意忽略。" +
            "<br><br>" +
            "(B) '忽略' 意味着未能适当照顾。" +
            "<br><br>" +
            "(D) '忘记' 意味着未能记住。"
    },
    {
        id: 5,
        question: "The doctor recommended a new therapy to __________ the pain caused by the chronic condition.",
        chinese_question: "医生建议使用一种新的疗法来 __________ 慢性病引起的疼痛。",
        answers: [
            { option: "A", answer: "mitigate", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
            { option: "B", answer: "aggravate", chinese_answer: "加重", chinese_romanization: "jiāzhòng" },
            { option: "C", answer: "intensify", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "D", answer: "exacerbate", chinese_answer: "恶化", chinese_romanization: "èhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'mitigate' means to make less severe, serious, or painful." +
            "<br><br>" +
            "(B) 'aggravate' means to make a problem, injury, or offense worse or more serious." +
            "<br><br>" +
            "(C) 'intensify' means to increase in extent or strength." +
            "<br><br>" +
            "(D) 'exacerbate' means to make a problem, bad situation, or negative feeling worse.",
        chinese_explanation: "(A) '缓解' 意味着使不那么严重、严重或痛苦。" +
            "<br><br>" +
            "(B) '加重' 意味着使问题、伤害或罪行变得更糟或更严重。" +
            "<br><br>" +
            "(C) '加剧' 意味着在程度或强度上增加。" +
            "<br><br>" +
            "(D) '恶化' 意味着使问题、糟糕的情况或消极情绪变得更糟。"
    },
    {
        id: 6,
        question: "To __________ the harmful side effects of the medication, the doctor prescribed a supplementary treatment.",
        chinese_question: "为了 __________ 药物的有害副作用，医生开了一个辅助治疗。",
        answers: [
            { option: "A", answer: "counteract", chinese_answer: "抵消", chinese_romanization: "dǐxiāo" },
            { option: "B", answer: "exacerbate", chinese_answer: "恶化", chinese_romanization: "èhuà" },
            { option: "C", answer: "intensify", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "D", answer: "aggravate", chinese_answer: "加重", chinese_romanization: "jiāzhòng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'counteract' means to act against something in order to reduce its force or neutralize it." +
            "<br><br>" +
            "(B) 'exacerbate' means to make a problem, bad situation, or negative feeling worse." +
            "<br><br>" +
            "(C) 'intensify' means to increase in extent or strength." +
            "<br><br>" +
            "(D) 'aggravate' means to make a problem, injury, or offense worse or more serious.",
        chinese_explanation: "(A) '抵消' 意味着对抗某事以减弱其力量或使其无效。" +
            "<br><br>" +
            "(B) '恶化' 意味着使问题、糟糕的情况或消极情绪变得更糟。" +
            "<br><br>" +
            "(C) '加剧' 意味着在程度或强度上增加。" +
            "<br><br>" +
            "(D) '加重' 意味着使问题、伤害或罪行变得更糟或更严重。"
    },
    {
        id: 7,
        question: "The professor __________ the student in front of the entire class for submitting plagiarized work, stressing the gravity of academic dishonesty.",
        chinese_question: "教授在全班同学面前因提交抄袭作业而 __________ 了那名学生，强调了学术不诚实的严重性。",
        answers: [
            { option: "A", answer: "praised", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
            { option: "B", answer: "overlooked", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "berated", chinese_answer: "责骂", chinese_romanization: "zémà" },
            { option: "D", answer: "consoled", chinese_answer: "安慰", chinese_romanization: "ānwèi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'berated' means scolded or criticized someone angrily." +
            "<br><br>" +
            "(A) 'praised' means expressed warm approval or admiration of someone or something." +
            "<br><br>" +
            "(B) 'overlooked' means failed to notice something." +
            "<br><br>" +
            "(D) 'consoled' means comforted someone at a time of grief or disappointment.",
        chinese_explanation: "(C) '责骂' 意味着愤怒地责备或批评某人。" +
            "<br><br>" +
            "(A) '表扬' 意味着表达对某人或某事的热情赞同或钦佩。" +
            "<br><br>" +
            "(B) '忽视' 意味着未能注意到某事。" +
            "<br><br>" +
            "(D) '安慰' 意味着在悲痛或失望时安慰某人。"
    },
    {
        id: 8,
        question: "She was __________ by his smooth talk and handsome appearance, making her believe every word he said.",
        chinese_question: "她被他的花言巧语和英俊外表 __________，相信了他说的每一句话。",
        answers: [
            { option: "A", answer: "annoyed", chinese_answer: "烦恼", chinese_romanization: "fánnǎo" },
            { option: "B", answer: "beguiled", chinese_answer: "迷住", chinese_romanization: "mízhù" },
            { option: "C", answer: "frightened", chinese_answer: "吓唬", chinese_romanization: "xiàhǔ" },
            { option: "D", answer: "confused", chinese_answer: "困惑", chinese_romanization: "kùnhuò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'beguiled' means charmed or enchanted, often in a deceptive way." +
            "<br><br>" +
            "(A) 'annoyed' means slightly angry; irritated." +
            "<br><br>" +
            "(C) 'frightened' means afraid or anxious." +
            "<br><br>" +
            "(D) 'confused' means unable to think clearly; bewildered.",
        chinese_explanation: "(B) '迷住' 意味着被迷住或被施以魔法，通常是以一种欺骗性的方式。" +
            "<br><br>" +
            "(A) '烦恼' 意味着有点生气；恼火。" +
            "<br><br>" +
            "(C) '吓唬' 意味着害怕或焦虑。" +
            "<br><br>" +
            "(D) '困惑' 意味着无法清晰地思考；困惑。"
    },
    {
        id: 9,
        question: "She managed to __________ her husband by nearly twenty years, living a full and active life.",
        chinese_question: "她比丈夫多活了将近二十年，过着充实而积极的生活。",
        answers: [
            { option: "A", answer: "precede", chinese_answer: "先于", chinese_romanization: "xiān yú" },
            { option: "B", answer: "outlive", chinese_answer: "比...活得长", chinese_romanization: "bǐ... huó dé cháng" },
            { option: "C", answer: "predecease", chinese_answer: "先于...死", chinese_romanization: "xiān yú... sǐ" },
            { option: "D", answer: "follow", chinese_answer: "跟随", chinese_romanization: "gēnsuí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'outlive' means to live longer than." +
            "<br><br>" +
            "(A) 'precede' means to come before." +
            "<br><br>" +
            "(C) 'predecease' means to die before someone else." +
            "<br><br>" +
            "(D) 'follow' means to come after.",
        chinese_explanation: "(B) '比...活得长' 意味着比...活得长。" +
            "<br><br>" +
            "(A) '先于' 意味着在...之前到来。" +
            "<br><br>" +
            "(C) '先于...死' 意味着在某人之前去世。" +
            "<br><br>" +
            "(D) '跟随' 意味着在...之后到来。"
    },
    {
        id: 10,
        question: "She struggled to __________ the complex concepts in her physics class.",
        chinese_question: "她努力 __________ 物理课上的复杂概念。",
        answers: [
            { option: "A", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
            { option: "B", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "grasp", chinese_answer: "理解", chinese_romanization: "lǐjiě" },
            { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'grasp' metaphorically means to understand something fully." +
            "<br><br>" +
            "(A) 'forget' means fail to remember." +
            "<br><br>" +
            "(B) 'reject' means dismiss as inadequate, unacceptable, or faulty." +
            "<br><br>" +
            "(D) 'avoid' means keep away from or stop oneself from doing (something).",
        chinese_explanation: "(C) '理解' 比喻完全理解某事。" +
            "<br><br>" +
            "(A) '忘记' 意味着未能记住。" +
            "<br><br>" +
            "(B) '拒绝' 意味着认为不合适、不接受或有缺陷而予以驳回。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或阻止自己做（某事）。"
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
