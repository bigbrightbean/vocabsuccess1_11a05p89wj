// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The dark clouds gathered on the horizon, creating a __________ atmosphere that hinted at an approaching storm.",
        chinese_question: "黑云在地平线上聚集，营造出一种 __________ 的氛围，预示着一场风暴的来临。",
        answers: [
            { option: "A", answer: "menacing", chinese_answer: "威胁的", chinese_romanization: "wēixié de" },
            { option: "B", answer: "cheerful", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "C", answer: "inviting", chinese_answer: "诱人的", chinese_romanization: "yòurén de" },
            { option: "D", answer: "peaceful", chinese_answer: "宁静的", chinese_romanization: "níngjìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'menacing' means suggesting the presence of danger; threatening." +
            "<br><br>" +
            "(B) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(C) 'inviting' means offering the promise of an attractive or enjoyable experience." +
            "<br><br>" +
            "(D) 'peaceful' means free from disturbance; tranquil.",
        chinese_explanation: "(A) '威胁的' 意味着暗示危险的存在；威胁的。" +
            "<br><br>" +
            "(B) '愉快的' 意味着显著地快乐和乐观的。" +
            "<br><br>" +
            "(C) '诱人的' 意味着提供有吸引力或愉快体验的承诺的。" +
            "<br><br>" +
            "(D) '宁静的' 意味着没有干扰的；宁静的。"
    },
    {
        id: 2,
        question: "The temperature's __________ shift from cool to warm went unnoticed by most people, as the change happened so slowly over time.",
        chinese_question: "气温由凉爽到温暖的 __________ 变化大多数人都没有注意到，因为变化是如此缓慢地发生。",
        answers: [
            { option: "A", answer: "sudden", chinese_answer: "突然的", chinese_romanization: "túrán de" },
            { option: "B", answer: "abrupt", chinese_answer: "突兀的", chinese_romanization: "tūwù de" },
            { option: "C", answer: "immediate", chinese_answer: "立即的", chinese_romanization: "lìjí de" },
            { option: "D", answer: "gradual", chinese_answer: "逐渐的", chinese_romanization: "zhújiàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'gradual' means taking place or progressing slowly or by degrees." +
            "<br><br>" +
            "(A) 'sudden' means occurring or done quickly and unexpectedly or without warning." +
            "<br><br>" +
            "(B) 'abrupt' means sudden and unexpected." +
            "<br><br>" +
            "(C) 'immediate' means occurring or done at once; instant.",
        chinese_explanation: "(D) '逐渐的' 意味着缓慢发生或逐渐进行的。" +
            "<br><br>" +
            "(A) '突然的' 意味着快速且出乎意料或毫无预警地发生或完成的。" +
            "<br><br>" +
            "(B) '突兀的' 意味着突然和出乎意料的。" +
            "<br><br>" +
            "(C) '立即的' 意味着立即发生或完成的；即时的。"
    },
    {
        id: 3,
        question: "The __________ weather conditions made it difficult for the hikers to continue their journey.",
        chinese_question: "__________的天气条件使徒步旅行者难以继续他们的旅程。",
        answers: [
            { option: "A", answer: "pleasant", chinese_answer: "宜人的", chinese_romanization: "yírén de" },
            { option: "B", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "C", answer: "harsh", chinese_answer: "严酷的", chinese_romanization: "yánkù de" },
            { option: "D", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(A) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(B) 'mild' means gentle and not easily provoked." +
            "<br><br>" +
            "(D) 'calm' means not showing or feeling nervousness, anger, or other strong emotions.",
        chinese_explanation: "(C) '严酷的'一词意味着对感觉不愉快的粗糙或刺耳的。" +
            "<br><br>" +
            "(A) '宜人的' 意味着给人一种快乐满足或享受的感觉。" +
            "<br><br>" +
            "(B) '温和的' 意味着温柔且不易被激怒。" +
            "<br><br>" +
            "(D) '平静的' 意味着不显示或感觉紧张、愤怒或其他强烈情感。"
    },
    {
        id: 4,
        question: "The children were __________ during recess, running and shouting with boundless energy.",
        chinese_question: "课间休息时，孩子们非常 __________，跑来跑去，大声喊叫，精力充沛。",
        answers: [
            { option: "A", answer: "quiet", chinese_answer: "安静的", chinese_romanization: "ānjìng de" },
            { option: "B", answer: "boisterous", chinese_answer: "喧闹的", chinese_romanization: "xuānnào de" },
            { option: "C", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "D", answer: "subdued", chinese_answer: "压抑的", chinese_romanization: "yāyì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'boisterous' means noisy, energetic, and cheerful; rowdy." +
            "<br><br>" +
            "(A) 'quiet' means making little or no noise." +
            "<br><br>" +
            "(C) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(D) 'subdued' means quiet and rather reflective or depressed.",
        chinese_explanation: "(B) '喧闹的' 意味着吵闹的、充满活力的和快乐的；吵闹的。" +
            "<br><br>" +
            "(A) '安静的' 意味着发出很少或没有声音。" +
            "<br><br>" +
            "(C) '平静的' 意味着不表现或感觉紧张、愤怒或其他强烈的情绪。" +
            "<br><br>" +
            "(D) '压抑的' 意味着安静而相当反思或沮丧。"
    },
    {
        id: 5,
        question: "The artist's __________ attention to detail resulted in a masterpiece admired by all.",
        chinese_question: "艺术家对细节的 __________ 关注造就了一幅受到所有人赞赏的杰作。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "B", answer: "hasty", chinese_answer: "匆忙的", chinese_romanization: "cōngmáng de" },
            { option: "C", answer: "painstaking", chinese_answer: "细心的", chinese_romanization: "xìxīn de" },
            { option: "D", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'painstaking' means done with or employing great care and thoroughness." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(B) 'hasty' means done or acting with excessive speed or urgency; hurried." +
            "<br><br>" +
            "(D) 'negligent' means failing to take proper care in doing something.",
        chinese_explanation: "(C) '细心的' 意味着以极大的小心和彻底性完成或采用的。" +
            "<br><br>" +
            "(A) '粗心的' 意味着没有给予足够的注意或思考来避免伤害或错误的。" +
            "<br><br>" +
            "(B) '匆忙的' 意味着以过快的速度或紧急行动；匆忙的。" +
            "<br><br>" +
            "(D) '疏忽的' 意味着未能在做某事时采取适当的照顾。"
    },
    {
        id: 6,
        question: "The antagonist in the story was __________, always plotting to harm the protagonist and cause chaos.",
        chinese_question: "故事中的反派是 __________ 的，总是在策划伤害主角并制造混乱。",
        answers: [
            { option: "A", answer: "malevolent", chinese_answer: "恶毒的", chinese_romanization: "èdú de" },
            { option: "B", answer: "benevolent", chinese_answer: "仁慈的", chinese_romanization: "réncí de" },
            { option: "C", answer: "kind", chinese_answer: "善良的", chinese_romanization: "shànliáng de" },
            { option: "D", answer: "compassionate", chinese_answer: "有同情心的", chinese_romanization: "yǒu tóngqíng xīn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'malevolent' means having or showing a wish to do evil to others." +
            "<br><br>" +
            "(B) 'benevolent' means well meaning and kindly." +
            "<br><br>" +
            "(C) 'kind' means having or showing a friendly, generous, and considerate nature." +
            "<br><br>" +
            "(D) 'compassionate' means feeling or showing sympathy and concern for others.",
        chinese_explanation: "(A) '恶毒的' 意味着怀有或表现出对他人作恶的愿望。" +
            "<br><br>" +
            "(B) '仁慈的' 意味着善良和好意的。" +
            "<br><br>" +
            "(C) '善良的' 意味着具有或表现出友好、慷慨和体贴的性格。" +
            "<br><br>" +
            "(D) '有同情心的' 意味着感到或表现出对他人的同情和关心。"
    },
    {
        id: 7,
        question: "The bride's __________ white dress was spotless, radiating elegance and purity as she walked down the aisle.",
        chinese_question: "新娘的 __________ 白色婚纱一尘不染，当她走过过道时，散发出优雅和纯洁。",
        answers: [
            { option: "A", answer: "immaculate", chinese_answer: "完美无瑕的", chinese_romanization: "wánměi wúxiá de" },
            { option: "B", answer: "filthy", chinese_answer: "肮脏的", chinese_romanization: "āngzāng de" },
            { option: "C", answer: "stained", chinese_answer: "被弄脏的", chinese_romanization: "bèi nòng zāng de" },
            { option: "D", answer: "dingy", chinese_answer: "昏暗的", chinese_romanization: "hūn'àn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'immaculate' means perfectly clean, neat, or tidy." +
            "<br><br>" +
            "(B) 'filthy' means disgustingly dirty." +
            "<br><br>" +
            "(C) 'stained' means marked or colored with something that is not easily removed." +
            "<br><br>" +
            "(D) 'dingy' means gloomy and drab. It describes something that is dark, dull, and not clean or bright. If a place or thing is dingy, it looks depressing and uninviting.",
        chinese_explanation: "(A) '完美无瑕的' 意味着非常干净、整洁或整齐的。" +
            "<br><br>" +
            "(B) '肮脏的' 意味着脏得令人厌恶的。" +
            "<br><br>" +
            "(C) '被弄脏的' 意味着被不容易去除的东西标记或染色的。" +
            "<br><br>" +
            "(D) '昏暗的' 意味着阴暗的和单调的。它描述的是一种黑暗、暗淡且不干净或明亮的事物。如果一个地方或物品是昏暗的，它看起来让人沮丧且不吸引人。"
    },
    {
        id: 8,
        question: "The __________ porcelain vase required careful handling to avoid any damage.",
        chinese_question: "这只__________的瓷花瓶需要小心处理，以避免任何损坏。",
        answers: [
            { option: "A", answer: "sturdy", chinese_answer: "结实的", chinese_romanization: "jiēshi de" },
            { option: "B", answer: "delicate", chinese_answer: "精致的", chinese_romanization: "jīngzhì de" },
            { option: "C", answer: "rugged", chinese_answer: "粗糙的", chinese_romanization: "cūcāo de" },
            { option: "D", answer: "tough", chinese_answer: "坚韧的", chinese_romanization: "jiānrèn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'delicate' means very fine in texture or structure; easily broken or damaged." +
            "<br><br>" +
            "(A) 'sturdy' means strongly and solidly built." +
            "<br><br>" +
            "(C) 'rugged' means having a broken, rocky, and uneven surface." +
            "<br><br>" +
            "(D) 'tough' means strong enough to withstand adverse conditions or rough handling.",
        chinese_explanation: "(B) '精致的'一词意味着质地或结构非常精细的；容易破碎或损坏的。" +
            "<br><br>" +
            "(A) '结实的' 意味着坚固地建造的。" +
            "<br><br>" +
            "(C) '粗糙的' 意味着有破碎、岩石和不平的表面。" +
            "<br><br>" +
            "(D) '坚韧的' 意味着足够强大以承受恶劣条件或粗暴处理的。"
    },
    {
        id: 9,
    question: "The __________ calm of the sea hid the danger of an approaching storm.",
    chinese_question: "海面上 __________ 的平静掩盖了即将来临的风暴的危险。",
    answers: [
        { option: "A", answer: "honest", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
        { option: "B", answer: "clear", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
        { option: "C", answer: "deceptive", chinese_answer: "虚假的", chinese_romanization: "xūjiǎ de" },
        { option: "D", answer: "transparent", chinese_answer: "透明", chinese_romanization: "tòumíng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'deceptive' means giving an appearance or impression different from the true one; misleading." +
        "<br><br>" +
        "(A) 'honest' means free of deceit; truthful and sincere." +
        "<br><br>" +
        "(B) 'clear' means easy to perceive, understand, or interpret." +
        "<br><br>" +
        "(D) 'transparent' means easy to perceive or detect.",
    chinese_explanation: "(C) '虚假的' 意味着给人一种与真实情况不同的外观或印象；误导。" +
        "<br><br>" +
        "(A) '诚实' 意味着没有欺骗；真实和真诚。" +
        "<br><br>" +
        "(B) '清晰' 意味着容易察觉、理解或解释。" +
        "<br><br>" +
        "(D) '透明' 意味着容易察觉或发现。"
    },
    {
        id: 10,
        question: "The hiker was __________ as he navigated the narrow, slippery path along the cliffside.",
        chinese_question: "这位徒步旅行者在沿着悬崖边狭窄、湿滑的小路行走时非常 __________。",
        answers: [
            { option: "A", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "B", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" },
            { option: "C", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "D", answer: "hasty", chinese_answer: "匆忙的", chinese_romanization: "cōngmáng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(B) 'reckless' means without thinking or caring about the consequences of an action." +
            "<br><br>" +
            "(C) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(D) 'hasty' means done with excessive speed or urgency; hurried.",
        chinese_explanation: "(A) '谨慎的' 意味着小心避免潜在的问题或危险。" +
            "<br><br>" +
            "(B) '鲁莽的' 意味着不考虑或不在乎行动的后果。" +
            "<br><br>" +
            "(C) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误。" +
            "<br><br>" +
            "(D) '匆忙的' 意味着过快或紧急地完成的；匆促的。"
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
