import * as api from '../Api';

export const getInsight = async (url) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await api.getInsight(url);
            console.log(data);
            resolve(data)
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
            resolve(data)
        } catch (err) {
            reject(err)
        }
    })
}
export const deleteInsights = async (id) => {
    await api.deleteInsight(id);
}