function inp_col(){
    var r_inp = document.getElementById("cmd_input")
    var new_color = 'rgb(255, 255, 0)';
    r_inp.style.backgroundColor = new_color;
}

function lw(){
    var i = document.getElementById("cmd_input").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.56.122/cgi-bin/d.py?c=" + i, true)
    xhr.send();

    xhr.onload = function(){
    var output = xhr.responseText;
    document.getElementById("out_para").innerHTML = output;
    }
}

function test(){
    alert(document.getElementById("cmd_input").value)
}
