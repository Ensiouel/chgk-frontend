export default {
    methods: {
        async fetchJSON(host, params) {
            let url = new URL(host);
            url.search = new URLSearchParams(params).toString();
            return await fetch(url.toString(), {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Not 2xx response");
                    }
                    return response.json();
                })
                .catch(error => console.log(error));
            ;
        }
    }
}