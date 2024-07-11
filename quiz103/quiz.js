// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His constant lateness began to __________ his boss.",
        chinese_question: "他经常迟到开始__________他的老板。",
        answers: [
            { option: "A", answer: "please", chinese_answer: "取悦", chinese_romanization: "qǔyuè" },
            { option: "B", answer: "exasperate", chinese_answer: "激怒", chinese_romanization: "jīnù" },
            { option: "C", answer: "delight", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "D", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'exasperate' means irritate intensely; infuriate." +
            "<br><br>" +
            "(A) 'please' means cause to feel happy and satisfied." +
            "<br><br>" +
            "(C) 'delight' means please (someone) greatly." +
            "<br><br>" +
            "(D) 'calm' means make (someone) tranquil and quiet; soothe.",
        chinese_explanation: "(B) '激怒'一词意味着强烈地激怒；使恼怒。" +
            "<br><br>" +
            "(A) '取悦' 意味着使人感到高兴和满意。" +
            "<br><br>" +
            "(C) '高兴' 意味着使（某人）非常高兴。" +
            "<br><br>" +
            "(D) '平静' 意味着使（某人）安静和平静；安慰."
    },
    {
        id: 2,
        question: "The argument began to __________ when both sides refused to compromise.",
        chinese_question: "当双方都拒绝妥协时，争论开始__________。",
        answers: [
            { option: "A", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "B", answer: "deescalate", chinese_answer: "降级", chinese_romanization: "jiàngjí" },
            { option: "C", answer: "escalate", chinese_answer: "升级", chinese_romanization: "shēngjí" },
            { option: "D", answer: "resolve", chinese_answer: "解决", chinese_romanization: "jiějué" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'escalate' means increase rapidly." + 
            "<br><br>" + 
            "(A) 'diminish' means make or become less." + 
            "<br><br>" + 
            "(B) 'deescalate' means reduce the intensity of (a conflict or potentially violent situation)." + 
            "<br><br>" + 
            "(D) 'resolve' means settle or find a solution to (a problem, dispute, or contentious matter).",
        chinese_explanation: "(C) '升级'一词意味着迅速增加。" + 
            "<br><br>" + 
            "(A) '减少' 意味着使或变少。" + 
            "<br><br>" + 
            "(B) '降级' 意味着减少（冲突或潜在暴力局势）的强度。" + 
            "<br><br>" + 
            "(D) '解决' 意味着解决或找到（问题、争议或争论事项）的解决方案。"
    },
    {
        id: 3,
        question: "Please __________ all your sources for the research paper.",
        chinese_question: "请 __________ 你所有的研究论文来源。",
        answers: [
            { option: "A", answer: "document", chinese_answer: "记录", chinese_romanization: "jìlù" },
            { option: "B", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "C", answer: "destroy", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "D", answer: "omit", chinese_answer: "省略", chinese_romanization: "shěnglüè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'document' means to record (something) in written, photographic, or other form." +
            "<br><br>" +
            "(B) 'conceal' means keep from sight; hide." +
            "<br><br>" +
            "(C) 'destroy' means put an end to the existence of (something) by damaging or attacking it." +
            "<br><br>" +
            "(D) 'omit' means leave out or exclude (someone or something), either intentionally or forgetfully.",
        chinese_explanation: "(A) '记录' 意味着以书面、摄影或其他形式记录（某事）。" +
            "<br><br>" +
            "(B) '隐藏' 意味着使不被看见；隐藏。" +
            "<br><br>" +
            "(C) '破坏' 意味着通过损坏或攻击结束（某物）的存在。" +
            "<br><br>" +
            "(D) '省略' 意味着有意或忘记地忽略或排除（某人或某物）。"
    },
    {
        id: 4,
        question: "The streetlights __________ the dark alley, making it safer to walk at night.",
        chinese_question: "路灯__________了黑暗的小巷，使夜晚行走更安全。",
        answers: [
            { option: "A", answer: "darken", chinese_answer: "使变暗", chinese_romanization: "shǐ biàn àn" },
            { option: "B", answer: "illuminate", chinese_answer: "照亮", chinese_romanization: "zhàoliàng" },
            { option: "C", answer: "obscure", chinese_answer: "掩盖", chinese_romanization: "yǎngài" },
            { option: "D", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'illuminate' means light up." + 
            "<br><br>" + 
            "(A) 'darken' means make or become dark or darker." + 
            "<br><br>" + 
            "(C) 'obscure' means keep from being seen; conceal." + 
            "<br><br>" + 
            "(D) 'conceal' means keep from sight; hide.",
        chinese_explanation: "(B) '照亮'一词意味着点亮。" + 
            "<br><br>" + 
            "(A) '使变暗' 意味着使或变暗。" + 
            "<br><br>" + 
            "(C) '掩盖' 意味着不让被看到；隐藏。" + 
            "<br><br>" + 
            "(D) '隐藏' 意味着不让看到；隐藏。"
    },
    {
        id: 5,
        question: "After 40 years of service, he decided to __________ from his job and travel the world.",
        chinese_question: "服务了40年后，他决定__________并环游世界。",
        answers: [
            { option: "A", answer: "continue", chinese_answer: "继续", chinese_romanization: "jìxù" },
            { option: "B", answer: "retire", chinese_answer: "退休", chinese_romanization: "tuìxiū" },
            { option: "C", answer: "begin", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
            { option: "D", answer: "start", chinese_answer: "开始", chinese_romanization: "kāishǐ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'retire' means leave one's job and cease to work, typically upon reaching the normal age for leaving employment." + 
            "<br><br>" + 
            "(A) 'continue' means persist in an activity or process." + 
            "<br><br>" + 
            "(C) 'begin' means start; perform or undergo the first part of (an action or activity)." + 
            "<br><br>" + 
            "(D) 'start' means begin or be reckoned from a particular point in time or space.",
        chinese_explanation: "(B) '退休'一词意味着离开工作岗位，通常是在达到正常离职年龄时停止工作。" + 
            "<br><br>" + 
            "(A) '继续' 意味着在一项活动或过程中坚持。" + 
            "<br><br>" + 
            "(C) '开始' 意味着开始；进行（一个行动或活动）的第一部分。" + 
            "<br><br>" + 
            "(D) '开始' 意味着从特定的时间或空间开始或被认为是从某个点开始。"
    },
    {
        id: 6,
        question: "The twin sisters __________ each other so much that it's hard to tell them apart.",
        chinese_question: "这对双胞胎姐妹__________如此相像，以至于很难将她们分开。",
        answers: [
            { option: "A", answer: "differ", chinese_answer: "不同", chinese_romanization: "bùtóng" },
            { option: "B", answer: "oppose", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "C", answer: "contrast", chinese_answer: "对比", chinese_romanization: "duìbǐ" },
            { option: "D", answer: "resemble", chinese_answer: "相似", chinese_romanization: "xiāngsì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'resemble' means have qualities or features, especially those of appearance, in common with (someone or something); look or seem like." +
            "<br><br>" +
            "(A) 'differ' means be unlike or dissimilar." +
            "<br><br>" +
            "(B) 'oppose' means disapprove of and attempt to prevent, especially by argument." +
            "<br><br>" +
            "(C) 'contrast' means differ strikingly.",
        chinese_explanation: "(D) '相似'一词意味着具有共同的特征或特征，尤其是外貌上的；看起来或看起来像。" +
            "<br><br>" +
            "(A) '不同' 意味着不同或不相似。" +
            "<br><br>" +
            "(B) '反对' 意味着不赞成并试图阻止，尤其是通过争论。" +
            "<br><br>" +
            "(C) '对比' 意味着显著不同。"
    },
    {
        id: 7,
        question: "The job will __________ you to have a degree in engineering.",
        chinese_question: "这份工作将__________你拥有工程学位。",
        answers: [
            { option: "A", answer: "forbid", chinese_answer: "禁止", chinese_romanization: "jìnzhǐ" },
            { option: "B", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
            { option: "D", answer: "require", chinese_answer: "需要", chinese_romanization: "xūyào" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'require' means need for a particular purpose." +
            "<br><br>" +
            "(A) 'forbid' means refuse to allow (something)." +
            "<br><br>" +
            "(B) 'reject' means dismiss as inadequate, unacceptable, or faulty." +
            "<br><br>" +
            "(C) 'dismiss' means order or allow to leave; send away.",
        chinese_explanation: "(D) '需要' 一词意味着为特定目的所需。" +
            "<br><br>" +
            "(A) '禁止' 意味着不允许（某事）。" +
            "<br><br>" +
            "(B) '拒绝' 意味着视为不合格、不接受或有缺陷的。" +
            "<br><br>" +
            "(C) '驳回' 意味着下令或允许离开；遣散。"
    },
    {
        id: 8,
        question: "The teacher tried to __________ the anxious students with confidence that the exam would be easy.",
        chinese_question: "老师试图用信心 __________ 焦虑的学生，告诉他们考试会很容易。",
        answers: [
            { option: "A", answer: "frighten", chinese_answer: "恐吓", chinese_romanization: "kǒnghè" },
            { option: "B", answer: "reassure", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
            { option: "C", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
            { option: "D", answer: "alarm", chinese_answer: "使惊恐", chinese_romanization: "shǐ jīngkǒng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reassure' means say or do something to remove the doubts and fears of someone." +
            "<br><br>" +
            "(A) 'frighten' means make someone afraid or anxious." +
            "<br><br>" +
            "(C) 'confuse' means make (someone) bewildered or perplexed." +
            "<br><br>" +
            "(D) 'alarm' means cause (someone) to feel frightened, disturbed, or in danger.",
        chinese_explanation: "(B) '安慰' 一词意味着说或做某事以消除某人的疑虑和恐惧。" +
            "<br><br>" +
            "(A) '恐吓' 意味着使某人害怕或担心。" +
            "<br><br>" +
            "(C) '使困惑' 意味着使（某人）困惑或迷惑。" +
            "<br><br>" +
            "(D) '使惊恐' 意味着使（某人）感到害怕、不安或处于危险中。"
    },
    {
        id: 9,
        question: "The program aims to __________ students with the skills they need for the future.",
        chinese_question: "该计划旨在 __________ 学生他们未来需要的技能。",
        answers: [
            { option: "A", answer: "provide", chinese_answer: "提供", chinese_romanization: "tígōng" },
            { option: "B", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "C", answer: "restrict", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
            { option: "D", answer: "limit", chinese_answer: "限定", chinese_romanization: "xiàndìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'provide' means make available for use; supply." +
            "<br><br>" +
            "(B) 'deny' means refuse to give or grant (something requested or desired) to (someone)." +
            "<br><br>" +
            "(C) 'restrict' means put a limit on; keep under control." +
            "<br><br>" +
            "(D) 'limit' means set or serve as a limit to.",
        chinese_explanation: "(A) '提供' 意味着可供使用；供应。" +
            "<br><br>" +
            "(B) '否认' 意味着拒绝给予或授予（某人请求或希望的东西）。" +
            "<br><br>" +
            "(C) '限制' 意味着对某物设限；保持控制。" +
            "<br><br>" +
            "(D) '限定' 意味着设定或作为限制。"
    },
    {
        id: 10,
        question: "The organization works to __________ endangered species and their habitats, ensuring their survival for future generations.",
        chinese_question: "该组织致力于 __________ 濒危物种及其栖息地，确保它们为后代生存。",
        answers: [
            { option: "A", answer: "preserve", chinese_answer: "保护", chinese_romanization: "bǎohù" },
            { option: "B", answer: "destroy", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "harm", chinese_answer: "伤害", chinese_romanization: "shānghài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'preserve' means to maintain (something) in its original or existing state." +
            "<br><br>" +
            "(B) 'destroy' means put an end to the existence of (something) by damaging or attacking it." +
            "<br><br>" +
            "(C) 'neglect' means fail to care for properly." +
            "<br><br>" +
            "(D) 'harm' means physically injure.",
        chinese_explanation: "(A) '保护' 意味着保持（某物）在其原始或现有状态。" +
            "<br><br>" +
            "(B) '破坏' 意味着通过损坏或攻击结束（某物）的存在。" +
            "<br><br>" +
            "(C) '忽视' 意味着未能妥善照顾。" +
            "<br><br>" +
            "(D) '伤害' 意味着身体上伤害。"
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
