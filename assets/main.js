console.log('im alive');

axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then (response => {
    console.log(response.data);
})

// RICORDA: l'API logga un singolo indirizzo. Fai un loop * 10?