import React from 'react'

export default function ListReact() {
    const data =[
        {id:1, text:"mango"},
        {id:2,text:'Apple'},
        {id:3,text:'Banana'},
        {id:4,text:'Papaya'},
        {id:5,text:'Watermelon'},
        {id:6,text:'Graphes'},
        {id:7,text:'Orange'},
    ];
    const listItem = data.map((e)=>(
        <li key={e.id}>{e.text}</li>
    ))
    
    
       
    
  return (
    <div>
<h2> list </h2>
<ul>
    {listItem}
</ul>
    </div>
  )
}
