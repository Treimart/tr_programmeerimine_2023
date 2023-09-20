// Difference between == and ===

console.log(101 == "101")
console.log(101 === "101")

// async/await

/*
Async'i ja await'i kasutatakse siis, kui enne koodi (funktsiooni)
algatamist on vaja mingi protsess (või ajavahemik) ära oodata.

async - märksõna, mida kasutatakse funktsiooni liigi määramiseks,
milles on await sees. Ühesõnaga, midagi peab ootama.

await - märksõna, mis on kasutusel, et käivitada mingi osa koodist
peale seda, kui async'i osa on tehtud.
*/

function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function delayedNotification() {
    console.log('Keskmise inimese tähelepanu kestvus on alla kahe sekundi');
    await delay(2000);
    console.log('Tundub, et teie olete üle keskmise.');
}

delayedNotification();

// Promise
/*
Bottom line: Promise lubab midagi

Promise on JS'is objekt, mis tähistab mingisuguse asünkroonse
protsessi läbiviimist (või läbikukkumist).
Seda kasutades on võimalik edasi viia Promise'le järgnevaid
asünkroonseid protsesse ilma järgnevat koodi blokeerides.

Ülaltoodud koodis on Promise'it kasutatud timeout'i määramiseks.
Peale timeout'i määramist on koodil võimalik koheselt edasi minna.

Promise't kasutatakse ka failidest, API'st või andmebaasidest
igasugusel informatsioonitöötlusel.
*/