// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________, a seasoned officer with years of battlefield experience, led his platoon with confidence and strategic insight during the mission.",
        chinese_question: "这位具有多年战场经验的中尉在任务期间以自信和战略眼光领导了他的排__________。",
        answers: [
            { option: "A", answer: "lieutenant", chinese_answer: "中尉", chinese_romanization: "zhōngwèi" },
            { option: "B", answer: "private", chinese_answer: "士兵", chinese_romanization: "shìbīng" },
            { option: "C", answer: "civilian", chinese_answer: "平民", chinese_romanization: "píngmín" },
            { option: "D", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'lieutenant' means a rank of officer in the army, navy, or air force, or a deputy or assistant of a superior officer. They often lead small units and are responsible for their training and welfare." +
            "<br><br>" +
            "(B) 'private' means a soldier of the lowest military rank." +
            "<br><br>" +
            "(C) 'civilian' means a person not in the armed services or the police force." +
            "<br><br>" +
            "(D) 'novice' means a person new to and inexperienced in a job or situation.",
        chinese_explanation: "(A) '中尉' 一词意味着军队、海军或空军中的军官级别，或上级军官的副手或助理。他们通常领导小单位，并负责他们的训练和福利。" +
            "<br><br>" +
            "(B) '士兵' 意味着最低军衔的士兵。" +
            "<br><br>" +
            "(C) '平民' 意味着非武装部队或警察部队的人。" +
            "<br><br>" +
            "(D) '新手' 意味着在工作或情况中没有经验的新手。"
    },
    {
        id: 2,
        question: "The __________ of trucks and vans delivered the supplies to the remote village after the disaster.",
        chinese_question: "在灾难发生后，这些卡车和货车组成的 __________ 把物资运送到了偏远的村庄。",
        answers: [
            { option: "A", answer: "parade", chinese_answer: "游行", chinese_romanization: "yóuxíng" },
            { option: "B", answer: "convoy", chinese_answer: "车队", chinese_romanization: "chēduì" },
            { option: "C", answer: "fleet", chinese_answer: "船队", chinese_romanization: "chuánduì" },
            { option: "D", answer: "procession", chinese_answer: "队伍", chinese_romanization: "duìwu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'convoy' means a group of ships or vehicles traveling together, typically one accompanied by armed troops, warships, or other vehicles for protection." +
            "<br><br>" +
            "(A) 'parade' means a public procession, especially one celebrating a special day or event." +
            "<br><br>" +
            "(C) 'fleet' means a group of ships sailing together, engaged in the same activity, or under the same ownership." +
            "<br><br>" +
            "(D) 'procession' means a number of people or vehicles moving forward in an orderly fashion, especially as part of a ceremony.",
        chinese_explanation: "(B) '车队' 一词意味着一起行驶的船只或车辆群，通常伴有武装部队、军舰或其他车辆进行保护。" +
            "<br><br>" +
            "(A) '游行' 意味着公共游行，特别是庆祝特别日子或事件的游行。" +
            "<br><br>" +
            "(C) '船队' 意味着一起航行的船只群，参与同一活动或属于同一所有权。" +
            "<br><br>" +
            "(D) '队伍' 意味着一群人或车辆有序地前进，特别是作为仪式的一部分。"
    },
    {
        id: 3,
        question: "With a simple __________, he signaled his agreement to the plan without saying a word.",
        chinese_question: "通过一个简单的 __________，他在没有说话的情况下表示同意这个计划。",
        answers: [
            { option: "A", answer: "word", chinese_answer: "词", chinese_romanization: "cí" },
            { option: "B", answer: "text", chinese_answer: "文本", chinese_romanization: "wénběn" },
            { option: "C", answer: "expression", chinese_answer: "表情", chinese_romanization: "biǎoqíng" },
            { option: "D", answer: "gesture", chinese_answer: "手势", chinese_romanization: "shǒushì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'gesture' means a movement of part of the body, especially a hand or the head, to express an idea or meaning." +
            "<br><br>" +
            "(A) 'word' means a single distinct meaningful element of speech or writing." +
            "<br><br>" +
            "(B) 'text' means a book or other written or printed work, regarded in terms of its content rather than its physical form." +
            "<br><br>" +
            "(C) 'expression' means the process of making known one's thoughts or feelings.",
        chinese_explanation: "(D) '手势' 一词意味着身体的一部分的移动，尤其是手或头部，以表达一个想法或意义。" +
            "<br><br>" +
            "(A) '词' 意味着演讲或写作中一个独特有意义的元素。" +
            "<br><br>" +
            "(B) '文本' 意味着书籍或其他书面或印刷的作品，主要是从内容而不是物理形式来看。" +
            "<br><br>" +
            "(C) '表情' 意味着表达思想或感情的过程。"
    },
    {
        id: 4,
        question: "The __________ left his home country to seek a better life abroad.",
        chinese_question: "这个 __________ 离开了自己的祖国，去国外寻找更好的生活。",
        answers: [
            { option: "A", answer: "immigrant", chinese_answer: "移民", chinese_romanization: "yímín" },
            { option: "B", answer: "emigrant", chinese_answer: "移居者", chinese_romanization: "yíjū zhě" },
            { option: "C", answer: "tourist", chinese_answer: "游客", chinese_romanization: "yóukè" },
            { option: "D", answer: "native", chinese_answer: "本地人", chinese_romanization: "běndì rén" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'emigrant' means a person who leaves their own country in order to settle permanently in another." +
            "<br><br>" +
            "(A) 'immigrant' means a person who comes to live permanently in a foreign country." +
            "<br><br>" +
            "(C) 'tourist' means a person who is traveling or visiting a place for pleasure." +
            "<br><br>" +
            "(D) 'native' means a person born in a specified place or associated with a place by birth.",
        chinese_explanation: "(B) '移居者' 一词意味着一个人离开自己的国家以在另一个国家永久定居。" +
            "<br><br>" +
            "(A) '移民' 意味着一个人来到外国永久居住。" +
            "<br><br>" +
            "(C) '游客' 意味着一个人为了娱乐而旅行或访问某地。" +
            "<br><br>" +
            "(D) '本地人' 意味着在特定地方出生或与出生地相关的人。"
    },
    {
        id: 5,
        question: "The __________ of the crowd outside the stadium grew louder as the game was about to start.",
        chinese_question: "当比赛即将开始时，体育场外人群的 __________ 声越来越大。",
        answers: [
            { option: "A", answer: "silence", chinese_answer: "安静", chinese_romanization: "ānjìng" },
            { option: "B", answer: "clamour", chinese_answer: "喧闹", chinese_romanization: "xuānnào" },
            { option: "C", answer: "quiet", chinese_answer: "寂静", chinese_romanization: "jìjìng" },
            { option: "D", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'clamour' means a loud and confused noise, especially that of people shouting." +
            "<br><br>" +
            "(A) 'silence' means complete absence of sound." +
            "<br><br>" +
            "(C) 'quiet' means the absence of noise or bustle; silence; calm." +
            "<br><br>" +
            "(D) 'peace' means freedom from disturbance; tranquility.",
        chinese_explanation: "(B) '喧闹' 一词意味着响亮而混乱的声音，尤其是人们的喊叫声。" +
            "<br><br>" +
            "(A) '安静' 意味着完全没有声音。" +
            "<br><br>" +
            "(C) '寂静' 意味着没有噪音或忙乱；安静；平静。" +
            "<br><br>" +
            "(D) '和平' 意味着没有干扰的自由；宁静。"
    },
    {
        id: 6,
        question: "The wealthy businessman hired a personal __________ to drive him around the city in his luxury car.",
        chinese_question: "富有的商人雇了一名私人 __________，驾驶他的豪华轿车在城市里四处转。",
        answers: [
            { option: "A", answer: "chauffeur", chinese_answer: "司机", chinese_romanization: "sījī" },
            { option: "B", answer: "cook", chinese_answer: "厨师", chinese_romanization: "chúshī" },
            { option: "C", answer: "secretary", chinese_answer: "秘书", chinese_romanization: "mìshū" },
            { option: "D", answer: "gardener", chinese_answer: "园丁", chinese_romanization: "yuándīng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chauffeur' means a person employed to drive a private or rented automobile." +
            "<br><br>" +
            "(B) 'cook' means a person who prepares and cooks food." +
            "<br><br>" +
            "(C) 'secretary' means a person employed to assist with correspondence, keep records, make appointments, and carry out similar tasks." +
            "<br><br>" +
            "(D) 'gardener' means a person who tends and cultivates a garden as a pastime or for a living.",
        chinese_explanation: "(A) '司机' 一词意味着被雇用来驾驶私人或租用汽车的人。" +
            "<br><br>" +
            "(B) '厨师' 意味着准备和烹饪食物的人。" +
            "<br><br>" +
            "(C) '秘书' 意味着受雇协助处理信件、记录、预约和执行类似任务的人。" +
            "<br><br>" +
            "(D) '园丁' 意味着以爱好或职业为目的的照料和培育花园的人。"
    },
    {
        id: 7,
        question: "He always carried a __________ with him, believing it brought him good luck and protection.",
        chinese_question: "他总是随身带着一个 __________，相信它能带来好运和保护。",
        answers: [
            { option: "A", answer: "document", chinese_answer: "文件", chinese_romanization: "wénjiàn" },
            { option: "B", answer: "weapon", chinese_answer: "武器", chinese_romanization: "wǔqì" },
            { option: "C", answer: "talisman", chinese_answer: "护身符", chinese_romanization: "hùshēnfú" },
            { option: "D", answer: "recipe", chinese_answer: "食谱", chinese_romanization: "shípǔ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'talisman' means an object thought to have magic powers and to bring good luck." +
            "<br><br>" +
            "(A) 'document' means a piece of written, printed, or electronic matter that provides information." +
            "<br><br>" +
            "(B) 'weapon' means a thing designed or used for inflicting bodily harm or physical damage." +
            "<br><br>" +
            "(D) 'recipe' means a set of instructions for preparing a particular dish.",
        chinese_explanation: "(C) '护身符' 一词意味着被认为具有魔力并带来好运的物品。" +
            "<br><br>" +
            "(A) '文件' 意味着提供信息的书面、打印或电子材料。" +
            "<br><br>" +
            "(B) '武器' 意味着设计或用于造成身体伤害或物理破坏的物品。" +
            "<br><br>" +
            "(D) '食谱' 意味着准备特定菜肴的一套说明。"
    },
    {
        id: 8,
        question: "After several failed attempts, his __________ was evident as he threw the broken tool aside in anger.",
        chinese_question: "几次尝试失败后，他的 __________ 显而易见，他愤怒地把破损的工具扔到一边。",
        answers: [
            { option: "A", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "B", answer: "frustration", chinese_answer: "挫败", chinese_romanization: "cuòbài" },
            { option: "C", answer: "satisfaction", chinese_answer: "满意", chinese_romanization: "mǎnyì" },
            { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'frustration' means the feeling of being upset or annoyed, especially because of inability to change or achieve something." +
            "<br><br>" +
            "(A) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(C) 'satisfaction' means fulfillment of one's wishes, expectations, or needs." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(B) '挫败' 一词意味着感到沮丧或烦恼，尤其是因为无法改变或实现某事。" +
            "<br><br>" +
            "(A) '快乐' 意味着极大的愉悦和幸福感。" +
            "<br><br>" +
            "(C) '满意' 意味着实现自己的愿望、期望或需求。" +
            "<br><br>" +
            "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 9,
        question: "The scientist formulated a __________ to explain the strange phenomena observed in the experiment, which she planned to test further.",
        chinese_question: "科学家提出了一个 __________ 来解释在实验中观察到的奇怪现象，她计划进一步测试。",
        answers: [
            { option: "A", answer: "conclusion", chinese_answer: "结论", chinese_romanization: "jiélùn" },
            { option: "B", answer: "fact", chinese_answer: "事实", chinese_romanization: "shìshí" },
            { option: "C", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìngxìng" },
            { option: "D", answer: "hypothesis", chinese_answer: "假设", chinese_romanization: "jiǎshè" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'hypothesis' means a supposition or proposed explanation made on the basis of limited evidence as a starting point for further investigation." +
            "<br><br>" +
            "(A) 'conclusion' means the end or finish of an event, process, or text." +
            "<br><br>" +
            "(B) 'fact' means a thing that is known or proved to be true." +
            "<br><br>" +
            "(C) 'certainty' means firm conviction that something is the case.",
        chinese_explanation: "(D) '假设' 意味着基于有限证据提出的作为进一步调查起点的推测或解释。" +
            "<br><br>" +
            "(A) '结论' 意味着事件、过程或文本的结束或完成。" +
            "<br><br>" +
            "(B) '事实' 意味着被知道或被证明是真实的事物。" +
            "<br><br>" +
            "(C) '确定性' 意味着坚定地相信某事属实。"
    },
    {
        id: 10,
        question: "The __________ of not studying for the exam were severe, resulting in a failing grade.",
        chinese_question: "不复习考试的 __________ 非常严重，导致了不及格的成绩。",
        answers: [
            { option: "A", answer: "cause", chinese_answer: "原因", chinese_romanization: "yuányīn" },
            { option: "B", answer: "reason", chinese_answer: "理由", chinese_romanization: "lǐyóu" },
            { option: "C", answer: "consequence", chinese_answer: "后果", chinese_romanization: "hòuguǒ" },
            { option: "D", answer: "origin", chinese_answer: "起源", chinese_romanization: "qǐyuán" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'consequence' means a result or effect of an action or condition." +
            "<br><br>" +
            "(A) 'cause' means a person or thing that gives rise to an action, phenomenon, or condition." +
            "<br><br>" +
            "(B) 'reason' means a cause, explanation, or justification for an action or event." +
            "<br><br>" +
            "(D) 'origin' means the point or place where something begins, arises, or is derived.",
        chinese_explanation: "(C) '后果' 意味着一个行为或条件的结果或效果。" +
            "<br><br>" +
            "(A) '原因' 意味着引起行动、现象或条件的人或事物。" +
            "<br><br>" +
            "(B) '理由' 意味着行动或事件的原因、解释或理由。" +
            "<br><br>" +
            "(D) '起源' 意味着某物开始、产生或派生的点或地方。"
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
