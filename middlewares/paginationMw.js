module.exports.paginate = async (req, res,next) => {
  try {
    const {query: {
      page,
      results
    }} = req;

    const pagination = {
      limit: results && results <= 50 ? results : 10 ,
      offset: page && page >= 1 ? (page * results ) - results : 0 
    }

    req.pagination = pagination;

    next();
  } catch (error) {
    next(error);
  }
}