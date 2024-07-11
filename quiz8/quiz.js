// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The relationship between the clownfish and the sea anemone is __________, as both species benefit from each other’s presence.",
        chinese_question: "小丑鱼和海葵之间的关系是 __________，因为两种生物都从彼此的存在中受益。",
        answers: [
            { option: "A", answer: "parasitic", chinese_answer: "寄生", chinese_romanization: "jìshēng" },
            { option: "B", answer: "competitive", chinese_answer: "竞争", chinese_romanization: "jìngzhēng" },
            { option: "C", answer: "antagonistic", chinese_answer: "对抗", chinese_romanization: "duìkàng" },
            { option: "D", answer: "symbiotic", chinese_answer: "共生", chinese_romanization: "gòngshēng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'symbiotic' means involving interaction between two different organisms living in close physical association, typically to the advantage of both." +
            "<br><br>" +
            "(A) 'parasitic' means living as a parasite in or on another organism." +
            "<br><br>" +
            "(B) 'competitive' means relating to or characterized by competition." +
            "<br><br>" +
            "(C) 'antagonistic' means showing or feeling active opposition or hostility toward someone or something.",
        chinese_explanation: "(D) '共生' 意味着两种不同生物在密切的物理联系中相互作用，通常对双方都有利。" +
            "<br><br>" +
            "(A) '寄生' 意味着作为寄生虫生活在另一生物体内或体上。" +
            "<br><br>" +
            "(B) '竞争' 意味着与竞争相关或以竞争为特征。" +
            "<br><br>" +
            "(C) '对抗' 意味着表现或感受到对某人或某事的积极对立或敌意。"
    },
    {
        id: 2,
        question: "The billionaire was known for his __________ efforts, donating millions to various charities.",
        chinese_question: "这位亿万富翁因其 __________ 的努力而闻名，捐赠了数百万给各种慈善机构。",
        answers: [
            { option: "A", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" },
            { option: "B", answer: "philanthropic", chinese_answer: "慈善的", chinese_romanization: "císhàn de" },
            { option: "C", answer: "greedy", chinese_answer: "贪婪的", chinese_romanization: "tānlán de" },
            { option: "D", answer: "stingy", chinese_answer: "吝啬的", chinese_romanization: "lìnsè de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'philanthropic' means seeking to promote the welfare of others, especially by donating money to good causes; generous and benevolent." +
            "<br><br>" +
            "(A) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
            "<br><br>" +
            "(C) 'greedy' means having or showing an intense and selfish desire for something, especially wealth or power." +
            "<br><br>" +
            "(D) 'stingy' means unwilling to give or spend; ungenerous.",
        chinese_explanation: "(B) '慈善的' 意味着寻求促进他人福利的，特别是通过捐赠钱给好的事业；慷慨和仁慈的。" +
            "<br><br>" +
            "(A) '自私的' 意味着缺乏对他人的考虑；主要关心自己的个人利益或快乐的。" +
            "<br><br>" +
            "(C) '贪婪的' 意味着对某事物（尤指财富或权力）表现出强烈和自私的欲望的。" +
            "<br><br>" +
            "(D) '吝啬的' 意味着不愿给予或花钱的；不慷慨的。"
    },
    {
        id: 3,
        question: "They gathered mushrooms from the forest, making sure they were __________ before adding them to their meal.",
        chinese_question: "他们从森林里采集蘑菇，确保它们是__________的才加入他们的餐食。",
        answers: [
            { option: "A", answer: "poisonous", chinese_answer: "有毒的", chinese_romanization: "yǒudú de" },
            { option: "B", answer: "edible", chinese_answer: "可食用的", chinese_romanization: "kě shíyòng de" },
            { option: "C", answer: "inedible", chinese_answer: "不可食用的", chinese_romanization: "bù kě shíyòng de" },
            { option: "D", answer: "decorative", chinese_answer: "装饰性的", chinese_romanization: "zhuāngshì xìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'edible' means fit to be eaten." +
            "<br><br>" +
            "(A) 'poisonous' means causing or capable of causing death or illness if taken into the body." +
            "<br><br>" +
            "(C) 'inedible' means not fit or suitable for eating." +
            "<br><br>" +
            "(D) 'decorative' means serving to make something look more attractive.",
        chinese_explanation: "(B) '可食用的'一词意味着适合食用的。" +
            "<br><br>" +
            "(A) '有毒的' 意味着如果摄入体内会导致死亡或疾病。" +
            "<br><br>" +
            "(C) '不可食用的' 意味着不适合或不适合食用的。" +
            "<br><br>" +
            "(D) '装饰性的' 意味着使某物看起来更有吸引力的。"
    },
    {
        id: 4,
        question: "Her performance was nothing short of __________, with breathtaking dance moves and stunning vocal prowess, leaving the audience in awe.",
        chinese_question: "她的表演非常__________，以令人屏息的舞蹈动作和惊人的歌唱能力，让观众赞叹不已。",
        answers: [
            { option: "A", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "B", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "C", answer: "magnificent", chinese_answer: "壮丽的", chinese_romanization: "zhuànglì de" },
            { option: "D", answer: "plain", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'magnificent' means impressively beautiful, elaborate, or extravagant; striking. Figuratively, it can mean exceptionally good or impressive." +
            "<br><br>" +
            "(A) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(B) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'plain' means not decorated or elaborate; simple or ordinary in character.",
        chinese_explanation: "(C) '壮丽的'一词意味着令人印象深刻的美丽、复杂或奢华；引人注目的。比喻地，它可以表示非常好或令人印象深刻的。" +
            "<br><br>" +
            "(A) '普通的' 意味着没有特别或独特的特征；正常的。" +
            "<br><br>" +
            "(B) '简单的' 意味着容易理解或完成；没有难度的。" +
            "<br><br>" +
            "(D) '朴素的' 意味着不装饰或复杂；性格简单或普通的。"
    },
    {
        id: 5,
        question: "She sat by the window, lost in a __________ mood, contemplating the meaning of life.",
        chinese_question: "她坐在窗边，陷入 __________ 的情绪中，思考着生命的意义。",
        answers: [
            { option: "A", answer: "carefree", chinese_answer: "无忧无虑的", chinese_romanization: "wú yōu wú lǜ de" },
            { option: "B", answer: "joyous", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "C", answer: "pensive", chinese_answer: "沉思的", chinese_romanization: "chénsī de" },
            { option: "D", answer: "frivolous", chinese_answer: "轻浮的", chinese_romanization: "qīngfú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pensive' means engaged in, involving, or reflecting deep or serious thought." +
            "<br><br>" +
            "(A) 'carefree' means free from anxiety or responsibility." +
            "<br><br>" +
            "(B) 'joyous' means full of happiness and joy." +
            "<br><br>" +
            "(D) 'frivolous' means not having any serious purpose or value.",
        chinese_explanation: "(C) '沉思的' 意味着从事、涉及或反映深刻或严肃的思考。" +
            "<br><br>" +
            "(A) '无忧无虑的' 意味着没有焦虑或责任的。" +
            "<br><br>" +
            "(B) '快乐的' 意味着充满幸福和快乐的。" +
            "<br><br>" +
            "(D) '轻浮的' 意味着没有任何严肃的目的或价值的。"
    },
    {
        id: 6,
        question: "The musician gave an __________ performance at the party, playing a beautiful melody on the piano without any prior rehearsal.",
        chinese_question: "音乐家在聚会上进行了 __________ 的演奏，没有事先排练就弹奏了一首美妙的曲子。",
        answers: [
            { option: "A", answer: "impromptu", chinese_answer: "即兴的", chinese_romanization: "jíxìng de" },
            { option: "B", answer: "rehearsed", chinese_answer: "排练过的", chinese_romanization: "páiliàn guò de" },
            { option: "C", answer: "planned", chinese_answer: "计划好的", chinese_romanization: "jìhuà hǎo de" },
            { option: "D", answer: "scheduled", chinese_answer: "安排好的", chinese_romanization: "ānpái hǎo de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'impromptu' means done without being planned, organized, or rehearsed." +
            "<br><br>" +
            "(B) 'rehearsed' means practiced for a later public performance." +
            "<br><br>" +
            "(C) 'planned' means decided on and arranged in advance." +
            "<br><br>" +
            "(D) 'scheduled' means included in or planned according to a schedule.",
        chinese_explanation: "(A) '即兴的' 意味着未经计划、组织或排练而完成的。" +
            "<br><br>" +
            "(B) '排练过的' 意味着为以后公开表演而练习的。" +
            "<br><br>" +
            "(C) '计划好的' 意味着提前决定和安排的。" +
            "<br><br>" +
            "(D) '安排好的' 意味着包含在计划中或根据计划安排的。"
    },
    {
        id: 7,
        question: "The explorers ventured into the __________ forest, untouched by human civilization.",
        chinese_question: "探险者们进入了 __________ 的森林，未被人类文明所触及。",
        answers: [
            { option: "A", answer: "primeval", chinese_answer: "原始的", chinese_romanization: "yuánshǐ de" },
            { option: "B", answer: "modern", chinese_answer: "现代的", chinese_romanization: "xiàndài de" },
            { option: "C", answer: "cultivated", chinese_answer: "耕作的", chinese_romanization: "gēngzuò de" },
            { option: "D", answer: "developed", chinese_answer: "发达的", chinese_romanization: "fādá de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'primeval' means of or resembling the earliest ages in the history of the world." +
            "<br><br>" +
            "(B) 'modern' means relating to the present or recent times as opposed to the remote past." +
            "<br><br>" +
            "(C) 'cultivated' means prepared and used for growing crops. It describes land that has been worked on and made ready for planting and harvesting food." +
            "<br><br>" +
            "(D) 'developed' means advanced or elaborated to a specified degree. It describes something that has progressed and become more complex, sophisticated, or complete over time.",
        chinese_explanation: "(A) '原始的' 意味着类似于世界历史上最早的时代。" +
            "<br><br>" +
            "(B) '现代的' 意味着与现在或最近的时代有关，而不是遥远的过去。" +
            "<br><br>" +
            "(C) '耕作的' 意味着为种植作物而准备和使用的。它描述的是已经经过处理并为种植和收获食物做好准备的土地。" +
            "<br><br>" +
            "(D) '发达的' 意味着达到指定程度的先进或复杂的。它描述的是随着时间的推移而进步并变得更复杂、精致或完整的事物。"
    },
    {
        id: 8,
        question: "The teacher's __________ demeanour in the classroom, with a firm tone and strict rules, ensured that all the students took their studies seriously.",
        chinese_question: "老师在课堂上的 __________ 态度，带着坚定的语气和严格的规则，确保所有学生都认真对待他们的学习。",
        answers: [
            { option: "A", answer: "lenient", chinese_answer: "宽容", chinese_romanization: "kuānróng" },
            { option: "B", answer: "stern", chinese_answer: "严厉", chinese_romanization: "yánlì" },
            { option: "C", answer: "jovial", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "D", answer: "permissive", chinese_answer: "放任", chinese_romanization: "fàngrèn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'stern' means strict and severe. It describes someone who is very serious and demanding, not allowing for any leniency or softness." +
            "<br><br>" +
            "(A) 'lenient' means permissive, merciful, or tolerant. It describes someone who is not strict, allowing more freedom and being more forgiving, often showing kindness when rules are broken." +
            "<br><br>" +
            "(C) 'jovial' means cheerful and friendly." +
            "<br><br>" +
            "(D) 'permissive' means allowing or characterized by great or excessive freedom of behaviour.",
        chinese_explanation: "(B) '严厉' 一词意味着严格和严肃。它形容的是一个非常严肃和苛求的人，不允许任何宽容或软弱。" +
            "<br><br>" +
            "(A) '宽容' 意味着允许、仁慈或容忍。它描述的是一个不严格的人，允许更多自由并且更宽容，通常在规则被打破时表现出善意。" +
            "<br><br>" +
            "(C) '快乐' 意味着快乐和友好。" +
            "<br><br>" +
            "(D) '放任' 意味着允许或特点是行为自由过度。"
    },
    {
        id: 9,
        question: "The comedian's __________ jokes, filled with shocking and inappropriate content, offended many people in the audience.",
        chinese_question: "这位喜剧演员的__________笑话充满了令人震惊和不恰当的内容，让许多观众感到冒犯。",
        answers: [
            { option: "A", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "B", answer: "boring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "C", answer: "tame", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" },
            { option: "D", answer: "outrageous", chinese_answer: "骇人的", chinese_romanization: "hàirén de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'outrageous' means shockingly bad or excessive." +
            "<br><br>" +
            "(A) 'mild' means gentle and not easily provoked." +
            "<br><br>" +
            "(B) 'boring' means not interesting; tedious." +
            "<br><br>" +
            "(C) 'tame' means not dangerous or exciting.",
        chinese_explanation: "(D) '骇人的'一词意味着令人震惊的糟糕或过分的。" +
            "<br><br>" +
            "(A) '温和的' 意味着温柔且不容易被激怒的。" +
            "<br><br>" +
            "(B) '无聊的' 意味着不有趣的；乏味的。" +
            "<br><br>" +
            "(C) '平淡的' 意味着不危险或令人兴奋的。"
    },
    {
        id: 10,
        question: "His __________ attitude made it difficult for others to work with him, as he often dismissed their ideas without consideration.",
        chinese_question: "他 __________ 的态度使得别人难以与他共事，因为他经常不考虑他人的想法。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" },
            { option: "B", answer: "arrogant", chinese_answer: "傲慢", chinese_romanization: "àomàn" },
            { option: "C", answer: "modest", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "D", answer: "reserved", chinese_answer: "内向", chinese_romanization: "nèixiàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'arrogant' means having an exaggerated sense of one's own importance or abilities." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's own importance." +
            "<br><br>" +
            "(C) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'reserved' means slow to reveal emotion or opinions.",
        chinese_explanation: "(B) '傲慢' 一词意味着对自己重要性或能力的夸大感。" +
            "<br><br>" +
            "(A) '谦逊' 意味着对自己重要性的适度或低估。" +
            "<br><br>" +
            "(C) '谦虚' 意味着对自己能力或成就的不自负。" +
            "<br><br>" +
            "(D) '内向' 意味着情感或意见的表露缓慢。"
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
