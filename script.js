document.body.addEventListener("wheel", scroll);

var scrolls = 0
var page = 0

function scroll(){
    //if(scrolls == 0){
        document.getElementById("hub").className = "hub";
        setTimeout(function(){document.getElementById("hub2").className = "hub2"; document.getElementById("arrowsDiv").style.display = "block"; document.getElementById("contact").className = "contactContainer";}, 1000);
        setTimeout(function(){document.getElementById("arrowsDiv").className = "arrows fadeIn"}, 2000);
        scrolls ++;
        page = 1;
    //}
}

function programming(){
    document.getElementById("maxContainer").className = "maxContainer fadeOut";
    setTimeout(function(){document.getElementById("maxContainer").className = "maxContainer none";}, 1000);
    setTimeout(function(){document.getElementById("maxContainerProgramming").className = "maxContainer fadeIn";}, 1000);
    setTimeout(function(){document.getElementById("js").className = "language fadeIn";},1000);
    setTimeout(function(){document.getElementById("python").className = "language fadeIn";},1500);
    setTimeout(function(){document.getElementById("c").className = "language fadeIn";},2000);
    setTimeout(function(){document.getElementById("examples").className = "examples fadeIn";},3000);
    page = 2;
}

function curriculum(){
    document.getElementById("maxContainer").className = "maxContainer fadeOut";
    setTimeout(function(){document.getElementById("maxContainer").className = "maxContainer none";}, 1000);
    setTimeout(function(){document.getElementById("maxContainerCurriculum").className = "maxContainer fadeIn";}, 1000);
    setTimeout(function(){document.getElementById("curriculum").className = "language";},1000);
    page = 3;
}

function examples(){
    document.getElementById("maxContainerProgramming").className = "maxContainer fadeOut";
    setTimeout(function(){document.getElementById("maxContainerProgramming").className = "maxContainer none";}, 1000);
    setTimeout(function(){document.getElementById("maxContainerExamples").className = "maxContainer fadeIn";}, 1000);
    page = 4;
}

function arrow(direction){
    if(direction == 1){
        if(page == 1){
            document.getElementById("hub2").className = "hub2 fadeOutNone";
            document.getElementById("contact").className = "fadeOutNone"
            setTimeout(function(){
            document.getElementById("hub").setAttribute( 'style', 'margin-top: 0%');
            document.getElementById("hub").className = "fadeIn";
            document.getElementById("hub2").className = "none";
            document.getElementById("maxContainerProgramming").setAttribute( 'style', 'display: none');
            document.getElementById("maxContainerCurriculum").setAttribute( 'style', 'display: none');
            document.getElementById("maxContainerExamples").setAttribute( 'style', 'display: none');
            document.getElementById("arrowsDiv").setAttribute( 'style', 'display: none');
            }, 1);
            page = 0;
            scrolls = 0;
        }
        else if(page == 2){
            document.getElementById("maxContainerProgramming").className = "maxContainer fadeOut";
            setTimeout(function(){
                document.getElementById("maxContainerProgramming").className = "maxContainer invisible";
                document.getElementById("maxContainer").className = "maxContainer fadeIn";
                document.getElementById("hub").setAttribute( 'style', 'margin-top: -40% !important', 'opacity: 0%');
                document.getElementById("hub2").setAttribute( 'style', 'margin-top: 30% !important');
                document.getElementById("maxContainerCurriculum").setAttribute( 'style', 'display: none');
                document.getElementById("maxContainerExamples").setAttribute( 'style', 'display: none');
                document.getElementById("arrowsDiv").setAttribute( 'style', 'display: block');
            }, 500);
            page = 1;
        }
        else if(page == 3){
            document.getElementById("maxContainerCurriculum").className = "maxContainer fadeOut";
            setTimeout(function(){
                document.getElementById("maxContainerCurriculum").className = "maxContainer invisible";
                document.getElementById("maxContainer").className = "maxContainer fadeIn";
                document.getElementById("hub").setAttribute( 'style', 'margin-top: -40% !important', 'opacity: 0%');
                document.getElementById("hub2").setAttribute( 'style', 'margin-top: 30% !important');
                document.getElementById("maxContainerProgramming").setAttribute( 'style', 'display: none');
                document.getElementById("maxContainerExamples").setAttribute( 'style', 'display: none');
                document.getElementById("arrowsDiv").setAttribute( 'style', 'display: block');
            }, 500);
            page = 1;
        }
        else if(page == 4){
        document.getElementById("maxContainerExamples").className = "maxContainer fadeOut";
        setTimeout(function(){
            document.getElementById("maxContainerExamples").className = "maxContainer invisible";
            document.getElementById("maxContainer").setAttribute( 'style', 'display: none');
            document.getElementById("hub").setAttribute( 'style', 'display: none');
            document.getElementById("hub2").setAttribute( 'style', 'display: none');
            document.getElementById("maxContainerProgramming").className = "maxContainer fadeIn";
            document.getElementById("maxContainerCurriculum").setAttribute( 'style', 'display: none');
            document.getElementById("arrowsDiv").setAttribute( 'style', 'display: block');
            }, 1000);
            page = 2;
        }
    }
    else if(direction == 2){
        if(page == 2){
            document.getElementById("maxContainerProgramming").className = "maxContainer fadeOut";
            setTimeout(function(){
                document.getElementById("maxContainerProgramming").className = "maxContainer invisible";
                document.getElementById("maxContainer").setAttribute( 'style', 'display: none');
                document.getElementById("maxContainerCurriculum").setAttribute( 'style', 'display: none');
                document.getElementById("maxContainerExamples").className = "maxContainer fadeIn";
                document.getElementById("arrowsDiv").setAttribute( 'style', 'display: block');
            page = 4;
            }, 1000);
        }
        else if(page == 1){
            window.alert("Clique em 'conhecimentos' ou 'currículo'!")
        }
        else if(page == 4){
            window.alert("Não há mais para onde ir")
        }
    }
}

function email(){
    window.alert("kohlguilherme2004@gmail.com")
}