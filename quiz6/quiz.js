// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The new energy drink was so __________ that it boosted my energy levels almost instantly.",
        chinese_question: "这种新的能量饮料如此 __________，几乎立即提高了我的能量水平。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "B", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "C", answer: "potent", chinese_answer: "强效的", chinese_romanization: "qiángxiào de" },
            { option: "D", answer: "ineffective", chinese_answer: "无效的", chinese_romanization: "wúxiào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'potent' means having great power, influence, or effect." +
            "<br><br>" +
            "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(B) 'mild' means gentle and not easily provoked." +
            "<br><br>" +
            "(D) 'ineffective' means not producing any significant or desired effect.",
        chinese_explanation: "(C) '强效的' 意味着具有强大力量、影响力或效果的。" +
            "<br><br>" +
            "(A) '虚弱的' 意味着缺乏执行体力任务的力量；缺乏体力和精力的。" +
            "<br><br>" +
            "(B) '温和的' 意味着温柔的，不容易激怒的。" +
            "<br><br>" +
            "(D) '无效的' 意味着不产生任何显著或预期效果的。"
    },
    {
        id: 2,
        question: "He gave a __________ explanation for his actions, which made everyone suspicious.",
        chinese_question: "他对自己的行为给出了一个__________的解释，这让每个人都产生了怀疑。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清楚的", chinese_romanization: "qīngchǔ de" },
            { option: "B", answer: "straightforward", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "C", answer: "dubious", chinese_answer: "可疑的", chinese_romanization: "kěyí de" },
            { option: "D", answer: "convincing", chinese_answer: "令人信服的", chinese_romanization: "lìng rén xìnfú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dubious' means not sure or feeling doubt about something. When something is dubious, it seems uncertain, and you may think it is not true or not to be trusted." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'convincing' means capable of causing someone to believe that something is true or real.",
        chinese_explanation: "(C) '可疑的'一词意味着对某事不确定或感到怀疑。当某事是可疑的，它看起来不确定，你可能认为它不是真的或不值得信任。" +
            "<br><br>" +
            "(A) '清楚的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(B) '简单的' 意味着不复杂且容易做或理解的。" +
            "<br><br>" +
            "(D) '令人信服的' 意味着能够让人相信某事是真的或真实的。"
    },
    {
        id: 3,
        question: "Despite numerous setbacks, her __________ spirit kept her pushing forward towards her goals.",
        chinese_question: "尽管经历了无数挫折，她 __________ 的精神让她继续朝着目标前进。",
        answers: [
            { option: "A", answer: "indomitable", chinese_answer: "不屈不挠的", chinese_romanization: "bùqū bùnáo de" },
            { option: "B", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "C", answer: "fragile", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
            { option: "D", answer: "timid", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'indomitable' means impossible to subdue or defeat. It describes someone who is very strong, brave, and determined, and never gives up, no matter how tough things get." +
            "<br><br>" +
            "(B) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(C) 'fragile' means easily broken or damaged." +
            "<br><br>" +
            "(D) 'timid' means showing a lack of courage or confidence; easily frightened.",
        chinese_explanation: "(A) '不屈不挠的' 意味着无法被征服或击败的。它形容一个人非常坚强、勇敢和坚定，无论情况多么艰难，都永不放弃。" +
            "<br><br>" +
            "(B) '虚弱的' 意味着缺乏执行体力要求任务的能力；缺乏体力和精力。" +
            "<br><br>" +
            "(C) '脆弱的' 意味着容易破碎或损坏的。" +
            "<br><br>" +
            "(D) '胆小的' 意味着表现出缺乏勇气或信心；容易受惊的。"
    },
    {
        id: 4,
        question: "The teacher was accused of being __________, favoring certain students over others.",
        chinese_question: "这位老师被指控__________，偏袒某些学生而非其他人。",
        answers: [
            { option: "A", answer: "unbiased", chinese_answer: "公正的", chinese_romanization: "gōngzhèng de" },
            { option: "B", answer: "fair", chinese_answer: "公平的", chinese_romanization: "gōngpíng de" },
            { option: "C", answer: "impartial", chinese_answer: "无偏见的", chinese_romanization: "wú piānjiàn de" },
            { option: "D", answer: "partial", chinese_answer: "有偏见的", chinese_romanization: "yǒu piānjiàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'partial' means favouring one side in a dispute above the other; biased." +
            "<br><br>" +
            "(A) 'unbiased' means showing no prejudice for or against something; impartial." +
            "<br><br>" +
            "(B) 'fair' means in accordance with the rules or standards; legitimate." +
            "<br><br>" +
            "(C) 'impartial' means treating all rivals or disputants equally; fair and just.",
        chinese_explanation: "(D) '有偏见的'一词意味着在争端中偏袒一方；有偏见的。" +
            "<br><br>" +
            "(A) '公正的' 意味着对某事没有偏见的；公正的。" +
            "<br><br>" +
            "(B) '公平的' 意味着按照规则或标准；合法的。" +
            "<br><br>" +
            "(C) '无偏见的' 意味着平等对待所有对手或争论者的；公正的。"
    },
    {
        id: 5,
        question: "The long, __________ lecture put half the class to sleep.",
        chinese_question: "冗长、 __________ 的讲座让半个班级都睡着了。",
        answers: [
            { option: "A", answer: "tedious", chinese_answer: "单调乏味的", chinese_romanization: "dāndiào fáwèi de" },
            { option: "B", answer: "exciting", chinese_answer: "激动人心的", chinese_romanization: "jīdòng rénxīn de" },
            { option: "C", answer: "engaging", chinese_answer: "吸引人的", chinese_romanization: "xīyǐn rén de" },
            { option: "D", answer: "thrilling", chinese_answer: "刺激的", chinese_romanization: "cìjī de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'tedious' means too long, slow, or dull; tiresome or monotonous." +
            "<br><br>" +
            "(B) 'exciting' means causing great enthusiasm and eagerness." +
            "<br><br>" +
            "(C) 'engaging' means charming and attractive." +
            "<br><br>" +
            "(D) 'thrilling' means causing excitement and pleasure.",
        chinese_explanation: "(A) '单调乏味的' 意味着太长、缓慢或乏味；令人厌倦或单调的。" +
            "<br><br>" +
            "(B) '激动人心的' 意味着引起极大热情和渴望的。" +
            "<br><br>" +
            "(C) '吸引人的' 意味着迷人和有吸引力的。" +
            "<br><br>" +
            "(D) '刺激的' 意味着引起兴奋和愉快的。"
    },
    {
        id: 6,
        question: "Her __________ performance earned her the award for best actress, setting a standard for her peers.",
        chinese_question: "她的 __________ 表演为她赢得了最佳女演员奖，为同行树立了榜样。",
        answers: [
            { option: "A", answer: "mediocre", chinese_answer: "平庸的", chinese_romanization: "píngyōng de" },
            { option: "B", answer: "exemplary", chinese_answer: "模范的", chinese_romanization: "mófàn de" },
            { option: "C", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "D", answer: "average", chinese_answer: "平均的", chinese_romanization: "píngjūn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'exemplary' means serving as a desirable model; representing the best of its kind." +
            "<br><br>" +
            "(A) 'mediocre' means of only moderate quality; not very good." +
            "<br><br>" +
            "(C) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(D) 'average' means achieving or reaching a standard or level considered to be typical or usual.",
        chinese_explanation: "(B) '模范的' 一词意味着作为一个理想的模型；代表其种类中最好的。" +
            "<br><br>" +
            "(A) '平庸的' 意味着质量中等的；不太好的。" +
            "<br><br>" +
            "(C) '普通的' 意味着没有特殊或独特的特点；正常的。" +
            "<br><br>" +
            "(D) '平均的' 意味着达到或达到被认为是典型或通常的标准或水平的。"
    },
    {
        id: 7,
        question: "The __________ family had no money, no food, and no place to live, relying entirely on the kindness of strangers.",
        chinese_question: "这家 __________ 的家庭没有钱，没有食物，也没有住的地方，完全依靠陌生人的善意。",
        answers: [
            { option: "A", answer: "destitute", chinese_answer: "贫困的", chinese_romanization: "pínkùn de" },
            { option: "B", answer: "wealthy", chinese_answer: "富有的", chinese_romanization: "fùyǒu de" },
            { option: "C", answer: "comfortable", chinese_answer: "舒适的", chinese_romanization: "shūshì de" },
            { option: "D", answer: "affluent", chinese_answer: "富裕的", chinese_romanization: "fùyù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'destitute' means having no money, no food, and no home. It describes people who are extremely poor and do not have the basic things they need to live, like food and shelter." +
            "<br><br>" +
            "(B) 'wealthy' means having a great deal of money, resources, or assets." +
            "<br><br>" +
            "(C) 'comfortable' means providing physical ease and relaxation." +
            "<br><br>" +
            "(D) 'affluent' means having a great deal of money; wealthy.",
        chinese_explanation: "(A) '贫困的' 意味着没有钱，没有食物，没有住所。它描述的是极度贫困的人，他们没有生活所需的基本物品，比如食物和住所。" +
            "<br><br>" +
            "(B) '富有的' 意味着拥有大量金钱、资源或资产的。" +
            "<br><br>" +
            "(C) '舒适的' 意味着提供身体上的舒适和放松的。" +
            "<br><br>" +
            "(D) '富裕的' 意味着拥有大量金钱的；富有的。"
    },
    {
        id: 8,
        question: "The __________ climate of the island makes it a popular tourist destination, attracting visitors with its warm temperatures and lush vegetation.",
        chinese_question: "岛上的 __________ 气候使其成为受欢迎的旅游胜地，吸引游客以其温暖的气温和茂密的植被。",
        answers: [
            { option: "A", answer: "tropical", chinese_answer: "热带的", chinese_romanization: "rèdài de" },
            { option: "B", answer: "arctic", chinese_answer: "北极的", chinese_romanization: "běijí de" },
            { option: "C", answer: "temperate", chinese_answer: "温带的", chinese_romanization: "wēndài de" },
            { option: "D", answer: "desert", chinese_answer: "沙漠的", chinese_romanization: "shāmò de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'tropical' means related to the hot, rainy places near the equator." +
            "<br><br>" +
            "(B) 'arctic' means related to the cold, icy areas around the North Pole." +
            "<br><br>" +
            "(C) 'temperate' means related to places with mild, not too hot or too cold weather." +
            "<br><br>" +
            "(D) 'desert' means a very dry place where few plants and animals can live.",
        chinese_explanation: "(A) '热带的' 意味着与靠近赤道的炎热、多雨的地方有关。" +
            "<br><br>" +
            "(B) '北极的' 意味着与北极周围寒冷、冰冷的地区有关。" +
            "<br><br>" +
            "(C) '温带的' 意味着与气候温和、不太热也不太冷的地方有关。" +
            "<br><br>" +
            "(D) '沙漠的' 意味着一个非常干燥的地方，只有少数植物和动物可以生存。"
    },
    {
        id: 9,
        question: "The teacher was __________ with the students, allowing them extra time to complete their assignments and offering plenty of second chances.",
        chinese_question: "老师对学生很 __________，允许他们延长时间完成作业，并提供了很多第二次机会。",
        answers: [
            { option: "A", answer: "lenient", chinese_answer: "宽容的", chinese_romanization: "kuānróng de" },
            { option: "B", answer: "strict", chinese_answer: "严格的", chinese_romanization: "yángé de" },
            { option: "C", answer: "harsh", chinese_answer: "严厉的", chinese_romanization: "yánlì de" },
            { option: "D", answer: "severe", chinese_answer: "严重的", chinese_romanization: "yánzhòng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'lenient' means not as strict as expected and allowing more freedom. It describes someone who is forgiving and not harsh when enforcing rules, giving others a chance to improve." +
            "<br><br>" +
            "(B) 'strict' means demanding that rules concerning behavior are obeyed and observed." +
            "<br><br>" +
            "(C) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(D) 'severe' means very great; intense. It describes something that is extremely serious, strong, or harsh, and can cause significant difficulty or pain.",
        chinese_explanation: "(A) '宽容的' 意味着不像预期的那样严格，允许更多自由。它形容的是在执行规则时宽容且不苛刻的人，给予他人改进的机会。" +
            "<br><br>" +
            "(B) '严格的' 意味着要求遵守和观察行为规则的。" +
            "<br><br>" +
            "(C) '严厉的' 意味着对感官有不愉快的粗糙或刺耳的。" +
            "<br><br>" +
            "(D) '严重的' 意味着非常大的；强烈的。它形容的是极其严重、强烈或严厉的事物，可能会造成显著的困难或痛苦。"
    },
    {
        id: 10,
        question: "The student's __________ remarks during the lecture shocked everyone with his bold disrespect.",
        chinese_question: "学生在讲座中的__________言论以其大胆的无礼震惊了所有人。",
        answers: [
            { option: "A", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" },
            { option: "B", answer: "impudent", chinese_answer: "无礼的", chinese_romanization: "wúlǐ de" },
            { option: "C", answer: "polite", chinese_answer: "礼貌的", chinese_romanization: "lǐmào de" },
            { option: "D", answer: "courteous", chinese_answer: "有礼貌的", chinese_romanization: "yǒu lǐmào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impudent' means not showing due respect for another person; impertinent." +
            "<br><br>" +
            "(A) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(C) 'polite' means having or showing behavior that is respectful and considerate of other people." +
            "<br><br>" +
            "(D) 'courteous' means polite, respectful, or considerate in manner.",
        chinese_explanation: "(B) '无礼的'一词意味着没有对他人表现出应有的尊重；无礼的。" +
            "<br><br>" +
            "(A) '尊重的' 意味着感到或表现出敬意和尊重。" +
            "<br><br>" +
            "(C) '礼貌的' 意味着有或表现出对他人尊重和体贴的行为。" +
            "<br><br>" +
            "(D) '有礼貌的' 意味着在行为上有礼貌、尊重或体贴的。"
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
