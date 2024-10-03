"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchBlock = catchBlock;
function catchBlock(res, err) {
    if (err instanceof Error) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
    else {
        res.status(500).json({
            success: false,
            err
        });
    }
}
