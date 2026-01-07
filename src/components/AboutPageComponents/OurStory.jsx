export default function OurStorySection() {
        return (
            <section
            className="
                min-h-screen
                grid grid-cols-1
                lg:grid-cols-2
                px-4 lg:px-12
            "
            >
            {/* LEFT SIDE */}
            <div className="flex flex-col justify-center">
                <div className="mt-12 lg:mt-0">
                <span className="text-3xl md:text-4xl text-white block">
                    Our
                </span>
                <span className="
                    text-[4rem]
                    sm:text-[6rem]
                    lg:text-[10rem]
                    text-white font-serif leading-none
                ">
                    Story
                </span>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div
                className="
                flex flex-col
                justify-center
                gap-6
                mt-8 lg:mt-0
                lg:pr-10
                "
            >
                <p className="text-base md:text-lg text-white">
                Welcome to Kabayans Bakeshop, where freshly baked bread meets the comfort of home.
                We are a community-focused bakery dedicated to serving quality, affordable,
                and freshly made goods every day.
                </p>

                <p className="text-base md:text-lg font-light text-white">
                Our bakery began with our early ancestors and carried many different names as it
                was passed down from generation to generation. Some of them started as simple
                street vendors, working hard to save enough money to one day build something of
                their own.
                </p>

                <p className="text-base md:text-lg font-light text-white">
                In 2010, the family officially began establishing bakeries in different areas
                across Luzon and the Visayas. From that point on, they united under one name —
                Kabayan’s — a name that continues to represent our heritage, dedication,
                and passion up to the present day.
                </p>
            </div>
            </section>
        );
        }
