// style={{ backgroundImage: "url('../../../public/assets/contactbd.jpg')" }}
const Contact = () => {
  return (
    <div
      id="contact"
      className=" py-20 bg-[#0b0c0cd9] w-full bg-cover px-4  bg-center"
    >
      <div className="md:flex md:mx-28 text-white">
        <div className="md:w-2/4">
          <h1 className="font-bold text-7xl te md:text-8xl leading-snug">
            <span className="text-gray-100">Let’s work</span> <br />
            <span className="text-gray-400">— </span>
            <span className="text-secondary"> together.</span>
          </h1>
        </div>
        <form className="w-full mt-24 md:mt-[280px] md:w-2/4 mx-auto p-6 bg-white shadow-md rounded-lg ">
          <div className="mb-4">
            <label htmlFor="fullName" className="label">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Jane Cooper"
              className="input"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="companyName" className="label">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              placeholder="Ex. Tesla Inc"
              className="input"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="label">
              Email*
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="input"
              required
            />
          </div>
          <div className="flex gap-x-5">
            <div className="mb-4 w-2/4">
              <label htmlFor="service" className="label">
                Service Required*
              </label>
              <select id="service" className="input custom-select" required>
                <option value="" selected>
                  Select Your Service
                </option>
                <option value="consulting">Consulting</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-4 w-2/4">
              <label htmlFor="budget" className="label">
                Project Budget*
              </label>
              <select id="budget" className="input custom-select" required>
                <option value="" selected>
                  Select Your Range
                </option>
                <option value="under-1000">$0 - $1,000</option>
                <option value="1000-5000">$1,000 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="over-10000">$10,000+</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="details" className="label">
              Project Details*
            </label>
            <textarea
              id="details"
              rows="4"
              placeholder="Provide details about your project..."
              className="input"
              required
            ></textarea>
          </div>

          <button type="submit" className="button">
            Request Inquiry{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
