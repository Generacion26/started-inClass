import app from "./app.js"
import sequelize from "./utils/conection.js"

const port = process.env.PORT || 8080

const main = () => {
  try {
    app.listen(port, () => {
      console.log(`Your app listening on port: ${port} 🎉 - Click here: http://localhost:${port}  ✅`)
    })
    sequelize.sync()
    console.log("Base de dato sincronizada ✅");

  }
  catch (error) {
    console.error("An error ocurred ❌", error);
  }
}

main()