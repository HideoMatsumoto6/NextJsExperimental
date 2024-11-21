import React, { Context, useState } from 'react';
import { useRouter } from 'next/router';
export default function Dynamicnameguessing({ data }: { data: any }) {
    const [name, setName] = useState('');
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault(); // Update the URL with the new name parameter 
        router.push(`dynamicnameguessing/?name=${name}`);
    };
    return (<div> <h1>{JSON.stringify(data)}</h1> <form onSubmit={handleSubmit}> <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" /> <button type="submit">Search</button> </form> </div>);
}
export async function getServerSideProps(context) {
    const { name = 'luc' } = context.query; // Default to 'luc' if no name is provided // Fetch data from the external API with the name parameter
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await res.json(); // Pass data to the page via props
    return { props: { data } };
}