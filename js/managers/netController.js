class NetController {
    constructor(appManager) {
        this.appManager = appManager;
    }

    downloadUsersData() {
        var request = new XMLHttpRequest();
        request.open('GET', 'data.json');
        request.onload = this.onUsersDataDownloaded.bind(this);
        request.send();
    }

    onUsersDataDownloaded(e) {
        var request = e.target;
        var usersData = JSON.parse(request.responseText);

        usersData.data.users.forEach((userData, i) => {
            var user = new User(userData.id, userData.dormitorios, userData.banos, userData.garage, userData.office, userData.imgPropiedad, userData.isOwner, userData.direccion, userData.tipo);
            this.appManager.dataController.addUser(user);
        });
        this.downloadPostsData();
    }

    downloadPostsData() {
        var request = new XMLHttpRequest();
        request.open('GET', 'data.json');
        request.onreadystatechange = this.onPostsDataDownloaded.bind(this);
        request.send();
    }

    onPostsDataDownloaded(e) {
        var request = e.target;
        if (request.readyState === 4) {
            if (request.status === 200) {
                var postsData = JSON.parse(request.responseText);
                postsData.data.posts.forEach((postData, i) => {
                    var post = new Post(postData.id, postData.descripcion, postData.descripcion1, postData.tituloProyecto, postData.userId, postData.areaTerreno, postData.areaConstruccion, postData.imagenes);
                    this.appManager.dataController.addPost(post);
                });
                this.appManager.downloadDataCommpleted();
            }
        }
    }
    /* esto hay que revisarlo para quitarlo */
    downloadCommentsData() {
        var request = new XMLHttpRequest();
        request.open('GET', 'data.json');
        request.onreadystatechange = this.onCommentsDataDownloaded.bind(this);
        request.send();
    }
    /* esto hay que revisarlo para quitarlo */
    onCommentsDataDownloaded(e) {
        var request = e.target;
        if (request.readyState === 4) {
            if (request.status === 200) {
                var commentsData = JSON.parse(request.responseText);
                commentsData.data.comments.forEach((commentData, i) => {
                    var comment = new Comment(commentData.id, commentData.body, commentData.beeId, commentData.name, commentData.postId);
                    comment.setUser(this.appManager.dataController.getUserByBeeId(comment.beeId));
                    this.appManager.dataController.addComment(comment);
                });
                console.log(this.appManager.dataController.users);
            }
        }
    }
}