// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The school decided to __________ the student for breaking the rules.",
        chinese_question: "学校决定因违反规定 __________ 该学生。",
        answers: [
            { option: "A", answer: "suspend", chinese_answer: "暂停", chinese_romanization: "zàntíng" },
            { option: "B", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
            { option: "C", answer: "promote", chinese_answer: "提升", chinese_romanization: "tíshēng" },
            { option: "D", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'suspend' means temporarily prevent from continuing or being in force or effect." +
            "<br><br>" +
            "(B) 'reward' means give something to (someone) in recognition of their services, efforts, or achievements." +
            "<br><br>" +
            "(C) 'promote' means further the progress of (something, especially a cause, venture, or aim); support or actively encourage." +
            "<br><br>" +
            "(D) 'praise' means express warm approval or admiration of.",
        chinese_explanation: "(A) '暂停' 意味着暂时阻止继续或生效。" +
            "<br><br>" +
            "(B) '奖励' 意味着给予（某人）以表彰其服务、努力或成就。" +
            "<br><br>" +
            "(C) '提升' 意味着进一步促进（某事物，特别是事业、冒险或目标）；支持或积极鼓励。" +
            "<br><br>" +
            "(D) '赞扬' 意味着表达热情的赞同或钦佩。"
    },
    {
        id: 2,
        question: "He started to __________ in the smoke-filled room, struggling for each breath amidst the dense haze.",
        chinese_question: "他开始在充满烟雾的房间里__________，在浓雾中为每一口气挣扎。",
        answers: [
            { option: "A", answer: "suffocate", chinese_answer: "窒息", chinese_romanization: "zhìxī" },
            { option: "B", answer: "breathe", chinese_answer: "呼吸", chinese_romanization: "hūxī" },
            { option: "C", answer: "inhale", chinese_answer: "吸入", chinese_romanization: "xīrù" },
            { option: "D", answer: "ventilate", chinese_answer: "通风", chinese_romanization: "tōngfēng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'suffocate' means to die or cause to die from lack of air or inability to breathe." +
            "<br><br>" +
            "(B) 'breathe' means take air into the lungs and then expel it, especially as a regular physiological process." +
            "<br><br>" +
            "(C) 'inhale' means breathe in (air, gas, smoke, etc.)." +
            "<br><br>" +
            "(D) 'ventilate' means cause air to enter and circulate freely in (a room, building, etc.).",
        chinese_explanation: "(A) '窒息' 意味着因缺乏空气或无法呼吸而死亡或导致死亡。" +
            "<br><br>" +
            "(B) '呼吸' 意味着将空气吸入肺部，然后排出，特别是作为一种常规的生理过程。" +
            "<br><br>" +
            "(C) '吸入' 意味着吸入（空气、气体、烟雾等）。" +
            "<br><br>" +
            "(D) '通风' 意味着使空气进入并在（房间、建筑物等）中自由循环。"
    },
    {
        id: 3,
        question: "The sailors had to __________ the sinking ship to save their lives, leaving it to be claimed by the sea.",
        chinese_question: "水手们不得不__________正在下沉的船以保住性命，让它被海洋吞没。",
        answers: [
            { option: "A", answer: "repair", chinese_answer: "修理", chinese_romanization: "xiūlǐ" },
            { option: "B", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "C", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
            { option: "D", answer: "renovate", chinese_answer: "翻新", chinese_romanization: "fānxīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abandon' means leave (a place or vehicle, typically something that is needed) permanently." +
            "<br><br>" +
            "(A) 'repair' means fix or mend (a thing suffering from damage or a fault)." +
            "<br><br>" +
            "(C) 'protect' means keep safe from harm or injury." +
            "<br><br>" +
            "(D) 'renovate' means restore (something old, especially a building) to a good state of repair.",
        chinese_explanation: "(B) '放弃' 一词意味着永久地离开（一个地方或车辆，通常是需要的东西）。" +
            "<br><br>" +
            "(A) '修理' 意味着修复或修补（受损或有故障的东西）。" +
            "<br><br>" +
            "(C) '保护' 意味着使免受伤害或损害。" +
            "<br><br>" +
            "(D) '翻新' 意味着恢复（旧物，尤其是建筑物）到良好的状态。"
    },
    {
        id: 4,
        question: "The group decided to __________ the company's products due to unethical practices.",
        chinese_question: "该组织决定 __________ 该公司的产品，因为其不道德的做法。",
        answers: [
            { option: "A", answer: "boycott", chinese_answer: "抵制", chinese_romanization: "dǐzhì" },
            { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "endorse", chinese_answer: "认可", chinese_romanization: "rènkě" },
            { option: "D", answer: "promote", chinese_answer: "促进", chinese_romanization: "cùjìn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'boycott' means withdraw from commercial or social relations with (a country, organization, or person) as a punishment or protest." +
            "<br><br>" +
            "(B) 'support' means bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(C) 'endorse' means declare one's public approval or support of." +
            "<br><br>" +
            "(D) 'promote' means further the progress of (something, especially a cause, venture, or aim); support or actively encourage.",
        chinese_explanation: "(A) '抵制' 意味着退出与（国家、组织或个人）的商业或社会关系，作为惩罚或抗议。" +
            "<br><br>" +
            "(B) '支持' 意味着承受部分或全部重量；支撑。" +
            "<br><br>" +
            "(C) '认可' 意味着公开声明赞同或支持。" +
            "<br><br>" +
            "(D) '促进' 意味着促进（某事物，特别是事业、冒险或目标）的进展；支持或积极鼓励。"
    },
    {
        id: 5,
        question: "The coastal town was __________ with water after the hurricane hit.",
        chinese_question: "飓风袭来后，沿海城镇被水 __________。",
        answers: [
            { option: "A", answer: "parched", chinese_answer: "干燥", chinese_romanization: "gānzào" },
            { option: "B", answer: "drained", chinese_answer: "排干", chinese_romanization: "páigān" },
            { option: "C", answer: "protected", chinese_answer: "保护", chinese_romanization: "bǎohù" },
            { option: "D", answer: "inundated", chinese_answer: "淹没", chinese_romanization: "yānmò" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'inundated' means flooded or overwhelmed with water." +
            "<br><br>" +
            "(A) 'parched' means dried out with heat." +
            "<br><br>" +
            "(B) 'drained' means having had liquid removed." +
            "<br><br>" +
            "(C) 'protected' means kept safe from harm or injury.",
        chinese_explanation: "(D) '淹没' 意味着被水淹没或泛滥。" +
            "<br><br>" +
            "(A) '干燥' 意味着因热而干燥。" +
            "<br><br>" +
            "(B) '排干' 意味着已去除液体。" +
            "<br><br>" +
            "(C) '保护' 意味着保持安全不受伤害。"
    },
    {
        id: 6,
        question: "The durable materials ensured that the bridge would __________ many storms and years of use.",
        chinese_question: "耐用的材料确保桥梁能够 __________ 许多风暴和多年的使用。",
        answers: [
            { option: "A", answer: "crumble", chinese_answer: "崩溃", chinese_romanization: "bēngkuì" },
            { option: "B", answer: "deteriorate", chinese_answer: "恶化", chinese_romanization: "èhuà" },
            { option: "C", answer: "outlast", chinese_answer: "持久", chinese_romanization: "chíjiǔ" },
            { option: "D", answer: "collapse", chinese_answer: "倒塌", chinese_romanization: "dǎotā" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'outlast' means to last longer than." +
            "<br><br>" +
            "(A) 'crumble' means to break or fall apart into small fragments." +
            "<br><br>" +
            "(B) 'deteriorate' means to become progressively worse." +
            "<br><br>" +
            "(D) 'collapse' means to fall down or give way.",
        chinese_explanation: "(C) '持久' 意味着比...持续时间更长。" +
            "<br><br>" +
            "(A) '崩溃' 意味着破碎或分裂成小片。" +
            "<br><br>" +
            "(B) '恶化' 意味着逐渐变得更糟。" +
            "<br><br>" +
            "(D) '倒塌' 意味着倒下或倒塌。"
    },
    {
        id: 7,
        question: "She tried to __________ with the street vendor to get a better price on the scarf.",
        chinese_question: "她试图与街头小贩 __________ 以获得围巾的更好价格。",
        answers: [
            { option: "A", answer: "agree", chinese_answer: "同意", chinese_romanization: "tóngyì" },
            { option: "B", answer: "purchase", chinese_answer: "购买", chinese_romanization: "gòumǎi" },
            { option: "C", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "D", answer: "haggle", chinese_answer: "讨价还价", chinese_romanization: "tǎojiàhuánjià" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'haggle' means dispute or bargain persistently, especially over the cost of something." +
            "<br><br>" +
            "(A) 'agree' means have the same opinion about something; concur." +
            "<br><br>" +
            "(B) 'purchase' means acquire (something) by paying for it; buy." +
            "<br><br>" +
            "(C) 'accept' means consent to receive (a thing offered).",
        chinese_explanation: "(D) '讨价还价' 意味着持久地争论或讨价还价，尤其是关于某物的成本。" +
            "<br><br>" +
            "(A) '同意' 意味着对某事持相同意见；一致。" +
            "<br><br>" +
            "(B) '购买' 意味着通过支付来获得（某物）；买。" +
            "<br><br>" +
            "(C) '接受' 意味着同意接受（提供的东西）。"
    },
    {
        id: 8,
        question: "The car began to __________ down the hill after the brakes failed.",
        chinese_question: "刹车失灵后，汽车开始 __________ 下山。",
        answers: [
            { option: "A", answer: "hurtle", chinese_answer: "飞驰", chinese_romanization: "fēichí" },
            { option: "B", answer: "crawl", chinese_answer: "爬行", chinese_romanization: "páxíng" },
            { option: "C", answer: "stop", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
            { option: "D", answer: "reverse", chinese_answer: "倒退", chinese_romanization: "dàotuì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hurtle' means move or cause to move at a great speed, typically in a wildly uncontrolled manner." +
            "<br><br>" +
            "(B) 'crawl' means move forward on the hands and knees or by dragging the body close to the ground." +
            "<br><br>" +
            "(C) 'stop' means come to an end; cease to happen." +
            "<br><br>" +
            "(D) 'reverse' means move backward.",
        chinese_explanation: "(A) '飞驰' 意味着以极大的速度移动或使移动，通常是以一种疯狂失控的方式。" +
            "<br><br>" +
            "(B) '爬行' 意味着用手和膝盖向前移动或通过将身体拖近地面移动。" +
            "<br><br>" +
            "(C) '停止' 意味着结束；停止发生。" +
            "<br><br>" +
            "(D) '倒退' 意味着向后移动。"
    },
    {
        id: 9,
        question: "They had to __________ the old machine piece by piece to transport it out of the factory.",
        chinese_question: "他们不得不一块一块地 __________ 旧机器，以便将其运出工厂。",
        answers: [
            { option: "A", answer: "assemble", chinese_answer: "组装", chinese_romanization: "zǔzhuāng" },
            { option: "B", answer: "construct", chinese_answer: "建造", chinese_romanization: "jiànzào" },
            { option: "C", answer: "build", chinese_answer: "建筑", chinese_romanization: "jiànzhú" },
            { option: "D", answer: "dismantle", chinese_answer: "拆卸", chinese_romanization: "chāixiè" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'dismantle' means to take (a machine or structure) to pieces." +
            "<br><br>" +
            "(A) 'assemble' means fit together the separate component parts of (a machine or other object)." +
            "<br><br>" +
            "(B) 'construct' means build or erect (something, typically a building, road, or machine)." +
            "<br><br>" +
            "(C) 'build' means construct (something) by putting parts or material together.",
        chinese_explanation: "(D) '拆卸' 意味着将（机器或结构）拆成零件。" +
            "<br><br>" +
            "(A) '组装' 意味着将（机器或其他物体）的各个组件装配在一起。" +
            "<br><br>" +
            "(B) '建造' 意味着建造或竖立（某物，通常是建筑物、道路或机器）。" +
            "<br><br>" +
            "(C) '建筑' 意味着通过将零件或材料组装在一起构建（某物）。"
    },
    {
        id: 10,
        question: "After hiking all day, he was so hungry that he could __________ an entire pizza by himself.",
        chinese_question: "在徒步一整天之后，他饿得可以自己一个人 __________ 一整个披萨。",
        answers: [
            { option: "A", answer: "devour", chinese_answer: "狼吞虎咽", chinese_romanization: "lángtūnhǔyàn" },
            { option: "B", answer: "nibble", chinese_answer: "啃", chinese_romanization: "kěn" },
            { option: "C", answer: "sip", chinese_answer: "小口喝", chinese_romanization: "xiǎo kǒu hē" },
            { option: "D", answer: "abstain", chinese_answer: "节制", chinese_romanization: "jiézhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'devour' means to eat (food or prey) hungrily or quickly." +
            "<br><br>" +
            "(B) 'nibble' means take small bites out of." +
            "<br><br>" +
            "(C) 'sip' means drink (something) by taking small mouthfuls." +
            "<br><br>" +
            "(D) 'abstain' means to restrain oneself from doing or enjoying something.",
        chinese_explanation: "(A) '狼吞虎咽' 意味着饥饿地或迅速地吃（食物或猎物）。" +
            "<br><br>" +
            "(B) '啃' 意味着小口咬。" +
            "<br><br>" +
            "(C) '小口喝' 意味着小口喝（某物）。" +
            "<br><br>" +
            "(D) '节制' 意味着克制自己不做或不享受某事。"
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
