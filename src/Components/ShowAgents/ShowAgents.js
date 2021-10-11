import classes from './ShowAgents.module.css'
import axios from "axios"
import React, {useState, useEffect} from "react"
import Header from './../Header/Header'


const Agents = () => {

    const [agent, setAgent] = useState([]);

    useEffect(() => {
      axios.get("https://sheetdb.io/api/v1/kp83qzbkbhxta?sheet=FreeAgent")
        .then((res) => {  
        setAgent(res.data)
        console.log(res.data);
        })
        .catch((error) => {
          console.log(error)
        })
    }, []);
   let newArray = agent
   console.log(newArray)
    
  
    return ( 
        <div className={classes.Agents} id='agent'>
            <Header title={'Free Agents'} />
            {
             newArray.map(agent =>(
                <section className={classes.Border}>
                    <div >
                        <div >
                            <h2>
                                {agent.name}
                            </h2>
                        </div>
                        <div className={classes.Free} display='flex'>
                            <div className={classes.First}>
                                <h3>#1 {agent.position1}</h3>
                            </div>
                            <div className={classes.Second}>
                                <h3>
                                    #2 {agent.position2}
                                </h3>
                            </div>
                            <div className={classes.Availability}>
                                <p>
                                    Available {agent.availability}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

             ))  
            }
        </div>
     );
}
 
export default Agents;
