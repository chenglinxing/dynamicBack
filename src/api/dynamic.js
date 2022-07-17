import service from "../service"

/**获取动态列表 */
export const getDynamicList = (offset, size) => service.get({
    url: `/moment?offset=${offset}&size=${size}`
})

/**删除动态 */
export const deleteDynamicById = (id) =>
    service.delete({
        url:`/moment/remove/${id}`
    })

/**获取单个动态 */
export const  getOneMoment = (id) =>
    service.get({
        url:`/moment/${id}`
    })

/**查询动态 */
export const selectMoment = (data)=>
    service.post({
        data,
        url:'/moment/selectMoment'
    })