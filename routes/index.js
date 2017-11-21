var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/institutions', function(req, res, next) {
  res.json({
      institutions: [
          {
              name: "UO",
              offices: [
                  {
                    name: "FSS"
                  },
                  {
                    name: "SITE"
                  }
              ]
          },
          {
              name: "Government",
              offices: [
                  {
                      name: "FSS"
                  },
                  {
                      name: "SITE"
                  }
              ]
          }
      ]
  });
});

module.exports = router;
