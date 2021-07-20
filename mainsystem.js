function start(){
    document.getElementById("textoutput").innerHTML="<p style='line-height: 100%;'>Welcome to the game!</p>";
    document.getElementById("textoutput").innerHTML +="Please type any command and type 'help' for help​";
    
}


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
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

readTextFile("test.txt");*/



function changeme(){
    document.getElementById("finaltest").innerHTML += document.getElementById("inputplace").value;
    document.getElementById("inputplace").value = "";
    if(event.keyCode == 8){
        if(document.getElementById("finaltest").innerHTML.slice(-6) == "&nbsp;"){
            document.getElementById("finaltest").innerHTML = document.getElementById("finaltest").innerHTML.slice(0, -6);
        }
        else{
            document.getElementById("finaltest").innerHTML = document.getElementById("finaltest").innerHTML.slice(0, -1);
        }
        
    }
    if(event.keyCode == 32){
        document.getElementById("finaltest").innerHTML = document.getElementById("finaltest").innerHTML.slice(0, -1)
        document.getElementById("finaltest").innerHTML += "&nbsp;";
        document.getElementById("inputplace").value = "";
    }
    document.getElementById("finaltest").innerHTML += document.getElementById("inputplace").value;
    document.getElementById("inputplace").value = "";

}