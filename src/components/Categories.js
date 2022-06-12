import React from 'react'

const Categories = ({childToParent}) => {
    const[Category,setCategory]=React.useState("Agriculture")
    
    const JobCategories=["Agriculture",
        "Architecture",
       " Arts","Communication",
       "Business and Finance", 
        "Education",
        "Health Science",
        "IT","Engineering"]
    const cats=JobCategories.map((element)=>{
        return(
            <div className="catBox">
<button onClick={()=>childToParent(element)} className="catBoxButt">{element}</button>
            </div>
        )
    })
  return (
     
    <div className="Categories">
        
    
        {cats}
        </div>
  )
}

export default Categories