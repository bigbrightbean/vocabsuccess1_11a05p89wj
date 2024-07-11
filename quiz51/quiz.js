// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ people of the region have lived in harmony with nature for centuries.",
        chinese_question: "该地区的 __________ 人民几个世纪以来一直与自然和谐相处。",
        answers: [
            { option: "A", answer: "foreign", chinese_answer: "外来的", chinese_romanization: "wàilái de" },
            { option: "B", answer: "indigenous", chinese_answer: "本土的", chinese_romanization: "běntǔ de" },
            { option: "C", answer: "migratory", chinese_answer: "迁徙的", chinese_romanization: "qiānxǐ de" },
            { option: "D", answer: "imported", chinese_answer: "进口的", chinese_romanization: "jìnkǒu de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'indigenous' means originating or occurring naturally in a particular place; native." +
            "<br><br>" +
            "(A) 'foreign' means of, from, in, or characteristic of a country or language other than one's own." +
            "<br><br>" +
            "(C) 'migratory' means denoting an animal that migrates." +
            "<br><br>" +
            "(D) 'imported' means brought in from another country.",
        chinese_explanation: "(B) '本土的' 一词意味着在特定地方自然生成或发生的；本地的。" +
            "<br><br>" +
            "(A) '外来的' 意味着来自、属于或具有其他国家或语言特征的。" +
            "<br><br>" +
            "(C) '迁徙的' 意味着指迁徙的动物。" +
            "<br><br>" +
            "(D) '进口的' 意味着从其他国家引进的。"
    },
    {
        id: 2,
        question: "The students returned to their __________ seats after the break to continue the lecture.",
        chinese_question: "休息后，学生们回到各自的 __________ 座位继续讲座。",
        answers: [
            { option: "A", answer: "collective", chinese_answer: "集体的", chinese_romanization: "jítǐ de" },
            { option: "B", answer: "respective", chinese_answer: "各自的", chinese_romanization: "gèzì de" },
            { option: "C", answer: "shared", chinese_answer: "共享的", chinese_romanization: "gòngxiǎng de" },
            { option: "D", answer: "common", chinese_answer: "共同的", chinese_romanization: "gòngtóng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'respective' means belonging or relating separately to each of two or more people or things." +
            "<br><br>" +
            "(A) 'collective' means done by people acting as a group." +
            "<br><br>" +
            "(C) 'shared' means used, done, or experienced by all the members of a group." +
            "<br><br>" +
            "(D) 'common' means occurring, found, or done often; prevalent.",
        chinese_explanation: "(B) '各自的' 一词意味着分别属于或与两人或多人或物有关。" +
            "<br><br>" +
            "(A) '集体的' 意味着由人们作为一个团队行动完成的。" +
            "<br><br>" +
            "(C) '共享的' 意味着被一组的所有成员使用、完成或体验的。" +
            "<br><br>" +
            "(D) '共同的' 意味着经常发生、发现或完成的；流行的。"
    },
    {
        id: 3,
        question: "She sensed something was __________ when her usually punctual friend was very late.",
        chinese_question: "她感觉到有些 __________，因为她通常准时的朋友非常迟到。",
        answers: [
            { option: "A", answer: "correct", chinese_answer: "正确的", chinese_romanization: "zhèngquè de" },
            { option: "B", answer: "wrong", chinese_answer: "错误的", chinese_romanization: "cuòwù de" },
            { option: "C", answer: "amiss", chinese_answer: "不对劲的", chinese_romanization: "bù duìjìn de" },
            { option: "D", answer: "normal", chinese_answer: "正常的", chinese_romanization: "zhèngcháng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'amiss' means not quite right; inappropriate or out of place." +
            "<br><br>" +
            "(A) 'correct' means free from error; in accordance with fact or truth." +
            "<br><br>" +
            "(B) 'wrong' means not correct or true; incorrect." +
            "<br><br>" +
            "(D) 'normal' means conforming to a standard; usual, typical, or expected.",
        chinese_explanation: "(C) '不对劲的' 一词意味着不完全正确；不合适或不适当的。" +
            "<br><br>" +
            "(A) '正确的' 意味着没有错误；符合事实或真相。" +
            "<br><br>" +
            "(B) '错误的' 意味着不正确或不真实；错误的。" +
            "<br><br>" +
            "(D) '正常的' 意味着符合标准；通常的，典型的或预期的。"
    },
    {
        id: 4,
    question: "She has won the championship for three __________ years, proving her exceptional skills and consistency.",
    chinese_question: "她连续三年赢得冠军，证明了她的卓越技能和一致性。",
    answers: [
        { option: "A", answer: "interrupted", chinese_answer: "中断的", chinese_romanization: "zhōngduàn de" },
        { option: "B", answer: "consecutive", chinese_answer: "连续的", chinese_romanization: "liánxù de" },
        { option: "C", answer: "random", chinese_answer: "随机的", chinese_romanization: "suíjī de" },
        { option: "D", answer: "sporadic", chinese_answer: "零星的", chinese_romanization: "língxīng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'consecutive' means following continuously." +
        "<br><br>" +
        "(A) 'interrupted' means stopped the continuous progress of (an activity or process)." +
        "<br><br>" +
        "(C) 'random' means made, done, happening, or chosen without method or conscious decision." +
        "<br><br>" +
        "(D) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated.",
    chinese_explanation: "(B) '连续的' 一词意味着连续发生的。" +
        "<br><br>" +
        "(A) '中断的' 意味着停止（活动或过程）的连续进展。" +
        "<br><br>" +
        "(C) '随机的' 意味着没有方法或有意识决定地做、发生或选择的。" +
        "<br><br>" +
        "(D) '零星的' 意味着不定期发生或仅在少数地方发生的；分散的或孤立的。"
    },
    {
        id: 5,
        question: "The scientist's discovery was highly __________, paving the way for new advancements in medical research.",
        chinese_question: "科学家的发现非常 __________，为医学研究的新进展铺平了道路。",
        answers: [
            { option: "A", answer: "insignificant", chinese_answer: "不重要的", chinese_romanization: "bù zhòngyào de" },
            { option: "B", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "C", answer: "significant", chinese_answer: "重要的", chinese_romanization: "zhòngyào de" },
            { option: "D", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'significant' means sufficiently great or important to be worthy of attention; noteworthy." +
            "<br><br>" +
            "(A) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(B) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(D) 'irrelevant' means not connected with or relevant to something.",
        chinese_explanation: "(C) '重要的' 一词意味着足够大或重要，值得注意的。" +
            "<br><br>" +
            "(A) '不重要的' 意味着太小或不重要，不值得考虑。" +
            "<br><br>" +
            "(B) '微不足道的' 意味着价值或重要性很小。" +
            "<br><br>" +
            "(D) '无关的' 意味着与某事无关或不相关的。"
    },
    {
        id: 6,
        question: "Given the heavy rain and the approaching storm, it was __________ that the outdoor event would be postponed.",
        chinese_question: "鉴于大雨和即将来临的风暴，户外活动 __________ 被推迟了。",
        answers: [
            { option: "A", answer: "avoidable", chinese_answer: "可以避免的", chinese_romanization: "kěyǐ bìmiǎn de" },
            { option: "B", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
            { option: "C", answer: "inevitable", chinese_answer: "不可避免的", chinese_romanization: "bùkě bìmiǎn de" },
            { option: "D", answer: "unlikely", chinese_answer: "不太可能的", chinese_romanization: "bù tài kěnéng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'inevitable' means certain to happen; unavoidable." +
            "<br><br>" +
            "(A) 'avoidable' means able to be avoided or prevented." +
            "<br><br>" +
            "(B) 'uncertain' means not able to be relied on; not known or definite." +
            "<br><br>" +
            "(D) 'unlikely' means not likely to happen, be done, or be true.",
        chinese_explanation: "(C) '不可避免的' 意味着一定会发生的；无法避免的。" +
            "<br><br>" +
            "(A) '可以避免的' 意味着可以避免或防止的。" +
            "<br><br>" +
            "(B) '不确定的' 意味着不能依赖的；未知或不确定的。" +
            "<br><br>" +
            "(D) '不太可能的' 意味着不太可能发生、完成或真实的。"
    },
    {
        id: 7,
        question: "The __________ energy of the moving car was converted into heat when the brakes were applied.",
        chinese_question: "移动汽车的 __________ 能量在刹车时转化为热能。",
        answers: [
            { option: "A", answer: "potential", chinese_answer: "潜在的", chinese_romanization: "qiánzài de" },
            { option: "B", answer: "static", chinese_answer: "静止的", chinese_romanization: "jìngzhǐ de" },
            { option: "C", answer: "kinetic", chinese_answer: "动能的", chinese_romanization: "dòngnéng de" },
            { option: "D", answer: "dormant", chinese_answer: "休眠的", chinese_romanization: "xiūmián de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'kinetic' means relating to or resulting from motion." +
            "<br><br>" +
            "(A) 'potential' means having or showing the capacity to develop into something in the future." +
            "<br><br>" +
            "(B) 'static' means lacking in movement, action, or change." +
            "<br><br>" +
            "(D) 'dormant' means having normal physical functions suspended or slowed down for a period of time; in or as if in a deep sleep.",
        chinese_explanation: "(C) '动能的' 意味着与运动有关的或由运动产生的。" +
            "<br><br>" +
            "(A) '潜在的' 意味着有或显示出在未来发展成某物的能力。" +
            "<br><br>" +
            "(B) '静止的' 意味着缺乏运动、行动或变化。" +
            "<br><br>" +
            "(D) '休眠的' 意味着正常的身体功能暂停或减慢一段时间；仿佛处于深度睡眠中。"
    },
    {
        id: 8,
        question: "Given the rapid changes in technology, it was __________ that many jobs would become automated, affecting numerous industries worldwide.",
        chinese_question: "鉴于技术的快速变化，许多工作将被自动化是 __________ 的，影响了全球许多行业。",
        answers: [
            { option: "A", answer: "avoidable", chinese_answer: "可避免的", chinese_romanization: "kě bìmiǎn de" },
            { option: "B", answer: "unlikely", chinese_answer: "不太可能的", chinese_romanization: "bù tài kěnéng de" },
            { option: "C", answer: "inevitable", chinese_answer: "不可避免的", chinese_romanization: "bùkě bìmiǎn de" },
            { option: "D", answer: "doubtful", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'inevitable' means certain to happen; unavoidable." +
            "<br><br>" +
            "(A) 'avoidable' means able to be avoided or prevented." +
            "<br><br>" +
            "(B) 'unlikely' means not likely to happen, be done, or be true." +
            "<br><br>" +
            "(D) 'doubtful' means feeling uncertain about something.",
        chinese_explanation: "(C) '不可避免的' 意思是必然发生的；无法避免的。" +
            "<br><br>" +
            "(A) '可避免的' 意思是可以避免或防止的。" +
            "<br><br>" +
            "(B) '不太可能的' 意思是不可能发生、完成或真实的。" +
            "<br><br>" +
            "(D) '怀疑的' 意思是对某事感到不确定的。"
    },
    {
        id: 9,
        question: "Her __________ nature made her choose only the most trustworthy and competent individuals for the project, ensuring its success.",
        chinese_question: "她 __________ 的性格使她只选择最值得信赖和最有能力的人参与项目，确保了项目的成功。",
        answers: [
            { option: "A", answer: "indiscriminate", chinese_answer: "不加选择的", chinese_romanization: "bù jiā xuǎnzé de" },
            { option: "B", answer: "selective", chinese_answer: "有选择性的", chinese_romanization: "yǒu xuǎnzé xìng de" },
            { option: "C", answer: "random", chinese_answer: "随机的", chinese_romanization: "suíjī de" },
            { option: "D", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'selective' means having the ability to choose carefully the best or most suitable." +
            "<br><br>" +
            "(A) 'indiscriminate' means done at random or without careful judgment." +
            "<br><br>" +
            "(C) 'random' means made, done, happening, or chosen without method or conscious decision." +
            "<br><br>" +
            "(D) 'reckless' means without thinking or caring about the consequences of an action.",
        chinese_explanation: "(B) '有选择性的' 意思是有能力仔细选择最佳或最合适的。" +
            "<br><br>" +
            "(A) '不加选择的' 意思是随机或没有仔细判断地完成的。" +
            "<br><br>" +
            "(C) '随机的' 意思是没有方法或有意识决定地做、发生或选择的。" +
            "<br><br>" +
            "(D) '鲁莽的' 意思是不考虑或不关心行动后果的。"
    },
    {
        id: 10,
        question: "The firefighter's __________ actions saved the lives of several people trapped in the burning building.",
        chinese_question: "消防员的__________行为拯救了被困在燃烧建筑物中的几个人的生命。",
        answers: [
            { option: "A", answer: "cowardly", chinese_answer: "懦弱的", chinese_romanization: "nuòruò de" },
            { option: "B", answer: "heroic", chinese_answer: "英勇的", chinese_romanization: "yīngyǒng de" },
            { option: "C", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "D", answer: "routine", chinese_answer: "常规的", chinese_romanization: "chángguī de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'heroic' means having the characteristics of a hero or heroine; very brave." +
            "<br><br>" +
            "(A) 'cowardly' means lacking courage." +
            "<br><br>" +
            "(C) 'ordinary' means with no special or distinctive features." +
            "<br><br>" +
            "(D) 'routine' means performed as part of a regular procedure.",
        chinese_explanation: "(B) '英勇的'一词意味着具有英雄或女英雄的特征；非常勇敢的。" +
            "<br><br>" +
            "(A) '懦弱的' 意味着缺乏勇气。" +
            "<br><br>" +
            "(C) '普通的' 意味着没有特别或独特的特征。" +
            "<br><br>" +
            "(D) '常规的' 意味着作为常规程序的一部分进行的。"
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
