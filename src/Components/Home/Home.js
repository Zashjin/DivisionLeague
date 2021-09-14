import classes from './Home.module.css'
import me from './../../images/Screenshot 2021-09-01 045246.png'
import elo from './../../images/silvergold.png'

const Home = () => {
    return (
        <div className={classes.Main}  id='home'>
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <div className={classes.Title}> 
                    <img className={classes.Elo} src={elo} alt='elo'></img>
                    <h1>Division League</h1>
                    </div>
                    <h2>League of Legends (NA)</h2>
                    <h3>Create or Join a team. Take part in weekly matches. Win to qualify for playoffs and have a chance to win various prizes!!!</h3>
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Me} src={me} alt='me'></img>
                </div>
            </div>
        </div>
    );
}
 
export default Home;