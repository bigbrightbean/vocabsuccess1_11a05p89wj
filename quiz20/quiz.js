// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
            id: 1,
        question: "The __________ smell of garlic filled the kitchen as she prepared dinner.",
        chinese_question: "当她准备晚餐时，厨房里充满了__________的大蒜味。",
        answers: [
            { option: "A", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "B", answer: "pungent", chinese_answer: "刺鼻的", chinese_romanization: "cìbí de" },
            { option: "C", answer: "bland", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" },
            { option: "D", answer: "sweet", chinese_answer: "甜的", chinese_romanization: "tián de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pungent' means having a sharply strong taste or smell." +
            "<br><br>" +
            "(A) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(C) 'bland' means lacking strong features or characteristics and therefore uninteresting." +
            "<br><br>" +
            "(D) 'sweet' means having the pleasant taste characteristic of sugar or honey; not salty, sour, or bitter.",
        chinese_explanation: "(B) '刺鼻的' 一词意味着具有强烈的味道或气味。" +
            "<br><br>" +
            "(A) '温和的' 意味着不严重、不严厉。" +
            "<br><br>" +
            "(C) '平淡的' 意味着没有强烈的特征或特点，因此不有趣。" +
            "<br><br>" +
            "(D) '甜的' 意味着具有糖或蜂蜜的愉快味道；不咸、不酸或不苦。"
    },
    {
        id: 2,
        question: "The artist's use of __________ colors brought the painting to life, making it an eye-catching centerpiece in the gallery.",
        chinese_question: "艺术家使用 __________ 的颜色使这幅画栩栩如生，使其成为画廊中引人注目的中心。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "暗淡的", chinese_romanization: "àndàn de" },
            { option: "B", answer: "muted", chinese_answer: "柔和的", chinese_romanization: "róuhé de" },
            { option: "C", answer: "vibrant", chinese_answer: "鲜艳的", chinese_romanization: "xiānyàn de" },
            { option: "D", answer: "pale", chinese_answer: "苍白的", chinese_romanization: "cāngbái de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vibrant' means full of energy and life; bright and striking." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(B) 'muted' means (of a sound or voice) quiet and soft." +
            "<br><br>" +
            "(D) 'pale' means light in color or having little color.",
        chinese_explanation: "(C) '鲜艳的' 意味着充满能量和生命；明亮而引人注目的。" +
            "<br><br>" +
            "(A) '暗淡的' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(B) '柔和的' 意味着（声音）安静柔和。" +
            "<br><br>" +
            "(D) '苍白的' 意味着颜色浅或颜色少的。"
    },
    {
        id: 3,
        question: "The scientist found the new data __________, as it contradicted all previous theories and required a complete re-evaluation of their understanding.",
        chinese_question: "科学家发现新的数据令人 __________，因为它与所有先前的理论相矛盾，需要对他们的理解进行彻底的重新评估。",
        answers: [
            { option: "A", answer: "perplexing", chinese_answer: "令人困惑的", chinese_romanization: "lìng rén kùnhuò de" },
            { option: "B", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
            { option: "C", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "D", answer: "straightforward", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'perplexing' means completely baffling; very puzzling." +
            "<br><br>" +
            "(B) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
            "<br><br>" +
            "(C) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(D) 'straightforward' means uncomplicated and easy to understand or do.",
        chinese_explanation: "(A) '令人困惑的' 意味着完全令人困惑的；非常令人费解的。" +
            "<br><br>" +
            "(B) '明显的' 意味着容易察觉或理解的；清晰的、不言自明的或显然的。" +
            "<br><br>" +
            "(C) '清晰的' 意味着容易察觉、理解或解释的。" +
            "<br><br>" +
            "(D) '简单的' 意味着不复杂和容易理解或完成的。"
    },
    {
        id: 4,
        question: "His __________ disregard for the rules got him into trouble with the authorities.",
        chinese_question: "他 __________ 地无视规则，惹恼了当局。",
        answers: [
            { option: "A", answer: "subtle", chinese_answer: "微妙", chinese_romanization: "wēimiào" },
            { option: "B", answer: "hidden", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "C", answer: "blatant", chinese_answer: "明目张胆", chinese_romanization: "míngmùzhāngdǎn" },
            { option: "D", answer: "secret", chinese_answer: "秘密", chinese_romanization: "mìmì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'blatant' means (of bad behavior) done openly and unashamedly." +
            "<br><br>" +
            "(A) 'subtle' means so delicate or precise as to be difficult to analyze or describe." +
            "<br><br>" +
            "(B) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(D) 'secret' means not known or seen or not meant to be known or seen by others.",
        chinese_explanation: "(C) '明目张胆' 意味着（不良行为）公开且无耻地进行。" +
            "<br><br>" +
            "(A) '微妙' 意味着如此精细或精确以至于难以分析或描述。" +
            "<br><br>" +
            "(B) '隐藏' 意味着藏匿视线；隐藏。" +
            "<br><br>" +
            "(D) '秘密' 意味着未被知道或看到，或不打算让其他人知道或看到的。"
    },
    {
        id: 5,
        question: "The __________ doctor quickly diagnosed the problem and prescribed the correct treatment.",
        chinese_question: "这位 __________ 的医生迅速诊断出问题并开出了正确的治疗方案。",
        answers: [
            { option: "A", answer: "incompetent", chinese_answer: "无能", chinese_romanization: "wúnéng" },
            { option: "B", answer: "unskilled", chinese_answer: "无技能", chinese_romanization: "wú jìnéng" },
            { option: "C", answer: "inexperienced", chinese_answer: "没有经验", chinese_romanization: "méiyǒu jīngyàn" },
            { option: "D", answer: "competent", chinese_answer: "能干", chinese_romanization: "nénggàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'competent' means having the necessary ability, knowledge, or skill to do something successfully." +
            "<br><br>" +
            "(A) 'incompetent' means not having or showing the necessary skills to do something successfully." +
            "<br><br>" +
            "(B) 'unskilled' means not having or requiring special skill or training." +
            "<br><br>" +
            "(C) 'inexperienced' means lacking experience.",
        chinese_explanation: "(D) '能干' 意味着拥有成功完成某事所需的能力、知识或技能。" +
            "<br><br>" +
            "(A) '无能' 意味着没有或表现出完成某事成功所需的技能。" +
            "<br><br>" +
            "(B) '无技能' 意味着没有或不需要特殊技能或培训。" +
            "<br><br>" +
            "(C) '没有经验' 意味着缺乏经验。"
    },
    {
        id: 6,
        question: "Despite his vast wealth, he was known for his __________ habits, rarely spending money on anything other than the bare essentials.",
        chinese_question: "尽管他非常富有，但他以 __________ 的习惯而闻名，几乎只在基本必需品上花钱。",
        answers: [
            { option: "A", answer: "miserly", chinese_answer: "吝啬的", chinese_romanization: "lìnsè de" },
            { option: "B", answer: "generous", chinese_answer: "慷慨的", chinese_romanization: "kāngkǎi de" },
            { option: "C", answer: "extravagant", chinese_answer: "奢侈的", chinese_romanization: "shēchǐ de" },
            { option: "D", answer: "lavish", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'miserly' means relating to or characteristic of a miser; excessively cheap with money." +
            "<br><br>" +
            "(B) 'generous' means showing a readiness to give more of something, especially money, than is strictly necessary or expected." +
            "<br><br>" +
            "(C) 'extravagant' means lacking restraint in spending money or using resources." +
            "<br><br>" +
            "(D) 'lavish' means sumptuously rich, elaborate, or luxurious.",
        chinese_explanation: "(A) '吝啬的' 意味着与吝啬鬼有关的或具有吝啬鬼特征的；在花钱方面过于节俭的。" +
            "<br><br>" +
            "(B) '慷慨的' 意味着准备好给予更多的东西，特别是金钱，超过严格必要或期望的。" +
            "<br><br>" +
            "(C) '奢侈的' 意味着在花钱或使用资源方面缺乏克制的。" +
            "<br><br>" +
            "(D) '奢华的' 意味着极其富裕、精致或豪华的。"
    },
    {
        id: 7,
        question: "The project was divided into __________ tasks, making it easier for the team to handle.",
        chinese_question: "项目被分解为 __________ 的任务，使团队更容易处理。",
        answers: [
            { option: "A", answer: "overwhelming", chinese_answer: "压倒性", chinese_romanization: "yādǎoxìng" },
            { option: "B", answer: "chaotic", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "C", answer: "manageable", chinese_answer: "可管理", chinese_romanization: "kě guǎnlǐ" },
            { option: "D", answer: "complex", chinese_answer: "复杂", chinese_romanization: "fùzá" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'manageable' means able to be controlled or dealt with without difficulty." +
            "<br><br>" +
            "(A) 'overwhelming' means very great in amount; very strong." +
            "<br><br>" +
            "(B) 'chaotic' means in a state of complete confusion and disorder." +
            "<br><br>" +
            "(D) 'complex' means consisting of many different and connected parts.",
        chinese_explanation: "(C) '可管理' 意味着能够被控制或处理而没有困难。" +
            "<br><br>" +
            "(A) '压倒性' 意味着数量非常大；非常强烈。" +
            "<br><br>" +
            "(B) '混乱' 意味着处于完全混乱和无序的状态。" +
            "<br><br>" +
            "(D) '复杂' 意味着由许多不同和相连的部分组成的。"
    },
    {
        id: 8,
        question: "She felt __________ before her big presentation, worried about making a good impression.",
        chinese_question: "在重要的演讲前，她感到 __________，担心给人留下好印象。",
        answers: [
            { option: "A", answer: "anxious", chinese_answer: "焦虑", chinese_romanization: "jiāolǜ" },
            { option: "B", answer: "confident", chinese_answer: "自信", chinese_romanization: "zìxìn" },
            { option: "C", answer: "relaxed", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'anxious' means experiencing worry, unease, or nervousness." +
            "<br><br>" +
            "(B) 'confident' means feeling or showing certainty about something." +
            "<br><br>" +
            "(C) 'relaxed' means free from tension and anxiety." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy.",
        chinese_explanation: "(A) '焦虑' 意味着感到担心、不安或紧张。" +
            "<br><br>" +
            "(B) '自信' 意味着对某事感到确定或展示确定。" +
            "<br><br>" +
            "(C) '放松' 意味着没有紧张和焦虑。" +
            "<br><br>" +
            "(D) '冷漠' 意味着没有特别的兴趣或同情。"
    },
    {
        id: 9,
        question: "The author lived a __________ life in the countryside, rarely interacting with others and focusing solely on his writing.",
        chinese_question: "这位作家在乡下过着 __________ 的生活，很少与人交往，专注于写作。",
        answers: [
            { option: "A", answer: "reclusive", chinese_answer: "隐居的", chinese_romanization: "yǐnjū de" },
            { option: "B", answer: "sociable", chinese_answer: "好交际的", chinese_romanization: "hào jiāojì de" },
            { option: "C", answer: "outgoing", chinese_answer: "外向的", chinese_romanization: "wàixiàng de" },
            { option: "D", answer: "gregarious", chinese_answer: "合群的", chinese_romanization: "héqún de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reclusive' means avoiding the company of other people; solitary." +
            "<br><br>" +
            "(B) 'sociable' means willing to talk and engage in activities with other people; friendly." +
            "<br><br>" +
            "(C) 'outgoing' means friendly and socially confident." +
            "<br><br>" +
            "(D) 'gregarious' means fond of company; sociable.",
        chinese_explanation: "(A) '隐居的' 意味着避免与他人接触的；独处的。" +
            "<br><br>" +
            "(B) '好交际的' 意味着愿意与他人交谈并参与活动的；友好的。" +
            "<br><br>" +
            "(C) '外向的' 意味着友好和社交自信的。" +
            "<br><br>" +
            "(D) '合群的' 意味着喜欢陪伴的；善于社交的。"
    },
    {
        id: 10,
        question: "She always wore __________ socks, never matching pairs, which made her stand out in the crowd.",
        chinese_question: "她总是穿着 __________ 的袜子，从来不配对，这使她在人群中显得与众不同。",
        answers: [
            { option: "A", answer: "odd", chinese_answer: "奇怪的", chinese_romanization: "qíguài de" },
            { option: "B", answer: "matching", chinese_answer: "配对的", chinese_romanization: "pèiduì de" },
            { option: "C", answer: "regular", chinese_answer: "规则的", chinese_romanization: "guīzé de" },
            { option: "D", answer: "uniform", chinese_answer: "统一的", chinese_romanization: "tǒngyī de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'odd' means different from what is usual or expected; strange." +
            "<br><br>" +
            "(B) 'matching' means corresponding in pattern, color, or design." +
            "<br><br>" +
            "(C) 'regular' means arranged in or constituting a constant or definite pattern, especially with the same space between individual instances." +
            "<br><br>" +
            "(D) 'uniform' means not changing in form or character; remaining the same in all cases and at all times.",
        chinese_explanation: "(A) '奇怪的' 意味着不同于通常或预期的；奇怪的。" +
            "<br><br>" +
            "(B) '配对的' 意味着在图案、颜色或设计上相对应的。" +
            "<br><br>" +
            "(C) '规则的' 意味着安排或构成一个恒定或明确的模式，尤其是在各个实例之间有相同的间距。" +
            "<br><br>" +
            "(D) '统一的' 意味着在所有情况下和所有时间都保持不变的。"
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
