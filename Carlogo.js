

                 function shuffle(someArray) {
 for ( var i = someArray.length -1; i > 0; i --){
     var j = Math.floor(Math.random() * ( i + 1));
     temp = someArray [i];
     someArray[i] = someArray[j];
     someArray [j] = temp;
 }
    return someArray;
}
var image_1 = ""
