// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ task of moving all the heavy furniture by herself left her exhausted and sore.",
        chinese_question: "独自搬运所有重家具的 __________ 任务使她筋疲力尽且浑身酸痛。",
        answers: [
            { option: "A", answer: "burdensome", chinese_answer: "繁重的", chinese_romanization: "fánzhòng de" },
            { option: "B", answer: "effortless", chinese_answer: "轻松的", chinese_romanization: "qīngsōng de" },
            { option: "C", answer: "enjoyable", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "D", answer: "light", chinese_answer: "轻的", chinese_romanization: "qīng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'burdensome' means difficult to carry out or fulfill; taxing." +
            "<br><br>" +
            "(B) 'effortless' means requiring no physical or mental exertion." +
            "<br><br>" +
            "(C) 'enjoyable' means giving pleasure." +
            "<br><br>" +
            "(D) 'light' means of little weight; easy to lift or move.",
        chinese_explanation: "(A) '繁重的' 意味着难以执行或完成的；费力的。" +
            "<br><br>" +
            "(B) '轻松的' 意味着不需要体力或脑力劳动的。" +
            "<br><br>" +
            "(C) '愉快的' 意味着给予快乐的。" +
            "<br><br>" +
            "(D) '轻的' 意味着重量轻的；容易举起或移动的。"
    },
    {
        id: 2,
        question: "The __________ walk in the cool morning air was refreshing and invigorating.",
        chinese_question: "在清凉的早晨空气中 __________ 的散步既清新又提神。",
        answers: [
            { option: "A", answer: "sluggish", chinese_answer: "迟缓", chinese_romanization: "chíhuǎn" },
            { option: "B", answer: "lethargic", chinese_answer: "昏昏欲睡", chinese_romanization: "hūnhūn yù shuì" },
            { option: "C", answer: "brisk", chinese_answer: "轻快", chinese_romanization: "qīngkuài" },
            { option: "D", answer: "lazy", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'brisk' means active, fast, and energetic." +
            "<br><br>" +
            "(A) 'sluggish' means slow-moving or inactive." +
            "<br><br>" +
            "(B) 'lethargic' means sluggish and apathetic." +
            "<br><br>" +
            "(D) 'lazy' means unwilling to work or use energy.",
        chinese_explanation: "(C) '轻快' 意味着活跃、快速和充满活力的。" +
            "<br><br>" +
            "(A) '迟缓' 意味着移动缓慢或不活跃。" +
            "<br><br>" +
            "(B) '昏昏欲睡' 意味着迟钝和冷漠。" +
            "<br><br>" +
            "(D) '懒惰' 意味着不愿意工作或使用精力。"
    },
    {
        id: 3,
        question: "Her __________ remarks during the meeting were appreciated for their honesty and clarity.",
        chinese_question: "她在会议上的 __________ 言论因其诚实和清晰而受到赞赏。",
        answers: [
            { option: "A", answer: "deceitful", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
            { option: "B", answer: "candid", chinese_answer: "直率", chinese_romanization: "zhíshuài" },
            { option: "C", answer: "evasive", chinese_answer: "回避", chinese_romanization: "huíbì" },
            { option: "D", answer: "vague", chinese_answer: "模糊", chinese_romanization: "móhu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'candid' means truthful and straightforward; frank." +
            "<br><br>" +
            "(A) 'deceitful' means misleading or dishonest." +
            "<br><br>" +
            "(C) 'evasive' means tending to avoid commitment or self-revelation, especially by responding only indirectly." +
            "<br><br>" +
            "(D) 'vague' means of uncertain, indefinite, or unclear character or meaning.",
        chinese_explanation: "(B) '直率' 意味着诚实和直截了当；坦率的。" +
            "<br><br>" +
            "(A) '欺骗' 意味着误导或不诚实。" +
            "<br><br>" +
            "(C) '回避' 意味着倾向于避免承诺或自我揭露，特别是通过间接回答。" +
            "<br><br>" +
            "(D) '模糊' 意味着不确定、模糊或不清楚的特征或意义。"
    },
    {
        id: 4,
        question: "The student's __________ behaviour in class shocked the teacher and classmates alike.",
        chinese_question: "学生在课堂上的 __________ 行为让老师和同学们都感到震惊。",
        answers: [
            { option: "A", answer: "respectful", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
            { option: "B", answer: "timid", chinese_answer: "胆小", chinese_romanization: "dǎnxiǎo" },
            { option: "C", answer: "brazen", chinese_answer: "厚颜无耻", chinese_romanization: "hòuyánwúchǐ" },
            { option: "D", answer: "polite", chinese_answer: "礼貌", chinese_romanization: "lǐmào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'brazen' means bold and without shame." +
            "<br><br>" +
            "(A) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(B) 'timid' means showing a lack of courage or confidence; easily frightened." +
            "<br><br>" +
            "(D) 'polite' means having or showing behavior that is respectful and considerate of other people.",
        chinese_explanation: "(C) '厚颜无耻' 意味着大胆且毫不羞愧。" +
            "<br><br>" +
            "(A) '尊重' 意味着感到或表现出敬意和尊重。" +
            "<br><br>" +
            "(B) '胆小' 意味着表现出缺乏勇气或信心；容易受到惊吓。" +
            "<br><br>" +
            "(D) '礼貌' 意味着具有或表现出尊重和体贴他人的行为。"
    },
    {
        id: 5,
        question: "The restaurant is known for its __________ dishes that feature ingredients from around the world.",
        chinese_question: "这家餐厅以其 __________ 的菜肴而闻名，这些菜肴采用了世界各地的食材。",
        answers: [
            { option: "A", answer: "common", chinese_answer: "常见", chinese_romanization: "chángjiàn" },
            { option: "B", answer: "ordinary", chinese_answer: "普通", chinese_romanization: "pǔtōng" },
            { option: "C", answer: "typical", chinese_answer: "典型", chinese_romanization: "diǎnxíng" },
            { option: "D", answer: "exotic", chinese_answer: "异国情调", chinese_romanization: "yìguó qíngdiào" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'exotic' means originating in or characteristic of a distant foreign country." +
            "<br><br>" +
            "(A) 'common' means occurring, found, or done often; prevalent." +
            "<br><br>" +
            "(B) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(C) 'typical' means having the distinctive qualities of a particular type of person or thing.",
        chinese_explanation: "(D) '异国情调' 意味着源自或具有遥远外国的特征。" +
            "<br><br>" +
            "(A) '常见' 意味着经常发生、发现或完成；普遍的。" +
            "<br><br>" +
            "(B) '普通' 意味着没有特别或独特的特征；正常的。" +
            "<br><br>" +
            "(C) '典型' 意味着具有特定类型的人或事物的独特品质。"
    },
    {
        id: 6,
        question: "The new software was __________ and slowed down the entire computer system.",
        chinese_question: "新软件 __________，使整个计算机系统变慢。",
        answers: [
            { option: "A", answer: "efficient", chinese_answer: "高效", chinese_romanization: "gāoxiào" },
            { option: "B", answer: "streamlined", chinese_answer: "流线型", chinese_romanization: "liúxiànxíng" },
            { option: "C", answer: "bulky", chinese_answer: "笨重", chinese_romanization: "bènzhòng" },
            { option: "D", answer: "light", chinese_answer: "轻", chinese_romanization: "qīng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bulky' means large and cumbersome." +
            "<br><br>" +
            "(A) 'efficient' means achieving maximum productivity with minimum wasted effort or expense." +
            "<br><br>" +
            "(B) 'streamlined' means designed or provided with a form that presents very little resistance to a flow of air or water." +
            "<br><br>" +
            "(D) 'light' means not heavy.",
        chinese_explanation: "(C) '笨重' 意味着大且笨拙。" +
            "<br><br>" +
            "(A) '高效' 意味着以最小的浪费努力或费用实现最大生产力。" +
            "<br><br>" +
            "(B) '流线型' 意味着设计或提供的形式，使其对空气或水的流动呈现很小的阻力。" +
            "<br><br>" +
            "(D) '轻' 意味着不重。"
    },
    {
        id: 7,
        question: "The smell of freshly baked cookies was __________, drawing everyone into the kitchen.",
        chinese_question: "新烤好的饼干的香味非常__________，吸引了所有人到厨房。",
        answers: [
            { option: "A", answer: "unappealing", chinese_answer: "无吸引力的", chinese_romanization: "wú xīyǐnlì de" },
            { option: "B", answer: "enticing", chinese_answer: "诱人的", chinese_romanization: "yòurén de" },
            { option: "C", answer: "repulsive", chinese_answer: "令人厌恶的", chinese_romanization: "lìng rén yànwù de" },
            { option: "D", answer: "unattractive", chinese_answer: "不吸引人的", chinese_romanization: "bù xīyǐn rén de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'enticing' means attractive or tempting; alluring." +
            "<br><br>" +
            "(A) 'unappealing' means not inviting or attractive." +
            "<br><br>" +
            "(C) 'repulsive' means arousing intense distaste or disgust." +
            "<br><br>" +
            "(D) 'unattractive' means not appealing to look at; not beautiful or pretty.",
        chinese_explanation: "(B) '诱人的'一词意味着有吸引力或诱人的；迷人的。" +
            "<br><br>" +
            "(A) '无吸引力的' 意味着没有吸引力或吸引力。" +
            "<br><br>" +
            "(C) '令人厌恶的' 意味着引起强烈的厌恶或厌恶的。" +
            "<br><br>" +
            "(D) '不吸引人的' 意味着不吸引人看；不美丽或漂亮。"
    },
    {
        id: 8,
        question: "The student received an award for his __________ academic performance, which was far above the average.",
        chinese_question: "这名学生因其 __________ 的学业表现而获得奖项，远高于平均水平。",
        answers: [
            { option: "A", answer: "mediocre", chinese_answer: "中等", chinese_romanization: "zhōngděng" },
            { option: "B", answer: "average", chinese_answer: "平均", chinese_romanization: "píngjūn" },
            { option: "C", answer: "exceptional", chinese_answer: "杰出", chinese_romanization: "jiéchū" },
            { option: "D", answer: "poor", chinese_answer: "差", chinese_romanization: "chà" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'exceptional' means unusually good; outstanding." +
            "<br><br>" +
            "(A) 'mediocre' means of only moderate quality; not very good." +
            "<br><br>" +
            "(B) 'average' means having qualities that are seen as typical of a particular person, group, or thing." +
            "<br><br>" +
            "(D) 'poor' means lacking sufficient money to live at a standard considered comfortable or normal in a society.",
        chinese_explanation: "(C) '杰出' 意味着异常好；优秀。" +
            "<br><br>" +
            "(A) '中等' 意味着质量一般；不太好。" +
            "<br><br>" +
            "(B) '平均' 意味着具有被视为某特定人、群体或事物的典型特征。" +
            "<br><br>" +
            "(D) '差' 意味着缺乏足够的钱来过上社会上认为舒适或正常的生活。"
    },
    {
        id: 9,
        question: "She is a very __________ engineer, able to solve complex problems with innovative solutions.",
        chinese_question: "她是一位非常 __________ 的工程师，能够用创新的解决方案解决复杂问题。",
        answers: [
            { option: "A", answer: "incompetent", chinese_answer: "无能的", chinese_romanization: "wúnéng de" },
            { option: "B", answer: "unsure", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
            { option: "C", answer: "inadequate", chinese_answer: "不足的", chinese_romanization: "bùzú de" },
            { option: "D", answer: "capable", chinese_answer: "能干的", chinese_romanization: "nénggàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'capable' means having the ability, fitness, or quality necessary to do or achieve a specified thing." +
            "<br><br>" +
            "(A) 'incompetent' means not having or showing the necessary skills to do something successfully." +
            "<br><br>" +
            "(B) 'unsure' means not certain." +
            "<br><br>" +
            "(C) 'inadequate' means lacking the quality or quantity required; insufficient for a purpose.",
        chinese_explanation: "(D) '能干的' 意味着具有做或实现某个特定事情所需的能力、素质或品质。" +
            "<br><br>" +
            "(A) '无能的' 意味着没有或未显示出成功完成某事所需的技能。" +
            "<br><br>" +
            "(B) '不确定的' 意味着不确定的。" +
            "<br><br>" +
            "(C) '不足的' 意味着缺乏所需的质量或数量；不够目的。"
    },
    {
        id: 10,
        question: "The __________ life jacket kept him afloat even in rough waters.",
        chinese_question: "__________ 的救生衣让他即使在汹涌的水中也能保持漂浮。",
        answers: [
            { option: "A", answer: "sinking", chinese_answer: "下沉", chinese_romanization: "xiàchén" },
            { option: "B", answer: "fragile", chinese_answer: "脆弱", chinese_romanization: "cuìruò" },
            { option: "C", answer: "buoyant", chinese_answer: "漂浮", chinese_romanization: "piāofú" },
            { option: "D", answer: "submerged", chinese_answer: "淹没", chinese_romanization: "yānmò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'buoyant' means able or apt to stay afloat or rise to the top of a liquid or gas." +
            "<br><br>" +
            "(A) 'sinking' means going down below the surface of something, especially of a liquid." +
            "<br><br>" +
            "(B) 'fragile' means easily broken or damaged." +
            "<br><br>" +
            "(D) 'submerged' means under the surface of water.",
        chinese_explanation: "(C) '漂浮' 意味着能够或适于保持漂浮或上升到液体或气体的顶部。" +
            "<br><br>" +
            "(A) '下沉' 意味着低于某物表面，尤其是液体的表面。" +
            "<br><br>" +
            "(B) '脆弱' 意味着容易破碎或损坏。" +
            "<br><br>" +
            "(D) '淹没' 意味着在水面以下。"
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
