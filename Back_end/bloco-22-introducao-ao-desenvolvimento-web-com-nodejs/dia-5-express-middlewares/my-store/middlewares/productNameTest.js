module.exports = (req, res, next) => {
  const { productName } = req.query;
  if (!productName) { // ex 2
    throw { status: 400, message: "O campo productName é obrigatório" }    
  }

  if (productName.length < 5) { // ex 1 / 3
    throw { status: 400, message: "O campo productName deve ter pelo menos 4 caracteres" }
  }
  next();
}