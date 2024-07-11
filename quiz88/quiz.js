// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The salesperson tried to __________ the customer into buying the more expensive model by emphasizing its features.",
        chinese_question: "销售员试图 __________ 顾客购买更昂贵的型号，强调其功能。",
        answers: [
            { option: "A", answer: "demand", chinese_answer: "要求", chinese_romanization: "yāoqiú" },
            { option: "B", answer: "discourage", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
            { option: "C", answer: "coax", chinese答案: "哄骗", chinese罗马拼音: "hǒngpiàn" },
            { option: "D", answer: "reject", chinese答案: "拒绝", chinese罗马拼音: "jùjué" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'coax' means gently and persistently persuade (someone) to do something." +
            "<br><br>" +
            "(A) 'demand' means ask authoritatively or brusquely." +
            "<br><br>" +
            "(B) 'discourage' means cause (someone) to lose confidence or enthusiasm." +
            "<br><br>" +
            "(D) 'reject' means refuse to accept, consider, or make use of.",
        chinese_explanation: "(C) '哄骗' 一词意味着温和而持久地说服（某人）做某事。" +
            "<br><br>" +
            "(A) '要求' 意味着以权威或粗暴的方式要求。" +
            "<br><br>" +
            "(B) '劝阻' 意味着使（某人）失去信心或热情。" +
            "<br><br>" +
            "(D) '拒绝' 意味着拒绝接受、考虑或使用。"
    },
    {
        id: 2,
        question: "Every year, the town holds a parade to __________ the brave soldiers who fought in the war.",
        chinese_question: "每年，镇上都会举行游行， __________ 那些在战争中战斗的勇敢士兵。",
        answers: [
            { option: "A", answer: "disregard", chinese答案: "忽视", chinese罗马拼音: "hūshì" },
            { option: "B", answer: "commemorate", chinese答案: "纪念", chinese罗马拼音: "jìniàn" },
            { option: "C", answer: "forget", chinese答案: "忘记", chinese罗马拼音: "wàngjì" },
            { option: "D", answer: "dishonour", chinese答案: "侮辱", chinese罗马拼音: "wǔrǔ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'commemorate' means recall and show respect for (someone or something)." +
            "<br><br>" +
            "(A) 'disregard' means to pay no attention to; ignore." +
            "<br><br>" +
            "(C) 'forget' means fail to remember." +
            "<br><br>" +
            "(D) 'dishonour' means bring shame or disgrace on.",
        chinese_explanation: "(B) '纪念' 一词意味着回忆并表示尊重（某人或某事）。" +
            "<br><br>" +
            "(A) '忽视' 意味着不注意；忽视。" +
            "<br><br>" +
            "(C) '忘记' 意味着未能记住。" +
            "<br><br>" +
            "(D) '侮辱' 意味着带来耻辱或耻辱。"
    },
    {
        id: 3,
        question: "The new lighting system was designed to __________ the beauty of the garden, highlighting its best features.",
        chinese_question: "新的照明系统旨在 __________ 花园的美丽，突出其最佳特点。",
        answers: [
            { option: "A", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "B", answer: "obscure", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" },
            { option: "C", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
            { option: "D", answer: "undermine", chinese_answer: "削弱", chinese_romanization: "xuēruò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of." +
            "<br><br>" +
            "(A) 'diminish' means make or become less." +
            "<br><br>" +
            "(B) 'obscure' means keep from being seen; conceal." +
            "<br><br>" +
            "(D) 'undermine' means erode the base or foundation of.",
        chinese_explanation: "(C) '增强' 一词意味着加强、增加或进一步改善质量、价值或程度。" +
            "<br><br>" +
            "(A) '减少' 意味着使变少或变小。" +
            "<br><br>" +
            "(B) '遮掩' 意味着使看不见；隐藏。" +
            "<br><br>" +
            "(D) '削弱' 意味着侵蚀基础或基础。"
    },
    {
        id: 4,
        question: "He would often __________ until the last minute, then rush to complete his assignments before the deadline.",
        chinese_question: "他经常 __________ 到最后一刻，然后赶在截止日期前完成作业。",
        answers: [
            { option: "A", answer: "prioritize", chinese_answer: "优先考虑", chinese_romanization: "yōuxiān kǎolǜ" },
            { option: "B", answer: "expedite", chinese_answer: "加快", chinese_romanization: "jiākuài" },
            { option: "C", answer: "initiate", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
            { option: "D", answer: "procrastinate", chinese_answer: "拖延", chinese_romanization: "tuōyán" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'procrastinate' means delay or postpone action; put off doing something." +
            "<br><br>" +
            "(A) 'prioritize' means designate or treat something as more important than other things." +
            "<br><br>" +
            "(B) 'expedite' means make an action or process happen sooner or be accomplished more quickly." +
            "<br><br>" +
            "(C) 'initiate' means cause a process or action to begin.",
        chinese_explanation: "(D) '拖延' 一词意味着延迟或推迟行动；拖延做某事。" +
            "<br><br>" +
            "(A) '优先考虑' 意味着将某事指定或视为比其他事更重要。" +
            "<br><br>" +
            "(B) '加快' 意味着使行动或过程更快发生或更快完成。" +
            "<br><br>" +
            "(C) '开始' 意味着使一个过程或行动开始。"
    },
    {
        id: 5,
        question: "The loud noise __________ him from his sleep, causing him to jump out of bed.",
        chinese_question: "巨大的噪音把他 __________ 了，吓得他从床上跳了起来。",
        answers: [
            { option: "A", answer: "lulled", chinese_answer: "哄", chinese_romanization: "hǒng" },
            { option: "B", answer: "calmed", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
            { option: "C", answer: "roused", chinese_answer: "唤醒", chinese_romanization: "huànxǐng" },
            { option: "D", answer: "soothed", chinese_answer: "舒缓", chinese_romanization: "shūhuǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'roused' means to bring out of sleep; awaken." +
            "<br><br>" +
            "(A) 'lulled' means to calm or send to sleep, typically with soothing sounds or movements." +
            "<br><br>" +
            "(B) 'calmed' means made peaceful." +
            "<br><br>" +
            "(D) 'soothed' means to gently calm a person or their feelings.",
        chinese_explanation: "(C) '唤醒' 一词意味着唤醒；唤醒。" +
            "<br><br>" +
            "(A) '哄' 意味着通常用安抚的声音或动作使人安静或入睡。" +
            "<br><br>" +
            "(B) '安抚' 意味着使平静。" +
            "<br><br>" +
            "(D) '舒缓' 意味着轻轻地使某人或他们的情感平静。"
    },
    {
        id: 6,
        question: "The teacher had to __________ the students for their disruptive behavior during the lecture.",
        chinese_question: "老师不得不 __________ 学生们在讲课期间的扰乱行为。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
            { option: "B", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
            { option: "C", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
            { option: "D", answer: "admonish", chinese_answer: "告诫", chinese_romanization: "gàojiè" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'admonish' means warn or reprimand someone firmly." +
            "<br><br>" +
            "(A) 'praise' means express warm approval or admiration of." +
            "<br><br>" +
            "(B) 'reward' means give something to (someone) in recognition of their services, efforts, or achievements." +
            "<br><br>" +
            "(C) 'encourage' means give support, confidence, or hope to (someone).",
        chinese_explanation: "(D) '告诫' 一词意味着严厉警告或训斥某人。" +
            "<br><br>" +
            "(A) '表扬' 意味着表示热烈的赞同或钦佩。" +
            "<br><br>" +
            "(B) '奖励' 意味着为了表彰某人的服务、努力或成就而给予某物。" +
            "<br><br>" +
            "(C) '鼓励' 意味着给予（某人）支持、信心或希望。"
    },
    {
        id: 7,
        question: "After skipping breakfast and lunch, he was so hungry that he __________ his dinner in just a few minutes.",
        chinese_question: "他没吃早餐和午餐，饿得厉害，几分钟内就 __________ 了晚餐。",
        answers: [
            { option: "A", answer: "nibbled", chinese_answer: "啃", chinese_romanization: "kěn" },
            { option: "B", answer: "devoured", chinese_answer: "吞食", chinese_romanization: "tūnshí" },
            { option: "C", answer: "sampled", chinese_answer: "品尝", chinese_romanization: "pǐncháng" },
            { option: "D", answer: "tasted", chinese_answer: "尝", chinese_romanization: "cháng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'devoured' means to eat food or prey hungrily or quickly." +
            "<br><br>" +
            "(A) 'nibbled' means to take small bites out of." +
            "<br><br>" +
            "(C) 'sampled' means to try a small part of something." +
            "<br><br>" +
            "(D) 'tasted' means to perceive or experience the flavor of.",
        chinese_explanation: "(B) '吞食' 一词意味着饥饿或快速地吃食物或猎物。" +
            "<br><br>" +
            "(A) '啃' 意味着小口地咬。" +
            "<br><br>" +
            "(C) '品尝' 意味着尝试某物的一小部分。" +
            "<br><br>" +
            "(D) '尝' 意味着感知或体验味道。"
    },
    {
        id: 8,
        question: "The vibrant colors of the sunrise __________ sharply with the dark, stormy clouds on the horizon.",
        chinese_question: "日出的鲜艳色彩与地平线上阴暗的暴风云形成了鲜明的 __________。",
        answers: [
            { option: "A", answer: "merged", chinese答案: "融合", chinese罗马拼音: "rónghé" },
            { option: "B", answer: "contrasted", chinese答案: "对比", chinese罗马拼音: "duìbǐ" },
            { option: "C", answer: "matched", chinese答案: "匹配", chinese罗马拼音: "pǐpèi" },
            { option: "D", answer: "harmonized", chinese答案: "和谐", chinese罗马拼音: "héxié" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'contrasted' means to differ strikingly." +
            "<br><br>" +
            "(A) 'merged' means to combine or cause to combine to form a single entity." +
            "<br><br>" +
            "(C) 'matched' means to correspond or cause to correspond in some essential respect." +
            "<br><br>" +
            "(D) 'harmonized' means to produce a pleasing visual combination.",
        chinese_explanation: "(B) '对比' 一词意味着显著不同。" +
            "<br><br>" +
            "(A) '融合' 意味着结合或使结合形成单一实体。" +
            "<br><br>" +
            "(C) '匹配' 意味着在某些基本方面相对应或使其相对应。" +
            "<br><br>" +
            "(D) '和谐' 意味着产生赏心悦目的视觉组合。"
    },
    {
        id: 9,
        question: "Don't __________ in the hallway; there's no time to waste before the meeting starts.",
        chinese_question: "不要在走廊里 __________，会议开始前没有时间浪费。",
        answers: [
            { option: "A", answer: "dawdle", chinese_answer: "磨蹭", chinese_romanization: "mócèng" },
            { option: "B", answer: "rush", chinese_answer: "冲", chinese_romanization: "chōng" },
            { option: "C", answer: "hurry", chinese_answer: "快", chinese_romanization: "kuài" },
            { option: "D", answer: "sprint", chinese_answer: "冲刺", chinese_romanization: "chōngcì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dawdle' means to waste time; to be slow." +
            "<br><br>" +
            "(B) 'rush' means to move with urgent haste." +
            "<br><br>" +
            "(C) 'hurry' means to move or act with great haste." +
            "<br><br>" +
            "(D) 'sprint' means to run at full speed over a short distance.",
        chinese_explanation: "(A) '磨蹭' 一词意味着浪费时间；慢吞吞。" +
            "<br><br>" +
            "(B) '冲' 意味着急匆匆地移动。" +
            "<br><br>" +
            "(C) '快' 意味着以极大的匆忙移动或行动。" +
            "<br><br>" +
            "(D) '冲刺' 意味着在短距离内全速奔跑。"
    },
    {
        id: 10,
        question: "The teacher encouraged the students to __________ their fears and address the issue directly.",
        chinese_question: "老师鼓励学生 __________ 他们的恐惧，直接解决问题。",
        answers: [
            { option: "A", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "B", answer: "confront", chinese_answer: "面对", chinese_romanization: "miàn duì" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "escape", chinese_answer: "逃脱", chinese_romanization: "táotuō" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'confront' means to face up to and deal with a problem or difficult situation." +
            "<br><br>" +
            "(A) 'avoid' means to keep away from or stop oneself from doing something." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'escape' means to break free from confinement or control.",
        chinese_explanation: "(B) '面对' 一词意味着面对并处理问题或困难的情况。" +
            "<br><br>" +
            "(A) '避免' 意味着远离或阻止自己做某事。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '逃脱' 意味着摆脱禁锢或控制。"
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
