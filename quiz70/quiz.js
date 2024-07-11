// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The new wing of the hospital is a valuable __________ that will provide more space and resources for patients.",
        chinese_question: "医院的新翼是一个宝贵的 __________，将为患者提供更多的空间和资源。",
        answers: [
            { option: "A", answer: "subtraction", chinese_answer: "减法", chinese_romanization: "jiǎnfǎ" },
            { option: "B", answer: "removal", chinese_answer: "移除", chinese_romanization: "yíchú" },
            { option: "C", answer: "addition", chinese_answer: "添加", chinese_romanization: "tiānjiā" },
            { option: "D", answer: "deduction", chinese_answer: "扣除", chinese_romanization: "kòuchú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'addition' means the action or process of adding something to something else." +
            "<br><br>" +
            "(A) 'subtraction' means the process or skill of taking one number or amount away from another." +
            "<br><br>" +
            "(B) 'removal' means the action of taking away or abolishing something unwanted." +
            "<br><br>" +
            "(D) 'deduction' means the action of deducting or subtracting something.",
        chinese_explanation: "(C) '添加' 一词意味着将某物添加到另一样东西中的行为或过程。" +
            "<br><br>" +
            "(A) '减法' 意味着将一个数字或数量从另一个数字或数量中减去的过程或技能。" +
            "<br><br>" +
            "(B) '移除' 意味着去除或废除不需要的东西的行为。" +
            "<br><br>" +
            "(D) '扣除' 意味着扣除或减去某物的行为。"
    },
    {
        id: 2,
        question: "Tracing her __________ revealed that her family had roots in multiple continents, showcasing a rich and varied history.",
        chinese_question: "追溯她的 __________ 显示出她的家族在多个大陆有根源，展示了丰富多样的历史。",
        answers: [
            { option: "A", answer: "personality", chinese_answer: "个性", chinese_romanization: "gèxìng" },
            { option: "B", answer: "ancestry", chinese_answer: "祖先", chinese_romanization: "zǔxiān" },
            { option: "C", answer: "occupation", chinese_answer: "职业", chinese_romanization: "zhíyè" },
            { option: "D", answer: "education", chinese_answer: "教育", chinese_romanization: "jiàoyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ancestry' means one's family or ethnic descent." +
            "<br><br>" +
            "(A) 'personality' means the combination of characteristics or qualities that form an individual's distinctive character." +
            "<br><br>" +
            "(C) 'occupation' means a job or profession." +
            "<br><br>" +
            "(D) 'education' means the process of receiving or giving systematic instruction, especially at a school or university.",
        chinese_explanation: "(B) '祖先' 一词意味着一个人的家庭或种族血统。" +
            "<br><br>" +
            "(A) '个性' 意味着构成一个人独特性格的特征或品质的组合。" +
            "<br><br>" +
            "(C) '职业' 意味着工作或职业。" +
            "<br><br>" +
            "(D) '教育' 意味着接受或给予系统性指导的过程，尤其是在学校或大学。"
    },
    {
        id: 3,
        question: "She read an __________ from her favorite novel during the book club meeting.",
        chinese_question: "在读书俱乐部会议上，她读了一段她最喜欢的小说的 __________。",
        answers: [
            { option: "A", answer: "excerpt", chinese_answer: "摘录", chinese_romanization: "zhāilù" },
            { option: "B", answer: "summary", chinese_answer: "摘要", chinese_romanization: "zhāiyào" },
            { option: "C", answer: "preface", chinese_answer: "序言", chinese_romanization: "xùyán" },
            { option: "D", answer: "appendix", chinese_answer: "附录", chinese_romanization: "fùlù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'excerpt' means a short extract from a film, broadcast, or piece of music or writing." +
            "<br><br>" +
            "(B) 'summary' means a brief statement or account of the main points of something." +
            "<br><br>" +
            "(C) 'preface' means an introduction to a book, typically stating its subject, scope, or aims." +
            "<br><br>" +
            "(D) 'appendix' means a section or table of additional matter at the end of a book or document.",
        chinese_explanation: "(A) '摘录' 一词意味着从电影、广播、音乐或写作作品中提取的一小段内容。" +
            "<br><br>" +
            "(B) '摘要' 意味着对某事要点的简要陈述或说明。" +
            "<br><br>" +
            "(C) '序言' 意味着书的介绍，通常说明其主题、范围或目的。" +
            "<br><br>" +
            "(D) '附录' 意味着书或文件末尾的附加材料部分或表格。"
    },
    {
        id: 4,
        question: "At the funeral, his best friend delivered a heartfelt __________, celebrating his life and legacy.",
        chinese_question: "在葬礼上，他最好的朋友发表了一篇真挚的 __________，庆祝他的生活和遗产。",
        answers: [
            { option: "A", answer: "insult", chinese_answer: "侮辱", chinese_romanization: "wǔrǔ" },
            { option: "B", answer: "eulogy", chinese_answer: "颂词", chinese_romanization: "sòngcí" },
            { option: "C", answer: "complaint", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" },
            { option: "D", answer: "dialogue", chinese_answer: "对话", chinese_romanization: "duìhuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'eulogy' means a speech or piece of writing that praises someone or something highly, especially a tribute to someone who has just died." +
            "<br><br>" +
            "(A) 'insult' means a disrespectful or scornfully abusive remark or action." +
            "<br><br>" +
            "(C) 'complaint' means a statement that something is unsatisfactory or unacceptable." +
            "<br><br>" +
            "(D) 'dialogue' means a conversation between two or more people as a feature of a book, play, or movie.",
        chinese_explanation: "(B) '颂词' 一词意味着高度赞扬某人或某事的演讲或文章，特别是对刚刚去世的人的颂词。" +
            "<br><br>" +
            "(A) '侮辱' 意味着不尊重或轻蔑的言辞或行为。" +
            "<br><br>" +
            "(C) '抱怨' 意味着对某事不满意或不可接受的陈述。" +
            "<br><br>" +
            "(D) '对话' 意味着书籍、戏剧或电影中的两人或多人之间的对话。"
    },
    {
        id: 5,
        question: "After searching for weeks, they finally found a cozy __________ to call home.",
        chinese_question: "经过几周的寻找，他们终于找到了一个舒适的 __________ 来称之为家。",
        answers: [
            { option: "A", answer: "shelter", chinese_answer: "庇护所", chinese_romanization: "bìhù suǒ" },
            { option: "B", answer: "refuge", chinese_answer: "避难所", chinese_romanization: "bìnàn suǒ" },
            { option: "C", answer: "den", chinese_answer: "洞穴", chinese_romanization: "dòngxué" },
            { option: "D", answer: "abode", chinese_answer: "住所", chinese_romanization: "zhùsuǒ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'abode' means a place of residence; a house or home." +
            "<br><br>" +
            "(A) 'shelter' means a place giving temporary protection from bad weather or danger." +
            "<br><br>" +
            "(B) 'refuge' means a condition of being safe or sheltered from pursuit, danger, or trouble." +
            "<br><br>" +
            "(C) 'den' means a wild animal's lair or habitation.",
        chinese_explanation: "(D) '住所' 一词意味着居住的地方；房子或家。" +
            "<br><br>" +
            "(A) '庇护所' 意味着提供临时保护的地方，以免受恶劣天气或危险。" +
            "<br><br>" +
            "(B) '避难所' 意味着安全或庇护的状态，以免被追捕、危险或麻烦。" +
            "<br><br>" +
            "(C) '洞穴' 意味着野生动物的巢穴或栖息地。"
    },
    {
        id: 6,
        question: "The main __________ she gave for quitting her job was the long commute.",
        chinese_question: "她辞职的主要__________是通勤时间太长。",
        answers: [
            { option: "A", answer: "reason", chinese_answer: "原因", chinese_romanization: "yuányīn" },
            { option: "B", answer: "emotion", chinese_answer: "情感", chinese_romanization: "qínggǎn" },
            { option: "C", answer: "feeling", chinese_answer: "感觉", chinese_romanization: "gǎnjué" },
            { option: "D", answer: "guess", chinese_answer: "猜测", chinese_romanization: "cāicè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reason' means a cause, explanation, or justification for an action or event." +
            "<br><br>" +
            "(B) 'emotion' means a natural instinctive state of mind deriving from one's circumstances, mood, or relationships with others." +
            "<br><br>" +
            "(C) 'feeling' means an emotional state or reaction." +
            "<br><br>" +
            "(D) 'guess' means an estimate or supposition without sufficient information to be sure of being correct.",
        chinese_explanation: "(A) '原因' 一词意味着行为或事件的原因、解释或理由。" +
            "<br><br>" +
            "(B) '情感' 意味着一种由个人的环境、情绪或与他人的关系产生的自然本能状态。" +
            "<br><br>" +
            "(C) '感觉' 意味着一种情绪状态或反应。" +
            "<br><br>" +
            "(D) '猜测' 意味着在没有足够信息确保正确的情况下做出的估计或假设。"
    },
    {
        id: 7,
        question: "The two hockey players got into a __________ on the ice, resulting in penalties for both.",
        chinese_question: "两名曲棍球运动员在冰上发生了__________，导致双方都受到了处罚。",
        answers: [
            { option: "A", answer: "discussion", chinese_answer: "讨论", chinese_romanization: "tǎolùn" },
            { option: "B", answer: "brawl", chinese_answer: "打斗", chinese_romanization: "dǎdòu" },
            { option: "C", answer: "handshake", chinese_answer: "握手", chinese_romanization: "wòshǒu" },
            { option: "D", answer: "truce", chinese_answer: "停战", chinese_romanization: "tíngzhàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'brawl' means a rough or noisy fight or quarrel." + 
            "<br><br>" + 
            "(A) 'discussion' means the action or process of talking about something to reach a decision or to exchange ideas." + 
            "<br><br>" + 
            "(C) 'handshake' means an act of shaking hands with a person." + 
            "<br><br>" + 
            "(D) 'truce' means an agreement between enemies or opponents to stop fighting or arguing for a certain time.",
        chinese_explanation: "(B) '打斗'一词意味着一场激烈或喧闹的打架或争吵。" + 
            "<br><br>" + 
            "(A) '讨论' 意味着为了达成决定或交流想法而谈论某事的行为或过程。" + 
            "<br><br>" + 
            "(C) '握手' 意味着与某人握手的行为。" + 
            "<br><br>" + 
            "(D) '停战' 意味着敌人或对手之间在一定时间内停止战斗或争吵的协议。"
    },
    {
        id: 8,
        question: "The monotonous __________ of the lecturer's voice made it difficult to stay awake.",
        chinese_question: "讲师单调的 __________ 声音让人难以保持清醒。",
        answers: [
            { option: "A", answer: "melody", chinese_answer: "旋律", chinese_romanization: "xuánlǜ" },
            { option: "B", answer: "shout", chinese_answer: "呼喊", chinese_romanization: "hūhǎn" },
            { option: "C", answer: "drone", chinese_answer: "嗡嗡声", chinese_romanization: "wēngwēng shēng" },
            { option: "D", answer: "whisper", chinese_answer: "低语", chinese_romanization: "dīyǔ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'drone' means a low continuous humming sound." +
            "<br><br>" +
            "(A) 'melody' means a sequence of single notes that is musically satisfying." +
            "<br><br>" +
            "(B) 'shout' means utter a loud call or cry, typically as an expression of a strong emotion." +
            "<br><br>" +
            "(D) 'whisper' means speak very softly using one's breath rather than one's throat, especially for the sake of secrecy.",
        chinese_explanation: "(C) '嗡嗡声' 意味着低而连续的嗡嗡声。" +
            "<br><br>" +
            "(A) '旋律' 意味着一串单音符，具有音乐上的满足感。" +
            "<br><br>" +
            "(B) '呼喊' 意味着发出响亮的叫喊或哭喊，通常是表达强烈的情感。" +
            "<br><br>" +
            "(D) '低语' 意味着用气而不是喉咙非常轻柔地说话，特别是为了保密。"
    },
    {
        id: 9,
        question: "Only authorized personnel have __________ to the confidential files.",
        chinese_question: "只有授权人员才有机密文件的__________。",
        answers: [
                { option: "A", answer: "denial", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
                { option: "B", answer: "restriction", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
                { option: "C", answer: "access", chinese_answer: "权限", chinese_romanization: "quánxiàn" },
                { option: "D", answer: "exclusion", chinese_answer: "排除", chinese_romanization: "páichú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'access' means the means or opportunity to approach or enter a place." +
            "<br><br>" +
            "(A) 'denial' means the action of declaring something to be untrue." +
            "<br><br>" +
            "(B) 'restriction' means a limiting condition or measure, especially a legal one." +
            "<br><br>" +
            "(D) 'exclusion' means the process or state of excluding or being excluded.",
        chinese_explanation: "(C) '权限' 一词意味着接近或进入某个地方的手段或机会。" +
            "<br><br>" +
            "(A) '否认' 意味着宣称某事不真实的行为。" +
            "<br><br>" +
            "(B) '限制' 意味着限制条件或措施，尤其是法律上的。" +
            "<br><br>" +
            "(D) '排除' 意味着排除或被排除的过程或状态。"
    },
    {
        id: 10,
        question: "He made a wise __________ by investing in real estate at the right time.",
        chinese_question: "他在正确的时间投资房地产做出了明智的 __________。",
        answers: [
            { option: "A", answer: "purchase", chinese_answer: "购买", chinese_romanization: "gòumǎi" },
            { option: "B", answer: "mistake", chinese_answer: "错误", chinese_romanization: "cuòwù" },
            { option: "C", answer: "blunder", chinese_answer: "失误", chinese_romanization: "shīwù" },
            { option: "D", answer: "oversight", chinese_answer: "疏忽", chinese_romanization: "shūhū" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'purchase' metaphorically means an acquisition, often of something valuable." +
            "<br><br>" +
            "(B) 'mistake' means an action or judgment that is misguided or wrong." +
            "<br><br>" +
            "(C) 'blunder' means a stupid or careless mistake." +
            "<br><br>" +
            "(D) 'oversight' means an unintentional failure to notice or do something.",
        chinese_explanation: "(A) '购买' 比喻获取，通常是某些有价值的东西。" +
            "<br><br>" +
            "(B) '错误' 意味着误导或错误的行为或判断。" +
            "<br><br>" +
            "(C) '失误' 意味着愚蠢或粗心的错误。" +
            "<br><br>" +
            "(D) '疏忽' 意味着无意中未注意或未做某事。"
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
