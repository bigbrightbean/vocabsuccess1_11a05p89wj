// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ discovery of the hidden treasure, found while they were simply digging a hole for a new tree, was a surprising and fortunate event.",
        chinese_question: "在只是为一棵新树挖洞时 __________ 发现了隐藏的宝藏，这是一件令人惊讶和幸运的事情。",
        answers: [
            { option: "A", answer: "accidental", chinese_answer: "偶然的", chinese_romanization: "ǒurán de" },
            { option: "B", answer: "serendipitous", chinese_answer: "意外收获的", chinese_romanization: "yìwài shōuhuò de" },
            { option: "C", answer: "unlucky", chinese_answer: "不幸的", chinese_romanization: "bùxìng de" },
            { option: "D", answer: "planned", chinese_answer: "计划好的", chinese_romanization: "jìhuà hǎo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'serendipitous' means occurring or discovered by chance in a happy or beneficial way." +
            "<br><br>" +
            "(A) 'accidental' means happening by chance, unintentionally, or unexpectedly." +
            "<br><br>" +
            "(C) 'unlucky' means having, bringing, or resulting from bad luck." +
            "<br><br>" +
            "(D) 'planned' means decided on and arranged in advance.",
        chinese_explanation: "(B) '意外收获的' 意思是偶然发生或发现的，且是令人愉快或有益的方式。" +
            "<br><br>" +
            "(A) '偶然的' 意思是意外地、无意地或出乎意料地发生的。" +
            "<br><br>" +
            "(C) '不幸的' 意思是拥有、带来或由于坏运气。" +
            "<br><br>" +
            "(D) '计划好的' 意思是事先决定和安排好的。"
    },
    {
        id: 2,
        question: "The __________ statue in the garden had distorted features that were both fascinating and horrifying.",
        chinese_question: "花园里的__________雕像有着扭曲的特征，既迷人又恐怖。",
        answers: [
            { option: "A", answer: "beautiful", chinese_answer: "美丽的", chinese_romanization: "měilì de" },
            { option: "B", answer: "elegant", chinese_answer: "优雅的", chinese_romanization: "yōuyǎ de" },
            { option: "C", answer: "grotesque", chinese_answer: "丑陋的", chinese_romanization: "chǒulòu de" },
            { option: "D", answer: "delicate", chinese_answer: "精致的", chinese_romanization: "jīngzhì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'grotesque' means comically or repulsively ugly or distorted." +
            "<br><br>" +
            "(A) 'beautiful' means pleasing the senses or mind aesthetically." +
            "<br><br>" +
            "(B) 'elegant' means pleasingly graceful and stylish in appearance or manner." +
            "<br><br>" +
            "(D) 'delicate' means very fine in texture or structure; easily broken or damaged.",
        chinese_explanation: "(C) '丑陋的'一词意味着滑稽地或令人厌恶地丑陋或扭曲的。" +
            "<br><br>" +
            "(A) '美丽的' 意味着美学上愉悦感官或心灵的。" +
            "<br><br>" +
            "(B) '优雅的' 意味着在外观或举止上优美和时尚的。" +
            "<br><br>" +
            "(D) '精致的' 意味着质地或结构非常精细的；容易破碎或损坏的。"
    },
    {
        id: 3,
        question: "The dark clouds indicated that a storm was __________, and everyone hurried to find shelter.",
        chinese_question: "乌云表明暴风雨即将 __________，大家都急忙找避难所。",
        answers: [
            { option: "A", answer: "distant", chinese_answer: "遥远的", chinese_romanization: "yáoyuǎn de" },
            { option: "B", answer: "improbable", chinese_answer: "不大可能的", chinese_romanization: "bùdà kěnéng de" },
            { option: "C", answer: "imminent", chinese_answer: "逼近的", chinese_romanization: "bījìn de" },
            { option: "D", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bùquèdìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'imminent' means about to happen." +
            "<br><br>" +
            "(A) 'distant' means far away in space or time." +
            "<br><br>" +
            "(B) 'improbable' means not likely to be true or to happen." +
            "<br><br>" +
            "(D) 'uncertain' means not able to be relied on; not known or definite.",
        chinese_explanation: "(C) '逼近的' 一词意味着即将发生的。" +
            "<br><br>" +
            "(A) '遥远的' 意味着在空间或时间上很远的。" +
            "<br><br>" +
            "(B) '不大可能的' 意味着不太可能是真的或发生的。" +
            "<br><br>" +
            "(D) '不确定的' 意味着不能依赖的；未知或不确定的。"
    },
    {
        id: 4,
        question: "His __________ attitude made it difficult for him to make friends, as he often looked down on others.",
        chinese_question: "他的 __________ 态度使他难以交朋友，因为他经常看不起别人。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "B", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "C", answer: "haughty", chinese_answer: "傲慢的", chinese_romanization: "àomàn de" },
            { option: "D", answer: "unassuming", chinese_answer: "不自大的", chinese_romanization: "bù zìdà de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'haughty' means arrogantly superior and disdainful." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's own importance." +
            "<br><br>" +
            "(B) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'unassuming' means not pretentious or arrogant; modest.",
        chinese_explanation: "(C) '傲慢的' 一词意味着傲慢的优越感和蔑视他人。" +
            "<br><br>" +
            "(A) '谦逊的' 意味着对自己的重要性有或表现出谦虚或低估。" +
            "<br><br>" +
            "(B) '谦虚的' 意味着对自己的能力或成就持有谦虚或适度估计的。" +
            "<br><br>" +
            "(D) '不自大的' 意味着不自以为是或傲慢的；谦虚的。"
    },
    {
        id: 5,
        question: "Despite their differences, the two neighbors maintained an __________ relationship, always greeting each other with a smile.",
        chinese_question: "尽管有分歧，这两位邻居仍保持着 __________ 的关系，总是面带微笑地互相问候。",
        answers: [
            { option: "A", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "amicable", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" },
            { option: "D", answer: "contentious", chinese_answer: "争论的", chinese_romanization: "zhēnglùn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'amicable' means having a spirit of friendliness; without serious disagreement or rancor." +
            "<br><br>" +
            "(A) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'contentious' means causing or likely to cause an argument; controversial.",
        chinese_explanation: "(C) '友好的' 一词意味着具有友好的精神；没有严重的分歧或怨恨。" +
            "<br><br>" +
            "(A) '敌对的' 意味着不友好的；敌对的。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '争论的' 意味着引起或可能引起争论的；有争议的。"
    },
    {
        id: 6,
    question: "The donor chose to remain __________, wanting to help without seeking recognition or praise.",
    chinese_question: "捐赠者选择保持 __________，希望在不寻求认可或赞扬的情况下帮助他人。",
    answers: [
        { option: "A", answer: "famous", chinese_answer: "著名的", chinese_romanization: "zhùmíng de" },
        { option: "B", answer: "recognized", chinese_answer: "公认的", chinese_romanization: "gōngrèn de" },
        { option: "C", answer: "anonymous", chinese_answer: "匿名的", chinese_romanization: "nìmíng de" },
        { option: "D", answer: "visible", chinese_answer: "可见的", chinese_romanization: "kějiàn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'anonymous' means (of a person) not identified by name; of unknown name." +
        "<br><br>" +
        "(A) 'famous' means known about by many people." +
        "<br><br>" +
        "(B) 'recognized' means acknowledged as being good or important." +
        "<br><br>" +
        "(D) 'visible' means able to be seen.",
    chinese_explanation: "(C) '匿名的' 一词意味着（人）未被名字识别；名字未知的。" +
        "<br><br>" +
        "(A) '著名的' 意味着为许多人所知的。" +
        "<br><br>" +
        "(B) '公认的' 意味着被认可为优秀或重要的。" +
        "<br><br>" +
        "(D) '可见的' 意味着能够被看到的。"
    },
    {
        id: 7,
    question: "The concept of love is often considered __________ because it can be interpreted in many different ways and is not easily defined.",
    chinese_question: "爱的概念通常被认为是 __________ 的，因为它可以有许多不同的解释，不容易定义。",
    answers: [
        { option: "A", answer: "concrete", chinese_answer: "具体的", chinese_romanization: "jùtǐ de" },
        { option: "B", answer: "abstract", chinese_answer: "抽象的", chinese_romanization: "chōuxiàng de" },
        { option: "C", answer: "clear", chinese_answer: "清楚的", chinese_romanization: "qīngchǔ de" },
        { option: "D", answer: "definite", chinese_answer: "明确的", chinese_romanization: "míngquè de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'abstract' means existing in thought or as an idea but not having a physical or concrete existence." +
        "<br><br>" +
        "(A) 'concrete' means existing in a material or physical form; real or solid." +
        "<br><br>" +
        "(C) 'clear' means easy to perceive, understand, or interpret." +
        "<br><br>" +
        "(D) 'definite' means clearly stated or decided; not vague or doubtful.",
    chinese_explanation: "(B) '抽象的' 一词意味着存在于思想中或作为一个想法，但没有物理或具体的存在。" +
        "<br><br>" +
        "(A) '具体的' 意味着以物质或物理形式存在的；真实或固体的。" +
        "<br><br>" +
        "(C) '清楚的' 意味着容易感知、理解或解释的。" +
        "<br><br>" +
        "(D) '明确的' 意味着明确陈述或决定的；不模糊或不怀疑的。"
    },
    {
        id: 8,
    question: "After hiking for hours under the hot sun, they were __________ and eagerly searched for a source of water.",
    chinese_question: "在烈日下徒步数小时后，他们感到 __________，急切地寻找水源。",
    answers: [
        { option: "A", answer: "hydrated", chinese_answer: "水分充足的", chinese_romanization: "shuǐfèn chōngzú de" },
        { option: "B", answer: "moist", chinese_answer: "潮湿的", chinese_romanization: "cháoshī de" },
        { option: "C", answer: "parched", chinese_answer: "干渴的", chinese_romanization: "gānkě de" },
        { option: "D", answer: "damp", chinese_answer: "潮湿的", chinese_romanization: "cháoshī de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'parched' means dried out with heat; extremely thirsty." +
        "<br><br>" +
        "(A) 'hydrated' means having absorbed enough water or other liquid." +
        "<br><br>" +
        "(B) 'moist' means slightly wet; damp or humid." +
        "<br><br>" +
        "(D) 'damp' means slightly wet.",
    chinese_explanation: "(C) '干渴的' 一词意味着被热晒干的；极度口渴的。" +
        "<br><br>" +
        "(A) '水分充足的' 意味着吸收了足够的水或其他液体。" +
        "<br><br>" +
        "(B) '潮湿的' 意味着稍微湿的；潮湿或湿润的。" +
        "<br><br>" +
        "(D) '潮湿的' 意味着稍微湿的。"
    },
    {
        id: 9,
        question: "She was __________ of strangers offering help, remembering the warnings about scams and frauds.",
        chinese_question: "她对提供帮助的陌生人保持 __________，记得关于骗局和欺诈的警告。",
        answers: [
            { option: "A", answer: "trusting", chinese_answer: "信任的", chinese_romanization: "xìnrèn de" },
            { option: "B", answer: "unwary", chinese_answer: "不警惕的", chinese_romanization: "bù jǐngtì de" },
            { option: "C", answer: "wary", chinese_answer: "警惕的", chinese_romanization: "jǐngtì de" },
            { option: "D", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'wary' means feeling or showing caution about possible dangers or problems." +
            "<br><br>" +
            "(A) 'trusting' means showing or tending to have a belief in a person's honesty or sincerity; not suspicious." +
            "<br><br>" +
            "(B) 'unwary' means not cautious; not aware of possible dangers or problems." +
            "<br><br>" +
            "(D) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
        chinese_explanation: "(C) '警惕的' 一词意味着对可能的危险或问题感到或表现出谨慎。" +
            "<br><br>" +
            "(A) '信任的' 意味着表现出或倾向于相信某人的诚实或真诚；不怀疑的。" +
            "<br><br>" +
            "(B) '不警惕的' 意味着不谨慎的；没有意识到可能的危险或问题的。" +
            "<br><br>" +
            "(D) '粗心的' 意味着没有给予足够的注意或思考来避免伤害或错误。"
    },
    {
        id: 10,
        question: "The museum's new exhibit focuses on the __________ beauty of minimalist art, showcasing works with clean lines and simple forms.",
        chinese_question: "博物馆的新展览侧重于极简艺术的 __________ 美，展示了具有简洁线条和简单形式的作品。",
        answers: [
            { option: "A", answer: "practical", chinese_answer: "实用的", chinese_romanization: "shíyòng de" },
            { option: "B", answer: "aesthetic", chinese_answer: "审美的", chinese_romanization: "shěnměi de" },
            { option: "C", answer: "functional", chinese_answer: "功能的", chinese_romanization: "gōngnéng de" },
            { option: "D", answer: "utilitarian", chinese_answer: "功利的", chinese_romanization: "gōnglì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'aesthetic' means concerned with beauty or the appreciation of beauty." +
            "<br><br>" +
            "(A) 'practical' means concerned with the actual doing or use of something rather than with theory and ideas." +
            "<br><br>" +
            "(C) 'functional' means designed to be practical and useful, rather than attractive." +
            "<br><br>" +
            "(D) 'utilitarian' means designed to be useful or practical rather than attractive.",
        chinese_explanation: "(B) '审美的' 一词意味着与美或对美的欣赏有关的。" +
            "<br><br>" +
            "(A) '实用的' 意味着关注实际操作或使用，而不是理论和想法。" +
            "<br><br>" +
            "(C) '功能的' 意味着设计为实用和有用的，而不是吸引人的。" +
            "<br><br>" +
            "(D) '功利的' 意味着设计为有用或实用的，而不是吸引人的。"
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
