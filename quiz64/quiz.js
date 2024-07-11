// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She takes a __________ supplement daily to ensure she gets enough nutrients for her health.",
        chinese_question: "她每天服用 __________ 补充剂，以确保获得足够的营养。",
        answers: [
            { option: "A", answer: "vitamin", chinese_answer: "维生素", chinese_romanization: "wéishēngsù" },
            { option: "B", answer: "mineral", chinese_answer: "矿物质", chinese_romanization: "kuàngwùzhí" },
            { option: "C", answer: "protein", chinese_answer: "蛋白质", chinese_romanization: "dànbáizhí" },
            { option: "D", answer: "fiber", chinese_answer: "纤维", chinese_romanization: "xiānwéi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'vitamin' means any of a group of organic compounds that are essential for normal growth and nutrition." +
            "<br><br>" +
            "(B) 'mineral' means a solid inorganic substance of natural occurrence." +
            "<br><br>" +
            "(C) 'protein' means any of a class of nitrogenous organic compounds that consist of large molecules composed of one or more long chains of amino acids." +
            "<br><br>" +
            "(D) 'fiber' means a dietary material containing substances such as cellulose, lignin, and pectin, which are resistant to the action of digestive enzymes.",
        chinese_explanation: "(A) '维生素' 一词意味着一组有机化合物中的任何一种，它们对正常生长和营养是必需的。" +
            "<br><br>" +
            "(B) '矿物质' 意味着自然存在的固体无机物质。" +
            "<br><br>" +
            "(C) '蛋白质' 意味着由一个或多个长链氨基酸组成的大分子的含氮有机化合物类。" +
            "<br><br>" +
            "(D) '纤维' 意味着含有纤维素、木质素和果胶等物质的膳食材料，这些物质对消化酶的作用具有抵抗力。"
    },
    {
        id: 2,
        question: "Her lifelong __________ was to become a renowned surgeon and help save lives.",
        chinese_question: "她毕生的 __________ 是成为一名著名的外科医生并帮助挽救生命。",
        answers: [
            { option: "A", answer: "hobby", chinese_answer: "爱好", chinese_romanization: "àihào" },
            { option: "B", answer: "routine", chinese_answer: "常规", chinese_romanization: "chángguī" },
            { option: "C", answer: "aspiration", chinese_answer: "志向", chinese_romanization: "zhìxiàng" },
            { option: "D", answer: "task", chinese_answer: "任务", chinese_romanization: "rènwù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'aspiration' means a hope or ambition of achieving something." +
            "<br><br>" +
            "(A) 'hobby' means an activity done regularly in one's leisure time for pleasure." +
            "<br><br>" +
            "(B) 'routine' means a sequence of actions regularly followed; a fixed program." +
            "<br><br>" +
            "(D) 'task' means a piece of work to be done or undertaken.",
        chinese_explanation: "(C) '志向' 一词意味着实现某事的希望或野心。" +
            "<br><br>" +
            "(A) '爱好' 意味着在闲暇时间定期进行的活动以获得乐趣。" +
            "<br><br>" +
            "(B) '常规' 意味着定期遵循的一系列动作；固定程序。" +
            "<br><br>" +
            "(D) '任务' 意味着要完成或承担的一项工作。"
    },
    {
        id: 3,
        question: "The region's economy relies heavily on __________, with vast fields of crops and numerous livestock farms.",
        chinese_question: "该地区的经济严重依赖于__________，拥有广阔的农田和众多的畜牧场。",
        answers: [
            { option: "A", answer: "industry", chinese_answer: "工业", chinese_romanization: "gōngyè" },
            { option: "B", answer: "technology", chinese_answer: "科技", chinese_romanization: "kējì" },
            { option: "C", answer: "agriculture", chinese_answer: "农业", chinese_romanization: "nóngyè" },
            { option: "D", answer: "tourism", chinese_answer: "旅游业", chinese_romanization: "lǚyóu yè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'agriculture' means the science or practice of farming, including cultivation of the soil for the growing of crops and the rearing of animals to provide food, wool, and other products." +
            "<br><br>" +
            "(A) 'industry' means economic activity concerned with the processing of raw materials and manufacture of goods in factories." +
            "<br><br>" +
            "(B) 'technology' means the application of scientific knowledge for practical purposes, especially in industry." +
            "<br><br>" +
            "(D) 'tourism' means the commercial organization and operation of vacations and visits to places of interest.",
        chinese_explanation: "(C) '农业' 一词意味着农业科学或实践，包括耕种土壤以种植作物和饲养动物以提供食物、羊毛和其他产品。" +
            "<br><br>" +
            "(A) '工业' 意味着与工厂原材料加工和商品制造有关的经济活动。" +
            "<br><br>" +
            "(B) '科技' 意味着将科学知识应用于实际目的，尤其是工业。" +
            "<br><br>" +
            "(D) '旅游业' 意味着假期和参观名胜的商业组织和运营。"
    },
    {
        id: 4,
        question: "She preferred writing poetry, but her latest assignment required her to write in __________, using straightforward language and structured paragraphs.",
        chinese_question: "她喜欢写诗，但她最近的作业要求她写散文，使用简单的语言和结构化的段落。",
        answers: [
            { option: "A", answer: "verse", chinese_answer: "诗句", chinese_romanization: "shījù" },
            { option: "B", answer: "rhyme", chinese_answer: "押韵", chinese_romanization: "yāyùn" },
            { option: "C", answer: "prose", chinese_answer: "散文", chinese_romanization: "sǎnwén" },
            { option: "D", answer: "sonnet", chinese_answer: "十四行诗", chinese_romanization: "shísì háng shī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prose' means written or spoken language in its ordinary form, without metrical structure. It is regular writing like in books or articles." +
            "<br><br>" +
            "(A) 'verse' means writing arranged with a metrical rhythm, typically having a rhyme. It is often used in poetry." +
            "<br><br>" +
            "(B) 'rhyme' means correspondence of sound between words or the endings of words. It is when words sound the same at the end." +
            "<br><br>" +
            "(D) 'sonnet' means a poem of fourteen lines using any of a number of formal rhyme schemes. It is a special type of poem with a set structure.",
        chinese_explanation: "(C) '散文' 一词意味着以普通形式书写或口述的语言，没有格律结构。它是像书或文章中的常规写作。" +
            "<br><br>" +
            "(A) '诗句' 意味着具有格律节奏的书写，通常押韵。它常用于诗歌中。" +
            "<br><br>" +
            "(B) '押韵' 意味着单词或单词结尾之间的声音对应。它是指单词结尾的发音相同。" +
            "<br><br>" +
            "(D) '十四行诗' 意味着使用多种正式押韵方案的十四行诗。这是一种有固定结构的特殊诗歌形式。"
    },
    {
        id: 5,
        question: "The children's book used a lot of __________, making the story come alive with words like 'buzz,' 'clang,' and 'sizzle.'",
        chinese_question: "这本儿童书用了很多 __________，用像“嗡嗡”，“叮当”，“滋滋”这样的词让故事变得生动起来。",
        answers: [
            { option: "A", answer: "metaphor", chinese_answer: "隐喻", chinese_romanization: "yǐnyù" },
            { option: "B", answer: "hyperbole", chinese_answer: "夸张", chinese_romanization: "kuāzhāng" },
            { option: "C", answer: "irony", chinese_answer: "反讽", chinese_romanization: "fǎnfěng" },
            { option: "D", answer: "onomatopoeia", chinese_answer: "拟声词", chinese_romanization: "nǐshēng cí" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'onomatopoeia' means the formation of a word from a sound associated with what is named." +
            "<br><br>" +
            "(A) 'metaphor' means a figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable." +
            "<br><br>" +
            "(B) 'hyperbole' means exaggerated statements or claims not meant to be taken literally." +
            "<br><br>" +
            "(C) 'irony' means the expression of one's meaning by using language that normally signifies the opposite, typically for humorous or emphatic effect.",
        chinese_explanation: "(D) '拟声词' 一词意味着根据所命名的声音形成的词。" +
            "<br><br>" +
            "(A) '隐喻' 意味着将一个词或短语应用于一个对象或动作，而不是字面上适用的修辞手法。" +
            "<br><br>" +
            "(B) '夸张' 意味着不应被字面接受的夸大陈述或主张。" +
            "<br><br>" +
            "(C) '反讽' 意味着通过使用通常表示相反意思的语言来表达一个人的意思，通常是为了幽默或强调效果。"
    },
    {
        id: 6,
        question: "The contractor gave us an __________ of the cost to remodel the kitchen, but the final price was much higher.",
        chinese_question: "承包商给了我们一个厨房改造费用的 __________，但最终价格要高得多。",
        answers: [
            { option: "A", answer: "miscalculation", chinese_answer: "误算", chinese_romanization: "wùsuàn" },
            { option: "B", answer: "estimate", chinese_answer: "估计", chinese_romanization: "gūjì" },
            { option: "C", answer: "guess", chinese_answer: "猜测", chinese_romanization: "cāicè" },
            { option: "D", answer: "refusal", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'estimate' means an approximate calculation or judgment of the value, number, quantity, or extent of something." +
            "<br><br>" +
            "(A) 'miscalculation' means an incorrect calculation or judgment." +
            "<br><br>" +
            "(C) 'guess' means an estimate or conjecture without sufficient information." +
            "<br><br>" +
            "(D) 'refusal' means an act of declining to accept.",
        chinese_explanation: "(B) '估计' 一词意味着对某物的价值、数量、数量或程度的近似计算或判断。" +
            "<br><br>" +
            "(A) '误算' 意味着不正确的计算或判断。" +
            "<br><br>" +
            "(C) '猜测' 意味着在没有足够信息的情况下的估计或推测。" +
            "<br><br>" +
            "(D) '拒绝' 意味着拒绝接受的行为。"
    },
    {
        id: 7,
        question: "The movie's __________ kept the audience on the edge of their seats, eagerly waiting to see what would happen next.",
        chinese_question: "这部电影的 __________ 让观众坐立不安，急切地等待接下来会发生什么。",
        answers: [
            { option: "A", answer: "boredom", chinese_answer: "无聊", chinese_romanization: "wúliáo" },
            { option: "B", answer: "conclusion", chinese_answer: "结局", chinese_romanization: "jiéjú" },
            { option: "C", answer: "suspense", chinese_answer: "悬念", chinese_romanization: "xuánniàn" },
            { option: "D", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'suspense' means a state or feeling of excited or anxious uncertainty about what may happen." +
            "<br><br>" +
            "(A) 'boredom' means the state of feeling bored." +
            "<br><br>" +
            "(B) 'conclusion' means the end or finish of an event or process." +
            "<br><br>" +
            "(D) 'clarity' means the quality of being clear.",
        chinese_explanation: "(C) '悬念' 一词意味着对可能发生的事情感到兴奋或焦虑的不确定状态。" +
            "<br><br>" +
            "(A) '无聊' 意味着感到无聊的状态。" +
            "<br><br>" +
            "(B) '结局' 意味着事件或过程的结束。" +
            "<br><br>" +
            "(D) '清晰' 意味着清晰的质量。"
    },
    {
        id: 8,
        question: "The sudden __________ in the hallway disrupted the entire class during their final exam.",
        chinese_question: "走廊里的突然 __________ 打断了整个班级的期末考试。",
        answers: [
            { option: "A", answer: "tranquility", chinese_answer: "宁静", chinese_romanization: "níngjìng" },
            { option: "B", answer: "serenity", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "C", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" },
            { option: "D", answer: "commotion", chinese_answer: "骚动", chinese_romanization: "sāodòng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'commotion' means a state of confused and noisy disturbance." +
            "<br><br>" +
            "(A) 'tranquility' means the quality or state of being calm." +
            "<br><br>" +
            "(B) 'serenity' means the state of being calm, peaceful, and untroubled." +
            "<br><br>" +
            "(C) 'silence' means the absence of sound.",
        chinese_explanation: "(D) '骚动' 一词意味着一种混乱和嘈杂的状态。" +
            "<br><br>" +
            "(A) '宁静' 意味着平静的质量或状态。" +
            "<br><br>" +
            "(B) '平静' 意味着平静、和平和不受干扰的状态。" +
            "<br><br>" +
            "(C) '沉默' 意味着没有声音。"
    },
    {
        id: 9,
        question: "A __________ of stars lit up the night sky, creating a breathtaking view that left everyone in awe.",
        chinese_question: "夜空中点缀着 __________ 的星星，创造出令人惊叹的景象，让每个人都赞叹不已。",
        answers: [
            { option: "A", answer: "handful", chinese_answer: "一把", chinese_romanization: "yī bǎ" },
            { option: "B", answer: "multitude", chinese_answer: "大量", chinese_romanization: "dàliàng" },
            { option: "C", answer: "scarcity", chinese_answer: "稀缺", chinese_romanization: "xīquē" },
            { option: "D", answer: "singularity", chinese_answer: "单一", chinese_romanization: "dānyī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'multitude' means a large number." +
            "<br><br>" +
            "(A) 'handful' means a small number or amount." +
            "<br><br>" +
            "(C) 'scarcity' means the state of being scarce or in short supply; shortage." +
            "<br><br>" +
            "(D) 'singularity' means the state, fact, quality, or condition of being singular.",
        chinese_explanation: "(B) '大量' 意味着数量众多。" +
            "<br><br>" +
            "(A) '一把' 意味着数量很少。" +
            "<br><br>" +
            "(C) '稀缺' 意味着短缺或供应不足的状态。" +
            "<br><br>" +
            "(D) '单一' 意味着单独的状态、事实、质量或条件。"
    },
    {
        id: 10,
        question: "Although the twins had different personalities, there was a striking __________ in their physical appearance, such as their identical facial features and height.",
        chinese_question: "尽管双胞胎性格不同，但他们的外貌有着显著的 __________，例如他们相同的面部特征和身高。",
        answers: [
            { option: "A", answer: "similarity", chinese_answer: "相似性", chinese_romanization: "xiāngsì xìng" },
            { option: "B", answer: "difference", chinese_answer: "差异", chinese_romanization: "chāyì" },
            { option: "C", answer: "contrast", chinese_answer: "对比", chinese_romanization: "duìbǐ" },
            { option: "D", answer: "disparity", chinese_answer: "悬殊", chinese_romanization: "xuánshū" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'similarity' means the state or fact of being similar." +
            "<br><br>" +
            "(B) 'difference' means a point or way in which people or things are not the same." +
            "<br><br>" +
            "(C) 'contrast' means the state of being strikingly different from something else in juxtaposition or close association." +
            "<br><br>" +
            "(D) 'disparity' means a great difference.",
        chinese_explanation: "(A) '相似性' 一词意味着相似的状态或事实。" +
            "<br><br>" +
            "(B) '差异' 意味着人或事物不同的一个点或方式。" +
            "<br><br>" +
            "(C) '对比' 意味着与另一事物在并列或紧密联系中显著不同的状态。" +
            "<br><br>" +
            "(D) '悬殊' 意味着巨大的差异。"
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
