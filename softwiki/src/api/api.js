let host = 'http://localhost:3030';

async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        try {
            const data = await response.json();
            return data;
        } catch (err) {
            return response;
        }
    } catch (err) {
        alert(err.message)
        throw err;
    }
};

export async function get(url, params) {
    params['method'] = 'get';
    return await request(host + `${url}`, params);
}

export async function post(url, params) {
    params['method'] = 'post';
    return await request(host + `${url}`, params);
}

export async function put(url, params) {
    params['method'] = 'put';
    return await request(host + `${url}`, params);
}

export async function remove(url, params) {
    params['method'] = 'delete';
    return await request(host + `${url}`, params);
}