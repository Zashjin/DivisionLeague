import classes from './Free-Agents.module.css'
import { useState } from 'react'
import axios from 'axios'
import Header from './../Header/Header'

const FreeAgents = () => {

    const [submitted, setSubmitted]= useState(false);

    const url ="https://api.sheety.co/da3378cdd100437010a93e4dcf19c1a6/loLNaDivisionLeagueMastersheet/freeAgent"
    const [data, setData] = useState({
        name:'',
        position1:'',
        position2:'',
        availability:''
    })

    function submit(e){
        e.preventDefault();
        setSubmitted(true);
        axios.post(url,{
            name:data.name,
            position1:data.position1,
            position2:data.position2,
            availability:data.availability
        })
        .then(setData({
            name:'',
        position1:'',
        position2:'',
        availability:''
    }))
    
      
    }
    function handle(e){
        const newdata ={...data}
        newdata[e.target.name] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <div className={classes.Main}>
            <Header title={'Become A Free Agent'} />
            <form  onSubmit={(e)=> submit(e)} className={classes.Form} id='free'>
                {submitted ? <div className={classes.Success}>Success! Your Entry Has Been Submitted!</div>: null }
                <label>Name</label>
                <input onChange={(e)=>handle(e)} value={data.name} type="Text"  name="name" required="true" />
                <label>1st Position</label>
                <input onChange={(e)=>handle(e)} value={data.position1} type="Text" name="position1" required="true" />
                <label>2nd Position</label>
                <input onChange={(e)=>handle(e)} value={data.position2} type="Text"  name="position2" required="true"  />
                <label>Availability</label>
                <input onChange={(e)=>handle(e)} value={data.availability} type="Text"  name="availability" required="true" />
                <button>Submit</button>
            </form>
        </div>
);
    }
 
export default FreeAgents;
