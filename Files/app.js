const paragraphs = [
    "The quick brown fox jumps over the lazy dog. This sentence is famous for containing every letter of the English alphabet, making it a useful tool for typing practice. It helps typists improve their speed and accuracy by providing a variety of letters to type. Typing games and exercises often include this sentence to help users become more proficient with the keyboard. It's also used in font displays to show how different characters look in various typefaces.",
    "Typing is an essential skill in today's digital age. Whether you are a student, a professional, or simply someone who enjoys using computers, being able to type quickly and accurately is crucial. Many jobs require typing as a primary skill, and even in everyday life, typing efficiently can save a lot of time. Typing tests are a great way to measure and improve your typing speed and accuracy. They provide valuable feedback and help you identify areas for improvement.",
    "Practicing typing regularly can greatly enhance your typing skills. There are many online resources available that offer free typing lessons, games, and tests. These tools are designed to make learning to type fun and engaging. They often include exercises that focus on specific keys or key combinations, helping you become more familiar with the keyboard layout. By dedicating a few minutes each day to typing practice, you can significantly improve your speed and accuracy over time.",
    "Typing tests usually measure words per minute (WPM) and accuracy. Words per minute is a measure of how many words you can type in one minute. Accuracy is a measure of how many errors you make while typing. Both of these metrics are important for evaluating your typing skills. A high WPM is impressive, but it's equally important to maintain a high level of accuracy. Typing tests provide a balanced assessment of both speed and accuracy.",
    "There are different types of typing tests available online. Some tests focus on typing speed, while others emphasize accuracy. Some tests include longer passages to type, while others use shorter sentences or phrases. There are even typing games that make the practice more enjoyable. These games often include elements of competition and challenge, which can motivate you to improve your skills. Whether you prefer a formal test or a fun game, there are plenty of options to choose from.",
    "Keyboard shortcuts can greatly enhance your typing efficiency. Learning and using keyboard shortcuts can save a significant amount of time, especially for repetitive tasks. For example, common shortcuts like Ctrl+C to copy and Ctrl+V to paste are used frequently in everyday computing. There are also shortcuts specific to certain applications, such as Ctrl+Z to undo in word processors or Ctrl+T to open a new tab in web browsers. Mastering these shortcuts can make you more productive.",
    "Touch typing is a technique where you type without looking at the keyboard. This method relies on muscle memory to locate keys and allows you to type faster and more accurately. Touch typing is a valuable skill to learn because it increases typing speed and reduces the strain on your eyes and neck. Many typing courses and software programs teach touch typing by providing structured lessons and exercises that guide you through the process of learning this technique.",
    "Typing speed can be improved with regular practice. Setting aside a few minutes each day to practice typing can lead to significant improvements over time. Start with shorter practice sessions and gradually increase the duration as you become more comfortable. Focus on accuracy first, then gradually work on increasing your speed. Using typing games and tests can make practice more enjoyable and help you track your progress. Consistency is key to developing and maintaining good typing skills.",
    "Accurate typing is just as important as speed. Making too many errors can slow you down and reduce your overall efficiency. To improve accuracy, concentrate on pressing each key correctly. Take your time and avoid rushing through your typing practice. If you find yourself making the same mistakes repeatedly, try to identify the problem areas and focus on practicing those specific keys or combinations. Over time, with patience and practice, your accuracy will improve.",
    "Typing tests can be a fun and effective way to improve your typing skills. Many websites offer free typing tests that provide instant feedback on your speed and accuracy. These tests often include a variety of texts to type, ranging from simple sentences to complex paragraphs. By taking these tests regularly, you can track your progress and see how your typing skills improve over time. Typing tests also help you identify areas where you need to focus more practice.",
    "Developing good typing habits is essential for improving your typing skills. Make sure to sit up straight with your feet flat on the floor and your wrists slightly elevated above the keyboard. Position your fingers on the home row keys and use the correct finger for each key. Avoid looking at the keyboard while typing, and try to keep your eyes on the screen. Practicing these habits regularly will help you type faster and more accurately, reducing the risk of strain or injury.",
    "Typing games are a fun way to practice typing skills. These games often include timed challenges, typing races, and other interactive activities that make learning to type enjoyable. Many typing games are designed for different skill levels, from beginners to advanced typists. They provide a great way to improve your speed and accuracy while having fun. Typing games can also help you develop better hand-eye coordination and muscle memory, which are essential for efficient typing.",
    "Many typing programs offer customizable practice sessions. You can choose the length and difficulty of the texts you type, and some programs even allow you to upload your own texts for practice. This customization allows you to focus on specific areas where you need improvement. For example, if you struggle with typing numbers, you can practice number-heavy texts. If you have difficulty with certain words or phrases, you can create practice sessions that include those specific elements.",
    "Typing tests often include a variety of texts to type. These texts can range from simple sentences to complex paragraphs, providing a well-rounded practice experience. Typing different types of texts helps you become more comfortable with a variety of words and phrases, improving your overall typing skills. Some typing tests also include passages from literature, news articles, or technical documents, giving you exposure to different writing styles and vocabularies.",
    "Learning to type efficiently involves developing good finger positioning and hand movements. The home row keys are the foundation of touch typing, and each finger is responsible for specific keys. Practicing proper finger positioning helps you type faster and reduces the risk of repetitive strain injuries. Many typing programs provide exercises that focus on finger placement and movement, helping you build the muscle memory needed for efficient typing. Consistent practice is key to mastering these techniques.",
    "Typing competitions can be a fun way to test and improve your typing skills. Many online platforms host typing contests where you can compete against other typists from around the world. These competitions often include timed challenges and leaderboard rankings, adding an element of excitement and motivation. Participating in typing competitions can help you push your limits and achieve new personal bests in typing speed and accuracy. It's a great way to make typing practice more engaging.",
    "Many schools and educational institutions offer typing courses as part of their curriculum. These courses teach students the fundamentals of typing, including finger placement, hand positioning, and typing techniques. Learning to type at a young age can provide a strong foundation for future academic and professional success. Typing courses often include a mix of instruction, practice exercises, and typing tests to help students develop their skills. With regular practice, students can become proficient typists.",
    "Typing accuracy is often measured as a percentage of correct key presses. A high accuracy rate is crucial for efficient typing, as making too many errors can slow you down and reduce your productivity. To improve accuracy, focus on typing each word correctly before moving on to the next one. If you make a mistake, correct it immediately rather than continuing with the error. Practicing regularly and paying attention to accuracy will help you develop better typing habits.",
    "There are many free typing resources available online. These resources include typing lessons, games, tests, and tutorials. Many websites offer structured typing courses that guide you through the process of learning to type, from beginner to advanced levels. Typing games provide a fun and interactive way to practice your skills, while typing tests offer valuable feedback on your speed and accuracy. By taking advantage of these free resources, you can improve your typing skills without any cost.",
    "Typing on different devices can require different techniques. For example, typing on a smartphone or tablet can be quite different from typing on a traditional keyboard. The key layout, size, and tactile feedback can all affect your typing speed and accuracy. Practicing typing on different devices can help you become more adaptable and proficient. Many typing programs offer lessons and exercises specifically designed for mobile devices, helping you improve your typing skills on the go."
];
let timer = 60;
let timeLeft = timer;
let timeTag = document.querySelector('.time span');
let charIndex = 0;
let typingInput = document.getElementById('typing-input');
let paragraphBox = document.querySelector('.paragraph-box p');
let mistakes = 0;
let mistakeTag = document.querySelector('#mistakeTag');
let intervalId;
let wpmTag = document.querySelector('.wpm span')
let cpmTag = document.querySelector('.cpm span')
let tryAgain = document.getElementById('tryAgain')

function getRandomPara() {
    let randomIdx = Math.floor(Math.random() * paragraphs.length);
    paragraphBox.innerHTML = '';
    paragraphs[randomIdx].split('').forEach(character => {
        let span = `<span>${character}</span>`;
        paragraphBox.innerHTML += span;
    });
}

function checkingLetters() {
    let typedChar = typingInput.value;
    let characters = paragraphBox.querySelectorAll('span');
    if (typedChar.length < charIndex) {
        if (charIndex > 0) {
            charIndex--;
            if (characters[charIndex].classList.contains("incorrect")) {
                mistakes--;
            }
            characters[charIndex].classList.remove("correct", "incorrect");
        }
    } else if (typedChar.length > charIndex) {
        if (typedChar[charIndex] === characters[charIndex].innerText) {
            characters[charIndex].classList.add('correct');
        } else {
            characters[charIndex].classList.add('incorrect');
            mistakes++;
        }
        charIndex++;
    }
    let wpm = Math.round(((charIndex - mistakes)  / 5) / (timer - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        wpmTag.innerText = wpm;
    cpmTag.innerText = charIndex - mistakes
    mistakeTag.innerText = mistakes;
}

function inittimer() {
    intervalId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timeTag.innerText = `${timeLeft}s`;
        } else {
            clearInterval(intervalId);
            console.log('Time is up!'); 
            Swal.fire({
                title: "Ooops",
                text: "The Time is up!",
                icon: "question"
            }).then(() => {
                location.reload();
            });
        }
    }, 1000);
}

typingInput.addEventListener('focus', () => {
    if (!intervalId) { 
        inittimer();
    }
});
window.addEventListener('load', () => {
    getRandomPara();
    // inittimer();
});
typingInput.addEventListener('input', checkingLetters);
tryAgain.addEventListener('click',()=>{
    location.reload()
})