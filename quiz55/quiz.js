// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her New Year's __________ was to exercise more regularly and adopt a healthier lifestyle.",
        chinese_question: "她的新年 __________ 是更定期地锻炼并采取更健康的生活方式。",
        answers: [
            { option: "A", answer: "resolution", chinese_answer: "决心", chinese_romanization: "juéxīn" },
            { option: "B", answer: "distraction", chinese_answer: "分心", chinese_romanization: "fēn xīn" },
            { option: "C", answer: "indecision", chinese_answer: "犹豫不决", chinese_romanization: "yóuyù bù jué" },
            { option: "D", answer: "uncertainty", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'resolution' means a firm decision to do or not to do something." +
            "<br><br>" +
            "(B) 'distraction' means a thing that prevents someone from giving full attention to something else." +
            "<br><br>" +
            "(C) 'indecision' means inability to decide." +
            "<br><br>" +
            "(D) 'uncertainty' means the state of being unsure.",
        chinese_explanation: "(A) '决心' 一词意味着做或不做某事的坚定决定。" +
            "<br><br>" +
            "(B) '分心' 意味着阻止某人全神贯注于其他事情的东西。" +
            "<br><br>" +
            "(C) '犹豫不决' 意味着无法决定。" +
            "<br><br>" +
            "(D) '不确定' 意味着不确定的状态。"
    },
    {
        id: 2,
        question: "The musician sang a heartfelt __________ about love and loss, touching the hearts of everyone in the audience.",
        chinese_question: "这位音乐家唱了一首关于爱与失落的感人 __________，打动了在场每个人的心。",
        answers: [
            { option: "A", answer: "essay", chinese_answer: "文章", chinese_romanization: "wénzhāng" },
            { option: "B", answer: "novel", chinese_answer: "小说", chinese_romanization: "xiǎoshuō" },
            { option: "C", answer: "report", chinese_answer: "报告", chinese_romanization: "bàogào" },
            { option: "D", answer: "ballad", chinese_answer: "民谣", chinese_romanization: "mínyáo" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ballad' means a form of verse, often a narrative set to music." +
            "<br><br>" +
            "(A) 'essay' means a short piece of writing on a particular subject." +
            "<br><br>" +
            "(B) 'novel' means a fictitious prose narrative of book length, typically representing character and action with some degree of realism." +
            "<br><br>" +
            "(C) 'report' means give a spoken or written account of something that one has observed, heard, done, or investigated.",
        chinese_explanation: "(D) '民谣' 一词意味着一种诗体形式，通常是叙述性音乐。" +
            "<br><br>" +
            "(A) '文章' 意味着关于特定主题的简短写作。" +
            "<br><br>" +
            "(B) '小说' 意味着一本长度的虚构散文叙事，通常以某种程度的现实主义描绘人物和行动。" +
            "<br><br>" +
            "(C) '报告' 意味着对观察、听到、做过或调查的事情进行口头或书面叙述。"
    },
    {
        id: 3,
        question: "The king issued a __________ to ban the use of fireworks within the city limits.",
        chinese_question: "国王发布了一项 __________，禁止在市区内使用烟花。",
        answers: [
            { option: "A", answer: "decree", chinese_answer: "法令", chinese_romanization: "fǎlìng" },
            { option: "B", answer: "request", chinese_answer: "请求", chinese_romanization: "qǐngqiú" },
            { option: "C", answer: "suggestion", chinese_answer: "建议", chinese_romanization: "jiànyì" },
            { option: "D", answer: "proposal", chinese_answer: "提议", chinese_romanization: "tíyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'decree' means an official order issued by a legal authority." +
            "<br><br>" +
            "'B' 'request' means an act of asking politely or formally for something." +
            "<br><br>" +
            "'C' 'suggestion' means an idea or plan put forward for consideration." +
            "<br><br>" +
            "'D' 'proposal' means a plan or suggestion, especially a formal or written one, put forward for consideration or discussion by others.",
        chinese_explanation: "(A) '法令' 一词意味着由法律当局发布的正式命令。" +
            "<br><br>" +
            "'B' '请求' 意味着礼貌或正式要求某物的行为。" +
            "<br><br>" +
            "'C' '建议' 意味着提出供考虑的想法或计划。" +
            "<br><br>" +
            "'D' '提议' 意味着提出供他人考虑或讨论的计划或建议，特别是正式或书面的计划或建议。"
    },
    {
        id: 4,
        question: "He wiped the sweat from his __________ after finishing the intense workout session.",
        chinese_question: "他在完成剧烈的锻炼后擦了擦 __________ 的汗水。",
        answers: [
            { option: "A", answer: "hand", chinese_answer: "手", chinese_romanization: "shǒu" },
            { option: "B", answer: "shoulder", chinese_answer: "肩膀", chinese_romanization: "jiānbǎng" },
            { option: "C", answer: "forehead", chinese_answer: "额头", chinese_romanization: "étóu" },
            { option: "D", answer: "back", chinese_answer: "背", chinese_romanization: "bèi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'forehead' means the part of the face above the eyebrows." +
            "<br><br>" +
            "(A) 'hand' means the end part of a person's arm beyond the wrist, including the palm, fingers, and thumb." +
            "<br><br>" +
            "(B) 'shoulder' means the upper joint of each of a person's arms and the part of the body between this and the neck." +
            "<br><br>" +
            "(D) 'back' means the rear surface of the human body from the shoulders to the hips.",
        chinese_explanation: "(C) '额头' 一词意味着眉毛上方的脸部。" +
            "<br><br>" +
            "(A) '手' 意味着人的手腕以外的部分，包括手掌、手指和拇指。" +
            "<br><br>" +
            "(B) '肩膀' 意味着每个人的手臂的上部关节和身体与脖子之间的部分。" +
            "<br><br>" +
            "(D) '背' 意味着从肩膀到臀部的人体后部表面。"
    },
    {
        id: 5,
        question: "After the storm, the beach was littered with __________ from the damaged boats and buildings.",
        chinese_question: "暴风雨过后，海滩上散落着来自受损船只和建筑物的 __________。",
        answers: [
            { option: "A", answer: "sand", chinese_answer: "沙子", chinese_romanization: "shāzi" },
            { option: "B", answer: "shells", chinese_answer: "贝壳", chinese_romanization: "bèiké" },
            { option: "C", answer: "rocks", chinese_answer: "岩石", chinese_romanization: "yánshí" },
            { option: "D", answer: "debris", chinese_answer: "碎片", chinese_romanization: "suìpiàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'debris' means scattered pieces of waste or remains." +
            "<br><br>" +
            "(A) 'sand' means a loose granular substance, typically pale yellowish brown, resulting from the erosion of siliceous and other rocks." +
            "<br><br>" +
            "(B) 'shells' means the hard protective outer case of a mollusk or crustacean." +
            "<br><br>" +
            "(C) 'rocks' means the solid mineral material forming part of the surface of the earth and other similar planets, exposed on the surface or underlying the soil or oceans.",
        chinese_explanation: "(D) '碎片' 一词意味着散落的废弃物或残骸。" +
            "<br><br>" +
            "(A) '沙子' 意味着一种松散的颗粒状物质，通常为淡黄色棕色，由硅质和其他岩石的侵蚀产生。" +
            "<br><br>" +
            "(B) '贝壳' 意味着软体动物或甲壳类动物的坚硬保护外壳。" +
            "<br><br>" +
            "(C) '岩石' 意味着构成地球表面的一部分的固体矿物质，在表面暴露或在土壤或海洋下。"
    },
    {
        id: 6,
        question: "The nurse applied an __________ solution to the wound to prevent infection.",
        chinese_question: "护士在伤口上涂抹了 __________ 溶液以防感染。",
        answers: [
            { option: "A", answer: "dirty", chinese_answer: "脏的", chinese_romanization: "zāng de" },
            { option: "B", answer: "antiseptic", chinese_answer: "消毒的", chinese_romanization: "xiāodú de" },
            { option: "C", answer: "contaminated", chinese_answer: "污染的", chinese_romanization: "wūrǎn de" },
            { option: "D", answer: "toxic", chinese_answer: "有毒的", chinese_romanization: "yǒudú de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'antiseptic' means relating to or denoting substances that prevent the growth of disease-causing microorganisms." +
            "<br><br>" +
            "(A) 'dirty' means covered or marked with an unclean substance." +
            "<br><br>" +
            "(C) 'contaminated' means having been made impure by exposure to or addition of a poisonous or polluting substance." +
            "<br><br>" +
            "(D) 'toxic' means poisonous.",
        chinese_explanation: "(B) '消毒的' 一词意味着与防止病原微生物生长的物质有关的。" +
            "<br><br>" +
            "(A) '脏的' 意味着覆盖或标记有不洁物质的。" +
            "<br><br>" +
            "(C) '污染的' 意味着因接触或添加有毒或污染物质而变得不纯的。" +
            "<br><br>" +
            "(D) '有毒的' 意味着有毒的。"
    },
    {
        id: 7,
        question: "The actors gathered on stage for their final __________ before the opening night of the play.",
        chinese_question: "演员们在开幕之夜前聚集在舞台上进行最后的 __________。",
        answers: [
            { option: "A", answer: "performance", chinese_answer: "表演", chinese_romanization: "biǎoyǎn" },
            { option: "B", answer: "break", chinese_answer: "休息", chinese_romanization: "xiūxí" },
            { option: "C", answer: "rehearsal", chinese_answer: "排练", chinese_romanization: "páiliàn" },
            { option: "D", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'rehearsal' means a practice or trial performance of a play or other work for later public performance." +
            "<br><br>" +
            "(A) 'performance' means an act of presenting a play, concert, or other form of entertainment." +
            "<br><br>" +
            "(B) 'break' means a pause in work or during an activity or event." +
            "<br><br>" +
            "(D) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity.",
        chinese_explanation: "(C) '排练' 一词意味着为以后的公众演出而进行的练习或试演。" +
            "<br><br>" +
            "(A) '表演' 意味着呈现戏剧、音乐会或其他娱乐形式的行为。" +
            "<br><br>" +
            "(B) '休息' 意味着在工作或活动期间或之后的暂停。" +
            "<br><br>" +
            "(D) '庆祝' 意味着通过进行愉快的、通常是社交活动来标志着对重要事件或场合的愉悦。"
    },
    {
        id: 8,
        question: "The doctor warned that __________, characterized by excessive body fat, increases the risk of various health issues, including diabetes and heart disease.",
        chinese_question: "医生警告说，__________，即身体脂肪过多，会增加各种健康问题的风险，包括糖尿病和心脏病。",
            answers: [
                { option: "A", answer: "obesity", chinese_answer: "肥胖", chinese_romanization: "féipàng" },
                { option: "B", answer: "fitness", chinese_answer: "健康", chinese_romanization: "jiànkāng" },
                { option: "C", answer: "strength", chinese_answer: "力量", chinese_romanization: "lìliàng" },
                { option: "D", answer: "leanness", chinese_answer: "瘦", chinese_romanization: "shòu" }
            ],
            correctAnswer: "A",
            explanation: "(A) 'obesity' means the condition of being grossly fat or overweight." +
                "<br><br>" +
                "(B) 'fitness' means the condition of being physically fit and healthy." +
                "<br><br>" +
                "(C) 'strength' means the quality or state of being strong, in particular." +
                "<br><br>" +
                "(D) 'leanness' means the quality or condition of being lean (thin, especially healthily so; having little fat).",
            chinese_explanation: "(A) '肥胖' 一词意味着肥胖或超重的状况。" +
                "<br><br>" +
                "'B' '健康' 意味着身体健康的状态。" +
                "<br><br>" +
                "'C' '力量' 意味着强壮的品质或状态，尤其是指体力。" +
                "<br><br>" +
                "'D' '瘦' 意味着瘦（特别是健康的瘦）；脂肪少。"
    },
    {
        id: 9,
        question: "The __________ photographer captured stunning images, even though he had no formal training.",
        chinese_question: "这位 __________ 摄影师拍摄了令人惊叹的照片，尽管他没有接受过正式培训。",
        answers: [
            { option: "A", answer: "professional", chinese_answer: "专业", chinese_romanization: "zhuānyè" },
            { option: "B", answer: "veteran", chinese_answer: "老手", chinese_romanization: "lǎoshǒu" },
            { option: "C", answer: "amateur", chinese_answer: "业余", chinese_romanization: "yèyú" },
            { option: "D", answer: "expert", chinese_answer: "专家", chinese_romanization: "zhuānjiā" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'amateur' means someone who engages in an activity for pleasure rather than as a profession." +
            "<br><br>" +
            "(A) 'professional' means someone who is skilled and paid for their work." +
            "<br><br>" +
            "(B) 'veteran' means someone with a lot of experience." +
            "<br><br>" +
            "(D) 'expert' means someone with a high level of knowledge or skill.",
        chinese_explanation: "(C) '业余' 意味着出于兴趣而不是职业参与某项活动的人。" +
            "<br><br>" +
            "(A) '专业' 意味着有技能并为工作获得报酬的人。" +
            "<br><br>" +
            "(B) '老手' 意味着有丰富经验的人。" +
            "<br><br>" +
            "(D) '专家' 意味着具有高水平知识或技能的人。"
    },
    {
        id: 10,
        question: "The students had high __________ for their final exam scores, believing they had studied well and would perform excellently.",
        chinese_question: "学生们对他们的期末考试成绩有很高的 __________，相信自己学习得很好，成绩会很优秀。",
        answers: [
            { option: "A", answer: "expectations", chinese_answer: "期望", chinese_romanization: "qīwàng" },
            { option: "B", answer: "doubts", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "C", answer: "fears", chinese_answer: "恐惧", chinese_romanization: "kǒngjù" },
            { option: "D", answer: "concerns", chinese_answer: "关注", chinese_romanization: "guānzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'expectations' means a strong belief that something will happen or be the case in the future." +
            "<br><br>" +
            "(B) 'doubts' means a feeling of uncertainty or lack of conviction." +
            "<br><br>" +
            "(C) 'fears' means an unpleasant emotion caused by the belief that someone or something is dangerous." +
            "<br><br>" +
            "(D) 'concerns' means a matter of interest or importance to someone.",
        chinese_explanation: "(A) '期望' 意味着强烈相信某事将会发生或将成为未来的事实。" +
            "<br><br>" +
            "(B) '怀疑' 意味着不确定或缺乏信心的感觉。" +
            "<br><br>" +
            "(C) '恐惧' 意味着因认为某人或某物是危险的而产生的不愉快情绪。" +
            "<br><br>" +
            "(D) '关注' 意味着某人感兴趣或重要的事。"
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
