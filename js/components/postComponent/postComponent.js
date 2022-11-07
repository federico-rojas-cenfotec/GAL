class PostComponent extends Component {
    constructor(appManager, parent, post) {
        super(appManager, parent);
        this.post = post;
        this.container.classList.add('postComponent');

        this.btnVerProyectos = div({ className: 'paraBtnVerProyectos' }, this.container);
        this.contactenos1 = div({ 'onclick': this.onVerProyectos.bind(this), className: 'btnVerProyectos col-5 ps-1 mb-5 fs-5', innerHTML: `<span>Ver resumen de proyectos</span>` }, this.btnVerProyectos);

        this.contenedorDetallesProyectos = div({className:'d-flex justify-content-center'}, this.container);
        this.detallesProyectos = div({ className:'contieneFotos'}, this.contenedorDetallesProyectos);
        this.tituloProyecto = p({ className: 'postComponent_title fs-3 pt-2', innerHTML: `<b>Proyecto ${post.id}: </b>${post.tituloProyecto}` }, this.detallesProyectos);
        this.descripcion = p({ className: 'postComponent_descrip', innerHTML: post.descripcion }, this.detallesProyectos);
        this.descripcion1 = p({ className: 'postComponent_descrip', innerHTML: post.descripcion1 }, this.detallesProyectos);
        this.areaTerreno = p({ className: 'postComponent_area', innerHTML: `<b>Área lote:</b>${post.areaTerreno}` }, this.detallesProyectos);
        this.areaConstruccion = p({ className: 'postComponent_area mb-5', innerHTML: `<b>Área de construcción:</b>${post.areaConstruccion}` }, this.detallesProyectos);
        
        var imagenesAdicionales = this.post.imagenes;
        var matrizImagenesAdicionales = Object.entries(imagenesAdicionales);

        this.arregloValores = [];
        for (let i = 0; i < matrizImagenesAdicionales.length; i++){
            for (let j = 0; j < matrizImagenesAdicionales[i].length; j++){
                var direccionImagenesAdicionales = matrizImagenesAdicionales[i][1];
            }
            this.arregloValores.push(direccionImagenesAdicionales);
        }

        this.contactenos = div({ className: 'postComponent_contactenos row' }, this.container);
        this.btnContactenos = div({ className: 'postComponent_btnContactenos col-9 col-md-7 col-lg-6 fs-4 mt-5', innerHTML: `<span><a href="formularioContacto.html" target="_blank">Contáctenos para más información</a></span>` }, this.contactenos);

        this.contenedorFotos = div({className:'d-flex justify-content-center'}, this.container);
        this.contenedorFotos1 = div({ className: 'row d-flex justify-content-evenly pt-5 mb-5 contieneFotos' }, this.contenedorFotos);
        for (let i = 0; i < this.arregloValores.length; i++) {
            if (this.arregloValores[i] == "") {
                this.imgFoto = image({ className: 'd-none', src: this.arregloValores[i] }, this.contenedorFotos1);
            }
            else {
                this.imgFoto = image({ className: 'col-10 mb-3 col-lg-4 me-lg-5 mb-lg-5', src: this.arregloValores[i] }, this.contenedorFotos1);
            }
        }
        this.piePaginaPost = div({ className: 'piePaginaPost mt-5', innerHTML: '' }, this.contenedorFotos1);
    }

    /* esto muestra el componente de todos los proyectos */
    onVerProyectos() {
        this.appManager.uiController.showFormComponent(null);
    }

    addComments() {
        this.post.comments.forEach(comment => {
            var commentComponent = new CommentComponent(this.appManager, this.commentsContainer, comment);
        });
        this.addBtn = div({ classList: 'postComponent_addBtn', innerHTML: 'Add New Comment', onclick: this.onAddBtn.bind(this) }, this.commentsContainer);
    }

    onAddBtn(e) { }
    
    btnOnClickContactenos(e) {
        this.appManager.uiController.showContactoComponent(null);/* se puede eliminar esto. REVISAR */
    }
}