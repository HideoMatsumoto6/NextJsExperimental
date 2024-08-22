import React, { useState } from 'react';
export default function CatFactDetail() {
    const [name, setName] = useState('');
    const [data, setData] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault(); // Fetch data from the external API with the name parameter 
        const res = await fetch(`https://api.genderize.io/?name=${name}`);
        const result = await res.json(); // Update the data state with the fetched result 
        setData(result);
    };
    return (<div> <form onSubmit={handleSubmit}> <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" /> <button type="submit">Search</button>
    </form> {data && <h1>{JSON.stringify(data)}</h1>}
    </div>);
}