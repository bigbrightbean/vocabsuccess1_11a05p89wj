// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The once small town has grown into a __________ city with a thriving economy.",
        chinese_question: "这个曾经的小镇已经发展成一个 __________ 的城市，经济繁荣。",
        answers: [
            { option: "A", answer: "impoverished", chinese_answer: "贫困的", chinese_romanization: "pínkùn de" },
            { option: "B", answer: "struggling", chinese_answer: "困难的", chinese_romanization: "kùnnán de" },
            { option: "C", answer: "failing", chinese_answer: "衰退的", chinese_romanization: "shuāituì de" },
            { option: "D", answer: "prosperous", chinese_answer: "繁荣的", chinese_romanization: "fánróng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'prosperous' means successful in material terms; flourishing financially." +
            "<br><br>" +
            "(A) 'impoverished' means made poor." +
            "<br><br>" +
            "(B) 'struggling' means striving to achieve or attain something in the face of difficulty or resistance." +
            "<br><br>" +
            "(C) 'failing' means losing strength or ability.",
        chinese_explanation: "(D) '繁荣的' 意味着在物质方面成功；经济上蓬勃发展的。" +
            "<br><br>" +
            "(A) '贫困的' 意味着变得贫穷的。" +
            "<br><br>" +
            "(B) '困难的' 意味着在面对困难或阻力时努力实现或获得某事。" +
            "<br><br>" +
            "(C) '衰退的' 意味着失去力量或能力的。"
    },
    {
        id: 2,
        question: "The philosopher's __________ insights into human nature have inspired generations of thinkers.",
        chinese_question: "哲学家对人性 __________ 的见解启发了一代又一代的思想家。",
        answers: [
            { option: "A", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
            { option: "B", answer: "shallow", chinese_answer: "肤浅的", chinese_romanization: "fūqiǎn de" },
            { option: "C", answer: "profound", chinese_answer: "深刻的", chinese_romanization: "shēnkè de" },
            { option: "D", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'profound' means very great or intense; having deep insight or understanding." +
            "<br><br>" +
            "(A) 'superficial' means existing or occurring at or on the surface." +
            "<br><br>" +
            "(B) 'shallow' means of little depth." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(C) '深刻的' 意味着非常大或强烈的；具有深刻的见解或理解的。" +
            "<br><br>" +
            "(A) '表面的' 意味着存在或发生在表面上的。" +
            "<br><br>" +
            "(B) '肤浅的' 意味着深度很小的。" +
            "<br><br>" +
            "(D) '琐碎的' 意味着价值或重要性很小的。"
    },
    {
        id: 3,
        question: "The __________ design of the new smartphone makes it easy to carry in a pocket without sacrificing functionality.",
        chinese_question: "新款智能手机的 __________ 设计使其便于放入口袋，同时不影响功能。",
        answers: [
            { option: "A", answer: "compact", chinese_answer: "紧凑的", chinese_romanization: "jǐncòu de" },
            { option: "B", answer: "bulky", chinese_answer: "笨重的", chinese_romanization: "bènzhòng de" },
            { option: "C", answer: "oversized", chinese_answer: "过大的", chinese_romanization: "guò dà de" },
            { option: "D", answer: "unwieldy", chinese_answer: "难处理的", chinese_romanization: "nán chǔlǐ de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'compact' means small, dense, and efficient." +
            "<br><br>" +
            "(B) 'bulky' means taking up much space, typically inconveniently." +
            "<br><br>" +
            "(C) 'oversized' means bigger than the usual size." +
            "<br><br>" +
            "(D) 'unwieldy' means difficult to carry or move because of its size, shape, or weight.",
        chinese_explanation: "(A) '紧凑的' 意味着小巧、密集且高效的。" +
            "<br><br>" +
            "(B) '笨重的' 意味着占据大量空间，通常不方便。" +
            "<br><br>" +
            "(C) '过大的' 意味着比通常的尺寸更大。" +
            "<br><br>" +
            "(D) '难处理的' 意味着由于尺寸、形状或重量而难以携带或移动。"
    },
    {
        id: 4,
        question: "The __________ task of digging the trench took several days to complete.",
        chinese_question: "挖掘战壕的 __________ 任务花了几天时间才完成。",
        answers: [
            { option: "A", answer: "easy", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
            { option: "B", answer: "simple", chinese_answer: "容易", chinese_romanization: "róngyì" },
            { option: "C", answer: "laborious", chinese_answer: "费力", chinese_romanization: "fèilì" },
            { option: "D", answer: "effortless", chinese_answer: "毫不费力", chinese_romanization: "háo bù fèilì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'laborious' means requiring considerable time and effort." +
            "<br><br>" +
            "(A) 'easy' means achieved without great effort; presenting few difficulties." +
            "<br><br>" +
            "(B) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'effortless' means requiring no physical or mental exertion.",
        chinese_explanation: "(C) '费力' 意味着需要相当多的时间和精力。" +
            "<br><br>" +
            "(A) '简单' 意味着不需要很大努力即可完成；没有什么困难。" +
            "<br><br>" +
            "(B) '容易' 意味着不需要很大努力即可完成。" +
            "<br><br>" +
            "(D) '毫不费力' 意味着不需要身体或精神上的努力。"
    },
    {
        id: 5,
        question: "The marathon was a __________ challenge, pushing the runners to their physical and mental limits.",
        chinese_question: "马拉松是一项__________的挑战，逼迫跑步者达到身体和精神的极限。",
        answers: [
            { option: "A", answer: "easy", chinese_answer: "容易的", chinese_romanization: "róngyì de" },
            { option: "B", answer: "relaxing", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "C", answer: "grueling", chinese_answer: "艰难的", chinese_romanization: "jiānnán de" },
            { option: "D", answer: "effortless", chinese_answer: "轻松的", chinese_romanization: "qīngsōng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'grueling' means extremely tiring and demanding." +
            "<br><br>" +
            "(A) 'easy' means achieved without great effort; presenting few difficulties." +
            "<br><br>" +
            "(B) 'relaxing' means making one feel relaxed; reducing tension or anxiety." +
            "<br><br>" +
            "(D) 'effortless' means requiring no physical or mental exertion.",
        chinese_explanation: "(C) '艰难的'一词意味着极其累人和要求高的。" +
            "<br><br>" +
            "(A) '容易的' 意味着不费大力就能达到的；呈现少许困难的。" +
            "<br><br>" +
            "(B) '放松的' 意味着使人感到放松的；减少紧张或焦虑的。" +
            "<br><br>" +
            "(D) '轻松的' 意味着不需要身体或精神努力的。"
    },
    {
        id: 6,
        question: "The artist's __________ design on the vase featured delicate patterns and complex motifs, captivating everyone who saw it.",
        chinese_question: "艺术家在花瓶上的 __________ 设计具有精细的图案和复杂的图形，吸引了所有看到它的人。",
        answers: [
            { option: "A", answer: "intricate", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "B", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "C", answer: "plain", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" },
            { option: "D", answer: "dull", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'intricate' means very complicated or detailed." +
            "<br><br>" +
            "(B) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(C) 'plain' means not decorated or elaborate; simple or basic in character." +
            "<br><br>" +
            "(D) 'dull' means lacking interest or excitement.",
        chinese_explanation: "(A) '复杂的' 意味着非常复杂或详细的。" +
            "<br><br>" +
            "(B) '简单的' 意味着容易理解或完成的；没有困难的。" +
            "<br><br>" +
            "(C) '朴素的' 意味着不装饰或精致的；性格上简单或基本的。" +
            "<br><br>" +
            "(D) '无聊的' 意味着缺乏兴趣或兴奋的。"

    },
    {
        id: 7,
        question: "Paris is often considered the __________ city for romance, known for its charming streets and iconic landmarks.",
        chinese_question: "巴黎通常被认为是 __________ 的浪漫城市，以其迷人的街道和标志性地标而闻名。",
        answers: [
            { option: "A", answer: "atypical", chinese_answer: "非典型的", chinese_romanization: "fēi diǎnxíng de" },
            { option: "B", answer: "uncharacteristic", chinese_answer: "非典型的", chinese_romanization: "fēi diǎnxíng de" },
            { option: "C", answer: "quintessential", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" },
            { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'quintessential' means representing the most perfect or typical example of a quality or class." +
            "<br><br>" +
            "(A) 'atypical' means not representative of a type, group, or class." +
            "<br><br>" +
            "(B) 'uncharacteristic' means not typical of a particular person or thing." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(C) '典型的' 意味着代表某种品质或类别的最完美或典型的例子。" +
            "<br><br>" +
            "(A) '非典型的' 意味着不代表某一类型、群体或类别的。" +
            "<br><br>" +
            "(B) '非典型的' 意味着不典型的某个人或事物的。" +
            "<br><br>" +
            "(D) '普通的' 意味着没有特别或独特的特征的；正常的。"
    },
    {
        id: 8,
        question: "The old man’s __________ voice barely reached the back of the room.",
        chinese_question: "老人的__________声音几乎听不到房间的后面。",
        answers: [
            { option: "A", answer: "strong", chinese_answer: "强壮的", chinese_romanization: "qiángzhuàng de" },
            { option: "B", answer: "feeble", chinese_answer: "微弱的", chinese_romanization: "wēiruò de" },
            { option: "C", answer: "loud", chinese_answer: "大声的", chinese_romanization: "dàshēng de" },
            { option: "D", answer: "robust", chinese_answer: "健壮的", chinese_romanization: "jiànzhuàng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'feeble' means lacking physical strength, especially as a result of age or illness." +
            "<br><br>" +
            "(A) 'strong' means having the power to move heavy weights or perform other physically demanding tasks." +
            "<br><br>" +
            "(C) 'loud' means producing or capable of producing much noise." +
            "<br><br>" +
            "(D) 'robust' means strong and healthy; vigorous.",
        chinese_explanation: "(B) '微弱的'一词意味着缺乏体力，尤其是由于年龄或疾病。" +
            "<br><br>" +
            "(A) '强壮的' 意味着有力量移动重物或执行其他需要体力的任务。" +
            "<br><br>" +
            "(C) '大声的' 意味着产生或能够产生大量噪音的。" +
            "<br><br>" +
            "(D) '健壮的' 意味着强壮和健康的；精力充沛的。"
    },
    {
        id: 9,
        question: "The artist used permanent ink to create an __________ mark on the canvas.",
        chinese_question: "艺术家用永久墨水在画布上留下了 __________ 的印记。",
        answers: [
            { option: "A", answer: "indelible", chinese_answer: "不可磨灭的", chinese_romanization: "bù kě mómiè de" },
            { option: "B", answer: "erasable", chinese_answer: "可擦除的", chinese_romanization: "kě cāchú de" },
            { option: "C", answer: "faint", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "D", answer: "temporary", chinese_answer: "临时的", chinese_romanization: "línshí de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'indelible' means making marks that cannot be removed." +
            "<br><br>" +
            "(B) 'erasable' means able to be erased or removed." +
            "<br><br>" +
            "(C) 'faint' means barely perceptible." +
            "<br><br>" +
            "(D) 'temporary' means lasting for only a limited period of time; not permanent.",
        chinese_explanation: "(A) '不可磨灭的' 意味着留下无法去除的印记。" +
            "<br><br>" +
            "(B) '可擦除的' 意味着可以擦除或去除的。" +
            "<br><br>" +
            "(C) '模糊的' 意味着几乎不可见的。" +
            "<br><br>" +
            "(D) '临时的' 意味着仅持续有限时间的；非永久的。"
    },
    {
        id: 10,
        question: "In the story, the villain believed he was __________, capable of defeating anyone who challenged him.",
        chinese_question: "在故事中，反派认为自己是__________的，能够击败任何挑战他的人。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "B", answer: "powerless", chinese_answer: "无力的", chinese_romanization: "wúlì de" },
            { option: "C", answer: "omnipotent", chinese_answer: "全能的", chinese_romanization: "quánnéng de" },
            { option: "D", answer: "helpless", chinese_answer: "无助的", chinese_romanization: "wúzhù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'omnipotent' means having unlimited power; able to do anything." +
            "<br><br>" +
            "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(B) 'powerless' means without ability, influence, or power." +
            "<br><br>" +
            "(D) 'helpless' means unable to defend oneself or to act without help.",
        chinese_explanation: "(C) '全能的' 一词意味着拥有无限的力量；能够做任何事情的。" +
            "<br><br>" +
            "(A) '虚弱的' 意味着缺乏执行体力要求高的任务的力量；缺乏体力和精力的。" +
            "<br><br>" +
            "(B) '无力的' 意味着没有能力、影响或力量的。" +
            "<br><br>" +
            "(D) '无助的' 意味着无法自我防卫或在没有帮助的情况下行动的。"
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
