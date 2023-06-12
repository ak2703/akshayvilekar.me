import * as React from "react"

import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const stats = [
    { id: 1, value: 'Clients', name: '20 + clients from US, UK, India, China and many more' },
    { id: 2, value: 'Experience', name: '7+ years of professional SDLC experience' },
    { id: 3, value: 'Best Practices', name: 'Clean, Performant, Secure, Modern code' },
]
export default function Awards() {
    return (
        <div className="bg-violet-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-white">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base text-white leading-7">{stat.name}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
