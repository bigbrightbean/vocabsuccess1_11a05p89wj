// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite the distractions, she remained __________ on her studies, ensuring she met all her academic goals.",
        chinese_question: "尽管有干扰，她仍然 __________ 于学习，确保完成所有学术目标。",
        answers: [
            { option: "A", answer: "distracted", chinese_answer: "分心的", chinese_romanization: "fēnxīn de" },
            { option: "B", answer: "perfunctory", chinese_answer: "敷衍的", chinese_romanization: "fūyǎn de" },
            { option: "C", answer: "focused", chinese_answer: "专注的", chinese_romanization: "zhuānzhù de" },
            { option: "D", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'focused' means directing a great deal of attention, interest, or activity towards a particular aim." +
            "<br><br>" +
            "(A) 'distracted' means unable to concentrate because one is preoccupied by something worrying or unpleasant." +
            "<br><br>" +
            "(B) 'perfunctory' means carried out with a minimum of effort or reflection." +
            "<br><br>" +
            "(D) 'negligent' means failing to take proper care over something.",
        chinese_explanation: "(C) '专注的' 一词意味着将大量注意力、兴趣或活动集中在特定目标上。" +
            "<br><br>" +
            "(A) '分心的' 意味着无法集中注意力，因为被某些令人担忧或不愉快的事情所困扰。" +
            "<br><br>" +
            "(B) '敷衍的' 意味着以最少的努力或思考进行的。" +
            "<br><br>" +
            "(D) '疏忽的' 意味着未能妥善照顾某事。"
    },
    {
        id: 2,
        question: "The vacation to the tropical island was a __________ experience, filled with fun and relaxation.",
        chinese_question: "去热带岛屿度假是一次__________的经历，充满了乐趣和放松。",
        answers: [
            { option: "A", answer: "stressful", chinese_answer: "压力大的", chinese_romanization: "yālì dà de" },
            { option: "B", answer: "tiring", chinese_answer: "疲惫的", chinese_romanization: "píbèi de" },
            { option: "C", answer: "pleasurable", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "D", answer: "boring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pleasurable' means pleasing; enjoyable." +
            "<br><br>" +
            "(A) 'stressful' means causing mental or emotional stress." +
            "<br><br>" +
            "(B) 'tiring' means causing one to need rest or sleep; exhausting." +
            "<br><br>" +
            "(D) 'boring' means not interesting; tedious.",
        chinese_explanation: "(C) '愉快的' 一词意味着令人愉快的；享受的。" +
            "<br><br>" +
            "(A) '压力大的' 意味着引起心理或情绪压力的。" +
            "<br><br>" +
            "(B) '疲惫的' 意味着使人需要休息或睡眠的；令人疲惫的。" +
            "<br><br>" +
            "(D) '无聊的' 意味着不有趣的；乏味的。"
    },
    {
        id: 3,
        question: "The scientist's measurements were so __________ that even the smallest errors were detected.",
        chinese_question: "科学家的测量非常 __________，连最小的误差都能检测到。",
        answers: [
            { option: "A", answer: "accurate", chinese_answer: "准确的", chinese_romanization: "zhǔnquè de" },
            { option: "B", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "C", answer: "misleading", chinese_answer: "误导的", chinese_romanization: "wùdǎo de" },
            { option: "D", answer: "imprecise", chinese_answer: "不精确的", chinese_romanization: "bù jīngquè de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'accurate' means correct in all details; exact." +
            "<br><br>" +
            "(B) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(C) 'misleading' means giving the wrong idea or impression." +
            "<br><br>" +
            "(D) 'imprecise' means not accurate or exact.",
        chinese_explanation: "(A) '准确的' 意味着在所有细节上正确；精确的。" +
            "<br><br>" +
            "(B) '模糊的' 意味着不确定、不明确或含糊不清的特性或含义。" +
            "<br><br>" +
            "(C) '误导的' 意味着给人错误的想法或印象。" +
            "<br><br>" +
            "(D) '不精确的' 意味着不准确或不精确的。"
    },
    {
        id: 4,
        question: "She is highly __________ at solving complex math problems quickly and accurately.",
        chinese_question: "她非常__________，能够快速准确地解决复杂的数学问题。",
        answers: [
            { option: "A", answer: "inept", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "B", answer: "unskilled", chinese_answer: "无技能的", chinese_romanization: "wú jìnéng de" },
            { option: "C", answer: "adept", chinese_answer: "熟练的", chinese_romanization: "shúliàn de" },
            { option: "D", answer: "slow", chinese_answer: "慢的", chinese_romanization: "màn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'adept' means very skilled or proficient at something." +
            "<br><br>" +
            "(A) 'inept' means having or showing no skill." +
            "<br><br>" +
            "(B) 'unskilled' means not having or requiring special skills or training." +
            "<br><br>" +
            "(D) 'slow' means moving or operating, or designed to do so, only at a low speed; not quick or fast.",
        chinese_explanation: "(C) '熟练的'一词意味着非常熟练或擅长某事。" +
            "<br><br>" +
            "(A) '笨拙的' 意味着没有或表现出没有技能。" +
            "<br><br>" +
            "(B) '无技能的' 意味着没有或不需要特殊技能或训练。" +
            "<br><br>" +
            "(D) '慢的' 意味着移动或操作，或设计为这样做，只有低速；不快或不快。"
    },
    {
        id: 5,
        question: "The __________ tourist believed every word the scam artist said, losing all his money in the process.",
        chinese_question: "那位 __________ 的游客相信了骗子说的每一句话，在此过程中失去了所有的钱。",
        answers: [
            { option: "A", answer: "skeptical", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
            { option: "B", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "C", answer: "gullible", chinese_answer: "容易受骗的", chinese_romanization: "róngyì shòupiàn de" },
            { option: "D", answer: "discerning", chinese_answer: "有洞察力的", chinese_romanization: "yǒu dòngchá lì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gullible' means easily persuaded to believe something; credulous." +
            "<br><br>" +
            "(A) 'skeptical' means not easily convinced; having doubts or reservations." +
            "<br><br>" +
            "(B) 'cautious' means (of a person) careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(D) 'discerning' means having or showing good judgment. It describes someone who can understand and decide things well, noticing details and making wise decisions.",
        chinese_explanation: "(C) '容易受骗的' 一词意味着容易被说服相信某事的；轻信的。" +
            "<br><br>" +
            "(A) '怀疑的' 意味着不容易相信；有疑虑或保留意见的。" +
            "<br><br>" +
            "(B) '谨慎的' 意味着（人）小心避免潜在问题或危险的。" +
            "<br><br>" +
            "(D) '有洞察力的' 意味着有或表现出良好判断力的。它描述的是能够很好地理解和决定事情的人，注意细节并做出明智的决定。"
    },
    {
        id: 6,
        question: "Their __________ decision to take a weekend trip led to an unforgettable adventure full of surprises.",
        chinese_question: "他们 __________ 的周末旅行决定带来了一次充满惊喜的难忘冒险。",
        answers: [
            { option: "A", answer: "deliberate", chinese_answer: "故意的", chinese_romanization: "gùyì de" },
            { option: "B", answer: "spontaneous", chinese_answer: "自发的", chinese_romanization: "zìfā de" },
            { option: "C", answer: "scheduled", chinese_answer: "安排好的", chinese_romanization: "ānpái hǎo de" },
            { option: "D", answer: "calculated", chinese_answer: "计算好的", chinese_romanization: "jìsuàn hǎo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'spontaneous' means performed or occurring as a result of a sudden inner impulse or inclination and without premeditation or external stimulus. It describes something that happens naturally and without planning, often because someone suddenly feels like doing it." +
            "<br><br>" +
            "(A) 'deliberate' means done consciously and intentionally." +
            "<br><br>" +
            "(C) 'scheduled' means included in or planned according to a schedule." +
            "<br><br>" +
            "(D) 'calculated' means done with full awareness of the likely consequences.",
        chinese_explanation: "(B) '自发的' 一词意味着作为突然的内在冲动或倾向的结果而执行或发生的，无需预先计划或外部刺激。 它描述的是自然发生且未经计划的事情，通常是因为某人突然想做某事。" +
            "<br><br>" +
            "(A) '故意的' 意味着有意识和故意做的。" +
            "<br><br>" +
            "(C) '安排好的' 意味着按时间表计划或安排的。" +
            "<br><br>" +
            "(D) '计算好的' 意味着充分意识到可能的后果而做的。"
    },
    {
        id: 7,
        question: "The hike was challenging, with __________ cliffs that required careful navigation.",
        chinese_question: "这次徒步旅行很有挑战性，有 __________ 的悬崖需要小心导航。",
        answers: [
            { option: "A", answer: "gradual", chinese_answer: "逐渐的", chinese_romanization: "zhújiàn de" },
            { option: "B", answer: "flat", chinese_answer: "平坦的", chinese_romanization: "píngtǎn de" },
            { option: "C", answer: "precipitous", chinese_answer: "陡峭的", chinese_romanization: "dǒuqiào de" },
            { option: "D", answer: "gentle", chinese_answer: "温和的", chinese_romanization: "wēnhé de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'precipitous' means dangerously high or steep." +
            "<br><br>" +
            "(A) 'gradual' means taking place or progressing slowly or by degrees. It describes something that happens little by little over a period of time, rather than suddenly." +
            "<br><br>" +
            "(B) 'flat' means having a level surface; without raised areas or indentations." +
            "<br><br>" +
            "(D) 'gentle' means having or showing a mild, kind, or tender temperament or character.",
        chinese_explanation: "(C) '陡峭的' 意味着危险地高或陡的。" +
            "<br><br>" +
            "(A) '逐渐的' 意味着缓慢地或逐步进行的。它描述的是在一段时间内一点一点发生的事情，而不是突然发生的。" +
            "<br><br>" +
            "(B) '平坦的' 意味着具有水平表面的；没有凸起区域或凹痕的。" +
            "<br><br>" +
            "(D) '温和的' 意味着具有或表现出温和、善良或温柔的性格或特征的。"
    },
    {
        id: 8,
        question: "The long hike up the mountain trail left them completely __________.",
        chinese_question: "长时间的山间徒步旅行让他们完全 __________。",
        answers: [
            { option: "A", answer: "exhausted", chinese_answer: "筋疲力尽", chinese_romanization: "jīnpílìjìn" },
            { option: "B", answer: "excited", chinese_answer: "兴奋的", chinese_romanization: "xīngfèn de" },
            { option: "C", answer: "refreshed", chinese_answer: "精神焕发的", chinese_romanization: "jīngshén huànfā de" },
            { option: "D", answer: "energized", chinese_answer: "充满活力的", chinese_romanization: "chōngmǎn huólì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'exhausted' means drained of one's physical or mental resources; very tired." +
            "<br><br>" +
            "(B) 'excited' means very enthusiastic and eager." +
            "<br><br>" +
            "(C) 'refreshed' means having regained strength or energy." +
            "<br><br>" +
            "(D) 'energized' means give vitality and enthusiasm to.",
        chinese_explanation: "(A) '筋疲力尽' 意味着耗尽一个人的身体或精神资源；非常疲倦。" +
            "<br><br>" +
            "(B) '兴奋的' 意味着非常热情和渴望。" +
            "<br><br>" +
            "(C) '精神焕发的' 意味着恢复了力量或精力。" +
            "<br><br>" +
            "(D) '充满活力的' 意味着给予活力和热情。"
    },
    {
        id: 9,
        question: "Her fear of speaking in public was very __________ and not just imagined.",
        chinese_question: "她对公众演讲的恐惧是非常__________的，而不仅仅是想象出来的。",
        answers: [
            { option: "A", answer: "imaginary", chinese_answer: "想象的", chinese_romanization: "xiǎngxiàng de" },
            { option: "B", answer: "fictitious", chinese_answer: "虚构的", chinese_romanization: "xūgòu de" },
            { option: "C", answer: "real", chinese_answer: "真实的", chinese_romanization: "zhēnshí de" },
            { option: "D", answer: "fake", chinese_answer: "假的", chinese_romanization: "jiǎ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'real' means actually existing as a thing or occurring in fact; not imagined or supposed." +
            "<br><br>" +
            "(A) 'imaginary' means existing only in the imagination." +
            "<br><br>" +
            "(B) 'fictitious' means not real or true; imaginary or fabricated." +
            "<br><br>" +
            "(D) 'fake' means not genuine; counterfeit.",
        chinese_explanation: "(C) '真实的'一词意味着实际存在的事物或发生的事情；不是想象的或假设的。" +
            "<br><br>" +
            "(A) '想象的' 意味着只存在于想象中的。" +
            "<br><br>" +
            "(B) '虚构的' 意味着不真实或不正确的；想象的或虚构的。" +
            "<br><br>" +
            "(D) '假的' 意味着不真实的；伪造的。"
    },
    {
        id: 10,
        question: "The __________ young girl believed everything she was told, not realizing people could be deceptive.",
        chinese_question: "这个 __________ 的小女孩相信她被告知的一切，不知道人们可能会欺骗她。",
        answers: [
            { option: "A", answer: "experienced", chinese_answer: "有经验的", chinese_romanization: "yǒu jīngyàn de" },
            { option: "B", answer: "worldly", chinese_answer: "世故的", chinese_romanization: "shìgù de" },
            { option: "C", answer: "naive", chinese_answer: "天真的", chinese_romanization: "tiānzhēn de" },
            { option: "D", answer: "sophisticated", chinese_answer: "老练的", chinese_romanization: "lǎoliàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'naive' means showing a lack of experience, wisdom, or judgment." +
            "<br><br>" +
            "(A) 'experienced' means having knowledge or skill in a particular field, especially a profession or job, gained over a period of time." +
            "<br><br>" +
            "(B) 'worldly' means experienced and sophisticated. It describes someone who has a lot of knowledge and experience about life and the world, especially about practical matters and culture." +
            "<br><br>" +
            "(D) 'sophisticated' means having, revealing, or proceeding from a great deal of worldly experience and knowledge of fashion and culture.",
        chinese_explanation: "(C) '天真的' 意味着缺乏经验、智慧或判断力的。" +
            "<br><br>" +
            "(A) '有经验的' 意味着在某个领域，尤其是职业或工作中有知识或技能，且经过一段时间获得的。" +
            "<br><br>" +
            "(B) '世故的' 意味着有经验和老练的。它描述的是一个对生活和世界有很多知识和经验的人，尤其是关于实际事务和文化方面的知识。" +
            "<br><br>" +
            "(D) '老练的' 意味着拥有、表现出或来自丰富的世故经验和时尚文化知识的。"
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
