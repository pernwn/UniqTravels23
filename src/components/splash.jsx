import splash from "../uniq.json"
import guy from "../guy2.json"
import Lottie from "lottie-react"
import "../styles/vic.css"

export const SplashAnimation = () => <Lottie animationData={splash} loop={true}/>
export const GuyAnimation = () => <Lottie animationData={guy} loop={true}/>
    
  