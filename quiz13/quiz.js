// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He was __________ when he discovered that his car had been scratched while parked.",
        chinese_question: "当他发现自己的车在停车时被刮花时，他非常__________。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "B", answer: "nonchalant", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
            { option: "C", answer: "furious", chinese_answer: "狂怒的", chinese_romanization: "kuángnù de" },
            { option: "D", answer: "amused", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'furious' means extremely angry." +
            "<br><br>" +
            "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(B) 'nonchalant' means appearing casually unconcerned or indifferent." +
            "<br><br>" +
            "(D) 'amused' means finding something funny or entertaining.",
        chinese_explanation: "(C) '狂怒的'一词意味着非常生气的。" +
            "<br><br>" +
            "(A) '平静的' 意味着不显示或感觉紧张、愤怒或其他强烈情感的。" +
            "<br><br>" +
            "(B) '漠不关心的' 意味着显得漠不关心或冷淡。" +
            "<br><br>" +
            "(D) '愉快的' 意味着觉得有趣或有娱乐性的。"
    },
    {
        id: 2,
        question: "The __________ puppy chewed on the furniture and scattered shoes around the house, causing endless trouble.",
        chinese_question: "这只 __________ 的小狗咬家具，把鞋子散落在房子周围，带来了无尽的麻烦。",
        answers: [
            { option: "A", answer: "well-behaved", chinese_answer: "乖巧的", chinese_romanization: "guāiqiǎo de" },
            { option: "B", answer: "obedient", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
            { option: "C", answer: "mischievous", chinese_answer: "淘气的", chinese_romanization: "táoqì de" },
            { option: "D", answer: "docile", chinese_answer: "温顺的", chinese_romanization: "wēnshùn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mischievous' means causing or showing a fondness for causing trouble in a playful way." +
            "<br><br>" +
            "(A) 'well-behaved' means behaving in a manner that is socially correct." +
            "<br><br>" +
            "(B) 'obedient' means complying or willing to comply with orders or requests; submissive to another's will." +
            "<br><br>" +
            "(D) 'docile' means ready to accept control or instruction; submissive.",
        chinese_explanation: "(C) '淘气的' 意味着以顽皮的方式引起或表现出引起麻烦的爱好。" +
            "<br><br>" +
            "(A) '乖巧的' 意味着行为得体的。" +
            "<br><br>" +
            "(B) '顺从的' 意味着服从或愿意服从命令或要求；顺从他人的意愿。" +
            "<br><br>" +
            "(D) '温顺的' 意味着准备接受控制或指导的；顺从的。"
    },
    {
        id: 3,
        question: "After losing the chess match, he remained __________, analyzing his mistakes and considering it a learning experience.",
        chinese_question: "在输掉棋赛后，他保持 __________，分析自己的错误并将其视为学习经验。",
        answers: [
            { option: "A", answer: "emotional", chinese_answer: "情绪化", chinese_romanization: "qíngxù huà" },
            { option: "B", answer: "impulsive", chinese_answer: "冲动", chinese_romanization: "chōngdòng" },
            { option: "C", answer: "agitated", chinese_answer: "激动", chinese_romanization: "jīdòng" },
            { option: "D", answer: "philosophical", chinese_answer: "哲学", chinese_romanization: "zhéxué" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'philosophical' means calm and wise, especially in difficult situations; reflective and rational." +
            "<br><br>" +
            "(A) 'emotional' means showing strong feelings." +
            "<br><br>" +
            "(B) 'impulsive' means acting without thought." +
            "<br><br>" +
            "(C) 'agitated' means feeling or appearing troubled or nervous.",
        chinese_explanation: "(D) '哲学' 意味着在困难情况下保持冷静和智慧；深思熟虑和理性。" +
            "<br><br>" +
            "(A) '情绪化' 意味着表现出强烈的情感。" +
            "<br><br>" +
            "(B) '冲动' 意味着不经思考就行动。" +
            "<br><br>" +
            "(C) '激动' 意味着感到或显得烦躁或紧张。"
    },
    {
        id: 4,
        question: "The __________ fox managed to escape the trap by cleverly outsmarting the hunters.",
        chinese_question: "那只 __________ 的狐狸通过巧妙地智胜猎人逃脱了陷阱。",
        answers: [
            { option: "A", answer: "clumsy", chinese_answer: "笨拙", chinese_romanization: "bènzhuō" },
            { option: "B", answer: "cunning", chinese_answer: "狡猾", chinese_romanization: "jiǎohuá" },
            { option: "C", answer: "slow", chinese_answer: "缓慢", chinese_romanization: "huǎnmàn" },
            { option: "D", answer: "naive", chinese_answer: "天真", chinese_romanization: "tiānzhēn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'cunning' means being clever at achieving goals by using deceit or evasion." +
            "<br><br>" +
            "(A) 'clumsy' means awkward in movement or in handling things." +
            "<br><br>" +
            "(C) 'slow' means moving or operating, or designed to do so, only at a low speed." +
            "<br><br>" +
            "(D) 'naive' means showing a lack of experience, wisdom, or judgment.",
        chinese_explanation: "(B) '狡猾' 意味着通过欺骗或规避手段巧妙地达到目标。" +
            "<br><br>" +
            "(A) '笨拙' 意味着动作或处理事物时笨拙。" +
            "<br><br>" +
            "(C) '缓慢' 意味着以低速移动或操作，或设计成低速的。" +
            "<br><br>" +
            "(D) '天真' 意味着表现出缺乏经验、智慧或判断力。"
    },
    {
        id: 5,
        question: "The __________ path extended across the entire landscape, providing a clear and unobstructed route for travelers.",
        chinese_question: "这条 __________ 的路径延伸到整个景观，为旅行者提供了一条清晰畅通的路线。",
        answers: [
            { option: "A", answer: "vertical", chinese_answer: "垂直的", chinese_romanization: "chuízhí de" },
            { option: "B", answer: "diagonal", chinese_answer: "对角线的", chinese_romanization: "duìjiǎoxiàn de" },
            { option: "C", answer: "curved", chinese_answer: "曲线的", chinese_romanization: "qūxiàn de" },
            { option: "D", answer: "horizontal", chinese_answer: "水平的", chinese_romanization: "shuǐpíng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'horizontal' means being parallel to the horizon or the ground." +
            "<br><br>" +
            "(A) 'vertical' means at right angles to a horizontal plane." +
            "<br><br>" +
            "(B) 'diagonal' means joining two opposite corners of a square, rectangle, or other straight-sided shape." +
            "<br><br>" +
            "(C) 'curved' means having the form of a curve.",
        chinese_explanation: "(D) '水平的'意思是与地平线或地面平行。" +
            "<br><br>" +
            "(A) '垂直的' 意味着与水平面成直角。" +
            "<br><br>" +
            "(B) '对角线的' 意味着连接正方形、矩形或其他直边形状的两个对角。" +
            "<br><br>" +
            "(C) '曲线的' 意味着具有曲线的形式。"
    },
    {
        id: 6,
        question: "Their __________ relationship was filled with bitter arguments and resentment.",
        chinese_question: "他们的__________关系充满了激烈的争吵和怨恨。",
        answers: [
            { option: "A", answer: "friendly", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" },
            { option: "B", answer: "amicable", chinese_answer: "友善的", chinese_romanization: "yǒushàn de" },
            { option: "C", answer: "rancorous", chinese_answer: "怨恨的", chinese_romanization: "yuànhèn de" },
            { option: "D", answer: "harmonious", chinese_answer: "和谐的", chinese_romanization: "héxié de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'rancorous' means feeling bitter or holding a strong grudge." +
            "<br><br>" +
            "(A) 'friendly' means kind and pleasant." +
            "<br><br>" +
            "(B) 'amicable' means being friendly and getting along well without fighting." +
            "<br><br>" +
            "(D) 'harmonious' means forming a pleasing or consistent whole.",
        chinese_explanation: "(C) '怨恨的' 意思是感到非常愤怒或怀有强烈的怨恨。" +
            "<br><br>" +
            "(A) '友好的' 意味着友好和愉快的。" +
            "<br><br>" +
            "(B) '友善的' 意思是友好相处，没有严重的争执或怨恨。" +
            "<br><br>" +
            "(D) '和谐的' 意味着形成一个令人愉快或一致的整体的。"
    },
    {
        id: 7,
        question: "She made a few __________ adjustments to the recipe before baking the cake, such as adding a pinch of salt and reducing the sugar by a tablespoon.",
        chinese_question: "在烤蛋糕之前，她对食谱做了一些 __________ 调整，比如加了一点盐和减少了一汤匙糖。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "小的", chinese_romanization: "xiǎo de" },
            { option: "B", answer: "major", chinese_answer: "大的", chinese_romanization: "dà de" },
            { option: "C", answer: "significant", chinese_answer: "重要的", chinese_romanization: "zhòngyào de" },
            { option: "D", answer: "substantial", chinese_answer: "大量的", chinese_romanization: "dàliàng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(B) 'major' means important, serious, or significant." +
            "<br><br>" +
            "(C) 'significant' means sufficiently great or important to be worthy of attention; noteworthy." +
            "<br><br>" +
            "(D) 'substantial' means of considerable importance, size, or worth.",
        chinese_explanation: "(A) '小的' 意味着重要性、严肃性或显著性较低的。" +
            "<br><br>" +
            "(B) '大的' 意味着重要、严肃或显著的。" +
            "<br><br>" +
            "(C) '重要的' 意味着足够伟大或重要，值得关注；显著的。" +
            "<br><br>" +
            "(D) '大量的' 意味着相当重要、大小或价值的。"
    },
    {
        id: 8,
        question: "His __________ behavior was evident when he spent fifteen minutes correcting the grammar in a colleague's email and insisted on using obscure technical terms in simple conversations.",
        chinese_question: "他的 __________ 行为显而易见，当他花了十五分钟纠正同事邮件中的语法错误，并坚持在简单对话中使用晦涩的技术术语时。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "B", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "C", answer: "concise", chinese_answer: "简明的", chinese_romanization: "jiǎnmíng de" },
            { option: "D", answer: "pedantic", chinese_answer: "卖弄学问的", chinese_romanization: "màinòng xuéwèn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'pedantic' means overly concerned with minor details or rules; showing off academic knowledge." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(B) 'vague' means unclear or imprecise." +
            "<br><br>" +
            "(C) 'concise' means giving a lot of information clearly and in a few words.",
        chinese_explanation: "(D) '卖弄学问的' 意味着过分关注细节或规则；炫耀学术知识。" +
            "<br><br>" +
            "(A) '粗心的' 意味着没有给予足够的注意或考虑以避免伤害或错误。" +
            "<br><br>" +
            "(B) '模糊的' 意味着不清楚或不精确。" +
            "<br><br>" +
            "(C) '简明的' 意味着用少量的词语清晰地提供大量信息。"
    },
    {
        id: 9,
        question: "The museum exhibit featured many __________ tools and artifacts, offering a glimpse into the lives of ancient civilizations.",
        chinese_question: "博物馆展览展示了许多 __________ 的工具和文物，让人们得以一窥古代文明的生活。",
        answers: [
            { option: "A", answer: "modern", chinese_answer: "现代的", chinese_romanization: "xiàndài de" },
            { option: "B", answer: "archaic", chinese_answer: "古老的", chinese_romanization: "gǔlǎo de" },
            { option: "C", answer: "futuristic", chinese_answer: "未来的", chinese_romanization: "wèilái de" },
            { option: "D", answer: "contemporary", chinese_answer: "当代的", chinese_romanization: "dāngdài de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'archaic' means very old or old-fashioned." +
            "<br><br>" +
            "(A) 'modern' means relating to the present or recent times." +
            "<br><br>" +
            "(C) 'futuristic' means having or involving very modern technology or design." +
            "<br><br>" +
            "(D) 'contemporary' means living or occurring at the same time.",
        chinese_explanation: "(B) '古老的' 一词意味着非常古老或过时的。" +
            "<br><br>" +
            "(A) '现代的' 意味着与现在或最近的时间有关。" +
            "<br><br>" +
            "(C) '未来的' 意味着具有或涉及非常现代的技术或设计。" +
            "<br><br>" +
            "(D) '当代的' 意味着在同一时间生活或发生的。"
    },
    {
        id: 10,
        question: "During the team-building retreat, his __________ antics, such as singing loudly and roughhousing, disrupted the otherwise peaceful atmosphere.",
        chinese_question: "在团队建设的休息期间，他的 __________ 行为，比如大声唱歌和胡闹，打破了本来平静的氛围。",
        answers: [
            { option: "A", answer: "serene", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "B", answer: "timid", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" },
            { option: "C", answer: "subdued", chinese_answer: "压抑的", chinese_romanization: "yāyì de" },
            { option: "D", answer: "rambunctious", chinese_answer: "喧闹的", chinese_romanization: "xuānnào de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'rambunctious' means uncontrollably exuberant; boisterous." +
            "<br><br>" +
            "(A) 'serene' means calm, peaceful, and untroubled." +
            "<br><br>" +
            "(B) 'timid' means showing a lack of courage or confidence; easily frightened." +
            "<br><br>" +
            "(C) 'subdued' means quiet and rather reflective or depressed.",
        chinese_explanation: "(D) '喧闹的' 意味着无法控制的兴奋；吵闹的。" +
            "<br><br>" +
            "(A) '平静的' 意味着冷静、和平、安宁的。" +
            "<br><br>" +
            "(B) '胆小的' 意味着缺乏勇气或信心；容易受惊的。" +
            "<br><br>" +
            "(C) '压抑的' 意味着安静的，相当反思的或沮丧的。"
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
