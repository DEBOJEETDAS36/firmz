export function Testimonials() {
  const reviews = [
    {
      quote: "Excellent service for ITR filing. The entire process was smooth, quick, and hassle-free. They explained every deduction and tax benefit clearly and filed my return on time. Highly recommended!",
      author: "Sagar Krishna Saha",
      role: "Tax Client"
    },
    {
      quote: "I was worried about my tax refund, but their expert guidance made everything easy. The return was filed correctly, and the refund process was smooth. Highly recommended!",
      author: "Priyanka Nath",
      role: "Tax Client"
    },
    {
      quote: "I have been using their services for ITR filing, GST compliance, and trademark registration. The team is knowledgeable, professional, and always available to answer queries. They complete work on time and maintain complete transparency throughout the process. I highly recommend them to anyone looking for reliable tax and legal services.",
      author: "Aftabuddin Molla",
      role: "Business Owner"
    },
    {
      quote: "One of the best tax consultancy firms for ITR filing. They provide accurate guidance, timely service, and excellent support. Truly a trustworthy team.",
      author: "Ashim Biswas",
      role: "Tax Client"
    },
    {
      quote: "They helped me with GST registration, ITR filing, and tax planning for my business. Everything was completed accurately and on time. Highly satisfied with their professionalism.",
      author: "Rohan Kureshi",
      role: "Business Owner"
    },
    {
      quote: "The team guided me through every step of the ITR filing process and ensured everything was filed correctly. Excellent customer support and reasonable fees.",
      author: "Susuma Biswas",
      role: "Tax Client"
    },
    {
      quote: "Outstanding service! They handled my ITR filing with great accuracy and professionalism. All my queries were answered patiently. Will definitely use their services again.",
      author: "Md Shezan Nazmi",
      role: "Tax Client"
    },
    {
      quote: "They helped me with GST registration. Everything was completed accurately and on time. Highly satisfied with their professionalism.",
      author: "Tuhin Biswas",
      role: "Business Owner"
    },
    {
      quote: "One of the best tax and legal consultancy firms. Honest advice, reasonable fees, and excellent customer support. I will definitely use their services again.",
      author: "Roni Poddar",
      role: "Consultancy Client"
    },
    {
      quote: "Quick response, knowledgeable professionals, and hassle-free documentation. My ITR was filed within a day. Excellent experience!",
      author: "Sk Ibrar Ali",
      role: "Tax Client"
    },
    {
      quote: "I got my trademark registered through this firm. They guided me from the trademark search to filing the application. The process was transparent and professional. Thank you!",
      author: "Gulam Ahmed Raza",
      role: "Trademark Client"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Trusted by Industry Leaders
        </h2>
        <p className="text-muted-foreground mt-4 text-sm sm:text-base">
          See what our clients say about our tax and legal consultancy services.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex width-full overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex gap-6 py-4 animate-marquee whitespace-nowrap [animation-play-state:running] hover:[animation-play-state:paused]">
          {/* Render cards twice for a seamless infinite loop */}
          {[...reviews, ...reviews].map((rev, idx) => (
            <div
              key={idx}
              className="w-[350px] shrink-0 flex flex-col justify-between rounded-xl border border-border bg-muted/20 p-6 whitespace-normal transition-all duration-300 hover:border-foreground/20 hover:bg-muted/40"
            >
              <p className="text-sm italic text-foreground leading-relaxed">
                {`"${rev.quote}"`}
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-sm text-foreground">{rev.author}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
