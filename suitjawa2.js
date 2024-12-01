function getPilihanComputer(){
    const comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return'orang';
    return 'semut';
}
function getHasil(comp, player){
    var hasil = '';
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
    }



    function putar(){
        const imgComputer = document.querySelector('.img-komputer');
        const gambar = ['gajah', 'semut', 'orang'];
        let i=0;
        const waktuMulai = new Date().getTime();
        setInterval(function(){
            if(new Date().getTime() - waktuMulai > 1000){
                clearInterval;
                return;
            }
            imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if(i == gambar.length) i=0;
        }, 100)
    }

        let win = 1;
        let lose = 1;


    const pilihan = document.querySelectorAll('li img');
    pilihan.forEach(function(pil){
        pil.addEventListener('click', function(){
            const PilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(PilihanComputer, pilihanPlayer);
        const scorePlayer = document.querySelector('.score-player');
		const scoreComp = document.querySelector('.score-comp');

        putar();
        setTimeout(function(){
            const imgComputer = document.querySelector('.img-komputer');
        imgComputer.setAttribute('src','img/' + PilihanComputer + '.png');

        const info = document.querySelector('.info');
        info.innerHTML = hasil;

        //score
		if(hasil == 'MENANG!'){
		scorePlayer.innerHTML = win++;
		}else if(hasil == 'KALAH!'){
		scoreComp.innerHTML =lose++;
		}
        if(hasil == 10){
            
        }
        },1000);

        });
    });


// const pGajah = document.querySelector('gajah');
// pGajah.addEventListener('click', function() {
//         const PilihanComputer = getPilihanComputer();
//         const pilihanPlayer = pGajah.className;
//         const hasil = getHasil(PilihanComputer, pilihanPlayer);

//         const imgComputer = document.querySelector('.img-komputer');
//         imgComputer.setAttribute('src','img/' + PilihanComputer + '.png');

//         const info = document.querySelector('.info');
//         info.innerHTML = hasil;
// });


// const pOrang = document.querySelector('orang');
// pOrang.addEventListener('click', function() {
//         const PilihanComputer = getPilihanComputer();
//         const pilihanPlayer = pOrang.className;
//         const hasil = getHasil(PilihanComputer, pilihanPlayer);

//         const imgComputer = document.querySelector('.img-komputer');
//         imgComputer.setAttribute('src','img/' + PilihanComputer + '.png');

//         const info = document.querySelector('.info');
//         info.innerHTML = hasil;
// });



// const pSemut = document.querySelector('semut');
// pSemut.addEventListener('click', function() {
//         const PilihanComputer = getPilihanComputer();
//         const pilihanPlayer = pSemut.className;
//         const hasil = getHasil(PilihanComputer, pilihanPlayer);

//         const imgComputer = document.querySelector('.img-komputer');
//         imgComputer.setAttribute('src','img/' + PilihanComputer + '.png');

//         const info = document.querySelector('.info');
//         info.innerHTML = hasil;
// });