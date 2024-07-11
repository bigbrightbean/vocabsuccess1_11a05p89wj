// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He felt __________ and uninterested in his usual activities, barely finding the energy to get out of bed.",
        chinese_question: "他感到 __________，对平常的活动毫无兴趣，几乎没有精力起床。",
        answers: [
            { option: "A", answer: "energetic", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
            { option: "B", answer: "enthusiastic", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "C", answer: "listless", chinese_answer: "无精打采的", chinese_romanization: "wújīng dǎcǎi de" },
            { option: "D", answer: "animated", chinese_answer: "生气勃勃的", chinese_romanization: "shēngqì bóbó de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'listless' means lacking energy or enthusiasm." +
            "<br><br>" +
            "(A) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(B) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(D) 'animated' means full of life or excitement; lively.",
        chinese_explanation: "(C) '无精打采的' 一词意味着缺乏能量或热情的。"+
            "<br><br>" +
            "(A) '精力充沛的' 意味着表现出或涉及大量活动或活力的。" +
            "<br><br>" +
            "(B) '热情的' 意味着具有或表现出强烈和热切的享受、兴趣或赞同的。" +
            "<br><br>" +
            "(D) '生气勃勃的' 意味着充满生命力或兴奋的；活泼的。"
    },
    {
        id: 2,
        question: "Her approval was __________ in her smile, even though she didn't say a word.",
        chinese_question: "她的微笑中 __________ 地表达了她的赞同，尽管她一句话也没说。",
        answers: [
            { option: "A", answer: "explicit", chinese_answer: "明确", chinese_romanization: "míngquè" },
            { option: "B", answer: "clear", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "C", answer: "implicit", chinese_answer: "含蓄", chinese_romanization: "hánxù" },
            { option: "D", answer: "overt", chinese_answer: "明显", chinese_romanization: "míngxiǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'implicit' means implied though not plainly expressed." +
            "<br><br>" +
            "(A) 'explicit' means stated clearly and in detail, leaving no room for confusion or doubt." +
            "<br><br>" +
            "(B) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(D) 'overt' means done or shown openly; plainly apparent.",
        chinese_explanation: "(C) '含蓄' 意味着暗示的，但没有明确表达。" +
            "<br><br>" +
            "(A) '明确' 意味着清晰和详细地陈述，没有留下困惑或怀疑的余地。" +
            "<br><br>" +
            "(B) '清晰' 意味着容易感知、理解或解释。" +
            "<br><br>" +
            "(D) '明显' 意味着公开地做或显示；显而易见的。"
    },
    {
        id: 3,
        question: "The criminal was sentenced to life in prison for his __________ acts, which shocked and horrified the entire community.",
        chinese_question: "罪犯因其 __________ 的行为被判终身监禁，这些行为震惊和恐吓了整个社区。",
        answers: [
            { option: "A", answer: "heinous", chinese_answer: "恶毒的", chinese_romanization: "èdú de" },
            { option: "B", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "C", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "D", answer: "forgivable", chinese_answer: "可原谅的", chinese_romanization: "kě yuánliàng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'heinous' means utterly odious or wicked." +
            "<br><br>" +
            "(B) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(C) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(D) 'forgivable' means able to be forgiven or pardoned.",
        chinese_explanation: "(A) '恶毒的' 意味着极其可恶或邪恶的。" +
            "<br><br>" +
            "(B) '琐碎的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(C) '次要的' 意味着在重要性、严重性或意义上较小的。" +
            "<br><br>" +
            "(D) '可原谅的' 意味着能够被原谅或赦免的。"
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
        question: "She made a __________ donation to the local shelter, helping them provide for those in need.",
        chinese_question: "她向当地避难所捐赠了一笔__________捐款，帮助他们为有需要的人提供帮助。",
        answers: [
            { option: "A", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" },
            { option: "B", answer: "stingy", chinese_answer: "吝啬的", chinese_romanization: "lìnsè de" },
            { option: "C", answer: "charitable", chinese_answer: "慈善的", chinese_romanization: "císhàn de" },
            { option: "D", answer: "greedy", chinese_answer: "贪婪的", chinese_romanization: "tānlán de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'charitable' means relating to the assistance of those in need." +
            "<br><br>" +
            "(A) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
            "<br><br>" +
            "(B) 'stingy' means unwilling to give or spend; ungenerous." +
            "<br><br>" +
            "(D) 'greedy' means having or showing an intense and selfish desire for something, especially wealth or power.",
        chinese_explanation: "(C) '慈善的' 一词意味着与帮助有需要的人有关。" +
            "<br><br>" +
            "(A) '自私的' 意味着缺乏对他人的考虑；主要关心自己的个人利益或快乐。" +
            "<br><br>" +
            "(B) '吝啬的' 意味着不愿意给予或花费；不慷慨的。" +
            "<br><br>" +
            "(D) '贪婪的' 意味着对某物，尤其是财富或权力，表现出强烈和自私的欲望。"
    },
    {
        id: 7,
        question: "After a long day of work, she felt __________ just sitting on her porch, watching the sunset.",
        chinese_question: "忙碌了一天后，她感到 __________，只是坐在门廊上看着日落。",
        answers: [
            { option: "A", answer: "content", chinese_answer: "满足的", chinese_romanization: "mǎnzú de" },
            { option: "B", answer: "restless", chinese_answer: "不安的", chinese_romanization: "bù'ān de" },
            { option: "C", answer: "anxious", chinese_answer: "焦虑的", chinese_romanization: "jiāolǜ de" },
            { option: "D", answer: "dissatisfied", chinese_answer: "不满意的", chinese_romanization: "bù mǎnyì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'content' means in a state of peaceful happiness." +
            "<br><br>" +
            "(B) 'restless' means unable to rest or relax due to anxiety or boredom." +
            "<br><br>" +
            "(C) 'anxious' means feeling or showing worry, nervousness, or unease." +
            "<br><br>" +
            "(D) 'dissatisfied' means not content or happy with something.",
        chinese_explanation: "(A) '满足的' 意味着处于平静幸福的状态。" +
            "<br><br>" +
            "(B) '不安的' 意味着由于焦虑或无聊而无法休息或放松的。" +
            "<br><br>" +
            "(C) '焦虑的' 意味着感到或表现出担忧、紧张或不安的。" +
            "<br><br>" +
            "(D) '不满意的' 意味着对某事不满意或不高兴的。"
    },
    {
        id: 8,
        question: "He was always __________ in completing his chores, never needing to be reminded.",
        chinese_question: "他总是__________地完成家务，从不需要提醒。",
        answers: [
            { option: "A", answer: "neglectful", chinese_answer: "忽视的", chinese_romanization: "hūshì de" },
            { option: "B", answer: "dutiful", chinese_answer: "尽职的", chinese_romanization: "jìnzhí de" },
            { option: "C", answer: "lazy", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" },
            { option: "D", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dutiful' means conscientiously or obediently fulfilling one's duty." +
            "<br><br>" +
            "(A) 'neglectful' means not giving proper care or attention to someone or something." +
            "<br><br>" +
            "(C) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(D) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
        chinese_explanation: "(B) '尽职的'一词意味着认真或顺从地履行职责。" +
            "<br><br>" +
            "(A) '忽视的' 意味着没有给予某人或某事适当的关心或注意。" +
            "<br><br>" +
            "(C) '懒惰的' 意味着不愿意工作或使用精力。" +
            "<br><br>" +
            "(D) '粗心的' 意味着没有给予足够的注意或考虑以避免伤害或错误。"
        },
        {
        id: 9,
        question: "The child became __________ when she couldn't find her parents in the crowded mall, crying uncontrollably.",
        chinese_question: "孩子在拥挤的商场找不到父母时变得 __________，哭得无法控制。",
        answers: [
            { option: "A", answer: "hysterical", chinese_answer: "歇斯底里的", chinese_romanization: "xiēsīdǐlǐ de" },
            { option: "B", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "C", answer: "composed", chinese_answer: "镇定的", chinese_romanization: "zhèndìng de" },
            { option: "D", answer: "tranquil", chinese_answer: "安静的", chinese_romanization: "ānjìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hysterical' means deriving from or affected by uncontrolled extreme emotion." +
            "<br><br>" +
            "(B) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(C) 'composed' means having one's feelings and expression under control; calm." +
            "<br><br>" +
            "(D) 'tranquil' means free from disturbance; calm.",
        chinese_explanation: "(A) '歇斯底里的' 意味着由无法控制的极端情绪引起的或受其影响的。" +
            "<br><br>" +
            "(B) '平静的' 意味着没有表现出或感到紧张、愤怒或其他强烈情绪的。" +
            "<br><br>" +
            "(C) '镇定的' 意味着将自己的感情和表达控制在控制之下；冷静的。" +
            "<br><br>" +
            "(D) '安静的' 意味着没有干扰的；平静的。"
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
