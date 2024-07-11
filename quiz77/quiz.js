// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The student's __________ towards his studies worried his parents and teachers.",
        chinese_question: "学生对学习的 __________ 让他的父母和老师感到担忧。",
        answers: [
            { option: "A", answer: "dedication", chinese_answer: "奉献", chinese_romanization: "fèngxiàn" },
            { option: "B", answer: "interest", chinese_answer: "兴趣", chinese_romanization: "xìngqù" },
            { option: "C", answer: "enthusiasm", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "D", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'apathy' means lack of interest, enthusiasm, or concern." +
            "<br><br>" +
            "(A) 'dedication' means the quality of being dedicated or committed to a task or purpose." +
            "<br><br>" +
            "(B) 'interest' means the feeling of wanting to know or learn about something or someone." +
            "<br><br>" +
            "(C) 'enthusiasm' means intense and eager enjoyment, interest, or approval.",
        chinese_explanation: "(D) '冷漠' 意味着缺乏兴趣、热情或关心。" +
            "<br><br>" +
            "(A) '奉献' 意味着对任务或目的的奉献或承诺的质量。" +
            "<br><br>" +
            "(B) '兴趣' 意味着想知道或了解某事或某人的感觉。" +
            "<br><br>" +
            "(C) '热情' 意味着强烈和热切的享受、兴趣或赞同。"
    },
    {
        id: 2,
        question: "Her __________ was clear when she found out that the long-awaited event had been postponed indefinitely, leaving her feeling frustrated and disappointed.",
        chinese_question: "当她发现期待已久的活动被无限期推迟时，她的 __________ 是显而易见的，令她感到沮丧和失望。",
        answers: [
            { option: "A", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" },
            { option: "B", answer: "dismay", chinese_answer: "沮丧", chinese_romanization: "jǔsàng" },
            { option: "C", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
            { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dismay' means a feeling of unhappiness and disappointment." +
            "<br><br>" +
            "(A) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(C) 'excitement' means a feeling of great enthusiasm and eagerness." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(B) '沮丧' 意思是一种不快乐和失望的感觉。" +
            "<br><br>" +
            "(A) '喜悦' 意思是一种极大的快乐和幸福感。" +
            "<br><br>" +
            "(C) '兴奋' 意思是一种极大的热情和渴望感。" +
            "<br><br>" +
            "(D) '冷漠' 意思是缺乏兴趣、关心或同情。"
    },
    {
        id: 3,
        question: "She threw her hands up in __________, frustrated by her inability to solve the complex problem.",
        chinese_question: "她举起双手表示 __________，对自己无法解决复杂问题感到沮丧。",
        answers: [
            { option: "A", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "B", answer: "exasperation", chinese_answer: "恼怒", chinese_romanization: "nǎonù" },
            { option: "C", answer: "satisfaction", chinese_answer: "满意", chinese_romanization: "mǎnyì" },
            { option: "D", answer: "contentment", chinese_answer: "满足", chinese_romanization: "mǎnzú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'exasperation' means a feeling of intense irritation or annoyance." +
            "<br><br>" +
            "(A) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(C) 'satisfaction' means fulfillment of one's wishes, expectations, or needs." +
            "<br><br>" +
            "(D) 'contentment' means a state of happiness and satisfaction.",
        chinese_explanation: "(B) '恼怒' 一词意味着强烈的恼怒或烦恼的感觉。" +
            "<br><br>" +
            "(A) '快乐' 意味着极大的愉快和幸福的感觉。" +
            "<br><br>" +
            "(C) '满意' 意味着满足自己的愿望、期望或需求。" +
            "<br><br>" +
            "(D) '满足' 意味着幸福和满足的状态。"
    },
    {
        id: 4,
        question: "The harsh winters were the __________ of the farmers, causing significant damage to their crops every year.",
        chinese_question: "严寒的冬天是农民们的 __________，每年都会对他们的农作物造成重大损失。",
        answers: [
            { option: "A", answer: "blessing", chinese_answer: "祝福", chinese_romanization: "zhùfú" },
            { option: "B", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "C", answer: "bane", chinese_answer: "祸根", chinese_romanization: "huògēn" },
            { option: "D", answer: "benefit", chinese_answer: "好处", chinese_romanization: "hǎochù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bane' means a cause of great distress or annoyance." +
            "<br><br>" +
            "(A) 'blessing' means a beneficial thing for which one is grateful." +
            "<br><br>" +
            "(B) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(D) 'benefit' means an advantage or profit gained from something.",
        chinese_explanation: "(C) '祸根' 意味着极大痛苦或烦恼的原因。" +
            "<br><br>" +
            "(A) '祝福' 意味着令人感激的有益事物。" +
            "<br><br>" +
            "(B) '快乐' 意味着极大的愉快和幸福。" +
            "<br><br>" +
            "(D) '好处' 意味着从某事中获得的优势或利益。"
    },
    {
        id: 5,
        question: "They worked as a __________ to complete the project before the deadline.",
        chinese_question: "他们作为一个 __________ 一起工作，在截止日期前完成项目。",
        answers: [
            { option: "A", answer: "team", chinese_answer: "团队", chinese_romanization: "tuánduì" },
            { option: "B", answer: "loner", chinese_answer: "独行者", chinese_romanization: "dúxíng zhě" },
            { option: "C", answer: "critic", chinese_answer: "批评者", chinese_romanization: "pīpíng zhě" },
            { option: "D", answer: "outsider", chinese_answer: "局外人", chinese_romanization: "júwàirén" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'team' metaphorically means a group of people working together to achieve a common goal." + 
            "<br><br>" + 
            "(B) 'loner' means a person who prefers not to associate with others." + 
            "<br><br>" + 
            "(C) 'critic' means a person who expresses an unfavorable opinion of something." + 
            "<br><br>" + 
            "(D) 'outsider' means a person who does not belong to a particular group.",
        chinese_explanation: "(A) '团队' 比喻一群人为实现共同目标而一起工作。" + 
            "<br><br>" + 
            "(B) '独行者' 意味着不愿与他人交往的人。" + 
            "<br><br>" + 
            "(C) '批评者' 意味着对某事表达不利意见的人。" + 
            "<br><br>" + 
            "(D) '局外人' 意味着不属于特定群体的人。"
    },
    {
        id: 6,
        question: "The hikers went through a terrible __________ when they got lost in the forest.",
        chinese_question: "徒步旅行者在森林里迷路时经历了一场可怕的 __________。",
        answers: [
            { option: "A", answer: "ordeal", chinese_answer: "考验", chinese_romanization: "kǎoyàn" },
            { option: "B", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "C", answer: "adventure", chinese_answer: "冒险", chinese_romanization: "màoxiǎn" },
            { option: "D", answer: "journey", chinese_answer: "旅程", chinese_romanization: "lǚchéng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ordeal' means a painful or horrific experience, especially a protracted one." + 
            "<br><br>" + 
            "(B) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity." + 
            "<br><br>" + 
            "(C) 'adventure' means an unusual and exciting, typically hazardous, experience or activity." + 
            "<br><br>" + 
            "(D) 'journey' means an act of traveling from one place to another.",
        chinese_explanation: "(A) '考验' 意味着痛苦或可怕的经历，尤其是漫长的经历。" + 
            "<br><br>" + 
            "(B) '庆祝' 意味着通过参与愉快的、通常是社交活动来标志一个重要事件或场合的行动。" + 
            "<br><br>" + 
            "(C) '冒险' 意味着不寻常的和令人兴奋的，通常是危险的经历或活动。" + 
            "<br><br>" + 
            "(D) '旅程' 意味着从一个地方到另一个地方的旅行行为。"
    },
    {
        id: 7,
        question: "His reputation for __________ and honesty made him the ideal candidate for the leadership position.",
        chinese_question: "他以 __________ 和诚实著称，使他成为领导职位的理想人选。",
        answers: [
            { option: "A", answer: "dishonesty", chinese_answer: "不诚实", chinese_romanization: "bù chéngshí" },
            { option: "B", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
            { option: "C", answer: "deceit", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
            { option: "D", answer: "corruption", chinese_answer: "腐败", chinese_romanization: "fǔbài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'integrity' means the quality of being honest and having strong moral principles; moral uprightness." +
            "<br><br>" +
            "'dishonesty' means deceitfulness shown in someone's character or behavior." +
            "<br><br>" +
            "'deceit' means the action or practice of deceiving someone by concealing or misrepresenting the truth." +
            "<br><br>" +
            "'corruption' means dishonest or fraudulent conduct by those in power, typically involving bribery.",
        chinese_explanation: "(B) '正直' 一词意味着诚实并具有强烈道德原则的品质；道德正直。" +
            "<br><br>" +
            "'不诚实' 意味着在某人的性格或行为中表现出的欺骗性。" +
            "<br><br>" +
            "'欺骗' 意味着通过隐瞒或歪曲事实来欺骗某人的行为或做法。" +
            "<br><br>" +
            "'腐败' 意味着当权者的欺骗或欺诈行为，通常涉及贿赂。"
    },
    {
        id: 8,
        question: "The region's __________ is known for its heavy rainfall and high humidity.",
        chinese_question: "该地区的 __________ 以降雨量大和湿度高而闻名。",
        answers: [
            { option: "A", answer: "climate", chinese_answer: "气候", chinese_romanization: "qìhòu" },
            { option: "B", answer: "weather", chinese_answer: "天气", chinese_romanization: "tiānqì" },
            { option: "C", answer: "season", chinese_answer: "季节", chinese_romanization: "jìjié" },
            { option: "D", answer: "atmosphere", chinese_answer: "大气", chinese_romanization: "dàqì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'climate' means the weather conditions prevailing in an area in general or over a long period." + 
            "<br><br>" + 
            "(B) 'weather' means the state of the atmosphere at a place and time as regards heat, dryness, sunshine, wind, rain, etc." + 
            "<br><br>" + 
            "(C) 'season' means each of the four divisions of the year (spring, summer, autumn, and winter) marked by particular weather patterns and daylight hours, resulting from the earth's changing position with regard to the sun." + 
            "<br><br>" + 
            "(D) 'atmosphere' means the envelope of gases surrounding the earth or another planet.",
        chinese_explanation: "(A) '气候' 意味着一个地区普遍或长期的天气条件。" + 
            "<br><br>" + 
            "(B) '天气' 意味着某地和某时的大气状态，包括热、干燥、阳光、风、雨等。" + 
            "<br><br>" + 
            "(C) '季节' 意味着一年四季中的每一个划分（春、夏、秋、冬），由特定的天气模式和日照时间标志，由地球相对于太阳的位置变化引起的。" + 
            "<br><br>" + 
            "(D) '大气' 意味着包围地球或其他行星的气体包层。"
    },
    {
        id: 9,
        question: "The museum displayed a __________ of the ancient artifact, as the original was too fragile to be exhibited.",
        chinese_question: "博物馆展示了一件古代文物的 __________，因为原件太脆弱，无法展出。",
        answers: [
            { option: "A", answer: "masterpiece", chinese_answer: "杰作", chinese_romanization: "jiézuò" },
            { option: "B", answer: "original", chinese_answer: "原件", chinese_romanization: "yuánjiàn" },
            { option: "C", answer: "replica", chinese_answer: "复制品", chinese_romanization: "fùzhìpǐn" },
            { option: "D", answer: "fragment", chinese_answer: "碎片", chinese_romanization: "suìpiàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'replica' means an exact copy or model of something, especially one on a smaller scale." +
            "<br><br>" +
            "(A) 'masterpiece' means a work of outstanding artistry, skill, or workmanship." +
            "<br><br>" +
            "(B) 'original' means the first form of something, from which copies may be made." +
            "<br><br>" +
            "(D) 'fragment' means a small part broken or separated off something.",
        chinese_explanation: "(C) '复制品' 意思是某物的精确复制品或模型，尤其是按较小比例制作的。" +
            "<br><br>" +
            "(A) '杰作' 意思是杰出的艺术、技艺或工艺作品。" +
            "<br><br>" +
            "(B) '原件' 意思是某物的第一个形式，可以从中制作副本。" +
            "<br><br>" +
            "(D) '碎片' 意思是某物破裂或分离出的一个小部分。"
    },
    {
        id: 10,
        question: "The engine is a critical __________ of the car, and without it, the vehicle cannot run.",
        chinese_question: "发动机是汽车的关键 __________，没有它，车辆无法运行。",
        answers: [
            { option: "A", answer: "decoration", chinese_answer: "装饰", chinese_romanization: "zhuāngshì" },
            { option: "B", answer: "component", chinese_answer: "组件", chinese_romanization: "zǔjiàn" },
            { option: "C", answer: "accessory", chinese_answer: "配件", chinese_romanization: "pèijiàn" },
            { option: "D", answer: "ornament", chinese_answer: "装饰品", chinese_romanization: "zhuāngshì pǐn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'component' means a part or element of a larger whole." +
            "<br><br>" +
            "(A) 'decoration' means the process or art of decorating or adorning something." +
            "<br><br>" +
            "(C) 'accessory' means a thing which can be added to something else to make it more useful, versatile, or attractive." +
            "<br><br>" +
            "(D) 'ornament' means a thing used to make something look more attractive but usually having no practical purpose.",
        chinese_explanation: "(B) '组件' 一词意味着一个较大整体的一部分或元素。" +
            "<br><br>" +
            "'装饰' 意味着装饰或装饰某物的过程或艺术。" +
            "<br><br>" +
            "'配件' 意味着可以添加到其他事物中的物品，使其更有用、多功能或有吸引力。" +
            "<br><br>" +
            "'装饰品' 意味着用于使某物看起来更有吸引力的物品，但通常没有实际用途。"
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
