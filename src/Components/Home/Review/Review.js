import React from 'react';
import image1 from '../../../Assets/icon/T1.png';
import image2 from '../../../Assets/icon/s1.png';
import image3 from '../../../Assets/icon/v1.png';
import image4 from '../../../Assets/icon/ap.png';
import student from '../../../Assets/ACHIVE.png';
import './Review.css'
const Review = () => {
    return (
        <div>
            <h2 className='text-center text-black-600 font-bold text-3xl'>Our Acchievement <br /><progress className="progress w-56 progress-primary"></progress></h2>
            <div class="hero min-h-scree bg-base-100">
                <div class="hero-content flex-col lg:flex-row">
                    <img className='lg:block hidden' src={student} alt />
                    <div className='card bg-base-100 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-5'>
                        <div class="card-body">
                            <section class="hero container max-w-screen-lg mx-auto text-center pb-10">
                                <div className="teacher">
                                    <img src={image1} alt="" />
                                    <div>
                                        <h1 className='ml-5 text-black-600 font-bold text-2xl mt-2'> 500 + </h1>
                                        <h1 className='ml-5 text-black-600 font-bold text-2xl'> Teachers</h1>
                                        <div className='py-16 bg-gradient-to-r from-base-300 to-base-200 border-b border-neutral'>
                                            <h2 className='lg:text-4xl md:text-3xl text-2xl uppercase font-sub font-bold text-center'>Our Achivement</h2>

                                            <div className="hero">
                                                <div className="hero-content flex-col lg:flex-row">
                                                    <img className='hidden lg:block h-96' src={student} alt />
                                                    <div className='card lg:mx-32 grid grid-cols-2 lg:gap-14 gap-6 md:grid-cols-4 lg:grid-cols-2 mb-5'>
                                                        <div className="card-body p-0 mx-auto">
                                                            <section className="hero container max-w-screen-lg mx-auto text-center">
                                                                <div className="teacher">
                                                                    <img className='lg:w-18' src={image1} alt="" />
                                                                    <div className='lg:ml-4 ml-2'>
                                                                        <h1 className='-600 text-lg lg:text-4xl mt-2'>250+</h1>
                                                                        <h1 className='text-gray-500 lg:text-lg text-sm text-center'> Teachers</h1>

                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </div>
                                                        <div class="card-body">
                                                            <section class="hero container max-w-screen-lg mx-auto text-center pb-10">
                                                                <div className="student">
                                                                    <img src={image2} alt="" />
                                                                    <div>
                                                                        <h1 className='ml-5 text-black-600 font-bold text-2xl mt-2'>90,00,000 + </h1>
                                                                        <h1 className='ml-5 text-black-600 font-bold text-2xl'> Students </h1>
                                                                        <img className='lg:w-18' src={image2} alt="" />
                                                                        <div className='lg:ml-4 ml-2'>
                                                                            <h1 className='-600 text-lg lg:text-4xl mt-2'>1.5M+</h1>
                                                                            <h1 className='text-gray-500 lg:text-lg text-sm text-center'> Students </h1>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section >
                                                        </div >
                                                        <div class="card-body">
                                                            <section class="hero container max-w-screen-lg mx-auto text-center pb-10">
                                                                <div className="teacher">
                                                                    <img src={image4} alt="" />
                                                                    <div>
                                                                        <h1 className='ml-5 text-red-black font-bold text-2xl mt-2'>32,00,000 + </h1>
                                                                        <h1 className='ml-5 text-red-black font-bold text-2xl'>App Users </h1>
                                                                        <img className='lg:w-18' src={image4} alt="" />
                                                                        <div className='lg:ml-4 ml-2'>
                                                                            <h1 className='-600 text-lg lg:text-4xl mt-2'>1.5M+</h1>
                                                                            <h1 className='text-gray-500 lg:text-lg text-sm text-center'>Users </h1>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section >
                                                        </div >
                                                        <div class="card-body">
                                                            <section class="hero container max-w-screen-lg mx-auto text-center pb-10">
                                                                <div className="teacher">
                                                                    <img src={image3} alt="" />
                                                                    <div>
                                                                        <h1 className='ml-5 text-black-600 font-bold text-2xl mt-2'>18,000 +</h1>
                                                                        <h1 className='ml-5 text-black-600 font-bold text-2xl'>Video </h1>
                                                                        <img className='lg:w-18' src={image3} alt="" />
                                                                        <div className='lg:ml-4 ml-2'>
                                                                            <h1 className='-600 text-lg lg:text-4xl mt-2'>5K+</h1>
                                                                            <h1 className='text-gray-500 lg:text-lg text-sm text-center'>Video </h1>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section >
                                                        </div >
                                                    </div >
                                                </div >
                                            </div >
                                        </div >
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;