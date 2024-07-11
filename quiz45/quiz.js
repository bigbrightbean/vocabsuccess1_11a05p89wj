// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ cabin in the woods was the perfect retreat for a peaceful weekend away from the city.",
        chinese_question: "森林中的 __________ 小木屋是远离城市、享受宁静周末的完美之地。",
        answers: [
            { option: "A", answer: "cozy", chinese_answer: "舒适的", chinese_romanization: "shūshì de" },
            { option: "B", answer: "cold", chinese_answer: "寒冷的", chinese_romanization: "hánlěng de" },
            { option: "C", answer: "vast", chinese_answer: "广阔的", chinese_romanization: "guǎngkuò de" },
            { option: "D", answer: "barren", chinese_answer: "贫瘠的", chinese_romanization: "pínjí de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cozy' means giving a feeling of comfort, warmth, and relaxation." +
            "<br><br>" +
            "(B) 'cold' means of or at a low temperature, especially when compared to the temperature of the human body." +
            "<br><br>" +
            "(C) 'vast' means of very great extent or quantity; immense." +
            "<br><br>" +
            "(D) 'barren' means too poor to produce much or any vegetation.",
        chinese_explanation: "(A) '舒适的' 意味着给予舒适、温暖和放松的感觉。" +
            "<br><br>" +
            "(B) '寒冷的' 意味着温度低的，尤其是与人体温度相比。" +
            "<br><br>" +
            "(C) '广阔的' 意味着非常大的范围或数量；巨大的。" +
            "<br><br>" +
            "(D) '贫瘠的' 意味着土地贫瘠，无法生产大量或任何植被的。"
    },
    {
        id: 2,
        question: "The general made a __________ decision to attack at dawn, which turned the tide of the battle.",
        chinese_question: "将军在黎明时作出了 __________ 的决定，扭转了战局。",
        answers: [
            { option: "A", answer: "hesitant", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "B", answer: "uncertain", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" },
            { option: "C", answer: "decisive", chinese_answer: "果断", chinese_romanization: "guǒduàn" },
            { option: "D", answer: "indecisive", chinese_answer: "优柔寡断", chinese_romanization: "yōuróu guǎduàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'decisive' means settling an issue; producing a definite result." +
            "<br><br>" +
            "(A) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(B) 'uncertain' means not able to be relied on; not known or definite." +
            "<br><br>" +
            "(D) 'indecisive' means not settling an issue.",
        chinese_explanation: "(C) '果断' 意味着解决一个问题；产生确定的结果。" +
            "<br><br>" +
            "(A) '犹豫' 意味着试探性、不确定或行动或说话缓慢。" +
            "<br><br>" +
            "(B) '不确定' 意味着无法依赖的；未知或不确定的。" +
            "<br><br>" +
            "(D) '优柔寡断' 意味着没有解决一个问题。"
    },
    {
        id: 3,
        question: "Her speech had a __________ effect on the audience, inspiring many to take action and make positive changes in their lives.",
        chinese_question: "她的演讲对观众产生了 __________ 的影响，激励许多人采取行动并在他们的生活中做出积极的改变。",
        answers: [
            { option: "A", answer: "shallow", chinese_answer: "浅薄的", chinese_romanization: "qiǎnbó de" },
            { option: "B", answer: "insignificant", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "C", answer: "inconsequential", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐnyào de" },
            { option: "D", answer: "profound", chinese_answer: "深远的", chinese_romanization: "shēnyuǎn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'profound' means very great or intense; having deep meaning." +
            "<br><br>" +
            "(A) 'shallow' means lacking depth of intellect or knowledge." +
            "<br><br>" +
            "(B) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(C) 'inconsequential' means not important or significant.",
        chinese_explanation: "(D) '深远的' 意味着非常大或强烈；具有深刻意义。" +
            "<br><br>" +
            "(A) '浅薄的' 意味着缺乏深度的智力或知识。" +
            "<br><br>" +
            "(B) '微不足道的' 意味着太小或不重要，不值得考虑。" +
            "<br><br>" +
            "(C) '无关紧要的' 意味着不重要或不显著。"
    },
    {
        id: 4,
        question: "The chef's __________ dish, known for its unique blend of spices and flavors, attracted food enthusiasts from all over the world.",
        chinese_question: "这位厨师的 __________ 料理以其独特的香料和风味混合而闻名，吸引了来自世界各地的美食爱好者。",
        answers: [
            { option: "A", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "B", answer: "signature", chinese_answer: "招牌的", chinese_romanization: "zhāopái de" },
            { option: "C", answer: "bland", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" },
            { option: "D", answer: "common", chinese_answer: "常见的", chinese_romanization: "chángjiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'signature' means characteristic of a particular person or thing and serving to identify them." +
            "<br><br>" +
            "(A) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(C) 'bland' means lacking strong features or characteristics and therefore uninteresting." +
            "<br><br>" +
            "(D) 'common' means occurring, found, or done often; prevalent.",
        chinese_explanation: "(B) '招牌的' 意思是某人或某物的特征，并用来识别他们。" +
            "<br><br>" +
            "(A) '普通的' 意思是没有特别或独特的特点；正常的。" +
            "<br><br>" +
            "(C) '平淡的' 意思是缺乏鲜明特征或特点，因此无趣的。" +
            "<br><br>" +
            "(D) '常见的' 意思是经常发生、发现或完成的；流行的。"
    },
    {
        id: 5,
        question: "The forest was so __________ with trees and underbrush that it was difficult to see more than a few feet ahead.",
        chinese_question: "这片森林 __________ 树木和灌木丛，难以看清几英尺之外的东西。",
        answers: [
            { option: "A", answer: "dense", chinese_answer: "密集的", chinese_romanization: "mìjí de" },
            { option: "B", answer: "sparse", chinese_answer: "稀疏的", chinese_romanization: "xīshū de" },
            { option: "C", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "D", answer: "open", chinese_answer: "开放的", chinese_romanization: "kāifàng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dense' means closely compacted in substance." +
            "<br><br>" +
            "(B) 'sparse' means thinly dispersed or scattered." +
            "<br><br>" +
            "(C) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(D) 'open' means not closed or blocked up; allowing access or passage.",
        chinese_explanation: "(A) '密集的' 意味着紧密地压缩在一起的。" +
            "<br><br>" +
            "(B) '稀疏的' 意味着稀少地分布或散布。" +
            "<br><br>" +
            "(C) '清晰的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(D) '开放的' 意味着没有关闭或堵塞的；允许进入或通过的。"
    },
    {
        id: 6,
        question: "The __________ statue in the garden had distorted features that were both fascinating and horrifying.",
        chinese_question: "花园里的__________雕像有着扭曲的特征，既迷人又恐怖。",
        answers: [
            { option: "A", answer: "beautiful", chinese_answer: "美丽的", chinese_romanization: "měilì de" },
            { option: "B", answer: "elegant", chinese_answer: "优雅的", chinese_romanization: "yōuyǎ de" },
            { option: "C", answer: "grotesque", chinese_answer: "丑陋的", chinese_romanization: "chǒulòu de" },
            { option: "D", answer: "delicate", chinese_answer: "精致的", chinese_romanization: "jīngzhì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'grotesque' means comically or repulsively ugly or distorted." +
            "<br><br>" +
            "(A) 'beautiful' means pleasing the senses or mind aesthetically." +
            "<br><br>" +
            "(B) 'elegant' means pleasingly graceful and stylish in appearance or manner." +
            "<br><br>" +
            "(D) 'delicate' means very fine in texture or structure; easily broken or damaged.",
        chinese_explanation: "(C) '丑陋的'一词意味着滑稽地或令人厌恶地丑陋或扭曲的。" +
            "<br><br>" +
            "(A) '美丽的' 意味着美学上愉悦感官或心灵的。" +
            "<br><br>" +
            "(B) '优雅的' 意味着在外观或举止上优美和时尚的。" +
            "<br><br>" +
            "(D) '精致的' 意味着质地或结构非常精细的；容易破碎或损坏的。"
    },
    {
        id: 7,
        question: "The soldier was awarded a medal for his __________ conduct during the battle, showing bravery and integrity.",
        chinese_question: "这名士兵因在战斗中的 __________ 行为而被授予奖章，表现出了勇敢和正直。",
        answers: [
            { option: "A", answer: "honourable", chinese_answer: "光荣的", chinese_romanization: "guāngróng de" },
            { option: "B", answer: "deceitful", chinese_answer: "欺骗的", chinese_romanization: "qīpiàn de" },
            { option: "C", answer: "dishonourable", chinese_answer: "不光彩的", chinese_romanization: "bù guāngcǎi de" },
            { option: "D", answer: "cowardly", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'honourable' means bringing or worthy of honor." +
            "<br><br>" +
            "(B) 'deceitful' means guilty of or involving deceit; deceiving or misleading others." +
            "<br><br>" +
            "(C) 'dishonourable' means bringing shame or disgrace." +
            "<br><br>" +
            "(D) 'cowardly' means lacking courage; excessively afraid of danger or pain.",
        chinese_explanation: "(A) '光荣的' 意味着带来或值得荣誉的。" +
            "<br><br>" +
            "(B) '欺骗的' 意味着有罪的或涉及欺骗的；欺骗或误导他人的。" +
            "<br><br>" +
            "(C) '不光彩的' 意味着带来羞耻或耻辱的。" +
            "<br><br>" +
            "(D) '胆小的' 意味着缺乏勇气的；过分害怕危险或痛苦的。"
    },
    {
        id: 8,
        question: "His __________ decision to quit his job without a backup plan left him in a difficult situation.",
        chinese_question: "他在没有备用计划的情况下 __________ 地辞职，使他陷入困境。",
        answers: [
            { option: "A", answer: "cautious", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
            { option: "B", answer: "deliberate", chinese_answer: "深思熟虑", chinese_romanization: "shēnsī shúlǜ" },
            { option: "C", answer: "impetuous", chinese_answer: "冲动", chinese_romanization: "chōngdòng" },
            { option: "D", answer: "planned", chinese_answer: "计划", chinese_romanization: "jìhuà" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impetuous' means acting or done quickly and without thought or care." +
            "<br><br>" +
            "(A) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(B) 'deliberate' means done consciously and intentionally." +
            "<br><br>" +
            "(D) 'planned' means decided on and arranged in advance.",
        chinese_explanation: "(C) '冲动' 意味着快速且不加思考或关心地做出行为或决定。" +
            "<br><br>" +
            "(A) '谨慎' 意味着小心避免潜在的问题或危险。" +
            "<br><br>" +
            "(B) '深思熟虑' 意味着有意识和有意地进行。" +
            "<br><br>" +
            "(D) '计划' 意味着提前决定和安排。"
    },
    {
        id: 9,
        question: "The __________ child hid his sister's toys as a prank, laughing as she searched for them.",
        chinese_question: "那个 __________ 的孩子把妹妹的玩具藏起来恶作剧，看着她找玩具时笑了起来。",
        answers: [
            { option: "A", answer: "obedient", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
            { option: "B", answer: "mischievous", chinese_answer: "调皮的", chinese_romanization: "tiáopí de" },
            { option: "C", answer: "helpful", chinese_answer: "乐于助人的", chinese_romanization: "lèyú zhùrén de" },
            { option: "D", answer: "serious", chinese_answer: "严肃的", chinese_romanization: "yánsù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mischievous' means causing or showing a fondness for causing trouble in a playful way." +
            "<br><br>" +
            "(A) 'obedient' means complying or willing to comply with orders or requests; submissive to another's will." +
            "<br><br>" +
            "(C) 'helpful' means giving or ready to give help." +
            "<br><br>" +
            "(D) 'serious' means demanding careful consideration or application.",
        chinese_explanation: "(B) '调皮的' 一词意味着引起或表现出对惹麻烦的喜爱，以一种顽皮的方式。" +
            "<br><br>" +
            "(A) '顺从的' 意味着遵从或愿意遵从命令或请求；服从他人意愿的。" +
            "<br><br>" +
            "(C) '乐于助人的' 意味着给予或准备给予帮助的。" +
            "<br><br>" +
            "(D) '严肃的' 意味着需要仔细考虑或应用的。"
    },
    {
        id: 10,
        question: "The __________ performance received a standing ovation from the audience.",
        chinese_question: "这场__________的表演赢得了观众的起立鼓掌。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "B", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "impressive", chinese_answer: "令人印象深刻的", chinese_romanization: "lìng rén yìnxiàng shēnkè de" },
            { option: "D", answer: "unremarkable", chinese_answer: "平凡的", chinese_romanization: "píngfán de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impressive' means evoking admiration through size, quality, or skill; grand, imposing, or awesome." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(B) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(D) 'unremarkable' means not particularly interesting or surprising.",
        chinese_explanation: "(C) '令人印象深刻的'一词意味着通过大小、质量或技能引起钦佩的；宏大的、庄严的或令人敬畏的。" +
            "<br><br>" +
            "(A) '无聊的' 意味着缺乏兴趣或兴奋的。" +
            "<br><br>" +
            "(B) '普通的' 意味着没有特别或独特的特征；正常的。" +
            "<br><br>" +
            "(D) '平凡的' 意味着不特别有趣或令人惊讶的。"
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
