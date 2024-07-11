// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The climbers scaled the __________ cliff face with great difficulty.",
        chinese_question: "攀登者艰难地攀登 __________ 的悬崖面。",
        answers: [
            { option: "A", answer: "vertical", chinese_answer: "垂直的", chinese_romanization: "chuízhí de" },
            { option: "B", answer: "horizontal", chinese_answer: "水平的", chinese_romanization: "shuǐpíng de" },
            { option: "C", answer: "flat", chinese_answer: "平坦的", chinese_romanization: "píngtǎn de" },
            { option: "D", answer: "sloping", chinese_answer: "倾斜的", chinese_romanization: "qīngxié de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'vertical' means at right angles to a horizontal plane; in a direction, or having an alignment, such that the top is directly above the bottom. It also means upright." +
            "<br><br>" +
            "(B) 'horizontal' means parallel to the plane of the horizon. It also means flat." +
            "<br><br>" +
            "(C) 'flat' means having a level surface; without raised areas or indentations. It also means even." +
            "<br><br>" +
            "(D) 'sloping' means inclined from a horizontal or vertical line. It also means slanting.",
        chinese_explanation: "(A) '垂直的' 意味着与水平面成直角；在一个方向上，或具有这样的排列，使顶部正好在底部上方。它也意味着直立的。" +
            "<br><br>" +
            "(B) '水平的' 意味着与地平面平行。它也意味着平的。" +
            "<br><br>" +
            "(C) '平坦的' 意味着具有水平表面；没有突起或凹陷。它也意味着均匀的。" +
            "<br><br>" +
            "(D) '倾斜的' 意味着从水平线或垂直线倾斜。它也意味着斜的。"
    },
    {
        id: 2,
        question: "If the weather is bad, our __________ plan is to have the picnic indoors instead of at the park.",
        chinese_question: "如果天气不好，我们的 __________ 计划是在室内野餐，而不是在公园。",
        answers: [
            { option: "A", answer: "primary", chinese_answer: "主要", chinese_romanization: "zhǔyào" },
            { option: "B", answer: "impossible", chinese_answer: "不可能", chinese_romanization: "bù kěnéng" },
            { option: "C", answer: "alternative", chinese_answer: "替代", chinese_romanization: "tìdài" },
            { option: "D", answer: "original", chinese_answer: "原始", chinese_romanization: "yuánshǐ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'alternative' means (of one or more things) available as another possibility. It also means substitute." +
            "<br><br>" +
            "(A) 'primary' means of chief importance; principal. It also means main." +
            "<br><br>" +
            "(B) 'impossible' means not able to occur, exist, or be done. It also means unattainable." +
            "<br><br>" +
            "(D) 'original' means present or existing from the beginning; first or earliest. It also means initial.",
        chinese_explanation: "(C) '替代' 一词意味着作为另一种可能性的一件或多件事。它也意味着替代的。" +
            "<br><br>" +
            "(A) '主要' 意味着首要重要性；主要的。它也意味着主要的。" +
            "<br><br>" +
            "(B) '不可能' 意味着无法发生、存在或完成的。它也意味着无法实现的。" +
            "<br><br>" +
            "(D) '原始' 意味着从一开始就存在的；第一或最早的。它也意味着最初的。"
    },
    {
        id: 3,
        question: "The __________ puppy quickly learned to obey commands and was a joy to train.",
        chinese_question: "这只 __________ 的小狗很快学会了服从命令，训练起来很愉快。",
        answers: [
            { option: "A", answer: "stubborn", chinese_answer: "固执的", chinese_romanization: "gùzhí de" },
            { option: "B", answer: "docile", chinese_answer: "温顺的", chinese_romanization: "wēnshùn de" },
            { option: "C", answer: "rebellious", chinese_answer: "叛逆的", chinese_romanization: "pànnì de" },
            { option: "D", answer: "wild", chinese_answer: "野生的", chinese_romanization: "yěshēng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'docile' means ready to accept control or instruction; submissive." +
            "<br><br>" +
            "(A) 'stubborn' means having or showing dogged determination not to change one's attitude or position on something." +
            "<br><br>" +
            "(C) 'rebellious' means showing a desire to resist authority, control, or convention." +
            "<br><br>" +
            "(D) 'wild' means living or growing in the natural environment; not domesticated or cultivated.",
        chinese_explanation: "(B) '温顺的' 一词意味着准备接受控制或指导；顺从的。" +
            "<br><br>" +
            "(A) '固执的' 意味着表现出顽固的决心不改变某人对某事的态度或立场。" +
            "<br><br>" +
            "(C) '叛逆的' 意味着表现出抵抗权威、控制或习俗的愿望。" +
            "<br><br>" +
            "(D) '野生的' 意味着在自然环境中生活或生长的；未驯化或栽培的。"
    },
    {
        id: 4,
        question: "The island he described was __________, a figment of his imagination with no real-world counterpart.",
        chinese_question: "他描述的岛屿是 __________ 的，是他想象中的一个虚构之地，没有现实世界的对应物。",
        answers: [
            { option: "A", answer: "nonexistent", chinese_answer: "不存在的", chinese_romanization: "bù cúnzài de" },
            { option: "B", answer: "real", chinese_answer: "真实的", chinese_romanization: "zhēnshí de" },
            { option: "C", answer: "tangible", chinese_answer: "有形的", chinese_romanization: "yǒuxíng de" },
            { option: "D", answer: "present", chinese_answer: "现有的", chinese_romanization: "xiàn yǒu de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'nonexistent' means not existing or not real." +
            "<br><br>" +
            "(B) 'real' means actually existing as a thing or occurring in fact; not imagined or supposed." +
            "<br><br>" +
            "(C) 'tangible' means perceptible by touch. It also means touchable." +
            "<br><br>" +
            "(D) 'present' means existing or occurring now.",
        chinese_explanation: "(A) '不存在的' 意味着不存在或不真实的。" +
            "<br><br>" +
            "(B) '真实的' 意味着实际上存在的事物或实际发生的事实；不是想象的或假设的。" +
            "<br><br>" +
            "(C) '有形的' 意味着可以触摸到的。它也意味着可触的。" +
            "<br><br>" +
            "(D) '现有的' 意味着现在存在或发生的。"
    },
    {
        id: 5,
         question: "His __________ appearance, with his hair uncombed and clothes wrinkled, made him look very untidy.",
        chinese_question: "他 __________ 的外表，头发没梳，衣服皱巴巴的，看起来非常不整洁。",
        answers: [
            { option: "A", answer: "neat", chinese_answer: "整齐", chinese_romanization: "zhěngqí" },
            { option: "B", answer: "polished", chinese_answer: "抛光", chinese_romanization: "pāoguāng" },
            { option: "C", answer: "unkempt", chinese_answer: "邋遢", chinese_romanization: "lātà" },
            { option: "D", answer: "groomed", chinese_answer: "整洁", chinese_romanization: "zhěngjié" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unkempt' means having an untidy or disheveled appearance." +
            "<br><br>" +
            "(A) 'neat' means arranged in an orderly, tidy way." +
            "<br><br>" +
            "(B) 'polished' means shiny as a result of being rubbed." +
            "<br><br>" +
            "(D) 'groomed' means having a neat and tidy appearance.",
        chinese_explanation: "(C) '邋遢' 一词意味着外表不整洁或蓬乱。" +
            "<br><br>" +
            "(A) '整齐' 意味着以有序、整洁的方式排列。" +
            "<br><br>" +
            "(B) '抛光' 意味着由于被擦拭而闪亮。" +
            "<br><br>" +
            "(D) '整洁' 意味着有整齐和干净的外表。"
    },
    {
        id: 6,
        question: "The guards remained __________ throughout the night, watching for any signs of danger.",
        chinese_question: "警卫整夜保持 __________，观察任何危险迹象。",
        answers: [
            { option: "A", answer: "distracted", chinese_answer: "分心的", chinese_romanization: "fēnxīn de" },
            { option: "B", answer: "asleep", chinese_answer: "睡着的", chinese_romanization: "shuìzhe de" },
            { option: "C", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "D", answer: "alert", chinese_answer: "警觉的", chinese_romanization: "jǐngjué de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'alert' means quick to notice any unusual and potentially dangerous or difficult circumstances; vigilant." +
            "<br><br>" +
            "(A) 'distracted' means unable to concentrate because one's mind is preoccupied." +
            "<br><br>" +
            "(B) 'asleep' means in or into a state of sleep." +
            "<br><br>" +
            "(C) 'relaxed' means free from tension and anxiety.",
        chinese_explanation: "(D) '警觉的' 意味着快速注意到任何不寻常和潜在危险或困难的情况；警惕的。" +
            "<br><br>" +
            "(A) '分心的' 意味着无法集中注意力，因为思想被分散。" +
            "<br><br>" +
            "(B) '睡着的' 意味着处于或进入睡眠状态。" +
            "<br><br>" +
            "(C) '放松的' 意味着没有紧张和焦虑的。"
    },
    {
        id: 7,
        question: "Upon hearing the unexpected news, he gave an __________ stare, as if he couldn't believe what he was being told.",
        chinese_question: "听到这个意外消息后，他露出 __________ 的眼神，仿佛无法相信自己所听到的。",
        answers: [
            { option: "A", answer: "incredulous", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
            { option: "B", answer: "convinced", chinese_answer: "确信的", chinese_romanization: "quèxìn de" },
            { option: "C", answer: "trusting", chinese_answer: "信任的", chinese_romanization: "xìnrèn de" },
            { option: "D", answer: "certain", chinese_answer: "确定的", chinese_romanization: "quédìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'incredulous' means unwilling or unable to believe something." +
            "<br><br>" +
            "(B) 'convinced' means completely certain about something." +
            "<br><br>" +
            "(C) 'trusting' means having a tendency to believe that people are honest or sincere." +
            "<br><br>" +
            "(D) 'certain' means known for sure; established beyond doubt.",
        chinese_explanation: "(A) '怀疑的' 意味着不愿意或无法相信某事。" +
            "<br><br>" +
            "(B) '确信的' 意味着对某事完全确定的。" +
            "<br><br>" +
            "(C) '信任的' 意味着倾向于相信人是诚实或真诚的。" +
            "<br><br>" +
            "(D) '确定的' 意味着确定无疑的。"
    },
    {
        id: 8,
        question: "The magazine's cover was printed on __________ paper, making it stand out on the shelf with its shiny surface and vibrant colours.",
        chinese_question: "杂志的封面印在 __________ 纸上，使它在书架上显得特别醒目，表面光亮，颜色鲜艳。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "暗淡的", chinese_romanization: "àndàn de" },
            { option: "B", answer: "rough", chinese_answer: "粗糙的", chinese_romanization: "cūcāo de" },
            { option: "C", answer: "glossy", chinese_answer: "光滑的", chinese_romanization: "guānghuá de" },
            { option: "D", answer: "matte", chinese_answer: "无光泽的", chinese_romanization: "wúguāngzé de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'glossy' means shiny and smooth." +
            "<br><br>" +
            "(A) 'dull' means lacking brightness, vividness, or sheen." +
            "<br><br>" +
            "(B) 'rough' means having an uneven or irregular surface; not smooth or level." +
            "<br><br>" +
            "(D) 'matte' means (of a surface or color) dull and flat, without a shine.",
        chinese_explanation: "(C) '光滑的' 一词意味着光亮和光滑的。" +
            "<br><br>" +
            "(A) '暗淡的' 意味着缺乏亮度、鲜艳度或光泽。" +
            "<br><br>" +
            "(B) '粗糙的' 意味着表面不平整或不规则的；不光滑或不平整的。" +
            "<br><br>" +
            "(D) '无光泽的' 意味着（表面或颜色）暗淡和平坦的，没有光泽。"
    },
    {
        id: 9,
        question: "Despite the friendly atmosphere, he remained __________, standing apart from the group and avoiding conversation.",
        chinese_question: "尽管气氛友好，他还是 __________，与群体保持距离，避免交谈。",
        answers: [
            { option: "A", answer: "aloof", chinese_answer: "冷淡的", chinese_romanization: "lěngdàn de" },
            { option: "B", answer: "sociable", chinese_answer: "好交际的", chinese_romanization: "hǎo jiāojì de" },
            { option: "C", answer: "engaged", chinese_answer: "参与的", chinese_romanization: "cānyù de" },
            { option: "D", answer: "warm", chinese_answer: "热情的", chinese_romanization: "rèqíng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'aloof' means not friendly or forthcoming; cool and distant." +
            "<br><br>" +
            "(B) 'sociable' means willing to talk and engage in activities with other people; friendly." +
            "<br><br>" +
            "(C) 'engaged' means involved in or attentive to." +
            "<br><br>" +
            "(D) 'warm' means showing enthusiasm, affection, or kindness.",
        chinese_explanation: "(A) '冷淡的' 意味着不友好或不主动；冷酷而疏远的。" +
            "<br><br>" +
            "(B) '好交际的' 意味着愿意与他人交谈和参与活动的；友好的。" +
            "<br><br>" +
            "(C) '参与的' 意味着参与或专注的。" +
            "<br><br>" +
            "(D) '热情的' 意味着表现出热情、亲切或友善的。"
    },
    {
        id: 10,
        question: "Her __________ display of wealth, with flashy jewelry and designer clothes, attracted everyone's attention.",
        chinese_question: "她__________地炫耀财富，佩戴着耀眼的珠宝和名牌服装，吸引了所有人的注意。",
        answers: [
            { option: "A", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "B", answer: "understated", chinese_answer: "低调的", chinese_romanization: "dīdiào de" },
            { option: "C", answer: "ostentatious", chinese_answer: "浮华的", chinese_romanization: "fúhuá de" },
            { option: "D", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ostentatious' means characterized by vulgar or pretentious display; designed to impress or attract notice." +
            "<br><br>" +
            "(A) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(B) 'understated' means simple and not trying to attract attention." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(C) '浮华的'一词意味着以粗俗或自命不凡的展示为特征的；旨在给人留下深刻印象或引起注意的。" +
            "<br><br>" +
            "(A) '谦虚的' 意味着对自己的能力或成就评价适度的。" +
            "<br><br>" +
            "(B) '低调的' 意味着简单且不试图引起注意。" +
            "<br><br>" +
            "(D) '简单的' 意味着容易理解或完成的；没有困难的。"
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
