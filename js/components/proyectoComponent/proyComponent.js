class ProyComponent extends Component {
    constructor(appManager, parent, user) {
        super(appManager, parent);
        this.user = user;
        this.container.classList.add('proyComponent','row','d-flex','flex-row','justify-content-center');
        this.container.onclick = this.onSelected.bind(this);
        
        this.proyecto = div({ className: 'd-flex flex-row w-100  mb-3' }, this.container);
        this.numeroProyecto = p({ className: 'numeroProyecto', innerHTML: `Proyecto ${user.id}: ${user.tipo} en ${user.direccion.provincia}` }, this.proyecto);
        
        this.sobrevuelo = div({ className: 'cortina'}, this.container);
        this.btnMasInformacion = btn({ className: 'btnMasInformacion', innerHTML: 'Más información' }, this.sobrevuelo);
        
        this.col1 = div({ className: 'userComponent_col1 col-9 col-lg-9 d-flex flex-column' }, this.container);
        this.col2 = div({ className: 'userComponent_col2 col-9 col-lg-3 d-flex flex-row justify-content-evenly d-lg-flex flex-lg-column pt-2' }, this.container);        
        
        this.imgPropiedad = image({ className: 'userComponent_imgProp', src: this.user.imgPropiedad }, this.col1);

        if (user.tipo == 'lote' || user.tipo == 'finca') {
            this.dormitorios = p({ className: 'd-none' }, this.col2);
            this.banos = p({ className: 'd-none' }, this.col2);
            this.garage = p({ className: 'd-none' }, this.col2);
            this.office = p({ className: 'd-none' }, this.col2);
        } else {
            this.dormitorios = p({
                className: 'userComponent_dormitorios',
                innerHTML: `<i class="fa-sharp fa-solid fa-bed fs-4 me-1"></i><span class="letraIconos">${user.dormitorios}</span>`
            }, this.col2);
            this.banos = p({
                className: 'userComponent_banos',
                innerHTML: `<i class="fa-solid fa-toilet fs-4 me-1"></i> <span class="letraIconos">${user.banos}</span>`,
                id: 'chico'
            }, this.col2);
            this.garage = p({
                className: 'userComponent_garage',
                innerHTML: `<i class="fa-solid fa-car fs-4 me-1"></i><span class="letraIconos">${user.garage}</span>`
            }, this.col2);
            this.office = p({
                className: 'userComponent_office',
                innerHTML: `<i class="fa-sharp fa-solid fa-house-laptop fs-4 me-1"></i><span class="letraIconos">${user.office}</span>`
            }, this.col2);
        };

        this.fila = div({className:'d-flex flex-row justify-content-evenly mt-2'},this.container);
        this.canton = p({
            className: 'userComponent_provincia',
            innerHTML: `<span class="letraCanton"><b>Cantón:</b> ${user.direccion.canton}</span>`
        }, this.fila);
        this.distrito = p({
            className: 'userComponent_provincia',
            innerHTML: `<span class="letraCanton"><b>Distrito:</b> ${user.direccion.distrito}</span>`
        }, this.fila);
    }
    
    onSelected(e) {
        this.appManager.uiController.showPostListComponent(this.user);
    }
}