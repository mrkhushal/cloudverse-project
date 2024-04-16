import React, { useState } from 'react'
// import Tabb from "./Tabb";
import ExampleComponent from './Count';
import Swich from './Swich';
import Popup from './Popup';
import Blogs from './BlogData';
import Blog from '../Blog/Blog';
import Lottie from 'lottie-react';
import hero from "../../Lottie/hero.json";

// import VTab from './Vertical-tab';


const Home = () => {


    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6 home-left">
                            <h1 className='m-h1'>Multicloud Cost Management. Reimagined.</h1>
                            <p>Quick, large-scale and simple for cloud operation teams</p>
                            <Popup />
                            <p>Supporting providers:</p>
                            <div className="imgs">
                                <img src={process.env.PUBLIC_URL + '/assets/images/alibaba.svg'} alt="logo" />
                                <img src={process.env.PUBLIC_URL + '/assets/images/aws.svg'} alt="logo" />
                                <img src={process.env.PUBLIC_URL + '/assets/images/azure.svg'} alt="logo" />
                                <img src={process.env.PUBLIC_URL + '/assets/images/cloud.svg'} alt="logo" />
                                <img src={process.env.PUBLIC_URL + '/assets/images/huawei.svg'} alt="logo" />
                            </div>
                        </div>
                        <div className="col-6">
                            <Lottie animationData={hero} loop={true} className='lottie-hero' />

                        </div>
                    </div>
                </div>
            </section>
            <ExampleComponent />
            <section className="key">
                <div className="container">
                    <div className="key-main">
                        <h2 className='m-h2 text-center'>Streamline your cloud cost management <br /> for continuous productivity</h2>
                        <div className="zic-zac">
                            <div className="row">
                                <div className="col-6">
                                    <div>
                                        <span className="tag">Cost Monitoring</span>
                                    </div>
                                    <p className='row-p'>Track and analyze costs incurred by each and every user, team, service, instance or resource type, and region across cloud environment or ecosystem with the help of AI-powered monitoring algorithms.</p>
                                </div>
                                <div className="col-6">
                                    <Lottie animationData={hero} loop={true} className='lottie-hero' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <Lottie animationData={hero} loop={true} className='lottie-hero' />
                                </div>
                                <div className="col-6">
                                    <div>
                                        <span className="tag">Cost Monitoring</span>
                                    </div>
                                    <p className='row-p'>Track and analyze costs incurred by each and every user, team, service, instance or resource type, and region across cloud environment or ecosystem with the help of AI-powered monitoring algorithms.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='swich-s'>
                <div className="container">
                    <div className="switch-main">
                        <Swich />
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="tabb">
                        {/* <Tabb/>   */}

                    </div>
                </div>
            </section>
            <section className="blogs">
                <div className="container">
                    <h2 className='text-center m-h2'>More resources</h2>
                    <div className="blog-main">
                       <Blogs/>

                    </div>
                </div>
            </section>


            <section className="blogs">
                <div className="container">
                    <h2 className='text-center m-h2'>More resources</h2>
                    <div className="blog-main">
                       {/* <VTab /> */}

                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="tabb">
                        {/* <DynamicTabsWithItems />   */}
                        {/* <Blog/> */}
                        <Blog/>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Home