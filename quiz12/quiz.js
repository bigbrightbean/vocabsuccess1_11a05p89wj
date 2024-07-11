// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She was too __________ to ask for help, even when she needed it the most.",
        chinese_question: "即使在最需要帮助的时候，她也太 __________ 而不敢求助。",
        answers: [
            { option: "A", answer: "shy", chinese_answer: "害羞的", chinese_romanization: "hàixiū de" },
            { option: "B", answer: "assertive", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
            { option: "C", answer: "demanding", chinese_answer: "要求高的", chinese_romanization: "yāoqiú gāo de" },
            { option: "D", answer: "aggressive", chinese_answer: "攻击性的", chinese_romanization: "gōngjī xìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'shy' means feeling nervous or hesitant about approaching others or asking for something, especially when needed." +
            "<br><br>" +
            "(B) 'assertive' means having or showing a confident and forceful personality. It means being confident and speaking up for yourself in a strong and clear way." +
            "<br><br>" +
            "(C) 'demanding' means making others work hard or meet high standards." +
            "<br><br>" +
            "(D) 'aggressive' means ready or likely to attack or confront; characterized by or resulting from aggression.",
        chinese_explanation: "(A) 意味着在需要的时候感到紧张或犹豫不决，不敢接近他人或请求帮助。" +
            "<br><br>" +
            "(B) '自信的' 意味着表现出自信和果断性格的。 词意味着以坚定而清晰的方式表达自己，并展示出自信。" +
            "<br><br>" +
            "(C) '要求高的' 意味着让别人努力工作或达到高标准的。" +
            "<br><br>" +
            "(D) '攻击性的' 意味着准备或可能攻击或对抗；以侵略为特征或结果的。"
    },
    {
        id: 2,
        question: "The __________ man had a house filled with unusual gadgets and strange contraptions, such as a self-watering plant system and a robotic cat feeder.",
        chinese_question: "那位 __________ 的男士家里满是奇特的装置和怪异的机械，比如自动浇水的植物系统和机器人喂猫器。",
        answers: [
            { option: "A", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "B", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
            { option: "C", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" },
            { option: "D", answer: "eccentric", chinese_answer: "古怪的", chinese_romanization: "gǔguài de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'eccentric' means (of a person or their behavior) unconventional and slightly strange." +
            "<br><br>" +
            "(A) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(B) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(C) 'typical' means having usual qualities or characteristics of a particular type of person or thing.",
        chinese_explanation: "(D) '古怪的' 意味着（某人或其行为）非传统且有点奇怪的。" +
            "<br><br>" +
            "(A) '普通的' 意味着没有特别或独特的特征；正常的。" +
            "<br><br>" +
            "(B) '传统的' 意味着基于或符合普遍做法或信念的。" +
            "<br><br>" +
            "(C) '典型的' 意味着具有某种类型的人的特征或特点。"
    },
    {
        id: 3,
        question: "She had a __________ interest in ancient history, spending hours reading and researching the subject.",
        chinese_question: "她对古代历史有着 __________ 的兴趣，花费数小时阅读和研究这个主题。",
        answers: [
            { option: "A", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "B", answer: "keen", chinese_answer: "强烈的", chinese_romanization: "qiángliè de" },
            { option: "C", answer: "indifferent", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" },
            { option: "D", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'keen' means having or showing eagerness or enthusiasm." +
            "<br><br>" +
            "(A) 'mild' means gentle and not easily provoked." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
        chinese_explanation: "(B) '强烈的' 意味着表现出或表现出热情或热情。" +
            "<br><br>" +
            "(A) '温和的' 意味着温柔的，不容易被激怒。" +
            "<br><br>" +
            "(C) '无动于衷的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着表现出或感到没有兴趣、热情或关心。"
    },
    {
        id: 4,
        question: "The athlete's __________ performance broke all previous records and was praised by commentators as one of the best in history.",
        chinese_question: "这位运动员的 __________ 表现打破了所有以往的记录，被评论员赞为历史上最出色的之一。",
        answers: [
            { option: "A", answer: "average", chinese_answer: "平均的", chinese_romanization: "píngjūn de" },
            { option: "B", answer: "mediocre", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "phenomenal", chinese_answer: "惊人的", chinese_romanization: "jīngrén de" },
            { option: "D", answer: "unremarkable", chinese_answer: "平凡的", chinese_romanization: "píngfán de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'phenomenal' means very remarkable; extraordinary." +
            "<br><br>" +
            "(A) 'average' means constituting the result obtained by adding together several quantities and then dividing this total by the number of quantities." +
            "<br><br>" +
            "(B) 'mediocre' means of only moderate quality; not very good." +
            "<br><br>" +
            "(D) 'unremarkable' means not particularly interesting or surprising.",
        chinese_explanation: "(C) '惊人的' 意味着非常显著的；非凡的。" +
            "<br><br>" +
            "(A) '平均的' 意味着通过将几种数量相加然后将此总数除以数量的总数而得出的结果。" +
            "<br><br>" +
            "(B) '普通的' 意味着质量一般；不太好的。" +
            "<br><br>" +
            "(D) '平凡的' 意味着不特别有趣或令人惊讶的。"
    },
    {
        id: 5,
        question: "Her __________ motivation for volunteering was a genuine desire to help others.",
        chinese_question: "她志愿服务的__________动机是真诚地想帮助他人。",
        answers: [
            { option: "A", answer: "extrinsic", chinese_answer: "外在的", chinese_romanization: "wàizài de" },
            { option: "B", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
            { option: "C", answer: "intrinsic", chinese_answer: "内在的", chinese_romanization: "nèizài de" },
            { option: "D", answer: "unnecessary", chinese_answer: "不必要的", chinese_romanization: "bù bìyào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'intrinsic' means naturally belonging to something; essential. Figuratively, it can mean being a natural part and genuine." +
            "<br><br>" +
            "(A) 'extrinsic' means not part of the essential nature of someone or something; coming or operating from outside." +
            "<br><br>" +
            "(B) 'irrelevant' means not connected with or relevant to something." +
            "<br><br>" +
            "(D) 'unnecessary' means not needed.",
        chinese_explanation: "(C) '内在的' 意思是自然属于某物；本质的。比喻地，它可以表示固有的和真实的。" +
            "<br><br>" +
            "(A) '外在的' 意味着不属于某人或某物的本质；来自或由外部操作的。" +
            "<br><br>" +
            "(B) '无关的' 意味着与某事无关或不相关的。" +
            "<br><br>" +
            "(D) '不必要的' 意味着不需要的。"
    },
    {
        id: 6,
        question: "The mother was extremely __________ of her children, always ensuring their safety and well-being.",
        chinese_question: "这位母亲对她的孩子们非常 __________，总是确保他们的安全和幸福。",
        answers: [
            { option: "A", answer: "neglectful", chinese_answer: "忽视的", chinese_romanization: "hūshì de" },
            { option: "B", answer: "coercive", chinese_answer: "强制的", chinese_romanization: "qiángzhì de" },
            { option: "C", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "D", answer: "protective", chinese_answer: "保护的", chinese_romanization: "bǎohù de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'protective' means intended to protect someone or something." +
            "<br><br>" +
            "(A) 'neglectful' means not giving proper care or attention to someone or something." +
            "<br><br>" +
            "(B) 'coercive' means using force or threats to make someone do something they might not want to do." +
            "<br><br>" +
            "(C) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
        chinese_explanation: "(D) '保护的' 意味着旨在保护某人或某物的。" +
            "<br><br>" +
            "(A) '忽视的' 意味着没有给予适当的照顾或关注某人或某物的。" +
            "<br><br>" +
            "(B) '强制的' 意思是使用力量或威胁来迫使某人做他们可能不想做的事情。" +
            "<br><br>" +
            "(C) '粗心的' 意味着没有给予足够的关注或思考以避免伤害或错误的。"
    },
    {
        id: 7,
        question: "He has been suffering from __________ back pain for years, seeking various treatments without success.",
        chinese_question: "多年来他一直饱受 __________ 背痛的折磨，尝试了各种治疗但都没有成功。",
        answers: [
            { option: "A", answer: "acute", chinese_answer: "急性", chinese_romanization: "jíxìng" },
            { option: "B", answer: "temporary", chinese_answer: "暂时", chinese_romanization: "zànshí" },
            { option: "C", answer: "chronic", chinese_answer: "慢性", chinese_romanization: "mànxìng" },
            { option: "D", answer: "momentary", chinese_answer: "短暂", chinese_romanization: "duǎnzàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'chronic' means (of an illness) persisting for a long time or constantly recurring." +
            "<br><br>" +
            "(A) 'acute' means severe or intense." +
            "<br><br>" +
            "(B) 'temporary' means lasting for only a limited period of time; not permanent." +
            "<br><br>" +
            "(D) 'momentary' means lasting for a very short time; brief.",
        chinese_explanation: "(C) '慢性' 意味着（疾病）持续很长时间或不断复发。" +
            "<br><br>" +
            "(A) '急性' 意味着严重或强烈的。" +
            "<br><br>" +
            "(B) '暂时' 意味着仅持续有限时间的；不是永久的。" +
            "<br><br>" +
            "(D) '短暂' 意味着持续时间非常短的；短暂的。"
    },
    {
        id: 8,
        question: "They enjoyed a __________ meal after a long day of hiking, which included a large bowl of stew, fresh bread, and a variety of roasted vegetables.",
        chinese_question: "长时间徒步旅行后，他们享受了一顿__________的饭，包括一大碗炖菜、新鲜的面包和各种烤蔬菜。",
        answers: [
            { option: "A", answer: "light", chinese_answer: "清淡的", chinese_romanization: "qīngdàn de" },
            { option: "B", answer: "hearty", chinese_answer: "丰盛的", chinese_romanization: "fēngshèng de" },
            { option: "C", answer: "minimal", chinese_answer: "极少的", chinese_romanization: "jíshǎo de" },
            { option: "D", answer: "small", chinese_answer: "小的", chinese_romanization: "xiǎo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hearty' means (of food) wholesome and substantial." +
            "<br><br>" +
            "(A) 'light' means not heavy or intense." +
            "<br><br>" +
            "(C) 'minimal' means of a minimum amount, quantity, or degree; negligible." +
            "<br><br>" +
            "(D) 'small' means of a size that is less than normal or usual.",
        chinese_explanation: "(B) '丰盛的'一词意味着（食物）有益健康且分量足的。" +
            "<br><br>" +
            "(A) '清淡的' 意味着不重或不强烈的。" +
            "<br><br>" +
            "(C) '极少的' 意味着最低限度的数量、量或程度；可以忽略不计的。" +
            "<br><br>" +
            "(D) '小的' 意味着比正常或通常的尺寸小。"
    },
    {
        id: 9,
        question: "The __________ child threw a tantrum when he didn't get his way, much to his parents' embarrassment.",
        chinese_question: "这个 __________ 的孩子在没有得到他想要的东西时大发脾气，让他的父母非常尴尬。",
        answers: [
            { option: "A", answer: "patient", chinese_answer: "有耐心的", chinese_romanization: "yǒu nàixīn de" },
            { option: "B", answer: "cooperative", chinese_answer: "合作的", chinese_romanization: "hézuò de" },
            { option: "C", answer: "petulant", chinese_answer: "任性的", chinese_romanization: "rènxìng de" },
            { option: "D", answer: "calm", chinese_answer: "冷静的", chinese_romanization: "lěngjìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'petulant' means childishly sulky or bad-tempered." +
            "<br><br>" +
            "(A) 'patient' means able to accept or tolerate delays, problems, or suffering without becoming annoyed or anxious." +
            "<br><br>" +
            "(B) 'cooperative' means involving mutual assistance in working toward a common goal." +
            "<br><br>" +
            "(D) 'calm' means not showing or feeling nervousness, anger, or other strong emotions.",
        chinese_explanation: "(C) '任性的' 意味着孩子气地愠怒或脾气暴躁的。" +
            "<br><br>" +
            "(A) '有耐心的' 意味着能够接受或容忍延误、问题或痛苦而不变得恼怒或焦虑的。" +
            "<br><br>" +
            "(B) '合作的' 意味着在共同目标的实现中相互帮助的。" +
            "<br><br>" +
            "(D) '冷静的' 意味着不显示或感到紧张、愤怒或其他强烈情感的。"
    },
    {
        id: 10,
        question: "After years of working long hours without a break, she felt __________ and uninspired, no longer excited by the challenges of her job.",
        chinese_question: "多年连续工作没有休息之后，她感到 __________ 和无精打采，再也不会对工作的挑战感到兴奋。",
        answers: [
            { option: "A", answer: "jaded", chinese_answer: "厌倦的", chinese_romanization: "yànjuàn de" },
            { option: "B", answer: "enthusiastic", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "C", answer: "energetic", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
            { option: "D", answer: "motivated", chinese_answer: "有动力的", chinese_romanization: "yǒu dònglì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'jaded' means tired, bored, or lacking enthusiasm, typically after having had too much of something." +
            "<br><br>" +
            "(B) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(C) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(D) 'motivated' means provided with a reason to act in a certain way.",
        chinese_explanation: "(A) '厌倦的' 意味着疲倦的、无聊的或缺乏热情的，通常是在经历过多之后。" +
            "<br><br>" +
            "(B) '热情的' 意味着有或表现出强烈和渴望的享受、兴趣或认可。" +
            "<br><br>" +
            "(C) '精力充沛的' 意味着表现出或涉及巨大的活动或活力。" +
            "<br><br>" +
            "(D) '有动力的' 意味着提供了一种以某种方式行动的理由。"
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
