function start(){
    document.getElementById("textoutput").innerHTML="<p style='line-height: 100%;'>Welcome to the game!</p>";
    document.getElementById("textoutput").innerHTML +="Please type any command and type 'help' for help​";
    
}


function readTextFile(file)
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

readTextFile("test.txt");