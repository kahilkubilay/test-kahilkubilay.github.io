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

function card(cocktailsName){ //parametre olarak cocktails ismini gönder
    
    var card = document.createElement('div');
    card.className = 'card flip-card';
    
    var flipCardInner = document.createElement('div');
    flipCardInner.className = 'flip-card-inner';
    
    card.appendChild(flipCardInner);
    
    var flipCardFront = document.createElement('div');
    flipCardFront.className = 'flip-card-front';
    
    var cocktailsIMG = document.createElement('img');
    cocktailsIMG.className = 'cocktails-img card-img-top';
    cocktailsIMG.setAttribute('src', 'C:/Users/Bote/Desktop/test/img/bacardi.png'); //ismi parametre olarak gönder
    cocktailsIMG.setAttribute('alt', 'isimden cek');

    var cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    var cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = 'Cosmopolitan'; // isim bilgisini parametre üzerinden çek
    cardBody.appendChild(cardTitle);
    
    flipCardFront.appendChild(cocktailsIMG);
    flipCardFront.appendChild(cardBody);
    flipCardInner.appendChild(flipCardFront);
    
    var flipCardBack = document.createElement('div');
    flipCardBack.className = 'flip-card-back';
    
    var cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = '';
    var alcoholElement = document.createElement('p');
    alcoholElement.className = 'alcohol-element';
    alcoholElement.textContent = '1.5 Lime Juice, 1.5 Cointreau, 3 Cranberry Juice, 4 Vodka'; 
    var backCardTitle = document.createElement('h5');
    backCardTitle.className = 'card-title border-top';
    backCardTitle.textContent = 'Cosmopolitan'; // isim bilgisini parametre üzerinden çek
    
    

    flipCardBack.appendChild(cardText);
    flipCardBack.appendChild(alcoholElement);
    flipCardBack.appendChild(backCardTitle);
        
    flipCardInner.appendChild(flipCardBack);
    
    document.body.append(card);
    
    
}
