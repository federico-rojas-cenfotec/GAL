class FormComponent extends Component {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.container.className = 'formComponent';

        this.fade = div({ classList: 'formComponent_fade hide' }, this.container);
        this.fadeRotulo = div({ className: 'fadeRotulo col-4', innerHTML: `<img class="logoIconFade" src="src/images/logoGalPropiedadesBlanco.png" alt="´rótulo de Gherardo Propiedades">` }, this.fade);
        
        this.dataContainer = div({ classList: 'formComponent_dataContainer' }, this.container);
        this.dataContainer.style.transform = `translateX(${window.innerWidth}px)`;
        this.container.classList.add('hide');
        this.showProyectos();
    }

    showProyectos() {
        var users = this.appManager.dataController.users;
        this.imagenesPropiedades = [];
        this.numerosProyectos = [];
        for (let i = 0; i < users.length; i++) {
            var imgProp = users[i].imgPropiedad;/* imgPropiedad si existe en el data.json */
            this.imagenesPropiedades.push(imgProp);
            var numeroProyecto = users[i].id;
            this.numerosProyectos.push(numeroProyecto);
        }
    
        this.imagenesPropiedades = structuredClone(this.imagenesPropiedades).reverse();
        this.numerosProyectos = structuredClone(this.numerosProyectos).reverse();

        this.fotosProyectos = div({ className: 'dFotosProyectos d-flex flex-column align-items-center' }, this.dataContainer);
        this.fotosProyectos1 = div({ className: 'dFotosProyectos1 row d-flex justify-content-center' }, this.fotosProyectos);
        for (let j = 0; j < this.imagenesPropiedades.length; j++) {
            if (this.imagenesPropiedades[j] == "") {
                this.dFotoProy = div({ className: 'dFotoProy d-none col-7 col-md-3 mb-1 m-md-4', innerHTML: `<b>${this.numerosProyectos[j]}:</b>` }, this.fotosProyectos1);
            }
            else {
                this.dFotoProy = div({ className: 'dFotoProy col-7 col-md-5 col-xl-3 mb-0 mt-5 ms-md-3 me-md-3', innerHTML: `<b>${this.numerosProyectos[j]}:</b>` }, this.fotosProyectos1);
                this.imgFoto = image({ className: 'imgFoto', src: this.imagenesPropiedades[j] }, this.dFotoProy);
            }
        }

        this.piePagFormComponent = div({ className: 'piePagFormComponent mt-5', innerHTML: '' }, this.fotosProyectos1);

        this.fotosProyectos.style.height = (window.innerHeight - this.appManager.navbarHeight) + 'px';
        /* console.log(this.fotosProyectos.style.height);  */
    }

    showForm() {
        this.moveIn();
    }

    moveIn() {
        this.fade.classList.remove('hide');
        this.container.classList.remove('hide');
        gsap.to(this.dataContainer, { x: 0, duration: 2 });
        gsap.to(this.fade, { opacity: 0.75, duration: 0.25 });
    }

    moveOut() {
        gsap.to(this.dataContainer, { x: window.innerWidth, duration: 2 });
        gsap.to(this.fade, { opacity: 0, duration: 1, onComplete: this.moveOutComplete.bind(this) });
    }

    moveOutComplete() {
        this.fade.classList.add('hide');
        this.container.classList.add('hide');
    }
}