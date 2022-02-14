import LightningVideo from "../assets/video/lightning.mp4"

export default function Lightning() {
    return(
        <div className="absolute bg-black -z-10">
            <div className="grid justify-items-center">
                <video className="sepia brightness-50 min-h-[100vh] lg:min-h-[75vh]" style={{objectFit: "cover"}} autoPlay muted playsInline loop poster="../assets/img/lightning.jpg">
                    <source id="myvideo" src={LightningVideo} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}