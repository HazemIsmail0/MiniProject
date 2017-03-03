var express = require('express');
var router = express.Router();
var projectController = require('./controllers/projectController');


router.get('/', projectController.getAllProjects);

router.post('/project', projectController.createProject);


module.exports = router;
