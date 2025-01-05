import { industriesCompanyServe } from "../../contant";

const IndustriesWeServe = () => {
  return (
    <section className="wrapper py-[4rem]">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 text-center text-white">
          <h2 data-aos="fade-up" className="heading">
            Industries We Serve
          </h2>
          <p data-aos="fade-up" className="mt-2 description mb-3">
            We cater to a wide range of industries, delivering tailored AI and
            tech solutions to meet specific needs:
          </p>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-7">
          {industriesCompanyServe.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              className="p-5 rounded-lg shadow-lg relative group overflow-hidden min-h-[13rem]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover absolute top-0 left-0 rounded group-hover:scale-110 transition-all duration-300"
              />
              <div className="w-full h-full absolute top-0 left-0 bg-[#1e1b42a0] group-hover:bg-black/60 transition-all duration-300"></div>
              <div className="group-hover:translate-y-0 transition-all duration-300">
                <p className="group-hover:translate-y-0 translate-y-[4rem] text-center text-[1.7rem] font-bold tracking-wider relative z-10 text-white transition-all duration-300">
                  {item.title}
                </p>
                <p className="group-hover:translate-y-0 translate-y-[9rem] text-gray-800 text-md mt-2 relative z-10 group-hover:text-white transition-all duration-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
