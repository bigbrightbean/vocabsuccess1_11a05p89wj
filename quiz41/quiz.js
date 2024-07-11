// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His fear of flying was __________, given that it is one of the safest modes of travel.",
        chinese_question: "考虑到飞行是最安全的旅行方式之一，他对飞行的恐惧是__________的。",
        answers: [
            { option: "A", answer: "rational", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
            { option: "B", answer: "logical", chinese_answer: "符合逻辑的", chinese_romanization: "fúhé luójí de" },
            { option: "C", answer: "reasonable", chinese_answer: "明智的", chinese_romanization: "míngzhì de" },
            { option: "D", answer: "irrational", chinese_answer: "不合理的", chinese_romanization: "bù hélǐ de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'irrational' means not logical or reasonable." +
            "<br><br>" +
            "(A) 'rational' means based on or in accordance with reason or logic." +
            "<br><br>" +
            "(B) 'logical' means of or according to the rules of logic or formal argument." +
            "<br><br>" +
            "(C) 'reasonable' means having sound judgment; fair and sensible.",
        chinese_explanation: "(D) '不合理的'一词意味着不符合逻辑或不合理的。" +
            "<br><br>" +
            "(A) '合理的' 意味着基于或符合理性或逻辑的。" +
            "<br><br>" +
            "(B) '符合逻辑的' 意味着符合逻辑规则或正式论证的。" +
            "<br><br>" +
            "(C) '明智的' 意味着具有良好的判断力；公平和明智的。"
    },
    {
        id: 2,
        question: "The hot, humid weather made everyone feel __________ and unwilling to move.",
        chinese_question: "炎热潮湿的天气让每个人都感到 __________，不愿意动弹。",
        answers: [
            { option: "A", answer: "energetic", chinese_answer: "精力充沛", chinese_romanization: "jīnglì chōngpèi" },
            { option: "B", answer: "lively", chinese_answer: "活跃", chinese_romanization: "huóyuè" },
            { option: "C", answer: "languid", chinese_answer: "无力", chinese_romanization: "wúlì" },
            { option: "D", answer: "active", chinese_answer: "活动", chinese_romanization: "huódòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'languid' means displaying or having a disinclination for physical exertion or effort; slow and relaxed." +
            "<br><br>" +
            "(A) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(B) 'lively' means full of life and energy." +
            "<br><br>" +
            "(D) 'active' means engaging or ready to engage in physically energetic pursuits.",
        chinese_explanation: "(C) '无力' 意味着表现出或具有不愿进行体力活动或努力；缓慢而放松。" +
            "<br><br>" +
            "(A) '精力充沛' 意味着表现出或涉及极大的活动性或活力。" +
            "<br><br>" +
            "(B) '活跃' 意味着充满生命和能量。" +
            "<br><br>" +
            "(D) '活动' 意味着从事或准备从事体力活动。"
    },
    {
        id: 3,
        question: "The __________ hum of the air conditioner provided a steady background noise that helped her focus on her work.",
        chinese_question: "空调的 __________ 嗡嗡声提供了稳定的背景噪音，帮助她集中精力工作。",
        answers: [
            { option: "A", answer: "continuous", chinese_answer: "连续的", chinese_romanization: "liánxù de" },
            { option: "B", answer: "intermittent", chinese_answer: "间歇的", chinese_romanization: "jiànxiē de" },
            { option: "C", answer: "sporadic", chinese_answer: "零星的", chinese_romanization: "língxīng de" },
            { option: "D", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'continuous' means forming an unbroken whole; without interruption." +
            "<br><br>" +
            "(B) 'intermittent' means occurring at irregular intervals; not continuous or steady." +
            "<br><br>" +
            "(C) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated." +
            "<br><br>" +
            "(D) 'occasionally' means occurring or appearing at intervals.",
        chinese_explanation: "(A) '连续的' 意味着形成一个不间断的整体；没有中断的。" +
            "<br><br>" +
            "(B) '间歇的' 意味着不定期发生的；不连续或不稳定的。" +
            "<br><br>" +
            "(C) '零星的' 意味着不定期发生的或只有在少数地方发生的；分散的或孤立的。" +
            "<br><br>" +
            "(D) '偶尔的' 意味着间隔出现或出现的。"
    },
    {
        id: 4,
        question: "Her __________ decision-making skills make her an excellent leader.",
        chinese_question: "她的 __________ 决策能力使她成为一位优秀的领导者。",
        answers: [
            { option: "A", answer: "intelligent", chinese_answer: "聪明的", chinese_romanization: "cōngmíng de" },
            { option: "B", answer: "impulsive", chinese_answer: "冲动的", chinese_romanization: "chōngdòng de" },
            { option: "C", answer: "thoughtless", chinese_answer: "不考虑的", chinese_romanization: "bù kǎolǜ de" },
            { option: "D", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'intelligent' metaphorically means showing good judgment and quick thinking." +
            "<br><br>" +
            "(B) 'impulsive' means acting or done without forethought." +
            "<br><br>" +
            "(C) 'thoughtless' means showing a lack of thought or consideration." +
            "<br><br>" +
            "(D) 'reckless' means heedless of danger or the consequences of one's actions; rash or impetuous.",
        chinese_explanation: "(A) '聪明的' 比喻表现出良好的判断力和快速思考。" +
            "<br><br>" +
            "(B) '冲动的' 意味着不经深思熟虑的行为或行动。" +
            "<br><br>" +
            "(C) '不考虑的' 意味着表现出缺乏思考或考虑。" +
            "<br><br>" +
            "(D) '鲁莽的' 意味着对危险或自己行为的后果不加考虑的；轻率或冲动的。"
    },
    {
        id: 5,
        question: "He had a __________ appetite, finishing three plates of food in one sitting.",
        chinese_question: "他有一个 __________ 的胃口，一次吃完三盘食物。",
        answers: [
            { option: "A", answer: "small", chinese_answer: "小的", chinese_romanization: "xiǎo de" },
            { option: "B", answer: "moderate", chinese_answer: "适度的", chinese_romanization: "shìdù de" },
            { option: "C", answer: "restrained", chinese_answer: "克制的", chinese_romanization: "kèzhì de" },
            { option: "D", answer: "voracious", chinese_answer: "贪吃的", chinese_romanization: "tān chī de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'voracious' means wanting or devouring great quantities of food." +
            "<br><br>" +
            "(A) 'small' means of a size that is less than normal or usual." +
            "<br><br>" +
            "(B) 'moderate' means average in amount, intensity, quality, or degree." +
            "<br><br>" +
            "(C) 'restrained' means characterized by reserve or moderation; unemotional or dispassionate.",
        chinese_explanation: "(D) '贪吃的' 意味着想要或吞食大量食物。" +
            "<br><br>" +
            "(A) '小的' 意味着比正常或通常的大小小。" +
            "<br><br>" +
            "(B) '适度的' 意味着数量、强度、质量或程度的平均值。" +
            "<br><br>" +
            "(C) '克制的' 意味着以克制或适度为特征；不动感情的或不热情的。"
    },
    {
        id: 6,
        question: "The road construction made it __________ for commuters, causing long delays during rush hour.",
        chinese_question: "道路施工使得通勤者 __________，在高峰时段造成长时间延误。",
        answers: [
            { option: "A", answer: "easy", chinese_answer: "容易", chinese_romanization: "róngyì" },
            { option: "B", answer: "accessible", chinese_answer: "可到达", chinese_romanization: "kě dàodá" },
            { option: "C", answer: "convenient", chinese_answer: "方便", chinese_romanization: "fāngbiàn" },
            { option: "D", answer: "inconvenient", chinese_answer: "不方便", chinese_romanization: "bù fāngbiàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'inconvenient' means causing trouble, difficulties, or discomfort." +
            "<br><br>" +
            "(A) 'easy' means achieved without great effort; presenting few difficulties." +
            "<br><br>" +
            "(B) 'accessible' means able to be reached or entered." +
            "<br><br>" +
            "(C) 'convenient' means fitting in well with a person's needs, activities, and plans.",
        chinese_explanation: "(D) '不方便' 一词意味着引起麻烦、困难或不适。" +
            "<br><br>" +
            "(A) '容易' 意味着不费很大力气即可实现；呈现很少的困难。" +
            "<br><br>" +
            "(B) '可到达' 意味着可以被到达或进入的。" +
            "<br><br>" +
            "(C) '方便' 意味着很好地符合一个人的需要、活动和计划。"
    },
    {
        id: 7,
        question: "The shelter provided __________ food and water for the stranded hikers until help arrived.",
        chinese_question: "庇护所为被困的徒步旅行者提供了 __________ 的食物和水，直到救援到来。",
        answers: [
            { option: "A", answer: "insufficient", chinese_answer: "不足", chinese_romanization: "bùzú" },
            { option: "B", answer: "adequate", chinese_answer: "充足", chinese_romanization: "chōngzú" },
            { option: "C", answer: "scarce", chinese_answer: "稀缺", chinese_romanization: "xīquē" },
            { option: "D", answer: "minimal", chinese_answer: "最少", chinese_romanization: "zuìshǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'adequate' means satisfactory or acceptable in quality or quantity." +
            "<br><br>" +
            "(A) 'insufficient' means not enough; inadequate." +
            "<br><br>" +
            "(C) 'scarce' means insufficient for the demand." +
            "<br><br>" +
            "(D) 'minimal' means of a minimum amount, quantity, or degree.",
        chinese_explanation: "(B) '充足' 一词意味着在质量或数量上令人满意或可接受。" +
            "<br><br>" +
            "(A) '不足' 意味着不够；不充分。" +
            "<br><br>" +
            "(C) '稀缺' 意味着需求不足。" +
            "<br><br>" +
            "(D) '最少' 意味着最小的数量、数量或程度。"
    },
    {
        id: 8,
        question: "Their diet was quite __________, consisting mainly of rice and a few vegetables, with little protein.",
        chinese_question: "他们的饮食相当 __________，主要包括米饭和一些蔬菜，蛋白质很少。",
        answers: [
            { option: "A", answer: "abundant", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
            { option: "B", answer: "rich", chinese_answer: "富有的", chinese_romanization: "fùyǒu de" },
            { option: "C", answer: "meager", chinese_answer: "贫乏的", chinese_romanization: "pínfá de" },
            { option: "D", answer: "plentiful", chinese_answer: "丰盛的", chinese_romanization: "fēngshèng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'meager' means lacking in quantity or quality." +
            "<br><br>" +
            "(A) 'abundant' means existing or available in large quantities; plentiful." +
            "<br><br>" +
            "(B) 'rich' means having a great deal of money or assets; wealthy." +
            "<br><br>" +
            "(D) 'plentiful' means existing in or yielding great quantities; abundant.",
        chinese_explanation: "(C) '贫乏的' 意味着数量或质量不足的。" +
            "<br><br>" +
            "(A) '丰富的' 意味着大量存在或可用的；丰富的。" +
            "<br><br>" +
            "(B) '富有的' 意味着拥有大量金钱或资产；富裕的。" +
            "<br><br>" +
            "(D) '丰盛的' 意味着存在或产生大量的；丰富的。"
    },
    {
        id: 9,
        question: "After the surgery, the patient was fully __________ and able to answer the doctor's questions.",
        chinese_question: "手术后，病人完全 __________，能够回答医生的问题。",
        answers: [
            { option: "A", answer: "unconscious", chinese_answer: "无意识的", chinese_romanization: "wú yìshí de" },
            { option: "B", answer: "conscious", chinese_answer: "有意识的", chinese_romanization: "yǒu yìshí de" },
            { option: "C", answer: "asleep", chinese_answer: "睡着的", chinese_romanization: "shuìzháo de" },
            { option: "D", answer: "unaware", chinese_answer: "不知道的", chinese_romanization: "bù zhīdào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'conscious' means awake and aware of one's surroundings." +
            "<br><br>" +
            "(A) 'unconscious' means not awake and aware of and responding to one's environment." +
            "<br><br>" +
            "(C) 'asleep' means in a state of sleep." +
            "<br><br>" +
            "(D) 'unaware' means having no knowledge of a situation or fact.",
        chinese_explanation: "(B) '有意识的' 一词意味着清醒并意识到周围环境的。" +
            "<br><br>" +
            "(A) '无意识的' 意味着没有清醒和意识到并对环境做出反应。" +
            "<br><br>" +
            "(C) '睡着的' 意味着处于睡眠状态。" +
            "<br><br>" +
            "(D) '不知道的' 意味着对某种情况或事实没有知识的。"
    },
    {
        id: 10,
        question: "Her report was clear and __________, providing all the necessary information in just a few pages.",
        chinese_question: "她的报告清晰 __________，在几页内提供了所有必要的信息。",
        answers: [
            { option: "A", answer: "verbose", chinese_answer: "冗长的", chinese_romanization: "rǒngcháng de" },
            { option: "B", answer: "concise", chinese_answer: "简洁的", chinese_romanization: "jiǎnjié de" },
            { option: "C", answer: "lengthy", chinese_answer: "冗长的", chinese_romanization: "rǒngcháng de" },
            { option: "D", answer: "detailed", chinese_answer: "详细的", chinese_romanization: "xiángxì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'concise' means giving a lot of information clearly and in a few words; brief but comprehensive." +
            "<br><br>" +
            "(A) 'verbose' means using or expressed in more words than are needed." +
            "<br><br>" +
            "(C) 'lengthy' means (especially in reference to time) of considerable or unusual length, especially so as to be tedious." +
            "<br><br>" +
            "(D) 'detailed' means having many details or facts; showing attention to detail.",
        chinese_explanation: "(B) '简洁的' 一词意味着用简短但全面的语言清楚地提供大量信息。" +
            "<br><br>" +
            "(A) '冗长的' 意味着使用或表达的词比需要的多。" +
            "<br><br>" +
            "(C) '冗长的' 尤其是指时间的长度；尤其是使人厌烦的。" +
            "<br><br>" +
            "(D) '详细的' 意味着有很多细节或事实；显示出对细节的关注。"
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
