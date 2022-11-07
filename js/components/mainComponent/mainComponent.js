class MainComponent extends Component {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.container.classList.add('mainComponent');
        this.navbarComponent = new NavBarComponent(this.appManager, this.container);
        this.userListComponent = new UserListComponent(this.appManager, this.container);
        this.postListComponent = new PostListComponent(this.appManager, this.container);
        this.formComponent = new FormComponent(this.appManager, this.container);
    }

    showBackBtn() {
        this.navbarComponent.showBackBtn();
    }

    hideBackBtn() {
        this.navbarComponent.hideBackBtn();
    }

    showPostListComponent(user) {
        this.postListComponent.showPosts(user);
    }

    hidePostListComponent(user) {
        this.postListComponent.moveOut();/* al dar click sobre backBtn se oculta el postListComponent */
    }

    showFormComponent() {
        this.formComponent.showForm();
    }

    hideFormComponent(user) {
        this.formComponent.moveOut();
    }    

    refreshPostListComponent() {
        this.postListComponent.refresh();
    }
}