const commandlist = {}
commandlist['help'] = `
Register -id -pw -email : register this game
Save -filename : save the game
Rank -show : show my rank
Rank -upload : upload my score data
Login -id -pw : login to this game`;
commandlist['start'] = `
`
commandlist['test1'] = `#include <stdio.h>
int main(void) {
    printf("Hello, World!");
    return 0;
}`



function changeme(){
    if(document.getElementById("finaltest").innerHTML.length < 95){
        if(event.keyCode != 32 && event.keyCode != 13){
            document.getElementById("finaltest").innerHTML += String.fromCharCode(event.keyCode);
            
        }
        document.getElementById("inputplace").value = "";
    }
    document.getElementById("jb-content").scrollLeft += 1000000;
    document.getElementById("inputplace").value = "";
    
    
}
let step = 0;
let gamestarted = false;
let nStart;
let nEnd;
let gamestep = 0;
let gametext;
let point = 0;
function commandoutput(command) {
    if(command == "help"){
        let text = commandlist[command];
        let count = 0;
        let prepos = 0;
        let pos = text.indexOf("\n");
        while (pos !== -1) {
            count++;
            document.getElementById("textoutput").innerHTML += "&nbsp;" + text.slice(prepos, pos) + "<br>";
            prepos = pos;
            pos = text.indexOf("\n", pos + 1);

        }
    }
    else if(command == "start") {
        nStart = new Date().getTime();
        //타자게임
        let textl = commandlist["test1"];
        gametext = textl.split("\n");
        step = gametext.length;
        gamestarted = true;
        for(gamestep = 0;gamestep < step;gamestep++){
            gametext[gamestep] = gametext[gamestep].replace(/ /gi,"&nbsp;");
            gametext[gamestep] = gametext[gamestep].replace(/</gi,"&lt;");
            gametext[gamestep] = gametext[gamestep].replace(/>/gi,"&gt;");
        }
        gamestep = 0;
        
        document.getElementById("textoutput").innerHTML += "<p>&nbsp;화면에 보이는 문장을 입력 후 엔터를 누르세요.</p>"
        document.getElementById("textoutput").innerHTML += "<p>&nbsp;"+gametext[gamestep]+"</p>"
        //nEnd =  new Date().getTime();
        //var nDiff = nEnd - nStart;
    }
    
    
}
function changeme2(){
    if(event.keyCode == 8){
        if(document.getElementById("finaltest").innerHTML.slice(-6) == "&nbsp;"){
            document.getElementById("finaltest").innerHTML = document.getElementById("finaltest").innerHTML.slice(0, -6);
        }
        else{
            document.getElementById("finaltest").innerHTML = document.getElementById("finaltest").innerHTML.slice(0, -1);
        }
        
    }
    else if(event.keyCode == 32){
        document.getElementById("finaltest").innerHTML += "&nbsp;";
        document.getElementById("inputplace").value = "";
    }
    else if(event.keyCode == 9){
        event.preventDefault();
        document.getElementById("finaltest").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
        document.getElementById("inputplace").value = "";
    }
    else if(event.keyCode == 13){
        
        if(gamestarted){ //타자게임 공간
            document.getElementById("textoutput").innerHTML += "<p>&nbsp;" + document.getElementById("finaltest").innerHTML + "</p>";
            gamestep += 1;
            if(document.getElementById("finaltest").innerHTML == gametext[gamestep - 1]){
                point += 500;
            }
            if(gamestep < step){
                
                console.log(document.getElementById("finaltest").innerHTML);
                console.log(gametext[gamestep - 1]);
                console.log(document.getElementById("finaltest").innerHTML == gametext[gamestep - 1]);
                document.getElementById("textoutput").innerHTML += "<p>&nbsp;" + gametext[gamestep] + "</p>";
            }
            else{
                gamestarted = false;
                nEnd =  new Date().getTime();
                var nDiff = (nEnd - nStart) / 1000;
                alert(nDiff + "초 동안 " + point + "점 득점");
            }
            document.getElementById("finaltest").innerHTML = "";
            document.getElementById("inputplace").value = "";
            
        }
        else{ //명령어 처리 공간
            document.getElementById("textoutput").innerHTML += "<p>root@game-pc:~$&nbsp;" + document.getElementById("finaltest").innerHTML + "</p>";
            let command = document.getElementById("finaltest").innerHTML;
            document.getElementById("finaltest").innerHTML = "";
            document.getElementById("inputplace").value = "";
            if(command in commandlist){
                commandoutput(command);
                
            }
        }
        
        document.getElementById("jb-content").scrollTop += 10000;
    }
    document.getElementById("inputplace").value = "";
    document.getElementById("jb-content").scrollLeft += 10000;
}

function byebye(){
    document.getElementById("inputplace").value = "";
}