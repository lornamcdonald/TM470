import React, {useState, useEffect} from "react";
import DailyReflectionForm from "./DailyReflectionForm"


export default function NewReflection() {
    const[reflections, setReflections] = useState([]);

    useEffect (()=>{
        if(localStorage.getItem("localreflections")){
            const storedList = JSON.parse(localStorage.getItem("localreflections"));
            setReflections(storedList);
        }
    },[])
    
    const saveReflections = (reflections)=> {
        localStorage.setItem("localreflections", JSON.stringify(reflections))
        setReflections (reflections)
    }

    const onAddEntry = (reflection) =>{
        saveReflections ([...reflections, reflection])
    }

    const handleDelete = (reflection)=>{
        const deleted = reflections.filter((t)=>t.id !== reflection.id);
        saveReflections(deleted);
    }
    
    const prevReflectionStyle = {
        textAlign: "left", 
        fontWeight: "bold",
        wordWrap: "break-word",
        backgroundColor: "#FDBAE0"
    }

    return (
        <div className="container row">
            <h1> New Reflection</h1> 
            <div className="col-12">
                <DailyReflectionForm onAddEntry={onAddEntry}/>
            </div>

            <h1> Previous Reflections</h1>

            <div className="number-reflections">
                You have
                {
                    !reflections.length? " no Reflections"
                    : reflections.length === 1 ? " 1 Reflection"
                    : reflections.length >1 ? ` ${reflections.length} Reflections`
                    : null
                }
            </div>
            {
                reflections.map( (reflection)=>(
                    <React.Fragment key={reflection.id}>
                        <div className="col-8 previous-reflections">
                            <div className="col-11">
                                <span className="form-control btn mt-2" style={prevReflectionStyle}>
                                    <p>Reflection Date: {reflection.date}</p>
                                    <p>On this day I felt: {reflection.feel}</p>
                                    <p>On this day I tried: {reflection.try}</p>
                                    <p>On this day I worried about: {reflection.worry}</p>
                                    <p>On this day I felt pleased about: {reflection.pleased}</p>
                                    <p>On this day I felt about tomorrow: {reflection.feelTomorrow}</p>
                                </span>
                            </div>
                            <div className="col-1">
                                <button
                                className="mt-2 btn btn-danger"
                                onClick={()=> handleDelete(reflection)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </React.Fragment>
                
                ))
            }
            
        </div>
        
    );
    }
