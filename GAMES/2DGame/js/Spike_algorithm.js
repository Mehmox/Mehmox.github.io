function Spikecord() {
    for (let i = 0; i < 10; i++) {
        do {
            SpikeY[i] = parseInt(Math.random() * (919 - SpikeHeight));
            //Player to spike
            if (PlayerY <= SpikeY[i] && SpikeY[i] <= PlayerY + PlayerHeight + 50 || SpikeY[i] <= PlayerY && PlayerY <= SpikeY[i] + SpikeHeight + 25) { is_SpikeY_contact_PlayerY = true; }
            else { is_SpikeY_contact_PlayerY = false; }
            // //Coin to spike
            if (CoinY <= SpikeY[i] && SpikeY[i] <= CoinY + CoinHeight || SpikeY[i] <= CoinY && CoinY <= SpikeY[i] + SpikeHeight) { is_SpikeY_contact_CoinY = true; }
            else { is_SpikeY_contact_CoinY = false; }

            //Spike to spike
            for (let j = 0; j < i; j++) {
                if (SpikeY[j] <= SpikeY[i] && SpikeY[i] <= SpikeY[j] + SpikeHeight ||
                    SpikeY[i] <= SpikeY[j] && SpikeY[j] <= SpikeY[i] + SpikeHeight) { SpikeY_contact_counter++; }
            }
            if (SpikeY_contact_counter > 0) { is_SpikeY_contact_otherSpikesY = true; }
            else { is_SpikeY_contact_otherSpikesY = false; }
            SpikeY_contact_counter = 0;
            SpikeX[i] = parseInt(Math.random() * (919 - SpikeWidth));
            //Player to spike
            if (PlayerX <= SpikeX[i] && SpikeX[i] <= PlayerX + PlayerWidth + 50 || SpikeX[i] <= PlayerX && PlayerX <= SpikeX[i] + SpikeWidth + 25) { is_SpikeX_contact_PlayerX = true; }
            else { is_SpikeX_contact_PlayerX = false; }
            // //Coin to spike
            if (CoinX <= SpikeX[i] && SpikeX[i] <= CoinX + CoinWidth || SpikeX[i] <= CoinX && CoinX <= SpikeX[i] + SpikeWidth) { is_SpikeX_contact_CoinX = true; }
            else { is_SpikeX_contact_CoinX = false; }

            //Spike to spike
            for (let j = 0; j < i; j++) {
                if (SpikeX[j] <= SpikeX[i] && SpikeX[i] <= SpikeX[j] + SpikeWidth ||
                    SpikeX[i] <= SpikeX[j] && SpikeX[j] <= SpikeX[i] + SpikeWidth) { SpikeX_contact_counter++; }
            }
            if (SpikeX_contact_counter > 0) { is_SpikeX_contact_otherSpikesX = true; }
            else { is_SpikeX_contact_otherSpikesX = false; }
            SpikeX_contact_counter = 0;
        } while (is_SpikeX_contact_PlayerX || is_SpikeX_contact_CoinX || is_SpikeX_contact_otherSpikesX || is_SpikeY_contact_PlayerY || is_SpikeY_contact_CoinY || is_SpikeY_contact_otherSpikesY);
    }
}