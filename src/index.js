import app from './app';
import './database';

app.listen(app.get("port"), () => {
	console.log("\x1b[34m", `Server on port: http://localhost:${app.get("port")}`);
});
