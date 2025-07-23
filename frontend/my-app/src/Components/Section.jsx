import React from "react";
import "./Section.css";

const Section = () => {
  return (
    <div className="container">
      
      {/* First Section */}
      <div className="section">
        <div className="image-container">
          <img src="/src/assets/image1.png" alt="Menstrual Well-being" className="section-image" />
        </div>
        <div className="text-container">
          <h2>Promoting Menstrual Well-being</h2>
          <p>
            We provide accurate information, engaging discussions, and review menstrual products.
            Our goal is to encourage open conversations and create a supportive space for individuals
            to navigate their menstrual journeys with confidence.
            <br />🌸 Dispelling myths and taboos surrounding menstruation.
            <br />Providing scientific knowledge about the menstrual cycle, hormonal changes, and reproductive health.
            <br />Encouraging open conversations in schools, workplaces, and communities.
            <br />🌿 Ensuring availability of sanitary pads, tampons, menstrual cups, and cloth pads.
            <br />Promoting sustainable and eco-friendly menstrual products to reduce environmental impact.
            <br />Addressing period poverty by making menstrual hygiene products affordable and accessible.
            <br />🏛️ Creating safe spaces for individuals to discuss their menstrual experiences without shame.
            <br />Challenging cultural and societal taboos that restrict menstruating individuals from daily activities.
            <br />Encouraging men and boys to participate in menstrual health discussions for inclusivity.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="section reverse">
        <div className="text-container">
          <h2>Ancient Vedic Knowledge</h2>
          <p>
            Unraveling the wisdom of ancient traditions and temple practices, we aim to educate
            and raise awareness about the spiritual and scientific aspects of menstruation.
            <br />🌿 In Vedic culture, menstruation was seen as a natural detoxification process where the body cleansed itself physically and energetically.
            <br />Ancient texts describe how menstruation was synchronized with the moon cycles, linking feminine energy (Shakti) with cosmic balance.
            <br />🌙 Ayurveda, the ancient Indian medical system, emphasized balance of the three doshas (Vata, Pitta, Kapha) for menstrual well-being.
            <br />Diet, herbs, and yoga were recommended to ease menstrual discomfort and support reproductive health.
            <br />Practices like Abhyanga (self-massage) and consuming cooling foods were suggested to maintain hormonal balance.
            <br />📜 Today, many are rediscovering Vedic perspectives on menstruation to break societal stigma and promote menstrual health.
            <br />The fusion of ancient wisdom with modern awareness helps individuals embrace menstruation with pride, not shame.
            <br />Reviving respectful and holistic approaches can lead to better menstrual health, emotional well-being, and empowerment.
          </p>
        </div>
        <div className="image-container">
          <img src="/src/assets/image2.png" alt="Vedic Knowledge" className="section-image" />
        </div>
      </div>

      {/* Third Section */}
      <div className="section">
        <div className="image-container">
          <img src="/src/assets/image3.png" alt="Holistic Health" className="section-image" />
        </div>
        <div className="text-container">
          <h2>Holistic Menstrual Health</h2>
          <p>
            We advocate for natural remedies, including yoga and Ayurveda, to help individuals
            manage their menstrual cycles effectively and without stigma.
            <br />🧘 Reducing stress and balancing hormones.
            <br />Improving blood circulation to the pelvic area.
            <br />Releasing tension in the lower back and abdomen.
            <br />🍎 A balanced diet supports hormonal health and reduces menstrual discomfort. Focus on:
            <br />- Iron-rich foods (spinach, lentils, dates) to replenish blood loss.
            <br />- Omega-3 fatty acids (flaxseeds, walnuts) to reduce inflammation.
            <br />- Hydration (herbal teas, coconut water) to ease bloating.
            <br />Avoid processed foods, caffeine, and excess sugar, which can worsen cramps and mood swings.
            <br />🔥 Energy Shifts During the Menstrual Cycle:
            <br />Ancient yogic texts state that during menstruation, a woman's pranic energy (life force) is directed inward.
            <br />It was advised to avoid strenuous physical activity and instead focus on self-care, meditation, and reflection.
            <br />This time was considered a period of deep connection with intuition and inner wisdom.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
