// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The typo in the report was __________ and did not affect the overall meaning or outcome.",
        chinese_question: "报告中的拼写错误是 __________ 的，对整体意义或结果没有影响。",
        answers: [
            { option: "A", answer: "critical", chinese_answer: "关键的", chinese_romanization: "guānjiàn de" },
            { option: "B", answer: "significant", chinese_answer: "重要的", chinese_romanization: "zhòngyào de" },
            { option: "C", answer: "essential", chinese_answer: "必要的", chinese_romanization: "bìyào de" },
            { option: "D", answer: "inconsequential", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐnyào de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'inconsequential' means not important or significant." +
            "<br><br>" +
            "(A) 'critical' means of the greatest importance." +
            "<br><br>" +
            "(B) 'significant' means sufficiently great or important to be worthy of attention." +
            "<br><br>" +
            "(C) 'essential' means absolutely necessary; extremely important.",
        chinese_explanation: "(D) '无关紧要的' 意味着不重要或不显著。" +
            "<br><br>" +
            "(A) '关键的' 意味着至关重要。" +
            "<br><br>" +
            "(B) '重要的' 意味着足够大或重要，值得关注。" +
            "<br><br>" +
            "(C) '必要的' 意味着绝对必要；极其重要。"
    },
    {
        id: 2,
        question: "The __________ arrival of the guest surprised everyone at the party.",
        chinese_question: "客人的 __________ 到来让派对上的每个人都感到惊讶。",
        answers: [
            { option: "A", answer: "unexpected", chinese_answer: "意外的", chinese_romanization: "yìwài de" },
            { option: "B", answer: "anticipated", chinese_answer: "预期的", chinese_romanization: "yùqī de" },
            { option: "C", answer: "planned", chinese_answer: "计划的", chinese_romanization: "jìhuà de" },
            { option: "D", answer: "scheduled", chinese_answer: "预定的", chinese_romanization: "yùdìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'unexpected' means not expected or regarded as likely to happen." +
            "<br><br>" +
            "(B) 'anticipated' means expected or predicted." +
            "<br><br>" +
            "(C) 'planned' means decided on and arranged in advance." +
            "<br><br>" +
            "(D) 'scheduled' means included in or planned according to a schedule.",
        chinese_explanation: "(A) '意外的' 意味着没有预料到或认为可能发生的。" +
            "<br><br>" +
            "(B) '预期的' 意味着预期或预测的。" +
            "<br><br>" +
            "(C) '计划的' 意味着提前决定和安排的。" +
            "<br><br>" +
            "(D) '预定的' 意味着包含在或根据时间表计划的。"
    },
    {
        id: 3,
        question: "The lake was __________ in the early morning light, with not a ripple disturbing its calm surface.",
        chinese_question: "清晨的湖面非常 __________，没有一丝涟漪打扰其平静的表面。",
        answers: [
            { option: "A", answer: "turbulent", chinese_answer: "动荡的", chinese_romanization: "dòngdàng de" },
            { option: "B", answer: "serene", chinese_answer: "宁静的", chinese_romanization: "níngjìng de" },
            { option: "C", answer: "noisy", chinese_answer: "喧闹的", chinese_romanization: "xuānnào de" },
            { option: "D", answer: "chaotic", chinese_answer: "混乱的", chinese_romanization: "hǔnluàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'serene' means calm, peaceful, and untroubled; tranquil." +
            "<br><br>" +
            "(A) 'turbulent' means characterized by conflict, disorder, or confusion; not controlled or calm." +
            "<br><br>" +
            "(C) 'noisy' means making or given to making a lot of noise." +
            "<br><br>" +
            "(D) 'chaotic' means in a state of complete confusion and disorder.",
        chinese_explanation: "(B) '宁静的' 意味着平静、安宁、不受干扰的；宁静的。" +
            "<br><br>" +
            "(A) '动荡的' 意味着以冲突、混乱或困惑为特征的；不受控制或不平静的。" +
            "<br><br>" +
            "(C) '喧闹的' 意味着制造很多噪音或习惯于制造很多噪音的。" +
            "<br><br>" +
            "(D) '混乱的' 意味着处于完全混乱和无序的状态。"
    },
    {
        id: 4,
        question: "The steak was served on a __________ hot plate, making a loud hissing sound and releasing a mouth-watering aroma.",
        chinese_question: "牛排被端上 __________ 的热盘子，发出嘶嘶的声音，散发出令人垂涎的香味。",
        answers: [
            { option: "A", answer: "cold", chinese_answer: "冷的", chinese_romanization: "lěng de" },
            { option: "B", answer: "lukewarm", chinese_answer: "温的", chinese_romanization: "wēn de" },
            { option: "C", answer: "chilled", chinese_answer: "冷却的", chinese_romanization: "lěngquè de" },
            { option: "D", answer: "sizzling", chinese_answer: "滋滋作响的", chinese_romanization: "zīzī zuòxiǎng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'sizzling' means very hot; making a hissing sound as of food frying or cooking." +
            "<br><br>" +
            "(A) 'cold' means of or at a low or relatively low temperature." +
            "<br><br>" +
            "(B) 'lukewarm' means only moderately warm; tepid." +
            "<br><br>" +
            "(C) 'chilled' means cooled in temperature.",
        chinese_explanation: "(D) '滋滋作响的' 意味着非常热；发出煎炸食物或烹饪时的嘶嘶声。" +
            "<br><br>" +
            "(A) '冷的' 意味着温度低或相对较低。" +
            "<br><br>" +
            "(B) '温的' 意味着温度适中；温热的。" +
            "<br><br>" +
            "(C) '冷却的' 意味着温度降低。"
    },
    {
        id: 5,
        question: "The customer became __________ when he discovered that his order was incorrect for the third time.",
        chinese_question: "当顾客发现他的订单第三次出错时，他变得非常 __________。",
        answers: [
            { option: "A", answer: "pleased", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "B", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "C", answer: "irate", chinese_answer: "愤怒", chinese_romanization: "fènnù" },
            { option: "D", answer: "satisfied", chinese_answer: "满意", chinese_romanization: "mǎnyì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'irate' means feeling or characterized by great anger." +
            "<br><br>" +
            "(A) 'pleased' means feeling or showing pleasure and satisfaction." +
            "<br><br>" +
            "(B) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(D) 'satisfied' means contented; pleased.",
        chinese_explanation: "(C) '愤怒' 意味着感到或表现出极大的愤怒。" +
            "<br><br>" +
            "(A) '高兴' 意味着感到或表现出愉快和满足。" +
            "<br><br>" +
            "(B) '平静' 意味着不表现或感到紧张、愤怒或其他强烈情感。" +
            "<br><br>" +
            "(D) '满意' 意味着满足；高兴。"
    },
    {
        id: 6,
        question: "The weather in the mountains is notoriously __________, with sudden changes from sunshine to heavy snow within minutes.",
        chinese_question: "山里的天气以 __________ 闻名，几分钟内从阳光明媚突然变成大雪纷飞。",
        answers: [
            { option: "A", answer: "inconsistent", chinese_answer: "不稳定的", chinese_romanization: "bù wěndìng de" },
            { option: "B", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" },
            { option: "C", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "D", answer: "constant", chinese_answer: "持续的", chinese_romanization: "chíxù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inconsistent' means not staying the same throughout." +
            "<br><br>" +
            "(B) 'predictable' means able to be predicted." +
            "<br><br>" +
            "(C) 'stable' means not likely to change or fail; firmly established." +
            "<br><br>" +
            "(D) 'constant' means occurring continuously over a period of time.",
        chinese_explanation: "(A) '不稳定的' 意味着始终不一样的。" +
            "<br><br>" +
            "(B) '可预测的' 意味着能够被预测的。" +
            "<br><br>" +
            "(C) '稳定的' 意味着不太可能改变或失败的；牢固确立的。" +
            "<br><br>" +
            "(D) '持续的' 意味着在一段时间内持续发生的。"
    },
    {
        id: 7,
        question: "The restaurant's kitchen was impeccably clean and __________, ensuring all food was prepared safely.",
        chinese_question: "餐馆的厨房干净整洁，__________，确保所有食物都能安全地准备。",
        answers: [
            { option: "A", answer: "hygienic", chinese_answer: "卫生的", chinese_romanization: "wèishēng de" },
            { option: "B", answer: "filthy", chinese_answer: "肮脏的", chinese_romanization: "āngzāng de" },
            { option: "C", answer: "contaminated", chinese_answer: "受污染的", chinese_romanization: "shòu wūrǎn de" },
            { option: "D", answer: "unsanitary", chinese_answer: "不卫生的", chinese_romanization: "bù wèishēng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hygienic' means conducive to maintaining health and preventing disease, especially by being clean." +
            "<br><br>" +
            "(B) 'filthy' means disgustingly dirty." +
            "<br><br>" +
            "(C) 'contaminated' means having been made impure by exposure to or addition of a poisonous or polluting substance." +
            "<br><br>" +
            "(D) 'unsanitary' means not sanitary; dirty or unhygienic.",
        chinese_explanation: "(A) '卫生的' 意味着有助于保持健康和预防疾病，尤其是通过清洁。" +
            "<br><br>" +
            "(B) '肮脏的' 意味着脏得令人厌恶。" +
            "<br><br>" +
            "(C) '受污染的' 意味着由于接触或添加有毒或污染物质而变得不纯净的。" +
            "<br><br>" +
            "(D) '不卫生的' 意味着不卫生的；脏的或不卫生的。"
    },
    {
        id: 8,
        question: "Her __________ apology showed she truly regretted her actions and wanted to make amends.",
        chinese_question: "她的__________道歉表明她真的后悔自己的行为，并想弥补。",
        answers: [
            { option: "A", answer: "insincere", chinese_answer: "不真诚的", chinese_romanization: "bù zhēnchéng de" },
            { option: "B", answer: "heartfelt", chinese_answer: "真挚的", chinese_romanization: "zhēnzhì de" },
            { option: "C", answer: "superficial", chinese_answer: "肤浅的", chinese_romanization: "fūqiǎn de" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'heartfelt' means deeply and strongly felt; sincere." +
            "<br><br>" +
            "(A) 'insincere' means not expressing genuine feelings." +
            "<br><br>" +
            "(C) 'superficial' means existing or occurring at or on the surface." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(B) '真挚的'一词意味着深深和强烈地感受到的；真诚的。" +
            "<br><br>" +
            "(A) '不真诚的' 意味着不表达真实感情的。" +
            "<br><br>" +
            "(C) '肤浅的' 意味着存在或发生在表面上的。" +
            "<br><br>" +
            "(D) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 9,
        question: "The company was accused of __________ activities that deceived its investors.",
        chinese_question: "该公司被指控从事 __________ 活动，欺骗了其投资者。",
        answers: [
            { option: "A", answer: "legitimate", chinese_answer: "合法", chinese_romanization: "héfǎ" },
            { option: "B", answer: "honest", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
            { option: "C", answer: "fraudulent", chinese_answer: "欺诈", chinese_romanization: "qīzhà" },
            { option: "D", answer: "lawful", chinese_answer: "合法", chinese_romanization: "héfǎ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fraudulent' means obtained, done by, or involving deception, especially criminal deception." +
            "<br><br>" +
            "(A) 'legitimate' means conforming to the law or to rules." +
            "<br><br>" +
            "(B) 'honest' means free of deceit; truthful and sincere." +
            "<br><br>" +
            "(D) 'lawful' means conforming to, permitted by, or recognized by law or rules.",
        chinese_explanation: "(C) '欺诈' 意味着通过欺骗获得、完成的或涉及的，尤其是刑事欺骗。" +
            "<br><br>" +
            "(A) '合法' 意味着遵守法律或规则。" +
            "<br><br>" +
            "(B) '诚实' 意味着没有欺骗；真实和真诚。" +
            "<br><br>" +
            "(D) '合法' 意味着符合法律或规则。"
    },
    {
        id: 10,
        question: "The __________ light from the candle barely illuminated the room, creating a dim and cozy atmosphere.",
        chinese_question: "烛光__________，几乎照不亮房间，营造出昏暗而舒适的氛围。",
        answers: [
            { option: "A", answer: "bright", chinese_answer: "明亮的", chinese_romanization: "míngliàng de" },
            { option: "B", answer: "strong", chinese_answer: "强烈的", chinese_romanization: "qiángliè de" },
            { option: "C", answer: "faint", chinese_answer: "微弱的", chinese_romanization: "wēiruò de" },
            { option: "D", answer: "vivid", chinese_answer: "生动的", chinese_romanization: "shēngdòng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'faint' means barely perceptible; weak and dim." +
            "<br><br>" +
            "(A) 'bright' means giving out or reflecting a lot of light; shining." +
            "<br><br>" +
            "(B) 'strong' means having great physical power or strength." +
            "<br><br>" +
            "(D) 'vivid' means producing powerful feelings or strong, clear images in the mind.",
        chinese_explanation: "(C) '微弱的'一词意味着几乎不可察觉的；微弱和昏暗的。" +
            "<br><br>" +
            "(A) '明亮的' 意味着发出或反射大量光线的；闪耀的。" +
            "<br><br>" +
            "(B) '强烈的' 意味着具有强大体力或力量的。" +
            "<br><br>" +
            "(D) '生动的' 意味着产生强烈感情或强烈、清晰的图像的。"
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
