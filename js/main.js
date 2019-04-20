//main js 

//length alcohol
var pathAlcoholElement = document.getElementsByClassName("alcohol-element");
var length = pathAlcoholElement.length;

var vodkaLen  = whiskyLen = brandyLen = vermouthLen = cognacLen = beerLen = wineLen =
rumLen = ginLen = 0;

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

var ingredients = "";

async function lenOfAlcohol(){    

    for(var i=0 ; i<length ; i++){
     
        ingredients = document.getElementsByClassName("alcohol-element")[i].innerHTML.toLowerCase();

        if( (ingredients.search("vodka") != -1)  || (ingredients.search("vodka,") != -1) || (ingredients.search(",vodka") != -1)){
            document.getElementsByClassName("vodkaLen")[0].innerHTML = ++vodkaLen;
        }if( (ingredients.search("whisky") != -1)  || (ingredients.search("whisky,") != -1) || (ingredients.search(",whisky") != -1)){
            document.getElementsByClassName("whiskyLen")[0].innerHTML = ++whiskyLen;
        }if( (ingredients.search("brandy") != -1)  || (ingredients.search("brandy,") != -1) || (ingredients.search(",brandy") != -1)){
            document.getElementsByClassName("brandyLen")[0].innerHTML = ++brandyLen;
        }if( (ingredients.search("vermouth") != -1)  || (ingredients.search("vermouth,") != -1) || (ingredients.search(",vermouth") != -1)){
            document.getElementsByClassName("vermouthLen")[0].innerHTML = ++vermouthLen;
        }if( (ingredients.search("cognac") != -1)  || (ingredients.search("cognac,") != -1) || (ingredients.search(",cognac") != -1) ){
            document.getElementsByClassName("cognacLen")[0].innerHTML = ++cognacLen;
        }if( (ingredients.search("beer") != -1)  || (ingredients.search("beer,") != -1) || (ingredients.search(",beer") != -1)){
            document.getElementsByClassName("beerLen")[0].innerHTML = ++beerLen;
        }if( (ingredients.search("wine") != -1)  || (ingredients.search("wine,") != -1) || (ingredients.search(",wine") != -1)){
            document.getElementsByClassName("wineLen")[0].innerHTML = ++wineLen;
        }if( (ingredients.search("rum") != -1)  || (ingredients.search("rum,") != -1) || (ingredients.search(",rum") != -1)){
            document.getElementsByClassName("rumLen")[0].innerHTML = ++rumLen;
        }if( (ingredients.search("gin") != -1)  || (ingredients.search("gin,") != -1) || (ingredients.search(",gin") != -1)){
            document.getElementsByClassName("ginLen")[0].innerHTML = ++ginLen;
        }

        await sleep(250);

    }

}

lenOfAlcohol();