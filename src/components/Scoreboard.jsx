export const Scoreboard = ({currentScore, bestScore}) => {
    return (
        <div>
            <div className="scoreboard">
                <p>best score {bestScore}</p>
                <p>current score {currentScore}</p>
            </div>
        </div>
    )
}