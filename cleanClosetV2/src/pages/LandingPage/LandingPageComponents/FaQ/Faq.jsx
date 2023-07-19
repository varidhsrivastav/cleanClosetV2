
import "./Faq.css";
const TutroFaq = [
  {
    number: "01",
    question: " What types of clothing can I donate?",
    answer:
      " We accept all types of gently used clothing, including men's, women's, and children's clothing, as well as shoes, accessories, and outerwear. We ask that all clothing items be clean and in good condition.",
  },
  {
    question:
      " How do I donate my clothing?",
    answer:
      " You can donate your clothing by visiting our website and filling out the donation form. We will provide instructions on how to package and send your donations to us.",
  },
  {
    question: " Where does my donated clothing go?",
    answer:
      "Your donated clothing will be distributed to local charities and organizations that support individuals and families in need. We work with a network of partners to ensure that your donations go directly to those who need them most.",
  },
  {
    question: "Can I get a tax deduction for my clothing donation?",
    answer:
      "Yes, you may be able to claim a tax deduction for your clothing donation. We will provide a receipt for your donation, which you can use as documentation for your tax deduction. Please consult with your tax advisor for specific information about tax deductions."
  },
  {
    question:
      " Is my personal information secure when I donate on CleanCloset?",
    answer:
      " Yes, we take the privacy and security of your personal information very seriously. We use industry-standard encryption to protect your information and will not share your information with any third parties without your consent.",
  },
];

const Accordian = ({ data, heading }) => {
  const [active, setActive] = useState(0);
  const clickHandler = (index) => {
    if (index === active) {
      setActive(0);
      return;
    }
    setActive(index);
  };
  return (
    <div className="accordiancontainer">
      <h1 className="accordianheading">{heading}</h1>
    <hr />
      {data.map((item, index) => (
        <div className="AccordianActive">
        <div key={index} className="accordian"
        >
          <div
            className={index + 1 === active ? "question active" : "question"}
            onClick={() => {
              clickHandler(index + 1);
            }}
          >
            {/* <i
              className={
                index + 1 === active
                  ? "questiontriagnleicon fa-solid fa-angle-up"
                  : "questiontriagnleicon fa-solid fa-angle-down"
              }
            ></i> */}
            <div className="FaqQuestions">
            <span className="FAQnumber"><h1>0{index + 1}</h1></span> 
              {" "}
                <h2>{item.question}</h2>
            </div>
          </div>
          <div className={index + 1 === active ? "answer show" : "answer"}>
            <p className="FAQAns">
              {" " + item.answer}
            </p>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};
const Faq = () => {
  return (
    <div className="FaqMainContainer">
      <div className="FaqContainer container">
        <div className="allaccordians">
          <Accordian data={TutroFaq} heading="FAQ" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
