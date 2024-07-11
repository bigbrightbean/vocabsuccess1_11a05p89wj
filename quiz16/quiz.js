// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The fines for traffic violations are __________ to the severity of the offense, ensuring fair punishment.",
        chinese_question: "交通违法行为的罚款与违法行为的严重程度是 __________ 的，确保了公平的处罚。",
        answers: [
            { option: "A", answer: "disproportionate", chinese_answer: "不成比例的", chinese_romanization: "bù chéng bǐlì de" },
            { option: "B", answer: "irregular", chinese_answer: "不规则的", chinese_romanization: "bù guīzé de" },
            { option: "C", answer: "proportional", chinese_answer: "成比例的", chinese_romanization: "chéng bǐlì de" },
            { option: "D", answer: "random", chinese_answer: "随机的", chinese_romanization: "suíjī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'proportional' means corresponding in size or amount to something else." +
            "<br><br>" +
            "(A) 'disproportionate' means too large or too small in comparison with something else." +
            "<br><br>" +
            "(B) 'irregular' means not even or balanced in shape or arrangement." +
            "<br><br>" +
            "(D) 'random' means made, done, happening, or chosen without method or conscious decision.",
        chinese_explanation: "(C) '成比例的' 意味着在大小或数量上与其他事物相对应的。" +
            "<br><br>" +
            "(A) '不成比例的' 意味着与其他事物相比过大或过小的。" +
            "<br><br>" +
            "(B) '不规则的' 意味着形状或排列不均匀或不平衡的。" +
            "<br><br>" +
            "(D) '随机的' 意味着没有方法或有意识决定的。"
    },
    {
        id: 2,
        question: "She sent a __________ birthday card after realizing she had forgotten the actual date.",
        chinese_question: "她在意识到忘记了实际日期后，寄了一张 __________ 的生日卡。",
        answers: [
            { option: "A", answer: "timely", chinese_answer: "及时", chinese_romanization: "jíshí" },
            { option: "B", answer: "early", chinese_answer: "提前", chinese_romanization: "tíqián" },
            { option: "C", answer: "prompt", chinese_answer: "迅速", chinese_romanization: "xùnsù" },
            { option: "D", answer: "belated", chinese_answer: "迟到", chinese_romanization: "chídào" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'belated' means coming or happening later than should have been the case." +
            "<br><br>" +
            "(A) 'timely' means done or occurring at a favorable or useful time." +
            "<br><br>" +
            "(B) 'early' means happening or done before the usual or expected time." +
            "<br><br>" +
            "(C) 'prompt' means done without delay.",
        chinese_explanation: "(D) '迟到' 意味着来得比预期的晚。" +
            "<br><br>" +
            "(A) '及时' 意味着在有利或有用的时间做或发生。" +
            "<br><br>" +
            "(B) '提前' 意味着在通常或预期的时间之前发生或完成。" +
            "<br><br>" +
            "(C) '迅速' 意味着没有延迟地完成。"
    },
    {
        id: 3,
        question: "The unexpected turn of events left everyone __________ and speechless.",
        chinese_question: "事态的意外转折让每个人都感到 __________ 和无语。",
        answers: [
            { option: "A", answer: "dumbfounded", chinese_answer: "惊呆的", chinese_romanization: "jīng dāi de" },
            { option: "B", answer: "expectant", chinese_answer: "期待的", chinese_romanization: "qīdài de" },
            { option: "C", answer: "bored", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "D", answer: "amused", chinese_answer: "被逗乐的", chinese_romanization: "bèi dòu lè de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dumbfounded' means greatly astonish or amaze." +
            "<br><br>" +
            "(B) 'expectant' means having or showing an excited feeling that something is about to happen, especially something good." +
            "<br><br>" +
            "(C) 'bored' means feeling weary and impatient because one is unoccupied or lacks interest in one's current activity." +
            "<br><br>" +
            "(D) 'amused' means finding something funny or entertaining.",
        chinese_explanation: "(A) '惊呆的' 意味着极度惊讶或惊讶。" +
            "<br><br>" +
            "(B) '期待的' 意味着有或显示出激动的感觉，即将发生，特别是好的事情。" +
            "<br><br>" +
            "(C) '无聊的' 意味着感到厌倦和不耐烦，因为一个人没有被占用或对当前的活动缺乏兴趣。" +
            "<br><br>" +
            "(D) '被逗乐的' 意味着觉得某事有趣或有趣。"
    },
    {
        id: 4,
        question: "The events were presented in __________ order to help the audience follow the storyline.",
        chinese_question: "为了帮助观众理解故事情节，事件按 __________ 顺序呈现。",
        answers: [
            { option: "A", answer: "random", chinese_answer: "随机", chinese_romanization: "suíjī" },
            { option: "B", answer: "chronological", chinese_answer: "时间顺序", chinese_romanization: "shíjiān shùnxù" },
            { option: "C", answer: "sporadic", chinese_answer: "零星", chinese_romanization: "língxīng" },
            { option: "D", answer: "reversed", chinese_answer: "反转", chinese_romanization: "fǎnzhuǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'chronological' means arranged in the order of time." +
            "<br><br>" +
            "(A) 'random' means made or done without method or conscious decision." +
            "<br><br>" +
            "(C) 'sporadic' means occurring at irregular intervals." +
            "<br><br>" +
            "(D) 'reversed' means moved backward.",
        chinese_explanation: "(B) '时间顺序' 一词意味着按时间顺序排列。" +
            "<br><br>" +
            "(A) '随机' 意味着没有方法或有意识的决定。" +
            "<br><br>" +
            "(C) '零星' 意味着不规则地发生。" +
            "<br><br>" +
            "(D) '反转' 意味着向后移动。"
    },
    {
        id: 5,
        question: "The philosopher's lecture was so __________ that it left the audience deep in thought for hours.",
        chinese_question: "哲学家的讲座如此__________，以至于让听众深思了数小时。",
        answers: [
            { option: "A", answer: "shallow", chinese_answer: "浅的", chinese_romanization: "qiǎn de" },
            { option: "B", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "C", answer: "profound", chinese_answer: "深刻的", chinese_romanization: "shēnkè de" },
            { option: "D", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'profound' means very great or intense; having or showing great knowledge or insight." +
            "<br><br>" +
            "(A) 'shallow' means of little depth." +
            "<br><br>" +
            "(B) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(D) 'superficial' means existing or occurring at or on the surface.",
        chinese_explanation: "(C) '深刻的'一词意味着非常伟大或强烈的；具有或展示伟大的知识或见解的。" +
            "<br><br>" +
            "(A) '浅的' 意味着深度很小的。" +
            "<br><br>" +
            "(B) '琐碎的' 意味着没有价值或重要性的。" +
            "<br><br>" +
            "(D) '表面的' 意味着存在或发生在表面上。"
    },
    {
        id: 6,
        question: "Despite the evidence against him, he remained __________ and refused to admit his mistake.",
        chinese_question: "尽管有不利的证据，他仍然__________，拒绝承认自己的错误。",
        answers: [
            { option: "A", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" },
            { option: "B", answer: "compliant", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
            { option: "C", answer: "obstinate", chinese_answer: "固执的", chinese_romanization: "gùzhí de" },
            { option: "D", answer: "agreeable", chinese_answer: "同意的", chinese_romanization: "tóngyì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'obstinate' means stubbornly refusing to change one's opinion or chosen course of action, despite attempts to persuade one to do so." +
            "<br><br>" +
            "(A) 'flexible' means capable of bending easily without breaking." +
            "<br><br>" +
            "(B) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree; acquiescent." +
            "<br><br>" +
            "(D) 'agreeable' means enjoyable and pleasurable; pleasant.",
        chinese_explanation: "(C) '固执的' 一词意味着固执地拒绝改变自己的观点或选择的行动，尽管有人试图说服他这样做。" +
            "<br><br>" +
            "(A) '灵活的' 意味着能够轻易弯曲而不折断的。" +
            "<br><br>" +
            "(B) '顺从的' 意味着倾向于同意他人或遵守规则，尤其是过度的；顺从的。" +
            "<br><br>" +
            "(D) '同意的' 意味着令人愉快的和令人满意的；愉快的。"
    },
    {
        id: 7,
        question: "Being __________ in completing assignments will earn you a reputation for reliability and efficiency.",
        chinese_question: "按时完成任务将使您赢得可靠和高效的声誉。",
        answers: [
            { option: "A", answer: "punctual", chinese_answer: "准时的", chinese_romanization: "zhǔnshí de" },
            { option: "B", answer: "inconsistent", chinese_answer: "不一致的", chinese_romanization: "bù yīzhì de" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
            { option: "D", answer: "unreliable", chinese_answer: "不可靠的", chinese_romanization: "bù kěkào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'punctual' means happening or doing something at the agreed or proper time; on time." +
            "<br><br>" +
            "(B) 'inconsistent' means not staying the same throughout." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'unreliable' means not able to be relied upon.",
        chinese_explanation: "(A) '准时的' 意味着在约定或适当时间发生或做某事；准时的。" +
            "<br><br>" +
            "(B) '不一致的' 意味着不始终保持相同的。" +
            "<br><br>" +
            "(C) '漠不关心的' 意味着没有特别的兴趣或同情的；冷漠的。" +
            "<br><br>" +
            "(D) '不可靠的' 意味着不能依赖的。"
    },
    {
        id: 8,
        question: "After a heavy meal, he felt __________ and didn't want to move.",
        chinese_question: "大吃一顿后，他感到 __________，不想动。",
        answers: [
            { option: "A", answer: "energetic", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
            { option: "B", answer: "lively", chinese_answer: "活泼的", chinese_romanization: "huópō de" },
            { option: "C", answer: "sluggish", chinese_answer: "懒洋洋的", chinese_romanization: "lǎn yángyáng de" },
            { option: "D", answer: "active", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sluggish' means slow-moving or inactive." +
            "<br><br>" +
            "(A) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(B) 'lively' means full of life and energy; active and outgoing." +
            "<br><br>" +
            "(D) 'active' means engaging or ready to engage in physically energetic pursuits.",
        chinese_explanation: "(C) '懒洋洋的' 一词意味着缓慢移动或不活跃。" +
            "<br><br>" +
            "(A) '精力充沛的' 意味着表现出或涉及大量活动或活力的。" +
            "<br><br>" +
            "(B) '活泼的' 意味着充满活力和精力；积极和外向的。" +
            "<br><br>" +
            "(D) '活跃的' 意味着参与或准备参与体力充沛的活动。"
    },
    {
        id: 9,
        question: "Despite traveling to many cosmopolitan cities, his views remained __________, often dismissing modern art and cuisine as inferior to his hometown traditions.",
        chinese_question: "尽管去过许多大都市，他的观点仍然 __________，常常将现代艺术和美食视为不如家乡的传统。",
        answers: [
            { option: "A", answer: "sophisticated", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "B", answer: "open-minded", chinese_answer: "思想开放的", chinese_romanization: "sīxiǎng kāifàng de" },
            { option: "C", answer: "cosmopolitan", chinese_answer: "世界性的", chinese_romanization: "shìjiè xìng de" },
            { option: "D", answer: "provincial", chinese_answer: "狭隘的", chinese_romanization: "xiá'ài de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'provincial' means having or showing the manners, viewpoints, etc., considered characteristic of unsophisticated inhabitants of a province; rustic; narrow or illiberal." +
            "<br><br>" +
            "(A) 'sophisticated' means having a refined knowledge of the ways of the world cultivated especially through wide experience." +
            "<br><br>" +
            "(B) 'open-minded' means willing to consider new ideas; unprejudiced." +
            "<br><br>" +
            "(C) 'cosmopolitan' means familiar with and at ease in many different countries and cultures.",
        chinese_explanation: "(D) '狭隘的' 意味着具有或表现出被认为是省份中不复杂的居民特有的礼仪、观点等；质朴的；狭隘或不开明的。" +
            "<br><br>" +
            "(A) '复杂的' 意味着通过广泛的经验培养的对世界方式的精致知识。" +
            "<br><br>" +
            "(B) '思想开放的' 意味着愿意考虑新想法；无偏见的。" +
            "<br><br>" +
            "(C) '世界性的' 意味着熟悉许多不同国家和文化并对其感到自在。"
    },
    {
        id: 10,
        question: "She pursued a __________ career in finance, earning a substantial income.",
        chinese_question: "她从事金融领域的 __________ 职业，收入丰厚。",
        answers: [
            { option: "A", answer: "unprofitable", chinese_answer: "无利可图", chinese_romanization: "wú lì kě tú" },
            { option: "B", answer: "modest", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "C", answer: "lucrative", chinese_answer: "有利可图", chinese_romanization: "yǒu lì kě tú" },
            { option: "D", answer: "humble", chinese_answer: "卑微", chinese_romanization: "bēiwēi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lucrative' means producing a great deal of profit." +
            "<br><br>" +
            "(A) 'unprofitable' means not making or likely to make a profit." +
            "<br><br>" +
            "(B) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'humble' means having or showing a modest or low estimate of one's own importance.",
        chinese_explanation: "(C) '有利可图' 意味着产生大量利润。" +
            "<br><br>" +
            "(A) '无利可图' 意味着不赚钱或不太可能赚钱。" +
            "<br><br>" +
            "(B) '谦虚' 意味着对自己的能力或成就不自夸。" +
            "<br><br>" +
            "(D) '卑微' 意味着对自己的重要性有或表现出谦虚的估计。"
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
