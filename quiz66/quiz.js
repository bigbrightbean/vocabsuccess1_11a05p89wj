// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The mountaintop offered a breathtaking __________ of the surrounding landscape, with views stretching for miles.",
        chinese_question: "山顶提供了一个令人叹为观止的 __________，可以看到延绵数英里的周围景观。",
        answers: [
            { option: "A", answer: "fragment", chinese_answer: "碎片", chinese_romanization: "suìpiàn" },
            { option: "B", answer: "segment", chinese_answer: "部分", chinese_romanization: "bùfèn" },
            { option: "C", answer: "panorama", chinese_answer: "全景", chinese_romanization: "quánjǐng" },
            { option: "D", answer: "glimpse", chinese_answer: "一瞥", chinese_romanization: "yīpiē" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'panorama' means an unbroken view of the whole region surrounding an observer." +
            "<br><br>" +
            "(A) 'fragment' means a small part broken or separated off something." +
            "<br><br>" +
            "(B) 'segment' means each of the parts into which something is or may be divided." +
            "<br><br>" +
            "(D) 'glimpse' means a momentary or partial view.",
        chinese_explanation: "(C) '全景' 一词意味着观察者周围整个区域的连续视图。" +
            "<br><br>" +
            "(A) '碎片' 意味着某物破裂或分离的一小部分。" +
            "<br><br>" +
            "(B) '部分' 意味着某物或可能被分割的每一部分。" +
            "<br><br>" +
            "(D) '一瞥' 意味着短暂或部分的视图。"
    },
    {
        id: 2,
        question: "The local __________ was patrolling the neighborhood to ensure everyone's safety.",
        chinese_question: "当地的 __________ 正在巡逻社区，以确保每个人的安全。",
        answers: [
            { option: "A", answer: "teacher", chinese_answer: "老师", chinese_romanization: "lǎoshī" },
            { option: "B", answer: "doctor", chinese_answer: "医生", chinese_romanization: "yīshēng" },
            { option: "C", answer: "constable", chinese_answer: "警察", chinese_romanization: "jǐngchá" },
            { option: "D", answer: "chef", chinese_answer: "厨师", chinese_romanization: "chúshī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'constable' means a peace officer with limited policing authority, typically in a small town." +
            "<br><br>" +
            "(A) 'teacher' means a person who teaches, especially in a school." +
            "<br><br>" +
            "(B) 'doctor' means a qualified practitioner of medicine." +
            "<br><br>" +
            "(D) 'chef' means a professional cook, typically the chief cook in a restaurant or hotel.",
        chinese_explanation: "(C) '警察' 一词意味着具有有限警务权限的治安官，通常在小镇。" +
            "<br><br>" +
            "(A) '老师' 意味着一个教书的人，特别是在学校。" +
            "<br><br>" +
            "(B) '医生' 意味着合格的医学从业者。" +
            "<br><br>" +
            "(D) '厨师' 意味着专业厨师，通常是餐馆或酒店的主厨。"
    },
    {
        id: 3,
        question: "One __________ of the breed is its thick, fluffy fur, which helps it survive in cold climates.",
        chinese_question: "这种品种的一个 __________ 是它厚厚的蓬松皮毛，这有助于它在寒冷的气候中生存。",
        answers: [
            { option: "A", answer: "characteristic", chinese_answer: "特征", chinese_romanization: "tèzhēng" },
            { option: "B", answer: "anomaly", chinese_answer: "异常", chinese_romanization: "yìcháng" },
            { option: "C", answer: "rarity", chinese_answer: "稀有", chinese_romanization: "xīyǒu" },
            { option: "D", answer: "inconsistency", chinese_answer: "不一致", chinese_romanization: "bù yīzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'characteristic' means a feature or quality belonging typically to a person, place, or thing and serving to identify it." +
            "<br><br>" +
            "(B) 'anomaly' means something that deviates from what is standard, normal, or expected." +
            "<br><br>" +
            "(C) 'rarity' means the state or quality of being rare." +
            "<br><br>" +
            "(D) 'inconsistency' means the fact or state of being inconsistent.",
        chinese_explanation: "(A) '特征' 一词意味着通常属于某人、某地或某物的特征或品质，并用来识别它。" +
            "<br><br>" +
            "(B) '异常' 意味着偏离标准、正常或预期的事物。" +
            "<br><br>" +
            "(C) '稀有' 意味着稀有的状态或质量。" +
            "<br><br>" +
            "(D) '不一致' 意味着不一致的事实或状态。"
    },
    {
        id: 4,
        question: "Everyone was invited to the party __________ him, making him feel left out and upset.",
        chinese_question: "除了他，每个人都被邀请参加聚会，这让他感到被冷落和不开心。",
        answers: [
            { option: "A", answer: "ignoring", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "except", chinese_answer: "除了", chinese_romanization: "chúle" },
            { option: "C", answer: "including", chinese_answer: "包括", chinese_romanization: "bāokuò" },
            { option: "D", answer: "besides", chinese_answer: "除了", chinese_romanization: "chúle" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'except' means not including; other than." +
            "<br><br>" +
            "(A) 'ignoring' means refusing to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'including' means containing as part of the whole being considered." +
            "<br><br>" +
            "(D) 'besides' means in addition to; apart from.",
        chinese_explanation: "(B) '除了' 意味着不包括；除...之外。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '包括' 意味着作为所考虑的整体的一部分。" +
            "<br><br>" +
            "(D) '除了' 意味着除此之外；除外。"
    },
    {
        id: 5,
        question: "The dark __________ of the mountain stood out against the setting sun, creating a dramatic and picturesque scene.",
        chinese_question: "山的黑暗 __________ 在夕阳的映衬下格外显眼，形成了一幅戏剧性而如画的景象。",
        answers: [
            { option: "A", answer: "silhouette", chinese_answer: "轮廓", chinese_romanization: "lúnkuò" },
            { option: "B", answer: "brightness", chinese_answer: "明亮", chinese_romanization: "míngliàng" },
            { option: "C", answer: "colour", chinese_answer: "颜色", chinese_romanization: "yánsè" },
            { option: "D", answer: "highlight", chinese_answer: "高光", chinese_romanization: "gāoguāng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'silhouette' means the dark shape and outline of someone or something visible against a lighter background, especially in dim light." +
            "<br><br>" +
            "(B) 'brightness' means the quality or state of giving out or reflecting light." +
            "<br><br>" +
            "(C) 'colour' means the property possessed by an object of producing different sensations on the eye as a result of the way it reflects or emits light." +
            "<br><br>" +
            "(D) 'highlight' means an area or a spot in a drawing, painting, or photograph that is strongly illuminated.",
        chinese_explanation: "(A) '轮廓' 一词意味着某人或某物在较亮背景下可见的黑暗形状和轮廓，尤其是在昏暗的光线下。" +
            "<br><br>" +
            "(B) '明亮' 意味着发出或反射光的质量或状态。" +
            "<br><br>" +
            "(C) '颜色' 意味着物体所具有的属性，由于其反射或发射光的方式而在眼睛上产生不同的感觉。" +
            "<br><br>" +
            "(D) '高光' 意味着在绘画、绘图或摄影中强烈照亮的区域或点。"
    },
    {
        id: 6,
        question: "The river was the primary __________ of water for the entire region, sustaining both people and agriculture.",
        chinese_question: "河流是整个地区的主要__________，支撑着人们和农业。",
        answers: [
            { option: "A", answer: "destination", chinese_answer: "目的地", chinese_romanization: "mùdì dì" },
            { option: "B", answer: "route", chinese_answer: "路线", chinese_romanization: "lùxiàn" },
            { option: "C", answer: "barrier", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
            { option: "D", answer: "source", chinese_answer: "来源", chinese_romanization: "láiyuán" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'source' means a place, person, or thing from which something originates." +
            "<br><br>" +
            "(A) 'destination' means the place to which someone or something is going." +
            "<br><br>" +
            "(B) 'route' means a way or course taken in getting from a starting point to a destination." +
            "<br><br>" +
            "(C) 'barrier' means a fence or other obstacle that prevents movement or access.",
        chinese_explanation: "(D) '来源'一词意味着某物起源的地方、人物或事物。" +
            "<br><br>" +
            "(A) '目的地' 意味着某人或某物要去的地方。" +
            "<br><br>" +
            "(B) '路线' 意味着从起点到目的地的路线或路线。" +
            "<br><br>" +
            "(C) '障碍' 意味着防止移动或进入的围栏或其他障碍物。"
    },
    {
        id: 7,
        question: "She had a __________ for solving complex puzzles quickly, impressing everyone with her sharp mind and problem-solving skills.",
        chinese_question: "她有解决复杂谜题的 __________，以她敏锐的思维和解决问题的技能给大家留下深刻印象。",
        answers: [
            { option: "A", answer: "struggle", chinese_answer: "挣扎", chinese_romanization: "zhēngzhá" },
            { option: "B", answer: "reluctance", chinese_answer: "不情愿", chinese_romanization: "bù qíngyuàn" },
            { option: "C", answer: "knack", chinese_answer: "技巧", chinese_romanization: "jìqiǎo" },
            { option: "D", answer: "disinterest", chinese_answer: "无兴趣", chinese_romanization: "wú xìngqù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'knack' means an acquired or natural skill at performing a task." +
            "<br><br>" +
            "(A) 'struggle' means make forceful or violent efforts to get free of restraint or constriction." +
            "<br><br>" +
            "(B) 'reluctance' means unwillingness or disinclination to do something." +
            "<br><br>" +
            "(D) 'disinterest' means lack of interest in something.",
        chinese_explanation: "(C) '技巧' 意味着执行任务的获得的或自然的技能。" +
            "<br><br>" +
            "(A) '挣扎' 意味着做出强有力或暴力的努力以摆脱束缚或限制。" +
            "<br><br>" +
            "(B) '不情愿' 意味着不愿做某事。" +
            "<br><br>" +
            "(D) '无兴趣' 意味着对某事缺乏兴趣。"
    },
    {
        id: 8,
        question: "Her calm __________ under pressure impressed everyone at the meeting.",
        chinese_question: "她在压力下的冷静 __________ 给会议上的每个人留下了深刻的印象。",
        answers: [
            { option: "A", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
            { option: "B", answer: "panic", chinese_answer: "恐慌", chinese_romanization: "kǒnghuāng" },
            { option: "C", answer: "demeanour", chinese_answer: "举止", chinese_romanization: "jǔzhǐ" },
            { option: "D", answer: "anxiety", chinese_answer: "焦虑", chinese_romanization: "jiāolǜ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'demeanour' means outward behavior or bearing." +
            "<br><br>" +
            "(A) 'excitement' means a feeling of great enthusiasm and eagerness." +
            "<br><br>" +
            "(B) 'panic' means sudden uncontrollable fear or anxiety, often causing wildly unthinking behavior." +
            "<br><br>" +
            "(D) 'anxiety' means a feeling of worry, nervousness, or unease.",
        chinese_explanation: "(C) '举止' 一词意味着外在的行为或风度。" +
            "<br><br>" +
            "(A) '兴奋' 意味着极大的热情和渴望。" +
            "<br><br>" +
            "(B) '恐慌' 意味着突然无法控制的恐惧或焦虑，通常导致疯狂的不加思索的行为。" +
            "<br><br>" +
            "(D) '焦虑' 意味着一种担忧、紧张或不安的感觉。"
    },
    {
        id: 9,
        question: "The child's sudden __________ during the quiet assembly startled everyone present.",
        chinese_question: "孩子在安静的集会中突然的 __________ 让在场的每个人都感到震惊。",
        answers: [
            { option: "A", answer: "whisper", chinese_answer: "耳语", chinese_romanization: "ěryǔ" },
            { option: "B", answer: "outburst", chinese_answer: "爆发", chinese_romanization: "bàofā" },
            { option: "C", answer: "gesture", chinese_answer: "手势", chinese_romanization: "shǒushì" },
            { option: "D", answer: "smile", chinese_answer: "微笑", chinese_romanization: "wéixiào" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'outburst' refers to a sudden release of strong emotion." +
            "<br><br>" +
            "(A) 'whisper' means speaking very softly using one's breath rather than one's throat." +
            "<br><br>" +
            "(C) 'gesture' means a movement of part of the body, especially a hand or the head, to express an idea or meaning." +
            "<br><br>" +
            "(D) 'smile' means a pleased, kind, or amused facial expression, typically with the corners of the mouth turned up and the front teeth exposed.",
        chinese_explanation: "(B) '爆发' 指的是强烈情感的突然释放。" +
            "<br><br>" +
            "(A) '耳语' 意味着用呼吸而不是喉咙非常轻声地说话。" +
            "<br><br>" +
            "(C) '手势' 意味着身体的一部分，尤其是手或头的动作，用来表达一个想法或意义。" +
            "<br><br>" +
            "(D) '微笑' 意味着愉快、友好或开心的面部表情，通常是嘴角上扬，露出前牙。"
    },
    {
        id: 10,
        question: "As a __________ in the kitchen, he needed detailed recipes and guidance to prepare a simple meal.",
        chinese_question: "作为厨房的新手，他需要详细的食谱和指导才能准备一顿简单的饭。",
        answers: [
            { option: "A", answer: "expert", chinese_answer: "专家", chinese_romanization: "zhuānjiā" },
            { option: "B", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "C", answer: "veteran", chinese_answer: "老手", chinese_romanization: "lǎoshǒu" },
            { option: "D", answer: "professional", chinese_answer: "专业人士", chinese_romanization: "zhuānyè rénshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'novice' means a person new to or inexperienced in a field or situation." +
            "<br><br>" +
            "(A) 'expert' means a person who has a comprehensive and authoritative knowledge of or skill in a particular area." +
            "<br><br>" +
            "(C) 'veteran' means a person who has had long experience in a particular field." +
            "<br><br>" +
            "(D) 'professional' means a person engaged or qualified in a profession.",
        chinese_explanation: "(B) '新手' 一词意味着某领域或情况的新手或缺乏经验的人。" +
            "<br><br>" +
            "(A) '专家' 意味着在某一领域具有全面和权威知识或技能的人。" +
            "<br><br>" +
            "(C) '老手' 意味着在某一领域有长时间经验的人。" +
            "<br><br>" +
            "(D) '专业人士' 意味着从事某一职业或具备资格的人。"
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
