var Users = [];
//name, id

var Cards = [];
//ID, TITLE, TYPE, CONTENT

function addUser (user) {
	for (var i = Users.length - 1; i >= 0; i--) {
		if(Users[i].id == user.id)
			return false;
	};
	Users.push({'name': user.name, 'id':user.id});
	return true;
}

function removeUser(id){
  for(var i = 0; i < Users.length; i++){
    if(Users[i].id == id){
      Users.splice(i,1);
      return true;
    }
  }
  return false;
}

function countUsers(){
  return Users.length;
}

function addCard (card) {
	for (var i = Users.length - 1; i >= 0; i--) {
		if(Users[i].id == user.id)
			return false;
	};
	Users.push({'id':card.id, 'title':card.title, 'type':card.type, 'content':card.content});
	return true;
}

function removeCard(id){
  for(var i = 0; i < Users.length; i++){
    if(Cards[i].id == id){
      Users.splice(i,1);
      return true;
    }
  }
  return false;
}


//Expose
exports.addUser = addUser;
exports.removeUser = removeUser;
exports.countUsers = countUsers;

exports.addCard = addCard;
exports.removeCard = removeCard;