// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The bright colours of the flowers __________ with the dark green leaves, making the flowers stand out vividly against the backdrop of foliage.",
        chinese_question: "花朵的鲜艳颜色与深绿色的叶子形成 __________，使花朵在绿叶的背景下显得格外鲜艳。",
        answers: [
            { option: "A", answer: "blended", chinese_answer: "混合", chinese_romanization: "hùnhé" },
            { option: "B", answer: "matched", chinese_answer: "匹配", chinese_romanization: "pǐpèi" },
            { option: "C", answer: "contrasted", chinese_answer: "对比", chinese_romanization: "duìbǐ" },
            { option: "D", answer: "resembled", chinese_answer: "类似", chinese_romanization: "lèisì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'contrasted' means to differ strikingly." +
            "<br><br>" +
            "(A) 'blended' means to mix together or combine." +
            "<br><br>" +
            "(B) 'matched' means to correspond or cause to correspond in some essential respect." +
            "<br><br>" +
            "(D) 'resembled' means to have qualities or features, especially those of appearance, in common with (someone or something); look or seem like.",
        chinese_explanation: "(C) '对比' 意味着显著不同。" +
            "<br><br>" +
            "(A) '混合' 意味着混合在一起或结合。" +
            "<br><br>" +
            "(B) '匹配' 意味着在某些基本方面对应或使之对应。" +
            "<br><br>" +
            "(D) '类似' 意味着具有（某人或某物）共同的品质或特征，尤其是外观；看起来或看起来像。"
    },
    {
        id: 2,
        question: "After much deliberation, she finally __________ her report with a strong recommendation, summarizing her key points and providing clear next steps.",
        chinese_question: "经过长时间的讨论，她最终以一个强有力的建议 __________ 她的报告，总结了她的要点并提供了明确的下一步。",
        answers: [
            { option: "A", answer: "concluded", chinese_answer: "结束", chinese_romanization: "jiéshù" },
            { option: "B", answer: "procrastinated", chinese_answer: "拖延", chinese_romanization: "tuōyán" },
            { option: "C", answer: "interrupted", chinese_answer: "打断", chinese_romanization: "dǎduàn" },
            { option: "D", answer: "questioned", chinese_answer: "质疑", chinese_romanization: "zhìyí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'concluded' means to bring something to an end." +
            "<br><br>" +
            "(B) 'procrastinated' means to delay or postpone action." +
            "<br><br>" +
            "(C) 'interrupted' means to stop the continuous progress of an activity or process." +
            "<br><br>" +
            "(D) 'questioned' means to ask questions about something.",
        chinese_explanation: "(A) '结束' 意味着将某事物结束。" +
            "<br><br>" +
            "(B) '拖延' 意味着推迟或延迟行动。" +
            "<br><br>" +
            "(C) '打断' 意味着停止活动或过程的连续进展。" +
            "<br><br>" +
            "(D) '质疑' 意味着对某事提出问题。"
    },
    {
        id: 3,
        question: "When we __________ the philosophies of Eastern and Western cultures, we uncover fascinating differences.",
        chinese_question: "当我们__________东西方文化的哲学时，我们会发现令人着迷的差异。",
        answers: [
            { option: "A", answer: "confuse", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" },
            { option: "B", answer: "separate", chinese_answer: "分离", chinese_romanization: "fēnlí" },
            { option: "C", answer: "create", chinese_answer: "创造", chinese_romanization: "chuàngzào" },
            { option: "D", answer: "compare", chinese_answer: "比较", chinese_romanization: "bǐjiào" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'compare' means to estimate, measure, or note the similarity or dissimilarity between." +
            "<br><br>" +
            "(A) 'confuse' means to make (someone) bewildered or perplexed." +
            "<br><br>" +
            "(B) 'separate' means to cause to move or be apart." +
            "<br><br>" +
            "(C) 'create' means to bring something into existence.",
        chinese_explanation: "(D) '比较' 意味着估计、衡量或注意相似性或差异性。" +
            "<br><br>" +
            "(A) '混淆' 意味着使（某人）困惑或迷惑。" +
            "<br><br>" +
            "(B) '分离' 意味着使移动或分开。" +
            "<br><br>" +
            "(C) '创造' 意味着带来某物的存在。"
    },
    {
        id: 4,
        question: "They decided to __________ a new community center to provide various services to the local residents.",
        chinese_question: "他们决定__________一个新的社区中心，为当地居民提供各种服务。",
        answers: [
            { option: "A", answer: "destroy", chinese_answer: "摧毁", chinese_romanization: "cuīhuǐ" },
            { option: "B", answer: "establish", chinese_answer: "建立", chinese_romanization: "jiànlì" },
            { option: "C", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "D", answer: "obstruct", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'establish' means to set up on a firm or permanent basis." +
            "<br><br>" +
            "(A) 'destroy' means to put an end to the existence of something." +
            "<br><br>" +
            "(C) 'neglect' means to fail to care for properly." +
            "<br><br>" +
            "(D) 'obstruct' means to block or get in the way of something.",
        chinese_explanation: "(B) '建立' 一词意味着在坚实或永久的基础上建立。" +
            "<br><br>" +
            "(A) '摧毁' 意味着结束某事物的存在。" +
            "<br><br>" +
            "(C) '忽略' 意味着未能适当地照顾。" +
            "<br><br>" +
            "(D) '阻碍' 意味着阻塞或妨碍某事物。"
    },
    {
        id: 5,
        question: "One dollar is __________ to approximately 0.9 euros, depending on the exchange rate.",
        chinese_question: "一美元大约__________于0.9欧元，具体取决于汇率。",
        answers: [
            { option: "A", answer: "identical", chinese_answer: "相同的", chinese_romanization: "xiāngtóng de" },
            { option: "B", answer: "equivalent", chinese_answer: "等价的", chinese_romanization: "děngjià de" },
            { option: "C", answer: "different", chinese_answer: "不同的", chinese_romanization: "bùtóng de" },
            { option: "D", answer: "opposite", chinese_answer: "相反的", chinese_romanization: "xiāngfǎn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'equivalent' means equal in value, amount, function, meaning, etc." +
            "<br><br>" +
            "(A) 'identical' means exactly the same." +
            "<br><br>" +
            "(C) 'different' means not the same as another." +
            "<br><br>" +
            "(D) 'opposite' means completely different; opposed.",
        chinese_explanation: "(B) '等价的' 一词意味着在价值、数量、功能、意义等方面相等。" +
            "<br><br>" +
            "(A) '相同的' 意味着完全相同。" +
            "<br><br>" +
            "(C) '不同的' 意味着与另一种不同。" +
            "<br><br>" +
            "(D) '相反的' 意味着完全不同；相反的。"
    },
    {
        id: 6,
        question: "The new software was designed to __________ the process of tracking expenses, making it easier for users to input and manage their financial data.",
        chinese_question: "新软件旨在__________追踪费用的过程，使用户更容易输入和管理他们的财务数据。",
        answers: [
            { option: "A", answer: "complicate", chinese_answer: "使复杂化", chinese_romanization: "shǐ fùzá huà" },
            { option: "B", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
            { option: "C", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "D", answer: "lengthen", chinese_answer: "延长", chinese_romanization: "yáncháng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'simplify' means to make something easier to do or understand." +
            "<br><br>" +
            "(A) 'complicate' means to make something more difficult or confusing by causing it to be more complex." +
            "<br><br>" +
            "(B) 'confuse' means to make someone unable to think clearly." +
            "<br><br>" +
            "(D) 'lengthen' means to make or become longer.",
        chinese_explanation: "(C) '简化' 一词意味着使某事更容易做或理解。" +
            "<br><br>" +
            "(A) '使复杂化' 意味着通过使其更复杂而使某事更困难或困惑。" +
            "<br><br>" +
            "(B) '使困惑' 意味着使某人无法清晰思考。" +
            "<br><br>" +
            "(D) '延长' 意味着使变长或变长。"
    },
    {
        id: 7,
        question: "The teacher asked the students to __________ the recyclables from the regular trash.",
        chinese_question: "老师要求学生将可回收物与普通垃圾__________。",
        answers: [
            { option: "A", answer: "mix", chinese_answer: "混合", chinese_romanization: "hùnhé" },
            { option: "B", answer: "combine", chinese_answer: "结合", chinese_romanization: "jiéhé" },
            { option: "C", answer: "separate", chinese_answer: "分开", chinese_romanization: "fēnkāi" },
            { option: "D", answer: "scatter", chinese_answer: "分散", chinese_romanization: "fēnsàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'separate' means to cause to move or be apart." +
            "<br><br>" +
            "(A) 'mix' means to combine or put together to form one substance or mass." +
            "<br><br>" +
            "(B) 'combine' means to unite for a common purpose or to form a whole." +
            "<br><br>" +
            "(D) 'scatter' means to throw in various random directions.",
        chinese_explanation: "(C) '分开' 一词意味着使移动或分开。" +
            "<br><br>" +
            "(A) '混合' 意味着结合或放在一起形成一种物质或质量。" +
            "<br><br>" +
            "(B) '结合' 意味着为了共同的目的而联合或形成一个整体。" +
            "<br><br>" +
            "(D) '分散' 意味着向不同方向分散。"
    },
    {
        id: 8,
        question: "She had to __________ the best candidate for the job from a pool of highly qualified applicants.",
        chinese_question: "她必须从一群高素质的申请者中__________最佳候选人。",
        answers: [
            { option: "A", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "B", answer: "dismiss", chinese_answer: "解雇", chinese_romanization: "jiěgù" },
            { option: "C", answer: "randomize", chinese_answer: "随机选择", chinese_romanization: "suíjī xuǎnzé" },
            { option: "D", answer: "select", chinese_answer: "选择", chinese_romanization: "xuǎnzé" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'select' means to carefully choose as being the best or most suitable." +
            "<br><br>" +
            "(A) 'reject' means to dismiss as inadequate, unacceptable, or faulty." +
            "<br><br>" +
            "(B) 'dismiss' means to order or allow to leave; send away." +
            "<br><br>" +
            "(C) 'randomize' means to choose without a specific plan or pattern.",
        chinese_explanation: "(D) '选择' 一词意味着仔细选择为最好的或最合适的。" +
            "<br><br>" +
            "(A) '拒绝' 意味着认为不合格、不可接受或有缺陷。" +
            "<br><br>" +
            "(B) '解雇' 意味着命令或允许离开；送走。" +
            "<br><br>" +
            "(C) '随机选择' 意味着没有具体计划或模式地选择。"
    },
    {
        id: 9,
        question: "She was chosen to __________ her school at the national science fair.",
        chinese_question: "她被选中在全国科学博览会上__________她的学校。",
        answers: [
            { option: "A", answer: "misrepresent", chinese_answer: "误传", chinese_romanization: "wùchuán" },
            { option: "B", answer: "represent", chinese_answer: "代表", chinese_romanization: "dàibiǎo" },
            { option: "C", answer: "disparage", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
            { option: "D", answer: "exclude", chinese_answer: "排除", chinese_romanization: "páichú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'represent' means to act or speak on behalf of someone or something." +
            "<br><br>" +
            "(A) 'misrepresent' means to give a false or misleading account of something." +
            "<br><br>" +
            "(C) 'disparage' means to regard or represent as being of little worth." +
            "<br><br>" +
            "(D) 'exclude' means to deny someone access to or bar someone from a place, group, or privilege.",
        chinese_explanation: "(B) '代表' 一词意味着代表某人或某事行事或发言。" +
            "<br><br>" +
            "(A) '误传' 意味着对某事物提供虚假或误导性的描述。" +
            "<br><br>" +
            "(C) '贬低' 意味着认为某物不值钱。" +
            "<br><br>" +
            "(D) '排除' 意味着拒绝某人进入某地、群体或特权。"
    },
    {
        id: 10,
        question: "The doctor __________ a new treatment plan to help manage her symptoms.",
        chinese_question: "医生__________了一种新的治疗方案来帮助控制她的症状。",
        answers: [
            { option: "A", answer: "dismissed", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
            { option: "B", answer: "criticized", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "C", answer: "recommended", chinese_answer: "推荐", chinese_romanization: "tuījiàn" },
            { option: "D", answer: "complicated", chinese_answer: "使复杂化", chinese_romanization: "shǐ fùzá huà" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'recommended' means to put forward something with approval as being suitable for a particular purpose or role." +
            "<br><br>" +
            "(A) 'dismissed' means to treat as unworthy of serious consideration." +
            "<br><br>" +
            "(B) 'criticized' means to indicate the faults of someone or something in a disapproving way." +
            "<br><br>" +
            "(D) 'complicated' means to make something more difficult or complex.",
        chinese_explanation: "(C) '推荐' 一词意味着作为适合特定目的或角色而提出。" +
            "<br><br>" +
            "(A) '驳回' 意味着认为不值得认真考虑。" +
            "<br><br>" +
            "(B) '批评' 意味着以不赞成的方式指出某人或某事的错误。" +
            "<br><br>" +
            "(D) '使复杂化' 意味着使某事变得更困难或复杂。"
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
