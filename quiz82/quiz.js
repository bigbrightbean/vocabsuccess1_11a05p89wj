// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Over the years, he managed to __________ a vast collection of rare books, each one holding a unique story.",
        chinese_question: "多年来，他设法 __________ 了大量的稀有书籍，每本书都讲述了一个独特的故事。",
        answers: [
            { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "accumulate", chinese_answer: "积累", chinese_romanization: "jīlěi" },
            { option: "C", answer: "discard", chinese_answer: "丢弃", chinese_romanization: "diūqì" },
            { option: "D", answer: "scatter", chinese_answer: "散开", chinese_romanization: "sàn kāi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'accumulate' means gather together or acquire an increasing number or quantity of something." +
            "<br><br>" +
            "(A) 'neglect' means fail to care for properly." +
            "<br><br>" +
            "(C) 'discard' means get rid of (someone or something) as no longer useful or desirable." +
            "<br><br>" +
            "(D) 'scatter' means throw in various random directions.",
        chinese_explanation: "(B) '积累' 意味着聚集或获得越来越多的数量。" +
            "<br><br>" +
            "(A) '忽视' 意味着未能正确照顾。" +
            "<br><br>" +
            "(C) '丢弃' 意味着摆脱（某人或某物）不再有用或不再需要。" +
            "<br><br>" +
            "(D) '散开' 意味着向各个随机方向抛洒。"
    },
    {
        id: 2,
        question: "The teacher's dedication and passion for the subject __________ her students to pursue careers in science.",
        chinese_question: "老师对这门课的奉献和热情 __________ 了她的学生们追求科学事业。",
        answers: [
            { option: "A", answer: "discouraged", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
            { option: "B", answer: "inspired", chinese_answer: "激励", chinese_romanization: "jīlì" },
            { option: "C", answer: "bored", chinese_answer: "使感到无聊", chinese_romanization: "shǐ gǎndào wúliáo" },
            { option: "D", answer: "hindered", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inspired' means fill (someone) with the urge or ability to do or feel something, especially to do something creative." +
            "<br><br>" +
            "(A) 'discouraged' means cause (someone) to lose confidence or enthusiasm." +
            "<br><br>" +
            "(C) 'bored' means make (someone) feel weary and uninterested by tedious talk or dull tasks." +
            "<br><br>" +
            "(D) 'hindered' means create difficulties for (someone or something), resulting in delay or obstruction.",
        chinese_explanation: "(B) '激励' 一词意味着使（某人）有做某事的冲动或能力，特别是做某事有创意。" +
            "<br><br>" +
            "(A) '劝阻' 意味着使（某人）失去信心或热情。" +
            "<br><br>" +
            "(C) '使感到无聊' 意味着通过乏味的谈话或枯燥的任务使（某人）感到厌倦和无趣。" +
            "<br><br>" +
            "(D) '阻碍' 意味着为（某人或某物）制造困难，导致延迟或障碍。"
    },
    {
        id: 3,
        question: "The goal of the new policy is to __________ immigrants into the community, helping them to feel welcome and become active members of society.",
        chinese_question: "新政策的目标是 __________ 移民融入社区，帮助他们感到受欢迎并成为社会的活跃成员。",
        answers: [
            { option: "A", answer: "isolate", chinese_answer: "隔离", chinese_romanization: "gélí" },
            { option: "B", answer: "separate", chinese_answer: "分离", chinese_romanization: "fēnlí" },
            { option: "C", answer: "integrate", chinese_answer: "融入", chinese_romanization: "róngrù" },
            { option: "D", answer: "exclude", chinese_answer: "排除", chinese_romanization: "páichú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'integrate' means combine (one thing) with another so that they become a whole." +
            "<br><br>" +
            "(A) 'isolate' means cause (a person or place) to be or remain alone or apart from others." +
            "<br><br>" +
            "(B) 'separate' means cause to move or be apart." +
            "<br><br>" +
            "(D) 'exclude' means deny (someone) access to a place, group, or privilege.",
        chinese_explanation: "(C) '融入' 一词意味着将（一物）与另一物结合，使其成为整体。" +
            "<br><br>" +
            "(A) '隔离' 意味着使（人或地方）单独或与他人分开。" +
            "<br><br>" +
            "(B) '分离' 意味着使移动或分开。" +
            "<br><br>" +
            "(D) '排除' 意味着拒绝（某人）进入一个地方、团体或特权。"
    },
    {
        id: 4,
        question: "The artist's mural __________ the daily life of the villagers, capturing their routines and traditions in vivid detail.",
        chinese_question: "艺术家的壁画 __________ 了村民的日常生活，生动地描绘了他们的日常活动和传统。",
        answers: [
            { option: "A", answer: "ignores", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "confuses", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" },
            { option: "C", answer: "depicts", chinese_answer: "描绘", chinese_romanization: "miáohuì" },
            { option: "D", answer: "misrepresents", chinese_answer: "误传", chinese_romanization: "wùchuán" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'depicts' means show or represent by a drawing, painting, or other art form." +
            "<br><br>" +
            "(A) 'ignores' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(B) 'confuses' means make (someone) bewildered or perplexed." +
            "<br><br>" +
            "(D) 'misrepresents' means give a false or misleading account of the nature of.",
        chinese_explanation: "(C) '描绘' 一词意味着通过绘画、绘画或其他艺术形式展示或表示。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认；故意无视。" +
            "<br><br>" +
            "(B) '混淆' 意味着使（某人）困惑或困惑。" +
            "<br><br>" +
            "(D) '误传' 意味着对...的性质给出错误或误导的描述。"
    },
    {
        id: 5,
        question: "They decided to __________ on a year-long journey around the world to explore different cultures.",
        chinese_question: "他们决定 __________ 一次为期一年的环游世界之旅，以探索不同的文化。",
        answers: [
            { option: "A", answer: "conclude", chinese_answer: "结束", chinese_romanization: "jiéshù" },
            { option: "B", answer: "disembark", chinese_answer: "下船", chinese_romanization: "xià chuán" },
            { option: "C", answer: "terminate", chinese_answer: "终止", chinese_romanization: "zhōngzhǐ" },
            { option: "D", answer: "embark", chinese_answer: "启程", chinese_romanization: "qǐchéng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'embark' means begin (a course of action, especially one that is important or demanding)." +
            "<br><br>" +
            "(A) 'disembark' means leave a ship, aircraft, or other vehicle." +
            "<br><br>" +
            "(B) 'conclude' means bring (something) to an end." +
            "<br><br>" +
            "(C) 'terminate' means bring to an end.",
        chinese_explanation: "(D) '启程' 一词意味着开始（特别是重要或艰巨的行动）。" +
            "<br><br>" +
            "(A) '下船' 意味着离开船、飞机或其他车辆。" +
            "<br><br>" +
            "(B) '结束' 意味着结束（某事）。" +
            "<br><br>" +
            "(C) '终止' 意味着结束。"
    },
    {
        id: 6,
        question: "The team was able to __________ a new community center that would benefit local residents for years to come.",
        chinese_question: "团队能够 __________ 一个新的社区中心，这将为当地居民带来多年的好处。",
        answers: [
            { option: "A", answer: "destroy", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "B", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "construct", chinese_answer: "建造", chinese_romanization: "jiànzào" },
            { option: "D", answer: "ignore", chinese_answer: "无视", chinese_romanization: "wúshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'construct' means build or erect (something, typically a building, road, or machine)." +
            "<br><br>" +
            "(A) 'destroy' means put an end to the existence of (something) by damaging or attacking it." +
            "<br><br>" +
            "(B) 'neglect' means fail to care for properly." +
            "<br><br>" +
            "(D) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally.",
        chinese_explanation: "(C) '建造' 一词意味着建造或竖立（某物，通常是建筑物、道路或机器）。" +
            "<br><br>" +
            "(A) '破坏' 意味着通过损坏或攻击结束（某物）的存在。" +
            "<br><br>" +
            "(B) '忽视' 意味着未能适当照顾。" +
            "<br><br>" +
            "(D) '无视' 意味着拒绝注意或承认；故意无视。"
    },
    {
        id: 7,
        question: "The principal decided to __________ the student's phone after it was used during class.",
        chinese_question: "校长决定 __________ 学生的手机，因为它在上课期间被使用了。",
        answers: [
            { option: "A", answer: "admonish", chinese_answer: "训诫", chinese_romanization: "xùn jiè" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "confiscate", chinese_answer: "没收", chinese_romanization: "mòshōu" },
            { option: "D", answer: "repair", chinese_answer: "修理", chinese_romanization: "xiūlǐ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'confiscate' means take or seize (someone's property) with authority." +
            "<br><br>" +
            "(A) 'admonish' means warn or reprimand someone firmly." +
            "<br><br>" +
            "(B) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally." +
            "<br><br>" +
            "(D) 'repair' means restore (something damaged, faulty, or worn) to a good condition.",
        chinese_explanation: "(C) '没收' 一词意味着以权威拿走或扣押（某人的财产）。" +
            "<br><br>" +
            "(A) '训诫' 意味着严厉警告或训斥某人。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认；故意无视。" +
            "<br><br>" +
            "(D) '修理' 意味着将（损坏、故障或磨损的东西）恢复到良好的状态。"
    },
    {
        id: 8,
        question: "The ceremony will __________ at 10 AM sharp, so please be seated by then.",
        chinese_question: "仪式将于上午10点 __________，请在此之前入座。",
        answers: [
            { option: "A", answer: "end", chinese_answer: "结束", chinese_romanization: "jiéshù" },
            { option: "B", answer: "halt", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "C", answer: "pause", chinese_answer: "暂停", chinese_romanization: "zàntíng" },
            { option: "D", answer: "commence", chinese_answer: "开始", chinese_romanization: "kāishǐ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'commence' means begin; start." +
            "<br><br>" +
            "(A) 'end' means come to a conclusion." +
            "<br><br>" +
            "(B) 'halt' means bring or come to an abrupt stop." +
            "<br><br>" +
            "(C) 'pause' means interrupt action or speech briefly.",
        chinese_explanation: "(D) '开始' 一词意味着开始。" +
            "<br><br>" +
            "(A) '结束' 意味着结束。" +
            "<br><br>" +
            "(B) '停止' 意味着突然停止。" +
            "<br><br>" +
            "(C) '暂停' 意味着暂时中断动作或讲话。"
    },
    {
        id: 9,
        question: "The government decided to __________ single-use plastic bags to reduce environmental pollution and promote sustainability.",
        chinese_question: "为了减少环境污染并促进可持续性，政府决定 __________ 一次性塑料袋。",
        answers: [
            { option: "A", answer: "allow", chinese_answer: "允许", chinese_romanization: "yǔnxǔ" },
            { option: "B", answer: "ban", chinese_answer: "禁止", chinese_romanization: "jìnzhǐ" },
            { option: "C", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "D", answer: "distribute", chinese_answer: "分发", chinese_romanization: "fēnfā" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ban' means officially or legally prohibit." +
            "<br><br>" +
            "(A) 'allow' means give (someone) permission to do something." +
            "<br><br>" +
            "(C) 'encourage' means give support, confidence, or hope to (someone)." +
            "<br><br>" +
            "(D) 'distribute' means give shares of (something); deal out.",
        chinese_explanation: "(B) '禁止' 一词意味着官方或合法地禁止。" +
            "<br><br>" +
            "(A) '允许' 意味着给予（某人）做某事的许可。" +
            "<br><br>" +
            "(C) '鼓励' 意味着给予（某人）支持、信心或希望。" +
            "<br><br>" +
            "(D) '分发' 意味着分配（某物）的份额；分发。"
    },
    {
        id: 10,
        question: "The vibrant colors of the painting __________ sharply with the dark frame surrounding it.",
        chinese_question: "这幅画的鲜艳色彩与周围的深色画框形成了鲜明的 __________。",
        answers: [
            { option: "A", answer: "contrast", chinese_answer: "对比", chinese_romanization: "duìbǐ" },
            { option: "B", answer: "blend", chinese_answer: "混合", chinese_romanization: "hùnhé" },
            { option: "C", answer: "obscure", chinese_answer: "掩盖", chinese_romanization: "yǎngài" },
            { option: "D", answer: "attenuate", chinese_answer: "减弱", chinese_romanization: "jiǎnruò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'contrast' means to compare in such a way as to emphasize differences." +
            "<br><br>" +
            "(B) 'blend' means to mix (a substance) with another substance so that they combine together." +
            "<br><br>" +
            "(C) 'obscure' means to keep from being seen; conceal." +
            "<br><br>" +
            "(D) 'attenuate' means to reduce the force, effect, or value of something.",
        chinese_explanation: "(A) '对比' 一词意味着以强调差异的方式进行比较。" +
            "<br><br>" +
            "(B) '混合' 意味着将（一种物质）与另一种物质混合，使它们结合在一起。" +
            "<br><br>" +
            "(C) '掩盖' 意味着使不被看到；隐藏。" +
            "<br><br>" +
            "(D) '减弱' 意味着减少某事物的力量、效果或价值。"
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
