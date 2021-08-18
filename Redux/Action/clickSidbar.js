import { dispatch } from '../Store/store'
import { TOGGLE_SIDEBAR } from '../type'

const clickSidbar = () => {
  dispatch({type:TOGGLE_SIDEBAR})
}

export default clickSidbar
