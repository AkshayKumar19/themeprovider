import React from 'react'
import HostingComp from './HostingComp'
import Footer from "./Footer"

const Hosting = () => {
    return (
        <>
            <div className="hosting">
                <div className="container-xl">
                    <h3 className="py-4">Top 10 Wordpress Hosting Providers</h3>
                </div>
                <div className="hostt px-4">
                    <div className="container-xl">
                        <div className="row mt-4 py-4">
                           <HostingComp imgfile={"../img/hosting/hostinger.png"}/>
                           <HostingComp imgfile={"../img/hosting/A2hosting.png"}/>
                           <HostingComp imgfile={"../img/hosting/bluehost.png"}/>
                           <HostingComp imgfile={"../img/hosting/dreamhost.png"}/>
                           <HostingComp imgfile={"../img/hosting/evds.png"}/>
                           <HostingComp imgfile={"../img/hosting/greengreeks.png"}/>
                           <HostingComp imgfile={"../img/hosting/hostwinds.png"}/>
                           <HostingComp imgfile={"../img/hosting/ipage.png"}/>
                           <HostingComp imgfile={"../img/hosting/namecheap.png"}/>

                        </div>
                    </div>
                </div>
            </div>
            <div className="wrap-5">
                <Footer />
            </div>
        </>
    )
}

export default Hosting
