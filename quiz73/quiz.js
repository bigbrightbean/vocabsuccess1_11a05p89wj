// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She dreamed of making a positive impact on her __________ by becoming a leader and influencing national policies.",
        chinese_question: "她梦想通过成为领导者并影响国家政策，对她的__________产生积极的影响。",
        answers: [
            { option: "A", answer: "city", chinese_answer: "城市", chinese_romanization: "chéngshì" },
            { option: "B", answer: "region", chinese_answer: "地区", chinese_romanization: "dìqū" },
            { option: "C", answer: "nation", chinese_answer: "国家", chinese_romanization: "guójiā" },
            { option: "D", answer: "village", chinese_answer: "村庄", chinese_romanization: "cūnzhuāng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nation' means a large aggregate of people united by common descent, history, culture, or language, inhabiting a particular country or territory. Figuratively, it can mean the collective people of a country." +
            "<br><br>" +
            "(A) 'city' means a large town." +
            "<br><br>" +
            "(B) 'region' means an area, especially part of a country or the world having definable characteristics but not always fixed boundaries." +
            "<br><br>" +
            "(D) 'village' means a group of houses and associated buildings, larger than a hamlet and smaller than a town, situated in a rural area.",
        chinese_explanation: "(C) '国家' 一词意味着由共同血统、历史、文化或语言统一的大量人群，居住在特定的国家或领土。比喻地，它可以表示一个国家的全体人民。" +
            "<br><br>" +
            "(A) '城市' 意味着一个大城镇。" +
            "<br><br>" +
            "(B) '地区' 意味着一个区域，特别是具有可定义特征但边界不总是固定的国家或世界的一部分。" +
            "<br><br>" +
            "(D) '村庄' 意味着一个大于村落且小于城镇的房屋和相关建筑群，位于农村地区。"
    },
    {
        id: 2,
        question: "He followed his mentor's __________, carefully considering each piece of guidance, and made significant progress in his career.",
        chinese_question: "他听从导师的 __________，仔细考虑每一条指导意见，在事业上取得了显著进步。",
        answers: [
            { option: "A", answer: "advice", chinese_answer: "建议", chinese_romanization: "jiànyì" },
            { option: "B", answer: "warning", chinese_answer: "警告", chinese_romanization: "jǐnggào" },
            { option: "C", answer: "criticism", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "D", answer: "misguidance", chinese_answer: "误导", chinese_romanization: "wùdǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'advice' means guidance or recommendations offered with regard to prudent future action." +
            "<br><br>" +
            "(B) 'warning' means a statement or event that indicates a possible or impending danger, problem, or other unpleasant situation." +
            "<br><br>" +
            "(C) 'criticism' means the expression of disapproval of someone or something based on perceived faults or mistakes." +
            "<br><br>" +
            "(D) 'misguidance' means providing incorrect or misleading advice or direction.",
        chinese_explanation: "(A) '建议' 意味着就谨慎的未来行动提供的指导或建议。" +
            "<br><br>" +
            "(B) '警告' 意味着表明可能或即将发生的危险、问题或其他不愉快情况的声明或事件。" +
            "<br><br>" +
            "(C) '批评' 意味着基于所感知的错误或错误对某人或某物的反对意见。" +
            "<br><br>" +
            "(D) '误导' 意味着提供不正确或误导的建议或指导。"
    },
    {
        id: 3,
        question: "A single __________, such as a courageous act or a groundbreaking discovery, can change the course of history.",
        chinese_question: "一个 __________，例如一个勇敢的行为或一个突破性的发现，可以改变历史的进程。",
        answers: [
            { option: "A", answer: "dream", chinese_answer: "梦想", chinese_romanization: "mèngxiǎng" },
            { option: "B", answer: "deed", chinese_answer: "行动", chinese_romanization: "xíngdòng" },
            { option: "C", answer: "wish", chinese_answer: "愿望", chinese_romanization: "yuànwàng" },
            { option: "D", answer: "hope", chinese_answer: "希望", chinese_romanization: "xīwàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'deed' metaphorically means a significant or notable action." + 
            "<br><br>" + 
            "(A) 'dream' means a series of thoughts, images, and sensations occurring in a person's mind during sleep." + 
            "<br><br>" + 
            "(C) 'wish' means a desire or hope for something to happen." + 
            "<br><br>" + 
            "(D) 'hope' means a feeling of expectation and desire for a certain thing to happen.",
        chinese_explanation: "(B) '行动' 比喻重大或显著的行为。" + 
            "<br><br>" + 
            "(A) '梦想' 意味着人在睡眠中产生的一系列想法、图像和感觉。" + 
            "<br><br>" + 
            "(C) '愿望' 意味着对某事发生的愿望或希望。" + 
            "<br><br>" + 
            "(D) '希望' 意味着对某事发生的期望和愿望。"
    },
    {
        id: 4,
        question: "Her positive __________ helped her overcome many challenges in life.",
        chinese_question: "她积极的__________帮助她克服了生活中的许多挑战。",
        answers: [
            { option: "A", answer: "attitude", chinese_answer: "态度", chinese_romanization: "tàidu" },
            { option: "B", answer: "problem", chinese_answer: "问题", chinese_romanization: "wèntí" },
            { option: "C", answer: "defeat", chinese_answer: "失败", chinese_romanization: "shībài" },
            { option: "D", answer: "setback", chinese_answer: "挫折", chinese_romanization: "cuòzhé" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'attitude' means a settled way of thinking or feeling about something." + 
            "<br><br>" + 
            "(B) 'problem' means a matter or situation regarded as unwelcome or harmful and needing to be dealt with and overcome." + 
            "<br><br>" + 
            "(C) 'defeat' means an instance of defeating or being defeated." + 
            "<br><br>" + 
            "(D) 'setback' means a reversal or check in progress.",
        chinese_explanation: "(A) '态度'一词意味着对某事的一种固定的思维或感觉方式。" + 
            "<br><br>" + 
            "(B) '问题' 意味着被视为不受欢迎或有害并需要处理和克服的事项或情况。" + 
            "<br><br>" + 
            "(C) '失败' 意味着击败或被击败的一个实例。" + 
            "<br><br>" + 
            "(D) '挫折' 意味着进展的逆转或检查。"
    },
    {
        id: 5,
        question: "Breaking a bad __________, such as smoking or procrastination, can be very challenging.",
        chinese_question: "打破坏 __________，例如吸烟或拖延，可能非常具有挑战性。",
        answers: [
            { option: "A", answer: "opportunity", chinese_answer: "机会", chinese_romanization: "jīhuì" },
            { option: "B", answer: "habit", chinese_answer: "习惯", chinese_romanization: "xíguàn" },
            { option: "C", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
            { option: "D", answer: "benefit", chinese_answer: "好处", chinese_romanization: "hǎochù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'habit' metaphorically means a regular practice or behavior that is hard to give up." + 
            "<br><br>" + 
            "(A) 'opportunity' means a set of circumstances that makes it possible to do something." + 
            "<br><br>" + 
            "(C) 'reward' means a thing given in recognition of service, effort, or achievement." + 
            "<br><br>" + 
            "(D) 'benefit' means an advantage or profit gained from something.",
        chinese_explanation: "(B) '习惯' 比喻一种难以放弃的常规做法或行为。" + 
            "<br><br>" + 
            "(A) '机会' 意味着使做某事成为可能的一组情况。" + 
            "<br><br>" + 
            "(C) '奖励' 意味着为了表彰服务、努力或成就而给予的东西。" + 
            "<br><br>" + 
            "(D) '好处' 意味着从某事中获得的优势或利润。"
    },
    {
        id: 6,
        question: "Each student is treated as an __________ with unique needs and talents.",
        chinese_question: "每个学生都被当作一个 __________ 对待，有着独特的需求和才能。",
        answers: [
            { option: "A", answer: "group", chinese_answer: "团体", chinese_romanization: "tuántǐ" },
            { option: "B", answer: "organization", chinese_answer: "组织", chinese_romanization: "zǔzhī" },
            { option: "C", answer: "individual", chinese_answer: "个人", chinese_romanization: "gèrén" },
            { option: "D", answer: "team", chinese_answer: "团队", chinese_romanization: "tuánduì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'individual' means a single human being as distinct from a group, class, or family." + 
            "<br><br>" + 
            "(A) 'group' means a number of people or things that are located, gathered, or classed together." + 
            "<br><br>" + 
            "(B) 'organization' means an organized body of people with a particular purpose, especially a business, society, association, etc." + 
            "<br><br>" + 
            "(D) 'team' means a group of players forming one side in a competitive game or sport.",
        chinese_explanation: "(C) '个人' 意味着与群体、类别或家庭不同的单个人类。" + 
            "<br><br>" + 
            "(A) '团体' 意味着位于、聚集或归类在一起的一些人或事物。" + 
            "<br><br>" + 
            "(B) '组织' 意味着有特定目的的有组织的团体，特别是企业、社团、协会等。" + 
            "<br><br>" + 
            "(D) '团队' 意味着在竞技游戏或运动中组成一方的一群玩家。"
    },
    {
        id: 7,
        question: "The __________ of the new product next month has created a lot of excitement among potential customers.",
        chinese_question: "下个月新产品的 __________ 在潜在客户中引起了极大的兴奋。",
        answers: [
            { option: "A", answer: "cancellation", chinese_answer: "取消", chinese_romanization: "qǔxiāo" },
            { option: "B", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "C", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "D", answer: "launch", chinese_answer: "推出", chinese_romanization: "tuīchū" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'launch' as a noun means the introduction of a new product or service to the market." +
            "<br><br>" +
            "(A) 'cancellation' means the action of canceling something that has been arranged or planned." +
            "<br><br>" +
            "(B) 'ignorance' means lack of knowledge or information." +
            "<br><br>" +
            "(C) 'delay' means a period of time by which something is late or postponed.",
        chinese_explanation: "(D) '推出' 作为名词意味着将新产品或服务引入市场。" +
            "<br><br>" +
            "(A) '取消' 意味着取消已安排或计划的事情的行为。" +
            "<br><br>" +
            "(B) '无知' 意味着缺乏知识或信息。" +
            "<br><br>" +
            "(C) '延迟' 意味着某事物迟到或推迟的一段时间。"
    },
    {
        id: 8,
        question: "He couldn't help but __________  the future of his career.",
        chinese_question: "他忍不住__________自己的职业未来。",
        answers: [
            { option: "A", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "B", answer: "relax", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
            { option: "C", answer: "worry", chinese_answer: "担心", chinese_romanization: "dānxīn" },
            { option: "D", answer: "rejoice", chinese_answer: "高兴", chinese_romanization: "gāoxìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'celebrate' means to acknowledge (a significant or happy day or event) with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(B) 'relax' means to make or become less tense or anxious." +
            "<br><br>" +
            "(C) 'worry' means to give way to anxiety or unease; allow one's mind to dwell on difficulty or troubles. Figuratively, it can mean to feel concerned or anxious about something." +
            "<br><br>" +
            "(D) 'rejoice' means to feel or show great joy or delight.",
        chinese_explanation: "(A) '庆祝' 意味着通过社交聚会或愉快的活动来承认（重要或快乐的日子或事件）。" +
            "<br><br>" +
            "(B) '放松' 意味着使或变得不那么紧张或焦虑。" +
            "<br><br>" +
            "(C) '担心'一词意味着因焦虑或不安而让心思停留在困难或烦恼上。比喻地，它可以表示对某事感到担忧或焦虑。" +
            "<br><br>" +
            "(D) '高兴' 意味着感到或表现出极大的喜悦或愉快。"
    },
    {
        id: 9,
        question: "The equitable __________ of the inheritance ensured that all siblings received a fair portion of their parents' estate.",
        chinese_question: "公平的遗产 __________ 确保所有兄弟姐妹都能获得父母财产的公平份额。",
        answers: [
            { option: "A", answer: "share", chinese_answer: "份额", chinese_romanization: "fèn'é" },
            { option: "B", answer: "hoard", chinese_answer: "囤积", chinese_romanization: "túnjī" },
            { option: "C", answer: "retention", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
            { option: "D", answer: "concealment", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'share' as a noun means a portion of a resource assigned to or taken by an individual or group." +
            "<br><br>" +
            "(B) 'hoard' as a noun means a stock or store of money or valued objects, typically one that is secret or carefully guarded." +
            "<br><br>" +
            "(C) 'retention' means the continued possession, use, or control of something." +
            "<br><br>" +
            "(D) 'concealment' means the action of hiding something or preventing it from being known.",
        chinese_explanation: "(A) '份额' 作为名词意味着分配给个人或群体的一部分资源。" +
            "<br><br>" +
            "(B) '囤积' 作为名词意味着秘密或仔细保管的一笔钱或有价值的物品。" +
            "<br><br>" +
            "(C) '保留' 意味着继续拥有、使用或控制某物。" +
            "<br><br>" +
            "(D) '隐藏' 意味着隐藏某物或防止其被知道的行为。"
    },
    {
        id: 10,
        question: "A steady __________ of people entered the stadium for the concert, forming a continuous line at the gates.",
        chinese_question: "一股稳定的 __________ 人流进入体育场观看演唱会，在门口形成了一条连续的队伍。",
        answers: [
            { option: "A", answer: "trickle", chinese_answer: "涓涓细流", chinese_romanization: "juān juān xìliú" },
            { option: "B", answer: "stream", chinese_answer: "流", chinese_romanization: "liú" },
            { option: "C", answer: "gush", chinese_answer: "涌出", chinese_romanization: "yǒngchū" },
            { option: "D", answer: "flood", chinese_answer: "洪水", chinese_romanization: "hóngshuǐ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'stream' literally means a small, narrow river. Metaphorically, it means a continuous flow of people or things." +
            "<br><br>" +
            "(A) 'trickle' means a small flow of liquid. Metaphorically, it means a slow, small number of people." +
            "<br><br>" +
            "(C) 'gush' means a rapid and plentiful stream or burst of something. Metaphorically, it means a sudden, large influx of people." +
            "<br><br>" +
            "(D) 'flood' means an overflowing of a large amount of water beyond its normal confines, especially over what is normally dry land. Metaphorically, it means a very large number of people arriving at once.",
        chinese_explanation: "(B) '流' 字面意思是狭窄的小河。比喻上，它意味着人或物的连续流动。" +
            "<br><br>" +
            "(A) '涓涓细流' 意味着小流量的液体。比喻上，它意味着人流缓慢且数量少。" +
            "<br><br>" +
            "(C) '涌出' 意味着快速而大量的流出或喷出。比喻上，它意味着突然大量的人流涌入。" +
            "<br><br>" +
            "(D) '洪水' 意味着大量水超出正常边界，尤其是在通常干燥的土地上。比喻上，它意味着大量的人同时到达。"
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
