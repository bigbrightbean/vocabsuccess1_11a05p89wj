// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The children waited with great __________ for the arrival of the ice cream truck, eagerly listening for the music.",
        chinese_question: "孩子们带着极大的 __________ 等待冰淇淋车的到来，急切地听着音乐。",
        answers: [
            { option: "A", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mò bù guān xīn" },
            { option: "B", answer: "dread", chinese_answer: "恐惧", chinese_romanization: "kǒngjù" },
            { option: "C", answer: "anticipation", chinese_answer: "期待", chinese_romanization: "qídài" },
            { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'anticipation' means the action of anticipating something; expectation or prediction." +
            "<br><br>" +
            "(A) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(B) 'dread' means great fear or apprehension." +
            "<br><br>" +
            "(D) 'hesitation' means the action of pausing or hesitating before saying or doing something.",
        chinese_explanation: "(C) '期待' 一词意味着期待某事的行为；期望或预测。" +
            "<br><br>" +
            "(A) '漠不关心' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(B) '恐惧' 意味着极大的恐惧或担忧。" +
            "<br><br>" +
            "(D) '犹豫' 意味着在说或做某事前暂停或犹豫的行为。"
    },
    {
        id: 2,
        question: "The __________ of the wind through the trees created a calming effect.",
        chinese_question: "风穿过树木的__________声产生了一种宁静的效果。",
        answers: [
            { option: "A", answer: "shout", chinese_answer: "喊", chinese_romanization: "hǎn" },
            { option: "B", answer: "speak", chinese_answer: "说", chinese_romanization: "shuō" },
            { option: "C", answer: "whisper", chinese_answer: "低语", chinese_romanization: "dīyǔ" },
            { option: "D", answer: "announce", chinese_answer: "宣布", chinese_romanization: "xuānbù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'whisper' means to speak very softly using one's breath without one's vocal cords, especially for the sake of secrecy. Figuratively, it can mean a soft, quiet sound." +
            "(A) 'shout' means to utter a loud call or cry, typically as an expression of a strong emotion."+
            "<br><br>" +
            "(B) 'speak' means to say something in order to convey information, an opinion, or a feeling." +
            "<br><br>" +
            "<br><br>" +
            "(D) 'announce' means to make a public and typically formal declaration about a fact, occurrence, or intention.",
        chinese_explanation: "(C) '低语'一词意味着用非常柔软的声音说话，尤其是为了保密。比喻地，它可以表示柔和、安静的声音。" +
            "<br><br>" +
            "(A) '喊' 意味着发出大声的叫喊或呼喊，通常是表达强烈情感。" +
            "<br><br>" +
            "(B) '说' 意味着说某事以传达信息、意见或感觉。" +
            "<br><br>" +
            "(D) '宣布' 意味着对事实、事件或意图进行公开且通常是正式的声明。"
    },
    {
        id: 3,
        question: "She was always on a __________ for new ideas to improve her work.",
        chinese_question: "她总是在 __________ 新的想法来改进她的工作。",
        answers: [
            { option: "A", answer: "search", chinese_answer: "寻找", chinese_romanization: "xúnzhǎo" },
            { option: "B", answer: "break", chinese_answer: "休息", chinese_romanization: "xiūxí" },
            { option: "C", answer: "halt", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "D", answer: "pause", chinese_answer: "暂停", chinese_romanization: "zàntíng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'search' metaphorically means the act of looking for or seeking out new ideas or information." +
            "<br><br>" +
            "(B) 'break' means a pause in work or during an activity or event." +
            "<br><br>" +
            "(C) 'halt' means bring or come to an abrupt stop." +
            "<br><br>" +
            "(D) 'pause' means a temporary stop in action or speech.",
        chinese_explanation: "(A) '寻找' 比喻寻找或寻求新的想法或信息的行为。" +
            "<br><br>" +
            "(B) '休息' 意味着工作或活动或事件期间的暂停。" +
            "<br><br>" +
            "(C) '停止' 意味着突然停止。" +
            "<br><br>" +
            "(D) '暂停' 意味着行动或讲话的临时停止。"
    },
    {
        id: 4,
        question: "The __________ of the ancient artifact was traced back to a small village in Greece.",
        chinese_question: "古代文物的 __________ 被追溯到希腊的一个小村庄。",
        answers: [
            { option: "A", answer: "origin", chinese_answer: "起源", chinese_romanization: "qǐyuán" },
            { option: "B", answer: "future", chinese_answer: "未来", chinese_romanization: "wèilái" },
            { option: "C", answer: "end", chinese_answer: "结束", chinese_romanization: "jiéshù" },
            { option: "D", answer: "present", chinese_answer: "现在", chinese_romanization: "xiànzài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'origin' means the point or place where something begins, arises, or is derived." + 
            "<br><br>" + 
            "(B) 'future' means the time or a period of time following the moment of speaking or writing; time regarded as still to come." + 
            "<br><br>" + 
            "(C) 'end' means a final part of something, especially a period of time, an activity, or a story." + 
            "<br><br>" + 
            "(D) 'present' means the period of time now occurring.",
        chinese_explanation: "(A) '起源' 意味着某物开始、产生或来源的点或地方。" + 
            "<br><br>" + 
            "(B) '未来' 意味着说话或写作的时刻之后的时间或一段时间；被视为即将到来的时间。" + 
            "<br><br>" + 
            "(C) '结束' 意味着某物的最后一部分，特别是一段时间、一个活动或一个故事。" + 
            "<br><br>" + 
            "(D) '现在' 意味着当前发生的时间段。"
    },
    {
        id: 5,
        question: "Her __________ to the prestigious university marked the beginning of an exciting new chapter in her academic journey.",
        chinese_question: "她被 __________ 进入著名大学，标志着她学术旅程中激动人心的新篇章的开始。",
        answers: [
            { option: "A", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "B", answer: "dismissal", chinese_answer: "解雇", chinese_romanization: "jiěgù" },
            { option: "C", answer: "admission", chinese_answer: "录取", chinese_romanization: "lùqǔ" },
            { option: "D", answer: "exclusion", chinese_answer: "排斥", chinese_romanization: "páichì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'admission' means the process or fact of entering or being allowed to enter a place, organization, or institution." +
            "<br><br>" +
            "(A) 'rejection' means the dismissing or refusing of a proposal, idea, etc." +
            "<br><br>" +
            "(B) 'dismissal' means the act of ordering or allowing someone to leave." +
            "<br><br>" +
            "(D) 'exclusion' means the process or state of excluding or being excluded.",
        chinese_explanation: "(C) '录取' 一词意味着进入或被允许进入某个地方、组织或机构的过程或事实。" +
            "<br><br>" +
            "(A) '拒绝' 意味着拒绝提议、想法等。" +
            "<br><br>" +
            "(B) '解雇' 意味着命令或允许某人离开的行为。" +
            "<br><br>" +
            "(D) '排斥' 意味着排除或被排除的过程或状态。"
    },
    {
        id: 6,
        question: "The hurricane was a __________ that left the entire region in ruins.",
        chinese_question: "飓风是一场 __________，使整个地区一片废墟。",
        answers: [
            { option: "A", answer: "catastrophe", chinese_answer: "灾难", chinese_romanization: "zāinàn" },
            { option: "B", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" },
            { option: "C", answer: "blessing", chinese_answer: "祝福", chinese_romanization: "zhùfú" },
            { option: "D", answer: "benefit", chinese_answer: "好处", chinese_romanization: "hǎochù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'catastrophe' means an event causing great and often sudden damage or suffering; a disaster." +
            "<br><br>" +
            "(B) 'success' means the accomplishment of an aim or purpose." +
            "<br><br>" +
            "(C) 'blessing' means a beneficial thing for which one is grateful; something that brings well-being." +
            "<br><br>" +
            "(D) 'benefit' means an advantage or profit gained from something.",
        chinese_explanation: "'灾难' 意味着造成巨大且通常是突然的损害或痛苦的事件；灾害。" +
            "<br><br>" +
            "(B) '成功' 意味着实现目标或目的。" +
            "<br><br>" +
            "(C) '祝福' 意味着一种人感激的好处；带来福祉的事物。" +
            "<br><br>" +
            "(D) '好处' 意味着从某事中获得的优势或利润。"
    },
    {
        id: 7,
        question: "The villagers shared their tales of __________ after the storm destroyed their homes.",
        chinese_question: "风暴摧毁了家园后，村民们分享了他们的 __________ 故事。",
        answers: [
            { option: "A", answer: "woe", chinese_answer: "悲伤", chinese_romanization: "bēishāng" },
            { option: "B", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "C", answer: "fortune", chinese_answer: "幸运", chinese_romanization: "xìngyùn" },
            { option: "D", answer: "luck", chinese_answer: "运气", chinese_romanization: "yùnqì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'woe' means great sorrow or distress." +
            "<br><br>" +
            "(B) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(C) 'fortune' means chance or luck as an arbitrary force affecting human affairs." +
            "<br><br>" +
            "(D) 'luck' means success or failure apparently brought by chance rather than through one's own actions.",
        chinese_explanation: "(A) '悲伤' 意味着巨大的悲伤或痛苦。" +
            "<br><br>" +
            "(B) '快乐' 意味着极大的愉悦和幸福感。" +
            "<br><br>" +
            "(C) '幸运' 意味着作为影响人类事务的任意力量的机会或运气。" +
            "<br><br>" +
            "(D) '运气' 意味着成功或失败显然是由机会带来的，而不是通过自己的行动。"
    },
    {
        id: 8,
        question: "The __________ of his reckless actions, such as getting expelled from school and losing the trust of his friends, were felt long after the incident.",
        chinese_question: "他鲁莽行为的 __________，例如被学校开除和失去朋友的信任，在事件发生后很久仍然感觉得到。",
        answers: [
            { option: "A", answer: "benefits", chinese_answer: "益处", chinese_romanization: "yìchù" },
            { option: "B", answer: "repercussions", chinese_answer: "后果", chinese_romanization: "hòuguǒ" },
            { option: "C", answer: "improvements", chinese_answer: "改进", chinese_romanization: "gǎijìn" },
            { option: "D", answer: "rewards", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'repercussions' means unintended consequences of an event or action, especially unwelcome ones." +
            "<br><br>" +
            "(A) 'benefits' means advantages or positive outcomes." +
            "<br><br>" +
            "(C) 'improvements' means the process of making something better." +
            "<br><br>" +
            "(D) 'rewards' means things given in recognition of service, effort, or achievement.",
        chinese_explanation: "(B) '后果' 意思是事件或行为的意外后果，尤其是不受欢迎的。" +
            "<br><br>" +
            "(A) '益处' 意思是优势或积极的结果。" +
            "<br><br>" +
            "(C) '改进' 意思是改进某事的过程。" +
            "<br><br>" +
            "(D) '奖励' 意思是为了表彰服务、努力或成就而给予的东西。"
    },
    {
        id: 9,
        question: "Queen Elizabeth II had a long and prosperous __________ over the United Kingdom.",
        chinese_question: "伊丽莎白女王二世在英国的__________时期长而繁荣。",
        answers: [
            { option: "A", answer: "reign", chinese_answer: "统治", chinese_romanization: "tǒngzhì" },
            { option: "B", answer: "break", chinese_answer: "休息", chinese_romanization: "xiūxi" },
            { option: "C", answer: "fall", chinese_answer: "下降", chinese_romanization: "xiàjiàng" },
            { option: "D", answer: "demise", chinese_answer: "死亡", chinese_romanization: "sǐwáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reign' means the period during which a sovereign rules." +
            "<br><br>" +
            "(B) 'break' means a pause in work or during an activity or event." +
            "<br><br>" +
            "(C) 'fall' means move downward, typically rapidly and freely without control." +
            "<br><br>" +
            "(D) 'demise' means a person's death.",
        chinese_explanation: "(A) '统治' 一词意味着君主统治的时期。" +
            "<br><br>" +
            "(B) '休息' 意味着在工作或活动期间的暂停。" +
            "<br><br>" +
            "(C) '下降' 意味着向下移动，通常是快速和自由地失去控制。" +
            "<br><br>" +
            "(D) '死亡' 意味着一个人的死亡。"
    },
    {
        id: 10,
        question: "They reached the __________ of the mountain after a long and challenging climb.",
        chinese_question: "经过漫长而艰难的攀登，他们到达了山的 __________。",
        answers: [
            { option: "A", answer: "summit", chinese_answer: "顶峰", chinese_romanization: "dǐngfēng" },
            { option: "B", answer: "base", chinese_answer: "基地", chinese_romanization: "jīdì" },
            { option: "C", answer: "slope", chinese_answer: "斜坡", chinese_romanization: "xiépō" },
            { option: "D", answer: "valley", chinese_answer: "山谷", chinese_romanization: "shāngǔ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'summit' means the highest point of a hill or mountain." +
            "<br><br>" +
            "(B) 'base' means the lowest part or edge of something, especially the part on which it rests or is supported." +
            "<br><br>" +
            "(C) 'slope' means a surface of which one end or side is at a higher level than another." +
            "<br><br>" +
            "(D) 'valley' means a low area of land between hills or mountains, typically with a river or stream flowing through it.",
        chinese_explanation: "(A) '顶峰' 意味着山丘或山的最高点。" +
            "<br><br>" +
            "'基地' 意味着某物的最低部分或边缘，特别是其支撑或支持的部分。" +
            "<br><br>" +
            "'斜坡' 意味着一端或一侧高于另一端或另一侧的表面。" +
            "<br><br>" +
            "'山谷' 意味着两座山之间的低地，通常有河流或小溪流过。"
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
