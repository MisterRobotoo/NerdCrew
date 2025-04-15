function generateRandomKey(length = 16) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let key = '';
    for (let i = 0; i < length; i++) {
      key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return key;
}

const fs = require('fs');
const path = './key.txt';

function readPreviousKey() {
  if (!fs.existsSync(path)) return null;
  return fs.readFileSync(path, 'utf8');
}

function saveNewKey(key) {
  fs.writeFileSync(path, key);
}

const nodemailer = require('nodemailer');

async function sendKeyEmail(newKey) {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or any other SMTP service
    auth: {
      user: 'alroeetypp@gmail.com',
      pass: '#161uMr05' // or use environment vars
    }
  });

  const mailOptions = {
    from: 'alroeetypp@gmail.com',
    to: 'adrianandryanczyk07@gmail.com',
    subject: 'Your New Random Key',
    text: `Your new key is: ${newKey}`
  };

  await transporter.sendMail(mailOptions);
}

async function main() {
    const oldKey = readPreviousKey();
    const newKey = generateRandomKey();
  
    if (newKey !== oldKey) {
      saveNewKey(newKey);
      await sendKeyEmail(newKey);
      console.log('New key sent via email:', newKey);
    } else {
      console.log('Key unchanged, no email sent.');
    }
  }
  
  main();
  