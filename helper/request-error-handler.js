module.exports = function(otherError) {
    return function(error, req, res, next) {
        if (error) {
            if (error instanceof SyntaxError) {
                res.status(400).json({
                    error: {
                        message: 'Invalid Json Body',
                        error: error,
                        code: 'invalid_json'
                    }
                });
                return;
            } else {
                if (otherError) {
                    otherError.error(error);
                }
                res.status(500).json({
                    error: {
                        message: 'Server Error',
                        error: otherError,
                        code: 'server_error'
                    }
                });
                return;
            }
        }
        next();
    };
};
