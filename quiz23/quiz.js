// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The employees were upset by the __________ bonus they received after working so hard all year.",
        chinese_question: "员工们对在辛苦工作了一整年后得到的 __________ 奖金感到不满。",
        answers: [
            { option: "A", answer: "generous", chinese_answer: "慷慨的", chinese_romanization: "kāngkǎi de" },
            { option: "B", answer: "substantial", chinese_answer: "大量的", chinese_romanization: "dàliàng de" },
            { option: "C", answer: "paltry", chinese_answer: "微薄的", chinese_romanization: "wēibó de" },
            { option: "D", answer: "ample", chinese_answer: "充足的", chinese_romanization: "chōngzú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'paltry' means small or meager." +
            "<br><br>" +
            "(A) 'generous' means showing a readiness to give more of something, especially money, than is strictly necessary or expected." +
            "<br><br>" +
            "(B) 'substantial' means of considerable importance, size, or worth." +
            "<br><br>" +
            "(D) 'ample' means enough or more than enough; plentiful.",
        chinese_explanation: "(C) '微薄的' 意味着小的或微不足道的。" +
            "<br><br>" +
            "(A) '慷慨的' 意味着表现出愿意给予更多的东西，尤其是金钱，比严格必要或预期的更多的。" +
            "<br><br>" +
            "(B) '大量的' 意味着相当重要、规模或价值的。" +
            "<br><br>" +
            "(D) '充足的' 意味着足够的或超过足够的；丰富的。"
    },
    {
        id: 2,
        question: "The chef added a __________ sauce to the dish, giving it a sharp, spicy kick.",
        chinese_question: "厨师给菜加了一种 __________ 的酱料，使其有了辛辣的味道。",
        answers: [
            { option: "A", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "B", answer: "fiery", chinese_answer: "火热的", chinese_romanization: "huǒrè de" },
            { option: "C", answer: "bland", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" },
            { option: "D", answer: "tasteless", chinese_answer: "无味的", chinese_romanization: "wúwèi de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'fiery' means consisting of fire or burning strongly and brightly; having a passionate, quick-tempered nature." +
            "<br><br>" +
            "(A) 'mild' means gentle and not easily provoked." +
            "<br><br>" +
            "(C) 'bland' means lacking strong features or characteristics and therefore uninteresting." +
            "<br><br>" +
            "(D) 'tasteless' means lacking flavor.",
        chinese_explanation: "(B) '火热的' 一词意味着由火组成或强烈明亮地燃烧；有激情、急躁的性格。" +
            "<br><br>" +
            "(A) '温和的' 意味着温柔且不易激动。" +
            "<br><br>" +
            "(C) '平淡的' 意味着缺乏强烈特征或特点，因此无趣。" +
            "<br><br>" +
            "(D) '无味的' 意味着没有味道。"
    },
    {
        id: 3,
        question: "The construction of the new bridge was a __________ task that required years of planning and effort.",
        chinese_question: "新桥的建设是一项 __________ 的任务，需要多年的规划和努力。",
        answers: [
            { option: "A", answer: "small", chinese_answer: "小", chinese_romanization: "xiǎo" },
            { option: "B", answer: "tiny", chinese_answer: "微小", chinese_romanization: "wēixiǎo" },
            { option: "C", answer: "easy", chinese_answer: "容易", chinese_romanization: "róngyì" },
            { option: "D", answer: "mammoth", chinese_answer: "巨大", chinese_romanization: "jùdà" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'mammoth' means huge or enormous." +
            "<br><br>" +
            "(A) 'small' means of a size that is less than normal or usual." +
            "<br><br>" +
            "(B) 'tiny' means very small." +
            "<br><br>" +
            "(C) 'easy' means achieved without great effort; presenting few difficulties.",
        chinese_explanation: "(D) '巨大' 意味着庞大或巨大的。" +
            "<br><br>" +
            "(A) '小' 意味着尺寸小于正常或通常。" +
            "<br><br>" +
            "(B) '微小' 意味着非常小。" +
            "<br><br>" +
            "(C) '容易' 意味着无需很大努力即可完成；没有什么困难。"
    },
    {
        id: 4,
        question: "The project was put on hold for an __________ period due to unforeseen complications, with no clear timeline for resumption.",
        chinese_question: "由于不可预见的复杂情况，项目被搁置了 __________ 时间，恢复时间不明确。",
        answers: [
            { option: "A", answer: "indefinite", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
            { option: "B", answer: "precise", chinese_answer: "精确的", chinese_romanization: "jīngquè de" },
            { option: "C", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "D", answer: "definite", chinese_answer: "确定的", chinese_romanization: "quèdìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'indefinite' means not certain, not clear, or without fixed limits." +
            "<br><br>" +
            "(B) 'precise' means marked by exactness and accuracy of expression or detail." +
            "<br><br>" +
            "(C) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(D) 'definite' means clearly stated or decided; not vague or doubtful.",
        chinese_explanation: "(A) '不确定的' 意味着不确定、不清楚或没有固定限制的。" +
            "<br><br>" +
            "(B) '精确的' 意味着表达或细节的准确性。" +
            "<br><br>" +
            "(C) '清晰的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(D) '确定的' 意味着明确陈述或决定的；不含糊或不怀疑的。"
    },
    {
        id: 5,
        question: "Her __________ analysis of the complex issue impressed all the experts in the room.",
        chinese_question: "她对复杂问题的__________分析给在场的所有专家留下了深刻印象。",
        answers: [
            { option: "A", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "B", answer: "dull", chinese_answer: "枯燥的", chinese_romanization: "kūzào de" },
            { option: "C", answer: "incisive", chinese_answer: "深刻的", chinese_romanization: "shēnkè de" },
            { option: "D", answer: "unclear", chinese_answer: "不清楚的", chinese_romanization: "bù qīngchǔ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'incisive' means intelligently analytical and clear-thinking." +
            "<br><br>" +
            "(A) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(B) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(D) 'unclear' means not easy to perceive, understand, or interpret.",
        chinese_explanation: "(C) '深刻的'一词意味着聪明的分析和清晰的思考。" +
            "<br><br>" +
            "(A) '模糊的' 意味着不确定的、不明确的或不清楚的性质或含义。" +
            "<br><br>" +
            "(B) '枯燥的' 意味着缺乏兴趣或兴奋的。" +
            "<br><br>" +
            "(D) '不清楚的' 意味着不容易感知、理解或解释的。"
    },
    {
        id: 6,
        question: "Her __________ mind quickly grasped the complex concepts presented during the lecture.",
        chinese_question: "她 __________ 的头脑迅速理解了讲座中提出的复杂概念。",
        answers: [
            { option: "A", answer: "distracted", chinese_answer: "分心的", chinese_romanization: "fēn xīn de" },
            { option: "B", answer: "sluggish", chinese_answer: "迟钝的", chinese_romanization: "chídùn de" },
            { option: "C", answer: "alert", chinese_answer: "警觉的", chinese_romanization: "jǐngjué de" },
            { option: "D", answer: "uninterested", chinese_answer: "不感兴趣的", chinese_romanization: "bù gǎn xìngqù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'alert' means quick to notice and respond to things." +
            "<br><br>" +
            "(A) 'distracted' means unable to concentrate because one's mind is preoccupied." +
            "<br><br>" +
            "(B) 'sluggish' means slow-moving or inactive." +
            "<br><br>" +
            "(D) 'uninterested' means not interested; indifferent.",
        chinese_explanation: "(C) '警觉的' 意味着迅速注意并对事物做出反应的。" +
            "<br><br>" +
            "(A) '分心的' 意味着无法集中注意力，因为思想被占据。" +
            "<br><br>" +
            "(B) '迟钝的' 意味着行动缓慢或不活跃的。" +
            "<br><br>" +
            "(D) '不感兴趣的' 意味着不感兴趣；冷漠的。"
    },
    {
        id: 7,
        question: "The __________ flowers had to be handled with great care.",
        chinese_question: "这些 __________ 的花需要非常小心地处理。",
        answers: [
            { option: "A", answer: "delicate", chinese_answer: "娇嫩的", chinese_romanization: "jiāonèn de" },
            { option: "B", answer: "robust", chinese_answer: "强壮的", chinese_romanization: "qiángzhuàng de" },
            { option: "C", answer: "sturdy", chinese_answer: "结实的", chinese_romanization: "jiēshi de" },
            { option: "D", answer: "tough", chinese_answer: "坚韧的", chinese_romanization: "jiānrèn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'delicate' means very fine in texture or structure; easily broken or damaged." +
            "<br><br>" +
            "(B) 'robust' means strong and healthy; vigorous." +
            "<br><br>" +
            "(C) 'sturdy' means strongly and solidly built." +
            "<br><br>" +
            "(D) 'tough' means strong enough to withstand adverse conditions or rough handling.",
        chinese_explanation: "(A) '娇嫩的' 意味着质地或结构非常细腻；容易破碎或损坏。" +
            "<br><br>" +
            "(B) '强壮的' 意味着强壮和健康；充满活力的。" +
            "<br><br>" +
            "(C) '结实的' 意味着强壮且坚固地建造的。" +
            "<br><br>" +
            "(D) '坚韧的' 意味着足够强壮以承受不利条件或粗暴处理的。"
    },
    {
        id: 8,
        question: "Her measurements were so __________ that the dress fit perfectly.",
        chinese_question: "她的测量非常 __________，连衣裙非常合身。",
        answers: [
            { option: "A", answer: "accurate", chinese_answer: "精确的", chinese_romanization: "jīngquè de" },
            { option: "B", answer: "approximate", chinese_answer: "近似的", chinese_romanization: "jìnsì de" },
            { option: "C", answer: "erroneous", chinese_answer: "错误的", chinese_romanization: "cuòwù de" },
            { option: "D", answer: "random", chinese_answer: "随机的", chinese_romanization: "suíjī de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'accurate' means correct in all details; exact." +
            "<br><br>" +
            "(B) 'approximate' means close to the actual, but not completely accurate or exact." +
            "<br><br>" +
            "(C) 'erroneous' means wrong; incorrect." +
            "<br><br>" +
            "(D) 'random' means made, done, happening, or chosen without method or conscious decision.",
        chinese_explanation: "(A) '精确的' 意味着所有细节都正确；确切的。" +
            "<br><br>" +
            "(B) '近似的' 意味着接近实际，但不完全准确或确切。" +
            "<br><br>" +
            "(C) '错误的' 意味着错误的；不正确的。" +
            "<br><br>" +
            "(D) '随机的' 意味着没有方法或有意识决定地进行、发生或选择的。"
    },
    {
        id: 9,
        question: "Despite numerous obstacles, she remained __________ to achieve her goal of becoming a doctor.",
        chinese_question: "尽管面临许多障碍，她仍然 __________ 要实现成为医生的目标。",
        answers: [
            { option: "A", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
            { option: "B", answer: "indifferent", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" },
            { option: "C", answer: "determined", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" },
            { option: "D", answer: "unsure", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'determined' means having made a firm decision and being resolved not to change it." +
            "<br><br>" +
            "(A) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'unsure' means not feeling, showing, or done with confidence and certainty.",
        chinese_explanation: "(C) '坚定的' 意味着下定决心并决意不改变的。" +
            "<br><br>" +
            "(A) '犹豫的' 意味着试探性的、不确定的或缓慢的行动或说话。" +
            "<br><br>" +
            "(B) '无动于衷的' 意味着没有特别的兴趣或同情心；不关心的。" +
            "<br><br>" +
            "(D) '不确定的' 意味着没有信心和确定地感受、显示或完成。"
    },
    {
        id: 10,
        question: "The lawyer's questions were __________ to the case, directly addressing the key issues.",
        chinese_question: "律师的问题与案件 __________，直接解决了关键问题。",
        answers: [
            { option: "A", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
            { option: "B", answer: "unrelated", chinese_answer: "不相关的", chinese_romanization: "bù xiāngguān de" },
            { option: "C", answer: "pertinent", chinese_answer: "相关的", chinese_romanization: "xiāngguān de" },
            { option: "D", answer: "extraneous", chinese_answer: "外来的", chinese_romanization: "wàilái de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pertinent' means relevant or applicable to a particular matter; apposite." +
            "<br><br>" +
            "(A) 'irrelevant' means not connected with or relevant to something." +
            "<br><br>" +
            "(B) 'unrelated' means not related or linked." +
            "<br><br>" +
            "(D) 'extraneous' means irrelevant or unrelated to the subject being dealt with.",
        chinese_explanation: "(C) '相关的' 意味着与特定事项有关或适用的；贴切的。" +
            "<br><br>" +
            "(A) '无关的' 意味着与某事不相关的。" +
            "<br><br>" +
            "(B) '不相关的' 意味着没有关系或联系的。" +
            "<br><br>" +
            "(D) '外来的' 意味着与所处理的主题无关或不相关的。"
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
