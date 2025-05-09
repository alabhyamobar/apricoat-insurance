import React, { createContext, useState } from 'react';

export const TeamProvider = createContext();
const TeamContext = ({children}) => {
    const [teamMembers , setteamMembers] = useState([
        {
            id: 1,
            name: "Mayank Saxena",
            role: "Managing Director & Principal Officer",
            description: "As the Managing Director and Principal Officer of Apricoat Insurance, Mayank Saxena brings visionary leadership and deep industry expertise to the organization. He oversees strategic planning, regulatory compliance, and overall business growth. His commitment to excellence and client-centric values drives the company's mission to provide reliable and innovative insurance solutions, especially in the marine and fire sectors.",
            // image: "https://via.placeholder.com/150"
          },
          {
            id: 2,
            name: "Shaifali Saxena",
            role: "On Board Director",
            description: "Shaifali Saxena serves as the On Board Director at Apricoat Insurance, where she plays a pivotal role in orchestrating and streamlining the onboarding experience for both clients and new employees. With an unwavering commitment to excellence and precision, she ensures that every interaction is tailored, timely, and transparent. Her strategic approach bridges operational efficiency with a human touch, making sure that every stakeholder—from first-time policyholders to newly hired team members—feels informed, welcomed, and empowered. Under her leadership, the onboarding process at Apricoat has evolved into a benchmark of trust, clarity, and confidence, setting the tone for long-term relationships and successful collaborations.
            //image: "https://via.placeholder.com/150"
          },
          {
            id: 3,
            name: "Pratyush Mishra",
            role: "Business Development Executive (BDE)",
            description: "Pratyush plays a vital role in expanding Apricoat Insurance’s reach by spearheading strategic partnerships and uncovering new avenues for sustainable growth. With a deep understanding of market dynamics and customer behavior, he actively forges alliances that enhance our service offerings and open doors to new client segments. His visionary leadership drives forward our client engagement strategies, ensuring Apricoat remains agile, innovative, and responsive to the evolving insurance landscape. Pratyush is instrumental in aligning our business development goals with customer-centric solutions, allowing us to build trust, deliver value, and maintain a strong presence in an ever-competitive industry."            // image: "https://via.placeholder.com/150"
          },
          {
            id: 4,
            name: "Our Associates",
            role: "Sales Person",
            description: "At Apricoat Insurance, our 14 dedicated associates form the backbone of our operations. With diverse expertise across underwriting, client servicing, claims processing, policy documentation, and support services, they work diligently to uphold our commitment to excellence. Each associate is trained to deliver prompt, accurate, and empathetic assistance, ensuring that our clients receive the best possible support at every stage of their insurance journey. Their professionalism and collaborative spirit drive our mission to build trust, security, and lasting relationships.",
            // image: "https://via.placelder.com/150"
          },
    ])
    
  return (
    <TeamProvider.Provider value = { [teamMembers , setteamMembers] }>
      {children}
    </TeamProvider.Provider>
  )
}

export default TeamContext
