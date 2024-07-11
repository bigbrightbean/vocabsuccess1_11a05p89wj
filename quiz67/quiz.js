// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The surgeon explained the __________ in detail, making sure the patient understood each step of the operation.",
        chinese_question: "外科医生详细解释了 __________，确保患者理解手术的每个步骤。",
        answers: [
            { option: "A", answer: "result", chinese_answer: "结果", chinese_romanization: "jiéguǒ" },
            { option: "B", answer: "procedure", chinese_answer: "程序", chinese_romanization: "chéngxù" },
            { option: "C", answer: "outcome", chinese_answer: "结局", chinese_romanization: "jiéjú" },
            { option: "D", answer: "consequence", chinese_answer: "后果", chinese_romanization: "hòuguǒ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'procedure' means an established or official way of doing something." +
            "<br><br>" +
            "(A) 'result' means a consequence, effect, or outcome of something." +
            "<br><br>" +
            "(C) 'outcome' means the way a thing turns out; a consequence." +
            "<br><br>" +
            "(D) 'consequence' means a result or effect, typically one that is unwelcome or unpleasant.",
        chinese_explanation: "(B) '程序' 一词意味着做某事的既定或正式方式。" +
            "<br><br>" +
            "(A) '结果' 意味着某事的后果、效果或结果。" +
            "<br><br>" +
            "(C) '结局' 意味着事物的结果；后果。" +
            "<br><br>" +
            "(D) '后果' 意味着结果或效果，通常是不受欢迎或不愉快的。"
    },
    {
        id: 2,
        question: "There was a deep-seated __________ between the two rival teams, leading to frequent conflicts on the field.",
        chinese_question: "两支对立球队之间存在深深的 __________，导致场上频繁发生冲突。",
        answers: [
            { option: "A", answer: "friendship", chinese_answer: "友谊", chinese_romanization: "yǒuyì" },
            { option: "B", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "C", answer: "cooperation", chinese_answer: "合作", chinese_romanization: "hézuò" },
            { option: "D", answer: "animosity", chinese_answer: "敌意", chinese_romanization: "díyì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'animosity' means strong hostility." +
            "<br><br>" +
            "(A) 'friendship' means the emotions or conduct of friends; the state of being friends." +
            "<br><br>" +
            "(B) 'harmony' means the combination of simultaneously sounded musical notes to produce chords and chord progressions having a pleasing effect." +
            "<br><br>" +
            "(C) 'cooperation' means the process of working together to the same end.",
        chinese_explanation: "(D) '敌意' 一词意味着强烈的敌对。" +
            "<br><br>" +
            "(A) '友谊' 意味着朋友的情感或行为；成为朋友的状态。" +
            "<br><br>" +
            "(B) '和谐' 意味着同时发出的音乐音符的组合，以产生和弦和和弦进行，具有令人愉快的效果。" +
            "<br><br>" +
            "(C) '合作' 意味着共同工作以实现同一目标的过程。"
    },
    {
        id: 3,
        question: "She quickly developed a good __________ with her new colleagues, which made working together easier.",
        chinese_question: "她很快与新同事建立了良好的 __________，这使得合作更容易。",
        answers: [
            { option: "A", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" },
            { option: "B", answer: "rapport", chinese_answer: "关系", chinese_romanization: "guānxì" },
            { option: "C", answer: "tension", chinese_answer: "紧张", chinese_romanization: "jǐnzhāng" },
            { option: "D", answer: "disagreement", chinese_answer: "分歧", chinese_romanization: "fēnqí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rapport' means a close and harmonious relationship in which the people or groups concerned understand each other's feelings or ideas and communicate well." +
            "<br><br>" +
            "(A) 'conflict' means a serious disagreement or argument." +
            "<br><br>" +
            "(C) 'tension' means the state of being stretched tight." +
            "<br><br>" +
            "(D) 'disagreement' means lack of consensus or approval.",
        chinese_explanation: "(B) '关系' 一词意味着有关的人或团体之间的密切和谐关系，理解彼此的感受或想法并很好地沟通。" +
            "<br><br>" +
            "(A) '冲突' 意味着严重的分歧或争论。" +
            "<br><br>" +
            "(C) '紧张' 意味着被拉紧的状态。" +
            "<br><br>" +
            "(D) '分歧' 意味着缺乏共识或认可。"
    },
    {
        id: 4,
        question: "The politician was a skilled __________, able to captivate and persuade large audiences with his eloquent speeches.",
        chinese_question: "这位政客是个技巧娴熟的 __________，能够用他雄辩的演讲吸引并说服大量观众。",
        answers: [
            { option: "A", answer: "orator", chinese_answer: "演说家", chinese_romanization: "yǎnshuō jiā" },
            { option: "B", answer: "writer", chinese_answer: "作家", chinese_romanization: "zuòjiā" },
            { option: "C", answer: "listener", chinese_answer: "听众", chinese_romanization: "tīngzhòng" },
            { option: "D", answer: "observer", chinese_answer: "观察者", chinese_romanization: "guānchá zhě" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'orator' means a public speaker, especially one who is eloquent or skilled." +
            "<br><br>" +
            "(B) 'writer' means a person who has written a particular text." +
            "<br><br>" +
            "(C) 'listener' means a person who listens, especially someone who does so in an attentive manner." +
            "<br><br>" +
            "(D) 'observer' means a person who watches or notices something.",
        chinese_explanation: "(A) '演说家' 一词意味着公开演讲者，特别是雄辩或技巧娴熟的演讲者。" +
            "<br><br>" +
            "(B) '作家' 意味着写某一特定文本的人。" +
            "<br><br>" +
            "(C) '听众' 意味着听的人，尤其是以一种专心的方式听的人。" +
            "<br><br>" +
            "(D) '观察者' 意味着观察或注意某事的人。"
    },
    {
        id: 5,
        question: "When the experiment failed spectacularly, the scientists looked at each other in __________, not knowing how to proceed.",
        chinese_question: "当实验出乎意料地失败时，科学家们互相看着对方，陷入了 __________，不知道该如何继续。",
        answers: [
            { option: "A", answer: "delight", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "B", answer: "relief", chinese_answer: "宽慰", chinese_romanization: "kuānwèi" },
            { option: "C", answer: "satisfaction", chinese_answer: "满意", chinese_romanization: "mǎnyì" },
            { option: "D", answer: "consternation", chinese_answer: "惊愕", chinese_romanization: "jīng'è" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'consternation' means feelings of anxiety or dismay, typically at something unexpected." +
            "<br><br>" +
            "(A) 'delight' means great pleasure." +
            "<br><br>" +
            "(B) 'relief' means a feeling of reassurance and relaxation following release from anxiety or distress." +
            "<br><br>" +
            "(C) 'satisfaction' means fulfillment of one's wishes, expectations, or needs, or the pleasure derived from this.",
        chinese_explanation: "(D) '惊愕' 意味着通常在意外事件发生时的焦虑或惊慌的感觉。" +
            "<br><br>" +
            "(A) '高兴' 意味着极大的愉悦。" +
            "<br><br>" +
            "(B) '宽慰' 意味着从焦虑或痛苦中解脱后的一种放心和放松的感觉。" +
            "<br><br>" +
            "(C) '满意' 意味着满足一个人的愿望、期望或需求，或从中获得的愉悦。"
    },
    {
        id: 6,
        question: "Both parties reached an __________ after lengthy negotiations, agreeing to the terms that would benefit both sides.",
        chinese_question: "经过长时间的谈判，双方达成了 __________，同意有利于双方的条款。",
        answers: [
            { option: "A", answer: "disagreement", chinese_answer: "分歧", chinese_romanization: "fēnqí" },
            { option: "B", answer: "dispute", chinese_answer: "争议", chinese_romanization: "zhēngyì" },
            { option: "C", answer: "agreement", chinese_answer: "协议", chinese_romanization: "xiéyì" },
            { option: "D", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'agreement' means harmony or accordance in opinion or feeling." +
            "<br><br>" +
            "(A) 'disagreement' means lack of consensus or approval." +
            "<br><br>" +
            "(B) 'dispute' means a disagreement, argument, or debate." +
            "<br><br>" +
            "(D) 'conflict' means a serious disagreement or argument, typically a protracted one.",
        chinese_explanation: "(C) '协议' 一词意味着意见或感觉上的和谐或一致。" +
            "<br><br>" +
            "(A) '分歧' 意味着缺乏共识或批准。" +
            "<br><br>" +
            "(B) '争议' 意味着分歧、争论或辩论。" +
            "<br><br>" +
            "(D) '冲突' 意味着严重的分歧或争论，通常是长期的。"
    },
    {
        id: 7,
        question: "As a real estate __________, she helped clients buy and sell properties, ensuring smooth transactions and satisfied customers.",
        chinese_question: "作为一名房地产 __________，她帮助客户买卖房产，确保交易顺利进行，并让客户满意。",
        answers: [
            { option: "A", answer: "lawyer", chinese_answer: "律师", chinese_romanization: "lǜshī" },
            { option: "B", answer: "agent", chinese_answer: "代理", chinese_romanization: "dàilǐ" },
            { option: "C", answer: "manager", chinese_answer: "经理", chinese_romanization: "jīnglǐ" },
            { option: "D", answer: "banker", chinese_answer: "银行家", chinese_romanization: "yínháng jiā" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'agent' means a person who acts on behalf of another person or group." +
            "<br><br>" +
            "(A) 'lawyer' means a person who practices or studies law; an attorney or a counselor." +
            "<br><br>" +
            "(C) 'manager' means a person responsible for controlling or administering an organization or group of staff." +
            "<br><br>" +
            "(D) 'banker' means a person who manages or owns a bank or group of banks.",
        chinese_explanation: "(B) '代理' 一词意味着代表另一人或团体行事的人。" +
            "<br><br>" +
            "(A) '律师' 意味着从事或学习法律的人；律师或顾问。" +
            "<br><br>" +
            "(C) '经理' 意味着负责控制或管理组织或员工群体的人。" +
            "<br><br>" +
            "(D) '银行家' 意味着管理或拥有银行或银行集团的人。"
    },
    {
        id: 8,
        question: "The fans' __________ for the pop star was evident in their enthusiastic cheers and elaborate signs at the concert.",
        chinese_question: "粉丝们对流行歌星的 __________ 在他们热情的欢呼和演唱会上精心制作的标志中显而易见。",
        answers: [
            { option: "A", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "disdain", chinese_answer: "蔑视", chinese_romanization: "mièshì" },
            { option: "C", answer: "adoration", chinese_answer: "崇拜", chinese_romanization: "chóngbài" },
            { option: "D", answer: "apathy", chinese_answer: "无动于衷", chinese_romanization: "wú dòng yú zhōng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'adoration' means deep love and respect." +
            "<br><br>" +
            "(A) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(B) 'disdain' means the feeling that someone or something is unworthy of one's consideration or respect; contempt." +
            "<br><br>" +
            "(D) 'apathy' means lack of interest, enthusiasm, or concern.",
        chinese_explanation: "(C) '崇拜' 一词意味着深深的爱和尊敬。" +
            "<br><br>" +
            "(A) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(B) '蔑视' 意味着认为某人或某事不值得考虑或尊重的感觉；蔑视。" +
            "<br><br>" +
            "(D) '无动于衷' 意味着缺乏兴趣、热情或关注。"
    },
    {
        id: 9,
        question: "The mechanic made a slight __________ to the engine to improve its performance and efficiency.",
        chinese_question: "技师对发动机进行了轻微的 __________，以提高其性能和效率。",
        answers: [
            { option: "A", answer: "deviation", chinese_answer: "偏离", chinese_romanization: "piānlí" },
            { option: "B", answer: "adjustment", chinese_answer: "调整", chinese_romanization: "tiáozhěng" },
            { option: "C", answer: "malfunction", chinese_answer: "故障", chinese_romanization: "gùzhàng" },
            { option: "D", answer: "error", chinese_answer: "错误", chinese_romanization: "cuòwù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'adjustment' means a small alteration or movement made to achieve a desired fit, appearance, or result." +
            "<br><br>" +
            "(A) 'deviation' means the action of departing from an established course or accepted standard." +
            "<br><br>" +
            "(C) 'malfunction' means a failure to function in a normal or satisfactory manner." +
            "<br><br>" +
            "(D) 'error' means a mistake.",
        chinese_explanation: "(B) '调整' 一词意味着为达到所需的合适、外观或结果所做的小改动或移动。" +
            "<br><br>" +
            "(A) '偏离' 意味着离开既定路线或接受标准的行为。" +
            "<br><br>" +
            "(C) '故障' 意味着功能失常。" +
            "<br><br>" +
            "(D) '错误' 意味着错误。"
    },
    {
        id: 10,
        question: "The __________ delivered an outstanding performance in the lead role, captivating the audience with his emotional depth and charisma.",
        chinese_question: "__________ 在主角中表现出色，以其情感深度和魅力吸引了观众。",
        answers: [
            { option: "A", answer: "director", chinese_answer: "导演", chinese_romanization: "dǎoyǎn" },
            { option: "B", answer: "writer", chinese_answer: "作家", chinese_romanization: "zuòjiā" },
            { option: "C", answer: "producer", chinese_answer: "制片人", chinese_romanization: "zhìpiàn rén" },
            { option: "D", answer: "actor", chinese_answer: "演员", chinese_romanization: "yǎnyuán" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'actor' means a person whose profession is acting on the stage, in movies, or on television." +
            "<br><br>" +
            "(A) 'director' means a person who supervises the actors, camera crew, and other staff for a movie, play, or similar production." +
            "<br><br>" +
            "(B) 'writer' means a person who has written a particular text." +
            "<br><br>" +
            "(C) 'producer' means a person responsible for the financial and managerial aspects of making a movie or broadcast or for staging a play, opera, etc.",
        chinese_explanation: "(D) '演员' 一词意味着以舞台、电影或电视表演为职业的人。" +
            "<br><br>" +
            "(A) '导演' 意味着监督电影、戏剧或类似制作的演员、摄制组和其他工作人员的人。" +
            "<br><br>" +
            "(B) '作家' 意味着写了一篇特定文本的人。" +
            "<br><br>" +
            "(C) '制片人' 意味着负责电影制作或广播的财务和管理方面或舞台剧、歌剧等的人。"
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
