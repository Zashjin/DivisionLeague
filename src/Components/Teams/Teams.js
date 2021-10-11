import classes from './Teams.module.css'
import Header from './../Header/Header'
import top from './../../images/Top_lane_icon.png'
import jg from './../../images/JUNGLE.png'
import mid from './../../images/Middle_lane_icon.png'
import adc from './../../images/Bottom_icon.png'
import supp from './../../images/Support_icon (1).png'



import axios from "axios"
import React, {useState, useEffect} from "react"

function Teams(){

  
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.get("https://sheetdb.io/api/v1/kp83qzbkbhxta?sheet=Teams")
      .then((res) => {  
      setTeams(res.data)
      console.log(res.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);
 let newArray = teams.filter(team => team.Active === "TRUE")
 console.log(newArray)
  

  return(
   
    <div className={classes.Teams} id='teams'>
      <Header title={'Teams'} />
      {
        newArray.map(team =>(
          <section>
            <div className={classes.Title}>
              <div  className={classes.Icon}>
                <h2 className={classes.TeamName}>
                  {team.TeamName}
                </h2>
              </div>
              <div className={classes.Teamcaptain}>
              <h4 className={classes.Captain}>
                "Team Captain"
              </h4>
              <h4 className={classes.Captain}>   
                {team.TeamCaptain}
              </h4>
              </div>
            </div>
            <hr></hr>
            
          <div className={classes.Players}>
            <p>
              <img className={classes.Me} src={top} alt='top'></img>
              {team.Top}
            </p>
            <p>
            <img className={classes.Me} src={jg} alt='jg'></img>
              {team.Jungle}
            </p>
            <p>
            <img className={classes.Me} src={mid} alt='mid'></img>
              {team.Mid}
            </p>
            <p>
            <img className={classes.Me} src={adc} alt='adc'></img>
              {team.ADC}
            </p>
            <p>
            <img className={classes.Me} src={supp} alt="supp"></img>
              {team.Support}
            </p>
          </div> 
          </section>
        ))
      }
    </div>
  )
}

 
export default Teams;
