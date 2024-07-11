// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "After years of traveling, he finally found a permanent __________ to call home.",
        chinese_question: "多年旅行后，他终于找到了一个永久的__________来称之为家。",
        answers: [
            { option: "A", answer: "journey", chinese_answer: "旅程", chinese_romanization: "lǚchéng" },
            { option: "B", answer: "voyage", chinese_answer: "航行", chinese_romanization: "hángxíng" },
            { option: "C", answer: "abode", chinese_answer: "住所", chinese_romanization: "zhùsuǒ" },
            { option: "D", answer: "exploration", chinese_answer: "探索", chinese_romanization: "tànsuǒ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'abode' means a place of residence; a house or home." +
            "<br><br>" +
            "(A) 'journey' means an act of traveling from one place to another." +
            "<br><br>" +
            "(B) 'voyage' means a long journey involving travel by sea or in space." +
            "<br><br>" +
            "(D) 'exploration' means the action of traveling in or through an unfamiliar area in order to learn about it.",
        chinese_explanation: "(C) '住所' 一词意味着居住的地方；房子或家。" +
            "<br><br>" +
            "(A) '旅程' 意味着从一个地方到另一个地方的旅行行为。" +
            "<br><br>" +
            "(B) '航行' 意味着涉及海上或太空旅行的长途旅行。" +
            "<br><br>" +
            "(D) '探索' 意味着为了了解而穿越不熟悉的区域的行动。"
    },
    {
        id: 2,
        question: "The car accident resulted in several __________ who needed immediate medical attention.",
        chinese_question: "车祸造成了几名需要立即医疗救助的 __________。",
        answers: [
            { option: "A", answer: "casualties", chinese_answer: "伤亡", chinese_romanization: "shāngwáng" },
            { option: "B", answer: "witnesses", chinese_answer: "目击者", chinese_romanization: "mùjī zhě" },
            { option: "C", answer: "survivors", chinese_answer: "幸存者", chinese_romanization: "xìngcún zhě" },
            { option: "D", answer: "bystanders", chinese_answer: "旁观者", chinese_romanization: "pángguān zhě" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'casualties' means people killed or injured in a war or accident." +
            "<br><br>" +
            "(C) 'survivors' means people who remain alive after an event in which others have died." +
            "<br><br>" +
            "(D) 'bystanders' means people who are present at an event or incident but do not take part." +
            "<br><br>" +
            "(B) 'witnesses' means people who see an event, typically a crime or accident, take place.",
        chinese_explanation: "(A) '伤亡' 意味着在战争或事故中死亡或受伤的人。" +
            "<br><br>" +
            "(C) '幸存者' 意味着在他人死亡的事件中幸存下来的人。" +
            "<br><br>" +
            "(D) '旁观者' 意味着在事件或事故发生时在场但不参与的人。" +
            "<br><br>" +
            "(B) '目击者' 意味着看到事件（通常是犯罪或事故）发生的人。"
    },
    {
        id: 3,
        question: "The __________ witnessed the accident but didn't intervene.",
        chinese_question: "__________目击了事故，但没有干预。",
        answers: [
            { option: "A", answer: "participant", chinese_answer: "参与者", chinese_romanization: "cānyù zhě" },
            { option: "B", answer: "bystander", chinese_answer: "旁观者", chinese_romanization: "pángguān zhě" },
            { option: "C", answer: "culprit", chinese_answer: "罪犯", chinese_romanization: "zuìfàn" },
            { option: "D", answer: "hero", chinese_answer: "英雄", chinese_romanization: "yīngxióng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bystander' means a person who is present at an event or incident but does not take part." + 
            "<br><br>" + 
            "(A) 'participant' means a person who takes part in something." + 
            "<br><br>" + 
            "(C) 'culprit' means a person who is responsible for a crime or other misdeed." + 
            "<br><br>" + 
            "(D) 'hero' means a person who is admired for their courage, outstanding achievements, or noble qualities.",
        chinese_explanation: "(B) '旁观者'一词意味着在事件或事故现场但不参与的人。" + 
            "<br><br>" + 
            "(A) '参与者' 意味着参与某事的人。" + 
            "<br><br>" + 
            "(C) '罪犯' 意味着对犯罪或其他不当行为负责的人。" + 
            "<br><br>" + 
            "(D) '英雄' 意味着因其勇气、卓越成就或高尚品质而受人钦佩的人。"
    },
    {
        id: 4,
        question: "Despite his many talents, his impatience was a major __________ in his character.",
        chinese_question: "尽管他才华横溢，但急躁是他性格中的一个重大__________。",
        answers: [
            { option: "A", answer: "strength", chinese_answer: "优点", chinese_romanization: "yōudiǎn" },
            { option: "B", answer: "asset", chinese_answer: "资产", chinese_romanization: "zīchǎn" },
            { option: "C", answer: "flaw", chinese_answer: "缺陷", chinese_romanization: "quēxiàn" },
            { option: "D", answer: "benefit", chinese_answer: "利益", chinese_romanization: "lìyì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'flaw' means a mark, blemish, or other imperfection that mars a substance or object." + 
            "<br><br>" + 
            "(A) 'strength' means the quality or state of being physically strong." + 
            "<br><br>" + 
            "(B) 'asset' means a useful or valuable thing, person, or quality." + 
            "<br><br>" + 
            "(D) 'benefit' means an advantage or profit gained from something.",
        chinese_explanation: "(C) '缺陷'一词意味着玷污物质或物体的标记、瑕疵或其他缺陷。" + 
            "<br><br>" + 
            "(A) '优点' 意味着身体强壮的质量或状态。" + 
            "<br><br>" + 
            "(B) '资产' 意味着有用或有价值的东西、人物或品质。" + 
            "<br><br>" + 
            "(D) '利益' 意味着从某事中获得的优势或利润。"
    },
    {
        id: 5,
        question: "The young actress made her __________ on the big screen with a stunning performance.",
        chinese_question: "这位年轻女演员在大银幕上首次亮相，表现惊艳。",
        answers: [
            { option: "A", answer: "finale", chinese_answer: "终场", chinese_romanization: "zhōng chǎng" },
            { option: "B", answer: "retirement", chinese_answer: "退休", chinese_romanization: "tuìxiū" },
            { option: "C", answer: "debut", chinese_answer: "首次亮相", chinese_romanization: "shǒucì liàngxiàng" },
            { option: "D", answer: "exit", chinese_answer: "离开", chinese_romanization: "líkāi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'debut' means a person's first appearance or performance in a particular capacity or role." +
            "<br><br>" +
            "(A) 'finale' means the last part of a piece of music, a performance, or a public event, especially when particularly dramatic or exciting." +
            "<br><br>" +
            "(B) 'retirement' means the action or fact of leaving one's job and ceasing to work." +
            "<br><br>" +
            "(D) 'exit' means a way out, especially of a public building, room, or passenger vehicle.",
        chinese_explanation: "(C) '首次亮相' 意味着某人在特定角色或职能中的首次出现或表现。" +
            "<br><br>" +
            "(A) '终场' 意味着音乐作品、表演或公共活动的最后部分，尤其是特别戏剧性或令人兴奋的部分。" +
            "<br><br>" +
            "(B) '退休' 意味着离开工作岗位并停止工作的行为或事实。" +
            "<br><br>" +
            "(D) '离开' 意味着一种出去的方式，尤其是公共建筑、房间或客车的出口。"
    },
    {
        id: 6,
        question: "From her __________, the situation seemed much more complex than it appeared to others.",
        chinese_question: "从她的__________来看，情况似乎比其他人看来要复杂得多。",
        answers: [
            { option: "A", answer: "perspective", chinese_answer: "视角", chinese_romanization: "shìjiǎo" },
            { option: "B", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "avoidance", chinese_answer: "回避", chinese_romanization: "huíbì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'perspective' means a particular attitude toward or way of regarding something; a point of view." +
            "<br><br>" +
            "(B) 'ignorance' means lack of knowledge or information." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'avoidance' means the action of keeping away from or not doing something.",
        chinese_explanation: "(A) '视角' 一词意味着对某事的特定态度或看待方式；观点。" +
            "<br><br>" +
            "(B) '无知' 意味着缺乏知识或信息。" +
            "<br><br>" +
            "(C) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '回避' 意味着远离或不做某事的行为。"
    },
    {
        id: 7,
        question: "He was considered a financial __________ for his innovative investment strategies that consistently yielded high returns.",
        chinese_question: "由于他创新的投资策略持续带来高回报，他被认为是金融__________。",
        answers: [
            { option: "A", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "B", answer: "amateur", chinese_answer: "业余爱好者", chinese_romanization: "yèyú àihào zhě" },
            { option: "C", answer: "prodigy", chinese_answer: "神童", chinese_romanization: "shéntóng" },
            { option: "D", answer: "apprentice", chinese_answer: "学徒", chinese_romanization: "xuétú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prodigy' means a person, especially a young one, endowed with exceptional qualities or abilities. Figuratively, it can mean someone exceptionally talented or skilled in a particular area." +
            "<br><br>" +
            "(A) 'novice' means a person new to or inexperienced in a field or situation." +
            "<br><br>" +
            "(B) 'amateur' means a person who engages in a pursuit, especially a sport, on an unpaid basis." +
            "<br><br>" +
            "(D) 'apprentice' means a person who is learning a trade from a skilled employer, having agreed to work for a fixed period at low wages.",
        chinese_explanation: "(C) '神童' 一词意味着特别是年轻的，拥有非凡品质或能力的人。比喻地，它可以表示在某一领域特别有天赋或技能的人。" +
            "<br><br>" +
            "(A) '新手' 意味着在某个领域或情况下新来或缺乏经验的人。" +
            "<br><br>" +
            "(B) '业余爱好者' 意味着以无薪基础从事某项追求，特别是体育运动的人。" +
            "<br><br>" +
            "(D) '学徒' 意味着同意以低工资工作一段固定时间，向熟练的雇主学习一项技能的人。"
    },
    {
        id: 8,
        question: "Before making a decision, she took an __________ of her options and their potential outcomes.",
        chinese_question: "在做出决定之前，她对自己的选择及其潜在结果进行了__________。",
        answers: [
            { option: "A", answer: "chaos", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "B", answer: "inventory", chinese_answer: "清单", chinese_romanization: "qīngdān" },
            { option: "C", answer: "mess", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inventory' means a complete list of items such as property, goods in stock, or the contents of a building. Figuratively, it can mean taking stock of available options or resources." +
            "<br><br>" +
            "(A) 'chaos' means complete disorder and confusion." +
            "<br><br>" +
            "(C) 'mess' means a dirty or untidy state of things or of a place." +
            "<br><br>" +
            "(D) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(B) '清单'一词意味着包括财产、库存商品或建筑物内容的完整项目列表。比喻地，它可以表示对可用选项或资源进行盘点。" +
            "<br><br>" +
            "(A) '混乱' 意味着完全的混乱和混乱。" +
            "<br><br>" +
            "(C) '混乱' 意味着事物或地方的肮脏或凌乱状态。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能妥善照顾。"
    },
    {
        id: 9,
        question: "The digital __________ has transformed how we communicate and access information.",
        chinese_question: "数字 __________ 改变了我们沟通和获取信息的方式。",
        answers: [
            { option: "A", answer: "glimpse", chinese_answer: "一瞥", chinese_romanization: "yīpiē" },
            { option: "B", answer: "moment", chinese_answer: "瞬间", chinese_romanization: "shùnjiān" },
            { option: "C", answer: "era", chinese_answer: "时代", chinese_romanization: "shídài" },
            { option: "D", answer: "sight", chinese_answer: "视力", chinese_romanization: "shìlì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'era' metaphorically means a significant period marked by distinctive characteristics." +
            "<br><br>" +
            "(A) 'glimpse' means a momentary or partial view." +
            "<br><br>" +
            "(B) 'moment' means a very brief period of time." +
            "<br><br>" +
            "(D) 'sight' means the faculty or power of seeing.",
        chinese_explanation: "(C) '时代' 比喻以独特特点标志的显著时期。" +
            "<br><br>" +
            "(A) '一瞥' 意味着短暂或部分的视野。" +
            "<br><br>" +
            "(B) '瞬间' 意味着非常短暂的时间。" +
            "<br><br>" +
            "(D) '视力' 意味着看见的能力或力量。"
    },
    {
        id: 10,
        question: "Their __________ at the café was so engaging that they lost track of time and missed their appointment.",
        chinese_question: "他们在咖啡馆的__________如此吸引人，以至于他们忘记了时间，错过了预约。",
        answers: [
            { option: "A", answer: "conversation", chinese_answer: "对话", chinese_romanization: "duìhuà" },
            { option: "B", answer: "argument", chinese_answer: "争论", chinese_romanization: "zhēnglùn" },
            { option: "C", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" },
            { option: "D", answer: "monologue", chinese_answer: "独白", chinese_romanization: "dúbái" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'conversation' means a talk, especially an informal one, between two or more people, in which news and ideas are exchanged." +
            "<br><br>" +
            "(B) 'argument' means an exchange of diverging or opposite views, typically a heated or angry one." +
            "<br><br>" +
            "(C) 'silence' means the complete absence of sound." +
            "<br><br>" +
            "(D) 'monologue' means a long speech by one person during a conversation that prevents others from speaking.",
        chinese_explanation: "(A) '对话' 一词意味着特别是非正式的两人或多人之间的谈话，在谈话中交换新闻和想法。" +
            "<br><br>" +
            "(B) '争论' 意味着交换不同或相反的观点，通常是激烈或愤怒的。" +
            "<br><br>" +
            "(C) '沉默' 意味着完全没有声音。" +
            "<br><br>" +
            "(D) '独白' 意味着一个人在谈话中发表长篇讲话，阻止其他人发言。"
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
