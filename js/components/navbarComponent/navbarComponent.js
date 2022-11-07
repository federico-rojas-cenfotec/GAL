class NavBarComponent extends Component {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.container.classList.add('navbarComponent');

        /* contenedor del logo de Gherardo Propiedades */
        this.logo = div({ className: 'logo movi' }, this.container);
        this.logoIcon = image({ className: 'logoIcon', src: 'src/images/logoGalPropiedades.png' }, this.logo);

        /* este contenedor contiene el backBtn y cualquier otro */
        this.contenerBtn = div({ className: 'contenerBtn' }, this.container);

        this.backBtn = div({ 'onclick': this.onBackBtn.bind(this), className: 'navbarComponent_backBtn' }, this.contenerBtn);
        this.backBtnIcon = image({ className: 'navbarComponent_backBtnIcon', src: 'src/images/arrow1.png' }, this.backBtn);

        this.showRedesSociales();

        this.moviLogo();

        this.hideBackBtn();
    }

    moviLogo() {
        gsap.to(".movi", { x: 100, duration: 2, ease: "power1.inOut", repeat: 3, yoyo: true, delay: 3, onComplete: this.nuevoLetra.bind(this) });
    }

    nuevoLetra() {
        this.logoLetra = p({ innerHTML: `<span class="d-none d-xl-flex logoLetra">GP te ofrece las mejores propiedades!</span>` }, this.logo);
    }

    showRedesSociales() {
        this.redesSociales = div({ className: 'd-flex flex-column flex-md-row me-5' }, this.contenerBtn);
        this.pContactenos = p({ className: 'pContactenos fs-4 d-flex justify-content-center', innerHTML: 'Contáctenos:' }, this.redesSociales)
        this.redesSocialesIconos = div({ className: 'd-flex flex-row' }, this.redesSociales);
        this.correo = div({ className: 'dCorreo', innerHTML: `<a href="formularioContacto.html" target="_blank"><i class="fa-solid fa-envelope-open-text"></i></a>` }, this.redesSocialesIconos);
        this.whatsapp = div({ className: 'dWhatsapp', innerHTML: `<a href="https://api.whatsapp.com/send?phone=50684803180&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20propiedades%20." target="_blank"><i class="fa-brands fa-whatsapp"></i></a>` }, this.redesSocialesIconos);
        this.telefono = div({ className: 'dTelFlotante', innerHTML: `<span itemscope="" style="list-style: none" itemtype="http://schema.org/LocalBusiness"><span itemprop="telephone"><a href="tel:+50684803180"><i class="fas fas fa-phone"></i></a></span><span itemprop="name" style="visibility: hidden"></span></span>` }, this.redesSocialesIconos);
        this.facebook = div({ className: 'dFacebook', innerHTML: `<a href="https://www.facebook.com/GherardoPropiedades" target="_blank"><i class="fa-brands fa-facebook"></i></a>` }, this.redesSocialesIconos);
    }

/*  */
    onBackBtn(e) {
        this.appManager.uiController.onBackBtn();
    }

    showBackBtn() {
        this.backBtnIcon.classList.remove('hide');
    }

    /* esto oculta el ícono de < en la página principal */
    hideBackBtn() {
        this.backBtnIcon.classList.add('hide');
    }
}