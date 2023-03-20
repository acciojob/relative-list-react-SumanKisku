import React from 'react'

const relatives = [
  {id: "relativeListItem1", name: "Mama"},
  {id: "relativeListItem2", name: "Pisima"},
  {id: "relativeListItem3", name: "Choto Pisima"},
  {id: "relativeListItem4", name: "Mejo Pisima"},
]

const App = ({relatives}) => {
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol key="relativeList" aria-label="Relatives">
                  {relatives.map((relative)=> {
                    <li key={relative.id}>{relative.name}</li>
                  })}
               </ol>
    </div>
  )
}

export default App
