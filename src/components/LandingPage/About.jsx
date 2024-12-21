import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaNetworkWired, FaMobileAlt, FaCreditCard } from 'react-icons/fa';

const About = ({ language }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Add default language fallback
  const currentLanguage = language || 'English';

const translations = {
	English: {
		title: "About eVault",
		description: (
			<>
				At <span className="font-bold">eVault</span>, we believe in empowering individuals and businesses by providing them with the financial tools they need to succeed. Our mission is to create an inclusive and accessible financial ecosystem that helps bridge gaps in financial management, making it easier for everyone to participate in the economy. <br /><br /> We are committed to delivering <span className="text-orange-500">secure</span>, <span className="text-orange-500">reliable</span>, and <span className="text-orange-500">efficient</span> financial solutions that cater to the diverse needs of our customers. Whether you're an individual looking for better financial security, or a business seeking innovative solutions to enhance your operations, we are here to help you navigate your financial journey.
			</>
		),
		learnMore: "Learn More"
	},
	Hausa: {
		title: "Game da eVault",
		description: (
			<>
				A <span className="font-bold"> eVault</span> Muna da yakinin cewa muna bai wa mutane da kasuwanci damar samun hanyoyin kudi masu aminci da saukin samu. Manufarmu ita ce gina tsarin hada-hadar kudi wanda zai tabbatar da samun dama ga kowa da kowa, wanda zai magance gibin da ke cikin gudanar da kudi, yana saukaka shiga cikin tattalin arziki. <br /> <br /> Muna da kwazo wajen bayar da sabis na kudi masu tsaro, masu kyau da inganci wadanda za su biya bukatun masu amfani da su. Ko kai mutum ne da ke neman tsaro mafi kyau a cikin kudi, ko kuma kasuwanci da ke neman sabbin hanyoyi don inganta ayyukansu, muna nan don taimaka maka wajen shawo kan duk wani lamari na kudi.
			</>
		),
		learnMore: "Koyi Kari"
	},
	Igbo: {
		title: "Maka eVault",
		description: (
			<>
				Na <span className="font-bold"> eVault </span> Anyị kwenyere n’inyere ndị mmadụ na azụmaahịa ikike iji nweta ihe ngwọta ego dị nchebe ma dị mfe. Ebumnobi anyị bụ iwulite usoro ego nke na-eme ka ọ dị mfe maka onye ọ bụla ịbanye n’ime akụ na ụba, iji kpochapụ ihe mgbochi ọ bụla na-arụ ọrụ akụ na ụba. <br /> <br /> Anyị kwadoro iji nyere ndị ahịa anyị usoro ego dị nchebe, kwụsie ike, na nke a pụrụ ịdabere na ya, nke na-enyere ha aka nweta mkpa ha. Ma gị bụ onye ọchụnta ego ma ọ bụ azụmaahịa, anyị dị ebe a iji nyere gị aka.
			</>
		),
		learnMore: "Mụta Karịa"
	},
	Yoruba: {
		title: "Nipa eVault",
		description: (
			<>
				Ni <span className="font-bold">eVault</span> A gbagbọ ninu agbara eniyan ati awọn iṣowo pẹlu awọn solusan inawo ti o ni aabo ati ti o rọrun lati wọle si.Aims wa ni lati ṣẹda eto inawo ti o ni wiwo gbogbo eniyan ati ti o rọrun lati wọle si, ti o ṣe iranlọwọ lati ṣe iwọn awọn ailagbara ni iṣakoso inawo, ṣiṣe ni irọrun fun gbogbo eniyan lati kopa ninu ọrọ-aje. <br /> <br /> A ni igbẹkẹle lati pese awọn solusan inawo to ni aabo, to ni igbẹkẹle ati to munadoko ti o yẹ fun awọn iwulo oriṣiriṣi ti awọn alabara wa. Boya o jẹ ẹni-kọọkan ti n wa aabo inawo ti o dara julọ, tabi iṣowo ti o n wa awọn solusan alailẹgbẹ lati mu awọn iṣẹ wọn dara si, a wa nibi lati ṣe iranlọwọ fun ọ ni irin-ajo rẹ.
			</>
		),
		learnMore: "Kẹkọ Diẹ Sii"
	}
};

  const faqItems = [
    {
      id: 1,
      icon: <FaQuestionCircle />,
      question: "Getting Started",
      answer:
        "Firstly, you need to create an account and sign in using your registered username & password.",
      color: 'blue',
    },
    {
      id: 2,
      icon: <FaNetworkWired />,
      question: "What We Offer",
      answer:
        "We support airtime conversion for all major Nigerian networks, including MTN, Glo, Airtel, and 9Mobile. Our platform ensures quick and hassle-free conversion across these networks.",
      color: 'green',
    },
    {
      id: 3,
      icon: <FaMobileAlt />,
      question: "Instant Delivery",
      answer:
        "You can easily check your data balance directly through our platform. Simply log in to your account, navigate to the data services section, and view your current data balance in real-time.",
      color: 'purple',
    },
    {
      id: 4,
      icon: <FaCreditCard />,
      question: "Place Order",
      answer:
        "Yes, we accept both recharge card pins and VTU (Virtual Top-Up) for airtime conversion. Our flexible platform supports multiple payment methods to provide you with convenient options.",
      color: 'orange',
    },
  ];

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <section id="about" className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image and Text */}
        <div className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center filter blur-lg"
            style={{
              backgroundImage: `url('https://picsum.photos/600/400?random=3')`,
            }}
          ></div>
          <div className="relative z-10 bg-white p-8 rounded-[3rem] shadow-xl">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              <span className="text-orange-500">
                {translations[currentLanguage]?.title || translations.English.title}
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {translations[currentLanguage]?.description || translations.English.description}
            </p>
            <button className="mt-6 bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all text-lg">
              {translations[currentLanguage]?.learnMore || translations.English.learnMore}
            </button>
          </div>
        </div>

        {/* Right Side - FAQ Section */}
        <div className="space-y-6">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <button
                onClick={() => toggleDropdown(item.id)}
                className={`w-full flex items-center justify-between p-4 my-4 text-left transition-all duration-300 ease-in-out rounded-2xl ${
                  activeDropdown === item.id
                    ? `bg-${item.color}-50 text-${item.color}-800`
                    : 'bg-white text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className={`text-${item.color}-500 text-2xl`}>{item.icon}</span>
                  <span className="font-medium text-lg">{item.question}</span>
                </div>
                <div className="transition-transform duration-300">
                  {activeDropdown === item.id ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeDropdown === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-4 border-t text-gray-600">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
