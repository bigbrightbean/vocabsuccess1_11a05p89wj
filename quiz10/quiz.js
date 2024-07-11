// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She was known to be __________, often spending long hours in the library immersed in her studies.",
        chinese_question: "她以 __________ 而闻名，经常在图书馆里沉浸在学习中，花费很长时间。",
        answers: [
            { option: "A", answer: "lazy", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" },
            { option: "B", answer: "careless", chinese_answer: "粗心", chinese_romanization: "cūxīn" },
            { option: "C", answer: "distracted", chinese_answer: "分心", chinese_romanization: "fēnxīn" },
            { option: "D", answer: "studious", chinese_answer: "好学", chinese_romanization: "hàoxué" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'studious' means spending a lot of time studying or reading." +
            "<br><br>" +
            "(A) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(B) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(C) 'distracted' means unable to concentrate because one's mind is preoccupied.",
        chinese_explanation: "(D) '好学' 意味着花很多时间学习或阅读。" +
            "<br><br>" +
            "(A) '懒惰' 意味着不愿意工作或使用精力。" +
            "<br><br>" +
            "(B) '粗心' 意味着没有给予足够的注意或考虑来避免伤害或错误。" +
            "<br><br>" +
            "(C) '分心' 意味着无法集中注意力，因为思想被其他事情占据。"
    },
    {
        id: 2,
        question: "Their relationship was built on __________ respect and understanding, with both parties equally valuing and appreciating each other.",
        chinese_question: "他们的关系建立在__________的尊重和理解之上，双方都平等地重视和欣赏彼此。",
        answers: [
            { option: "A", answer: "one-sided", chinese_answer: "单方面的", chinese_romanization: "dān fāngmiàn de" },
            { option: "B", answer: "unilateral", chinese_answer: "单边的", chinese_romanization: "dānbiān de" },
            { option: "C", answer: "reciprocal", chinese_answer: "相互的", chinese_romanization: "xiānghù de" },
            { option: "D", answer: "biased", chinese_answer: "有偏见的", chinese_romanization: "yǒu piānjiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'reciprocal' means given, felt, or done in return." +
            "<br><br>" +
            "(A) 'one-sided' means unfairly giving or dealing with only one side of a contentious issue or question." +
            "<br><br>" +
            "(B) 'unilateral' means performed by or affecting only one person, group, or country involved in a particular situation, without the agreement of another or the others." +
            "<br><br>" +
            "(D) 'biased' means unfairly prejudiced for or against someone or something.",
        chinese_explanation: "(C) '相互的'一词意味着给予、感受到或作为回报的。" +
            "<br><br>" +
            "(A) '单方面的' 意味着不公平地只给予或处理一个有争议的问题或问题的一方。" +
            "<br><br>" +
            "(B) '单边的' 意味着由或仅影响涉及特定情况的一个人、团体或国家，而没有另一个或其他的同意。" +
            "<br><br>" +
            "(D) '有偏见的' 意味着对某人或某事有不公平的偏见的。"
    },
    {
        id: 3,
        question: "Despite his impressive accomplishments, he remained __________ and never boasted about his success.",
        chinese_question: "尽管他有着令人印象深刻的成就，但他始终保持 __________，从不炫耀自己的成功。",
        answers: [
            { option: "A", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "B", answer: "arrogant", chinese_answer: "傲慢的", chinese_romanization: "àomàn de" },
            { option: "C", answer: "boastful", chinese_answer: "自夸的", chinese_romanization: "zìkuā de" },
            { option: "D", answer: "conceited", chinese_answer: "自负的", chinese_romanization: "zìfù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'modest' means not thinking too highly of oneself or one's abilities; being humble and not bragging." +
            "<br><br>" +
            "(B) 'arrogant' means having or revealing an exaggerated sense of one's own importance or abilities." +
            "<br><br>" +
            "(C) 'boastful' means showing excessive pride and self-satisfaction in one's achievements, possessions, or abilities." +
            "<br><br>" +
            "(D) 'conceited' means excessively proud of oneself; vain.",
        chinese_explanation: "(A) '谦虚的' 意味着不过高地评价自己或自己的能力；谦逊而不吹嘘。" +
            "<br><br>" +
            "(B) '傲慢的' 意味着对自己的重要性或能力有或揭示出夸大的看法。" +
            "<br><br>" +
            "(C) '自夸的' 意味着对自己的成就、财产或能力表现出过度的自豪和自满。" +
            "<br><br>" +
            "(D) '自负的' 意味着对自己过分自豪的；虚荣的。"
    },
    {
        id: 4,
        question: "The sound of the __________ rain tapping on the windowpane kept me awake all night.",
        chinese_question: "窗玻璃上 __________ 的雨声让我整夜无法入睡。",
        answers: [
            { option: "A", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
            { option: "B", answer: "intermittent", chinese_answer: "间歇的", chinese_romanization: "jiànxiē de" },
            { option: "C", answer: "incessant", chinese_answer: "不停的", chinese_romanization: "bùtíng de" },
            { option: "D", answer: "sporadic", chinese_answer: "零星的", chinese_romanization: "língxīng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'incessant' means continuing without pause or interruption." +
            "<br><br>" +
            "(A) 'occasionally' means at infrequent or irregular intervals; now and then." +
            "<br><br>" +
            "(B) 'intermittent' means occurring at irregular intervals; not continuous or steady." +
            "<br><br>" +
            "(D) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated.",
        chinese_explanation: "(C) '不停的' 一词意味着不停地继续或中断。" +
            "<br><br>" +
            "(A) '偶尔的' 意味着在不经常或不规律的间隔时间；时不时。" +
            "<br><br>" +
            "(B) '间歇的' 意味着在不规律的间隔时间发生的；不连续或不稳定的。" +
            "<br><br>" +
            "(D) '零星的' 意味着在不规律的间隔时间发生的或仅在少数地方发生的；分散或孤立的。"
    },
    {
        id: 5,
        question: "The student's __________ remark during the lecture shocked everyone, as it was both rude and irrelevant.",
        chinese_question: "学生在讲座期间的 __________ 言论让所有人震惊，因为它既粗鲁又无关紧要。",
        answers: [
            { option: "A", answer: "impertinent", chinese_answer: "无礼的", chinese_romanization: "wúlǐ de" },
            { option: "B", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" },
            { option: "C", answer: "appropriate", chinese_answer: "适当的", chinese_romanization: "shìdàng de" },
            { option: "D", answer: "polite", chinese_answer: "有礼貌的", chinese_romanization: "yǒu lǐmào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'impertinent' means not showing proper respect; rude." +
            "<br><br>" +
            "(B) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(C) 'appropriate' means suitable or proper in the circumstances." +
            "<br><br>" +
            "(D) 'polite' means having or showing behavior that is respectful and considerate of other people.",
        chinese_explanation: "(A) '无礼的' 意味着没有表现出应有的尊重；粗鲁的。" +
            "<br><br>" +
            "(B) '尊重的' 意味着感到或表现出敬意的。" +
            "<br><br>" +
            "(C) '适当的' 意味着在情况下合适或恰当的。" +
            "<br><br>" +
            "(D) '有礼貌的' 意味着表现出尊重和考虑他人的行为。"
    },
    {
        id: 6,
        question: "The __________ child hid behind his mother's leg when strangers tried to talk to him.",
        chinese_question: "当陌生人试图与他说话时，这个 __________ 的孩子躲在他母亲的腿后。",
        answers: [
            { option: "A", answer: "bashful", chinese_answer: "害羞的", chinese_romanization: "hàixiū de" },
            { option: "B", answer: "outgoing", chinese_answer: "外向的", chinese_romanization: "wàixiàng de" },
            { option: "C", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
            { option: "D", answer: "aggressive", chinese_answer: "侵略性的", chinese_romanization: "qīnlüè xìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bashful' means shy or easily embarrassed." +
            "<br><br>" +
            "(B) 'outgoing' means sociable and energetic." +
            "<br><br>" +
            "(C) 'confident' means sure of oneself." +
            "<br><br>" +
            "(D) 'aggressive' means ready or likely to attack.",
        chinese_explanation: "(A) '害羞的' 意味着腼腆或容易害羞的。" +
            "<br><br>" +
            "(B) '外向的' 意味着善于交际和精力充沛的。" +
            "<br><br>" +
            "(C) '自信的' 意味着自信的。" +
            "<br><br>" +
            "(D) '侵略性的' 意味着准备攻击或可能攻击的。"
    },
    {
        id: 7,
        question: "She was a __________ businesswoman, always making smart decisions that benefited her company.",
        chinese_question: "她是一位 __________ 的女商人，总是做出对公司有利的聪明决定。",
        answers: [
            { option: "A", answer: "naive", chinese_answer: "天真", chinese_romanization: "tiānzhēn" },
            { option: "B", answer: "shrewd", chinese_answer: "精明", chinese_romanization: "jīngmíng" },
            { option: "C", answer: "careless", chinese_answer: "粗心", chinese_romanization: "cūxīn" },
            { option: "D", answer: "reckless", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'shrewd' means being very smart and able to make good decisions quickly." +
            "<br><br>" +
            "(A) 'naive' means showing a lack of experience, wisdom, or judgment." +
            "<br><br>" +
            "(C) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(D) 'reckless' means without thinking or caring about the consequences of an action.",
        chinese_explanation: "(B) '精明' 一词意味着非常聪明并能迅速做出好决定。" +
            "<br><br>" +
            "(A) '天真' 意味着缺乏经验、智慧或判断力。" +
            "<br><br>" +
            "(C) '粗心' 意味着没有给予足够的注意或思考以避免伤害或错误。" +
            "<br><br>" +
            "(D) '鲁莽' 意味着不考虑行动的后果。"
    },
    {
        id: 8,
        question: "The garden was filled with __________ flowers, their sweet scents wafting through the air.",
        chinese_question: "花园里充满了 __________ 的花朵，甜美的香气在空气中飘荡。",
        answers: [
            { option: "A", answer: "fragrant", chinese_answer: "芳香的", chinese_romanization: "fāngxiāng de" },
            { option: "B", answer: "odorless", chinese_answer: "无味的", chinese_romanization: "wúwèi de" },
            { option: "C", answer: "stinky", chinese_answer: "臭的", chinese_romanization: "chòu de" },
            { option: "D", answer: "musty", chinese_answer: "发霉的", chinese_romanization: "fāméi de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fragrant' means having a pleasant or sweet smell." +
            "<br><br>" +
            "(B) 'odourless' means having no smell." +
            "<br><br>" +
            "(C) 'stinky' means having a strong, unpleasant smell." +
            "<br><br>" +
            "(D) 'musty' means having a stale, mouldy, or damp smell.",
        chinese_explanation: "(A) '芳香的' 意味着有愉快或甜美的气味。" +
            "<br><br>" +
            "(B) '无味的' 意味着没有气味的。" +
            "<br><br>" +
            "(C) '臭的' 意味着有强烈、令人不快的气味。" +
            "<br><br>" +
            "(D) '发霉的' 意味着有陈旧的、发霉的或潮湿的气味。"
    },
    {
        id: 9,
        question: "Winning the lottery seemed __________ to him, yet he bought a ticket every week with a glimmer of hope.",
        chinese_question: "他觉得中大奖是 __________ 的，但他每周还是抱着一线希望买一张彩票。",
        answers: [
            { option: "A", answer: "improbable", chinese_answer: "不太可能的", chinese_romanization: "bùtài kěnéng de" },
            { option: "B", answer: "certain", chinese_answer: "确定的", chinese_romanization: "quèdìng de" },
            { option: "C", answer: "likely", chinese_answer: "可能的", chinese_romanization: "kěnéng de" },
            { option: "D", answer: "inevitable", chinese_answer: "不可避免的", chinese_romanization: "bùkě bìmiǎn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'improbable' means not likely to be true or to happen." +
            "<br><br>" +
            "(B) 'certain' means known for sure; established beyond doubt." +
            "<br><br>" +
            "(C) 'likely' means such as well might happen or be true; probable." +
            "<br><br>" +
            "(D) 'inevitable' means certain to happen; unavoidable.",
        chinese_explanation: "(A) '不太可能的' 意味着不太可能是真的或发生的。" +
            "<br><br>" +
            "(B) '确定的' 意味着确定无疑的；确定的。" +
            "<br><br>" +
            "(C) '可能的' 意味着很可能发生或是真的；可能的。" +
            "<br><br>" +
            "(D) '不可避免的' 意味着一定会发生的；不可避免的。"
    },
    {
        id: 10,
        question: "The weather in this region is highly __________, changing from sunny to rainy within minutes.",
        chinese_question: "这个地区的天气高度 __________，在几分钟内从晴天变成雨天。",
        answers: [
            { option: "A", answer: "constant", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "B", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "C", answer: "variable", chinese_answer: "多变的", chinese_romanization: "duōbiàn de" },
            { option: "D", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'variable' means not consistent or having a fixed pattern; liable to change." +
            "<br><br>" +
            "(A) 'constant' means occurring continuously over a period of time." +
            "<br><br>" +
            "(B) 'stable' means not likely to change or fail; firmly established." +
            "<br><br>" +
            "(D) 'predictable' means something that can be easily guessed or known in advance.",
        chinese_explanation: "(C) '多变的' 一词意味着不一致或没有固定模式的；容易变化的。" +
            "<br><br>" +
            "(A) '稳定的' 意味着在一段时间内持续发生的。" +
            "<br><br>" +
            "(B) '稳定的' 意味着不容易改变或失败的；牢固建立的。" +
            "<br><br>" +
            "(D) '可预测的' 意味着可以轻易猜到或事先知道的事物。"
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
