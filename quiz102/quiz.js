// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The loud noise from the explosion seemed to __________ her with fear.",
        chinese_question: "爆炸的巨响似乎使她因恐惧而 __________。",
        answers: [
            { option: "A", answer: "petrify", chinese_answer: "石化", chinese_romanization: "shíhuà" },
            { option: "B", answer: "soothe", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
            { option: "C", answer: "calm", chinese_answer: "使平静", chinese_romanization: "shǐ píngjìng" },
            { option: "D", answer: "relax", chinese_answer: "放松", chinese_romanization: "fàngsōng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'petrify' means to make (someone) so frightened that they are unable to move or think." +
            "<br><br>" +
            "(B) 'soothe' means gently calm (a person or their feelings)." +
            "<br><br>" +
            "(C) 'calm' means make (someone) tranquil and quiet; soothe." +
            "<br><br>" +
            "(D) 'relax' means make or become less tense or anxious.",
        chinese_explanation: "(A) '石化' 意味着使（某人）如此害怕以至于无法移动或思考。" +
            "<br><br>" +
            "(B) '安慰' 意味着温和地平静（某人或其感情）。" +
            "<br><br>" +
            "(C) '使平静' 意味着使（某人）安静和平静；安慰。" +
            "<br><br>" +
            "(D) '放松' 意味着使或变得不那么紧张或焦虑。"
    },
    {
        id: 2,
        question: "Without enough food and water, many animals would __________ in the harsh winter.",
        chinese_question: "没有足够的食物和水，许多动物会在严酷的冬天里 __________。",
        answers: [
            { option: "A", answer: "perish", chinese_answer: "死亡", chinese_romanization: "sǐwáng" },
            { option: "B", answer: "thrive", chinese_answer: "茁壮成长", chinese_romanization: "zhuózhuàng chéngzhǎng" },
            { option: "C", answer: "prosper", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
            { option: "D", answer: "flourish", chinese_answer: "兴旺", chinese_romanization: "xīngwàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'perish' means to suffer death, typically in a violent, sudden, or untimely way." +
            "<br><br>" +
            "(B) 'thrive' means grow or develop well or vigorously." +
            "<br><br>" +
            "(C) 'prosper' means succeed in material terms; be financially successful." +
            "<br><br>" +
            "(D) 'flourish' means grow or develop in a healthy or vigorous way, especially as the result of a particularly favorable environment.",
        chinese_explanation: "(A) '死亡' 意味着通常以暴力、突然或过早的方式死亡。" +
            "<br><br>" +
            "(B) '茁壮成长' 意味着生长或发展良好或茁壮。" +
            "<br><br>" +
            "(C) '繁荣' 意味着在物质方面取得成功；在经济上取得成功。" +
            "<br><br>" +
            "(D) '兴旺' 意味着在特别有利的环境中健康或茁壮地生长或发展。"
    },
    {
        id: 3,
        question: "The governor decided to __________ the prisoner after reviewing the case, showing mercy and forgiveness.",
        chinese_question: "州长在审查案件后决定 __________ 囚犯，表现出仁慈和宽恕。",
        answers: [
            { option: "A", answer: "convict", chinese_answer: "定罪", chinese_romanization: "dìngzuì" },
            { option: "B", answer: "accuse", chinese_answer: "指控", chinese_romanization: "zhǐkòng" },
            { option: "C", answer: "sentence", chinese_answer: "判刑", chinese_romanization: "pànxíng" },
            { option: "D", answer: "pardon", chinese_answer: "赦免", chinese_romanization: "shèmiǎn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'pardon' means to forgive or excuse (a person, error, or offense)." +
            "<br><br>" +
            "(A) 'convict' means declare someone to be guilty of a criminal offense by the verdict of a jury or the decision of a judge." +
            "<br><br>" +
            "(B) 'accuse' means charge someone with an offense or crime." +
            "<br><br>" +
            "(C) 'sentence' means declare the punishment decided for an offender.",
        chinese_explanation: "(D) '赦免' 意味着原谅或宽恕（某人、错误或罪行）。" +
            "<br><br>" +
            "(A) '定罪' 意味着由陪审团的裁决或法官的决定宣告某人有罪。" +
            "<br><br>" +
            "(B) '指控' 意味着指控某人犯罪。" +
            "<br><br>" +
            "(C) '判刑' 意味着宣布对犯罪者决定的惩罚。"
    },
    {
        id: 4,
        question: "It's important to __________ to the rules for safety reasons.",
        chinese_question: "出于安全原因，遵守规则很重要。",
        answers: [
            { option: "A", answer: "defy", chinese_answer: "违抗", chinese_romanization: "wéikàng" },
            { option: "B", answer: "break", chinese_answer: "违反", chinese_romanization: "wěifǎn" },
            { option: "C", answer: "adhere", chinese_answer: "遵守", chinese_romanization: "zūnshǒu" },
            { option: "D", answer: "oppose", chinese_answer: "反对", chinese_romanization: "fǎnduì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'adhere' means to stick fast to (a surface or substance) or to follow closely or exactly." +
            "<br><br>" +
            "(A) 'defy' means openly resist or refuse to obey." +
            "<br><br>" +
            "(B) 'break' means separate or cause to separate into pieces as a result of a blow, shock, or strain." +
            "<br><br>" +
            "(D) 'oppose' means disapprove of and attempt to prevent, especially by argument.",
        chinese_explanation: "(C) '遵守' 一词意味着紧贴（表面或物质）或严格遵循。" +
            "<br><br>" +
            "(A) '违抗' 意味着公然反抗或拒绝服从。" +
            "<br><br>" +
            "(B) '违反' 意味着由于打击、震动或应力而分离或导致分离成碎片。" +
            "<br><br>" +
            "(D) '反对' 意味着不赞成并试图阻止，尤其是通过争论。"
    },
    {
        id: 5,
        question: "The hotel can __________ up to 500 guests during peak season.",
        chinese_question: "在旺季，酒店可以__________多达500名客人。",
        answers: [
            { option: "A", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "B", answer: "accommodate", chinese_answer: "容纳", chinese_romanization: "róngnà" },
            { option: "C", answer: "refuse", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "D", answer: "limit", chinese_answer: "限制", chinese_romanization: "xiànzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'accommodate' means provide lodging or sufficient space for." +
            "<br><br>" +
            "(A) 'reject' means dismiss as inadequate, unacceptable, or faulty." +
            "<br><br>" +
            "(C) 'refuse' means indicate or show that one is not willing to do something." +
            "<br><br>" +
            "(D) 'limit' means set or serve as a limit to.",
        chinese_explanation: "(B) '容纳' 一词意味着提供住宿或足够的空间。" +
            "<br><br>" +
            "(A) '拒绝' 意味着视为不合格、不接受或有缺陷的。" +
            "<br><br>" +
            "(C) '拒绝' 意味着表明或显示不愿意做某事。" +
            "<br><br>" +
            "(D) '限制' 意味着设定或作为限制。"
    },
    {
        id: 6,
        question: "He decided to __________ his savings from the bank to start his own business.",
        chinese_question: "他决定从银行 __________ 存款来创业。",
        answers: [
            { option: "A", answer: "deposit", chinese_answer: "存款", chinese_romanization: "cúnkuǎn" },
            { option: "B", answer: "lend", chinese_answer: "借", chinese_romanization: "jiè" },
            { option: "C", answer: "invest", chinese_answer: "投资", chinese_romanization: "tóuzī" },
            { option: "D", answer: "withdraw", chinese_answer: "提取", chinese_romanization: "tíqǔ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'withdraw' means remove or take away (something) from a particular place or position." +
            "<br><br>" +
            "(A) 'deposit' means put or set down (something or someone) in a specific place." +
            "<br><br>" +
            "(B) 'lend' means grant to (someone) the use of (something) on the understanding that it will be returned." +
            "<br><br>" +
            "(C) 'invest' means expend money with the expectation of achieving a profit or material result by putting it into financial schemes, shares, or property, or by using it to develop a commercial venture.",
        chinese_explanation: "(D) '提取' 意味着从特定地点或位置移除或取走（某物）。" +
            "<br><br>" +
            "(A) '存款' 意味着在特定地点放置或放下（某物或某人）。" +
            "<br><br>" +
            "(B) '借' 意味着将（某物）借给某人，理解它将被归还。" +
            "<br><br>" +
            "(C) '投资' 意味着期望通过将资金投入金融计划、股票或财产或用于发展商业风险来实现利润或物质结果。"
    },
    {
        id: 7,
        question: "The sharp knife can easily __________ the rope.",
        chinese_question: "锋利的刀可以轻松地__________绳子。",
        answers: [
            { option: "A", answer: "attach", chinese_answer: "连接", chinese_romanization: "liánjiē" },
            { option: "B", answer: "sever", chinese_answer: "切断", chinese_romanization: "qiēduàn" },
            { option: "C", answer: "mend", chinese_answer: "修补", chinese_romanization: "xiūbǔ" },
            { option: "D", answer: "fix", chinese_answer: "修理", chinese_romanization: "xiūlǐ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sever' means divide by cutting or slicing, especially suddenly and forcibly." +
            "<br><br>" +
            "(A) 'attach' means join or fasten (something) to something else." +
            "<br><br>" +
            "(C) 'mend' means repair (something that is broken or damaged)." +
            "<br><br>" +
            "(D) 'fix' means fasten (something) securely in a particular place or position.",
        chinese_explanation: "(B) '切断' 一词意味着通过切割或切片分开，尤其是突然和用力地。" +
            "<br><br>" +
            "(A) '连接' 意味着将（某物）连接或固定在其他东西上。" +
            "<br><br>" +
            "(C) '修补' 意味着修理（破损或损坏的东西）。" +
            "<br><br>" +
            "(D) '修理' 意味着将（某物）牢固地固定在特定位置。"
    },
    {
        id: 8,
        question: "She decided to __________ through the park, enjoying the pleasant weather and taking her time to admire the flowers.",
        chinese_question: "她决定__________穿过公园，享受宜人的天气，并慢慢欣赏花朵。",
        answers: [
            { option: "A", answer: "sprint", chinese_answer: "冲刺", chinese_romanization: "chōngcì" },
            { option: "B", answer: "dash", chinese_answer: "奔跑", chinese_romanization: "bēnpǎo" },
            { option: "C", answer: "saunter", chinese_answer: "漫步", chinese_romanization: "mànbù" },
            { option: "D", answer: "hurry", chinese_answer: "匆忙", chinese_romanization: "cōngmáng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'saunter' means walk in a slow, relaxed manner, without hurry or effort." +
            "<br><br>" +
            "(A) 'sprint' means run at full speed over a short distance." +
            "<br><br>" +
            "(B) 'dash' means run or travel somewhere in a great hurry." +
            "<br><br>" +
            "(D) 'hurry' means move or act with haste; rush.",
        chinese_explanation: "(C) '漫步' 一词意味着以缓慢、放松的方式行走，不匆忙或不费力。" +
            "<br><br>" +
            "(A) '冲刺' 意味着全速跑短距离。" +
            "<br><br>" +
            "(B) '奔跑' 意味着快速或急忙地跑或旅行。" +
            "<br><br>" +
            "(D) '匆忙' 意味着以急切的方式移动或行动；赶快。"
    },
    {
        id: 9,
        question: "She learned to __________ French texts into English for her job.",
        chinese_question: "她学会了将法语文本 __________ 成英语以应对工作。",
        answers: [
            { option: "A", answer: "translate", chinese_answer: "翻译", chinese_romanization: "fānyì" },
            { option: "B", answer: "compose", chinese_answer: "创作", chinese_romanization: "chuàngzuò" },
            { option: "C", answer: "analyze", chinese_answer: "分析", chinese_romanization: "fēnxī" },
            { option: "D", answer: "interpret", chinese_answer: "解释", chinese_romanization: "jiěshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'translate' means express the sense of (words or text) in another language." +
            "<br><br>" +
            "(B) 'compose' means write or create (a work of art, especially music or poetry)." +
            "<br><br>" +
            "(C) 'analyze' means examine methodically and in detail the constitution or structure of (something, especially information), typically for purposes of explanation and interpretation." +
            "<br><br>" +
            "(D) 'interpret' means explain the meaning of (information, words, or actions).",
        chinese_explanation: "(A) '翻译' 意味着用另一种语言表达（词或文本）的意思。" +
            "<br><br>" +
            "(B) '创作' 意味着写作或创作（艺术作品，特别是音乐或诗歌）。" +
            "<br><br>" +
            "(C) '分析' 意味着系统地详细检查（某物，特别是信息）的构成或结构，通常是为了解释和说明。" +
            "<br><br>" +
            "(D) '解释' 意味着解释（信息、词语或行为）的意思。"
    },
    {
        id: 10,
        question: "The bully continued to __________ the smaller child until a teacher intervened.",
        chinese_question: "恶霸继续 __________ 小个子孩子，直到老师介入。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "B", answer: "comfort", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
            { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "D", answer: "taunt", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'taunt' means to provoke or challenge (someone) with insulting remarks." +
            "<br><br>" +
            "(A) 'praise' means express warm approval or admiration of." +
            "<br><br>" +
            "(B) 'comfort' means ease the grief or distress of; console." +
            "<br><br>" +
            "(C) 'support' means bear all or part of the weight of; hold up.",
        chinese_explanation: "(D) '嘲笑' 意味着用侮辱性的话语激怒或挑战（某人）。" +
            "<br><br>" +
            "(A) '赞扬' 意味着表达热情的赞同或钦佩。" +
            "<br><br>" +
            "(B) '安慰' 意味着减轻悲伤或痛苦；安慰。" +
            "<br><br>" +
            "(C) '支持' 意味着承担部分或全部重量；支撑。"
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
