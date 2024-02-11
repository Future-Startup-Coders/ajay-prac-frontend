let root = document.getElementById("root");

  let img = document.createElement('img');
  img.setAttribute('src', './coder.jpg');

  let promise = document.createElement('h2');
  promise.textContent = "𝑯𝒂𝒑𝒑𝒚 𝑷𝒓𝒐𝒎𝒊𝒔𝒆 𝒅𝒂𝒚...👩‍💻🥰🤝🤞🖤❤️";

  let textarea = document.createElement('textarea');
  textarea.textContent = "𝙄 𝙋𝙧𝙤𝙢𝙞𝙨𝙚 𝙮𝙤𝙪 𝙖𝙡𝙡 𝙩𝙝𝙖𝙩 𝙤𝙪𝙧 𝙘𝙤𝙢𝙥𝙖𝙣𝙮 𝙞𝙨 𝙜𝙤𝙞𝙣𝙜 𝙩𝙤 𝙗𝙚 𝙗𝙞𝙜𝙜𝙚𝙧 𝙖𝙣𝙙 𝙩𝙝𝙚 𝙙𝙧𝙚𝙖𝙢𝙨 𝙬𝙚 𝙝𝙖𝙫𝙚 𝙨𝙚𝙚𝙣 𝙖𝙧𝙚 𝙜𝙤𝙞𝙣𝙜 𝙩𝙤 𝙗𝙚 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙚𝙙 𝙚𝙖𝙧𝙡𝙮 𝙤𝙛 𝙨𝙤𝙤𝙣..😊👩‍💻🥰🤝🧑‍💻🖤";

  const card = document.createElement('div');
  card.className = 'card';
  card.appendChild(promise);
  card.appendChild(textarea);
  card.appendChild(img);

  root.appendChild(card);