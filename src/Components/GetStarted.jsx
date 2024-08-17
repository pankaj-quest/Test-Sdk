import { QuestProvider, GetStarted as GetStarted2 } from "@questlabs/react-sdk";
import React from "react";
import { config } from "../utils/config";

const GetStarted = ({ setComponent }) => {
  return (
    <div > 
        <button onClick={() => setComponent("") }> Go Back</button>
      <QuestProvider
        apiKey={config.apiKey}
        entityId={config.entityId}
        featureFlags={{}}
        apiType="STAGING"
      >
        <GetStarted2
          questId={config.GetStartedCampaignId}
          isImageOpen={false}
          cardBackground="yellowGreen"
          cardBorderColor="red"
          uniqueUserId={
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15)
          }
          allowMultiClick={false}
          autoHide={false}
          headingText="What’s new"
          onCompleteAllStatus={() => {
            // showToast.success({ text: "completed successfully" })
          }}
          template={2}
          showLoadingIndicator={true}
          showProgressBar
          showFooter={false}
          ButtonType="Buttons"
          isAutoVerify={true}
        />
      </QuestProvider>
    </div>
  );
};

export default GetStarted;
