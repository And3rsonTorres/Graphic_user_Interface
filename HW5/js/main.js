/*
File: main.js
GUI Assignment: Multiplication table
Anderson Torres UMass Lowell Computer Science Student, Anderson_torres.student.uml.edu
Copyright (c) 2022 by ATO. All rights reserved. May you as long as you credit the author.
here you can see a demostration of one line scramble.*/
var DIALOG = 100;
var TILE_ON_DRAG = 99;
var On_color = "#8f9933";
var No_color = "";
var Er_color = "red";
var scoreTracker = { "totalScore": 0, "highest": 0 };
// This array is copied from provide links on the assingment itself PS: belongs to prof Heines
// got errors and to save space i added images to the array maybe a bad idea
var scrabbleTiles = [];
scrabbleTiles["A"] = { "value": 1, "original-distribution": 9, "number-remaining": 9, "image": "img/Scrabble_Tile_A.jpg" };
scrabbleTiles["B"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "img/Scrabble_Tile_B.jpg" };
scrabbleTiles["C"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "img/Scrabble_Tile_C.jpg" };
scrabbleTiles["D"] = { "value": 2, "original-distribution": 4, "number-remaining": 4, "image": "img/Scrabble_Tile_D.jpg" };
scrabbleTiles["E"] = { "value": 1, "original-distribution": 12, "number-remaining": 12, "image": "img/Scrabble_Tile_E.jpg" };
scrabbleTiles["F"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "img/Scrabble_Tile_F.jpg" };
scrabbleTiles["G"] = { "value": 2, "original-distribution": 3, "number-remaining": 3, "image": "img/Scrabble_Tile_G.jpg" };
scrabbleTiles["H"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "img/Scrabble_Tile_H.jpg" };
scrabbleTiles["I"] = { "value": 1, "original-distribution": 9, "number-remaining": 9, "image": "img/Scrabble_Tile_I.jpg" };
scrabbleTiles["J"] = { "value": 8, "original-distribution": 1, "number-remaining": 1, "image": "img/Scrabble_Tile_J.jpg" };
scrabbleTiles["K"] = { "value": 5, "original-distribution": 1, "number-remaining": 1, "image": "img/Scrabble_Tile_K.jpg" };
scrabbleTiles["L"] = { "value": 1, "original-distribution": 4, "number-remaining": 4, "image": "img/Scrabble_Tile_L.jpg" };
scrabbleTiles["M"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "img/Scrabble_Tile_M.jpg" };
scrabbleTiles["N"] = { "value": 1, "original-distribution": 6, "number-remaining": 6, "image": "img/Scrabble_Tile_N.jpg" };
scrabbleTiles["O"] = { "value": 1, "original-distribution": 8, "number-remaining": 8, "image": "img/Scrabble_Tile_O.jpg" };
scrabbleTiles["P"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "img/Scrabble_Tile_P.jpg" };
scrabbleTiles["Q"] = { "value": 10, "original-distribution": 1, "number-remaining": 1, "image": "img/Scrabble_Tile_Q.jpg" };
scrabbleTiles["R"] = { "value": 1, "original-distribution": 6, "number-remaining": 6, "image": "img/Scrabble_Tile_R.jpg" };
scrabbleTiles["S"] = { "value": 1, "original-distribution": 4, "number-remaining": 4, "image": "img/Scrabble_Tile_S.jpg" };
scrabbleTiles["T"] = { "value": 1, "original-distribution": 6, "number-remaining": 6, "image": "img/Scrabble_Tile_T.jpg" };
scrabbleTiles["U"] = { "value": 1, "original-distribution": 4, "number-remaining": 4, "image": "img/Scrabble_Tile_U.jpg" };
scrabbleTiles["V"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "img/Scrabble_Tile_V.jpg" };
scrabbleTiles["W"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "img/Scrabble_Tile_W.jpg" };
scrabbleTiles["X"] = { "value": 8, "original-distribution": 1, "number-remaining": 1, "image": "img/Scrabble_Tile_X.jpg" };
scrabbleTiles["Y"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "img/Scrabble_Tile_Y.jpg" };
scrabbleTiles["Z"] = { "value": 10, "original-distribution": 1, "number-remaining": 1, "image": "img/Scrabble_Tile_Z.jpg" };
scrabbleTiles["_"] = { "value": 0, "original-distribution": 2, "number-remaining": 2, "image": "img/Scrabble_Tile_Blank.jpg" };

var Board = {};


// Images are from the provide from assigment links. wanted to extend to full table but too many bugs
Board.slots = [];
Board.slots[0] = [];
Board.slots[0][0] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "img/Scrabble_BlankSquare_81x87.jpg" };
Board.slots[0][1] = { "letterMultiplier": 1, "wordMultiplier": 2, "image": "img/Scrabble_DoubleWordScore_81x87.jpg" };
Board.slots[0][2] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "img/Scrabble_BlankSquare_81x87.jpg" };
Board.slots[0][3] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "img/Scrabble_BlankSquare_81x87.jpg" };
Board.slots[0][4] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "img/Scrabble_BlankSquare_81x87.jpg" };
Board.slots[0][5] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "img/Scrabble_BlankSquare_81x87.jpg" };
Board.slots[0][6] = { "letterMultiplier": 1, "wordMultiplier": 2, "image": "img/Scrabble_DoubleWordScore_81x87.jpg" };

Board.rCount = Board.slots.length;
Board.cCount = Board.slots[0].length;
scoreTracker.calculateScore = function () {
    var row, col, letter, letterValue, wordMultiplier = 1, score = 0;

    if (!validateWord()) {
        return 0;
    }

    // count the letters and modifiers. add it to score
    for (row = 0; row < Board.rCount; ++row) {
        for (col = 0; col < Board.cCount; ++col) {
            letter = Board.slots[row][col].letter;
            if (letter) {
                letterValue = scrabbleTiles[letter].value;
                score += letterValue * Board.slots[row][col].letterMultiplier;

                //multiplying in case workmultiplier is not zero
                wordMultiplier *= Board.slots[row][col].wordMultiplier;
            }
        }
    }

    // update score with the multiplier.
    score *= wordMultiplier;

    return score;
}
//change score base on the tiles layout
scoreTracker.update = function () {
    var Score = scoreTracker.calculateScore();

    $("#score").css("color", No_color);
    $("#score").html(scoreTracker.totalScore + " (+<span id='boardScore'>" + Score + "</span>)");
    if (Score > 0) {
        $("#scoreKeeper").css("color", On_color);
    } else {
        $("#scoreKeeper").css("color", Er_color);
    }

    $("#scoreKeeper").html(scoreTracker.highest);
}
// Updates the total score and the highest score variables based tiles layout/update higest score
scoreTracker.commit = function () {
    var Score = scoreTracker.calculateScore();

    scoreTracker.totalScore += Score;
    $("#score").html(scoreTracker.totalScore);
    if (scoreTracker.totalScore > 0) {
        $("#score").css("color", On_color);
    }

    if (scoreTracker.totalScore > scoreTracker.highest) {
        scoreTracker.highest = scoreTracker.totalScore;
        $("#scoreKeeper").html(scoreTracker.totalScore);
        $("#scoreKeeper").css("color", On_color);
    }
}
// Resets the score to 0 
scoreTracker.restart = function () {
    scoreTracker.totalScore = 0;
    $("#score").html(0);
    $("#scoreKeeper").css("color", No_color);
}

// construct the board.
Board.create = function () {
    var row, col, bgPath, newSlot;
    var BG_WIDTH = 81, BG_HEIGHT = 87, MARGIN = 1, BORDER_WIDTH = 1;

    // Set the fixed height and width
    $("#line").css("height", (BG_HEIGHT + 2 * (MARGIN + BORDER_WIDTH)) * Board.rCount);
    $("#line").css("width", (BG_WIDTH + 2 * (MARGIN + BORDER_WIDTH)) * Board.columnCount);

    // Lay down the board images.
    for (row = 0; row < Board.rCount; ++row) {
        for (col = 0; col < Board.cCount; ++col) {
            bgPath = Board.slots[row][col].image;
            newSlot = $("<div class=\"boardSlot\" row=\"" + row + "\" col=\"" + col + "\" style=\"background-image: url(" + bgPath + ")\" />");
            $("#line").append(newSlot);
            newSlot.css({ "width": BG_WIDTH, "height": BG_HEIGHT, "margin": MARGIN, "border-width": BORDER_WIDTH });
        }
    }
}
// clear the board
Board.clear = function () {
    var iRow, iCol;

    $("#line img").remove();

    // Reset the slot data structure.
    for (iRow = 0; iRow < Board.rCount; ++iRow) {
        for (iCol = 0; iCol < Board.cCount; ++iCol) {
            delete Board.slots[iRow][iCol].tileId;
            delete Board.slots[iRow][iCol].letter;
        }
    }
}

// Returns the id of the tile that is on the slot.
Board.getTileIdFromSlot = function (row, col) {
    return Board.slots[row][col].tileId;
}

// Returns the letter on slot
Board.getLetterFromSlot = function (row, col) {
    return Board.slots[row][col].letter;
}

// empty check
Board.isSlotEmpty = function (row, col) {
    return typeof (Board.slots[row][col].tileId) === "undefined";
}
// populate the board by row and col adecuate by tile id
Board.add = function (tileId, letter, row, col) {
    var iRow, iCol;

    // If the tile came from another slot, clear that slot.
    for (iRow = 0; iRow < Board.rCount; ++iRow) {
        for (iCol = 0; iCol < Board.cCount; ++iCol) {
            if (Board.slots[iRow][iCol].tileId === tileId) {
                delete Board.slots[iRow][iCol].tileId;
                delete Board.slots[iRow][iCol].letter;
            }
        }
    }

    // Record that this slot has the tile now.
    Board.slots[row][col].letter = letter;
    Board.slots[row][col].tileId = tileId;
}

// Marks the slot empty.
Board.deleteFromSlot = function (row, col) {
    delete Board.slots[row][col].tileId;
    delete Board.slots[row][col].letter;
}

// Locate the position of the tile on the board.
// Return position of such tile
Board.findSlotFromTileId = function (tileId) {
    var iRow, iCol;

    for (iRow = 0; iRow < Board.rCount; ++iRow) {
        for (iCol = 0; iCol < Board.cCount; ++iCol) {
            if (Board.slots[iRow][iCol].tileId === tileId) {
                return [iRow, iCol];
            }
        }
    }

    return false;
}

// Debug function to print the status of the board.
Board.print = function () {
    var iRow, iCol;

    for (iRow = 0; iRow < Board.rowCount; ++iRow) {
        for (iCol = 0; iCol < Board.columnCount; ++iCol) {
            console.log("Board.slots[" + iRow + "][" + iCol + "] letter: " + Board.slots[iRow][iCol].letter + ", tileId: " + Board.slots[iRow][iCol].tileId);
        }
    }
}

// making it easier.
var printBoard = Board.print;

//report adjustment to tiles from overfull to empty
function getFromDeck(n) {
    var hand = [];
    var allTiles = [];

    // Make an array of all remaining tiles for a random selection.
    for (var key in scrabbleTiles) {
        if (scrabbleTiles.hasOwnProperty(key)) {
            var remaining = scrabbleTiles[key]["number-remaining"];
            for (var i = 0; i < remaining; ++i) {
                allTiles.push(key);
            }
        }
    }
    for (var i = 0; i < n; ++i) {
        if (allTiles.length) {
            var index = getRandomInt(0, Object.keys(allTiles).length - 1);
            var random = allTiles[index];
            hand.push(random);
            --scrabbleTiles[random]["number-remaining"];
            allTiles.splice(index, 1);  // Removes one element 
        }
    }

    // Update the number of remaining tiles on the page.
    $("#remaining").html(allTiles.length);

    return hand;
}

// Returns remaining tiles on deck
function tilesInDeck() {
    var TotalTiles = 0;

    for (var key in scrabbleTiles) {
        if (scrabbleTiles.hasOwnProperty(key)) {
            TotalTiles += scrabbleTiles[key]["number-remaining"];
        }
    }
    return TotalTiles;
}

// Returns tiles on rack.
function TilesOnRack() {
    return $("#hand img").length;
}

// Toggles the appearance and functionality of the 'next-word' to finish
function toggleButton(toFinishButton) {
    var nexTWord = document.getElementById("nextWordButton");
    if (toFinishButton) {
        nexTWord.innerHTML = "Finish";
        nexTWord.onclick = function (event) {
            finish();
        }
    } else {
        nexTWord.innerHTML = "Next Word";
        nexTWord.onclick = function (event) {
            nextWord();
        }
    }
}

// Resets the board and tiles.
function restart() {
    // Clear the hand. 
    $("#hand img").remove();

    // Remove all tiles from the board.
    Board.clear();

    // Reset the deck 
    for (var key in scrabbleTiles) {
        if (scrabbleTiles.hasOwnProperty(key)) {
            scrabbleTiles[key]["number-remaining"] = scrabbleTiles[key]["original-distribution"];
        }
    }

    // changing button to finish or next word
    toggleButton(false);

    scoreTracker.restart();

    // Start the first word.
    nextWord();
}

// Adds up the score. get tiles need it to get to 7
function nextWord() {
    var i, key, tileImageId, newTile, hand;

    scoreTracker.commit();

    // Clear the board.
    Board.clear();
    //draw
    hand = getFromDeck(7 - TilesOnRack());
    for (i = 0; i < hand.length; ++i) {
        key = hand[i];
        tileImageId = generateTileId();
        newTile = $("<img id=\"" + tileImageId + "\" src=\"" + scrabbleTiles[key]["image"] + "\" class=\"letterTile\" letter=\"" + key + "\" />");
        if (key == "_") {
            newTile.addClass("blankTile");
        }
        // Add tile image.
        $("#hand").append(newTile);

        // changing css to get tile in better position
        newTile.addClass("letterTileOnRack");

        // Make the tile draggable.
        newTile.draggable({
            revertDuration: 200,  // msec
            start: function (event, ui) {
                // Tile should be on top of everything else when being dragged.
                $(this).css("z-index", TILE_ON_DRAG);

                // Revert option needs to be manually reset because it may be modified by droppables
                // to force reverting after dropping has occured.
                $(this).draggable("option", "revert", "invalid");
            },
            stop: function () {
                // Once finished dragging, revert the z-index.
                $(this).css("z-index", "");
            }
        });
    }
    // Clear the current word display.
    $("#word").html("");

    // Clear the check marks next to the instruction texts as nothing has been played yet.
    checkSingleWord(false);
    checkTwoLettersAndMore(false);
    checkDictionary(false);

    if (tilesInDeck() == 0) {
        // We ran out of tiles to hand out. 
        toggleButton(true);
        document.getElementById("nextWordButton").disabled = false;
    } else {
        // Disable 'next Word' button initially. A valid word must be created in order to
        // proceed to the next word.
        document.getElementById("nextWordButton").disabled = true;
    }
}

// Adds up the current board score to the total score and stops the play. can be only re-started
function finish() {
    scoreTracker.commit();

    // Disable next-word/finish button.
    document.getElementById("nextWordButton").disabled = true;

    // prevent all tiles from being dragged any more.
    $(".letterTile").draggable("disable");
}

// Generates a unique string to be used as a tile ID.
function generateTileId() {
    var id;

    generateTileId.id = ++generateTileId.id || 1;
    id = "tile" + generateTileId.id.toString();

    return id;
}

// Returns a random integer between min (inclusive) and max (inclusive).
// Source: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Checks if a string is a valid dictionary word.
function isDictionaryWord(possibleWord) {
    if (possibleWord.length > 0 && isDictionaryWord.dict[possibleWord]) {
        return true;
    }

    return false;
}
// The dictionary lookup object
isDictionaryWord.dict = {};
//found a dictionary on github user: dwyl
// Do an ajax request for the dictionary file.
$.ajax({
    url: "https://github.com/And3rsonTorres/Graphic_user_Interface/HW5/words.txt",
    success: function (result) {
        // Get an array of all the words.
        var words = result.split("\n");
        // Add them as properties to the dictionary lookup object.
        for (var i = 0; i < words.length; ++i) {
            isDictionaryWord.dict[words[i].toUpperCase()] = true;
        }
    }
});

// Reads the letters on the board and checks if it is a valid Scrabble word.
// Updates the page contents based on the validation result. one line board only
function validateWord() {
    var iCol, letter, erCount, word = "", row = 0;

    // Read each letter from the board and append them to word string.
    for (iCol = 0; iCol < Board.cCount; ++iCol) {
        letter = Board.getLetterFromSlot(row, iCol);
        if (typeof (letter) === "undefined") {
            // Use special character to represent an empty slot.
            word += "\xB7";  // middle dot character
        } else {
            word += letter;
        }
    }

    //regrex to remove space    
    word = word.replace(/^\xB7+/, "");
    word = word.replace(/\xB7+$/, "");

    $("#word").html(word);

    //check errors
    erCount = 0;

    // Check if we have anything on the board.
    if (word == "") {
        checkSingleWord(false);
        ++erCount;
    } else {
        // Check if there is a gap within letters. Gap is not allowed.
        var Disconnected = new RegExp("[A-Z_]\xB7+[A-Z_]");
        if (Disconnected.test(word)) {
            checkSingleWord(false);
            ++erCount;
        } else {
            checkSingleWord(true);
        }
    }

    // Check if the word has at least 2 letters.
    if (word.length >= 2) {
        checkTwoLettersAndMore(true);
    } else {
        checkTwoLettersAndMore(false);
        ++erCount;
    }

    // Check if the word shows up in our dictionary.
    if (isDictionaryWord(word)) {
        checkDictionary(true);
    } else {
        checkDictionary(false);
        ++erCount;
    }

    if (erCount) {
        document.getElementById("nextWordButton").disabled = true;
        $("#word").css("color", Er_color);
        return false;
    }

    $("#word").css("color", On_color);
    document.getElementById("nextWordButton").disabled = false;
    return word;
}

// Make a jQuery object grayscale and semi-transparent little variation
// CSS source: https://stackoverflow.com/questions/24515402/turning-the-images-to-grayscale-using-jquery-with-opacity
function grayscaleAndFade(jQueryObject, yes) {
    if (yes) {
        jQueryObject.css({
            "-webkit-filter": "grayscale(100%)",
            "-moz-filter": "grayscale(100%)",
            "-o-filter": "grayscale(100%)",
            "-ms-filter": "grayscale(100%)",
            "filter": "grayscale(100%)",
            "opacity": 0.2
        });
    } else {
        jQueryObject.css({
            "-webkit-filter": "",
            "-moz-filter": "",
            "-o-filter": "",
            "-ms-filter": "",
            "filter": "",
            "opacity": 1.0
        });
    }
}

// check marks toggle
function checkTwoLettersAndMore(check) {
    if (check) {
        grayscaleAndFade($("#minLengthIcon"), false);
    } else {
        grayscaleAndFade($("#minLengthIcon"), true);
    }
}

function checkSingleWord(check) {
    if (check) {
        grayscaleAndFade($("#oneWordCheckIcon"), false);
    } else {
        grayscaleAndFade($("#oneWordCheckIcon"), true);
    }
}

function checkDictionary(check) {
    if (check) {
        grayscaleAndFade($("#dictionaryCheckIcon"), false);
    } else {
        grayscaleAndFade($("#dictionaryCheckIcon"), true);
    }
}

// Opens up a dialog box asking to pick a letter for the blank tile played. When the user picks the letter,
function openBlankTileDialog(TileDraggable, tileId, row, col) {
    var tileSelectorDialog = $("<div id='TileDialog'></div>");
    var letterKey, newTile;
    for (letterKey in scrabbleTiles) {
        if (letterKey != "_") {
            // Add each tile image into the dialog so the user can click it to select the letter.
            newTile = $("<img src='" + scrabbleTiles[letterKey]["image"] + "' class='letterTileInDialog' letter='" + letterKey + "'>");

            // Register click event to the image. This callback must make sure everything gets processed
            newTile.click(function () {
                var newLetter = $(this).attr("letter");

                // Replace the letter attribute and the image source of the draggable tile img.
                TileDraggable.attr("letter", newLetter);
                TileDraggable.attr("src", scrabbleTiles[newLetter]["image"]);

                // Update the board
                tileId = TileDraggable.attr("id");
                Board.add(tileId, newLetter, row, col);

                // Validate and display the word we have so far.
                validateWord();

                // Update the score with the selected letter.
                scoreTracker.update();

                tileSelectorDialog.dialog("close");
            });
            tileSelectorDialog.append(newTile);
        }
    }
    tileSelectorDialog.css("z-index",DIALOG);
    tileSelectorDialog.dialog({
        modal: true,
        draggable: false,
        resizable: false
    });
}

//creation in process
$(window).load(function () {
    var row, col;

    Board.create();

    // Make the board slots droppable.
    $(".boardSlot").droppable({
        // This function determines whether the slot gets highlighted as an acceptable dropping zone  when a tile is being dragged.
        accept: function (draggable) {
            var row, col;

            row = $(this).attr("row");
            col = $(this).attr("col");

            if (Board.getTileIdFromSlot(row, col) === draggable.attr("id")) {
                // The tile should be allowed to drop back in to the slot it was lifted out of.
                return true;
            } else if (Board.isSlotEmpty(row, col)) {
                // The slot is empty.
                return true;
            } else {
                // The slot is occupied.
                return false;
            }
        },
        activeClass: "dragHighlight",
        hoverClass: "hoverHighlight",
        drop: function (event, ui) {
            var row, col, letter, tileId, previousPos;

            ui.draggable.removeClass("letterTileOnRack");
            ui.draggable.addClass("letterTileOnBoard");

            row = $(this).attr("row");
            col = $(this).attr("col");

            letter = ui.draggable.attr("letter");
            tileId = ui.draggable.attr("id");

            // Make the dropped tile snap to the board image.
            $(ui.draggable).css("top", "");
            $(ui.draggable).css("left", "");
            $(this).append(ui.draggable);

            // blank tiles management
            // pick a letter for the blank tile. Otherwise move on.
            previousPos = Board.findSlotFromTileId(tileId);
            if ($(ui.draggable).hasClass("blankTile") && !previousPos) {
                
                openBlankTileDialog($(ui.draggable), tileId, row, col);
            } else {
                Board.add(tileId, letter, row, col);
                // Validate and display the word we have so far.
                validateWord();

                // Calculate the score and update the page.
                scoreTracker.update();
            }
        }
    });

    // Make the rack droppable so the tiles can be moved from the board to the rack.
    $("#letterRack").droppable({
        activeClass: "dragHighlight",
        hoverClass: "hoverHighlight",
        tolerance: "touch",
        drop: function (event, ui) {
            var tileId, word, pos;

            ui.draggable.removeClass("letterTileOnBoard");
            ui.draggable.addClass("letterTileOnRack");

            // When a blank tile comes back on to the rack,
            if ($(ui.draggable).hasClass("blankTile")) {
                $(ui.draggable).attr("src", scrabbleTiles["_"]["image"]);
            }

            tileId = ui.draggable.attr("id");
            pos = Board.findSlotFromTileId(tileId);
            if (pos) {
                // The tile came from the board. Mark it off the board data structure.
                Board.deleteFromSlot(pos[0], pos[1]);  // pos[0]: row, pos[1]: column

                // Snap the tile image to the back of the rack.
                $("#letterRack").append(ui.draggable);
                ui.draggable.css({ "position": "relative", "top": "", "left": "" });

                // Validate and display the word we have so far.
                word = validateWord();

                // Calculate the score and update the page.
                scoreTracker.update();
            } else {
                // User grabbed the tile and put it right back on the rack. Use the revert function
                // to put the tile in the same spot it came out of.
                ui.draggable.draggable("option", "revert", true);
            }
        }
    });
    // Set the board and tiles. Start the first word.
    restart();
});
