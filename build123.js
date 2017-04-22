function Node(data) {
	this.data = data;
	this.left = null;
	this.right = null;
}

function Tree() {
	this.root = null;
	this.addNode = function(data) {
		if(this.root) {
			var p = this.root;
			if (data <= p.data) {
				if(p.left) {
					p = p.left;
				}
				else {
					p.left = new Node(data);
				}
			}
			else if(data > p.data) {
				if(p.right) {
					p = p.right;
				}
				else {
					p.right = new Node(data);
				}
			}
		}
		else {
			this.root = new Node(data);
		}
	};
	this.printTree = function (node) {
		if(node == null) return "Empty Tree";
		print(node.data);
		if(node.left) printTree(node.left);
		if(node.right) printTree(node.right);
	}
}

var build123 = new Tree();
build123.addNode(2);
build123.addNode(1);
build123.addNode(3);
build123.printTree();