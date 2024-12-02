import React from 'react';

const Offer = ({ language }) => {
  const content = {
    English: [
      {
        title: 'Inclusive Financial Access',
        description:
          'We ensure that everyone, regardless of location or background, has the opportunity to access modern financial services.',
      },
      {
        title: 'Reliable and Seamless Services',
        description:
          'Our focus is on providing stable and trustworthy services that streamline your financial operations.',
      },
      {
        title: 'Innovative Financial Experiences',
        description:
          'We continuously strive to innovate and improve how you manage and grow your finances.',
      },
    ],
    Hausa: [
      {
        title: 'Damar Samun Kudi Ga Kowa',
        description:
          'Muna tabbatar da cewa kowa yana da damar samun sabbin hanyoyin kudi.',
      },
      {
        title: 'Ayyuka Masu Amfani da Tsaro',
        description:
          'Muna mayar da hankali wajen samar da ayyuka masu aminci da sauki.',
      },
      {
        title: 'Hanyoyin Inganta Kudi',
        description:
          'Muna ci gaba da ƙoƙarin sabunta hanyoyin da za a sarrafa kudi.',
      },
    ],
    Igbo: [
        {
          title: 'Inweta Ego N’oge Ọ bụla',
          description:
            'Anyị na-eme ka ọ bụrụ na onye ọ bụla nwere ohere iji nweta ọrụ ego nke oge a.',
        },
        {
          title: 'Ego Nchekwa na Nchebe',
          description:
            'Anyị na-elekwasị anya n’inye ọrụ dị nchebe na nke a pụrụ ịdabere na ya.',
        },
        {
          title: 'Omenala Ịma Egwuregwu',
          description:
            'Anyị na-agbaso imepụta na mmezi ngwa ọrụ akụ na ụba.',
        },
      ],
      Yoruba: [
        {
          title: 'Ibi-afẹde Ti Inawo Fun Gbogbo eniyan',
          description:
            'A rii daju pe gbogbo eniyan ni anfaani lati wọle si awọn iṣẹ inawo igbalode.',
        },
        {
          title: 'Awọn iṣẹ To Duroṣinṣin ati To Lọrẹ',
          description:
            'A nṣe itọsọna lori gbigbe awọn iṣẹ inawo ti o dara julọ ati ti o tọ.',
        },
        {
          title: 'Iriri inawo Titun',
          description:
            'A n ṣafihan ọna tuntun ati ilọsiwaju bi a ṣe n ṣiṣẹda ati dagba awọn owo rẹ.',
        },
      ],
    // End of translations - Add more languages here
  };

  return (
    <section className="bg-gray-300 py-16 px-6 md:px-12 rounded-t-2xl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {content[language].map((offer, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-orange-500 mb-4">
                {offer.title}
              </h3>
              <p className="text-gray-700">{offer.description}</p>
            </div>
          ))}





          <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition">
            Learn More
          </button>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://picsum.photos/600/400?random=2" 
            alt="DATAVENDOR Services" 
            className="rounded-lg shadow-lg"
          />

          <div></div>

        </div>
      </div>
    </section>
  )
}

export default Offer
