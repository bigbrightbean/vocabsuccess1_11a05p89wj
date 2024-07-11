// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She liked to __________ through the bookstore, looking for interesting titles.",
        chinese_question: "她喜欢在书店__________，寻找有趣的书籍。",
        answers: [
            { option: "A", answer: "purchase", chinese_answer: "购买", chinese_romanization: "gòumǎi" },
            { option: "B", answer: "dismiss", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "C", answer: "evade", chinese_answer: "逃避", chinese_romanization: "táobì" },
            { option: "D", answer: "browse", chinese_answer: "浏览", chinese_romanization: "liúlǎn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'browse' means to look through or glance at casually." +
            "<br><br>" +
            "(A) 'purchase' means acquire (something) by paying for it; buy." +
            "<br><br>" +
            "(B) 'dismiss' means to treat something as unworthy of consideration." +
            "<br><br>" +
            "(C) 'evade' means to escape or avoid, especially by cleverness or trickery.",
        chinese_explanation: "(D) '浏览'一词意味着随意地看或浏览。" +
            "<br><br>" +
            "(A) '购买' 意味着通过支付购买（某物）。" +
            "<br><br>" +
            "(B) '忽略' 意味着认为某事不值得考虑。" +
            "<br><br>" +
            "(C) '逃避' 意味着逃脱或避免，尤其是通过聪明或诡计。"
    },
    {
        id: 2,
        question: "The event planner hired a company to __________ the wedding, ensuring all guests had delicious food.",
        chinese_question: "活动策划者聘请了一家公司来 __________ 婚礼，确保所有客人都能享受到美味的食物。",
        answers: [
            { option: "A", answer: "cater", chinese_answer: "提供餐饮", chinese_romanization: "tígōng cānyǐn" },
            { option: "B", answer: "disrupt", chinese_answer: "打扰", chinese_romanization: "dǎrǎo" },
            { option: "C", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "D", answer: "mishandle", chinese_answer: "处理不当", chinese_romanization: "chǔlǐ bùdàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cater' means to provide food and drink, typically at social events and in a professional capacity." +
            "<br><br>" +
            "(B) 'disrupt' means interrupt (an event, activity, or process) by causing a disturbance or problem." +
            "<br><br>" +
            "(C) 'overlook' means to fail to notice or consider something important." +
            "<br><br>" +
            "(D) 'mishandle' means to manage or deal with something wrongly or ineffectively.",
        chinese_explanation: "'提供餐饮' 意味着提供食物和饮料，通常在社交活动中以专业身份进行。" +
            "<br><br>" +
            "(B) '打扰' 意味着通过制造干扰或问题来中断（事件、活动或过程）。" +
            "<br><br>" +
            "(C) '忽略' 意味着未能注意或考虑重要的事情。" +
            "<br><br>" +
            "(D) '处理不当' 意味着错误或无效地管理或处理某事。"
    },
    {
        id: 3,
        question: "The strong winds caused the small boat to __________ in the middle of the lake.",
        chinese_question: "强风导致小船在湖中 __________。",
        answers: [
            { option: "A", answer: "capsize", chinese_answer: "翻覆", chinese_romanization: "fānfù" },
            { option: "B", answer: "float", chinese_answer: "漂浮", chinese_romanization: "piāofú" },
            { option: "C", answer: "stabilize", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "D", answer: "anchor", chinese_answer: "锚定", chinese_romanization: "máo dìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'capsize' means (of a boat) to overturn in the water." +
            "<br><br>" +
            "(B) 'float' means rest or move on or near the surface of a liquid without sinking." +
            "<br><br>" +
            "(C) 'stabilize' means make or become unlikely to change, fail, or decline." +
            "<br><br>" +
            "(D) 'anchor' means secure (a vessel) firmly in position by dropping an anchor.",
        chinese_explanation: "'翻覆' 意味着（船）在水中翻转。" +
            "<br><br>" +
            "(B) '漂浮' 意味着在液体表面或附近休息或移动而不沉。" +
            "<br><br>" +
            "(C) '稳定' 意味着使不太可能改变、失败或下降。" +
            "<br><br>" +
            "(D) '锚定' 意味着通过抛锚牢固地固定（船只）。"
    },
    {
        id: 4,
        question: "The children loved to __________ up the steep hill to get to the playground, often using their hands to help pull themselves up the rough terrain.",
        chinese_question: "孩子们喜欢 __________ 上陡坡去操场，通常用手帮助自己爬上崎岖的地形。",
        answers: [
            { option: "A", answer: "stroll", chinese_answer: "散步", chinese_romanization: "sànbù" },
            { option: "B", answer: "saunter", chinese_answer: "漫步", chinese_romanization: "mànbù" },
            { option: "C", answer: "glide", chinese_answer: "滑行", chinese_romanization: "huáxíng" },
            { option: "D", answer: "clamber", chinese_answer: "攀爬", chinese_romanization: "pānpá" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'clamber' means to climb, move, or get in or out of something in an awkward and laborious way, typically using both hands and feet." +
            "<br><br>" +
            "(A) 'stroll' means walk in a leisurely way." +
            "<br><br>" +
            "(B) 'saunter' means walk in a slow, relaxed manner, without hurry or effort." +
            "<br><br>" +
            "(C) 'glide' means move with a smooth continuous motion, typically with little noise.",
        chinese_explanation: "(D) '攀爬' 意味着以一种笨拙和费力的方式攀爬、移动或进出某物，通常使用双手和双脚。" +
            "<br><br>" +
            "(A) '散步' 意味着以悠闲的方式走路。" +
            "<br><br>" +
            "(B) '漫步' 意味着以缓慢、放松的方式走路，没有匆忙或努力。" +
            "<br><br>" +
            "(C) '滑行' 意味着以平滑连续的动作移动，通常伴有很少的噪音。"
    },
    {
        id: 5,
        question: "The complex instructions for the new software __________ many users, leading to numerous calls for help.",
        chinese_question: "新软件的复杂说明__________了许多用户，导致了大量求助电话。",
        answers: [
            { option: "A", answer: "clarified", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
            { option: "B", answer: "enlightened", chinese_answer: "启发", chinese_romanization: "qǐfā" },
            { option: "C", answer: "bewildered", chinese_answer: "使迷惑", chinese_romanization: "shǐ míhuò" },
            { option: "D", answer: "guided", chinese_answer: "指导", chinese_romanization: "zhǐdǎo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bewildered' means to cause (someone) to become perplexed and confused." +
            "<br><br>" +
            "(A) 'clarified' means made (a statement or situation) less confused and more comprehensible." +
            "<br><br>" +
            "(B) 'enlightened' means gave (someone) greater knowledge and understanding about a subject or situation." +
            "<br><br>" +
            "(D) 'guided' means showed or indicated the way to (someone).",
        chinese_explanation: "'使迷惑' 一词意味着使（某人）变得困惑和不解。" +
            "<br><br>" +
            "(A) '澄清' 意味着使（陈述或情况）不再混乱且更易理解。" +
            "<br><br>" +
            "(B) '启发' 意味着给予（某人）更多关于某主题或情况的知识和理解。" +
            "<br><br>" +
            "(D) '指导' 意味着为（某人）指示或指引方向。"
    },
    {
        id: 6,
        question: "The coach had to __________ loudly to get the players' attention during the chaotic practice.",
        chinese_question: "在混乱的训练中，教练不得不大声__________以引起球员的注意。",
        answers: [
            { option: "A", answer: "whisper", chinese_answer: "低语", chinese_romanization: "dī yǔ" },
            { option: "B", answer: "bellow", chinese_answer: "吼叫", chinese_romanization: "hǒujiào" },
            { option: "C", answer: "mumble", chinese_answer: "喃喃", chinese_romanization: "nánnán" },
            { option: "D", answer: "sigh", chinese_answer: "叹息", chinese_romanization: "tànxī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bellow' means to shout something with a deep loud roar." +
            "<br><br>" +
            "(A) 'whisper' means to speak very softly using one's breath without one's vocal cords, especially for the sake of secrecy." +
            "<br><br>" +
            "(C) 'mumble' means to say something indistinctly and quietly, making it difficult for others to hear." +
            "<br><br>" +
            "(D) 'sigh' means to emit a long, deep, audible breath expressing sadness, relief, tiredness, or a similar feeling.",
        chinese_explanation: "'吼叫' 一词意味着用深沉响亮的声音喊叫某事。" +
            "<br><br>" +
            "(A) '低语' 意味着用气息轻声说话而不发声，尤其是为了保密。" +
            "<br><br>" +
            "(C) '喃喃' 意味着不清楚地、轻声地说某事，使别人难以听清。" +
            "<br><br>" +
            "(D) '叹息' 意味着发出长、深、可闻的呼吸，表示悲伤、宽慰、疲倦或类似的感觉。"
    },
    {
        id: 7,
        question: "From a young age, she knew she would __________ to become a renowned scientist.",
        chinese_question: "从小，她就知道自己会__________成为一名著名的科学家。",
        answers: [
            { option: "A", answer: "hesitate", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "B", answer: "aspire", chinese_answer: "渴望", chinese_romanization: "kěwàng" },
            { option: "C", answer: "dread", chinese_answer: "害怕", chinese_romanization: "hàipà" },
            { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'aspire' means to direct one's hopes or ambitions toward achieving something." +
            "<br><br>" +
            "(A) 'hesitate' means pause before saying or doing something, especially through uncertainty." +
            "<br><br>" +
            "(C) 'dread' means anticipate with great apprehension or fear." +
            "<br><br>" +
            "(D) 'avoid' means keep away from or stop oneself from doing (something).",
        chinese_explanation: "(B) '渴望' 一词意味着将希望或抱负指向实现某事。" +
            "<br><br>" +
            "(A) '犹豫' 意味着在说话或做事前犹豫不决，尤其是不确定。" +
            "<br><br>" +
            "(C) '害怕' 意味着怀着极大的恐惧或忧虑预期。" +
            "<br><br>" +
            "(D) '避免' 意味着远离或阻止自己做某事。"
    },
    {
        id: 8,
        question: "She nodded to __________ the compliment, smiling warmly at her friend.",
        chinese_question: "她点头__________这句话，温暖地对朋友微笑。",
        answers: [
            { option: "A", answer: "disregard", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "B", answer: "refute", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
            { option: "C", answer: "acknowledge", chinese_answer: "承认", chinese_romanization: "chéngrèn" },
            { option: "D", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'acknowledge' means accept or admit the existence or truth of." +
            "<br><br>" +
            "(A) 'disregard' means pay no attention to; ignore." +
            "<br><br>" +
            "(B) 'refute' means prove (a statement or theory) to be wrong or false." +
            "<br><br>" +
            "(D) 'deny' means state that one refuses to admit the truth or existence of.",
        chinese_explanation: "(C) '承认' 一词意味着接受或承认存在或真实性。" +
            "<br><br>" +
            "(A) '忽略' 意味着不注意；忽视。" +
            "<br><br>" +
            "(B) '反驳' 意味着证明（某一陈述或理论）是错误的。" +
            "<br><br>" +
            "(D) '否认' 意味着声明拒绝承认真实性或存在性。"
    },
    {
        id: 9,
        question: "After a week of heavy rain, the storm finally began to __________, giving the residents hope for a dry weekend.",
        chinese_question: "经过一周的暴雨，风暴终于开始__________，给居民带来了干燥周末的希望。",
        answers: [
            { option: "A", answer: "intensify", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "B", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
            { option: "C", answer: "escalate", chinese_answer: "升级", chinese_romanization: "shēngjí" },
            { option: "D", answer: "abate", chinese_answer: "减弱", chinese_romanization: "jiǎnruò" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'abate' means to become less intense or widespread." +
            "<br><br>" +
            "(A) 'intensify' means to become or make more intense." +
            "<br><br>" +
            "(B) 'increase' means to become or make greater in size, amount, intensity, or degree." +
            "<br><br>" +
            "(C) 'escalate' means to increase rapidly.",
        chinese_explanation: "(D) '减弱' 一词意味着变得不那么强烈或广泛。" +
            "<br><br>" +
            "(A) '加剧' 意味着变得或使更强烈。" +
            "<br><br>" +
            "(B) '增加' 意味着变得或使在大小、数量、强度或程度上更大。" +
            "<br><br>" +
            "(C) '升级' 意味着迅速增加。"
    },
    {
        id: 10,
        question: "The two siblings often __________ over who gets to use the computer first, arguing loudly and trying to convince their parents to side with them.",
        chinese_question: "两兄弟经常为谁先用电脑而 __________，大声争吵，并试图说服父母支持他们。",
        answers: [
            { option: "A", answer: "wrangle", chinese_answer: "争吵", chinese_romanization: "zhēngchǎo" },
            { option: "B", answer: "agree", chinese_answer: "同意", chinese_romanization: "tóngyì" },
            { option: "C", answer: "cooperate", chinese_answer: "合作", chinese_romanization: "hézuò" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'wrangle' means to have a long, complicated dispute or argument." +
            "<br><br>" +
            "(B) 'agree' means to have the same opinion about something; concur." +
            "<br><br>" +
            "(C) 'cooperate' means work jointly towards the same end." +
            "<br><br>" +
            "(D) 'support' means bear all or part of the weight of; hold up.",
        chinese_explanation: "(A) '争吵' 意味着进行长时间的、复杂的争论或争吵。" +
            "<br><br>" +
            "(B) '同意' 意味着对某事持相同意见；一致。" +
            "<br><br>" +
            "(C) '合作' 意味着共同朝着同一个目标努力。" +
            "<br><br>" +
            "(D) '支持' 意味着承担全部或部分重量；支撑。"
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
