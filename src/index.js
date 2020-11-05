function showJeloquent() {

    document.querySelector('main.visible').classList.remove('visible');
    document.querySelector('main.visible').classList.add('invisible');

    document.querySelector('#jeloquent').classList.remove('invisible');
    document.querySelector('#jeloquent').classList.add('visible');


}


function showSudoku() {

    document.querySelector('main.visible').classList.remove('visible');
    document.querySelector('main.visible').classList.add('invisible');

    document.querySelector('#sudoku').classList.remove('invisible');
    document.querySelector('#sudoku').classList.add('visible');

    Sudoku.GenerateView.showLoader();

    setTimeout(() => {
        Sudoku.GameGenerator.newGame();
        Sudoku.GenerateView.removeLoader();
        Sudoku.GenerateView.createView();
    }, 200);
}

