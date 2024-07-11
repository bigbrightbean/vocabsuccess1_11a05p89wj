// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "After years of living abroad, she began to __________ for the familiarity and comfort of her hometown.",
        chinese_question: "多年生活在国外后，她开始 __________ 家乡的熟悉感和安慰。",
        answers: [
            { option: "A", answer: "despise", chinese_answer: "鄙视", chinese_romanization: "bǐshì" },
            { option: "B", answer: "yearn", chinese_answer: "渴望", chinese_romanization: "kěwàng" },
            { option: "C", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'yearn' means have an intense feeling of longing for something, typically something that one has lost or been separated from." +
            "<br><br>" +
            "(A) 'despise' means feel contempt or a deep repugnance for." +
            "<br><br>" +
            "(C) 'disregard' means pay no attention to; ignore." +
            "<br><br>" +
            "(D) 'reject' means dismiss as inadequate, unacceptable, or faulty.",
        chinese_explanation: "(B) '渴望' 意味着对某物有强烈的渴望，通常是对失去或分离的东西。" +
            "<br><br>" +
            "(A) '鄙视' 意味着感到蔑视或深深的厌恶。" +
            "<br><br>" +
            "(C) '忽视' 意味着不注意；无视。" +
            "<br><br>" +
            "(D) '拒绝' 意味着认为不合格、不接受或有缺陷。"
    },
    {
        id: 2,
        question: "The smell of fresh bread from the bakery was enough to __________ passersby to step inside and make a purchase.",
        chinese_question: "面包店里新鲜面包的香味足以 __________ 路人进去购买。",
        answers: [
            { option: "A", answer: "repel", chinese_answer: "击退", chinese_romanization: "jītuì" },
            { option: "B", answer: "discourage", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
            { option: "C", answer: "entice", chinese_answer: "诱使", chinese_romanization: "yòushǐ" },
            { option: "D", answer: "bore", chinese_answer: "使厌烦", chinese_romanization: "shǐ yànfán" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'entice' means attract or tempt by offering pleasure or advantage." +
            "<br><br>" +
            "(A) 'repel' means drive or force (an attack or attacker) back or away." +
            "<br><br>" +
            "(B) 'discourage' means cause (someone) to lose confidence or enthusiasm." +
            "<br><br>" +
            "(D) 'bore' means make (someone) feel weary and uninterested by tedious talk or dullness.",
        chinese_explanation: "(C) '诱使' 意味着通过提供快乐或优势吸引或诱惑。" +
            "<br><br>" +
            "(A) '击退' 意味着驱赶或迫使（攻击或攻击者）后退或离开。" +
            "<br><br>" +
            "(B) '劝阻' 意味着使（某人）失去信心或热情。" +
            "<br><br>" +
            "(D) '使厌烦' 意味着通过乏味的谈话或无聊使（某人）感到疲倦和无兴趣。"
    },
    {
        id: 3,
        question: "Many fans gathered to __________ the passing of the beloved author, sharing stories and memories of how his books had impacted their lives.",
        chinese_question: "许多粉丝聚集在一起 __________ 这位深受喜爱的作家的离世，分享他书籍如何影响他们生活的故事和记忆。",
        answers: [
            { option: "A", answer: "lament", chinese_answer: "哀悼", chinese_romanization: "āidào" },
            { option: "B", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "C", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
            { option: "D", answer: "rejoice", chinese_answer: "欢喜", chinese_romanization: "huānxǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'lament' means express passionate grief about." +
            "<br><br>" +
            "(B) 'celebrate' means acknowledge (a significant or happy day or event) with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(C) 'dismiss' means treat as unworthy of serious consideration." +
            "<br><br>" +
            "(D) 'rejoice' means feel or show great joy or delight.",
        chinese_explanation: "(A) '哀悼' 意味着表达强烈的悲伤。" +
            "<br><br>" +
            "(B) '庆祝' 意味着通过社交聚会或愉快的活动来承认（重要或快乐的日子或事件）。" +
            "<br><br>" +
            "(C) '驳回' 意味着认为不值得认真考虑。" +
            "<br><br>" +
            "(D) '欢喜' 意味着感到或表现出极大的快乐或喜悦。"
    },
    {
        id: 4,
        question: "The scientist had to __________ the results of the experiment before presenting them to the scientific community.",
        chinese_question: "科学家必须在向科学界展示实验结果之前 __________ 这些结果。",
        answers: [
            { option: "A", answer: "invalidate", chinese_answer: "使无效", chinese_romanization: "shǐ wúxiào" },
            { option: "B", answer: "validate", chinese_answer: "验证", chinese_romanization: "yànzhèng" },
            { option: "C", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "D", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'validate' means check or prove the validity or accuracy of (something)." +
            "<br><br>" +
            "(A) 'invalidate' means make (an argument, statement, or theory) unsound or erroneous." +
            "<br><br>" +
            "(C) 'neglect' means fail to care for properly." +
            "<br><br>" +
            "(D) 'overlook' means fail to notice (something).",
        chinese_explanation: "(B) '验证' 意味着检查或证明（某事）的有效性或准确性。" +
            "<br><br>" +
            "(A) '使无效' 意味着使（论点、陈述或理论）不合理或错误。" +
            "<br><br>" +
            "(C) '忽略' 意味着未能适当照顾。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能注意到（某事）。"
    },
    {
        id: 5,
        question: "The scientist had to __________ the data carefully to ensure that no mistakes were made in the analysis.",
        chinese_question: "科学家必须仔细 __________ 数据，以确保分析中没有错误。",
        answers: [
            { option: "A", answer: "overlook", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "disregard", chinese_answer: "不理会", chinese_romanization: "bù lǐhuì" },
            { option: "C", answer: "scrutinize", chinese_answer: "仔细检查", chinese_romanization: "zǐxì jiǎnchá" },
            { option: "D", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'scrutinize' means examine or inspect closely and thoroughly." +
            "<br><br>" +
            "(A) 'overlook' means fail to notice (something)." +
            "<br><br>" +
            "(B) 'disregard' means pay no attention to; ignore." +
            "<br><br>" +
            "(D) 'neglect' means fail to care for properly.",
        chinese_explanation: "(C) '仔细检查' 意味着仔细和彻底地检查或检查。" +
            "<br><br>" +
            "(A) '忽视' 意味着未能注意到（某事）。" +
            "<br><br>" +
            "(B) '不理会' 意味着不注意；忽视。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能正确照顾。"
    },
    {
        id: 6,
        question: "The inspirational speech served to __________ the young students' passion for learning and discovery.",
        chinese_question: "励志演讲 __________ 了年轻学生对学习和探索的热情。",
        answers: [
            { option: "A", answer: "extinguish", chinese_answer: "熄灭", chinese_romanization: "xīmiè" },
            { option: "B", answer: "suppress", chinese_answer: "抑制", chinese_romanization: "yìzhì" },
            { option: "C", answer: "dampen", chinese_answer: "减弱", chinese_romanization: "jiǎnruò" },
            { option: "D", answer: "kindle", chinese_answer: "激发", chinese_romanization: "jīfā" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'kindle' means arouse or inspire (an emotion or feeling)." +
            "<br><br>" +
            "(A) 'extinguish' means cause (a fire or light) to cease to burn or shine." +
            "<br><br>" +
            "(B) 'suppress' means forcibly put an end to." +
            "<br><br>" +
            "(C) 'dampen' means make less strong or intense.",
        chinese_explanation: "(D) '激发' 意味着唤起或激发（情感或感觉）。" +
            "<br><br>" +
            "(A) '熄灭' 意味着使（火或光）停止燃烧或发光。" +
            "<br><br>" +
            "(B) '抑制' 意味着强行结束。" +
            "<br><br>" +
            "(C) '减弱' 意味着使强度或强度减弱。"
    },
    {
        id: 7,
        question: "He sat in the park to __________ over the important decision he needed to make, weighing all the pros and cons.",
        chinese_question: "他坐在公园里 __________ 要做的重要决定，权衡所有的利弊。",
        answers: [
            { option: "A", answer: "laugh", chinese_answer: "笑", chinese_romanization: "xiào" },
            { option: "B", answer: "rush", chinese_answer: "匆忙", chinese_romanization: "cōngmáng" },
            { option: "C", answer: "sing", chinese_answer: "唱歌", chinese_romanization: "chànggē" },
            { option: "D", answer: "ponder", chinese_answer: "沉思", chinese_romanization: "chénsī" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ponder' means think about (something) carefully, especially before making a decision or reaching a conclusion." +
            "<br><br>" +
            "(A) 'laugh' means make the spontaneous sounds and movements of the face and body that are the instinctive expressions of lively amusement." +
            "<br><br>" +
            "(B) 'rush' means move with urgent haste." +
            "<br><br>" +
            "(C) 'sing' means make musical sounds with the voice, especially words with a set tune.",
        chinese_explanation: "(D) '沉思' 意味着仔细考虑（某事），特别是在做出决定或得出结论之前。" +
            "<br><br>" +
            "(A) '笑' 意味着发出自发的声音和面部和身体的动作，这是生动娱乐的本能表现。" +
            "<br><br>" +
            "(B) '匆忙' 意味着急切地移动。" +
            "<br><br>" +
            "(C) '唱歌' 意味着用声音发出音乐，特别是带有固定曲调的词语。"
    },
    {
        id: 8,
        question: "The cold water helped to __________ his thirst after the long hike in the hot sun.",
        chinese_question: "冷水帮助他在烈日下长途跋涉后 __________ 了口渴。",
        answers: [
            { option: "A", answer: "prolong", chinese_answer: "延长", chinese_romanization: "yáncháng" },
            { option: "B", answer: "quench", chinese_answer: "解渴", chinese_romanization: "jiěkě" },
            { option: "C", answer: "intensify", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "D", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'quench' means satisfy (one's thirst) by drinking." +
            "<br><br>" +
            "(A) 'prolong' means extend the duration of." +
            "<br><br>" +
            "(C) 'intensify' means become or make more intense." +
            "<br><br>" +
            "(D) 'increase' means become or make greater in size, amount, intensity, or degree.",
        chinese_explanation: "(B) '解渴' 意味着通过喝水满足（口渴）。" +
            "<br><br>" +
            "(A) '延长' 意味着延长持续时间。" +
            "<br><br>" +
            "(C) '加剧' 意味着变得或使变得更强烈。" +
            "<br><br>" +
            "(D) '增加' 意味着在大小、数量、强度或程度上变得或使变得更大。"
    },
    {
        id: 9,
        question: "She spent hours working to __________ her essay, making sure every argument was clear and compelling.",
        chinese_question: "她花了几个小时 __________ 她的文章，确保每个论点都清晰有力。",
        answers: [
            { option: "A", answer: "degrade", chinese_answer: "降低", chinese_romanization: "jiàngdī" },
            { option: "B", answer: "distort", chinese_answer: "扭曲", chinese_romanization: "niǔqū" },
            { option: "C", answer: "refine", chinese_answer: "提炼", chinese_romanization: "tíliàn" },
            { option: "D", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'refine' means improve (something) by making small changes, in particular make (an idea, theory, or method) more subtle and accurate." +
            "<br><br>" +
            "(A) 'degrade' means treat or regard (someone) with contempt or disrespect." +
            "<br><br>" +
            "(B) 'distort' means pull or twist out of shape." +
            "<br><br>" +
            "(D) 'neglect' means fail to care for properly.",
        chinese_explanation: "(C) '提炼' 意味着通过做小的改变来改进（某物），特别是使（一个想法、理论或方法）更微妙和准确。" +
            "<br><br>" +
            "(A) '降低' 意味着以轻蔑或不尊重的态度对待或看待（某人）。" +
            "<br><br>" +
            "(B) '扭曲' 意味着拉或扭曲变形。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能正确照顾。"
    },
    {
        id: 10,
        question: "He tried to __________ his friend to join him on the adventurous trip, highlighting all the exciting activities they would do.",
        chinese_question: "他试图 __________ 他的朋友和他一起参加这次冒险之旅，强调他们将进行的所有令人兴奋的活动。",
        answers: [
            { option: "A", answer: "persuade", chinese_answer: "说服", chinese_romanization: "shuōfú" },
            { option: "B", answer: "discourage", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
            { option: "C", answer: "dissuade", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
            { option: "D", answer: "procrastinate", chinese_answer: "拖延", chinese_romanization: "tuōyán" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'persuade' means cause (someone) to do something through reasoning or argument." +
            "<br><br>" +
            "(B) 'discourage' means cause (someone) to lose confidence or enthusiasm." +
            "<br><br>" +
            "(C) 'dissuade' means persuade (someone) not to take a particular course of action." +
            "<br><br>" +
            "(D) 'procrastinate' means delay or postpone action; put off doing something.",
        chinese_explanation: "(A) '说服' 意味着通过推理或争论使某人做某事。" +
            "<br><br>" +
            "(B) '劝阻' 意味着使某人失去信心或热情。" +
            "<br><br>" +
            "(C) '劝阻' 意味着劝说（某人）不要采取特定行动。" +
            "<br><br>" +
            "(D) '拖延' 意味着延迟或推迟行动；推迟做某事。"
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
