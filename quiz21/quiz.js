// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ actions earned him the hatred of everyone in the community.",
        chinese_question: "他的__________行为使他赢得了社区每个人的仇恨。",
        answers: [
            { option: "A", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "B", answer: "agreeable", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" },
            { option: "C", answer: "odious", chinese_answer: "令人厌恶的", chinese_romanization: "lìng rén yànwù de" },
            { option: "D", answer: "delightful", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'odious' means extremely unpleasant; repulsive." +
            "<br><br>" +
            "(A) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(B) 'agreeable' means enjoyable and pleasurable; pleasant." +
            "<br><br>" +
            "(D) 'delightful' means causing delight; charming.",
        chinese_explanation: "(C) '令人厌恶的' 一词意味着极其令人不快的；令人反感的。" +
            "<br><br>" +
            "(A) '愉快的' 意味着给予愉快满足或享受的。" +
            "<br><br>" +
            "(B) '令人愉快的' 意味着令人享受和愉快的；愉快的。" +
            "<br><br>" +
            "(D) '令人愉快的' 意味着引起愉快的；迷人的。"
    },
    {
        id: 2,
        question: "The __________ children ran around the park, making it difficult for their parents to keep an eye on them.",
        chinese_question: "这些 __________ 的孩子在公园里跑来跑去，使他们的父母很难看住他们。",
        answers: [
            { option: "A", answer: "obedient", chinese_answer: "顺从", chinese_romanization: "shùncóng" },
            { option: "B", answer: "unruly", chinese_answer: "不守规矩", chinese_romanization: "bù shǒu guījǔ" },
            { option: "C", answer: "placid", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "D", answer: "subdued", chinese_answer: "克制", chinese_romanization: "kèzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unruly' means disorderly and disruptive and not amenable to discipline or control." +
            "<br><br>" +
            "(A) 'obedient' means willing to comply with an order or request; submissive to another's will." +
            "<br><br>" +
            "(C) 'placid' means not easily upset or excited." +
            "<br><br>" +
            "(D) 'subdued' means quiet and rather reflective or depressed.",
        chinese_explanation: "(B) '不守规矩' 一词意味着无序和破坏性且不服从纪律或控制。" +
            "<br><br>" +
            "(A) '顺从' 意味着愿意服从命令或要求；服从他人的意愿。" +
            "<br><br>" +
            "(C) '平静' 意味着不容易生气或兴奋。" +
            "<br><br>" +
            "(D) '克制' 意味着安静且相当反思或沮丧。"
    },
    {
        id: 3,
        question: "Her comments during the meeting were __________ and helped address the main issues.",
        chinese_question: "她在会议上的评论是__________的，帮助解决了主要问题。",
        answers: [
            { option: "A", answer: "irrelevant", chinese_answer: "不相关的", chinese_romanization: "bù xiāngguān de" },
            { option: "B", answer: "unrelated", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
            { option: "C", answer: "relevant", chinese_answer: "相关的", chinese_romanization: "xiāngguān de" },
            { option: "D", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'relevant' means closely connected or appropriate to the matter at hand." +
            "<br><br>" +
            "(A) 'irrelevant' means not connected with or relevant to something." +
            "<br><br>" +
            "(B) 'unrelated' means not related or linked." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(C) '相关的'一词意味着与当前问题紧密相关或适当的。" +
            "<br><br>" +
            "(A) '不相关的' 意味着与某事没有联系或不相关的。" +
            "<br><br>" +
            "(B) '无关的' 意味着没有联系或连接的。" +
            "<br><br>" +
            "(D) '琐碎的' 意味着价值或重要性很小的。"
    },
    {
        id: 4,
        question: "She only makes __________ visits to the office, preferring to work from home.",
        chinese_question: "她只__________地去办公室，更喜欢在家工作。",
        answers: [
            { option: "A", answer: "frequent", chinese_answer: "频繁的", chinese_romanization: "pínfán de" },
            { option: "B", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
            { option: "C", answer: "regular", chinese_answer: "定期的", chinese_romanization: "dìngqī de" },
            { option: "D", answer: "constant", chinese_answer: "持续的", chinese_romanization: "chíxù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'occasional' means occurring, appearing, or done infrequently and irregularly." +
            "<br><br>" +
            "(A) 'frequent' means occurring or done on many occasions, in many cases, or in quick succession." +
            "<br><br>" +
            "(C) 'regular' means arranged in or constituting a constant or definite pattern, especially with the same space between individual instances." +
            "<br><br>" +
            "(D) 'constant' means occurring continuously over a period of time.",
        chinese_explanation: "(B) '偶尔的' 一词意味着不频繁和不规则地发生、出现或完成的。" +
            "<br><br>" +
            "(A) '频繁的' 意味着在许多场合、许多情况下或连续迅速发生的。" +
            "<br><br>" +
            "(C) '定期的' 意味着安排成或构成一个恒定或明确的模式，尤其是在各个实例之间有相同的间距。" +
            "<br><br>" +
            "(D) '持续的' 意味着在一段时间内持续发生的。"

    },
    {
        id: 5,
        question: "The team was __________ after winning the championship, celebrating their victory with cheers and laughter.",
        chinese_question: "球队在赢得冠军后感到__________，以欢呼和笑声庆祝他们的胜利。",
        answers: [
            { option: "A", answer: "depressed", chinese_answer: "沮丧的", chinese_romanization: "jǔsàng de" },
            { option: "B", answer: "sorrowful", chinese_answer: "悲伤的", chinese_romanization: "bēishāng de" },
            { option: "C", answer: "despondent", chinese_answer: "沮丧的", chinese_romanization: "jǔsàng de" },
            { option: "D", answer: "jubilant", chinese_answer: "欢腾的", chinese_romanization: "huānténg de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'jubilant' means feeling or expressing great happiness and triumph." +
            "<br><br>" +
            "(A) 'depressed' means in a state of general unhappiness or despondency." +
            "<br><br>" +
            "(B) 'sorrowful' means feeling or showing grief." +
            "<br><br>" +
            "(C) 'despondent' means in low spirits from loss of hope or courage.",
        chinese_explanation: "(D) '欢腾的'一词意味着感到或表达极大的快乐和胜利。" +
            "<br><br>" +
            "(A) '沮丧的' 意味着处于普遍不快乐或失望的状态。" +
            "<br><br>" +
            "(B) '悲伤的' 意味着感到或表现出悲伤。" +
            "<br><br>" +
            "(C) '沮丧的' 意味着因失去希望或勇气而情绪低落。"
    },
    {
        id: 6,
        question: "The construction workers found the task of lifting heavy steel beams and working long hours in the hot sun to be incredibly __________.",
        chinese_question: "建筑工人发现搬运沉重的钢梁和在炎热的阳光下长时间工作非常 __________。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "B", answer: "leisurely", chinese_answer: "悠闲的", chinese_romanization: "yōuxián de" },
            { option: "C", answer: "brief", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "D", answer: "strenuous", chinese_answer: "费力的", chinese_romanization: "fèilì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'strenuous' means requiring or using great exertion." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(B) 'leisurely' means acting or done at leisure; unhurried or relaxed." +
            "<br><br>" +
            "(C) 'brief' means of short duration.",
        chinese_explanation: "(D) '费力的' 意味着需要或使用很大的努力。" +
            "<br><br>" +
            "(A) '简单的' 意味着容易理解或完成的；没有困难的。" +
            "<br><br>" +
            "(B) '悠闲的' 意味着在闲暇时进行的；不慌不忙或放松的。" +
            "<br><br>" +
            "(C) '短暂的' 意味着持续时间短的。"
    },
    {
        id: 7,
        question: "The __________ monk spent his days in prayer and helping the poor.",
        chinese_question: "这位__________的僧侣每天都在祈祷和帮助穷人。",
        answers: [
            { option: "A", answer: "secular", chinese_answer: "世俗的", chinese_romanization: "shìsú de" },
            { option: "B", answer: "irreligious", chinese_answer: "不宗教的", chinese_romanization: "bù zōngjiào de" },
            { option: "C", answer: "pious", chinese_answer: "虔诚的", chinese_romanization: "qiánchéng de" },
            { option: "D", answer: "worldly", chinese_answer: "俗世的", chinese_romanization: "súshì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pious' means devoutly religious." +
            "<br><br>" +
            "(A) 'secular' means not connected with religious or spiritual matters." +
            "<br><br>" +
            "(B) 'irreligious' means indifferent or hostile to religion." +
            "<br><br>" +
            "(D) 'worldly' means concerned with material values or ordinary life rather than a spiritual existence.",
        chinese_explanation: "(C) '虔诚的' 一词意味着虔诚的宗教信仰。" +
            "<br><br>" +
            "(A) '世俗的' 意味着与宗教或精神事务无关的。" +
            "<br><br>" +
            "(B) '不宗教的' 意味着对宗教无兴趣或敌对的。" +
            "<br><br>" +
            "(D) '俗世的' 意味着关注物质价值或普通生活而不是精神存在的。"
    },
    {
        id: 8,
        question: "The café was known for its __________ decor, featuring mismatched furniture and eccentric artwork.",
        chinese_question: "这家咖啡馆以其 __________ 的装饰而闻名，特色是风格不一的家具和古怪的艺术品。",
        answers: [
            { option: "A", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
            { option: "B", answer: "traditional", chinese_answer: "一般的", chinese_romanization: "yībān de" },
            { option: "C", answer: "quirky", chinese_answer: "古怪的", chinese_romanization: "gǔguài de" },
            { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'quirky' means characterized by peculiar or unexpected traits." +
            "<br><br>" +
            "(A) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(B) 'traditional' means existing in or as part of a tradition; long-established." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(C) '古怪的' 意味着具有独特或出乎意料的特点。" +
            "<br><br>" +
            "(A) '传统的' 意味着基于或符合普遍做法或信仰的。" +
            "<br><br>" +
            "(B) '传统的' 意味着存在或作为传统的一部分；长期建立的。" +
            "<br><br>" +
            "(D) '普通的' 意味着没有特别或独特的特征的；正常的。"
    },
    {
        id: 9,
        question: "Making __________ decisions can lead to a more successful and fulfilling life.",
        chinese_question: "做出__________的决定可以带来更成功和充实的生活。",
        answers: [
            { option: "A", answer: "foolish", chinese_answer: "愚蠢的", chinese_romanization: "yúchǔn de" },
            { option: "B", answer: "wise", chinese_answer: "明智的", chinese_romanization: "míngzhì de" },
            { option: "C", answer: "ignorant", chinese_answer: "无知的", chinese_romanization: "wúzhī de" },
            { option: "D", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'wise' means having or showing experience, knowledge, and good judgment. Figuratively, it can mean making well-thought-out and sensible decisions." +
            "<br><br>" +
            "(A) 'foolish' means lacking good sense or judgment; unwise." +
            "<br><br>" +
            "(C) 'ignorant' means lacking knowledge or awareness in general; uneducated or unsophisticated." +
            "<br><br>" +
            "(D) 'reckless' means without thinking or caring about the consequences of an action.",
        chinese_explanation: "(B) '明智的'一词意味着拥有或表现出经验、知识和良好的判断力。比喻地，它可以表示做出经过深思熟虑和明智的决定。" +
            "<br><br>" +
            "(A) '愚蠢的' 意味着缺乏良好的判断力；不明智的。" +
            "<br><br>" +
            "(C) '无知的' 意味着缺乏一般知识或意识；未受教育或不成熟的。" +
            "<br><br>" +
            "(D) '鲁莽的' 意味着不考虑或不关心行动的后果。"
    },
    {
        id: 10,
        question: "The __________ material allowed water to seep through, making it unsuitable for holding liquids.",
        chinese_question: "这种 __________ 的材料让水渗透过来，因此不适合盛放液体。",
        answers: [
            { option: "A", answer: "solid", chinese_answer: "固体的", chinese_romanization: "gùtǐ de" },
            { option: "B", answer: "impermeable", chinese_answer: "不透水的", chinese_romanization: "bù tòushuǐ de" },
            { option: "C", answer: "porous", chinese_answer: "多孔的", chinese_romanization: "duō kǒng de" },
            { option: "D", answer: "dense", chinese_answer: "密集的", chinese_romanization: "mìjí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'porous' means having minute spaces or holes through which liquid or air may pass." +
            "<br><br>" +
            "(A) 'solid' means firm and stable in shape; not liquid or fluid." +
            "<br><br>" +
            "(B) 'impermeable' means not allowing fluid to pass through." +
            "<br><br>" +
            "(D) 'dense' means closely compacted in substance.",
        chinese_explanation: "(C) '多孔的' 意味着有微小的空间或孔隙，可以让液体或空气通过。" +
            "<br><br>" +
            "(A) '固体的' 意味着形状坚固稳定的；不是液体或流体。" +
            "<br><br>" +
            "(B) '不透水的' 意味着不允许液体通过的。" +
            "<br><br>" +
            "(D) '密集的' 意味着物质紧密压实的。"
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
