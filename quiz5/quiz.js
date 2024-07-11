// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
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
    },
    {
        id: 2,
        question: "After weeks of illness, he appeared __________, with sunken cheeks and hollow eyes.",
        chinese_question: "生病数周后，他看起来 __________，两颊凹陷，眼睛空洞。",
        answers: [
            { option: "A", answer: "gaunt", chinese_answer: "消瘦的", chinese_romanization: "xiāoshòu de" },
            { option: "B", answer: "healthy", chinese_answer: "健康的", chinese_romanization: "jiànkāng de" },
            { option: "C", answer: "robust", chinese_answer: "强壮的", chinese_romanization: "qiángzhuàng de" },
            { option: "D", answer: "chubby", chinese_answer: "胖乎乎的", chinese_romanization: "pànghūhū de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'gaunt' means lean and haggard, especially because of suffering, hunger, or age." +
            "<br><br>" +
            "(B) 'healthy' means in good health." +
            "<br><br>" +
            "(C) 'robust' means strong and healthy; vigorous." +
            "<br><br>" +
            "(D) 'chubby' means plump and rounded.",
        chinese_explanation: "(A) '消瘦的' 意味着瘦弱和憔悴的，特别是因为痛苦、饥饿或年龄。" +
            "<br><br>" +
            "(B) '健康的' 意味着身体健康。" +
            "<br><br>" +
            "(C) '强壮的' 意味着强健的；充满活力的。" +
            "<br><br>" +
            "(D) '胖乎乎的' 意味着丰满和圆润的。"
    },
    {
        id: 3,
        question: "She felt __________ when she saw her friend's beautiful new car, wishing she had one too.",
        chinese_question: "看到朋友漂亮的新车时，她感到 __________，希望自己也有一辆。",
        answers: [
            { option: "A", answer: "happy", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" },
            { option: "B", answer: "envious", chinese_answer: "嫉妒的", chinese_romanization: "jídù de" },
            { option: "C", answer: "indifferent", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" },
            { option: "D", answer: "grateful", chinese_answer: "感激的", chinese_romanization: "gǎnjī de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'envious' means feeling or showing envy." +
            "<br><br>" +
            "(A) 'happy' means feeling or showing pleasure or contentment." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'grateful' means feeling or showing an appreciation of kindness; thankful.",
        chinese_explanation: "(B) '嫉妒的' 一词意味着感到或表现出羡慕。" +
            "<br><br>" +
            "(A) '高兴的' 意味着感到或表现出愉悦或满足。" +
            "<br><br>" +
            "(C) '无动于衷的' 意味着没有特别兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '感激的' 意味着感到或表现出对善意的感激；感恩的。"
    },
    {
        id: 4,
        question: "The study relies on __________ data to measure the impact of the new policy accurately, focusing on numerical values and statistical analysis.",
        chinese_question: "该研究依赖 __________ 数据来准确衡量新政策的影响，注重数值和统计分析。",
        answers: [
            { option: "A", answer: "qualitative", chinese_answer: "定性的", chinese_romanization: "dìngxìng de" },
            { option: "B", answer: "anecdotal", chinese_answer: "轶事的", chinese_romanization: "yìshì de" },
            { option: "C", answer: "quantitative", chinese_answer: "定量的", chinese_romanization: "dìngliàng de" },
            { option: "D", answer: "subjective", chinese_answer: "主观的", chinese_romanization: "zhǔguān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'quantitative' means relating to numbers or amounts, measuring how much there is of something, not how good it is." +
            "<br><br>" +
            "(A) 'qualitative' means relating to the quality of something, measuring how good or bad something is, not how much there is." +
            "<br><br>" +
            "(B) 'anecdotal' means not necessarily true or reliable, because based on personal accounts rather than facts or research." +
            "<br><br>" +
            "(D) 'subjective' means based on or influenced by personal feelings, tastes, or opinions.",
        chinese_explanation: "(C) '定量的' 意味着与数字或数量有关，测量某物的多少，而不是好坏。" +
            "<br><br>" +
            "(A) '定性的' 意味着与某物的质量有关，测量某物的好坏，而不是多少。" +
            "<br><br>" +
            "(B) '轶事的' 意味着不一定真实或可靠的，因为是基于个人经历而不是事实或研究。" +
            "<br><br>" +
            "(D) '主观的' 意味着基于或受个人感情、喜好或意见影响的。"
    },
    {
        id: 5,
        question: "It was __________ that she was upset, as her eyes were red from crying.",
        chinese_question: "她很__________，因为她的眼睛哭红了。",
        answers: [
            { option: "A", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
            { option: "B", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wéimiào de" },
            { option: "C", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
            { option: "D", answer: "concealed", chinese_answer: "隐蔽的", chinese_romanization: "yǐnbì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
            "<br><br>" +
            "(A) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(B) 'subtle' means very slight or not obvious, making it difficult to notice or understand." +
            "<br><br>" +
            "(D) 'concealed' means kept secret; hidden.",
        chinese_explanation: "(C) '明显的' 一词意味着容易察觉或理解的；清楚的，自明的，或显而易见的。" +
            "<br><br>" +
            "(A) '隐藏的' 意味着藏在视线之外的；隐蔽的。" +
            "<br><br>" +
            "(B) '微妙的' 意味着非常细微或不明显，难以注意或理解的。" +
            "<br><br>" +
            "(D) '隐蔽的' 意味着保密的；隐藏的。"
    },
    {
        id: 6,
        question: "The __________ lace on the antique dress was so fine that it required special care.",
        chinese_question: "古董裙上的 __________ 花边非常精细，需要特别护理。",
        answers: [
            { option: "A", answer: "rough", chinese_answer: "粗糙", chinese_romanization: "cūcāo" },
            { option: "B", answer: "sturdy", chinese_answer: "结实", chinese_romanization: "jiēshi" },
            { option: "C", answer: "coarse", chinese_answer: "粗", chinese_romanization: "cū" },
            { option: "D", answer: "delicate", chinese_answer: "精致", chinese_romanization: "jīngzhì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'delicate' means very fine in texture or structure; easily broken or damaged." +
            "<br><br>" +
            "(A) 'rough' means having an uneven or irregular surface; not smooth or level." +
            "<br><br>" +
            "(B) 'sturdy' means strongly and solidly built." +
            "<br><br>" +
            "(C) 'coarse' means rough or loose in texture or grain.",
        chinese_explanation: "(D) '精致' 意味着质地或结构非常精细；容易破碎或损坏。" +
            "<br><br>" +
            "(A) '粗糙' 意味着表面不平整或不规则；不光滑或不平整。" +
            "<br><br>" +
            "(B) '结实' 意味着坚固而坚固地建造的。" +
            "<br><br>" +
            "(C) '粗' 意味着质地或颗粒粗糙或松散的。"
    },
    {
        id: 7,
        question: "The mountains were __________ in the distance through the clear morning air, appearing distinctly against the bright sky.",
        chinese_question: "通过清晨的空气，远处的山脉 __________，在明亮的天空下显得格外清晰。",
        answers: [
            { option: "A", answer: "visible", chinese_answer: "可见的", chinese_romanization: "kějiàn de" },
            { option: "B", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
            { option: "C", answer: "obscured", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "D", answer: "indistinct", chinese_answer: "不清楚的", chinese_romanization: "bù qīngchu de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'visible' means able to be seen." +
            "<br><br>" +
            "(B) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(C) 'obscured' means kept from being seen; concealed." +
            "<br><br>" +
            "(D) 'indistinct' means not clear or sharply defined.",
        chinese_explanation: "(A) '可见的' 意味着能够被看到的。" +
            "<br><br>" +
            "(B) '隐藏的' 意味着隐藏的；隐蔽的。" +
            "<br><br>" +
            "(C) '模糊的' 意味着无法看到的；隐蔽的。" +
            "<br><br>" +
            "(D) '不清楚的' 意味着不清晰或不明确的。"
    },
    {
        id: 8,
        question: "The farmer's market was full of __________ produce, showcasing the season's best harvest.",
        chinese_question: "农贸市场充满了 __________ 的农产品，展示了季节最好的收成。",
        answers: [
            { option: "A", answer: "scarce", chinese_answer: "稀缺的", chinese_romanization: "xīquē de" },
            { option: "B", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
            { option: "C", answer: "poor", chinese_answer: "贫乏的", chinese_romanization: "pínfá de" },
            { option: "D", answer: "bountiful", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'bountiful' means large in quantity; abundant." +
            "<br><br>" +
            "(A) 'scarce' means insufficient for the demand." +
            "<br><br>" +
            "(B) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(C) 'poor' means lacking sufficient money to live at a standard considered comfortable or normal in a society.",
        chinese_explanation: "(D) '丰富的' 意味着数量多的；丰富的。" +
            "<br><br>" +
            "(A) '稀缺的' 意味着需求不足的。" +
            "<br><br>" +
            "(B) '有限的' 意味着在大小、数量或程度上受限的。" +
            "<br><br>" +
            "(C) '贫乏的' 意味着缺乏足够的钱以维持在社会中被认为舒适或正常的标准。"
    },
    {
        id: 9,
        question: "The earthquake caused __________ destruction, leveling entire neighborhoods.",
        chinese_question: "地震造成了 __________ 的破坏，摧毁了整个社区。",
        answers: [
            { option: "A", answer: "slight", chinese_answer: "轻微", chinese_romanization: "qīngwēi" },
            { option: "B", answer: "minimal", chinese_answer: "最小", chinese_romanization: "zuìxiǎo" },
            { option: "C", answer: "massive", chinese_answer: "巨大", chinese_romanization: "jùdà" },
            { option: "D", answer: "negligible", chinese_answer: "微不足道", chinese_romanization: "wēi bù zú dào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'massive' means large and heavy or solid." +
            "<br><br>" +
            "(A) 'slight' means small in degree; inconsiderable." +
            "<br><br>" +
            "(B) 'minimal' means of a minimum amount, quantity, or degree." +
            "<br><br>" +
            "(D) 'negligible' means so small or unimportant as to be not worth considering; insignificant.",
        chinese_explanation: "(C) '巨大' 意味着大而重或坚固的。" +
            "<br><br>" +
            "(A) '轻微' 意味着程度小；微不足道。" +
            "<br><br>" +
            "(B) '最小' 意味着最少的数量、数量或程度。" +
            "<br><br>" +
            "(D) '微不足道' 意味着如此小或不重要，不值得考虑；不重要的。"
    },
    {
        id: 10,
    question: "The climber found himself in a __________ position, hanging on by a thread over the steep cliff.",
    chinese_question: "登山者发现自己处于 __________ 的位置，仅靠一根绳子悬挂在陡峭的悬崖上。",
    answers: [
        { option: "A", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
        { option: "B", answer: "secure", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
        { option: "C", answer: "precarious", chinese_answer: "危险的", chinese_romanization: "wēixiǎn de" },
        { option: "D", answer: "safe", chinese_answer: "保险的", chinese_romanization: "bǎoxiǎn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'precarious' means not securely held or in position; dangerously likely to fall or collapse." +
        "<br><br>" +
        "(A) 'stable' means not likely to change or fail; firmly established." +
        "<br><br>" +
        "(B) 'secure' means fixed or fastened so as not to give way, become loose, or be lost." +
        "<br><br>" +
        "(D) 'safe' means protected from or not exposed to danger or risk; not likely to be harmed or lost.",
    chinese_explanation: "(C) '危险的' 意味着未被牢固固定或定位的；极有可能掉落或倒塌的。" +
        "<br><br>" +
        "(A) '稳定的' 意味着不太可能改变或失败；牢固建立的。" +
        "<br><br>" +
        "(B) '安全的' 意味着固定或牢固，以至于不会让步、变松或丢失的。" +
        "<br><br>" +
        "(D) '保险的' 意味着受到保护或不暴露于危险或风险中；不太可能受到伤害或丢失的。"
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
