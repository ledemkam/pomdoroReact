// import play from "../assets/play-button.svg"

import { useDispatch } from "react-redux"
import { updateChronoValue } from "../future/chrono"

// import reset from "../assets/reset.svg"
const UpdateButton = ({sign,type}) => {
  const dispatch = useDispatch()
    const handleUpdate = () => {
      dispatch(updateChronoValue({ type, value: sign === "+" ? 60 : -60}))
    }

  return (
    <button onClick={handleUpdate}
    className="w-8 h-8 text-4xl text-slate-700 bg-slate-200 rounded flex justify-center items-center">
      <span className="relative bottom-1 pointer-events-none">{sign}</span>
    </button>  )
}
export default UpdateButton