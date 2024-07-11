// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The manager's instructions were __________, lasting only a few minutes but covering all the important points.",
        chinese_question: "经理的指示非常 __________，只用了几分钟，但涵盖了所有重要点。",
        answers: [
            { option: "A", answer: "lengthy", chinese_answer: "冗长的", chinese_romanization: "rǒngcháng de" },
            { option: "B", answer: "confusing", chinese_answer: "令人困惑的", chinese_romanization: "lìng rén kùnhuò de" },
            { option: "C", answer: "detailed", chinese_answer: "详细的", chinese_romanization: "xiángxì de" },
            { option: "D", answer: "brief", chinese_answer: "简短的", chinese_romanization: "jiǎnduǎn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'brief' means of short duration; not lasting for long." +
            "<br><br>" +
            "(A) 'lengthy' means being very long in distance or time." +
            "<br><br>" +
            "(B) 'confusing' means making someone unable to think clearly; bewildering." +
            "<br><br>" +
            "(C) 'detailed' means giving a lot of information with many details.",
        chinese_explanation: "(D) '简短的' 意味着时间短；持续时间不长。" +
            "<br><br>" +
            "(A) '冗长的' 意味着时间或距离非常长。" +
            "<br><br>" +
            "(B) '令人困惑的' 意味着使人无法清晰思考；令人困惑的。" +
            "<br><br>" +
            "(C) '详细的' 意味着提供很多信息，包含许多细节。"
    },
    {
        id: 2,
        question: "The __________ investor made smart decisions that led to significant profits.",
        chinese_question: "这位 __________ 的投资者做出了明智的决定，带来了可观的利润。",
        answers: [
            { option: "A", answer: "canny", chinese_answer: "精明的", chinese_romanization: "jīngmíng de" },
            { option: "B", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "C", answer: "naive", chinese_answer: "天真的", chinese_romanization: "tiānzhēn de" },
            { option: "D", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'canny' means having or showing shrewdness and good judgment, especially in money or business matters." +
            "<br><br>" +
            "(B) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(C) 'naive' means (of a person or action) showing a lack of experience, wisdom, or judgment." +
            "<br><br>" +
            "(D) 'reckless' means heedless of danger or the consequences of one's actions; rash or impetuous.",
        chinese_explanation: "(A) '精明的' 意味着具有或表现出机智和良好判断力，尤其是在金钱或商业事务上。" +
            "<br><br>" +
            "(B) '粗心的' 意味着没有给予足够的注意或思考来避免伤害或错误。" +
            "<br><br>" +
            "(C) '天真的' 意味着（人或行动）显示出缺乏经验、智慧或判断力。" +
            "<br><br>" +
            "(D) '鲁莽的' 意味着不顾危险或后果的；草率或鲁莽的。"
    },
    {
        id: 3,
        question: "The landscape was __________, with bare trees and a grey, overcast sky.",
        chinese_question: "景色 __________，光秃秃的树木和灰蒙蒙的天空。",
        answers: [
            { option: "A", answer: "lush", chinese_answer: "茂盛", chinese_romanization: "màoshèng" },
            { option: "B", answer: "fertile", chinese_answer: "肥沃", chinese_romanization: "féiwò" },
            { option: "C", answer: "bleak", chinese_answer: "荒凉", chinese_romanization: "huāngliáng" },
            { option: "D", answer: "vibrant", chinese_answer: "活力", chinese_romanization: "huólì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bleak' means lacking vegetation and exposed to the elements; desolate." +
            "<br><br>" +
            "(A) 'lush' means growing luxuriantly." +
            "<br><br>" +
            "(B) 'fertile' means (of soil or land) producing or capable of producing abundant vegetation or crops." +
            "<br><br>" +
            "(D) 'vibrant' means full of energy and enthusiasm.",
        chinese_explanation: "(C) '荒凉' 意味着缺乏植被并暴露于风雨中；荒芜的。" +
            "<br><br>" +
            "(A) '茂盛' 意味着茂盛地生长。" +
            "<br><br>" +
            "(B) '肥沃' 意味着（土壤或土地）生产或有能力生产丰富的植被或作物。" +
            "<br><br>" +
            "(D) '活力' 意味着充满能量和热情。"
    },
    {
        id: 4,
        question: "Her __________ grace on the dance floor made every move look easy and natural.",
        chinese_question: "她在舞池里的__________优雅使每个动作看起来轻松自然。",
        answers: [
            { option: "A", answer: "clumsy", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "B", answer: "difficult", chinese_answer: "困难的", chinese_romanization: "kùnnán de" },
            { option: "C", answer: "effortless", chinese_answer: "轻松的", chinese_romanization: "qīngsōng de" },
            { option: "D", answer: "laborious", chinese_answer: "费力的", chinese_romanization: "fèilì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'effortless' means requiring no physical or mental exertion." +
            "<br><br>" +
            "(A) 'clumsy' means awkward in movement or in handling things." +
            "<br><br>" +
            "(B) 'difficult' means needing much effort or skill to accomplish." +
            "<br><br>" +
            "(D) 'laborious' means requiring considerable time and effort.",
        chinese_explanation: "(C) '轻松的'一词意味着不需要身体或精神上的努力。" +
            "<br><br>" +
            "(A) '笨拙的' 意味着动作或处理事物的笨拙。" +
            "<br><br>" +
            "(B) '困难的' 意味着需要大量的努力或技能才能完成。" +
            "<br><br>" +
            "(D) '费力的' 意味着需要相当多的时间和努力。"
    },
    {
        id: 5,
        question: "Water became __________ in the drought-stricken region, leading to strict conservation measures.",
        chinese_question: "在遭受干旱的地区，水变得 __________，导致严格的节水措施。",
        answers: [
            { option: "A", answer: "abundant", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
            { option: "B", answer: "scarce", chinese_answer: "稀缺的", chinese_romanization: "xīquē de" },
            { option: "C", answer: "excessive", chinese_answer: "过量的", chinese_romanization: "guòliàng de" },
            { option: "D", answer: "plentiful", chinese_answer: "充足的", chinese_romanization: "chōngzú de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'scarce' means insufficient for the demand." +
            "<br><br>" +
            "(A) 'abundant' means existing or available in large quantities; plentiful." +
            "<br><br>" +
            "(C) 'excessive' means more than is necessary, normal, or desirable; immoderate." +
            "<br><br>" +
            "(D) 'plentiful' means existing in or yielding great quantities; abundant.",
        chinese_explanation: "(B) '稀缺的' 意味着需求不足。" +
            "<br><br>" +
            "(A) '丰富的' 意味着大量存在或可用的；丰富的。" +
            "<br><br>" +
            "(C) '过量的' 意味着超过必要的、正常的或期望的；过度的。" +
            "<br><br>" +
            "(D) '充足的' 意味着大量存在或产量大的；丰富的。"
    },
    {
        id: 6,
        question: "She was very __________ in her studies, often staying up late to complete her assignments.",
        chinese_question: "她在学习上非常 __________，经常熬夜完成作业。",
        answers: [
            { option: "A", answer: "lazy", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" },
            { option: "B", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
            { option: "C", answer: "diligent", chinese_answer: "勤奋的", chinese_romanization: "qínfèn de" },
            { option: "D", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'diligent' means having or showing care and conscientiousness in one's work or duties." +
            "<br><br>" +
            "(A) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'negligent' means failing to take proper care in doing something.",
        chinese_explanation: "(C) '勤奋的' 一词意味着在工作或职责上表现出关心和认真的。" +
            "<br><br>" +
            "(A) '懒惰的' 意味着不愿意工作或使用能量。" +
            "<br><br>" +
            "(B) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '疏忽的' 意味着在做某事时未能采取适当的照顾。"
    },
    {
        id: 7,
        question: "She was __________ when she heard the news that she had won the scholarship.",
        chinese_question: "听到自己获得奖学金的消息时，她感到 __________。",
        answers: [
            { option: "A", answer: "elated", chinese_answer: "兴高采烈的", chinese_romanization: "xìnggāocǎiliè de" },
            { option: "B", answer: "disappointed", chinese_answer: "失望的", chinese_romanization: "shīwàng de" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
            { option: "D", answer: "depressed", chinese_answer: "沮丧的", chinese_romanization: "jǔsàng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'elated' means make (someone) ecstatically happy." +
            "<br><br>" +
            "(B) 'disappointed' means sad or displeased because someone or something has failed to fulfill one's hopes or expectations." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'depressed' means (of a person) in a state of general unhappiness or despondency.",
        chinese_explanation: "(A) '兴高采烈的' 一词意味着使（某人）欣喜若狂。" +
            "<br><br>" +
            "(B) '失望的' 意味着因为某人或某事未能实现自己的希望或期望而感到难过或不悦。" +
            "<br><br>" +
            "(C) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '沮丧的' 意味着（人）处于普遍不快乐或失望的状态。"
    },
    {
        id: 8,
        question: "Her __________ instincts kicked in as soon as she saw the abandoned kitten.",
        chinese_question: "当她看到被遗弃的小猫时，她的 __________ 本能立刻显现出来。",
        answers: [
            { option: "A", answer: "paternal", chinese_answer: "父亲的", chinese_romanization: "fùqīn de" },
            { option: "B", answer: "maternal", chinese_answer: "母亲的", chinese_romanization: "mǔqīn de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "aloof", chinese_answer: "冷淡的", chinese_romanization: "lěngdàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'maternal' means related to a mother, especially during pregnancy or shortly after childbirth." +
            "<br><br>" +
            "(A) 'paternal' means related to a father." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'aloof' means not friendly or forthcoming; cool and distant.",
        chinese_explanation: "(B) '母亲的' 意味着与母亲有关，特别是在怀孕期间或分娩后不久。" +
            "<br><br>" +
            "(A) '父亲的' 意味着与父亲有关。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(D) '冷淡的' 意味着不友好或不热情；冷酷和疏远的。"
    },
    {
        id: 9,
        question: "Santa Claus is often depicted as a __________ man, always laughing and spreading joy.",
        chinese_question: "圣诞老人通常被描绘成一个__________的人，总是笑着传播快乐。",
        answers: [
            { option: "A", answer: "serious", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
            { option: "B", answer: "gloomy", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" },
            { option: "C", answer: "jolly", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "D", answer: "somber", chinese_answer: "阴沉的", chinese_romanization: "yīnchén de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'jolly' means happy and cheerful." +
            "<br><br>" +
            "(A) 'serious' means demanding careful consideration or application." +
            "<br><br>" +
            "(B) 'gloomy' means dark or poorly lit, especially so as to appear depressing or frightening." +
            "<br><br>" +
            "(D) 'somber' means dark or dull in color or tone; gloomy.",
        chinese_explanation: "(C) '快乐的'一词意味着快乐和愉快的。" +
            "<br><br>" +
            "(A) '严肃的' 意味着需要认真考虑或应用的。" +
            "<br><br>" +
            "(B) '忧郁的' 意味着黑暗或光线不足，尤其是显得压抑或令人害怕的。" +
            "<br><br>" +
            "(D) '阴沉的' 意味着颜色或色调暗淡的；阴郁的。"
    },
    {
        id: 10,
        question: "The meeting was __________, with everyone dressed casually and speaking freely about their ideas.",
        chinese_question: "会议是 __________ 的，大家穿着随意，自由地谈论自己的想法。",
        answers: [
            { option: "A", answer: "informal", chinese_answer: "非正式的", chinese_romanization: "fēi zhèngshì de" },
            { option: "B", answer: "formal", chinese_answer: "正式的", chinese_romanization: "zhèngshì de" },
            { option: "C", answer: "rigid", chinese_answer: "僵硬的", chinese_romanization: "jiāngyìng de" },
            { option: "D", answer: "strict", chinese_answer: "严格的", chinese_romanization: "yángé de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'informal' means having a relaxed, friendly, or unofficial style, manner, or nature." +
            "<br><br>" +
            "(B) 'formal' means done in accordance with rules of convention or etiquette." +
            "<br><br>" +
            "(C) 'rigid' means unable to bend or be forced out of shape; not flexible." +
            "<br><br>" +
            "(D) 'strict' means demanding that rules concerning behavior are obeyed and observed.",
        chinese_explanation: "(A) '非正式的' 意味着具有轻松、友好或非官方的风格、方式或性质。" +
            "<br><br>" +
            "(B) '正式的' 意味着按照惯例或礼节的规则进行的。" +
            "<br><br>" +
            "(C) '僵硬的' 意味着不能弯曲或被强制变形的；不灵活的。" +
            "<br><br>" +
            "(D) '严格的' 意味着要求遵守和遵循行为规则的。"
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
