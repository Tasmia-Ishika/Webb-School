import React from "react";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Courses from "../Course/Courses";
import Admission from "./Admission/Admission";
import Banner from "./Banner/Banner";
import Navigation from "./Navigation";
import Review from './Review/Review'
import Reviews from "./Reviews/Reviews";
import Header from '../Shared/Header/Header';
import JobCourses from "./JobCourses/JobCourses";
import CoursesTabs from "./CoursesTabs";
import Hero from "./Hero/Hero";
import Promotional from "./Promotional";

const Home = () => {
  return (
    <div className="">
      <Hero></Hero>
      <Header></Header>
      <Navigation></Navigation>
      <Banner></Banner>
      <Courses></Courses>
      <Admission></Admission>
      <JobCourses></JobCourses>
      <CoursesTabs></CoursesTabs>
      <Reviews></Reviews>
      <Review></Review>
      <Promotional></Promotional>
      <MessengerCustomerChat
    pageId="101878912628102"appId="3150275291906230"
  />
    </div>
  );
};

export default Home;