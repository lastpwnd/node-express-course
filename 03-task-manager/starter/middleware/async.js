const asyncWrapper = (arg) => {
    return async (req, res, next) => {
        try {
            await arg(req, res, next)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = asyncWrapper