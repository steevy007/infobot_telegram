const { listenerCount } = require('node-telegram-bot-api');
const TelegramBot = require('node-telegram-bot-api');

// remplacez la valeur ci-dessous par le jeton Telegram que vous recevez de @BotFather
const token = '1836798129:AAGgqiHAYzlz94D8-361o8bDpMF_ua0vMsQ';

// Crée un bot qui utilise ' polling ' pour récupérer les nouvelles mises à jour 
const bot = new TelegramBot(token, { polling: true });
const cmdList = `  /start => Demarrage du bot\n/help => liste Commandes\n /hours => Heure Actuelle\n/day => Date du jour`

bot.onText(/\/start/, (msg, match) => {
    // 'msg' est le message reçu de Telegram
    // 'match' est le résultat de l'exécution de l'expression rationnelle ci-dessus sur le contenu du texte
    // du message

    const chatId = msg.chat.id;
    console.log(msg)
    // renvoie le "whatever" correspondant au chat
    bot.sendMessage(chatId, `Salut je suis info_bot !!!\n${msg.chat.username}\ncomment puis je vous aide?`);
});

bot.onText(/\/help/, (msg, match) => {
    // 'msg' est le message reçu de Telegram
    // 'match' est le résultat de l'exécution de l'expression rationnelle ci-dessus sur le contenu du texte
    // du message

    const chatId = msg.chat.id;
    
    bot.sendMessage(chatId,cmdList.toString());
});


bot.onText(/\/hours/, (msg, match) => {
    // 'msg' est le message reçu de Telegram
    // 'match' est le résultat de l'exécution de l'expression rationnelle ci-dessus sur le contenu du texte
    // du message

    const chatId = msg.chat.id;
    const date=new Date()
    const heure=date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
    bot.sendMessage(chatId,'Il est '+heure);
});


function join(t, a, s) {
    function format(m) {
       let f = new Intl.DateTimeFormat('fr', m);
       return f.format(t);
    }
    return a.map(format).join(s);
 }

bot.onText(/\/day/, (msg, match) => {
    // 'msg' est le message reçu de Telegram
    // 'match' est le résultat de l'exécution de l'expression rationnelle ci-dessus sur le contenu du texte
    // du message

    const chatId = msg.chat.id;
    let a = [{day: 'numeric'}, {month: 'short'}, {year: 'numeric'}];
    let s = join(new Date, a, '-');
    bot.sendMessage(chatId,'Nous Somme le '+s);
});
