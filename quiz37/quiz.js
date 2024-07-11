// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The long-term exposure to high levels of noise in the industrial area proved to be __________, leading to significant hearing loss and increased stress among the workers.",
        chinese_question: "长期暴露在工业区的高噪音环境中被证明是 __________ 的，导致工人显著的听力损失和压力增加。",
        answers: [
            { option: "A", answer: "beneficial", chinese_answer: "有益的", chinese_romanization: "yǒuyì de" },
            { option: "B", answer: "harmless", chinese_answer: "无害的", chinese_romanization: "wúhài de" },
            { option: "C", answer: "neutral", chinese_answer: "中性的", chinese_romanization: "zhōngxìng de" },
            { option: "D", answer: "detrimental", chinese_answer: "有害的", chinese_romanization: "yǒuhài de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'detrimental' means tending to cause harm." +
            "<br><br>" +
            "(A) 'beneficial' means resulting in good; favorable or advantageous." +
            "<br><br>" +
            "(B) 'harmless' means not likely to cause harm." +
            "<br><br>" +
            "(C) 'neutral' means not supporting or helping either side in a conflict or disagreement.",
        chinese_explanation: "(D) '有害的' 意味着容易造成伤害。" +
            "<br><br>" +
            "(A) '有益的' 意味着产生好的结果；有利或有益的。" +
            "<br><br>" +
            "(B) '无害的' 意味着不太可能造成伤害。" +
            "<br><br>" +
            "(C) '中性的' 意味着在冲突或分歧中不支持或帮助任何一方。"
    },
    {
        id: 2,
        question: "After hiking all day, we were __________ and devoured our dinner in minutes.",
        chinese_question: "在一整天的徒步旅行后，我们__________，几分钟内就把晚餐吃光了。",
        answers: [
            { option: "A", answer: "full", chinese_answer: "饱的", chinese_romanization: "bǎo de" },
            { option: "B", answer: "ravenous", chinese_answer: "饥饿的", chinese_romanization: "jī'è de" },
            { option: "C", answer: "satisfied", chinese_answer: "满足的", chinese_romanization: "mǎnzú de" },
            { option: "D", answer: "content", chinese_answer: "满意的", chinese_romanization: "mǎnyì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ravenous' means extremely hungry." +
            "<br><br>" +
            "(A) 'full' means containing or holding as much or as many as possible." +
            "<br><br>" +
            "(C) 'satisfied' means contented; pleased." +
            "<br><br>" +
            "(D) 'content' means in a state of peaceful happiness.",
        chinese_explanation: "(B) '饥饿的'一词意味着非常饿的。" +
            "<br><br>" +
            "(A) '饱的' 意味着装满或尽可能多地容纳的。" +
            "<br><br>" +
            "(C) '满足的' 意味着满足的；愉悦的。" +
            "<br><br>" +
            "(D) '满意的' 意味着处于和平的幸福状态。"
    },
    {
        id: 3,
        question: "The __________ birds travel thousands of miles every year to reach their breeding grounds.",
        chinese_question: "这些__________的鸟类每年都要飞行数千英里到达繁殖地。",
        answers: [
            { option: "A", answer: "stationary", chinese_answer: "固定的", chinese_romanization: "gùdìng de" },
            { option: "B", answer: "resident", chinese_answer: "居住的", chinese_romanization: "jūzhù de" },
            { option: "C", answer: "migratory", chinese_answer: "迁徙的", chinese_romanization: "qiānxǐ de" },
            { option: "D", answer: "sedentary", chinese_answer: "久坐的", chinese_romanization: "jiǔzuò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'migratory' means denoting an animal that migrates." +
            "<br><br>" +
            "(A) 'stationary' means not moving or not intended to be moved." +
            "<br><br>" +
            "(B) 'resident' means living somewhere on a long-term basis." +
            "<br><br>" +
            "(D) 'sedentary' means tending to spend much time seated; somewhat inactive.",
        chinese_explanation: "(C) '迁徙的'一词意味着指迁徙的动物。" +
            "<br><br>" +
            "(A) '固定的' 意味着不移动的或不打算被移动的。" +
            "<br><br>" +
            "(B) '居住的' 意味着长期住在某地的。" +
            "<br><br>" +
            "(D) '久坐的' 意味着倾向于花很多时间坐着的；有些不活跃的。"
    },
    {
        id: 4,
        question: "The conference was __________, welcoming participants from all over the world regardless of their background.",
        chinese_question: "这次会议是__________的，欢迎来自世界各地的参与者，不论他们的背景如何。",
        answers: [
            { option: "A", answer: "exclusive", chinese_answer: "排外的", chinese_romanization: "páiwài de" },
            { option: "B", answer: "narrow", chinese_answer: "狭窄的", chinese_romanization: "xiázhǎi de" },
            { option: "C", answer: "inclusive", chinese_answer: "包容的", chinese_romanization: "bāoróng de" },
            { option: "D", answer: "restrictive", chinese_answer: "限制性的", chinese_romanization: "xiànzhì xìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'inclusive' means including all the services or items normally expected or required." +
            "<br><br>" +
            "(A) 'exclusive' means excluding or not admitting other things." +
            "<br><br>" +
            "(B) 'narrow' means limited in extent, amount, or scope." +
            "<br><br>" +
            "(D) 'restrictive' means imposing restrictions or limitations on someone's activities or freedom.",
        chinese_explanation: "(C) '包容的'一词意味着包括所有正常预期或需要的服务或项目。" +
            "<br><br>" +
            "(A) '排外的' 意味着排除或不承认其他事物的。" +
            "<br><br>" +
            "(B) '狭窄的' 意味着在范围、数量或程度上有限的。" +
            "<br><br>" +
            "(D) '限制性的' 意味着对某人的活动或自由施加限制的。"
    },
    {
        id: 5,
        question: "The __________ skyscraper towered over the city, making all other buildings look tiny in comparison.",
        chinese_question: "这座 __________ 的摩天大楼在城市上空耸立，使所有其他建筑显得渺小。",
        answers: [
            { option: "A", answer: "humongous", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
            { option: "B", answer: "tiny", chinese_answer: "微小的", chinese_romanization: "wēixiǎo de" },
            { option: "C", answer: "average", chinese_answer: "平均的", chinese_romanization: "píngjūn de" },
            { option: "D", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'humongous' means extremely large." +
            "<br><br>" +
            "(B) 'tiny' means very small." +
            "<br><br>" +
            "(C) 'average' means having qualities that are seen as typical." +
            "<br><br>" +
            "(D) 'modest' means relatively moderate, limited, or small.",
        chinese_explanation: "(A) '巨大的' 意味着非常大的。" +
            "<br><br>" +
            "(B) '微小的' 意味着非常小的。" +
            "<br><br>" +
            "(C) '平均的' 意味着具有典型品质的。" +
            "<br><br>" +
            "(D) '谦虚的' 意味着相对适中的、有限的或小的。"
    },
    {
        id: 6,
        question: "She felt __________ to have found her lost wallet on the street.",
        chinese_question: "她感到很 __________ 能在街上找到她丢失的钱包。",
        answers: [
            { option: "A", answer: "fortunate", chinese_answer: "幸运的", chinese_romanization: "xìngyùn de" },
            { option: "B", answer: "unlucky", chinese_answer: "不幸的", chinese_romanization: "bùxìng de" },
            { option: "C", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "D", answer: "hopeless", chinese_answer: "绝望的", chinese_romanization: "juéwàng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fortunate' means favored by or involving good luck or fortune; lucky." +
            "<br><br>" +
            "(B) 'unlucky' means having or bringing misfortune." +
            "<br><br>" +
            "(C) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(D) 'hopeless' means feeling or causing despair about something.",
        chinese_explanation: "(A) '幸运的' 意味着被好运或财富所青睐；幸运的。" +
            "<br><br>" +
            "(B) '不幸的' 意味着有或带来不幸。" +
            "<br><br>" +
            "(C) '普通的' 意味着没有特别或独特的特征；正常的。" +
            "<br><br>" +
            "(D) '绝望的' 意味着对某事感到绝望或引起绝望的。"
    },
    {
        id: 7,
        question: "His __________ disregard for the rules was evident when he parked in the handicapped spot without a permit.",
        chinese_question: "他对规则的__________无视显而易见，当他没有许可证就停在残疾人车位上时。",
        answers: [
            { option: "A", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wēimiào de" },
            { option: "B", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
            { option: "C", answer: "blatant", chinese_answer: "明目张胆的", chinese_romanization: "míngmùzhāngdǎn de" },
            { option: "D", answer: "discreet", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'blatant' means (of bad behavior) done openly and unashamedly." +
            "<br><br>" +
            "(A) 'subtle' means (especially of a change or distinction) so delicate or precise as to be difficult to analyze or describe." +
            "<br><br>" +
            "(B) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(D) 'discreet' means careful and circumspect in one's speech or actions, especially in order to avoid causing offense or to gain an advantage.",
        chinese_explanation: "(C) '明目张胆的'一词意味着（不良行为）公开且无羞耻地进行。" +
            "<br><br>" +
            "(A) '微妙的' 意味着（尤其是变化或区别）如此精致或准确，以至于难以分析或描述。" +
            "<br><br>" +
            "(B) '隐藏的' 意味着隐藏起来的；隐藏的。" +
            "<br><br>" +
            "(D) '谨慎的' 意味着在言语或行动中小心谨慎，尤其是为了避免冒犯或获取优势。"
    },
    {
        id: 8,
        question: "The scientist proposed a __________ new theory that challenged established beliefs.",
        chinese_question: "这位科学家提出了一个__________的新理论，挑战了现有的信仰。",
        answers: [
            { option: "A", answer: "radical", chinese_answer: "激进的", chinese_romanization: "jījìn de" },
            { option: "B", answer: "conservative", chinese_answer: "保守的", chinese_romanization: "bǎoshǒu de" },
            { option: "C", answer: "traditional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
            { option: "D", answer: "conventional", chinese_answer: "惯例的", chinese_romanization: "guànlì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'radical' means relating to or affecting the fundamental nature of something; far-reaching or thorough." +
            "<br><br>" +
            "(B) 'conservative' means holding to traditional attitudes and values and cautious about change or innovation." +
            "<br><br>" +
            "(C) 'traditional' means existing in or as part of a tradition; long-established." +
            "<br><br>" +
            "(D) 'conventional' means based on or in accordance with what is generally done or believed.",
        chinese_explanation: "(A) '激进的' 一词意味着涉及或影响事物的基本性质的；深远的或彻底的。" +
            "<br><br>" +
            "(B) '保守的' 意味着坚持传统态度和价值观并对变化或创新持谨慎态度的。" +
            "<br><br>" +
            "(C) '传统的' 意味着作为传统的一部分存在的；长期存在的。" +
            "<br><br>" +
            "(D) '惯例的' 意味着基于或符合通常所做或所信的。"
    },
    {
        id: 9,
        question: "She was __________ in her research, leaving no detail unchecked.",
        chinese_question: "她的研究非常__________，没有一丝细节被忽略。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "B", answer: "sloppy", chinese_answer: "草率的", chinese_romanization: "cǎoshuài de" },
            { option: "C", answer: "meticulous", chinese_answer: "一丝不苟的", chinese_romanization: "yīsībùgǒu de" },
            { option: "D", answer: "haphazard", chinese_answer: "随意的", chinese_romanization: "suíyì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'meticulous' means showing great attention to detail; very careful and precise." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(B) 'sloppy' means careless and unsystematic; excessively casual." +
            "<br><br>" +
            "(D) 'haphazard' means lacking any obvious principle of organization.",
        chinese_explanation: "(C) '一丝不苟的'一词意味着对细节给予高度关注的；非常仔细和精确的。" +
            "<br><br>" +
            "(A) '粗心的' 意味着没有给予足够的关注或考虑以避免伤害或错误的。" +
            "<br><br>" +
            "(B) '草率的' 意味着粗心和没有系统的；过于随意的。" +
            "<br><br>" +
            "(D) '随意的' 意味着缺乏任何明显的组织原则的。"
    },
    {
        id: 10,
        question: "The __________ arrangement of the furniture made the room look cluttered and unorganized.",
        chinese_question: "家具的__________摆放使房间看起来杂乱无章。",
        answers: [
            { option: "A", answer: "orderly", chinese_answer: "有序的", chinese_romanization: "yǒuxù de" },
            { option: "B", answer: "systematic", chinese_answer: "系统的", chinese_romanization: "xìtǒng de" },
            { option: "C", answer: "haphazard", chinese_answer: "杂乱的", chinese_romanization: "záluàn de" },
            { option: "D", answer: "methodical", chinese_answer: "有条理的", chinese_romanization: "yǒu tiáolǐ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'haphazard' means lacking any obvious principle of organization." +
            "<br><br>" +
            "(A) 'orderly' means neatly and methodically arranged." +
            "<br><br>" +
            "(B) 'systematic' means done or acting according to a fixed plan or system; methodical." +
            "<br><br>" +
            "(D) 'methodical' means done according to a systematic or established form of procedure.",
        chinese_explanation: "(C) '杂乱的'一词意味着缺乏任何明显的组织原则。" +
            "<br><br>" +
            "(A) '有序的' 意味着整齐和有条理地排列的。" +
            "<br><br>" +
            "(B) '系统的' 意味着按照固定计划或系统进行的；有条理的。" +
            "<br><br>" +
            "(D) '有条理的' 意味着按照系统或既定程序进行的。"
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
