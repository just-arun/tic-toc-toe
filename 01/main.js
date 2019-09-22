let app = new Vue({
    el: "#app",
    data: {
        formOpen: true,
        keyValues: [
            "-","-","-",
            "-","-","-",
            "-","-","-"
        ],
        player: false,
        gameOver: false,
        player1: "arun",
        player2: "priya",
        player1Score: 0,
        player2Score: 0,
        winner: ""
    },
    methods: {
        resetBut() {
            this.keyValues = [
                "-","-","-",
                "-","-","-",
                "-","-","-"
            ];
            this.player = false;
            this.gameOver = false;
            this.winner = "";
        },
        clickFunc(i) {
            if (!this.gameOver) {
                if (this.keyValues[i] == "-") {
                    this.player = !this.player;
                    (this.player) ? this.keyValues[i] = "O": this.keyValues[i] = "X";
                }
                this.calculating();
                this.whoIsTheWinner();
            }
        },
        submitFunc() {
            this.formOpen = false;
        },
        calculating() {
            let ones = [];
            let twos = [];
            let threes = [];
            let leftRight = [];
            let rightLeft = [];
            let count = 0;
            for (let i = 0; i < 9; i+=3) {
                let one = this.keyValues[i];
                let two = this.keyValues[i+1];
                let three = this.keyValues[i+2];
                leftRight.push(this.keyValues[i+count]);
                rightLeft.push(this.keyValues[i+2-count]);
                (one !== "-")?(one === two)?(two === three)?this.gameOver = true:null:null:null;
                ones.push(one);
                twos.push(two);
                threes.push(three);
                count++;
            }
            (ones.reduce((x,y) => x + y) == "OOO" || ones.reduce((x,y) => x + y) == "XXX")? this.gameOver = true : null;
            (twos.reduce((x,y) => x + y) == "OOO" || twos.reduce((x,y) => x + y) == "XXX")? this.gameOver = true : null;
            (threes.reduce((x,y) => x + y) == "OOO" || threes.reduce((x,y) => x + y) == "XXX")? this.gameOver = true : null;
            let leftRightRes = leftRight.reduce((x,y) => x+y);
            let rightLeftRes = rightLeft.reduce((x,y) => x+y);
            console.log(rightLeftRes);
            (leftRightRes === "OOO" || leftRightRes === "XXX")?this.gameOver=true:null;
            (rightLeftRes === "OOO" || rightLeftRes === "XXX")?this.gameOver=true:null;
        },
        whoIsTheWinner() {
            if (this.gameOver) {
                if (this.player) {
                    this.winner = this.player1;
                    this.player1Score++;
                } else {
                    this.winner = this.player2;
                    this.player2Score++;
                }
            };
        },
    },
})