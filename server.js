//If you use the glitch page to host write the following:

const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);

////////////////////////////////real bot//////////////////////////////////////////

const {Client, MessageEmbed} = require("discord.js");
const client= new Client();

client.on('message',message=>{

var sender=message.author;
  var msg=message.content.toUpperCase();
  var prefix='>'
  
  // id
  /*per:if (sender.id=== "18310231321"){
  */
  if (sender.id=== "id"){
  return;
}
  });
//bot status
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('/help',{ //you can edit this(/help)
    type:'PLAYING'
    //this does not work 
   /* ,url:'https://nier.fandom.com/es/wiki/NieR:Automata'*/});
});
//hola=hi
client.on('message', msg => {
  if (msg.content === 'hola') {
    msg.reply('hola');
    
 //random number
    client.on('message', msg => {
  var mensaje = msg.content;
    var cabecera = mensaje.substring(0,7);
  if (cabecera === '/random'){
    var i = mensaje.substring(8,mensaje.length +1);
    
   
    var min=0;
     var max=i;
     
   var Numerorandom= Math.floor(Math.random() * (max - min + 1)) + min;
     msg.reply(Numerorandom);
  }
});
    
    
    
    
   //smite is a moba genre video game 
 client.on('message', msg => {
   var smite = new Array(113);
   smite=['Tsukuyomi','Aphrodite','Agni','Ah_Muzen_Cab','Ah_Puch','Amaterasu','Anhur','Anubis','Ao_Kuang','Apollo','Achilles','Arachne','Ares','Artemis','Artio','Athena','Awilix','Baba_Yaga','Bacchus','Bakasura','Baron_Samedi','Bastet','Bellona','Cabrakan','Camazotz','Cerberus','Cernunnos','Chaac',"Chang'e",'Chernobog','Chronos','Cthulhu','Cupid','Cu_Chulainn','Danzaburou','Da_Ji','Discordia','Erlang_Shen','Fafnir','Fenrir','Freya','Ganesha','Geb','Gilgamesh','Guan_Yu','Hachiman','Hades','He_Bo','Heimdallr','Hel','Hera','Horus','Hou_Yi','Hun_Batz','Hercules','Isis','Xbalanque','Izanami','Janus','Jing_Wei','Jormungandr','Kali','Khepri',"Kukulkan", "Kumbhakarna", "Kuzenbo", "Loki", "Medusa", "Mercury", "Merlin", "The_Morrigan","Mulan","Ne_Zha", "Neith", "Nike","Nox", "Nu_Wa", "Nemesis", "Odin","Olorun", "Osiris","Pele","Persephone","Poseidon","Chiron","Ra","Raijin","Rama","Ratatoskr","Ravana","King_Arthur","Scylla","Serqet","Set","Sylvanus","Skadi","Sobek","Sun_Wukong","Susano","Sol","Terra","Thor","Thoth","Tiamat","Tyr","Thanatos","Ullr","Vamana","Vulcan","Xing_Tian","Yemoja","Ymir","Zeus","Zhong_Kui"];
   if (msg.content === '/smite'){
     var min=0;
     var max=113;// or use smite.lenght
     var randomS;
   randomS= Math.floor(Math.random() * (max - min + 1)) + min;
     msg.reply("te ha tocado: https://smite.gamepedia.com/"+smite[randomS]);
    
   }
 });
    //Fate Grand Order Anime
    client.on('message', msg => {
  var mensaje = msg.content;
  var fate = new Array(3);
  fate=["Artoria_Pendragon","Zhuge_Liang_(Lord_El-Melloi_II)","Jeanne_d'Arc_(Alter)"]
    var cabecera = mensaje.substring(0,4);
  if (cabecera === '/fgo'){
    var search = mensaje.substring(5,mensaje.length +1);
     switch(search) {
            case 'saber':
                search=fate[0];
                 break;
            case 'waver':
                search=fate[1];
                  break;
            case 'jalter':
                search=fate[2];
                   break;
    }
    msg.reply('https://fategrandorder.fandom.com/wiki/'+search);
    
    //info server
    if (msg.content === '/info'){
msg.channel.send(`This server's name is: ${msg.guild.name}`+`\nTotal members: ${msg.guild.memberCount}`)
  }
});
      
      //I do not know why it does not work 
client.on('message', message => {
  if (message.content === '/avatar') {
    var member= message.mentions.members.first();
    let embed = new client.RichEmbed()
  .setImage(message.member.avatarURL)
  .setColor('#275BF0')
    message.channel.send(embed)
  }
});
  client.on('message', msg => {
  
  if (msg.content === '/help'){
    
     msg.reply('Comandos: \nhelp1:general \nhelp2:juegos \nhelp3:anime');
  }
  
});
client.on('message', msg => {
  
  if (msg.content === '/help1'){
    
     msg.reply('Comandos: \nhola=hola   \n/info=server info \n/random=numero random   \n/user:foto del usuario escrito ');
  }
  
});
client.on('message', msg => {
  
  if (msg.content === '/help2'){
    
     msg.reply('Comandos: \n/smite=smite random god ');
  }
  
});
client.on('message', msg => {
  
  if (msg.content === '/help3'){
    
     msg.reply('Comandos:  \n/fgo:escribir detras el personaje de fate que quieres buscar');
  }
  
});
      
      client.login('private');
