import { createContext, useState } from 'react'

export const FavoriteContext = createContext({
  favorites: [],
  addFavorite: () => false,
  removeFavorite: () => false,
})

export const FavoriteProvider = ({ children }) => {
  const [favorites, setIds] = useState([])
  console.log('provider favorites', favorites)

  const add = (id) => {
    setIds((currentFavorites) => [...currentFavorites, id])
  }
  const remove = (id) => {
    setIds((currentFavorites) => currentFavorites.filter(i => i !== id))
  }

  const value = { favorites, addFavorite: add, removeFavorite: remove }

  return (
    <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
  )
}
