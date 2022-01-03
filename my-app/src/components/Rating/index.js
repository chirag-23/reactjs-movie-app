import React,{ useState } from "react";

const Rate = ({callback}) => {
    const [value, setValue] = useState(5);

    return(
        <div style={{fontSize:'1.3rem'}}>
            <input type="range" min="1" max="10" value={value} onChange={e => setValue(e.currentTarget.value)} style={{cursor:'pointer', marginRight:'6px'}}/>
            {value}
            <p>
                <button onClick={()=> callback(value)} style={{cursor:'pointer', padding:'0 8px',fontSize:'1.1rem'}} >Rate</button>
            </p>
        </div>
    )
}

export default Rate;