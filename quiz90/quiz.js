// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "They decided to __________ to Canada in search of better opportunities.",
        chinese_question: "他们决定 __________ 到加拿大寻找更好的机会。",
        answers: [
                { option: "A", answer: "immigrate", chinese答案: "移民", chinese罗马拼音: "yímín" },
                { option: "B", answer: "emigrate", chinese答案: "移出", chinese罗马拼音: "yíchū" },
                { option: "C", answer: "visit", chinese答案: "访问", chinese罗马拼音: "fǎngwèn" },
                { option: "D", answer: "remain", chinese答案: "留下", chinese罗马拼音: "liúxià" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'emigrate' means leave one's own country to settle permanently in another." +
            "<br><br>" +
            "(A) 'immigrate' means come to live permanently in a foreign country." +
            "<br><br>" +
            "(C) 'visit' means go to see and spend time with someone socially." +
            "<br><br>" +
            "(D) 'remain' means continue to exist, especially after other similar or related people or things have ceased to exist.",
        chinese_explanation: "(B) '移出' 意味着离开自己的国家，永久定居在另一个国家。" +
            "<br><br>" +
            "(A) '移民' 意味着永久居住在外国。" +
            "<br><br>" +
            "(C) '访问' 意味着去看望和与某人社交。" +
            "<br><br>" +
            "(D) '留下' 意味着继续存在，特别是在其他类似或相关的人或事物已不再存在之后。"
    },
    {
        id: 2,
        question: "The detective worked hard to __________ the suspect from the security footage.",
        chinese_question: "侦探努力从监控录像中 __________ 嫌疑人。",
        answers: [
            { option: "A", answer: "identify", chinese答案: "识别", chinese罗马拼音: "shìbié" },
            { option: "B", answer: "misidentify", chinese答案: "误认", chinese罗马拼音: "wùrèn" },
            { option: "C", answer: "replace", chinese答案: "替换", chinese罗马拼音: "tìhuàn" },
            { option: "D", answer: "conceal", chinese答案: "隐藏", chinese罗马拼音: "yǐncáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'identify' means to establish or indicate who or what someone or something is." +
            "<br><br>" +
            "(B) 'misidentify' means to incorrectly establish or indicate who or what someone or something is." +
            "<br><br>" +
            "(C) 'replace' means to take the place of." +
            "<br><br>" +
            "(D) 'conceal' means to keep from sight; hide.",
        chinese_explanation: "(A) '识别' 意味着确定或指出某人或某物是谁或是什么。" +
            "<br><br>" +
            "(B) '误认' 意味着错误地确定或指出某人或某物是谁或是什么。" +
            "<br><br>" +
            "(C) '替换' 意味着取代。" +
            "<br><br>" +
            "(D) '隐藏' 意味着从视线中隐藏；隐藏。"
    },
    {
        id: 3,
        question: "The citizens decided to __________ against the oppressive regime, demanding freedom and justice.",
        chinese_question: "市民决定__________反对压迫政权，要求自由和正义。",
        answers: [
            { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "B", answer: "revolt", chinese_answer: "反抗", chinese_romanization: "fǎnkàng" },
            { option: "C", answer: "comply", chinese_answer: "遵守", chinese_romanization: "zūnshǒu" },
            { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'revolt' means to rise in rebellion." +
            "<br><br>" +
            "(A) 'support' means to bear all or part of the weight of." +
            "<br><br>" +
            "(C) 'comply' means to act in accordance with a wish or command." +
            "<br><br>" +
            "(D) 'assist' means to help.",
        chinese_explanation: "(B) '反抗'一词意味着起义。" +
            "<br><br>" +
            "(A) '支持' 意味着承担全部或部分重量。" +
            "<br><br>" +
            "(C) '遵守' 意味着按照愿望或命令行事。" +
            "<br><br>" +
            "(D) '帮助' 意味着帮助。"
    },
    {
        id: 4,
        question: "Despite their efforts, the heavy boulder wouldn't __________, remaining firmly in place.",
        chinese_question: "尽管他们努力了，沉重的巨石也没有 __________，仍然牢固地停在原地。",
        answers: [
            { option: "A", answer: "stay", chinese答案: "停留", chinese罗马拼音: "tíngliú" },
            { option: "B", answer: "disappear", chinese答案: "消失", chinese罗马拼音: "xiāoshī" },
            { option: "C", answer: "budge", chinese答案: "挪动", chinese罗马拼音: "nuódòng" },
            { option: "D", answer: "vanish", chinese答案: "消散", chinese罗马拼音: "xiāosàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'budge' means make or cause to make the slightest movement." +
            "<br><br>" +
            "(A) 'stay' means remain in the same place." +
            "<br><br>" +
            "(B) 'disappear' means cease to be visible." +
            "<br><br>" +
            "(D) 'vanish' means disappear suddenly and completely.",
        chinese_explanation: "(C) '挪动' 一词意味着使或导致最轻微的移动。" +
            "<br><br>" +
            "(A) '停留' 意味着保持在同一个地方。" +
            "<br><br>" +
            "(B) '消失' 意味着不再可见。" +
            "<br><br>" +
            "(D) '消散' 意味着突然彻底消失。"
    },
    {
        id: 5,
        question: "She couldn't help but __________ when she heard the eerie sound coming from the old house.",
        chinese_question: "听到从老房子里传来的怪声时，她不禁 __________ 了一下。",
        answers: [
            { option: "A", answer: "laugh", chinese_answer: "笑", chinese_romanization: "xiào" },
            { option: "B", answer: "sing", chinese_answer: "唱", chinese_romanization: "chàng" },
            { option: "C", answer: "smile", chinese_answer: "微笑", chinese_romanization: "wéixiào" },
            { option: "D", answer: "shudder", chinese_answer: "颤抖", chinese_romanization: "chàndǒu" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'shudder' means to tremble convulsively, typically as a result of fear or revulsion." +
            "<br><br>" +
            "(A) 'laugh' means to make the spontaneous sounds and movements of the face and body that are the instinctive expressions of lively amusement and sometimes also of contempt or derision." +
            "<br><br>" +
            "(B) 'sing' means to make musical sounds with the voice, especially words with a set tune." +
            "<br><br>" +
            "(C) 'smile' means to form one's features into a pleased, kind, or amused expression, typically with the corners of the mouth turned up and the front teeth exposed.",
        chinese_explanation: "(D) '颤抖' 一词意味着通常由于恐惧或厌恶而抽搐地颤抖。" +
            "<br><br>" +
            "(A) '笑' 意味着发出活泼愉快的本能表情和动作的声音和动作，有时也表示轻蔑或嘲笑。" +
            "<br><br>" +
            "(B) '唱' 意味着用声音发出音乐声，尤其是带有固定曲调的词语。" +
            "<br><br>" +
            "(C) '微笑' 意味着将自己的面部特征形成愉悦、友好或愉快的表情，通常是嘴角上扬，露出前牙。"
    },
    {
        id: 6,
        question: "The shield was designed to __________ the arrows, protecting the soldiers from harm.",
        chinese_question: "盾牌设计用来 __________ 箭矢，保护士兵免受伤害。",
        answers: [
            { option: "A", answer: "attract", chinese答案: "吸引", chinese罗马拼音: "xīyǐn" },
            { option: "B", answer: "deflect", chinese答案: "偏转", chinese罗马拼音: "piānzhuǎn" },
            { option: "C", answer: "direct", chinese答案: "指引", chinese罗马拼音: "zhǐyǐn" },
            { option: "D", answer: "absorb", chinese答案: "吸收", chinese罗马拼音: "xīshōu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'deflect' means cause (something) to change direction by interposing something; turn aside from a straight course." +
            "<br><br>" +
            "(A) 'attract' means cause to come to a place or participate in a venture by offering something of interest or advantage." +
            "<br><br>" +
            "(C) 'direct' means manage or guide by advice, helpful information, instruction, etc." +
            "<br><br>" +
            "(D) 'absorb' means take in or soak up (energy, or a liquid or other substance) by chemical or physical action.",
        chinese_explanation: "(B) '偏转' 一词意味着通过插入某物使（某物）改变方向；从直线路径转向。" +
            "<br><br>" +
            "(A) '吸引' 意味着通过提供某种有兴趣或有利的东西而使某人来某地或参与某项冒险。" +
            "<br><br>" +
            "(C) '指引' 意味着通过建议、有用的信息、指示等进行管理或指导。" +
            "<br><br>" +
            "(D) '吸收' 意味着通过化学或物理作用吸收（能量或液体或其他物质）。"
    },
    {
        id: 7,
        question: "The school principal decided to __________ the student's phone because it was being used during class.",
        chinese_question: "校长决定 __________ 学生的手机，因为它在上课时被使用。",
        answers: [
            { option: "A", answer: "return", chinese_answer: "归还", chinese_romanization: "guīhái" },
            { option: "B", answer: "lend", chinese_answer: "借出", chinese_romanization: "jièchū" },
            { option: "C", answer: "confiscate", chinese_answer: "没收", chinese_romanization: "mòshōu" },
            { option: "D", answer: "borrow", chinese_answer: "借用", chinese_romanization: "jièyòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'confiscate' means take or seize (someone's property) with authority." +
            "<br><br>" +
            "(A) 'return' means come or go back to a place or person." +
            "<br><br>" +
            "(B) 'lend' means grant to (someone) the use of (something) on the understanding that it shall be returned." +
            "<br><br>" +
            "(D) 'borrow' means take and use (something belonging to someone else) with the intention of returning it.",
        chinese_explanation: "(C) '没收' 一词意味着在有权力的情况下夺取或占有（某人的财产）。" +
            "<br><br>" +
            "(A) '归还' 意味着返回某个地方或某人。" +
            "<br><br>" +
            "(B) '借出' 意味着在理解将归还的情况下授予（某人）使用（某物）。" +
            "<br><br>" +
            "(D) '借用' 意味着拿走和使用（属于某人的东西）并打算归还。"
    },
    {
        id: 8,
        question: "Parents are encouraged to __________ their children to protect them from preventable diseases.",
        chinese_question: "鼓励家长为孩子 __________ 以保护他们免受可预防的疾病侵害。",
        answers: [
            { option: "A", answer: "infect", chinese_answer: "感染", chinese_romanization: "gǎnrǎn" },
            { option: "B", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "expose", chinese_answer: "暴露", chinese_romanization: "bàolù" },
            { option: "D", answer: "vaccinate", chinese_answer: "接种", chinese_romanization: "jiēzhǒng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'vaccinate' means treat with a vaccine to produce immunity against a disease." +
            "<br><br>" +
            "(A) 'infect' means affect (a person, organism, etc.) with a disease-causing organism." +
            "<br><br>" +
            "(B) 'neglect' means fail to care for properly." +
            "<br><br>" +
            "(C) 'expose' means make (something) visible by uncovering it.",
        chinese_explanation: "(D) '接种' 一词意味着用疫苗治疗以产生对疾病的免疫力。" +
            "<br><br>" +
            "(A) '感染' 意味着使（人、动物等）感染病原体。" +
            "<br><br>" +
            "(B) '忽视' 意味着未能适当照顾。" +
            "<br><br>" +
            "(C) '暴露' 意味着通过揭开使（某物）可见。"
    },
    {
        id: 9,
        question: "In the old market, traders would __________ goods instead of using money, often exchanging items like spices for textiles.",
        chinese_question: "在旧市场上，商人们会 __________ 商品而不是使用货币，经常用香料换取纺织品。",
        answers: [
            { option: "A", answer: "purchase", chinese_answer: "购买", chinese_romanization: "gòumǎi" },
            { option: "B", answer: "barter", chinese_answer: "以物易物", chinese_romanization: "yǐwù yìwù" },
            { option: "C", answer: "hoard", chinese_answer: "囤积", chinese_romanization: "túnjī" },
            { option: "D", answer: "sell", chinese_answer: "出售", chinese_romanization: "chūshòu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'barter' means exchange (goods or services) for other goods or services without using money." +
            "<br><br>" +
            "(A) 'purchase' means acquire (something) by paying for it; buy." +
            "<br><br>" +
            "(C) 'hoard' means accumulate (money or valued objects) and hide or store away." +
            "<br><br>" +
            "(D) 'sell' means give or hand over (something) in exchange for money.",
        chinese_explanation: "(B) '以物易物' 一词意味着用（货物或服务）交换其他货物或服务，而不使用货币。" +
            "<br><br>" +
            "(A) '购买' 意味着通过支付来获得（某物）；买。" +
            "<br><br>" +
            "(C) '囤积' 意味着积累（钱或有价值的物品）并隐藏或储藏起来。" +
            "<br><br>" +
            "(D) '出售' 意味着用钱换取（某物）或交出（某物）。"
    },
    {
        id: 10,
        question: "The cattle were allowed to __________ freely in the open fields during the summer.",
        chinese_question: "夏天，牛群被允许在开阔的田野上自由 __________。",
        answers: [
            { option: "A", answer: "starve", chinese答案: "饿死", chinese罗马拼音: "èsǐ" },
            { option: "B", answer: "hide", chinese答案: "躲藏", chinese罗马拼音: "duǒcáng" },
            { option: "C", answer: "graze", chinese答案: "吃草", chinese罗马拼音: "chī cǎo" },
            { option: "D", answer: "sleep", chinese答案: "睡觉", chinese罗马拼音: "shuìjiào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'graze' means (of cattle, sheep, etc.) eat grass in a field." +
            "<br><br>" +
            "(A) 'starve' means suffer or die from hunger." +
            "<br><br>" +
            "(B) 'hide' means put or keep out of sight." +
            "<br><br>" +
            "(D) 'sleep' means be in a state of rest.",
        chinese_explanation: "(C) '吃草' 一词意味着（牛、羊等）在田野里吃草。" +
            "<br><br>" +
            "(A) '饿死' 意味着因饥饿而受苦或死亡。" +
            "<br><br>" +
            "(B) '躲藏' 意味着将某物放置或保持在视线之外。" +
            "<br><br>" +
            "(D) '睡觉' 意味着处于休息状态。"
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
