// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She always dressed in a __________ manner, impressing everyone with her fashion sense.",
        chinese_question: "她总是穿得很 __________，以她的时尚感让每个人都印象深刻。",
        answers: [
            { option: "A", answer: "stylish", chinese_answer: "时髦的", chinese_romanization: "shímáo de" },
            { option: "B", answer: "sloppy", chinese_answer: "马虎的", chinese_romanization: "mǎhǔ de" },
            { option: "C", answer: "outdated", chinese_answer: "过时的", chinese_romanization: "guòshí de" },
            { option: "D", answer: "bland", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'stylish' means having or displaying a good sense of style." +
            "<br><br>" +
            "(B) 'sloppy' means carelessly dressed or done." +
            "<br><br>" +
            "(C) 'outdated' means old-fashioned or obsolete." +
            "<br><br>" +
            "(D) 'bland' means lacking strong features or characteristics and therefore uninteresting.",
        chinese_explanation: "(A) '时髦的' 意味着拥有或展示良好的时尚感。" +
            "<br><br>" +
            "(B) '马虎的' 意味着穿着或做事不仔细的。" +
            "<br><br>" +
            "(C) '过时的' 意味着过时或废弃的。" +
            "<br><br>" +
            "(D) '平淡的' 意味着缺乏强烈特征或特点，因此不有趣的。"
    },
    {
        id: 2,
        question: "The sunset over the ocean was absolutely __________, with vibrant colors painting the sky.",
        chinese_question: "海上日落绝对 __________，色彩艳丽地渲染着天空。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "B", answer: "hideous", chinese_answer: "丑陋的", chinese_romanization: "chǒulòu de" },
            { option: "C", answer: "gorgeous", chinese_answer: "美丽的", chinese_romanization: "měilì de" },
            { option: "D", answer: "plain", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gorgeous' means beautiful; very attractive." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(B) 'hideous' means ugly or disgusting to look at." +
            "<br><br>" +
            "(D) 'plain' means not decorated or elaborate; simple or ordinary in character.",
        chinese_explanation: "(C) '美丽的' 一词意味着美丽的；非常有吸引力的。" +
            "<br><br>" +
            "(A) '无聊的' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(B) '丑陋的' 意味着丑陋或令人厌恶的。" +
            "<br><br>" +
            "(D) '简单的' 意味着没有装饰或精心设计的；性格简单或普通。"
    },
    {
        id: 3,
        question: "The champion boxer faced a __________ opponent, making the match one of the most thrilling in his career.",
        chinese_question: "冠军拳击手遇到了一个 __________ 的对手，使这场比赛成为他职业生涯中最激动人心的一场。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "B", answer: "formidable", chinese_answer: "强大的", chinese_romanization: "qiángdà de" },
            { option: "C", answer: "easy", chinese_answer: "容易的", chinese_romanization: "róngyì de" },
            { option: "D", answer: "insignificant", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'formidable' means inspiring fear or respect through being impressively large, powerful, intense, or capable." +
            "<br><br>" +
            "(A) 'weak' means lacking the power to perform physically demanding tasks; having little physical strength or energy." +
            "<br><br>" +
            "(C) 'easy' means achieved without great effort; presenting few difficulties." +
            "<br><br>" +
            "(D) 'insignificant' means too small or unimportant to be worth consideration.",
        chinese_explanation: "(B) '强大的' 意味着通过令人印象深刻的大、强、有力或能干而激起恐惧或尊敬的。" +
            "<br><br>" +
            "(A) '虚弱的' 意味着缺乏执行体力任务的力量；体力或能量很少。" +
            "<br><br>" +
            "(C) '容易的' 意味着不需要太多努力就能完成的；呈现出少数困难的。" +
            "<br><br>" +
            "(D) '微不足道的' 意味着太小或不重要，不值得考虑的。"
    },
    {
        id: 4,
        question: "The hike was challenging, with __________ cliffs that required careful navigation.",
        chinese_question: "这次徒步旅行很有挑战性，有 __________ 的悬崖需要小心导航。",
        answers: [
            { option: "A", answer: "gradual", chinese_answer: "逐渐的", chinese_romanization: "zhújiàn de" },
            { option: "B", answer: "flat", chinese_answer: "平坦的", chinese_romanization: "píngtǎn de" },
            { option: "C", answer: "precipitous", chinese_answer: "陡峭的", chinese_romanization: "dǒuqiào de" },
            { option: "D", answer: "gentle", chinese_answer: "温和的", chinese_romanization: "wēnhé de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'precipitous' means dangerously high or steep." +
            "<br><br>" +
            "(A) 'gradual' means taking place or progressing slowly or by degrees." +
            "<br><br>" +
            "(B) 'flat' means having a level surface; without raised areas or indentations." +
            "<br><br>" +
            "(D) 'gentle' means having or showing a mild, kind, or tender temperament or character.",
        chinese_explanation: "(C) '陡峭的' 意味着危险地高或陡的。" +
            "<br><br>" +
            "(A) '逐渐的' 意味着缓慢地或逐步进行的。" +
            "<br><br>" +
            "(B) '平坦的' 意味着具有水平表面的；没有凸起区域或凹痕的。" +
            "<br><br>" +
            "(D) '温和的' 意味着具有或表现出温和、善良或温柔的性格或特征的。"
    },
    {
        id: 5,
        question: "The __________ music played softly in the background, adding to the somber mood of the evening.",
        chinese_question: "背景中播放的 __________ 音乐，为晚上的沉重气氛增添了几分忧郁。",
        answers: [
            { option: "A", answer: "cheerful", chinese_answer: "欢乐", chinese_romanization: "huānlè" },
            { option: "B", answer: "melancholy", chinese_answer: "忧郁", chinese_romanization: "yōuyù" },
            { option: "C", answer: "joyful", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "D", answer: "lively", chinese_answer: "活泼", chinese_romanization: "huópō" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'melancholy' means a feeling of pensive sadness, typically with no obvious cause." +
            "<br><br>" +
            "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(C) 'joyful' means feeling, expressing, or causing great pleasure and happiness." +
            "<br><br>" +
            "(D) 'lively' means full of life and energy.",
        chinese_explanation: "(B) '忧郁' 意味着一种沉思的悲伤感，通常没有明显的原因。" +
            "<br><br>" +
            "(A) '欢乐' 意味着显著地快乐和乐观。" +
            "<br><br>" +
            "(C) '快乐' 意味着感觉、表达或引起极大的快乐和幸福。" +
            "<br><br>" +
            "(D) '活泼' 意味着充满生命和能量。"
    },
    {
        id: 6,
        question: "In a world increasingly dependent on technology, access to the internet has become __________ for both work and personal life.",
        chinese_question: "在一个日益依赖技术的世界里，互联网接入已成为工作和个人生活的 __________。",
        answers: [
            { option: "A", answer: "indispensable", chinese_answer: "不可或缺的", chinese_romanization: "bùkě huòquē de" },
            { option: "B", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "C", answer: "redundant", chinese_answer: "多余的", chinese_romanization: "duōyú de" },
            { option: "D", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'indispensable' means absolutely necessary." +
            "<br><br>" +
            "(B) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(C) 'redundant' means no longer needed or useful; superfluous." +
            "<br><br>" +
            "(D) 'superficial' means existing or occurring at or on the surface.",
        chinese_explanation: "(A) '不可或缺的' 意味着绝对必要的。" +
            "<br><br>" +
            "(B) '琐碎的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(C) '多余的' 意味着不再需要或有用的；多余的。" +
            "<br><br>" +
            "(D) '表面的' 意味着存在或发生在表面上的。"
    },
    {
        id: 7,
        question: "She left the door slightly __________ to let in some fresh air.",
        chinese_question: "她把门稍微 __________，让一些新鲜空气进来。",
        answers: [
            { option: "A", answer: "ajar", chinese_answer: "微开", chinese_romanization: "wēi kāi" },
            { option: "B", answer: "closed", chinese_answer: "关闭", chinese_romanization: "guānbì" },
            { option: "C", answer: "locked", chinese_answer: "锁上", chinese_romanization: "suǒ shàng" },
            { option: "D", answer: "shut", chinese_answer: "闭上", chinese_romanization: "bì shàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ajar' means (of a door or other opening) slightly open." +
            "<br><br>" +
            "(B) 'closed' means not open." +
            "<br><br>" +
            "(C) 'locked' means fastened or secured with a lock." +
            "<br><br>" +
            "(D) 'shut' means move (something) into position so that it blocks an opening.",
        chinese_explanation: "(A) '微开' 意味着（门或其他开口）微微打开。" +
            "<br><br>" +
            "(B) '关闭' 意味着不打开。" +
            "<br><br>" +
            "(C) '锁上' 意味着用锁固定或锁上。" +
            "<br><br>" +
            "(D) '闭上' 意味着将（某物）移到位置上以阻挡开口。"
    },
    {
        id: 8,
        question: "Her __________ research on the impact of social media on youth behavior provided valuable insights into the complex effects of digital communication.",
        chinese_question: "她关于社交媒体对青少年行为影响的 __________ 研究提供了关于数字通信复杂效应的宝贵见解。",
        answers: [
            { option: "A", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "B", answer: "sociological", chinese_answer: "社会学的", chinese_romanization: "shèhuìxué de" },
            { option: "C", answer: "unrelated", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
            { option: "D", answer: "unimportant", chinese_answer: "不重要的", chinese_romanization: "bù zhòngyào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sociological' means relating to the study of the development, structure, and functioning of human society." +
            "<br><br>" +
            "(A) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(C) 'unrelated' means not connected or linked." +
            "<br><br>" +
            "(D) 'unimportant' means lacking significance or value.",
        chinese_explanation: "(B) '社会学的' 意思是与人类社会的发展、结构和功能研究有关的。" +
            "<br><br>" +
            "(A) '随意的' 意思是放松和不关心的。" +
            "<br><br>" +
            "(C) '无关的' 意思是没有连接或联系的。" +
            "<br><br>" +
            "(D) '不重要的' 意思是缺乏意义或价值的。"
    },
    {
        id: 9,
        question: "The rise of social media has brought about significant __________ changes, affecting how people communicate and interact with one another.",
        chinese_question: "社交媒体的兴起带来了显著的 __________ 变化，影响了人们的沟通和互动方式。",
        answers: [
            { option: "A", answer: "biological", chinese_answer: "生物的", chinese_romanization: "shēngwù de" },
            { option: "B", answer: "mechanical", chinese_answer: "机械的", chinese_romanization: "jīxiè de" },
            { option: "C", answer: "artistic", chinese_answer: "艺术的", chinese_romanization: "yìshù de" },
            { option: "D", answer: "societal", chinese_answer: "社会的", chinese_romanization: "shèhuì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'societal' means relating to society or social relations." +
            "<br><br>" +
            "(A) 'biological' means relating to biology or living organisms." +
            "<br><br>" +
            "(B) 'mechanical' means relating to machines or machinery." +
            "<br><br>" +
            "(C) 'artistic' means relating to or characteristic of art or artists.",
        chinese_explanation: "(D) '社会的' 意味着与社会或社会关系有关的。" +
            "<br><br>" +
            "(A) '生物的' 意味着与生物学或生物体有关的。" +
            "<br><br>" +
            "(B) '机械的' 意味着与机器或机械有关的。" +
            "<br><br>" +
            "(C) '艺术的' 意味着与艺术或艺术家有关的。"
    },
    {
        id: 10,
        question: "She was __________ that she would not change her plans, no matter what.",
        chinese_question: "她__________，无论如何都不会改变计划。",
        answers: [
            { option: "A", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" },
            { option: "B", answer: "adamant", chinese_answer: "坚决的", chinese_romanization: "jiānjué de" },
            { option: "C", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
            { option: "D", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'adamant' means refusing to be persuaded or to change one's mind." +
            "<br><br>" +
            "(A) 'flexible' means capable of bending easily without breaking." +
            "<br><br>" +
            "(C) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(D) 'uncertain' means not able to be relied on; not known or definite.",
        chinese_explanation: "(B) '坚决的'一词意味着拒绝被说服或改变主意。" +
            "<br><br>" +
            "(A) '灵活的' 意味着能够轻松弯曲而不折断。" +
            "<br><br>" +
            "(C) '犹豫的' 意味着试探性、不确定或行动或说话缓慢的。" +
            "<br><br>" +
            "(D) '不确定的' 意味着不能依赖的；未知的或不确定的。"
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
