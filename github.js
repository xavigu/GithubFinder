class Github{
    constructor() {
        this.client_id = 'a8cdb5399ecea09bf535';
        this.clien_secret = 'dfcb2d810e65cf606d74c3a681315b3573ed8b26';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        return {  
            profile  //devuelve un objeto que sería profile: profile (cuando se llaman igual no hace falta poner la parte del value)
                    //lo queremos como un objeto porque de aqui vamos a recoger tambien la info de los repositorios
                    //esto gracias al asyn/await si fuera con callbacks habría que crear un callback para recoger el json y otro más despues para recoger los repos
        } 
    }
}