// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The museum's new exhibit features __________ art from local artists, showcasing pieces that reflect modern society and current trends.",
        chinese_question: "博物馆的新展览展示了当地艺术家的__________艺术作品，展示了反映现代社会和当前趋势的作品。",
        answers: [
            { option: "A", answer: "ancient", chinese_answer: "古代的", chinese_romanization: "gǔdài de" },
            { option: "B", answer: "outdated", chinese_answer: "过时的", chinese_romanization: "guòshí de" },
            { option: "C", answer: "contemporary", chinese_answer: "当代的", chinese_romanization: "dāngdài de" },
            { option: "D", answer: "historic", chinese_answer: "历史的", chinese_romanization: "lìshǐ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'contemporary' means belonging to or occurring in the present." +
            "<br><br>" +
            "(A) 'ancient' means belonging to the very distant past and no longer in existence." +
            "<br><br>" +
            "(B) 'outdated' means no longer produced or used; out of date." +
            "<br><br>" +
            "(D) 'historic' means famous or important in history, or potentially so.",
        chinese_explanation: "(C) '当代的'一词意味着属于或发生在当下的。" +
            "<br><br>" +
            "(A) '古代的' 意味着属于非常遥远的过去且不再存在的。" +
            "<br><br>" +
            "(B) '过时的' 意味着不再生产或使用的；过时的。" +
            "<br><br>" +
            "(D) '历史的' 意味着在历史上著名或重要的，或可能如此的。"
    },
    {
        id: 2,
        question: "Her __________ approach to the negotiation helped both parties reach a satisfactory agreement.",
        chinese_question: "她在谈判中的 __________ 方法帮助双方达成了满意的协议。",
        answers: [
            { option: "A", answer: "blunt", chinese_answer: "直率", chinese_romanization: "zhíshuài" },
            { option: "B", answer: "aggressive", chinese_answer: "侵略性", chinese_romanization: "qīnlüè xìng" },
            { option: "C", answer: "diplomatic", chinese_answer: "外交", chinese_romanization: "wàijiāo" },
            { option: "D", answer: "hostile", chinese_answer: "敌对", chinese_romanization: "díduì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'diplomatic' means having or showing an ability to deal with people in a sensitive and effective way." +
            "<br><br>" +
            "(A) 'blunt' means uncompromisingly forthright." +
            "<br><br>" +
            "(B) 'aggressive' means ready or likely to attack or confront." +
            "<br><br>" +
            "(D) 'hostile' means unfriendly; antagonistic.",
        chinese_explanation: "(C) '外交' 意味着有或表现出以敏感和有效的方式处理人的能力。" +
            "<br><br>" +
            "(A) '直率' 意味着毫不妥协地直率。" +
            "<br><br>" +
            "(B) '侵略性' 意味着准备或可能攻击或对抗。" +
            "<br><br>" +
            "(D) '敌对' 意味着不友好；对抗性。"
    },
    {
        id: 3,
        question: "She made a __________ donation to the local shelter, helping them provide for those in need.",
        chinese_question: "她向当地避难所捐赠了一笔__________捐款，帮助他们为有需要的人提供帮助。",
        answers: [
            { option: "A", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" },
            { option: "B", answer: "stingy", chinese_answer: "吝啬的", chinese_romanization: "lìnsè de" },
            { option: "C", answer: "greedy", chinese_answer: "贪婪的", chinese_romanization: "tānlán de" },
            { option: "D", answer: "charitable", chinese_answer: "慈善的", chinese_romanization: "císhàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'charitable' means relating to the assistance of those in need." +
            "<br><br>" +
            "(A) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
            "<br><br>" +
            "(B) 'stingy' means unwilling to give or spend; ungenerous." +
            "<br><br>" +
            "(C) 'greedy' means having or showing an intense and selfish desire for something, especially wealth or power.",
        chinese_explanation: "(D) '慈善的'一词意味着与帮助有需要的人有关。" +
            "<br><br>" +
            "(A) '自私的' 意味着缺乏对他人的考虑；主要关心自己的个人利益或快乐。" +
            "<br><br>" +
            "(B) '吝啬的' 意味着不愿意给予或花费；不慷慨的。" +
            "<br><br>" +
            "(C) '贪婪的' 意味着对某物，尤其是财富或权力，表现出强烈和自私的欲望。"
    },
    {
        question: "The ambassador's arrival was greeted with a __________ reception, complete with a red carpet and a formal speech.",
        chinese_question: "大使的到来受到__________的接待，有红地毯和正式的演讲。",
        answers: [
            { option: "A", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "B", answer: "informal", chinese_answer: "非正式的", chinese_romanization: "fēi zhèngshì de" },
            { option: "C", answer: "ceremonious", chinese_answer: "庄重的", chinese_romanization: "zhuāngzhòng de" },
            { option: "D", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ceremonious' means relating or appropriate to grand and formal occasions." +
            "<br><br>" +
            "(A) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(B) 'informal' means having a relaxed, friendly, or unofficial style, manner, or nature." +
            "<br><br>" +
            "(D) 'relaxed' means free from tension and anxiety.",
        chinese_explanation: "(C) '庄重的'一词意味着与盛大和正式的场合有关或适合的。" +
            "<br><br>" +
            "(A) '随意的' 意味着放松和不关心的。" +
            "<br><br>" +
            "(B) '非正式的' 意味着具有放松、友好或非官方的风格、方式或性质。" +
            "<br><br>" +
            "(D) '放松的' 意味着没有紧张和焦虑。"
    },
    {
        id: 5,
        question: "She was a __________ student, always completing her assignments on time and with great care.",
        chinese_question: "她是一个__________的学生，总是按时并且非常认真地完成作业。",
        answers: [
            { option: "A", answer: "conscientious", chinese_answer: "认真的", chinese_romanization: "rènzhēn de" },
            { option: "B", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "C", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" },
            { option: "D", answer: "lazy", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'conscientious' means wishing to do one's work or duty well and thoroughly." +
            "<br><br>" +
            "(B) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(C) 'negligent' means failing to take proper care in doing something." +
            "<br><br>" +
            "(D) 'lazy' means unwilling to work or use energy.",
        chinese_explanation: "(A) '认真的'一词意味着希望做好并彻底地完成自己的工作或职责。" +
            "<br><br>" +
            "(B) '粗心的' 意味着没有给予足够的注意或考虑以避免伤害或错误。" +
            "<br><br>" +
            "(C) '疏忽的' 意味着未能适当地照顾某事。" +
            "<br><br>" +
            "(D) '懒惰的' 意味着不愿意工作或使用精力。"
    },
    {
        id: 6,
        question: "The new colleague was __________, quickly making friends with everyone in the office.",
        chinese_question: "新同事非常__________，很快与办公室里的每个人都成了朋友。",
        answers: [
            { option: "A", answer: "unfriendly", chinese_answer: "不友好的", chinese_romanization: "bù yǒuhǎo de" },
            { option: "B", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" },
            { option: "C", answer: "congenial", chinese_answer: "友善的", chinese_romanization: "yǒushàn de" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'congenial' means very friendly and easy to get along with." +
            "<br><br>" +
            "(A) 'unfriendly' means not friendly; hostile." +
            "<br><br>" +
            "(B) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '友善的'一词意味着非常友好且容易相处的。" +
            "<br><br>" +
            "(A) '不友好的' 意味着不友好的；敌对的。" +
            "<br><br>" +
            "(B) '敌对的' 意味着不友好的；对抗的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 7,
        question: "The office was __________ on the day of the big deadline, with papers and files everywhere.",
        chinese_question: "在重大截止日期那天，办公室一片__________，到处都是文件和资料。",
        answers: [
            { option: "A", answer: "chaotic", chinese_answer: "混乱的", chinese_romanization: "hùnluàn de" },
            { option: "B", answer: "orderly", chinese_answer: "有序的", chinese_romanization: "yǒuxù de" },
            { option: "C", answer: "organized", chinese_answer: "井然有序的", chinese_romanization: "jǐngrán yǒuxù de" },
            { option: "D", answer: "tidy", chinese_answer: "整洁的", chinese_romanization: "zhěngjié de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chaotic' means in a state of complete confusion and disorder." +
            "<br><br>" +
            "(B) 'orderly' means neatly and methodically arranged." +
            "<br><br>" +
            "(C) 'organized' means arranged in a systematic way, especially on a large scale." +
            "<br><br>" +
            "(D) 'tidy' means arranged neatly and in order.",
        chinese_explanation: "(A) '混乱的'一词意味着完全混乱和无序的状态。" +
            "<br><br>" +
            "(B) '有序的' 意味着整齐和有条理地排列。" +
            "<br><br>" +
            "(C) '井然有序的' 意味着以系统的方式安排，尤其是在大规模上。" +
            "<br><br>" +
            "(D) '整洁的' 意味着整齐和有秩序地排列。"
    },
    {
        id: 8,
        question: "His __________ smile and friendly demeanour made him popular among his peers.",
        chinese_question: "他那__________的微笑和友好的举止使他在同龄人中很受欢迎。",
        answers: [
            { option: "A", answer: "rude", chinese_answer: "粗鲁的", chinese_romanization: "cūlǔ de" },
            { option: "B", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" },
            { option: "C", answer: "unpleasant", chinese_answer: "令人不愉快的", chinese_romanization: "lìng rén bù yúkuài de" },
            { option: "D", answer: "charming", chinese_answer: "迷人的", chinese_romanization: "mí rén de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'charming' means pleasant or attractive." +
            "<br><br>" +
            "(A) 'rude' means offensively impolite or ill-mannered." +
            "<br><br>" +
            "(B) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(C) 'unpleasant' means causing discomfort, unhappiness, or revulsion; disagreeable.",
        chinese_explanation: "(D) '迷人的'一词意味着令人愉快或有吸引力的。" +
            "<br><br>" +
            "(A) '粗鲁的' 意味着冒犯性的不礼貌或没有礼貌的。" +
            "<br><br>" +
            "(B) '敌对的' 意味着不友好；敌对的。" +
            "<br><br>" +
            "(C) '令人不愉快的' 意味着引起不适、痛苦或反感的；令人不快的。"
    },
    {
        id: 9,
        question: "The __________ predictions about the storm prompted residents to evacuate immediately.",
        chinese_question: "关于风暴的 __________ 预测促使居民立即撤离。",
        answers: [
            { option: "A", answer: "reassuring", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
            { option: "B", answer: "hopeful", chinese_answer: "充满希望", chinese_romanization: "chōngmǎn xīwàng" },
            { option: "C", answer: "dire", chinese_answer: "可怕", chinese_romanization: "kěpà" },
            { option: "D", answer: "optimistic", chinese_answer: "乐观", chinese_romanization: "lèguān" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dire' means extremely serious or urgent." +
            "<br><br>" +
            "(A) 'reassuring' means serving or intended to remove someone's doubts or fears." +
            "<br><br>" +
            "(B) 'hopeful' means feeling or inspiring optimism about a future event." +
            "<br><br>" +
            "(D) 'optimistic' means hopeful and confident about the future.",
        chinese_explanation: "(C) '可怕' 意味着极其严重或紧急。" +
            "<br><br>" +
            "(A) '安慰' 意味着服务或意图消除某人的怀疑或恐惧。" +
            "<br><br>" +
            "(B) '充满希望' 意味着对未来事件感到或激发乐观。" +
            "<br><br>" +
            "(D) '乐观' 意味着对未来充满希望和信心。"
    },
    {
        id: 10,
        question: "The bright red car was __________ in the parking lot full of grey and black vehicles.",
        chinese_question: "在满是灰色和黑色车辆的停车场里，那辆鲜红色的车非常__________。",
        answers: [
            { option: "A", answer: "camouflaged", chinese_answer: "伪装的", chinese_romanization: "wěizhuāng de" },
            { option: "B", answer: "inconspicuous", chinese_answer: "不显眼的", chinese_romanization: "bù xiǎnyǎn de" },
            { option: "C", answer: "unnoticeable", chinese_answer: "不引人注目的", chinese_romanization: "bù yǐn rén zhùmù de" },
            { option: "D", answer: "conspicuous", chinese_answer: "显眼的", chinese_romanization: "xiǎnyǎn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'conspicuous' means standing out so as to be clearly visible." +
            "<br><br>" +
            "(A) 'camouflaged' means disguised or hidden by blending in with the surroundings." +
            "<br><br>" +
            "(B) 'inconspicuous' means not clearly visible or attracting attention." +
            "<br><br>" +
            "(C) 'unnoticeable' means not attracting attention; not easy to see.",
        chinese_explanation: "(D) '显眼的'一词意味着突出得非常明显。" +
            "<br><br>" +
            "(A) '伪装的' 意味着通过与周围环境混合来伪装或隐藏。" +
            "<br><br>" +
            "(B) '不显眼的' 意味着不明显或不引人注意的。" +
            "<br><br>" +
            "(C) '不引人注目的' 意味着不吸引注意力；不容易被看到的。"
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
