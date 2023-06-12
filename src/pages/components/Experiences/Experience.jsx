import * as React from "react"

const steps = [
    {
        "year": 2014,
        "description": "Intern at Hotwax"
    },
    {
        "year": 2017,
        "description": "Intern at Hotwax"
    },
    {
        "year": 2018,
        "description": "Intern at Hotwax"
    },
    {
        "year": 2021,
        "description": "Immobel Group"
    }
]

export default function Experience(){
    return (
        <div className="bg-violet-900 py-24 sm:py-24">
            <div className="mx-4 max-w-7xl">
                <h2 className="text-4xl text-center font-bold sm:text-6xl tracking-tight text-white">
                    My Journey
                </h2>
                {steps.map((item)=>(
                        <Step step={item} />
                ))}
            </div>
        </div>
    )
}


function Step({step}){
    return (
        <div className="text-base text-white w-32">
            <div className="relative">
                <div className="flex w-full items-center justify-center px-4 absolute pt-12">
                    {step.year}
                </div>
            </div>

        </div>
    )
}