import {GET_MOVIE} from './mutation-types'
import axios from '../http'

export default {
  // 把commit从store解构出来
  async getMovie ({commit}) {
    let res = await axios.req("api/in_theaters")
    console.log(res)
    commit(GET_MOVIE, res)
  }
}