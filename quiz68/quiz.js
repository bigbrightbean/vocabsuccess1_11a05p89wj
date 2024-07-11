// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Running a marathon requires a lot of __________ and determination.",
        chinese_question: "跑马拉松需要大量的__________和决心。",
        answers: [
            { option: "A", answer: "weakness", chinese_answer: "虚弱", chinese_romanization: "xūruò" },
            { option: "B", answer: "stamina", chinese_answer: "耐力", chinese_romanization: "nàilì" },
            { option: "C", answer: "impatience", chinese_answer: "不耐烦", chinese_romanization: "bùnàifán" },
            { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'stamina' means the ability to sustain prolonged physical or mental effort." +
            "<br><br>" +
            "(A) 'weakness' means the state or condition of lacking strength." +
            "<br><br>" +
            "(C) 'impatience' means having or showing a tendency to be quickly irritated or provoked." +
            "<br><br>" +
            "(D) 'hesitation' means the action of pausing or hesitating before saying or doing something.",
        chinese_explanation: "(B) '耐力'一词意味着能够持续长时间的身体或精神努力。" +
            "<br><br>" +
            "(A) '虚弱' 意味着缺乏力量的状态或条件。" +
            "<br><br>" +
            "(C) '不耐烦' 意味着有或表现出容易被激怒或激起的倾向。" +
            "<br><br>" +
            "(D) '犹豫' 意味着在说或做某事之前的暂停或犹豫的动作。"
    },
    {
        id: 2,
        question: "The advanced __________, with its wings and state-of-the-art navigation systems, is designed to carry out both civilian and military missions with high efficiency.",
        chinese_question: "这种先进的 __________，凭借其机翼和最先进的导航系统，被设计为能够高效地执行民用和军事任务。",
        answers: [
            { option: "A", answer: "car", chinese_answer: "汽车", chinese_romanization: "qìchē" },
            { option: "B", answer: "boat", chinese_answer: "船", chinese_romanization: "chuán" },
            { option: "C", answer: "aircraft", chinese_answer: "飞机", chinese_romanization: "fēijī" },
            { option: "D", answer: "train", chinese_answer: "火车", chinese_romanization: "huǒchē" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'aircraft' means any machine that can fly, such as an airplane or helicopter." +
            "<br><br>" +
            "(A) 'car' means a road vehicle, typically with four wheels, powered by an internal combustion engine or electric motor." +
            "<br><br>" +
            "(B) 'boat' means a small vessel propelled on water by oars, sails, or an engine." +
            "<br><br>" +
            "(D) 'train' means a series of connected vehicles that travel on tracks and are used as a mode of transport.",
        chinese_explanation: "(C) '飞机' 一词意味着任何可以飞行的机器，如飞机或直升机。" +
            "<br><br>" +
            "(A) '汽车' 意味着一种通常有四个轮子的道路车辆，由内燃机或电动机提供动力。" +
            "<br><br>" +
            "(B) '船' 意味着一种由桨、帆或发动机推动的水上小型船只。" +
            "<br><br>" +
            "(D) '火车' 意味着一系列连接的车辆在轨道上行驶，并作为一种运输方式使用。"
    },
    {
        id: 3,
        question: "Her New Year's __________ to exercise more regularly lasted only a few weeks before she reverted to her old habits.",
        chinese_question: "她的新年 __________ 是更加规律地锻炼，但只持续了几周，她就恢复了旧习惯。",
        answers: [
            { option: "A", answer: "resolution", chinese_answer: "决心", chinese_romanization: "juéxīn" },
            { option: "B", answer: "indecision", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "C", answer: "uncertainty", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" },
            { option: "D", answer: "hesitation", chinese_answer: "迟疑", chinese_romanization: "chíyí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'resolution' means a firm decision to do or not to do something." +
            "<br><br>" +
            "(B) 'indecision' means the inability to make a decision quickly." +
            "<br><br>" +
            "(C) 'uncertainty' means the state of being uncertain." +
            "<br><br>" +
            "(D) 'hesitation' means the action of pausing or hesitating before saying or doing something.",
        chinese_explanation: "(A) '决心' 一词意味着做某事或不做某事的坚定决定。" +
            "<br><br>" +
            "(B) '犹豫' 意味着无法快速做出决定。" +
            "<br><br>" +
            "(C) '不确定' 意味着不确定的状态。" +
            "<br><br>" +
            "(D) '迟疑' 意味着在说或做某事之前暂停或犹豫的动作。"
    },
    {
        id: 4,
        question: "It was a __________ that the more he studied, the less he seemed to understand the subject.",
        chinese_question: "这是一个 __________，他学习得越多，似乎对这个主题理解得越少。",
        answers: [
            { option: "A", answer: "solution", chinese_answer: "解决方法", chinese_romanization: "jiějué fāngfǎ" },
            { option: "B", answer: "paradox", chinese_answer: "悖论", chinese_romanization: "bèilùn" },
            { option: "C", answer: "fact", chinese_answer: "事实", chinese_romanization: "shìshí" },
            { option: "D", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìngxìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'paradox' means a seemingly absurd or contradictory statement or proposition which when investigated may prove to be well founded or true." +
            "<br><br>" +
            "(A) 'solution' means a means of solving a problem or dealing with a difficult situation." +
            "<br><br>" +
            "(C) 'fact' means a thing that is known or proved to be true." +
            "<br><br>" +
            "(D) 'certainty' means firm conviction that something is the case.",
        chinese_explanation: "(B) '悖论' 意味着一个看似荒谬或自相矛盾的陈述或命题，经过调查可能被证明是有根据的或真实的。" +
            "<br><br>" +
            "(A) '解决方法' 意味着解决问题或处理困难情况的方法。" +
            "<br><br>" +
            "(C) '事实' 意味着已知或被证明为真的事情。" +
            "<br><br>" +
            "(D) '确定性' 意味着坚定地相信某事是真实的。"
    },
    {
        id: 5,
        question: "The royal __________ was beautifully decorated with luxurious furnishings and intricate tapestries, making it a grand and majestic room.",
        chinese_question: "皇家 __________ 装饰华丽，摆放着豪华的家具和复杂的挂毯，使其成为一个宏伟壮丽的房间。",
        answers: [
            { option: "A", answer: "closet", chinese_answer: "壁橱", chinese_romanization: "bìchú" },
            { option: "B", answer: "hallway", chinese_answer: "走廊", chinese_romanization: "zǒuláng" },
            { option: "C", answer: "kitchen", chinese_answer: "厨房", chinese_romanization: "chúfáng" },
            { option: "D", answer: "chamber", chinese_answer: "房间", chinese_romanization: "fángjiān" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'chamber' means a large room used for formal or public events." +
            "<br><br>" +
            "(A) 'closet' means a tall cupboard or wardrobe with a door, used for storage." +
            "<br><br>" +
            "(B) 'hallway' means a corridor or passage in a building." +
            "<br><br>" +
            "(C) 'kitchen' means a room or area where food is prepared and cooked.",
        chinese_explanation: "(D) '房间' 一词意味着用于正式或公共活动的大房间。" +
            "<br><br>" +
            "(A) '壁橱' 意味着有门的高橱柜或衣柜，用于存储。" +
            "<br><br>" +
            "(B) '走廊' 意味着建筑物中的走廊或通道。" +
            "<br><br>" +
            "(C) '厨房' 意味着准备和烹饪食物的房间或区域。"
    },
    {
        id: 6,
        question: "The heavy traffic was a __________ to their progress, causing them to be late.",
        chinese_question: "繁忙的交通是他们前进的 __________，导致他们迟到。",
        answers: [
            { option: "A", answer: "aid", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "B", answer: "hindrance", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "C", answer: "benefit", chinese_answer: "利益", chinese_romanization: "lìyì" },
            { option: "D", answer: "advantage", chinese_answer: "优势", chinese_romanization: "yōushì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hindrance' means a thing that provides resistance, delay, or obstruction to something or someone." +
            "<br><br>" +
            "(A) 'aid' means help, typically of a practical nature." +
            "<br><br>" +
            "(C) 'benefit' means an advantage or profit gained from something." +
            "<br><br>" +
            "(D) 'advantage' means a condition or circumstance that puts one in a favorable or superior position.",
        chinese_explanation: "(B) '阻碍' 意味着为某事或某人提供抵抗、延误或阻碍的事物。" +
            "<br><br>" +
            "(A) '帮助' 意味着通常是实际性质的帮助。" +
            "<br><br>" +
            "(C) '利益' 意味着从某事中获得的优势或利润。" +
            "<br><br>" +
            "(D) '优势' 意味着使一个人处于有利或优越位置的条件或情况。"
    },
    {
        id: 7,
        question: "The __________ won several awards for her compelling portrayal of a complex character in the drama series.",
        chinese_question: "这位 __________ 因在电视剧中对复杂角色的引人注目的描绘而获得了多个奖项。",
        answers: [
            { option: "A", answer: "director", chinese_answer: "导演", chinese_romanization: "dǎoyǎn" },
            { option: "B", answer: "writer", chinese_answer: "作家", chinese_romanization: "zuòjiā" },
            { option: "C", answer: "actress", chinese_answer: "女演员", chinese_romanization: "nǚ yǎnyuán" },
            { option: "D", answer: "producer", chinese_answer: "制片人", chinese_romanization: "zhìpiàn rén" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'actress' means a female actor." +
            "<br><br>" +
            "(A) 'director' means a person who is in charge of an activity, department, or organization." +
            "<br><br>" +
            "(B) 'writer' means a person who has written a particular text." +
            "<br><br>" +
            "(D) 'producer' means a person responsible for the financial and managerial aspects of making of a movie or broadcast or for staging a play, opera, etc.",
        chinese_explanation: "(C) '女演员' 一词意味着女性演员。" +
            "<br><br>" +
            "(A) '导演' 意味着负责活动、部门或组织的人。" +
            "<br><br>" +
            "(B) '作家' 意味着写了一篇特定文本的人。" +
            "<br><br>" +
            "(D) '制片人' 意味着负责电影制作或广播的财务和管理方面或舞台剧、歌剧等的人。"
    },
    {
        id: 8,
        question: "The __________ of the lemon juice made it perfect for adding a tangy flavor to the salad dressing.",
        chinese_question: "柠檬汁的 __________ 使其非常适合为沙拉酱增添酸味。",
        answers: [
            { option: "A", answer: "acidity", chinese_answer: "酸味", chinese_romanization: "suān wèi" },
            { option: "B", answer: "sweetness", chinese_answer: "甜味", chinese_romanization: "tián wèi" },
            { option: "C", answer: "bitterness", chinese_answer: "苦味", chinese_romanization: "kǔ wèi" },
            { option: "D", answer: "blandness", chinese_answer: "平淡", chinese_romanization: "píngdàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'acidity' means the level of acid in substances such as water, soil, or wine." +
            "<br><br>" +
            "(B) 'sweetness' means the quality of having a pleasant taste characteristic of sugar or honey; not salty, sour, or bitter." +
            "<br><br>" +
            "(C) 'bitterness' means sharpness of taste; lack of sweetness." +
            "<br><br>" +
            "(D) 'blandness' means lack of strong features or characteristics and therefore uninteresting.",
        chinese_explanation: "(A) '酸味' 一词意味着水、土壤或葡萄酒等物质中的酸含量。" +
            "<br><br>" +
            "(B) '甜味' 意味着具有糖或蜂蜜的令人愉悦的味道特征的质量；不咸、酸或苦。" +
            "<br><br>" +
            "(C) '苦味' 意味着味道的辛辣；缺乏甜味。" +
            "<br><br>" +
            "(D) '平淡' 意味着缺乏强烈的特征或特点，因此缺乏趣味。"
    },
    {
        id: 9,
        question: "He struggled with severe __________ during his teenage years, which affected his self-esteem due to the prominent red pimples on his face.",
        chinese_question: "他在青少年时期与严重的 __________ 作斗争，由于脸上突出的红色丘疹，影响了他的自尊心。",
        answers: [
            { option: "A", answer: "eczema", chinese_answer: "湿疹", chinese_romanization: "shīzhěn" },
            { option: "B", answer: "acne", chinese_answer: "痤疮", chinese_romanization: "cuóchuāng" },
            { option: "C", answer: "psoriasis", chinese_answer: "牛皮癣", chinese_romanization: "niú píxuǎn" },
            { option: "D", answer: "dermatitis", chinese_answer: "皮炎", chinese_romanization: "pí yán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'acne' means a skin condition characterized by red pimples on the skin, especially on the face, due to inflamed or infected sebaceous glands." +
            "<br><br>" +
            "(A) 'eczema' means a medical condition in which patches of skin become rough and inflamed, with blisters that cause itching and bleeding." +
            "<br><br>" +
            "(C) 'psoriasis' means a skin disease marked by red, itchy, scaly patches." +
            "<br><br>" +
            "(D) 'dermatitis' means a condition of the skin in which it becomes red, swollen, and sore, sometimes with small blisters, resulting from direct irritation by an external agent or an allergic reaction to it.",
        chinese_explanation: "(B) '痤疮' 一词意味着皮肤状况，尤其是面部，由于皮脂腺发炎或感染而导致皮肤上出现红色丘疹。" +
            "<br><br>" +
            "(A) '湿疹' 意味着一种医学状况，皮肤斑块变得粗糙和发炎，伴有引起瘙痒和出血的水泡。" +
            "<br><br>" +
            "(C) '牛皮癣' 意味着以红色、瘙痒、鳞片状斑块为特征的皮肤病。" +
            "<br><br>" +
            "(D) '皮炎' 意味着皮肤变红、肿胀和疼痛，有时伴有小水泡，由于外部因素直接刺激或对其过敏反应引起。"
    },
    {
        id: 10,
        question: "Consumption of __________ is strictly prohibited for minors under the age of 21 in many countries.",
        chinese_question: "在许多国家，未满21岁的未成年人严禁饮用 __________。",
        answers: [
            { option: "A", answer: "milk", chinese_answer: "牛奶", chinese_romanization: "niúnǎi" },
            { option: "B", answer: "water", chinese_answer: "水", chinese_romanization: "shuǐ" },
            { option: "C", answer: "alcohol", chinese_answer: "酒精", chinese_romanization: "jiǔjīng" },
            { option: "D", answer: "juice", chinese_answer: "果汁", chinese_romanization: "guǒzhī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'alcohol' means a colorless volatile flammable liquid that is the intoxicating constituent of wine, beer, spirits, and other drinks, and is also used as an industrial solvent and as fuel." +
            "<br><br>" +
            "(A) 'milk' means a white liquid produced by the mammary glands of mammals." +
            "<br><br>" +
            "(B) 'water' means a transparent, odorless, tasteless liquid." +
            "<br><br>" +
            "(D) 'juice' means the liquid obtained from or present in fruit or vegetables.",
        chinese_explanation: "(C) '酒精' 一词意味着一种无色挥发性易燃液体，是葡萄酒、啤酒、烈酒和其他饮料中的醉人成分，也用作工业溶剂和燃料。" +
            "<br><br>" +
            "(A) '牛奶' 意味着哺乳动物乳腺产生的一种白色液体。" +
            "<br><br>" +
            "(B) '水' 意味着一种透明、无味、无嗅的液体。" +
            "<br><br>" +
            "(D) '果汁' 意味着从水果或蔬菜中获得或存在的液体。"
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
