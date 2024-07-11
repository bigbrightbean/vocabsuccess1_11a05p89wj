// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She couldn't help but __________ in disgust when she tasted the spoiled milk.",
        chinese_question: "当她尝到变质的牛奶时，不禁 __________ 了一下。",
        answers: [
            { option: "A", answer: "smile", chinese_answer: "微笑", chinese_romanization: "wéixiào" },
            { option: "B", answer: "dance", chinese_answer: "跳舞", chinese_romanization: "tiàowǔ" },
            { option: "C", answer: "laugh", chinese_answer: "大笑", chinese_romanization: "dà xiào" },
            { option: "D", answer: "grimace", chinese_answer: "扮鬼脸", chinese_romanization: "bàn guǐ liǎn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'grimace' means to make a twisted facial expression, typically indicating disgust or pain." +
            "<br><br>" +
            "(A) 'smile' means to form one's features into a pleased, kind, or amused expression." +
            "<br><br>" +
            "(B) 'dance' means to move rhythmically to music, typically following a set sequence of steps." +
            "<br><br>" +
            "(C) 'laugh' means to make the spontaneous sounds and movements of the face and body that are the instinctive expressions of lively amusement.",
        chinese_explanation: "(D) '扮鬼脸' 一词意味着做出扭曲的面部表情，通常表示厌恶或痛苦。" +
            "<br><br>" +
            "(A) '微笑' 意味着使自己的特征形成高兴、友善或愉快的表情。" +
            "<br><br>" +
            "(B) '跳舞' 意味着随着音乐有节奏地移动，通常按照一套固定的步骤进行。" +
            "<br><br>" +
            "(C) '大笑' 意味着发出自发的声音和面部、身体动作，是愉快娱乐的本能表达。"
    },
    {
        id: 2,
        question: "The farmer worked hard to __________ a variety of crops in his fields, ensuring a good harvest each season.",
        chinese_question: "这位农夫努力 __________ 各种作物，确保每个季节都有好收成。",
        answers: [
            { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "cultivate", chinese_answer: "耕种", chinese_romanization: "gēngzhòng" },
            { option: "C", answer: "destroy", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "D", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'cultivate' means to prepare and use land for crops or gardening." +
            "<br><br>" +
            "(A) 'neglect' means to fail to care for properly." +
            "<br><br>" +
            "(C) 'destroy' means to put an end to the existence of something." +
            "<br><br>" +
            "(D) 'abandon' means to give up completely.",
        chinese_explanation: "(B) '耕种' 一词意味着准备和使用土地进行作物或园艺。" +
            "<br><br>" +
            "(A) '忽视' 意味着未能妥善照顾。" +
            "<br><br>" +
            "(C) '破坏' 意味着结束某物的存在。" +
            "<br><br>" +
            "(D) '放弃' 意味着完全放弃。"
    },
    {
        id: 3,
        question: "The ship began to __________ violently in the stormy sea, causing the passengers to feel sick.",
        chinese_question: "船在风暴中猛烈 __________，使乘客感到不适。",
        answers: [
            { option: "A", answer: "glide", chinese_answer: "滑行", chinese_romanization: "huáxíng" },
            { option: "B", answer: "sink", chinese_answer: "下沉", chinese_romanization: "xiàchén" },
            { option: "C", answer: "lurch", chinese_answer: "颠簸", chinese_romanization: "diānbǒ" },
            { option: "D", answer: "halt", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lurch' means to make an abrupt, unsteady, uncontrolled movement." +
            "<br><br>" +
            "(A) 'glide' means to move smoothly and continuously." +
            "<br><br>" +
            "(B) 'sink' means to go down below the surface of something, especially of a liquid; become submerged." +
            "<br><br>" +
            "(D) 'halt' means to stop.",
        chinese_explanation: "(C) '颠簸' 一词意味着做出突然、不稳定、失控的运动。" +
            "<br><br>" +
            "(A) '滑行' 意味着平稳连续地移动。" +
            "<br><br>" +
            "(B) '下沉' 意味着下沉到某物的表面以下，特别是液体的表面以下；淹没。" +
            "<br><br>" +
            "(D) '停止' 意味着停止。"
    },
    {
        id: 4,
        question: "When the snake suddenly appeared, she couldn't help but __________ in fear.",
        chinese_question: "当蛇突然出现时，她不禁 __________ 恐惧地后退。",
        answers: [
            { option: "A", answer: "approach", chinese_answer: "接近", chinese_romanization: "jiējìn" },
            { option: "B", answer: "recoil", chinese_answer: "后退", chinese_romanization: "hòutuì" },
            { option: "C", answer: "advance", chinese_answer: "前进", chinese_romanization: "qiánjìn" },
            { option: "D", answer: "embrace", chinese_answer: "拥抱", chinese_romanization: "yǒngbào" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'recoil' means to suddenly spring or flinch back in fear, horror, or disgust." +
            "<br><br>" +
            "(A) 'approach' means to come near or nearer to." +
            "<br><br>" +
            "(C) 'advance' means to move forward in a purposeful way." +
            "<br><br>" +
            "(D) 'abandon' means to give up completely.",
        chinese_explanation: "(B) '后退' 一词意味着因害怕、恐惧或厌恶而突然弹回或退缩。" +
            "<br><br>" +
            "(A) '接近' 意味着靠近或更近。" +
            "<br><br>" +
            "(C) '前进' 意味着有目的地向前移动。" +
            "<br><br>" +
            "(D) '放弃' 意味着完全放弃。"
    },
    {
        id: 5,
        question: "The flag is meant to __________ the unity and strength of our nation during times of hardship.",
        chinese_question: "在艰难时期，这面旗帜旨在 __________ 我们国家的团结和力量。",
        answers: [
            { option: "A", answer: "represent", chinese_answer: "代表", chinese_romanization: "dàibiǎo" },
            { option: "B", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "C", answer: "undermine", chinese_answer: "削弱", chinese_romanization: "xuēruò" },
            { option: "D", answer: "overshadow", chinese_answer: "使黯然失色", chinese_romanization: "shǐ ànrán shīsè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'represent' means to stand for or symbolize something." +
            "<br><br>" +
            "(B) 'conceal' means to keep from sight; hide." +
            "<br><br>" +
            "(C) 'undermine' means to weaken or damage." +
            "<br><br>" +
            "(D) 'overshadow' means to appear more prominent or important than.",
        chinese_explanation: "(A) '代表' 一词意味着象征或象征某事。" +
            "<br><br>" +
            "(B) '隐藏' 意味着隐瞒不让人看到；隐藏。" +
            "<br><br>" +
            "(C) '削弱' 意味着削弱或损害。" +
            "<br><br>" +
            "(D) '使黯然失色' 意味着显得更突出或更重要。"
    },
    {
        id: 6,
        question: "She took great care to __________ the young plants, ensuring they received enough water and sunlight to thrive.",
        chinese_question: "她非常用心地 __________ 幼苗，确保它们得到足够的水和阳光以茁壮成长。",
        answers: [
            { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "harm", chinese_answer: "伤害", chinese_romanization: "shānghài" },
            { option: "C", answer: "nurture", chinese_answer: "培育", chinese_romanization: "péiyù" },
            { option: "D", answer: "mistreat", chinese_answer: "虐待", chinese_romanization: "nüèdài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nurture' means care for and encourage the growth or development of." +
            "<br><br>" +
            "(A) 'neglect' means fail to care for properly." +
            "<br><br>" +
            "(B) 'harm' means cause physical injury or damage to." +
            "<br><br>" +
            "(D) 'mistreat' means treat (a person or animal) badly, cruelly, or unfairly.",
        chinese_explanation: "(C) '培育' 意味着照顾和鼓励生长或发展。" +
            "<br><br>" +
            "(A) '忽视' 意味着未能正确照顾。" +
            "<br><br>" +
            "(B) '伤害' 意味着造成身体伤害或损害。" +
            "<br><br>" +
            "(D) '虐待' 意味着恶劣地、残忍地或不公平地对待（一个人或动物）。"
    },
    {
        id: 7,
        question: "The hurricane __________ the small coastal town, leaving homes destroyed and families displaced.",
        chinese_question: "飓风 __________ 了这个小海滨小镇，留下被毁的房屋和流离失所的家庭。",
        answers: [
            { option: "A", answer: "built", chinese_answer: "建造", chinese_romanization: "jiànzào" },
            { option: "B", answer: "devastated", chinese_answer: "毁坏", chinese_romanization: "huǐhuài" },
            { option: "C", answer: "repaired", chinese_answer: "修理", chinese_romanization: "xiūlǐ" },
            { option: "D", answer: "improved", chinese_answer: "改善", chinese_romanization: "gǎishàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'devastated' means destroy or ruin (something)." +
            "<br><br>" +
            "(A) 'built' means construct (something) by putting parts or material together." +
            "<br><br>" +
            "(C) 'repaired' means restore (something damaged, faulty, or worn) to a good condition." +
            "<br><br>" +
            "(D) 'improved' means make or become better.",
        chinese_explanation: "(B) '毁坏' 意味着破坏或毁灭（某物）。" +
            "<br><br>" +
            "(A) '建造' 意味着通过将部分或材料放在一起构建（某物）。" +
            "<br><br>" +
            "(C) '修理' 意味着将（损坏的、有缺陷的或磨损的东西）恢复到良好状态。" +
            "<br><br>" +
            "(D) '改善' 意味着使变得更好。"
    },
    {
        id: 8,
        question: "The teacher asked the students to __________ the effectiveness of the new study techniques they had been using for a month.",
        chinese_question: "老师要求学生 __________ 他们使用一个月的新学习技巧的效果。",
        answers: [
            { option: "A", answer: "calculate", chinese_answer: "计算", chinese_romanization: "jìsuàn" },
            { option: "B", answer: "evaluate", chinese_answer: "评估", chinese_romanization: "pínggū" },
            { option: "C", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'evaluate' means form an idea of the amount, number, or value of; assess." +
            "<br><br>" +
            "(A) 'calculate' means determine (the amount or number of something) mathematically." +
            "<br><br>" +
            "(C) 'overlook' means fail to notice (something)." +
            "<br><br>" +
            "(D) 'avoid' means keep away from or stop oneself from doing (something).",
        chinese_explanation: "(B) '评估' 意味着形成关于数量、数字或价值的想法；评估。" +
            "<br><br>" +
            "(A) '计算' 意味着用数学方法确定（某物的数量或数目）。" +
            "<br><br>" +
            "(C) '忽略' 意味着未能注意到（某事）。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或阻止自己做（某事）。"
    },
    {
        id: 9,
        question: "The delicious aroma of freshly baked bread seemed to __________ in the air long after it was taken out of the oven.",
        chinese_question: "新烤出的面包的美味香气似乎在空气中 __________ 了很久，即使面包已经从烤箱中取出。",
        answers: [
            { option: "A", answer: "linger", chinese_answer: "逗留", chinese_romanization: "dòuliú" },
            { option: "B", answer: "vanish", chinese_answer: "消失", chinese_romanization: "xiāoshī" },
            { option: "C", answer: "disappear", chinese_answer: "消失", chinese_romanization: "xiāoshī" },
            { option: "D", answer: "evaporate", chinese_answer: "蒸发", chinese_romanization: "zhēngfā" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'linger' means stay in a place longer than necessary because of a reluctance to leave." +
            "<br><br>" +
            "(B) 'vanish' means disappear suddenly and completely." +
            "<br><br>" +
            "(C) 'disappear' means cease to be visible." +
            "<br><br>" +
            "(D) 'evaporate' means turn from liquid into vapor.",
        chinese_explanation: "(A) '逗留' 意味着由于不愿离开而在一个地方停留比必要的时间长。" +
            "<br><br>" +
            "(B) '消失' 意味着突然完全消失。" +
            "<br><br>" +
            "(C) '消失' 意味着不再可见。" +
            "<br><br>" +
            "(D) '蒸发' 意味着从液态变为气态。"
    },
    {
        id: 10,
        question: "She managed to __________ in her studies, consistently achieving top grades in all her subjects.",
        chinese_question: "她在学习上表现出色，所有科目都获得了最高成绩。",
        answers: [
            { option: "A", answer: "fail", chinese_answer: "失败", chinese_romanization: "shībài" },
            { option: "B", answer: "struggle", chinese_answer: "挣扎", chinese_romanization: "zhēngzhá" },
            { option: "C", answer: "lag", chinese_answer: "落后", chinese_romanization: "luòhòu" },
            { option: "D", answer: "excel", chinese_answer: "出色", chinese_romanization: "chūsè" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'excel' means be exceptionally good at or proficient in an activity or subject." +
            "<br><br>" +
            "(A) 'fail' means be unsuccessful in achieving one's goal." +
            "<br><br>" +
            "(B) 'struggle' means make forceful or violent efforts to get free of restraint or constriction." +
            "<br><br>" +
            "(C) 'lag' means fall behind in movement, progress, or development; not keep pace with another or others.",
        chinese_explanation: "(D) '出色' 意味着在某项活动或学科上表现得特别好或熟练。" +
            "<br><br>" +
            "(A) '失败' 意味着未能实现目标。" +
            "<br><br>" +
            "(B) '挣扎' 意味着努力或暴力地试图摆脱束缚或限制。" +
            "<br><br>" +
            "(C) '落后' 意味着在移动、进步或发展方面落后；跟不上其他人。"
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
