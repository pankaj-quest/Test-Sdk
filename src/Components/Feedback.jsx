import { FeedbackWorkflow, QuestProvider } from "@questlabs/react-sdk";
import React from "react";
import { config } from "../utils/config";

const Feedback = ({ isOpen, setIsOpen, setComponent }) => {
  return (
    <div>
      <button onClick={() => setComponent("")}>Go Back</button>
      <QuestProvider
        apiKey={config.apiKey}
        entityId={config.entityId}
        featureFlags={{}}
        apiType="STAGING"
      >
        <FeedbackWorkflow
          uniqueUserId={
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15)
          }
          questId={config.FeedbackCampaignId}
          showFooter={true}
          ratingStyle="Numbers"
          PrimaryButtonText="Primary Btn Text"
          SecondaryButtonText="Secondary Btn Text"
          StarSize={8}
          backBtn={true}
          backgroundColor="red"
          btnTextColor="Yellow"
          iconColor="blue"
          starBorderColor="green"
          tickBg="pink"
          starColor="brown"
          contactUrl="https://calendly.com/sriya-persana/30min"
          isOpen={isOpen}
          onClose={() => setIsOpen((prev) => !prev)}
        />
      </QuestProvider>
    </div>
  );
};

export default Feedback;
