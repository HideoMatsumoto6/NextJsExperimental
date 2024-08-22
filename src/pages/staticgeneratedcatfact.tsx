export default function newsAboutCat({ posts }) {
    // Render posts...
   return <div>
            <h1>{JSON.stringify(posts)}</h1>
          </div>
  }
   
  // This function gets called at build time
  export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://catfact.ninja/fact')
    const posts = await res.json()
   
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
}