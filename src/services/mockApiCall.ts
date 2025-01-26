import { giftCardData, IGiftCard } from "../assets/data";

export const mockApiCall = (): Promise<{ data: IGiftCard[] }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: giftCardData });
    }, 1000);
  });
};
