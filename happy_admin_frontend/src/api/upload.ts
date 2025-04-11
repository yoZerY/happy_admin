import { http } from "@/utils/http";

export const uploadFile = data => {
  return http.request<any>(
    "post",
    "/upload/file",
    { data },
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );
};
