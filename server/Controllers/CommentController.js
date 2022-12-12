const Comment = require("../Models/CommentairModel");


// Display All CRUD Data
const index = (req, res) => {
	console.log("Commentaire");
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

// Create New CRUD
const create = (req, res) => {
	console.log("Commentaire");
	// get all comments
	Comment.create({
		content: req.body.content,
		produitId: req.body.Idproduit ,
		userId: req.body.Iduser
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

// Show a particular CRUD Detail by Id
const show = (req, res) => {
	// get one comments
	Comment.findByPk(req.params.id)
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
};