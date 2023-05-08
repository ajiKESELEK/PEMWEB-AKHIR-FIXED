const dialogue = document.querySelector('.dialogue');
const choiceBox = document.querySelector('.choice-box');
const choices = document.querySelectorAll('.choice');

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    dialogue.textContent = `You chose ${choice.textContent}.`;
    choiceBox.style.display = 'none';
  });
});
