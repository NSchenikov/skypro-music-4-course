import { useParams } from 'react-router-dom'
import { categories } from '../../components/sidebar/sidebar'

export const Category = () => {
  const params = useParams()
  const favorite = categories.find((id) => id === Number(params.id))
  return (
    <div>
      <h1>CategoryPage {favorite}</h1>
    </div>
  )
}
