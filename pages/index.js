import React, { useEffect } from "react";
import { Button, Card } from "semantic-ui-react";
import factory from "../ethereum/factory";

const campaingIndex = (props) => {
  campaingIndex.getInitialProps = async (ctx) => {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  };
  const renderCampaigns = () => {
    let items;
    if(props.campaigns){
         items = props.campaigns.map((address) => {
            return {
              header: address,
              description: <a>View Campaign</a>,
              fluid: true,
            };
          });
    }
    

    return <Card.Group items={items} />;
  };

  return (
    <div>
      <link
        async
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
      />
      {renderCampaigns()}
      <Button
        content="Create Campaign"
        icon="add circle"
        primary
      />
    </div>
  );
};

export default campaingIndex;
