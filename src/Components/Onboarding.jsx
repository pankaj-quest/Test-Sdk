import { OnBoarding, QuestProvider } from "@questlabs/react-sdk";
import React from "react";
import { config } from "../utils/config";

const Onboarding = ({ setComponent }) => {
  const [answer, setAnswer] = React.useState([]);
  const printAnswer = (ans) => {
    console.log(ans);
  };
  return (
    <div>
      <button onClick={() => setComponent("")}>Go Back</button>
      <QuestProvider
        apiKey={config.apiKey}
        entityId={config.entityId}
        featureFlags={{}}
        apiType="STAGING"
      >
        <OnBoarding
          questId={config.OnboardingCampaignId}
          answer={answer}
          setAnswer={setAnswer}
          // token={'token'}
          // userId={'userId'}

          uniqueUserId={
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15)
          }
          progress={[
            "Professional Details",
            "Personal Details",
            "Personal Details",
            "Personal Details",
          ]}
          Headers={[
            {
              heading: "Identity Insights",
              subHeading: "Revealing dimensions beyond words",
            },
            {
              heading: "Professional Details",
              subHeading: "Tell us more about your company",
            },
            {
              heading: "Professidfghjkl.;onal Details",
              subHeading: "Tell us more about your company",
            },
            {
              heading: "Professional Details",
              subHeading: "Tell us more about your company",
            },
          ]}
          styleConfig={{
            MultiChoice: {
              // isLabel: false,
            },
          }}
          template="multi-question"
          singleChoose="modal3"
          multiChoice="modal2"
          design={[
            [1, 2, 3],
            [4, 5, 6],
          ]}
          controlBtnType="Buttons"
          getAnswers={printAnswer}
        />
      </QuestProvider>
    </div>
  );
};

export default Onboarding;
