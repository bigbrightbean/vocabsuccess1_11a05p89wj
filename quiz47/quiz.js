// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The children were captivated by the __________ stories of dragons and magical kingdoms, told by their imaginative teacher.",
        chinese_question: "孩子们被老师讲述的 __________ 龙和魔法王国的故事迷住了。",
        answers: [
            { option: "A", answer: "fanciful", chinese_answer: "幻想的", chinese_romanization: "huànxiǎng de" },
            { option: "B", answer: "realistic", chinese_answer: "现实的", chinese_romanization: "xiànshí de" },
            { option: "C", answer: "factual", chinese_answer: "事实的", chinese_romanization: "shìshí de" },
            { option: "D", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fanciful' means over-imaginative and unrealistic." +
            "<br><br>" +
            "(B) 'realistic' means having or showing a sensible and practical idea of what can be achieved or expected." +
            "<br><br>" +
            "(C) 'factual' means concerned with what is actually the case." +
            "<br><br>" +
            "(D) 'mundane' means lacking interest or excitement; dull.",
        chinese_explanation: "(A) '幻想的' 意味着过度想象和不现实的。" +
            "<br><br>" +
            "(B) '现实的' 意味着对可以实现或期望的事情有明智和实际的想法的。" +
            "<br><br>" +
            "(C) '事实的' 意味着关心实际情况的。" +
            "<br><br>" +
            "(D) '平凡的' 意味着缺乏兴趣或兴奋的；乏味的。"
    },
    {
        id: 2,
        question: "The __________ bond between the teammates was evident both on and off the field.",
        chinese_question: "队友之间的 __________ 纽带在场上和场下都很明显。",
        answers: [
            { option: "A", answer: "hostile", chinese_answer: "敌对", chinese_romanization: "díduì" },
            { option: "B", answer: "fraternal", chinese_answer: "兄弟般", chinese_romanization: "xiōngdì bān" },
            { option: "C", answer: "competitive", chinese_answer: "竞争", chinese_romanization: "jìngzhēng" },
            { option: "D", answer: "distant", chinese_answer: "疏远", chinese_romanization: "shūyuǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'fraternal' means of or like a brother or brothers." +
            "<br><br>" +
            "(A) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(C) 'competitive' means having or displaying a strong desire to be more successful than others." +
            "<br><br>" +
            "(D) 'distant' means far away in space or time.",
        chinese_explanation: "(B) '兄弟般' 意味着像兄弟一样。" +
            "<br><br>" +
            "(A) '敌对' 意味着不友好；对抗性。" +
            "<br><br>" +
            "(C) '竞争' 意味着具有或表现出比他人更成功的强烈愿望。" +
            "<br><br>" +
            "(D) '疏远' 意味着在空间或时间上很远。"
    },
    {
        id: 3,
        question: "The __________ plants in this region have adapted to the harsh climate over centuries.",
        chinese_question: "这个地区的 __________ 植物已经在几个世纪里适应了严酷的气候。",
        answers: [
            { option: "A", answer: "foreign", chinese_answer: "外来的", chinese_romanization: "wàilái de" },
            { option: "B", answer: "indigenous", chinese_answer: "本地的", chinese_romanization: "běndì de" },
            { option: "C", answer: "exotic", chinese_answer: "异国的", chinese_romanization: "yìguó de" },
            { option: "D", answer: "invasive", chinese_answer: "侵入的", chinese_romanization: "qīnrù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'indigenous' means originating or occurring naturally in a particular place; native." +
            "<br><br>" +
            "(A) 'foreign' means from another country." +
            "<br><br>" +
            "(C) 'exotic' means originating in or characteristic of a distant foreign country." +
            "<br><br>" +
            "(D) 'invasive' means tending to spread prolifically and undesirably or harmfully.",
        chinese_explanation: "(B) '本地的' 一词意味着在特定地方自然生长或出现的；本地的。" +
            "<br><br>" +
            "(A) '外来的' 意味着来自另一个国家的。" +
            "<br><br>" +
            "(C) '异国的' 意味着来自遥远外国的或具有其特征的。" +
            "<br><br>" +
            "(D) '侵入的' 意味着倾向于大量蔓延且不受欢迎或有害的。"
    },
    {
        id: 4,
        question: "The __________ ruins were a popular tourist attraction, showcasing the history of the old civilization.",
        chinese_question: "__________ 废墟是一个受欢迎的旅游景点，展示了古老文明的历史。",
        answers: [
            { option: "A", answer: "modern", chinese_answer: "现代的", chinese_romanization: "xiàndài de" },
            { option: "B", answer: "ancient", chinese_answer: "古代的", chinese_romanization: "gǔdài de" },
            { option: "C", answer: "new", chinese_answer: "新的", chinese_romanization: "xīn de" },
            { option: "D", answer: "recent", chinese_answer: "最近的", chinese_romanization: "zuìjìn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ancient' means belonging to the very distant past and no longer in existence." +
            "<br><br>" +
            "(A) 'modern' means relating to the present or recent times as opposed to the remote past." +
            "<br><br>" +
            "(C) 'new' means not existing before; made, introduced, or discovered recently or now for the first time." +
            "<br><br>" +
            "(D) 'recent' means having happened, begun, or been done not long ago.",
        chinese_explanation: "(B) '古代的' 意味着属于非常遥远的过去，不再存在。" +
            "<br><br>" +
            "(A) '现代的' 意味着与现在或最近的时间有关，而不是遥远的过去。" +
            "<br><br>" +
            "(C) '新的' 意味着以前不存在的；最近或现在首次制作、引入或发现的。" +
            "<br><br>" +
            "(D) '最近的' 意味着不久前发生的、开始的或完成的。"
    },
    {
        id: 5,
        question: "The __________ cost of the project exceeded the initial estimates.",
        chinese_question: "项目的 __________ 成本超过了最初的估计。",
        answers: [
            { option: "A", answer: "actual", chinese_answer: "实际的", chinese_romanization: "shíjì de" },
            { option: "B", answer: "theoretical", chinese_answer: "理论的", chinese_romanization: "lǐlùn de" },
            { option: "C", answer: "imagined", chinese_answer: "想象的", chinese_romanization: "xiǎngxiàng de" },
            { option: "D", answer: "assumed", chinese_answer: "假设的", chinese_romanization: "jiǎshè de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'actual' means existing in fact; real." +
            "<br><br>" +
            "(B) 'theoretical' means concerned with or involving the theory of a subject or area of study rather than its practical application." +
            "<br><br>" +
            "(C) 'imagined' means believed to exist or be so, especially on the basis of little or no evidence." +
            "<br><br>" +
            "(D) 'assumed' means supposed to be the case, without proof.",
        chinese_explanation: "(A) '实际的' 意味着事实存在的；真实的。" +
            "<br><br>" +
            "(B) '理论的' 意味着涉及某一学科或研究领域的理论，而不是其实际应用。" +
            "<br><br>" +
            "(C) '想象的' 意味着相信存在或如此，尤其是基于很少或没有证据的基础上。" +
            "<br><br>" +
            "(D) '假设的' 意味着假设是这样的，没有证据。"
    },
    {
        id: 6,
        question: "The artist's early works were __________, lacking the refinement and detail of his later masterpieces.",
        chinese_question: "这位艺术家的早期作品很 __________，缺乏他后期杰作的精细和细节。",
        answers: [
            { option: "A", answer: "crude", chinese_answer: "粗糙的", chinese_romanization: "cūcāo de" },
            { option: "B", answer: "polished", chinese_answer: "精致的", chinese_romanization: "jīngzhì de" },
            { option: "C", answer: "sophisticated", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "D", answer: "intricate", chinese_answer: "精细的", chinese_romanization: "jīngxì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'crude' means in a natural or raw state; not yet processed or refined." +
            "<br><br>" +
            "(B) 'polished' means refined, sophisticated, or elegant." +
            "<br><br>" +
            "(C) 'sophisticated' means having a refined knowledge of the world, experienced." +
            "<br><br>" +
            "(D) 'intricate' means very complicated or detailed.",
        chinese_explanation: "(A) '粗糙的' 意味着处于自然或原始状态；尚未加工或精炼。" +
            "<br><br>" +
            "(B) '精致的' 意味着精致、复杂或优雅的。" +
            "<br><br>" +
            "(C) '复杂的' 意味着对世界有着深刻了解、经验丰富的。" +
            "<br><br>" +
            "(D) '精细的' 意味着非常复杂或详细的。"
    },
    {
        id: 7,
        question: "The artist's __________ approach to painting brought a fresh perspective to traditional subjects.",
        chinese_question: "这位艺术家对绘画的__________方法为传统题材带来了新的视角。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "枯燥的", chinese_romanization: "kūzào de" },
            { option: "B", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
            { option: "C", answer: "creative", chinese_answer: "创造性的", chinese_romanization: "chuàngzàoxìng de" },
            { option: "D", answer: "boring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'creative' means relating to or involving the use of the imagination or original ideas to create something." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(B) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(D) 'boring' means not interesting; tedious.",
        chinese_explanation: "(C) '创造性的'一词意味着涉及使用想象力或原创想法来创造某物。" +
            "<br><br>" +
            "(A) '枯燥的' 意味着缺乏兴趣或兴奋的。" +
            "<br><br>" +
            "(B) '传统的' 意味着基于或符合通常的做法或信念的。" +
            "<br><br>" +
            "(D) '无聊的' 意味着不有趣的；乏味的。"
    },
    {
        id: 8,
        question: "The __________ fingers of the artist brought the sculpture to life with intricate details.",
        chinese_question: "那位艺术家 __________ 的手指通过细致的细节使雕塑栩栩如生。",
        answers: [
            { option: "A", answer: "clumsy", chinese_answer: "笨拙", chinese_romanization: "bènzhuō" },
            { option: "B", answer: "awkward", chinese_answer: "尴尬", chinese_romanization: "gāngà" },
            { option: "C", answer: "deft", chinese_answer: "灵巧", chinese_romanization: "língqiǎo" },
            { option: "D", answer: "slow", chinese_answer: "缓慢", chinese_romanization: "huǎnmàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'deft' means neatly skillful and quick in one's movements." +
            "<br><br>" +
            "(A) 'clumsy' means awkward in movement or in handling things." +
            "<br><br>" +
            "(B) 'awkward' means causing or feeling embarrassment or inconvenience." +
            "<br><br>" +
            "(D) 'slow' means moving or operating, or designed to do so, only at a low speed.",
        chinese_explanation: "(C) '灵巧' 意味着动作熟练而迅速。" +
            "<br><br>" +
            "(A) '笨拙' 意味着动作或处理事物时笨拙。" +
            "<br><br>" +
            "(B) '尴尬' 意味着引起或感到尴尬或不便。" +
            "<br><br>" +
            "(D) '缓慢' 意味着以低速移动或操作，或设计成低速的。"
    },
    {
        id: 9,
        question: "The teacher used __________ aids, such as diagrams and videos, to help students better understand the complex concepts.",
        chinese_question: "老师使用了 __________ 辅助工具，如图表和视频，帮助学生更好地理解复杂的概念。",
        answers: [
            { option: "A", answer: "auditory", chinese_answer: "听觉的", chinese_romanization: "tīngjué de" },
            { option: "B", answer: "tactile", chinese_answer: "触觉的", chinese_romanization: "chùjué de" },
            { option: "C", answer: "olfactory", chinese_answer: "嗅觉的", chinese_romanization: "xiùjué de" },
            { option: "D", answer: "visual", chinese_answer: "视觉的", chinese_romanization: "shìjué de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'visual' means relating to seeing or sight." +
            "<br><br>" +
            "(A) 'auditory' means relating to the sense of hearing." +
            "<br><br>" +
            "(B) 'tactile' means relating to the sense of touch." +
            "<br><br>" +
            "(C) 'olfactory' means relating to the sense of smell.",
        chinese_explanation: "(D) '视觉的' 意味着与看或视觉有关。" +
            "<br><br>" +
            "(A) '听觉的' 意味着与听觉有关。" +
            "<br><br>" +
            "(B) '触觉的' 意味着与触觉有关。" +
            "<br><br>" +
            "(C) '嗅觉的' 意味着与嗅觉有关。"
    },
    {
        id: 10,
        question: "The __________ temperatures in the Arctic region are a challenge for both humans and wildlife.",
        chinese_question: "北极地区的 __________ 温度对人类和野生动物都是一种挑战。",
        answers: [
            { option: "A", answer: "temperate", chinese_answer: "温和", chinese_romanization: "wēnhé" },
            { option: "B", answer: "frigid", chinese_answer: "严寒", chinese_romanization: "yánhán" },
            { option: "C", answer: "balmy", chinese_answer: "温暖", chinese_romanization: "wēnnuǎn" },
            { option: "D", answer: "moderate", chinese_answer: "适中", chinese_romanization: "shìzhōng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'frigid' means very cold in temperature." +
            "<br><br>" +
            "(A) 'temperate' means mild and moderate." +
            "<br><br>" +
            "(C) 'balmy' means pleasantly warm." +
            "<br><br>" +
            "(D) 'moderate' means average in amount, intensity, or degree.",
        chinese_explanation: "(B) '严寒' 一词意味着温度非常低。" +
            "<br><br>" +
            "(A) '温和' 意味着温和和适中。" +
            "<br><br>" +
            "(C) '温暖' 意味着温暖宜人。" +
            "<br><br>" +
            "(D) '适中' 意味着在数量、强度或程度上适中。"
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
