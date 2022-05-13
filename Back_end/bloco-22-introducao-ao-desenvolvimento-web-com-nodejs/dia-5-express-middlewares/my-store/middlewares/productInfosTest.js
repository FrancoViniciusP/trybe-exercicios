module.exports = (req, res, next) => {
  const { infos } = req.query;
  /* const infosKeys = Object.keys(infos);
  console.log(infos); */

  /* || typeof infosKeys !== 'object' || (!infosKeys.includes('saleDate') //ex 4 e 5
    || !infosKeys.includes('warrantyPeriod')) */

  if (!infos ) {
      throw { status: 400, message: "O campo infos é obrigatório" }
    }

  next();
}