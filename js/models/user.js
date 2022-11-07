class User {
    constructor(id, dormitorios, banos, garage, office, imgPropiedad, isOwner, { provincia, canton, distrito },tipo) {
        this.id = id;
        this.dormitorios = dormitorios;
        this.banos = banos;
        this.garage = garage;                
        this.office = office;
        this.posts = [];
        this.imgPropiedad = imgPropiedad;
        this.isOwner = isOwner;
        this.direccion = { provincia, canton, distrito };
        this.tipo = tipo;
    }

    addPost(post) {
        if (post.userId === this.id) {
            this.posts.unshift(post);
        }
    }
}