// script.js

function generateLink() {
    var phoneNumber = document.getElementById('phoneNumber').value.trim();
    var message = document.getElementById('message').value.trim();
  
    if (!phoneNumber || !message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    var link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    document.getElementById('result').innerText = link;
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('copy-button').style.display = 'block'; // Removido o atraso
  }
  
  function copyToClipboard() {
    var resultElement = document.getElementById('result');
    var copyText = resultElement.innerText;
  
    var textArea = document.createElement('textarea');
    textArea.value = copyText;
  
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('Copy');
    document.body.removeChild(textArea);
  
    document.getElementById('copy-feedback').innerText = 'Link copiado para a área de transferência!';
  }
  