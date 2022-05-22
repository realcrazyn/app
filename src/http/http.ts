import axios from 'axios'

export const httpGet = async (adress: string) => {
  try {
    let res = await axios.get(adress)
    return res.data
  } catch (e) {
    return e
  }
}
export const httpPost = async (adress: string, data: any) => {
  try {
    let res = await axios.post(adress, data)
    return res.data
  } catch (e) {
    return e
  }
}
