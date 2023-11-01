import splash from "../uniq.json"
import Lottie from "lottie-react"
import "../styles/vic.css"


/*
export function SplashAnimation() {splash.loadAnimation({
    container: "div",
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../uniq.json',
  })

}
*/

export const SplashAnimation = () => <Lottie animationData={splash} loop={true}/>

    
  