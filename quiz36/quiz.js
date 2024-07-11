// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The ring, adorned with __________ gems, was a family heirloom passed down for generations.",
        chinese_question: "这枚镶有 __________ 宝石的戒指是一代代传下来的家族传家宝。",
        answers: [
            { option: "A", answer: "precious", chinese_answer: "珍贵的", chinese_romanization: "zhēnguì de" },
            { option: "B", answer: "worthless", chinese_answer: "无价值的", chinese_romanization: "wú jiàzhí de" },
            { option: "C", answer: "common", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "D", answer: "ordinary", chinese_answer: "平凡的", chinese_romanization: "píngfán de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'precious' means of great value; not to be wasted or treated carelessly." +
            "<br><br>" +
            "(B) 'worthless' means having no real value or use." +
            "<br><br>" +
            "(C) 'common' means occurring, found, or done often; prevalent." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(A) '珍贵的' 意味着具有巨大价值的；不可浪费或轻视的。" +
            "<br><br>" +
            "(B) '无价值的' 意味着没有实际价值或用途的。" +
            "<br><br>" +
            "(C) '普通的' 意味着经常发生、发现或做的；普遍的。" +
            "<br><br>" +
            "(D) '平凡的' 意味着没有特别或独特的特征的；正常的。"
    },
    {
        id: 2,
        question: "The __________ laughter from the party next door kept us awake all night.",
        chinese_question: "隔壁派对的__________笑声让我们整晚都没睡着。",
        answers: [
            { option: "A", answer: "quiet", chinese_answer: "安静的", chinese_romanization: "ān jìng de" },
            { option: "B", answer: "soft", chinese_answer: "轻柔的", chinese_romanization: "qīng róu de" },
            { option: "C", answer: "raucous", chinese_answer: "喧闹的", chinese_romanization: "xuān nào de" },
            { option: "D", answer: "gentle", chinese_answer: "温柔的", chinese_romanization: "wēn róu de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'raucous' means making or constituting a disturbingly harsh and loud noise." +
            "<br><br>" +
            "(A) 'quiet' means making little or no noise." +
            "<br><br>" +
            "(B) 'soft' means having a pleasingly gentle quality." +
            "<br><br>" +
            "(D) 'gentle' means mild in temperament or behavior; kind or tender.",
        chinese_explanation: "(C) '喧闹的'一词意味着发出令人不安的刺耳和响亮的声音。" +
            "<br><br>" +
            "(A) '安静的' 意味着几乎没有声音。" +
            "<br><br>" +
            "(B) '轻柔的' 意味着具有令人愉快的温和品质。" +
            "<br><br>" +
            "(D) '温柔的' 意味着温和的性情或行为；善良或温柔的。"
    },
    {
        id: 3,
        question: "He felt __________ after realizing the impact of his harsh words on his friend.",
        chinese_question: "意识到自己严厉的话对朋友的影响后，他感到__________。",
        answers: [
            { option: "A", answer: "remorseful", chinese_answer: "懊悔的", chinese_romanization: "àohuǐ de" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "unapologetic", chinese_answer: "不道歉的", chinese_romanization: "bù dàoqiàn de" },
            { option: "D", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'remorseful' means filled with regret or guilt." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'unapologetic' means not acknowledging or expressing regret." +
            "<br><br>" +
            "(D) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
        chinese_explanation: "(A) '懊悔的'一词意味着充满悔恨或内疚的。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(C) '不道歉的' 意味着不承认或表达遗憾的。" +
            "<br><br>" +
            "(D) '粗心的' 意味着没有给予足够的注意或考虑以避免伤害或错误的。"
    },
    {
        id: 4,
        question: "The __________ rocks along the shoreline made it difficult to walk without sturdy shoes.",
        chinese_question: "海岸线上的__________岩石使得没有结实的鞋子很难行走。",
        answers: [
            { option: "A", answer: "smooth", chinese_answer: "光滑的", chinese_romanization: "guānghuá de" },
            { option: "B", answer: "rounded", chinese_answer: "圆形的", chinese_romanization: "yuánxíng de" },
            { option: "C", answer: "jagged", chinese_answer: "锯齿状的", chinese_romanization: "jùchǐ zhuàng de" },
            { option: "D", answer: "polished", chinese_answer: "抛光的", chinese_romanization: "pāoguāng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'jagged' means having rough, sharp points protruding." +
            "<br><br>" +
            "(A) 'smooth' means having an even and regular surface or consistency; free from perceptible projections, lumps, or indentations." +
            "<br><br>" +
            "(B) 'rounded' means having a smooth, curved surface." +
            "<br><br>" +
            "(D) 'polished' means shiny as a result of being rubbed.",
        chinese_explanation: "(C) '锯齿状的'一词意味着有粗糙、尖锐的突起点。" +
            "<br><br>" +
            "(A) '光滑的' 意味着有均匀和规则的表面或一致性；没有明显的突起、凸块或凹痕。" +
            "<br><br>" +
            "(B) '圆形的' 意味着有光滑的、弯曲的表面。" +
            "<br><br>" +
            "(D) '抛光的' 意味着由于被摩擦而发亮。"
    },
    {
        id: 5,
        question: "The experience left an __________ mark on her memory, something she would never forget.",
        chinese_question: "这次经历在她的记忆中留下了__________的印记，是她永远不会忘记的。",
        answers: [
            { option: "A", answer: "erasable", chinese_answer: "可擦除的", chinese_romanization: "kě cāchú de" },
            { option: "B", answer: "temporary", chinese_answer: "暂时的", chinese_romanization: "zànshí de" },
            { option: "C", answer: "indelible", chinese_answer: "难以磨灭的", chinese_romanization: "nányǐ mómiè de" },
            { option: "D", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'indelible' means making marks that cannot be removed." +
            "<br><br>" +
            "(A) 'erasable' means able to be erased." +
            "<br><br>" +
            "(B) 'temporary' means lasting for only a limited period of time." +
            "<br><br>" +
            "(D) 'fleeting' means lasting for a very short time.",
        chinese_explanation: "(C) '难以磨灭的'一词意味着留下无法去除的痕迹。" +
            "<br><br>" +
            "(A) '可擦除的' 意味着可以擦除的。" +
            "<br><br>" +
            "(B) '暂时的' 意味着仅持续有限时间的。" +
            "<br><br>" +
            "(D) '短暂的' 意味着持续时间非常短的。"
    },
    {
        id: 6,
        question: "The scientist received an award for his __________ career, having made significant contributions to the field of genetics.",
        chinese_question: "这位科学家因其 __________ 的职业生涯而获奖，他在遗传学领域做出了重大贡献。",
        answers: [
            { option: "A", answer: "illustrious", chinese_answer: "杰出的", chinese_romanization: "jiéchū de" },
            { option: "B", answer: "obscure", chinese_answer: "默默无闻的", chinese_romanization: "mòmòwúwén de" },
            { option: "C", answer: "unremarkable", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "D", answer: "unknown", chinese_answer: "未知的", chinese_romanization: "wèizhī de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'illustrious' means well known, respected, and admired for past achievements." +
            "<br><br>" +
            "(B) 'obscure' means not well known; not easily understood." +
            "<br><br>" +
            "(C) 'unremarkable' means not particularly interesting or surprising." +
            "<br><br>" +
            "(D) 'unknown' means not known or familiar.",
        chinese_explanation: "(A) '杰出的' 意味着因过去的成就而著名、受人尊敬和钦佩的。" +
            "<br><br>" +
            "(B) '默默无闻的' 意味着不知名的；不容易理解的。" +
            "<br><br>" +
            "(C) '平凡的' 意味着不特别有趣或令人惊讶的。" +
            "<br><br>" +
            "(D) '未知的' 意味着不为人知或不熟悉的。"
    },
    {
        id: 7,
        question: "The chemicals were __________, requiring proper safety gear and precautions during handling.",
        chinese_question: "这些化学品是__________的，在处理时需要适当的安全设备和预防措施。",
        answers: [
            { option: "A", answer: "safe", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
            { option: "B", answer: "benign", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "C", answer: "hazardous", chinese_answer: "危险的", chinese_romanization: "wēixiǎn de" },
            { option: "D", answer: "harmless", chinese_answer: "无害的", chinese_romanization: "wúhài de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hazardous' means risky; dangerous." +
            "<br><br>" +
            "(A) 'safe' means protected from or not exposed to danger or risk; not likely to be harmed or lost." +
            "<br><br>" +
            "(B) 'benign' means gentle and kind." +
            "<br><br>" +
            "(D) 'harmless' means not able or likely to cause harm.",
        chinese_explanation: "(C) '危险的'一词意味着有风险的；危险的。" +
            "<br><br>" +
            "(A) '安全的' 意味着受到保护或没有暴露在危险或风险中；不太可能受到伤害或损失的。" +
            "<br><br>" +
            "(B) '温和的' 意味着温柔和善良的。" +
            "<br><br>" +
            "(D) '无害的' 意味着不能或不太可能造成伤害的。"
    },
    {
        id: 8,
        question: "He was __________ when he discovered that his favorite vase had been broken.",
        chinese_question: "当他发现自己最喜欢的花瓶被打碎时，他非常 __________。",
        answers: [
            { option: "A", answer: "furious", chinese_answer: "愤怒的", chinese_romanization: "fènnù de" },
            { option: "B", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "amused", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'furious' means extremely angry." +
            "<br><br>" +
            "(B) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'amused' means finding something funny or entertaining.",
        chinese_explanation: "(A) '愤怒的' 一词意味着极度愤怒的。" +
            "<br><br>" +
            "(B) '平静的' 意味着不表现或感到紧张、愤怒或其他强烈情感的。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '愉快的' 意味着觉得某事有趣或有娱乐性的。"
    },
    {
        id: 9,
        question: "It is __________ for him to be late to meetings, which frustrates his colleagues.",
        chinese_question: "他开会迟到是 __________ 的，这让他的同事们感到沮丧。",
        answers: [
            { option: "A", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" },
            { option: "B", answer: "unusual", chinese_answer: "不寻常的", chinese_romanization: "bù xúncháng de" },
            { option: "C", answer: "rare", chinese_answer: "罕见的", chinese_romanization: "hǎnjiàn de" },
            { option: "D", answer: "unexpected", chinese_answer: "意外的", chinese_romanization: "yìwài de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'typical' means having the distinctive qualities of a particular type of person or thing." +
            "<br><br>" +
            "(B) 'unusual' means not habitually or commonly occurring or done." +
            "<br><br>" +
            "(C) 'rare' means not occurring very often." +
            "<br><br>" +
            "(D) 'unexpected' means not expected or regarded as likely to happen.",
        chinese_explanation: "(A) '典型的' 意味着具有某种特定类型的人或事物的独特品质。" +
            "<br><br>" +
            "(B) '不寻常的' 意味着不习惯性或不常见的。" +
            "<br><br>" +
            "(C) '罕见的' 意味着不经常发生的。" +
            "<br><br>" +
            "(D) '意外的' 意味着没有预料到或认为可能发生的。"
    },
    {
        id: 10,
        question: "She was a __________ visitor to the local library, borrowing books every week.",
        chinese_question: "她是当地图书馆的 __________ 访客，每周都来借书。",
        answers: [
            { option: "A", answer: "rare", chinese_answer: "罕见的", chinese_romanization: "hǎnjiàn de" },
            { option: "B", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
            { option: "C", answer: "frequent", chinese_answer: "频繁的", chinese_romanization: "pínfán de" },
            { option: "D", answer: "reluctant", chinese_answer: "勉强的", chinese_romanization: "miǎnqiǎng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'frequent' means occurring or done many times at short intervals." +
            "<br><br>" +
            "(A) 'rare' means not occurring very often." +
            "<br><br>" +
            "(B) 'occasional' means occurring, appearing, or done infrequently and irregularly." +
            "<br><br>" +
            "(D) 'reluctant' means unwilling and hesitant.",
        chinese_explanation: "(C) '频繁的' 意味着在短时间间隔内多次发生或进行的。" +
            "<br><br>" +
            "(A) '罕见的' 意味着不经常发生的。" +
            "<br><br>" +
            "(B) '偶尔的' 意味着不频繁和不规律地发生、出现或进行的。" +
            "<br><br>" +
            "(D) '勉强的' 意味着不愿意和犹豫的。"
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
