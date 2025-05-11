// composables/useCurrencies.ts
import { fetchCurrencies } from "~/api/currencies";
import type { Currency } from "~/typings/currency.typing";
import type { ApiV1Response } from "~/typings/responses.typing";

export const useCurrencies = async (): Promise<
  Ref<ApiV1Response<Currency[]> | null>
> => {
  const currencies = useState<ApiV1Response<Currency[]> | null>(
    "currencies-cache",
    () => null
  );

  if (!currencies.value) {
    const response = await fetchCurrencies();
    currencies.value = response ?? null;
  }
  return currencies;
};
