// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The city was extremely __________, with millions of people living in a relatively small area.",
        chinese_question: "这个城市非常 __________，有数百万人生活在相对较小的区域内。",
        answers: [
            { option: "A", answer: "deserted", chinese_answer: "荒芜的", chinese_romanization: "huāngwú de" },
            { option: "B", answer: "populous", chinese_answer: "人口众多的", chinese_romanization: "rénkǒu zhòngduō de" },
            { option: "C", answer: "sparse", chinese_answer: "稀疏的", chinese_romanization: "xīshū de" },
            { option: "D", answer: "uninhabited", chinese_answer: "无人居住的", chinese_romanization: "wú rén jūzhù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'populous' means having a large population; densely populated." +
            "<br><br>" +
            "(A) 'deserted' means empty of people." +
            "<br><br>" +
            "(C) 'sparse' means thinly dispersed or scattered." +
            "<br><br>" +
            "(D) 'uninhabited' means not lived in; having no residents.",
        chinese_explanation: "(B) '人口众多的' 意味着人口众多的；人口稠密的。" +
            "<br><br>" +
            "(A) '荒芜的' 意味着没有人的。" +
            "<br><br>" +
            "(C) '稀疏的' 意味着稀疏或分散的。" +
            "<br><br>" +
            "(D) '无人居住的' 意味着没有居民的。"
    },
    {
        id: 2,
        question: "The villain's __________ actions shocked the community, leading to calls for his immediate arrest.",
        chinese_question: "反派的 __________ 行为震惊了社区，引发了对其立即逮捕的呼声。",
        answers: [
            { option: "A", answer: "honourable", chinese_answer: "光荣的", chinese_romanization: "guāngróng de" },
            { option: "B", answer: "despicable", chinese_answer: "卑鄙的", chinese_romanization: "bēibǐ de" },
            { option: "C", answer: "admirable", chinese_answer: "令人钦佩的", chinese_romanization: "lìngrén qīnpèi de" },
            { option: "D", answer: "praiseworthy", chinese_answer: "值得赞扬的", chinese_romanization: "zhíde zànyáng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'despicable' means deserving hatred and contempt." +
            "<br><br>" +
            "(A) 'honourable' means bringing or worthy of honor." +
            "<br><br>" +
            "(C) 'admirable' means arousing or deserving respect and approval." +
            "<br><br>" +
            "(D) 'praiseworthy' means deserving approval and admiration.",
        chinese_explanation: "(B) '卑鄙的' 一词意味着应受憎恨和蔑视的。" +
            "<br><br>" +
            "(A) '光荣的' 意味着带来或值得荣誉的。" +
            "<br><br>" +
            "(C) '令人钦佩的' 意味着引起或值得尊重和赞赏的。" +
            "<br><br>" +
            "(D) '值得赞扬的' 意味着值得认可和赞赏的。"
    },
    {
        id: 3,
        question: "The dark clouds gathering on the horizon looked __________, signaling an approaching storm.",
        chinese_question: "地平线上聚集的乌云看起来很__________，预示着一场暴风雨的到来。",
        answers: [
            { option: "A", answer: "reassuring", chinese_answer: "令人放心的", chinese_romanization: "lìng rén fàngxīn de" },
            { option: "B", answer: "comforting", chinese_answer: "令人安慰的", chinese_romanization: "lìng rén ānwèi de" },
            { option: "C", answer: "ominous", chinese_answer: "不祥的", chinese_romanization: "bùxiáng de" },
            { option: "D", answer: "promising", chinese_answer: "有希望的", chinese_romanization: "yǒu xīwàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ominous' means giving the impression that something bad or unpleasant is going to happen; threatening; inauspicious." +
            "<br><br>" +
            "(A) 'reassuring' means serving or intended to remove someone's doubts or fears." +
            "<br><br>" +
            "(B) 'comforting' means serving to alleviate a person's feelings of grief or distress." +
            "<br><br>" +
            "(D) 'promising' means showing signs of future success.",
        chinese_explanation: "(C) '不祥的' 一词意味着给人一种不好的或不愉快的事情即将发生的印象；威胁的；不吉利的。" +
            "<br><br>" +
            "(A) '令人放心的' 意味着旨在或意在消除某人的疑虑或恐惧的。" +
            "<br><br>" +
            "(B) '令人安慰的' 意味着用于减轻一个人的悲伤或痛苦的感情的。" +
            "<br><br>" +
            "(D) '有希望的' 意味着显示未来成功的迹象的。"
    },
    {
        id: 4,
        question: "The __________ customer demanded to speak to the manager after receiving poor service at the restaurant.",
        chinese_question: "那位 __________ 的顾客在餐厅受到糟糕服务后，要求与经理对话。",
        answers: [
            { option: "A", answer: "content", chinese_answer: "满意", chinese_romanization: "mǎnyì" },
            { option: "B", answer: "irate", chinese_answer: "愤怒", chinese_romanization: "fènnù" },
            { option: "C", answer: "satisfied", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
            { option: "D", answer: "delighted", chinese_answer: "高兴", chinese_romanization: "gāoxìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'irate' means feeling or characterized by great anger." +
            "<br><br>" +
            "(A) 'content' means in a state of peaceful happiness." +
            "<br><br>" +
            "(C) 'satisfied' means pleased or content with what has been received or experienced." +
            "<br><br>" +
            "(D) 'delighted' means feeling or showing great pleasure.",
        chinese_explanation: "(B) '愤怒' 一词意味着感到或表现出极大的愤怒。" +
            "<br><br>" +
            "(A) '满意' 意味着处于平静幸福的状态。" +
            "<br><br>" +
            "(C) '满足' 意味着对所收到或经历的事情感到高兴或满意。" +
            "<br><br>" +
            "(D) '高兴' 意味着感到或表现出极大的愉快。"
    },
    {
        id: 5,
        question: "The knight's __________ actions, protecting the village and aiding those in need, earned him the admiration of all.",
        chinese_question: "这位骑士 __________ 的行为，保护村庄并帮助有需要的人，赢得了所有人的钦佩。",
        answers: [
            { option: "A", answer: "chivalrous", chinese_answer: "彬彬有礼的", chinese_romanization: "bīnbīn yǒu lǐ de" },
            { option: "B", answer: "cowardly", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" },
            { option: "C", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" },
            { option: "D", answer: "deceitful", chinese_answer: "欺骗的", chinese_romanization: "qīpiàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chivalrous' means courteous and gallant, especially towards women." +
            "<br><br>" +
            "(B) 'cowardly' means lacking courage." +
            "<br><br>" +
            "(C) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
            "<br><br>" +
            "(D) 'deceitful' means guilty of or involving deceit; deceiving or misleading others.",
        chinese_explanation: "(A) '彬彬有礼的' 意味着礼貌和勇敢，特别是对女性。" +
            "<br><br>" +
            "(B) '胆小的' 意味着缺乏勇气的。" +
            "<br><br>" +
            "(C) '自私的' 意味着缺乏对他人的考虑；主要关心自己的个人利益或快乐。" +
            "<br><br>" +
            "(D) '欺骗的' 意味着涉及欺骗的；欺骗或误导他人的。"
    },
    {
        id: 6,
        question: "The view of the mountains was __________ due to the thick fog.",
        chinese_question: "由于浓雾，山景显得__________。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "B", answer: "sharp", chinese_answer: "锋利的", chinese_romanization: "fēnglì de" },
            { option: "C", answer: "hazy", chinese_answer: "朦胧的", chinese_romanization: "ménglóng de" },
            { option: "D", answer: "vivid", chinese_answer: "生动的", chinese_romanization: "shēngdòng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hazy' means covered by a haze; unclear or cloudy." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'sharp' means having an edge or point that is able to cut or pierce something." +
            "<br><br>" +
            "(D) 'vivid' means producing powerful feelings or strong, clear images in the mind.",
        chinese_explanation: "(C) '朦胧的'一词意味着被薄雾覆盖的；不清楚或模糊的。" +
            "<br><br>" +
            "(A) '清晰的' 意味着容易感知、理解或解释。" +
            "<br><br>" +
            "(B) '锋利的' 意味着有一个能够切割或刺穿某物的边缘或尖点。" +
            "<br><br>" +
            "(D) '生动的' 意味着在脑海中产生强烈感觉或清晰、强烈的图像。"
},
    {
        id: 7,
        question: "The mountain's __________ peak was shrouded in clouds, inspiring awe in all who saw it.",
        chinese_question: "山的 __________ 山峰被云雾笼罩，激发了所有看到它的人的敬畏之情。",
        answers: [
            { option: "A", answer: "low", chinese_answer: "低", chinese_romanization: "dī" },
            { option: "B", answer: "lofty", chinese_answer: "高耸", chinese_romanization: "gāosǒng" },
            { option: "C", answer: "flat", chinese_answer: "平坦", chinese_romanization: "píngtǎn" },
            { option: "D", answer: "tiny", chinese_answer: "微小", chinese_romanization: "wēixiǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'lofty' means of imposing height." +
            "<br><br>" +
            "(A) 'low' means situated not far above the ground." +
            "<br><br>" +
            "(C) 'flat' means having a level surface; without raised areas or indentations." +
            "<br><br>" +
            "(D) 'tiny' means very small.",
        chinese_explanation: "(B) '高耸' 意味着高耸的高度。" +
            "<br><br>" +
            "(A) '低' 意味着离地面不远。" +
            "<br><br>" +
            "(C) '平坦' 意味着有一个平坦的表面；没有凸起或凹陷。" +
            "<br><br>" +
            "(D) '微小' 意味着非常小。"
    },
    {
        id: 8,
        question: "He showed a __________ attitude towards his responsibilities, handling them with care and diligence.",
        chinese_question: "他对自己的责任表现出 __________ 的态度，细心而勤勉地处理它们。",
        answers: [
            { option: "A", answer: "childish", chinese_answer: "幼稚的", chinese_romanization: "yòuzhì de" },
            { option: "B", answer: "immature", chinese_answer: "不成熟的", chinese_romanization: "bù chéngshú de" },
            { option: "C", answer: "mature", chinese_answer: "成熟的", chinese_romanization: "chéngshú de" },
            { option: "D", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mature' means having or showing the mental and emotional qualities of an adult." +
            "<br><br>" +
            "(A) 'childish' means of, like, or appropriate to a child." +
            "<br><br>" +
            "(B) 'immature' means not fully developed or grown." +
            "<br><br>" +
            "(D) 'reckless' means without thinking or caring about the consequences of an action.",
        chinese_explanation: "(C) '成熟的' 意味着具有或表现出成人的精神和情感素质。" +
            "<br><br>" +
            "(A) '幼稚的' 意味着像或适合于孩子。" +
            "<br><br>" +
            "(B) '不成熟的' 意味着未完全发育或成长。" +
            "<br><br>" +
            "(D) '鲁莽的' 意味着不考虑或不关心行动的后果。"
    },
    {
        id: 9,
        question: "She was __________ in finding solutions to the unexpected problems that arose during the project.",
        chinese_question: "她在项目中遇到意外问题时表现得非常__________，找到了解决方案。",
        answers: [
            { option: "A", answer: "helpless", chinese_answer: "无助的", chinese_romanization: "wúzhù de" },
            { option: "B", answer: "inept", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "C", answer: "resourceful", chinese_answer: "足智多谋的", chinese_romanization: "zúzhì duōmóu de" },
            { option: "D", answer: "unprepared", chinese_answer: "未准备好的", chinese_romanization: "wèi zhǔnbèi hǎo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'resourceful' means having the ability to find quick and clever ways to overcome difficulties." +
            "<br><br>" +
            "(A) 'helpless' means unable to defend oneself or to act without help." +
            "<br><br>" +
            "(B) 'inept' means having or showing no skill; clumsy." +
            "<br><br>" +
            "(D) 'unprepared' means not ready or able to deal with something.",
        chinese_explanation: "(C) '足智多谋的'一词意味着能够快速和巧妙地克服困难的。" +
            "<br><br>" +
            "(A) '无助的' 意味着不能自卫或不能在没有帮助的情况下行动的。" +
            "<br><br>" +
            "(B) '笨拙的' 意味着没有或表现出没有技能的；笨拙的。" +
            "<br><br>" +
            "(D) '未准备好的' 意味着没有准备好或能够应对某事的。"
    },
    {
        id: 10,
        question: "Her __________ observations during the meeting impressed everyone, as she noticed details others missed.",
        chinese_question: "她在会议上的 __________ 观察给每个人留下了深刻的印象，因为她注意到了别人忽略的细节。",
        answers: [
            { option: "A", answer: "oblivious", chinese_answer: "无视的", chinese_romanization: "wúshì de" },
            { option: "B", answer: "perceptive", chinese_answer: "敏锐的", chinese_romanization: "mǐnruì de" },
            { option: "C", answer: "inattentive", chinese_answer: "不注意的", chinese_romanization: "bù zhùyì de" },
            { option: "D", answer: "ignorant", chinese_answer: "无知的", chinese_romanization: "wúzhī de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'perceptive' means having or showing sensitive insight." +
            "<br><br>" +
            "(A) 'oblivious' means not aware of or not concerned about what is happening around one." +
            "<br><br>" +
            "(C) 'inattentive' means not paying attention." +
            "<br><br>" +
            "(D) 'ignorant' means lacking knowledge or awareness in general.",
        chinese_explanation: "(B) '敏锐的' 意味着具有或表现出敏感的洞察力。" +
            "<br><br>" +
            "(A) '无视的' 意味着没有意识到或不关心周围发生的事情。" +
            "<br><br>" +
            "(C) '不注意的' 意味着不注意的。" +
            "<br><br>" +
            "(D) '无知的' 意味着缺乏一般知识或意识的。"
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
