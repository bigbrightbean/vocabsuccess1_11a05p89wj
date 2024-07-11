// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
         question: "She walked through the busy street, __________ to the chaos around her.",
        chinese_question: "她走在繁忙的街道上，对周围的混乱 __________。",
        answers: [
            { option: "A", answer: "aware", chinese_answer: "知道的", chinese_romanization: "zhīdào de" },
            { option: "B", answer: "mindful", chinese_answer: "留意的", chinese_romanization: "liúyì de" },
            { option: "C", answer: "oblivious", chinese_answer: "无视的", chinese_romanization: "wúshì de" },
            { option: "D", answer: "attentive", chinese_answer: "专注的", chinese_romanization: "zhuānzhù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'oblivious' means not aware of or not concerned about what is happening around one." +
            "<br><br>" +
            "(A) 'aware' means having knowledge or perception of a situation or fact." +
            "<br><br>" +
            "(B) 'mindful' means conscious or aware of something." +
            "<br><br>" +
            "(D) 'attentive' means paying close attention to something.",
        chinese_explanation: "'无视的' 意味着没有意识到或不关心周围发生的事情。" +
            "<br><br>" +
            "(A) '知道的' 意味着对情况或事实有知识或感知的。" +
            "<br><br>" +
            "(B) '留意的' 意味着意识到某事的。" +
            "<br><br>" +
            "(D) '专注的' 意味着对某事密切注意的。"
    },
    {
        id: 2,
        question: "The __________ heat of the summer sun made it difficult to stay outside for long periods without seeking shade or air conditioning.",
        chinese_question: "夏日阳光的 __________ 热度让人难以长时间待在户外，不找阴凉处或空调都不行。",
        answers: [
            { option: "A", answer: "intense", chinese_answer: "强烈的", chinese_romanization: "qiángliè de" },
            { option: "B", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "C", answer: "moderate", chinese_answer: "适度的", chinese_romanization: "shìdù de" },
            { option: "D", answer: "gentle", chinese_answer: "柔和的", chinese_romanization: "róuhé de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'intense' means of extreme force, degree, or strength." +
            "<br><br>" +
            "(B) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(C) 'moderate' means average in amount, intensity, quality, or degree." +
            "<br><br>" +
            "(D) 'gentle' means having or showing a mild, kind, or tender temperament or character.",
        chinese_explanation: "(A) '强烈的' 意味着力量、程度或强度极大的。" +
            "<br><br>" +
            "(B) '温和的' 意味着不严厉、严重或苛刻的。" +
            "<br><br>" +
            "(C) '适度的' 意味着在数量、强度、质量或程度上是平均的。" +
            "<br><br>" +
            "(D) '柔和的' 意味着具有或表现出温和、善良或温柔的性格或性格的。"
    },
    {
        id: 3,
        question: "The comedian's __________ jokes had the entire audience laughing uncontrollably.",
        chinese_question: "这位喜剧演员的__________笑话让整个观众笑得停不下来。",
        answers: [
            { option: "A", answer: "boring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "B", answer: "serious", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
            { option: "C", answer: "tragic", chinese_answer: "悲惨的", chinese_romanization: "bēicǎn de" },
            { option: "D", answer: "hilarious", chinese_answer: "滑稽的", chinese_romanization: "huájī de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'hilarious' means extremely amusing." +
            "<br><br>" +
            "(A) 'boring' means not interesting." +
            "<br><br>" +
            "(B) 'serious' means demanding careful consideration or application." +
            "<br><br>" +
            "(C) 'tragic' means causing or characterized by extreme distress or sorrow.",
        chinese_explanation: "(D) '滑稽的'一词意味着非常有趣的。" +
            "<br><br>" +
            "(A) '无聊的' 意味着不有趣的。" +
            "<br><br>" +
            "(B) '严肃的' 意味着需要仔细考虑或应用的。" +
            "<br><br>" +
            "(C) '悲惨的' 意味着造成或以极度痛苦或悲伤为特征的。"
    },
    {
        id: 4,
        question: "The art expert confirmed that the painting was __________, not a fake, as some had suspected.",
        chinese_question: "艺术专家确认这幅画是 __________ 的，而不是一些人怀疑的赝品。",
        answers: [
            { option: "A", answer: "counterfeit", chinese_answer: "伪造", chinese_romanization: "wěizào" },
            { option: "B", answer: "damaged", chinese_answer: "损坏", chinese_romanization: "sǔnhuài" },
            { option: "C", answer: "authentic", chinese_answer: "真实", chinese_romanization: "zhēnshí" },
            { option: "D", answer: "ordinary", chinese_answer: "普通", chinese_romanization: "pǔtōng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'authentic' means genuine; real." +
            "<br><br>" +
            "(A) 'counterfeit' means made in exact imitation of something valuable with the intention to deceive." +
            "<br><br>" +
            "(B) 'damaged' means harmed or injured." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(C) '真实' 一词意味着真实的；真品。" +
            "<br><br>" +
            "(A) '伪造' 意味着为了欺骗而精确模仿某些有价值的东西。" +
            "<br><br>" +
            "(B) '损坏' 意味着受到损害或伤害。" +
            "<br><br>" +
            "(D) '普通' 意味着没有特别或独特的特征；正常的。"
    },
    {
        id: 5,
        question: "She made a __________ decision based on the facts rather than emotions.",
        chinese_question: "她做出了一个基于事实而非情感的__________决定。",
        answers: [
            { option: "A", answer: "irrational", chinese_answer: "非理性的", chinese_romanization: "fēi lǐxìng de" },
            { option: "B", answer: "impulsive", chinese_answer: "冲动的", chinese_romanization: "chōngdòng de" },
            { option: "C", answer: "rational", chinese_answer: "理性的", chinese_romanization: "lǐxìng de" },
            { option: "D", answer: "emotional", chinese_answer: "情感的", chinese_romanization: "qínggǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'rational' means based on or in accordance with reason or logic." +
            "<br><br>" +
            "(A) 'irrational' means not logical or reasonable." +
            "<br><br>" +
            "(B) 'impulsive' means acting or done without forethought." +
            "<br><br>" +
            "(D) 'emotional' means showing strong feelings.",
        chinese_explanation: "(C) '理性的' 一词意味着基于或符合理性或逻辑的。" +
            "<br><br>" +
            "(A) '非理性的' 意味着不合逻辑或不合理的。" +
            "<br><br>" +
            "(B) '冲动的' 意味着未经深思熟虑而做的。" +
            "<br><br>" +
            "(D) '情感的' 意味着表现出强烈的感情。"
    },
    {
        id: 6,
        question: "The villagers had a __________ harvest this year, barely enough to feed their families.",
        chinese_question: "村民今年的收成很 __________，勉强够养家糊口。",
        answers: [
            { option: "A", answer: "abundant", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
            { option: "B", answer: "plentiful", chinese_answer: "充足", chinese_romanization: "chōngzú" },
            { option: "C", answer: "meager", chinese_answer: "微薄", chinese_romanization: "wēibó" },
            { option: "D", answer: "generous", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'meager' means lacking in quantity or quality." +
            "<br><br>" +
            "(A) 'abundant' means existing or available in large quantities; plentiful." +
            "<br><br>" +
            "(B) 'plentiful' means existing in or yielding great quantities; abundant." +
            "<br><br>" +
            "(D) 'generous' means showing a readiness to give more of something, especially money, than is strictly necessary or expected.",
        chinese_explanation: "(C) '微薄' 意味着在数量或质量上不足。" +
            "<br><br>" +
            "(A) '丰富' 意味着存在或可用的大量；充足。" +
            "<br><br>" +
            "(B) '充足' 意味着存在或产出大量的；丰富的。" +
            "<br><br>" +
            "(D) '慷慨' 意味着显示出愿意给予更多的东西，尤其是钱，比严格必要或预期的更多。"
    },
    {
        id: 7,
        question: "She became __________ when she realized she had left her presentation at home.",
        chinese_question: "当她意识到自己把演示文稿忘在家里时，她变得 __________。",
        answers: [
            { option: "A", answer: "flustered", chinese_answer: "慌乱的", chinese_romanization: "huāngluàn de" },
            { option: "B", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "C", answer: "composed", chinese_answer: "镇定的", chinese_romanization: "zhèndìng de" },
            { option: "D", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'flustered' means agitated or confused." +
            "<br><br>" +
            "(B) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(C) 'composed' means having one's feelings and expression under control; calm." +
            "<br><br>" +
            "(D) 'relaxed' means free from tension and anxiety.",
        chinese_explanation: "(A) '慌乱的' 意味着激动或困惑的。" +
            "<br><br>" +
            "(B) '平静的' 意味着不表现或感到紧张、愤怒或其他强烈情绪的。" +
            "<br><br>" +
            "(C) '镇定的' 意味着控制住自己的情感和表现；平静的。" +
            "<br><br>" +
            "(D) '放松的' 意味着没有紧张和焦虑的。"
    },
    {
        id: 8,
        question: "With his __________ vision, he could foresee problems that others missed.",
        chinese_question: "凭借他 __________ 的视野，他能预见别人忽视的问题。",
        answers: [
            { option: "A", answer: "telescopic", chinese_answer: "远视的", chinese_romanization: "yuǎnshì de" },
            { option: "B", answer: "narrow", chinese_answer: "狭窄的", chinese_romanization: "xiázhǎi de" },
            { option: "C", answer: "blurred", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "D", answer: "restricted", chinese_answer: "受限的", chinese_romanization: "shòuxiàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'telescopic' metaphorically means having the ability to see or predict things that are far ahead." +
            "<br><br>" +
            "(B) 'narrow' means limited in extent, amount, or scope; restricted." +
            "<br><br>" +
            "(C) 'blurred' means unable to see or be seen clearly." +
            "<br><br>" +
            "(D) 'restricted' means limited in extent, number, scope, or action.",
        chinese_explanation: "(A) '远视的' 比喻具有看到或预测远处事物的能力。" +
            "<br><br>" +
            "(B) '狭窄的'意味着范围、数量或范围有限；受限的。" +
            "<br><br>" +
            "(C) '模糊的' 意味着看不清或看不清。" +
            "<br><br>" +
            "(D) '受限的' 意味着在范围、数量、范围或行动上有限。"
    },
    {
        id: 9,
        question: "The instructions were so __________ that even a beginner could follow them without any difficulty.",
        chinese_question: "这些指示非常 __________，即使是初学者也能毫不费力地遵循。",
        answers: [
            { option: "A", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "B", answer: "imprecise", chinese_answer: "不精确的", chinese_romanization: "bù jīngquè de" },
            { option: "C", answer: "precise", chinese_answer: "精确的", chinese_romanization: "jīngquè de" },
            { option: "D", answer: "ambiguous", chinese_answer: "含糊的", chinese_romanization: "hánhú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'precise' means marked by exactness and accuracy of expression or detail." +
            "<br><br>" +
            "(A) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(B) 'imprecise' means lacking exactness and accuracy of expression or detail." +
            "<br><br>" +
            "(D) 'ambiguous' means open to more than one interpretation; having a double meaning.",
        chinese_explanation: "(C) '精确的' 意味着表达或细节的准确性和准确性。" +
            "<br><br>" +
            "(A) '模糊的' 意味着性质不确定、不明确或不清楚。" +
            "<br><br>" +
            "(B) '不精确的' 意味着缺乏表达或细节的准确性和准确性。" +
            "<br><br>" +
            "(D) '含糊的' 意味着有多种解释的；有双重含义的。"
    },
    {
        id: 10,
        question: "Her __________ decision to save money allowed her to buy a house later in life.",
        chinese_question: "她__________的储蓄决定使她能够在以后的生活中买房。",
        answers: [
            { option: "A", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" },
            { option: "B", answer: "imprudent", chinese_answer: "不谨慎的", chinese_romanization: "bù jǐnshèn de" },
            { option: "C", answer: "prudent", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "D", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prudent' means acting with or showing care and thought for the future." +
            "<br><br>" +
            "(A) 'reckless' means heedless of danger or the consequences of one's actions; rash or impetuous." +
            "<br><br>" +
            "(B) 'imprudent' means not showing care for the consequences of an action; rash." +
            "<br><br>" +
            "(D) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
        chinese_explanation: "(C) '谨慎的'一词意味着为未来表现出谨慎和深思熟虑的行动。" +
            "<br><br>" +
            "(A) '鲁莽的' 意味着对危险或后果不顾；轻率或鲁莽的。" +
            "<br><br>" +
            "(B) '不谨慎的' 意味着对行为的后果不关心的；轻率的。" +
            "<br><br>" +
            "(D) '粗心的' 意味着没有给予足够的注意或考虑以避免伤害或错误的。"
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
