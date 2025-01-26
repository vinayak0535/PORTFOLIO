const lines = [
  "Problem Solver",
  "Ui/Ux Designer.",
  "Front end developer",
];

const typingSpeed = 100; 
const erasingSpeed = 50;
const delayBetweenLines = 1000; 

let currentLine = 0;
const textElement = document.getElementById("text");

function typeLine(line, callback) {
  let i = 0;
  const interval = setInterval(() => {
    if (i < line.length) {
      textElement.textContent += line[i];
      i++;
    } else {
      clearInterval(interval);
      setTimeout(callback, delayBetweenLines);
    }
  }, typingSpeed);
}

function eraseLine(callback) {
  let line = textElement.textContent;
  let i = line.length;
  const interval = setInterval(() => {
    if (i > 0) {
      textElement.textContent = line.slice(0, --i);
    } else {
      clearInterval(interval);
      callback();
    }
  }, erasingSpeed);
}

function loopLines() {
  typeLine(lines[currentLine], () => {
    eraseLine(() => {
      currentLine = (currentLine + 1) % lines.length;
      loopLines();
    });
  });
}

loopLines();

// whats app


document.getElementById('whatsappForm').addEventListener('submit', function (e) {
  e.preventDefault(); 

  const name = document.getElementById('exampleInputName1').value;
  const email = document.getElementById('exampleInputEmail1').value;
  const message = document.getElementById('Message').value;

  if (name != "" && email != "" && message != "") {
    const phoneNumber = '9702490987';

    const whatsappMessage = `Hello, you have a new message from the form:
Name: ${name}
Email: ${email}
Message: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  } else {
    alert("Please filled the mandatory * details")
  }
  window.open(whatsappURL, '_blank');
});


