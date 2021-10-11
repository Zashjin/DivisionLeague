import classes from './Create.module.css'
import { useState } from 'react'
import axios from 'axios'
import Header from './../Header/Header'

const Create = () => {
    const [submitted, setSubmitted]= useState(false)
    

    

    const url ="https://api.sheety.co/da3378cdd100437010a93e4dcf19c1a6/loLNaDivisionLeagueMastersheet/teamFromSite"
    const [data, setData] = useState({
        Region:'',
        TeamName:'',
        TeamCaptain:'',
        Top:'',
        Jungle:'',
        Mid:'',
        ADC:'',
        Support:'',
        Sub:'',
    })

    function submit(e){
        e.preventDefault();
        setSubmitted(true);
        axios.post(url,{
            TeamName: data.TeamName,
            TeamCaptain: data.TeamCaptain,
            Top: data.Top,
            Jungle: data.Jungle,
            Mid: data.Mid,
            ADC: data.ADC,
            Support: data.Support,
            Sub: data.Sub,
        })
        
        .then(setData({
            Region:'',
            TeamName:'',
            TeamCaptain:'',
            Top:'',
            Jungle:'',
            Mid:'',
            ADC:'',
            Support:'',
            Sub:'',
        }))
        
    }

    function handle(e){
        const newdata ={...data}
        newdata[e.target.name] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <div className={classes.Main} id='create'>
            <Header title={'Team Creation'} />
            <form  onSubmit={(e)=> submit(e)} className={classes.Form} >
            {submitted ? <div className={classes.Success}>Success! Your Entry Will Be Reviewed!</div>: null }
                <label>Team Name</label>
                <input onChange={(e)=>handle(e)} value={data.TeamName}type="Text"  name="TeamName" required="true" />
                <label>Team Captain</label>
                <input onChange={(e)=>handle(e)} value={data.TeamCaptain}type="Text" name="TeamCaptain" required="true" />
                <label>Top Laner</label>
                <input onChange={(e)=>handle(e)} value={data.Top}type="Text"  name="Top" required="true" />
                <label>Jungler</label>
                <input onChange={(e)=>handle(e)} value={data.Jungle}type="Text"  name="Jungle"  required="true" />
                <label>Mid Laner</label>
                <input onChange={(e)=>handle(e)} value={data.Mid}type="Text"  name="Mid"  required="true" />
                <label>ADC</label>
                <input onChange={(e)=>handle(e)} value={data.ADC}type="Text"  name="ADC" required="true" />
                <label>Support</label>
                <input onChange={(e)=>handle(e)} value={data.Support}type="Text"  name="Support"  required="true" />
                <label>Coach</label>
                <input onChange={(e)=>handle(e)} value={data.Sub}type="Text"  name="Sub"   />
                
                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
);
}
 
export default Create;
