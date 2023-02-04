/* { name: "abul", friend: "babul" },
    { name: "babul", friend: "abul" } */
/* { name: "abul", friend: "kabul" },

{ name: "kabul", friend: "sabul" } */
function 
isBestFriend(objectOne, objectTwo) {
    if (objectOne.name == objectTwo.friend && objectTwo.name == objectOne.friend) {
        return  true;
    }
    else{
        return false;
    }
}

const result = isBestFriend({ name: "abul", friend: "babul" },

{ name: "babul", friend: "abul" });

console.log(result);