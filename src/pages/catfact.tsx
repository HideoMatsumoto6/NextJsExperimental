


// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://catfact.ninja/fact`)
    const data = await res.json()
   
    // Pass data to the page via props
    return { props: { data } }
  }



export default function CatFactDetail({ data }: {data: any}) {
    return <h1>{JSON.stringify(data)}</h1>
}