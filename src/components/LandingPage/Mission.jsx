import React from "react";
import { motion } from "framer-motion";
import imageSrc from "../assets/smiling-image.jpg"; // Fix import path

const Mission = ({ language }) => {
  const translations = {
    English: {
      title: "Our Mission",
      description: `At eVault, we are not just providing financial services; we are transforming 
      the way financial management works for people and businesses. Join us in 
      shaping a future where financial empowerment is accessible to all.`
    },
    Hausa: {
      title: "Manufarmu",
      description: `A eVault, ba wai kawai muna bayar da sabis na kudi ba, muna canza yadda 
      tsarin kula da kudi ke aiki ga mutane da kasuwanci. Ku kasance tare da mu 
      don gina wani makomar da samun damar kudi zai zama na kowa.`,
    },
    Igbo: {
      title: "Ebumnuche Anyị",
      description: `Na eVault, anyị anaghị enwe naanị ọrụ ego; anyị na-agbanwe otu esi eji ego 
      eme ihe maka ndị mmadụ na azụmaahịa. Jikọọ anyị na mmepe nke ọchịchọ gị.`,
    },
    Yoruba: {
      title: "Ise Wa",
      description: `Ni eVault, a ko nikan ni awọn iṣẹ inawo; a n ṣe iyipada bii iṣakoso owo 
      ṣe ṣiṣẹ fun awọn eniyan ati awọn iṣowo. Darapọ mọ wa ninu ẹda ọjọ 
      iwaju nibiti agbara inawo ti wa fun gbogbo eniyan.`,
    },
  };

  // Simplified animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const currentTranslation = translations[language] || translations.English;

return (
	<section className="relative min-h-screen bg-[#000B5B] text-white px-6 py-16 md:py-24 border-4 border-orange-400 rounded-md">
		{/* Background Title - Moved above and adjusted positioning */}
		<div className="text-center mb-16">
			<h2 className="text-6xl font-bold text-orange-400 transform">
				Why you should choose eVault
			</h2>
		</div>

		<div className="max-w-7xl mx-auto md:flex md:items-center md:gap-12 relative mt-12">
			{/* Image Section */}
			<motion.div
				initial="hidden"
				animate="visible"
				variants={variants}
				className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0" // Increased bottom margin
			>
				<img
					src={imageSrc}
					alt="Mission Visual"
					className="w-96 h-auto rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
				/>
			</motion.div>

			{/* Content Section - Added top margin */}
			<motion.div
				initial="hidden"
				animate="visible"
				variants={variants}
				className="w-full md:w-1/2 text-center md:text-left space-y-6 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-orange-400/50 mt-8 md:mt-0"
			>
				<h2 className="text-4xl font-bold text-orange-400">
					{currentTranslation.title}
				</h2>
				<p className="text-xl leading-relaxed">
					{currentTranslation.description.trim()}
				</p>
			</motion.div>
		</div>
	</section>
);
};

export default Mission;
