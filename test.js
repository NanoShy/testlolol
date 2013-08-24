API.on(API.CHAT, function(obj){
    command = false; var chatCommand = "";
    if(obj.message.indexOf("!") === 0) command = true;
    if(command){
        chatCommand = obj.message.substring(1);
        var commands = chatCommand.split(" ");
        commands.push("undefined");
        for(var i = 2; i < commands.length; i++){
            if(commands[i] !== "undefined") commands[1] = commands[1] + " " + commands[i];
        }
    switch(commands[0].toLowerCase()){
		case "TESTLOL":
            API.sendChat("Shittest");
            break;
        case "id":
            API.sendChat("@"+obj.from+" "+API.getMedia().id);
            break;
        case "lastplayed":
            for(var i = 0; i < songs.length; i++){
                if(API.getMedia().id == songs[i].id){
                    API.sendChat("This song was last played on "+songs[i].lastPlayed);
                }else{
                    API.sendChat("I don't have any data for this song!");
                }
            }
            break;
        case "firstplayed":
            for(var i = 0; i < songs.length; i++){
                if(API.getMedia().id == songs[i].id){
                    API.sendChat("This song was first played on "+songs[i].firstPlayed);
                }else{
                    API.sendChat("I don't have any data for this song!");
                }
            }
            break;
        case "titles":
            for(var i = 0; i < songs.length; i++){
                if(API.getMedia().id == songs[i].id){
                    API.sendChat("Known titles: "+songs[i].title);
                }else{
                    API.sendChat("I don't have any data for this song!");
                }
            }
        /*case "linkify":
            if(commands[1] === "undefined"){
                API.sendChat("@" + obj.from + " You need to put a link!");
            }else if(commands[1].toLowerCase().indexOf("plug.dj" || "bug.dj") === -1){
            API.sendChat("http://"+commands[1]);
            }else{
                API.sendChat("Nice try! Advertising is not allowed in this room.");
            }
         break;
         case "songlink":
         API.sendChat("@"+obj.from+" "+"http://youtu.be/"+API.getMedia().cid);
         break;
         */
}
}
});
