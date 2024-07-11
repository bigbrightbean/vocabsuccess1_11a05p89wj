// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Regular exercise is __________ to your overall health.",
        chinese_question: "定期锻炼对你的整体健康是 __________ 的。",
        answers: [
            { option: "A", answer: "beneficial", chinese_answer: "有益的", chinese_romanization: "yǒuyì de" },
            { option: "B", answer: "harmful", chinese_answer: "有害的", chinese_romanization: "yǒuhài de" },
            { option: "C", answer: "detrimental", chinese_answer: "不利的", chinese_romanization: "bùlì de" },
            { option: "D", answer: "useless", chinese_answer: "无用的", chinese_romanization: "wúyòng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'beneficial' means resulting in good; favorable or advantageous." +
            "<br><br>" +
            "(B) 'harmful' means causing or likely to cause harm." +
            "<br><br>" +
            "(C) 'detrimental' means tending to cause harm." +
            "<br><br>" +
            "(D) 'useless' means not fulfilling or not expected to achieve the intended purpose or desired outcome.",
        chinese_explanation: "(A) '有益的' 意味着带来好处的；有利的或有优势的。" +
            "<br><br>" +
            "(B) '有害的' 意味着造成或可能造成伤害的。" +
            "<br><br>" +
            "(C) '不利的' 意味着有害的倾向。" +
            "<br><br>" +
            "(D) '无用的' 意味着未能实现预期目的或预期结果的。"
    },
    {
        id: 2,
        question: "The __________ teenager often clashed with his parents over curfew rules.",
        chinese_question: "这名__________的青少年经常因为宵禁规定与父母发生冲突。",
        answers: [
            { option: "A", answer: "obedient", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
            { option: "B", answer: "compliant", chinese_answer: "服从的", chinese_romanization: "fúcóng de" },
            { option: "C", answer: "rebellious", chinese_answer: "叛逆的", chinese_romanization: "pànnì de" },
            { option: "D", answer: "submissive", chinese_answer: "顺服的", chinese_romanization: "shùnfú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'rebellious' means showing a desire to resist authority, control, or convention." +
            "<br><br>" +
            "(A) 'obedient' means complying or willing to comply with orders or requests; submissive to another's will." +
            "<br><br>" +
            "(B) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree; acquiescent." +
            "<br><br>" +
            "(D) 'submissive' means ready to conform to the authority or will of others; meekly obedient or passive.",
        chinese_explanation: "(C) '叛逆的'一词意味着表现出抵抗权威、控制或惯例的愿望。" +
            "<br><br>" +
            "(A) '顺从的' 意味着遵守或愿意遵守命令或要求的；服从他人意愿的。" +
            "<br><br>" +
            "(B) '服从的' 意味着倾向于同意他人或遵守规则的，尤其是过度的；顺从的。" +
            "<br><br>" +
            "(D) '顺服的' 意味着准备遵从权威或他人意愿的；温顺地服从的或被动的。"
    },
    {
        id: 3,
        question: "The __________ rescue mission involved scaling a steep cliff and navigating treacherous waters.",
        chinese_question: "这次 __________ 的救援任务涉及攀爬陡峭的悬崖和穿越危险的水域。",
        answers: [
            { option: "A", answer: "safe", chinese_answer: "安全", chinese_romanization: "ānquán" },
            { option: "B", answer: "cautious", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
            { option: "C", answer: "daring", chinese_answer: "大胆", chinese_romanization: "dàdǎn" },
            { option: "D", answer: "ordinary", chinese_answer: "普通", chinese_romanization: "pǔtōng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'daring' means adventurous or audaciously bold." +
            "<br><br>" +
            "(A) 'safe' means protected from or not exposed to danger or risk; not likely to be harmed or lost." +
            "<br><br>" +
            "(B) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(C) '大胆' 意味着冒险或大胆的。" +
            "<br><br>" +
            "(A) '安全' 意味着受到保护或不暴露于危险或风险中；不太可能受到伤害或丢失。" +
            "<br><br>" +
            "(B) '谨慎' 意味着小心避免潜在的问题或危险。" +
            "<br><br>" +
            "(D) '普通' 意味着没有特别或独特的特征；正常的。"
    },
    {
        id: 4,
        question: "The __________ statue towered over the small village.",
        chinese_question: "__________的雕像高耸在小村庄之上。",
        answers: [
            { option: "A", answer: "tiny", chinese_answer: "微小的", chinese_romanization: "wēixiǎo de" },
            { option: "B", answer: "gigantic", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
            { option: "C", answer: "small", chinese_answer: "小的", chinese_romanization: "xiǎo de" },
            { option: "D", answer: "little", chinese_answer: "小的", chinese_romanization: "xiǎo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'gigantic' means of very great size or extent; huge or enormous." +
            "<br><br>" +
            "(A) 'tiny' means very small." +
            "<br><br>" +
            "(C) 'small' means of a size that is less than normal or usual." +
            "<br><br>" +
            "(D) 'little' means small in size, amount, or degree.",
        chinese_explanation: "(B) '巨大的'一词意味着非常大的尺寸或范围；巨大或庞大。" +
            "<br><br>" +
            "(A) '微小的' 意味着非常小。" +
            "<br><br>" +
            "(C) '小的' 意味着比正常或通常的尺寸小。" +
            "<br><br>" +
            "(D) '小的' 意味着尺寸、数量或程度小。"
    },
    {
        id: 5,
        question: "During the winter, food became __________ in the small village, and the residents had to ration what little they had.",
        chinese_question: "冬天的时候，小村庄里的食物变得__________，居民们不得不定量分配有限的食物。",
        answers: [
            { option: "A", answer: "plentiful", chinese_answer: "充足", chinese_romanization: "chōngzú" },
            { option: "B", answer: "abundant", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
            { option: "C", answer: "scarce", chinese_answer: "稀缺", chinese_romanization: "xīquē" },
            { option: "D", answer: "available", chinese_answer: "可用", chinese_romanization: "kě yòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'scarce' means insufficient for the demand." +
            "<br><br>" +
            "(A) 'plentiful' means existing in or yielding great quantities." +
            "<br><br>" +
            "(B) 'abundant' means existing or available in large quantities." +
            "<br><br>" +
            "(D) 'available' means able to be used or obtained.",
        chinese_explanation: "(C) '稀缺'一词意味着不足以满足需求。" +
            "<br><br>" +
            "(A) '充足' 意味着存在或提供大量的。" +
            "<br><br>" +
            "(B) '丰富' 意味着大量存在或可获得。" +
            "<br><br>" +
            "(D) '可用' 意味着可以使用或获得的。"
    },
    {
        id: 6,
        question: "She is known for being __________, always arriving at meetings exactly on time.",
        chinese_question: "她以 __________ 而闻名，总是准时参加会议。",
        answers: [
            { option: "A", answer: "tardy", chinese_answer: "迟到", chinese_romanization: "chídào" },
            { option: "B", answer: "punctual", chinese_answer: "准时", chinese_romanization: "zhǔnshí" },
            { option: "C", answer: "late", chinese_answer: "晚", chinese_romanization: "wǎn" },
            { option: "D", answer: "delayed", chinese_answer: "延迟", chinese_romanization: "yánchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'punctual' means happening or doing something at the agreed or proper time." +
            "<br><br>" +
            "(A) 'tardy' means delaying or delayed beyond the right or expected time." +
            "<br><br>" +
            "(C) 'late' means doing something or taking place after the expected, proper, or usual time." +
            "<br><br>" +
            "(D) 'delayed' means make (someone or something) late or slow.",
        chinese_explanation: "(B) '准时' 一词意味着在约定或适当的时间发生或做某事。" +
            "<br><br>" +
            "(A) '迟到' 意味着在适当或预期的时间之后延迟或被延迟。" +
            "<br><br>" +
            "(C) '晚' 意味着在预期、适当或通常时间之后做某事或发生。" +
            "<br><br>" +
            "(D) '延迟' 意味着使（某人或某事）迟到或缓慢。"
    },
    {
        id: 7,
        question: "The __________ behavior of the students during the assembly was disruptive and immature, causing the teachers to intervene.",
        chinese_question: "学生在集会上的 __________ 行为既扰乱又不成熟，导致老师不得不干预。",
        answers: [
            { option: "A", answer: "juvenile", chinese_answer: "幼稚的", chinese_romanization: "yòuzhì de" },
            { option: "B", answer: "mature", chinese_answer: "成熟的", chinese_romanization: "chéngshú de" },
            { option: "C", answer: "sophisticated", chinese_answer: "老练的", chinese_romanization: "lǎoliàn de" },
            { option: "D", answer: "adult", chinese_answer: "成年的", chinese_romanization: "chéngnián de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'juvenile' means of, for, or relating to young people; immature." +
            "<br><br>" +
            "(B) 'mature' means having reached an advanced stage of mental or emotional development." +
            "<br><br>" +
            "(C) 'sophisticated' means having, revealing, or involving a great deal of worldly experience and knowledge of fashion and culture." +
            "<br><br>" +
            "(D) 'adult' means fully grown or developed.",
        chinese_explanation: "(A) '幼稚的' 意味着与年轻人有关的；不成熟的。" +
            "<br><br>" +
            "(B) '成熟的' 意味着已经达到精神或情感发展的高级阶段的。" +
            "<br><br>" +
            "(C) '老练的' 意味着拥有、揭示或涉及大量的世故经验和时尚文化知识的。" +
            "<br><br>" +
            "(D) '成年的' 意味着完全成长或发育的。"
    },
    {
        id: 8,
        question: "The __________ size of the ocean filled her with awe as she looked out over the vast expanse of water.",
        chinese_question: "海洋的 __________ 尺寸使她在俯瞰广阔的水面时感到敬畏。",
        answers: [
            { option: "A", answer: "tiny", chinese_answer: "微小", chinese_romanization: "wēixiǎo" },
            { option: "B", answer: "small", chinese_answer: "小", chinese_romanization: "xiǎo" },
            { option: "C", answer: "immense", chinese_answer: "巨大", chinese_romanization: "jùdà" },
            { option: "D", answer: "little", chinese_answer: "小", chinese_romanization: "xiǎo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'immense' means extremely large or great, especially in scale or degree." +
            "<br><br>" +
            "(A) 'tiny' means very small." +
            "<br><br>" +
            "(B) 'small' means of a size that is less than normal or usual." +
            "<br><br>" +
            "(D) 'little' means small in size, amount, or degree.",
        chinese_explanation: "(C) '巨大' 意味着极大或伟大，特别是在规模或程度上。" +
            "<br><br>" +
            "(A) '微小' 意味着非常小。" +
            "<br><br>" +
            "(B) '小' 意味着大小低于正常或通常。" +
            "<br><br>" +
            "(D) '小' 意味着在大小、数量或程度上小。"
    },
    {
        id: 9,
        question: "The calm appearance of the lake was __________, hiding the strong currents beneath its surface.",
        chinese_question: "湖面看起来平静，实际上__________，隐藏着强烈的水流。",
        answers: [
            { option: "A", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
            { option: "B", answer: "deceptive", chinese_answer: "具有欺骗性的", chinese_romanization: "jùyǒu qīpiàn xìng de" },
            { option: "C", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "D", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'deceptive' means giving an appearance or impression different from the true one; misleading." +
            "<br><br>" +
            "(A) 'honest' means free of deceit; truthful and sincere." +
            "<br><br>" +
            "(C) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(D) 'obvious' means easily perceived or understood; clear, self-evident, or apparent.",
        chinese_explanation: "(B) '具有欺骗性' 一词意味着外表或印象与实际情况不同；误导人。" +
            "<br><br>" +
            "(A) '诚实的' 意味着没有欺骗；真诚的和诚实的。" +
            "<br><br>" +
            "(C) '清晰的' 意味着易于理解、理解或解释。" +
            "<br><br>" +
            "(D) '明显的' 意味着容易察觉或理解；清晰、自我显现或明显的。"
    },
    {
        id: 10,
            question: "The hikers felt __________ on the mountain's peak, with no shelter from the strong winds.",
            chinese_question: "徒步旅行者在山顶上感到 __________，没有遮蔽强风的地方。",
            answers: [
                { option: "A", answer: "protected", chinese_answer: "保护", chinese_romanization: "bǎohù" },
                { option: "B", answer: "sheltered", chinese_answer: "庇护", chinese_romanization: "bìhù" },
                { option: "C", answer: "exposed", chinese_answer: "暴露", chinese_romanization: "bàolù" },
                { option: "D", answer: "hidden", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
            ],
            correctAnswer: "C",
            explanation: "(C) 'exposed' means not covered or protected." +
                "<br><br>" +
                "(A) 'protected' means kept safe from harm or injury." +
                "<br><br>" +
                "(B) 'sheltered' means protected from bad weather or danger." +
                "<br><br>" +
                "(D) 'hidden' means kept out of sight.",
            chinese_explanation: "(C) '暴露' 意味着没有覆盖或保护。" +
                "<br><br>" +
                "(A) '保护' 意味着免受伤害或伤害。" +
                "<br><br>" +
                "(B) '庇护' 意味着免受恶劣天气或危险。" +
                "<br><br>" +
                "(D) '隐藏' 意味着避开视线。"
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
