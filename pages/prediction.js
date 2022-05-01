import MyLayout from '../component/common/layout'
import PredictGraph from '../component/predictGraph'
let avax_data = require('../data/predict_avax.json');
let ada_data = require('../data/predict_ada.json');
let bnb_data = require('../data/predict_bnb.json');
let btc_data = require('../data/predict_btc.json');
let eth_data = require('../data/predict_eth.json');
let luna_data = require('../data/predict_luna.json');
let sol_data = require('../data/predict_sol.json');
let usdc_data = require('../data/predict_usdc.json');
let usdt_data = require('../data/predict_usdt.json');
let xrp_data = require('../data/predict_xrp.json');

export default function Prediction(Props) {


  return <>
    <div>
      <PredictGraph data={avax_data} title="AVAX - Price Prediction vs Actual" />
      <br />
      <PredictGraph data={ada_data} title="ADA - Price Prediction vs Actual" />
      <br />
      <PredictGraph data={bnb_data} title="BNB - Price Prediction vs Actual" />
      <br />
      <PredictGraph data={btc_data} title="BTC - Price Prediction vs Actual" />
      <br />
      <PredictGraph data={eth_data} title="ETH - Price Prediction vs Actual" />
      <br />
      <PredictGraph data={luna_data} title="LUNA - Price Prediction vs Actual" />
      <br />
      <PredictGraph data={sol_data} title="SOL - Price Prediction vs Actual" />
      <br />
      <PredictGraph data={usdc_data} title="USDC - Price Prediction vs Actual" />
      <br />
      <PredictGraph data={usdt_data} title="USDT - Price Prediction vs Actual" />
      <br />
      <PredictGraph data={xrp_data} title="XRP - Price Prediction vs Actual" />
      <br />
    </div>
  </>
}
Prediction.getLayout = (prediction) => (
  <MyLayout number='4'>
    {prediction}
  </MyLayout>
)