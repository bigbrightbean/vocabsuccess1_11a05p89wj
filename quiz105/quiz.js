// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The dark shadow moving in the corner made him __________ in fear.",
        chinese_question: "角落里移动的黑影让他__________恐惧。",
        answers: [
            { option: "A", answer: "shiver", chinese_answer: "发抖", chinese_romanization: "fādǒu" },
            { option: "B", answer: "laugh", chinese_answer: "大笑", chinese_romanization: "dà xiào" },
            { option: "C", answer: "cheer", chinese_answer: "欢呼", chinese_romanization: "huānhū" },
            { option: "D", answer: "smile", chinese_answer: "微笑", chinese_romanization: "wēixiào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'shiver' metaphorically means to feel a strong emotion, especially fear." +
            "<br><br>" +
            "(B) 'laugh' means make the spontaneous sounds and movements of the face and body that are the instinctive expressions of lively amusement and sometimes also of contempt or derision." +
            "<br><br>" +
            "(C) 'cheer' means shout for joy or in praise or encouragement." +
            "<br><br>" +
            "(D) 'smile' means form one's features into a pleased, kind, or amused expression, typically with the corners of the mouth turned up and the front teeth exposed.",
        chinese_explanation: "(A) '发抖' 比喻感受到强烈的情感，尤其是恐惧。" +
            "<br><br>" +
            "(B) '大笑' 意味着发出自发的声音和动作，是生动娱乐的本能表现，有时也是蔑视或嘲笑的表现。" +
            "<br><br>" +
            "(C) '欢呼' 意味着因高兴或表扬或鼓励而喊叫。" +
            "<br><br>" +
            "(D) '微笑' 意味着把面部特征形成高兴、友好或愉快的表情，通常是嘴角上翘和前牙暴露。"
    },
    {
        id: 2,
        question: "They had to __________ a meeting to discuss the upcoming project.",
        chinese_question: "他们必须__________一次会议来讨论即将到来的项目。",
        answers: [
            { option: "A", answer: "scatter", chinese_answer: "散开", chinese_romanization: "sànkāi" },
            { option: "B", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "arrange", chinese_answer: "安排", chinese_romanization: "ānpái" },
            { option: "D", answer: "disrupt", chinese_answer: "扰乱", chinese_romanization: "rǎoluàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'arrange' means to put (things) in a neat, attractive, or required order. Figuratively, it can mean to organize or plan something." + 
            "<br><br>" + 
            "(A) 'scatter' means to throw in various random directions." + 
            "<br><br>" + 
            "(B) 'neglect' means to fail to care for properly." + 
            "<br><br>" + 
            "(D) 'disrupt' means to interrupt (an event, activity, or process) by causing a disturbance or problem.",
        chinese_explanation: "(C) '安排'一词意味着将（事物）按整齐、美观或要求的顺序排列。比喻地，它可以表示组织或计划某事。" + 
            "<br><br>" + 
            "(A) '散开' 意味着以各种随机方向抛撒。" + 
            "<br><br>" + 
            "(B) '忽视' 意味着未能适当地照顾。" + 
            "<br><br>" + 
            "(D) '扰乱' 意味着通过制造干扰或问题来中断（事件、活动或过程）。"
    },
    {
        id: 3,
        question: "He decided to __________ the problem from a different angle to find a solution.",
        chinese_question: "他决定从不同的角度__________这个问题，以找到解决办法。",
        answers: [
            { option: "A", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "B", answer: "approach", chinese_answer: "接近", chinese_romanization: "jiējìn" },
            { option: "C", answer: "retreat", chinese_answer: "撤退", chinese_romanization: "chètuì" },
            { option: "D", answer: "dismiss", chinese_answer: "解雇", chinese_romanization: "jiěgù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'approach' means to come near or nearer to (someone or something) in distance or time." +
            "<br><br>" +
            "(A) 'avoid' means to keep away from or stop oneself from doing (something)." +
            "<br><br>" +
            "(C) 'retreat' means to withdraw from a position or situation." +
            "<br><br>" +
            "(D) 'dismiss' means to order or allow to leave; send away.",
        chinese_explanation: "(B) '接近'一词意味着在距离或时间上接近或接近（某人或某物）。" +
            "<br><br>" +
            "(A) '避免' 意味着避开或阻止自己做（某事）。" +
            "<br><br>" +
            "(C) '撤退' 意味着从一个位置或情况中撤退。" +
            "<br><br>" +
            "(D) '解雇' 意味着命令或允许离开；遣散。"
    },
    {
        id: 4,
        question: "Children often __________ their parents' behaviour, copying their actions and words.",
        chinese_question: "孩子们经常 __________ 父母的行为，模仿他们的行动和言语。",
        answers: [
            { option: "A", answer: "imitate", chinese_answer: "模仿", chinese_romanization: "mófǎng" },
            { option: "B", answer: "defy", chinese_answer: "违抗", chinese_romanization: "wéikàng" },
            { option: "C", answer: "contradict", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
            { option: "D", answer: "prevent", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'imitate' means take or follow as a model." +
            "<br><br>" +
            "(B) 'defy' means openly resist or refuse to obey." +
            "<br><br>" +
            "(C) 'contradict' means deny the truth of (a statement) by asserting the opposite." +
            "<br><br>" +
            "(D) 'prevent' means keep (something) from happening or arising.",
        chinese_explanation: "(A) '模仿' 意味着作为榜样进行或跟随。" +
            "<br><br>" +
            "(B) '违抗' 意味着公然反抗或拒绝服从。" +
            "<br><br>" +
            "(C) '反驳' 意味着通过断言相反的事实来否认（某一声明）的真实性。" +
            "<br><br>" +
            "(D) '阻止' 意味着防止（某事）发生或出现。"
    },
    {
        id: 5,
        question: "She __________ to finish her project by the end of the week, setting a clear goal and working diligently.",
        chinese_question: "她 __________ 在本周末前完成她的项目，设定了明确的目标并勤奋工作。",
        answers: [
            { option: "A", answer: "forgets", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
            { option: "B", answer: "doubts", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "C", answer: "hesitates", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "D", answer: "intends", chinese_answer: "打算", chinese_romanization: "dǎsuàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'intends' means have (a course of action) as one's purpose or objective; plan." +
            "<br><br>" +
            "(A) 'forgets' means fail to remember." +
            "<br><br>" +
            "(B) 'doubts' means feel uncertain about." +
            "<br><br>" +
            "(C) 'hesitates' means pause before saying or doing something, especially through uncertainty.",
        chinese_explanation: "(D) '打算' 意味着以某种行动方针为目的或目标；计划。" +
            "<br><br>" +
            "(A) '忘记' 意味着未能记住。" +
            "<br><br>" +
            "(B) '怀疑' 意味着对某事感到不确定。" +
            "<br><br>" +
            "(C) '犹豫' 意味着在说或做某事前暂停，特别是因为不确定。"
    },
    {
        id: 6,
        question: "Many people __________ their time and skills to help those in need.",
        chinese_question: "许多人 __________ 他们的时间和技能来帮助有需要的人。",
        answers: [
            { option: "A", answer: "volunteer", chinese_answer: "志愿", chinese_romanization: "zhìyuàn" },
            { option: "B", answer: "withhold", chinese_answer: "扣留", chinese_romanization: "kòuliú" },
            { option: "C", answer: "sell", chinese_answer: "出售", chinese_romanization: "chūshòu" },
            { option: "D", answer: "exchange", chinese_answer: "交换", chinese_romanization: "jiāohuàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'volunteer' means to offer one's time, skills, or services freely." + 
            "<br><br>" + 
            "(B) 'withhold' means refuse to give (something that is due to or is desired by another)." + 
            "<br><br>" + 
            "(C) 'sell' means give or hand over (something) in exchange for money." + 
            "<br><br>" + 
            "(D) 'exchange' means give something and receive something of the same kind in return.",
        chinese_explanation: "(A) '志愿' 意味着自愿提供自己的时间、技能或服务。" + 
            "<br><br>" + 
            "(B) '扣留' 意味着拒绝给予（应给予或希望得到的东西）。" + 
            "<br><br>" + 
            "(C) '出售' 意味着以换取金钱的方式给予或交出（某物）。" + 
            "<br><br>" + 
            "(D) '交换' 意味着给予某物并收到同类的东西作为回报。"
    },
    {
        id: 7,
        question: "The ancient tree managed to __________ countless harsh winters, standing tall while others around it perished.",
        chinese_question: "这棵古树设法 __________ 无数个严冬，在周围的树木倒下时依然屹立不倒。",
        answers: [
            { option: "A", answer: "crumble", chinese_answer: "崩溃", chinese_romanization: "bēngkuì" },
            { option: "B", answer: "outlast", chinese_answer: "持久", chinese_romanization: "chíjiǔ" },
            { option: "C", answer: "deteriorate", chinese_answer: "恶化", chinese_romanization: "èhuà" },
            { option: "D", answer: "collapse", chinese_answer: "倒塌", chinese_romanization: "dǎotā" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'outlast' means to last longer than." +
            "<br><br>" +
            "(A) 'crumble' means to break or fall apart into small fragments." +
            "<br><br>" +
            "(C) 'deteriorate' means to become progressively worse." +
            "<br><br>" +
            "(D) 'collapse' means to fall down or give way.",
        chinese_explanation: "(B) '持久' 意味着比...持续时间更长。" +
            "<br><br>" +
            "(A) '崩溃' 意味着破碎或分裂成小片。" +
            "<br><br>" +
            "(C) '恶化' 意味着逐渐变得更糟。" +
            "<br><br>" +
            "(D) '倒塌' 意味着倒下或倒塌。"
    },
    {
        id: 8,
        question: "The sudden loud noise was enough to __________ a panic attack in the crowd.",
        chinese_question: "突如其来的巨响足以 __________ 人群中的恐慌。",
        answers: [
            { option: "A", answer: "prevent", chinese_answer: "防止", chinese_romanization: "fángzhǐ" },
            { option: "B", answer: "calm", chinese_answer: "平息", chinese_romanization: "píngxī" },
            { option: "C", answer: "control", chinese_answer: "控制", chinese_romanization: "kòngzhì" },
            { option: "D", answer: "trigger", chinese_answer: "引发", chinese_romanization: "yǐnfā" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'trigger' means to cause (an event or situation) to happen or exist." +
            "<br><br>" +
            "(A) 'prevent' means to stop (something) from happening or existing." +
            "<br><br>" +
            "(B) 'calm' means to make (someone) tranquil and quiet; soothe." +
            "<br><br>" +
            "(C) 'control' means to determine the behavior or supervise the running of.",
        chinese_explanation: "(D) '引发' 意味着引起（事件或情况）发生或存在。" +
            "<br><br>" +
            "(A) '防止' 意味着阻止（某事）发生或存在。" +
            "<br><br>" +
            "(B) '平息' 意味着使（某人）平静安宁；安抚。" +
            "<br><br>" +
            "(C) '控制' 意味着决定行为或监督运行。"
    },
    {
        id: 9,
        question: "As the floodwaters began to __________, the residents started cleaning up the debris left behind.",
        chinese_question: "随着洪水开始 __________，居民们开始清理留下的残骸。",
        answers: [
                { option: "A", answer: "recede", chinese_answer: "退去", chinese_romanization: "tuìqù" },
                { option: "B", answer: "rise", chinese_answer: "上升", chinese_romanization: "shàngshēng" },
                { option: "C", answer: "gather", chinese_answer: "聚集", chinese_romanization: "jùjí" },
                { option: "D", answer: "spread", chinese_answer: "传播", chinese_romanization: "chuánbō" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'recede' means to go or move back or further away from a previous position." +
            "<br><br>" +
            "(B) 'rise' means to move from a lower position to a higher one." +
            "<br><br>" +
            "(C) 'gather' means to come together; assemble or accumulate." +
            "<br><br>" +
            "(D) 'spread' means to open out something so as to extend its surface area, width, or length.",
        chinese_explanation: "(A) '退去' 意味着从先前的位置返回或进一步远离。" +
            "<br><br>" +
            "(B) '上升' 意味着从较低的位置移动到较高的位置。" +
            "<br><br>" +
            "(C) '聚集' 意味着聚集在一起；集合或积累。" +
            "<br><br>" +
            "(D) '传播' 意味着展开某物以扩大其表面积、宽度或长度。"
    },
    {
        id: 10,
        question: "The intense humidity seemed to __________ every corner of the city, making it hard to escape the heat.",
        chinese_question: "强烈的湿气似乎 __________ 了城市的每个角落，使人难以逃避炎热。",
        answers: [
                { option: "A", answer: "permeate", chinese_answer: "渗透", chinese_romanization: "shèntòu" },
                { option: "B", answer: "escape", chinese_answer: "逃脱", chinese_romanization: "táotuō" },
                { option: "C", answer: "contain", chinese_answer: "包含", chinese_romanization: "bāohán" },
                { option: "D", answer: "destroy", chinese_answer: "摧毁", chinese_romanization: "cuīhuǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'permeate' means to spread throughout (something); pervade." +
            "<br><br>" +
            "(B) 'escape' means to break free from confinement or control." +
            "<br><br>" +
            "(C) 'contain' means to have or hold (someone or something) within." +
            "<br><br>" +
            "(D) 'destroy' means to put an end to the existence of (something) by damaging or attacking it.",
        chinese_explanation: "(A) '渗透' 意味着遍布（某物）；弥漫。" +
            "<br><br>" +
            "(B) '逃脱' 意味着摆脱束缚或控制。" +
            "<br><br>" +
            "(C) '包含' 意味着有或持有（某人或某物）在内。" +
            "<br><br>" +
            "(D) '摧毁' 意味着通过破坏或攻击来结束（某物）的存在。"
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
