// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The scientist noticed an __________ pattern in the data that didn't match previous results.",
        chinese_question: "科学家注意到数据中的__________模式，这与之前的结果不符。",
        answers: [
            { option: "A", answer: "normal", chinese_answer: "正常的", chinese_romanization: "zhèngcháng de" },
            { option: "B", answer: "abnormal", chinese_answer: "异常的", chinese_romanization: "yìcháng de" },
            { option: "C", answer: "regular", chinese_answer: "规律的", chinese_romanization: "guīlǜ de" },
            { option: "D", answer: "standard", chinese_answer: "标准的", chinese_romanization: "biāozhǔn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'abnormal' means deviating from what is normal or usual." +
            "<br><br>" +
            "(A) 'normal' means conforming to a standard; usual, typical, or expected." +
            "<br><br>" +
            "(C) 'regular' means arranged in or constituting a constant or definite pattern, especially with the same space between individual instances." +
            "<br><br>" +
            "(D) 'standard' means a level of quality or attainment.",
        chinese_explanation: "(B) '异常的'一词意味着偏离正常或通常情况的。" +
            "<br><br>" +
            "(A) '正常的' 意味着符合标准的；通常的、典型的或预期的。" +
            "<br><br>" +
            "(C) '规律的' 意味着排列成或构成一个恒定或确定的模式，特别是在个体实例之间有相同的空间。" +
            "<br><br>" +
            "(D) '标准的' 意味着质量或成就的水平。"
    },
    {
        id: 2,
        question: "The __________ evening breeze made our walk along the beach especially pleasant.",
        chinese_question: "__________ 的夜晚微风使我们在海滩上的散步格外愉快。",
        answers: [
            { option: "A", answer: "chilly", chinese_answer: "寒冷的", chinese_romanization: "hánlěng de" },
            { option: "B", answer: "balmy", chinese_answer: "温暖的", chinese_romanization: "wēnnuǎn de" },
            { option: "C", answer: "harsh", chinese_answer: "刺耳的", chinese_romanization: "cì'ěr de" },
            { option: "D", answer: "cold", chinese_answer: "冷的", chinese_romanization: "lěng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'balmy' means pleasantly warm." +
            "<br><br>" +
            "(A) 'chilly' means uncomfortably cool or cold." +
            "<br><br>" +
            "(C) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(D) 'cold' means of or at a low or relatively low temperature.",
        chinese_explanation: "(B) '温暖的' 一词意味着温暖宜人的。" +
            "<br><br>" +
            "(A) '寒冷的' 意味着不舒服的凉或冷。" +
            "<br><br>" +
            "(C) '刺耳的' 意味着对感官不愉快的粗糙或刺耳的。" +
            "<br><br>" +
            "(D) '冷的' 意味着温度低或相对较低的。"
    },
    {
        id: 3,
        question: "Her dress was __________, unlike anything anyone else wore to the event.",
        chinese_question: "她的裙子是 __________ 的，与活动中其他人的穿着截然不同。",
        answers: [
            { option: "A", answer: "common", chinese_answer: "常见的", chinese_romanization: "chángjiàn de" },
            { option: "B", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "unique", chinese_answer: "独特的", chinese_romanization: "dútè de" },
            { option: "D", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unique' means being the only one of its kind; unlike anything else." +
            "<br><br>" +
            "(A) 'common' means occurring, found, or done often; prevalent." +
            "<br><br>" +
            "(B) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(D) 'typical' means having the distinctive qualities of a particular type of person or thing.",
        chinese_explanation: "(C) '独特的' 一词意味着独一无二的；与众不同的。" +
            "<br><br>" +
            "(A) '常见的' 意味着经常发生、发现或完成的；普遍的。" +
            "<br><br>" +
            "(B) '普通的' 意味着没有特别或独特的特征；正常的。" +
            "<br><br>" +
            "(D) '典型的' 意味着具有某一类型的人或事物的独特品质。"
},
    
    {
        id: 4,
        question: "The teacher’s __________ measures were meant to deter students from cheating, but some felt they were too harsh.",
        chinese_question: "老师的 __________ 措施旨在阻止学生作弊，但有些人认为这些措施过于严厉。",
        answers: [
            { option: "A", answer: "punitive", chinese_answer: "惩罚性的", chinese_romanization: "chéngfá xìng de" },
            { option: "B", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
            { option: "C", answer: "encouraging", chinese_answer: "鼓励的", chinese_romanization: "gǔlì de" },
            { option: "D", answer: "motivating", chinese_answer: "激励的", chinese_romanization: "jīlì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'punitive' means inflicting or intended as punishment." +
            "<br><br>" +
            "(B) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(C) 'encouraging' means giving someone support or confidence; supportive." +
            "<br><br>" +
            "(D) 'motivating' means providing a reason for someone to act in a certain way.",
        chinese_explanation: "(A) '惩罚性的' 意味着施加或意图作为惩罚的。" +
            "<br><br>" +
            "(B) '支持的' 意味着提供鼓励或情感上的帮助的。" +
            "<br><br>" +
            "(C) '鼓励的' 意味着给予某人支持或信心的；支持的。" +
            "<br><br>" +
            "(D) '激励的' 意味着提供某人以某种方式行动的理由的。"
    },
    {
        id: 5,
        question: "The fortune teller's __________ predictions about the future amazed everyone at the fair.",
        chinese_question: "算命先生对未来的 __________ 预测让集市上的每个人都感到惊讶。",
        answers: [
            { option: "A", answer: "inaccurate", chinese_answer: "不准确的", chinese_romanization: "bù zhǔnquè de" },
            { option: "B", answer: "prophetic", chinese_answer: "预言的", chinese_romanization: "yùyán de" },
            { option: "C", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prophetic' means accurately describing or predicting what will happen in the future." +
            "<br><br>" +
            "(A) 'inaccurate' means not accurate." +
            "<br><br>" +
            "(C) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(B) '预言的' 意味着准确描述或预测未来将要发生的事情。" +
            "<br><br>" +
            "(A) '不准确的' 意味着不准确的。" +
            "<br><br>" +
            "(C) '平凡的' 意味着缺乏兴趣或兴奋的；沉闷的。" +
            "<br><br>" +
            "(D) '普通的' 意味着没有特别或独特的特征的；正常的。"
    },
    {
        id: 6,
        question: "She used __________ expressions that only native speakers could fully understand.",
        chinese_question: "她使用了只有母语者才能完全理解的__________表达。",
        answers: [
            { option: "A", answer: "literal", chinese_answer: "字面的", chinese_romanization: "zìmiàn de" },
            { option: "B", answer: "straightforward", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" },
            { option: "C", answer: "idiomatic", chinese_answer: "成语的", chinese_romanization: "chéngyǔ de" },
            { option: "D", answer: "plain", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'idiomatic' means using, containing, or denoting expressions that are natural to a native speaker." +
            "<br><br>" +
            "(A) 'literal' means taking words in their usual or most basic sense without metaphor or allegory." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'plain' means not decorated or elaborate; simple or ordinary in character.",
        chinese_explanation: "(C) '成语的'一词意味着使用、包含或表示对母语者来说自然的表达。" +
            "<br><br>" +
            "(A) '字面的' 意味着按字面意思理解单词而不是比喻或寓言的。" +
            "<br><br>" +
            "(B) '直接的' 意味着不复杂和容易做或理解的。" +
            "<br><br>" +
            "(D) '简单的' 意味着不装饰或复杂的；简单或普通的。"
    },
    {
        id: 7,
        question: "The __________ landscape stretched for miles, with no signs of life anywhere.",
        chinese_question: "__________ 的景观延绵数英里，毫无生命迹象。",
        answers: [
            { option: "A", answer: "bustling", chinese_answer: "繁忙", chinese_romanization: "fánmáng" },
            { option: "B", answer: "lush", chinese_answer: "茂盛", chinese_romanization: "màoshèng" },
            { option: "C", answer: "desolate", chinese_answer: "荒凉", chinese_romanization: "huāngliáng" },
            { option: "D", answer: "fertile", chinese_answer: "肥沃", chinese_romanization: "féiwò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'desolate' means deserted of people and in a state of bleak and dismal emptiness." +
            "<br><br>" +
            "(A) 'bustling' means full of energetic and noisy activity." +
            "<br><br>" +
            "(B) 'lush' means growing luxuriantly." +
            "<br><br>" +
            "(D) 'fertile' means (of soil or land) producing or capable of producing abundant vegetation or crops.",
        chinese_explanation: "(C) '荒凉' 意味着没有人和处于荒芜和凄凉的空虚状态。" +
            "<br><br>" +
            "(A) '繁忙' 意味着充满活力和喧闹的活动。" +
            "<br><br>" +
            "(B) '茂盛' 意味着生长茂盛。" +
            "<br><br>" +
            "(D) '肥沃' 意味着（土壤或土地）生产或能够生产丰富的植被或作物。"
    },
    {
        id: 8,
        question: "Her life was __________ with experiences and memories from traveling the world.",
        chinese_question: "她的生活__________，充满了环游世界的经历和回忆。",
        answers: [
            { option: "A", answer: "poor", chinese_answer: "贫穷的", chinese_romanization: "pínqióng de" },
            { option: "B", answer: "wealthy", chinese_answer: "富有的", chinese_romanization: "fùyǒu de" },
            { option: "C", answer: "average", chinese_answer: "平均的", chinese_romanization: "píngjūn de" },
            { option: "D", answer: "needy", chinese_answer: "贫困的", chinese_romanization: "pínkùn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'wealthy' means having a great deal of money, resources, or assets; rich. Figuratively, it can mean having a rich or full experience." +
            "<br><br>" +
            "(A) 'poor' means lacking sufficient money to live at a standard considered comfortable or normal in a society." +
            "<br><br>" +
            "(C) 'average' means a number expressing the central or typical value in a set of data." +
            "<br><br>" +
            "(D) 'needy' means lacking the necessities of life; very poor.",
        chinese_explanation: "(B) '富有的'一词意味着拥有大量金钱、资源或资产；富裕的。比喻地，它可以表示拥有丰富或充实的经历。" +
            "<br><br>" +
            "(A) '贫穷的' 意味着缺乏足够的钱来维持社会中被认为舒适或正常的标准生活。" +
            "<br><br>" +
            "(C) '平均的' 意味着表示一组数据中的中心或典型值的数字。" +
            "<br><br>" +
            "(D) '贫困的' 意味着缺乏生活必需品；非常贫穷。"
    },
    {
        id: 9,
        question: "The old man looked __________ as he walked slowly with a cane.",
        chinese_question: "这位老人拄着拐杖慢慢走着，看起来很 __________。",
        answers: [
            { option: "A", answer: "frail", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "B", answer: "strong", chinese_answer: "强壮的", chinese_romanization: "qiángzhuàng de" },
            { option: "C", answer: "robust", chinese_answer: "健壮的", chinese_romanization: "jiànzhuàng de" },
            { option: "D", answer: "energetic", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'frail' means weak and delicate." +
            "<br><br>" +
            "(B) 'strong' means having the power to move heavy weights or perform other physically demanding tasks." +
            "<br><br>" +
            "(C) 'robust' means strong and healthy; vigorous." +
            "<br><br>" +
            "(D) 'energetic' means showing or involving great activity or vitality.",
        chinese_explanation: "(A) '虚弱的' 意味着虚弱和娇嫩的。" +
            "<br><br>" +
            "(B) '强壮的' 意味着有力量移动重物或执行其他体力要求高的任务。" +
            "<br><br>" +
            "(C) '健壮的' 意味着强壮和健康；充满活力的。" +
            "<br><br>" +
            "(D) '精力充沛的' 意味着表现出或涉及大量活动或活力。"
    },
    {
        id: 10,
        question: "The waiter was very __________ and made sure we had everything we needed.",
        chinese_question: "服务员非常 __________，确保我们需要的一切都有。",
        answers: [
            { option: "A", answer: "courteous", chinese_answer: "有礼貌的", chinese_romanization: "yǒu lǐmào de" },
            { option: "B", answer: "rude", chinese_answer: "无礼的", chinese_romanization: "wúlǐ de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "harsh", chinese_answer: "严厉的", chinese_romanization: "yánlì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'courteous' means polite, respectful, or considerate in manner." +
            "<br><br>" +
            "(B) 'rude' means offensively impolite or ill-mannered." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'harsh' means unpleasantly rough or jarring to the senses.",
        chinese_explanation: "(A) '有礼貌的' 意味着礼貌、尊重或体贴的行为。" +
            "<br><br>" +
            "(B) '无礼的' 意味着冒犯性地不礼貌或粗鲁。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(D) '严厉的' 意味着让人感觉不愉快的粗糙或刺耳。"
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
