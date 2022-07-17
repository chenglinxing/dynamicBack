import service from "../service";

/**获取动态列表 */
export const userLogin = (data) =>
  service.post({
    url: "/login",
    data,
  });
