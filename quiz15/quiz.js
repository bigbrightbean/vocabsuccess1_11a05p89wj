// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ nature made it difficult for him to keep up with deadlines and responsibilities.",
        chinese_question: "他的 __________ 性格使他难以跟上截止日期和责任。",
        answers: [
            { option: "A", answer: "diligent", chinese_answer: "勤奋", chinese_romanization: "qínfèn" },
            { option: "B", answer: "industrious", chinese_answer: "勤劳", chinese_romanization: "qínláo" },
            { option: "C", answer: "slothful", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" },
            { option: "D", answer: "energetic", chinese_answer: "精力充沛", chinese_romanization: "jīnglì chōngpèi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'slothful' means lazy." +
            "<br><br>" +
            "(A) 'diligent' means having or showing care and conscientiousness in one's work or duties." +
            "<br><br>" +
            "(B) 'industrious' means diligent and hard-working." +
            "<br><br>" +
            "(D) 'energetic' means showing or involving great activity or vitality.",
        chinese_explanation: "(C) '懒惰' 一词意味着懒惰。" +
            "<br><br>" +
            "(A) '勤奋' 意味着在工作或职责上表现出关心和尽责。" +
            "<br><br>" +
            "(B) '勤劳' 意味着勤奋和努力工作。" +
            "<br><br>" +
            "(D) '精力充沛' 意味着表现出或涉及极大的活动或活力。"
    },
    {
        id: 2,
        question: "The __________ child refused to follow the teacher's instructions, standing with his arms crossed.",
        chinese_question: "那个 __________ 的孩子拒绝遵循老师的指示，双臂交叉站立。",
        answers: [
            { option: "A", answer: "obedient", chinese_answer: "顺从", chinese_romanization: "shùncóng" },
            { option: "B", answer: "compliant", chinese_answer: "服从", chinese_romanization: "fúcóng" },
            { option: "C", answer: "defiant", chinese_answer: "反抗", chinese_romanization: "fǎnkàng" },
            { option: "D", answer: "cooperative", chinese_answer: "合作", chinese_romanization: "hézuò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'defiant' means showing defiance; boldly resistant or challenging." +
            "<br><br>" +
            "(A) 'obedient' means complying or willing to comply with orders or requests; submissive to another's authority." +
            "<br><br>" +
            "(B) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree." +
            "<br><br>" +
            "(D) 'cooperative' means involving mutual assistance in working toward a common goal.",
        chinese_explanation: "(C) '反抗' 意味着表现出反抗；大胆地抵抗或挑战。" +
            "<br><br>" +
            "(A) '顺从' 意味着遵守或愿意遵守命令或要求；服从他人的权威。" +
            "<br><br>" +
            "(B) '服从' 意味着倾向于同意他人或遵守规则，尤其是过度程度。" +
            "<br><br>" +
            "(D) '合作' 意味着在朝着共同目标努力时提供相互帮助。"
    },
    {
        id: 3,
        question: "The athlete's __________ determination to win the race was evident in every stride he took.",
        chinese_question: "这位运动员 __________ 的决心在他每一步都显而易见。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "虚弱", chinese_romanization: "xūruò" },
            { option: "B", answer: "tenacious", chinese_answer: "顽强", chinese_romanization: "wánqiáng" },
            { option: "C", answer: "lackadaisical", chinese_answer: "无精打采的", chinese_romanization: "wújīngdǎcǎi de" },
            { option: "D", answer: "uninterested", chinese_answer: "不感兴趣", chinese_romanization: "bù gǎn xìngqù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tenacious' means tending to keep a firm hold of something; clinging or adhering closely. It means very determined and not giving up easily." +
            "<br><br>" +
            "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(C) 'lackadaisical' means lacking enthusiasm and determination; carelessly lazy." +
            "<br><br>" +
            "(D) 'uninterested' means not interested; indifferent or bored.",
        chinese_explanation: "(B) '顽强' 一词意味着倾向于牢牢抓住某物；紧紧依附。 词意味着非常坚定，不容易放弃。" +
            "<br><br>" +
            "(A) '虚弱' 意味着缺乏执行体力任务的力量；缺乏体力和能量。" +
            "<br><br>" +
            "(C) '无精打采的' 意味着缺乏热情和决心；懒散地懒惰。" +
            "<br><br>" +
            "(D) '不感兴趣' 意味着不感兴趣；冷漠或厌倦。"
    },
    {
        id: 4,
        question: "She is considered the __________ expert in her field, widely respected for her knowledge and contributions.",
        chinese_question: "她被认为是她领域中的 __________ 专家，因其知识和贡献而广受尊敬。",
        answers: [
            { option: "A", answer: "unknown", chinese_answer: "不知名的", chinese_romanization: "bù zhīmíng de" },
            { option: "B", answer: "mediocre", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "preeminent", chinese_answer: "杰出的", chinese_romanization: "jiéchū de" },
            { option: "D", answer: "average", chinese_answer: "一般的", chinese_romanization: "yībān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'preeminent' means surpassing all others; very distinguished in some way annd outstanding." +
            "<br><br>" +
            "(A) 'unknown' means not known or familiar." +
            "<br><br>" +
            "(B) 'mediocre' means of only moderate quality; not very good." +
            "<br><br>" +
            "(D) 'average' means constituting the result obtained by adding together several quantities and then dividing this total by the number of quantities.",
        chinese_explanation: "(C) '杰出的' 意味着超越所有其他的；在某种程度上非常杰出的。" +
            "<br><br>" +
            "(A) '不知名的' 意味着不为人知或不熟悉的。" +
            "<br><br>" +
            "(B) '普通的' 意味着质量一般；不太好的。" +
            "<br><br>" +
            "(D) '一般的' 意味着通过将几种数量相加然后将此总数除以数量的总数而得出的结果。"
    },
    {
        id: 5,
        question: "The moon was __________ in the night sky, casting a gentle glow over the landscape.",
        chinese_question: "月亮在夜空中 __________，为景观洒下柔和的光辉。",
        answers: [
            { option: "A", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "B", answer: "dark", chinese_answer: "黑暗", chinese_romanization: "hēi'àn" },
            { option: "C", answer: "luminous", chinese_answer: "明亮", chinese_romanization: "míngliàng" },
            { option: "D", answer: "dull", chinese_answer: "暗淡", chinese_romanization: "àndàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'luminous' means full of or shedding light; bright or shining, especially in the dark." +
            "<br><br>" +
            "(A) 'fleeting' means lasting for a very short time." +
            "<br><br>" +
            "(B) 'dark' means with little or no light." +
            "<br><br>" +
            "(D) 'dull' means lacking brightness, vividness, or sheen.",
        chinese_explanation: "(C) '明亮' 意味着充满或散发光；明亮或闪耀，特别是在黑暗中。" +
            "<br><br>" +
            "(A) '短暂的' 意味着持续时间非常短暂。" +
            "<br><br>" +
            "(B) '黑暗' 意味着几乎没有光或没有光。" +
            "<br><br>" +
            "(D) '暗淡' 意味着缺乏亮度、鲜艳度或光泽。"
    },
    {
        id: 6,
        question: "The land was __________ with no vegetation or water sources, making it impossible to sustain life.",
        chinese_question: "这片土地 __________并没有植被或水源，使得无法维持生命。",
        answers: [
            { option: "A", answer: "fertile", chinese_answer: "肥沃的", chinese_romanization: "féiwò de" },
            { option: "B", answer: "lush", chinese_answer: "茂盛的", chinese_romanization: "màoshèng de" },
            { option: "C", answer: "barren", chinese_answer: "贫瘠的", chinese_romanization: "pínjí de" },
            { option: "D", answer: "productive", chinese_answer: "高产的", chinese_romanization: "gāochǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'barren' means too empty or poor to grow plants or crops." +
            "<br><br>" +
            "(A) 'fertile' means soil or land that can grow lots of plants or crops." +
            "<br><br>" +
            "(B) 'lush' means plants growing thick and healthy." +
            "<br><br>" +
            "(D) 'productive' means making a lot of things or crops.",
        chinese_explanation: "(C) '贫瘠的' 意思是太空或贫穷，不能种植植物或庄稼。" +
            "<br><br>" +
            "(A) '肥沃' 意味着可以种植许多植物或庄稼的土壤或土地。" +
            "<br><br>" +
            "(B) '茂盛' 意味着植物长得又密又健康。" +
            "<br><br>" +
            "(D) '多产' 意味着生产大量物品或庄稼。"
    },
    {
        id: 7,
        question: "The actress wore a __________ gown that sparkled under the stage lights, capturing everyone's attention.",
        chinese_question: "这位女演员穿着一件 __________ 的礼服，在舞台灯光下闪闪发光，吸引了所有人的注意。",
        answers: [
            { option: "A", answer: "dazzling", chinese_answer: "耀眼的", chinese_romanization: "yàoyǎn de" },
            { option: "B", answer: "plain", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" },
            { option: "C", answer: "drab", chinese_answer: "单调的", chinese_romanization: "dāndiào de" },
            { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dazzling' means extremely bright, especially so as to blind the eyes temporarily." +
            "<br><br>" +
            "(B) 'plain' means not decorated or elaborate; simple or ordinary in character." +
            "<br><br>" +
            "(C) 'drab' means lacking brightness or interest; drearily dull." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(A) '耀眼的' 意味着非常明亮，尤其是使眼睛暂时失明。" +
            "<br><br>" +
            "(B) '朴素的' 意味着不装饰或不复杂的；性格简单或普通的。" +
            "<br><br>" +
            "(C) '单调的' 意味着缺乏亮度或兴趣的；沉闷的。" +
            "<br><br>" +
            "(D) '普通的' 意味着没有特别或独特的特征；正常的。"
    },
    {
        id: 8,
        question: "The company announced a __________ expansion into international markets, including opening offices in five new countries and hiring hundreds of new employees.",
        chinese_question: "公司宣布了 __________ 的国际市场扩展计划，包括在五个新国家开设办事处并雇用数百名新员工。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "次要", chinese_romanization: "cìyào" },
            { option: "B", answer: "small", chinese_answer: "小", chinese_romanization: "xiǎo" },
            { option: "C", answer: "trivial", chinese_answer: "琐碎", chinese_romanization: "suǒsuì" },
            { option: "D", answer: "major", chinese_answer: "重大", chinese_romanization: "zhòngdà" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'major' means important, serious, or significant." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(B) 'small' means of a size that is less than normal or usual." +
            "<br><br>" +
            "(C) 'trivial' means of little value or importance.",
        chinese_explanation: "(D) '重大' 意味着重要、严肃或显著的。" +
            "<br><br>" +
            "(A) '次要' 意味着在重要性、严肃性或显著性方面较低。" +
            "<br><br>" +
            "(B) '小' 意味着尺寸小于正常或通常的。" +
            "<br><br>" +
            "(C) '琐碎' 意味着价值或重要性很小。"
    },
    {
        id: 9,
        question: "Her perfume had a __________ fragrance, not overpowering but rather gently lingering in the air.",
        chinese_question: "她的香水有一种 __________ 的香气，不是压倒性的，而是轻轻地在空气中徘徊。",
        answers: [
            { option: "A", answer: "pungent", chinese_answer: "刺激的", chinese_romanization: "cìjī de" },
            { option: "B", answer: "subtle", chinese_answer: "微妙", chinese_romanization: "wēimiào" },
            { option: "C", answer: "intense", chinese_answer: "强烈", chinese_romanization: "qiángliè" },
            { option: "D", answer: "bold", chinese_answer: "浓烈", chinese_romanization: "nóngliè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'subtle' means gentle and not obvious; it's delicate and hard to notice right away." +
            "<br><br>" +
            "(A) 'pungent' means having a strong, sharp smell or taste." +
            "<br><br>" +
            "(C) 'intense' means very strong or extreme in force or degree." +
            "<br><br>" +
            "(D) 'bold' in the context of fragrance refers to a strong and assertive scent.",
        chinese_explanation: "(B) '微妙' 的意思是柔和而不明显；它是精致的，不容易立即注意到。" +
            "<br><br>" +
            "(A) '刺激的' 意味着有强烈而尖锐的气味或味道。" +
            "<br><br>" +
            "(C) '强烈' 意味着在力量或程度上非常强或极端。" +
            "<br><br>" +
            "(D) '浓烈' 在香水中的意思是一种浓烈而坚定的气味。"
    },
    {
        id: 10,
        question: "In a __________ scenario, what would you do if you won the lottery?",
        chinese_question: "在 __________ 情景中，如果你中彩票了，你会怎么做？",
        answers: [
            { option: "A", answer: "real", chinese_answer: "真实的", chinese_romanization: "zhēnshí de" },
            { option: "B", answer: "actual", chinese_answer: "实际的", chinese_romanization: "shíjì de" },
            { option: "C", answer: "hypothetical", chinese_answer: "假设的", chinese_romanization: "jiǎshè de" },
            { option: "D", answer: "factual", chinese_answer: "实际情况的", chinese_romanization: "shíjì qíngkuàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hypothetical' means imagined or suggested as a possibility, not necessarily true or real." +
            "<br><br>" +
            "(A) 'real' means actually existing or happening as a fact, not imagined." +
            "<br><br>" +
            "(B) 'actual' means existing in fact, rather than what was intended or expected." +
            "<br><br>" +
            "(D) 'factual' means concerned with what is true or actual, based on facts.",
        chinese_explanation: "(C) '假设的' 意味着想象或建议作为可能性，不一定是真实的或实际的。" +
            "<br><br>" +
            "(A) '真实的' 意味着实际存在或作为事实发生的，不是想象的。" +
            "<br><br>" +
            "(B) '实际的' 意味着实际存在；通常与预期或预期相对比。" +
            "<br><br>" +
            "(D) '实际情况的' 意味着关注真实或实际情况，基于事实。"
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
