const num_arr = ['Zero', 'One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];

//returns corresponding phonetic pronunciation
function get_word(num){
    return num_arr[num];
}

function process_arr(arr){
    let output = "";
    //Loop through array and build up output string
    for(i = 0; i < arr.length; i++){
        let str = "";
        for(j = 0; j < arr[i].length; j++){
            str += get_word(arr[i].charAt(j));
        }
        if(i < arr.length -1){//Not last Item, therefore comma is needed
            str+=", ";
        }
        output+=str;
    }
    return output;
}


function main(){
    let args = process.argv.slice(2);//get command line arguments, and get rid of first two non-needed elems
    console.log(process_arr(args));
}

main();