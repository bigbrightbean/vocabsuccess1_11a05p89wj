// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The interior designer chose to __________ the living room with modern, minimalist furniture that reflected the client's taste.",
        chinese_question: "室内设计师选择用现代简约的家具来 __________ 客厅，反映客户的品味。",
        answers: [
            { option: "A", answer: "clutter", chinese答案: "杂乱", chinese罗马拼音: "záluàn" },
            { option: "B", answer: "dismantle", chinese答案: "拆除", chinese罗马拼音: "chāichú" },
            { option: "C", answer: "furnish", chinese答案: "布置", chinese罗马拼音: "bùzhì" },
            { option: "D", answer: "strip", chinese答案: "剥去", chinese罗马拼音: "bōqù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'furnish' means to supply with furniture or to supply with what is needed." +
            "<br><br>" +
            "(A) 'clutter' means to fill or cover with things in a disorderly manner." +
            "<br><br>" +
            "(B) 'dismantle' means to take (a machine or structure) to pieces." +
            "<br><br>" +
            "(D) 'strip' means to remove all coverings or surface layers from.",
        chinese_explanation: "(C) '布置' 一词意味着提供家具或提供所需的东西。" +
            "<br><br>" +
            "(A) '杂乱' 意味着用无序的东西填满或覆盖。" +
            "<br><br>" +
            "(B) '拆除' 意味着将（机器或结构）拆开。" +
            "<br><br>" +
            "(D) '剥去' 意味着移除所有覆盖物或表面层。"
    },
    {
        id: 2,
        question: "The volcano __________ suddenly, spewing ash and lava into the sky.",
        chinese_question: "火山突然 __________，喷出灰烬和熔岩到空中。",
        answers: [
            { option: "A", answer: "erupted", chinese_answer: "爆发", chinese_romanization: "bàofā" },
            { option: "B", answer: "calmed", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "C", answer: "diminished", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "D", answer: "ceased", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'erupted' means (of a volcano) become active and eject lava, ash, and gases." +
            "<br><br>" +
            "(B) 'calmed' means make (someone) tranquil and quiet; soothe." +
            "<br><br>" +
            "(C) 'diminished' means make or become less." +
            "<br><br>" +
            "(D) 'ceased' means bring or come to an end.",
        chinese_explanation: "(A) '爆发' 一词意味着（火山）变得活跃并喷出熔岩、灰烬和气体。" +
            "<br><br>" +
            "(B) '平静' 意味着使（某人）安静和平静；安抚。" +
            "<br><br>" +
            "(C) '减少' 意味着使减少或变少。" +
            "<br><br>" +
            "(D) '停止' 意味着结束或终止。"
    },
    {
        id: 3,
        question: "The king decided to __________ the traitor from the kingdom to prevent further betrayal.",
        chinese_question: "国王决定将叛徒 __________ 出王国，以防止进一步的背叛。",
        answers: [
            { option: "A", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
            { option: "B", answer: "welcome", chinese_answer: "欢迎", chinese_romanization: "huānyíng" },
            { option: "C", answer: "invite", chinese_answer: "邀请", chinese_romanization: "yāoqǐng" },
            { option: "D", answer: "banish", chinese_answer: "放逐", chinese_romanization: "fàngzhú" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'banish' means send (someone) away from a country or place as an official punishment." +
            "<br><br>" +
            "(A) 'reward' means give something to (someone) in recognition of their services, efforts, or achievements." +
            "<br><br>" +
            "(B) 'welcome' means greet (someone) in a friendly and polite way." +
            "<br><br>" +
            "(C) 'invite' means make a polite, formal, or friendly request to (someone) to go somewhere or to do something.",
        chinese_explanation: "(D) '放逐' 一词意味着作为官方惩罚将（某人）送离国家或地方。" +
            "<br><br>" +
            "(A) '奖励' 意味着为了表彰他们的服务、努力或成就而给予（某人）某物。" +
            "<br><br>" +
            "(B) '欢迎' 意味着友好和礼貌地迎接（某人）。" +
            "<br><br>" +
            "(C) '邀请' 意味着礼貌、正式或友好地请求（某人）去某地或做某事。"
    },
    {
        id: 4,
        question: "She tried to __________ her older sister by adopting her study habits and work ethic.",
        chinese_question: "她试图通过采用姐姐的学习习惯和工作伦理来 __________ 她。",
        answers: [
            { option: "A", answer: "mock", chinese答案: "嘲笑", chinese罗马拼音: "cháoxiào" },
            { option: "B", answer: "emulate", chinese答案: "模仿", chinese罗马拼音: "mófǎng" },
            { option: "C", answer: "criticize", chinese答案: "批评", chinese罗马拼音: "pīpíng" },
            { option: "D", answer: "oppose", chinese答案: "反对", chinese罗马拼音: "fǎnduì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'emulate' means to match or surpass (a person or achievement), typically by imitation." +
            "<br><br>" +
            "(A) 'mock' means tease or laugh at in a scornful or contemptuous manner." +
            "<br><br>" +
            "(C) 'criticize' means indicate the faults of (someone or something) in a disapproving way." +
            "<br><br>" +
            "(D) 'oppose' means disapprove of and attempt to prevent, especially by argument.",
        chinese_explanation: "(B) '模仿' 一词意味着通过模仿来匹配或超越（某人或某项成就）。" +
            "<br><br>" +
            "(A) '嘲笑' 意味着以轻蔑或鄙视的方式取笑或嘲笑。" +
            "<br><br>" +
            "(C) '批评' 意味着以不赞成的方式指出（某人或某物）的错误。" +
            "<br><br>" +
            "(D) '反对' 意味着不赞成并试图阻止，尤其是通过争论。"
    },
    {
        id: 5,
        question: "The new program aims to __________ students' learning experiences by providing access to advanced resources and technology.",
        chinese_question: "新项目旨在通过提供访问先进资源和技术的机会来 __________ 学生的学习体验。",
        answers: [
            { option: "A", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "B", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "C", answer: "reduce", chinese_answer: "降低", chinese_romanization: "jiàngdī" },
            { option: "D", answer: "enrich", chinese_answer: "丰富", chinese_romanization: "fēngfù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'enrich' means improve or enhance the quality or value of." +
            "<br><br>" +
            "(A) 'diminish' means make or become less." +
            "<br><br>" +
            "(B) 'hinder' means create difficulties for (someone or something), resulting in delay or obstruction." +
            "<br><br>" +
            "(C) 'reduce' means make smaller or less in amount, degree, or size.",
        chinese_explanation: "(D) '丰富' 一词意味着改善或增强质量或价值。" +
            "<br><br>" +
            "(A) '减少' 意味着使变少或变小。" +
            "<br><br>" +
            "(B) '阻碍' 意味着给（某人或某事）制造困难，导致延误或障碍。" +
            "<br><br>" +
            "(C) '降低' 意味着在数量、程度或规模上变小或变少。"
    },
    {
        id: 6,
        question: "The mentor aimed to __________ a love of learning in her students by encouraging curiosity and exploration.",
        chinese_question: "导师旨在通过鼓励好奇心和探索来 __________ 学生对学习的热爱。",
        answers: [
            { option: "A", answer: "discourage", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" },
            { option: "B", answer: "foster", chinese_answer: "培养", chinese_romanization: "péiyǎng" },
            { option: "C", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "D", answer: "impede", chinese_answer: "妨碍", chinese_romanization: "fáng'ài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'foster' means encourage the development of (something, especially something desirable)." +
            "<br><br>" +
            "(A) 'discourage' means cause (someone) to lose confidence or enthusiasm." +
            "<br><br>" +
            "(C) 'hinder' means create difficulties for (someone or something), resulting in delay or obstruction." +
            "<br><br>" +
            "(D) 'impede' means delay or prevent (someone or something) by obstructing them; hinder.",
        chinese_explanation: "(B) '培养' 一词意味着鼓励（某事，尤其是某些可取的事物）的发展。" +
            "<br><br>" +
            "(A) '阻止' 意味着使（某人）失去信心或热情。" +
            "<br><br>" +
            "(C) '阻碍' 意味着给（某人或某事）制造困难，导致延误或障碍。" +
            "<br><br>" +
            "(D) '妨碍' 意味着通过阻碍来延迟或阻止（某人或某事）；阻碍。"
    },
    {
        id: 7,
        question: "The driver swerved suddenly to __________ hitting the stray dog that had run into the road.",
        chinese_question: "司机突然转向以 __________ 撞到跑到路上的流浪狗。",
        answers: [
            { option: "A", answer: "cause", chinese答案: "引起", chinese罗马拼音: "yǐnqǐ" },
            { option: "B", answer: "ensure", chinese答案: "确保", chinese罗马拼音: "quèbǎo" },
            { option: "C", answer: "strike", chinese答案: "打击", chinese罗马拼音: "dǎjī" },
            { option: "D", answer: "avert", chinese答案: "避免", chinese罗马拼音: "bìmiǎn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'avert' means to turn away or prevent something undesirable from happening." +
            "<br><br>" +
            "(A) 'cause' means to make something happen." +
            "<br><br>" +
            "(B) 'ensure' means to make certain that something will occur or be the case." +
            "<br><br>" +
            "(C) 'strike' means to hit forcibly and deliberately.",
        chinese_explanation: "(D) '避免' 一词意味着转移或防止不希望的事情发生。" +
            "<br><br>" +
            "(A) '引起' 意味着使某事发生。" +
            "<br><br>" +
            "(B) '确保' 意味着确保某事会发生或成为事实。" +
            "<br><br>" +
            "(C) '打击' 意味着用力和故意地击打。"
    },
    {
        id: 8,
        question: "Despite the difficulties, she decided to __________ the climb to the mountain's peak.",
        chinese_question: "尽管有困难，她还是决定 __________ 登上山顶。",
        answers: [
            { option: "A", answer: "abandon", chinese答案: "放弃", chinese罗马拼音: "fàngqì" },
            { option: "B", answer: "attempt", chinese答案: "尝试", chinese罗马拼音: "chángshì" },
            { option: "C", answer: "avoid", chinese答案: "避免", chinese罗马拼音: "bìmiǎn" },
            { option: "D", answer: "vacillate", chinese答案: "犹豫", chinese罗马拼音: "yóuyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'attempt' means make an effort to achieve or complete (something, typically a difficult task or action)." +
            "<br><br>" +
            "(A) 'abandon' means give up completely (a course of action, a practice, or a way of thinking)." +
            "<br><br>" +
            "(C) 'avoid' means keep away from or stop oneself from doing (something)." +
            "<br><br>" +
            "(D) 'vacillate' means to waver between different opinions or actions; be indecisive.",
        chinese_explanation: "(B) '尝试' 一词意味着努力实现或完成（某事，通常是艰难的任务或行动）。" +
            "<br><br>" +
            "(A) '放弃' 意味着完全放弃（行动、做法或思维方式）。" +
            "<br><br>" +
            "(C) '避免' 意味着远离或阻止自己做（某事）。" +
            "<br><br>" +
            "(D) '犹豫' 意味着在不同的意见或行动之间摇摆不定；优柔寡断。"
    },
    {
        id: 9,
        question: "They decided to __________ a meeting for next Monday to discuss the project details.",
        chinese_question: "他们决定 __________ 下周一的会议，讨论项目细节。",
        answers: [
            { option: "A", answer: "cancel", chinese答案: "取消", chinese罗马拼音: "qǔxiāo" },
            { option: "B", answer: "delay", chinese答案: "延迟", chinese罗马拼音: "yánchí" },
            { option: "C", answer: "arrange", chinese答案: "安排", chinese罗马拼音: "ānpái" },
            { option: "D", answer: "obviate", chinese答案: "排除", chinese罗马拼音: "páichú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'arrange' means put (things) in a neat, attractive, or required order." +
            "<br><br>" +
            "(A) 'cancel' means decide or announce that (an arranged or planned event) will not take place." +
            "<br><br>" +
            "(B) 'delay' means make (someone or something) late or slow." +
            "<br><br>" +
            "(D) 'obviate' means to remove (a need or difficulty).",
        chinese_explanation: "(C) '安排' 一词意味着将（事物）放置在整洁、有吸引力或需要的顺序中。" +
            "<br><br>" +
            "(A) '取消' 意味着决定或宣布（安排或计划的事件）不会发生。" +
            "<br><br>" +
            "(B) '延迟' 意味着使（某人或某物）迟到或变慢。" +
            "<br><br>" +
            "(D) '排除' 意味着消除（需求或困难）。"
    },
    {
        id: 10,
        question: "The moon will __________ the sun during the solar eclipse, casting a shadow on the Earth.",
        chinese_question: "在日食期间，月亮将 __________ 太阳，在地球上投下阴影。",
        answers: [
            { option: "A", answer: "eclipse", chinese_answer: "遮蔽", chinese_romanization: "zhēbì" },
            { option: "B", answer: "reveal", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
            { option: "C", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
            { option: "D", answer: "illuminate", chinese_answer: "照亮", chinese_romanization: "zhàoliàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'eclipse' means obscure the light from or to (another celestial body)." +
            "<br><br>" +
            "(B) 'reveal' means make (previously unknown or secret information) known to others." +
            "<br><br>" +
            "(C) 'enhance' means intensify, increase, or further improve the quality, value, or extent of." +
            "<br><br>" +
            "(D) 'illuminate' means light up.",
        chinese_explanation: "(A) '遮蔽' 一词意味着遮住或阻挡（另一个天体）的光。" +
            "<br><br>" +
            "(B) '揭示' 意味着使（以前未知或秘密的信息）为他人所知。" +
            "<br><br>" +
            "(C) '增强' 意味着加强、增加或进一步改善质量、价值或范围。" +
            "<br><br>" +
            "(D) '照亮' 意味着照亮。"
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
