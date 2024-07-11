// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The garden was filled with an __________ of flowers, creating a colorful and vibrant landscape.",
        chinese_question: "花园里充满了 __________ 的花朵，创造了一个色彩斑斓和充满活力的景观。",
        answers: [
            { option: "A", answer: "scarcity", chinese_answer: "稀缺", chinese_romanization: "xīquē" },
            { option: "B", answer: "paucity", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
            { option: "C", answer: "abundance", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
            { option: "D", answer: "dearth", chinese_answer: "缺乏", chinese_romanization: "quēfá" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'abundance' means a very large quantity of something." +
            "<br><br>" +
            "(A) 'scarcity' means the state of being scarce or in short supply; shortage." +
            "<br><br>" +
            "(B) 'paucity' means the presence of something only in small or insufficient quantities or amounts." +
            "<br><br>" +
            "(D) 'dearth' means a scarcity or lack of something.",
        chinese_explanation: "(C) '丰富' 一词意味着大量的某物。" +
            "<br><br>" +
            "(A) '稀缺' 意味着稀少或短缺的状态；短缺。" +
            "<br><br>" +
            "(B) '缺乏' 意味着数量少或不足。" +
            "<br><br>" +
            "(D) '缺乏' 意味着某物的稀缺或缺乏。"
    },
    {
        id: 2,
        question: "The __________ reviewed the company's financial records to ensure accuracy and compliance with regulations.",
        chinese_question: "__________ 审查了公司的财务记录，以确保准确性和合规性。",
        answers: [
            { option: "A", answer: "lawyer", chinese_answer: "律师", chinese_romanization: "lǜshī" },
            { option: "B", answer: "engineer", chinese_answer: "工程师", chinese_romanization: "gōngchéngshī" },
            { option: "C", answer: "doctor", chinese_answer: "医生", chinese_romanization: "yīshēng" },
            { option: "D", answer: "accountant", chinese_answer: "会计师", chinese_romanization: "kuàijìshī" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'accountant' means a person whose job is to keep or inspect financial accounts." +
            "<br><br>" +
            "(A) 'lawyer' means a person who practices or studies law; an attorney or a counselor." +
            "<br><br>" +
            "(B) 'engineer' means a person who designs, builds, or maintains engines, machines, or public works." +
            "<br><br>" +
            "(C) 'doctor' means a qualified practitioner of medicine; a physician.",
        chinese_explanation: "(D) '会计师' 一词意味着负责保持或检查财务账户的人。" +
            "<br><br>" +
            "(A) '律师' 意味着从事或学习法律的人；律师或顾问。" +
            "<br><br>" +
            "(B) '工程师' 意味着设计、建造或维护引擎、机器或公共工程的人。" +
            "<br><br>" +
            "(C) '医生' 意味着合格的医学从业者；医生。"
    },
    {
        id: 3,
        question: "The child's __________ for her new puppy was evident as she cuddled and played with it all day.",
        chinese_question: "孩子对她的新小狗的 __________ 很明显，因为她整天都在拥抱和玩耍它。",
        answers: [
            { option: "A", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "affection", chinese_answer: "爱情", chinese_romanization: "àiqíng" },
            { option: "C", answer: "dislike", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
            { option: "D", answer: "aversion", chinese_answer: "反感", chinese_romanization: "fǎngǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'affection' means a gentle feeling of fondness or liking." +
            "<br><br>" +
            "(A) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(C) 'dislike' means a feeling of distaste or hostility." +
            "<br><br>" +
            "(D) 'aversion' means a strong dislike or disinclination.",
        chinese_explanation: "(B) '爱情' 一词意味着温和的喜爱或喜欢的感觉。" +
            "<br><br>" +
            "(A) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(C) '厌恶' 意味着一种厌恶或敌意的感觉。" +
            "<br><br>" +
            "(D) '反感' 意味着强烈的厌恶或不喜欢。"
    },
    {
        id: 4,
        question: "The children's faces were filled with __________ as they watched the magician perform his incredible tricks.",
        chinese_question: "孩子们的脸上充满了 __________，看着魔术师表演他不可思议的把戏。",
        answers: [
            { option: "A", answer: "boredom", chinese_answer: "无聊", chinese_romanization: "wúliáo" },
            { option: "B", answer: "amazement", chinese_answer: "惊讶", chinese_romanization: "jīngyà" },
            { option: "C", answer: "confusion", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
            { option: "D", answer: "disappointment", chinese_answer: "失望", chinese_romanization: "shīwàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'amazement' means a feeling of great surprise or wonder." +
            "<br><br>" +
            "(A) 'boredom' means the state of feeling bored." +
            "<br><br>" +
            "(C) 'confusion' means lack of understanding; uncertainty." +
            "<br><br>" +
            "(D) 'disappointment' means sadness or displeasure caused by the non-fulfillment of one's hopes or expectations.",
        chinese_explanation: "(B) '惊讶' 一词意味着极大的惊奇或惊奇的感觉。" +
            "<br><br>" +
            "(A) '无聊' 意味着感到无聊的状态。" +
            "<br><br>" +
            "(C) '困惑' 意味着缺乏理解；不确定性。" +
            "<br><br>" +
            "(D) '失望' 意味着因未实现的希望或期望而引起的悲伤或不悦。"
    },
    {
        id: 5,
        question: "The __________ of the old theater included installing new seats, updating the sound system, and restoring the original decor.",
        chinese_question: "旧剧院的 __________ 包括安装新座位、更新音响系统和恢复原始装饰。",
        answers: [
            { option: "A", answer: "demolition", chinese_answer: "拆除", chinese_romanization: "chāichú" },
            { option: "B", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "abandonment", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "D", answer: "renovation", chinese_answer: "翻新", chinese_romanization: "fānxīn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'renovation' means the action of renovating a building." +
            "<br><br>" +
            "(A) 'demolition' means the action or process of demolishing or being demolished." +
            "<br><br>" +
            "(B) 'neglect' means the state of being uncared for." +
            "<br><br>" +
            "(C) 'abandonment' means the action or fact of abandoning or being abandoned.",
        chinese_explanation: "(D) '翻新' 一词意味着翻新建筑的行为。" +
            "<br><br>" +
            "(A) '拆除' 意味着拆除或被拆除的行为或过程。" +
            "<br><br>" +
            "(B) '忽视' 意味着无人照顾的状态。" +
            "<br><br>" +
            "(C) '放弃' 意味着放弃或被放弃的行为或事实。"
    },
    {
        id: 6,
        question: "The earthquake's __________ was felt across several countries, causing widespread damage and panic.",
        chinese_question: "地震的 __________ 感受到在几个国家，造成了广泛的破坏和恐慌。",
        answers: [
            { option: "A", answer: "insignificance", chinese_answer: "无关紧要", chinese_romanization: "wúguān jǐnyào" },
            { option: "B", answer: "triviality", chinese_answer: "琐碎", chinese_romanization: "suǒsuì" },
            { option: "C", answer: "magnitude", chinese_answer: "震级", chinese_romanization: "zhènjí" },
            { option: "D", answer: "smallness", chinese_answer: "小", chinese_romanization: "xiǎo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'magnitude' means the great size or extent of something; a numerical quantity or value." +
            "<br><br>" +
            "(A) 'insignificance' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(B) 'triviality' means lack of seriousness or importance; insignificance." +
            "<br><br>" +
            "(D) 'smallness' means the quality of being small in size.",
        chinese_explanation: "(C) '震级' 意味着某物的巨大规模或范围；一个数值。" +
            "<br><br>" +
            "(A) '无关紧要' 意味着太小或不重要，不值得考虑。" +
            "<br><br>" +
            "(B) '琐碎' 意味着缺乏严肃性或重要性；无关紧要。" +
            "<br><br>" +
            "(D) '小' 意味着小的质量。"
    },
    {
        id: 7,
        question: "The meteorologist made a __________ about next week's weather based on the current data and patterns.",
        chinese_question: "气象学家根据当前的数据和模式对下周的天气做出了 __________。",
        answers: [
            { option: "A", answer: "reflection", chinese_answer: "反思", chinese_romanization: "fǎnsī" },
            { option: "B", answer: "contradiction", chinese_answer: "矛盾", chinese_romanization: "máodùn" },
            { option: "C", answer: "prediction", chinese_answer: "预测", chinese_romanization: "yùcè" },
            { option: "D", answer: "assessment", chinese_answer: "评估", chinese_romanization: "pínggū" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prediction' means a statement about what will happen in the future." +
            "<br><br>" +
            "(A) 'reflection' means serious thought or consideration." +
            "<br><br>" +
            "(B) 'contradiction' means a combination of statements that are opposed to one another." +
            "<br><br>" +
            "(D) 'assessment' means the evaluation or estimation of the nature, quality, or ability of someone or something.",
        chinese_explanation: "(C) '预测' 一词意味着对未来将要发生的事情的陈述。" +
            "<br><br>" +
            "(A) '反思' 意味着认真思考或考虑。" +
            "<br><br>" +
            "(B) '矛盾' 意味着相互对立的陈述组合。" +
            "<br><br>" +
            "(D) '评估' 意味着对某人或某事的性质、质量或能力的评估或估计。"
    },
    {
        id: 8,
        question: "The __________, with its impressive wingspan and majestic flight, soared high above the Andes.",
        chinese_question: "这只 __________ 展开它令人印象深刻的翼展和雄伟的飞行，在安第斯山脉上空翱翔。",
        answers: [
            { option: "A", answer: "condor", chinese_answer: "秃鹰", chinese_romanization: "tūyīng" },
            { option: "B", answer: "pigeon", chinese_answer: "鸽子", chinese_romanization: "gēzi" },
            { option: "C", answer: "sparrow", chinese_answer: "麻雀", chinese_romanization: "máquè" },
            { option: "D", answer: "seagull", chinese_answer: "海鸥", chinese_romanization: "hǎi'ōu" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'condor' means a large New World vulture with a bare head and mainly black plumage, living in mountainous country and spending much time soaring." +
            "<br><br>" +
            "(B) 'pigeon' means a stout seed- or fruit-eating bird with a small head, short legs, and a cooing voice." +
            "<br><br>" +
            "(C) 'sparrow' means a small Old World bird related to the weaverbirds, typically with brown and gray plumage." +
            "<br><br>" +
            "(D) 'seagull' means a bird of the family Laridae, having a long bill, webbed feet, and long wings.",
        chinese_explanation: "(A) '秃鹰' 一词意味着一种大而无毛的头部，主要为黑色羽毛的美洲秃鹫，生活在山区，花很多时间翱翔。" +
            "<br><br>" +
            "(B) '鸽子' 意味着一种矮胖的种子或果食鸟，头小，腿短，声音嘶哑。" +
            "<br><br>" +
            "(C) '麻雀' 意味着一种小型旧大陆鸟类，与织巢鸟有关，通常有棕色和灰色羽毛。" +
            "<br><br>" +
            "(D) '海鸥' 意味着鸥科鸟类，具有长喙、蹼足和长翼。"
    },
    {
        id: 9,
        question: "The student was expelled for __________, as he was caught copying an entire article for his term paper.",
        chinese_question: "这名学生因 __________ 而被开除，因为他被发现抄袭了一整篇文章作为他的学期论文。",
        answers: [
            { option: "A", answer: "originality", chinese_answer: "原创性", chinese_romanization: "yuánchuàng xìng" },
            { option: "B", answer: "creativity", chinese_answer: "创造力", chinese_romanization: "chuàngzào lì" },
            { option: "C", answer: "inspiration", chinese_answer: "灵感", chinese_romanization: "línggǎn" },
            { option: "D", answer: "plagiarism", chinese_answer: "抄袭", chinese_romanization: "chāoxí" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'plagiarism' means the practice of taking someone else's work or ideas and passing them off as one's own." +
            "<br><br>" +
            "(A) 'originality' means the ability to think independently and creatively." +
            "<br><br>" +
            "(B) 'creativity' means the use of imagination or original ideas to create something." +
            "<br><br>" +
            "(C) 'inspiration' means the process of being mentally stimulated to do or feel something, especially to do something creative.",
        chinese_explanation: "(D) '抄袭' 一词意味着将别人的作品或想法据为己有的行为。" +
            "<br><br>" +
            "(A) '原创性' 意味着独立思考和创造性思维的能力。" +
            "<br><br>" +
            "(B) '创造力' 意味着利用想象力或原创思想创造某物。" +
            "<br><br>" +
            "(C) '灵感' 意味着在精神上受到刺激去做某事或感受某事的过程，尤其是做某事有创意。"
    },
    {
        id: 10,
        question: "The weather forecast predicted that temperatures would reach 100 degrees __________ by the afternoon.",
        chinese_question: "天气预报预测下午气温将达到100度 __________。",
        answers: [
            { option: "A", answer: "Fahrenheit", chinese_answer: "华氏", chinese_romanization: "huáshì" },
            { option: "B", answer: "Celsius", chinese_answer: "摄氏", chinese_romanization: "shèshì" },
            { option: "C", answer: "Kelvin", chinese_answer: "开尔文", chinese_romanization: "kāi'ěrwén" },
            { option: "D", answer: "metric", chinese_answer: "公制", chinese_romanization: "gōngzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'Fahrenheit' is a scale of temperature in which water freezes at 32 degrees and boils at 212 degrees under standard conditions." +
            "<br><br>" +
            "(B) 'Celsius' is a scale of temperature in which water freezes at 0 degrees and boils at 100 degrees." +
            "<br><br>" +
            "(C) 'Kelvin' is a scale of temperature in which absolute zero is 0 K, the freezing point of water is 273.15 K, and the boiling point is 373.15 K." +
            "<br><br>" +
            "(D) 'metric' refers to the metric system, a decimal system of weights and measures.",
        chinese_explanation: "(A) '华氏' 一词是温度的一种刻度，其中水在标准条件下冻结点为32度，沸点为212度。" +
            "<br><br>" +
            "(B) '摄氏' 是温度的一种刻度，其中水的冻结点为0度，沸点为100度。" +
            "<br><br>" +
            "(C) '开尔文' 是温度的一种刻度，其中绝对零度为0 K，水的冻结点为273.15 K，沸点为373.15 K。" +
            "<br><br>" +
            "(D) '公制' 指的是一个十进制的度量衡系统。"
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
