const express = require("express"),
  router = express.Router(),
  surveyModel = require("../models/surveyModel");

/* GET home page. */
router.get("/", async function(req, res, next) {
  const classInfoData = await surveyModel.getAllTopicData();
  const topicStatusData = await surveyModel.getAllStatuses();
  console.log(topicStatusData);
  res.render("template", {
    locals: {
      title: "Welcome",
      classInfoData: classInfoData,
      topicStatusData: topicStatusData
    },
    partials: {
      partial: "partial-index"
    }
  });
});

router.post("/", async function(req, res) {
  console.log("the request is: ", req.body);
  const classInfoData = await surveyModel.getAllTopicData();
  res.render("template", {
    locals: {
      title: `Welcome ${req.body.first_name}`,
      classInfoData: classInfoData
    },
    partials: {
      partial: "partial-index"
    }
  });
});

module.exports = router;
