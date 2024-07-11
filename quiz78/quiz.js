// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The pirates' ship was filled with __________ from their numerous raids along the coast, showcasing their ruthless pursuit of wealth.",
        chinese_question: "海盗的船上装满了他们沿海岸无数次袭击的 __________，展示了他们对财富无情的追求。",
        answers: [
            { option: "A", answer: "plunder", chinese_answer: "掠夺物", chinese_romanization: "lüèduó wù" },
            { option: "B", answer: "treasures", chinese_answer: "珍宝", chinese_romanization: "zhēnbǎo" },
            { option: "C", answer: "gifts", chinese_answer: "礼物", chinese_romanization: "lǐwù" },
            { option: "D", answer: "supplies", chinese_answer: "补给品", chinese_romanization: "bǔjǐ pǐn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'plunder' means goods taken by force or theft, especially during a time of war or civil disorder." +
            "<br><br>" +
            "(B) 'treasures' means valuable objects, especially those accumulated or kept as precious items." +
            "<br><br>" +
            "(C) 'gifts' means items given to someone without expecting anything in return." +
            "<br><br>" +
            "(D) 'supplies' means materials or provisions stored and used when needed.",
        chinese_explanation: "(A) '掠夺物' 意思是通过武力或盗窃取得的物品，尤其是在战争或内乱期间。" +
            "<br><br>" +
            "(B) '珍宝' 意思是有价值的物品，特别是那些被积累或保存为珍贵物品的。" +
            "<br><br>" +
            "(C) '礼物' 意思是赠送给某人的物品，不期待回报。" +
            "<br><br>" +
            "(D) '补给品' 意思是储存并在需要时使用的材料或供应品。"
    },
    {
        id: 2,
        question: "Her __________ for the homeless led her to volunteer at the shelter every weekend.",
        chinese_question: "她对无家可归者的 __________ 使她每个周末都在庇护所做志愿者。",
        answers: [
            { option: "A", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mò bù guānxīn" },
            { option: "C", answer: "compassion", chinese_answer: "同情", chinese_romanization: "tóngqíng" },
            { option: "D", answer: "disdain", chinese_answer: "鄙视", chinese_romanization: "bǐshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'compassion' means sympathetic pity and concern for the sufferings or misfortunes of others." +
            "<br><br>" +
            "(A) 'apathy' means lack of interest, enthusiasm, or concern." +
            "<br><br>" +
            "(B) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'disdain' means the feeling that someone or something is unworthy of one's consideration or respect; contempt.",
        chinese_explanation: "(C) '同情' 一词意味着对他人的苦难或不幸表示同情和关心。" +
            "<br><br>" +
            "(A) '冷漠' 意味着缺乏兴趣、热情或关注。" +
            "<br><br>" +
            "(B) '漠不关心' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '鄙视' 意味着认为某人或某事不值得考虑或尊重的感觉；蔑视。"
    },
    {
        id: 3,
        question: "His __________ levels spiked as he prepared to skydive for the first time, feeling both excited and nervous.",
        chinese_question: "在准备第一次跳伞时，他的 __________ 水平飙升，既感到兴奋又紧张。",
        answers: [
            { option: "A", answer: "serotonin", chinese_answer: "血清素", chinese_romanization: "xuèqīngsù" },
            { option: "B", answer: "cortisol", chinese_answer: "皮质醇", chinese_romanization: "pízhìchún" },
            { option: "C", answer: "adrenaline", chinese_answer: "肾上腺素", chinese_romanization: "shènshàngxiánsù" },
            { option: "D", answer: "dopamine", chinese_answer: "多巴胺", chinese_romanization: "duōbā'àn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'adrenaline' means a hormone secreted by the adrenal glands that increases rates of blood circulation, breathing, and carbohydrate metabolism and prepares muscles for exertion." +
            "<br><br>" +
            "(A) 'serotonin' means a compound present in blood platelets and serum that constricts the blood vessels and acts as a neurotransmitter." +
            "<br><br>" +
            "(B) 'cortisol' means a steroid hormone produced by the adrenal cortex and used medicinally to treat inflammation." +
            "<br><br>" +
            "(D) 'dopamine' means a compound present in the body as a neurotransmitter and a precursor of other substances including adrenaline.",
        chinese_explanation: "(A) '肾上腺素' 一词意味着肾上腺分泌的一种激素，增加血液循环、呼吸和碳水化合物代谢率，并为肌肉准备运动。" +
            "<br><br>" +
            "(A) '血清素' 意味着存在于血小板和血清中的一种化合物，会收缩血管并作为神经递质。" +
            "<br><br>" +
            "(B) '皮质醇' 意味着由肾上腺皮质产生并用于治疗炎症的类固醇激素。" +
            "<br><br>" +
            "(D) '多巴胺' 意味着存在于体内的一种化合物，作为神经递质和包括肾上腺素在内的其他物质的前体。"
    },
    {
        id: 4,
        question: "Her __________ for organizing events and managing logistics made her an invaluable asset to the planning committee.",
        chinese_question: "她在组织活动和管理物流方面的 __________ 使她成为策划委员会中无价的资产。",
        answers: [
            { option: "A", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "proclivities", chinese_answer: "倾向", chinese_romanization: "qīngxiàng" },
            { option: "C", answer: "avoidance", chinese_answer: "回避", chinese_romanization: "huíbì" },
            { option: "D", answer: "dislike", chinese_answer: "不喜欢", chinese_romanization: "bù xǐhuān" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'proclivities' means a tendency to choose or do something regularly; an inclination or predisposition toward a particular thing." +
            "<br><br>" +
            "(A) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(C) 'avoidance' means the action of keeping away from or not doing something." +
            "<br><br>" +
            "(D) 'dislike' means a feeling of distaste or hostility.",
        chinese_explanation: "(B) '倾向' 意思是经常选择或做某事的倾向；对某一事物的倾向或预倾向。" +
            "<br><br>" +
            "(A) '冷漠' 意思是缺乏兴趣、关注或同情。" +
            "<br><br>" +
            "(C) '回避' 意思是避开或不做某事的行为。" +
            "<br><br>" +
            "(D) '不喜欢' 意思是厌恶或敌意的感觉。"
    },
    {
        id: 5,
        question: "The Indonesian __________, consisting of over 17,000 islands, is the largest in the world and is known for its diverse ecosystems.",
        chinese_question: "印度尼西亚 __________ 由超过17,000个岛屿组成，是世界上最大的，以其多样的生态系统而闻名。",
        answers: [
            { option: "A", answer: "archipelago", chinese_answer: "群岛", chinese_romanization: "qúndǎo" },
            { option: "B", answer: "continent", chinese_answer: "大陆", chinese_romanization: "dàlù" },
            { option: "C", answer: "peninsula", chinese_answer: "半岛", chinese_romanization: "bàndǎo" },
            { option: "D", answer: "isthmus", chinese_answer: "地峡", chinese_romanization: "dìxiá" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'archipelago' means a group of islands." +
            "<br><br>" +
            "(B) 'continent' means one of the main landmasses on the earth." +
            "<br><br>" +
            "(C) 'peninsula' means a piece of land almost surrounded by water or projecting out into a body of water." +
            "<br><br>" +
            "(D) 'isthmus' means a narrow strip of land with sea on either side, forming a link between two larger areas of land.",
        chinese_explanation: "(A) '群岛' 意思是一组岛屿。" +
            "<br><br>" +
            "(B) '大陆' 意思是地球上的主要陆地之一。" +
            "<br><br>" +
            "(C) '半岛' 意思是几乎被水环绕或突入一片水域的陆地。" +
            "<br><br>" +
            "(D) '地峡' 意思是两侧都有海水的狭窄陆地，形成两个较大地区之间的连接。"
    },
    {
        id: 6,
        question: "He felt a sharp pain in his __________, which later turned out to be appendicitis.",
        chinese_question: "他感到 __________ 一阵剧痛，后来发现是阑尾炎。",
        answers: [
            { option: "A", answer: "head", chinese_answer: "头", chinese_romanization: "tóu" },
            { option: "B", answer: "chest", chinese_answer: "胸部", chinese_romanization: "xiōngbù" },
            { option: "C", answer: "abdomen", chinese_answer: "腹部", chinese_romanization: "fùbù" },
            { option: "D", answer: "leg", chinese_answer: "腿", chinese_romanization: "tuǐ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'abdomen' means the part of the body of a vertebrate containing the digestive organs; the belly." +
            "<br><br>" +
            "(A) 'head' means the upper part of the human body or the front part of the body in animals." +
            "<br><br>" +
            "(B) 'chest' means the front surface of a person's or animal's body between the neck and the abdomen." +
            "<br><br>" +
            "(D) 'leg' means each of the limbs on which a person or animal walks and stands.",
        chinese_explanation: "(C) '腹部' 一词意味着脊椎动物身体中包含消化器官的部分；肚子。" +
            "<br><br>" +
            "(A) '头' 意味着人体的上部或动物身体的前部。" +
            "<br><br>" +
            "(B) '胸部' 意味着人体或动物身体的前表面，位于颈部和腹部之间。" +
            "<br><br>" +
            "(D) '腿' 意味着人或动物行走和站立的四肢之一。"
    },
    {
        id: 7,
        question: "He made an __________ to climb the highest mountain in the region.",
        chinese_question: "他 __________ 尝试攀登该地区的最高山峰。",
        answers: [
            { option: "A", answer: "excuse", chinese_answer: "借口", chinese_romanization: "jièkǒu" },
            { option: "B", answer: "refusal", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "endeavour", chinese_answer: "努力", chinese_romanization: "nǔlì" },
            { option: "D", answer: "complaint", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'endeavour' means an attempt to achieve a goal." +
            "<br><br>" +
            "(A) 'excuse' means a reason or explanation put forward to defend or justify a fault or offense." +
            "<br><br>" +
            "(B) 'refusal' means an act of refusing to do something." +
            "<br><br>" +
            "(D) 'complaint' means a statement that something is unsatisfactory or unacceptable.",
        chinese_explanation: "(C) '努力' 意味着试图实现一个目标。" +
            "<br><br>" +
            "(A) '借口' 意味着为辩护或证明错误或罪过而提出的理由或解释。" +
            "<br><br>" +
            "(B) '拒绝' 意味着拒绝做某事的行为。" +
            "<br><br>" +
            "(D) '抱怨' 意味着对某事不满意或不可接受的声明。"
    },
    {
        id: 8,
        question: "Her new __________ in the city center, a spacious apartment with modern amenities, offers stunning views and easy access to all the major attractions.",
        chinese_question: "她位于市中心的新 __________ 是一间宽敞的公寓，拥有现代化设施，提供了绝佳的景观，并且可以轻松前往所有主要景点。",
        answers: [
            { option: "A", answer: "office", chinese_answer: "办公室", chinese_romanization: "bàngōngshì" },
            { option: "B", answer: "residence", chinese_answer: "住所", chinese_romanization: "zhùsuǒ" },
            { option: "C", answer: "store", chinese_answer: "商店", chinese_romanization: "shāngdiàn" },
            { option: "D", answer: "gym", chinese_answer: "健身房", chinese_romanization: "jiànshēnfáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'residence' means a place where someone lives." +
            "<br><br>" +
            "(A) 'office' means a room or set of rooms where people work, usually sitting at desks." +
            "<br><br>" +
            "(C) 'store' means a place where goods are sold." +
            "<br><br>" +
            "(D) 'gym' means a place equipped for physical exercise.",
        chinese_explanation: "(B) '住所' 意思是某人居住的地方。" +
            "<br><br>" +
            "(A) '办公室' 意思是人们通常坐在办公桌前工作的房间或一组房间。" +
            "<br><br>" +
            "(C) '商店' 意思是出售商品的地方。" +
            "<br><br>" +
            "(D) '健身房' 意思是配备了体育锻炼设施的地方。"
    },
    {
        id: 9,
        question: "There was a noticeable __________ in the air as autumn approached.",
        chinese_question: "随着秋天的临近，空气中有一种明显的 __________。",
        answers: [
            { option: "A", answer: "chill", chinese_answer: "寒意", chinese_romanization: "hányì" },
            { option: "B", answer: "warmth", chinese_answer: "温暖", chinese_romanization: "wēnnuǎn" },
            { option: "C", answer: "heat", chinese_answer: "热", chinese_romanization: "rè" },
            { option: "D", answer: "blaze", chinese_answer: "火焰", chinese_romanization: "huǒyàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chill' means an unpleasant feeling of coldness in the atmosphere, one's surroundings, or the body." +
            "<br><br>" +
            "(B) 'warmth' means the quality, state, or sensation of being warm; moderate heat." +
            "<br><br>" +
            "(C) 'heat' means the quality of being hot; high temperature." +
            "<br><br>" +
            "(D) 'blaze' means a very large or fiercely burning fire.",
        chinese_explanation: "(A) '寒意' 意味着在大气、周围环境或身体中感到的不愉快的寒冷感。" +
            "<br><br>" +
            "'温暖' 意味着温暖的质量、状态或感觉；适度的热量。" +
            "<br><br>" +
            "'热' 意味着热的质量；高温。" +
            "<br><br>" +
            "'火焰' 意味着非常大或猛烈燃烧的火。"
    },
    {
        id: 10,
        question: "The __________ of freedom means different things to different people.",
        chinese_question: "自由的 __________ 对不同的人有不同的意义。",
        answers: [
            { option: "A", answer: "concept", chinese_answer: "概念", chinese_romanization: "gàiniàn" },
            { option: "B", answer: "fact", chinese_answer: "事实", chinese_romanization: "shìshí" },
            { option: "C", answer: "object", chinese_answer: "物体", chinese_romanization: "wùtǐ" },
            { option: "D", answer: "reality", chinese_answer: "现实", chinese_romanization: "xiànshí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'concept' metaphorically means a general idea or understanding." +
            "<br><br>" +
            "(B) 'fact' means a thing that is known or proved to be true." +
            "<br><br>" +
            "(C) 'object' means a material thing that can be seen and touched." +
            "<br><br>" +
            "(D) 'reality' means the world or the state of things as they actually exist, as opposed to an idealistic or notional idea of them.",
        chinese_explanation: "(A) '概念' 比喻一般的想法或理解。" +
            "<br><br>" +
            "(B) '事实' 意味着已知或被证明是真实的事物。" +
            "<br><br>" +
            "(C) '物体' 意味着可以看见和触摸的物质事物。" +
            "<br><br>" +
            "(D) '现实' 意味着事物的实际存在状态，与理想化或概念化的想法相对。"
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
