'use client'
import { Player } from '@lottiefiles/react-lottie-player';

export default function Loading() {
    return (
        <div>
            <div className="my-16 flex justify-center">
                <Player
                    src='https://assets2.lottiefiles.com/packages/lf20_0pivjQFVZl.json'
                    className="player"
                    loop
                    autoplay
                    style={{ width: "420px" }}
                />
            </div>
        </div>


    )
}
