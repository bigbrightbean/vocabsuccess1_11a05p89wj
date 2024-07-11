// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ fashion choices always turn heads wherever she goes.",
        chinese_question: "她 __________ 的时尚选择总是在她走到哪里时引人注目。",
        answers: [
            { option: "A", answer: "timid", chinese_answer: "胆小", chinese_romanization: "dǎnxiǎo" },
            { option: "B", answer: "audacious", chinese_answer: "大胆", chinese_romanization: "dàdǎn" },
            { option: "C", answer: "reserved", chinese_answer: "保守", chinese_romanization: "bǎoshǒu" },
            { option: "D", answer: "conventional", chinese_answer: "传统", chinese_romanization: "chuántǒng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'audacious' means showing a willingness to take surprisingly bold risks." +
            "<br><br>" +
            "(A) 'timid' means shy or lacking in courage." +
            "<br><br>" +
            "(C) 'reserved' means cautious or holding back." +
            "<br><br>" +
            "(D) 'conventional' means following traditional or ordinary methods.",
        chinese_explanation: "(B) '大胆' 意味着显示出愿意冒险的勇气。" +
            "<br><br>" +
            "(A) '胆小' 意味着害羞或缺乏勇气。" +
            "<br><br>" +
            "(C) '保守' 意味着谨慎或克制。" +
            "<br><br>" +
            "(D) '传统' 意味着遵循传统或普通的方法。"
    },
    {
        id: 2,
        question: "She was a __________ student, always completing her assignments on time and to the best of her ability.",
        chinese_question: "她是一个 __________ 的学生，总是按时完成作业，并尽力做到最好。",
        answers: [
            { option: "A", answer: "conscientious", chinese_answer: "认真负责的", chinese_romanization: "rènzhēn fùzé de" },
            { option: "B", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "lazy", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'conscientious' means wishing to do one's work or duty well and thoroughly." +
            "<br><br>" +
            "(B) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(D) 'lazy' means unwilling to work or use energy.",
        chinese_explanation: "(A) '认真负责的' 意味着希望好好完成自己的工作或职责。" +
            "<br><br>" +
            "(B) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误的。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情心。" +
            "<br><br>" +
            "(D) '懒惰的' 意味着不愿工作或使用精力。"
    },
    {
        id: 3,
        question: "The __________ child threw a tantrum when he didn't get his way, much to his parents' embarrassment.",
        chinese_question: "这个 __________ 的孩子在没有得到他想要的东西时大发脾气，让父母非常尴尬。",
        answers: [
            { option: "A", answer: "cheerful", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "B", answer: "patient", chinese_answer: "耐心", chinese_romanization: "nàixīn" },
            { option: "C", answer: "petulant", chinese_answer: "暴躁", chinese_romanization: "bàozào" },
            { option: "D", answer: "agreeable", chinese_answer: "愉快", chinese_romanization: "yúkuài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'petulant' means childishly sulky or bad-tempered." +
            "<br><br>" +
            "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(B) 'patient' means able to accept or tolerate delays, problems, or suffering without becoming annoyed or anxious." +
            "<br><br>" +
            "(D) 'agreeable' means enjoyable and pleasurable; pleasant.",
        chinese_explanation: "(C) '暴躁' 一词意味着孩子气的生气或坏脾气。" +
            "<br><br>" +
            "(A) '快乐' 意味着显著的快乐和乐观。" +
            "<br><br>" +
            "(B) '耐心' 意味着能够接受或容忍延误、问题或痛苦而不变得烦恼或焦虑。" +
            "<br><br>" +
            "(D) '愉快' 意味着令人愉快和愉快的；愉快的。"
    },
    {
        id: 4,
        question: "The use of smartphones has become __________ among teenagers, with almost everyone owning one.",
        chinese_question: "智能手机的使用在青少年中变得非常__________，几乎每个人都有一部。",
        answers: [
            { option: "A", answer: "rare", chinese_answer: "罕见的", chinese_romanization: "hǎnjiàn de" },
            { option: "B", answer: "scarce", chinese_answer: "稀缺的", chinese_romanization: "xīquē de" },
            { option: "C", answer: "unusual", chinese_answer: "不寻常的", chinese_romanization: "bù xúncháng de" },
            { option: "D", answer: "prevalent", chinese_answer: "普遍的", chinese_romanization: "pǔbiàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'prevalent' means widespread in a particular area or at a particular time." +
            "<br><br>" +
            "(A) 'rare' means not occurring very often." +
            "<br><br>" +
            "(B) 'scarce' means insufficient for the demand." +
            "<br><br>" +
            "(C) 'unusual' means not habitually or commonly occurring or done.",
        chinese_explanation: "(D) '普遍的' 一词意味着在特定地区或特定时间内广泛存在的。" +
            "<br><br>" +
            "(A) '罕见的' 意味着不经常发生的。" +
            "<br><br>" +
            "(B) '稀缺的' 意味着不足以满足需求的。" +
            "<br><br>" +
            "(C) '不寻常的' 意味着不习惯或不常见的。"
    },
    {
        id: 5,
        question: "His __________ remarks during the meeting confused everyone, as they were not straightforward.",
        chinese_question: "他在会议上的 __________ 言论让所有人感到困惑，因为它们不直截了当。",
        answers: [
            { option: "A", answer: "direct", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" },
            { option: "B", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "C", answer: "oblique", chinese_answer: "含蓄的", chinese_romanization: "hánxù de" },
            { option: "D", answer: "explicit", chinese_answer: "明确的", chinese_romanization: "míngquè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'oblique' means not explicit or done in a direct way." +
            "<br><br>" +
            "(A) 'direct' means going straight to the point." +
            "<br><br>" +
            "(B) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(D) 'explicit' means stated clearly and in detail, leaving no room for confusion or doubt.",
        chinese_explanation: "'含蓄的' 意味着不明确或不直接进行的。" +
            "<br><br>" +
            "(A) '直接的' 意味着直奔主题的。" +
            "<br><br>" +
            "(B) '清晰的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(D) '明确的' 意味着清晰而详细地陈述的，没有混淆或怀疑的余地。"
    },
    {
        id: 6,
        question: "After working for days without proper rest, he appeared __________, with dark circles under his eyes and a gaunt face.",
        chinese_question: "连续几天没好好休息后，他看起来 __________，眼下有黑眼圈，面容憔悴。",
        answers: [
            { option: "A", answer: "haggard", chinese_answer: "憔悴的", chinese_romanization: "qiáocuì de" },
            { option: "B", answer: "refreshed", chinese_answer: "精神焕发的", chinese_romanization: "jīngshén huànfā de" },
            { option: "C", answer: "radiant", chinese_answer: "容光焕发的", chinese_romanization: "róngguāng huànfā de" },
            { option: "D", answer: "healthy", chinese_answer: "健康的", chinese_romanization: "jiànkāng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'haggard' means looking exhausted and unwell, especially from fatigue, worry, or suffering." +
            "<br><br>" +
            "(B) 'refreshed' means having regained strength or energy." +
            "<br><br>" +
            "(C) 'radiant' means shining or glowing brightly." +
            "<br><br>" +
            "(D) 'healthy' means in good health.",
        chinese_explanation: "(A) '憔悴的' 意味着看起来筋疲力尽、不健康，尤其是由于疲劳、担忧或痛苦。" +
            "<br><br>" +
            "(B) '精神焕发的' 意味着恢复了力量或精力的。" +
            "<br><br>" +
            "(C) '容光焕发的' 意味着明亮或发光的。" +
            "<br><br>" +
            "(D) '健康的' 意味着健康状态良好的。"
    },
    {
        id: 7,
        question: "The team felt __________ after winning every game in the season without a single loss.",
        chinese_question: "在赛季中每场比赛都赢得胜利后，球队感到__________。",
        answers: [
            { option: "A", answer: "vulnerable", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
            { option: "B", answer: "fragile", chinese_answer: "易受伤的", chinese_romanization: "yìshòushāng de" },
            { option: "C", answer: "invincible", chinese_answer: "无敌的", chinese_romanization: "wúdí de" },
            { option: "D", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'invincible' means too powerful to be defeated or overcome." +
            "<br><br>" +
            "(A) 'vulnerable' means susceptible to physical or emotional attack or harm." +
            "<br><br>" +
            "(B) 'fragile' means easily broken or damaged." +
            "<br><br>" +
            "(D) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy.",
        chinese_explanation: "(C) '无敌的'一词意味着太强大而无法被击败或克服的。" +
            "<br><br>" +
            "(A) '脆弱的' 意味着容易破碎或损坏的。" +
            "<br><br>" +
            "(B) '易受伤的' 意味着易受身体或情感攻击或伤害的。" +
            "<br><br>" +
            "(D) '虚弱的' 意味着缺乏执行体力活的能力；缺乏体力和能量的。"
    },
    {
        id: 8,
        question: "The earthquake caused __________ damage to the buildings in the city, leaving many homeless.",
        chinese_question: "地震对城市的建筑物造成了 __________ 的破坏，使许多人无家可归。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "轻微", chinese_romanization: "qīngwēi" },
            { option: "B", answer: "slight", chinese_answer: "微小", chinese_romanization: "wēixiǎo" },
            { option: "C", answer: "horrendous", chinese_answer: "可怕", chinese_romanization: "kěpà" },
            { option: "D", answer: "insignificant", chinese_answer: "无关紧要", chinese_romanization: "wúguān jǐnyào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'horrendous' means extremely unpleasant, horrifying, or terrible." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(B) 'slight' means small in degree; inconsiderable." +
            "<br><br>" +
            "(D) 'insignificant' means too small or unimportant to be worth consideration.",
        chinese_explanation: "(C) '可怕' 意味着极其令人不快、恐怖或糟糕。" +
            "<br><br>" +
            "(A) '轻微' 意味着重要性、严重性或意义较小的。" +
            "<br><br>" +
            "(B) '微小' 意味着程度小的；微不足道的。" +
            "<br><br>" +
            "(D) '无关紧要' 意味着太小或不重要，不值得考虑。"
    },
    {
        id: 9,
        question: "The doctor’s __________ expression indicated that the news was not good.",
        chinese_question: "医生__________的表情表明消息不好。",
        answers: [
            { option: "A", answer: "grave", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
            { option: "B", answer: "cheerful", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" },
            { option: "C", answer: "lighthearted", chinese_answer: "无忧无虑的", chinese_romanization: "wúyōuwúlǜ de" },
            { option: "D", answer: "jovial", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'grave' means giving cause for alarm; serious." +
            "<br><br>" +
            "(B) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(C) 'lighthearted' means cheerful and carefree." +
            "<br><br>" +
            "(D) 'jovial' means cheerful and friendly.",
        chinese_explanation: "(A) '严肃的'一词意味着引起警觉的；严重的。" +
            "<br><br>" +
            "(B) '高兴的' 意味着显著地快乐和乐观的。" +
            "<br><br>" +
            "(C) '无忧无虑的' 意味着快乐和无忧无虑的。" +
            "<br><br>" +
            "(D) '愉快的' 意味着快乐和友好的。"
    },
    {
        id: 10,
        question: "The dog remained __________ to its owner, always staying by their side through thick and thin.",
        chinese_question: "这只狗对主人非常__________，无论情况如何总是待在他们身边。",
        answers: [
            { option: "A", answer: "disloyal", chinese_answer: "不忠诚的", chinese_romanization: "bù zhōngchéng de" },
            { option: "B", answer: "untrustworthy", chinese_answer: "不可靠的", chinese_romanization: "bù kěkào de" },
            { option: "C", answer: "faithful", chinese_answer: "忠实的", chinese_romanization: "zhōngshí de" },
            { option: "D", answer: "fickle", chinese_answer: "反复无常的", chinese_romanization: "fǎnfù wúcháng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'faithful' means loyal, constant, and steadfast." +
            "<br><br>" +
            "(A) 'disloyal' means failing to be loyal to a person, country, or body to which one has obligations." +
            "<br><br>" +
            "(B) 'untrustworthy' means not able to be relied on as honest or truthful." +
            "<br><br>" +
            "(D) 'fickle' means changing frequently, especially as regards one's loyalties, interests, or affection.",
        chinese_explanation: "(C) '忠实的'一词意味着忠诚、恒常和坚定的。" +
            "<br><br>" +
            "(A) '不忠诚的' 意味着未能对某人、国家或有义务的团体忠诚的。" +
            "<br><br>" +
            "(B) '不可靠的' 意味着不能作为诚实或真实的人依赖的。" +
            "<br><br>" +
            "(D) '反复无常的' 意味着经常变化的，尤其是在忠诚、兴趣或感情方面。"
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
