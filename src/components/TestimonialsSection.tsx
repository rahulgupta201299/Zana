const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "The quality is just next level. My bike has never looked or felt better. The crash guards saved my bike on a tough trail. Worth every penny.",
      name: "John D.",
      initials: "JD",
      status: "Verified Buyer"
    },
    {
      id: 2,
      text: "I was skeptical about the price, but you get what you pay for. The fit and finish of the panniers are perfect. Installation was a breeze.",
      name: "Maria S.",
      initials: "MS",
      status: "Verified Buyer"
    },
    {
      id: 3,
      text: "Customer service was fantastic. They helped me choose the right skid plate for my model, and it arrived faster than expected. Highly recommend.",
      name: "Alex L.",
      initials: "AL",
      status: "Verified Buyer"
    }
  ];

  return (
    <div className="py-8 md:py-16 px-4 md:px-6" style={{ backgroundColor: '#2a2a2a' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg md:text-5xl font-black text-white text-center mb-6 md:mb-12">
          WHAT OUR RIDERS SAY
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-lg p-4 md:p-8 flex flex-col"
              style={{ backgroundColor: '#7b7575' }}
            >
              <p className="text-white text-xs md:text-base leading-relaxed mb-4 md:mb-8 flex-grow">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <span className="text-black font-bold text-sm md:text-xl">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-white/90 text-xs md:text-sm">{testimonial.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;