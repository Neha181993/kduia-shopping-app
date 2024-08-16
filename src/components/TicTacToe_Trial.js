   /*https://react.dev/learn/tutorial-tic-tac-toe*/ 
function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
        /* This would create the board to work with checkout className*/
      </button>
    );
  }

class Board extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sqaures: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i){
        /*Slice is to copy and create a new element*/ 
        const sqaures = this.state.sqaures.slice()
        sqaures[i] = this.state.xIsNext ? 'X' : 'O';
        /*Set the state of current execution*/ 
        this.setState({sqaures: sqaures,
            xIsNext: !this.state.xIsNext,
        });
    }

    rendersqaure(i){
        return (
            <Sqaure
                value={this.state.sqaures[i]}
                onClick={() => this.handleClick(i)}
            />
        )
    }

    render(){

        /* Note that here we are passing the state of entire sqaure*/
        const winner = calculateWinner(this.state.sqaures)
        
        let status;

        if (winner) {
            status = 'Winner: ' + winner;
         }else{
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return(
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.rendersqaure(0)}
                    {this.rendersqaure(1)}
                    {this.rendersqaure(2)}
                </div>
                <div className="board-row">
                    {this.rendersqaure(3)}
                    {this.rendersqaure(4)}
                    {this.rendersqaure(5)}
                </div>
                <div className="board-row">
                    {this.rendersqaure(6)}
                    {this.rendersqaure(7)}
                    {this.rendersqaure(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);

/* Winner Function */
function calculateWinner(){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

/* Above is the list of combinations where there is  win. Positions would be passed to 
sqaure to get the value at sqaure*/
    for (let i=0; i <lines.length; i++){
        const [a,b,c] = lines[i];
        if(sqaures[a] && sqaures[a] == sqaures[b] && sqaures[a]== sqaures[c]){
            return sqaures[a];
        }
    }
    return null;
}


--



