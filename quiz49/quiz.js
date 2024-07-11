// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The billionaire's mansion was filled with __________ decor, from gold-plated fixtures to marble floors.",
        chinese_question: "亿万富翁的豪宅装饰 __________，从镀金的装置到大理石地板一应俱全。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "B", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "C", answer: "opulent", chinese_answer: "富丽堂皇的", chinese_romanization: "fùlì tánghuáng de" },
            { option: "D", answer: "sparse", chinese_answer: "稀疏的", chinese_romanization: "xīshū de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'opulent' means ostentatiously rich and luxurious or lavish." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(B) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'sparse' means thinly dispersed or scattered.",
        chinese_explanation: "(C) '富丽堂皇的' 意味着豪华的和奢侈的。" +
            "<br><br>" +
            "(A) '简单的' 意味着容易理解或完成；没有难度。" +
            "<br><br>" +
            "(B) '谦虚的' 意味着对自己的能力或成就没有自负或适中的估计。" +
            "<br><br>" +
            "(D) '稀疏的' 意味着稀疏分布或散布。"
    },
    {
        id: 2,
        question: "The teacher emphasized the importance of learning basic __________ skills, such as addition and subtraction, for everyday life.",
        chinese_question: "老师强调了学习基本 __________ 技能的重要性，例如加法和减法，这对于日常生活很重要。",
        answers: [
            { option: "A", answer: "irrelevant", chinese_answer: "不相关", chinese_romanization: "bù xiāngguān" },
            { option: "B", answer: "useless", chinese_answer: "无用", chinese_romanization: "wú yòng" },
            { option: "C", answer: "complex", chinese_answer: "复杂", chinese_romanization: "fùzá" },
            { option: "D", answer: "arithmetic", chinese_answer: "算术", chinese_romanization: "suànshù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'arithmetic' means the branch of mathematics dealing with the properties and manipulation of numbers." +
            "<br><br>" +
            "(A) 'irrelevant' means not connected with or relevant to something." +
            "<br><br>" +
            "(B) 'useless' means not fulfilling or not expected to achieve the intended purpose or desired outcome." +
            "<br><br>" +
            "(C) 'complex' means consisting of many different and connected parts." +
            "<br><br>" +
            "(D) 'arithmetic' means the branch of mathematics dealing with the properties and manipulation of numbers.",
        chinese_explanation: "(D) '算术' 一词意味着处理数字性质和操作的数学分支。" +
            "<br><br>" +
            "(A) '不相关' 意味着与某事不相关或无关。" +
            "<br><br>" +
            "(B) '无用' 意味着不满足或不预期实现预期目的或期望的结果。" +
            "<br><br>" +
            "(C) '复杂' 意味着由许多不同和连接的部分组成。"
    },
    {
        id: 3,
        question: "His __________ decision to invest without researching led to significant financial loss.",
        chinese_question: "他在没有研究的情况下__________地决定投资，导致了重大财务损失。",
        answers: [
            { option: "A", answer: "careful", chinese_answer: "仔细的", chinese_romanization: "zǐxì de" },
            { option: "B", answer: "deliberate", chinese_answer: "故意的", chinese_romanization: "gùyì de" },
            { option: "C", answer: "hasty", chinese_answer: "匆忙的", chinese_romanization: "cōngmáng de" },
            { option: "D", answer: "thorough", chinese_answer: "彻底的", chinese_romanization: "chèdǐ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hasty' means done or acting with excessive speed or urgency; hurried." +
            "<br><br>" +
            "(A) 'careful' means making sure of avoiding potential danger, mishap, or harm; cautious." +
            "<br><br>" +
            "(B) 'deliberate' means done consciously and intentionally." +
            "<br><br>" +
            "(D) 'thorough' means complete with regard to every detail; not superficial or partial.",
        chinese_explanation: "(C) '匆忙的'一词意味着做或行为过于迅速或紧急；仓促的。" +
            "<br><br>" +
            "(A) '仔细的' 意味着确保避免潜在的危险、事故或伤害；谨慎的。" +
            "<br><br>" +
            "(B) '故意的' 意味着有意识和故意的。" +
            "<br><br>" +
            "(D) '彻底的' 意味着涉及到每一个细节的；不表面的或不部分的。"
    },
    {
        id: 4,
        question: "The __________ choir sang in perfect unison, creating a beautiful and soothing sound.",
        chinese_question: "这个__________的合唱团完美地唱着，创造出美妙而令人舒缓的声音。",
        answers: [
            { option: "A", answer: "discordant", chinese_answer: "不和谐的", chinese_romanization: "bù héxié de" },
            { option: "B", answer: "haphazard", chinese_answer: "杂乱的", chinese_romanization: "záluàn de" },
            { option: "C", answer: "harmonious", chinese_answer: "和谐的", chinese_romanization: "héxié de" },
            { option: "D", answer: "chaotic", chinese_answer: "混乱的", chinese_romanization: "hùnluàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'harmonious' means forming a pleasing or consistent whole." +
            "<br><br>" +
            "(A) 'discordant' means disagreeing or incongruous." +
            "<br><br>" +
            "(B) 'haphazard' means lacking any obvious principle of organization." +
            "<br><br>" +
            "(D) 'chaotic' means in a state of complete confusion and disorder.",
        chinese_explanation: "(C) '和谐的'一词意味着形成一个令人愉快或一致的整体。" +
            "<br><br>" +
            "(A) '不和谐的' 意味着不同意或不协调的。" +
            "<br><br>" +
            "(B) '杂乱的' 意味着缺乏任何明显的组织原则的。" +
            "<br><br>" +
            "(D) '混乱的' 意味着处于完全混乱和无序的状态。"
    },
    {
        id: 5,
        question: "Despite his immense success, the scientist remained __________, always attributing his achievements to his team's hard work.",
        chinese_question: "尽管取得了巨大的成功，这位科学家仍然很 __________，总是将自己的成就归功于团队的努力。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "B", answer: "arrogant", chinese_answer: "傲慢的", chinese_romanization: "àomàn de" },
            { option: "C", answer: "boastful", chinese_answer: "自吹自擂的", chinese_romanization: "zìchuīzìléi de" },
            { option: "D", answer: "conceited", chinese_answer: "自负的", chinese_romanization: "zìfù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'humble' means having or showing a modest or low estimate of one's own importance." +
            "<br><br>" +
            "(B) 'arrogant' means having or revealing an exaggerated sense of one's own importance or abilities." +
            "<br><br>" +
            "(C) 'boastful' means showing excessive pride and self-satisfaction in one's achievements, possessions, or abilities." +
            "<br><br>" +
            "(D) 'conceited' means excessively proud of oneself; vain.",
        chinese_explanation: "(A) '谦逊的' 意味着对自己的重要性有或表现出谦虚或低估的态度。" +
            "<br><br>" +
            "(B) '傲慢的' 意味着对自己的重要性或能力有或表现出夸大的感觉。" +
            "<br><br>" +
            "(C) '自吹自擂的' 意味着对自己的成就、财产或能力表现出过度的骄傲和自满。" +
            "<br><br>" +
            "(D) '自负的' 意味着对自己过度自豪的；虚荣的。"
    },
    {
        id: 6,
        question: "The animal shelter is known for its __________ treatment of abandoned pets, ensuring they receive love and care.",
        chinese_question: "这家动物收容所以对被遗弃宠物的 __________ 对待而闻名，确保它们得到爱和照顾。",
        answers: [
            { option: "A", answer: "cruel", chinese_answer: "残忍", chinese_romanization: "cánrěn" },
            { option: "B", answer: "harsh", chinese_answer: "严厉", chinese_romanization: "yánlì" },
            { option: "C", answer: "humane", chinese_answer: "人道", chinese_romanization: "réndào" },
            { option: "D", answer: "brutal", chinese_answer: "残酷", chinese_romanization: "cánkù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'humane' means having or showing compassion or benevolence." +
            "<br><br>" +
            "(A) 'cruel' means willfully causing pain or suffering to others, or feeling no concern about it." +
            "<br><br>" +
            "(B) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(D) 'brutal' means savagely violent.",
        chinese_explanation: "(C) '人道' 意味着有或表现出同情或仁慈。" +
            "<br><br>" +
            "(A) '残忍' 意味着故意造成他人痛苦或苦难，或对此毫不关心。" +
            "<br><br>" +
            "(B) '严厉' 意味着对感官不愉快地粗糙或刺耳。" +
            "<br><br>" +
            "(D) '残酷' 意味着野蛮地暴力。"
    },
    {
        id: 7,
        question: "The earthquake caused __________ damage to the buildings in the city, leaving many homeless.",
        chinese_question: "地震对城市的建筑物造成了 __________ 的破坏，使许多人无家可归。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "轻微", chinese_romanization: "qīngwēi" },
            { option: "B", answer: "slight", chinese_answer: "微小", chinese_romanization: "wēixiǎo" },
            { option: "C", answer: "horrendous", chinese_answer: "可怕", chinese_romanization: "kěpà" },
            { option: "D", answer: "insignificant", chinese_answer: "无关紧要", chinese_romanization: "wúguān jǐnyào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'horrendous' means extremely unpleasant, horrifying, or terrible." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(B) 'slight' means small in degree; inconsiderable." +
            "<br><br>" +
            "(D) 'insignificant' means too small or unimportant to be worth consideration.",
        chinese_explanation: "(C) '可怕' 意味着极其令人不快、恐怖或糟糕。" +
            "<br><br>" +
            "(A) '轻微' 意味着重要性、严重性或意义较小的。" +
            "<br><br>" +
            "(B) '微小' 意味着程度小的；微不足道的。" +
            "<br><br>" +
            "(D) '无关紧要' 意味着太小或不重要，不值得考虑。"
    },
    {
        id: 8,
        question: "His __________ actions during the crisis, such as risking his own life to save others, earned him the respect and admiration of the entire community.",
        chinese_question: "他在危机中的 __________ 行动，比如冒着生命危险去救别人，为他赢得了整个社区的尊重和钦佩。",
        answers: [
            { option: "A", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" },
            { option: "B", answer: "dishonest", chinese_answer: "不诚实的", chinese_romanization: "bù chéngshí de" },
            { option: "C", answer: "honourable", chinese_answer: "光荣的", chinese_romanization: "guāngróng de" },
            { option: "D", answer: "cowardly", chinese_answer: "懦弱的", chinese_romanization: "nuòruò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'honourable' means deserving of respect or high regard; having a sense of what is right and acting accordingly." +
            "<br><br>" +
            "(A) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
            "<br><br>" +
            "(B) 'dishonest' means behaving or prone to behave in an untrustworthy, deceitful, or insincere way." +
            "<br><br>" +
            "(D) 'cowardly' means lacking courage; excessively afraid of danger or pain.",
        chinese_explanation: "(C) '光荣的' 意思是值得尊重或高度重视的；有正确意识并相应行事的。" +
            "<br><br>" +
            "(A) '自私的' 意思是缺乏对他人的考虑；主要关心自己的个人利益或快乐。" +
            "<br><br>" +
            "(B) '不诚实的' 意思是行为或倾向于以不可信、不诚实或不真诚的方式行事。" +
            "<br><br>" +
            "(D) '懦弱的' 意思是缺乏勇气；过度害怕危险或疼痛的。"
    },
    {
        id: 9,
        question: "His __________ lateness to meetings frustrated his colleagues, who had to constantly adjust their schedules.",
        chinese_question: "他 __________ 迟到开会让同事们感到沮丧，他们不得不经常调整他们的日程安排。",
        answers: [
            { option: "A", answer: "habitual", chinese_answer: "习惯性的", chinese_romanization: "xíguàn xìng de" },
            { option: "B", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
            { option: "C", answer: "rare", chinese_answer: "稀有的", chinese_romanization: "xīyǒu de" },
            { option: "D", answer: "exceptional", chinese_answer: "例外的", chinese_romanization: "lìwài de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'habitual' means done or doing constantly or as a habit." +
            "<br><br>" +
            "(B) 'occasionally' means occurring from time to time." +
            "<br><br>" +
            "(C) 'rare' means not occurring very often." +
            "<br><br>" +
            "(D) 'exceptional' means unusually good or outstanding.",
        chinese_explanation: "(A) '习惯性的' 意味着不断地或习惯性地做。" +
            "<br><br>" +
            "(B) '偶尔的' 意味着不时发生的。" +
            "<br><br>" +
            "(C) '稀有的' 意味着不经常发生的。" +
            "<br><br>" +
            "(D) '例外的' 意味着异常好的或杰出的。"
    },
    {
        id: 10,
        question: "He was so __________ that he believed every story he heard, no matter how improbable.",
        chinese_question: "他非常__________，无论多么不可能的故事，他都相信。",
        answers: [
            { option: "A", answer: "skeptical", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
            { option: "B", answer: "cynical", chinese_answer: "愤世嫉俗的", chinese_romanization: "fènshì jísú de" },
            { option: "C", answer: "gullible", chinese_answer: "轻信的", chinese_romanization: "qīngxìn de" },
            { option: "D", answer: "suspicious", chinese_answer: "多疑的", chinese_romanization: "duōyí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gullible' means easily persuaded to believe something; credulous." +
            "<br><br>" +
            "(A) 'skeptical' means not easily convinced; having doubts or reservations." +
            "<br><br>" +
            "(B) 'cynical' means believing that people are motivated by self-interest; distrustful of human sincerity or integrity." +
            "<br><br>" +
            "(D) 'suspicious' means having or showing a cautious distrust of someone or something.",
        chinese_explanation: "(C) '轻信的'一词意味着容易被说服相信某事；轻信的。" +
            "<br><br>" +
            "(A) '怀疑的' 意味着不容易相信的；有疑虑或保留意见的。" +
            "<br><br>" +
            "(B) '愤世嫉俗的' 意味着认为人们是出于私利动机的；不相信人类诚意或正直的。" +
            "<br><br>" +
            "(D) '多疑的' 意味着对某人或某事有或表现出谨慎的不信任。"
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
