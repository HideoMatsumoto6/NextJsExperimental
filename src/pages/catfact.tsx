


// This gets called on every request
export async function getServerSideProps() {
  try {
    // Fetch data from external API
    const res = await fetch(`https://api.ipify.org/?format=json`)
    if (!res.ok) {
      console.error("This is no good at all");
      throw new Error('error happened in fetching from backend')
    }
    const data = { des: "void" }
    // Pass data to the page via props
    return { props: { data } }
  } catch (error) {
    console.error("Error occured while fetching IP address:" + error)
    const data = { error: "Error fetching from IP address" }
    console.log({
      props: { data }
    })
    return {
      props: { data }
    }
  }
}



export default function CatFactDetail({ data }: {data: any}) {
    return <h1>{JSON.stringify(data)}</h1>
}