import express from "express";
import { Article } from "../models/bookModel.js";
import { Admin } from "../models/loginModel.js";
import multer from "multer";

const router = express.Router();

// Set up Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../DashBoard/imgs/Articles");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const uploadImages = upload.array("images", 20);

// post new Article
router.post("/articles", uploadImages, async (req, res) => {
  try {
    const { title, discription, publishDate } = req.body;
    const imageNames = req.files.map((image) => image.filename);
    const newArticle = {
      title: title,
      discription: discription,
      publishDate: publishDate,
      images: imageNames,
    };

    // create the new book
    const article = await Article.create(newArticle);

    // if success send the book
    return res.status(201).send(article);
    // if not handle the error
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// get all books in database
router.get("/articles", async (req, res) => {
  try {
    const articles = await Article.find({});
    return res.status(200).json({
      count: articles.length,
      data: articles,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// get one book in database by id
router.get("/articles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findById(id);
    return res.status(200).json(article);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// update a book in the database
router.put("/articles/:id", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.discription ||
      !req.body.publishDate ||
      !req.body.images
    ) {
      return res.status(400).send({
        message:
          "Send all required fields: title,discription, publishdata, imgs",
      });
    }

    const { id } = req.params;

    const result = await Article.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).send({ message: "Article not found" });
    }

    return res.status(200).send({ message: "Article updated successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// delete book from the database
router.delete("/articles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (result === false) {
      return res.status(404).send({ message: "Article not found" });
    }
    return res.status(200).send({ message: "Article deleted successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: "Article not found" });
  }
});

// post new Admin
router.post("/admins", async (req, res) => {
  try {
    // if the not there, send alert
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({
        message: "Send all required fields: email,password",
      });
    }
    // handle new admin
    const newAdmin = {
      email: req.body.email,
      password: req.body.password,
    };

    // create the new admin
    const admin = await Admin.create(newAdmin);

    // if success send the book
    return res.status(201).send(admin);
    // if not handle the error
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.get("/admins", async (req, res) => {
  try {
    const admins = await Admin.find({});
    return res.status(200).json({
      count: admins.length,
      data: admins,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// get one book in database by id
router.get("/admin/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findById(id);
    return res.status(200).json(admin);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// update a book in the database
router.put("/admin/:id", async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({
        message: "Send all required fields: email, password",
      });
    }

    const { id } = req.params;

    const result = await Admin.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).send({ message: "Admin not found" });
    }

    return res.status(200).send({ message: "Admin updated successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});
export default router;
