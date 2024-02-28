import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MacDemo from "@/components/MacDemo";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebniars from "@/components/UpcomingWebniars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
            <HeroSection />
            <MacDemo />
            <FeaturedCourses />
            <WhyChooseUs />
            <TestimonialCards />
            <UpcomingWebniars />
            <Instructors />
        </main>
    );
}
