import express = require('express')
import { MysqlConnection } from './MysqlConnection'

const mysqlConnection = new MysqlConnection()
let router = express.Router()

export default router
