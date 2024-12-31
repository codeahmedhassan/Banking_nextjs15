'use client'

import CountUp from 'react-countup'
import React from 'react'

const AnimatedCounter = ({ amount }: { amount:number }) => {
    return (
        <div>
            <CountUp
            duration={2}
            decimal='.'
            decimals={2}
            prefix='$'
            end={amount}
            />

        </div>
    )
}

export default AnimatedCounter
