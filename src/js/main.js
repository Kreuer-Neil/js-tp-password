const settings = {
    typePassword: 'password',
    typeText: 'text'
}


const montrer = {
        mdp: document.getElementById('password'),
        btn: document.querySelector('.showPass'),
    init() {

        this.btn.addEventListener('click', () => {
            if (this.mdp.type === settings.typePassword) this.mdp.type = settings.typeText;
            else this.mdp.type = settings.typePassword;
        });
    }
}
