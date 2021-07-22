const commandlist = {}
commandlist['help'] = `Register -id -pw -email : register this game
Save -filename : save the game
Rank -show : show my rank
Rank -upload : upload my score data
Login -id -pw : login to this game`;


/*function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                return allText;
            }
        }
    }
    rawFile.send(null);
}
function test(event) {
    event.preventDefault(); //submit 할때 새로고침 되는것을 방지
    let fileObject = document.getElementById("input_file");
    let fileName = fileObject.files[0];

    let fr = new FileReader();
    fr.readAsText(fileName, "utf-8");

    fr.onload = () => {
        parseText(fr.result);
    }
}

function parseText(text) {
    console.log(text);
    document.getElementById("textoutput").innerHTML += "<pre>" + text + "</pre>";
}
*/



function changeme(){
    
    /*if(event.keyCode == 8){
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
    else{
    const testing = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if(testing.test(document.getElementById("inputplace").value)){
        alert("Please input only in English");
        document.getElementById("inputplace").value = "";
    }*/
    if(document.getElementById("finaltest").innerHTML.length < 95){
        if(event.keyCode != 32 && event.keyCode != 13){
            document.getElementById("finaltest").innerHTML += String.fromCharCode(event.keyCode);
            
        }
        document.getElementById("inputplace").value = "";
    }
    document.getElementById("jb-content").scrollLeft += 1000000;
    document.getElementById("inputplace").value = "";
    
    
}

function commandoutput(command) {
    let text = commandlist[command];
    document.getElementById("textoutput").innerHTML += "<pre><p style='color : white;line-height: 100%;font-size: 1.5em;font-family: 'Source Code Pro', monospace;'><pre>" + text + "</p></pre>";
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
    else if(event.keyCode == 13){
        document.getElementById("textoutput").innerHTML += "<p>root@game-pc:~$&nbsp;" + document.getElementById("finaltest").innerHTML + "</p>";
        let command = document.getElementById("finaltest").innerHTML;
        document.getElementById("finaltest").innerHTML = "";
        document.getElementById("inputplace").value = "";
        
        if(command in commandlist){
            commandoutput(command);
            
        }
        document.getElementById("jb-content").scrollTop += 10000;
    }
    document.getElementById("inputplace").value = "";
    document.getElementById("jb-content").scrollLeft += 10000;
}

function byebye(){
    document.getElementById("inputplace").value = "";
}