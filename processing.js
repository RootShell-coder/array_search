function read(object) {
    var String = object.value.split('\n');
    var key = 0;
    let human = []
    let res = []

    for (var i = 0; i < String.length; i++){
        String[i] = String[i].trim().replace(/\s{2,}/g, ' ');
        if(String[i]===''){continue}
           human[key] = String[i].split(' ',3);
           res.push(human[key][1]);
           key++
    }
    var newArr = res.slice().sort(), most = [undefined, 0], counter = 0;
    newArr.reduce(function(old, chr){
      old == chr ? ++counter > most[1] && (most = [chr, counter]) : (counter = 1)
      return chr
});
    alert(most[0] + " встречается "+most[1]+" раза ");
}
