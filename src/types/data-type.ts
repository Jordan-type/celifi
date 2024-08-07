import { BigNumber } from "ethers";

export  interface TokenChartData{
    prices?:[number,number][],
    market_caps?:[number,number][],
    total_volumes?:[number,number][],
}

export interface errorMessage{
    message:string,
}


export interface tokensQuotes{
    tokenIn:`0x${string}`,

    tokenOut:`0x${string}`,
    tokenAmount:string 
}

export interface tokensSwap{
    tokenIn:`0x${string}`,

    tokenOut:`0x${string}`,
    tokenInAmount:string  ,
    userAddress:`0x${string}` |  undefined,
}