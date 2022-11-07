class UIController {
    constructor(appManager) {
        this.appManager = appManager;
        this.loadingComponent = new LoadingComponent(null, document.body);
        this.mainComponent = null;
        this.state = SHOWING_USERS;
    }

    showUI() {
        this.loadingComponent.hide();
        this.mainComponent = new MainComponent(this.appManager, document.body);
    }

    onBackBtn() {
        switch (this.state) {
            case SHOWING_USERS:
                console.log('Already SHOWING_USERS 1');
                break;
            case SHOWING_POSTS:
                this.appManager.userSelected = null;
                this.state = SHOWING_USERS;
                this.mainComponent.hideBackBtn();
                this.mainComponent.hidePostListComponent();
                break;
            /* case SHOWING_CONTACTO:
                this.state = SHOWING_POSTS;
                this.mainComponent.hideContactoComponent();
                break; */
            case SHOWING_RESUMEN_PROYECTOS:/* NEW_POST */
                this.state = SHOWING_POSTS;/* SHOWING_POSTS */
                this.mainComponent.hideFormComponent();
                this.mainComponent.refreshPostListComponent();
                break;            
            default:
                break;
        }
    }

    showPostListComponent(user) {/* componente que muestra  el detalle de un proyecto en particular */
        this.appManager.userSelected = user;
        this.state = SHOWING_POSTS;
        console.log(`el state es ${this.state}`);
        this.mainComponent.showBackBtn();
        this.mainComponent.showPostListComponent(user);
    }

    showFormComponent() {/* formComponent es el componente que muestra todos los proyectos */
        this.state = SHOWING_RESUMEN_PROYECTOS;
        console.log('el state es el #' + this.state);
        this.mainComponent.showFormComponent();
        this.mainComponent.showBackBtn();
    }

    
}