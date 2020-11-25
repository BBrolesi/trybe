let piece_name = 'king';

switch(piece_name) {
    case 'king':
        console.log('One square in any direction.');
        break;
    case 'queen':
        console.log('Diagonally, horizontally, or vertically any number of squares.');
        break;
    case 'bishop':
        console.log('Diagonally any number of squares.');
        break;
    case 'knight':
        console.log('In an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically.');
        break;
    case 'rook':
        console.log('Horizontally or vertically any number of squares.');
        break;
    case 'pawn':
        console.log('vertically forward one square, with the option to move two squares if they have not yet moved.');
        break;
    default:
        console.log('Invalid piece');
        break;
}

