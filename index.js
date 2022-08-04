function introduction(name) {
    return(`Hi, my name is ${name}.`);
}
   console.log (introduction("Aki"));
function introductionWithLanguageOptional(name, language){
    return( `Hi, my name is ${name} and I am learning to program in ${language}.`);
}
 console.log(introductionWithLanguageOptional("Gracie", "Python" ));
function introductionWithLanguage(name, language) {
    return( `Hi, my name is ${name} and I am learning to program in ${language}.`);
}
function introductionWithLanguageOptional(name,language="JavaScript"){
    return( `Hi, my name is ${name} and I am learning to program in ${language}.`)
}
console.log(introductionWithLanguageOptional("Gracie", "Python" ))