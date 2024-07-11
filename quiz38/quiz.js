// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The abandoned house at the end of the street had a __________ appearance, with broken windows and overgrown weeds giving it an eerie feel.",
        chinese_question: "街尾的废弃房屋外表 __________，破碎的窗户和杂草丛生使其充满了阴森的感觉。",
        answers: [
            { option: "A", answer: "hideous", chinese_answer: "可怕的", chinese_romanization: "kěpà de" },
            { option: "B", answer: "beautiful", chinese_answer: "美丽的", chinese_romanization: "měilì de" },
            { option: "C", answer: "charming", chinese_answer: "迷人的", chinese_romanization: "mírén de" },
            { option: "D", answer: "delightful", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hideous' means extremely ugly or unpleasant." +
            "<br><br>" +
            "(B) 'beautiful' means pleasing the senses or mind aesthetically." +
            "<br><br>" +
            "(C) 'charming' means very pleasant or attractive." +
            "<br><br>" +
            "(D) 'delightful' means causing delight; charming.",
        chinese_explanation: "(A) '可怕的' 意味着极其丑陋或令人不快的。" +
            "<br><br>" +
            "(B) '美丽的' 意味着在美学上让感官或心灵愉悦的。" +
            "<br><br>" +
            "(C) '迷人的' 意味着非常令人愉快或有吸引力的。" +
            "<br><br>" +
            "(D) '令人愉快的' 意味着引起愉悦的；迷人的。"
    },
    {
        id: 2,
        question: "The damage to the ancient artifact was __________, leaving historians devastated by the loss.",
        chinese_question: "古代文物的损坏是 __________ 的，这让历史学家为这一损失感到震惊。",
        answers: [
            { option: "A", answer: "repairable", chinese_answer: "可修复", chinese_romanization: "kě xiūfù" },
            { option: "B", answer: "fixable", chinese_answer: "可修理", chinese_romanization: "kě xiūlǐ" },
            { option: "C", answer: "irreparable", chinese_answer: "不可修复", chinese_romanization: "bùkě xiūfù" },
            { option: "D", answer: "reversible", chinese_answer: "可逆", chinese_romanization: "kě nì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'irreparable' means (of an injury or loss) impossible to rectify or repair." +
            "<br><br>" +
            "(A) 'repairable' means capable of being repaired." +
            "<br><br>" +
            "(B) 'fixable' means capable of being fixed." +
            "<br><br>" +
            "(D) 'reversible' means able to be turned the other way around or returned to a previous state.",
        chinese_explanation: "(C) '不可修复' 意味着（指伤害或损失）无法挽回或修复的。" +
            "<br><br>" +
            "(A) '可修复' 意味着能够修复。" +
            "<br><br>" +
            "(B) '可修理' 意味着能够修理。" +
            "<br><br>" +
            "(D) '可逆' 意味着能够翻转过来或恢复到以前的状态。"
    },
    {
        id: 3,
        question: "The criminal was __________ for his daring bank robberies and evading the police.",
        chinese_question: "这名罪犯因其大胆的银行抢劫和逃避警方而 __________。",
        answers: [
            { option: "A", answer: "infamous", chinese_answer: "臭名昭著的", chinese_romanization: "chòumíngzhāozhù de" },
            { option: "B", answer: "famous", chinese_answer: "著名的", chinese_romanization: "zhùmíng de" },
            { option: "C", answer: "unknown", chinese_answer: "不为人知的", chinese_romanization: "bù wéi rén zhī de" },
            { option: "D", answer: "celebrated", chinese_answer: "受人敬仰的", chinese_romanization: "shòu rén jìngyǎng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'infamous' means well known for some bad quality or deed." +
            "<br><br>" +
            "(B) 'famous' means known about by many people." +
            "<br><br>" +
            "(C) 'unknown' means not known or familiar." +
            "<br><br>" +
            "(D) 'celebrated' means greatly admired; renowned.",
        chinese_explanation: "(A) '臭名昭著的' 一词意味着因某种坏品质或行为而闻名。" +
            "<br><br>" +
            "(B) '著名的' 意味着为许多人所知。" +
            "<br><br>" +
            "(C) '不为人知的' 意味着未知或不熟悉的。" +
            "<br><br>" +
            "(D) '受人敬仰的' 意味着受到极大的钦佩；著名的。"
    },
    {
        id: 4,
        question: "The __________ spread of the disease caused widespread panic in the community.",
        chinese_question: "疾病的__________传播在社区引起了广泛的恐慌。",
        answers: [
            { option: "A", answer: "rampant", chinese_answer: "猖獗的", chinese_romanization: "chāngjué de" },
            { option: "B", answer: "controlled", chinese_answer: "受控制的", chinese_romanization: "shòu kòngzhì de" },
            { option: "C", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
            { option: "D", answer: "contained", chinese_answer: "受限制的", chinese_romanization: "shòu xiànzhì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'rampant' means (especially of something unwelcome or unpleasant) flourishing or spreading unchecked." +
            "<br><br>" +
            "(B) 'controlled' means maintained influence or authority over." +
            "<br><br>" +
            "(C) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(D) 'contained' means having or holding (someone or something) within.",
        chinese_explanation: "(A) '猖獗的' 一词意味着（尤指不受欢迎或不愉快的事物）猖獗或不受控制地蔓延。" +
            "<br><br>" +
            "(B) '受控制的' 意味着保持影响力或权威的。" +
            "<br><br>" +
            "(C) '有限的' 意味着在大小、数量或范围上受到限制的。" +
            "<br><br>" +
            "(D) '受限制的' 意味着在某物或某人之内的。"
    },
    {
        id: 5,
        question: "The politician was a __________ figure in the community, known for his strong leadership and dedication to public service.",
        chinese_question: "这位政治家是社区的 __________ 人物，以其强有力的领导和对公共服务的奉献而闻名。",
        answers: [
            { option: "A", answer: "obscure", chinese_answer: "默默无闻的", chinese_romanization: "mòmò wú wén de" },
            { option: "B", answer: "prominent", chinese_answer: "突出的", chinese_romanization: "tūchū de" },
            { option: "C", answer: "inconspicuous", chinese_answer: "不显眼的", chinese_romanization: "bù xiǎnyǎn de" },
            { option: "D", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prominent' means important; famous; standing out so as to be easily seen." +
            "<br><br>" +
            "(A) 'obscure' means not discovered or known about; uncertain." +
            "<br><br>" +
            "(C) 'inconspicuous' means not clearly visible or attracting attention." +
            "<br><br>" +
            "(D) 'minor' means lesser in importance, seriousness, or significance.",
        chinese_explanation: "(B) '突出的' 意味着重要的；著名的；显眼的。" +
            "<br><br>" +
            "(A) '默默无闻的' 意味着未被发现或不知道的；不确定的。" +
            "<br><br>" +
            "(C) '不显眼的' 意味着不清楚可见或不引人注意的。" +
            "<br><br>" +
            "(D) '次要的' 意味着重要性、严重性或显著性较小的。"
    },
    {
        id: 6,
        question: "The company's profits this quarter were __________, showing only a slight increase compared to last quarter.",
        chinese_question: "本季度公司的利润是 __________ 的，与上季度相比仅略有增加。",
        answers: [
            { option: "A", answer: "significant", chinese_answer: "显著", chinese_romanization: "xiǎnzhù" },
            { option: "B", answer: "considerable", chinese_answer: "大量", chinese_romanization: "dàliàng" },
            { option: "C", answer: "substantial", chinese_answer: "可观", chinese_romanization: "kěguān" },
            { option: "D", answer: "marginal", chinese_answer: "边缘", chinese_romanization: "biānyuán" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'marginal' means of secondary or minor importance; not central." +
            "<br><br>" +
            "(A) 'significant' means sufficiently great or important to be worthy of attention; noteworthy." +
            "<br><br>" +
            "(B) 'considerable' means notably large in size, amount, or extent." +
            "<br><br>" +
            "(C) 'substantial' means of considerable importance, size, or worth.",
        chinese_explanation: "(D) '边缘' 意味着次要或不重要的；非中心的。" +
            "<br><br>" +
            "(A) '显著' 意味着足够大或重要，值得注意的。" +
            "<br><br>" +
            "(B) '大量' 意味着在规模、数量或程度上显著大的。" +
            "<br><br>" +
            "(C) '可观' 意味着具有相当重要性、规模或价值的。"
    },
    {
        id: 7,
        question: "Leaving a young child unattended in a busy place is highly __________ and dangerous.",
        chinese_question: "在繁忙的地方不看管小孩子是非常 __________ 和危险的。",
        answers: [
            { option: "A", answer: "responsible", chinese_answer: "负责任", chinese_romanization: "fù zérèn" },
            { option: "B", answer: "cautious", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
            { option: "C", answer: "irresponsible", chinese_answer: "不负责任", chinese_romanization: "bù fù zérèn" },
            { option: "D", answer: "prudent", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'irresponsible' means not showing a proper sense of responsibility." +
            "<br><br>" +
            "(A) 'responsible' means having an obligation to do something as part of a job or role." +
            "<br><br>" +
            "(B) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(D) 'prudent' means acting with or showing care and thought for the future.",
        chinese_explanation: "(C) '不负责任' 意味着不表现出应有的责任感。" +
            "<br><br>" +
            "(A) '负责任' 意味着有义务作为工作或角色的一部分做某事。" +
            "<br><br>" +
            "(B) '谨慎' 意味着小心避免潜在的问题或危险。" +
            "<br><br>" +
            "(D) '谨慎' 意味着对未来表现出或表现出关心和思考。"
    },
    {
        id: 8,
        question: "The spy conducted a __________ operation to gather intelligence without drawing any suspicion.",
        chinese_question: "间谍进行了一项 __________ 的行动，以收集情报而不引起任何怀疑。",
        answers: [
            { option: "A", answer: "covert", chinese_answer: "秘密的", chinese_romanization: "mìmì de" },
            { option: "B", answer: "overt", chinese_answer: "公开的", chinese_romanization: "gōngkāi de" },
            { option: "C", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
            { option: "D", answer: "blatant", chinese_answer: "公然的", chinese_romanization: "gōngrán de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'covert' means not openly acknowledged or displayed." +
            "<br><br>" +
            "(B) 'overt' means done or shown openly; plainly or readily apparent." +
            "<br><br>" +
            "(C) 'obvious' means easily perceived or understood; clear." +
            "<br><br>" +
            "(D) 'blatant' means done openly and unashamedly.",
        chinese_explanation: "(A) '秘密的' 意味着不公开承认或展示的。" +
            "<br><br>" +
            "(B) '公开的' 意味着公开完成或展示的；明显的或容易察觉的。" +
            "<br><br>" +
            "(C) '明显的' 意味着容易察觉或理解的；清楚的。" +
            "<br><br>" +
            "(D) '公然的' 意味着公开而毫不羞耻地进行的。"
    },
    {
        id: 9,
        question: "Despite his __________ size, the player had a big impact on the game.",
        chinese_question: "尽管个头 __________，这位球员在比赛中产生了巨大的影响。",
        answers: [
            { option: "A", answer: "tiny", chinese_answer: "微小的", chinese_romanization: "wēixiǎo de" },
            { option: "B", answer: "moderate", chinese_answer: "适中的", chinese_romanization: "shìzhōng de" },
            { option: "C", answer: "substantial", chinese_answer: "重要的", chinese_romanization: "zhòngyào de" },
            { option: "D", answer: "significant", chinese_answer: "显著的", chinese_romanization: "xiǎnzhù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'tiny' metaphorically means small in stature but large in influence or effect." +
            "<br><br>" +
            "(B) 'moderate' means average in amount, intensity, quality, or degree." +
            "<br><br>" +
            "(C) 'substantial' means of considerable importance, size, or worth." +
            "<br><br>" +
            "(D) 'significant' means sufficiently great or important to be worthy of attention; noteworthy.",
        chinese_explanation: "(A) '微小的' 比喻身材小但影响或效果大。" +
            "<br><br>" +
            "(B) '适中的' 意味着在数量、强度、质量或程度上是平均的。" +
            "<br><br>" +
            "(C) '重要的' 意味着相当重要、大小或价值的。" +
            "<br><br>" +
            "(D) '显著的' 意味着足够大或重要，值得注意；值得注意。"
    },
    {
        id: 10,
        question: "The scientist came up with a __________ solution to the complex problem.",
        chinese_question: "科学家想出了一个 __________ 的解决方案来解决复杂的问题。",
        answers: [
            { option: "A", answer: "brilliant", chinese_answer: "杰出的", chinese_romanization: "jiéchū de" },
            { option: "B", answer: "dull", chinese_answer: "枯燥的", chinese_romanization: "kūzào de" },
            { option: "C", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "D", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'brilliant' means exceptionally clever or talented." +
            "<br><br>" +
            "(B) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(A) '杰出的' 意味着特别聪明或有才华的。" +
            "<br><br>" +
            "(B) '枯燥的' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(C) '普通的' 意味着没有特别或独特的特征；正常的。" +
            "<br><br>" +
            "(D) '简单的' 意味着容易理解或完成；没有难度的。"
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
