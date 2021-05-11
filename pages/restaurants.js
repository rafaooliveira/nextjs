import { client } from './api/client.js'
import utilStyles from '../styles/utils.module.css'

export default function Restaurants ({ dataProps }){
  console.log('dataProps', dataProps.restaurants)
  return (
    <div>
      <h2 className={utilStyles.titleRestaurant}>Cadastro de Restaurantes</h2>
      <section>
        <ul className={utilStyles.list}>
          { dataProps.restaurants.map(({ id, name, description }) => (
            <li className={utilStyles.listItem} key={id}>
                <p><strong>Nome:</strong> {name}</p>
                <p><strong>Descrição:</strong> {description}</p>
              <hr/>
            </li>
            ))
          }
        </ul>
      </section>
    </div>
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
  const dataProps = await client.request(query)
  console.log('dataProps', dataProps)
  return {
    props: {
      dataProps
    }
  }
}
