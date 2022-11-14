module.exports = {
    async headers(){
        return[
            {
                source: '/:path*',
                headers:[
                    {key: 'Access-Control-Allow-Credentials', value: 'true'},
                    {key: 'Access-Control-Allow-Metods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'},
                    {key: 'Access-Control-Alow-Origin', value: '*'},
                    {key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With'},
                ]
            }
        ]
    }
}