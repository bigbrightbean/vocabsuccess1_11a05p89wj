// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She was __________ in her preparations for the exam, ensuring that she reviewed every detail thoroughly.",
        chinese_question: "她在备考时非常 __________，确保彻底复习每一个细节。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "B", answer: "meticulous", chinese_answer: "一丝不苟的", chinese_romanization: "yīsī bùgǒu de" },
            { option: "C", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" },
            { option: "D", answer: "hasty", chinese_answer: "草率的", chinese_romanization: "cǎoshuài de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'meticulous' means showing great attention to detail; very careful and precise." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(C) 'negligent' means failing to take proper care in doing something." +
            "<br><br>" +
            "(D) 'hasty' means done or acting with excessive speed or urgency; hurried.",
        chinese_explanation: "(B) '一丝不苟的' 一词意味着对细节给予高度关注的；非常仔细和精确的。" +
            "<br><br>" +
            "(A) '粗心的' 意味着没有给予足够的注意或考虑以避免伤害或错误的。" +
            "<br><br>" +
            "(C) '疏忽的' 意味着在做某事时未能采取适当的照顾。" +
            "<br><br>" +
            "(D) '草率的' 意味着以过快的速度或紧迫感完成或行动的。"
    },
    {
        id: 2,
        question: "The room became __________ as everyone started talking and moving around at once.",
        chinese_question: "房间变得 __________，因为每个人都开始同时说话和走动。",
        answers: [
            { option: "A", answer: "organized", chinese_answer: "有组织的", chinese_romanization: "yǒu zǔzhī de" },
            { option: "B", answer: "calm", chinese_answer: "冷静的", chinese_romanization: "lěngjìng de" },
            { option: "C", answer: "orderly", chinese_answer: "有序的", chinese_romanization: "yǒuxù de" },
            { option: "D", answer: "chaotic", chinese_answer: "混乱的", chinese_romanization: "hùnluàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'chaotic' means in a state of complete confusion and disorder." +
            "<br><br>" +
            "(A) 'organized' means arranged in a systematic way." +
            "<br><br>" +
            "(B) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(C) 'orderly' means neatly and methodically arranged.",
        chinese_explanation: "(D) '混乱的' 一词意味着处于完全混乱和无序的状态。" +
            "<br><br>" +
            "(A) '有组织的' 意味着以系统的方式排列。" +
            "<br><br>" +
            "(B) '冷静的' 意味着不表现或感到紧张、愤怒或其他强烈情感。" +
            "<br><br>" +
            "(C) '有序的' 意味着整齐和有条理地排列。"
    },
    {
        id: 3,
        question: "The storm caused __________ damage to the coastal town, leaving many homes destroyed.",
        chinese_question: "风暴对沿海城镇造成了 __________ 的破坏，许多房屋被毁。",
        answers: [
            { option: "A", answer: "severe", chinese_answer: "严重的", chinese_romanization: "yánzhòng de" },
            { option: "B", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "C", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "D", answer: "slight", chinese_answer: "轻微的", chinese_romanization: "qīngwēi de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'severe' means (of something bad or undesirable) very great; intense." +
            "<br><br>" +
            "(B) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(C) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(D) 'slight' means small in degree; inconsiderable.",
        chinese_explanation: "(A) '严重的' 意味着（不好的或不想要的事情）非常大；强烈的。" +
            "<br><br>" +
            "(B) '次要的' 意味着在重要性、严重性或意义上较小的。" +
            "<br><br>" +
            "(C) '温和的' 意味着不严重、严重或苛刻的。" +
            "<br><br>" +
            "(D) '轻微的' 意味着程度小的；微不足道的。"
    },
    {
        id: 4,
        question: "The __________ river wound its way through the valley, creating a picturesque landscape with its gentle curves and bends.",
        chinese_question: "__________ 的河流蜿蜒穿过山谷，以其柔和的曲线和弯曲创造了如画的景观。",
        answers: [
            { option: "A", answer: "meandering", chinese_answer: "蜿蜒的", chinese_romanization: "wānyán de" },
            { option: "B", answer: "straight", chinese_answer: "直的", chinese_romanization: "zhí de" },
            { option: "C", answer: "direct", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" },
            { option: "D", answer: "focused", chinese_answer: "集中的", chinese_romanization: "jízhōng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'meandering' means following a winding course." +
            "<br><br>" +
            "(B) 'straight' means extending or moving uniformly in one direction only; without a curve or bend." +
            "<br><br>" +
            "(C) 'direct' means moving from one place to another by the shortest way without changing direction or stopping." +
            "<br><br>" +
            "(D) 'focused' means directing a great deal of attention, interest, or activity towards a particular aim.",
        chinese_explanation: "(A) '蜿蜒的' 意味着沿着弯曲的路线。" +
            "<br><br>" +
            "(B) '直的' 意味着仅沿一个方向延伸或移动；没有弯曲。" +
            "<br><br>" +
            "(C) '直接的' 意味着从一个地方到另一个地方最短的方式移动，没有改变方向或停下。" +
            "<br><br>" +
            "(D) '集中的' 意味着将大量注意力、兴趣或活动集中在一个特定目标上。"
    },
    {
        id: 5,
        question: "She was so engrossed in her work that she was completely __________ to the fact that it was already midnight.",
        chinese_question: "她完全沉浸在工作中，对已经是午夜 __________。",
        answers: [
            { option: "A", answer: "aware", chinese_answer: "意识到的", chinese_romanization: "yìshí dào de" },
            { option: "B", answer: "oblivious", chinese_answer: "无知觉的", chinese_romanization: "wú zhījué de" },
            { option: "C", answer: "conscious", chinese_answer: "有知觉的", chinese_romanization: "yǒu zhījué de" },
            { option: "D", answer: "mindful", chinese_answer: "留心的", chinese_romanization: "liúxīn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'oblivious' means not aware of or not concerned about what is happening around one." +
            "<br><br>" +
            "(A) 'aware' means having knowledge or perception of a situation or fact." +
            "<br><br>" +
            "(C) 'conscious' means aware of and responding to one's surroundings." +
            "<br><br>" +
            "(D) 'mindful' means conscious or aware of something.",
        chinese_explanation: "(B) '无知觉的' 意味着没有意识到或不关心周围发生的事情。" +
            "<br><br>" +
            "(A) '意识到的' 意味着对某种情况或事实有知识或感知。" +
            "<br><br>" +
            "(C) '有知觉的' 意味着意识到并回应周围环境。" +
            "<br><br>" +
            "(D) '留心的' 意味着对某事有意识或意识到。"
    },
    {
        id: 6,
        question: "The __________ statue in the park towered over the trees and buildings, attracting tourists from all around.",
        chinese_question: "公园里的__________雕像高耸入云，吸引了各地的游客。",
        answers: [
            { option: "A", answer: "small", chinese_answer: "小的", chinese_romanization: "xiǎo de" },
            { option: "B", answer: "average", chinese_answer: "平均的", chinese_romanization: "píngjūn de" },
            { option: "C", answer: "gigantic", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
            { option: "D", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gigantic' means extremely large." +
            "<br><br>" +
            "(A) 'small' means of a size that is less than normal or usual." +
            "<br><br>" +
            "(B) 'average' means typical or usual." +
            "<br><br>" +
            "(D) 'modest' means unassuming or moderate in the estimation of one's abilities.",
        chinese_explanation: "(C) '巨大的'一词意味着极大的。" +
            "<br><br>" +
            "(A) '小的' 意味着小于正常或通常大小的。" +
            "<br><br>" +
            "(B) '平均的' 意味着典型或通常的。" +
            "<br><br>" +
            "(D) '谦虚的' 意味着对自己能力的估计不高的。"
    },
    {
        id: 7,
        question: "She appreciated his __________ feedback, even though it was sometimes hard to hear.",
        chinese_question: "她很感激他的 __________ 反馈，尽管有时候听起来很刺耳。",
        answers: [
            { option: "A", answer: "candid", chinese_answer: "坦率的", chinese_romanization: "tǎnshuài de" },
            { option: "B", answer: "dishonest", chinese_answer: "不诚实的", chinese_romanization: "bù chéngshí de" },
            { option: "C", answer: "evasive", chinese_answer: "含糊其辞的", chinese_romanization: "hánhú qí cí de" },
            { option: "D", answer: "misleading", chinese_answer: "误导的", chinese_romanization: "wùdǎo de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'candid' means truthful and straightforward; frank." +
            "<br><br>"+
            "(B) 'dishonest' means behaving or prone to behave in an untrustworthy or fraudulent way." +
            "<br><br>" +
            "(C) 'evasive' means tending to avoid commitment or self-revelation, especially by responding only indirectly." +
            "<br><br>" +
            "(D) 'misleading' means giving the wrong idea or impression.",
        chinese_explanation: "(A) '坦率的' 意味着诚实和直率的；坦白的。" +
            "<br><br>" +
            "(B) '不诚实的' 意味着行为或倾向于行为不可信或欺诈的方式。" +
            "<br><br>" +
            "(C) '含糊其辞的' 意味着倾向于避免承诺或自我揭露，特别是通过仅间接地回应。" +
            "<br><br>" +
            "(D) '误导的' 意味着给人错误的想法或印象。"
    },
    {
        id: 8,
        question: "Their __________ goal was to create a sustainable, eco-friendly community.",
        chinese_question: "他们的 __________ 目标是创建一个可持续的、环保的社区。",
        answers: [
            { option: "A", answer: "ultimate", chinese_answer: "最终的", chinese_romanization: "zuìzhōng de" },
            { option: "B", answer: "initial", chinese_answer: "初步的", chinese_romanization: "chūbù de" },
            { option: "C", answer: "temporary", chinese_answer: "暂时的", chinese_romanization: "zànshí de" },
            { option: "D", answer: "intermediate", chinese_answer: "中间的", chinese_romanization: "zhōngjiān de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ultimate' means being or happening at the end of a process; final." +
            "<br><br>" +
            "(B) 'initial' means existing or occurring at the beginning." +
            "<br><br>" +
            "(C) 'temporary' means lasting for only a limited period of time; not permanent." +
            "<br><br>" +
            "(D) 'intermediate' means coming between two things in time, place, order, character, etc.",
        chinese_explanation: "(A) '最终的' 意味着在过程结束时发生的；最终的。" +
            "<br><br>" +
            "(B) '初步的' 意味着在开始时存在或发生的。" +
            "<br><br>" +
            "(C) '暂时的' 意味着仅持续有限时间的；不永久的。" +
            "<br><br>" +
            "(D) '中间的' 意味着在时间、地点、顺序、性格等方面介于两者之间的。"
    },
    {
        id: 9,
        question: "The documentary highlighted several __________ issues, such as income inequality and access to education, that need urgent attention.",
        chinese_question: "这部纪录片强调了几个需要紧急关注的 __________ 问题，如收入不平等和教育机会。",
        answers: [
            { option: "A", answer: "personal", chinese_answer: "个人的", chinese_romanization: "gèrén de" },
            { option: "B", answer: "technical", chinese_answer: "技术的", chinese_romanization: "jìshù de" },
            { option: "C", answer: "historical", chinese_answer: "历史的", chinese_romanization: "lìshǐ de" },
            { option: "D", answer: "societal", chinese_answer: "社会的", chinese_romanization: "shèhuì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'societal' means relating to society or social relations." +
            "<br><br>" +
            "(A) 'personal' means relating to an individual's private life." +
            "<br><br>" +
            "(B) 'technical' means relating to a particular subject, art, or craft, or its techniques." +
            "<br><br>" +
            "(C) 'historical' means relating to past events.",
        chinese_explanation: "(D) '社会的' 意味着与社会或社会关系有关的。" +
            "<br><br>" +
            "(A) '个人的' 意味着与个人的私人生活有关的。" +
            "<br><br>" +
            "(B) '技术的' 意味着与特定主题、艺术或工艺或其技术有关的。" +
            "<br><br>" +
            "(C) '历史的' 意味着与过去事件有关的。"
    },
    {
        id: 10,
        question: "She is an __________ woman who prefers to handle things on her own.",
        chinese_question: "她是一个__________的女人，喜欢自己处理事情。",
        answers: [
            { option: "A", answer: "dependent", chinese_answer: "依赖的", chinese_romanization: "yīlài de" },
            { option: "B", answer: "reliant", chinese_answer: "依靠的", chinese_romanization: "yīkào de" },
            { option: "C", answer: "independent", chinese_answer: "独立的", chinese_romanization: "dúlì de" },
            { option: "D", answer: "helpless", chinese_answer: "无助的", chinese_romanization: "wúzhù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'independent' means free from outside control; not subject to another's authority." +
            "<br><br>" +
            "(A) 'dependent' means requiring someone or something for financial, emotional, or other support." +
            "<br><br>" +
            "(B) 'reliant' means dependent on someone or something." +
            "<br><br>" +
            "(D) 'helpless' means unable to defend oneself or to act without help.",
        chinese_explanation: "(C) '独立的' 意味着不受外部控制；不受他人权威约束。" +
            "<br><br>" +
            "(A) '依赖的' 意味着需要某人或某物提供财务、情感或其他支持。" +
            "<br><br>" +
            "(B) '依靠的' 意味着依赖于某人或某物。" +
            "<br><br>" +
            "(D) '无助的' 意味着无法自卫或在没有帮助的情况下行动。"
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
