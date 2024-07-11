// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "After the storm, the trees were __________ of leaves, standing stark against the grey sky.",
        chinese_question: "暴风雨过后，树木 __________，在灰色的天空下显得很突兀。",
        answers: [
            { option: "A", answer: "full", chinese_answer: "满", chinese_romanization: "mǎn" },
            { option: "B", answer: "bare", chinese_answer: "光秃", chinese_romanization: "guāngtū" },
            { option: "C", answer: "covered", chinese_answer: "覆盖", chinese_romanization: "fùgài" },
            { option: "D", answer: "lush", chinese_answer: "茂盛", chinese_romanization: "màoshèng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bare' means lacking adornment or covering." +
            "<br><br>" +
            "(A) 'full' means containing or holding as much as possible." +
            "<br><br>" +
            "(C) 'covered' means having a layer or covering over something." +
            "<br><br>" +
            "(D) 'lush' means growing luxuriantly.",
        chinese_explanation: "(B) '光秃' 意味着缺乏装饰或覆盖。" +
            "<br><br>" +
            "(A) '满' 意味着尽可能地容纳或装载。" +
            "<br><br>" +
            "(C) '覆盖' 意味着在某物上有一层覆盖物。" +
            "<br><br>" +
            "(D) '茂盛' 意味着生长茂盛。"
    },
    {
        id: 2,
        question: "His __________ response to her question left her feeling dismissed and unimportant.",
        chinese_question: "他对她问题的 __________ 回答让她感到被忽视和不重要。",
        answers: [
            { option: "A", answer: "lengthy", chinese_answer: "冗长", chinese_romanization: "rǒngcháng" },
            { option: "B", answer: "detailed", chinese_answer: "详细", chinese_romanization: "xiángxì" },
            { option: "C", answer: "curt", chinese_answer: "简短", chinese_romanization: "jiǎnduǎn" },
            { option: "D", answer: "elaborate", chinese_answer: "详尽", chinese_romanization: "xiángjìn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'curt' means rudely brief." +
            "<br><br>" +
            "(A) 'lengthy' means (especially in reference to time) of considerable or unusual length, especially so as to be tedious." +
            "<br><br>" +
            "(B) 'detailed' means having many details or facts; showing attention to detail." +
            "<br><br>" +
            "(D) 'elaborate' means involving many carefully arranged parts or details; detailed and complicated in design and planning.",
        chinese_explanation: "(C) '简短' 意味着简短而粗鲁。" +
            "<br><br>" +
            "(A) '冗长' 意味着（尤其是指时间）相当长或异常长，尤其是使人厌烦。" +
            "<br><br>" +
            "(B) '详细' 意味着有许多细节或事实；表现出对细节的关注。" +
            "<br><br>" +
            "(D) '详尽' 意味着涉及许多精心安排的部分或细节；在设计和计划上详细和复杂的。"
    },
    {
        id: 3,
        question: "The town square serves as the __________ hub of activity, with markets, cafes, and festivals all year round.",
        chinese_question: "镇中心广场是 __________ 活动中心，一年四季都有市场、咖啡馆和节日。",
        answers: [
            { option: "A", answer: "central", chinese_answer: "中心的", chinese_romanization: "zhōngxīn de" },
            { option: "B", answer: "peripheral", chinese_answer: "外围的", chinese_romanization: "wàiwéi de" },
            { option: "C", answer: "distant", chinese_answer: "遥远的", chinese_romanization: "yáoyuǎn de" },
            { option: "D", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'central' means of, at, or forming the center." +
            "<br><br>" +
            "(B) 'peripheral' means relating to or situated on the edge or periphery of something." +
            "<br><br>" +
            "(C) 'distant' means far away in space or time." +
            "<br><br>" +
            "(D) 'irrelevant' means not connected with or relevant to something.",
        chinese_explanation: "(A) '中心的' 意味着处于或形成中心的。" +
            "<br><br>" +
            "(B) '外围的' 意味着与某物的边缘或周边有关的。" +
            "<br><br>" +
            "(C) '遥远的' 意味着在空间或时间上远离的。" +
            "<br><br>" +
            "(D) '无关的' 意味着与某事无关的。"
    },
    {
        id: 4,
        question: "The architect's __________ design for the new building included unconventional shapes and vibrant colors.",
        chinese_question: "这位建筑师对新建筑的 __________ 设计包括非传统的形状和鲜艳的颜色。",
        answers: [
            { option: "A", answer: "bold", chinese_answer: "大胆的", chinese_romanization: "dàdǎn de" },
            { option: "B", answer: "timid", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" },
            { option: "C", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "D", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bold' means showing a willingness to take risks; confident and courageous." +
            "<br><br>" +
            "(B) 'timid' means showing a lack of courage or confidence; easily frightened." +
            "<br><br>" +
            "(C) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(D) 'cautious' means careful to avoid potential problems or dangers.",
        chinese_explanation: "(A) '大胆的' 意味着表现出愿意冒险的精神；自信和勇敢的。" +
            "<br><br>" +
            "(B) '胆小的' 意味着缺乏勇气或自信；容易受惊的。" +
            "<br><br>" +
            "(C) '普通的' 意味着没有特别或独特的特征；正常的。" +
            "<br><br>" +
            "(D) '谨慎的' 意味着小心避免潜在的问题或危险的。"
    },
    {
        id: 5,
        question: "The __________ landscape was covered in ice and snow, with temperatures dropping below freezing.",
        chinese_question: "__________ 景观被冰雪覆盖，气温降至冰点以下。",
        answers: [
            { option: "A", answer: "tropical", chinese_answer: "热带的", chinese_romanization: "rèdài de" },
            { option: "B", answer: "arctic", chinese_answer: "北极的", chinese_romanization: "běijí de" },
            { option: "C", answer: "desert", chinese_answer: "沙漠的", chinese_romanization: "shāmò de" },
            { option: "D", answer: "forest", chinese_answer: "森林的", chinese_romanization: "sēnlín de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'arctic' means relating to the regions around the North Pole." +
            "<br><br>" +
            "(A) 'tropical' means relating to the region of the Earth near the equator, where the climate is typically warm." +
            "<br><br>" +
            "(C) 'desert' means a barren area of landscape where little precipitation occurs." +
            "<br><br>" +
            "(D) 'forest' means a large area covered chiefly with trees and undergrowth.",
        chinese_explanation: "(B) '北极的' 意味着与北极地区有关的。" +
            "<br><br>" +
            "(A) '热带的' 意味着与赤道附近的地球区域有关，那里的气候通常是温暖的。" +
            "<br><br>" +
            "(C) '沙漠的' 意味着降水很少的不毛之地。" +
            "<br><br>" +
            "(D) '森林的' 意味着主要由树木和灌木覆盖的大面积土地。"
    },
    {
        id: 6,
        question: "She leads an __________ lifestyle, participating in sports and outdoor activities.",
        chinese_question: "她过着 __________ 的生活方式，参加体育运动和户外活动。",
        answers: [
            { option: "A", answer: "active", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" },
            { option: "B", answer: "sedentary", chinese_answer: "久坐的", chinese_romanization: "jiǔzuò de" },
            { option: "C", answer: "inactive", chinese_answer: "不活跃的", chinese_romanization: "bù huóyuè de" },
            { option: "D", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'active' means engaging or ready to engage in physically energetic pursuits." +
            "<br><br>" +
            "(B) 'sedentary' means tending to spend much time seated; somewhat inactive." +
            "<br><br>" +
            "(C) 'inactive' means not engaging in or involving any or much physical activity." +
            "<br><br>" +
            "(D) 'passive' means accepting or allowing what happens or what others do, without active response or resistance.",
        chinese_explanation: "(A) '活跃的' 意味着从事或准备从事体力活动。" +
            "<br><br>" +
           "(B) '久坐的' 意味着倾向于长时间坐着；有些不活跃。" +
            "<br><br>" +
            "(C) '不活跃的' 意味着不从事或涉及任何或大量体力活动。" +
            "<br><br>" +
            "(D) '被动的' 意味着接受或允许发生的事情或他人的行为，而不积极回应或抵抗。"
    },
    {
        id: 7,
        question: "The opponent was __________, with an impressive track record that intimidated many of his challengers.",
        chinese_question: "对手是 __________ 的，他令人印象深刻的战绩让许多挑战者感到害怕。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "B", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐn yào de" },
            { option: "C", answer: "formidable", chinese_answer: "强大的", chinese_romanization: "qiángdà de" },
            { option: "D", answer: "unimpressive", chinese_answer: "平凡的", chinese_romanization: "píngfán de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'formidable' means inspiring fear or respect through being impressively large, powerful, intense, or capable." +
            "<br><br>" +
            "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(B) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(D) 'unimpressive' means not arousing admiration or respect; not striking.",
        chinese_explanation: "(C) '强大的' 一词意味着通过巨大、强大、激烈或有能力而激发恐惧或尊重的。" +
            "<br><br>" +
            "(A) '虚弱的' 意味着缺乏执行体力任务的力量；缺乏体力和精力。" +
            "<br><br>" +
            "(B) '无关紧要的' 意味着太小或不重要而不值得考虑的。" +
            "<br><br>" +
            "(D) '平凡的' 意味着不引起钦佩或尊重的；不显眼的。"
    },
    {
        id: 8,
        question: "His __________ personality made him the life of every party, as he could always be counted on to lift everyone's spirits.",
        chinese_question: "他的 __________ 个性使他成为每个派对的灵魂，因为他总是能让大家情绪高涨。",
        answers: [
            { option: "A", answer: "somber", chinese_answer: "阴沉的", chinese_romanization: "yīnchén de" },
            { option: "B", answer: "jovial", chinese_answer: "欢乐的", chinese_romanization: "huānlè de" },
            { option: "C", answer: "dull", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "D", answer: "serious", chinese_answer: "严肃的", chinese_romanization: "yánsù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'jovial' means cheerful and friendly." +
            "<br><br>" +
            "(A) 'somber' means dark or dull in color or tone; gloomy." +
            "<br><br>" +
            "(C) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(D) 'serious' means solemn or thoughtful in character or manner.",
        chinese_explanation: "(B) '欢乐的' 意味着快乐和友好的。" +
            "<br><br>" +
            "(A) '阴沉的' 意味着颜色或音调暗淡的；阴郁的。" +
            "<br><br>" +
            "(C) '无聊的' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(D) '严肃的' 意味着性格或态度严肃的。"
    },
    {
        id: 9,
        question: "The __________ behavior of the corrupt officials was enough to make anyone feel disgusted and outraged, highlighting the need for strict governance.",
        chinese_question: "腐败官员的 __________ 行为足以让任何人感到厌恶和愤怒，凸显了严格治理的必要性。",
        answers: [
            { option: "A", answer: "admirable", chinese_answer: "令人钦佩的", chinese_romanization: "lìngrén qīnpèi de" },
            { option: "B", answer: "acceptable", chinese_answer: "可接受的", chinese_romanization: "kě jiēshòu de" },
            { option: "C", answer: "repulsive", chinese_answer: "令人厌恶的", chinese_romanization: "lìngrén yànwù de" },
            { option: "D", answer: "inspiring", chinese_answer: "鼓舞人心的", chinese_romanization: "gǔwǔ rénxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'repulsive' means causing a strong feeling of disgust or dislike." +
            "<br><br>" +
            "(A) 'admirable' means deserving respect or approval." +
            "<br><br>" +
            "(B) 'acceptable' means able to be agreed on; suitable." +
            "<br><br>" +
            "(D) 'inspiring' means having the effect of inspiring someone.",
        chinese_explanation: "(C) '令人厌恶的' 意思是引起强烈的厌恶或不喜欢的感觉。" +
            "<br><br>" +
            "(A) '令人钦佩的' 意思是值得尊重或赞同的。" +
            "<br><br>" +
            "(B) '可接受的' 意思是能够同意的；合适的。" +
            "<br><br>" +
            "(D) '鼓舞人心的' 意思是具有激励某人的效果。"
    },
    {
        id: 10,
        question: "The backpack was made from __________ material, designed to withstand rough use.",
        chinese_question: "这款背包采用__________材料制成，设计能够承受粗暴使用。",
        answers: [
            { option: "A", answer: "fragile", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
            { option: "B", answer: "durable", chinese_answer: "耐用的", chinese_romanization: "nàiyòng de" },
            { option: "C", answer: "delicate", chinese_answer: "精致的", chinese_romanization: "jīngzhì de" },
            { option: "D", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'durable' means able to withstand wear, pressure, or damage; hard-wearing." +
            "<br><br>" +
            "(A) 'fragile' means easily broken or damaged." +
            "<br><br>" +
            "(C) 'delicate' means very fine in texture or structure; of intricate workmanship or quality." +
            "<br><br>" +
            "(D) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy.",
        chinese_explanation: "(B) '耐用的'一词意味着能够承受磨损、压力或损坏的；耐磨的。" +
            "<br><br>" +
            "(A) '脆弱的' 意味着容易破碎或损坏的。" +
            "<br><br>" +
            "(C) '精致的' 意味着质地或结构非常精细的；工艺或质量精美的。" +
            "<br><br>" +
            "(D) '虚弱的' 意味着缺乏执行体力任务的能力；缺乏体力和精力。"
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
