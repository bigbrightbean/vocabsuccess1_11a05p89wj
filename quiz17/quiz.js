// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His explanation was so __________ that even a child could understand the complex concept.",
        chinese_question: "他的解释是如此 __________，即使是孩子也能理解这个复杂的概念。",
        answers: [
            { option: "A", answer: "confusing", chinese_answer: "令人困惑", chinese_romanization: "lìng rén kùnhuò" },
            { option: "B", answer: "vague", chinese_answer: "模糊", chinese_romanization: "móhu" },
            { option: "C", answer: "lucid", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "D", answer: "unclear", chinese_answer: "不清楚", chinese_romanization: "bù qīngchǔ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lucid' means expressed clearly; easy to understand." +
            "<br><br>" +
            "(A) 'confusing' means bewildering or perplexing." +
            "<br><br>" +
            "(B) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(D) 'unclear' means not easy to see, hear, or understand.",
        chinese_explanation: "(C) '清晰' 意味着表达清楚；容易理解。" +
            "<br><br>" +
            "(A) '令人困惑' 意味着令人困惑或迷惑的。" +
            "<br><br>" +
            "(B) '模糊' 意味着性格或意义不确定、不明确或不清晰。" +
            "<br><br>" +
            "(D) '不清楚' 意味着不容易看到、听到或理解。"
    },
    {
        id: 2,
        question: "The judge was __________, giving the young offender a second chance instead of a harsh sentence.",
        chinese_question: "法官很__________，给了年轻的罪犯一个改过自新的机会，而不是严厉的判决。",
        answers: [
            { option: "A", answer: "cruel", chinese_answer: "残忍的", chinese_romanization: "cánrěn de" },
            { option: "B", answer: "ruthless", chinese_answer: "无情的", chinese_romanization: "wúqíng de" },
            { option: "C", answer: "merciful", chinese_answer: "仁慈的", chinese_romanization: "réncí de" },
            { option: "D", answer: "unforgiving", chinese_answer: "不宽恕的", chinese_romanization: "bù kuānshù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'merciful' means showing compassion or forgiveness in judging or punishing; lenient." +
            "<br><br>" +
            "(A) 'cruel' means willfully causing pain or suffering to others, or feeling no concern about it." +
            "<br><br>" +
            "(B) 'ruthless' means having or showing no pity or compassion for others." +
            "<br><br>" +
            "(D) 'unforgiving' means not willing to forgive or excuse people's faults or wrongdoings.",
        chinese_explanation: "(C) '仁慈的'一词意味着在判断或惩罚时表现出同情或宽恕的；宽大的。" +
            "<br><br>" +
            "(A) '残忍的' 意味着故意对他人造成痛苦或痛苦，或不关心它。" +
            "<br><br>" +
            "(B) '无情的' 意味着没有或不表现出对他人的怜悯或同情的。" +
            "<br><br>" +
            "(D) '不宽恕的' 意味着不愿意原谅或宽恕他人的过错或错误行为的。"
    },
    {
        id: 3,
        question: "The __________ politician was able to sway public opinion with his powerful speeches.",
        chinese_question: "这位 __________ 的政治家能够通过他有力的演讲影响公众舆论。",
        answers: [
            { option: "A", answer: "insignificant", chinese_answer: "微不足道", chinese_romanization: "wēi bù zú dào" },
            { option: "B", answer: "influential", chinese_answer: "有影响力", chinese_romanization: "yǒu yǐngxiǎng lì" },
            { option: "C", answer: "powerless", chinese_answer: "无力", chinese_romanization: "wúlì" },
            { option: "D", answer: "unimportant", chinese_answer: "不重要", chinese_romanization: "bù zhòngyào" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'influential' means having great influence on someone or something." +
            "<br><br>" +
            "(A) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(C) 'powerless' means without power; weak." +
            "<br><br>" +
            "(D) 'unimportant' means not having great significance or value.",
        chinese_explanation: "(B) '有影响力' 意味着对某人或某事有很大影响。" +
            "<br><br>" +
            "(A) '微不足道' 意味着太小或不重要，不值得考虑。" +
            "<br><br>" +
            "(C) '无力' 意味着没有力量；虚弱。" +
            "<br><br>" +
            "(D) '不重要' 意味着没有重大意义或价值。"
    },
    {
        id: 4,
        question: "The gymnast was incredibly __________, executing flips and twists with ease.",
        chinese_question: "这位体操运动员非常__________，轻松地完成翻转和扭转动作。",
        answers: [
            { option: "A", answer: "clumsy", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "B", answer: "slow", chinese_answer: "慢的", chinese_romanization: "màn de" },
            { option: "C", answer: "stiff", chinese_answer: "僵硬的", chinese_romanization: "jiāngyìng de" },
            { option: "D", answer: "agile", chinese_answer: "敏捷的", chinese_romanization: "mǐnjié de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'agile' means able to move quickly and easily." +
            "<br><br>" +
            "(A) 'clumsy' means awkward in movement or in handling things." +
            "<br><br>" +
            "(B) 'slow' means moving or operating, or designed to do so, only at a low speed; not quick or fast." +
            "<br><br>" +
            "(C) 'stiff' means not easily bent or changed in shape; rigid.",
        chinese_explanation: "(D) '敏捷的' 意味着能够快速轻松地移动。" +
            "<br><br>" +
            "(A) '笨拙的' 意味着在运动或处理事物时笨拙的。" +
            "<br><br>" +
            "(B) '慢的' 意味着移动或操作，或设计为这样做，只有低速；不快或不快。" +
            "<br><br>" +
            "(C) '僵硬的' 意味着不易弯曲或改变形状；刚性的。"
    },
    {
        id: 5,
        question: "The meteorologists warned that a severe storm was __________ and advised residents to take precautions.",
        chinese_question: "气象学家警告说，严重的风暴 __________ 并建议居民采取预防措施。",
        answers: [
            { option: "A", answer: "distant", chinese_answer: "遥远的", chinese_romanization: "yáoyuǎn de" },
            { option: "B", answer: "imminent", chinese_answer: "即将发生的", chinese_romanization: "jíjiāng fāshēng de" },
            { option: "C", answer: "unlikely", chinese_answer: "不太可能的", chinese_romanization: "bù tài kěnéng de" },
            { option: "D", answer: "irrelevant", chinese_answer: "不相关的", chinese_romanization: "bù xiāngguān de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'imminent' means about to happen." +
            "<br><br>" +
            "(A) 'distant' means far away in space or time." +
            "<br><br>" +
            "(C) 'unlikely' means not likely to happen, be done, or be true." +
            "<br><br>" +
            "(D) 'irrelevant' means not connected with or relevant to something.",
        chinese_explanation: "(B) '即将发生的' 一词意味着即将发生的。" +
            "<br><br>" +
            "(A) '遥远的' 意味着在空间或时间上很远。" +
            "<br><br>" +
            "(C) '不太可能的' 意味着不太可能发生、完成或真实的。" +
            "<br><br>" +
            "(D) '不相关的' 意味着与某事无关或不相关的。"
    },
    {
        id: 6,
        question: "The small village was __________, with charming cottages and scenic views at every turn.",
        chinese_question: "这个小村庄 __________，到处都是迷人的小屋和美丽的景色。",
        answers: [
            { option: "A", answer: "ugly", chinese_answer: "丑陋的", chinese_romanization: "chǒulòu de" },
            { option: "B", answer: "unattractive", chinese_answer: "不吸引人的", chinese_romanization: "bù xīyǐn rén de" },
            { option: "C", answer: "picturesque", chinese_answer: "如画的", chinese_romanization: "rúhuà de" },
            { option: "D", answer: "plain", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'picturesque' means visually attractive, especially in a quaint or charming way." +
            "<br><br>" +
            "(A) 'ugly' means unpleasant or repulsive, especially in appearance." +
            "<br><br>" +
            "(B) 'unattractive' means not pleasing or appealing to look at." +
            "<br><br>" +
            "(D) 'plain' means not decorated or elaborate; simple or ordinary in character.",
        chinese_explanation: "(C) '如画的' 意味着视觉上吸引人的，尤其是以古雅或迷人的方式。" +
            "<br><br>" +
            "(A) '丑陋的' 意味着令人不快或令人厌恶的，尤其是在外观上。" +
            "<br><br>" +
            "(B) '不吸引人的' 意味着看起来不令人愉快或吸引人的。" +
            "<br><br>" +
            "(D) '朴素的' 意味着不装饰或不复杂的；简单或普通的。"
    },
    {
        id: 7,
        question: "The host gave a __________ welcome to all the guests, making everyone feel at home.",
        chinese_question: "主人给所有的客人一个__________的欢迎，让每个人都感到宾至如归。",
        answers: [
            { option: "A", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" },
            { option: "B", answer: "cordial", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "unfriendly", chinese_answer: "不友好的", chinese_romanization: "bù yǒuhǎo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'cordial' means warm and friendly." +
            "<br><br>" +
            "(A) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'unfriendly' means not friendly; hostile.",
        chinese_explanation: "(B) '热情的'一词意味着温暖和友好的。" +
            "<br><br>" +
            "(A) '敌对的' 意味着不友好的；对抗的。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '不友好的' 意味着不友好的；敌对的。"
    },
    {
        id: 8,
            question: "The patient was in __________ pain after the surgery, requiring immediate medical attention.",
            chinese_question: "手术后病人感到 __________ 的疼痛，需要立即的医疗护理。",
            answers: [
                { option: "A", answer: "mild", chinese_answer: "轻微", chinese_romanization: "qīngwēi" },
                { option: "B", answer: "chronic", chinese_answer: "慢性", chinese_romanization: "mànxìng" },
                { option: "C", answer: "acute", chinese_answer: "急性", chinese_romanization: "jíxìng" },
                { option: "D", answer: "minor", chinese_answer: "次要", chinese_romanization: "cìyào" }
            ],
            correctAnswer: "C",
            explanation: "(C) 'acute' means severe or intense." +
                "<br><br>" +
                "(A) 'mild' means not severe or strong." +
                "<br><br>" +
                "(B) 'chronic' means persisting for a long time or constantly recurring." +
                "<br><br>" +
                "(D) 'minor' means lesser in importance, seriousness, or significance.",
            chinese_explanation: "(C) '急性' 意味着严重或强烈的。" +
                "<br><br>" +
                "(A) '轻微' 意味着不严重或不强烈的。" +
                "<br><br>" +
                "(B) '慢性' 意味着持续很长时间或经常复发的。" +
                "<br><br>" +
                "(D) '次要' 意味着重要性、严重性或意义较小的。"
    },
    {
        id: 9,
        question: "After the accident, he was __________ and had to be rushed to the hospital.",
        chinese_question: "事故发生后，他 __________ 被紧急送往医院。",
        answers: [
            { option: "A", answer: "awake", chinese_answer: "清醒的", chinese_romanization: "qīngxǐng de" },
            { option: "B", answer: "unconscious", chinese_answer: "失去知觉的", chinese_romanization: "shīqù zhījué de" },
            { option: "C", answer: "alert", chinese_answer: "警觉的", chinese_romanization: "jǐngjué de" },
            { option: "D", answer: "conscious", chinese_answer: "有意识的", chinese_romanization: "yǒu yìshí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unconscious' means not awake and aware of and responding to one's environment." +
            "<br><br>" +
            "(A) 'awake' means not asleep." +
            "<br><br>" +
            "(C) 'alert' means quick to notice any unusual and potentially dangerous or difficult circumstances; vigilant." +
            "<br><br>" +
            "(D) 'conscious' means aware of and responding to one's surroundings; awake.",
        chinese_explanation: "(B) '失去知觉的' 一词意味着没有清醒和意识到并对环境做出反应。" +
            "<br><br>" +
            "(A) '清醒的' 意味着没有睡着。" +
            "<br><br>" +
            "(C) '警觉的' 意味着快速注意到任何不寻常和潜在危险或困难的情况；警惕的。" +
            "<br><br>" +
            "(D) '有意识的' 意味着意识到并对周围环境做出反应；清醒的。"
    },
    {
        id: 10,
        question: "The school has implemented __________ rules to ensure the safety of all students.",
        chinese_question: "学校实施了 __________ 规则，以确保所有学生的安全。",
        answers: [
            { option: "A", answer: "lenient", chinese_answer: "宽松的", chinese_romanization: "kuānsōng de" },
            { option: "B", answer: "lax", chinese_answer: "松懈的", chinese_romanization: "sōngxiè de" },
            { option: "C", answer: "stringent", chinese_answer: "严格的", chinese_romanization: "yángé de" },
            { option: "D", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'stringent' means (of regulations, requirements, or conditions) strict, precise, and exacting." +
            "<br><br>" +
            "(A) 'lenient' means (of punishment or a person in authority) permissive, merciful, or tolerant." +
            "<br><br>" +
            "(B) 'lax' means not sufficiently strict, severe, or careful." +
            "<br><br>" +
            "(D) 'flexible' means capable of bending easily without breaking.",
        chinese_explanation: "(C) '严格的' 一词意味着（法规、要求或条件）严格、精确和苛求的。" +
            "<br><br>" +
            "(A) '宽松的' 意味着（惩罚或有权威的人）宽容、仁慈或宽容的。" +
            "<br><br>" +
            "(B) '松懈的' 意味着不够严格、严厉或仔细的。" +
            "<br><br>" +
            "(D) '灵活的' 意味着能够轻易弯曲而不折断的。"
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
