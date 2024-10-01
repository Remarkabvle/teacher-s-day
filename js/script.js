const messageElement = document.querySelector('.main-message');
const changeMessageButton = document.getElementById('changeMessage');

const messages = [
  'Siz eng kuchli yo‘lboshchimizsiz!',
  'Biz sizning bilimlaringizdan ilhom olamiz!',
  'Kelajagimiz uchun tayyorlaganingiz uchun katta rahmat!',
  'O‘rgatgan barcha saboqlaringiz yodimizda!'
];

let currentMessageIndex = 0;

changeMessageButton.addEventListener('click', () => {
  currentMessageIndex = (currentMessageIndex + 1) % messages.length;
  messageElement.textContent = messages[currentMessageIndex];
});
