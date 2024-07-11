// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "In this context, 'assist' is a __________ for 'help.'",
        chinese_question: "在这种情况下，'assist' 是 'help' 的 __________。",
        answers: [
            { option: "A", answer: "synonym", chinese_answer: "同义词", chinese_romanization: "tóngyìcí" },
            { option: "B", answer: "contradiction", chinese_answer: "矛盾", chinese_romanization: "máodùn" },
            { option: "C", answer: "misnomer", chinese_answer: "用词不当", chinese_romanization: "yòngcí bùdàng" },
            { option: "D", answer: "anomaly", chinese_answer: "异常", chinese_romanization: "yìcháng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'synonym' metaphorically means a word having the same or nearly the same meaning as another." +
            "<br><br>" +
            "(B) 'contradiction' means a combination of statements, ideas, or features of a situation that are opposed to one another." +
            "<br><br>" +
            "(C) 'misnomer' means a wrong or inaccurate name or designation." +
            "<br><br>" +
            "(D) 'anomaly' means something that deviates from what is standard, normal, or expected.",
        chinese_explanation: "(A) '同义词' 比喻与另一个词具有相同或几乎相同意义的词。" +
            "<br><br>" +
            "'矛盾' 意味着相互对立的一系列陈述、想法或情况特征的组合。" +
            "<br><br>" +
            "'用词不当' 意味着错误或不准确的名称或指定。" +
            "<br><br>" +
            "'异常' 意味着偏离标准、正常或预期的事物。"
    },
    {
        id: 2,
        question: "The constant noise from the construction site next door was a real __________, disrupting our peace and quiet.",
        chinese_question: "隔壁施工现场的持续噪音是一个真正的__________，打扰了我们的宁静。",
        answers: [
            { option: "A", answer: "delight", chinese_answer: "乐趣", chinese_romanization: "lèqù" },
            { option: "B", answer: "nuisance", chinese_answer: "麻烦", chinese_romanization: "máfan" },
            { option: "C", answer: "treasure", chinese_answer: "珍宝", chinese_romanization: "zhēnbǎo" },
            { option: "D", answer: "pleasure", chinese_answer: "快乐", chinese_romanization: "kuàilè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nuisance' means a person, thing, or circumstance causing inconvenience or annoyance." +
            "<br><br>" +
            "'delight' means great pleasure." +
            "<br><br>" +
            "'treasure' means something very valuable." +
            "<br><br>" +
            "'pleasure' means a feeling of happy satisfaction and enjoyment.",
        chinese_explanation: "(B) '麻烦' 一词意味着引起不便或烦恼的人、事物或情况。" +
            "<br><br>" +
            "'乐趣' 意味着巨大的快乐。" +
            "<br><br>" +
            "'珍宝' 意味着非常有价值的东西。" +
            "<br><br>" +
            "'快乐' 意味着幸福的满足和享受的感觉。"
    },
    {
        id: 3,
        question: "The __________ gathered in the church for the Sunday service, filling the hall with their hymns.",
        chinese_question: "__________ 聚集在教堂参加周日礼拜，用他们的赞美诗填满了整个大厅。",
        answers: [
            { option: "A", answer: "audience", chinese_answer: "观众", chinese_romanization: "guānzhòng" },
            { option: "B", answer: "committee", chinese_answer: "委员会", chinese_romanization: "wěiyuánhuì" },
            { option: "C", answer: "congregation", chinese_answer: "会众", chinese_romanization: "huìzhòng" },
            { option: "D", answer: "team", chinese_answer: "团队", chinese_romanization: "tuánduì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'congregation' means a group of people assembled for religious worship." +
            "<br><br>" +
            "'audience' means the assembled spectators or listeners at a public event, such as a play, movie, concert, or meeting." +
            "<br><br>" +
            "'committee' means a group of people appointed for a specific function by a larger group and typically consisting of members of that group." +
            "<br><br>" +
            "'team' means a group of players forming one side in a competitive game or sport.",
        chinese_explanation: "(C) '会众' 一词意味着为宗教礼拜聚集的一群人。" +
            "<br><br>" +
            "'观众' 意味着在公共活动（如戏剧、电影、音乐会或会议）中集结的观众或听众。" +
            "<br><br>" +
            "'委员会' 意味着由较大团体任命的特定职能的小组，通常由该团体成员组成。" +
            "<br><br>" +
            "'团队' 意味着在竞争性游戏或运动中形成一方的一组球员。"
    },
    {
        id: 4,
        question: "She felt a deep sense of __________ for her mentor, who had guided her through many challenges in her career.",
        chinese_question: "她对导师怀有深深的 __________，导师在她职业生涯中的许多挑战中引导了她。",
        answers: [
            { option: "A", answer: "disdain", chinese_answer: "轻视", chinese_romanization: "qīngshì" },
            { option: "B", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mò bù guān xīn" },
            { option: "C", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
            { option: "D", answer: "contempt", chinese_answer: "蔑视", chinese_romanization: "mièshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'admiration' means respect and warm approval." +
            "<br><br>" +
            "(A) 'disdain' means the feeling that someone or something is unworthy of one's consideration or respect; contempt." +
            "<br><br>" +
            "(B) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'contempt' means the feeling that a person or a thing is beneath consideration, worthless, or deserving scorn.",
        chinese_explanation: "(C) '钦佩' 一词意味着尊重和热烈的赞同。" +
            "<br><br>" +
            "(A) '轻视' 意味着认为某人或某事不值得考虑或尊重的感觉；蔑视。" +
            "<br><br>" +
            "(B) '漠不关心' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '蔑视' 意味着认为一个人或事物不值得考虑、毫无价值或应受鄙视的感觉。"
    },
    {
        id: 5,
        question: "The __________ of the ancient civilization, such as pottery shards and ruined temples, provide valuable insights into their way of life.",
        chinese_question: "古代文明的 __________，如陶器碎片和寺庙遗迹，为他们的生活方式提供了宝贵的见解。",
        answers: [
            { option: "A", answer: "beginnings", chinese_answer: "起源", chinese_romanization: "qǐyuán" },
            { option: "B", answer: "remnants", chinese_answer: "遗迹", chinese_romanization: "yíjì" },
            { option: "C", answer: "creations", chinese_answer: "创造物", chinese_romanization: "chuàngzào wù" },
            { option: "D", answer: "conquests", chinese_answer: "征服", chinese_romanization: "zhēngfú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'remnants' means a small remaining quantity of something, often referring to the remains of a structure or civilization." +
            "<br><br>" +
            "(A) 'beginnings' means the point in time or space at which something starts." +
            "<br><br>" +
            "(C) 'creations' means things that have been made or invented." +
            "<br><br>" +
            "(D) 'conquests' means the act of conquering or taking control of a place or people.",
        chinese_explanation: "(B) '遗迹' 意思是某物的小剩余量，通常指结构或文明的遗迹。" +
            "<br><br>" +
            "(A) '起源' 意思是某事开始的时间或空间点。" +
            "<br><br>" +
            "(C) '创造物' 意思是已经被制造或发明的东西。" +
            "<br><br>" +
            "(D) '征服' 意思是征服或控制一个地方或人民的行为。"
    },
    {
        id: 6,
        question: "The computer scientist developed a new __________ that significantly improved the efficiency of data processing.",
        chinese_question: "计算机科学家开发了一种新的 __________，显著提高了数据处理的效率。",
        answers: [
            { option: "A", answer: "formula", chinese_answer: "公式", chinese_romanization: "gōngshì" },
            { option: "B", answer: "hypothesis", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
            { option: "C", answer: "algorithm", chinese_answer: "算法", chinese_romanization: "suànfǎ" },
            { option: "D", answer: "guess", chinese_answer: "猜测", chinese_romanization: "cāicè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'algorithm' means a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer." +
            "<br><br>" +
            "(A) 'formula' means a mathematical relationship or rule expressed in symbols." +
            "<br><br>" +
            "(B) 'hypothesis' means a supposition or proposed explanation made on the basis of limited evidence as a starting point for further investigation." +
            "<br><br>" +
            "(D) 'guess' means an estimate or conclusion reached by guessing.",
        chinese_explanation: "(C) '算法' 一词意味着在计算或其他问题解决操作中要遵循的过程或规则，特别是计算机。" +
            "<br><br>" +
            "(A) '公式' 意味着用符号表示的数学关系或规则。" +
            "<br><br>" +
            "(B) '假设' 意味着在有限证据的基础上提出的解释或假说，作为进一步研究的起点。" +
            "<br><br>" +
            "(D) '猜测' 意味着通过猜测得出的估计或结论。"
    },
    {
        id: 7,
        question: "The abandoned house showed signs of __________ after years of neglect.",
        chinese_question: "这座废弃的房子在多年疏于管理后出现了 __________ 的迹象。",
        answers: [
            { option: "A", answer: "decay", chinese_answer: "腐烂", chinese_romanization: "fǔlàn" },
            { option: "B", answer: "growth", chinese_answer: "增长", chinese_romanization: "zēngzhǎng" },
            { option: "C", answer: "improvement", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
            { option: "D", answer: "restoration", chinese_answer: "修复", chinese_romanization: "xiūfù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'decay' means the process of rotting or decomposition." + 
            "<br><br>" + 
            "(B) 'growth' means the process of increasing in physical size." + 
            "<br><br>" + 
            "(C) 'improvement' means a thing that makes something better or is better than something else." + 
            "<br><br>" + 
            "(D) 'restoration' means the action of returning something to a former owner, place, or condition.",
        chinese_explanation: "(A) '腐烂' 意味着腐烂或分解的过程。" + 
            "<br><br>" + 
            "(B) '增长' 意味着体积增加的过程。" + 
            "<br><br>" + 
            "(C) '改善' 意味着使某事变得更好或比另一事更好的事物。" + 
            "<br><br>" + 
            "(D) '修复' 意味着将某物恢复到以前的所有者、地方或状态的行为。"
    },
    {
        id: 8,
        question: "After losing his job, he fell into a state of deep __________.",
        chinese_question: "失业后，他陷入了深深的__________。",
        answers: [
            { option: "A", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" },
            { option: "B", answer: "happiness", chinese_answer: "幸福", chinese_romanization: "xìngfú" },
            { option: "C", answer: "misery", chinese_answer: "痛苦", chinese_romanization: "tòngkǔ" },
            { option: "D", answer: "delight", chinese_answer: "高兴", chinese_romanization: "gāoxìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'misery' means a state or feeling of great physical or mental distress or discomfort." +
            "<br><br>" +
            "(A) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(B) 'happiness' means the state of being happy." +
            "<br><br>" +
            "(D) 'delight' means great pleasure.",
        chinese_explanation: "(C) '痛苦'一词意味着身体或精神上的极大痛苦或不适。" +
            "<br><br>" +
            "(A) '喜悦' 意味着极大的快乐和幸福感。" +
            "<br><br>" +
            "(B) '幸福' 意味着幸福的状态。" +
            "<br><br>" +
            "(D) '高兴' 意味着极大的快乐。"
    },
    {
        id: 9,
        question: "After trying various treatments, she finally found a __________ for her persistent headaches that provided long-lasting relief.",
        chinese_question: "尝试了各种治疗方法后，她终于找到了一种 __________，为她的长期头痛提供了持久的缓解。",
        answers: [
            { option: "A", answer: "cause", chinese_answer: "原因", chinese_romanization: "yuányīn" },
            { option: "B", answer: "remedy", chinese_answer: "疗法", chinese_romanization: "liáofǎ" },
            { option: "C", answer: "complication", chinese_answer: "并发症", chinese_romanization: "bìngfāzhèng" },
            { option: "D", answer: "symptom", chinese_answer: "症状", chinese_romanization: "zhèngzhuàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'remedy' means a treatment or medicine to cure a disease or reduce pain that is not a drug." +
            "<br><br>" +
            "(A) 'cause' means a person or thing that gives rise to an action, phenomenon, or condition." +
            "<br><br>" +
            "(C) 'complication' means a secondary disease or condition aggravating an already existing one." +
            "<br><br>" +
            "(D) 'symptom' means a physical or mental feature indicating a condition of disease.",
        chinese_explanation: "(B) '疗法' 意思是治疗疾病或减轻疼痛的治疗方法或药物，不是药物。" +
            "<br><br>" +
            "(A) '原因' 意思是引起某种行为、现象或状况的人或事物。" +
            "<br><br>" +
            "(C) '并发症' 意思是加重已存在疾病的继发病或状况。" +
            "<br><br>" +
            "(D) '症状' 意思是表明疾病状况的身体或精神特征。"
    },
    {
        id: 10,
        question: "Her __________ for the future includes a world where everyone has access to education.",
        chinese_question: "她对未来的 __________ 包括一个人人都能接受教育的世界。",
        answers: [
            { option: "A", answer: "vision", chinese_answer: "远见", chinese_romanization: "yuǎnjiàn" },
            { option: "B", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "C", answer: "guess", chinese_answer: "猜测", chinese_romanization: "cāicè" },
            { option: "D", answer: "misinterpretation", chinese_answer: "误解", chinese_romanization: "wùjiě" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'vision' means the ability to think about or plan the future with imagination or wisdom." + 
            "<br><br>" + 
            "(B) 'ignorance' means lack of knowledge or information." + 
            "<br><br>" + 
            "(C) 'guess' means estimate or suppose (something) without sufficient information to be sure of being correct." + 
            "<br><br>" + 
            "(D) 'misinterpretation' means the action of interpreting something wrongly.",
        chinese_explanation: "(A) '远见' 意味着用想象力或智慧思考或计划未来的能力。" + 
            "<br><br>" + 
            "(B) '无知' 意味着缺乏知识或信息。" + 
            "<br><br>" + 
            "(C) '猜测' 意味着在没有足够信息的情况下估计或假设（某事）。" + 
            "<br><br>" + 
            "(D) '误解' 意味着错误地解读某事的行为。"
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
