// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "After the heavy rains, the riverbanks overflowed, __________ the nearby fields.",
        chinese_question: "大雨过后，河岸溢出，__________了附近的田地。",
        answers: [
            { option: "A", answer: "draining", chinese_answer: "排水", chinese_romanization: "páishuǐ" },
            { option: "B", answer: "irrigating", chinese_answer: "灌溉", chinese_romanization: "guàngài" },
            { option: "C", answer: "inundating", chinese_answer: "淹没", chinese_romanization: "yānmò" },
            { option: "D", answer: "evaporating", chinese_answer: "蒸发", chinese_romanization: "zhēngfā" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'inundating' means to flood." +
            "<br><br>" +
            "(A) 'draining' means cause the water or other liquid in (something) to run out, leaving it empty, dry, or drier." +
            "<br><br>" +
            "(B) 'irrigating' means supply water to (land or crops) to help growth, typically by means of channels." +
            "<br><br>" +
            "(D) 'evaporating' means turn from liquid into vapor.",
        chinese_explanation: "(C) '淹没' 一词意味着洪水泛滥。" +
            "<br><br>" +
            "(A) '排水' 意味着使（水或其他液体）从（某物）流出，使其空、干或更干。" +
            "<br><br>" +
            "(B) '灌溉' 意味着通过渠道向（土地或作物）供水以帮助生长。" +
            "<br><br>" +
            "(D) '蒸发' 意味着从液体变为蒸汽."
    },
    {
        id: 2,
        question: "She tried to __________ her friend into joining the club by promising exciting events and activities.",
        chinese_question: "她试图通过承诺令人兴奋的活动来 __________ 朋友加入俱乐部。",
        answers: [
            { option: "A", answer: "discourage", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
            { option: "B", answer: "cajole", chinese_answer: "哄骗", chinese_romanization: "hǒngpiàn" },
            { option: "C", answer: "demand", chinese_answer: "要求", chinese_romanization: "yāoqiú" },
            { option: "D", answer: "threaten", chinese_answer: "威胁", chinese_romanization: "wēixié" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'cajole' means to persuade someone to do something by sustained coaxing or flattery." +
            "<br><br>" +
            "(A) 'discourage' means to cause (someone) to lose confidence or enthusiasm." +
            "<br><br>" +
            "(C) 'demand' means ask authoritatively or brusquely." +
            "<br><br>" +
            "(D) 'threaten' means state one's intention to take hostile action against someone in retribution for something done or not done.",
        chinese_explanation: "(B) '哄骗' 一词意味着通过持续的劝诱或恭维说服某人做某事。" +
            "<br><br>" +
            "(A) '劝阻' 意味着使某人失去信心或热情。" +
            "<br><br>" +
            "(C) '要求' 意味着权威地或粗暴地要求。" +
            "<br><br>" +
            "(D) '威胁' 意味着表明意图对某人采取敌对行动，以报复其所做或未做的事情。"
    },
    {
        id: 3,
        question: "He was quick to __________ his colleague of stealing his idea.",
        chinese_question: "他很快就 __________ 同事偷了他的主意。",
        answers: [
            { option: "A", answer: "accuse", chinese_answer: "指控", chinese_romanization: "zhǐkòng" },
            { option: "B", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "C", answer: "absolve", chinese_answer: "赦免", chinese_romanization: "shèmiǎn" },
            { option: "D", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'accuse' means charge (someone) with an offense or crime." +
            "<br><br>" +
            "(B) 'praise' means express warm approval or admiration of." +
            "<br><br>" +
            "(C) 'absolve' means declare (someone) free from blame, guilt, or responsibility." +
            "<br><br>" +
            "(D) 'reward' means give (something) to (someone) in recognition of their services, efforts, or achievements.",
        chinese_explanation: "(A) '指控' 意味着指控（某人）犯罪或罪行。" +
            "<br><br>" +
            "(B) '赞扬' 意味着表示热烈的赞同或钦佩。" +
            "<br><br>" +
            "(C) '赦免' 意味着宣布（某人）没有责任、罪责或责任。" +
            "<br><br>" +
            "(D) '奖励' 意味着给予（某物）以表彰他们的服务、努力或成就。"
    },
    {
        id: 4,
        question: "He decided to __________ quickly to prevent further damage.",
        chinese_question: "他决定迅速 __________ 以防止进一步的损害。",
        answers: [
            { option: "A", answer: "act", chinese_answer: "行动", chinese_romanization: "xíngdòng" },
            { option: "B", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "C", answer: "hesitate", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "D", answer: "stop", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'act' means take action; do something." +
            "<br><br>" +
            "(B) 'delay' means make (someone or something) late or slow." +
            "<br><br>" +
            "(C) 'hesitate' means pause before saying or doing something, especially through uncertainty." +
            "<br><br>" +
            "(D) 'stop' means come to an end; cease to happen.",
        chinese_explanation: "(A) '行动' 意味着采取行动；做某事。" +
            "<br><br>" +
            "(B) '延迟' 意味着使（某人或某物）迟到或缓慢。" +
            "<br><br>" +
            "(C) '犹豫' 意味着在说或做某事前暂停，特别是因为不确定。" +
            "<br><br>" +
            "(D) '停止' 意味着结束；停止发生。"
    },
    {
        id: 5,
        question: "The photographer managed to __________ the beauty of the sunset perfectly.",
        chinese_question: "摄影师设法完美地 __________ 了日落的美丽。",
        answers: [
            { option: "A", answer: "miss", chinese_answer: "错过", chinese_romanization: "cuòguò" },
            { option: "B", answer: "lose", chinese_answer: "失去", chinese_romanization: "shīqù" },
            { option: "C", answer: "release", chinese_answer: "释放", chinese_romanization: "shìfàng" },
            { option: "D", answer: "capture", chinese_answer: "捕捉", chinese_romanization: "bǔzhuō" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'capture' means take into one's possession or control by force or to record accurately in a picture or words." +
            "<br><br>" +
            "(A) 'miss' means fail to hit, reach, or come into contact with (something aimed at)." +
            "<br><br>" +
            "(B) 'lose' means be deprived of or cease to have or retain (something)." +
            "<br><br>" +
            "(C) 'release' means allow or enable to escape from confinement; set free.",
        chinese_explanation: "(D) '捕捉' 意味着通过力量占有或控制，或在图片或文字中准确记录。" +
            "<br><br>" +
            "(A) '错过' 意味着未能击中、到达或接触（瞄准的东西）。" +
            "<br><br>" +
            "(B) '失去' 意味着被剥夺或停止拥有或保留（某物）。" +
            "<br><br>" +
            "(C) '释放' 意味着允许或使从监禁中逃脱；释放。"
    },
    {
        id: 6,
        question: "She decided to __________ her life to helping others, volunteering at shelters and supporting various charities.",
        chinese_question: "她决定将自己的生命 __________ 给帮助他人，志愿在庇护所工作并支持各种慈善机构。",
        answers: [
            { option: "A", answer: "dedicate", chinese_answer: "奉献", chinese_romanization: "fèngxiàn" },
            { option: "B", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "D", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dedicate' means devote (time, effort, or oneself) to a particular task or purpose." +
            "<br><br>" +
            "(B) 'reject' means refuse to accept, consider, or submit to." +
            "<br><br>" +
            "(C) 'abandon' means give up completely (a course of action, a practice, or a way of thinking)." +
            "<br><br>" +
            "(D) 'neglect' means fail to care for properly.",
        chinese_explanation: "(A) '奉献' 意味着将（时间、精力或自己）奉献给特定的任务或目的。" +
            "<br><br>" +
            "(B) '拒绝' 意味着拒绝接受、考虑或提交。" +
            "<br><br>" +
            "(C) '放弃' 意味着完全放弃（某个行动、做法或思维方式）。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能妥善照顾。"
    },
    {
        id: 7,
        question: "He decided to __________ the old barn into a guesthouse.",
        chinese_question: "他决定将旧谷仓 __________ 成客房。",
        answers: [
            { option: "A", answer: "convert", chinese_answer: "改造", chinese_romanization: "gǎizào" },
            { option: "B", answer: "demolish", chinese_answer: "拆除", chinese_romanization: "chāichú" },
            { option: "C", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'convert' means to change (something) into a different form or properties; transmute; transform." +
            "<br><br>" +
            "(B) 'demolish' means to pull or knock down (a building)." +
            "<br><br>" +
            "(C) 'neglect' means to fail to care for properly." +
            "<br><br>" +
            "(D) 'abandon' means to give up completely (a course of action, a practice, or a way of thinking).",
        chinese_explanation: "(A) '改造' 意味着将（某物）改变为不同的形式或属性；转变；转化。" +
            "<br><br>" +
            "(B) '拆除' 意味着拆除（建筑物）。" +
            "<br><br>" +
            "(C) '忽视' 意味着未能妥善照顾。" +
            "<br><br>" +
            "(D) '放弃' 意味着完全放弃（某个行动、做法或思维方式）。"
    },
    {
        id: 8,
        question: "He learned to __________ beautiful melodies on the piano.",
        chinese_question: "他学会了在钢琴上 __________ 美丽的旋律。",
        answers: [
            { option: "A", answer: "destroy", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "B", answer: "dismantle", chinese_answer: "拆除", chinese_romanization: "chāichú" },
            { option: "C", answer: "disrupt", chinese_answer: "干扰", chinese_romanization: "gānrǎo" },
            { option: "D", answer: "compose", chinese_answer: "作曲", chinese_romanization: "zuòqǔ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'compose' means to write or create (a work of art, especially music or poetry)." +
            "<br><br>" +
            "(A) 'destroy' means to put an end to the existence of (something) by damaging or attacking it." +
            "<br><br>" +
            "(B) 'dismantle' means to take (a machine or structure) to pieces." +
            "<br><br>" +
            "(C) 'disrupt' means to interrupt (an event, activity, or process) by causing a disturbance or problem.",
        chinese_explanation: "(D) '作曲' 意味着创作（艺术作品，尤其是音乐或诗歌）。" +
            "<br><br>" +
            "(A) '破坏' 意味着通过损坏或攻击结束（某物）的存在。" +
            "<br><br>" +
            "(B) '拆除' 意味着将（机器或结构）拆解。" +
            "<br><br>" +
            "(C) '干扰' 意味着通过制造干扰或问题来中断（事件、活动或过程）。"
    },
    {
        id: 9,
        question: "The museum will __________ a new collection of ancient artifacts next month.",
        chinese_question: "博物馆下个月将__________一批新的古代文物。",
        answers: [
            { option: "A", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "B", answer: "suppress", chinese_answer: "压制", chinese_romanization: "yāzhì" },
            { option: "C", answer: "exhibit", chinese_answer: "展示", chinese_romanization: "zhǎnshì" },
            { option: "D", answer: "withhold", chinese_answer: "扣留", chinese_romanization: "kòuliú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'exhibit' means publicly display (a work of art or item of interest) in an art gallery or museum or at a trade fair." +
            "<br><br>" +
            "(A) 'hide' means put or keep out of sight." +
            "<br><br>" +
            "(B) 'suppress' means forcibly put an end to." +
            "<br><br>" +
            "(D) 'withhold' means refuse to give (something that is due to or is desired by another).",
        chinese_explanation: "(C) '展示'一词意味着在艺术馆、博物馆或贸易展览会上公开展示（艺术品或感兴趣的物品）。" +
            "<br><br>" +
            "(A) '隐藏' 意味着放置或保持在视线之外。" +
            "<br><br>" +
            "(B) '压制' 意味着强行结束。" +
            "<br><br>" +
            "(D) '扣留' 意味着拒绝给予（属于或渴望被他人获得的东西）。"
    },
    {
        id: 10,
        question: "Archaeologists plan to __________ the ancient ruins to uncover more artifacts.",
        chinese_question: "考古学家计划__________古代遗址以发现更多文物。",
        answers: [
            { option: "A", answer: "bury", chinese_answer: "埋藏", chinese_romanization: "máicáng" },
            { option: "B", answer: "cover", chinese_answer: "覆盖", chinese_romanization: "fùgài" },
            { option: "C", answer: "excavate", chinese_answer: "挖掘", chinese_romanization: "wājué" },
            { option: "D", answer: "destroy", chinese_answer: "破坏", chinese_romanization: "pòhuài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'excavate' means make (a hole or channel) by digging." +
            "<br><br>" +
            "(A) 'bury' means put or hide underground." +
            "<br><br>" +
            "(B) 'cover' means put something on top of or in front of (something), especially in order to protect or conceal it." +
            "<br><br>" +
            "(D) 'destroy' means end the existence of (something) by damaging or attacking it.",
        chinese_explanation: "(C) '挖掘'一词意味着通过挖掘制作（一个洞或渠道）。" +
            "<br><br>" +
            "(A) '埋藏' 意味着放置或隐藏在地下。" +
            "<br><br>" +
            "(B) '覆盖' 意味着在（某物）上面或前面放置某物，特别是为了保护或隐藏它。" +
            "<br><br>" +
            "(D) '破坏' 意味着通过破坏或攻击结束（某物）的存在。"
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
