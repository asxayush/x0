import proxy from "express-http-proxy"


export const proxyWithHeader = (serviceUrl) => {
    return proxy(serviceUrl, {
        proxyReqOptDecorator: (ProxyReqOpts, srcReq) => {
            if (srcReq.user) {
                ProxyReqOpts.headers["x-user-id"] = srcReq.userId
            }

        }
    })
}

