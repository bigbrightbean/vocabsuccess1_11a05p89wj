// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The warm sun and gentle breeze made him feel __________, and he struggled to stay awake.",
        chinese_question: "温暖的阳光和微风让他感到__________，他努力保持清醒。",
        answers: [
            { option: "A", answer: "energetic", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
            { option: "B", answer: "drowsy", chinese_answer: "昏昏欲睡的", chinese_romanization: "hūnhūn yù shuì de" },
            { option: "C", answer: "alert", chinese_answer: "警觉的", chinese_romanization: "jǐngjué de" },
            { option: "D", answer: "vigilant", chinese_answer: "警惕的", chinese_romanization: "jǐngtì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'drowsy' means feeling sleepy and lethargic." +
            "<br><br>" +
            "(A) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(C) 'alert' means quick to notice any unusual and potentially dangerous or difficult circumstances." +
            "<br><br>" +
            "(D) 'vigilant' means keeping careful watch for possible danger or difficulties.",
        chinese_explanation: "(B) '昏昏欲睡的'一词意味着感到困倦和无精打采的。" +
            "<br><br>" +
            "(A) '精力充沛的' 意味着表现出或涉及大量活动或活力。" +
            "<br><br>" +
            "(C) '警觉的' 意味着快速注意到任何异常和潜在危险或困难的情况。" +
            "<br><br>" +
            "(D) '警惕的' 意味着对可能的危险或困难保持警惕。"
    },
    {
        id: 2,
        question: "Her __________ study habits ensured that she was always well-prepared for exams.",
        chinese_question: "她的 __________ 学习习惯确保她总是为考试做好充分准备。",
        answers: [
            { option: "A", answer: "lazy", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" },
            { option: "B", answer: "sporadic", chinese_answer: "零星的", chinese_romanization: "língxīng de" },
            { option: "C", answer: "diligent", chinese_answer: "勤奋的", chinese_romanization: "qínfèn de" },
            { option: "D", answer: "haphazard", chinese_answer: "随意的", chinese_romanization: "suíyì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'diligent' means having or showing care and conscientiousness in one's work or duties." +
            "<br><br>" +
            "(A) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(B) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated." +
            "<br><br>" +
            "(D) 'haphazard' means lacking any obvious principle of organization.",
        chinese_explanation: "(C) '勤奋的' 一词意味着在工作或职责上表现出关心和认真。" +
            "<br><br>" +
            "(A) '懒惰的' 意味着不愿工作或使用精力的。" +
            "<br><br>" +
            "(B) '零星的' 意味着不定期发生或仅在少数地方发生的；散落的或孤立的。" +
            "<br><br>" +
            "(D) '随意的' 意味着缺乏任何明显的组织原则。"
    },
    {
        id: 3,
        question: "He collected __________ models of famous landmarks, each one intricately detailed and small enough to fit on a shelf.",
        chinese_question: "他收集了 __________ 的著名地标模型，每一个都非常详细，而且小到可以放在书架上。",
        answers: [
            { option: "A", answer: "large", chinese_answer: "大型的", chinese_romanization: "dàxíng de" },
            { option: "B", answer: "miniature", chinese_answer: "微型的", chinese_romanization: "wēixíng de" },
            { option: "C", answer: "gigantic", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
            { option: "D", answer: "enormous", chinese_answer: "庞大的", chinese_romanization: "pángdà de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'miniature' means very small of its kind." +
            "<br><br>" +
            "(A) 'large' means of considerable or relatively great size, extent, or capacity." +
            "<br><br>" +
            "(C) 'gigantic' means of very great size or extent; huge or enormous." +
            "<br><br>" +
            "(D) 'enormous' means very large in size, quantity, or extent.",
        chinese_explanation: "(B) '微型的' 一词意味着非常小的。" +
            "<br><br>" +
            "(A) '大型的' 意味着相当大或相对较大的尺寸、范围或容量的。" +
            "<br><br>" +
            "(C) '巨大的' 意味着非常大的或巨大的。" +
            "<br><br>" +
            "(D) '庞大的' 意味着非常大的尺寸、数量或范围的。"
    },
    {
        id: 4,
        question: "She has a __________ sense of observation, noticing even the smallest details others might miss.",
        chinese_question: "她有 __________ 的观察力，甚至注意到别人可能会忽略的最小细节。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "迟钝", chinese_romanization: "chídùn" },
            { option: "B", answer: "oblivious", chinese_answer: "毫不在意", chinese_romanization: "háo bù zàiyì" },
            { option: "C", answer: "apathetic", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "keen", chinese_answer: "敏锐", chinese_romanization: "mǐnruì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'keen' means highly developed or sharp." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(B) 'oblivious' means not aware of or not concerned about what is happening around one." +
            "<br><br>" +
            "(C) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
        chinese_explanation: "(D) '敏锐' 意味着高度发达或敏锐的。" +
            "<br><br>" +
            "(A) '迟钝' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(B) '毫不在意' 意味着对周围发生的事情没有意识或不关心。" +
            "<br><br>" +
            "(C) '冷漠' 意味着表现出或感到没有兴趣、热情或关心。"
    },
    {
        id: 5,
        question: "She found her new coworker to be very __________, always willing to listen and offer support when she needed it.",
        chinese_question: "她发现新同事非常 __________，总是愿意倾听并在她需要时提供支持。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "hostile", chinese_answer: "敌对", chinese_romanization: "díduì" },
            { option: "C", answer: "aloof", chinese_answer: "冷淡", chinese_romanization: "lěngdàn" },
            { option: "D", answer: "sympathetic", chinese_answer: "同情", chinese_romanization: "tóngqíng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'sympathetic' means showing understanding and care for someone else's suffering or troubles." +
            "<br><br>" +
            "(A) 'indifferent' means not interested in or concerned about something." +
            "<br><br>" +
            "(B) 'hostile' means unfriendly or aggressive." +
            "<br><br>" +
            "(C) 'aloof' means not friendly or willing to take part in things.",
        chinese_explanation: "(D) '同情' 意味着对别人的痛苦或麻烦表现出理解和关心。" +
            "<br><br>" +
            "(A) '冷漠' 意味着对某事不感兴趣或不关心。" +
            "<br><br>" +
            "(B) '敌对' 意味着不友好或具有攻击性。" +
            "<br><br>" +
            "(C) '冷淡' 意味着不友好或不愿意参与事情。"
    },
    {
        id: 6,
        question: "They enjoyed a __________ walk in the park, chatting and laughing the entire time.",
        chinese_question: "他们在公园里享受了一次 __________ 的散步，一路上聊天和笑声不断。",
        answers: [
            { option: "A", answer: "casual", chinese_answer: "休闲的", chinese_romanization: "xiūxián de" },
            { option: "B", answer: "intense", chinese_answer: "强烈的", chinese_romanization: "qiángliè de" },
            { option: "C", answer: "formal", chinese_answer: "正式的", chinese_romanization: "zhèngshì de" },
            { option: "D", answer: "urgent", chinese_answer: "紧急的", chinese_romanization: "jǐnjí de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(B) 'intense' means of extreme force, degree, or strength." +
            "<br><br>" +
            "(C) 'formal' means done in accordance with rules of convention or etiquette." +
            "<br><br>" +
            "(D) 'urgent' means requiring immediate action or attention.",
        chinese_explanation: "(A) '休闲的' 意味着放松和不关心的。" +
            "<br><br>" +
            "(B) '强烈的' 意味着极大的力量、程度或强度。" +
            "<br><br>" +
            "(C) '正式的' 意味着按照惯例或礼仪规则进行的。" +
            "<br><br>" +
            "(D) '紧急的' 意味着需要立即行动或注意的。"
    },
    {
        id: 7,
        question: "Despite his __________ appearance, with plain clothes and a simple look, he possessed extraordinary abilities.",
        chinese_question: "尽管他外表 __________，穿着普通衣服和简单的外貌，但他拥有非凡的能力。",
        answers: [
            { option: "A", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "B", answer: "unique", chinese_answer: "独特的", chinese_romanization: "dútè de" },
            { option: "C", answer: "remarkable", chinese_answer: "显著的", chinese_romanization: "xiǎnzhù de" },
            { option: "D", answer: "unusual", chinese_answer: "不寻常的", chinese_romanization: "bù xúncháng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(B) 'unique' means being the only one of its kind; unlike anything else."+
            "<br><br>" +
            "(C) 'remarkable' means worthy of attention; striking." +
            "<br><br>" +
            "(D) 'unusual' means not habitually or commonly occurring or done.",
        chinese_explanation: "(A) '普通的' 意味着没有特别或独特的特征；正常的。" +
            "<br><br>" +
            "(B) '独特的' 意味着独一无二的；与任何其他东西不同。" +
            "<br><br>" +
            "(C) '显著的' 意味着值得注意的；引人注目的。" +
            "<br><br>" +
            "(D) '不寻常的' 意味着不习惯性或不常见的。"
    },
    {
        id: 8,
        question: "Despite numerous attempts to correct his behavior, the young boy remained __________, always finding new ways to cause trouble.",
        chinese_question: "尽管多次尝试纠正他的行为，这个小男孩仍然 __________，总能找到新的方法制造麻烦。",
        answers: [
            { option: "A", answer: "obedient", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
            { option: "B", answer: "incorrigible", chinese_answer: "不可救药的", chinese_romanization: "bùkě jiùyào de" },
            { option: "C", answer: "compliant", chinese_answer: "服从的", chinese_romanization: "fúcóng de" },
            { option: "D", answer: "manageable", chinese_answer: "易管理的", chinese_romanization: "yì guǎnlǐ de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'incorrigible' means not able to be corrected, improved, or reformed." +
            "<br><br>" +
            "(A) 'obedient' means complying or willing to comply with orders or requests; submissive to another's will." +
            "<br><br>" +
            "(C) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree; acquiescent." +
            "<br><br>" +
            "(D) 'manageable' means able to be managed, controlled, or accomplished without great difficulty.",
        chinese_explanation: "(B) '不可救药的' 一词意味着无法被纠正、改进或改革的。" +
            "<br><br>" +
            "(A) '顺从的' 意味着遵守或愿意遵守命令或请求；服从他人的意愿。" +
            "<br><br>" +
            "(C) '服从的' 意味着倾向于同意他人或遵守规则，尤其是过度的；默许的。" +
            "<br><br>" +
            "(D) '易管理的' 意味着能够在没有很大困难的情况下被管理、控制或完成的。"
    },
    {
        id: 9,
        question: "The sudden disappearance of the artifact was __________, leaving everyone baffled.",
        chinese_question: "文物的突然消失是__________的，让所有人都感到困惑。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清楚的", chinese_romanization: "qīngchǔ de" },
            { option: "B", answer: "understandable", chinese_answer: "可理解的", chinese_romanization: "kě lǐjiě de" },
            { option: "C", answer: "puzzling", chinese_answer: "令人困惑的", chinese_romanization: "lìng rén kùnhuò de" },
            { option: "D", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'puzzling' means causing one to be puzzled; perplexing. It describes something that is confusing and difficult to understand, making you think hard to figure it out." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'understandable' means able to be understood. It describes something that is easy to comprehend, making sense and not confusing." +
            "<br><br>" +
            "(D) 'obvious' means easily perceived or understood; clear, self-evident, or apparent.",
        chinese_explanation: "(C) '令人困惑的' 一词意味着让人困惑的；令人费解的。它描述的是令人感到困惑且难以理解的东西，需要你认真思考才能弄明白。" +
            "<br><br>" +
            "(A) '清楚的' 意味着容易察觉、理解或解释的。" +
            "<br><br>" +
            "(B) '可理解的' 意味着能够被理解的。它描述的是容易理解的东西，合乎逻辑且不令人困惑。" +
            "<br><br>" +
            "(D) '明显的' 意味着容易察觉或理解的；清晰的，自明的，或显而易见的。"
    },
    {
        id: 10,
        question: "The __________ dog followed every command, never straying from his owner's side.",
        chinese_question: "这只 __________ 的狗遵循每一个命令，从不离开主人的身边。",
        answers: [
            { option: "A", answer: "rebellious", chinese_answer: "反叛的", chinese_romanization: "fǎnpàn de" },
            { option: "B", answer: "defiant", chinese_answer: "挑衅的", chinese_romanization: "tiǎoxìn de" },
            { option: "C", answer: "obedient", chinese_answer: "听话的", chinese_romanization: "tīnghuà de" },
            { option: "D", answer: "unruly", chinese_answer: "不守规矩的", chinese_romanization: "bù shǒu guījǔ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'obedient' means complying or willing to comply with orders or requests; submissive to another's will." +
            "<br><br>" +
            "(A) 'rebellious' means showing a desire to resist authority, control, or convention." +
            "<br><br>" +
            "(B) 'defiant' means showing defiance. It describes someone who openly resists or refuses to obey authority or rules, often in a bold or daring manner." +
            "<br><br>" +
            "(D) 'unruly' means disorderly and disruptive and not amenable to discipline or control.",
        chinese_explanation: "'听话的' 意味着服从或愿意服从命令或请求；顺从他人的意愿。" +
            "<br><br>" +
            "(A) '反叛的' 意味着显示出抵抗权威、控制或习俗的愿望。" +
            "<br><br>" +
            "(B) '挑衅的' 意味着表现出挑衅。它形容的是公开抵抗或拒绝服从权威或规则的人，通常以大胆或鲁莽的方式。" +
            "<br><br>" +
            "(D) '不守规矩的' 意味着无序和破坏性的，不服从纪律或控制的。"
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
