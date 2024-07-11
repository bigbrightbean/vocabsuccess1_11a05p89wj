// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The artist's new exhibit featured __________ sculptures that left visitors puzzled.",
        chinese_question: "艺术家的新展览展示了 __________ 的雕塑，让参观者感到困惑。",
        answers: [
            { option: "A", answer: "bizarre", chinese_answer: "奇异的", chinese_romanization: "qíyì de" },
            { option: "B", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "traditional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
            { option: "D", answer: "common", chinese_answer: "常见的", chinese_romanization: "chángjiàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bizarre' means very strange or unusual, especially so as to cause interest or amusement." +
            "<br><br>" +
            "(B) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(C) 'traditional' means existing in or as part of a tradition; long-established." +
            "<br><br>" +
            "(D) 'common' means occurring, found, or done often; prevalent.",
        chinese_explanation: "(A) '奇异的' 意味着非常奇怪或不寻常，尤其是引起兴趣或娱乐的。" +
            "<br><br>" +
            "(B) '普通的' 意味着没有特别或独特的特征；正常的。" +
            "<br><br>" +
            "(C) '传统的' 意味着存在于或作为传统的一部分；长期存在的。" +
            "<br><br>" +
            "(D) '常见的' 意味着经常发生、发现或完成的；流行的。"
    },
    {
        id: 2,
        question: "She felt __________ after hearing the bad news, unable to muster a smile for the rest of the day.",
        chinese_question: "听到坏消息后，她感到 __________，无法在剩下的时间里露出笑容。",
        answers: [
            { option: "A", answer: "elated", chinese_answer: "兴高采烈", chinese_romanization: "xìnggāocǎiliè" },
            { option: "B", answer: "glum", chinese_answer: "闷闷不乐", chinese_romanization: "mènmèn bù lè" },
            { option: "C", answer: "cheerful", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "D", answer: "ecstatic", chinese_answer: "欣喜若狂", chinese_romanization: "xīnxǐ ruò kuáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'glum' means looking or feeling dejected; morose." +
            "<br><br>" +
            "(A) 'elated' means very happy or proud." +
            "<br><br>" +
            "(C) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(D) 'ecstatic' means feeling or expressing overwhelming happiness or joyful excitement.",
        chinese_explanation: "(B) '闷闷不乐' 一词意味着看起来或感到沮丧；阴郁。" +
            "<br><br>" +
            "(A) '兴高采烈' 意味着非常高兴或自豪。" +
            "<br><br>" +
            "(C) '高兴' 意味着显著的高兴和乐观。" +
            "<br><br>" +
            "(D) '欣喜若狂' 意味着感到或表达极度的幸福或喜悦。"
    },
    {
        id: 3,
        question: "The medicine was extremely __________, providing immediate relief from the symptoms.",
        chinese_question: "这种药物非常 __________，能立即缓解症状。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "B", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "C", answer: "potent", chinese_answer: "强效的", chinese_romanization: "qiángxiào de" },
            { option: "D", answer: "ineffective", chinese_answer: "无效的", chinese_romanization: "wúxiào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'potent' means having great power, influence, or effect." +
            "<br><br>" +
            "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(B) 'mild' means gentle and not easily provoked." +
            "<br><br>" +
            "(D) 'ineffective' means not producing any significant or desired effect.",
        chinese_explanation: "(C) '强效的' 意味着具有强大力量、影响力或效果的。" +
            "<br><br>" +
            "(A) '虚弱的' 意味着缺乏执行体力任务的力量；缺乏体力和精力的。" +
            "<br><br>" +
            "(B) '温和的' 意味着温柔的，不容易激怒的。" +
            "<br><br>" +
            "(D) '无效的' 意味着不产生任何显著或预期效果的。"
    },
    {
        id: 4,
        question: "The weather was __________, with heavy rain and strong winds making it impossible to go outside.",
        chinese_question: "天气 __________，大雨和强风使得无法外出。",
        answers: [
            { option: "A", answer: "pleasant", chinese_answer: "宜人", chinese_romanization: "yírén" },
            { option: "B", answer: "mild", chinese_answer: "温和", chinese_romanization: "wēnhé" },
            { option: "C", answer: "awful", chinese_answer: "糟糕", chinese_romanization: "zāogāo" },
            { option: "D", answer: "clear", chinese_answer: "晴朗", chinese_romanization: "qínglǎng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'awful' means very bad or unpleasant." +
            "<br><br>" +
            "(A) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(B) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(D) 'clear' means free of any clouds or mist.",
        chinese_explanation: "(C) '糟糕' 意味着非常糟糕或不愉快。" +
            "<br><br>" +
            "(A) '宜人' 意味着带来愉快的满足感或享受。" +
            "<br><br>" +
            "(B) '温和' 意味着不严厉、不严重或不苛刻。" +
            "<br><br>" +
            "(D) '晴朗' 意味着没有云或雾。"
    },
    {
        id: 5,
        question: "The artist's latest work was criticized for being too __________, lacking the creativity of her previous pieces.",
        chinese_question: "这位艺术家的最新作品因过于 __________ 而受到批评，缺乏她以前作品的创造力。",
        answers: [
            { option: "A", answer: "imaginative", chinese_answer: "富有想象力的", chinese_romanization: "fùyǒu xiǎngxiàng lì de" },
            { option: "B", answer: "innovative", chinese_answer: "创新的", chinese_romanization: "chuàngxīn de" },
            { option: "C", answer: "exciting", chinese_answer: "令人兴奋的", chinese_romanization: "lìng rén xīngfèn de" },
            { option: "D", answer: "prosaic", chinese_answer: "平凡的", chinese_romanization: "píngfán de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'prosaic' means very boring and not creative. If something is prosaic, it does not have the beauty or imagination that makes art special." +
            "<br><br>" +
            "(A) 'imaginative' means having or showing creativity or inventiveness." +
            "<br><br>" +
            "(B) 'innovative' means introducing new ideas; original and creative in thinking." +
            "<br><br>" +
            "(C) 'exciting' means causing great enthusiasm and eagerness.",
        chinese_explanation: "(D) '平凡的' 意味着非常无聊且没有创造力的。如果某样东西是平凡的，它就没有使艺术特别的美感或想象力。" +
            "<br><br>" +
            "(A) '富有想象力的' 意味着有创造力或发明才能的。" +
            "<br><br>" +
            "(B) '创新的' 意味着引入新想法的；思维原创和创造性的。" +
            "<br><br>" +
            "(C) '令人兴奋的' 意味着引起极大热情和渴望的。"
    },
    {
        id: 6,
        question: "The hacker's __________ attack on the company's database caused significant data loss.",
        chinese_question: "黑客对公司数据库的 __________ 攻击导致了严重的数据丢失。",
        answers: [
            { option: "A", answer: "harmless", chinese_answer: "无害", chinese_romanization: "wúhài" },
            { option: "B", answer: "benevolent", chinese_answer: "仁慈", chinese_romanization: "réncí" },
            { option: "C", answer: "malicious", chinese_answer: "恶意", chinese_romanization: "èyì" },
            { option: "D", answer: "kind", chinese_answer: "善良", chinese_romanization: "shànliáng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'malicious' means characterized by malice; intending or intended to do harm." +
            "<br><br>" +
            "(A) 'harmless' means not able or likely to cause harm." +
            "<br><br>" +
            "(B) 'benevolent' means well meaning and kindly." +
            "<br><br>" +
            "(D) 'kind' means having or showing a friendly, generous, and considerate nature.",
        chinese_explanation: "(C) '恶意' 意味着具有恶意的；打算或意图造成伤害。" +
            "<br><br>" +
            "(A) '无害' 意味着不能或不太可能造成伤害。" +
            "<br><br>" +
            "(B) '仁慈' 意味着善良的。" +
            "<br><br>" +
            "(D) '善良' 意味着有或表现出友好、慷慨和体贴的性格。"
    },
    {
        id: 7,
        question: "He knew something was __________ when he noticed the broken window and missing valuables.",
        chinese_question: "当他注意到窗户破了和贵重物品不见时，他知道有些__________。",
        answers: [
            { option: "A", answer: "right", chinese_answer: "正确的", chinese_romanization: "zhèngquè de" },
            { option: "B", answer: "amiss", chinese_answer: "不对劲的", chinese_romanization: "bù duì jìn de" },
            { option: "C", answer: "perfect", chinese_answer: "完美的", chinese_romanization: "wánměi de" },
            { option: "D", answer: "expected", chinese_answer: "预料中的", chinese_romanization: "yùliào zhōng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'amiss' means not quite right; inappropriate or out of place." +
            "<br><br>" +
            "(A) 'right' means morally good, justified, or acceptable." +
            "<br><br>" +
            "(C) 'perfect' means having all the required or desirable elements, qualities, or characteristics; as good as it is possible to be." +
            "<br><br>" +
            "(D) 'expected' means regarded as likely to happen.",
        chinese_explanation: "(B) '不对劲的'一词意味着不完全正确的；不合适的或不合时宜的。" +
            "<br><br>" +
            "(A) '正确的' 意味着道德上好的、合理的或可接受的。" +
            "<br><br>" +
            "(C) '完美的' 意味着拥有所有所需或理想的元素、品质或特征；尽可能好的。" +
            "<br><br>" +
            "(D) '预料中的' 意味着被认为可能会发生的。"
    },
    {
        id: 8,
        question: "Her __________ presentation conveyed the key points effectively without unnecessary details, making it easy to understand.",
        chinese_question: "她的 __________ 演讲有效地传达了要点，没有不必要的细节，使其易于理解。",
        answers: [
            { option: "A", answer: "lengthy", chinese_answer: "冗长的", chinese_romanization: "rǒngcháng de" },
            { option: "B", answer: "verbose", chinese_answer: "冗长的", chinese_romanization: "rǒngcháng de" },
            { option: "C", answer: "concise", chinese_answer: "简明的", chinese_romanization: "jiǎnmíng de" },
            { option: "D", answer: "complicated", chinese_answer: "复杂的", chinese_romanization: "fùzá de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'concise' means giving a lot of information clearly and in a few words; brief but comprehensive." +
            "<br><br>" +
            "(A) 'lengthy' means (especially in reference to time) of considerable or unusual length, especially so as to be tedious." +
            "<br><br>" +
            "(B) 'verbose' means using or expressed in more words than are needed." +
            "<br><br>" +
            "(D) 'complicated' means consisting of many interconnecting parts or elements; intricate.",
        chinese_explanation: "(C) '简明的' 意味着用少量的词清楚地传达大量信息；简洁但全面的。" +
            "<br><br>" +
            "(A) '冗长的' 意味着（尤其是指时间）相当长或异常长，尤其是使人厌烦。" +
            "<br><br>" +
            "(B) '冗长的' 意味着使用或表达的词比需要的多。" +
            "<br><br>" +
            "(D) '复杂的' 意味着由许多相互连接的部分或元素组成；复杂的。"
    },
    {
        id: 9,
        question: "The company uses __________ software that is only available to its employees, ensuring exclusive access.",
        chinese_question: "公司使用 __________ 的软件，只供员工使用，确保独占访问。",
        answers: [
            { option: "A", answer: "open-source", chinese_answer: "开源的", chinese_romanization: "kāiyuán de" },
            { option: "B", answer: "public", chinese_answer: "公开的", chinese_romanization: "gōngkāi de" },
            { option: "C", answer: "proprietary", chinese_answer: "专有的", chinese_romanization: "zhuānyǒu de" },
            { option: "D", answer: "generic", chinese_answer: "通用的", chinese_romanization: "tōngyòng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'proprietary' means relating to an owner or ownership; protected by a patent, copyright, or trademark." +
            "<br><br>" +
            "(A) 'open-source' means denoting software for which the original source code is made freely available and may be redistributed and modified." +
            "<br><br>" +
            "(B) 'public' means open to or shared by all people." +
            "<br><br>" +
            "(D) 'generic' means characteristic of or relating to a class or group of things; not specific. It is not special or unique and can be used for many different things.",
        chinese_explanation: "(C) '专有的' 意味着与所有者或所有权有关的；受专利、版权或商标保护的。" +
            "<br><br>" +
            "(A) '开源的' 意味着指软件，其原始源代码是免费提供的，可以重新分发和修改的。" +
            "<br><br>" +
            "(B) '公开的' 意味着向所有人开放或共享的。" +
            "<br><br>" +
            "(D) '通用的' 意味着或与一类或一组事物有关的；非特定的。它不是特别或独特的，可以用于许多不同的事物。"
    },
    {
        id: 10,
        question: "The morning was __________, with fog obscuring the view of the distant hills.",
        chinese_question: "早晨是 __________ 的，雾气遮挡了远处的山丘。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "B", answer: "misty", chinese_answer: "有雾", chinese_romanization: "yǒu wù" },
            { option: "C", answer: "bright", chinese_answer: "明亮", chinese_romanization: "míngliàng" },
            { option: "D", answer: "sunny", chinese_answer: "阳光明媚", chinese_romanization: "yángguāng míngmèi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'misty' means full of, covered with, or accompanied by mist." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(C) 'bright' means giving out or reflecting a lot of light; shining." +
            "<br><br>" +
            "(D) 'sunny' means bright with sunlight.",
        chinese_explanation: "(B) '有雾' 意味着充满、覆盖或伴随着雾气。" +
            "<br><br>" +
            "(A) '清晰' 意味着容易感知、理解或解释。" +
            "<br><br>" +
            "(C) '明亮' 意味着发出或反射大量光线；闪亮的。" +
            "<br><br>" +
            "(D) '阳光明媚' 意味着阳光明亮的。"
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
