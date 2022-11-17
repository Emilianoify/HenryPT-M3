let numMentiras = 10;
let lasMentirasDeMiEx = new Promise((resolve, reject)=>{
    if (numMentiras < 20) resolve('Soy un Ganador!')
    else reject('Soy un perdedor!')
});


lasMentirasDeMiEx.then(
    //CB RESOLVE
    (result)=>{
        console.log('RESOLVED_A', result);
        return result + ' pero no de su corazon!';
    },
    //CB REJECT
    (err)=>{console.log('REJECT_A', err);}
)
//NUEVA PROMESA
.then(
    //CB RESOLVE
    (result)=>{
        console.log('RESOLVED_B', result);
        //nombre del beatle
        //buscamos el archivo del beatle
        //si lo encontramos (return beatle)
        //si no lo encontramos (throw err)
        numMentiras = 50;
        // return 'No me rechazes'
        // return new Promise((resolve, reject)=>{
        //     if (numMentiras < 20) resolve('Soy un Ganador!')
        //     else reject('Soy un perdedor!')
        // });
        throw result;
    },
    //CB REJECT
    (err)=>{console.log('REJECT_B', err);}
)
//NUEVA PROMESA
.then(
    //CB RESOLVE
    (result)=>{
        console.log('RESOLVED_C', result);
        return result + ' pero no de su corazon!';
    },
    //CB REJECT
    // (err)=>{console.log('REJECT_C', err);}
)
//NUEVA PROMESA
.then(
    //CB RESOLVE
    (result)=>{
        console.log('RESOLVED_D', result);
        return result + ' pero no de su corazon!';
    }
)
.catch((err)=>console.log(err))