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
    Create table if not exists posts (
        post_id INT NOT NULL AUTO_INCREMENT,
        content VARCHAR(255),
        share VARCHAR (255),
        user_id INT,
        CONSTRAINT PostPK PRIMARY KEY(post_id),
        FOREIGN KEY PostFK(user_id) REFERENCES users(UserID)
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
async function createPost(post) {
    let sql = `
    INSERT INTO posts(content, user_id)
    VALUES("${post.content}", ${post.user_id})
    `
    await con.query(sql)
    return await getAllPosts()
}
// Update a post
async function updatePost(post) {
    let sql = `
      UPDATE Post
      SET post_content = "${post.post_content}"
      WHERE post_id = ${post.post_id}
    `;
  
    await con.query(sql);
  }
  
 //Delete post
 async function deletePost(post) {
    let sql = `DELETE FROM posts
WHERE post_id = ${post.post_id}
`
await con.query(sql)
}
module.exports = { getAllPosts ,createPost, deletePost};
