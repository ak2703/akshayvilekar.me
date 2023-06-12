import * as React from "react"
import Project from "./Project";

export default function Portfolio(){
    return (
        <div className="bg-indigo-950 py-24 sm:py-24">
            <div className="mx-4 max-w-7xl text-center">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Portfolio
                </h2>
                <div className="text-base text-white tracking-tight mt-8">
                    List of some projects that I have worked on
                    <Project />
                </div>
            </div>
        </div>
    )
}