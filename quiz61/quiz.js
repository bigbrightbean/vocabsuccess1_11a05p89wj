// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The ancient tree is a symbol of __________, having stood tall for over 500 years, witnessing generations come and go.",
        chinese_question: "这棵古老的树是长寿的象征，已经高耸了500多年，见证了一代又一代人的来来去去__________。",
        answers: [
            { option: "A", answer: "youth", chinese_answer: "年轻", chinese_romanization: "niánqīng" },
            { option: "B", answer: "brevity", chinese_answer: "短暂", chinese_romanization: "duǎnzàn" },
            { option: "C", answer: "frailty", chinese_answer: "虚弱", chinese_romanization: "xūruò" },
            { option: "D", answer: "longevity", chinese_answer: "长寿", chinese_romanization: "chángshòu" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'longevity' means long life or the long duration of something." +
            "<br><br>" +
            "(A) 'youth' means the period between childhood and adult age." +
            "<br><br>" +
            "(B) 'brevity' means shortness of time." +
            "<br><br>" +
            "(C) 'frailty' means the condition of being weak and delicate.",
        chinese_explanation: "(D) '长寿' 一词意味着长寿或某事物的长时间持续。" +
            "<br><br>" +
            "(A) '年轻' 意味着童年和成年之间的时期。" +
            "<br><br>" +
            "(B) '短暂' 意味着时间短暂。" +
            "<br><br>" +
            "(C) '虚弱' 意味着虚弱和脆弱的状态。"
    },
    {
        id: 2,
        question: "She wrote a glowing __________ of the new restaurant, praising the food and the service.",
        chinese_question: "她写了一篇关于新餐馆的好评__________，称赞了那里的食物和服务。",
        answers: [
            { option: "A", answer: "review", chinese_answer: "评论", chinese_romanization: "pínglùn" },
            { option: "B", answer: "complaint", chinese_answer: "投诉", chinese_romanization: "tóusù" },
            { option: "C", answer: "schedule", chinese_answer: "日程表", chinese_romanization: "rìchéng biǎo" },
            { option: "D", answer: "story", chinese_answer: "故事", chinese_romanization: "gùshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'review' means a critical assessment of something, such as a book, movie, or restaurant." +
            "<br><br>" +
            "(B) 'complaint' means an expression of dissatisfaction." +
            "<br><br>" +
            "(C) 'schedule' means a plan for carrying out a process or procedure." +
            "<br><br>" +
            "(D) 'story' means an account of imaginary or real people and events.",
        chinese_explanation: "(A) '评论'一词意味着对某事物的批评性评估，如书籍、电影或餐馆。" +
            "<br><br>" +
            "(B) '投诉' 意味着表达不满。" +
            "<br><br>" +
            "(C) '日程表' 意味着进行某过程或程序的计划。" +
            "<br><br>" +
            "(D) '故事' 意味着关于虚构或真实人物和事件的叙述。"
    },
    {
        id: 3,
        question: "She was fascinated by the rich __________ of the ancient civilization, exploring its art, traditions, and beliefs.",
        chinese_question: "她对古代文明丰富的文化感到着迷，探索它的艺术、传统和信仰__________。",
        answers: [
            { option: "A", answer: "isolation", chinese_answer: "隔离", chinese_romanization: "gélí" },
            { option: "B", answer: "simplicity", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "C", answer: "culture", chinese_answer: "文化", chinese_romanization: "wénhuà" },
            { option: "D", answer: "scarcity", chinese_answer: "稀缺", chinese_romanization: "xīquē" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'culture' means the arts and other manifestations of human intellectual achievement regarded collectively." +
            "<br><br>" +
            "(A) 'isolation' means the process or fact of isolating or being isolated." +
            "<br><br>" +
            "(B) 'simplicity' means the quality or condition of being easy to understand or do." +
            "<br><br>" +
            "(D) 'scarcity' means the state of being scarce or in short supply.",
        chinese_explanation: "(C) '文化' 意味着被集体认为的人类智力成就的艺术和其他表现。" +
            "<br><br>" +
            "(A) '隔离' 意味着隔离或被隔离的过程或事实。" +
            "<br><br>" +
            "(B) '简单' 意味着易于理解或做的质量或条件。" +
            "<br><br>" +
            "(D) '稀缺' 意味着稀缺或供应不足的状态。"
    },
    {
        id: 4,
        question: "The daily __________ of managing finances, overseeing staff, and running the business exhausted him.",
        chinese_question: "经营生意的日常管理财务、监督员工和杂务使他筋疲力尽。",
        answers: [
            { option: "A", answer: "chores", chinese_answer: "杂务", chinese_romanization: "záwù" },
            { option: "B", answer: "pleasures", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "C", answer: "surprises", chinese_answer: "惊喜", chinese_romanization: "jīngxǐ" },
            { option: "D", answer: "vacations", chinese_answer: "假期", chinese_romanization: "jiàqī" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chores' metaphorically means routine and often tedious tasks." +
            "<br><br>" +
            "(B) 'pleasures' means things that give delight or satisfaction." +
            "<br><br>" +
            "(C) 'surprises' means unexpected or astonishing events." +
            "<br><br>" +
            "(D) 'vacations' means extended periods of leisure and recreation, especially spent away from home or traveling.",
        chinese_explanation: "(A) '杂务' 比喻常规且通常乏味的任务。" +
            "<br><br>" +
            "(B) '快乐' 意味着带来快乐或满足的事物。" +
            "<br><br>" +
            "(C) '惊喜' 意味着意想不到或惊人的事件。" +
            "<br><br>" +
            "(D) '假期' 意味着特别是在外度过的长时间休闲和娱乐。"
    },
    {
        id: 5,
        question: "He was a respected __________ on ancient Roman history, often consulted by scholars and students alike.",
        chinese_question: "他是古罗马历史的受人尊敬的权威，经常受到学者和学生的咨询__________。",
        answers: [
            { option: "A", answer: "authority", chinese_answer: "权威", chinese_romanization: "quánwēi" },
            { option: "B", answer: "amateur", chinese_answer: "业余爱好者", chinese_romanization: "yèyú àihào zhě" },
            { option: "C", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "D", answer: "spectator", chinese_answer: "观众", chinese_romanization: "guānzhòng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'authority' means a person with extensive or specialized knowledge about a subject; an expert." +
            "<br><br>" +
            "(B) 'amateur' means a person who engages in a pursuit, especially a sport, on an unpaid rather than a professional basis." +
            "<br><br>" +
            "(C) 'novice' means a person new to or inexperienced in a field or situation." +
            "<br><br>" +
            "(D) 'spectator' means a person who watches at a show, game, or other event.",
        chinese_explanation: "(A) '权威' 意味着对某一学科有广泛或专业知识的人；专家。" +
            "<br><br>" +
            "(B) '业余爱好者' 意味着从事追求的人，尤其是业余而非专业基础的人。" +
            "<br><br>" +
            "(C) '新手' 意味着在某一领域或情况下的新手或没有经验的人。" +
            "<br><br>" +
            "(D) '观众' 意味着在表演、比赛或其他活动中观看的人。"
    },
    {
        id: 6,
        question: "The hikers found a hidden __________ of supplies that had been left by previous adventurers.",
        chinese_question: "徒步旅行者发现了一个前冒险者留下的隐藏__________，里面有一些补给品。",
        answers: [
            { option: "A", answer: "waste", chinese_answer: "废物", chinese_romanization: "fèiwù" },
            { option: "B", answer: "trash", chinese_answer: "垃圾", chinese_romanization: "lājī" },
            { option: "C", answer: "cache", chinese_answer: "储藏", chinese_romanization: "chǔcáng" },
            { option: "D", answer: "clutter", chinese_answer: "杂乱", chinese_romanization: "záluàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'cache' means a collection of items of the same type stored in a hidden or inaccessible place." +
            "<br><br>" +
            "(A) 'waste' means unwanted or unusable materials." +
            "<br><br>" +
            "(B) 'trash' means discarded material or refuse." +
            "<br><br>" +
            "(D) 'clutter' means a collection of things lying about in an untidy mass.",
        chinese_explanation: "(C) '储藏' 一词意味着存放在隐藏或无法到达的地方的同类物品的集合。" +
            "<br><br>" +
            "(A) '废物' 意味着不需要的或无法使用的材料。" +
            "<br><br>" +
            "(B) '垃圾' 意味着被丢弃的材料或废物。" +
            "<br><br>" +
            "(D) '杂乱' 意味着凌乱地放着的一堆东西。"
    },
    {
        id: 7,
        question: "Her __________ about overcoming adversity, detailing her personal struggles and triumphs, inspired many readers.",
        chinese_question: "她关于克服逆境的回忆录，详细描述了她的个人奋斗和胜利，激励了许多读者__________。",
        answers: [
            { option: "A", answer: "memoir", chinese_answer: "回忆录", chinese_romanization: "huíyì lù" },
            { option: "B", answer: "essay", chinese_answer: "散文", chinese_romanization: "sǎnwén" },
            { option: "C", answer: "editorial", chinese_answer: "社论", chinese_romanization: "shèlùn" },
            { option: "D", answer: "manual", chinese_answer: "手册", chinese_romanization: "shǒucè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'memoir' literally means a historical account or biography written from personal knowledge or special sources." +
            "<br><br>" +
            "(B) 'essay' means a short piece of writing on a particular subject." +
            "<br><br>" +
            "(C) 'editorial' means a newspaper article written by or on behalf of an editor that gives an opinion on a topical issue." +
            "<br><br>" +
            "(D) 'manual' means a book of instructions, especially for operating a machine or learning a subject.",
        chinese_explanation: "(A) '回忆录' 字面意思是根据个人知识或特殊来源撰写的历史记述或传记。" +
            "<br><br>" +
            "(B) '散文' 意味着关于某一特定主题的短篇文章。" +
            "<br><br>" +
            "(C) '社论' 意味着由编辑或代表编辑撰写的关于时事问题的报纸文章。" +
            "<br><br>" +
            "(D) '手册' 意味着特别是关于操作机器或学习某一学科的说明书。"
    },
    {
        id: 8,
        question: "After the earthquake, the city was left in __________, with buildings reduced to piles of debris.",
        chinese_question: "地震后，城市被留在 __________ 中，建筑物变成了一堆碎片。",
        answers: [
            { option: "A", answer: "rubble", chinese_answer: "瓦砾", chinese_romanization: "wǎlì" },
            { option: "B", answer: "order", chinese_answer: "秩序", chinese_romanization: "zhìxù" },
            { option: "C", answer: "alignment", chinese_answer: "排列", chinese_romanization: "páiliè" },
            { option: "D", answer: "repair", chinese_answer: "修理", chinese_romanization: "xiūlǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'rubble' means waste or rough fragments of stone, brick, concrete, etc., especially as the debris from the demolition of buildings." +
            "<br><br>" +
            "(B) 'order' means the arrangement or disposition of people or things in relation to each other according to a particular sequence, pattern, or method." +
            "<br><br>" +
            "(C) 'alignment' means arrangement in a straight line or in correct or appropriate relative positions." +
            "<br><br>" +
            "(D) 'repair' means the action of fixing or mending something.",
        chinese_explanation: "(A) '瓦砾' 意味着废弃的或粗糙的石块、砖块、混凝土等，特别是建筑物拆除后的碎片。" +
            "<br><br>" +
            "(B) '秩序' 意味着人或物按照特定顺序、模式或方法的排列或布置。" +
            "<br><br>" +
            "(C) '排列' 意味着按直线或正确或适当的相对位置排列。" +
            "<br><br>" +
            "(D) '修理' 意味着修复或修补某物的行为。"
    },
    {
        id: 9,
        question: "The performer received a standing __________ from the audience after her breathtaking performance.",
        chinese_question: "在她惊艳的表演后，观众给她起立__________。",
        answers: [
            { option: "A", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" },
            { option: "B", answer: "whisper", chinese_answer: "低语", chinese_romanization: "dī yǔ" },
            { option: "C", answer: "murmur", chinese_answer: "低语", chinese_romanization: "dī yǔ" },
            { option: "D", answer: "ovation", chinese_answer: "欢呼", chinese_romanization: "huānhū" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ovation' means a sustained and enthusiastic show of appreciation from an audience, especially by means of applause." +
            "<br><br>" +
            "(A) 'silence' means complete absence of sound." +
            "<br><br>" +
            "(B) 'whisper' means speaking very softly using one's breath without one's vocal cords, especially for the sake of secrecy." +
            "<br><br>" +
            "(C) 'murmur' means a soft, indistinct sound made by a person or group of people speaking quietly or at a distance.",
        chinese_explanation: "(D) '欢呼' 一词意味着观众通过鼓掌表现出的持续而热情的赞赏。" +
            "<br><br>" +
            "(A) '沉默' 意味着完全没有声音。" +
            "<br><br>" +
            "(B) '低语' 意味着用气息而不用声带轻声说话，尤其是为了保密。" +
            "<br><br>" +
            "(C) '低语' 意味着一群人或多人安静地或在远处发出的柔和的、不清晰的声音。"
    },
    {
        id: 10,
        question: "The company agreed to increase the __________ of all its employees to match the cost of living, ensuring fair compensation.",
        chinese_question: "公司同意增加所有员工的工资以匹配生活成本，确保公平的报酬__________。",
        answers: [
            { option: "A", answer: "benefits", chinese_answer: "福利", chinese_romanization: "fúlì" },
            { option: "B", answer: "hours", chinese_answer: "工时", chinese_romanization: "gōngshí" },
            { option: "C", answer: "wages", chinese_answer: "工资", chinese_romanization: "gōngzī" },
            { option: "D", answer: "responsibilities", chinese_answer: "责任", chinese_romanization: "zérèn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'wages' means a fixed regular payment earned for work or services, typically paid on a daily or weekly basis." +
            "<br><br>" +
            "(A) 'benefits' means an advantage or profit gained from something." +
            "<br><br>" +
            "(B) 'hours' means a period of time equal to a twenty-fourth part of a day and night and divided into 60 minutes." +
            "<br><br>" +
            "(D) 'responsibilities' means the state or fact of having a duty to deal with something or of having control over someone.",
        chinese_explanation: "(C) '工资' 意味着因工作或服务而获得的固定定期付款，通常按日或按周支付。" +
            "<br><br>" +
            "(A) '福利' 意味着从某事中获得的好处或利润。" +
            "<br><br>" +
            "(B) '工时' 意味着一天和一夜的二十四分之一的时间段，分为 60 分钟。" +
            "<br><br>" +
            "(D) '责任' 意味着有责任处理某事或对某人有控制权的状态或事实。"
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
