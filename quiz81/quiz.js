// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ of the prestigious award was praised for his groundbreaking research and dedication to his field.",
        chinese_question: "这位 __________ 备受赞誉，因为他的开创性研究和对其领域的奉献精神而获得了这个享有盛誉的奖项。",
        answers: [
            { option: "A", answer: "recipient", chinese_answer: "获得者", chinese_romanization: "huòdézhě" },
            { option: "B", answer: "donor", chinese_answer: "捐赠者", chinese_romanization: "juānzèngzhě" },
            { option: "C", answer: "observer", chinese_answer: "观察者", chinese_romanization: "guāncházhě" },
            { option: "D", answer: "critic", chinese_answer: "批评者", chinese_romanization: "pīpíngzhě" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'recipient' means a person who receives something." +
            "<br><br>" +
            "(B) 'donor' means a person who donates something, especially money to charity." +
            "<br><br>" +
            "(C) 'observer' means a person who watches or notices something." +
            "<br><br>" +
            "(D) 'critic' means a person who expresses an unfavorable opinion of something.",
        chinese_explanation: "(A) '获得者' 意思是接受某物的人。" +
            "<br><br>" +
            "(B) '捐赠者' 意思是捐赠某物的人，特别是捐赠钱给慈善机构的人。" +
            "<br><br>" +
            "(C) '观察者' 意思是观察或注意到某事的人。" +
            "<br><br>" +
            "(D) '批评者' 意思是对某事表达不赞成意见的人。"
    },
    {
        id: 2,
        question: "There was a __________ in the conversation as everyone waited for her reaction.",
        chinese_question: "每个人都在等待她的反应，谈话中出现了 __________。",
        answers: [
            { option: "A", answer: "pause", chinese_answer: "停顿", chinese_romanization: "tíngdùn" },
            { option: "B", answer: "rush", chinese_answer: "匆忙", chinese_romanization: "cōngmáng" },
            { option: "C", answer: "flow", chinese_answer: "流动", chinese_romanization: "liúdòng" },
            { option: "D", answer: "surge", chinese_answer: "激增", chinese_romanization: "jīzēng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'pause' metaphorically means a temporary stop in action or speech." + 
            "<br><br>" + 
            "(B) 'rush' means move with urgent haste." + 
            "<br><br>" + 
            "(C) 'flow' means move along or out steadily and continuously in a current or stream." + 
            "<br><br>" + 
            "(D) 'surge' means a sudden powerful forward or upward movement.",
        chinese_explanation: "(A) '停顿' 比喻行动或言语的临时停止。" + 
            "<br><br>" + 
            "(B) '匆忙' 意味着急切地移动。" + 
            "<br><br>" + 
            "(C) '流动' 意味着以稳定和连续的流动形式前进。" + 
            "<br><br>" + 
            "(D) '激增' 意味着突然强大的前进或向上的运动。"
    },
    {
        id: 3,
        question: "After reviewing the test results and medical history, the doctor's __________ was that the patient would likely make a full recovery within six months with proper rehabilitation.",
        chinese_question: "在审查了测试结果和病史后，医生的 __________ 是，如果进行适当的康复治疗，患者很可能在六个月内完全康复。",
        answers: [
            { option: "A", answer: "diagnosis", chinese_answer: "诊断", chinese_romanization: "zhěnduàn" },
            { option: "B", answer: "symptoms", chinese_answer: "症状", chinese_romanization: "zhèngzhuàng" },
            { option: "C", answer: "treatment", chinese_answer: "治疗", chinese_romanization: "zhìliáo" },
            { option: "D", answer: "prognosis", chinese_answer: "预后", chinese_romanization: "yùhòu" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'prognosis' means the likely course of a disease or ailment, including the chances of recovery." +
            "<br><br>" +
            "(A) 'diagnosis' means the identification of the nature of an illness or other problem by examination of the symptoms." +
            "<br><br>" +
            "(B) 'symptoms' means the physical or mental features that are regarded as indicating a condition of disease." +
            "<br><br>" +
            "(C) 'treatment' means the management and care of a patient for the purpose of combating a disease or condition.",
        chinese_explanation: "(D) '预后' 意味着疾病或病症的可能病程，包括康复的几率。" +
            "<br><br>" +
            "(A) '诊断' 意味着通过检查症状来确定疾病或其他问题的性质。" +
            "<br><br>" +
            "(B) '症状' 意味着被认为是表明疾病状况的身体或心理特征。" +
            "<br><br>" +
            "(C) '治疗' 意味着为对抗疾病或状况而对患者进行的管理和护理。"
    },
    {
        id: 4,
        question: "The diplomat acted as an __________ during the negotiations, helping both sides reach a peaceful agreement.",
        chinese_question: "外交官在谈判中充当 __________，帮助双方达成和平协议。",
        answers: [
                { option: "A", answer: "opponent", chinese_answer: "对手", chinese_romanization: "duìshǒu" },
                { option: "B", answer: "intermediary", chinese_answer: "中间人", chinese_romanization: "zhōngjiānrén" },
                { option: "C", answer: "bystander", chinese_answer: "旁观者", chinese_romanization: "pángguānzhě" },
                { option: "D", answer: "observer", chinese_answer: "观察员", chinese_romanization: "guāncháyuán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'intermediary' means a person who acts as a link between people in order to try to bring about an agreement." +
            "<br><br>" +
            "(A) 'opponent' means someone who competes against or fights another in a contest, game, or argument." +
            "<br><br>" +
            "(C) 'bystander' means a person who is present at an event or incident but does not take part." +
            "<br><br>" +
            "(D) 'observer' means a person who watches or notices something.",
        chinese_explanation: "(B) '中间人' 意味着充当人们之间联系以促成协议的人。" +
            "<br><br>" +
            "(A) '对手' 意味着在比赛、游戏或争论中与另一方竞争或战斗的人。" +
            "<br><br>" +
            "(C) '旁观者' 意味着在事件或事故发生时在场但不参与的人。" +
            "<br><br>" +
            "(D) '观察员' 意味着观察或注意到某事的人。"
    },
    {
        id: 5,
        question: "Despite the challenges, she showed great __________ in her determination to finish the project on time.",
        chinese_question: "尽管面临挑战，她表现出巨大的 __________，决心按时完成项目。",
        answers: [
            { option: "A", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "B", answer: "resolve", chinese_answer: "决心", chinese_romanization: "juéxīn" },
            { option: "C", answer: "uncertainty", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" },
            { option: "D", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'resolve' means firm determination to do something." +
            "<br><br>" +
            "(A) 'hesitation' means the action of pausing before saying or doing something." +
            "<br><br>" +
            "(C) 'uncertainty' means the state of being unsure." +
            "<br><br>" +
            "(D) 'doubt' means a feeling of uncertainty or lack of conviction.",
        chinese_explanation: "'决心' 一词意味着坚定的决心去做某事。" +
            "<br><br>" +
            "(A) '犹豫' 意味着在说或做某事之前暂停的行为。" +
            "<br><br>" +
            "(C) '不确定' 意味着不确定的状态。" +
            "<br><br>" +
            "(D) '怀疑' 意味着不确定或缺乏信心的感觉。"
    },
    {
        id: 6,
        question: "Wearing casual clothes to work on Fridays has become the __________ in many modern offices.",
        chinese_question: "在许多现代办公室，周五穿休闲服上班已经成为了 __________。",
        answers: [
            { option: "A", answer: "exception", chinese_answer: "例外", chinese_romanization: "lìwài" },
            { option: "B", answer: "outlier", chinese_answer: "异常值", chinese_romanization: "yìcháng zhí" },
            { option: "C", answer: "anomaly", chinese_answer: "异常", chinese_romanization: "yìcháng" },
            { option: "D", answer: "norm", chinese_answer: "常规", chinese_romanization: "chángguī" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'norm' means something that is usual, typical, or standard." +
            "<br><br>" +
            "(A) 'exception' means a person or thing that is excluded from a general statement or does not follow a rule." +
            "<br><br>" +
            "(B) 'outlier' means a person or thing differing from all other members of a particular group or set." +
            "<br><br>" +
            "(C) 'anomaly' means something that deviates from what is standard, normal, or expected.",
        chinese_explanation: "(D) '常规' 意味着通常、典型或标准的东西。" +
            "<br><br>" +
            "(A) '例外' 意味着被排除在一般声明之外或不遵循规则的人或事物。" +
            "<br><br>" +
            "(B) '异常值' 意味着与特定群体或集合中的所有其他成员不同的人或事物。" +
            "<br><br>" +
            "(C) '异常' 意味着偏离标准、正常或预期的东西。"
    },
    {
        id: 7,
        question: "The new __________ of smartphones features advanced technology that enhances user experience.",
        chinese_question: "新一代的智能手机采用了先进的技术，提升了用户体验。",
        answers: [
            { option: "A", answer: "type", chinese_answer: "类型", chinese_romanization: "lèixíng" },
            { option: "B", answer: "generation", chinese_answer: "代", chinese_romanization: "dài" },
            { option: "C", answer: "model", chinese_answer: "型号", chinese_romanization: "xínghào" },
            { option: "D", answer: "version", chinese_answer: "版本", chinese_romanization: "bǎnběn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'generation' means all of the people born and living at about the same time, regarded collectively or the production of something." +
            "<br><br>" +
            "(A) 'type' means a category of people or things having common characteristics." +
            "<br><br>" +
            "(C) 'model' means a particular design or version of a product." +
            "<br><br>" +
            "(D) 'version' means a particular form of something differing in certain respects from an earlier form or other forms of the same type of thing.",
        chinese_explanation: "(B) '代' 意味着在大约相同时间出生和生活的所有人，或某物的生产。" +
            "<br><br>" +
            "(A) '类型' 意味着具有共同特征的类别。" +
            "<br><br>" +
            "(C) '型号' 意味着产品的特定设计或版本。" +
            "<br><br>" +
            "(D) '版本' 意味着某物的特定形式，与早期形式或同类型其他形式有差异。"
    },
    {
        id: 8,
        question: "She felt a sense of __________ as the plane began its descent, worried about the upcoming landing.",
        chinese_question: "当飞机开始下降时，她感到一阵 __________，担心即将到来的着陆。",
        answers: [
            { option: "A", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
            { option: "B", answer: "relief", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
            { option: "C", answer: "apprehension", chinese_answer: "忧虑", chinese_romanization: "yōulǜ" },
            { option: "D", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'apprehension' means anxiety or fear that something bad or unpleasant will happen." +
            "<br><br>" +
            "(A) 'excitement' means a feeling of great enthusiasm and eagerness." +
            "<br><br>" +
            "(B) 'relief' means a feeling of reassurance and relaxation following release from anxiety or distress." +
            "<br><br>" +
            "(D) 'joy' means a feeling of great pleasure and happiness.",
        chinese_explanation: "(C) '忧虑' 一词意味着对某事不好的或不愉快的事情会发生的焦虑或恐惧。" +
            "<br><br>" +
            "(A) '兴奋' 意味着一种极大的热情和渴望的感觉。" +
            "<br><br>" +
            "(B) '放松' 意味着在摆脱焦虑或痛苦后感到的安心和放松。" +
            "<br><br>" +
            "(D) '喜悦' 意味着一种极大的快乐和幸福的感觉。"
    },
    {
        id: 9,
        question: "For the manager, ensuring customer satisfaction is always the top __________.",
        chinese_question: "对于经理来说，确保客户满意度始终是首要 __________。",
        answers: [
            { option: "A", answer: "distraction", chinese_answer: "干扰", chinese_romanization: "gānrǎo" },
            { option: "B", answer: "obstacle", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
            { option: "C", answer: "priority", chinese_answer: "优先事项", chinese_romanization: "yōuxiān shìxiàng" },
            { option: "D", answer: "option", chinese_answer: "选择", chinese_romanization: "xuǎnzé" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'priority' means something that is regarded as more important than another." +
            "<br><br>" +
            "(A) 'distraction' means something that prevents someone from concentrating on something else." +
            "<br><br>" +
            "(B) 'obstacle' means a thing that blocks one's way or prevents progress." +
            "<br><br>" +
            "(D) 'option' means a thing that is or may be chosen.",
        chinese_explanation: "'优先事项' 一词意味着被认为比其他更重要的事情。" +
            "<br><br>" +
            "(A) '干扰' 意味着阻止某人集中注意力的事情。" +
            "<br><br>" +
            "(B) '障碍' 意味着阻挡道路或阻止进展的事物。" +
            "<br><br>" +
            "(D) '选择' 意味着可能被选择的事物。"
    },
    {
        id: 10,
        question: "She dismissed the __________ that women couldn't excel in science and technology fields, proving herself through her groundbreaking research.",
        chinese_question: "她否定了女性不能在科学和技术领域取得优秀成绩的 __________，通过她的开创性研究证明了自己。",
        answers: [
            { option: "A", answer: "fact", chinese_answer: "事实", chinese_romanization: "shìshí" },
            { option: "B", answer: "truth", chinese_answer: "真理", chinese_romanization: "zhēnlǐ" },
            { option: "C", answer: "reality", chinese_answer: "现实", chinese_romanization: "xiànshí" },
            { option: "D", answer: "notion", chinese_answer: "观念", chinese_romanization: "guānniàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'notion' means a conception of or belief about something." +
            "<br><br>" +
            "(A) 'fact' means a thing that is known or proved to be true." +
            "<br><br>" +
            "(B) 'truth' means the quality or state of being true." +
            "<br><br>" +
            "(C) 'reality' means the world or the state of things as they actually exist.",
        chinese_explanation: "(D) '观念' 意味着对某事的概念或信念。" +
            "<br><br>" +
            "(A) '事实' 意味着已知或证明为真的事物。" +
            "<br><br>" +
            "(B) '真理' 意味着真实的质量或状态。" +
            "<br><br>" +
            "(C) '现实' 意味着事物实际上存在的世界或状态。"
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
