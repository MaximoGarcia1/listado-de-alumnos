require('dotenv').config()
const app = require('./src/app');
require('./src/app');
const cors = require('cors')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://listado-de-alumnos-maximogarcia.vercel.app");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.use(cors({
    
    origin:'*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))
async function  main(){
     await app.listen(app.get('port'))
    console.log('server on port', app.get('port'))
}
main();