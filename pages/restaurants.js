import { client } from './api/client.js'

export default function Restaurants ({ restaurants }){
  console.log('restaurantes', restaurants)
  return (
    <p>Restaurants</p>
  )
}
export async function getStaticProps() {
  const query = `
    query Restaurants {
      restaurants {
        id
        name
        description
      }
    }
  `
  const restaurants = await client.request(query)
  console.log('restaurantes', restaurants)
  return {
    props: {
      restaurants: restaurants
    }
  }
}
