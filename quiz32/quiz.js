// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The new laptop is so __________ that she can carry it anywhere she goes.",
        chinese_question: "新笔记本电脑如此 __________，她可以随身携带。",
        answers: [
            { option: "A", answer: "portable", chinese_answer: "便携的", chinese_romanization: "biànxié de" },
            { option: "B", answer: "cumbersome", chinese_answer: "笨重的", chinese_romanization: "bènzhòng de" },
            { option: "C", answer: "heavy", chinese_answer: "重的", chinese_romanization: "zhòng de" },
            { option: "D", answer: "bulky", chinese_answer: "庞大的", chinese_romanization: "pángdà de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'portable' means able to be easily carried or moved, especially because of being a lighter and smaller version than usual." +
            "<br><br>" +
            "(B) 'cumbersome' means large or heavy and therefore difficult to carry or use." +
            "<br><br>" +
            "(C) 'heavy' means of great weight; difficult to lift or move." +
            "<br><br>" +
            "(D) 'bulky' means taking up much space; large and unwieldy.",
        chinese_explanation: "(A) '便携的' 意味着容易携带或移动的，特别是因为比通常版本更轻和更小。" +
            "<br><br>" +
            "(B) '笨重的' 意味着大而重，因此难以携带或使用。" +
            "<br><br>" +
            "(C) '重的' 意味着重量大；难以举起或移动。" +
            "<br><br>" +
            "(D) '庞大的' 意味着占用很多空间；大而笨拙的。"
    },
    {
        id: 2,
        question: "The sports car had a __________ design, with smooth lines and a glossy finish.",
        chinese_question: "这辆跑车的设计__________，线条流畅，表面光滑。",
        answers: [
            { option: "A", answer: "bulky", chinese_answer: "笨重的", chinese_romanization: "bènzhòng de" },
            { option: "B", answer: "sleek", chinese_answer: "光滑的", chinese_romanization: "guānghuá de" },
            { option: "C", answer: "rugged", chinese_answer: "粗糙的", chinese_romanization: "cūcāo de" },
            { option: "D", answer: "dull", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sleek' means smooth and glossy." +
            "<br><br>" +
            "(A) 'bulky' means large and unwieldy." +
            "<br><br>" +
            "(C) 'rugged' means having a rough, uneven surface." +
            "<br><br>" +
            "(D) 'dull' means lacking interest or excitement.",
        chinese_explanation: "(B) '光滑的' 一词意味着光滑和有光泽的。" +
            "<br><br>" +
            "(A) '笨重的' 意味着大且笨重的。" +
            "<br><br>" +
            "(C) '粗糙的' 意味着表面粗糙不平的。" +
            "<br><br>" +
            "(D) '无聊的' 意味着缺乏兴趣或兴奋。"
    },
    {
        id: 3,
        question: "The __________ building was preserved as a museum to showcase its architectural significance.",
        chinese_question: "这座__________建筑被保存为博物馆，以展示其建筑的重要性。",
        answers: [
            { option: "A", answer: "modern", chinese_answer: "现代的", chinese_romanization: "xiàndài de" },
            { option: "B", answer: "historic", chinese_answer: "历史的", chinese_romanization: "lìshǐ de" },
            { option: "C", answer: "new", chinese_answer: "新的", chinese_romanization: "xīn de" },
            { option: "D", answer: "futuristic", chinese_answer: "未来的", chinese_romanization: "wèilái de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'historic' means famous or important in history." +
            "<br><br>" +
            "(A) 'modern' means relating to the present or recent times." +
            "<br><br>" +
            "(C) 'new' means not existing before." +
            "<br><br>" +
            "(D) 'futuristic' means having or involving very modern technology or design.",
        chinese_explanation: "(B) '历史的'一词意味着在历史上著名或重要的。" +
            "<br><br>" +
            "(A) '现代的' 意味着与现在或最近的时代有关的。" +
            "<br><br>" +
            "(C) '新的' 意味着以前不存在的。" +
            "<br><br>" +
            "(D) '未来的' 意味着具有或涉及非常现代的技术或设计的。"
    },
    {
        id: 4,
        question: "The village was so __________ that it could only be reached by a long, treacherous hike.",
        chinese_question: "这个村庄非常__________，只能通过漫长而危险的徒步旅行到达。",
        answers: [
            { option: "A", answer: "accessible", chinese_answer: "可达的", chinese_romanization: "kědá de" },
            { option: "B", answer: "nearby", chinese_answer: "附近的", chinese_romanization: "fùjìn de" },
            { option: "C", answer: "remote", chinese_answer: "偏远的", chinese_romanization: "piānyuǎn de" },
            { option: "D", answer: "close", chinese_answer: "近的", chinese_romanization: "jìn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'remote' means situated far from the main centers of population; distant." +
            "<br><br>" +
            "(A) 'accessible' means able to be reached or entered." +
            "<br><br>" +
            "(B) 'nearby' means close at hand; not far away." +
            "<br><br>" +
            "(D) 'close' means a short distance away or apart in space or time.",
        chinese_explanation: "(C) '偏远的'一词意味着远离主要人口中心的；遥远的。" +
            "<br><br>" +
            "(A) '可达的' 意味着能够到达或进入的。" +
            "<br><br>" +
            "(B) '附近的' 意味着在手边的；不远的。" +
            "<br><br>" +
            "(D) '近的' 意味着在空间或时间上距离短的。"
    },
    {
        id: 5,
        question: "She is always __________, never arriving late to meetings.",
        chinese_question: "她总是__________，从不迟到开会。",
        answers: [
            { option: "A", answer: "late", chinese_answer: "迟到的", chinese_romanization: "chídào de" },
            { option: "B", answer: "delayed", chinese_answer: "延迟的", chinese_romanization: "yánchí de" },
            { option: "C", answer: "punctual", chinese_answer: "准时的", chinese_romanization: "zhǔnshí de" },
            { option: "D", answer: "tardy", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'punctual' means happening or doing something at the agreed or proper time; on time." +
            "<br><br>" +
            "(A) 'late' means doing something or taking place after the expected, proper, or usual time." +
            "<br><br>" +
            "(B) 'delayed' means to make someone or something late or slow." +
            "<br><br>" +
            "(D) 'tardy' means delaying or delayed beyond the right or expected time; late.",
        chinese_explanation: "(C) '准时的'一词意味着在约定或适当的时间发生或做某事；准时的。" +
            "<br><br>" +
            "(A) '迟到的' 意味着在预期、适当或通常的时间之后做某事或发生。" +
            "<br><br>" +
            "(B) '延迟的' 意味着使某人或某事迟到或缓慢。" +
            "<br><br>" +
            "(D) '缓慢的' 意味着超出正确或预期时间的延迟或延误的；迟到的。"
    },
    {
        id: 6,
        question: "She was completely __________ to the fact that everyone in the room was staring at her brightly colored outfit.",
        chinese_question: "她完全 __________ 房间里所有人都在盯着她那身鲜艳的服装。",
        answers: [
            { option: "A", answer: "oblivious", chinese_answer: "没注意到的", chinese_romanization: "méi zhùyì dào de" },
            { option: "B", answer: "aware", chinese_answer: "意识到的", chinese_romanization: "yìshídào de" },
            { option: "C", answer: "conscious", chinese_answer: "清醒的", chinese_romanization: "qīngxǐng de" },
            { option: "D", answer: "attentive", chinese_answer: "专心的", chinese_romanization: "zhuānxīn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'oblivious' means not aware of or not concerned about what is happening around one." +
            "<br><br>" +
            "(B) 'aware' means having knowledge or perception of a situation or fact." +
            "<br><br>" +
            "(C) 'conscious' means aware of and responding to one's surroundings." +
            "<br><br>" +
            "(D) 'attentive' means paying close attention to something.",
        chinese_explanation: "(A) '没注意到的' 意味着没有意识到或不关心周围发生的事情。" +
            "<br><br>" +
            "(B) '意识到的' 意味着对情况或事实有认识或感知的。" +
            "<br><br>" +
            "(C) '清醒的' 意味着意识到并对周围环境作出反应的。" +
            "<br><br>" +
            "(D) '专心的' 意味着密切注意某事的。"
    },
    {
        id: 7,
        question: "She was always __________ of her surroundings, making sure to stay aware of any potential dangers.",
        chinese_question: "她总是 __________ 周围的环境，确保意识到任何潜在的危险。",
        answers: [
            { option: "A", answer: "oblivious", chinese_answer: "不注意的", chinese_romanization: "bù zhùyì de" },
            { option: "B", answer: "ignorant", chinese_answer: "无知的", chinese_romanization: "wúzhī de" },
            { option: "C", answer: "mindful", chinese_answer: "注意的", chinese_romanization: "zhùyì de" },
            { option: "D", answer: "unaware", chinese_answer: "没有意识到的", chinese_romanization: "méiyǒu yìshí dào de" }
        ],
        correctAnswer: "C",
        explanation: "'mindful' means conscious or aware of something." +
            "<br><br>" +
            "'oblivious' means not aware of or not concerned about what is happening around one." +
            "<br><br>" +
            "'ignorant' means lacking knowledge or awareness in general; uneducated or unsophisticated." +
            "<br><br>" +
            "'unaware' means having no knowledge of a situation or fact.",
        chinese_explanation: "'注意的' 一词意味着对某事有意识或意识到的。" +
            "<br><br>" +
            "'不注意的' 意味着没有意识到或不关心周围发生的事情。" +
            "<br><br>" +
            "'无知的' 意味着总体上缺乏知识或意识的；未受教育的或不复杂的。" +
            "<br><br>" +
            "'没有意识到的' 意味着不知道某种情况或事实的。"
    },
    {
        id: 8,
        question: "The hotel suite was incredibly __________, featuring a marble bathroom, silk sheets, and a stunning view of the ocean.",
        chinese_question: "这间酒店套房非常 __________，设有大理石浴室、丝绸床单和壮丽的海景。",
        answers: [
            { option: "A", answer: "luxurious", chinese_answer: "豪华的", chinese_romanization: "háohuá de" },
            { option: "B", answer: "spartan", chinese_answer: "简朴的", chinese_romanization: "jiǎnpǔ de" },
            { option: "C", answer: "modest", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" },
            { option: "D", answer: "basic", chinese_answer: "基本的", chinese_romanization: "jīběn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'luxurious' means extremely comfortable, elegant, or enjoyable, especially in a way that involves great expense." +
            "<br><br>" +
            "(B) 'spartan' means showing the indifference to comfort or luxury traditionally associated with ancient Sparta." +
            "<br><br>" +
            "(C) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'basic' means forming an essential foundation or starting point; fundamental.",
        chinese_explanation: "(A) '豪华的' 意味着极其舒适、优雅或愉快的，特别是涉及高昂费用的。" +
            "<br><br>" +
            "(B) '简朴的' 意味着显示出古斯巴达传统上对舒适或奢华的无所谓。" +
            "<br><br>" +
            "(C) '朴素的' 意味着对自己的能力或成就没有夸耀的。" +
            "<br><br>" +
            "(D) '基本的' 意味着构成基本基础或起点的。"
    },
    {
        id: 9,
        question: "He was __________ about the local customs, making several social blunders during his visit.",
        chinese_question: "他对当地的风俗__________，在访问期间犯了好几次社交错误。",
        answers: [
            { option: "A", answer: "knowledgeable", chinese_answer: "知识渊博的", chinese_romanization: "zhīshì yuānbó de" },
            { option: "B", answer: "aware", chinese_answer: "了解的", chinese_romanization: "liǎojiě de" },
            { option: "C", answer: "ignorant", chinese_answer: "无知的", chinese_romanization: "wúzhī de" },
            { option: "D", answer: "informed", chinese_answer: "有见识的", chinese_romanization: "yǒu jiànshí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ignorant' means lacking knowledge or awareness in general; uneducated or unsophisticated." +
            "<br><br>" +
            "(A) 'knowledgeable' means intelligent and well-informed." +
            "<br><br>" +
            "(B) 'aware' means having knowledge or perception of a situation or fact." +
            "<br><br>" +
            "(D) 'informed' means having or showing knowledge of a particular subject or situation.",
        chinese_explanation: "(C) '无知的'一词意味着缺乏一般知识或意识的；未受教育或不成熟的。" +
            "<br><br>" +
            "(A) '知识渊博的' 意味着聪明和见多识广的。" +
            "<br><br>" +
            "(B) '了解的' 意味着对情况或事实有认识的。" +
            "<br><br>" +
            "(D) '有见识的' 意味着对特定主题或情况有或表现出知识的。"
    },
    {
        id: 10,
        question: "In the ecosystem, the __________ species often controls the resources and influences the survival of other species.",
        chinese_question: "在生态系统中， __________ 的物种通常控制资源并影响其他物种的生存。",
        answers: [
            { option: "A", answer: "dominant", chinese_answer: "优势的", chinese_romanization: "yōushì de" },
            { option: "B", answer: "submissive", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
            { option: "C", answer: "secondary", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "D", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dominant' means having power and influence over others." +
            "<br><br>" +
            "(B) 'submissive' means ready to conform to the authority or will of others." +
            "<br><br>" +
            "(C) 'secondary' means coming after, less important than, or resulting from someone or something else that is primary." +
            "<br><br>" +
            "(D) 'minor' means lesser in importance, seriousness, or significance.",
        chinese_explanation: "(A) '优势的' 意味着拥有对他人的权力和影响力。" +
            "<br><br>" +
            "(B) '顺从的' 意味着准备服从权威或他人的意愿。" +
            "<br><br>" +
            "(C) '次要的' 意味着在某人或某事物之后，重要性较小或由主要事物导致的。" +
            "<br><br>" +
            "(D) '次要的' 意味着在重要性、严重性或意义上较小的。"
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
