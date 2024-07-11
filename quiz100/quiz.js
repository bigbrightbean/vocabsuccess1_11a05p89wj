// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He managed to __________ the broken piece from the machine and replace it with a new one.",
        chinese_question: "他设法将机器上的破损部分 __________ 下来，并换上了新的。",
        answers: [
            { option: "A", answer: "detach", chinese_answer: "分离", chinese_romanization: "fēnlí" },
            { option: "B", answer: "attach", chinese_answer: "附上", chinese_romanization: "fù shàng" },
            { option: "C", answer: "connect", chinese_answer: "连接", chinese_romanization: "liánjiē" },
            { option: "D", answer: "join", chinese_answer: "结合", chinese_romanization: "jiéhé" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'detach' means to disengage (something or part of something) and remove it." +
            "<br><br>" +
            "(B) 'attach' means fasten; join." +
            "<br><br>" +
            "(C) 'connect' means bring together or into contact so that a real or notional link is established." +
            "<br><br>" +
            "(D) 'join' means link; connect.",
        chinese_explanation: "(A) '分离' 意味着使（某物或部分）脱离并移除。" +
            "<br><br>" +
            "(B) '附上' 意味着固定；连接。" +
            "<br><br>" +
            "(C) '连接' 意味着使相互接触或联系，以建立实际或概念上的联系。" +
            "<br><br>" +
            "(D) '结合' 意味着连接；结合。"
    },
    {
        id: 2,
        question: "She began to __________ her friend's new car, wishing she could afford one just like it.",
        chinese_question: "她开始__________她朋友的新车，希望自己也能买得起一辆这样的车。",
        answers: [
            { option: "A", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "B", answer: "covet", chinese_answer: "垂涎", chinese_romanization: "chuíxián" },
            { option: "C", answer: "deprecate", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "D", answer: "despise", chinese_answer: "鄙视", chinese_romanization: "bǐshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'covet' means to yearn to possess or have (something)." +
            "<br><br>" +
            "(A) 'reject' means dismiss as inadequate, inappropriate, or not to one's taste." +
            "<br><br>" +
            "(C) 'deprecate' means express disapproval of." +
            "<br><br>" +
            "(D) 'despise' means feel contempt or a deep repugnance for.",
        chinese_explanation: "(B) '垂涎' 一词意味着渴望拥有或拥有（某物）。" +
            "<br><br>" +
            "(A) '拒绝' 意味着认为不够好、不适当或不合口味而不接受。" +
            "<br><br>" +
            "(C) '反对' 意味着表示不赞成。" +
            "<br><br>" +
            "(D) '鄙视' 意味着对某物感到轻蔑或深深的厌恶。"
    },
    {
        id: 3,
        question: "Before making any major decisions, it's wise to __________ with an expert in the field.",
        chinese_question: "在做出任何重大决定之前，明智的做法是与该领域的专家__________。",
        answers: [
            { option: "A", answer: "obfuscate", chinese_answer: "使模糊", chinese_romanization: "shǐ móhú" },
            { option: "B", answer: "consult", chinese_answer: "咨询", chinese_romanization: "zīxún" },
            { option: "C", answer: "dismiss", chinese_answer: "解雇", chinese_romanization: "jiěgù" },
            { option: "D", answer: "disregard", chinese_answer: "无视", chinese_romanization: "wúshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'consult' means to seek information or advice from (someone with expertise in a particular area)." +
            "<br><br>" +
            "(A) 'obfuscate' means to render obscure, unclear, or unintelligible." +
            "<br><br>" +
            "(C) 'dismiss' means order or allow to leave; send away." +
            "<br><br>" +
            "(D) 'disregard' means to pay no attention to; ignore.",
        chinese_explanation: "(B) '咨询' 一词意味着向某个特定领域有专业知识的人寻求信息或建议。" +
            "<br><br>" +
            "(A) '使模糊' 意味着使模糊不清、难以理解。" +
            "<br><br>" +
            "(C) '解雇' 意味着命令或允许离开；解散。" +
            "<br><br>" +
            "(D) '无视' 意味着不注意；忽视。"
    },
    {
        id: 4,
        question: "The magician was able to __________ a rabbit out of his hat, much to the delight of the audience.",
        chinese_question: "魔术师能够从帽子里__________出一只兔子，这让观众非常高兴。",
        answers: [
            { option: "A", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "B", answer: "beguile", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
            { option: "C", answer: "conceal", chinese_answer: "隐蔽", chinese_romanization: "yǐnbì" },
            { option: "D", answer: "conjure", chinese_answer: "变出", chinese_romanization: "biàn chū" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'conjure' means to make (something) appear unexpectedly or seemingly from nowhere as if by magic." +
            "<br><br>" +
            "(A) 'hide' means put or keep out of sight; conceal from the view or notice of others." +
            "<br><br>" +
            "(B) 'beguile' means to charm or enchant (someone), sometimes in a deceptive way." +
            "<br><br>" +
            "(C) 'conceal' means keep from sight; hide.",
        chinese_explanation: "(D) '变出' 一词意味着让（某物）出人意料地或似乎从无处出现，仿佛通过魔法。" +
            "<br><br>" +
            "(A) '隐藏' 意味着把某物或某人隐藏起来，不被别人看见。" +
            "<br><br>" +
            "(B) '欺骗' 意味着用迷人的方式欺骗某人。" +
            "<br><br>" +
            "(C) '隐蔽' 意味着不让看见；隐藏。"
    },
    {
        id: 5,
        question: "The constant waves and strong winds gradually __________ the coastline, wearing it away over time.",
        chinese_question: "持续的海浪和强风逐渐 __________ 了海岸线，随着时间的推移磨损了它。",
        answers: [
            { option: "A", answer: "eroded", chinese_answer: "侵蚀", chinese_romanization: "qīnshí" },
            { option: "B", answer: "built", chinese_answer: "建造", chinese_romanization: "jiànzào" },
            { option: "C", answer: "created", chinese_answer: "创造", chinese_romanization: "chuàngzào" },
            { option: "D", answer: "restored", chinese_answer: "恢复", chinese_romanization: "huīfù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'eroded' means gradually wear away (soil, rock, or land)." +
            "<br><br>" +
            "(B) 'built' means construct (something) by putting parts or material together." +
            "<br><br>" +
            "(C) 'created' means bring (something) into existence." +
            "<br><br>" +
            "(D) 'restored' means bring back (a previous right, practice, custom, or situation); reinstate.",
        chinese_explanation: "(A) '侵蚀' 意味着逐渐磨损（土壤、岩石或土地）。" +
            "<br><br>" +
            "(B) '建造' 意味着通过将零件或材料组装在一起构建（某物）。" +
            "<br><br>" +
            "(C) '创造' 意味着使（某事物）存在。" +
            "<br><br>" +
            "(D) '恢复' 意味着恢复（先前的权利、做法、习俗或情况）；恢复。"
    },
    {
        id: 6,
        question: "When the police arrived, a chase __________ through the busy streets.",
        chinese_question: "当警察到达时，一场追逐在繁忙的街道上 __________。",
        answers: [
            { option: "A", answer: "ensued", chinese_answer: "随即发生", chinese_romanization: "suíjí fāshēng" },
            { option: "B", answer: "ceased", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "C", answer: "paused", chinese_answer: "暂停", chinese_romanization: "zàntíng" },
            { option: "D", answer: "concluded", chinese_answer: "结束", chinese_romanization: "jiéshù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ensued' means happen or occur afterward or as a result." +
            "<br><br>" +
            "(B) 'ceased' means come or bring to an end." +
            "<br><br>" +
            "(C) 'paused' means interrupt action or speech briefly." +
            "<br><br>" +
            "(D) 'concluded' means bring (something) to an end.",
        chinese_explanation: "(A) '随即发生' 意味着随后或作为结果发生。" +
            "<br><br>" +
            "(B) '停止' 意味着结束或使结束。" +
            "<br><br>" +
            "(C) '暂停' 意味着短暂中断行动或讲话。" +
            "<br><br>" +
            "(D) '结束' 意味着结束（某事）。"
    },
    {
        id: 7,
        question: "She had to __________ many hardships to achieve her dreams.",
        chinese_question: "她必须 __________ 许多艰辛才能实现她的梦想。",
        answers: [
            { option: "A", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "B", answer: "escape", chinese_answer: "逃脱", chinese_romanization: "táotuō" },
            { option: "C", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
            { option: "D", answer: "endure", chinese_answer: "忍受", chinese_romanization: "rěnshòu" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'endure' means suffer (something painful or difficult) patiently." +
            "<br><br>" +
            "(A) 'avoid' means keep away from or stop oneself from doing (something)." +
            "<br><br>" +
            "(B) 'escape' means break free from confinement or control." +
            "<br><br>" +
            "(C) 'forget' means fail to remember.",
        chinese_explanation: "(D) '忍受' 意味着耐心地忍受（痛苦或困难的事情）。" +
            "<br><br>" +
            "(A) '避免' 意味着远离或阻止自己做（某事）。" +
            "<br><br>" +
            "(B) '逃脱' 意味着摆脱束缚或控制。" +
            "<br><br>" +
            "(C) '忘记' 意味着未能记住。"
    },
    {
        id: 8,
        question: "The teacher had to __________ the student for repeatedly disrupting the class, talking out of turn, and refusing to follow instructions.",
        chinese_question: "老师不得不 __________ 学生，因为他反复扰乱课堂，插话，并且拒绝遵守指示。",
        answers: [
            { option: "A", answer: "rebuke", chinese_answer: "责备", chinese_romanization: "zébèi" },
            { option: "B", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "C", answer: "extol", chinese_answer: "颂扬", chinese_romanization: "sòngyáng" },
            { option: "D", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'rebuke' means to express sharp disapproval or criticism of (someone) because of their behavior or actions." +
            "<br><br>" +
            "(B) 'praise' means to express warm approval or admiration of." +
            "<br><br>" +
            "(C) 'extol' means to praise enthusiastically." +
            "<br><br>" +
            "(D) 'reward' means to give something to (someone) in recognition of their services, efforts, or achievements.",
        chinese_explanation: "(A) '责备' 意味着因某人的行为或行动而表达尖锐的不赞成或批评。" +
            "<br><br>" +
            "(B) '赞扬' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(C) '颂扬' 意味着热情地赞美。" +
            "<br><br>" +
            "(D) '奖励' 意味着因其服务、努力或成就而给予某人某物。"
    },
    {
        id: 9,
        question: "She couldn't __________ why her friend had suddenly stopped talking to her, leaving her confused and hurt.",
        chinese_question: "她无法__________为什么她的朋友突然不再和她说话，这让她感到困惑和受伤。",
        answers: [
            { option: "A", answer: "misunderstand", chinese_answer: "误解", chinese_romanization: "wùjiě" },
            { option: "B", answer: "fathom", chinese_answer: "理解", chinese_romanization: "lǐjiě" },
            { option: "C", answer: "mollify", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
            { option: "D", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'fathom' means to understand (a difficult problem or an enigmatic person) after much thought." +
            "<br><br>" +
            "(A) 'misunderstand' means to fail to interpret or understand (something) correctly." +
            "<br><br>" +
            "(C) 'mollify' means to appease the anger or anxiety of (someone)." +
            "<br><br>" +
            "(D) 'conceal' means keep from sight; hide.",
        chinese_explanation: "(B) '理解'一词意味着经过深思熟虑后理解（一个困难的问题或一个神秘的人）。" +
            "<br><br>" +
            "(A) '误解' 意味着未能正确解释或理解（某事）。" +
            "<br><br>" +
            "(C) '安抚' 意味着平息（某人的）愤怒或焦虑。" +
            "<br><br>" +
            "(D) '隐藏' 意味着把某物从视线中隐藏起来。"
    },
    {
        id: 10,
        question: "He decided to __________ his fears by speaking in front of the large audience.",
        chinese_question: "他决定__________他的恐惧，在大观众面前演讲。",
        answers: [
            { option: "A", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "B", answer: "confront", chinese_answer: "面对", chinese_romanization: "miànduì" },
            { option: "C", answer: "retreat", chinese_answer: "撤退", chinese_romanization: "chètuì" },
            { option: "D", answer: "hide", chinese_answer: "躲藏", chinese_romanization: "duǒcáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'confront' means to face up to and deal with (a problem or difficult situation)." +
            "<br><br>" +
            "(A) 'avoid' means keep away from or stop oneself from doing (something)." +
            "<br><br>" +
            "(C) 'retreat' means to withdraw from a position or situation." +
            "<br><br>" +
            "(D) 'hide' means put or keep out of sight; conceal from the view or notice of others.",
        chinese_explanation: "(B) '面对'一词意味着面对和处理（问题或困难的情况）。" +
            "<br><br>" +
            "(A) '避免' 意味着远离或阻止自己做某事。" +
            "<br><br>" +
            "(C) '撤退' 意味着从一个位置或情况中撤退。" +
            "<br><br>" +
            "(D) '躲藏' 意味着把某物或某人隐藏起来，不被别人看见。"
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
