// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The bright __________ from the sun made it difficult to see the road clearly, causing her to squint and shield her eyes.",
        chinese_question: "太阳的强烈__________使人难以看清道路，使她不得不眯起眼睛并遮住眼睛。",
        answers: [
            { option: "A", answer: "shadow", chinese_answer: "阴影", chinese_romanization: "yīnyǐng" },
            { option: "B", answer: "glare", chinese_answer: "耀光", chinese_romanization: "yàoguāng" },
            { option: "C", answer: "reflection", chinese_answer: "反射", chinese_romanization: "fǎnshè" },
            { option: "D", answer: "breeze", chinese_answer: "微风", chinese_romanization: "wēifēng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'glare' means a very bright and unpleasant light." +
            "<br><br>" +
            "(A) 'shadow' means a dark area or shape produced by a body coming between rays of light and a surface." +
            "<br><br>" +
            "(C) 'reflection' means the throwing back by a body or surface of light, heat, or sound without absorbing it." +
            "<br><br>" +
            "(D) 'breeze' means a gentle wind.",
        chinese_explanation: "(B) '耀光' 一词意味着非常明亮和不愉快的光。" +
            "<br><br>" +
            "(A) '阴影' 意味着一个物体在光线与表面之间产生的黑暗区域或形状。" +
            "<br><br>" +
            "(C) '反射' 意味着物体或表面不吸收而是反射光、热或声音。" +
            "<br><br>" +
            "(D) '微风' 意味着轻风。"
    },
    {
        id: 2,
        question: "The teacher provided an __________, such as a real-life scenario, to help the students understand the concept.",
        chinese_question: "老师提供了一个 __________，例如现实生活中的场景，帮助学生理解这个概念。",
        answers: [
            { option: "A", answer: "mystery", chinese_answer: "谜", chinese_romanization: "mí" },
            { option: "B", answer: "obstacle", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
            { option: "C", answer: "example", chinese_answer: "例子", chinese_romanization: "lìzi" },
            { option: "D", answer: "distraction", chinese_answer: "干扰", chinese_romanization: "gānrǎo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'example' means a thing characteristic of its kind or illustrating a general rule." +
            "<br><br>" +
            "(A) 'mystery' means something that is difficult or impossible to understand or explain." +
            "<br><br>" +
            "(B) 'obstacle' means a thing that blocks one's way or prevents or hinders progress." +
            "<br><br>" +
            "(D) 'distraction' means a thing that prevents someone from concentrating on something else.",
        chinese_explanation: "(C) '例子' 意味着其种类特征的事物或说明一般规则的事物。" +
            "<br><br>" +
            "(A) '谜' 意味着难以理解或解释的事物。" +
            "<br><br>" +
            "(B) '障碍' 意味着阻碍道路或阻止或妨碍进步的事物。" +
            "<br><br>" +
            "(D) '干扰' 意味着阻止某人集中注意力于其他事情的事物。"
    },
    {
        id: 3,
        question: "Understanding the __________ of the story, such as the historical and cultural background, is crucial to grasping its full meaning.",
        chinese_question: "理解故事的 __________，例如历史和文化背景，对于把握其全部意义至关重要。",
        answers: [
            { option: "A", answer: "context", chinese_answer: "背景", chinese_romanization: "bèijǐng" },
            { option: "B", answer: "surface", chinese_answer: "表面", chinese_romanization: "biǎomiàn" },
            { option: "C", answer: "outcome", chinese_answer: "结果", chinese_romanization: "jiéguǒ" },
            { option: "D", answer: "beginning", chinese_answer: "开始", chinese_romanization: "kāishǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'context' means the circumstances that form the setting for an event, statement, or idea." +
            "<br><br>" +
            "(B) 'surface' means the outside part or uppermost layer of something." +
            "<br><br>" +
            "(C) 'outcome' means the way a thing turns out; a consequence." +
            "<br><br>" +
            "(D) 'beginning' means the point in time or space at which something starts.",
        chinese_explanation: "(A) '背景' 意味着形成事件、陈述或想法的背景的环境。" +
            "<br><br>" +
            "(B) '表面' 意味着某物的外部部分或最上层。" +
            "<br><br>" +
            "(C) '结果' 意味着某事的结果；后果。" +
            "<br><br>" +
            "(D) '开始' 意味着某事在时间或空间上的起点。"
    },
    {
        id: 4,
        question: "The __________ of the experiment showed significant improvement in the subjects' health.",
        chinese_question: "实验的__________显示受试者的健康显著改善。",
        answers: [
            { option: "A", answer: "causes", chinese_answer: "原因", chinese_romanization: "yuányīn" },
            { option: "B", answer: "reasons", chinese_answer: "理由", chinese_romanization: "lǐyóu" },
            { option: "C", answer: "results", chinese_answer: "结果", chinese_romanization: "jiéguǒ" },
            { option: "D", answer: "problems", chinese_answer: "问题", chinese_romanization: "wèntí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'results' means a consequence, effect, or outcome of something." +
            "<br><br>" +
            "(A) 'causes' means a person or thing that gives rise to an action, phenomenon, or condition." +
            "<br><br>" +
            "(B) 'reasons' means a cause, explanation, or justification for an action or event." +
            "<br><br>" +
            "(D) 'problems' means a matter or situation regarded as unwelcome or harmful and needing to be dealt with and overcome.",
        chinese_explanation: "(C) '结果' 一词意味着某事的结果、效果或结局。" +
            "<br><br>" +
            "(A) '原因' 意味着导致某种行动、现象或状况的人或事物。" +
            "<br><br>" +
            "(B) '理由' 意味着行为或事件的原因、解释或理由。" +
            "<br><br>" +
            "(D) '问题' 意味着被视为不受欢迎或有害并需要处理和克服的事态或情况。"
    },
    {
        id: 5,
        question: "The comedian's __________, including his exaggerated facial expressions and silly dance moves, had the audience laughing nonstop throughout the entire show.",
        chinese_question: "喜剧演员的__________，包括他夸张的面部表情和滑稽的舞蹈动作，让观众在整个节目中笑个不停。",
        answers: [
            { option: "A", answer: "antics", chinese_answer: "滑稽动作", chinese_romanization: "huájī dòngzuò" },
            { option: "B", answer: "seriousness", chinese_answer: "严肃", chinese_romanization: "yánsù" },
            { option: "C", answer: "monologues", chinese_answer: "独白", chinese_romanization: "dúbái" },
            { option: "D", answer: "complaints", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'antics' means foolish, outrageous, or amusing behavior." +
            "<br><br>" +
            "(B) 'seriousness' means the state or quality of being serious." +
            "<br><br>" +
            "(C) 'monologues' means long speeches by one actor in a play or movie, or as part of a theatrical or broadcast program." +
            "<br><br>" +
            "(D) 'complaints' means expressions of dissatisfaction or annoyance about something.",
        chinese_explanation: "(A) '滑稽动作' 一词意味着愚蠢、离谱或有趣的行为。" +
            "<br><br>" +
            "(B) '严肃' 意味着严肃的状态或质量。" +
            "<br><br>" +
            "(C) '独白' 意味着戏剧或电影中一个演员的长篇讲话，或作为戏剧或广播节目的一部分。" +
            "<br><br>" +
            "(D) '抱怨' 意味着对某事表示不满或恼怒。"
    },
    {
        id: 6,
        question: "He was a __________ of fine wines, able to distinguish the subtle differences between vintages.",
        chinese_question: "他是一个葡萄酒的 __________，能够分辨不同年份之间的细微差别。",
        answers: [
            { option: "A", answer: "connoisseur", chinese_answer: "鉴赏家", chinese_romanization: "jiànshǎngjiā" },
            { option: "B", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "C", answer: "amateur", chinese_answer: "业余爱好者", chinese_romanization: "yèyú àihào zhě" },
            { option: "D", answer: "misjudge", chinese_answer: "误判", chinese_romanization: "wùpàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'connoisseur' means an expert judge in matters of taste." +
            "<br><br>" +
            "(B) 'novice' means a person new to and inexperienced in a job or situation." +
            "<br><br>" +
            "(C) 'amateur' means a person who engages in a pursuit, especially a sport, on an unpaid rather than a professional basis." +
            "<br><br>" +
            "(D) 'misjudge' means to form an incorrect opinion or conclusion about something.",
        chinese_explanation: "(A) '鉴赏家' 意味着品味方面的专家。" +
            "<br><br>" +
            "(B) '新手' 意味着在工作或情况下新手或没有经验的人。" +
            "<br><br>" +
            "(C) '业余爱好者' 意味着以非专业身份从事某项追求（尤其是运动）的人。" +
            "<br><br>" +
            "(D) '误判' 意味着对某事形成错误的意见或结论。"
    },
    {
        id: 7,
        question: "The government imposed an __________ on all trade with the neighbouring country, halting the exchange of goods and services.",
        chinese_question: "政府对与邻国的所有贸易实施了禁运，停止了商品和服务的交换__________。",
        answers: [
            { option: "A", answer: "allowance", chinese_answer: "允许", chinese_romanization: "yǔnxǔ" },
            { option: "B", answer: "promotion", chinese_answer: "促销", chinese_romanization: "cùxiāo" },
            { option: "C", answer: "embargo", chinese_answer: "禁运", chinese_romanization: "jìnyùn" },
            { option: "D", answer: "incentive", chinese_answer: "激励", chinese_romanization: "jīlì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'embargo' means an official ban on trade or other commercial activity with a particular country." +
            "<br><br>" +
            "(A) 'allowance' means the amount of something that is permitted, especially within a set of regulations or for a specified purpose." +
            "<br><br>" +
            "(B) 'promotion' means activity that supports or encourages a cause, venture, or aim." +
            "<br><br>" +
            "(D) 'incentive' means a thing that motivates or encourages one to do something.",
        chinese_explanation: "(C) '禁运' 意味着对与某一特定国家的贸易或其他商业活动的官方禁止。" +
            "<br><br>" +
            "(A) '允许' 意味着在一组法规或特定目的内被允许的数量。" +
            "<br><br>" +
            "(B) '促销' 意味着支持或鼓励某个事业、冒险或目标的活动。" +
            "<br><br>" +
            "(D) '激励' 意味着激励或鼓励某人做某事的东西。"
    },
    {
        id: 8,
        question: "The __________ gave a passionate speech about improving education and healthcare in the community.",
        chinese_question: "这位 __________ 发表了关于改善社区教育和医疗的热情演讲。",
        answers: [
            { option: "A", answer: "artist", chinese_answer: "艺术家", chinese_romanization: "yìshùjiā" },
            { option: "B", answer: "politician", chinese_answer: "政治家", chinese_romanization: "zhèngzhìjiā" },
            { option: "C", answer: "athlete", chinese_answer: "运动员", chinese_romanization: "yùndòngyuán" },
            { option: "D", answer: "scientist", chinese_answer: "科学家", chinese_romanization: "kēxuéjiā" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'politician' means a person who works in politics, often in an elected office. They help make decisions and laws for the community." +
            "<br><br>" +
            "(A) 'artist' means a person who creates art." +
            "<br><br>" +
            "(C) 'athlete' means a person who is good at sports and other physical activities." +
            "<br><br>" +
            "(D) 'scientist' means a person who studies or has expert knowledge of science.",
        chinese_explanation: "(B) '政治家' 一词意味着从事政治工作的人，通常在民选职位上。他们帮助为社区做出决策和制定法律。" +
            "<br><br>" +
            "(A) '艺术家' 意味着创作艺术的人。" +
            "<br><br>" +
            "(C) '运动员' 意味着擅长体育和其他体力活动的人。" +
            "<br><br>" +
            "(D) '科学家' 意味着研究或拥有科学专业知识的人。"
    },
    {
        id: 9,
        question: "The __________ led his troops with courage and strategy, ensuring their victory in the crucial battle.",
        chinese_question: "这位 __________ 以勇气和策略领导他的部队，确保他们在关键战役中获胜。",
        answers: [
            { option: "A", answer: "soldier", chinese_answer: "士兵", chinese_romanization: "shìbīng" },
            { option: "B", answer: "cadet", chinese_answer: "学员", chinese_romanization: "xuéyuán" },
            { option: "C", answer: "colonel", chinese_answer: "上校", chinese_romanization: "shàngxiào" },
            { option: "D", answer: "recruit", chinese_answer: "新兵", chinese_romanization: "xīnbīng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'colonel' means an army officer of high rank, below a brigadier general." +
            "<br><br>" +
            "(A) 'soldier' means a person who serves in an army." +
            "<br><br>" +
            "(B) 'cadet' means a young trainee in the armed services or police force." +
            "<br><br>" +
            "(D) 'recruit' means a new member of an organization or body.",
        chinese_explanation: "(C) '上校' 一词意味着军队中的高级军官，低于准将。" +
            "<br><br>" +
            "(A) '士兵' 意味着在军队服役的人。" +
            "<br><br>" +
            "(B) '学员' 意味着武装部队或警察部队中的年轻学员。" +
            "<br><br>" +
            "(D) '新兵' 意味着组织或团体的新成员。"
    },
    {
        id: 10,
        question: "After experiencing severe anxiety, she decided to see a __________ for professional help.",
        chinese_question: "在经历严重的焦虑后，她决定去看 __________ 寻求专业帮助。",
        answers: [
            { option: "A", answer: "psychiatrist", chinese_answer: "精神科医生", chinese_romanization: "jīngshén kē yīshēng" },
            { option: "B", answer: "dentist", chinese_answer: "牙医", chinese_romanization: "yáyī" },
            { option: "C", answer: "engineer", chinese_answer: "工程师", chinese_romanization: "gōngchéngshī" },
            { option: "D", answer: "accountant", chinese_answer: "会计", chinese_romanization: "kuàijì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'psychiatrist' means a medical practitioner specializing in the diagnosis and treatment of mental illness." +
            "<br><br>" +
            "(B) 'dentist' means a person qualified to treat the diseases and conditions that affect the teeth and gums." +
            "<br><br>" +
            "(C) 'engineer' means a person who designs, builds, or maintains engines, machines, or structures." +
            "<br><br>" +
            "(D) 'accountant' means a person whose job is to keep or inspect financial accounts.",
        chinese_explanation: "(A) '精神科医生' 一词意味着专门诊断和治疗精神疾病的医学从业者。" +
            "<br><br>" +
            "(B) '牙医' 意味着有资格治疗影响牙齿和牙龈的疾病和状况的人。" +
            "<br><br>" +
            "(C) '工程师' 意味着设计、建造或维护发动机、机器或结构的人。" +
            "<br><br>" +
            "(D) '会计' 意味着负责保持或检查财务帐户的人。"
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
