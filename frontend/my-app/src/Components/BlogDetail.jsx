import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "./BlogDetail.css";

import nutri from "../assets/nutri.png";
import pms from "../assets/pms.png";
import early from "../assets/early.png";
import say from "../assets/say.png";
import hair from "../assets/hair.png";
import affect from "../assets/affect.png";
import eating from "../assets/eating.png";
import exercise from "../assets/exercise.png";
import pain from "../assets/pain.png";

const blogs = [
  {
    id: 1,
    title: "The Menstrual Cycle And Nutrition",
    image: nutri,
    content: `
      <div class='blog-layout'>
        <div class='blog-left'>
          <img src='${nutri}' alt='Menstrual Cycle & Nutrition' class='blog-image'/>
        </div>
        <div class='blog-right'>
          <h2 class='blog-title'>🩸 The Menstrual Cycle & Nutrition</h2>
          <p class='blog-text'>The menstrual cycle is divided into four phases, each requiring different nutritional support to maintain hormonal balance, reduce PMS symptoms, and promote overall well-being.</p>
        </div>
      </div>

      <h3 class='blog-title'>🌿 Phase 1: Menstrual Phase (Days 1-5)</h3>
      <p class='blog-text'>This phase begins with bleeding as the uterine lining sheds.</p>
      <h4 class='blog-subtitle'>✅ Best Foods:</h4>
      <ul class='blog-text'>
        <li>🍖 Iron-rich foods: Spinach, lentils, red meat</li>
        <li>🍊 Vitamin C: Citrus fruits, bell peppers</li>
        <li>🥥 Hydration: Coconut water, herbal teas</li>
        <li>🍫 Magnesium: Dark chocolate, bananas</li>
      </ul>
      <h4 class='blog-subtitle'>🚫 Avoid:</h4>
      <ul class='blog-text'>
        <li>❌ Caffeine & salty foods – Can worsen cramps</li>
        <li>❌ Sugary snacks – Leads to energy crashes</li>
      </ul>

      <h3 class='blog-title'>🌷 Phase 2: Follicular Phase (Days 6-14)</h3>
      <p class='blog-text'>Estrogen rises, boosting energy and mood.</p>
      <h4 class='blog-subtitle'>✅ Best Foods:</h4>
      <ul class='blog-text'>
        <li>🥚 Protein & Healthy Fats: Eggs, salmon, nuts</li>
        <li>🥬 B Vitamins: Leafy greens, dairy</li>
        <li>🥣 Whole grains: Oats, quinoa</li>
      </ul>
      <h4 class='blog-subtitle'>🚫 Avoid:</h4>
      <ul class='blog-text'>
        <li>❌ Processed foods – Can disrupt hormone production</li>
      </ul>

      <h3 class='blog-title'>🔥 Phase 3: Ovulation (Day 14)</h3>
      <p class='blog-text'>The egg is released, and estrogen peaks.</p>
      <h4 class='blog-subtitle'>✅ Best Foods:</h4>
      <ul class='blog-text'>
        <li>🎃 Zinc & Antioxidants: Pumpkin seeds, berries</li>
        <li>🐟 Omega-3s: Salmon, walnuts</li>
        <li>🥒 Hydration: Cucumbers, watermelon</li>
      </ul>
      <h4 class='blog-subtitle'>🚫 Avoid:</h4>
      <ul class='blog-text'>
        <li>❌ Excess sugar – Can cause insulin spikes</li>
      </ul>

      <h3 class='blog-title'>🌩️ Phase 4: Luteal Phase (Days 15-28)</h3>
      <p class='blog-text'>Progesterone rises, leading to PMS symptoms.</p>
      <h4 class='blog-subtitle'>✅ Best Foods:</h4>
      <ul class='blog-text'>
        <li>🍫 Magnesium: Dark chocolate, almonds</li>
        <li>🍌 Vitamin B6: Bananas, potatoes</li>
        <li>🥛 Calcium & Vitamin D: Dairy, eggs</li>
      </ul>
      <h4 class='blog-subtitle'>🚫 Avoid:</h4>
      <ul class='blog-text'>
        <li>❌ Salt – Causes bloating</li>
        <li>❌ Caffeine & alcohol – Worsen mood swings</li>
      </ul>

      <h2 class='blog-title'>💡 Additional Tips for a Healthy Cycle</h2>
      <ul class='blog-text'>
        <li>💧 Stay hydrated (2-3 liters of water daily)</li>
        <li>🏋️‍♀️ Exercise regularly (light exercise & yoga reduce cramps)</li>
        <li>🛑 Reduce processed foods for hormonal balance</li>
        <li>🍵 Drink herbal teas like chamomile & ginger tea</li>
      </ul>
    `,
  },
  {
    id: 2,
    title: "Understanding PMS And PMDD",
    image: pms,
    content: `
      <div class='blog-layout'>
        <div class='blog-left'>
          <img src='${pms}' alt='PMS & PMDD' class='blog-image'/>
        </div>
        <div class='blog-right'>
          <h2 class='blog-title'>🌸 What is PMS?</h2>
          <p class='blog-text'>Premenstrual Syndrome (PMS) is a collection of physical, emotional, and behavioral symptoms that occur 1-2 weeks before menstruation.</p>
          <h3 class='blog-title'>🩸 Common Symptoms of PMS</h3>
          <ul class='blog-text'>
            <li>✅ Mood swings, anxiety, and irritability</li>
            <li>✅ Fatigue and difficulty sleeping</li>
            <li>✅ Headaches or migraines</li>
            <li>✅ Bloating and water retention</li>
            <li>✅ Breast tenderness</li>
            <li>✅ Food cravings (especially sugar and salt)</li>
          </ul>
        </div>
      </div>

      <h2 class='blog-title'>🌩️ What is PMDD?</h2>
      <p class='blog-text'>Premenstrual Dysphoric Disorder (PMDD) is a severe form of PMS that significantly affects daily life.</p>
      <h3 class='blog-title'>🚨 Common Symptoms of PMDD</h3>
      <ul class='blog-text'>
        <li>⚠️ Severe mood swings, depression, or hopelessness</li>
        <li>⚠️ Extreme irritability and anger</li>
        <li>⚠️ Panic attacks or intense anxiety</li>
        <li>⚠️ Muscle pain, bloating, and severe cramps</li>
      </ul>
    `,
  },
  {
    id: 3,
    title: "Early Periods",
    image: early,
    content: `
      <div class='blog-layout'>
        <div class='blog-left'>
          <img src='${early}' alt='Early Periods' class='blog-image'/>
        </div>
        <div class='blog-right'>
          <h2 class='blog-title'>🩸 What Are Early Periods?</h2>
          <p class='blog-text'>Early periods refer to menstrual cycles that start sooner than the expected date. A typical cycle lasts 28 days (can range from 21-35 days), but when periods occur earlier than 21 days, it may indicate an irregularity.</p>
          <h3 class='blog-title'>🚨 Common Causes of Early Periods</h3>
          <ul class='blog-text'>
            <li><b>Hormonal Imbalance:</b> Fluctuations in estrogen and progesterone levels can lead to shorter cycles. Common in teenagers and perimenopausal women.</li>
            <li><b>Stress & Anxiety:</b> Increased cortisol (stress hormone) can disrupt the menstrual cycle. Emotional or physical stress affects hormone production.</li>
            <li><b>Diet & Lifestyle Changes:</b> Excessive caffeine, alcohol, or processed foods can affect hormone regulation. Sudden weight loss or gain impacts menstrual cycles.</li>
            <li><b>Excessive Exercise:</b> Intense workouts may reduce body fat, leading to hormonal disruptions.</li>
            <li><b>Birth Control & Medications:</b> Hormonal contraceptives, emergency pills, or certain medications can alter the cycle.</li>
            <li><b>Thyroid Disorders:</b> Both hypothyroidism (low thyroid levels) and hyperthyroidism (high thyroid levels) can impact menstruation.</li>
            <li><b>Polycystic Ovary Syndrome (PCOS):</b> PCOS may cause irregular, early, or skipped periods due to abnormal hormone levels.</li>
            <li><b>Uterine Fibroids or Polyps:</b> Non-cancerous growths in the uterus can lead to early bleeding.</li>
            <li><b>Infections:</b> Pelvic Inflammatory Disease (PID) or sexually transmitted infections (STIs) may cause abnormal spotting.</li>
            <li><b>Perimenopause:</b> Women in their late 30s or 40s may experience shorter or irregular cycles.</li>
          </ul>
        </div>
      </div>

      <h2 class='blog-title'>🔍 Effects of Early Periods</h2>
      <ul class='blog-text'>
        <li>Increased menstrual flow or spotting between periods</li>
        <li>Mood swings, anxiety, or fatigue</li>
        <li>Disruption in ovulation, affecting fertility</li>
        <li>Risk of iron deficiency (anemia) due to frequent bleeding</li>
      </ul>

      <h2 class='blog-title'>✅ How to Manage Early Periods Naturally?</h2>
      <ul class='blog-text'>
        <li><b>✔ Maintain a Balanced Diet:</b><br/>
          Eat iron-rich foods like spinach, nuts, and lentils.<br/>
          Consume healthy fats (avocados, nuts) to regulate hormones.<br/>
          Avoid excessive caffeine, alcohol, and sugar.
        </li>
        <li><b>✔ Reduce Stress:</b><br/>
          Practice yoga, meditation, or deep breathing exercises.<br/>
          Get enough sleep (7-8 hours) every night.
        </li>
        <li><b>✔ Regular Exercise (But Not Excessive!):</b><br/>
          Engage in moderate walking, swimming, or light workouts.<br/>
          Avoid excessive HIIT or strength training if affecting cycles.
        </li>
        <li><b>✔ Stay Hydrated:</b><br/>
          Drink 2-3 liters of water daily.<br/>
          Include herbal teas (ginger, chamomile) for menstrual relief.
        </li>
        <li><b>✔ Track Your Cycle:</b><br/>
          Use a menstrual tracking app to monitor irregularities.<br/>
          Note changes in flow, cycle length, and symptoms.
        </li>
        <li><b>✔ Consult a Doctor if Necessary:</b><br/>
          If early periods persist for 3+ months, seek medical advice.<br/>
          Blood tests or hormone analysis may be needed for diagnosis.
        </li>
      </ul>
    `,
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h1 className="text-center text-red-600 mt-10">Blog Not Found 😔</h1>;
  }

  return (
    <motion.div className="blog-container" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="blog-content">
        <h1 className="blog-title">{blog.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </motion.div>
  );
  
};

export default BlogDetail;
