// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The forest was __________ with wildlife, making it a paradise for nature lovers.",
        chinese_question: "森林 __________ 野生动物，使其成为自然爱好者的天堂。",
        answers: [
            { option: "A", answer: "teeming", chinese_answer: "充满", chinese_romanization: "chōngmǎn" },
            { option: "B", answer: "barren", chinese_answer: "贫瘠", chinese_romanization: "pínjí" },
            { option: "C", answer: "empty", chinese_answer: "空", chinese_romanization: "kōng" },
            { option: "D", answer: "lifeless", chinese_answer: "无生气的", chinese_romanization: "wú shēngqì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'teeming' means be full of or swarming with." +
            "<br><br>" +
            "(B) 'barren' means (of land) too poor to produce much or any vegetation." +
            "<br><br>" +
            "(C) 'empty' means containing nothing; not filled or occupied." +
            "<br><br>" +
            "(D) 'lifeless' means lacking the qualities that bring life.",
        chinese_explanation: "(A) '充满' 意味着充满或挤满。" +
            "<br><br>" +
            "(B) '贫瘠' 意味着（土地）太贫瘠而无法产生大量或任何植被的。" +
            "<br><br>" +
            "(C) '空' 意味着没有东西；未填充或未占用。" +
            "<br><br>" +
            "(D) '无生气的' 意味着缺乏生命的品质。"
    },
    {
        id: 2,
        question: "The parking lot is __________ to the shopping mall, making it convenient for shoppers.",
        chinese_question: "停车场__________购物中心，为购物者提供了方便。",
        answers: [
            { option: "A", answer: "distant", chinese_answer: "遥远的", chinese_romanization: "yáoyuǎn de" },
            { option: "B", answer: "adjacent", chinese_answer: "邻近的", chinese_romanization: "línjìn de" },
            { option: "C", answer: "far", chinese_answer: "远的", chinese_romanization: "yuǎn de" },
            { option: "D", answer: "remote", chinese_answer: "偏远的", chinese_romanization: "piānyuǎn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'adjacent' means next to or adjoining something else." +
            "<br><br>" +
            "(A) 'distant' means far away in space or time." +
            "<br><br>" +
            "(C) 'far' means situated at a great distance in space or time." +
            "<br><br>" +
            "(D) 'remote' means situated far from the main centers of population; distant.",
        chinese_explanation: "(B) '邻近的' 一词意味着紧挨着或与其他东西相邻。" +
            "<br><br>" +
            "(A) '遥远的' 意味着在空间或时间上距离遥远的。" +
            "<br><br>" +
            "(C) '远的' 意味着在空间或时间上距离遥远的。" +
            "<br><br>" +
            "(D) '偏远的' 意味着远离主要人口中心的；遥远的。"
    },
    {
        id: 3,
        question: "Her __________ search for her lost keys, despite hours of looking, ended in frustration and disappointment.",
        chinese_question: "她 __________ 寻找丢失的钥匙，尽管花了数小时寻找，最终还是以沮丧和失望告终。",
        answers: [
            { option: "A", answer: "successful", chinese_answer: "成功的", chinese_romanization: "chénggōng de" },
            { option: "B", answer: "fruitless", chinese_answer: "徒劳的", chinese_romanization: "túláo de" },
            { option: "C", answer: "brief", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "D", answer: "exciting", chinese_answer: "令人兴奋的", chinese_romanization: "lìngrén xīngfèn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'fruitless' means failing to achieve the desired results; unproductive or useless." +
            "<br><br>" +
            "(A) 'successful' means accomplishing an aim or purpose." +
            "<br><br>" +
            "(C) 'brief' means of short duration." +
            "<br><br>" +
            "(D) 'exciting' means causing great enthusiasm and eagerness.",
        chinese_explanation: "(B) '徒劳的' 意思是未能达到预期的结果；无成效或无用的。" +
            "<br><br>" +
            "(A) '成功的' 意思是实现目标或目的。" +
            "<br><br>" +
            "(C) '短暂的' 意思是持续时间短。" +
            "<br><br>" +
            "(D) '令人兴奋的' 意思是引起极大热情和渴望的。"
    },
    {
        id: 4,
        question: "His __________ spending habits, where he would buy anything without considering its necessity, quickly depleted his savings.",
        chinese_question: "他 __________ 的消费习惯，使他不考虑物品的必要性就购买任何东西，很快耗尽了他的储蓄。",
        answers: [
            { option: "A", answer: "careful", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "B", answer: "selective", chinese_answer: "有选择性的", chinese_romanization: "yǒu xuǎnzé xìng de" },
            { option: "C", answer: "indiscriminate", chinese_answer: "不加选择的", chinese_romanization: "bù jiā xuǎnzé de" },
            { option: "D", answer: "strategic", chinese_answer: "战略性的", chinese_romanization: "zhànlüè xìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'indiscriminate' means done at random or without careful judgment." +
            "<br><br>" +
            "(A) 'careful' means making sure of avoiding potential danger, mishap, or harm; cautious." +
            "<br><br>" +
            "(B) 'selective' means having the ability to choose carefully the best or most suitable." +
            "<br><br>" +
            "(D) 'strategic' means relating to the identification of long-term or overall aims and interests and the means of achieving them.",
        chinese_explanation: "(C) '不加选择的' 意思是随机或没有仔细判断地完成的。" +
            "<br><br>" +
            "(A) '谨慎的' 意思是确保避免潜在危险、不幸或伤害；小心的。" +
            "<br><br>" +
            "(B) '有选择性的' 意思是有能力仔细选择最佳或最合适的。" +
            "<br><br>" +
            "(D) '战略性的' 意思是与识别长期或总体目标和利益以及实现这些目标和利益的方法有关的。"
    },
    {
        id: 5,
        question: "She was __________ after hearing the news about her friend's accident and couldn't focus on anything.",
        chinese_question: "听到朋友发生事故的消息后，她感到非常 __________，无法集中注意力。",
        answers: [
            { option: "A", answer: "distraught", chinese_answer: "心烦意乱的", chinese_romanization: "xīnfán yìluàn de" },
            { option: "B", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "C", answer: "cheerful", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'distraught' means deeply upset and agitated." + 
            "<br><br>" + 
            "(B) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." + 
            "<br><br>" + 
            "(C) 'cheerful' means noticeably happy and optimistic." + 
            "<br><br>" + 
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(A) '心烦意乱的' 意味着极度不安和激动。" + 
            "<br><br>" + 
            "(B) '平静的' 意味着不显示或感觉紧张、愤怒或其他强烈情绪。" + 
            "<br><br>" + 
            "(C) '愉快的' 意味着明显快乐和乐观的。" + 
            "<br><br>" + 
            "(D) '冷漠的' 意味着没有特别的兴趣或同情心；不关心的。"
    },
    {
        id: 6,
        question: "It is __________ in many cultures to greet someone with a handshake.",
        chinese_question: "在许多文化中，握手问候是__________的。",
        answers: [
            { option: "A", answer: "unusual", chinese_answer: "不寻常的", chinese_romanization: "bù xúncháng de" },
            { option: "B", answer: "rare", chinese_answer: "罕见的", chinese_romanization: "hǎnjiàn de" },
            { option: "C", answer: "customary", chinese_answer: "习惯的", chinese_romanization: "xíguàn de" },
            { option: "D", answer: "abnormal", chinese_answer: "异常的", chinese_romanization: "yìcháng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'customary' means according to the customs or usual practices associated with a particular society, place, or set of circumstances." +
            "<br><br>" +
            "(A) 'unusual' means not habitually or commonly occurring or done." +
            "<br><br>" +
            "(B) 'rare' means not occurring very often." +
            "<br><br>" +
            "(D) 'abnormal' means deviating from what is normal or usual, typically in a way that is undesirable or worrying.",
        chinese_explanation: "(C) '习惯的' 一词意味着根据与特定社会、地方或环境相关的习俗或通常做法。" +
            "<br><br>" +
            "(A) '不寻常的' 意味着不习惯性或常见地发生或做的。" +
            "<br><br>" +
            "(B) '罕见的' 意味着不经常发生。" +
            "<br><br>" +
            "(D) '异常的' 意味着偏离正常或通常情况的，通常是以一种不受欢迎或令人担忧的方式。"
    },
    {
        id: 7,
        question: "John is extremely __________, often putting in extra hours to ensure everything is perfect.",
        chinese_question: "约翰非常 __________，经常加班确保一切都完美无缺。",
        answers: [
            { option: "A", answer: "lazy", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" },
            { option: "B", answer: "sluggish", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" },
            { option: "C", answer: "industrious", chinese_answer: "勤奋的", chinese_romanization: "qínfèn de" },
            { option: "D", answer: "idle", chinese_answer: "懒散的", chinese_romanization: "lǎnsǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'industrious' means diligent and hardworking." +
            "<br><br>" +
            "(A) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(B) 'sluggish' means slow-moving or inactive." +
            "<br><br>" +
            "(D) 'idle' means avoiding work; lazy.",
        chinese_explanation: "(C) '勤奋的'一词意味着勤奋和努力工作的。" +
            "<br><br>" +
            "(A) '懒惰的' 意味着不愿意工作或使用能量的。" +
            "<br><br>" +
            "(B) '缓慢的' 意味着动作迟缓或不活跃的。" +
            "<br><br>" +
            "(D) '懒散的' 意味着避免工作的；懒惰的。"
    },
    {
        id: 8,
        question: "The archaeologists were excited to discover a __________ cave that had never been explored before.",
        chinese_question: "考古学家们很兴奋地发现了一个从未被探索过的 __________ 洞穴。",
        answers: [
            { option: "A", answer: "primeval", chinese_answer: "原始的", chinese_romanization: "yuánshǐ de" },
            { option: "B", answer: "modern", chinese_answer: "现代的", chinese_romanization: "xiàndài de" },
            { option: "C", answer: "cultivated", chinese_answer: "耕作的", chinese_romanization: "gēngzuò de" },
            { option: "D", answer: "developed", chinese_answer: "发达的", chinese_romanization: "fādá de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'primeval' means of or resembling the earliest ages in the history of the world." +
            "<br><br>" +
            "(B) 'modern' means relating to the present or recent times as opposed to the remote past." +
            "<br><br>" +
            "(C) 'cultivated' means prepared and used for growing crops. It describes land that has been worked on and made ready for planting and harvesting food." +
            "<br><br>" +
            "(D) 'developed' means advanced or elaborated to a specified degree. It describes something that has progressed and become more complex, sophisticated, or complete over time.",
        chinese_explanation: "(A) '原始的' 意味着类似于世界历史上最早的时代。" +
            "<br><br>" +
            "(B) '现代的' 意味着与现在或最近的时代有关，而不是遥远的过去。" +
            "<br><br>" +
            "(C) '耕作的' 意味着为种植作物而准备和使用的。它描述的是已经经过处理并为种植和收获食物做好准备的土地。" +
            "<br><br>" +
            "(D) '发达的' 意味着达到指定程度的先进或复杂的。它描述的是随着时间的推移而进步并变得更复杂、精致或完整的事物。"
    },
    {
        id: 9,
        question: "The company hosts an __________ meeting every December to discuss its yearly performance.",
        chinese_question: "公司每年十二月都会举办__________会议，讨论其年度表现。",
        answers: [
            { option: "A", answer: "monthly", chinese_answer: "每月的", chinese_romanization: "měiyuè de" },
            { option: "B", answer: "daily", chinese_answer: "每日的", chinese_romanization: "měirì de" },
            { option: "C", answer: "annual", chinese_answer: "年度的", chinese_romanization: "niándù de" },
            { option: "D", answer: "hourly", chinese_answer: "每小时的", chinese_romanization: "měi xiǎoshí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'annual' means occurring once every year." +
            "<br><br>" +
            "(A) 'monthly' means occurring once every month." +
            "<br><br>" +
            "(B) 'daily' means happening every day." +
            "<br><br>" +
            "(D) 'hourly' means happening every hour.",
        chinese_explanation: "(C) '年度的'一词意味着每年发生一次的。" +
            "<br><br>" +
            "(A) '每月的' 意味着每月发生一次的。" +
            "<br><br>" +
            "(B) '每日的' 意味着每天发生的。" +
            "<br><br>" +
            "(D) '每小时的' 意味着每小时发生的。"
    },
    {
        id: 10,
        question: "The villagers relied on __________ tools for farming, which made their work extremely labour-intensive.",
        chinese_question: "村民们依赖 __________ 工具进行耕作，这使得他们的工作非常费力。",
        answers: [
                { option: "A", answer: "advanced", chinese_answer: "先进的", chinese_romanization: "xiānjìn de" },
                { option: "B", answer: "rudimentary", chinese_answer: "基本的", chinese_romanization: "jīběn de" },
                { option: "C", answer: "sophisticated", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
                { option: "D", answer: "comprehensive", chinese_answer: "全面的", chinese_romanization: "quánmiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rudimentary' means involving or limited to basic principles." +
            "<br><br>" +
            "(A) 'advanced' means far on or ahead in development or progress." +
            "<br><br>" +
            "(C) 'sophisticated' means having, revealing, or involving a great deal of worldly experience and knowledge of fashion and culture." +
            "<br><br>" +
            "(D) 'comprehensive' means complete and including all or nearly all elements or aspects of something.",
        chinese_explanation: "(B) '基本的' 意味着涉及或限于基本原理。" +
            "<br><br>" +
            "(A) '先进的' 意味着在发展或进步中走在前列。" +
            "<br><br>" +
            "(C) '复杂的' 意味着拥有、揭示或涉及大量的世界经验和时尚文化知识。" +
            "<br><br>" +
            "(D) '全面的' 意味着完整的，包含某事物的所有或几乎所有元素或方面。"
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
