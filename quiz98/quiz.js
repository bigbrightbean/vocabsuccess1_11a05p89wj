// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Several teams will __________ for the championship title this season.",
        chinese_question: "几支球队将 __________ 本赛季的冠军头衔。",
        answers: [
            { option: "A", answer: "vie", chinese_answer: "竞争", chinese_romanization: "jìngzhēng" },
            { option: "B", answer: "withdraw", chinese_answer: "退出", chinese_romanization: "tuìchū" },
            { option: "C", answer: "surrender", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "D", answer: "cooperate", chinese_answer: "合作", chinese_romanization: "hézuò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'vie' means to compete eagerly with someone in order to do or achieve something." +
            "<br><br>" +
            "(B) 'withdraw' means to remove oneself from participation." +
            "<br><br>" +
            "(C) 'surrender' means to give up or hand over (a person, right, or possession), typically on compulsion or demand." +
            "<br><br>" +
            "(D) 'cooperate' means work jointly towards the same end.",
        chinese_explanation: "(A) '竞争' 意味着为了做某事或实现某事而积极与某人竞争。" +
            "<br><br>" +
            "(B) '退出' 意味着退出参与。" +
            "<br><br>" +
            "(C) '放弃' 意味着在强迫或要求下放弃或交出（一个人、权利或财产）。" +
            "<br><br>" +
            "(D) '合作' 意味着共同朝着同一个目标努力。"
    },
    {
        id: 2,
        question: "In the middle of summer, the city would __________ under the scorching sun.",
        chinese_question: "在盛夏，城市会在灼热的阳光下 __________。",
        answers: [
            { option: "A", answer: "freeze", chinese_answer: "冻结", chinese_romanization: "dòngjié" },
            { option: "B", answer: "chill", chinese_answer: "寒冷", chinese_romanization: "hánlěng" },
            { option: "C", answer: "shiver", chinese_answer: "颤抖", chinese_romanization: "chàndǒu" },
            { option: "D", answer: "swelter", chinese_answer: "炎热", chinese_romanization: "yánrè" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'swelter' means to suffer from oppressive heat." +
            "<br><br>" +
            "(A) 'freeze' means (of a liquid) be turned into ice or another solid as a result of extreme cold." +
            "<br><br>" +
            "(B) 'chill' means make (someone) cold." +
            "<br><br>" +
            "(C) 'shiver' means shake slightly and uncontrollably as a result of being cold, frightened, or excited.",
        chinese_explanation: "(D) '炎热' 意味着在压抑的高温下受苦。" +
            "<br><br>" +
            "(A) '冻结' 意味着（液体）因极冷而变成冰或其他固体。" +
            "<br><br>" +
            "(B) '寒冷' 意味着使（某人）感到冷。" +
            "<br><br>" +
            "(C) '颤抖' 意味着因冷、害怕或兴奋而轻微且不受控制地颤抖。"
    },
    {
        id: 3,
        question: "Children are more __________ to catching colds because their immune systems are still developing.",
        chinese_question: "孩子们更容易 __________ 感冒，因为他们的免疫系统仍在发育中。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "B", answer: "susceptible", chinese_answer: "易受影响的", chinese_romanization: "yì shòu yǐngxiǎng de" },
            { option: "C", answer: "resistant", chinese_answer: "抵抗的", chinese_romanization: "dǐkàng de" },
            { option: "D", answer: "immune", chinese_answer: "免疫的", chinese_romanization: "miǎnyì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'susceptible' means likely or liable to be influenced or harmed by a particular thing." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'resistant' means offering resistance to something or someone." +
            "<br><br>" +
            "(D) 'immune' means not affected or influenced by something.",
        chinese_explanation: "(B) '易受影响的' 意味着可能或有责任受到特定事物的影响或伤害。" +
            "<br><br>" +
            "(A) '冷漠的' 意味着没有特别的兴趣或同情心；不关心的。" +
            "<br><br>" +
            "(C) '抵抗的' 意味着对某事或某人提供抵抗。" +
            "<br><br>" +
            "(D) '免疫的' 意味着不受某事影响或影响的。"
    },
    {
        id: 4,
        question: "After the storm, the floodwaters began to __________, revealing the damage done.",
        chinese_question: "风暴过后，洪水开始 __________，揭示了造成的破坏。",
        answers: [
            { option: "A", answer: "subside", chinese_answer: "退去", chinese_romanization: "tuìqù" },
            { option: "B", answer: "rise", chinese_answer: "上升", chinese_romanization: "shàngshēng" },
            { option: "C", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "D", answer: "intensify", chinese_answer: "加剧", chinese_romanization: "jiājù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'subside' means become less intense, violent, or severe." +
            "<br><br>" +
            "(B) 'rise' means move from a lower position to a higher one; come or go up." +
            "<br><br>" +
            "(C) 'increase' means become or make greater in size, amount, intensity, or degree." +
            "<br><br>" +
            "(D) 'intensify' means become or make more intense.",
        chinese_explanation: "(A) '退去' 意味着变得不那么强烈、暴力或严重。" +
            "<br><br>" +
            "(B) '上升' 意味着从较低位置移动到较高位置；上升或上升。" +
            "<br><br>" +
            "(C) '增加' 意味着在大小、数量、强度或程度上变大或增加。" +
            "<br><br>" +
            "(D) '加剧' 意味着变得或使更加激烈。"
    },
    {
        id: 5,
        question: "The prince decided to __________ his claim to the throne and live a simple life.",
        chinese_question: "王子决定 __________ 对王位的继承权，过上简单的生活。",
        answers: [
            { option: "A", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "B", answer: "renounce", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "C", answer: "claim", chinese_answer: "声称", chinese_romanization: "shēngchēng" },
            { option: "D", answer: "inherit", chinese_answer: "继承", chinese_romanization: "jìchéng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'renounce' means to formally declare one's abandonment of (a claim, right, or possession)." +
            "<br><br>" +
            "(A) 'accept' means to consent to receive (a thing offered)." +
            "<br><br>" +
            "(C) 'claim' means to state or assert that something is the case, typically without providing evidence or proof." +
            "<br><br>" +
            "(D) 'inherit' means to receive (money, property, or a title) as an heir at the death of the previous holder.",
        chinese_explanation: "(B) '放弃' 意味着正式宣布放弃（某项要求、权利或财产）。" +
            "<br><br>" +
            "(A) '接受' 意味着同意接受（提供的东西）。" +
            "<br><br>" +
            "(C) '声称' 意味着声称或断言某事是事实，通常没有提供证据或证明。" +
            "<br><br>" +
            "(D) '继承' 意味着作为继承人在前任持有人去世时接收（钱财、财产或头衔）。"
    },
    {
        id: 6,
        question: "To __________ the risk of infection, it is important to wash your hands frequently.",
        chinese_question: "为了 __________ 感染风险，频繁洗手是很重要的。",
        answers: [
            { option: "A", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "B", answer: "maximize", chinese_answer: "最大化", chinese_romanization: "zuìdà huà" },
            { option: "C", answer: "minimize", chinese_answer: "最小化", chinese_romanization: "zuìxiǎo huà" },
            { option: "D", answer: "escalate", chinese_answer: "升级", chinese_romanization: "shēngjí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'minimize' means to reduce (something, especially something undesirable) to the smallest possible amount or degree." +
            "<br><br>" +
            "(A) 'increase' means become or make greater in size, amount, intensity, or degree." +
            "<br><br>" +
            "(B) 'maximize' means make as large or great as possible." +
            "<br><br>" +
            "(D) 'escalate' means increase rapidly.",
        chinese_explanation: "'最小化' 意味着将（某物，特别是不受欢迎的东西）减少到最小可能数量或程度。" +
            "<br><br>" +
            "(A) '增加' 意味着在大小、数量、强度或程度上变大或增加。" +
            "<br><br>" +
            "(B) '最大化' 意味着使尽可能大或大。" +
            "<br><br>" +
            "(D) '升级' 意味着迅速增加。"
    },
    {
        id: 7,
        question: "She had to __________ all her courage to speak in front of the large audience.",
        chinese_question: "她不得不 __________ 所有的勇气在大观众面前讲话。",
        answers: [
            { option: "A", answer: "disperse", chinese_answer: "分散", chinese_romanization: "fēnsàn" },
            { option: "B", answer: "scatter", chinese_answer: "散布", chinese_romanization: "sànbù" },
            { option: "C", answer: "weaken", chinese_answer: "削弱", chinese_romanization: "xuēruò" },
            { option: "D", answer: "muster", chinese_answer: "鼓起", chinese_romanization: "gǔ qǐ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'muster' means to gather or bring together." +
            "<br><br>" +
            "(A) 'disperse' means distribute or spread over a wide area." +
            "<br><br>" +
            "(B) 'scatter' means throw in various random directions." +
            "<br><br>" +
            "(C) 'weaken' means make or become weaker in power, resolve, or physical strength.",
        chinese_explanation: "(D) '鼓起' 意味着集合或召集。" +
            "<br><br>" +
            "(A) '分散' 意味着在广泛区域内分布或传播。" +
            "<br><br>" +
            "(B) '散布' 意味着随机方向抛洒。" +
            "<br><br>" +
            "(C) '削弱' 意味着使或变得在力量、决心或体力上减弱。"
    },
    {
        id: 8,
        question: "The engineer had to __________ the design to meet the new safety standards, adding additional support beams and reinforcing the foundation.",
        chinese_question: "工程师必须 __________ 设计以符合新的安全标准，增加额外的支撑梁并加固基础。",
        answers: [
            { option: "A", answer: "modify", chinese_answer: "修改", chinese_romanization: "xiūgǎi" },
            { option: "B", answer: "retain", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
            { option: "C", answer: "maintain", chinese_answer: "维持", chinese_romanization: "wéichí" },
            { option: "D", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'modify' means to make partial or minor changes to (something), typically so as to improve it or to make it less extreme." +
            "<br><br>" +
            "(B) 'retain' means continue to have (something); keep possession of." +
            "<br><br>" +
            "(C) 'maintain' means cause or enable (a condition or state of affairs) to continue." +
            "<br><br>" +
            "(D) 'complicate' means to make something more difficult or confusing.",
        chinese_explanation: "'修改' 意味着对（某物）进行部分或小的更改，通常是为了改进或使其不那么极端。" +
            "<br><br>" +
            "(B) '保留' 意味着继续拥有（某物）；保有。" +
            "<br><br>" +
            "(C) '维持' 意味着使（某种状况或事态）继续存在或持续下去。" +
            "<br><br>" +
            "(D) '复杂化' 意味着使某事变得更难或更混乱。"
    },
    {
        id: 9,
        question: "To __________ the impact of noise pollution, the city has implemented several new regulations.",
        chinese_question: "为了 __________ 噪音污染的影响，城市实施了几项新规定。",
        answers: [
            { option: "A", answer: "minimize", chinese_answer: "最小化", chinese_romanization: "zuìxiǎo huà" },
            { option: "B", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "C", answer: "maximize", chinese_answer: "最大化", chinese_romanization: "zuìdà huà" },
            { option: "D", answer: "escalate", chinese_answer: "升级", chinese_romanization: "shēngjí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'minimize' means to reduce (something, especially something undesirable) to the smallest possible amount or degree." +
            "<br><br>" +
            "(B) 'increase' means become or make greater in size, amount, intensity, or degree." +
            "<br><br>" +
            "(C) 'maximize' means make as large or great as possible." +
            "<br><br>" +
            "(D) 'escalate' means increase rapidly.",
        chinese_explanation: "'最小化' 意味着将（某物，特别是不受欢迎的东西）减少到最小可能数量或程度。" +
            "<br><br>" +
            "(B) '增加' 意味着在大小、数量、强度或程度上变大或增加。" +
            "<br><br>" +
            "(C) '最大化' 意味着使尽可能大或大。" +
            "<br><br>" +
            "(D) '升级' 意味着迅速增加。"
    },
    {
        id: 10,
        question: "The cat would __________ on the windowsill, basking in the afternoon sun.",
        chinese_question: "猫会懒洋洋地 __________ 在窗台上，享受下午的阳光。",
        answers: [
            { option: "A", answer: "sprint", chinese_answer: "冲刺", chinese_romanization: "chōngcì" },
            { option: "B", answer: "pace", chinese_answer: "踱步", chinese_romanization: "duòbù" },
            { option: "C", answer: "rush", chinese_answer: "匆忙", chinese_romanization: "cōngmáng" },
            { option: "D", answer: "loll", chinese_answer: "懒散地躺着", chinese_romanization: "lǎnsǎn de tǎng zhe" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'loll' means sit, lie, or stand in a lazy, relaxed way." +
            "<br><br>" +
            "(A) 'sprint' means run at full speed over a short distance." +
            "<br><br>" +
            "(B) 'pace' means walk at a steady and consistent speed, especially back and forth and as an expression of one's anxiety or annoyance." +
            "<br><br>" +
            "(C) 'rush' means move with urgent haste.",
        chinese_explanation: "(D) '懒散地躺着' 意味着以懒惰、放松的方式坐、躺或站。" +
            "<br><br>" +
            "(A) '冲刺' 意味着以全速跑短距离。" +
            "<br><br>" +
            "(B) '踱步' 意味着以稳定和一致的速度走，尤其是来回走动，表达一个人的焦虑或烦恼。" +
            "<br><br>" +
            "(C) '匆忙' 意味着急迫地移动。"
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
