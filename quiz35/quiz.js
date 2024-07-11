// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ talent for painting was discovered only when she joined the art class.",
        chinese_question: "她对绘画的__________天赋只有在她参加艺术课时才被发现。",
        answers: [
            { option: "A", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
            { option: "B", answer: "latent", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
            { option: "C", answer: "manifest", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
            { option: "D", answer: "evident", chinese_answer: "显而易见的", chinese_romanization: "xiǎn'éryìjiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'latent' means existing but not yet developed or manifest; hidden or concealed." +
            "<br><br>" +
            "(A) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
            "<br><br>" +
            "(C) 'manifest' means clear or obvious to the eye or mind." +
            "<br><br>" +
            "(D) 'evident' means plain or obvious; clearly seen or understood.",
        chinese_explanation: "(B) '隐藏的'一词意味着存在但尚未开发或表现出来的；隐藏的或隐蔽的。" +
            "<br><br>" +
            "(A) '明显的' 意味着容易察觉或理解的；清晰的、自明的或显而易见的。" +
            "<br><br>" +
            "(C) '明显的' 意味着对眼睛或头脑来说清楚的或显而易见的。" +
            "<br><br>" +
            "(D) '显而易见的' 意味着显然的或显而易见的。"
    },
    {
        id: 2,
        question: "The __________ city stretched for miles in every direction, with neighborhoods, parks, and businesses spread out over a vast area.",
        chinese_question: "这座 __________ 的城市向四面八方延伸，社区、公园和商业区分布在广阔的区域。",
        answers: [
            { option: "A", answer: "compact", chinese_answer: "紧凑的", chinese_romanization: "jǐncòu de" },
            { option: "B", answer: "tiny", chinese_answer: "微小的", chinese_romanization: "wēixiǎo de" },
            { option: "C", answer: "contained", chinese_answer: "受限制的", chinese_romanization: "shòu xiànzhì de" },
            { option: "D", answer: "sprawling", chinese_answer: "蔓延的", chinese_romanization: "mànyán de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'sprawling' means spreading out over a large area in an untidy or irregular way." +
            "<br><br>" +
            "(A) 'compact' means closely and neatly packed together." +
            "<br><br>" +
            "(B) 'tiny' means very small." +
            "<br><br>" +
            "(C) 'contained' means kept within certain limits.",
        chinese_explanation: "(D) '蔓延的' 意味着在大面积上散开，呈现杂乱或不规则的方式。" +
            "<br><br>" +
            "(A) '紧凑的' 意味着紧密整齐地堆放在一起。" +
            "<br><br>" +
            "(B) '微小的' 意味着非常小。" +
            "<br><br>" +
            "(C) '受限制的' 意味着保持在一定限度内。"
    },
    {
        id: 3,
        question: "His __________ plan to travel the world on a bicycle was admirable but highly impractical.",
        chinese_question: "他 __________ 的骑自行车环游世界的计划令人钦佩，但非常不切实际。",
        answers: [
            { option: "A", answer: "realistic", chinese_answer: "现实的", chinese_romanization: "xiànshí de" },
            { option: "B", answer: "quixotic", chinese_answer: "不切实际的", chinese_romanization: "bù qiè shíjì de" },
            { option: "C", answer: "pragmatic", chinese_answer: "务实的", chinese_romanization: "wùshí de" },
            { option: "D", answer: "feasible", chinese_answer: "可行的", chinese_romanization: "kěxíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'quixotic' means exceedingly idealistic; unrealistic and impractical." +
            "<br><br>" +
            "(A) 'realistic' means having or showing a sensible and practical idea of what can be achieved or expected." +
            "<br><br>" +
            "(C) 'pragmatic' means dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations." +
            "<br><br>" +
            "(D) 'feasible' means possible to do easily or conveniently.",
        chinese_explanation: "(B) '不切实际的' 意味着极度理想主义的；不现实和不切实际的。" +
            "<br><br>" +
            "(A) '现实的' 意味着有或表现出对可以实现或期望的事情的明智和实际的想法。" +
            "<br><br>" +
            "(C) '务实的' 意味着以实际而不是理论上的考虑方式处理事情的。" +
            "<br><br>" +
            "(D) '可行的' 意味着可以轻松或方便地完成的。"
    },
    {
        id: 4,
        question: "She felt __________ to have such supportive friends and family.",
        chinese_question: "她感到很 __________，有这样支持她的朋友和家人。",
        answers: [
            { option: "A", answer: "fortunate", chinese_answer: "幸运的", chinese_romanization: "xìngyùn de" },
            { option: "B", answer: "unlucky", chinese_answer: "不幸的", chinese_romanization: "bùxìng de" },
            { option: "C", answer: "doubtful", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
            { option: "D", answer: "hopeless", chinese_answer: "绝望的", chinese_romanization: "juéwàng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fortunate' means favored by or involving good luck or fortune; lucky." +
            "<br><br>" +
            "(B) 'unlucky' means having, bringing, or resulting from bad luck." +
            "<br><br>" +
            "(C) 'doubtful' means feeling uncertain about something." +
            "<br><br>" +
            "(D) 'hopeless' means feeling or causing despair about something.",
        chinese_explanation: "(A) '幸运的' 意味着有好运或涉及好运的；幸运的。" +
            "<br><br>" +
            "(B) '不幸的' 意味着有、不利于或导致坏运气的。" +
            "<br><br>" +
            "(C) '怀疑的' 意味着对某事感到不确定。" +
            "<br><br>" +
            "(D) '绝望的' 意味着对某事感到绝望。"
    },
    {
        id: 5,
    question: "She was very __________, always finding ways to save money on everyday expenses.",
    chinese_question: "她非常 __________，总是想办法在日常开销上省钱。",
    answers: [
        { option: "A", answer: "thrifty", chinese_answer: "节俭的", chinese_romanization: "jiéjiǎn de" },
        { option: "B", answer: "wasteful", chinese_answer: "浪费的", chinese_romanization: "làngfèi de" },
        { option: "C", answer: "extravagant", chinese_answer: "奢侈的", chinese_romanization: "shēchǐ de" },
        { option: "D", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'thrifty' means using money and other resources carefully and not wastefully." +
        "<br><br>" +
        "(B) 'wasteful' means using or expending something of value carelessly, extravagantly, or to no purpose." +
        "<br><br>" +
        "(C) 'extravagant' means lacking restraint in spending money or using resources." +
        "<br><br>" +
        "(D) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
    chinese_explanation: "(A) '节俭的' 意味着小心且不浪费地使用金钱和其他资源。" +
        "<br><br>" +
        "(B) '浪费的' 意味着随意、奢侈或无目的地使用有价值的东西。" +
        "<br><br>" +
        "(C) '奢侈的' 意味着在花钱或使用资源上缺乏节制的。" +
        "<br><br>" +
        "(D) '粗心的' 意味着没有给予足够的注意或考虑以避免伤害或错误。"
    },
    {
        id: 6,
        question: "The __________ smell of garlic filled the kitchen as she prepared the meal.",
        chinese_question: "当她准备饭菜时，__________的蒜味充满了厨房。",
        answers: [
            { option: "A", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "B", answer: "bland", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" },
            { option: "C", answer: "pungent", chinese_answer: "刺鼻的", chinese_romanization: "cìbí de" },
            { option: "D", answer: "faint", chinese_answer: "微弱的", chinese_romanization: "wéiruò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pungent' means having a sharply strong taste or smell." +
            "<br><br>" +
            "(A) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(B) 'bland' means lacking strong features or characteristics and therefore uninteresting." +
            "<br><br>" +
            "(D) 'faint' means barely perceptible.",
        chinese_explanation: "(C) '刺鼻的'一词意味着具有强烈的味道或气味。" +
            "<br><br>" +
            "(A) '温和的' 意味着不严重、不严厉的。" +
            "<br><br>" +
            "(B) '平淡的' 意味着缺乏强烈特征或特点的，因此乏味的。" +
            "<br><br>" +
            "(D) '微弱的' 意味着几乎察觉不到的。"
},
    {
        id: 7,
        question: "The detective found the suspect's alibi __________, as it accounted for his whereabouts during the time of the crime and was supported by several witnesses.",
        chinese_question: "侦探发现嫌疑人的不在场证明很 __________，因为它解释了他在犯罪期间的行踪，并得到了几位证人的支持。",
        answers: [
            { option: "A", answer: "plausible", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
            { option: "B", answer: "implausible", chinese_answer: "不合理的", chinese_romanization: "bù hélǐ de" },
            { option: "C", answer: "unlikely", chinese_answer: "不太可能的", chinese_romanization: "bù tài kěnéng de" },
            { option: "D", answer: "dubious", chinese_answer: "可疑的", chinese_romanization: "kěyí de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'plausible' means seeming reasonable or probable." +
            "<br><br>" +
            "(B) 'implausible' means not seeming reasonable or probable." +
            "<br><br>" +
            "(C) 'unlikely' means not likely to happen, be done, or be true." +
            "<br><br>" +
            "(D) 'dubious' means hesitating or doubting.",
        chinese_explanation: "(A) '合理的' 意味着看起来合理或可能的。" +
            "<br><br>" +
            "(B) '不合理的' 意味着看起来不合理或不可能的。" +
            "<br><br>" +
            "(C) '不太可能的' 意味着不太可能发生、完成或真实的。" +
            "<br><br>" +
            "(D) '可疑的' 意味着犹豫或怀疑的。"
    },
    {
        id: 8,
        question: "Attendance at the meeting was __________ for all employees, with no exceptions allowed.",
        chinese_question: "所有员工都必须参加会议，不允许有任何例外，出席是 __________ 的。",
        answers: [
            { option: "A", answer: "discretionary", chinese_answer: "自主", chinese_romanization: "zìzhǔ" },
            { option: "B", answer: "optional", chinese_answer: "可选", chinese_romanization: "kě xuǎn" },
            { option: "C", answer: "mandatory", chinese_answer: "强制", chinese_romanization: "qiángzhì" },
            { option: "D", answer: "flexible", chinese_answer: "灵活", chinese_romanization: "línghuó" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mandatory' means required by law or rules; compulsory." +
            "<br><br>" +
            "(A) 'discretionary' means left to individual choice or judgment." +
            "<br><br>" +
            "(B) 'optional' means available to be chosen but not obligatory." +
            "<br><br>" +
            "(D) 'flexible' means capable of bending easily without breaking.",
        chinese_explanation: "(C) '强制' 意味着依法或根据规则要求的；强制性的。" +
            "<br><br>" +
            "(A) '自主' 意味着留给个人选择或判断的。" +
            "<br><br>" +
            "(B) '可选' 意味着可以选择但不是强制性的。" +
            "<br><br>" +
            "(D) '灵活' 意味着能够在不破坏的情况下轻松弯曲。"
    },
    {
        id: 9,
        question: "He walked into the room with a __________ stride, full of confidence and energy.",
        chinese_question: "他以__________的步伐走进房间，充满了自信和活力。",
        answers: [
            { option: "A", answer: "lethargic", chinese_answer: "昏睡的", chinese_romanization: "hūnshuì de" },
            { option: "B", answer: "sluggish", chinese_answer: "迟缓的", chinese_romanization: "chíhuǎn de" },
            { option: "C", answer: "jaunty", chinese_answer: "轻快的", chinese_romanization: "qīngkuài de" },
            { option: "D", answer: "tired", chinese_answer: "疲倦的", chinese_romanization: "píjuàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'jaunty' means having or expressing a lively, cheerful, and self-confident manner." +
            "<br><br>" +
            "(A) 'lethargic' means affected by lethargy; sluggish and apathetic." +
            "<br><br>" +
            "(B) 'sluggish' means slow-moving or inactive." +
            "<br><br>" +
            "(D) 'tired' means in need of sleep or rest; weary.",
        chinese_explanation: "(C) '轻快的'一词意味着有或表现出活泼、愉快和自信的态度。" +
            "<br><br>" +
            "(A) '昏睡的' 意味着受昏睡影响的；迟钝和冷漠的。" +
            "<br><br>" +
            "(B) '迟缓的' 意味着行动缓慢或不活跃的。" +
            "<br><br>" +
            "(D) '疲倦的' 意味着需要睡眠或休息的；疲倦的。"
    },
    {
        id: 10,
        question: "The comedian's __________ jokes about sacred topics offended many people.",
        chinese_question: "喜剧演员对神圣话题的 __________ 笑话冒犯了许多人。",
        answers: [
            { option: "A", answer: "respectful", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" },
            { option: "B", answer: "reverent", chinese_answer: "敬畏", chinese_romanization: "jìngwèi" },
            { option: "C", answer: "irreverent", chinese_answer: "不敬", chinese_romanization: "bùjìng" },
            { option: "D", answer: "serious", chinese_answer: "严肃", chinese_romanization: "yánsù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'irreverent' means showing a lack of respect for people or things that are generally taken seriously." +
            "<br><br>" +
            "(A) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(B) 'reverent' means feeling or showing deep and solemn respect." +
            "<br><br>" +
            "(D) 'serious' means solemn or thoughtful in character or manner.",
        chinese_explanation: "(C) '不敬' 意味着对一般被认真对待的人或事物表现出缺乏尊重。" +
            "<br><br>" +
            "(A) '尊敬' 意味着感到或表现出敬意和尊重。" +
            "<br><br>" +
            "(B) '敬畏' 意味着感到或表现出深切和庄重的敬意。" +
            "<br><br>" +
            "(D) '严肃' 意味着性格或举止庄重或深思。"
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
