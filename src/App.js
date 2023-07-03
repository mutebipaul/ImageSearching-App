import React from "react";
import SearchBar from './components/SearchBar'

function App(){
    const handleSubmit =(term) =>{
        console.log = ('Do searchwith images');
    };
    return <div> 
        <SearchBar onSubmit = {handleSubmit}/>
         </div>;

}
export default App;