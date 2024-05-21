const express = require('express')
const { unidata } = require("../data/unidata")

// module.exports.get_uni_list = async(req, res) => {
//     const get_data = unidata
//     if (get_data.length > 0) {
//         return res.json({
//             message: "List of schools in Nigeria",
//             data: get_data
//         })
//     }
//     return res.json({
//         message: "No data"
//     })
// }

module.exports.get_uni_list = async(req, res) => {
    //Extract try and catch to a middleware function in part4
    try {
        if (unidata.length > 0) {
            return res.json({
                message: "List of schools in nigeria",
                data: unidata
            })
        }
        return res.json({
            message: "NO DATA"
        })

    } catch (ex) {
        res.json({
            message: "BAD NETWORK"
        })
    }
}

module.exports.get_uni_by_id = async(req, res) => {
    const uni_id = req.params.id
    const split_input = uni_id.split(':')
    const input = Number(split_input[1])
    try {
        const id = typeof(input)
        if (id !== 'number') {
            const uni = unidata.find((z) => z.id === input)
            if (uni !== undefined) {
                return res.json({
                    message: "Uni by id",
                    data: uni
                })
            }
            return res.json({
                message: `No Item Found with id: ${input}`,
                data: []
            })

        }
        return res.status(400).json({
            message: "bad request"
        })


    } catch (ex) {
        console.log(ex)
    }

}
// Write an action controller that fetches UNI by Name