export default function apiaddressinfo({ posts }) {
    // try build this and visit this page, see if you get a same result each time
   return <div>
            <h1>{JSON.stringify(posts)}</h1>
          </div>
  }
   
  // This function gets called at build time
  export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch(`https://randomuser.me/api/`)
    const posts = await res.json()
   
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
}