    const tiles= Array.from(document.querySelectorAll('.tile'));
    const announcer = document.querySelector('.announcer');

    let board=['','','','','','','','',''];
    let currentPlayer='X';
    isGameActive=true;

    const PlayerX_Won='Player X Won';
    const PlayerO_Won='Player O Won';
    const Tie='Tie';
    /*
        [0][1][2]
        [3][4][5]
        [6][7][8]
    */
    

    const tileClicked = (e) => {
        const id= e.target.id;
        if(!board[id] && isGameActive)
        {
            board[id]=currentPlayer;
            e.target.innerText = currentPlayer;
            if(playerHasWon()==1)
            {
                announcer.innerHTML=`${currentPlayer} has won`;
                isGameActive = false;
                return;
            }
            if(currentPlayer =='X')
                currentPlayer='O';
            else
                currentPlayer='X'
            document.getElementById("turn").innerHTML=currentPlayer;
        }
    }

    const playerHasWon=()=>{
        if(board[0]==currentPlayer)
        {
            if(board[1]==currentPlayer && board[2]==currentPlayer)
            {
                console.log(`${currentPlayer} Won`)
                return 1;
            }
            if(board[3]==currentPlayer && board[6]==currentPlayer)
            {
                console.log(`${currentPlayer} Won`)
                return 1;
            }
            if(board[4]==currentPlayer && board[8]==currentPlayer)
            {
                console.log(`${currentPlayer} Won`)
                return 1;
            }
        }
        if(board[8]==currentPlayer)
        {
            if(board[5]==currentPlayer && board[2]==currentPlayer)
            {
                console.log(`${currentPlayer} Won`)
                return 1;
            }
            if(board[6]==currentPlayer && board[7]==currentPlayer)
            {
                console.log(`${currentPlayer} Won`)
                return 1;
            }
        }
        if(board[4]==currentPlayer)
        {
            if(board[1]==currentPlayer && board[7]==currentPlayer)
            {
                console.log(`${currentPlayer} Won`)
                return 1;
            }
            if(board[3]==currentPlayer && board[5]==currentPlayer)
            {
                console.log(`${currentPlayer} Won`)
                return 1;
            }
            if(board[2]==currentPlayer && board[6]==currentPlayer)
            {
                console.log(`${currentPlayer} Won`)
                return 1;
            }
        }
    }

    tiles.forEach((tile,index) => {
        tile.addEventListener('click', tileClicked);
    });

    const resetBoard = () => {
        currentPlayer='X';
        isGameActive=true;
        board=['','','','','','','','',''];
        tiles.forEach((tile) =>{
            tile.innerText="";
        });
        document.getElementById("turn").innerHTML=currentPlayer;
        announcer.innerText="";
    }
