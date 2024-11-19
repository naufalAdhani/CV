import { Card } from "flowbite-react";
import picture from '../assets/img/naufal.png';
import { ReactTyped } from "react-typed";

export const Profile = () => {
    return (
        <Card className="max-w-full dark:bg-white">
            <section id="profile" className="profile container mt-2 md:mt-5">
                <div className="flex flex-col-reverse md:flex-row items-center">
                    <div className="w-full md:w-2/3 order-2 md:order-1">
                        <h3 className="font-semibold text-4xl md:text-transparan">Hi! I am</h3>
                        <ReactTyped
                            className="text-4xl md:text-5xl font-semibold text-black" // Mengubah warna teks menjadi hitam
                            strings={[
                                "Muhammad Naufal Adhani",
                                "Front End Developer"
                            ]}
                            typeSpeed={25}
                            backSpeed={50}
                            loop
                        />

                    </div>
                    <div className="w-full md:w-1/3 order-1 md:order-2 flex justify-center md:justify-end">
                        <img src={picture} alt="Potrait" className="max-w-full"/>
                    </div>
                </div>
            </section>
        </Card>
    );
}
