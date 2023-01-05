

if (reply == 'lower') {
    ceiling = (currentGuess - 1);
    return currentGuess;
}

if (reply == 'higher') {
    basement = (currentGuess + 1);
    return currentGuess;
}

/*
else if (reply == 'higher') {
        basement = Math.floor(Math.random() * (max - min + 1)) + min;
       ceiling = Math.floor(Math.random() * (max - min + 1)) + min;
       currentGuess = Math.floor(Math.random() * (max - min + 1)) + min;
       return currentGuess;
*/



let currentGuess = Math.floor((Math.random() * 100) + 1);
let ceiling = 100;
    let basement = 1;
function startCompGuess(num) {
    // This should return a string that denotes the first guessed number

    // YOUR CODE ...
    let currentGuess = Math.floor((Math.random() * 100) + 1);
let ceiling = 100;
    let basement = 1;
   currentGuess = num;
   console.log(currentGuess);
    return currentGuess;

}

function compGuess(reply)
    /* 
    *   The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating th elogic and response.

    This should return a string indicating the computers response.
    */
    
    {
        
        if (reply == 'higher') {
            basement = Math.floor(Math.random() * (100 - (currentGuess + 1) + 1)) + (currentGuess + 1);
           
           currentGuess = Math.floor(Math.random() * (ceiling - basement + 1)) + basement;
           
        } else if (reply == 'lower') {
            
           ceiling = Math.floor(Math.random() * ((currentGuess - 1) - 1 + 1)) + 1;
           currentGuess = Math.floor(Math.random() * (ceiling - basement + 1)) + basement;
        
        } else if (reply =='correct') {
            return ("Your number must be " + currentGuess + "!" );
        }
            return currentGuess;
    }




    if (reply == 'higher') {
        basement = Math.floor(Math.random() * (100 - (currentGuess + 1) + 1)) + (currentGuess + 1);
       
       currentGuess = Math.floor(Math.random() * (ceiling - basement + 1)) + basement;
       
    } else if (reply == 'lower') {
        
       ceiling = Math.floor(Math.random() * ((currentGuess - 1) - 1 + 1)) + 1;
       currentGuess = Math.floor(Math.random() * (ceiling - basement + 1)) + basement;
    
    } else if (reply =='correct') {
        return ("Your number must be " + currentGuess + "!" );
    }
        return currentGuess;

        let grades = {
            midterm: {
              grade: 3.3,
              weight: 1
            },
            project: {
              grade: 4.0,
              weight: 1
            },
            final: {
              grade: 3.2,
              weight: 2
            }
          };
          
          function gpa(object) {
            
            let gradesToWeight = Object.keys(object);
            let gradeSum = 0;
            let weightSum = 0;
          
            gradesToWeight.forEach(key => {
              gradeSum = [(grade * weight) + gradeSum];
              weightSum = [weight + weightSum];
            });
            
          
            weightedGrade = (gradeSum / weightSum);
            console.log(weigthedGrade);
          };
          
          gpa(grades);

          

          const menu = {
            burger: 5.00,
            fries: 3.50,
            shake: 1.11,
            salad: 4.25,
          };
          
            order: function(orderPlaced) {
              let orderSplit = [item];
              let sum = 0;
          
              for (item of orderSplit) {
                sum = (sum + item)
              };
              console.log(sum);
          };
           
          menu.order(burger, shake);
        


          //``````````````````ZORKINGTON```````````````````````

          export const gameDetails = {   
            title: 'Zorkington',
            desc: 'Welcome to the world of Zorkington. Here are some quick rules & concepts... Try and have some fun, this is supposed to be a game. Nothing will be too complex, and everything will take place in this screen. Use the inpt box below to get going. Try typing in commands like "Move (Somewhere)" and see what happens.',
            author: 'Ethan Moskowitz',
            cohort: 'SBPT-2022',
            startingRoomDescription: 'What you see before you is... 182 Main St. You are standing on Main Street between Church and South Winooski. There is a door here. A keypad sits on the handle. On the door is a handwritten sign.'
        }

        class Rooms {
          constructor(description, connection, inventory) {
              this.description = description;
              this.connection = connection;
              this.inventory = inventory;
          }
      }
      
      let foyerRoom = new Rooms("Welcome to the FOYER. Such a fancy title for such a small room. It doesn't look like there is much here, just four walls, the door you just walked through, and on more door. Maybe there is something over there on the floor.", [nextRoom, startingRoom], [houseShoes, welcomeMat]);
      
      let nextRoom = new Rooms("Welcome to the NEXT ROOM. Again, not the most exciting place, this room only has the door you just walked through and a staircase. Although there does seem to be a lot of fruit on the floor.", [foyerRoom, stairsRoom], [apple, rottenApple]);
      
      let stairsRoom = new Rooms("Phew! Good thing you brought that snack, this STAIRCASE is huge! Must be 100 stairs here, and nothing else.", [nextRoom, hallRoom], null);
      
      let hallRoom = new Rooms("Sure is getting creepy up here in the HALLWAY, there is hardly any light up here. Maybe there is something around to help see where to go.", [stairsRoom, bathRoom], [flashlight, basketball]);
      
      let bathRoom = new Rooms("Finally, made it to the BATHROOM! Talk about privacy.", [hallRoom], null);

      class Player {
        constructor(inventory, status) {
            this.inventory = inventory;
            this.status = status;
        }
    }
    
    let room = {
        startingRoom: ['foyerRoom'],
        nextRoom: ['foyerRoom', 'stairsRoom'],
        bathRoom: ['hallRoom'],
        stairsRoom: ['nextRoom', 'hallRoom'],
        hallRoom: ['stairsRoom', 'bathroom'],
        foyerRoom: ['nextRoom', 'startingRoom']
    };
    //change to eager: [confused]
    let status = {
        foyerRoom: [],
        nextRoom: [],
        stairsRoom: [],
        hallRoom: [],
        bathRoom: []
    };
    // change this to null: [houseShoes]
    let inventory = {
        foyerRoom: [],
        nextRoom: [houseShoes],
        stairsRoom: [houseShoes, apple],
        hallRoom: [houseShoes, appleCore],
        bathRoom: [houseshoes, flashlight]
    };
    
    let currentRoom = 'startingRoom';
    let currentStatus = 'eager';
    let currentInventory = 'nothing';

    //222222222222222222222

    /* 
    TODO for students
        General Setup:
            - This object is framed for you to fill out the values to help customize your game.
            - This will alter the browser to display your game title. The "Quick Notes" modal will also detail your information along with the description (desc) of what your game is about. It is important to highlight key commands that you want the player to use.
            - The startingRoomDescription will display what the player sees upon coming to your project.

        Do NOT alter the name of this object.

        Both exports are required in order for this project to run.

        - index.html should be running in your browser through the build process.
            - use your browsers console throughout testing.
*/

export const gameDetails = {   
  title: 'Zorkington',
  desc: 'Welcome to the world of Zorkington. Here are some quick rules & concepts... Try and have some fun, this is supposed to be a game. Nothing will be too complex, and everything will take place in this screen. Use the input box below to get going. Try typing in commands like "Move (Somewhere)" and see what happens.',
  author: 'Ethan Moskowitz',
  cohort: 'SBPT-2022',
  startingRoomDescription: 'What you see before you is... The startingRoom.'
}

// You code here
// Constructing the rooms of the game.
class Rooms {
  constructor(name, description, inventory) {
      this.name = name;
      this.description = description;
      this.inventory = inventory;
  }
}
// The rooms: name, description, and items in them.
let startingRoom = new Rooms("Starting Room", "The STARTING ROOM is just the beginninng of this game. It needs to be here to get going. It looks like the only other place to go is a foyerRoom.", []);
  
let foyerRoom = new Rooms("Foyer", "Welcome to the FOYER. Such a fancy title for such a small room. It doesn't look like there is much here, just four walls, the door you just walked through, and one more door. Maybe there is something in the nextRoom.", ['houseShoes']);

let nextRoom = new Rooms("Next Room", "Welcome to the NEXT ROOM. Again, not the most exciting place, this room only has the door you just walked through and a stairsRoom ahead. Although there does seem to be a lot of fruit on the floor.", ['apple', 'rottenApple']);

let stairsRoom = new Rooms("Staircase", "Phew! Good thing you brought that snack, this STAIRCASE is huge! Must be 100 stairs here, and nothing else but the hallRoom at the top.", ['stairs']);

let hallRoom = new Rooms("Hallway", "Sure is creepy up here in the HALLWAY, there is hardly any light up here. Maybe there's something around to help see where the bathRoom is.", ['flashlight']);

let bathRoom = new Rooms("Bathroom", "Finally, made it to the BATHROOM! Talk about privacy.", ['toilet']);

// State Machine for moving between rooms.
let room = {
  startingRoom: ['foyerRoom'],
  foyerRoom: ['nextRoom', 'startingRoom'],
  nextRoom: ['foyerRoom', 'stairsRoom'],
  stairsRoom: ['nextRoom', 'hallRoom'],
  hallRoom: ['stairsRoom', 'bathroom'],
  bathRoom: ['hallRoom']
};

let currentRoom = 'startingRoom';

function enterRoom(newRoom) {
  let validTransition = room[currentRoom];

  if (validTransition.includes(newRoom)) {
      currentRoom = newRoom;
      return `Welcome to the ${currentRoom}.`;
      } else {
          return `You can't get there, the ${newRoom}, from here, the ${currentRoom}. Try ${validTransition.join(', ')}`;
      }
  }


// Establishing player's starting inventory (empty).
let Inventory = [];


export const domDisplay = (playerInput) => {
  /* 
      TODO: for students
      - This function must return a string. 
      - This will be the information that is displayed within the browsers game interface above the users input field.

      - This function name cannot be altered. 
      - "playerInput" is whatever text the user is typing within the input field in the browser after hitting the ENTER key.
          - test this out with a console log.

      What your player should be able to do (checklist):
          - move between rooms
          - view current room
          - pickup moveable items
              - there should be at least 2 items that cannot be moved.
          - view player inventory
      
      Stretch Goals:
          - drop items in "current room" (if a player picks up an item in one room and moves to another, they should be able to remove it from their inventory)
          - create win/lose conditions.
              - this could be a puzzle that may require an item to be within the players inventory to move forward, etc.

      HINTS:
          - consider the various methods that are available to use.
          - arrays are a great way to hold "lists".
          - You are not limited to just the exported function. Build additional functions and don't forget to hold the return within a variable.
          - Review notes!
              - Have them open as you build.
              - break down each problem into small chunks
                  - What is the process of picking up an item exactly? ex: Look. Pick from a list of items. Put into players list of items... 
  */

  // Your code here

  if (playerInput.includes("look")) {
    return "looking"
};
} 

// Moving from room to room.
if (playerInput.includes("move to foyerRoom")) {
  enterRoom(foyerRoom);
};

function enterRoom(newRoom) {
  let validTransition = room[currentRoom];

  if (validTransition.includes(newRoom)) {
      currentRoom = newRoom;
      return `Welcome to the ${currentRoom}.`;
      } else {
        console.error('No Way!');
          return `You can't get there, the ${newRoom}, from here, the ${currentRoom}. Try ${validTransition.join(', ')}.`;
      }
  }

  
// Moving from room to room. - Problems: Can't move to next room, but error message correctly throws.
  if (playerInput.includes("Move to startingRoom")) {
      return enterRoom(startingRoom);
};
  if (playerInput.includes("Move to foyerRoom")) {
      return enterRoom(foyerRoom);
};
  if (playerInput.includes("Move to nextRoom")) {
      return enterRoom(nextRoom);
};
  if (playerInput.includes("Move to stairsRoom")) {
      return enterRoom(stairsRoom);
};
  if (playerInput.includes("Move to hallRoom")) {
      return enterRoom(hallRoom);
};
  if (playerInput.includes("Move to bathRoom")) {
      return enterRoom(bathRoom);
};

//Observing Current Room.
if (currentRoom == 'startingRoom' && playerInput.includes("Observe")) {
  return startingRoom.description;
};
if (currentRoom == 'foyerRoom' && playerInput.includes("Observe")) {
  return foyerRoom.description;
};
if (currentRoom == 'nextRoom' && playerInput.includes("Observe")) {
  return nextRoom.description;
};
if (currentRoom == 'stairsRoom' && playerInput.includes("Observe")) {
  return stairsRoom.description;
};
if (currentRoom == 'hallRoom' && playerInput.includes("Observe")) {
  return hallRoom.description;
};
if (currentRoom == 'bathRoom' && playerInput.includes("Observe")) {
  return bathRoom.description;
};
