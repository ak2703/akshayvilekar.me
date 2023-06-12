import * as React from "react"
import github from "../../../images/github.svg"
import twitter from "../../../images/twitter.svg"
import insta from "../../../images/insta.svg"
import linkedin from "../../../images/linkedin.svg"

export default function Contact(){
    return (
        <div className="bg-purple-900 pt-24 text-center">
            <h3 className="text-white text-bold text-5xl">Contact</h3>
            <div className="text-white pt-12">
                To get in touch contact <a className="text-indigo-600 hover:text-indigo-950" href="mailto:contact@akshayvilekar.me">here</a>
            </div>
            <div className="pb-12">
                <div className="flex flex-row justify-center pt-4">
                    <div className="pt-2 mx-4">
                        <a href="http://github.com/ak2703" ><img src={github} alt="github logo" className="w-8 h-8"/></a>
                    </div>
                    <div className="pt-2 mx-4 ">
                        <a href="https://twitter.com/akshayvilekar" ><img src={twitter} alt="twitter logo" className="w-8 h-8"/></a>
                    </div>
                    <div className="pt-2 mx-4 ">
                        <a href="http://github.com/ak2703" ><img src={insta} alt="insta logo" className="w-8 h-8"/></a>
                    </div>
                    <div className="pt-2 mx-4 ">
                        <a href="https://www.linkedin.com/in/akshay-vilekar-b25a2584/" ><img src={linkedin} alt="linkedin logo" className="w-8 h-8"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}