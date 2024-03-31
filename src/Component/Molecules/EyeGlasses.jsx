import EyeglassCard from "../Atoms/EyeglassCard"
import { EyeglassesData } from "../Data/EyeglassesData";

const EyeGlasses = () => {
  const data = EyeglassesData;
  return (
    <div className="grid grid-cols-5 gap-3 p-4">
        <EyeglassCard  data={data}/>
    </div>
  )
}

export default EyeGlasses