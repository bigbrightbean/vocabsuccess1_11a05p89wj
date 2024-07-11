// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ cabin in the woods seemed both peaceful and eerily isolated.",
        chinese_question: "树林中的 __________ 小屋既宁静又令人感到诡异的孤立。",
        answers: [
            { option: "A", answer: "crowded", chinese_answer: "拥挤", chinese_romanization: "yǒngjǐ" },
            { option: "B", answer: "lonesome", chinese_answer: "孤独", chinese_romanization: "gūdú" },
            { option: "C", answer: "busy", chinese_answer: "忙碌", chinese_romanization: "mánglù" },
            { option: "D", answer: "bustling", chinese_answer: "热闹", chinese_romanization: "rènào" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'lonesome' means solitary or lonely." +
            "<br><br>" +
            "(A) 'crowded' means full of people, leaving little or no room for movement." +
            "<br><br>" +
            "(C) 'busy' means having a great deal to do." +
            "<br><br>" +
            "(D) 'bustling' means full of activity; energetic and lively.",
        chinese_explanation: "(B) '孤独' 意味着孤独的或寂寞的。" +
            "<br><br>" +
            "(A) '拥挤' 意味着人满为患，几乎没有活动的空间。" +
            "<br><br>" +
            "(C) '忙碌' 意味着有很多事情要做。" +
            "<br><br>" +
            "(D) '热闹' 意味着充满活动；充满活力和生气。"
    },
    {
        id: 2,
        question: "Graduating from university was a __________ achievement for him, symbolizing years of hard work and dedication.",
        chinese_question: "大学毕业对他来说是一个 __________ 的成就，象征着多年的努力和奉献。",
        answers: [
            { option: "A", answer: "momentous", chinese_answer: "重大", chinese_romanization: "zhòngdà" },
            { option: "B", answer: "routine", chinese_answer: "常规的", chinese_romanization: "chángguī de" },
            { option: "C", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "D", answer: "common", chinese_answer: "常见的", chinese_romanization: "chángjiàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'momentous' means of great importance or significance, especially in having a bearing on future events." +
            "<br><br>" +
            "(B) 'routine' means performed as part of a regular procedure rather than for a special reason." +
            "<br><br>" +
            "(C) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(D) 'common' means occurring, found, or done often; prevalent.",
        chinese_explanation: "(A) '重大' 意味着非常重要或具有重要意义，尤其是在对未来事件有影响的情况下。" +
            "<br><br>" +
            "(B) '常规的' 意味着作为常规程序的一部分执行的，而不是出于特别原因的。" +
            "<br><br>" +
            "(C) '普通的' 意味着没有特别或独特的特征的；正常的。" +
            "<br><br>" +
            "(D) '常见的' 意味着经常发生、发现或完成的；普遍的。"
    },
    {
        id: 3,
        question: "The __________ customer complained about every little detail, making it difficult for the staff to satisfy him.",
        chinese_question: "这个 __________ 的顾客对每一个小细节都抱怨不已，令工作人员难以让他满意。",
        answers: [
            { option: "A", answer: "cheerful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "B", answer: "querulous", chinese_answer: "爱抱怨的", chinese_romanization: "ài bàoyuàn de" },
            { option: "C", answer: "satisfied", chinese_answer: "满意的", chinese_romanization: "mǎnyì de" },
            { option: "D", answer: "agreeable", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'querulous' means complaining in a petulant or whining manner." +
            "<br><br>" +
            "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(C) 'satisfied' means contented; pleased." +
            "<br><br>" +
            "(D) 'agreeable' means enjoyable and pleasurable; pleasant.",
        chinese_explanation: "(B) '爱抱怨的' 意味着以任性或抱怨的方式抱怨的。" +
            "<br><br>" +
            "(A) '快乐的' 意味着显著地快乐和乐观的。" +
            "<br><br>" +
            "(C) '满意的' 意味着满足的；高兴的。" +
            "<br><br>" +
            "(D) '令人愉快的' 意味着愉快和愉悦的；令人愉快的。"
    },
    {
        id: 4,
        question: "The museum's collection is __________, featuring artifacts from all over the world.",
        chinese_question: "博物馆的收藏非常 __________，展示了来自世界各地的文物。",
        answers: [
            { option: "A", answer: "limited", chinese_answer: "有限", chinese_romanization: "yǒuxiàn" },
            { option: "B", answer: "extensive", chinese_answer: "广泛", chinese_romanization: "guǎngfàn" },
            { option: "C", answer: "minimal", chinese_answer: "最小", chinese_romanization: "zuìxiǎo" },
            { option: "D", answer: "narrow", chinese_answer: "狭窄", chinese_romanization: "xiázhǎi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'extensive' means covering or affecting a large area." +
            "<br><br>" +
            "(A) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(C) 'minimal' means of a minimum amount, quantity, or degree." +
            "<br><br>" +
            "(D) 'narrow' means of small width.",
        chinese_explanation: "(B) '广泛' 一词意味着覆盖或影响很大范围的。" +
            "<br><br>" +
            "(A) '有限' 意味着在规模、数量或程度上受到限制。" +
            "<br><br>" +
            "(C) '最小' 意味着数量、数量或程度最小。" +
            "<br><br>" +
            "(D) '狭窄' 意味着宽度很小。"
    },
    {
        id: 5,
        question: "She was __________ when she received the news that she had been accepted into her dream college.",
        chinese_question: "当她收到被梦想中的大学录取的消息时，她非常__________。",
        answers: [
            { option: "A", answer: "disappointed", chinese_answer: "失望", chinese_romanization: "shīwàng" },
            { option: "B", answer: "bored", chinese_answer: "无聊", chinese_romanization: "wúliáo" },
            { option: "C", answer: "thrilled", chinese_answer: "激动", chinese_romanization: "jīdòng" },
            { option: "D", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'thrilled' means extremely excited and pleased." +
            "<br><br>" +
            "(A) 'disappointed' means sad or displeased because someone or something has failed to fulfill one's hopes or expectations." +
            "<br><br>" +
            "(B) 'bored' means feeling weary and impatient because one is unoccupied or lacks interest in one's current activity." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy.",
        chinese_explanation: "(C) '激动'一词意味着极度兴奋和高兴。" +
            "<br><br>" +
            "(A) '失望' 意味着因为某人或某事未能实现自己的希望或期望而感到难过或不满。" +
            "<br><br>" +
            "(B) '无聊' 意味着因为无事可做或对当前活动缺乏兴趣而感到厌倦和不耐烦。" +
            "<br><br>" +
            "(D) '冷漠' 意味着没有特别的兴趣或同情。"
    },
    {
        id: 6,
        question: "The __________ color in the artist's painting was blue, creating a calm and serene atmosphere.",
        chinese_question: "画家画中 __________ 的颜色是蓝色，营造出一种平静和宁静的氛围。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "B", answer: "predominant", chinese_answer: "主要的", chinese_romanization: "zhǔyào de" },
            { option: "C", answer: "secondary", chinese_answer: "次级的", chinese_romanization: "cìjí de" },
            { option: "D", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐnyào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'predominant' means present as the strongest or main element." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(C) 'secondary' means coming after, less important than, or resulting from someone or something else that is primary." +
            "<br><br>" +
            "(D) 'insignificant' means too small or unimportant to be worth considering.",
        chinese_explanation: "(B) '主要的' 意味着作为最强或主要元素存在的。" +
            "<br><br>" +
            "(A) '次要的' 意味着在重要性、严重性或意义上较小的。" +
            "<br><br>" +
            "(C) '次级的' 意味着在某人或某事之后的，或比某人或某事重要性小的。" +
            "<br><br>" +
            "(D) '无关紧要的' 意味着太小或不重要，不值得考虑的。"
    },
    {
        id: 7,
        question: "She was __________ to speak up in the meeting, unsure of how her ideas would be received.",
        chinese_question: "她在会议上__________，不确定她的想法会如何被接受。",
        answers: [
            { option: "A", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
            { option: "B", answer: "assertive", chinese_answer: "坚定的", chinese_romanization: "jiàndìng de" },
            { option: "C", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
            { option: "D", answer: "decisive", chinese_answer: "果断的", chinese_romanization: "guǒduàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(A) 'confident' means feeling or showing confidence in oneself; self-assured." +
            "<br><br>" +
            "(B) 'assertive' means having or showing a confident and forceful personality." +
            "<br><br>" +
            "(D) 'decisive' means settling an issue; producing a definite result.",
        chinese_explanation: "(C) '犹豫的'一词意味着在行动或说话时犹豫、不确定或缓慢的。" +
            "<br><br>" +
            "(A) '自信的' 意味着对自己有信心的；自信的。" +
            "<br><br>" +
            "(B) '坚定的' 意味着拥有或表现出自信和强势个性的。" +
            "<br><br>" +
            "(D) '果断的' 意味着解决一个问题；产生明确结果的。"
    },
    {
        id: 8,
        question: "The judge was known for being __________, always making decisions based on facts and fairness rather than personal biases.",
        chinese_question: "这位法官以 __________ 著称，总是根据事实和公正而非个人偏见做出决定。",
        answers: [
            { option: "A", answer: "impartial", chinese_answer: "公正的", chinese_romanization: "gōngzhèng de" },
            { option: "B", answer: "biased", chinese_answer: "有偏见的", chinese_romanization: "yǒu piānjiàn de" },
            { option: "C", answer: "prejudiced", chinese_answer: "偏颇的", chinese_romanization: "piānpǒ de" },
            { option: "D", answer: "partial", chinese_answer: "偏袒的", chinese_romanization: "piāntǎn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'impartial' means treating all rivals or disputants equally; fair and just." +
            "<br><br>" +
            "(B) 'biased' means unfairly prejudiced for or against someone or something." +
            "<br><br>" +
            "(C) 'prejudiced' means having or showing a dislike or distrust that is derived from prejudice; bigoted." +
            "<br><br>" +
            "(D) 'partial' means favoring one side in a dispute above the other.",
        chinese_explanation: "(A) '公正的' 意味着平等对待所有对手或争执者；公平和公正的。" +
            "<br><br>" +
            "(B) '有偏见的' 意味着对某人或某事有不公平的偏见的。" +
            "<br><br>" +
            "(C) '偏颇的' 意味着由于偏见而表现出不喜欢或不信任的；固执己见的。" +
            "<br><br>" +
            "(D) '偏袒的' 意味着在争端中偏向一方的。"
    },
    {
        id: 9,
        question: "The animal shelter is known for its __________ treatment of abandoned pets, ensuring they receive love and care.",
        chinese_question: "这家动物收容所以对被遗弃宠物的 __________ 对待而闻名，确保它们得到爱和照顾。",
        answers: [
            { option: "A", answer: "cruel", chinese_answer: "残忍", chinese_romanization: "cánrěn" },
            { option: "B", answer: "harsh", chinese_answer: "严厉", chinese_romanization: "yánlì" },
            { option: "C", answer: "brutal", chinese_answer: "残酷", chinese_romanization: "cánkù" },
            { option: "D", answer: "humane", chinese_answer: "人道", chinese_romanization: "réndào" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'humane' means having or showing compassion or benevolence." +
            "<br><br>" +
            "(A) 'cruel' means willfully causing pain or suffering to others, or feeling no concern about it." +
            "<br><br>" +
            "(B) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(C) 'brutal' means savagely violent.",
        chinese_explanation: "(D) '人道' 意味着有或表现出同情或仁慈。" +
            "<br><br>" +
            "(A) '残忍' 意味着故意造成他人痛苦或苦难，或对此毫不关心。" +
            "<br><br>" +
            "(B) '严厉' 意味着对感官不愉快地粗糙或刺耳。" +
            "<br><br>" +
            "(C) '残酷' 意味着野蛮地暴力。"
    },
    {
        id: 10,
        question: "She felt __________ about the success of her new project.",
        chinese_question: "她对新项目的成功感到 __________。",
        answers: [
            { option: "A", answer: "certain", chinese_answer: "确定的", chinese_romanization: "quèdìng de" },
            { option: "B", answer: "unsure", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
            { option: "C", answer: "doubtful", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
            { option: "D", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'certain' means known for sure; established beyond doubt." +
            "<br><br>" +
            "(B) 'unsure' means not feeling, showing, or done with confidence and certainty." +
            "<br><br>" +
            "(C) 'doubtful' means feeling uncertain about something." +
            "<br><br>" +
            "(D) 'hesitant' means tentative, unsure, or slow in acting or speaking.",
        chinese_explanation: "(A) '确定的' 意味着确定无疑的；确立的。" +
            "<br><br>" +
            "(B) '不确定的' 意味着不自信或不确定的。" +
            "<br><br>" +
            "(C) '怀疑的' 意味着对某事感到不确定。" +
            "<br><br>" +
            "(D) '犹豫的' 意味着犹豫、无把握或行动或说话缓慢的。"
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
