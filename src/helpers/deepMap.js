/* eslint-disable prettier/prettier */
function deepMap(obj, f) {
    if(!obj){
        return null;
    }
    if (Array.isArray(obj)) {
        return obj.map(function (val, key) {
            return typeof val === 'object' ? deepMap(val, f) : f(val, key);
        });
    } else if (typeof obj === 'object') {
        var res = {};
        for (var key in obj) {
            var val = obj[key];
            if (typeof val === 'object') {
                res[key] = deepMap(val, f);
            } else {
                res[key] = f(val, key);
            }
        }
        return res;
    }
    console.log('WTF SYNC')
    return obj;
}

export const deepMapAsync = async (obj, f) => {
    if (!obj) {
        return null;
    }
    if (Array.isArray(obj)) {
        return Promise.all(obj.map(function (val, key) {
            return typeof val === 'object' ? deepMapAsync(val, f) : f(val, key);
        }));
    } else if (typeof obj === 'object') {
        let res = {}
        const keys = Object.keys(obj);
        for (let index = 0; index < keys.length; index++)
        {
            let key = keys[index]
            let val = obj[key];
            if (typeof val === 'object') {
                res[key] = await deepMapAsync(val, f);
            } else {
                res[key] = await f(val, key);
            }
        }
        return res;
    }
    console.log('WTF SYNC')
    return obj;
};

export default deepMap;
