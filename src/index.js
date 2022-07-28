import  app  from "./app";

async function init() {
    await app.listen(app.get('port'));
    console.log('server on port', app.get('port'));
    
}

init();