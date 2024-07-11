// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Known for his __________, he always made decisions based on what was right, even when it was difficult.",
        chinese_question: "他以 __________ 闻名，总是基于正确的事情做决定，即使这很困难。",
        answers: [
            { option: "A", answer: "dishonesty", chinese_answer: "不诚实", chinese_romanization: "bù chéngshí" },
            { option: "B", answer: "integrity", chinese_answer: "诚实正直", chinese_romanization: "chéngshí zhèngzhí" },
            { option: "C", answer: "deceit", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
            { option: "D", answer: "corruption", chinese_answer: "腐败", chinese_romanization: "fǔbài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'integrity' means the quality of being honest and having strong moral principles; moral uprightness." +
            "<br><br>" +
            "(A) 'dishonesty' means deceitfulness shown in someone's character or behavior." +
            "<br><br>" +
            "(C) 'deceit' means the action or practice of deceiving someone by concealing or misrepresenting the truth." +
            "<br><br>" +
            "(D) 'corruption' means dishonest or fraudulent conduct by those in power.",
        chinese_explanation: "(B) '诚实正直' 意味着诚实和具有强烈道德原则的品质；道德正直。" +
            "<br><br>" +
            "(A) '不诚实' 意味着某人的性格或行为中的欺骗性。" +
            "<br><br>" +
            "(C) '欺骗' 意味着通过隐藏或歪曲事实来欺骗他人的行为或做法。" +
            "<br><br>" +
            "(D) '腐败' 意味着权力人物的不诚实或欺诈行为。"
    },
    {
        id: 2,
        question: "The meteorologist's __________ about the upcoming storm helped residents prepare and avoid potential damage.",
        chinese_question: "气象学家对即将来临的风暴的 __________ 帮助居民做好准备，避免潜在的损害。",
        answers: [
            { option: "A", answer: "memory", chinese_answer: "记忆", chinese_romanization: "jìyì" },
            { option: "B", answer: "prediction", chinese_answer: "预测", chinese_romanization: "yùcè" },
            { option: "C", answer: "reflection", chinese_answer: "反思", chinese_romanization: "fǎnsī" },
            { option: "D", answer: "opinion", chinese_answer: "意见", chinese_romanization: "yìjiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prediction' means a thing predicted; a forecast." +
            "<br><br>" +
            "(A) 'memory' means the faculty by which the mind stores and remembers information." +
            "<br><br>" +
            "(C) 'reflection' means serious thought or consideration." +
            "<br><br>" +
            "(D) 'opinion' means a view or judgment formed about something, not necessarily based on fact or knowledge.",
        chinese_explanation: "(B) '预测' 一词意味着预测的事物；预报。" +
            "<br><br>" +
            "(A) '记忆' 意味着大脑储存和记住信息的能力。" +
            "<br><br>" +
            "(C) '反思' 意味着认真思考或考虑。" +
            "<br><br>" +
            "(D) '意见' 意味着对某事形成的看法或判断，不一定基于事实或知识。"
    },
    {
        id: 3,
        question: "The pianist was a __________, astonishing audiences with her skill and expressiveness at such a young age.",
        chinese_question: "这位钢琴家是一个 __________，以如此年轻的年龄用她的技巧和表现力让观众惊叹。",
        answers: [
            { option: "A", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "B", answer: "virtuoso", chinese_answer: "大师", chinese_romanization: "dàshī" },
            { option: "C", answer: "amateur", chinese_answer: "业余爱好者", chinese_romanization: "yèyú àihào zhě" },
            { option: "D", answer: "beginner", chinese_answer: "初学者", chinese_romanization: "chūxué zhě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'virtuoso' means a person highly skilled in music or another artistic pursuit." +
            "<br><br>" +
            "(A) 'novice' means a person new to and inexperienced in a job or situation." +
            "<br><br>" +
            "(C) 'amateur' means a person who engages in a pursuit, especially a sport, on an unpaid basis." +
            "<br><br>" +
            "(D) 'beginner' means a person just starting to learn a skill or take part in an activity.",
        chinese_explanation: "(B) '大师' 一词意味着在音乐或其他艺术追求中技艺高超的人。" +
            "<br><br>" +
            "(A) '新手' 意味着在工作或情况中是新手和没有经验的人。" +
            "<br><br>" +
            "(C) '业余爱好者' 意味着从事追求，特别是运动，不支付报酬的人。" +
            "<br><br>" +
            "(D) '初学者' 意味着刚开始学习技能或参加活动的人。"
    },
    {
        id: 4,
        question: "The scientist adjusted the __________ to increase the speed of the particle collisions in the experiment.",
        chinese_question: "科学家调整了 __________ 以增加实验中粒子碰撞的速度。",
        answers: [
            { option: "A", answer: "brake", chinese_answer: "刹车", chinese_romanization: "shāchē" },
            { option: "B", answer: "decelerator", chinese_answer: "减速器", chinese_romanization: "jiǎnsù qì" },
            { option: "C", answer: "accelerator", chinese_answer: "加速器", chinese_romanization: "jiāsù qì" },
            { option: "D", answer: "stabilizer", chinese_answer: "稳定器", chinese_romanization: "wěndìng qì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'accelerator' in this context means a device used in scientific experiments to increase the speed of particles, making them collide with each other. Scientists must make particles collide to study their properties and understand fundamental physics." +
            "<br><br>" +
            "(A) 'brake' means a device for slowing or stopping a moving vehicle, typically by applying pressure to the wheels." +
            "<br><br>" +
            "(B) 'decelerator' means a device that reduces speed." +
            "<br><br>" +
            "(D) 'stabilizer' means a device for making something stable or steady.",
        chinese_explanation: "(C) '加速器' 在这个上下文中意味着一种在科学实验中用于增加粒子速度并使其相互碰撞的装置。科学家必须使粒子碰撞以研究它们的特性并理解基本的物理原理。" +
            "<br><br>" +
            "(A) '刹车' 意味着减慢或停止移动车辆的装置，通常通过对车轮施加压力。" +
            "<br><br>" +
            "(B) '减速器' 意味着减少速度的装置。" +
            "<br><br>" +
            "(D) '稳定器' 意味着使某物稳定或稳定的装置。"
    },
    {
        id: 5,
        question: "The phrase 'think outside the box' is considered a __________ because it is overused and lacks originality.",
        chinese_question: "短语“跳出框框思考”被认为是一个 __________，因为它被过度使用，缺乏原创性。",
        answers: [
            { option: "A", answer: "innovation", chinese_answer: "创新", chinese_romanization: "chuàngxīn" },
            { option: "B", answer: "cliche", chinese_answer: "陈词滥调", chinese_romanization: "chéncí làndiào" },
            { option: "C", answer: "novelty", chinese_answer: "新奇", chinese_romanization: "xīnqí" },
            { option: "D", answer: "invention", chinese_answer: "发明", chinese_romanization: "fāmíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'cliche' means a phrase or opinion that is overused and betrays a lack of original thought." +
            "<br><br>" +
            "(A) 'innovation' means a new method, idea, product, etc." +
            "<br><br>" +
            "(C) 'novelty' means the quality of being new, original, or unusual." +
            "<br><br>" +
            "(D) 'invention' means the action of inventing something, typically a process or device.",
        chinese_explanation: "(B) '陈词滥调' 一词意味着被过度使用并表现出缺乏原创思想的短语或观点。" +
            "<br><br>" +
            "(A) '创新' 意味着一种新的方法、想法、产品等。" +
            "<br><br>" +
            "(C) '新奇' 意味着新的、原创的或不寻常的品质。" +
            "<br><br>" +
            "(D) '发明' 意味着发明某物的行为，通常是一个过程或设备。"
    },
    {
        id: 6,
        question: "The annual __________ featured elaborate costumes, stunning performances, and a grand parade through the city center.",
        chinese_question: "一年一度的 __________ 展示了精美的服装、惊艳的表演和贯穿市中心的盛大游行。",
        answers: [
            { option: "A", answer: "pageant", chinese_answer: "盛会", chinese_romanization: "shènghuì" },
            { option: "B", answer: "concert", chinese_answer: "音乐会", chinese_romanization: "yīnyuè huì" },
            { option: "C", answer: "conference", chinese_answer: "会议", chinese_romanization: "huìyì" },
            { option: "D", answer: "exhibition", chinese_answer: "展览", chinese_romanization: "zhǎnlǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'pageant' means a public entertainment consisting of a procession of people in elaborate, colorful costumes, or an outdoor performance of a historical scene." +
            "<br><br>" +
            "(B) 'concert' means a musical performance given in public." +
            "<br><br>" +
            "(C) 'conference' means a formal meeting for discussion." +
            "<br><br>" +
            "(D) 'exhibition' means a public display of works of art or items of interest, held in an art gallery or museum or at a trade fair.",
        chinese_explanation: "(A) '盛会' 一词意味着由穿着精美、色彩斑斓的服装的人的游行或历史场景的户外表演组成的公众娱乐活动。" +
            "<br><br>" +
            "(B) '音乐会' 意味着公开的音乐演出。" +
            "<br><br>" +
            "(C) '会议' 意味着讨论的正式会议。" +
            "<br><br>" +
            "(D) '展览' 意味着在艺术画廊或博物馆或贸易展览会上展示的艺术作品或有趣物品的公众展示。"
    },
    {
        id: 7,
        question: "The __________ of flowers on the dining table added a touch of elegance to the room.",
        chinese_question: "餐桌上的 __________ 花卉为房间增添了一丝优雅。",
        answers: [
            { option: "A", answer: "disorder", chinese_answer: "杂乱", chinese_romanization: "záluàn" },
            { option: "B", answer: "arrangement", chinese_answer: "布置", chinese_romanization: "bùzhì" },
            { option: "C", answer: "chaos", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "D", answer: "mess", chinese_answer: "乱七八糟", chinese_romanization: "luànqībāzāo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'arrangement' means the action, process, or result of arranging or being arranged." +
            "<br><br>" +
            "(A) 'disorder' means a state of confusion." +
            "<br><br>" +
            "(C) 'chaos' means complete disorder and confusion." +
            "<br><br>" +
            "(D) 'mess' means a dirty or untidy state of things or of a place.",
        chinese_explanation: "(B) '布置' 一词意味着安排或被安排的行动、过程或结果。" +
            "<br><br>" +
            "(A) '杂乱' 意味着一种混乱的状态。" +
            "<br><br>" +
            "(C) '混乱' 意味着完全的混乱和困惑。" +
            "<br><br>" +
            "(D) '乱七八糟' 意味着一种肮脏或不整洁的状态。"
    },
    {
        id: 8,
        question: "The walls of the abandoned building were covered in colourful __________, featuring artistic spray-painted images and words.",
        chinese_question: "废弃建筑的墙壁上布满了五颜六色的 __________，展示了艺术性的喷绘图像和文字。",
        answers: [
            { option: "A", answer: "graffiti", chinese_answer: "涂鸦", chinese_romanization: "túyā" },
            { option: "B", answer: "murals", chinese_answer: "壁画", chinese_romanization: "bìhuà" },
            { option: "C", answer: "posters", chinese_answer: "海报", chinese_romanization: "hǎibào" },
            { option: "D", answer: "advertisements", chinese_answer: "广告", chinese_romanization: "guǎnggào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'graffiti' means drawings or writings scribbled on walls or other surfaces in public places." +
            "<br><br>" +
            "(B) 'murals' means large paintings directly on a wall." +
            "<br><br>" +
            "(C) 'posters' means large printed pictures or notices." +
            "<br><br>" +
            "(D) 'advertisements' means public notices promoting products or services.",
        chinese_explanation: "(A) '涂鸦' 意味着在公共场所的墙壁或其他表面上乱涂乱写的画或字。" +
            "<br><br>" +
            "(B) '壁画' 意味着直接在墙上绘制的大型画作。" +
            "<br><br>" +
            "(C) '海报' 意味着大型印刷图片或通知。" +
            "<br><br>" +
            "(D) '广告' 意味着宣传产品或服务的公共通知。"
    },
    {
        id: 9,
        question: "They had a heated __________ about the best way to solve the problem, each person raising their voice to make their point.",
        chinese_question: "他们就解决问题的最佳方法进行了激烈的 __________，每个人都提高嗓门表达自己的观点。",
        answers: [
            { option: "A", answer: "argument", chinese_answer: "争论", chinese_romanization: "zhēnglùn" },
            { option: "B", answer: "agreement", chinese_answer: "一致", chinese_romanization: "yīzhì" },
            { option: "C", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" },
            { option: "D", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'argument' means an exchange of diverging or opposite views, typically a heated or angry one." +
            "<br><br>" +
            "(B) 'agreement' means harmony or accordance in opinion or feeling." +
            "<br><br>" +
            "(C) 'silence' means complete absence of sound." +
            "<br><br>" +
            "(D) 'harmony' means the combination of simultaneously sounded musical notes to produce a pleasing effect.",
        chinese_explanation: "(A) '争论' 意味着不同或相反观点的交流，通常是激烈或愤怒的。" +
            "<br><br>" +
            "(B) '一致' 意味着意见或感情上的和谐或一致。" +
            "<br><br>" +
            "(C) '沉默' 意味着完全没有声音。" +
            "<br><br>" +
            "(D) '和谐' 意味着同时发出的音符的结合，产生令人愉悦的效果。"
    },
    {
        id: 10,
        question: "The novel was captivating, and she read it in its __________ in one sitting.",
        chinese_question: "小说引人入胜，她一口气读完了__________。",
        answers: [
            { option: "A", answer: "part", chinese_answer: "部分", chinese_romanization: "bùfen" },
            { option: "B", answer: "section", chinese_answer: "部门", chinese_romanization: "bùmén" },
            { option: "C", answer: "entirety", chinese_answer: "全部", chinese_romanization: "quánbù" },
            { option: "D", answer: "portion", chinese_answer: "份", chinese_romanization: "fèn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'entirety' means the whole of something." +
            "<br><br>" +
            "(A) 'part' means a piece or segment of something." +
            "<br><br>" +
            "(B) 'section' means a distinct part or subdivision of something." +
            "<br><br>" +
            "(D) 'portion' means a part of a whole.",
        chinese_explanation: "(C) '全部' 一词意味着某物的整体。" +
            "<br><br>" +
            "(A) '部分' 意味着某物的一部分或片段。" +
            "<br><br>" +
            "(B) '部门' 意味着某物的一个不同部分或分区。" +
            "<br><br>" +
            "(D) '份' 意味着一个整体的一部分。"
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
