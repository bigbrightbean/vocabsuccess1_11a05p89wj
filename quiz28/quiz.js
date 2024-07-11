// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
         question: "The tourist felt __________ in the foreign city, unsure of where to go.",
        chinese_question: "游客在外国城市感到 __________，不确定该去哪里。",
        answers: [
            { option: "A", answer: "unfamiliar", chinese_answer: "陌生的", chinese_romanization: "mòshēng de" },
            { option: "B", answer: "comfortable", chinese_answer: "舒适的", chinese_romanization: "shūshì de" },
            { option: "C", answer: "known", chinese_answer: "已知的", chinese_romanization: "yǐzhī de" },
            { option: "D", answer: "familiar", chinese_answer: "熟悉的", chinese_romanization: "shúxī de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'unfamiliar' means not known or recognized." +
            "<br><br>" +
            "(B) 'comfortable' means providing physical ease and relaxation." +
            "<br><br>" +
            "(C) 'known' means recognized, familiar, or within the scope of knowledge." +
            "<br><br>" +
            "(D) 'familiar' means well known from long or close association.",
        chinese_explanation: "(A) '陌生的' 意味着不被认识或不熟悉的。" +
            "<br><br>" +
            "(B) '舒适的' 意味着提供身体上的舒适和放松。" +
            "<br><br>" +
            "(C) '已知的' 意味着被认识的、熟悉的或在知识范围内的。" +
            "<br><br>" +
            "(D) '熟悉的' 意味着因长期或密切接触而熟悉的。"
    },
    {
        id: 2,
        question: "His __________ driving habits, such as speeding and ignoring traffic lights, often put him and others in danger.",
        chinese_question: "他 __________ 的驾驶习惯，如超速和无视交通灯，常常使他自己和他人陷入危险。",
        answers: [
            { option: "A", answer: "cautious", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
            { option: "B", answer: "reckless", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
            { option: "C", answer: "prudent", chinese_answer: "慎重", chinese_romanization: "shènzhòng" },
            { option: "D", answer: "deliberate", chinese_answer: "故意", chinese_romanization: "gùyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reckless' means without thinking or caring about the consequences of an action." +
            "<br><br>" +
            "(A) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(C) 'prudent' means acting with or showing care and thought for the future." +
            "<br><br>" +
            "(D) 'deliberate' means done consciously and intentionally.",
        chinese_explanation: "(B) '鲁莽' 一词意味着不考虑行动的后果。" +
            "<br><br>" +
            "(A) '谨慎' 意味着小心避免潜在的问题或危险。" +
            "<br><br>" +
            "(C) '慎重' 意味着对未来表现出关心和考虑的行为。" +
            "<br><br>" +
            "(D) '故意' 意味着有意识地和有意地做。"
    },
    {
        id: 3,
        question: "Despite numerous setbacks, her __________ efforts to start her own business eventually paid off, as she continued to refine her plans and seek new opportunities.",
        chinese_question: "尽管遇到许多挫折，她 __________ 地努力创办自己的公司最终得到了回报，因为她不断完善自己的计划并寻求新的机会。",
        answers: [
            { option: "A", answer: "lazy", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" },
            { option: "B", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "persistent", chinese_answer: "坚持不懈的", chinese_romanization: "jiānchí bùxiè de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'persistent' means continuing firmly or obstinately in a course of action in spite of difficulty or opposition." +
            "<br><br>" +
            "(A) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(B) 'occasional' means occurring, appearing, or done infrequently and irregularly." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or concern.",
        chinese_explanation: "(D) '坚持不懈的' 意味着在困难或反对中继续坚定地行动。" +
            "<br><br>" +
            "(A) '懒惰的' 意味着不愿意工作或使用精力。" +
            "<br><br>" +
            "(B) '偶尔的' 意味着不频繁和不规则地发生、出现或完成的。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或关心。"
    },
    {
        id: 4,
        question: "His actions were __________, as he deliberately spread false rumours about his coworker to damage her reputation.",
        chinese_question: "他的行为是 __________ 的，因为他故意散布关于同事的虚假谣言，以破坏她的名誉。",
        answers: [
            { option: "A", answer: "accidental", chinese_answer: "意外的", chinese_romanization: "yìwài de" },
            { option: "B", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "C", answer: "unplanned", chinese_answer: "未计划的", chinese_romanization: "wèi jìhuà de" },
            { option: "D", answer: "intentional", chinese_answer: "故意的", chinese_romanization: "gùyì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'intentional' means done on purpose; deliberate." +
            "<br><br>" +
            "(A) 'accidental' means happening by chance or unintentionally." +
            "<br><br>" +
            "(B) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(C) 'unplanned' means not planned in advance.",
        chinese_explanation: "(D) '故意的' 意味着有目的地进行；故意的。" +
            "<br><br>" +
            "(A) '意外的' 意味着偶然发生的或无意的。" +
            "<br><br>" +
            "(B) '粗心的' 意味着没有给予足够的注意或考虑以避免伤害或错误。" +
            "<br><br>" +
            "(C) '未计划的' 意味着事先没有计划的。"
    },
    {
        id: 5,
        question: "His __________ solution to the complex problem impressed his colleagues and earned him a promotion.",
        chinese_question: "他对复杂问题的 __________ 解决方案给同事们留下了深刻印象，并为他赢得了晋升。",
        answers: [
            { option: "A", answer: "ingenious", chinese_answer: "巧妙的", chinese_romanization: "qiǎomiào de" },
            { option: "B", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "D", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ingenious' means clever, original, and inventive." +
            "<br><br>" +
            "(B) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(C) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'conventional' means based on or in accordance with what is generally done or believed.",
        chinese_explanation: "(A) '巧妙的' 意味着聪明、原创和有创意的。" +
            "<br><br>" +
            "(B) '普通的' 意味着没有特别或独特特征的；正常的。" +
            "<br><br>" +
            "(C) '简单的' 意味着容易理解或完成的；没有困难的。" +
            "<br><br>" +
            "(D) '传统的' 意味着基于或符合普遍做法或信仰的。"
    },
    {
        id: 6,
        question: "Her __________ smile made everyone feel welcome at the event.",
        chinese_question: "她那 __________ 的微笑让每个人在活动中感到宾至如归。",
        answers: [
            { option: "A", answer: "genuine", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
            { option: "B", answer: "fake", chinese_answer: "虚假", chinese_romanization: "xūjiǎ" },
            { option: "C", answer: "hesitant", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mòbù guānxīn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'genuine' means real and sincere." +
            "<br><br>" +
            "(B) 'fake' means not real or genuine." +
            "<br><br>" +
            "(C) 'hesitant' means unsure or slow in acting." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or concern.",
        chinese_explanation: "(A) '真诚' 意味着真实和真挚。" +
            "<br><br>" +
            "(B) '虚假' 意味着不真实或不真诚。" +
            "<br><br>" +
            "(C) '犹豫' 意味着不确定或行动缓慢。" +
            "<br><br>" +
            "(D) '漠不关心' 意味着没有特别的兴趣或关心。"
    },
    {
        id: 7,
        question: "His __________ disregard for the rules was obvious when he cheated during the exam.",
        chinese_question: "他对规则的__________无视在他考试作弊时显而易见。",
        answers: [
            { option: "A", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wēimiào de" },
            { option: "B", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
            { option: "C", answer: "flagrant", chinese_answer: "明目张胆的", chinese_romanization: "míngmùzhāngdǎn de" },
            { option: "D", answer: "discreet", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'flagrant' means (of something considered wrong or immoral) conspicuously or obviously offensive." +
            "<br><br>" +
            "(A) 'subtle' means (especially of a change or distinction) so delicate or precise as to be difficult to analyze or describe." +
            "<br><br>" +
            "(B) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(D) 'discreet' means careful and circumspect in one's speech or actions, especially in order to avoid causing offense or to gain an advantage.",
        chinese_explanation: "(C) '明目张胆的'一词意味着（被认为错误或不道德的事物）显眼或明显地冒犯。" +
            "<br><br>" +
            "(A) '微妙的' 意味着（尤其是变化或区别）如此精致或准确，以至于难以分析或描述。" +
            "<br><br>" +
            "(B) '隐藏的' 意味着隐藏起来的；隐藏的。" +
            "<br><br>" +
            "(D) '谨慎的' 意味着在言语或行动中小心谨慎，尤其是为了避免冒犯或获取优势。"
    },
    {
        id: 8,
        question: "The police discovered a large operation producing __________ money in the basement of an old warehouse.",
        chinese_question: "警方在一个旧仓库的地下室发现了一个大规模的__________货币生产行动。",
        answers: [
            { option: "A", answer: "genuine", chinese_answer: "真正的", chinese_romanization: "zhēnzhèng de" },
            { option: "B", answer: "counterfeit", chinese_answer: "伪造的", chinese_romanization: "wěizào de" },
            { option: "C", answer: "authentic", chinese_answer: "真实的", chinese_romanization: "zhēnshí de" },
            { option: "D", answer: "real", chinese_answer: "真的", chinese_romanization: "zhēn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'counterfeit' means made in exact imitation of something valuable with the intention to deceive or defraud." +
            "<br><br>" +
            "(A) 'genuine' means truly what something is said to be; authentic." +
            "<br><br>" +
            "(C) 'authentic' means of undisputed origin and not a copy; genuine." +
            "<br><br>" +
            "(D) 'real' means actually existing as a thing or occurring in fact.",
        chinese_explanation: "(B) '伪造的'一词意味着完全模仿某种有价值的东西，意图欺骗或诈骗。" +
            "<br><br>" +
            "(A) '真正的' 意味着确实是所说的那样；真实的。" +
            "<br><br>" +
            "(C) '真实的' 意味着无可争议的起源而不是复制品；真实的。" +
            "<br><br>" +
            "(D) '真的' 意味着实际上存在的东西或实际发生的事情。"
    },
    {
        id: 9,
        question: "She is a __________ employee who can always be counted on to meet deadlines.",
        chinese_question: "她是一位__________的员工，总是能够按时完成任务。",
        answers: [
            { option: "A", answer: "unreliable", chinese_answer: "不可靠的", chinese_romanization: "bù kěkào de" },
            { option: "B", answer: "untrustworthy", chinese_answer: "不可信的", chinese_romanization: "bù kěxìn de" },
            { option: "C", answer: "reliable", chinese_answer: "可靠的", chinese_romanization: "kěkào de" },
            { option: "D", answer: "inconsistent", chinese_answer: "不一致的", chinese_romanization: "bù yīzhì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'reliable' means consistently good in quality or performance; able to be trusted." +
            "<br><br>" +
            "(A) 'unreliable' means not able to be relied upon." +
            "<br><br>" +
            "(B) 'untrustworthy' means not able to be relied on as honest or truthful." +
            "<br><br>" +
            "(D) 'inconsistent' means not staying the same throughout.",
        chinese_explanation: "(C) '可靠的'一词意味着质量或性能始终如一；值得信赖的。" +
            "<br><br>" +
            "(A) '不可靠的' 意味着不能依赖的。" +
            "<br><br>" +
            "(B) '不可信的' 意味着不能依赖为诚实或真实的。" +
            "<br><br>" +
            "(D) '不一致的' 意味着没有始终如一的。"
    },
    {
        id: 10,
        question: "The chef's new dish was __________, pleasing even the most discerning palates with its balanced flavors and perfect seasoning.",
        chinese_question: "这位厨师的新菜品非常 __________，即使是最挑剔的味觉也感到满意，因为它的味道平衡，调味完美。",
        answers: [
            { option: "A", answer: "palatable", chinese_answer: "可口的", chinese_romanization: "kěkǒu de" },
            { option: "B", answer: "bland", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" },
            { option: "C", answer: "unappetizing", chinese_answer: "没有食欲的", chinese_romanization: "méiyǒu shíyù de" },
            { option: "D", answer: "inedible", chinese_answer: "不能吃的", chinese_romanization: "bùnéng chī de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'palatable' means pleasant to taste; acceptable or satisfactory." +
            "<br><br>" +
            "(B) 'bland' means lacking strong features or characteristics and therefore uninteresting." +
            "<br><br>" +
            "(C) 'unappetizing' means not inviting or attractive; unappealing." +
            "<br><br>" +
            "(D) 'inedible' means not fit or suitable for eating.",
        chinese_explanation: "(A) '可口的' 意味着味道愉快的；可接受的或令人满意的。" +
            "<br><br>" +
            "(B) '平淡的' 意味着缺乏强烈特征或特点的，因此没有趣味的。" +
            "<br><br>" +
            "(C) '没有食欲的' 意味着不吸引人或不诱人的。" +
            "<br><br>" +
            "(D) '不能吃的' 意味着不适合或不适合吃的。"
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
