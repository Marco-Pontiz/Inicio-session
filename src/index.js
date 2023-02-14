const app = require(`./server`);
require(`./databases`);

app.listen(app.get(`PORT`), () => {
    console.log(`Server on port:`, app.get(`PORT`))
})