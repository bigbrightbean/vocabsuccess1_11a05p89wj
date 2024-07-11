// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ behavior made it difficult for him to form meaningful relationships, as he was always focused on himself.",
        chinese_question: "他的 __________ 行为使他难以建立有意义的关系，因为他总是专注于自己。",
        answers: [
            { option: "A", answer: "selfless", chinese_answer: "无私的", chinese_romanization: "wúsī de" },
            { option: "B", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "C", answer: "narcissistic", chinese_answer: "自恋的", chinese_romanization: "zìliàn de" },
            { option: "D", answer: "altruistic", chinese_answer: "利他的", chinese_romanization: "lìtā de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'narcissistic' means having an excessive interest in or admiration of oneself and one's physical appearance." +
            "<br><br>" +
            "(A) 'selfless' means concerned more with the needs and wishes of others than with one's own; unselfish." +
            "<br><br>" +
            "(B) 'humble' means having or showing a modest or low estimate of one's own importance." +
            "<br><br>" +
            "(D) 'altruistic' means showing a disinterested and selfless concern for the well-being of others; unselfish.",
        chinese_explanation: "'自恋的' 意味着对自己和自己的外貌有过度的兴趣或钦佩。" +
            "<br><br>" +
            "(A) '无私的' 意味着更多地关心他人的需求和愿望，而不是自己的；无私的。" +
            "<br><br>" +
            "(B) '谦逊的' 意味着对自己的重要性有或表现出谦虚的估计。" +
            "<br><br>" +
            "(D) '利他的' 意味着对他人的幸福表现出无私的关心；无私的。"
    },
    {
        id: 2,
        question: "His __________ attitude in meetings often stifled others' contributions, making it difficult for team members to express their ideas.",
        chinese_question: "他在会议上的 __________ 态度常常压制其他人的贡献，使团队成员难以表达他们的想法。",
        answers: [
            { option: "A", answer: "overbearing", chinese_answer: "专横的", chinese_romanization: "zhuānhéng de" },
            { option: "B", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
            { option: "C", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "D", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'overbearing' means unpleasantly or arrogantly domineering." +
            "<br><br>" +
            "(B) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(C) 'humble' means having or showing a modest or low estimate of one's own importance." +
            "<br><br>" +
            "(D) 'passive' means accepting or allowing what happens or what others do, without active response or resistance.",
        chinese_explanation: "(A) '专横的' 意味着令人不快或傲慢地专横的。" +
            "<br><br>" +
            "(B) '支持的' 意味着提供鼓励或情感上的帮助。" +
            "<br><br>" +
            "(C) '谦逊的' 意味着对自己的重要性有或表现出谦虚或低估的态度。" +
            "<br><br>" +
            "(D) '被动的' 意味着接受或允许发生的事情或他人的行为，而没有积极的反应或抵抗。"
    },
    {
        id: 3,
        question: "He looked __________ after being hit on the head during the game.",
        chinese_question: "在比赛中被击中头部后，他看起来 __________。",
        answers: [
            { option: "A", answer: "dazed", chinese_answer: "迷茫的", chinese_romanization: "mímáng de" },
            { option: "B", answer: "alert", chinese_answer: "警觉的", chinese_romanization: "jǐngjué de" },
            { option: "C", answer: "focused", chinese_answer: "专注的", chinese_romanization: "zhuānzhù de" },
            { option: "D", answer: "cheerful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dazed' means unable to think or react properly; bewildered." +
            "<br><br>" +
            "(B) 'alert' means quick to notice any unusual and potentially dangerous or difficult circumstances." +
            "<br><br>" +
            "(C) 'focused' means directing a great deal of attention, interest, or activity towards a particular aim." +
            "<br><br>" +
            "(D) 'cheerful' means noticeably happy and optimistic.",
        chinese_explanation: "(A) '迷茫的' 意味着不能正确思考或反应的；困惑的。" +
            "<br><br>" +
            "(B) '警觉的' 意味着迅速注意到任何不寻常和潜在危险或困难的情况。" +
            "<br><br>" +
            "(C) '专注的' 意味着将大量注意力、兴趣或活动集中于特定目标。" +
            "<br><br>" +
            "(D) '快乐的' 意味着显著的快乐和乐观。"
    },
    {
        id: 4,
        question: "The fashion show featured __________ outfits that showcased the latest trends in elegance and style.",
        chinese_question: "时装秀展示了 __________ 的服装，展示了优雅和时尚的最新趋势。",
        answers: [
            { option: "A", answer: "outdated", chinese_answer: "过时的", chinese_romanization: "guòshí de" },
            { option: "B", answer: "plain", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" },
            { option: "C", answer: "chic", chinese_answer: "时髦的", chinese_romanization: "shímáo de" },
            { option: "D", answer: "shabby", chinese_answer: "破旧的", chinese_romanization: "pòjiù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'chic' means elegantly and stylishly fashionable." +
            "<br><br>" +
            "(A) 'outdated' means old-fashioned or obsolete." +
            "<br><br>" +
            "(B) 'plain' means not decorated or elaborate; simple or ordinary in character." +
            "<br><br>" +
            "(D) 'shabby' means in poor condition through long use or lack of care.",
        chinese_explanation: "(C) '时髦的' 意味着优雅和时尚地时髦。" +
            "<br><br>" +
            "(A) '过时的' 意味着老式的或过时的。" +
            "<br><br>" +
            "(B) '朴素的' 意味着不装饰或不复杂；简单或普通的性格。" +
            "<br><br>" +
            "(D) '破旧的' 意味着由于长期使用或缺乏保养而状况不佳。"
    },
    {
        id: 5,
        question: "He felt __________ when he didn't get the promotion he had worked so hard for.",
        chinese_question: "当他没有得到他辛苦争取的升职时，他感到__________。",
        answers: [
            { option: "A", answer: "pleased", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" },
            { option: "B", answer: "excited", chinese_answer: "兴奋的", chinese_romanization: "xīngfèn de" },
            { option: "C", answer: "disappointed", chinese_answer: "失望的", chinese_romanization: "shīwàng de" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'disappointed' means sad or displeased because someone or something has failed to fulfill one's hopes or expectations." +
            "<br><br>" +
            "(A) 'pleased' means feeling or showing pleasure and satisfaction." +
            "<br><br>" +
            "(B) 'excited' means very enthusiastic and eager." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy.",
        chinese_explanation: "(C) '失望的'一词意味着因为某人或某事未能实现自己的希望或期望而感到难过或不满。" +
            "<br><br>" +
            "(A) '高兴的' 意味着感到或表现出快乐和满足。" +
            "<br><br>" +
            "(B) '兴奋的' 意味着非常热情和渴望。" +
            "<br><br>" +
            "(D) '漠不关心的' 意味着没有特别的兴趣或同情。"
    },
    {
        id: 6,
        question: "The haunted house was filled with __________ decorations that terrified the visitors.",
        chinese_question: "鬼屋里充满了 __________ 的装饰，吓坏了游客。",
        answers: [
            { option: "A", answer: "beautiful", chinese_answer: "美丽的", chinese_romanization: "měilì de" },
            { option: "B", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "C", answer: "ghastly", chinese_answer: "可怕的", chinese_romanization: "kěpà de" },
            { option: "D", answer: "delightful", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ghastly' means causing great horror or fear." +
            "<br><br>" +
            "(A) 'beautiful' means pleasing the senses or mind aesthetically." +
            "<br><br>" +
            "(B) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(D) 'delightful' means causing delight; charming.",
        chinese_explanation: "(C) '可怕的' 一词意味着引起极大恐惧或害怕的。" +
            "<br><br>" +
            "(A) '美丽的' 意味着在美学上愉悦感官或心灵的。" +
            "<br><br>" +
            "(B) '愉快的' 意味着给予幸福的满足感或享受。" +
            "<br><br>" +
            "(D) '令人愉快的' 意味着引起愉悦的；迷人的。"
    },
    {
        id: 7,
        question: "The market was filled with __________ fruits and spices from distant lands.",
        chinese_question: "市场上满是来自遥远国度的 __________ 水果和香料。",
        answers: [
            { option: "A", answer: "exotic", chinese_answer: "异国的", chinese_romanization: "yìguó de" },
            { option: "B", answer: "common", chinese_answer: "常见的", chinese_romanization: "chángjiàn de" },
            { option: "C", answer: "local", chinese_answer: "当地的", chinese_romanization: "dāngdì de" },
            { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'exotic' means originating in or characteristic of a distant foreign country." +
            "<br><br>" +
            "(B) 'common' means occurring, found, or done often; prevalent." +
            "<br><br>" +
            "(C) 'local' means belonging or relating to a particular area or neighborhood, typically exclusively so." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(A) '异国的' 意味着源自或特征为遥远外国的。" +
            "<br><br>" +
            "(B) '常见的' 意味着经常发生、发现或完成的；流行的。" +
            "<br><br>" +
            "(C) '当地的' 意味着属于或与特定地区或邻里有关，通常是独有的。" +
            "<br><br>" +
            "(D) '普通的' 意味着没有特别或独特的特征；正常的。"
    },
    {
        id: 8,
        question: "He is an __________ reader, often finishing several books in a week.",
        chinese_question: "他是一个 __________ 的读者，通常一周能读完几本书。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "B", answer: "avid", chinese_answer: "热衷的", chinese_romanization: "rèzhōng de" },
            { option: "C", answer: "uninterested", chinese_answer: "不感兴趣的", chinese_romanization: "bù gǎn xìngqù de" },
            { option: "D", answer: "dispassionate", chinese_answer: "冷静的", chinese_romanization: "lěngjìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'avid' means having or showing a keen interest in or enthusiasm for something." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'uninterested' means not interested in or concerned about something or someone." +
            "<br><br>" +
            "(D)'dispassionate' means not influenced by strong emotion, and so able to be rational and impartial.",
        chinese_explanation: "(B) '热衷的' 一词意味着对某事表现出强烈兴趣或热情的。" +
            "<br><br>" +
            "(A) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(C) '不感兴趣的' 意味着对某事或某人不感兴趣或不关心的。" +
            "<br><br>" +
            "(D) '冷静的' 意味着不受强烈情感影响的，因此能够理性和公正的。"
    },
    {
        id: 9,
        question: "His __________ demeanor made him the perfect candidate for handling high-pressure situations.",
        chinese_question: "他的 __________ 举止使他成为处理高压情况的完美人选。",
        answers: [
            { option: "A", answer: "excitable", chinese_answer: "易激动的", chinese_romanization: "yì jīdòng de" },
            { option: "B", answer: "phlegmatic", chinese_answer: "冷静的", chinese_romanization: "lěngjìng de" },
            { option: "C", answer: "nervous", chinese_answer: "紧张的", chinese_romanization: "jǐnzhāng de" },
            { option: "D", answer: "anxious", chinese_answer: "焦虑的", chinese_romanization: "jiāolǜ de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'phlegmatic' means (of a person) having an unemotional and stolidly calm disposition." +
            "<br><br>" +
            "(A) 'excitable' means responding rather too readily to something new or stimulating; too easily excited." +
            "<br><br>" +
            "(C) 'nervous' means easily agitated or alarmed." +
            "<br><br>" +
            "(D) 'anxious' means experiencing worry, unease, or nervousness.",
        chinese_explanation: "(B) '冷静的' 意味着（指人）具有无动于衷和冷静的性格。" +
            "<br><br>" +
            "(A) '易激动的' 意味着对新事物或刺激反应过于迅速；太容易兴奋的。" +
            "<br><br>" +
            "(C) '紧张的' 意味着容易激动或警觉的。" +
            "<br><br>" +
            "(D) '焦虑的' 意味着经历担忧、不安或紧张的。"
    },
    {
        id: 10,
        question: "The leader's __________ quest for power led to endless conflicts and instability.",
        chinese_question: "领导者对权力的 __________ 追求导致了无尽的冲突和不稳定。",
        answers: [
            { option: "A", answer: "perpetual", chinese_answer: "永久的", chinese_romanization: "yǒngjiǔ de" },
            { option: "B", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "C", answer: "temporary", chinese_answer: "临时的", chinese_romanization: "línshí de" },
            { option: "D", answer: "momentary", chinese_answer: "瞬间的", chinese_romanization: "shùnjiān de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'perpetual' means never ending or changing." +
            "<br><br>" +
            "(B) 'fleeting' means lasting for a very short time." +
            "<br><br>" +
            "(C) 'temporary' means lasting for only a limited period of time; not permanent." +
            "<br><br>" +
            "(D) 'momentary' means lasting for a very short time; brief.",
        chinese_explanation: "(A) '永久的' 意味着永不结束或改变的。" +
            "<br><br>" +
            "(B) '短暂的' 意味着持续时间非常短的。" +
            "<br><br>" +
            "(C) '临时的' 意味着只持续有限时间的；不永久的。" +
            "<br><br>" +
            "(D) '瞬间的' 意味着持续时间非常短的；简短的。"
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
