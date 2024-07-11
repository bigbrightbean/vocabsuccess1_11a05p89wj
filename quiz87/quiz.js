// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The author took great care to __________ the events of his childhood in his memoir.",
        chinese_question: "作者在回忆录中非常用心地 __________ 了他童年的事件。",
        answers: [
            { option: "A", answer: "confuse", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" },
            { option: "B", answer: "invent", chinese_answer: "虚构", chinese_romanization: "xūgòu" },
            { option: "C", answer: "narrate", chinese_answer: "叙述", chinese_romanization: "xùshù" },
            { option: "D", answer: "erase", chinese_answer: "抹去", chinese_romanization: "mǒqù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'narrate' means to give a spoken or written account of." +
            "<br><br>" +
            "(A) 'confuse' means to make someone unable to think clearly." +
            "<br><br>" +
            "(B) 'invent' means to create or design something that did not exist before." +
            "<br><br>" +
            "(D) 'erase' means to remove or obliterate something.",
        chinese_explanation: "(C) '叙述' 一词意味着给出口头或书面的描述。" +
            "<br><br>" +
            "(A) '混淆' 意味着使某人无法清晰思考。" +
            "<br><br>" +
            "(B) '虚构' 意味着创造或设计以前不存在的东西。" +
            "<br><br>" +
            "(D) '抹去' 意味着移除或抹掉某物。"
    },
    {
        id: 2,
        question: "To support his argument, he decided to __________ a famous line from Shakespeare's plays.",
        chinese_question: "为了支持他的论点，他决定 __________ 莎士比亚剧中的一句名言。",
        answers: [
            { option: "A", answer: "quote", chinese_answer: "引用", chinese_romanization: "yǐnyòng" },
            { option: "B", answer: "invent", chinese_answer: "虚构", chinese_romanization: "xūgòu" },
            { option: "C", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
            { option: "D", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'quote' means to repeat or copy out a group of words from a text or speech." +
            "<br><br>" +
            "(B) 'invent' means to create or design something that did not exist before." +
            "<br><br>" +
            "(C) 'forget' means to fail to remember." +
            "<br><br>" +
            "(D) 'dismiss' means to treat as unworthy of serious consideration.",
        chinese_explanation: "(A) '引用' 一词意味着重复或抄录一组文字或演讲。" +
            "<br><br>" +
            "(B) '虚构' 意味着创造或设计以前不存在的东西。" +
            "<br><br>" +
            "(C) '忘记' 意味着未能记住。" +
            "<br><br>" +
            "(D) '驳回' 意味着认为不值得认真考虑。"
    },
    {
        id: 3,
        question: "The regime continued to __________ the people, denying them basic human rights and freedoms.",
        chinese_question: "该政权继续 __________ 人民，剥夺他们的基本人权和自由。",
        answers: [
            { option: "A", answer: "liberate", chinese_answer: "解放", chinese_romanization: "jiěfàng" },
            { option: "B", answer: "oppress", chinese_answer: "压迫", chinese_romanization: "yāpò" },
            { option: "C", answer: "uplift", chinese_answer: "提升", chinese_romanization: "tíshēng" },
            { option: "D", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'oppress' means to keep someone in subjection and hardship, especially by the unjust exercise of authority." +
            "<br><br>" +
            "(A) 'liberate' means to set someone free from a situation." +
            "<br><br>" +
            "(C) 'uplift' means to raise the level of." +
            "<br><br>" +
            "(D) 'encourage' means to give support, confidence, or hope to someone.",
        chinese_explanation: "(B) '压迫' 一词意味着通过不公正的权力行使使某人处于压制和困苦中。" +
            "<br><br>" +
            "(A) '解放' 意味着使某人从一种情况中解脱出来。" +
            "<br><br>" +
            "(C) '提升' 意味着提高...的水平。" +
            "<br><br>" +
            "(D) '鼓励' 意味着给予某人支持、信心或希望。"
    },
    {
        id: 4,
        question: "The red flag on the beach __________ danger, warning swimmers to stay out of the water.",
        chinese_question: "海滩上的红旗 __________ 危险，警告游泳者不要下水。",
        answers: [
            { option: "A", answer: "signify", chinese_answer: "表示", chinese_romanization: "biǎoshì" },
            { option: "B", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "C", answer: "contradict", chinese_answer: "矛盾", chinese_romanization: "máodùn" },
            { option: "D", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'signify' means to be an indication of." +
            "<br><br>" +
            "(B) 'conceal' means to keep from sight; hide." +
            "<br><br>" +
            "(C) 'contradict' means to deny the truth of a statement by asserting the opposite." +
            "<br><br>" +
            "(D) 'dismiss' means to order or allow to leave; send away.",
        chinese_explanation: "(A) '表示' 一词意味着是...的迹象。" +
            "<br><br>" +
            "(B) '隐藏' 意味着隐藏不让人看到。" +
            "<br><br>" +
            "(C) '矛盾' 意味着通过断言相反来否认声明的真实性。" +
            "<br><br>" +
            "(D) '驳回' 意味着命令或允许离开；送走。"
    },
    {
        id: 5,
        question: "He began to __________ a strange smell coming from the kitchen, indicating that something might be burning.",
        chinese_question: "他开始 __________ 厨房里传来一股奇怪的气味，表明可能有东西在烧。",
        answers: [
            { option: "A", answer: "miss", chinese_answer: "错过", chinese_romanization: "cuòguò" },
            { option: "B", answer: "perceive", chinese_answer: "察觉", chinese_romanization: "chájué" },
            { option: "C", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "D", answer: "disregard", chinese_answer: "无视", chinese_romanization: "wúshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'perceive' means to become aware or conscious of something." +
            "<br><br>" +
            "(A) 'miss' means to fail to notice, hear, or understand." +
            "<br><br>" +
            "(C) 'overlook' means to fail to notice." +
            "<br><br>" +
            "(D) 'disregard' means to pay no attention to; ignore.",
        chinese_explanation: "(B) '察觉' 一词意味着变得意识到或注意到某事。" +
            "<br><br>" +
            "(A) '错过' 意味着未能注意到、听到或理解。" +
            "<br><br>" +
            "(C) '忽略' 意味着未能注意到。" +
            "<br><br>" +
            "(D) '无视' 意味着不注意；忽视。"
    },
    {
        id: 6,
        question: "Without proper care, the vibrant flowers began to __________ and lose their beauty.",
        chinese_question: "如果不适当护理，这些鲜艳的花朵开始 __________ 并失去它们的美丽。",
        answers: [
            { option: "A", answer: "thrive", chinese_answer: "茁壮成长", chinese_romanization: "zhuózhuàng chéngzhǎng" },
            { option: "B", answer: "bloom", chinese_answer: "开花", chinese_romanization: "kāihuā" },
            { option: "C", answer: "flourish", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
            { option: "D", answer: "wither", chinese_answer: "枯萎", chinese_romanization: "kūwěi" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'wither' means to become dry and shriveled." +
            "<br><br>" +
            "(A) 'thrive' means to grow or develop well." +
            "<br><br>" +
            "(B) 'bloom' means to produce flowers." +
            "<br><br>" +
            "(C) 'flourish' means to grow or develop in a healthy way.",
        chinese_explanation: "(D) '枯萎' 一词意味着变得干枯和枯萎。" +
            "<br><br>" +
            "(A) '茁壮成长' 意味着生长或发展得很好。" +
            "<br><br>" +
            "(B) '开花' 意味着开花。" +
            "<br><br>" +
            "(C) '繁荣' 意味着健康地生长或发展。"
    },
    {
        id: 7,
        question: "Viruses can __________ from one person to another through various means, such as coughing or sneezing.",
        chinese_question: "病毒可以通过咳嗽或打喷嚏等多种方式 __________ 从一个人传播到另一个人。",
        answers: [
            { option: "A", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "B", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "C", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "D", answer: "transmit", chinese_answer: "传播", chinese_romanization: "chuánbō" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'transmit' means to cause something to pass from one place or person to another." +
            "<br><br>" +
            "(A) 'conceal' means to keep from sight; hide." +
            "<br><br>" +
            "(B) 'avoid' means to keep away from or stop oneself from doing something." +
            "<br><br>" +
            "(C) 'hinder' means to create difficulties for someone or something.",
        chinese_explanation: "(D) '传播' 一词意味着使某物从一个地方或人传到另一个地方。" +
            "<br><br>" +
            "(A) '隐藏' 意味着隐藏不让人看到。" +
            "<br><br>" +
            "(B) '避免' 意味着远离或阻止自己做某事。" +
            "<br><br>" +
            "(C) '阻碍' 意味着给某人或某事造成困难。"
    },
    {
        id: 8,
        question: "She managed to __________ her parents to let her go to the party, with well-prepared arguments and heartfelt pleas.",
        chinese_question: "通过准备充分的论点和真诚的请求，她设法__________父母让她去参加派对。",
        answers: [
            { option: "A", answer: "discourage", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" },
            { option: "B", answer: "convince", chinese_answer: "说服", chinese_romanization: "shuōfú" },
            { option: "C", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
            { option: "D", answer: "dissuade", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'convince' means to cause (someone) to believe firmly in the truth of something." +
            "<br><br>" +
            "(A) 'discourage' means cause (someone) to lose confidence or enthusiasm." +
            "<br><br>" +
            "(C) 'confuse' means make (someone) bewildered or perplexed." +
            "<br><br>" +
            "(D) 'dissuade' means persuade (someone) not to take a particular course of action.",
        chinese_explanation: "(B) '说服' 一词意味着使（某人）坚信某事的真实性。" +
            "<br><br>" +
            "(A) '劝阻' 意味着使（某人）失去信心或热情。" +
            "<br><br>" +
            "(C) '使困惑' 意味着使（某人）困惑或迷惑。" +
            "<br><br>" +
            "(D) '劝阻' 意味着劝阻（某人）不采取特定行动。"
    },
    {
        id: 9,
        question: "He began to __________ through the old attic, searching for his grandmother's lost letters.",
        chinese_question: "他开始在旧阁楼里 __________，寻找他祖母丢失的信件。",
        answers: [
            { option: "A", answer: "organize", chinese_answer: "整理", chinese_romanization: "zhěnglǐ" },
            { option: "B", answer: "rummage", chinese_answer: "翻找", chinese_romanization: "fānzhǎo" },
            { option: "C", answer: "display", chinese_answer: "展示", chinese_romanization: "zhǎnshì" },
            { option: "D", answer: "tidy", chinese_answer: "整理", chinese_romanization: "zhěnglǐ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rummage' means to search unsystematically and untidily through something." +
            "<br><br>" +
            "(A) 'organize' means to arrange into a structured whole." +
            "<br><br>" +
            "(C) 'display' means to show or exhibit." +
            "<br><br>" +
            "(D) 'tidy' means to arrange neatly and in order.",
        chinese_explanation: "(B) '翻找' 一词意味着无系统地、不整齐地搜索某物。" +
            "<br><br>" +
            "(A) '整理' 意味着排列成一个结构化的整体。" +
            "<br><br>" +
            "(C) '展示' 意味着展示或展览。" +
            "<br><br>" +
            "(D) '整理' 意味着整齐有序地排列。"
    },
    {
        id: 10,
        question: "He loved to __________ tales of his childhood adventures to anyone who would listen.",
        chinese_question: "他喜欢向愿意听的人 __________ 他童年的冒险故事。",
        answers: [
            { option: "A", answer: "recount", chinese_answer: "叙述", chinese_romanization: "xùshù" },
            { option: "B", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
            { option: "C", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "D", answer: "distort", chinese_answer: "扭曲", chinese_romanization: "niǔqū" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'recount' means to tell someone about something; give an account of an event or experience." +
            "<br><br>" +
            "(B) 'forget' means to fail to remember." +
            "<br><br>" +
            "(C) 'conceal' means to keep from sight; hide." +
            "<br><br>" +
            "(D) 'distort' means to pull or twist out of shape.",
        chinese_explanation: "(A) '叙述' 一词意味着告诉某人某事；对事件或经历的描述。" +
            "<br><br>" +
            "(B) '忘记' 意味着未能记住。" +
            "<br><br>" +
            "(C) '隐藏' 意味着不让被看到；隐藏。" +
            "<br><br>" +
            "(D) '扭曲' 意味着拉或扭曲变形。"
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
