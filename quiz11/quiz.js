// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The engineer's calculations were __________, ensuring that every component of the bridge would fit together perfectly.",
        chinese_question: "工程师的计算非常 __________，确保桥梁的每个组件都能完美地组合在一起。",
        answers: [
            { option: "A", answer: "precise", chinese_answer: "精确的", chinese_romanization: "jīngquè de" },
            { option: "B", answer: "approximate", chinese_answer: "大概的", chinese_romanization: "dàgài de" },
            { option: "C", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "D", answer: "imprecise", chinese_answer: "不精确的", chinese_romanization: "bù jīngquè de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'precise' means very accurate and exact." +
            "<br><br>" +
            "(B) 'approximate' means close to the actual, but not completely accurate or exact." +
            "<br><br>" +
            "(C) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(D) 'imprecise' means not exact or accurate.",
        chinese_explanation: "(A) '精确的' 意味着非常准确和精确。" +
            "<br><br>" +
            "(B) '大概的' 意味着接近实际，但不完全准确或精确的。" +
            "<br><br>" +
            "(C) '模糊的' 意味着性质不确定、模糊或不清晰的。" +
            "<br><br>" +
            "(D) '不精确的' 意味着不准确或不精确的。"
    },
    {
        id: 2,
        question: "The country celebrated its __________ heritage with a grand military parade, showcasing its soldiers, weapons, and historical victories.",
        chinese_question: "这个国家通过一场盛大的阅兵式庆祝其 __________ 传统，展示其士兵、武器和历史上的胜利。",
        answers: [
            { option: "A", answer: "peaceful", chinese_answer: "和平", chinese_romanization: "hépíng" },
            { option: "B", answer: "martial", chinese_answer: "军事", chinese_romanization: "jūnshì" },
            { option: "C", answer: "civilian", chinese_answer: "平民", chinese_romanization: "píngmín" },
            { option: "D", answer: "nonviolent", chinese_answer: "非暴力", chinese_romanization: "fēi bàolì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'martial' means related to fighting or war." +
            "<br><br>" +
            "(A) 'peaceful' means free from disturbance; tranquil." +
            "<br><br>" +
            "(C) 'civilian' means a person not in the armed services or the police force." +
            "<br><br>" +
            "(D) 'nonviolent' means using peaceful means rather than force, especially to bring about political or social change.",
        chinese_explanation: "(B) '军事' 意味着与战斗或战争有关的。" +
            "<br><br>" +
            "(A) '和平' 意味着没有干扰；宁静。" +
            "<br><br>" +
            "(C) '平民' 意味着不是军队或警察部队的人。" +
            "<br><br>" +
            "(D) '非暴力' 意味着使用和平手段而不是武力，特别是为了带来政治或社会变化。"
    },
    {
        id: 3,
        question: "After losing their home and all their belongings, the __________ family wandered the streets, seeking shelter wherever they could find it.",
        chinese_question: "在失去家园和所有财物后，这个 __________ 的家庭在街头流浪，寻找任何可以找到的庇护所。",
        answers: [
            { option: "A", answer: "destitute", chinese_answer: "贫困的", chinese_romanization: "pínkùn de" },
            { option: "B", answer: "wealthy", chinese_answer: "富有的", chinese_romanization: "fùyǒu de" },
            { option: "C", answer: "comfortable", chinese_answer: "舒适的", chinese_romanization: "shūshì de" },
            { option: "D", answer: "affluent", chinese_answer: "富裕的", chinese_romanization: "fùyù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'destitute' means very, very poor. It means not having enough money to buy things like food, water, a house, or clothes." +
            "<br><br>" +
            "(B) 'wealthy' means having a great deal of money, resources, or assets." +
            "<br><br>" +
            "(C) 'comfortable' means providing physical ease and relaxation." +
            "<br><br>" +
            "(D) 'affluent' means having a great deal of money; wealthy.",
        chinese_explanation: "(A) '贫困的' 意味着非常非常穷。它意味着没有足够的钱买食物、水、房子或衣服。" +
            "<br><br>" +
            "(B) '富有的' 意味着拥有大量金钱、资源或资产的。" +
            "<br><br>" +
            "(C) '舒适的' 意味着提供身体上的舒适和放松的。" +
            "<br><br>" +
            "(D) '富裕的' 意味着拥有大量金钱的；富有的。"
    },
    {
        id: 4,
        question: "The lighthouse was visible even from a __________ point on the shore.",
        chinese_question: "即使从岸上的一个 __________ 点也能看到灯塔。",
        answers: [
            { option: "A", answer: "distant", chinese_answer: "遥远的", chinese_romanization: "yáoyuǎn de" },
            { option: "B", answer: "nearby", chinese_answer: "附近的", chinese_romanization: "fùjìn de" },
            { option: "C", answer: "close", chinese_answer: "近的", chinese_romanization: "jìn de" },
            { option: "D", answer: "adjacent", chinese_answer: "毗邻的", chinese_romanization: "pílín de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'distant' means far away in space or time." +
            "<br><br>" +
            "(B) 'nearby' means not far away." +
            "<br><br>" +
            "(C) 'close' means only a short distance away or apart in space or time." +
            "<br><br>" +
            "(D) 'adjacent' means next to or adjoining something else.",
        chinese_explanation: "(A) '遥远的' 意味着在空间或时间上远离的。" +
            "<br><br>" +
            "(B) '附近的' 意味着不远的。" +
            "<br><br>" +
            "(C) '近的' 意味着在空间或时间上只有很短的距离或距离。" +
            "<br><br>" +
            "(D) '毗邻的' 意味着紧邻或毗邻其他东西的。"
    },
    {
        id: 5,
        question: "The __________ warnings from scientists about climate change need to be taken seriously by everyone.",
        chinese_question: "科学家关于气候变化的__________警告需要每个人认真对待。",
        answers: [
            { option: "A", answer: "optimistic", chinese_answer: "乐观的", chinese_romanization: "lèguān de" },
            { option: "B", answer: "cheerful", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "C", answer: "dire", chinese_answer: "严重的", chinese_romanization: "yánzhòng de" },
            { option: "D", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dire' means extremely serious or urgent." +
            "<br><br>" +
            "(A) 'optimistic' means hopeful and confident about the future." +
            "<br><br>" +
            "(B) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(D) 'mild' means gentle and not harsh or severe.",
        chinese_explanation: "(C) '严重的' 一词意味着非常严重或紧急。" +
            "<br><br>" +
            "(A) '乐观的' 意味着对未来充满希望和信心。" +
            "<br><br>" +
            "(B) '愉快的' 意味着明显地快乐和乐观。" +
            "<br><br>" +
            "(D) '温和的' 意味着温柔且不严厉或不苛刻的。"
    },
    {
        id: 6,
        question: "She is a __________ candidate for the job, having the necessary skills and experience.",
        chinese_question: "她是这个职位的 __________ 候选人，具备必要的技能和经验。",
        answers: [
            { option: "A", answer: "unqualified", chinese_answer: "不合格的", chinese_romanization: "bù hégé de" },
            { option: "B", answer: "unsuitable", chinese_answer: "不适合的", chinese_romanization: "bù shìhé de" },
            { option: "C", answer: "inappropriate", chinese_answer: "不适当的", chinese_romanization: "bù shìdàng de" },
            { option: "D", answer: "qualified", chinese_answer: "合格的", chinese_romanization: "hégé de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'qualified' means officially recognized as being trained to perform a particular job; certified." +
            "<br><br>" +
            "(A) 'unqualified' means not officially recognized as being trained to perform a particular job." +
            "<br><br>" +
            "(B) 'unsuitable' means not fitting or appropriate." +
            "<br><br>" +
            "(C) 'inappropriate' means not suitable or proper in the circumstances.",
        chinese_explanation: "(D) '合格的' 意味着被正式承认为经过培训可以从事某项工作；有资质的。" +
            "<br><br>" +
            "(A) '不合格的' 意味着没有被正式承认为经过培训可以从事某项工作。" +
            "<br><br>" +
            "(B) '不适合的' 意味着不合适的或不适当的。" +
            "<br><br>" +
            "(C) '不适当的' 意味着在某种情况下不合适的或不正确的。"
    },
    {
        id: 7,
        question: "The __________ speaker was convenient for outdoor events, as it could easily be moved and set up anywhere.",
        chinese_question: "这种 __________ 的音响非常适合户外活动，因为它可以轻松移动并在任何地方安装。",
        answers: [
            { option: "A", answer: "stationary", chinese_answer: "固定的", chinese_romanization: "gùdìng de" },
            { option: "B", answer: "fixed", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "C", answer: "portable", chinese_answer: "便携的", chinese_romanization: "biànxié de" },
            { option: "D", answer: "immovable", chinese_answer: "不可移动的", chinese_romanization: "bù kě yídòng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'portable' means able to be easily carried or moved." +
            "<br><br>" +
            "(A) 'stationary' means not moving or not intended to be moved." +
            "<br><br>" +
            "(B) 'fixed' means securely placed or fastened; stable." +
            "<br><br>" +
            "(D) 'immovable' means not able to be moved.",
        chinese_explanation: "(C) '便携的' 意味着能够轻松携带或移动的。" +
            "<br><br>" +
            "(A) '固定的' 意味着不移动或不打算移动的。" +
            "<br><br>" +
            "(B) '稳定的' 意味着牢固放置或固定的；稳定的。" +
            "<br><br>" +
            "(D) '不可移动的' 意味着不能移动的。"
    },
    {
        id: 8,
        question: "He spent his __________ afternoons lounging by the pool, doing nothing of importance.",
        chinese_question: "他__________的下午在泳池旁懒洋洋地躺着，做些无关紧要的事。",
        answers: [
            { option: "A", answer: "productive", chinese_answer: "有成效的", chinese_romanization: "yǒu chéngxiào de" },
            { option: "B", answer: "industrious", chinese_answer: "勤劳的", chinese_romanization: "qínláo de" },
            { option: "C", answer: "idle", chinese_answer: "闲散的", chinese_romanization: "xiánsǎn de" },
            { option: "D", answer: "active", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'idle' means avoiding work; lazy." +
            "<br><br>" +
            "(A) 'productive' means achieving or creating a lot of valuable things or results." +
            "<br><br>" +
            "(B) 'industrious' means diligent and hard-working." +
            "<br><br>" +
            "(D) 'active' means engaging or ready to engage in physically energetic pursuits.",
        chinese_explanation: "(C) '闲散的'一词意味着避免工作；懒惰的。" +
            "<br><br>" +
            "(A) '有成效的' 意思是取得或创造许多有价值的东西或结果。" +
            "<br><br>" +
            "(B) '勤劳的' 意味着勤奋和努力工作的。" +
            "<br><br>" +
            "(D) '活跃的' 意味着从事或准备从事体力活动的。"
    },
    {
        id: 9,
        question: "His __________ performance in the competition left the judges unimpressed.",
        chinese_question: "他在比赛中的 __________ 表现让评委印象不深。",
        answers: [
            { option: "A", answer: "impressive", chinese_answer: "印象深刻", chinese_romanization: "yìnxiàng shēnkè" },
            { option: "B", answer: "stunning", chinese_answer: "惊人", chinese_romanization: "jīngrén" },
            { option: "C", answer: "lackluster", chinese_answer: "平淡", chinese_romanization: "píngdàn" },
            { option: "D", answer: "remarkable", chinese_answer: "显著", chinese_romanization: "xiǎnzhù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lackluster' means lacking in vitality, force, or conviction; uninspired or uninspiring. It means dull or lacking excitement; not inspiring or impressive." +
            "<br><br>" +
            "(A) 'impressive' means evoking admiration through size, quality, or skill." +
            "<br><br>" +
            "(B) 'stunning' means extremely impressive or attractive." +
            "<br><br>" +
            "(D) 'remarkable' means worthy of attention; striking.",
        chinese_explanation: "(C) '平淡' 意味着缺乏活力、力量或信念；毫无灵感或毫无感染力。词意思是乏味或缺乏激情；没有启发性或令人印象深刻。" +
            "<br><br>" +
            "(A) '印象深刻' 意味着通过规模、质量或技能引起钦佩。" +
            "<br><br>" +
            "(B) '惊人' 意味着极具吸引力或吸引力。" +
            "<br><br>" +
            "(D) '显著' 意味着值得注意；引人注目。"
    },
    {
        id: 10,
        question: "There was a __________ difference in the color of the two fabrics, noticeable only upon close inspection under bright light.",
        chinese_question: "两种织物的颜色有 __________ 的差异，只有在明亮的光线下仔细观察才能注意到。",
        answers: [
            { option: "A", answer: "slight", chinese_answer: "轻微的", chinese_romanization: "qīngwēi de" },
            { option: "B", answer: "significant", chinese_answer: "显著的", chinese_romanization: "xiǎnzhù de" },
            { option: "C", answer: "major", chinese_answer: "主要的", chinese_romanization: "zhǔyào de" },
            { option: "D", answer: "drastic", chinese_answer: "激烈的", chinese_romanization: "jīliè de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'slight' means small in degree; inconsiderable." +
            "<br><br>" +
            "(B) 'significant' means sufficiently great or important to be worthy of attention; noteworthy." +
            "<br><br>" +
            "(C) 'major' means important, serious, or significant." +
            "<br><br>" +
            "(D) 'drastic' means likely to have a strong or far-reaching effect; radical and extreme.",
        chinese_explanation: "(A) '轻微的' 意味着程度小；不重要的。" +
            "<br><br>" +
            "(B) '显著的' 意味着足够大或重要，值得注意；值得注意的。" +
            "<br><br>" +
            "(C) '主要的' 意味着重要的、严重的或重要的。" +
            "<br><br>" +
            "(D) '激烈的' 意味着可能有强烈或深远影响的；激进和极端的。"
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
