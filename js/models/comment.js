class Comment {
    constructor(id, body, beeId, name, postId) {
        this.id = id;
        this.body = body;
        this.beeId = beeId;
        this.name = name;
        this.postId = postId;
        this.user = null;
    }

    setUser(user) {
        this.user = user;
    }
}