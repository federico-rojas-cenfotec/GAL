class UserListComponent extends Component {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.container.classList.add('userListComponent');
        this.showUsers();
    }

    showUsers() {
        var users = this.appManager.dataController.users;
        var users = structuredClone(users).reverse();
        /* console.log(users); */
        this.datos = div({ className: 'row d-flex flex-row justify-content-evenly contieneProy' }, this.container);
        users.forEach(user => {
            this.datos1 = div({ className: 'col-10 col-lg-6 col-xl-4 mt-5' }, this.datos);
            var userComponent = new ProyComponent(this.appManager, this.datos1, user);
        });
        
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == users.length) {
                this.piePaginaUserList = div({ className: 'row piePaginaUserList mt-5 d-flex flex-md-row justify-content-md-evenly' }, this.datos);
                this.piePagDormitorio = div({ className: 'piePagUserList mb-2 col-12 col-md-5 col-xl-3 text-md-center', innerHTML: `<p class="mb-0"><i class="fa-sharp fa-solid fa-bed me-1"></i>: número de dormitorios</p>` }, this.piePaginaUserList);
                this.piePagBanos = div({ className: 'piePagUserList mb-2 col-12 col-md-5 col-xl-3 text-md-center', innerHTML: `<p class="mb-0"><i class="fa-solid fa-toilet me-1"></i>: número de baños</p>` }, this.piePaginaUserList);
                this.piePagCarros = div({ className: 'piePagUserList mb-2 col-12 col-md-5 col-xl-3 text-md-center', innerHTML: `<p class="mb-0"><i class="fa-solid fa-car me-1"></i>: espacio para carros</p>` }, this.piePaginaUserList);
                this.piePagOficina = div({ className: 'piePagUserList mb-2 col-12 col-md-5 col-xl-3 text-md-center', innerHTML: `<p class="mb-0"><i class="fa-sharp fa-solid fa-house-laptop me-1"></i>: tiene oficina</p>` }, this.piePaginaUserList);
            }
        }        
        this.container.style.height = (window.innerHeight - this.appManager.navbarHeight) + 'px';
    }    
}