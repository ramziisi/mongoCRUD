const express = require("express");
const router = express.Router();
const contact = require("../models/contactlist");

// router.post("/many", (req, res) => {
//     const information = req.body;

//     contactlist.create(information)
//       .then((contactlist) => res.status(201).send(user))
//       .catch((err) => {
//         console.log(err.message);
//         res.status(500).send("Server Error");
//       });
//   });
router.post("/add", (req, res) => {
  const information = req.body;
  console.log(information);
  const newcontact = new contact(information);
  newcontact
    .save()
    .then((contact) => res.status(201).json(contact))
    .catch((err) => {
      console.log(err.message);
      res.status(500).send("Server Error");
    });
});
router.get("/", async (req, res) => {
  try {
    const contactlist = await contact.find();
    res.send(contactlist);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});
router.get("/getOne/:id", async (req, res) => {
  try {
    const oneContact = await contact.findById(req.params.id);
    res.status(200).send(oneContact);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});
router.get("/overEighteen", async (req, res) => {
  try {
    const oneContact = await contact.find({ age: { $gt: 18 } });
    res.status(200).send(oneContact);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});
router.get("/over", async (req, res) => {
    try {
      const oneContact = await contact.find({ age: { $gt: 18 },lname :'ah' });
      res.status(200).send(oneContact);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  });
  router.put("/:id", (req, res) => {
    const information = req.body;
    contact.findByIdAndUpdate(
      req.params.id,
      { $set: information },
      { new: true },
      (err, contact) => {
        if (err) {
          console.log(err.message);
          return res.status(500).send("Server Error");
        }
        res.send(contact);
      }
    );
  });
  router.delete("/fname/:fname", (req, res) => {
    User.deleteMany({ fname: req.params.fname })
      .then((contactlist) =>
        res.send({ msg: "User Deleted!", count: contactlist.deletedCount })
      )
      .catch((err) => {
        console.log(err.message);
        res.status(500).send("Server Error");
      });
  });
  router.get("/get", async (req, res) => {
    try {
      const oneContact = await contact.find();
      res.status(200).send(oneContact);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  });
module.exports = router;
