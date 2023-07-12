const express = require("express");

const {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
  userBlogcontroller,
} = require("../controllers/blogController");

// router object

const router = express.Router();

// router
// Get || all blogs

router.get("/all-blog", getAllBlogsController);

// Post || create blog

router.post("/create-blog", createBlogController);

// Put || update blog

router.put("/update-blog/:id", updateBlogController);

// Get || Single blog details

router.get("/get-blog/:id", getBlogByIdController);

// Delete || delete blog

router.delete("/delete-blog/:id", deleteBlogController);

// Get || user blog
router.get("/user-blog/:id", userBlogcontroller);

module.exports = router;
