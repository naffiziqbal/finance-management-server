import { NextFunction, Request, RequestHandler, Response } from 'express'
import jwt from 'jsonwebtoken'
import { config } from '../../../config'

const verifyJwt: RequestHandler = (req: any, res, next) => {
    const authHeaders = req.headers.authorization
    if (!authHeaders) {
        res.status(401).json({
            success: false,
            message: "Unauthorized User"
        })
    }
    //* Get token from headers
    const token = authHeaders!.split(" ")[1]
    //* Verify token
    jwt.verify(token, config.user_secret as string, (error: any, user: any) => {
        if (error) {
            res.status(401).json({
                success: false,
                message: "Unauthorized User"
            })
        }
        req.user = user
        next()
    })
}



export default verifyJwt
