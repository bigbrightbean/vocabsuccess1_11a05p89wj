// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Playing chess became more than a __________; it was his passion.",
        chinese_question: "下棋不仅仅是一种 __________；这是他的激情所在。",
        answers: [
            { option: "A", answer: "pastime", chinese_answer: "消遣", chinese_romanization: "xiāoqiǎn" },
            { option: "B", answer: "burden", chinese_answer: "负担", chinese_romanization: "fùdān" },
            { option: "C", answer: "trial", chinese_answer: "试验", chinese_romanization: "shìyàn" },
            { option: "D", answer: "hindrance", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'pastime' metaphorically means a pleasant way of passing the time." + 
            "<br><br>" + 
            "(B) 'burden' means a load, especially a heavy one." + 
            "<br><br>" + 
            "(C) 'trial' means a formal examination of evidence before a judge." + 
            "<br><br>" + 
            "(D) 'hindrance' means a thing that provides resistance, delay, or obstruction to something or someone.",
        chinese_explanation: "(A) '消遣' 比喻一种愉快的消磨时间的方式。" + 
            "<br><br>" + 
            "(B) '负担' 意味着负荷，尤其是重的负荷。" + 
            "<br><br>" + 
            "(C) '试验' 意味着在法官面前正式审查证据。" + 
            "<br><br>" + 
            "(D) '障碍' 意味着对某事或某人的阻力、延迟或阻碍。"
    },
    {
        id: 2,
        question: "His __________ for the new policies was evident in the way he spoke about them with contempt and lack of respect.",
        chinese_question: "他对新政策的 __________ 明显表现在他带着蔑视和缺乏尊重的言论中。",
        answers: [
            { option: "A", answer: "approval", chinese_answer: "赞同", chinese_romanization: "zàntóng" },
            { option: "B", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
            { option: "C", answer: "disdain", chinese_answer: "蔑视", chinese_romanization: "mièshì" },
            { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'disdain' means the feeling that someone or something is unworthy of one's consideration or respect; contempt." +
            "<br><br>" +
            "(A) 'approval' means the belief that someone or something is good or acceptable." +
            "<br><br>" +
            "(B) 'admiration' means respect and warm approval." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(C) '蔑视' 意思是认为某人或某物不值得考虑或尊重的感觉；轻视。" +
            "<br><br>" +
            "(A) '赞同' 意思是相信某人或某物是好的或可以接受的。" +
            "<br><br>" +
            "(B) '钦佩' 意思是尊重和热情的赞同。" +
            "<br><br>" +
            "(D) '冷漠' 意思是缺乏兴趣、关心或同情。"
    },
    {
        id: 3,
        question: "They found __________ under a large tree during the rainstorm.",
        chinese_question: "在暴风雨期间，他们在一棵大树下找到了 __________。",
        answers: [
            { option: "A", answer: "shelter", chinese_answer: "庇护", chinese_romanization: "bìhù" },
            { option: "B", answer: "exposure", chinese_answer: "暴露", chinese_romanization: "bàolù" },
            { option: "C", answer: "vulnerability", chinese_answer: "脆弱", chinese_romanization: "cuìruò" },
            { option: "D", answer: "openness", chinese_answer: "开放", chinese_romanization: "kāifàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'shelter' means a place giving temporary protection from bad weather or danger." +
            "<br><br>" +
            "(B) 'exposure' means the state of being exposed to contact with something." +
            "<br><br>" +
            "(C) 'vulnerability' means the quality or state of being exposed to the possibility of being attacked or harmed, either physically or emotionally." +
            "<br><br>" +
            "(D) 'openness' means lack of restriction; accessibility.",
        chinese_explanation: "(A) '庇护' 意味着提供临时保护以避开恶劣天气或危险的地方。" +
            "<br><br>" +
            "(B) '暴露' 意味着接触某物的状态。" +
            "<br><br>" +
            "(C) '脆弱' 意味着暴露于受到攻击或伤害的可能性的状态，无论是身体上还是情感上的。" +
            "<br><br>" +
            "(D) '开放' 意味着没有限制；可接近性。"
    },
    {
        id: 4,
        question: "After the accident, the paramedics administered an __________ to alleviate his severe pain.",
        chinese_question: "事故发生后，护理人员给他注射了一种 __________ 来缓解剧烈的疼痛。",
        answers: [
            { option: "A", answer: "analgesic", chinese_answer: "镇痛剂", chinese_romanization: "zhèntòngjì" },
            { option: "B", answer: "antibiotic", chinese_answer: "抗生素", chinese_romanization: "kàngshēngsù" },
            { option: "C", answer: "stimulant", chinese_answer: "兴奋剂", chinese_romanization: "xīngfènjì" },
            { option: "D", answer: "sedative", chinese_answer: "镇静剂", chinese_romanization: "zhènjìngjì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'analgesic' means a drug or medicine given to reduce pain." +
            "<br><br>" +
            "(B) 'antibiotic' means a medicine that inhibits the growth of or destroys microorganisms." +
            "<br><br>" +
            "(C) 'stimulant' means a substance that raises levels of physiological or nervous activity in the body." +
            "<br><br>" +
            "(D) 'sedative' means a drug taken for its calming or sleep-inducing effect.",
        chinese_explanation: "(A) '镇痛剂' 指的是一种用于减轻疼痛的药物。" +
            "<br><br>" +
            "(B) '抗生素' 意味着一种抑制或杀死微生物的药物。" +
            "<br><br>" +
            "(C) '兴奋剂' 意味着一种提高身体生理或神经活动水平的物质。" +
            "<br><br>" +
            "(D) '镇静剂' 意味着一种用于镇静或催眠效果的药物。"
    },
    {
        id: 5,
        question: "The final __________ of the election was announced on television.",
        chinese_question: "选举的最终 __________ 在电视上公布了。",
        answers: [
            { option: "A", answer: "beginning", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
            { option: "B", answer: "process", chinese_answer: "过程", chinese_romanization: "guòchéng" },
            { option: "C", answer: "outcome", chinese_answer: "结果", chinese_romanization: "jiéguǒ" },
            { option: "D", answer: "method", chinese_answer: "方法", chinese_romanization: "fāngfǎ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'outcome' means the way a thing turns out; a consequence." +
            "<br><br>" +
            "(A) 'beginning' means the point in time or space at which something starts." +
            "<br><br>" +
            "(B) 'process' means a series of actions or steps taken in order to achieve a particular end." +
            "<br><br>" +
            "(D) 'method' means a particular form of procedure for accomplishing or approaching something, especially a systematic or established one.",
        chinese_explanation: "(C) '结果' 意味着事情的结果；后果。" +
            "<br><br>" +
            "(A) '开始' 意味着某事开始的时间点或空间点。" +
            "<br><br>" +
            "(B) '过程' 意味着为实现特定目标而采取的一系列行动或步骤。" +
            "<br><br>" +
            "(D) '方法' 意味着完成或接近某事的特定程序，尤其是系统的或既定的程序。"
    },
    {
        id: 6,
        question: "The doctor prescribed a __________ to help the patient relax and sleep better.",
        chinese_question: "医生开了一种__________帮助病人放松和更好地睡眠。",
        answers: [
            { option: "A", answer: "stimulant", chinese_answer: "兴奋剂", chinese_romanization: "xīngfèn jì" },
            { option: "B", answer: "sedative", chinese_answer: "镇静剂", chinese_romanization: "zhènjìng jì" },
            { option: "C", answer: "tonic", chinese_answer: "补药", chinese_romanization: "bǔyào" },
            { option: "D", answer: "vitamin", chinese_answer: "维生素", chinese_romanization: "wéishēngsù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sedative' means a medicine that helps you calm down and sleep." +
            "<br><br>" +
            "(A) 'stimulant' means a substance that makes you more active and alert." +
            "<br><br>" +
            "(C) 'tonic' means a medicine that makes you feel stronger and healthier." +
            "<br><br>" +
            "(D) 'vitamin' means a natural substance needed for growth and good health.",
        chinese_explanation: "(B) '镇静剂' 意味着一种帮助你冷静和睡觉的药物。" +
            "<br><br>" +
            "(A) '兴奋剂' 意味着一种使你更活跃和警觉的物质。" +
            "<br><br>" +
            "(C) '补药' 意味着一种让你感觉更强壮和健康的药物。" +
            "<br><br>" +
            "(D) '维生素' 意味着一种对生长和健康必需的天然物质。"
    },
    {
        id: 7,
        question: "She discussed the new project with her __________, sharing ideas and planning the next steps together in their office.",
        chinese_question: "她与她的 __________ 在办公室讨论了新项目，共同分享想法并计划下一步。",
        answers: [
            { option: "A", answer: "competitor", chinese_answer: "竞争对手", chinese_romanization: "jìngzhēng duìshǒu" },
            { option: "B", answer: "stranger", chinese_answer: "陌生人", chinese_romanization: "mòshēngrén" },
            { option: "C", answer: "colleague", chinese_answer: "同事", chinese_romanization: "tóngshì" },
            { option: "D", answer: "neighbor", chinese_answer: "邻居", chinese_romanization: "línjū" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'colleague' means a person with whom one works in a profession or business." +
            "<br><br>" +
            "(A) 'competitor' means a person who takes part in an athletic contest." +
            "<br><br>" +
            "(B) 'stranger' means a person whom one does not know or with whom one is not familiar." +
            "<br><br>" +
            "(D) 'neighbor' means a person living near or next door to the speaker or person referred to.",
        chinese_explanation: "(C) '同事' 一词意味着与某人在职业或商业中共事的人。" +
            "<br><br>" +
            "(A) '竞争对手' 意味着参加体育比赛的人。" +
            "<br><br>" +
            "(B) '陌生人' 意味着一个人不认识或不熟悉的人。" +
            "<br><br>" +
            "(D) '邻居' 意味着居住在说话者或所指的人附近或隔壁的人。"
    },
    {
        id: 8,
        question: "He shared a funny __________ about his childhood that made everyone at the dinner table laugh.",
        chinese_question: "他分享了一个关于他童年的有趣 __________，逗得餐桌上的每个人都笑了。",
        answers: [
            { option: "A", answer: "lecture", chinese_answer: "演讲", chinese_romanization: "yǎnjiǎng" },
            { option: "B", answer: "argument", chinese_answer: "争论", chinese_romanization: "zhēnglùn" },
            { option: "C", answer: "complaint", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" },
            { option: "D", answer: "anecdote", chinese_answer: "轶事", chinese_romanization: "yìshì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'anecdote' means a short and amusing or interesting story about a real incident or person." +
            "<br><br>" +
            "(A) 'lecture' means an educational talk to an audience, especially to students in a university or college." +
            "<br><br>" +
            "(B) 'argument' means an exchange of diverging or opposite views, typically a heated or angry one." +
            "<br><br>" +
            "(C) 'complaint' means a statement that something is unsatisfactory or unacceptable.",
        chinese_explanation: "(D) '轶事' 一词意味着关于真实事件或人物的简短有趣或有趣的故事。" +
            "<br><br>" +
            "(A) '演讲' 意味着向观众，特别是大学或学院的学生进行的教育性讲座。" +
            "<br><br>" +
            "(B) '争论' 意味着相反或对立观点的交流，通常是激烈或愤怒的交流。" +
            "<br><br>" +
            "(C) '抱怨' 意味着认为某事不令人满意或不可接受的声明。"
    },
    {
        id: 9,
        question: "She visited the doctor to find a cure for her persistent __________, which had been bothering her for weeks.",
        chinese_question: "她去看医生，寻找治愈她持续 __________ 的方法，这已经困扰了她好几个星期。",
        answers: [
            { option: "A", answer: "wellness", chinese_answer: "健康", chinese_romanization: "jiànkāng" },
            { option: "B", answer: "health", chinese_answer: "健康", chinese_romanization: "jiànkāng" },
            { option: "C", answer: "ailment", chinese_answer: "小病", chinese_romanization: "xiǎobìng" },
            { option: "D", answer: "vigor", chinese_answer: "活力", chinese_romanization: "huólì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ailment' means an illness, typically a minor one." +
            "<br><br>" +
            "(A) 'wellness' means the state of being in good health." +
            "<br><br>" +
            "(B) 'health' means the state of being free from illness or injury." +
            "<br><br>" +
            "(D) 'vigor' means physical strength and good health.",
        chinese_explanation: "(C) '小病' 一词意味着通常是轻微的疾病。" +
            "<br><br>" +
            "(A) '健康' 意味着处于良好健康的状态。" +
            "<br><br>" +
            "(B) '健康' 意味着没有疾病或伤害的状态。" +
            "<br><br>" +
            "(D) '活力' 意味着身体强壮和良好的健康。"
    },
    {
        id: 10,
        question: "The earthquake was followed by a series of __________ that caused additional damage to the already weakened buildings.",
        chinese_question: "地震之后，发生了一系列 __________，对已经受损的建筑物造成了进一步的损害。",
        answers: [
            { option: "A", answer: "tremors", chinese_answer: "震动", chinese_romanization: "zhèndòng" },
            { option: "B", answer: "precursors", chinese_answer: "前兆", chinese_romanization: "qiánzhào" },
            { option: "C", answer: "foreshocks", chinese_answer: "前震", chinese_romanization: "qiánzhèn" },
            { option: "D", answer: "aftershocks", chinese_answer: "余震", chinese_romanization: "yúzhèn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'aftershock' means a smaller earthquake following the main shock of a large earthquake." +
            "<br><br>" +
            "(A) 'tremors' means an involuntary quivering movement." +
            "<br><br>" +
            "(B) 'precursors' means a person or thing that comes before another of the same kind; a forerunner." +
            "<br><br>" +
            "(C) 'foreshocks' means a mild tremor preceding the violent shaking movement of an earthquake.",
        chinese_explanation: "(D) '余震' 一词意味着大地震之后的较小地震。" +
            "<br><br>" +
            "(A) '震动' 意味着不由自主的颤抖。" +
            "<br><br>" +
            "(B) '前兆' 意味着与另一种相同种类的事物之前的人或事物；前兆。" +
            "<br><br>" +
            "(C) '前震' 意味着地震剧烈震动之前的轻微震动。"
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
