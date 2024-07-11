// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The crisp mountain __________ filled their lungs, invigorating them with each breath.",
        chinese_question: "清新的山间 __________ 充满了他们的肺，每一次呼吸都让他们精神振奋。",
        answers: [
            { option: "A", answer: "air", chinese_answer: "空气", chinese_romanization: "kōngqì" },
            { option: "B", answer: "water", chinese_answer: "水", chinese_romanization: "shuǐ" },
            { option: "C", answer: "soil", chinese_answer: "土壤", chinese_romanization: "tǔrǎng" },
            { option: "D", answer: "fire", chinese_answer: "火", chinese_romanization: "huǒ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'air' means the invisible gaseous substance surrounding the earth, a mixture mainly of oxygen and nitrogen." +
            "<br><br>" +
            "(B) 'water' means a transparent, odorless, tasteless liquid." +
            "<br><br>" +
            "(C) 'soil' means the upper layer of earth in which plants grow." +
            "<br><br>" +
            "(D) 'fire' means the process of combustion, characterized by heat, light, and flame.",
        chinese_explanation: "(A) '空气' 一词意味着围绕地球的无形气体物质，主要由氧气和氮气组成。" +
            "<br><br>" +
            "(B) '水' 意味着一种透明、无味、无嗅的液体。" +
            "<br><br>" +
            "(C) '土壤' 意味着植物生长的地球表层。" +
            "<br><br>" +
            "(D) '火' 意味着燃烧过程，以热、光和火焰为特征。"
    },
    {
        id: 2,
        question: "The couple exchanged their wedding vows at the __________, surrounded by family and friends.",
        chinese_question: "这对夫妇在 __________ 前交换了结婚誓言，亲友们围绕在他们周围。",
        answers: [
            { option: "A", answer: "stage", chinese_answer: "舞台", chinese_romanization: "wǔtái" },
            { option: "B", answer: "platform", chinese_answer: "平台", chinese_romanization: "píngtái" },
            { option: "C", answer: "altar", chinese_answer: "祭坛", chinese_romanization: "jìtán" },
            { option: "D", answer: "podium", chinese_answer: "讲台", chinese_romanization: "jiǎngtái" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'altar' means a table or flat-topped block used for religious ceremonies, especially in a church, where the couple exchanged their wedding vows." +
            "<br><br>" +
            "(A) 'stage' means a raised floor or platform, typically in a theater, on which actors, entertainers, or speakers perform." +
            "<br><br>" +
            "(B) 'platform' means a raised level surface on which people or things can stand." +
            "<br><br>" +
            "(D) 'podium' means a small platform on which a person may stand to be seen by an audience, as when making a speech or conducting an orchestra.",
        chinese_explanation: "(C) '祭坛' 意味着用于宗教仪式的桌子或平顶块，特别是在教堂里，夫妻在此交换结婚誓言。" +
            "<br><br>" +
            "(A) '舞台' 意味着一个通常在剧院里的高层地板或平台，演员、艺人或演讲者在上面表演。" +
            "<br><br>" +
            "(B) '平台' 意味着一个人或物可以站立的高层表面。" +
            "<br><br>" +
            "(D) '讲台' 意味着一个人可以站在上面被观众看到的小平台，比如在演讲或指挥乐队时。"
    },
    {
        id: 3,
        question: "The children's __________ was evident as they played on the swings and slides at the park.",
        chinese_question: "孩子们在公园里玩秋千和滑梯时显然很 __________。",
        answers: [
            { option: "A", answer: "boredom", chinese_answer: "无聊", chinese_romanization: "wúliáo" },
            { option: "B", answer: "sorrow", chinese_answer: "悲伤", chinese_romanization: "bēishāng" },
            { option: "C", answer: "amusement", chinese_answer: "欢乐", chinese_romanization: "huānlè" },
            { option: "D", answer: "fear", chinese_answer: "害怕", chinese_romanization: "hàipà" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'amusement' means the state or experience of finding something funny." +
            "<br><br>" +
            "(A) 'boredom' means the state of feeling bored." +
            "<br><br>" +
            "(B) 'sorrow' means a feeling of deep distress caused by loss, disappointment, or other misfortune suffered by oneself or others." +
            "<br><br>" +
            "(D) 'fear' means an unpleasant emotion caused by the threat of danger, pain, or harm.",
        chinese_explanation: "(C) '欢乐' 一词意味着找到某事有趣的状态或经历。" +
            "<br><br>" +
            "(A) '无聊' 意味着感到无聊的状态。" +
            "<br><br>" +
            "(B) '悲伤' 意味着因自己或他人遭受的损失、失望或其他不幸引起的深深痛苦。" +
            "<br><br>" +
            "(D) '害怕' 意味着由于危险、疼痛或伤害的威胁而产生的不愉快情绪。"
    },
    {
        id: 4,
        question: "She used a special __________, a unique algorithm, to solve the complex math problem efficiently.",
        chinese_question: "她使用了一种特殊的技术，一种独特的算法，高效地解决复杂的数学问题。",
        answers: [
            { option: "A", answer: "mistake", chinese_answer: "错误", chinese_romanization: "cuòwù" },
            { option: "B", answer: "technique", chinese_answer: "技术", chinese_romanization: "jìshù" },
            { option: "C", answer: "method", chinese_answer: "方法", chinese_romanization: "fāngfǎ" },
            { option: "D", answer: "error", chinese_answer: "差错", chinese_romanization: "chācuò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'technique' means a way of carrying out a particular task, especially the execution or performance of an artistic work or a scientific procedure." +
            "<br><br>" +
            "(A) 'mistake' means an action or judgment that is misguided or wrong." +
            "<br><br>" +
            "(C) 'method' means a particular form of procedure for accomplishing or approaching something, especially a systematic or established one." +
            "<br><br>" +
            "(D) 'error' means a mistake.",
        chinese_explanation: "(B) '技术' 一词意味着执行特定任务的方法，尤其是艺术作品或科学程序的执行或表现。" +
            "<br><br>" +
            "(A) '错误' 意味着误导或错误的行动或判断。" +
            "<br><br>" +
            "(C) '方法' 意味着完成或接近某事的特定程序形式，尤其是系统的或既定的程序形式。" +
            "<br><br>" +
            "(D) '差错' 意味着错误。"
    },
    {
        id: 5,
        question: "The police were called to investigate the __________ that occurred at the jewelry store last night.",
        chinese_question: "警方被叫来调查昨晚在珠宝店发生的 __________。",
        answers: [
            { option: "A", answer: "charity", chinese_answer: "慈善", chinese_romanization: "císhàn" },
            { option: "B", answer: "sale", chinese_answer: "销售", chinese_romanization: "xiāoshòu" },
            { option: "C", answer: "burglary", chinese_answer: "入室盗窃", chinese_romanization: "rùshì dàoqiè" },
            { option: "D", answer: "event", chinese_answer: "事件", chinese_romanization: "shìjiàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'burglary' means illegal entry into a building with intent to commit a crime, especially theft." +
            "<br><br>" +
            "(A) 'charity' means the voluntary giving of help, typically in the form of money, to those in need." +
            "<br><br>" +
            "(B) 'sale' means the exchange of a commodity for money; the action of selling something." +
            "<br><br>" +
            "(D) 'event' means a thing that happens or takes place, especially one of importance.",
        chinese_explanation: "(C) '入室盗窃' 一词意味着非法进入建筑物以意图犯罪，尤其是盗窃。" +
            "<br><br>" +
            "(A) '慈善' 意味着自愿提供帮助，通常是以金钱形式，给予需要帮助的人。" +
            "<br><br>" +
            "(B) '销售' 意味着商品换取金钱的交换；卖东西的动作。" +
            "<br><br>" +
            "(D) '事件' 意味着发生或进行的事情，特别是重要的事情。"
    },
    {
        id: 6,
        question: "The detective found crucial __________ at the crime scene that led to the arrest.",
        chinese_question: "侦探在犯罪现场发现了重要的 __________，导致了逮捕。",
        answers: [
            { option: "A", answer: "evidence", chinese_answer: "证据", chinese_romanization: "zhèngjù" },
            { option: "B", answer: "opinion", chinese_answer: "观点", chinese_romanization: "guāndiǎn" },
            { option: "C", answer: "rumour", chinese_answer: "谣言", chinese_romanization: "yáoyán" },
            { option: "D", answer: "theory", chinese_answer: "理论", chinese_romanization: "lǐlùn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'evidence' means the available body of facts or information indicating whether a belief or proposition is true or valid." +
            "<br><br>" +
            "(B) 'opinion' means a view or judgment formed about something, not necessarily based on fact or knowledge." +
            "<br><br>" +
            "(C) 'rumour' means a currently circulating story or report of uncertain or doubtful truth." +
            "<br><br>" +
            "(D) 'theory' means a supposition or a system of ideas intended to explain something.",
        chinese_explanation: "(A) '证据' 意味着可用的事实或信息，表明信念或命题是否真实或有效。" +
            "<br><br>" +
            "(B) '观点' 意味着对某事的看法或判断，不一定基于事实或知识。" +
            "<br><br>" +
            "(C) '谣言' 意味着目前流传的不确定或可疑的故事或报告。" +
            "<br><br>" +
            "(D) '理论' 意味着旨在解释某事的假设或一套思想体系。"
    },
    {
        id: 7,
        question: "Good __________, like regular handwashing and proper sanitation, is essential to prevent the spread of diseases.",
        chinese_question: "良好的卫生，如定期洗手和适当的卫生设施，对预防疾病传播至关重要。",
        answers: [
            { option: "A", answer: "nutrition", chinese_answer: "营养", chinese_romanization: "yíngyǎng" },
            { option: "B", answer: "exercise", chinese_answer: "锻炼", chinese_romanization: "duànliàn" },
            { option: "C", answer: "education", chinese_answer: "教育", chinese_romanization: "jiàoyù" },
            { option: "D", answer: "hygiene", chinese_answer: "卫生", chinese_romanization: "wèishēng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'hygiene' means conditions or practices conducive to maintaining health and preventing disease, especially through cleanliness." +
            "<br><br>" +
            "(A) 'nutrition' means the process of providing or obtaining the food necessary for health and growth." +
            "<br><br>" +
            "(B) 'exercise' means activity requiring physical effort, carried out to sustain or improve health and fitness." +
            "<br><br>" +
            "(C) 'education' means the process of receiving or giving systematic instruction.",
        chinese_explanation: "(D) '卫生' 意味着有助于保持健康和预防疾病的条件或实践，尤其是通过清洁。" +
            "<br><br>" +
            "(A) '营养' 意味着提供或获得健康和生长所需食物的过程。" +
            "<br><br>" +
            "(B) '锻炼' 意味着需要体力的活动，以维持或改善健康和体适能。" +
            "<br><br>" +
            "(C) '教育' 意味着接受或给予系统教育的过程。"
    },
    {
        id: 8,
        question: "After the harvest, there was a __________ of apples, and farmers struggled to sell them all.",
        chinese_question: "收获后，有一个苹果的 __________，农民们努力卖掉它们。",
        answers: [
            { option: "A", answer: "glut", chinese_answer: "过剩", chinese_romanization: "guòshèng" },
            { option: "B", answer: "scarcity", chinese_answer: "稀缺", chinese_romanization: "xīquē" },
            { option: "C", answer: "shortage", chinese_answer: "短缺", chinese_romanization: "duǎnquē" },
            { option: "D", answer: "lack", chinese_answer: "缺乏", chinese_romanization: "quēfá" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'glut' means an excessively abundant supply of something." +
            "<br><br>" +
            "(B) 'scarcity' means the state of being scarce or in short supply; shortage." +
            "<br><br>" +
            "(C) 'shortage' means a state or situation in which something needed cannot be obtained in sufficient amounts." +
            "<br><br>" +
            "(D) 'lack' means the state of being without or not having enough of something.",
        chinese_explanation: "(A) '过剩' 意味着某物的过多供应。" +
            "<br><br>" +
            "(B) '稀缺' 意味着稀缺或短缺的状态；短缺。" +
            "<br><br>" +
            "(C) '短缺' 意味着需要的东西无法以足够数量获得的状态或情况。" +
            "<br><br>" +
            "(D) '缺乏' 意味着没有或不足够的状态。"
    },
    {
        id: 9,
        question: "The small island served as a peaceful __________ for the weary travelers.",
        chinese_question: "这个小岛是疲惫旅客的一个宁静的 __________。",
        answers: [
            { option: "A", answer: "chaos", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "B", answer: "wilderness", chinese_answer: "荒野", chinese_romanization: "huāngyě" },
            { option: "C", answer: "haven", chinese_answer: "避风港", chinese_romanization: "bìfēnggǎng" },
            { option: "D", answer: "battlefield", chinese_answer: "战场", chinese_romanization: "zhànchǎng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'haven' means a place of safety or refuge." +
            "<br><br>" +
            "(A) 'chaos' means complete disorder and confusion." +
            "<br><br>" +
            "(B) 'wilderness' means an uncultivated, uninhabited, and inhospitable region." +
            "<br><br>" +
            "(D) 'battlefield' means the piece of ground on which a battle is or was fought.",
        chinese_explanation: "(C) '避风港' 意味着一个安全或避难的地方。" +
            "<br><br>" +
            "(A) '混乱' 意味着完全的混乱和困惑。" +
            "<br><br>" +
            "(B) '荒野' 意味着未开垦、无人居住和不宜居住的地区。" +
            "<br><br>" +
            "(D) '战场' 意味着进行或曾进行战斗的地方。"
    },
    {
        id: 10,
        question: "His __________ to gambling caused severe financial problems and strained his relationships with family and friends.",
        chinese_question: "他对赌博的 __________ 导致了严重的财务问题，并使他与家人和朋友的关系紧张。",
        answers: [
            { option: "A", answer: "interest", chinese_answer: "兴趣", chinese_romanization: "xìngqù" },
            { option: "B", answer: "hobby", chinese_answer: "爱好", chinese_romanization: "àihào" },
            { option: "C", answer: "addiction", chinese_answer: "成瘾", chinese_romanization: "chéng yǐn" },
            { option: "D", answer: "disinterest", chinese_answer: "无兴趣", chinese_romanization: "wú xìngqù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'addiction' means not being able to stop doing something harmful, like using drugs or gambling, even if it causes problems." +
            "<br><br>" +
            "(A) 'interest' means the state of wanting to know or learn about something or someone." +
            "<br><br>" +
            "(B) 'hobby' means an activity done regularly in one's leisure time for pleasure." +
            "<br><br>" +
            "(D) 'disinterest' means lack of interest in something.",
        chinese_explanation: "(C) '成瘾' 一词意味着不能停止做一些有害的事情，比如吸毒或赌博，即使它会引起问题。" +
            "<br><br>" +
            "(A) '兴趣' 意味着想要了解或学习某事或某人的状态。" +
            "<br><br>" +
            "(B) '爱好' 意味着在闲暇时间定期进行的一项活动，以获得乐趣。" +
            "<br><br>" +
            "(D) '无兴趣' 意味着对某事缺乏兴趣。"
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
