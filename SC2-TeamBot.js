const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (!msg.content.startsWith('!') || msg.author.bot) return;

    const args = msg.content.slice(1).split(/ +/);
    const command = args.shift().toLowerCase();

    console.log(command);

	if (command === 'ping') {

        msg.reply('Pong!');

	}else if(command === 'createteam' || command === "ct") {
		
		//Change the .get() to your inital voice channel ID
        const channel = client.channels.get('202516109625131009');

        let members = channel.members;
		
		let teamsMessage = "";

        const people = [];

        members.forEach(function(guildMember, guildMemberId) {
            console.log(guildMemberId, guildMember.user.username);
            people.push(guildMemberId);
        });

        let shuffledPeople = shuffle(people);

        var x = true;
        var y = 0;

        while(y < 4){
            let currentPerson = members.find(currentPerson => currentPerson.id === shuffledPeople[y]);

            if(y < 2){
                //Team 1
                if(x === true) {
                    console.log("Team 1:");
                    teamsMessage += 'Team 1: \n';
                }
				
				//Set this to team 1's voice channel ID
                currentPerson.setVoiceChannel('577879760747626527');
            }else{
                //Team 2
                if(x === true) {
                    console.log("Team 2:");
                    teamsMessage += 'Team 2: \n';
                }
				
				//Set this to team 2's voice channel ID
                currentPerson.setVoiceChannel('577879779793960961');
            }

            if(x) {
				console.log('Macro: ' + currentPerson.displayName);
                teamsMessage += 'Macro: ' + currentPerson.displayName + "\n";
                x = false;
            }else{
                console.log('Micro: ' + currentPerson.displayName);
                teamsMessage += 'Micro: ' + currentPerson.displayName + "\n";
                x = true;
            }
            y++;
        }
		
		msg.channel.send(teamsMessage);

	} else if(command === "createteam-novoice" || command === "ct-nv"){
		
		//Change the .get() to your inital voice channel ID
        const channel = client.channels.get('202516109625131009');

        let members = channel.members;
		
		let teamsMessage = "";

        const people = [];

        members.forEach(function(guildMember, guildMemberId) {
            console.log(guildMemberId, guildMember.user.username);
            people.push(guildMemberId);
        });

        let shuffledPeople = shuffle(people);

        var x = true;
        var y = 0;

        while(y < 4){
            let currentPerson = members.find(currentPerson => currentPerson.id === shuffledPeople[y]);

            if(y < 2){
                //Team 1
                if(x === true) {
                    console.log("Team 1:");
                    teamsMessage += 'Team 1: \n';
                }
            }else{
                //Team 2
                if(x === true) {
                    console.log("Team 2:");
                    teamsMessage += 'Team 2: \n';
                }
			}

            if(x) {
				console.log('Macro: ' + currentPerson.displayName);
                teamsMessage += 'Macro: ' + currentPerson.displayName + "\n";
                x = false;
            }else{
                console.log('Micro: ' + currentPerson.displayName);
                teamsMessage += 'Micro: ' + currentPerson.displayName + "\n";
                x = true;
            }
            y++;
        }
		
		msg.channel.send(teamsMessage);

    }else if(command === "return"){
		
		//Set this to team 1's voice channel ID
        const channel1 = client.channels.get('577879760747626527');
		//Set this to team 2's voice channel ID
        const channel2 = client.channels.get('577879779793960961');

        channel1.members.forEach(function(member) {
			//Change this to your voice channel ID that you want the player to be returned to. This would normally be the inital one for easy of use
            member.setVoiceChannel('202516109625131009');
        });
			//Same again here. Best to use the same ID as above.
        channel2.members.forEach(function(member) {
            member.setVoiceChannel('202516109625131009');
        });
    }
});

client.login('YOUR-KEY-HERE');

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
