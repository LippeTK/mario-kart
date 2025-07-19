export default function course(){

    let trackBlocks = ["","","","",""]
    for(let i = 0; i < trackBlocks.length; i++){
        trackBlocks[i] = Math.floor(Math.random() * 3) + 1; //gera 1, 2 ou 3
    }
    return trackBlocks
}