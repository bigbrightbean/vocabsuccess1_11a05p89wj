// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "It was a remarkable __________ that both friends ended up vacationing in the same small town at the same time.",
        chinese_question: "非常巧合的是，两位朋友在同一时间出现在同一个小镇度假。",
        answers: [
            { option: "A", answer: "plan", chinese_answer: "计划", chinese_romanization: "jìhuà" },
            { option: "B", answer: "accident", chinese_answer: "事故", chinese_romanization: "shìgù" },
            { option: "C", answer: "arrangement", chinese_answer: "安排", chinese_romanization: "ānpái" },
            { option: "D", answer: "coincidence", chinese_answer: "巧合", chinese_romanization: "qiǎohé" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'coincidence' means a remarkable concurrence of events or circumstances without apparent causal connection." +
            "<br><br>" +
            "(A) 'plan' means a detailed proposal for doing or achieving something." +
            "<br><br>" +
            "(B) 'accident' means an unfortunate incident that happens unexpectedly and unintentionally." +
            "<br><br>" +
            "(C) 'arrangement' means a plan or preparation for a future event.",
        chinese_explanation: "(D) '巧合' 一词意味着事件或情况的显着同时发生，而没有明显的因果关系。" +
            "<br><br>" +
            "(A) '计划' 意味着做某事或实现某事的详细提议。" +
            "<br><br>" +
            "(B) '事故' 意味着意外和非故意发生的不幸事件。" +
            "<br><br>" +
            "(C) '安排' 意味着对未来事件的计划或准备。"
    },
    {
        id: 2,
        question: "The job requires a __________ of two years of experience in the field, meaning applicants must have at least this amount of relevant work history.",
        chinese_question: "这份工作要求至少有__________两年的相关领域经验，这意味着申请人必须至少有这段时间的相关工作经历。",
        answers: [
            { option: "A", answer: "maximum", chinese_answer: "最大值", chinese_romanization: "zuìdà zhí" },
            { option: "B", answer: "minimum", chinese_answer: "最小值", chinese_romanization: "zuìxiǎo zhí" },
            { option: "C", answer: "average", chinese_answer: "平均", chinese_romanization: "píngjūn" },
            { option: "D", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'minimum' means the least or smallest amount or quantity possible, attainable, or required." +
            "<br><br>" +
            "(A) 'maximum' means as great, high, or intense as possible or permitted." +
            "<br><br>" +
            "(C) 'average' means the result obtained by adding several quantities together and then dividing this total by the number of quantities." +
            "<br><br>" +
            "(D) 'typical' means having the distinctive qualities of a particular type of person or thing.",
        chinese_explanation: "(B) '最小值' 一词意味着可能的、可以达到的或需要的最小或最小数量。" +
            "<br><br>" +
            "(A) '最大值' 意味着尽可能大、高或强烈的或被允许的。" +
            "<br><br>" +
            "(C) '平均' 意味着通过将几种数量加在一起然后将这个总数除以数量的数量来获得的结果。" +
            "<br><br>" +
            "(D) '典型的' 意味着具有某种类型的人或事物的独特品质。"
    },
    {
        id: 3,
        question: "He claimed to have seen a __________ in the old mansion, describing it as a ghostly figure.",
        chinese_question: "他声称在老宅里看到一个 __________，描述它是一个幽灵般的身影。",
        answers: [
            { option: "A", answer: "phantom", chinese_answer: "幽灵", chinese_romanization: "yōulíng" },
            { option: "B", answer: "reality", chinese_answer: "现实", chinese_romanization: "xiànshí" },
            { option: "C", answer: "person", chinese_answer: "人", chinese_romanization: "rén" },
            { option: "D", answer: "illusion", chinese_answer: "幻觉", chinese_romanization: "huànjué" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'phantom' means a ghost or a figment of the imagination." +
            "<br><br>" +
            "(B) 'reality' means the state of things as they actually exist." +
            "<br><br>" +
            "(C) 'person' means a human being regarded as an individual." +
            "<br><br>" +
            "(D) 'illusion' means a thing that is or is likely to be wrongly perceived or interpreted by the senses.",
        chinese_explanation: "(A) '幽灵' 一词意味着鬼魂或想象中的虚构。" +
            "<br><br>" +
            "(B) '现实' 意味着事物实际存在的状态。" +
            "<br><br>" +
            "(C) '人' 意味着被视为个体的人类。" +
            "<br><br>" +
            "(D) '幻觉' 意味着可能被感官错误感知或解释的事物。"
    },
    {
        id: 4,
        question: "The city __________ met to discuss the new policies and their impact on the community.",
        chinese_question: "市 __________ 召开会议讨论新政策及其对社区的影响。",
        answers: [
            { option: "A", answer: "citizen", chinese_answer: "公民", chinese_romanization: "gōngmín" },
            { option: "B", answer: "council", chinese_answer: "议会", chinese_romanization: "yìhuì" },
            { option: "C", answer: "resident", chinese_answer: "居民", chinese_romanization: "jūmín" },
            { option: "D", answer: "visitor", chinese_answer: "访客", chinese_romanization: "fǎngkè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'council' means an advisory, deliberative, or legislative body of people formally constituted and meeting regularly. They help create and implement policies for the community." +
            "<br><br>" +
            "(A) 'citizen' means a legally recognized subject or national of a state or commonwealth." +
            "<br><br>" +
            "(C) 'resident' means a person who lives somewhere permanently or on a long-term basis." +
            "<br><br>" +
            "(D) 'visitor' means a person visiting a person or place, especially socially or as a tourist.",
        chinese_explanation: "(B) '议会' 一词意味着正式组成并定期开会的咨询、审议或立法机构。他们帮助制定和实施社区政策。" +
            "<br><br>" +
            "(A) '公民' 意味着法律承认的国家或联邦的主体或国民。" +
            "<br><br>" +
            "(C) '居民' 意味着长期或永久居住在某地的人。" +
            "<br><br>" +
            "(D) '访客' 意味着拜访某人或某地的人，特别是社交或作为游客。"
    },
    {
        id: 5,
        question: "The __________ convened in the capital to discuss new laws that would benefit the entire country.",
        chinese_question: "__________ 在首都召开会议，讨论将造福全国的新法律。",
        answers: [
            { option: "A", answer: "monarchy", chinese_answer: "君主制", chinese_romanization: "jūnzhǔ zhì" },
            { option: "B", answer: "council", chinese_answer: "理事会", chinese_romanization: "lǐshì huì" },
            { option: "C", answer: "committee", chinese_answer: "委员会", chinese_romanization: "wěiyuán huì" },
            { option: "D", answer: "parliament", chinese_answer: "议会", chinese_romanization: "yìhuì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'parliament' means the highest legislature, consisting of the sovereign, the House of Lords, and the House of Commons. They create and pass laws for the country. In simpler terms, they are the main group that decides on laws." +
            "<br><br>" +
            "(A) 'monarchy' means a form of government with a monarch at the head. This usually means a king or queen rules the country." +
            "<br><br>" +
            "(B) 'council' means a group of people who come together to consult, deliberate, or make decisions. They meet to talk and make important choices." +
            "<br><br>" +
            "(C) 'committee' means a group of people appointed for a specific function by a larger group and typically consisting of members of that group. They work on special tasks for the larger group.",
        chinese_explanation: "(D) '议会' 一词意味着最高立法机构，由君主、上议院和下议院组成。他们为国家制定和通过法律。简单来说，他们是主要决定法律的团体。" +
            "<br><br>" +
            "(A) '君主制' 意味着以君主为首的政府形式。这通常意味着国王或女王统治国家。" +
            "<br><br>" +
            "(B) '理事会' 意味着聚集在一起进行咨询、讨论或做出决定的一群人。他们开会讨论并做出重要决定。" +
            "<br><br>" +
            "(C) '委员会' 意味着由更大群体任命的、通常由该群体成员组成的特定职能的小组。他们为更大的团体处理特殊任务。"
    },
    {
        id: 6,
        question: "The musician's performance was met with __________ from the audience, who gave a standing ovation at the end.",
        chinese_question: "这位音乐家的表演得到了观众的 __________，他们在结束时起立鼓掌。",
        answers: [
            { option: "A", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" },
            { option: "B", answer: "boos", chinese_answer: "嘘声", chinese_romanization: "xūshēng" },
            { option: "C", answer: "jeers", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" },
            { option: "D", answer: "plaudit", chinese_answer: "喝彩", chinese_romanization: "hècǎi" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'plaudit' means praise or approval, often used in the context of public recognition." +
            "<br><br>" +
            "(A) 'silence' means complete absence of sound." +
            "<br><br>" +
            "(B) 'boos' means shouts of disapproval or derision." +
            "<br><br>" +
            "(C) 'jeers' means rude and mocking remarks.",
        chinese_explanation: "(D) '喝彩' 意思是赞美或认可，通常在公开表扬的情况下使用。" +
            "<br><br>" +
            "(A) '沉默' 意思是完全没有声音。" +
            "<br><br>" +
            "(B) '嘘声' 意思是不满或嘲讽的喊叫。" +
            "<br><br>" +
            "(C) '嘲笑' 意思是粗鲁和嘲弄的言辞。"
    },
    {
        id: 7,
        question: "Her __________ allowed her to understand and share the feelings of her grieving friend.",
        chinese_question: "她的 __________ 使她能够理解并分享她悲伤的朋友的感受。",
        answers: [
            { option: "A", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mò bù guānxīn" },
            { option: "B", answer: "empathy", chinese_answer: "同情", chinese_romanization: "tóngqíng" },
            { option: "C", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "detachment", chinese_answer: "超然", chinese_romanization: "chāorán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'empathy' means the ability to understand and share the feelings of another." +
            "<br><br>" +
            "(A) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(C) 'apathy' means lack of interest, enthusiasm, or concern." +
            "<br><br>" +
            "(D) 'detachment' means the state of being objective or aloof.",
        chinese_explanation: "(B) '同情' 一词意味着能够理解并分享他人感受的能力。" +
            "<br><br>" +
            "(A) '漠不关心' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(C) '冷漠' 意味着缺乏兴趣、热情或关心。" +
            "<br><br>" +
            "(D) '超然' 意味着客观或超然的状态。"
    },
    {
        id: 8,
        question: "The research team collected __________ from thousands of participants to ensure their study was accurate.",
        chinese_question: "研究小组从数千名参与者那里收集了 __________，以确保他们的研究准确无误。",
        answers: [
            { option: "A", answer: "opinions", chinese_answer: "意见", chinese_romanization: "yìjiàn" },
            { option: "B", answer: "data", chinese_answer: "数据", chinese_romanization: "shùjù" },
            { option: "C", answer: "assumptions", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
            { option: "D", answer: "guesses", chinese_answer: "猜测", chinese_romanization: "cāicè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'data' means facts and statistics collected together for reference or analysis." +
            "<br><br>" +
            "(A) 'opinions' means views or judgments formed about something, not necessarily based on fact or knowledge." +
            "<br><br>" +
            "(C) 'assumptions' means things that are accepted as true or as certain to happen, without proof." +
            "<br><br>" +
            "(D) 'guesses' means estimates or supposes (something) without sufficient information to be sure of being correct.",
        chinese_explanation: "(B) '数据' 一词意味着收集在一起用于参考或分析的事实和统计数据。" +
            "<br><br>" +
            "(A) '意见' 意味着对某事的看法或判断，不一定基于事实或知识。" +
            "<br><br>" +
            "(C) '假设' 意味着没有证据的情况下接受为真或肯定会发生的事物。" +
            "<br><br>" +
            "(D) '猜测' 意味着在没有足够信息的情况下估计或推测（某事），以确保正确。"
    },
    {
        id: 9,
        question: "She carried her inhaler everywhere due to her __________, which could be triggered by dust or cold air.",
        chinese_question: "由于她的 __________，她随身带着吸入器，灰尘或冷空气可能会引发她的症状。",
        answers: [
            { option: "A", answer: "headache", chinese_answer: "头痛", chinese_romanization: "tóutòng" },
            { option: "B", answer: "fever", chinese_answer: "发烧", chinese_romanization: "fāshāo" },
            { option: "C", answer: "asthma", chinese_answer: "哮喘", chinese_romanization: "xiàochuǎn" },
            { option: "D", answer: "health", chinese_answer: "健康", chinese_romanization: "jiànkāng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'asthma' means a respiratory condition marked by spasms in the bronchi of the lungs, causing difficulty in breathing." +
            "<br><br>" +
            "(A) 'headache' means a continuous pain in the head." +
            "<br><br>" +
            "(B) 'fever' means an abnormally high body temperature." +
            "<br><br>" +
            "(D) 'health' means the state of being free from illness or injury.",
        chinese_explanation: "(C) '哮喘' 一词意味着一种呼吸系统疾病，以支气管痉挛为标志，导致呼吸困难。" +
            "<br><br>" +
            "(A) '头痛' 意味着头部持续疼痛。" +
            "<br><br>" +
            "(B) '发烧' 意味着体温异常升高。" +
            "<br><br>" +
            "(D) '健康' 意味着没有疾病或伤害的状态。"
    },
    {
        id: 10,
        question: "The __________ changed its colours to blend in with its surroundings and avoid predators.",
        chinese_question: "__________ 改变了颜色以融入环境并避免捕食者。",
        answers: [
            { option: "A", answer: "chameleon", chinese_answer: "变色龙", chinese_romanization: "biànsèlóng" },
            { option: "B", answer: "bird", chinese_answer: "鸟", chinese_romanization: "niǎo" },
            { option: "C", answer: "fish", chinese_answer: "鱼", chinese_romanization: "yú" },
            { option: "D", answer: "insect", chinese_answer: "昆虫", chinese_romanization: "kūnchóng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chameleon' means a small slow-moving Old World lizard with a prehensile tail, long extensible tongue, protruding eyes that rotate independently, and a highly developed ability to change colour." +
            "<br><br>" +
            "(B) 'bird' means a warm-blooded egg-laying vertebrate distinguished by the possession of feathers, wings, and a beak and (typically) by being able to fly." +
            "<br><br>" +
            "(C) 'fish' means a limbless cold-blooded vertebrate animal with gills and fins living wholly in water." +
            "<br><br>" +
            "(D) 'insect' means a small arthropod animal that has six legs and generally one or two pairs of wings.",
        chinese_explanation: "(A) '变色龙' 一词意味着一种缓慢移动的旧大陆蜥蜴，具有抓握尾巴、长可伸展的舌头、独立旋转的突出眼睛和高度发达的变色能力。" +
            "<br><br>" +
            "(B) '鸟' 意味着一种以拥有羽毛、翅膀和喙以及（通常）能够飞行而区别于其他动物的温血产卵脊椎动物。" +
            "<br><br>" +
            "(C) '鱼' 意味着一种没有四肢、冷血的脊椎动物，具有鳃和鳍，完全生活在水中。" +
            "<br><br>" +
            "(D) '昆虫' 意味着一种小型节肢动物，具有六条腿和通常一对或两对翅膀。"
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
