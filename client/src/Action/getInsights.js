import * as api from '../Api';

export const getInsight = async (url) => {
    console.log("url", url);
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await api.getInsight(url);
            console.log(data);
        } catch (err) {
            reject(err)
        }
    })
}
export const allInsights = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await api.allInsights();
            console.log(data);
            resolve(data)
        } catch (err) {
            reject(err)
        }
    })
}
export const updateInsight = async (id,updateData)=>{
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await api.updateInsight(id,updateData);
            console.log(data);
            resolve(data)
        } catch (err) {
            reject(err)
        }
    })
}
export const deleteInsights = async (id) => {
    await api.deleteInsight(id);
}