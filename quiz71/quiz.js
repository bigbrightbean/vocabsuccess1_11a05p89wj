// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The movie reached its __________ when the hero finally faced the villain in an epic battle.",
        chinese_question: "当英雄终于在一场史诗般的战斗中面对反派时，电影达到了__________。",
        answers: [
            { option: "A", answer: "beginning", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
            { option: "B", answer: "climax", chinese_answer: "高潮", chinese_romanization: "gāocháo" },
            { option: "C", answer: "prologue", chinese_answer: "序言", chinese_romanization: "xùyán" },
            { option: "D", answer: "epilogue", chinese_answer: "尾声", chinese_romanization: "wěishēng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'climax' means the most intense, exciting, or important point of something." + 
            "<br><br>" + 
            "(A) 'beginning' means the point in time or space at which something starts." + 
            "<br><br>" + 
            "(C) 'prologue' means a separate introductory section of a literary or musical work." + 
            "<br><br>" + 
            "(D) 'epilogue' means a section or speech at the end of a book or play that serves as a comment on or a conclusion to what has happened.",
        chinese_explanation: "(B) '高潮'一词意味着某事最激烈、最激动或最重要的时刻。" + 
            "<br><br>" + 
            "(A) '开始' 意味着某事在时间或空间上的起点。" + 
            "<br><br>" + 
            "(C) '序言' 意味着文学或音乐作品的独立引言部分。" + 
            "<br><br>" + 
            "(D) '尾声' 意味着书籍或戏剧结尾的一部分或讲话，作为对已发生事情的评论或结论。"
    },
    {
        id: 2,
        question: "He helps her with her math homework, and __________, she assists him with his science projects.",
        chinese_question: "他帮助她做数学作业， __________，她也帮助他做科学项目。",
        answers: [
            { option: "A", answer: "occasionally", chinese_answer: "偶尔", chinese_romanization: "ǒu'ěr" },
            { option: "B", answer: "frequently", chinese_answer: "经常", chinese_romanization: "jīngcháng" },
            { option: "C", answer: "rarely", chinese_answer: "很少", chinese_romanization: "hěn shǎo" },
            { option: "D", answer: "vice versa", chinese_answer: "反之亦然", chinese_romanization: "fǎnzhī yìrán" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'vice versa' means that the opposite of what was just mentioned is also true, indicating a reciprocal relationship or situation." +
            "<br><br>" +
            "(A) 'occasionally' means at infrequent or irregular intervals; now and then." +
            "<br><br>" +
            "(B) 'frequently' means regularly or habitually; often." +
            "<br><br>" +
            "(C) 'rarely' means not often; seldom.",
        chinese_explanation: "(D) '反之亦然' 意味着刚才所说的反过来也是真实的，表示一种相互的关系或情况。" +
            "<br><br>" +
            "(A) '偶尔' 意味着不频繁或不规律的间隔；时不时。" +
            "<br><br>" +
            "(B) '经常' 意味着定期或习惯性地；经常。" +
            "<br><br>" +
            "(C) '很少' 意味着不经常；很少。"
    },
    {
        id: 3,
        question: "The artist's new painting is an __________ to his mentor, who taught him everything.",
        chinese_question: "这位艺术家的新画作是对他导师的 __________，他的导师教会了他一切。",
        answers: [
            { option: "A", answer: "homage", chinese_answer: "致敬", chinese_romanization: "zhìjìng" },
            { option: "B", answer: "insult", chinese_answer: "侮辱", chinese_romanization: "wǔrǔ" },
            { option: "C", answer: "critique", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "D", answer: "mockery", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'homage' means special honour or respect shown publicly." +
            "<br><br>" +
            "(B) 'insult' means speak to or treat with disrespect or scornful abuse." +
            "<br><br>" +
            "(C) 'critique' means a detailed analysis and assessment of something, especially a literary, philosophical, or political theory." +
            "<br><br>" +
            "(D) 'mockery' means teasing and contemptuous language or behavior directed at a particular person or thing.",
        chinese_explanation: "(A) '致敬' 意味着公开表现的特别尊敬或敬意。" +
            "<br><br>" +
            "(B) '侮辱' 意味着对某人说话或对待不尊重或轻蔑。" +
            "<br><br>" +
            "(C) '批评' 意味着对某事物进行详细分析和评估，尤其是文学、哲学或政治理论。" +
            "<br><br>" +
            "(D) '嘲笑' 意味着针对某人或某事的嘲弄和轻蔑的语言或行为。"
    },
    {
        id: 4,
        question: "She has a natural __________ for design, always creating stunning layouts.",
        chinese_question: "她在设计方面有着天生的 __________，总是能创造出令人惊叹的布局。",
        answers: [
            { option: "A", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "flair", chinese_answer: "天赋", chinese_romanization: "tiānfù" },
            { option: "C", answer: "inability", chinese_answer: "无能", chinese_romanization: "wúnéng" },
            { option: "D", answer: "disinterest", chinese_answer: "不感兴趣", chinese_romanization: "bù gǎn xìngqù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'flair' means a special or instinctive aptitude or ability for doing something well." +
            "<br><br>" +
            "(A) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(C) 'inability' means the state of being unable to do something." +
            "<br><br>" +
            "(D) 'disinterest' means lack of interest in something.",
        chinese_explanation: "(B) '天赋' 意味着对某事有特殊或本能的才能或能力。" +
            "<br><br>" +
            "(A) '冷漠' 意味着缺乏兴趣、关注或同情心。" +
            "<br><br>" +
            "(C) '无能' 意味着无法做某事的状态。" +
            "<br><br>" +
            "(D) '不感兴趣' 意味着对某事缺乏兴趣。"
    },
    {
        id: 5,
        question: "The __________ of the meeting was to discuss the new project plans.",
        chinese_question: "会议的 __________ 是讨论新项目计划。",
        answers: [
            { option: "A", answer: "accident", chinese_answer: "意外", chinese_romanization: "yìwài" },
            { option: "B", answer: "purpose", chinese_answer: "目的", chinese_romanization: "mùdì" },
            { option: "C", answer: "consequence", chinese_answer: "后果", chinese_romanization: "hòuguǒ" },
            { option: "D", answer: "confusion", chinese_answer: "混乱", chinese_romanization: "hùnluàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'purpose' means the reason for which something is done or created or for which something exists." +
            "<br><br>" +
            "(A) 'accident' means an unfortunate incident that happens unexpectedly and unintentionally." +
            "<br><br>" +
            "(C) 'consequence' means a result or effect of an action or condition." +
            "<br><br>" +
            "(D) 'confusion' means lack of understanding; uncertainty.",
        chinese_explanation: "(B) '目的' 意味着某事被做或创建的原因，或某物存在的原因。" +
            "<br><br>" +
            "(A) '意外' 意味着意外和无意中发生的不幸事件。" +
            "<br><br>" +
            "(C) '后果' 意味着某一行动或条件的结果或影响。" +
            "<br><br>" +
            "(D) '混乱' 意味着缺乏理解；不确定性。"
    },
    {
        id: 6,
        question: "The word 'snake' often has a negative __________, implying someone who is treacherous or deceitful.",
        chinese_question: "'蛇'这个词通常有负面的 __________，暗示某人是奸诈或欺骗的。",
        answers: [
            { option: "A", answer: "connotation", chinese_answer: "内涵", chinese_romanization: "nèihán" },
            { option: "B", answer: "definition", chinese_answer: "定义", chinese_romanization: "dìngyì" },
            { option: "C", answer: "origin", chinese_answer: "起源", chinese_romanization: "qǐyuán" },
            { option: "D", answer: "synonym", chinese_answer: "同义词", chinese_romanization: "tóngyìcí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'connotation' means an idea or feeling that a word invokes in addition to its literal or primary meaning." +
            "<br><br>" +
            "(B) 'definition' means a statement of the exact meaning of a word." +
            "<br><br>" +
            "(C) 'origin' means the point or place where something begins, arises, or is derived." +
            "<br><br>" +
            "(D) 'synonym' means a word or phrase that means exactly or nearly the same as another word or phrase in the same language.",
        chinese_explanation: "(A) '内涵' 一词意味着一个词除了字面或主要意思之外引发的想法或感觉。" +
            "<br><br>" +
            "(B) '定义' 意味着一个词的确切含义的陈述。" +
            "<br><br>" +
            "(C) '起源' 意味着某事开始、产生或来源的点或地方。" +
            "<br><br>" +
            "(D) '同义词' 意味着在同一语言中与另一个词或短语完全相同或几乎相同的词或短语。"
    },
    {
        id: 7,
        question: "The dove is a __________ of peace, often depicted with an olive branch in its beak.",
        chinese_question: "鸽子是和平的 __________，常常被描绘成嘴里叼着橄榄枝。",
        answers: [
            { option: "A", answer: "sound", chinese_answer: "声音", chinese_romanization: "shēngyīn" },
            { option: "B", answer: "letter", chinese_answer: "字母", chinese_romanization: "zìmǔ" },
            { option: "C", answer: "symbol", chinese_answer: "象征", chinese_romanization: "xiàngzhēng" },
            { option: "D", answer: "shape", chinese_answer: "形状", chinese_romanization: "xíngzhuàng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'symbol' means a thing that represents or stands for something else, especially a material object representing something abstract." +
            "<br><br>" +
            "(A) 'sound' means vibrations that travel through the air or another medium and can be heard when they reach a person's or animal's ear." +
            "<br><br>" +
            "(B) 'letter' means a character representing one or more of the sounds used in speech; any of the symbols of an alphabet." +
            "<br><br>" +
            "(D) 'shape' means the external form, contours, or outline of someone or something.",
        chinese_explanation: "(C) '象征' 意味着代表或代表某物的事物，特别是代表抽象事物的物质对象。" +
            "<br><br>" +
            "(A) '声音' 意味着通过空气或其他介质传播的振动，当它们到达人或动物的耳朵时可以听到。" +
            "<br><br>" +
            "(B) '字母' 意味着代表一种或多种用于语音的声音的字符；字母表中的任何符号。" +
            "<br><br>" +
            "(D) '形状' 意味着某人或某物的外部形状、轮廓或轮廓。"
    },
    {
        id: 8,
        question: "Maintaining a high level of __________ is crucial for drivers to react quickly to unexpected situations on the road.",
        chinese_question: "保持高度的 __________ 对司机来说至关重要，以便快速应对道路上的突发情况。",
        answers: [
            { option: "A", answer: "drowsiness", chinese_answer: "困倦", chinese_romanization: "kùn juàn" },
            { option: "B", answer: "fatigue", chinese_answer: "疲劳", chinese_romanization: "píláo" },
            { option: "C", answer: "alertness", chinese_answer: "警觉", chinese_romanization: "jǐngjué" },
            { option: "D", answer: "distraction", chinese_answer: "分心", chinese_romanization: "fēn xīn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'alertness' means the quality of being alert and quick to notice things." +
            "<br><br>" +
            "(A) 'drowsiness' means a feeling of being sleepy and lethargic." +
            "<br><br>" +
            "(B) 'fatigue' means extreme tiredness resulting from mental or physical exertion or illness." +
            "<br><br>" +
            "(D) 'distraction' means a thing that prevents someone from giving full attention to something else.",
        chinese_explanation: "(C) '警觉' 一词意味着警觉和快速注意事物的品质。" +
            "<br><br>" +
            "(A) '困倦' 意味着昏昏欲睡和无精打采的感觉。" +
            "<br><br>" +
            "(B) '疲劳' 意味着因精神或体力劳动或疾病导致的极度疲劳。" +
            "<br><br>" +
            "(D) '分心' 意味着阻止某人全神贯注于其他事情的事物。"
    },
    {
        id: 9,
        question: "As an __________, she took on more responsibilities at work and home, managing her time and resources efficiently.",
        chinese_question: "作为一个 __________，她在工作和家庭中承担了更多的责任，高效地管理她的时间和资源。",
        answers: [
            { option: "A", answer: "child", chinese_answer: "孩子", chinese_romanization: "háizi" },
            { option: "B", answer: "adolescent", chinese_answer: "青少年", chinese_romanization: "qīngshàonián" },
            { option: "C", answer: "toddler", chinese_answer: "幼儿", chinese_romanization: "yòu'ér" },
            { option: "D", answer: "adult", chinese_answer: "成人", chinese_romanization: "chéngrén" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'adult' means a person who is fully grown or developed." +
            "<br><br>" +
            "(A) 'child' means a young human being below the age of puberty or below the legal age of majority." +
            "<br><br>" +
            "(B) 'adolescent' means a young person in the process of developing from a child into an adult." +
            "<br><br>" +
            "(C) 'toddler' means a young child who is just beginning to walk.",
        chinese_explanation: "(D) '成人' 一词意味着完全长大或发育成熟的人。" +
            "<br><br>" +
            "(A) '孩子' 意味着青春期以下或未满法定年龄的年轻人。" +
            "<br><br>" +
            "(B) '青少年' 意味着从儿童发展到成人过程中的年轻人。" +
            "<br><br>" +
            "(C) '幼儿' 意味着刚刚开始走路的幼儿。"
    },
    {
        id: 10,
        question: "The scientist ensured the __________ of the experiment by meticulously following the procedure and recording the data precisely.",
        chinese_question: "科学家通过精心遵循程序并准确记录数据来确保实验的 __________。",
        answers: [
            { option: "A", answer: "inaccuracy", chinese_answer: "不准确", chinese_romanization: "bù zhǔnquè" },
            { option: "B", answer: "approximation", chinese_answer: "近似值", chinese_romanization: "jìnsì zhí" },
            { option: "C", answer: "estimation", chinese_answer: "估计", chinese_romanization: "gūjì" },
            { option: "D", answer: "accuracy", chinese_answer: "准确性", chinese_romanization: "zhǔnquè xìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'accuracy' means the quality or state of being correct or precise." +
            "<br><br>" +
            "(A) 'inaccuracy' means the quality or state of not being accurate." +
            "<br><br>" +
            "(B) 'approximation' means a value or quantity that is nearly but not exactly correct." +
            "<br><br>" +
            "(C) 'estimation' means a rough calculation of the value, number, quantity, or extent of something.",
        chinese_explanation: "(D) '准确性' 一词意味着正确或精确的质量或状态。" +
            "<br><br>" +
            "(A) '不准确' 意味着不准确的质量或状态。" +
            "<br><br>" +
            "(B) '近似值' 意味着接近但不完全正确的值或数量。" +
            "<br><br>" +
            "(C) '估计' 意味着对某物的价值、数量、数量或范围的粗略计算。"
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
