//const posts = [
    //{
       //postId: 12345,
       //share: "cathy123",
     //  
   //},
   //{
       //postId: 55555,
       //share: "fredburger2",
       //
   //},
  // {
       //postID: 78942,
       //share: "coolcathy",
  // },
//];

//let getPosts = () => posts;
//const { post } = require("../routes/post");
const con = require("./db_connect");

async function createTable() {
    let sql = ` 
    Create table posts (
        PostID INT NOT NULL AUTO_INCREMENT,
        Share VARCHAR (255) NOT NULL,
        UserID INT,
        CONSTRAINT PostPK PRIMARY KEY(POSTID),
        FOREIGN KEY (UserID) REFERENCES users(UserID)
        );
    `
    await con.query(sql)
}
createTable()

 //Get all Posts
 async function getAllPosts() {
    let sql = `SELECT * FROM posts`;
    return await con.query(sql)
 }
    

//Create New POST
async function ceatePost(post) {
    let sql = `
    INSERT INTO posts(content, post_id)
    VALUES("${post.content}", "${post.user_id}"
    `
    await con.query(sql)
}
 //Delete post
 async function deletePost(post) {
    let sql = `DELETE FROM posts
WHERE post_id = ${post.post_id}
`
await con.queryy(sql)
}
module.exports = { getPosts ,createPost, deletePost};
