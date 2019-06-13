import ajax from './ajax'

export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
export const reqFoodTypes = () => ajax('/index_category')
export const reqShops = (a,b) => ajax('/shop',{latitude:a,longitude:b})


