// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite his advanced __________, he remained active and continued to pursue his passions and hobbies.",
        chinese_question: "尽管 __________ 已高，他仍然保持活跃，并继续追求自己的爱好和兴趣。",
        answers: [
            { option: "A", answer: "youth", chinese_answer: "青年", chinese_romanization: "qīngnián" },
            { option: "B", answer: "age", chinese_answer: "年龄", chinese_romanization: "niánlíng" },
            { option: "C", answer: "adolescence", chinese_answer: "青春期", chinese_romanization: "qīngchūn qī" },
            { option: "D", answer: "infancy", chinese_answer: "婴儿期", chinese_romanization: "yīng'ér qī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'age' means the length of time that a person has lived or a thing has existed." +
            "<br><br>" +
            "(A) 'youth' means the period between childhood and adult age." +
            "<br><br>" +
            "(C) 'adolescence' means the period following the onset of puberty during which a young person develops from a child into an adult." +
            "<br><br>" +
            "(D) 'infancy' means the state or period of early childhood or babyhood.",
        chinese_explanation: "(B) '年龄' 一词意味着一个人活过或事物存在的时间长度。" +
            "<br><br>" +
            "(A) '青年' 意味着童年与成年之间的时期。" +
            "<br><br>" +
            "(C) '青春期' 意味着青春期开始后的时期，在此期间，年轻人从儿童发展到成人。" +
            "<br><br>" +
            "(D) '婴儿期' 意味着早期童年或婴儿期的状态或时期。"
    },
    {
        id: 2,
        question: "The gymnast's __________ was impressive, as she effortlessly executed complex routines with precision and grace.",
        chinese_question: "体操运动员的 __________ 令人印象深刻，她轻松地完成了复杂的动作，动作精准而优雅。",
        answers: [
            { option: "A", answer: "clumsiness", chinese_answer: "笨拙", chinese_romanization: "bènzhuō" },
            { option: "B", answer: "agility", chinese_answer: "敏捷", chinese_romanization: "mǐnjié" },
            { option: "C", answer: "lethargy", chinese_answer: "昏昏欲睡", chinese_romanization: "hūnhūn yù shuì" },
            { option: "D", answer: "sluggishness", chinese_answer: "迟缓", chinese_romanization: "chíhuǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'agility' means the ability to move quickly and easily." +
            "<br><br>" +
            "(A) 'clumsiness' means awkwardness or lack of coordination." +
            "<br><br>" +
            "(C) 'lethargy' means a lack of energy and enthusiasm." +
            "<br><br>" +
            "(D) 'sluggishness' means a lack of energy and alertness.",
        chinese_explanation: "(B) '敏捷' 一词意味着快速和轻松移动的能力。" +
            "<br><br>" +
            "(A) '笨拙' 意味着笨拙或缺乏协调。" +
            "<br><br>" +
            "(C) '昏昏欲睡' 意味着缺乏能量和热情。" +
            "<br><br>" +
            "(D) '迟缓' 意味着缺乏能量和警觉。"
    },
    {
        id: 3,
        question: "The scientist ensured the __________ of the experiment by meticulously following the procedure and recording the data precisely.",
        chinese_question: "科学家通过精心遵循程序并准确记录数据来确保实验的 __________。",
        answers: [
            { option: "A", answer: "inaccuracy", chinese_answer: "不准确", chinese_romanization: "bù zhǔnquè" },
            { option: "B", answer: "approximation", chinese_answer: "近似值", chinese_romanization: "jìnsì zhí" },
            { option: "C", answer: "estimation", chinese_answer: "估计", chinese_romanization: "gūjì" },
            { option: "D", answer: "accuracy", chinese_answer: "准确性", chinese_romanization: "zhǔnquè xìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'accuracy' means the quality or state of being correct or precise." +
            "<br><br>" +
            "(A) 'inaccuracy' means the quality or state of not being accurate." +
            "<br><br>" +
            "(B) 'approximation' means a value or quantity that is nearly but not exactly correct." +
            "<br><br>" +
            "(C) 'estimation' means a rough calculation of the value, number, quantity, or extent of something.",
        chinese_explanation: "(D) '准确性' 一词意味着正确或精确的质量或状态。" +
            "<br><br>" +
            "(A) '不准确' 意味着不准确的质量或状态。" +
            "<br><br>" +
            "(B) '近似值' 意味着接近但不完全正确的值或数量。" +
            "<br><br>" +
            "(C) '估计' 意味着对某物的价值、数量、数量或范围的粗略计算。"
    },
    {
        id: 4,
        question: "Her exceptional __________ to solve complex problems quickly earned her a promotion at work.",
        chinese_question: "她快速解决复杂问题的卓越 __________ 为她在工作中赢得了晋升。",
        answers: [
            { option: "A", answer: "disability", chinese_answer: "残疾", chinese_romanization: "cánjí" },
            { option: "B", answer: "inability", chinese_answer: "无能", chinese_romanization: "wúnéng" },
            { option: "C", answer: "ability", chinese_answer: "能力", chinese_romanization: "nénglì" },
            { option: "D", answer: "incapacity", chinese_answer: "无力", chinese_romanization: "wúlì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ability' means possession of the means or skill to do something." +
            "<br><br>" +
            "(A) 'disability' means a physical or mental condition that limits a person's movements, senses, or activities." +
            "<br><br>" +
            "(B) 'inability' means the state of being unable to do something." +
            "<br><br>" +
            "(D) 'incapacity' means physical or mental inability to do something.",
        chinese_explanation: "(C) '能力' 一词意味着拥有做某事的手段或技能。" +
            "<br><br>" +
            "(A) '残疾' 意味着限制一个人行动、感官或活动的身体或精神状况。" +
            "<br><br>" +
            "(B) '无能' 意味着无法做某事的状态。" +
            "<br><br>" +
            "(D) '无力' 意味着身体或精神上的无能。"
    },
    {
        id: 5,
        question: "Her prolonged __________ from work due to illness caused a backlog of tasks that needed urgent attention.",
        chinese_question: "由于生病，她长期 __________ 工作，导致任务积压，需要紧急处理。",
        answers: [
            { option: "A", answer: "presence", chinese_answer: "出席", chinese_romanization: "chūxí" },
            { option: "B", answer: "absence", chinese_answer: "缺席", chinese_romanization: "quēxí" },
            { option: "C", answer: "arrival", chinese_answer: "到达", chinese_romanization: "dàodá" },
            { option: "D", answer: "attendance", chinese_answer: "参加", chinese_romanization: "cānjiā" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'absence' means the state of being away from a place or person." +
            "<br><br>" +
            "(A) 'presence' means the state or fact of existing, occurring, or being present in a place or thing." +
            "<br><br>" +
            "(C) 'arrival' means the action or process of arriving." +
            "<br><br>" +
            "(D) 'attendance' means the action or state of going regularly to or being present at a place or event.",
        chinese_explanation: "(B) '缺席' 一词意味着离开某个地方或某人的状态。" +
            "<br><br>" +
            "(A) '出席' 意味着存在、发生或出现在某个地方或事物中的状态或事实。" +
            "<br><br>" +
            "(C) '到达' 意味着到达的动作或过程。" +
            "<br><br>" +
            "(D) '参加' 意味着定期去某个地方或活动的行为或状态。"
    },
    {
        id: 6,
        question: "The teacher explained that 'lead' and 'lead' are a __________, meaning they are spelled the same but have different meanings and pronunciations.",
        chinese_question: "老师解释说，“lead”和“lead”是 __________，意思是它们拼写相同但有不同的含义和发音。",
        answers: [
            { option: "A", answer: "synonym", chinese_answer: "同义词", chinese_romanization: "tóngyìcí" },
            { option: "B", answer: "antonym", chinese_answer: "反义词", chinese_romanization: "fǎnyìcí" },
            { option: "C", answer: "homonym", chinese_answer: "同音异义词", chinese_romanization: "tóngyīn yì yìcí" },
            { option: "D", answer: "acronym", chinese_answer: "缩略词", chinese_romanization: "suōlüè cí" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'homonym' means each of two or more words having the same spelling or pronunciation but different meanings and origins." +
            "<br><br>" +
            "(A) 'synonym' means a word or phrase that means exactly or nearly the same as another word or phrase in the same language." +
            "<br><br>" +
            "(B) 'antonym' means a word opposite in meaning to another." +
            "<br><br>" +
            "(D) 'acronym' means an abbreviation formed from the initial letters of other words and pronounced as a word.",
        chinese_explanation: "(C) '同音异义词' 一词意味着两个或多个单词具有相同的拼写或发音，但具有不同的含义和起源。" +
            "<br><br>" +
            "(A) '同义词' 意味着一个词或短语在同一语言中与另一个词或短语的意思完全相同或几乎相同。" +
            "<br><br>" +
            "(B) '反义词' 意味着意思与另一个相反的词。" +
            "<br><br>" +
            "(D) '缩略词' 意味着由其他词的首字母缩写并作为词发音的缩写词。"
    },
    {
        id: 7,
        question: "There was noticeable __________ in the room as the two rivals faced each other.",
        chinese_question: "当两位对手面对面时，房间里充满了明显的 __________。",
        answers: [
            { option: "A", answer: "tension", chinese_answer: "紧张", chinese_romanization: "jǐnzhāng" },
            { option: "B", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "C", answer: "relaxation", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
            { option: "D", answer: "boredom", chinese_answer: "无聊", chinese_romanization: "wúliáo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'tension' means mental or emotional strain." +
            "<br><br>" +
            "(B) 'harmony' means the combination of simultaneously sounded musical notes to produce a pleasing effect." +
            "<br><br>" +
            "(C) 'relaxation' means the state of being free from tension and anxiety." +
            "<br><br>" +
            "(D) 'boredom' means the state of being weary and restless through lack of interest.",
        chinese_explanation: "(A) '紧张' 意味着精神或情感的紧张。" +
            "<br><br>" +
            "(B) '和谐' 意味着同时发出的音符的结合，产生令人愉悦的效果。" +
            "<br><br>" +
            "(C) '放松' 意味着没有紧张和焦虑的状态。" +
            "<br><br>" +
            "(D) '无聊' 意味着由于缺乏兴趣而感到厌倦和不安的状态。"
    },
    {
        id: 8,
        question: "As we entered the new _______, we reflected on the achievements and lessons of the past thousand years.",
        chinese_question: "当我们进入新的________时，我们反思了过去一千年的成就和教训。",
        answers: [
            { option: "A", answer: "century", chinese_answer: "世纪", chinese_romanization: "shìjì" },
            { option: "B", answer: "millennium", chinese_answer: "千年", chinese_romanization: "qiānnián" },
            { option: "C", answer: "decade", chinese_answer: "十年", chinese_romanization: "shínián" },
            { option: "D", answer: "year", chinese_answer: "年", chinese_romanization: "nián" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'millennium' means a period of a thousand years." +
            "<br><br>" +
            "(A) 'century' means a period of one hundred years." +
            "<br><br>" +
            "(C) 'decade' means a period of ten years." +
            "<br><br>" +
            "(D) 'year' means the time taken by a planet to make one revolution around the sun.",
        chinese_explanation: "(B) '千年' 意味着一千年的时期。" +
            "<br><br>" +
            "(A) '世纪' 意味着一百年的时期。" +
            "<br><br>" +
            "(C) '十年' 意味着十年的时期。" +
            "<br><br>" +
            "(D) '年' 意味着行星绕太阳一周所需的时间。"
    },
    {
        id: 9,
        question: "They reached a __________ by each giving up something they wanted in order to end the argument.",
        chinese_question: "他们通过各自放弃一些想要的东西来达成__________，以结束争论。",
        answers: [
            { option: "A", answer: "argument", chinese_answer: "争论", chinese_romanization: "zhēnglùn" },
            { option: "B", answer: "stalemate", chinese_answer: "僵局", chinese_romanization: "jiāngjú" },
            { option: "C", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtú" },
            { option: "D", answer: "compromise", chinese_answer: "妥协", chinese_romanization: "tuǒxié" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'compromise' means an agreement or settlement of a dispute that is reached by each side making concessions." + 
            "<br><br>" + 
            "(A) 'argument' means an exchange of diverging or opposite views, typically a heated or angry one." + 
            "<br><br>" + 
            "(B) 'stalemate' means a situation in which no progress can be made or no advancement is possible." + 
            "<br><br>" + 
            "(C) 'conflict' means a serious disagreement or argument, typically a protracted one.",
        chinese_explanation: "(D) '妥协'一词意味着通过各方做出让步达成的争议或纠纷的协议或解决方案。" + 
            "<br><br>" + 
            "(A) '争论' 意味着分歧或相反意见的交换，通常是激烈或愤怒的。" + 
            "<br><br>" + 
            "(B) '僵局' 意味着无法取得进展或无法推进的情况。" +             
            "<br><br>" + 
            "(C) '冲突' 意味着严重的分歧或争论，通常是长期的。"
    },
    {
        id: 10,
        question: "The new collection of __________ from the designer was highly anticipated by fashion enthusiasts.",
        chinese_question: "设计师的新__________系列备受时尚爱好者的期待。",
        answers: [
            { option: "A", answer: "furniture", chinese_answer: "家具", chinese_romanization: "jiājù" },
            { option: "B", answer: "appliances", chinese_answer: "电器", chinese_romanization: "diànqì" },
            { option: "C", answer: "apparel", chinese_answer: "服装", chinese_romanization: "fúzhuāng" },
            { option: "D", answer: "groceries", chinese_answer: "杂货", chinese_romanization: "záhuò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'apparel' means clothing. Figuratively, it can refer to a specific collection of clothing items." + 
            "<br><br>" + 
            "(A) 'furniture' means large movable equipment, such as tables and chairs, used to make a house, office, or other space suitable for living or working." + 
            "<br><br>" + 
            "(B) 'appliances' means devices or pieces of equipment designed to perform a specific task, typically a domestic one." + 
            "<br><br>" + 
            "(D) 'groceries' means items of food sold in a grocery store.",
        chinese_explanation: "(C) '服装'一词意味着衣物。比喻地，它可以指特定的衣物系列。" + 
            "<br><br>" + 
            "(A) '家具' 意味着大的可移动设备，如桌子和椅子，用来使房子、办公室或其他空间适合居住或工作。" + 
            "<br><br>" + 
            "(B) '电器' 意味着设计用来执行特定任务的设备或设备，通常是家用的。" + 
            "<br><br>" + 
            "(D) '杂货' 意味着在杂货店出售的食品。"
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
