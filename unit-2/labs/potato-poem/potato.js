let count

function potatoPoem() {
    let count = 0;
    while(count < 8) {
        count++;
    if (count==8) {
        console.log('More!');
    }
    else if (count==4) {
        console.log('4!');
    } else {
        console.log(count + ' potato,');
    }
    }
}
potatoPoem();