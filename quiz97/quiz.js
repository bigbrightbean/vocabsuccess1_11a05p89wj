// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The helicopter began to __________ over the landing pad, preparing to touch down.",
        chinese_question: "直升机开始在停机坪上空 __________，准备降落。",
        answers: [
            { option: "A", answer: "hover", chinese_answer: "盘旋", chinese_romanization: "pánxuán" },
            { option: "B", answer: "land", chinese_answer: "着陆", chinese_romanization: "zhuólù" },
            { option: "C", answer: "soar", chinese_answer: "翱翔", chinese_romanization: "áoxiáng" },
            { option: "D", answer: "plummet", chinese_answer: "暴跌", chinese_romanization: "bàodiē" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hover' means remain in one place in the air." +
            "<br><br>" +
            "(B) 'land' means to bring or come to the ground." +
            "<br><br>" +
            "(C) 'soar' means fly or rise high in the air." +
            "<br><br>" +
            "(D) 'plummet' means fall or drop straight down at high speed.",
        chinese_explanation: "(A) '盘旋' 意味着在空中停留在一个地方。" +
            "<br><br>" +
            "(B) '着陆' 意味着使降落或着地。" +
            "<br><br>" +
            "(C) '翱翔' 意味着在空中高飞或上升。" +
            "<br><br>" +
            "(D) '暴跌' 意味着以高速直线下降或坠落。"
    },
    {
        id: 2,
        question: "The wrestler had to __________ with his opponent to gain control.",
        chinese_question: "摔跤手必须与对手 __________ 以获得控制权。",
        answers: [
            { option: "A", answer: "grapple", chinese_answer: "扭打", chinese_romanization: "niǔdǎ" },
            { option: "B", answer: "negotiate", chinese_answer: "谈判", chinese_romanization: "tánpàn" },
            { option: "C", answer: "release", chinese_answer: "释放", chinese_romanization: "shìfàng" },
            { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'grapple' means to engage in a close fight or struggle without weapons; wrestle." +
            "<br><br>" +
            "(B) 'negotiate' means to try to reach an agreement or compromise by discussion with others." +
            "<br><br>" +
            "(C) 'release' means to allow or enable to escape from confinement; set free." +
            "<br><br>" +
            "(D) 'avoid' means to keep away from or stop oneself from doing (something).",
        chinese_explanation: "(A) '扭打' 意味着进行没有武器的近距离搏斗或争斗；摔跤。" +
            "<br><br>" +
            "(B) '谈判' 意味着通过与他人讨论来尝试达成协议或妥协。" +
            "<br><br>" +
            "(C) '释放' 意味着允许或使其从监禁中逃脱；释放。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或阻止自己做（某事）。"
    },
    {
        id: 3,
        question: "The teacher had to __________ to stop the argument before it escalated into a fight.",
        chinese_question: "老师不得不 __________ 以阻止争吵升级为打架。",
        answers: [
            { option: "A", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "B", answer: "observe", chinese_answer: "观察", chinese_romanization: "guānchá" },
            { option: "C", answer: "intervene", chinese_answer: "干预", chinese_romanization: "gānyù" },
            { option: "D", answer: "provoke", chinese_answer: "挑衅", chinese_romanization: "tiǎoxìn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'intervene' means come between so as to prevent or alter a result or course of events." +
            "<br><br>" +
            "(A) 'encourage' means to give support, confidence, or hope to someone." +
            "<br><br>" +
            "(B) 'observe' means notice or perceive (something) and register it as being significant." +
            "<br><br>" +
            "(D) 'provoke' means stimulate or give rise to (a reaction or emotion, typically a strong or unwelcome one) in someone.",
        chinese_explanation: "(C) '干预' 意味着介入以防止或改变结果或事件进程。" +
            "<br><br>" +
            "(A) '鼓励' 意味着给某人支持、信心或希望。" +
            "<br><br>" +
            "(B) '观察' 意味着注意到或感知（某事）并将其记录为重要。" +
            "<br><br>" +
            "(D) '挑衅' 意味着刺激或引起（通常是强烈或不受欢迎的反应或情感）。"
    },
    {
        id: 4,
        question: "Parents should __________ good values in their children from a young age to ensure they grow up to be responsible adults.",
        chinese_question: "父母应该从小__________孩子们良好的价值观，以确保他们长大后成为负责任的成年人。",
        answers: [
            { option: "A", answer: "remove", chinese_answer: "移除", chinese_romanization: "yíchú" },
            { option: "B", answer: "instill", chinese_answer: "灌输", chinese_romanization: "guànshū" },
            { option: "C", answer: "undermine", chinese_answer: "削弱", chinese_romanization: "xuēruò" },
            { option: "D", answer: "discourage", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'instill' means to gradually but firmly establish an idea or attitude in a person's mind." +
            "<br><br>" +
            "(A) 'remove' means to take something away or off from the position occupied." +
            "<br><br>" +
            "(C) 'undermine' means to weaken or damage something gradually." +
            "<br><br>" +
            "(D) 'discourage' means to cause someone to lose confidence or enthusiasm.",
        chinese_explanation: "(B) '灌输'一词意味着逐渐但坚定地在某人的头脑中建立一种想法或态度。" +
            "<br><br>" +
            "(A) '移除' 意味着从占据的位置上拿走某物。" +
            "<br><br>" +
            "(C) '削弱' 意味着逐渐削弱或破坏某物。" +
            "<br><br>" +
            "(D) '劝阻' 意味着使某人失去信心或热情。"
    },
    {
        id: 5,
        question: "The unfair treatment of the workers __________ the entire community, leading to widespread protests.",
        chinese_question: "对工人们的不公平待遇__________了整个社区，导致了广泛的抗议活动。",
        answers: [
            { option: "A", answer: "pleased", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "B", answer: "calmed", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "C", answer: "incensed", chinese_answer: "激怒", chinese_romanization: "jīnù" },
            { option: "D", answer: "encouraged", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'incensed' means to make very angry." +
            "<br><br>" +
            "(A) 'pleased' means to cause to feel happy and satisfied." +
            "<br><br>" +
            "(B) 'calmed' means made someone tranquil and quiet; soothed." +
            "<br><br>" +
            "(D) 'encouraged' means to give support, confidence, or hope to someone.",
        chinese_explanation: "(C) '激怒'一词意味着使非常生气。" +
            "<br><br>" +
            "(A) '高兴' 意味着使感到高兴和满意。" +
            "<br><br>" +
            "(B) '平静' 意味着使某人平静和安静；抚慰。" +
            "<br><br>" +
            "(D) '鼓励' 意味着给某人支持、信心或希望。"
    },
    {
        id: 6,
        question: "The new president will be __________ next month in a grand ceremony at the capital.",
        chinese_question: "新总统将在下个月的首都盛大仪式上__________。",
        answers: [
            { option: "A", answer: "dismissed", chinese_answer: "解雇", chinese_romanization: "jiěgù" },
            { option: "B", answer: "inaugurated", chinese_answer: "就职", chinese_romanization: "jiùzhí" },
            { option: "C", answer: "demoted", chinese_answer: "降职", chinese_romanization: "jiàngzhí" },
            { option: "D", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inaugurated' means to begin or introduce a system, policy, or period." +
            "<br><br>" +
            "(A) 'dismissed' means ordered or allowed to leave." +
            "<br><br>" +
            "(C) 'demoted' means given a lower rank or less senior position, usually as a punishment." +
            "<br><br>" +
            "(D) 'celebrated' means acknowledged a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(B) '就职'一词意味着开始或引入一个系统、政策或时期。" +
            "<br><br>" +
            "(A) '解雇' 意味着被命令或允许离开。" +
            "<br><br>" +
            "(C) '降职' 意味着被授予较低的职位或较低的职务，通常作为一种惩罚。" +
            "<br><br>" +
            "(D) '庆祝' 意味着通过社交聚会或愉快的活动承认一个重要或愉快的日子或事件。"
    },
    {
        id: 7,
        question: "The press __________ him 'the new Mozart' after his impressive performance at the concert.",
        chinese_question: "在音乐会上的精彩表演之后，媒体__________他为'新莫扎特'。",
        answers: [
            { option: "A", answer: "mocked", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" },
            { option: "B", answer: "criticized", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "C", answer: "belittled", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
            { option: "D", answer: "dubbed", chinese_answer: "称呼", chinese_romanization: "chēnghu" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'dubbed' means to give an unofficial name or nickname to someone or something." +
            "<br><br>" +
            "(A) 'mocked' means to make fun of or mimic someone or something in a derisive manner." +
            "<br><br>" +
            "(B) 'criticized' means indicated the faults of someone or something in a disapproving way." +
            "<br><br>" +
            "(C) 'belittled' means made someone or something seem less impressive or important.",
        chinese_explanation: "(D) '称呼'一词意味着给某人或某物起非正式的名字或昵称。" +
            "<br><br>" +
            "(A) '嘲笑' 意味着以嘲弄的方式取笑或模仿某人或某物。" +
            "<br><br>" +
            "(B) '批评' 意味着以不赞成的方式指出某人或某事的缺点。" +
            "<br><br>" +
            "(C) '贬低' 意味着让某人或某物显得不那么令人印象深刻或重要。"
    },
    {
        id: 8,
        question: "The headquarters will __________ a team of experts to assist with the emergency situation.",
        chinese_question: "总部将__________一支专家队伍协助紧急情况。",
        answers: [
            { option: "A", answer: "recall", chinese_answer: "召回", chinese_romanization: "zhàohuí" },
            { option: "B", answer: "dismiss", chinese_answer: "解雇", chinese_romanization: "jiěgù" },
            { option: "C", answer: "dispatch", chinese_answer: "派遣", chinese_romanization: "pàiqiǎn" },
            { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dispatch' means to send off to a destination or for a purpose." + 
            "<br><br>" +
            "(A) 'recall' means to bring (a fact, event, or situation) back into one's mind." + 
            "<br><br>" +
            "(B) 'dismiss' means to order or allow to leave; send away." + 
            "<br><br>" +
            "(D) 'avoid' means to keep away from or stop oneself from doing something.",
        chinese_explanation: "(C) '派遣'一词意味着派往某个目的地或目的。" +
            "<br><br>" +
            "(A) '召回' 意味着将（事实、事件或情况）带回一个人的脑海。" +
            "<br><br>" +
            "(B) '解雇' 意味着命令或允许离开；送走。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或阻止自己做某事。"
    },
    {
        id: 9,
        question: "The strict new laws were put in place to __________ people from committing crimes.",
        chinese_question: "新的严格法律旨在__________人们犯罪。",
        answers: [
            { option: "A", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "B", answer: "invite", chinese_answer: "邀请", chinese_romanization: "yāoqǐng" },
            { option: "C", answer: "assist", chinese_answer: "协助", chinese_romanization: "xiézhù" },
            { option: "D", answer: "deter", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'deter' means to discourage someone from doing something, typically by instilling doubt or fear of the consequences." +
            "<br><br>" +
            "(A) 'encourage' means to give support, confidence, or hope to someone." +
            "<br><br>" +
            "(B) 'invite' means to make a polite, formal, or friendly request to someone to go somewhere or to do something." +
            "<br><br>" +
            "(C) 'assist' means to help someone.",
        chinese_explanation: "(D) '阻止' 一词意味着通过灌输怀疑或害怕后果来阻止某人做某事。" +
            "<br><br>" +
            "(A) '鼓励' 意味着给某人支持、信心或希望。" +
            "<br><br>" +
            "(B) '邀请' 意味着礼貌地、正式地或友好地请求某人去某地或做某事。" +
            "<br><br>" +
            "(C) '协助' 意味着帮助某人。"
    },
    {
        id: 10,
        question: "Vandals __________ the statue by spraying graffiti all over it.",
        chinese_question: "破坏者在雕像上喷涂涂鸦，__________了它的外观。",
        answers: [
            { option: "A", answer: "honour", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" },
            { option: "B", answer: "deface", chinese_answer: "毁坏", chinese_romanization: "huǐhuài" },
            { option: "C", answer: "clean", chinese_answer: "清洁", chinese_romanization: "qīngjié" },
            { option: "D", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'deface' means to spoil the surface or appearance of something." +
            "<br><br>" +
            "(A) 'honour' means to regard with great respect." +
            "<br><br>" +
            "(C) 'clean' means to make something free from dirt, marks, or mess." +
            "<br><br>" +
            "(D) 'protect' means to keep safe from harm or injury.",
        chinese_explanation: "(B) '毁坏' 一词意味着破坏某物的表面或外观。" +
            "<br><br>" +
            "(A) '尊敬' 意味着表示极大的尊重。" +
            "<br><br>" +
            "(C) '清洁' 意味着使某物没有污垢、痕迹或杂乱。" +
            "<br><br>" +
            "(D) '保护' 意味着保持安全不受伤害或伤害。"
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
