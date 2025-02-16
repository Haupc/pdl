import { CarouselItem } from "@/types/types";

const Carousel = () => {
  const listCarousel = [
    {
      id: "carousel-1",
      next: "carousel-2",
      prev: "carousel-3",
      bgUrl:
        "https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: "carousel-2",
      next: "carousel-3",
      prev: "carousel-1",
      bgUrl:
        "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: "carousel-3",
      next: "carousel-1",
      prev: "carousel-2",
      bgUrl:
        "https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80",
    },
  ];
  return (
    <div
      className="carousel relative container mx-auto"
      style={{ maxWidth: "1600px" }}
    >
      <div className="carousel-inner relative overflow-hidden w-full">
        {listCarousel.map((carousel: CarouselItem, index: number) => (
          <div key={carousel.id}>
            <input
              className="carousel-open"
              type="radio"
              id={carousel.id}
              name="carousel"
              aria-hidden="true"
              defaultChecked
              hidden
            />
            <div
              className="carousel-item absolute opacity-0"
              style={{ height: "50vh" }}
            >
              <div
                className="d-block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
                style={{
                  backgroundImage: `url(${carousel.bgUrl})`,
                }}
              >
                <div className="container mx-auto">
                  <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                    <p className="text-black text-2xl my-4">
                      Stripy Zig Zag Jigsaw Pillow and Duvet Set
                    </p>
                    <a
                      className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                      href="#"
                    >
                      View Product
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <label
              htmlFor={carousel.next}
              className={`prev control-${
                index + 1
              } w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto`}
            >
              ‹
            </label>
            <label
              htmlFor={carousel.prev}
              className={`next control-${
                index + 1
              } w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto`}
            >
              ›
            </label>
          </div>
        ))}

        <ol className="carousel-indicators">
          {listCarousel.map((carousel: CarouselItem) => (
            <li className="inline-block mr-3" key={carousel.id}>
              <label
                htmlFor={carousel.id}
                className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
              >
                •
              </label>
            </li>
          ))}
        </ol>

        {/* Additional Slides Can Be Added Here */}
      </div>
    </div>
  );
};

export default Carousel;
