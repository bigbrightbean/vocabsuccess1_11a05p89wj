// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ hero of the ancient tale was known for his incredible strength and bravery.",
        chinese_question: "古代传说中的 __________ 英雄以其非凡的力量和勇气而闻名。",
        answers: [
            { option: "A", answer: "obscure", chinese_answer: "默默无闻", chinese_romanization: "mòmòwúwén" },
            { option: "B", answer: "legendary", chinese_answer: "传奇", chinese_romanization: "chuánqí" },
            { option: "C", answer: "ordinary", chinese_answer: "普通", chinese_romanization: "pǔtōng" },
            { option: "D", answer: "unknown", chinese_answer: "未知", chinese_romanization: "wèizhī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'legendary' means described in or based on legends." +
            "<br><br>" +
            "(A) 'obscure' means not discovered or known about." +
            "<br><br>" +
            "(C) 'ordinary' means with no special or distinctive features." +
            "<br><br>" +
            "(D) 'unknown' means not known or familiar.",
        chinese_explanation: "(B) '传奇' 一词意味着在传说中描述或基于传说的。" +
            "<br><br>" +
            "(A) '默默无闻' 意味着未被发现或不为人知的。" +
            "<br><br>" +
            "(C) '普通' 意味着没有特别或独特的特征。" +
            "<br><br>" +
            "(D) '未知' 意味着不为人知或不熟悉的。"
    },
    {
        id: 2,
        question: "The sky was a beautiful shade of __________, making it a perfect day for a picnic in the park.",
        chinese_question: "天空呈现出美丽的 __________ 色，今天是去公园野餐的完美天气。",
        answers: [
            { option: "A", answer: "green", chinese_answer: "绿色", chinese_romanization: "lǜsè" },
            { option: "B", answer: "azure", chinese_answer: "天蓝色", chinese_romanization: "tiānlán sè" },
            { option: "C", answer: "gray", chinese_answer: "灰色", chinese_romanization: "huīsè" },
            { option: "D", answer: "yellow", chinese_answer: "黄色", chinese_romanization: "huángsè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'azure' means bright blue in color, like a cloudless sky." +
            "<br><br>" +
            "(A) 'green' means of the color between blue and yellow in the spectrum; colored like grass or emeralds." +
            "<br><br>" +
            "(C) 'gray' means of a color intermediate between black and white, as of ashes or an overcast sky." +
            "<br><br>" +
            "(D) 'yellow' means of the color between green and orange in the spectrum; colored like ripe lemons or egg yolks.",
        chinese_explanation: "(B) '天蓝色' 一词意味着像无云的天空一样明亮的蓝色。" +
            "<br><br>" +
            "(A) '绿色' 意味着在光谱中介于蓝色和黄色之间的颜色；颜色像草或翡翠。" +
            "<br><br>" +
            "(C) '灰色' 意味着介于黑色和白色之间的颜色，如灰烬或阴天的天空。" +
            "<br><br>" +
            "(D) '黄色' 意味着在光谱中介于绿色和橙色之间的颜色；颜色像熟透的柠檬或蛋黄。"
    },
    {
        id: 3,
        question: "The valley is known for its __________ soil, which supports a wide variety of crops.",
        chinese_question: "该山谷以其 __________ 的土壤而闻名，支持多种作物的生长。",
        answers: [
            { option: "A", answer: "infertile", chinese_answer: "贫瘠的", chinese_romanization: "pínjí de" },
            { option: "B", answer: "barren", chinese_answer: "荒芜的", chinese_romanization: "huāngwú de" },
            { option: "C", answer: "fertile", chinese_answer: "肥沃的", chinese_romanization: "féiwò de" },
            { option: "D", answer: "rocky", chinese_answer: "多石的", chinese_romanization: "duōshí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fertile' means (of soil or land) producing or capable of producing abundant vegetation or crops." +
            "<br><br>" +
            "(A) 'infertile' means not fertile; unable to reproduce." +
            "<br><br>" +
            "(B) 'barren' means too poor to produce much or any vegetation." +
            "<br><br>" +
            "(D) 'rocky' means full of or abounding in rocks.",
        chinese_explanation: "(C) '肥沃的' 一词意味着（土壤或土地）能够生产大量植被或作物。" +
            "<br><br>" +
            "(A) '贫瘠的' 意味着不肥沃；不能生殖。" +
            "<br><br>" +
            "(B) '荒芜的' 意味着贫穷到无法生产太多或任何植被。" +
            "<br><br>" +
            "(D) '多石的' 意味着充满或遍布岩石。"
    },
    {
        id: 4,
        question: "During her __________ time, she enjoys reading books and taking long walks in the park.",
        chinese_question: "在她的 __________ 时间里，她喜欢读书和在公园里散步。",
        answers: [
            { option: "A", answer: "busy", chinese_answer: "忙碌的", chinese_romanization: "mánglù de" },
            { option: "B", answer: "hectic", chinese_answer: "繁忙的", chinese_romanization: "fánmáng de" },
            { option: "C", answer: "leisure", chinese_answer: "闲暇的", chinese_romanization: "xiánxiá de" },
            { option: "D", answer: "working", chinese_answer: "工作的", chinese_romanization: "gōngzuò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'leisure' means free time when one is not working or occupied." +
            "<br><br>" +
            "(A) 'busy' means having a great deal to do." +
            "<br><br>" +
            "(B) 'hectic' means full of incessant or frantic activity." +
            "<br><br>" +
            "(D) 'working' means engaged in work.",
        chinese_explanation: "(C) '闲暇的' 一词意味着不工作或不忙的空闲时间。" +
            "<br><br>" +
            "(A) '忙碌的' 意味着有很多事情要做。" +
            "<br><br>" +
            "(B) '繁忙的' 意味着充满不断或狂热活动的。" +
            "<br><br>" +
            "(D) '工作的' 意味着从事工作。"
    },
    {
        id: 5,
        question: "She attended a __________ ceremony at the temple, where rituals and prayers were performed.",
        chinese_question: "她参加了寺庙的 __________ 仪式，仪式和祈祷在那里进行。",
        answers: [
            { option: "A", answer: "secular", chinese_answer: "世俗的", chinese_romanization: "shìsú de" },
            { option: "B", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "C", answer: "religious", chinese_answer: "宗教的", chinese_romanization: "zōngjiào de" },
            { option: "D", answer: "informal", chinese_answer: "非正式的", chinese_romanization: "fēi zhèngshì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'religious' means relating to or believing in a religion." +
            "<br><br>" +
            "(A) 'secular' means denoting attitudes, activities, or other things that have no religious or spiritual basis." +
            "<br><br>" +
            "(B) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(D) 'informal' means having a relaxed, friendly, or unofficial style, manner, or nature.",
        chinese_explanation: "(C) '宗教的' 一词意味着与宗教有关或相信宗教。" +
            "<br><br>" +
            "(A) '世俗的' 意味着表示没有宗教或精神基础的态度、活动或其他事物。" +
            "<br><br>" +
            "(B) '随意的' 意味着放松和不关心。" +
            "<br><br>" +
            "(D) '非正式的' 意味着具有放松、友好或非官方的风格、方式或性质。"
    },
    {
        id: 6,
    question: "The __________ film portrayed the life of a famous author, highlighting her struggles and achievements.",
    chinese_question: "这部 __________ 电影描绘了一位著名作家的生活，突出她的奋斗和成就。",
    answers: [
        { option: "A", answer: "biographical", chinese_answer: "传记", chinese_romanization: "zhuànjì" },
        { option: "B", answer: "fictional", chinese_answer: "虚构", chinese_romanization: "xūgòu" },
        { option: "C", answer: "documentary", chinese_answer: "纪录片", chinese_romanization: "jìlùpiàn" },
        { option: "D", answer: "animated", chinese_answer: "动画", chinese_romanization: "dònghuà" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'biographical' means relating to an account of a person's life." +
        "<br><br>" +
        "(B) 'fictional' means based on imagination rather than fact." +
        "<br><br>" +
        "(C) 'documentary' means a nonfictional film that provides a factual report." +
        "<br><br>" +
        "(D) 'animated' means containing moving drawings or models.",
    chinese_explanation: "(A) '传记' 意味着关于某人生活的描述。" +
        "<br><br>" +
        "(B) '虚构' 意味着基于想象而不是事实。" +
        "<br><br>" +
        "(C) '纪录片' 意味着提供事实报告的非虚构电影。" +
        "<br><br>" +
        "(D) '动画' 意味着包含运动的绘画或模型。"
    },
    {
        id: 7,
    question: "The freshly polished car was __________ under the bright sunlight.",
    chinese_question: "新抛光的汽车在明亮的阳光下 __________。",
    answers: [
        { option: "A", answer: "gleaming", chinese_answer: "闪闪发光", chinese_romanization: "shǎnshǎn fāguāng" },
        { option: "B", answer: "dirty", chinese_answer: "肮脏", chinese_romanization: "āngzāng" },
        { option: "C", answer: "dull", chinese_answer: "暗淡", chinese_romanization: "àndàn" },
        { option: "D", answer: "tarnished", chinese_answer: "失去光泽", chinese_romanization: "shīqù guāngzé" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'gleaming' means shining brightly, especially with reflected light." +
        "<br><br>" +
        "(B) 'dirty' means covered or marked with an unclean substance." +
        "<br><br>" +
        "(C) 'dull' means lacking brightness, vividness, or sheen." +
        "<br><br>" +
        "(D) 'tarnished' means lost or caused to lose luster, especially as a result of exposure to air or moisture.",
    chinese_explanation: "(A) '闪闪发光' 意味着明亮地闪耀，特别是反射光。" +
        "<br><br>" +
        "(B) '肮脏' 意味着被不洁物质覆盖或标记。" +
        "<br><br>" +
        "(C) '暗淡' 意味着缺乏亮度、生动性或光泽。" +
        "<br><br>" +
        "(D) '失去光泽' 意味着由于暴露在空气或湿气中而失去或导致失去光泽。"
    },
    {
        id: 8,
    question: "Their plans went __________ when the weather suddenly turned bad.",
    chinese_question: "当天气突然变坏时，他们的计划出了 __________。",
    answers: [
        { option: "A", answer: "awry", chinese_answer: "差错", chinese_romanization: "chācuò" },
        { option: "B", answer: "smoothly", chinese_answer: "顺利", chinese_romanization: "shùnlì" },
        { option: "C", answer: "perfectly", chinese_answer: "完美", chinese_romanization: "wánměi" },
        { option: "D", answer: "accurately", chinese_answer: "准确", chinese_romanization: "zhǔnquè" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'awry' means away from the appropriate, planned, or expected course; amiss." +
        "<br><br>" +
        "(B) 'smoothly' means in an even and regular manner; without problems or difficulties." +
        "<br><br>" +
        "(C) 'perfectly' means in a manner or way that could not be better." +
        "<br><br>" +
        "(D) 'accurately' means in a way that is correct in all details.",
    chinese_explanation: "(A) '差错' 意味着偏离适当的、计划的或预期的路线；出差错。" +
        "<br><br>" +
        "(B) '顺利' 意味着以平稳和规律的方式；没有问题或困难。" +
        "<br><br>" +
        "(C) '完美' 意味着以无法更好的方式。" +
        "<br><br>" +
        "(D) '准确' 意味着在所有细节上都是正确的。"
    },
    {
        id: 9,
    question: "It is __________ to drink enough water each day to stay healthy.",
    chinese_question: "每天喝足够的水以保持健康是 __________ 的。",
    answers: [
        { option: "A", answer: "crucial", chinese_answer: "关键的", chinese_romanization: "guānjiàn de" },
        { option: "B", answer: "optional", chinese_answer: "可选择的", chinese_romanization: "kě xuǎnzé de" },
        { option: "C", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēi bù zú dào de" },
        { option: "D", answer: "unnecessary", chinese_answer: "不必要的", chinese_romanization: "bù bìyào de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'crucial' means decisive or critical, especially in the success or failure of something." +
        "<br><br>" +
        "(B) 'optional' means available to be chosen but not obligatory." +
        "<br><br>" +
        "(C) 'trivial' means of little value or importance." +
        "<br><br>" +
        "(D) 'unnecessary' means not needed.",
    chinese_explanation: "(A) '关键的' 意味着决定性的或至关重要的，特别是在成功或失败方面。" +
        "<br><br>" +
        "(B) '可选择的' 意味着可以选择但不是强制性的。" +
        "<br><br>" +
        "(C) '微不足道的' 意味着价值或重要性很小的。" +
        "<br><br>" +
        "(D) '不必要的' 意味着不需要的。"
    },
    {
        id: 10,
        question: "The universe is vast and seemingly __________, stretching beyond our comprehension.",
        chinese_question: "宇宙浩瀚无边，似乎__________，超出了我们的理解范围。",
        answers: [
            { option: "A", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
            { option: "B", answer: "finite", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
            { option: "C", answer: "infinite", chinese_answer: "无限的", chinese_romanization: "wúxiàn de" },
            { option: "D", answer: "small", chinese_answer: "小的", chinese_romanization: "xiǎo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'infinite' means limitless or endless in space, extent, or size; impossible to measure or calculate." +
            "<br><br>" +
            "(A) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(B) 'finite' means having limits or bounds." +
            "<br><br>" +
            "(D) 'small' means of a size that is less than normal or usual.",
        chinese_explanation: "(C) '无限的'一词意味着在空间、范围或大小上无穷无尽的；无法测量或计算的。" +
            "<br><br>" +
            "(A) '有限的' 意味着在大小、数量或范围上受到限制的。" +
            "<br><br>" +
            "(B) '有限的' 意味着有界限或范围的。" +
            "<br><br>" +
            "(D) '小的' 意味着尺寸小于正常或通常大小的。"
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
