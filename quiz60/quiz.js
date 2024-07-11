// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "As she looked through old photographs, a wave of __________ washed over her, bringing back memories of her youth.",
        chinese_question: "当她翻阅旧照片时，一股 __________ 涌上心头，带回了她年轻时的记忆。",
        answers: [
            { option: "A", answer: "anticipation", chinese_answer: "期望", chinese_romanization: "qīwàng" },
            { option: "B", answer: "detachment", chinese_answer: "超脱", chinese_romanization: "chāotuō" },
            { option: "C", answer: "nostalgia", chinese_answer: "怀旧之情", chinese_romanization: "huáijiù zhī qíng" },
            { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nostalgia' means a sentimental longing or wistful affection for the past, typically for a period or place with happy personal associations." +
            "<br><br>" +
            "(A) 'anticipation' means the action of anticipating something; expectation or prediction." +
            "<br><br>" +
            "(B) 'detachment' means a state of being objective or aloof." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(C) '怀旧之情' 意味着对过去的怀念或怀旧，通常是对有愉快个人联系的时期或地方。" +
            "<br><br>" +
            "(A) '期望' 意味着对某事的预期；预期或预测。" +
            "<br><br>" +
            "(B) '超脱' 意味着客观或超然的状态。" +
            "<br><br>" +
            "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 2,
        question: "Her __________ in pursuing her goals despite numerous challenges and rejections is truly admirable.",
        chinese_question: "她在面对许多挑战和拒绝时仍然坚持不懈地追求目标，令人钦佩。",
        answers: [
            { option: "A", answer: "wavering", chinese_answer: "动摇", chinese_romanization: "dòngyáo" },
            { option: "B", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "C", answer: "inconsistency", chinese_answer: "不一致", chinese_romanization: "bù yīzhì" },
            { option: "D", answer: "persistence", chinese_answer: "坚持", chinese_romanization: "jiānchí" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'persistence' means firm or obstinate continuance in a course of action in spite of difficulty or opposition." +
            "<br><br>" +
            "(A) 'wavering' means shaking with a quivering motion." +
            "<br><br>" +
            "(B) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
            "<br><br>" +
            "(C) 'inconsistency' means the fact or state of being inconsistent.",
        chinese_explanation: "(D) '坚持' 意味着尽管有困难或反对，仍然坚定或顽强地继续行动。" +
            "<br><br>" +
            "(A) '动摇' 意味着以颤抖的动作摇晃。" +
            "<br><br>" +
            "(B) '犹豫' 意味着在说话或做事前暂停或犹豫的行为。" +
            "<br><br>" +
            "(C) '不一致' 意味着不一致的事实或状态。"
    },
    {
        id: 3,
        question: "The famous author used a __________, such as 'George Eliot' instead of her real name, to protect her privacy and write without public scrutiny.",
        chinese_question: "这位著名的作家使用 __________，例如用 '乔治·艾略特' 而不是她的真名，来保护她的隐私，并在没有公众监督的情况下写作。",
        answers: [
            { option: "A", answer: "identity", chinese_answer: "身份", chinese_romanization: "shēnfèn" },
            { option: "B", answer: "nickname", chinese_answer: "昵称", chinese_romanization: "nìchēng" },
            { option: "C", answer: "pseudonym", chinese_answer: "假名", chinese_romanization: "jiǎ míng" },
            { option: "D", answer: "title", chinese_answer: "书名", chinese_romanization: "shūmíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pseudonym' means a fictitious name, especially one used by an author." +
            "<br><br>" +
            "(A) 'identity' means the fact of being who or what a person or thing is." +
            "<br><br>" +
            "(B) 'nickname' means a familiar or humorous name given to a person or thing instead of or as well as the real name." +
            "<br><br>" +
            "(D) 'title' means the name of a book, composition, or other artistic work.",
        chinese_explanation: "(C) '假名' 一词意味着虚构的名字，特别是作者使用的名字。" +
            "<br><br>" +
            "(A) '身份' 意味着某人或某物的身份。" +
            "<br><br>" +
            "(B) '昵称' 意味着给某人或某物的熟悉或幽默的名字，作为真实名字的替代或补充。" +
            "<br><br>" +
            "(D) '书名' 意味着书籍、作品或其他艺术作品的名字。"
    },
    {
        id: 4,
        question: "The scientist developed a new __________ for the medication, ensuring it was more effective and easier to administer.",
        chinese_question: "科学家开发了一种新的药物 __________，确保它更有效且更易于服用。",
        answers: [
            { option: "A", answer: "formula", chinese_answer: "配方", chinese_romanization: "pèifāng" },
            { option: "B", answer: "assumption", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
            { option: "C", answer: "theory", chinese_answer: "理论", chinese_romanization: "lǐlùn" },
            { option: "D", answer: "principle", chinese_answer: "原则", chinese_romanization: "yuánzé" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'formula' means a set form of words for use in a ceremony or ritual." +
            "<br><br>" +
            "(B) 'assumption' means a thing that is accepted as true or as certain to happen, without proof." +
            "<br><br>" +
            "(C) 'theory' means a supposition or a system of ideas intended to explain something." +
            "<br><br>" +
            "(D) 'principle' means a fundamental truth or proposition that serves as the foundation for a system of belief or behavior or for a chain of reasoning.",
        chinese_explanation: "(A) '配方' 一词意味着用于仪式或仪式的一套词语。" +
            "<br><br>" +
            "(B) '假设' 意味着没有证据接受的事物或认为必然发生的事物。" +
            "<br><br>" +
            "(C) '理论' 意味着试图解释某事的一种假设或一套想法。" +
            "<br><br>" +
            "(D) '原则' 意味着作为信仰或行为体系或推理链的基础的基本真理或命题。"
    },
    {
        id: 5,
        question: "As the manager, she had the __________ to make decisions on behalf of the company.",
        chinese_question: "作为经理，她有权代表公司做出决定。",
        answers: [
            { option: "A", answer: "authority", chinese_answer: "权力", chinese_romanization: "quánlì" },
            { option: "B", answer: "suggestion", chinese_answer: "建议", chinese_romanization: "jiànyì" },
            { option: "C", answer: "advice", chinese_answer: "忠告", chinese_romanization: "zhōnggào" },
            { option: "D", answer: "recommendation", chinese_answer: "推荐", chinese_romanization: "tuījiàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'authority' means the power or right to give orders, make decisions, and enforce obedience." +
            "<br><br>" +
            "(B) 'suggestion' means an idea or plan put forward for consideration." +
            "<br><br>" +
            "(C) 'advice' means guidance or recommendations offered with regard to prudent future action." +
            "<br><br>" +
            "(D) 'recommendation' means a suggestion or proposal as to the best course of action, especially one put forward by an authoritative body.",
        chinese_explanation: "(A) '权力' 一词意味着有权或有权发布命令、做出决定和执行服从。" +
            "<br><br>" +
            "(B) '建议' 意味着提出供考虑的想法或计划。" +
            "<br><br>" +
            "(C) '忠告' 意味着就谨慎的未来行动提供的指导或建议。" +
            "<br><br>" +
            "(D) '推荐' 意味着作为最佳行动方案的建议或提议，尤其是由权威机构提出的。"
    },
    {
        id: 6,
        question: "The __________ of the small village were known for their hospitality and kindness to visitors.",
        chinese_question: "这个小村庄的 __________ 以对游客的热情好客和友善而闻名。",
        answers: [
            { option: "A", answer: "tourists", chinese_answer: "游客", chinese_romanization: "yóukè" },
            { option: "B", answer: "inhabitants", chinese_answer: "居民", chinese_romanization: "jūmín" },
            { option: "C", answer: "strangers", chinese_answer: "陌生人", chinese_romanization: "mòshēng rén" },
            { option: "D", answer: "travelers", chinese_answer: "旅行者", chinese_romanization: "lǚxíng zhě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inhabitants' means the people or animals that live in a particular place." +
            "<br><br>" +
            "(A) 'tourists' means people who are traveling or visiting a place for pleasure." +
            "<br><br>" +
            "(C) 'strangers' means people whom one does not know or with whom one is not familiar." +
            "<br><br>" +
            "(D) 'travelers' means people who are traveling or who often travel.",
        chinese_explanation: "(B) '居民' 一词意味着生活在特定地方的人或动物。" +
            "<br><br>" +
            "(A) '游客' 意味着出于娱乐目的而旅行或参观某地的人。" +
            "<br><br>" +
            "(C) '陌生人' 意味着一个人不认识或不熟悉的人。" +
            "<br><br>" +
            "(D) '旅行者' 意味着正在旅行或经常旅行的人。"
    },
    {
        id: 7,
        question: "The decaying food in the refrigerator emitted __________ that spread throughout the kitchen, causing a terrible stench.",
        chinese_question: "冰箱里腐烂的食物散发出 __________，弥漫在整个厨房，产生了可怕的恶臭。",
        answers: [
            { option: "A", answer: "fragrance", chinese_answer: "香味", chinese_romanization: "xiāngwèi" },
            { option: "B", answer: "freshness", chinese_answer: "清新", chinese_romanization: "qīngxīn" },
            { option: "C", answer: "cleanliness", chinese_answer: "清洁", chinese_romanization: "qīngjié" },
            { option: "D", answer: "effluvia", chinese_answer: "恶臭", chinese_romanization: "èchòu" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'effluvia' means unpleasant or harmful odors, secretions, or discharges." +
            "<br><br>" +
            "(A) 'fragrance' means a pleasant, sweet smell." +
            "<br><br>" +
            "(B) 'freshness' means the state of being new, lively, and exciting." +
            "<br><br>" +
            "(C) 'cleanliness' means the state of being free from dirt, infection, or disease.",
        chinese_explanation: "(D) '恶臭' 意思是令人不快或有害的气味、分泌物或排放物。" +
            "<br><br>" +
            "(A) '香味' 意思是令人愉快的甜美气味。" +
            "<br><br>" +
            "(B) '清新' 意思是新的、生动和令人兴奋的状态。" +
            "<br><br>" +
            "(C) '清洁' 意思是没有污垢、感染或疾病的状态。"
    },
    {
        id: 8,
        question: "Her elegant __________ on the invitation impressed everyone, showcasing her artistic talent with each graceful stroke.",
        chinese_question: "她在请柬上的优雅 __________ 给每个人留下了深刻印象，每一笔都展示了她的艺术才华。",
        answers: [
            { option: "A", answer: "calligraphy", chinese_answer: "书法", chinese_romanization: "shūfǎ" },
            { option: "B", answer: "printing", chinese_answer: "印刷", chinese_romanization: "yìnshuā" },
            { option: "C", answer: "typing", chinese_answer: "打字", chinese_romanization: "dǎzì" },
            { option: "D", answer: "doodling", chinese_answer: "涂鸦", chinese_romanization: "túyā" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'calligraphy' means decorative handwriting or handwritten lettering." +
            "<br><br>" +
            "(B) 'printing' means the production of books, newspapers, or other printed material." +
            "<br><br>" +
            "(C) 'typing' means writing (something) on a typewriter or computer by pressing the keys." +
            "<br><br>" +
            "(D) 'doodling' means scribble or draw aimlessly.",
        chinese_explanation: "(A) '书法' 一词意味着装饰性的手写或手写字母。" +
            "<br><br>" +
            "(B) '印刷' 意味着书籍、报纸或其他印刷材料的生产。" +
            "<br><br>" +
            "(C) '打字' 意味着通过按键在打字机或计算机上书写（某物）。" +
            "<br><br>" +
            "(D) '涂鸦' 意味着漫无目的地涂写或画画。"
    },
    {
        id: 9,
        question: "In high school, she belonged to a small __________ of friends who shared the same interests, always hanging out together and excluding others.",
        chinese_question: "在高中，她属于一个总是一起出去玩并排斥其他人的小团体的朋友，分享相同的兴趣__________。",
        answers: [
            { option: "A", answer: "crowd", chinese_answer: "人群", chinese_romanization: "rénqún" },
            { option: "B", answer: "clique", chinese_answer: "小团体", chinese_romanization: "xiǎo tuántǐ" },
            { option: "C", answer: "group", chinese_answer: "组", chinese_romanization: "zǔ" },
            { option: "D", answer: "class", chinese_answer: "班级", chinese_romanization: "bānjí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'clique' means a small group of people, with shared interests or other features in common, who spend time together and do not readily allow others to join them." +
            "<br><br>" +
            "(A) 'crowd' means a large number of people gathered together, typically in a disorganized or unruly way." +
            "<br><br>" +
            "(C) 'group' means a number of people or things that are located, gathered, or classed together." +
            "<br><br>" +
            "(D) 'class' means a set or category of things having some property or attribute in common and differentiated from others by kind, type, or quality.",
        chinese_explanation: "(B) '小团体' 一词意味着一小群人，有共同的兴趣或其他共同点，他们在一起度过时间，不轻易允许其他人加入他们。" +
            "<br><br>" +
            "(A) '人群' 意味着大量人群，通常是无组织或不守规矩的聚集。" +
            "<br><br>" +
            "(C) '组' 意味着位置、聚集或归类在一起的一群人或物。" +
            "<br><br>" +
            "(D) '班级' 意味着具有某种共同属性或特征的一组或类别，并根据种类、类型或质量与其他类别区分开。"
    },
    {
        id: 10,
        question: "Her smile lit up the room like a __________ with its radiant glow and cascading crystals, brightening everyone's mood.",
        chinese_question: "她的微笑像 __________ 一样，以其光芒四射和层叠的水晶点亮了整个房间，照亮了每个人的心情。",
        answers: [
            { option: "A", answer: "candle", chinese_answer: "蜡烛", chinese_romanization: "làzhú" },
            { option: "B", answer: "torch", chinese_answer: "火炬", chinese_romanization: "huǒjù" },
            { option: "C", answer: "bulb", chinese_answer: "灯泡", chinese_romanization: "dēngpào" },
            { option: "D", answer: "chandelier", chinese_answer: "吊灯", chinese_romanization: "diàodēng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'chandelier' literally means a large, decorative hanging light with branches for several light bulbs or candles. Figuratively, it means something that provides a grand or impressive light." +
            "<br><br>" +
            "(A) 'candle' means a cylinder or block of wax or tallow with a central wick that is lit to produce light as it burns." +
            "<br><br>" +
            "(B) 'torch' means a portable battery-powered electric lamp." +
            "<br><br>" +
            "(C) 'bulb' means a rounded underground storage organ present in some plants, notably those of the lily family.",
        chinese_explanation: "(D) '吊灯' 从字面上意思是带有几个灯泡或蜡烛分支的大型装饰性悬挂灯。比喻意义上意味着提供宏大或壮丽光芒的东西。" +
            "<br><br>" +
            "(A) '蜡烛' 意味着一种蜡或脂肪制成的圆柱或块状物，中央有灯芯，点燃后燃烧发光。" +
            "<br><br>" +
            "(B) '火炬' 意味着一种便携的电池供电的电灯。" +
            "<br><br>" +
            "(C) '灯泡' 意味着某些植物中存在的一种圆形地下储存器官，尤指百合科植物。"
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
