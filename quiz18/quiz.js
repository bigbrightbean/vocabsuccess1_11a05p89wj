// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ writer published three novels and a collection of short stories in just two years.",
        chinese_question: "这位 __________ 的作家在短短两年内出版了三部小说和一个短篇故事集。",
        answers: [
            { option: "A", answer: "inactive", chinese_answer: "不活跃的", chinese_romanization: "bù huóyuè de" },
            { option: "B", answer: "sluggish", chinese_answer: "迟缓的", chinese_romanization: "chíhuǎn de" },
            { option: "C", answer: "unproductive", chinese_answer: "无成效的", chinese_romanization: "wú chéngxiào de" },
            { option: "D", answer: "prolific", chinese_answer: "多产的", chinese_romanization: "duōchǎn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'prolific' means (of a plant, animal, or person) producing much fruit or foliage or many offspring; present in large numbers or quantities; plentiful." +
            "<br><br>" +
            "(A) 'inactive' means not engaging in or involving any or much physical activity." +
            "<br><br>" +
            "(B) 'sluggish' means slow-moving or inactive." +
            "<br><br>" +
            "(C) 'unproductive' means not achieving much; not producing much or any growth.",
        chinese_explanation: "(D) '多产的' 意味着（植物、动物或人）结出很多果实或叶子或很多后代；数量众多的。" +
            "<br><br>" +
            "(A) '不活跃的' 意味着不参与或涉及任何或大量体力活动的。" +
            "<br><br>" +
            "(B) '迟缓的' 意味着缓慢移动或不活跃的。" +
            "<br><br>" +
            "(C) '无成效的' 意味着没有取得太多成就；没有产生很多或任何增长的。"
    },
    {
        id: 2,
        question: "The lumberjack was a __________ man, with broad shoulders and a strong build.",
        chinese_question: "伐木工人是一个 __________ 的男人，肩膀宽阔，体格强壮。",
        answers: [
            { option: "A", answer: "frail", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "B", answer: "burly", chinese_answer: "强壮的", chinese_romanization: "qiángzhuàng de" },
            { option: "C", answer: "weak", chinese_answer: "弱的", chinese_romanization: "ruò de" },
            { option: "D", answer: "thin", chinese_answer: "瘦的", chinese_romanization: "shòu de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'burly' means (of a person) large and strong; heavily built." +
            "<br><br>" +
            "(A) 'frail' means weak and delicate." +
            "<br><br>" +
            "(C) 'weak' means lacking the power to perform physically demanding tasks; having little physical strength or energy." +
            "<br><br>" +
            "(D) 'thin' means having little, or too little, flesh or fat on the body.",
        chinese_explanation: "(B) '强壮的' 一词意味着（人）大而强壮的；体格重的。" +
            "<br><br>" +
            "(A) '虚弱的' 意味着虚弱和娇嫩的。" +
            "<br><br>" +
            "(C) '弱的' 意味着缺乏执行体力要求任务的能力；体力或精力很少。" +
            "<br><br>" +
            "(D) '瘦的' 意味着身体上几乎没有或太少的肉或脂肪。"
    },
    {
        id: 3,
        question: "The small village was filled with __________ cottages, each with its own unique charm and character.",
        chinese_question: "这个小村庄满是 __________ 的小屋，每个都有自己独特的魅力和特色。",
        answers: [
            { option: "A", answer: "quaint", chinese_answer: "古色古香的", chinese_romanization: "gǔsè gǔxiāng de" },
            { option: "B", answer: "modern", chinese_answer: "现代的", chinese_romanization: "xiàndài de" },
            { option: "C", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "D", answer: "unattractive", chinese_answer: "不吸引人的", chinese_romanization: "bù xīyǐn rén de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'quaint' means attractively unusual or old-fashioned." +
            "<br><br>" +
            "(B) 'modern' means relating to the present or recent times as opposed to the remote past." +
            "<br><br>" +
            "(C) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(D) 'unattractive' means not pleasing or appealing to look at.",
        chinese_explanation: "(A) '古色古香的' 意味着有吸引力的不同寻常或老式的。" +
            "<br><br>" +
            "(B) '现代的' 意味着与现在或最近的时间有关的，而不是遥远的过去。" +
            "<br><br>" +
            "(C) '普通的' 意味着没有特别或独特的特征的；正常的。" +
            "<br><br>" +
            "(D) '不吸引人的' 意味着不令人愉快或吸引人的。"
    },
    {
        id: 4,
        question: "The once shiny metal had become __________ over the years, losing its reflective quality.",
        chinese_question: "曾经闪亮的金属多年来变得 __________，失去了其反光特性。",
        answers: [
            { option: "A", answer: "shiny", chinese_answer: "闪亮", chinese_romanization: "shǎnliàng" },
            { option: "B", answer: "gleaming", chinese_answer: "闪闪发光", chinese_romanization: "shǎnshǎn fāguāng" },
            { option: "C", answer: "lusterless", chinese_answer: "无光泽", chinese_romanization: "wú guāngzé" },
            { option: "D", answer: "polished", chinese_answer: "抛光", chinese_romanization: "pāoguāng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lusterless' means lacking in brightness, shine, or vitality." +
            "<br><br>" +
            "(A) 'shiny' means reflecting light, typically because very clean or polished." +
            "<br><br>" +
            "(B) 'gleaming' means shining brightly, especially with reflected light." +
            "<br><br>" +
            "(D) 'polished' means shiny as a result of being rubbed.",
        chinese_explanation: "(C) '无光泽' 意味着缺乏亮度、光泽或活力。" +
            "<br><br>" +
            "(A) '闪亮' 意味着反射光线，通常是因为非常干净或抛光。" +
            "<br><br>" +
            "(B) '闪闪发光' 意味着闪亮，尤其是反射光线。" +
            "<br><br>" +
            "(D) '抛光' 意味着由于被擦拭而闪亮。"
    },
    {
        id: 5,
        question: "The patient's recovery was __________, baffling doctors who had expected a much slower process.",
        chinese_question: "患者的康复是 __________ 的，让医生感到困惑，因为他们预计会是一个更缓慢的过程。",
        answers: [
            { option: "A", answer: "ordinary", chinese_answer: "普通", chinese_romanization: "pǔtōng" },
            { option: "B", answer: "expected", chinese_answer: "预期", chinese_romanization: "yùqī" },
            { option: "C", answer: "miraculous", chinese_answer: "奇迹", chinese_romanization: "qíjī" },
            { option: "D", answer: "predictable", chinese_answer: "可预测", chinese_romanization: "kě yùcè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'miraculous' means occurring through divine or supernatural intervention, or being highly remarkable." +
            "<br><br>" +
            "(A) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(B) 'expected' means regarded as likely to happen." +
            "<br><br>" +
            "(D) 'predictable' means able to be predicted.",
        chinese_explanation: "(C) '奇迹' 意味着通过神圣或超自然干预发生的，或是非常显著的。" +
            "<br><br>" +
            "(A) '普通' 意味着没有特别或独特的特征；正常的。" +
            "<br><br>" +
            "(B) '预期' 意味着被认为可能发生的。" +
            "<br><br>" +
            "(D) '可预测' 意味着能够被预测的。"
    },
    {
        id: 6,
        question: "The children played in the park with __________ abandon, not a worry in the world.",
        chinese_question: "孩子们在公园里__________地玩耍，毫无忧虑。",
        answers: [
            { option: "A", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "B", answer: "carefree", chinese_answer: "无忧无虑的", chinese_romanization: "wú yōu wú lǜ de" },
            { option: "C", answer: "anxious", chinese_answer: "焦虑的", chinese_romanization: "jiāolǜ de" },
            { option: "D", answer: "nervous", chinese_answer: "紧张的", chinese_romanization: "jǐnzhāng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'carefree' means free from anxiety or responsibility." +
            "<br><br>" +
            "(A) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(C) 'anxious' means feeling or showing worry, nervousness, or unease." +
            "<br><br>" +
            "(D) 'nervous' means easily agitated or alarmed.",
        chinese_explanation: "(B) '无忧无虑的' 一词意味着没有焦虑或责任。" +
            "<br><br>" +
            "(A) '谨慎的' 意味着小心避免潜在的问题或危险。" +
            "<br><br>" +
            "(C) '焦虑的' 意味着感到或表现出担忧、紧张或不安。" +
            "<br><br>" +
            "(D) '紧张的' 意味着容易激动或警觉的。"
    },
    {
        id: 7,
        question: "The advertisement was filled with __________ messages, subtly influencing viewers' thoughts and desires without their conscious awareness.",
        chinese_question: "这则广告充满了 __________ 信息，在观众没有意识到的情况下微妙地影响他们的想法和欲望。",
        answers: [
            { option: "A", answer: "explicit", chinese_answer: "明确的", chinese_romanization: "míngquè de" },
            { option: "B", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
            { option: "C", answer: "direct", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" },
            { option: "D", answer: "subliminal", chinese_answer: "潜意识的", chinese_romanization: "qiányìshí de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'subliminal' means below the threshold of conscious perception; affecting someone's mind without them being aware of it." +
            "<br><br>" +
            "(A) 'explicit' means stated clearly and in detail, leaving no room for confusion or doubt." +
            "<br><br>" +
            "(B) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
            "<br><br>" +
            "(C) 'direct' means going straight to the point; straightforward.",
        chinese_explanation: "(D) '潜意识的' 意味着在意识感知的阈值以下；在某人不知情的情况下影响他们的思想。" +
            "<br><br>" +
            "(A) '明确的' 意味着清楚详细地陈述，毫不含糊。" +
            "<br><br>" +
            "(B) '明显的' 意味着容易被察觉或理解；清楚的、自明的或明显的。" +
            "<br><br>" +
            "(C) '直接的' 意味着直截了当；直率的。"
    },
    {
        id: 8,
        question: "Since the passing of his beloved dog, he had been __________, often sitting by the window with a distant, gloomy look.",
        chinese_question: "自从心爱的狗去世后，他变得非常 __________，经常坐在窗边，眼神忧郁。",
        answers: [
            { option: "A", answer: "jubilant", chinese_answer: "欢腾的", chinese_romanization: "huānténg de" },
            { option: "B", answer: "sociable", chinese_answer: "善交际的", chinese_romanization: "shàn jiāojì de" },
            { option: "C", answer: "carefree", chinese_answer: "无忧无虑的", chinese_romanization: "wúyōuwúlǜ de" },
            { option: "D", answer: "morose", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'morose' means sullen and ill-tempered." +
            "<br><br>" +
            "(A) 'jubilant' means feeling or expressing great happiness and triumph." +
            "<br><br>" +
            "(B) 'sociable' means willing to talk and engage in activities with other people; friendly." +
            "<br><br>" +
            "(C) 'carefree' means free from anxiety or responsibility.",
        chinese_explanation: "(D) '忧郁的' 意味着闷闷不乐且脾气暴躁的。" +
            "<br><br>" +
            "(A) '欢腾的' 意味着感到或表现出极大的幸福和胜利。" +
            "<br><br>" +
            "(B) '善交际的' 意味着愿意与他人交谈和参与活动；友好的。" +
            "<br><br>" +
            "(C) '无忧无虑的' 意味着没有焦虑或责任的。"
    },
    {
        id: 9,
        question: "His __________ lateness to meetings frustrated his colleagues, who had to constantly adjust their schedules.",
        chinese_question: "他 __________ 迟到开会让同事们感到沮丧，他们不得不经常调整他们的日程安排。",
        answers: [
            { option: "A", answer: "habitual", chinese_answer: "习惯性的", chinese_romanization: "xíguàn xìng de" },
            { option: "B", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
            { option: "C", answer: "rare", chinese_answer: "稀有的", chinese_romanization: "xīyǒu de" },
            { option: "D", answer: "exceptional", chinese_answer: "例外的", chinese_romanization: "lìwài de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'habitual' means done or doing constantly or as a habit." +
            "<br><br>" +
            "(B) 'occasionally' means occurring from time to time." +
            "<br><br>" +
            "(C) 'rare' means not occurring very often." +
            "<br><br>" +
            "(D) 'exceptional' means unusually good or outstanding.",
        chinese_explanation: "(A) '习惯性的' 意味着不断地或习惯性地做。" +
            "<br><br>" +
            "(B) '偶尔的' 意味着不时发生的。" +
            "<br><br>" +
            "(C) '稀有的' 意味着不经常发生的。" +
            "<br><br>" +
            "(D) '例外的' 意味着异常好的或杰出的。"
    },
    {
        id: 10,
        question: "It was __________ that he was lying because he kept avoiding eye contact.",
        chinese_question: "他显然在撒谎，因为他一直避免目光接触，这一点很 __________。",
        answers: [
            { option: "A", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
            { option: "B", answer: "obscure", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "C", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
            { option: "D", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
            "<br><br>" +
            "(A) 'uncertain' means not able to be relied on; not known or definite." +
            "<br><br>" +
            "(B) 'obscure' means not discovered or known about; uncertain." +
            "<br><br>" +
            "(D) 'hidden' means kept out of sight; concealed.",
        chinese_explanation: "(C) '明显的' 意味着容易被感知或理解的；清楚的，自明的或显而易见的。" +
            "<br><br>" +
            "(A) '不确定的' 意味着不能依靠的；未知或不明确的。" +
            "<br><br>" +
            "(B) '模糊的' 意味着未被发现或知道的；不确定的。" +
            "<br><br>" +
            "(D) '隐藏的' 意味着被藏起来的；隐藏的。"
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
