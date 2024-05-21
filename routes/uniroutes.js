const express = require('express')
const { get_uni_list, get_uni_by_id } = require('../controller/unicontroller')



module.exports = (router) => {
    //http://localhost:4000/api/unilist/v1/listofschools
    router.get("/listofschools", get_uni_list)
        //http://localhost:4000/api/unilist/v1/listofschools/:id
    router.get("/listofschools/:id", get_uni_by_id)


}