// api/users.ts
import { useApi } from "~/composables/useApi";
import type { ApiV1Response } from "~/typings/responses.typing";
interface ResponseDataBody {
  id: number;
  full_name: string;
  phone: string;
}

export const postConselingRequest = async (
  fullName: string,
  phone: string
): Promise<ApiV1Response<ResponseDataBody> | null | undefined> =>
  useApi().post<ApiV1Response<ResponseDataBody>>("/leads", {
    full_name: fullName,
    phone,
  }, {
    toast: {
      title: "ثبت درخواست مشاوره",
      message: "درخواست شما با موفقیت ثبت شد.",
    },
  });
