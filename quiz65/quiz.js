// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her vivid __________ allowed her to create fantastical worlds in her novels that captivated readers worldwide.",
        chinese_question: "她丰富的 __________ 使她在小说中创造出奇幻的世界，吸引了全世界的读者。",
        answers: [
            { option: "A", answer: "memory", chinese_answer: "记忆", chinese_romanization: "jìyì" },
            { option: "B", answer: "imagination", chinese_answer: "想象力", chinese_romanization: "xiǎngxiàng lì" },
            { option: "C", answer: "reality", chinese_answer: "现实", chinese_romanization: "xiànshí" },
            { option: "D", answer: "routine", chinese_answer: "常规", chinese_romanization: "chángguī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'imagination' means the faculty or action of forming new ideas, or images or concepts of external objects not present to the senses." +
            "<br><br>" +
            "(A) 'memory' means the faculty by which the mind stores and remembers information." +
            "<br><br>" +
            "(C) 'reality' means the state of things as they actually exist." +
            "<br><br>" +
            "(D) 'routine' means a sequence of actions regularly followed.",
        chinese_explanation: "(B) '想象力' 意味着形成新想法或外部物体图像或概念的能力或行动。" +
            "<br><br>" +
            "(A) '记忆' 意味着大脑储存和记住信息的能力。" +
            "<br><br>" +
            "(C) '现实' 意味着事物的实际存在状态。" +
            "<br><br>" +
            "(D) '常规' 意味着经常遵循的动作顺序。"
    },
    {
        id: 2,
        question: "The hikers faced difficult __________ as they navigated through the rocky and uneven path.",
        chinese_question: "徒步旅行者在穿越崎岖不平的小径时面临着困难的 __________。",
        answers: [
            { option: "A", answer: "terrain", chinese_answer: "地形", chinese_romanization: "dìxíng" },
            { option: "B", answer: "atmosphere", chinese_answer: "大气", chinese_romanization: "dàqì" },
            { option: "C", answer: "altitude", chinese_answer: "海拔", chinese_romanization: "hǎibá" },
            { option: "D", answer: "weather", chinese_answer: "天气", chinese_romanization: "tiānqì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'terrain' means a stretch of land, especially with regard to its physical features." +
            "<br><br>" +
            "(B) 'atmosphere' means the envelope of gases surrounding the earth or another planet." +
            "<br><br>" +
            "(C) 'altitude' means the height of an object or point in relation to sea level or ground level." +
            "<br><br>" +
            "(D) 'weather' means the state of the atmosphere at a particular place and time.",
        chinese_explanation: "(A) '地形' 一词意味着一片土地，特别是关于其物理特征的。" +
            "<br><br>" +
            "(B) '大气' 意味着围绕地球或其他行星的气体包层。" +
            "<br><br>" +
            "(C) '海拔' 意味着物体或点相对于海平面或地面高度。" +
            "<br><br>" +
            "(D) '天气' 意味着特定地点和时间的大气状态。"
    },
    {
        id: 3,
        question: "The store offers a wide range of __________, from casual wear to formal attire.",
        chinese_question: "这家店提供各种 __________，从休闲装到正装都有。",
        answers: [
            { option: "A", answer: "apparel", chinese_answer: "服装", chinese_romanization: "fúzhuāng" },
            { option: "B", answer: "electronics", chinese_answer: "电子产品", chinese_romanization: "diànzǐ chǎnpǐn" },
            { option: "C", answer: "groceries", chinese_answer: "杂货", chinese_romanization: "záhuò" },
            { option: "D", answer: "furniture", chinese_answer: "家具", chinese_romanization: "jiājù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'apparel' means clothing." +
            "<br><br>" +
            "(B) 'electronics' means devices or systems that operate using the principles of electronics." +
            "<br><br>" +
            "(C) 'groceries' means items of food sold in a grocery store." +
            "<br><br>" +
            "(D) 'furniture' means large movable equipment, such as tables and chairs, used to make a house, office, or other space suitable for living or working.",
        chinese_explanation: "(A) '服装' 一词意味着衣服。" +
            "<br><br>" +
            "(B) '电子产品' 意味着使用电子原理操作的设备或系统。" +
            "<br><br>" +
            "(C) '杂货' 意味着在杂货店出售的食品。" +
            "<br><br>" +
            "(D) '家具' 意味着大型可移动设备，如桌子和椅子，用于使房子、办公室或其他空间适合居住或工作。"
    },
    {
        id: 4,
        question: "He realized he was becoming an __________ when he couldn't go a day without playing video games.",
        chinese_question: "当他发现自己每天都离不开电子游戏时，他意识到自己正在成为一个 __________。",
        answers: [
            { option: "A", answer: "amateur", chinese_answer: "业余爱好者", chinese_romanization: "yèyú àihào zhě" },
            { option: "B", answer: "addict", chinese_answer: "成瘾者", chinese_romanization: "chéng yǐn zhě" },
            { option: "C", answer: "expert", chinese_answer: "专家", chinese_romanization: "zhuānjiā" },
            { option: "D", answer: "enthusiast", chinese_answer: "爱好者", chinese_romanization: "àihào zhě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'addict' means a person who is addicted to a particular substance or activity." +
            "<br><br>" +
            "(A) 'amateur' means a person who engages in a pursuit, especially a sport, on an unpaid basis." +
            "<br><br>" +
            "(C) 'expert' means a person who has a comprehensive and authoritative knowledge of or skill in a particular area." +
            "<br><br>" +
            "(D) 'enthusiast' means a person who is very interested in and involved with a particular subject or activity.",
        chinese_explanation: "(B) '成瘾者' 一词意味着对某种物质或活动上瘾的人。" +
            "<br><br>" +
            "(A) '业余爱好者' 意味着从事某种追求（特别是运动）但不支付报酬的人。" +
            "<br><br>" +
            "(C) '专家' 意味着对某一特定领域有全面和权威知识或技能的人。" +
            "<br><br>" +
            "(D) '爱好者' 意味着对某一特定主题或活动非常感兴趣和参与的人。"
    },
    {
        id: 5,
        question: "She had the __________ to become a great leader, if only she believed in herself more.",
        chinese_question: "她有成为伟大领导者的 __________，如果她能更相信自己。",
        answers: [
            { option: "A", answer: "impossibility", chinese_answer: "不可能", chinese_romanization: "bù kěnéng" },
            { option: "B", answer: "limitation", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
            { option: "C", answer: "potential", chinese_answer: "潜力", chinese_romanization: "qiánlì" },
            { option: "D", answer: "weakness", chinese_answer: "弱点", chinese_romanization: "ruòdiǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'potential' means the inherent ability or capacity for growth or development." +
            "<br><br>" +
            "(A) 'impossibility' means the state or fact of being impossible." +
            "<br><br>" +
            "(B) 'limitation' means a restriction or boundary." +
            "<br><br>" +
            "(D) 'weakness' means the state or condition of lacking strength.",
        chinese_explanation: "(C) '潜力' 在比喻意义上意味着内在的增长或发展的能力。" +
            "<br><br>" +
            "(A) '不可能' 意味着不可能的状态或事实。" +
            "<br><br>" +
            "(B) '限制' 意味着限制或边界。" +
            "<br><br>" +
            "(D) '弱点' 意味着缺乏力量的状态或条件。"
    },
    {
        id: 6,
        question: "The town celebrated its growth over the past __________, reflecting on ten years of progress and change.",
        chinese_question: "小镇庆祝过去__________的发展，回顾了十年的进步和变化。",
        answers: [
            { option: "A", answer: "year", chinese_answer: "年", chinese_romanization: "nián" },
            { option: "B", answer: "century", chinese_answer: "世纪", chinese_romanization: "shìjì" },
            { option: "C", answer: "month", chinese_answer: "月", chinese_romanization: "yuè" },
            { option: "D", answer: "decade", chinese_answer: "十年", chinese_romanization: "shínián" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'decade' means a period of ten years." +
            "<br><br>" +
            "(A) 'year' means a period of twelve months." +
            "<br><br>" +
            "(B) 'century' means a period of one hundred years." +
            "<br><br>" +
            "(C) 'month' means each of the twelve named periods into which a year is divided.",
        chinese_explanation: "(D) '十年' 一词意味着十年的时间。" +
            "<br><br>" +
            "(A) '年' 意味着十二个月的时间。" +
            "<br><br>" +
            "(B) '世纪' 意味着一百年的时间。" +
            "<br><br>" +
            "(C) '月' 意味着一年中被分成的十二个命名期间中的每一个。"
    },
    {
        id: 7,
        question: "Gathering for a big dinner with special dishes and festive decorations on New Year's Eve is a family __________.",
        chinese_question: "在除夕夜，全家人聚在一起享用特别的菜肴和节日装饰是一个家庭 __________。",
        answers: [
            { option: "A", answer: "tradition", chinese_answer: "传统", chinese_romanization: "chuántǒng" },
            { option: "B", answer: "incident", chinese_answer: "事件", chinese_romanization: "shìjiàn" },
            { option: "C", answer: "surprise", chinese_answer: "惊喜", chinese_romanization: "jīngxǐ" },
            { option: "D", answer: "accident", chinese_answer: "意外", chinese_romanization: "yìwài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'tradition' means the transmission of customs or beliefs from generation to generation. It is something that families or communities do every year or on special occasions." +
            "<br><br>" +
            "(B) 'incident' means an event or occurrence. It can be something that happens, either good or bad." +
            "<br><br>" +
            "(C) 'surprise' means an unexpected or astonishing event, fact, or thing. It is something that you did not know would happen." +
            "<br><br>" +
            "(D) 'accident' means an unfortunate incident that happens unexpectedly and unintentionally. It is something bad that happens by chance.",
        chinese_explanation: "(A) '传统' 意味着习俗或信仰的代代相传。这是家庭或社区每年或在特殊场合做的事情。" +
            "<br><br>" +
            "(B) '事件' 意味着一个事件或发生的事情。它可以是好事或坏事。" +
            "<br><br>" +
            "(C) '惊喜' 意味着一个意想不到或惊人的事件、事实或事情。这是你不知道会发生的事情。" +
            "<br><br>" +
            "(D) '意外' 意味着意外发生和无意发生的不幸事件。这是偶然发生的坏事。"
    },
    {
        id: 8,
        question: "She was a prominent __________ in the world of fashion, known for her influential designs and trendsetting styles.",
        chinese_question: "她是时尚界的一个著名 __________，以其具有影响力的设计和引领潮流的风格而闻名。",
        answers: [
            { option: "A", answer: "figure", chinese_answer: "人物", chinese_romanization: "rénwù" },
            { option: "B", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "C", answer: "outsider", chinese_answer: "局外人", chinese_romanization: "júwàirén" },
            { option: "D", answer: "critic", chinese_answer: "评论家", chinese_romanization: "pínglùnjiā" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'figure' metaphorically means an important or notable person in a particular sphere." +
            "<br><br>" +
            "(B) 'novice' means a person new to or inexperienced in a field or situation." +
            "<br><br>" +
            "(C) 'outsider' means a person who does not belong to a particular group." +
            "<br><br>" +
            "(D) 'critic' means a person who expresses an unfavorable opinion of something.",
        chinese_explanation: "(A) '人物' 比喻在特定领域内重要或著名的人。" +
            "<br><br>" +
            "(B) '新手' 意味着在某领域或情况下新手或没有经验的人。" +
            "<br><br>" +
            "(C) '局外人' 意味着不属于特定群体的人。" +
            "<br><br>" +
            "(D) '评论家' 意味着对某事表达不赞成意见的人。"
    },
    {
        id: 9,
        question: "During the drought, the __________ of water became a major concern for the entire community.",
        chinese_question: "在干旱期间，水的__________成为整个社区的主要关注点。",
        answers: [
            { option: "A", answer: "scarcity", chinese_answer: "稀缺", chinese_romanization: "xīquē" },
            { option: "B", answer: "abundance", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
            { option: "C", answer: "excess", chinese_answer: "过量", chinese_romanization: "guòliàng" },
            { option: "D", answer: "surplus", chinese_answer: "剩余", chinese_romanization: "shèngyú" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'scarcity' means the state of being scarce or in short supply." +
            "<br><br>" +
            "(B) 'abundance' means a very large quantity of something." +
            "<br><br>" +
            "(C) 'excess' means an amount of something that is more than necessary." +
            "<br><br>" +
            "(D) 'surplus' means an amount of something left over when requirements have been met.",
        chinese_explanation: "(A) '稀缺' 一词意味着稀缺或供应不足的状态。" +
            "<br><br>" +
            "(B) '丰富' 意味着数量非常大。" +
            "<br><br>" +
            "(C) '过量' 意味着超过必要的数量。" +
            "<br><br>" +
            "(D) '剩余' 意味着满足需求后剩余的数量。"
    },
    {
        id: 10,
        question: "The product was recalled due to a __________ in its design that caused it to malfunction.",
        chinese_question: "由于设计上的__________导致产品故障，产品被召回。",
        answers: [
            { option: "A", answer: "strength", chinese_answer: "强度", chinese_romanization: "qiángdù" },
            { option: "B", answer: "feature", chinese_answer: "特点", chinese_romanization: "tèdiǎn" },
            { option: "C", answer: "defect", chinese_answer: "缺陷", chinese_romanization: "quēxiàn" },
            { option: "D", answer: "enhancement", chinese_answer: "增强", chinese_romanization: "zēngqiáng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'defect' means an imperfection or fault." +
            "<br><br>" +
            "(A) 'strength' means the quality or state of being physically strong." +
            "<br><br>" +
            "(B) 'feature' means a distinctive attribute or aspect of something." +
            "<br><br>" +
            "(D) 'enhancement' means an increase or improvement in quality, value, or extent.",
        chinese_explanation: "(C) '缺陷' 一词意味着不完美或故障。" +
            "<br><br>" +
            "(A) '强度' 意味着身体强壮的品质或状态。" +
            "<br><br>" +
            "(B) '特点' 意味着某事的独特属性或方面。" +
            "<br><br>" +
            "(D) '增强' 意味着质量、价值或范围的增加或改善。"
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
