// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ woman volunteered at the animal shelter every weekend, always ready to help.",
        chinese_question: "这位 __________ 的女士每个周末都在动物收容所做志愿者，总是准备好帮助别人。",
        answers: [
            { option: "A", answer: "cruel", chinese_answer: "残忍", chinese_romanization: "cánrěn" },
            { option: "B", answer: "harsh", chinese_answer: "严厉", chinese_romanization: "yánlì" },
            { option: "C", answer: "kindhearted", chinese_answer: "善良", chinese_romanization: "shànliáng" },
            { option: "D", answer: "mean", chinese_answer: "刻薄", chinese_romanization: "kèbó" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'kindhearted' means having a kind and sympathetic nature." +
            "<br><br>" +
            "(A) 'cruel' means willfully causing pain or suffering to others, or feeling no concern about it." +
            "<br><br>" +
            "(B) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(D) 'mean' means unkind, spiteful, or unfair.",
        chinese_explanation: "(C) '善良' 意味着具有善良和同情心的性格。" +
            "<br><br>" +
            "(A) '残忍' 意味着故意造成他人痛苦或苦难，或对此毫不关心。" +
            "<br><br>" +
            "(B) '严厉' 意味着对感官不愉快地粗糙或刺耳。" +
            "<br><br>" +
            "(D) '刻薄' 意味着不友善、恶毒或不公平。"
    },
    {
        id: 2,
        question: "The student's comment was __________ to the topic of discussion, confusing everyone.",
        chinese_question: "学生的评论与讨论的主题 __________，让大家感到困惑。",
        answers: [
            { option: "A", answer: "irrelevant", chinese_answer: "无关", chinese_romanization: "wúguān" },
            { option: "B", answer: "pertinent", chinese_answer: "相关", chinese_romanization: "xiāngguān" },
            { option: "C", answer: "relevant", chinese_answer: "贴切", chinese_romanization: "tiēqiè" },
            { option: "D", answer: "applicable", chinese_answer: "适用", chinese_romanization: "shìyòng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'irrelevant' means not connected with or relevant to something." +
            "<br><br>" +
            "(B) 'pertinent' means relevant or applicable to a particular matter." +
            "<br><br>" +
            "(C) 'relevant' means closely connected or appropriate to what is being done or considered." +
            "<br><br>" +
            "(D) 'applicable' means relevant or appropriate.",
        chinese_explanation: "(A) '无关' 意味着与某事无关或不相关。" +
            "<br><br>" +
            "(B) '相关' 意味着与特定事项相关或适用。" +
            "<br><br>" +
            "(C) '贴切' 意味着与正在做或考虑的事情密切相关或适当的。" +
            "<br><br>" +
            "(D) '适用' 意味着相关或适当的。"
    },
    {
        id: 3,
        question: "The scientist made a __________ discovery that changed the field of genetics.",
        chinese_question: "这位科学家做出了 __________ 的发现，改变了遗传学领域。",
        answers: [
            { option: "A", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐn yào de" },
            { option: "B", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "C", answer: "notable", chinese_answer: "显著的", chinese_romanization: "xiǎnzhù de" },
            { option: "D", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'notable' means worthy of attention or notice; remarkable." +
            "<br><br>" +
            "(A) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(B) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(D) 'minor' means lesser in importance, seriousness, or significance.",
        chinese_explanation: "'显著的' 一词意味着值得注意的；显著的。" +
            "<br><br>" +
            "(A) '无关紧要的' 意味着太小或不重要，不值得考虑的。" +
            "<br><br>" +
            "(B) '微不足道的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(D) '次要的' 意味着在重要性、严重性或意义上较小的。"
    },
    {
        id: 4,
        question: "She made the __________ decision to save her money rather than spend it on unnecessary items.",
        chinese_question: "她做出了 __________ 的决定，把钱存起来而不是花在不必要的东西上。",
        answers: [
            { option: "A", answer: "reckless", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
            { option: "B", answer: "imprudent", chinese_answer: "轻率", chinese_romanization: "qīngshuài" },
            { option: "C", answer: "prudent", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
            { option: "D", answer: "hasty", chinese_answer: "草率", chinese_romanization: "cǎoshuài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prudent' means acting with or showing care and thought for the future." +
            "<br><br>" +
            "(A) 'reckless' means without thinking or caring about the consequences of an action." +
            "<br><br>" +
            "(B) 'imprudent' means not showing care for the consequences of an action; rash." +
            "<br><br>" +
            "(D) 'hasty' means done or acting with excessive speed or urgency.",
        chinese_explanation: "(C) '谨慎' 一词意味着为未来采取或表现出关心和考虑。" +
            "<br><br>" +
            "(A) '鲁莽' 意味着不考虑行动的后果。" +
            "<br><br>" +
            "(B) '轻率' 意味着不为行动的后果考虑；轻率的。" +
            "<br><br>" +
            "(D) '草率' 意味着以过快的速度或紧迫性完成或行动。"
    },
    {
        id: 5,
        question: "Her __________ nature made her well-loved in the community, as she was always willing to help those in need.",
        chinese_question: "她的 __________ 性格使她在社区中深受爱戴，因为她总是愿意帮助那些有需要的人。",
        answers: [
            { option: "A", answer: "benevolent", chinese_answer: "慈善的", chinese_romanization: "císhàn de" },
            { option: "B", answer: "cruel", chinese_answer: "残酷的", chinese_romanization: "cánkù de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'benevolent' means well-meaning and kindly." +
            "<br><br>" +
            "(B) 'cruel' means willfully causing pain or suffering to others, or feeling no concern about it." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'hostile' means unfriendly; antagonistic.",
        chinese_explanation: "(A) '慈善的' 一词意味着善意和友好的。" +
            "<br><br>" +
            "(B) '残酷的' 意味着故意对他人造成痛苦或痛苦，或对其不关心。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '敌对的' 意味着不友好的；敌对的。"
    },
    {
        id: 6,
        question: "The __________ crowd shouted angrily at the speaker, showing their disapproval.",
        chinese_question: "__________的群众愤怒地对演讲者大喊大叫，表示他们的反对。",
        answers: [
            { option: "A", answer: "friendly", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "D", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(A) 'friendly' means kind and pleasant." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(C) 'calm' means not showing or feeling nervousness, anger, or other strong emotions.",
        chinese_explanation: "(D) '敌对的'一词意味着不友好的；对抗的。" +
            "<br><br>" +
            "(A) '友好的' 意味着友善和愉快的。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着没有特别的兴趣或同情。" +
            "<br><br>" +
            "(C) '平静的' 意味着不显示或感觉紧张、愤怒或其他强烈情感。"
    },
    {
        id: 7,
        question: "The palace was filled with __________ decorations, from the intricate carvings on the walls to the elaborate chandeliers hanging from the ceiling.",
        chinese_question: "宫殿充满了__________的装饰，从墙上的复杂雕刻到天花板上悬挂的华丽吊灯。",
        answers: [
            { option: "A", answer: "ornate", chinese_answer: "华丽的", chinese_romanization: "huálì de" },
            { option: "B", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "C", answer: "plain", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" },
            { option: "D", answer: "dull", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ornate' means made in an intricate shape or decorated with complex patterns." +
            "<br><br>" +
            "(B) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(C) 'plain' means not decorated or elaborate; simple or ordinary in character." +
            "<br><br>" +
            "(D) 'dull' means lacking interest or excitement.",
        chinese_explanation: "(A) '华丽的' 一词意味着以复杂的形状制作或用复杂的图案装饰。" +
            "<br><br>" +
            "(B) '简单的' 意味着容易理解或完成；没有难度的。" +
            "<br><br>" +
            "(C) '朴素的' 意味着不装饰或精致的；简单或普通的性格。" +
            "<br><br>" +
            "(D) '无聊的' 意味着缺乏兴趣或兴奋。"
    },
    {
        id: 8,
        question: "The children were __________ as they ran through the park, their laughter echoing in the crisp autumn air.",
        chinese_question: "孩子们在公园里奔跑时充满 __________，他们的笑声在清爽的秋空气中回荡。",
        answers: [
            { option: "A", answer: "gleeful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "B", answer: "sad", chinese_answer: "悲伤的", chinese_romanization: "bēishāng de" },
            { option: "C", answer: "serious", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
            { option: "D", answer: "somber", chinese_answer: "阴沉的", chinese_romanization: "yīnchén de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'gleeful' means exuberantly or triumphantly joyful." +
            "<br><br>" +
            "(B) 'sad' means feeling or showing sorrow; unhappy." +
            "<br><br>" +
            "(C) 'serious' means solemn or thoughtful in character or manner." +
            "<br><br>" +
            "(D) 'somber' means dark or dull in color or tone; gloomy.",
        chinese_explanation: "(A) '快乐的' 意味着兴高采烈或胜利地快乐。" +
            "<br><br>" +
            "(B) '悲伤的' 意味着感到或表现出悲伤的；不开心的。" +
            "<br><br>" +
            "(C) '严肃的' 意味着性格或举止庄重或认真的。" +
            "<br><br>" +
            "(D) '阴沉的' 意味着颜色或色调深沉或暗淡的；阴郁的。"
    },
    {
        id: 9,
        question: "The group took a __________ stance, ready to fight for their cause if necessary.",
        chinese_question: "该组织采取了__________的立场，如果有必要，他们准备为自己的事业而战。",
        answers: [
            { option: "A", answer: "peaceful", chinese_answer: "和平的", chinese_romanization: "hépíng de" },
            { option: "B", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" },
            { option: "C", answer: "militant", chinese_answer: "好战的", chinese_romanization: "hàozhàn de" },
            { option: "D", answer: "docile", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'militant' means combative and aggressive in support of a political or social cause." +
            "<br><br>" +
            "(A) 'peaceful' means free from disturbance; tranquil." +
            "<br><br>" +
            "(B) 'passive' means accepting or allowing what happens or what others do, without active response or resistance." +
            "<br><br>" +
            "(D) 'docile' means ready to accept control or instruction; submissive.",
        chinese_explanation: "(C) '好战的'一词意味着以支持政治或社会事业的战斗性和侵略性。" +
            "<br><br>" +
            "(A) '和平的' 意味着没有干扰的；宁静的。" +
            "<br><br>" +
            "(B) '被动的' 意味着接受或允许发生的事情或他人所做的事情，没有积极回应或抵抗的。" +
            "<br><br>" +
            "(D) '顺从的' 意味着准备接受控制或指示的；顺从的。"
    },
    {
        id: 10,
        question: "The couple's wedding was a __________ affair, with extravagant decorations and gourmet food.",
        chinese_question: "这对夫妻的婚礼是一场__________的盛会，装饰豪华，食品美味。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "B", answer: "modest", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" },
            { option: "C", answer: "lavish", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" },
            { option: "D", answer: "austere", chinese_answer: "严格的", chinese_romanization: "yángé de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lavish' means sumptuously rich, elaborate, or luxurious." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(B) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'austere' means severe or strict in manner, attitude, or appearance.",
        chinese_explanation: "(C) '奢华的'一词意味着豪华的、精美的或奢侈的。" +
            "<br><br>" +
            "(A) '简单的' 意味着容易理解或完成的；没有困难的。" +
            "<br><br>" +
            "(B) '朴素的' 意味着对自己的能力或成就估计谦逊的或适度的。" +
            "<br><br>" +
            "(D) '严格的' 意味着在举止、态度或外表上严厉的。"
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
