class Post {
    constructor(id, descripcion, descripcion1, tituloProyecto, userId, areaTerreno, areaConstruccion, { imgAdicionales1, imgAdicionales2, imgAdicionales3, imgAdicionales4 }) {
        this.id = id;
        this.descripcion = descripcion;
        this.descripcion1 = descripcion1;
        this.tituloProyecto = tituloProyecto;
        this.userId = userId;
        this.areaTerreno = areaTerreno;
        this.areaConstruccion = areaConstruccion;
        this.imagenes = { imgAdicionales1, imgAdicionales2, imgAdicionales3, imgAdicionales4 };
        /* this.imgAdicionales1 = imgAdicionales1;
        this.imgAdicionales2 = imgAdicionales2;
        this.imgAdicionales3 = imgAdicionales3;
        this.imgAdicionales4 = imgAdicionales4;
        imgAdicionales1, imgAdicionales2, imgAdicionales3, imgAdicionales4 */
        this.comments = [];
    }

    addComment(comment) {
        this.comments.unshift(comment);
    }
}