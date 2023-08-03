import React from 'react';
import { Radio } from '@nextui-org/react';

const MarketSelection = ({ markets, selectedMarket, handleMarketChange }) => {
  return (
    <div>
      {markets.map((market) => (
        <Radio
          key={market.siteCd}
          name="market"
          label={`${market.name} (${market.siteCd})`}
          value={market.siteCd}
          checked={selectedMarket === market.siteCd}
          onChange={handleMarketChange}
        />
      ))}
    </div>
  );
};

export default MarketSelection;
