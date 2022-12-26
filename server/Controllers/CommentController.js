const Comment = require("../Models/CommentairModel");
const colors = require('colors');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
// local storage
const localStorage = require('localStorage');


// Display All CRUD Data
const index = (req, res) => {
	console.log("Commentaire".america.bold);
	// get all comments
	Comment.findAll()
	.then((comments) => {
		res.json(comments);
	}
	)
	.catch((err) => {
		console.log("Error: " + err);
	}
	);


};

const uploadImage = (req, res) => {
	console.log("req" , req.file)
	localStorage.setItem('imageName', req.file.filename);
	console.log("localStorage" , localStorage.getItem('imageName').cyan.bold)
	res.status(200).json(req.file.filename);
}

// Create New CRUD
const create = (req, res) => {
	console.log("req" , req.body)
	
	const content = req.body.content;
	// console.log("image" , image)

	Comment.create({
		content: content,
		image: localStorage.getItem('imageName'),
		produitId: req.body.produitId ,
		userId: req.body.userId
	})
	.then((comments) => {
		res.status(200).json(comments);
	}
	)
	.catch((err) => {
		console.log("Error: " + err);
	});
	
};

// Show a particular CRUD Detail by Id
const show = (req, res) => {
	Comment.findByPk(
		req.params.id ,
		{
			include: ['produit', 'user']
		}
	)
	.then((comments) => {
		
		res.json(comments);
	  }
	)
	.catch((err) => {
		console.log("Error: " + err);
	  }
	);
};

// Update CRUD Detail by Id
const update = (req, res) => {
	// get one comments
	Comment.update({
		content: req.body.content,
		produitId: req.body.Idproduit ,
		userId: req.body.Iduser
	},
	{
		where: {
			id: req.params.id
		}
	})
	.then((comments) => {
		res.json(comments);
	}
	)
	.catch((err) => {
		console.log("Error: " + err);
	}
	);
	
};

// Delete CRUD Detail by Id
const Delete = (req, res) => {
	console.log("req" , req.params.id)
	// get one comments
	Comment.destroy({
		where: {
			id: req.params.id
		}
	})
	.then((comments) => {
		res.json(comments);
	}
	)
	.catch((err) => {
		console.log("Error: " + err);
	}
	);
	
};

module.exports = {
	index,
	show,
	create,
	update,
	Delete,
	uploadImage
};