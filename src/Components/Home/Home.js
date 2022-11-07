import React from "react";
import FoodCard from "./FoodCard";

const Home = () => {
  return (
    <div>
      {/* banner  */}
      <div className="bg-yellow-50 ">
        <img
          className="md:w-[75%] p-6 mx-auto lg:mt-20 md:mt-16 mt-10"
          src="https://i.ibb.co/VvL0QPY/Yummi.png"
          alt=""
        />
        <h1 className="lg:text-4xl text-2xl font-bold font-serif p-4 text-center">
          Home Cooked Food Is Healthier Than Fast Food Or Takeout
        </h1>
      </div>
      {/* food section  */}
      <div>
        <FoodCard />
      </div>
      {/* recepy section  */}
      <div className="mb-16">
        <div className="text-center py-10">
          <h1 className="text-3xl font-bold font-serif mb-2">
            Customer Favorite Dish
          </h1>
          <h3 className="text-xl">Incredibly Tasty Bangladeshi Dish</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:px-[15%] px-3 gap-8">
          <div>
            <h1 className="text-3xl text-red-600 font-bold mb-10 font-serif">
              How to Make Shorshe Ilish?
            </h1>
            <h1 className="text-xl flex flex-col gap-3">
              <p>১। 750 gm. Hilsa fish (cut into 6-7 pieces)</p>
              <p>২। 1/2 teaspoon turmeric powder</p>
              <p> ৩। 1/2 tablespoon black mustard seeds</p>

              <p> ৪। 1 tablespoon yellow mustard seeds</p>

              <p> ৫। 4 large green chillies</p>

              <p>৬। 100 ml. mustard oil + a few drops to finish</p>

              <p> ৭। 1/2 teaspoon nigella seeds</p>

              <p> ৮। Salt to taste</p>
            </h1>
          </div>
          <div>
            <img
              className="rounded-[80%]"
              src="https://i.ibb.co/Xxb9GBR/A-photo-of-popular-Bengali-dish-Sorshe-Ilish-served-traditionally.jpg"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-3xl text-red-600 font-bold mb-6 font-serif">
              Process
            </h1>
            <p>
              Soak the mustard seeds in warm water for at least 1 hour,
              preferably 2. Strain and make a paste with 1/4th teaspoon salt and
              1 large green chilli. The paste should not be runny, so its ideal
              to use a sil or mortar or pestle to make this paste. <br />
              Apply salt and turmeric powder on hilsa fish. Set aside. Reserve 2
              tablespoon of the mustard oil. Heat the remaining oil. Fry the
              hilsa on both sides over medium high heat till light golden (about
              30-35 seconds per side). Remove and put them aside.
              <br />
              To the remaining mustard oil, add 1 tablespoon of the fried hilsa
              oil, and heat it over high heat till the oil is really hot but not
              smoking. Add the nigella seeds, lower the heat to a simmer, and
              immediately add the mustard paste and 1/4th teaspoon turmeric,
              followed by 1 cup water.
            </p>
          </div>
        </div>
      </div>

      {/* food review       */}
      <section  className="overflow-hidden  md:mx-[13%] bg-[url(https://i.ibb.co/JmFtVRv/image-compressed.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="max-w-lg text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Homemade food gives people ACCESS to variety
            </h2>

            <p className="hidden max-w-md text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
            You don’t have to live in a big city to be able to find good ethnic food at your disposal. The YouFeed app, the first home-cooking app of its kind to launch in the state of Wyoming, allows users to find talented, vetted home cooks in their local proximity and order meals from them! 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
