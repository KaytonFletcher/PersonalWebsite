import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const ScienceLab = () => {
    
    const handleChange = event => {
        console.log(event.target.value);
    }

    const bruh = [{title: "hello"},{title: "yeet"}, {title: "spaghet"}, {title: "banana"}]

    return (
        <>	
         <Autocomplete
            options={bruh}
            getOptionLabel={option => option.title}
            style={{ width: 500 }}
            renderInput={params => (	
        <TextField
            {...params}
            id="outlined-search"
            type="search"
            margin="normal"
            variant="outlined"
            placeholder="Search For Device..."
            onChange={handleChange}/>
            )}/>
            
        
        <div className="lab-bench"/>
		</>
    )
}

export default ScienceLab;