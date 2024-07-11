// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The story teaches a __________ about the importance of honesty.",
        chinese_question: "这个故事教导了一个关于诚实重要性的 __________。",
        answers: [
            { option: "A", answer: "moral", chinese_answer: "道德", chinese_romanization: "dàodé" },
            { option: "B", answer: "lie", chinese_answer: "谎言", chinese_romanization: "huǎngyán" },
            { option: "C", answer: "error", chinese_answer: "错误", chinese_romanization: "cuòwù" },
            { option: "D", answer: "joke", chinese_answer: "笑话", chinese_romanization: "xiàohuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'moral' means a lesson, especially one concerning what is right or prudent, that can be derived from a story, a piece of information, or an experience." + 
            "<br><br>" + 
            "(B) 'lie' means an intentionally false statement." + 
            "<br><br>" + 
            "(C) 'error' means a mistake." + 
            "<br><br>" + 
            "(D) 'joke' means a thing that someone says to cause amusement or laughter, especially a story with a funny punchline.",
        chinese_explanation: "(A) '道德' 意味着可以从故事、信息或经历中得出的关于正确或谨慎的教训。" + 
            "<br><br>" + 
            "(B) '谎言' 意味着故意的虚假陈述。" + 
            "<br><br>" + 
            "(C) '错误' 意味着一个错误。" + 
            "<br><br>" + 
            "(D) '笑话' 意味着某人说的一件事情，以引起娱乐或笑声，特别是一个有趣的结尾。"
    },
    {
        id: 2,
        question: "The scientist used a new __________ to conduct her research, which yielded interesting results.",
        chinese_question: "科学家使用了一种新的__________进行研究，得出了有趣的结果。",
        answers: [
            { option: "A", answer: "method", chinese_answer: "方法", chinese_romanization: "fāngfǎ" },
            { option: "B", answer: "guess", chinese_answer: "猜测", chinese_romanization: "cāicè" },
            { option: "C", answer: "mistake", chinese_answer: "错误", chinese_romanization: "cuòwù" },
            { option: "D", answer: "error", chinese_answer: "失误", chinese_romanization: "shīwù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'method' means a particular form of procedure for accomplishing or approaching something, especially a systematic or established one." +
            "<br><br>" +
            "(B) 'guess' means an estimate or supposition without sufficient information to be sure of being correct." +
            "<br><br>" +
            "(C) 'mistake' means an action or judgment that is misguided or wrong." +
            "<br><br>" +
            "(D) 'error' means a mistake.",
        chinese_explanation: "(A) '方法'一词意味着完成或接近某事的特定程序形式，尤其是系统的或既定的程序形式。" +
            "<br><br>" +
            "(B) '猜测' 意味着在没有足够信息来确定正确性的情况下进行估计或假设。" +
            "<br><br>" +
            "(C) '错误' 意味着误导或错误的行动或判断。" +
            "<br><br>" +
            "(D) '失误' 意味着错误。"
    },
    {
        id: 3,
        question: "The film production __________ worked day and night to complete the project on time.",
        chinese_question: "电影制作__________日夜工作，按时完成项目。",
        answers: [
            { option: "A", answer: "passengers", chinese_answer: "乘客", chinese_romanization: "chéngkè" },
            { option: "B", answer: "crew", chinese_answer: "团队", chinese_romanization: "tuánduì" },
            { option: "C", answer: "guests", chinese_answer: "客人", chinese_romanization: "kèrén" },
            { option: "D", answer: "tourists", chinese_answer: "游客", chinese_romanization: "yóukè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'crew' means a group of people who work on and operate a ship, aircraft, etc. Figuratively, it can mean a group of people working together on a common task." +
            "<br><br>" +
            "(A) 'passengers' means people who are traveling in a vehicle but are not operating it." +
            "<br><br>" +
            "(C) 'guests' means people who are invited to visit or stay in someone's home." +
            "<br><br>" +
            "(D) 'tourists' means people who travel for pleasure.",
        chinese_explanation: "(B) '团队' 一词意味着在船、飞机等上工作和操作的一群人。比喻地，它可以表示一群在共同任务上一起工作的人员。" +
            "<br><br>" +
            "(A) '乘客' 意味着在交通工具上旅行但不操作它的人。" +
            "<br><br>" +
            "(C) '客人' 意味着被邀请访问或留在某人家中的人。" +
            "<br><br>" +
            "(D) '游客' 意味着为娱乐而旅行的人。"
    },
    {
        id: 4,
        question: "The artist's new exhibit received __________ from critics, who praised its creativity and depth.",
        chinese_question: "这位艺术家的新展览得到了评论家的 __________，他们称赞其创意和深度。",
        answers: [
            { option: "A", answer: "disapproval", chinese_answer: "不赞成", chinese_romanization: "bùzànchéng" },
            { option: "B", answer: "approbation", chinese_answer: "赞许", chinese_romanization: "zànxǔ" },
            { option: "C", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'approbation' means approval or praise." +
            "<br><br>" +
            "(A) 'disapproval' means possession or expression of an unfavorable opinion." +
            "<br><br>" +
            "(C) 'apathy' means lack of interest, enthusiasm, or concern." +
            "<br><br>" +
            "(D) 'rejection' means the dismissing or refusing of a proposal, idea, etc.",
        chinese_explanation: "(B) '赞许' 意味着批准或称赞。" +
            "<br><br>" +
            "(A) '不赞成' 意味着持有或表达不赞成的意见。" +
            "<br><br>" +
            "(C) '冷漠' 意味着缺乏兴趣、热情或关心。" +
            "<br><br>" +
            "(D) '拒绝' 意味着驳回或拒绝一个提议、想法等。"
    },
    {
        id: 5,
        question: "The unexpected results of the election caused __________ among the citizens, who had been confident of a different outcome.",
        chinese_question: "选举的意外结果引起了市民们的 __________，他们原本对不同的结果充满信心。",
        answers: [
            { option: "A", answer: "happiness", chinese_answer: "幸福", chinese_romanization: "xìngfú" },
            { option: "B", answer: "relief", chinese_answer: "宽慰", chinese_romanization: "kuānwèi" },
            { option: "C", answer: "satisfaction", chinese_answer: "满意", chinese_romanization: "mǎnyì" },
            { option: "D", answer: "consternation", chinese_answer: "惊愕", chinese_romanization: "jīng'è" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'consternation' means feelings of anxiety or dismay, typically at something unexpected." +
            "<br><br>" +
            "(A) 'happiness' means the state of being happy." +
            "<br><br>" +
            "(B) 'relief' means a feeling of reassurance and relaxation following release from anxiety or distress." +
            "<br><br>" +
            "(C) 'satisfaction' means fulfillment of one's wishes, expectations, or needs, or the pleasure derived from this.",
        chinese_explanation: "(D) '惊愕' 意味着通常在意外事件发生时的焦虑或惊慌的感觉。" +
            "<br><br>" +
            "(A) '幸福' 意味着快乐的状态。" +
            "<br><br>" +
            "(B) '宽慰' 意味着从焦虑或痛苦中解脱后的一种放心和放松的感觉。" +
            "<br><br>" +
            "(C) '满意' 意味着满足一个人的愿望、期望或需求，或从中获得的愉悦。"
    },
    {
        id: 6,
        question: "His refusal to accept people from different cultures revealed him to be a __________.",
        chinese_question: "他拒绝接受不同文化的人，这表明他是一个__________。",
        answers: [
            { option: "A", answer: "bigot", chinese_answer: "偏执者", chinese_romanization: "piānzhí zhě" },
            { option: "B", answer: "fool", chinese_answer: "傻瓜", chinese_romanization: "shǎguā" },
            { option: "C", answer: "liberal", chinese_answer: "自由主义者", chinese_romanization: "zìyóu zhǔyì zhě" },
            { option: "D", answer: "progressive", chinese_answer: "进步的", chinese_romanization: "jìnbù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bigot' means a person who does not accept people who have different opinions or lifestyles." +
            "<br><br>" +
            "(B) 'fool' means a person who acts unwisely or imprudently; a silly person." +
            "<br><br>" +
            "(C) 'liberal' means a person who is open to new behavior and willing to change traditional ways." +
            "<br><br>" +
            "(D) 'progressive' means a person who supports new, modern ideas and social changes.",
        chinese_explanation: "(A) '偏执者' 一词意味着不接受持有不同意见或生活方式的人的人。" +
            "<br><br>" +
            "(B) '傻瓜' 意味着行为愚蠢或不谨慎的人；一个愚蠢的人。" +
            "<br><br>" +
            "(C) '自由主义者' 意味着对新行为持开放态度并愿意改变传统方式的人。" +
            "<br><br>" +
            "(D) '进步的' 意味着支持新的、现代的思想和社会变革的人。"
    },
    {
        id: 7,
        question: "The __________ of the cartoon characters was so lifelike that it felt like they were truly alive.",
        chinese_question: "卡通角色的 __________ 如此生动，感觉它们真的活了一样。",
        answers: [
            { option: "A", answer: "writing", chinese_answer: "写作", chinese_romanization: "xiězuò" },
            { option: "B", answer: "animation", chinese_answer: "动画", chinese_romanization: "dònghuà" },
            { option: "C", answer: "photography", chinese_answer: "摄影", chinese_romanization: "shèyǐng" },
            { option: "D", answer: "painting", chinese_answer: "绘画", chinese_romanization: "huìhuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'animation' means the technique of photographing successive drawings or positions of puppets or models to create an illusion of movement when the movie is shown as a sequence." +
            "<br><br>" +
            "(A) 'writing' means the activity or skill of marking coherent words on paper and composing text." +
            "<br><br>" +
            "(C) 'photography' means the art or practice of taking and processing photographs." +
            "<br><br>" +
            "(D) 'painting' means the process or art of using paint, in a picture, as a protective coating, or as decoration.",
        chinese_explanation: "(B) '动画' 一词意味着通过拍摄连续绘图或木偶或模型的位置来创造运动幻觉的技术，当电影作为序列放映时。" +
            "<br><br>" +
            "(A) '写作' 意味着在纸上标记连贯的词语和撰写文本的活动或技能。" +
            "<br><br>" +
            "(C) '摄影' 意味着拍摄和处理照片的艺术或实践。" +
            "<br><br>" +
            "(D) '绘画' 意味着使用颜料的过程或艺术，用于绘画、作为保护涂层或装饰。"
    },
    {
        id: 8,
        question: "He traced his family tree back several generations to find out more about his __________.",
        chinese_question: "他追溯了家谱几代，以了解更多关于他的 __________ 的信息。",
        answers: [
            { option: "A", answer: "descendants", chinese_answer: "后代", chinese_romanization: "hòudài" },
            { option: "B", answer: "neighbors", chinese_answer: "邻居", chinese_romanization: "línjū" },
            { option: "C", answer: "ancestors", chinese_answer: "祖先", chinese_romanization: "zǔxiān" },
            { option: "D", answer: "friends", chinese_answer: "朋友", chinese_romanization: "péngyǒu" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ancestorS' means a person, typically one more remote than a grandparent, from whom one is descended." +
            "<br><br>" +
            "(A) 'descendants' means a person, plant, or animal that is descended from a particular ancestor." +
            "<br><br>" +
            "(B) 'neighbors' means a person living near or next door to the speaker or person referred to." +
            "<br><br>" +
            "(D) 'friends' means a person with whom one has a bond of mutual affection, typically one exclusive of sexual or family relations.",
        chinese_explanation: "(C) '祖先' 一词意味着一个人，通常比祖父母更遥远，从中后裔。" +
            "<br><br>" +
            "(A) '后代' 意味着从特定祖先那里继承的人、植物或动物。" +
            "<br><br>" +
            "(B) '邻居' 意味着住在说话人或提到的人附近或隔壁的人。" +
            "<br><br>" +
            "(D) '朋友' 意味着与某人有互爱关系的人，通常不包括性或家庭关系。"
    },
    {
        id: 9,
        question: "The sponge's quick __________ of water made it ideal for cleaning up spills.",
        chinese_question: "海绵快速 __________ 水分，使其非常适合清理溢出物。",
        answers: [
            { option: "A", answer: "repulsion", chinese_answer: "排斥", chinese_romanization: "páichì" },
            { option: "B", answer: "absorption", chinese_answer: "吸收", chinese_romanization: "xīshōu" },
            { option: "C", answer: "evaporation", chinese_answer: "蒸发", chinese_romanization: "zhēngfā" },
            { option: "D", answer: "saturation", chinese_answer: "饱和", chinese_romanization: "bǎohé" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'absorption' means the process by which one thing absorbs or is absorbed by another." +
            "<br><br>" +
            "(A) 'repulsion' means a feeling of intense distaste or disgust." +
            "<br><br>" +
            "(C) 'evaporation' means the process of turning from liquid into vapor." +
            "<br><br>" +
            "(D) 'saturation' means the state or process that occurs when no more of something can be absorbed, combined with, or added.",
        chinese_explanation: "(B) '吸收' 一词意味着一个事物吸收或被另一个事物吸收的过程。" +
            "<br><br>" +
            "(A) '排斥' 意味着强烈的厌恶或反感的感觉。" +
            "<br><br>" +
            "(C) '蒸发' 意味着从液体变成蒸汽的过程。" +
            "<br><br>" +
            "(D) '饱和' 意味着当没有更多的某物可以被吸收、结合或添加时发生的状态或过程。"
    },
    {
        id: 10,
        question: "She had a deep interest in __________, often spending nights with her telescope observing the stars and planets.",
        chinese_question: "她对 __________ 有着浓厚的兴趣，经常晚上用望远镜观察星星和行星。",
        answers: [
            { option: "A", answer: "geology", chinese_answer: "地质学", chinese_romanization: "dìzhíxué" },
            { option: "B", answer: "biology", chinese_answer: "生物学", chinese_romanization: "shēngwùxué" },
            { option: "C", answer: "astronomy", chinese_answer: "天文学", chinese_romanization: "tiānwénxué" },
            { option: "D", answer: "chemistry", chinese_answer: "化学", chinese_romanization: "huàxué" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'astronomy' means the branch of science which deals with celestial objects, space, and the physical universe as a whole." +
            "<br><br>" +
            "(A) 'geology' means the science which deals with the Earth's physical structure and substance, its history, and the processes that act on it." +
            "<br><br>" +
            "(B) 'biology' means the study of living organisms, divided into many specialized fields." +
            "<br><br>" +
            "(D) 'chemistry' means the branch of science that deals with the identification of the substances of which matter is composed.",
        chinese_explanation: "(C) '天文学' 一词意味着处理天体、空间和整个物理宇宙的科学分支。" +
            "<br><br>" +
            "(A) '地质学' 意味着处理地球的物理结构和物质、其历史及其作用过程的科学。" +
            "<br><br>" +
            "(B) '生物学' 意味着研究生物的科学，分为许多专门领域。" +
            "<br><br>" +
            "(D) '化学' 意味着处理物质组成物质的识别的科学分支。"
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
