// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He was __________ when it came to understanding the subtle hints she was dropping, failing to grasp her intentions.",
        chinese_question: "他对理解她暗示的细微提示 __________，未能领会她的意图。",
        answers: [
            { option: "A", answer: "obtuse", chinese_answer: "迟钝的", chinese_romanization: "chídùn de" },
            { option: "B", answer: "perceptive", chinese_answer: "敏锐的", chinese_romanization: "mǐnruì de" },
            { option: "C", answer: "insightful", chinese_answer: "有洞察力的", chinese_romanization: "yǒu dòngchá lì de" },
            { option: "D", answer: "astute", chinese_answer: "精明的", chinese_romanization: "jīngmíng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'obtuse' means annoyingly insensitive or slow to understand." +
            "<br><br>" +
            "(B) 'perceptive' means having or showing sensitive insight." +
            "<br><br>" +
            "(C) 'insightful' means having or showing an accurate and deep understanding." +
            "<br><br>" +
            "(D) 'astute' means having or showing an ability to accurately assess situations or people and turn this to one's advantage.",
        chinese_explanation: "(A) '迟钝的' 意味着令人恼火地缺乏敏感或理解迟缓的。" +
            "<br><br>" +
            "(B) '敏锐的' 意味着有或表现出敏锐的洞察力。" +
            "<br><br>" +
            "(C) '有洞察力的' 意味着具有或表现出准确和深刻理解的。" +
            "<br><br>" +
            "(D) '精明的' 意味着有或表现出准确评估情况或人的能力，并将其转为自己的优势。"
    },
    {
        id: 2,
        question: "The __________ mountain range stretched as far as the eye could see.",
        chinese_question: "__________的山脉绵延至视线尽头。",
        answers: [
            { option: "A", answer: "tiny", chinese_answer: "微小的", chinese_romanization: "wéixiǎo de" },
            { option: "B", answer: "immense", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
            { option: "C", answer: "small", chinese_answer: "小的", chinese_romanization: "xiǎo de" },
            { option: "D", answer: "minute", chinese_answer: "极小的", chinese_romanization: "jíxiǎo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'immense' means extremely large or great, especially in scale or degree." +
            "<br><br>" +
            "(A) 'tiny' means very small." +
            "<br><br>" +
            "(C) 'small' means of a size that is less than normal or usual." +
            "<br><br>" +
            "(D) 'minute' means extremely small.",
        chinese_explanation: "(B) '巨大的'一词意味着非常大或伟大，特别是在规模或程度上。" +
            "<br><br>" +
            "(A) '微小的' 意味着非常小。" +
            "<br><br>" +
            "(C) '小的' 意味着比正常或通常的尺寸小。" +
            "<br><br>" +
            "(D) '极小的' 意味着非常小。"
    },
    {
        id: 3,
        question: "She was known for her __________ opinions, never hesitating to speak her mind.",
        chinese_question: "她以__________的意见闻名，从不犹豫表达自己的想法。",
        answers: [
            { option: "A", answer: "reserved", chinese_answer: "保守的", chinese_romanization: "bǎoshǒu de" },
            { option: "B", answer: "reticent", chinese_answer: "沉默的", chinese_romanization: "chénmò de" },
            { option: "C", answer: "outspoken", chinese_answer: "直言不讳的", chinese_romanization: "zhíyán bùhuì de" },
            { option: "D", answer: "silent", chinese_answer: "无声的", chinese_romanization: "wúshēng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'outspoken' means frank in stating one's opinions, especially if they are critical or controversial." +
            "<br><br>" +
            "(A) 'reserved' means slow to reveal emotion or opinions." +
            "<br><br>" +
            "(B) 'reticent' means not revealing one's thoughts or feelings readily." +
            "<br><br>" +
            "(D) 'silent' means not speaking.",
        chinese_explanation: "(C) '直言不讳的'一词意味着在陈述自己的意见时直率，尤其是当这些意见是批评或有争议的。" +
            "<br><br>" +
            "(A) '保守的' 意味着慢于表达情感或意见的。" +
            "<br><br>" +
            "(B) '沉默的' 意味着不愿意透露自己的想法或感情的。" +
            "<br><br>" +
            "(D) '无声的' 意味着不说话的。"
    },
    {
        id: 4,
        question: "His __________ use of resources ensured the project's success and efficiency.",
        chinese_question: "他__________地使用资源确保了项目的成功和效率。",
        answers: [
            { option: "A", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" },
            { option: "B", answer: "impulsive", chinese_answer: "冲动的", chinese_romanization: "chōngdòng de" },
            { option: "C", answer: "judicious", chinese_answer: "明智的", chinese_romanization: "míngzhì de" },
            { option: "D", answer: "hasty", chinese_answer: "匆忙的", chinese_romanization: "cōngmáng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'judicious' means having, showing, or done with good judgment or sense." +
            "<br><br>" +
            "(A) 'reckless' means heedless of danger or the consequences of one's actions; rash or impetuous." +
            "<br><br>" +
            "(B) 'impulsive' means acting or done without forethought." +
            "<br><br>" +
            "(D) 'hasty' means done or acting with excessive speed or urgency; hurried.",
        chinese_explanation: "(C) '明智的'一词意味着有、表现出或用良好的判断力或感觉的。" +
            "<br><br>" +
            "(A) '鲁莽的' 意味着不顾危险或后果的；轻率或鲁莽的。" +
            "<br><br>" +
            "(B '冲动的' 意味着没有深思熟虑的行动或完成。" +
            "<br><br>" +
            "(D) '匆忙的' 意味着以过快的速度或紧急行动的。"
    },
    {
        id: 5,
        question: "The __________ community struggled to find basic necessities like food and clean water.",
        chinese_question: "这个 __________ 的社区难以找到食物和清洁水等基本生活必需品。",
        answers: [
            { option: "A", answer: "wealthy", chinese_answer: "富裕", chinese_romanization: "fùyù" },
            { option: "B", answer: "affluent", chinese_answer: "富有", chinese_romanization: "fùyǒu" },
            { option: "C", answer: "rich", chinese_answer: "富有", chinese_romanization: "fùyǒu" },
            { option: "D", answer: "impoverished", chinese_answer: "贫困", chinese_romanization: "pínkùn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'impoverished' means made poor." +
            "<br><br>" +
            "(A) 'wealthy' means having a great deal of money, resources, or assets." +
            "<br><br>" +
            "(B) 'affluent' means having a great deal of money; wealthy." +
            "<br><br>" +
            "(C) 'rich' means having a great deal of money or assets; wealthy.",
        chinese_explanation: "(D) '贫困' 意味着变得贫穷。" +
            "<br><br>" +
            "(A) '富裕' 意味着拥有大量的钱、资源或资产。" +
            "<br><br>" +
            "(B) '富有' 意味着拥有大量的钱；富有的。" +
            "<br><br>" +
            "(C) '富有' 意味着拥有大量的钱或资产；富有的。"
    },
    {
        id: 6,
        question: "His __________ decision to invest without researching led to significant financial loss.",
        chinese_question: "他在没有研究的情况下__________地决定投资，导致了重大财务损失。",
        answers: [
            { option: "A", answer: "careful", chinese_answer: "仔细的", chinese_romanization: "zǐxì de" },
            { option: "B", answer: "deliberate", chinese_answer: "故意的", chinese_romanization: "gùyì de" },
            { option: "C", answer: "hasty", chinese_answer: "匆忙的", chinese_romanization: "cōngmáng de" },
            { option: "D", answer: "thorough", chinese_answer: "彻底的", chinese_romanization: "chèdǐ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hasty' means done or acting with excessive speed or urgency; hurried." +
            "<br><br>" +
            "(A) 'careful' means making sure of avoiding potential danger, mishap, or harm; cautious." +
            "<br><br>" +
            "(B) 'deliberate' means done consciously and intentionally." +
            "<br><br>" +
            "(D) 'thorough' means complete with regard to every detail; not superficial or partial.",
        chinese_explanation: "(C) '匆忙的'一词意味着做或行为过于迅速或紧急；仓促的。" +
            "<br><br>" +
            "(A) '仔细的' 意味着确保避免潜在的危险、事故或伤害；谨慎的。" +
            "<br><br>" +
            "(B) '故意的' 意味着有意识和故意的。" +
            "<br><br>" +
            "(D) '彻底的' 意味着涉及到每一个细节的；不表面的或不部分的。"
    },
    {
        id: 7,
        question: "His paintings are famous for their __________ style, focusing on shapes and colors rather than realistic depictions.",
        chinese_question: "他的画以 __________ 风格著称，专注于形状和颜色，而不是现实的描绘。",
        answers: [
            { option: "A", answer: "concrete", chinese_answer: "具体的", chinese_romanization: "jùtǐ de" },
            { option: "B", answer: "abstract", chinese_answer: "抽象的", chinese_romanization: "chōuxiàng de" },
            { option: "C", answer: "literal", chinese_answer: "字面的", chinese_romanization: "zìmiàn de" },
            { option: "D", answer: "detailed", chinese_answer: "详细的", chinese_romanization: "xiángxì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abstract' means existing in thought or as an idea but not having a physical or concrete existence." +
            "<br><br>" +
            "(A) 'concrete' means existing in a material or physical form; real or solid." +
            "<br><br>" +
            "(C) 'literal' means taking words in their usual or most basic sense without metaphor or allegory." +
            "<br><br>" +
            "(D) 'detailed' means having many details or facts; showing attention to detail.",
        chinese_explanation: "(B) '抽象的' 一词意味着存在于思想中或作为一个想法，而不是具有物质或具体存在。" +
            "<br><br>" +
            "(A) '具体的' 意味着以物质或物理形式存在；真实或坚固的。" +
            "<br><br>" +
            "(C) '字面的' 意味着按照其通常或最基本的意义解释词语，没有隐喻或寓言。" +
            "<br><br>" +
            "(D) '详细的' 意味着有许多细节或事实；注意细节。"
    },
    {
        id: 8,
        question: "He was an __________ cyclist, participating in races every weekend and spending hours training each day.",
        chinese_question: "他是一个 __________ 的骑自行车者，每个周末都参加比赛，每天花数小时训练。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "B", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "C", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
            { option: "D", answer: "avid", chinese_answer: "热衷的", chinese_romanization: "rèzhōng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'avid' means having a keen interest or enthusiasm for something." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or concern." +
            "<br><br>" +
            "(B) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(C) 'occasional' means occurring or appearing at irregular or infrequent intervals.",
        chinese_explanation: "(D) '热衷的' 意味着对某事有浓厚的兴趣或热情。" +
            "<br><br>" +
            "(A) '冷漠的' 意味着没有特别的兴趣或关心。" +
            "<br><br>" +
            "(B) '随意的' 意味着放松和不关心。" +
            "<br><br>" +
            "(C) '偶尔的' 意味着不规则或不频繁出现的。"
    },
    {
        id: 9,
        question: "The __________ student always completed her assignments ahead of schedule.",
        chinese_question: "这个 __________ 的学生总是提前完成作业。",
        answers: [
            { option: "A", answer: "diligent", chinese_answer: "勤奋", chinese_romanization: "qín fèn" },
            { option: "B", answer: "lazy", chinese_answer: "懒惰", chinese_romanization: "lǎn duò" },
            { option: "C", answer: "careless", chinese_answer: "粗心", chinese_romanization: "cū xīn" },
            { option: "D", answer: "anxious", chinese_answer: "焦虑", chinese_romanization: "jiāo lǜ" }
            ],
        correctAnswer: "A",
        explanation: "(A) 'diligent' means having or showing care and conscientiousness in one's work or duties." +
            "<br><br>" +
            "(B) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(C) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(D) 'anxious' means experiencing worry, unease, or nervousness.",
        chinese_explanation: "(A) '勤奋' 意味着在工作或职责中表现出关心和认真。" +
            "<br><br>" +
            "(B) '懒惰' 意味着不愿意工作或耗费精力。" +
            "<br><br>" +
            "(C) '粗心' 意味着在避免伤害或错误方面没有给予足够的关注或思考。" +
            "<br><br>" +
            "(D) '焦虑' 意味着经历担忧、不安或紧张。"
    },
    {
        id: 10,
        question: "Her performance at the concert was __________, leaving the audience stunned by her talent and energy.",
        chinese_question: "她在音乐会上的表演是 __________ 的，她的才华和能量让观众震惊。",
        answers: [
            { option: "A", answer: "awful", chinese_answer: "糟糕的", chinese_romanization: "zāogāo de" },
            { option: "B", answer: "impressive", chinese_answer: "令人印象深刻的", chinese_romanization: "lìng rén yìnxiàng shēnkè de" },
            { option: "C", answer: "mediocre", chinese_answer: "平庸的", chinese_romanization: "píngyōng de" },
            { option: "D", answer: "dull", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" }
            ],
        correctAnswer: "B",
        explanation: "(B) 'impressive' means evoking admiration through size, quality, or skill." +
            "<br><br>" +
            "(A) 'awful' means very bad or unpleasant." +
            "<br><br>" +
            "(C) 'mediocre' means of only moderate quality." +
            "<br><br>" +
            "(D) 'dull' means lacking interest or excitement.",
        chinese_explanation: "(B) '令人印象深刻的' 意味着因大小、质量或技能而引起钦佩。" +
            "<br><br>" +
            "(A) '糟糕的' 意味着非常糟糕或不愉快。" +
            "<br><br>" +
            "(C) '平庸的' 意味着质量一般。" +
            "<br><br>" +
            "(D) '无聊的' 意味着缺乏兴趣或兴奋。"
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
