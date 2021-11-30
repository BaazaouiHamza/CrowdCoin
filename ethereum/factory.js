import web3 from "./web3";
import campaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
    '0x13DD35d3C231FCc8857A3De581dD2794d6932Ac8'
);

export default instance;