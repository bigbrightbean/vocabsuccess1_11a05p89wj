// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ manners and graceful demeanour made her the perfect host for the evening, impressing all the guests.",
        chinese_question: "她的 __________ 礼仪和优雅的举止使她成为晚会的完美主人，令所有客人印象深刻。",
        answers: [
            { option: "A", answer: "impeccable", chinese_answer: "无可挑剔的", chinese_romanization: "wú kě tiāo tī de" },
            { option: "B", answer: "flawed", chinese_answer: "有缺陷的", chinese_romanization: "yǒu quēxiàn de" },
            { option: "C", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "D", answer: "rude", chinese_answer: "粗鲁的", chinese_romanization: "cūlǔ de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'impeccable' means in accordance with the highest standards; faultless." +
            "<br><br>" +
            "(B) 'flawed' means having imperfections." +
            "<br><br>" +
            "(C) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(D) 'rude' means offensively impolite or ill-mannered.",
        chinese_explanation: "(A) '无可挑剔的' 意味着符合最高标准的；无可指责的。" +
            "<br><br>" +
            "(B) '有缺陷的' 意味着有缺陷的。" +
            "<br><br>" +
            "(C) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误的。" +
            "<br><br>" +
            "(D) '粗鲁的' 意味着冒犯性的不礼貌或无礼的。"
    },
    {
        id: 2,
        question: "The community was shocked by the __________ violence perpetrated by a group of unknown assailants, causing harm without any apparent reason or motive.",
        chinese_question: "社区对一群不明身份的袭击者实施的 __________ 暴力感到震惊，这种暴力没有任何明显的原因或动机。",
        answers: [
            { option: "A", answer: "justified", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
            { option: "B", answer: "meaningful", chinese_answer: "有意义的", chinese_romanization: "yǒu yìyì de" },
            { option: "C", answer: "rational", chinese_answer: "理性的", chinese_romanization: "lǐxìng de" },
            { option: "D", answer: "senseless", chinese_answer: "无意义的", chinese_romanization: "wú yìyì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'senseless' means lacking meaning, purpose, or reason; foolish." +
            "<br><br>" +
            "(A) 'justified' means having, done for, or marked by a good or legitimate reason." +
            "<br><br>" +
            "(B) 'meaningful' means having a serious, important, or useful quality or purpose." +
            "<br><br>" +
            "(C) 'rational' means based on or in accordance with reason or logic.",
        chinese_explanation: "(D) '无意义的' 意味着缺乏意义、目的或理由；愚蠢的。" +
            "<br><br>" +
            "(A) '合理的' 意味着有、出于或具有正当理由。" +
            "<br><br>" +
            "(B) '有意义的' 意味着具有严肃、重要或有用的质量或目的。" +
            "<br><br>" +
            "(C) '理性的' 意味着基于或符合理由或逻辑。"
    },
    {
        id: 3,
        question: "The berries were identified as __________ and unsafe to eat.",
        chinese_question: "这些浆果被确定为__________和安全食用。",
        answers: [
            { option: "A", answer: "poisonous", chinese_answer: "有毒的", chinese_romanization: "yǒudú de" },
            { option: "B", answer: "harmful", chinese_answer: "有害的", chinese_romanization: "yǒuhài de" },
            { option: "C", answer: "edible", chinese_answer: "可食用的", chinese_romanization: "kě shíyòng de" },
            { option: "D", answer: "toxic", chinese_answer: "有毒的", chinese_romanization: "yǒudú de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'poisonous' means causing or capable of causing death or illness if taken into the body." +
            "<br><br>" +
            "(B) 'harmful' means causing or likely to cause harm." +
            "<br><br>" +
            "(C) 'edible' means fit to be eaten." +
            "<br><br>" +
            "(D) 'toxic' means poisonous.",
        chinese_explanation: "(A) '有毒的' 意味着如果进入体内会导致死亡或疾病。" +
            "<br><br>" +
            "(B) '有害的'意味着导致或可能导致伤害。" +
            "<br><br>" +
            "(C) '可食用的'一词意味着适合食用。" +
            "<br><br>" +
            "(D) '有毒的' 意味着有毒的。"
    },
    {
        id: 4,
        question: "Her performance in the competition was __________, neither exceptionally good nor particularly bad.",
        chinese_question: "她在比赛中的表现 __________，既不特别好也不特别差。",
        answers: [
            { option: "A", answer: "outstanding", chinese_answer: "杰出的", chinese_romanization: "jiéchū de" },
            { option: "B", answer: "poor", chinese_answer: "差的", chinese_romanization: "chà de" },
            { option: "C", answer: "remarkable", chinese_answer: "显著的", chinese_romanization: "xiǎnzhù de" },
            { option: "D", answer: "average", chinese_answer: "一般的", chinese_romanization: "yībān de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'average' means typical or usual; neither very good nor very bad." +
            "<br><br>" +
            "(A) 'outstanding' means exceptionally good." +
            "<br><br>" +
            "(B) 'poor' means of a low or inferior standard or quality." +
            "<br><br>" +
            "(C) 'remarkable' means worthy of attention; striking.",
        chinese_explanation: "(D) '一般的' 意味着典型的或通常的；既不很好也不很坏。" +
            "<br><br>" +
            "(A) '杰出的' 意味着特别好。" +
            "<br><br>" +
            "(B) '差的' 意味着标准或质量低或劣。" +
            "<br><br>" +
            "(C) '显著的' 意味着值得注意的；引人注目的。"
    },
    {
        id: 5,
        question: "The house felt __________ because it was similar to the one she grew up in.",
        chinese_question: "这所房子感觉很 __________，因为它与她长大的房子相似。",
        answers: [
            { option: "A", answer: "familiar", chinese_answer: "熟悉的", chinese_romanization: "shúxī de" },
            { option: "B", answer: "strange", chinese_answer: "奇怪的", chinese_romanization: "qíguài de" },
            { option: "C", answer: "foreign", chinese_answer: "外国的", chinese_romanization: "wàiguó de" },
            { option: "D", answer: "unusual", chinese_answer: "不寻常的", chinese_romanization: "bù xúncháng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'familiar' means well known from long or close association." +
            "<br><br>" +
            "(B) 'strange' means unusual or surprising; difficult to understand or explain." +
            "<br><br>" +
            "(C) 'foreign' means from another country." +
            "<br><br>" +
            "(D) 'unusual' means not habitually or commonly occurring or done.",
        chinese_explanation: "(A) '熟悉的' 意味着因长时间或亲密关系而熟知的。" +
            "<br><br>" +
            "(B) '奇怪的' 意味着不寻常或令人惊讶的；难以理解或解释的。" +
            "<br><br>" +
            "(C) '外国的' 意味着来自另一个国家的。" +
            "<br><br>" +
            "(D) '不寻常的' 意味着不习惯性或不常见的。"
    },
    {
        id: 6,
        question: "Her __________ style of painting set her apart from other artists, making her work instantly recognizable.",
        chinese_question: "她 __________ 的绘画风格使她与其他艺术家区别开来，使她的作品一眼就能认出。",
        answers: [
            { option: "A", answer: "common", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "B", answer: "unique", chinese_answer: "独特的", chinese_romanization: "dútè de" },
            { option: "C", answer: "ordinary", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "D", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unique' means being the only one of its kind; unlike anything else." +
            "<br><br>" +
            "(A) 'common' means occurring, found, or done often; prevalent." +
            "<br><br>" +
            "(C) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(D) 'typical' means having the distinctive qualities of a particular type of person or thing.",
        chinese_explanation: "(B) '独特的' 意味着唯一的；与众不同的。" +
            "<br><br>" +
            "(A) '普通的' 意味着经常发生、发现或做的；流行的。" +
            "<br><br>" +
            "(C) '平凡的' 意味着没有特别或独特的特征；正常的。" +
            "<br><br>" +
            "(D) '典型的' 意味着具有特定类型的人或事物的独特品质。"
    },
    {
        id: 7,
        question: "She asked for __________ instructions on how to complete the project to ensure she met all the requirements.",
        chinese_question: "她要求提供 __________ 的完成项目的说明，以确保她满足所有要求。",
        answers: [
            { option: "A", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "B", answer: "general", chinese_answer: "一般的", chinese_romanization: "yībān de" },
            { option: "C", answer: "specific", chinese_answer: "具体的", chinese_romanization: "jùtǐ de" },
            { option: "D", answer: "ambiguous", chinese_answer: "含糊的", chinese_romanization: "hánhú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'specific' means clearly defined or identified." +
            "<br><br>" +
            "(A) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(B) 'general' means affecting or concerning all or most people, places, or things; widespread." +
            "<br><br>" +
            "(D) 'ambiguous' means open to more than one interpretation; having a double meaning.",
        chinese_explanation: "(C) '具体的' 一词意味着明确定义或确定的。" +
            "<br><br>" +
            "(A) '模糊的' 意味着性质不确定、不明确或不清楚。" +
            "<br><br>" +
            "(B) '一般的' 意味着影响或涉及所有或大多数人、地方或事物的；普遍的。" +
            "<br><br>" +
            "(D) '含糊的' 意味着有多种解释的；有双重意义的。"
    },
    {
        id: 8,
        question: "She is __________ to headaches when she spends too much time staring at her computer screen without taking breaks.",
        chinese_question: "她在长时间盯着电脑屏幕而不休息时容易 __________ 头痛。",
        answers: [
            { option: "A", answer: "prone", chinese_answer: "容易", chinese_romanization: "róngyì" },
            { option: "B", answer: "resistant", chinese_answer: "抗拒的", chinese_romanization: "kàngjù de" },
            { option: "C", answer: "immune", chinese_answer: "免疫的", chinese_romanization: "miǎnyì de" },
            { option: "D", answer: "unaffected", chinese_answer: "不受影响的", chinese_romanization: "bù shòu yǐngxiǎng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'prone' means likely to suffer from, do, or experience something, typically something regrettable or unwelcome." +
            "<br><br>" +
            "(B) 'resistant' means offering resistance to something or someone." +
            "<br><br>" +
            "(C) 'immune' means not affected or influenced by something." +
            "<br><br>" +
            "(D) 'unaffected' means not influenced or changed by something.",
        chinese_explanation: "(A) '容易' 意味着可能遭受、做或经历某事，通常是令人遗憾或不愉快的事情。" +
            "<br><br>" +
            "(B) '抗拒的' 意味着对某事或某人提供抵抗的。" +
            "<br><br>" +
            "(C) '免疫的' 意味着不受某事影响或影响的。" +
            "<br><br>" +
            "(D) '不受影响的' 意味着不受某事影响或改变的。"
    },
    {
        id: 9,
        question: "The singer's __________ voice captivated the audience, flowing smoothly like honey.",
        chinese_question: "歌手__________的嗓音迷住了观众，像蜂蜜一样流畅。",
        answers: [
            { option: "A", answer: "harsh", chinese_answer: "刺耳的", chinese_romanization: "cì'ěr de" },
            { option: "B", answer: "mellifluous", chinese_answer: "甜美的", chinese_romanization: "tiánměi de" },
            { option: "C", answer: "grating", chinese_answer: "难听的", chinese_romanization: "nántīng de" },
            { option: "D", answer: "jarring", chinese_answer: "令人震惊的", chinese_romanization: "lìng rén zhènjīng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mellifluous' means (of a voice or words) sweet or musical; pleasant to hear." +
            "<br><br>" +
            "(A) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(C) 'grating' means sounding harsh and unpleasant." +
            "<br><br>" +
            "(D) 'jarring' means incongruous in a striking or shocking way; clashing.",
        chinese_explanation: "(B) '甜美的'一词意味着（声音或话语）甜美或音乐的；令人愉悦的。" +
            "<br><br>" +
            "(A) '刺耳的' 意味着感官上不愉快地粗糙或刺耳的。" +
            "<br><br>" +
            "(C) '难听的' 意味着声音刺耳和不愉快的。" +
            "<br><br>" +
            "(D) '令人震惊的' 意味着以显著或令人震惊的方式不协调的；冲突的。"
    },
    {
        id: 10,
        question: "The __________ waiter made the dining experience enjoyable with his friendly and upbeat attitude.",
        chinese_question: "那位 __________ 的服务员以他的友好和乐观态度让用餐体验愉快。",
        answers: [
            { option: "A", answer: "gloomy", chinese_answer: "阴沉的", chinese_romanization: "yīnchén de" },
            { option: "B", answer: "cheerful", chinese_answer: "开心的", chinese_romanization: "kāixīn de" },
            { option: "C", answer: "rude", chinese_answer: "粗鲁的", chinese_romanization: "cūlǔ de" },
            { option: "D", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(A) 'gloomy' means dark or poorly lit, especially so as to appear depressing or frightening." +
            "<br><br>" +
            "(C) 'rude' means offensively impolite or ill-mannered." +
            "<br><br>" +
            "(D) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
        chinese_explanation: "(B) '开心的' 意味着明显的快乐和乐观。" +
            "<br><br>" +
            "(A) '阴沉的' 意味着黑暗或光线不足，尤其是显得令人沮丧或害怕。" +
            "<br><br>" +
            "(C) '粗鲁的' 意味着冒犯性的不礼貌或无礼。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着表现出或感到没有兴趣、热情或关心。"
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
