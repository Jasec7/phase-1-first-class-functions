function receivesAFunction(spy){
    return spy();
}
receivesAFunction(7, function(){return spy * 2;});


function returnsANamedFunction(){
    function giveMeAName(){
    console.log("I am Jasec");
}
    return giveMeAName;
}
const theNewName = returnsANamedFunction();

theNewName();

 function returnsAnAnonymousFunction(){
    return function() {
        console.log("el jasec")
    };
}