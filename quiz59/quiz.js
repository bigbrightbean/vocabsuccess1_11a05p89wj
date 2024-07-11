// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The speed limit on this highway is set to a __________ of 70 miles per hour, meaning drivers should not exceed this speed.",
        chinese_question: "这条高速公路的限速设定为__________70英里每小时，这意味着驾驶员不应超过这个速度。",
        answers: [
            { option: "A", answer: "minimum", chinese_answer: "最小值", chinese_romanization: "zuìxiǎo zhí" },
            { option: "B", answer: "average", chinese_answer: "平均", chinese_romanization: "píngjūn" },
            { option: "C", answer: "maximum", chinese_answer: "最大值", chinese_romanization: "zuìdà zhí" },
            { option: "D", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'maximum' means as great, high, or intense as possible or permitted." +
            "<br><br>" +
            "(A) 'minimum' means the least or smallest amount or quantity possible, attainable, or required." +
            "<br><br>" +
            "(B) 'average' means the result obtained by adding several quantities together and then dividing this total by the number of quantities." +
            "<br><br>" +
            "(D) 'typical' means having the distinctive qualities of a particular type of person or thing.",
        chinese_explanation: "(C) '最大值' 一词意味着尽可能大、高或强烈的或被允许的。" +
            "<br><br>" +
            "(A) '最小值' 意味着可能的、可以达到的或需要的最小或最小数量。" +
            "<br><br>" +
            "(B) '平均' 意味着通过将几种数量加在一起然后将这个总数除以数量的数量来获得的结果。" +
            "<br><br>" +
            "(D) '典型的' 意味着具有某种类型的人或事物的独特品质。"
    },
    {
        id: 2,
        question: "The __________ at the mall, involving a fire in one of the stores, caused the entire building to be evacuated.",
        chinese_question: "商场内发生的__________涉及一家商店的火灾，导致整个建筑被疏散。",
        answers: [
            { option: "A", answer: "routine", chinese_answer: "例行公事", chinese_romanization: "lìxíng gōngshì" },
            { option: "B", answer: "incident", chinese_answer: "事件", chinese_romanization: "shìjiàn" },
            { option: "C", answer: "festival", chinese_answer: "节日", chinese_romanization: "jiérì" },
            { option: "D", answer: "performance", chinese_answer: "表演", chinese_romanization: "biǎoyǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'incident' means an event or occurrence, especially one that is unusual or important." +
            "<br><br>" +
            "(A) 'routine' means a sequence of actions regularly followed." +
            "<br><br>" +
            "(C) 'festival' means a day or period of celebration, typically for religious reasons." +
            "<br><br>" +
            "(D) 'performance' means an act of staging or presenting a play, concert, or other form of entertainment.",
        chinese_explanation: "(B) '事件' 一词意味着一种事件或情况，特别是异常或重要的。" +
            "<br><br>" +
            "(A) '例行公事' 意味着定期遵循的行动顺序。" +
            "<br><br>" +
            "(C) '节日' 意味着庆祝的一天或一段时间，通常是宗教原因。" +
            "<br><br>" +
            "(D) '表演' 意味着上演或呈现戏剧、音乐会或其他形式的娱乐活动的行为。"
    },
    {
        id: 3,
        question: "The researchers distributed a __________ to gather data on participants' eating habits and exercise routines.",
        chinese_question: "研究人员分发了 __________，以收集参与者的饮食习惯和锻炼情况的数据。",
        answers: [
            { option: "A", answer: "questionnaire", chinese_answer: "问卷", chinese_romanization: "wènjuàn" },
            { option: "B", answer: "distraction", chinese_answer: "分心", chinese_romanization: "fēn xīn" },
            { option: "C", answer: "letter", chinese_answer: "信件", chinese_romanization: "xìnjiàn" },
            { option: "D", answer: "report", chinese_answer: "报告", chinese_romanization: "bàogào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'questionnaire' means a set of printed or written questions with a choice of answers, devised for the purposes of a survey or statistical study." +
            "<br><br>" +
            "(B) 'distraction' means a thing that prevents someone from giving full attention to something else." +
            "<br><br>" +
            "(C) 'letter' means a written, typed, or printed communication, especially one sent in an envelope by mail or messenger." +
            "<br><br>" +
            "(D) 'report' means an account given of a particular matter, especially in the form of an official document.",
        chinese_explanation: "(A) '问卷' 一词意味着一组印刷或书面问题，附有选择答案，旨在进行调查或统计研究。" +
            "<br><br>" +
            "(B) '分心' 意味着阻止某人全神贯注于其他事情的事物。" +
            "<br><br>" +
            "(C) '信件' 意味着书面、打印或印刷的通信，特别是通过邮件或信使发送的通信。" +
            "<br><br>" +
            "(D) '报告' 意味着对特定事项的描述，特别是以官方文件的形式。"
    },
    {
        id: 4,
        question: "The geologist studied the rock __________, examining the layers and structures to understand the region's geological history.",
        chinese_question: "地质学家研究岩石 __________，检查层和结构以了解该地区的地质历史。",
        answers: [
            { option: "A", answer: "destruction", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "B", answer: "formation", chinese_answer: "形成", chinese_romanization: "xíngchéng" },
            { option: "C", answer: "creation", chinese_answer: "创建", chinese_romanization: "chuàngjiàn" },
            { option: "D", answer: "dissolution", chinese_answer: "解散", chinese_romanization: "jiěsàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'formation' means the action of forming or the process of being formed." +
            "<br><br>" +
            "(A) 'destruction' means the action or process of causing so much damage to something that it no longer exists or cannot be repaired." +
            "<br><br>" +
            "(C) 'creation' means the action or process of bringing something into existence." +
            "<br><br>" +
            "(D) 'dissolution' means the closing down or dismissal of an assembly, partnership, or official body.",
        chinese_explanation: "(B) '形成' 一词意味着形成的行动或过程。" +
            "<br><br>" +
            "(A) '破坏' 意味着造成如此大的损害，以至于某物不再存在或无法修复的行为或过程。" +
            "<br><br>" +
            "(C) '创建' 意味着使某物存在的行为或过程。" +
            "<br><br>" +
            "(D) '解散' 意味着关闭或解散集会、合伙或官方机构。"
    },
    {
        id: 5,
        question: "The artist's __________ of the politician exaggerated his facial features, making him look almost comical.",
        chinese_question: "艺术家对这位政治家的 __________ 夸大了他的面部特征，使他看起来几乎滑稽可笑。",
        answers: [
            { option: "A", answer: "portrait", chinese_answer: "肖像", chinese_romanization: "xiàoxiàng" },
            { option: "B", answer: "photograph", chinese_answer: "照片", chinese_romanization: "zhàopiàn" },
            { option: "C", answer: "sculpture", chinese_answer: "雕塑", chinese_romanization: "diāosù" },
            { option: "D", answer: "caricature", chinese_answer: "漫画", chinese_romanization: "mànhuà" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'caricature' means a picture, description, or imitation of a person in which certain striking characteristics are exaggerated in order to create a comic or grotesque effect." +
            "<br><br>" +
            "(A) 'portrait' means a painting, drawing, photograph, or engraving of a person." +
            "<br><br>" +
            "(B) 'photograph' means a picture made using a camera." +
            "<br><br>" +
            "(C) 'sculpture' means the art of making two- or three-dimensional representative or abstract forms.",
        chinese_explanation: "(D) '漫画' 一词意味着通过夸大某些显著特征来产生滑稽或怪诞效果的人的图片、描述或模仿。" +
            "<br><br>" +
            "(A) '肖像' 意味着人物的绘画、素描、照片或雕刻。" +
            "<br><br>" +
            "(B) '照片' 意味着使用相机制作的图片。" +
            "<br><br>" +
            "(C) '雕塑' 意味着制作二维或三维代表性或抽象形式的艺术。"
    },
    {
        id: 6,
        question: "They discovered a hidden __________ of ancient coins buried beneath the old oak tree.",
        chinese_question: "他们在老橡树下发现了一个埋藏的古代硬币 __________。",
        answers: [
            { option: "A", answer: "vault", chinese_answer: "金库", chinese_romanization: "jīnkù" },
            { option: "B", answer: "cache", chinese_answer: "隐藏处", chinese_romanization: "yǐncáng chù" },
            { option: "C", answer: "bank", chinese_answer: "银行", chinese_romanization: "yínháng" },
            { option: "D", answer: "wasteland", chinese_answer: "荒地", chinese_romanization: "huāngdì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'cache' means a collection of items of the same type stored in a hidden or inaccessible place." +
            "<br><br>" +
            "(A) 'vault' means a secure room where valuables are stored." +
            "<br><br>" +
            "(C) 'bank' means a financial institution where money is deposited and withdrawn." +
            "<br><br>" +
            "(D) 'wasteland' means an unused area of land that has become barren or overgrown.",
        chinese_explanation: "(B) '隐藏处' 一词意味着存储在隐藏或难以到达的地方的同类物品的集合。" +
            "<br><br>" +
            "(A) '金库' 意味着存放贵重物品的安全房间。" +
            "<br><br>" +
            "(C) '银行' 意味着存入和提取资金的金融机构。" +
            "<br><br>" +
            "(D) '荒地' 意味着一片未被使用的土地，已经变得荒芜或杂草丛生。"
    },
    {
        id: 7,
        question: "Each citizen was given a __________ to vote for their preferred candidate in the election, marking their choice in a secure and anonymous way.",
        chinese_question: "每位公民都获得了一张 __________，以投票选出他们在选举中偏好的候选人，以安全和匿名的方式标记他们的选择。",
        answers: [
            { option: "A", answer: "ballot", chinese_answer: "选票", chinese_romanization: "xuǎnpiào" },
            { option: "B", answer: "speech", chinese_answer: "演讲", chinese_romanization: "yǎnjiǎng" },
            { option: "C", answer: "survey", chinese_answer: "调查", chinese_romanization: "diàochá" },
            { option: "D", answer: "abstention", chinese_answer: "弃权", chinese_romanization: "qìquán" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ballot' means a process of voting, in writing and typically in secret." +
            "<br><br>" +
            "(B) 'speech' means a formal address or discourse delivered to an audience." +
            "<br><br>" +
            "(C) 'survey' means a general view, examination, or description of someone or something." +
            "<br><br>" +
            "(D) 'abstention' means an instance of declining to vote for or against a proposal or motion.",
        chinese_explanation: "(A) '选票' 一词意味着投票的过程，通常是书面和秘密进行的。" +
            "<br><br>" +
            "(B) '演讲' 意味着向观众发表的正式讲话或演说。" +
            "<br><br>" +
            "(C) '调查' 意味着对某人或某事的一般观点、检查或描述。" +
            "<br><br>" +
            "(D) '弃权' 意味着拒绝对提案或动议投票的情况。"
    },
    {
        id: 8,
        question: "The hotel __________ greeted us warmly and ensured all our needs were met during our stay.",
        chinese_question: "酒店的 __________ 热情地迎接了我们，确保我们在入住期间的所有需求都得到了满足。",
        answers: [
            { option: "A", answer: "guest", chinese_answer: "客人", chinese_romanization: "kèrén" },
            { option: "B", answer: "visitor", chinese_answer: "访客", chinese_romanization: "fǎngkè" },
            { option: "C", answer: "concierge", chinese_answer: "礼宾", chinese_romanization: "lǐbīn" },
            { option: "D", answer: "stranger", chinese_answer: "陌生人", chinese_romanization: "mòshēngrén" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'concierge' means a hotel employee whose job is to assist guests by arranging tours, making theater and restaurant reservations, etc." +
            "<br><br>" +
            "(A) 'guest' means a person who is invited to visit someone's home or attend a particular social occasion." +
            "<br><br>" +
            "(B) 'visitor' means a person visiting a person or place, especially socially or as a tourist." +
            "<br><br>" +
            "(D) 'stranger' means a person whom one does not know or with whom one is not familiar.",
        chinese_explanation: "(C) '礼宾' 一词意味着酒店员工，其工作是通过安排旅游、预订剧院和餐厅等来协助客人。" +
            "<br><br>" +
            "(A) '客人' 意味着被邀请访问某人家或参加特定社交场合的人。" +
            "<br><br>" +
            "(B) '访客' 意味着访问某人或某地的人，尤其是社交或作为游客。" +
            "<br><br>" +
            "(D) '陌生人' 意味着一个人不认识或不熟悉的人。"
    },
    {
        id: 9,
        question: "Her __________ on the matter was shaped by years of experience and deep understanding of the topic.",
        chinese_question: "她对这个问题的 __________ 由多年的经验和对该主题的深刻理解所塑造。",
        answers: [
            { option: "A", answer: "viewpoint", chinese_answer: "观点", chinese_romanization: "guāndiǎn" },
            { option: "B", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
            { option: "C", answer: "bias", chinese_answer: "偏见", chinese_romanization: "piānjiàn" },
            { option: "D", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'viewpoint' means a particular attitude or way of considering something." +
            "<br><br>" +
            "(B) 'ignorance' means lack of knowledge or information." +
            "<br><br>" +
            "(C) 'bias' means prejudice in favor of or against one thing, person, or group." +
            "<br><br>" +
            "(D) 'silence' means complete absence of sound.",
        chinese_explanation: "(A) '观点' 一词意味着对某事的特定态度或考虑方式。" +
            "<br><br>" +
            "(B) '无知' 意味着缺乏知识或信息。" +
            "<br><br>" +
            "(C) '偏见' 意味着偏袒或反对某事物、某人或某群体。" +
            "<br><br>" +
            "(D) '沉默' 意味着完全没有声音。"
    },
    {
        id: 10,
        question: "In the final match of the tournament, he faced his toughest __________, a competitor known for his skillS and determination.",
        chinese_question: "在锦标赛的最后一场比赛中，他面对他最强的 __________，一个以技能和决心著称的对手。",
        answers: [
            { option: "A", answer: "ally", chinese_answer: "盟友", chinese_romanization: "méngyǒu" },
            { option: "B", answer: "friend", chinese_answer: "朋友", chinese_romanization: "péngyǒu" },
            { option: "C", answer: "adversary", chinese_answer: "对手", chinese_romanization: "duìshǒu" },
            { option: "D", answer: "supporter", chinese_answer: "支持者", chinese_romanization: "zhīchí zhě" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'adversary' means one's opponent in a contest, conflict, or dispute." +
            "<br><br>" +
            "(A) 'ally' means a state formally cooperating with another for a military or other purpose." +
            "<br><br>" +
            "(B) 'friend' means a person with whom one has a bond of mutual affection." +
            "<br><br>" +
            "(D) 'supporter' means a person who approves of and encourages someone or something.",
        chinese_explanation: "(C) '对手' 意味着在比赛、冲突或争端中的对手。" +
            "<br><br>" +
            "(A) '盟友' 意味着一个正式与另一国合作的国家，为军事或其他目的。" +
            "<br><br>" +
            "(B) '朋友' 意味着与某人有相互感情联系的人。" +
            "<br><br>" +
            "(D) '支持者' 意味着批准和鼓励某人或某事的人。"
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
